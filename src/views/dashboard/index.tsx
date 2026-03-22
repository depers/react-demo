import { Button, Card, Descriptions } from 'antd'
import styles from './index.module.less'
import { useEffect, useState } from 'react'
import { useStore } from '@/store'
import { formatMoney, formatNum, formatState } from '@/utils'
import api from '@/api'
import type { Dashboard } from '@/types/api'
import { useCharts } from '@/hook/useCharts'

export default function DashBoard() {
  const userInfo = useStore(state => state.userInfo)

  const [reportData, setReportData] = useState<Dashboard.ReportData>()

  const [lineRef, lineChart] = useCharts()
  const [pieChartRef1, pieChartCity] = useCharts()
  const [pieChartRef2, pieChartAge] = useCharts()
  const [radarRef, racarChart] = useCharts()

  useEffect(() => {
    renderLineChart()
    renderPieChart()
    renderpieChartAge()
    renderRadarChart()
  }, [lineChart, pieChartCity, pieChartAge, racarChart])

  const renderLineChart = async () => {
    if (!lineChart) return
    const data = await api.getLineData()
    lineChart?.setOption({
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['订单', '流水'],
        top: 'top', // 或者设置为 top: 0, top: '5%'
        left: 'center' // 确保图例在水平方向上居中
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        data: data.label
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: '订单',
          data: data.order,
          type: 'line'
        },
        {
          name: '流水',
          data: data.money,
          type: 'line'
        }
      ]
    })
  }

  const renderPieChart = async () => {
    if (!pieChartCity) return
    const data = await api.getPieCityData()
    pieChartCity?.setOption({
      title: {
        text: '司机城市分布图',
        left: 'center'
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        left: 'left'
      },
      series: [
        {
          name: '城市分布',
          type: 'pie',
          radius: '50%',
          data
        }
      ]
    })
  }

  // 加载饼图2
  const renderpieChartAge = async () => {
    if (!pieChartAge) return
    const data = await api.getPieAgeData()
    pieChartAge?.setOption({
      title: {
        text: '司机年龄分布',
        left: 'center'
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        left: 'left'
      },
      series: [
        {
          name: '年龄分布',
          type: 'pie',
          radius: [50, 180],
          roseType: 'area',
          data
        }
      ]
    })
  }

  // 加载雷达图
  const renderRadarChart = async () => {
    if (!racarChart) return
    const data = await api.getRadarData()
    racarChart?.setOption({
      title: {
        text: '司机模型诊断'
      },
      legend: {
        data: ['司机模型诊断']
      },
      radar: {
        indicator: data.indicator
      },
      series: [
        {
          name: '模型诊断',
          type: 'radar',
          data: data.data
        }
      ]
    })
  }

  // 刷新饼图
  const handleRefresh = () => {
    renderPieChart()
    renderpieChartAge()
  }

  useEffect(() => {
    getReportData()
  }, [])

  const getReportData = async () => {
    const data = await api.getReportData()
    setReportData(data)
  }

  return (
    <div className={styles.dashboard}>
      <div className={styles.userInfo}>
        <img src={userInfo.userImg} className={styles.userImg} />
        <Descriptions title='欢迎新同学，每天都要开心！'>
          <Descriptions.Item label='用户ID'>{userInfo.userId}</Descriptions.Item>
          <Descriptions.Item label='邮箱'>{userInfo.userEmail}</Descriptions.Item>
          <Descriptions.Item label='状态'>{formatState(userInfo.state)}</Descriptions.Item>
          <Descriptions.Item label='手机号'>{userInfo.mobile}</Descriptions.Item>
          <Descriptions.Item label='岗位'>{userInfo.job}</Descriptions.Item>
          <Descriptions.Item label='部门'>{userInfo.deptName}</Descriptions.Item>
        </Descriptions>
      </div>
      <div className={styles.report}>
        <div className={styles.card}>
          <div className='title'>司机数量</div>
          <div className={styles.data}>{formatNum(reportData?.driverCount)}个</div>
        </div>
        <div className={styles.card}>
          <div className='title'>总流水</div>
          <div className={styles.data}>{formatMoney(reportData?.totalMoney)}元</div>
        </div>
        <div className={styles.card}>
          <div className='title'>总订单</div>
          <div className={styles.data}>{formatNum(reportData?.orderCount)}单</div>
        </div>
        <div className={styles.card}>
          <div className='title'>开通城市</div>
          <div className={styles.data}>{formatNum(reportData?.cityNum)}座</div>
        </div>
      </div>
      <div className={styles.chart}>
        <Card
          title='订单和流水走势图'
          extra={
            <Button type='primary' onClick={renderLineChart}>
              刷新
            </Button>
          }
        >
          <div ref={lineRef} className={styles.itemChart}></div>
        </Card>
      </div>
      <div className={styles.chart}>
        <Card
          title='司机分布'
          extra={
            <Button type='primary' onClick={handleRefresh}>
              刷新
            </Button>
          }
        >
          <div className={styles.pieChart}>
            <div ref={pieChartRef1} className={styles.itemPie}></div>
            <div ref={pieChartRef2} className={styles.itemPie}></div>
          </div>
        </Card>
      </div>
      <div className={styles.chart}>
        <Card
          title='模型诊断'
          extra={
            <Button type='primary' onClick={renderRadarChart}>
              刷新
            </Button>
          }
        >
          <div ref={radarRef} className={styles.itemChart}></div>
        </Card>
      </div>
    </div>
  )
}
