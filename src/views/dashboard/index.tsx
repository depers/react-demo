import { Button, Card, Descriptions } from 'antd'
import * as echarts from 'echarts'
import styles from './index.module.less'
import { useEffect, useState } from 'react'
import { useStore } from '@/store'
import { formatMoney, formatNum, formatState } from '@/utils'
import api from '@/api'
import type { Dashboard } from '@/types/api'

export default function DashBoard() {
  const userInfo = useStore(state => state.userInfo)

  const [reportData, setReportData] = useState<Dashboard.ReportData>()

  useEffect(() => {
    const lineChartDom = document.getElementById('lineChart')
    const chartInstance = echarts.init(lineChartDom as HTMLElement)
    chartInstance.setOption({
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
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: '订单',
          data: [150, 230, 224, 218, 135, 147, 260, 150, 230, 224, 218, 135],
          type: 'line'
        },
        {
          name: '流水',
          data: [250, 330, 324, 318, 235, 247, 360, 250, 330, 324, 318, 235],
          type: 'line'
        }
      ]
    })

    const pieChartCityDom = document.getElementById('pieChartCity')
    const pieChartCityInstance = echarts.init(pieChartCityDom as HTMLElement)
    pieChartCityInstance.setOption({
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
          data: [
            { value: 1048, name: '北京' },
            { value: 735, name: '上海' },
            { value: 580, name: '广州' },
            { value: 484, name: '武汉' },
            { value: 300, name: '杭州' }
          ]
        }
      ]
    })

    const pieChartAgeDom = document.getElementById('pieChartAge')
    const pieChartAgeInstance = echarts.init(pieChartAgeDom as HTMLElement)
    pieChartAgeInstance.setOption({
      title: {
        text: '司机年龄分布图',
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
          radius: [30, 150],
          roseType: 'area',
          data: [
            { value: 1048, name: '北京' },
            { value: 735, name: '上海' },
            { value: 580, name: '广州' },
            { value: 484, name: '武汉' },
            { value: 300, name: '杭州' }
          ]
        }
      ]
    })

    const radarChartDom = document.getElementById('radarChart')
    const radarChartInstance = echarts.init(radarChartDom as HTMLElement)
    radarChartInstance.setOption({
      title: {
        text: '司机模型诊断'
      },
      legend: {
        data: ['司机模型诊断']
      },
      radar: {
        // shape: 'circle',
        indicator: [
          { name: '服务态度' },
          { name: '在线时长' },
          { name: '接单率' },
          { name: '评分' },
          { name: '关注度' }
        ]
      },
      series: [
        {
          name: '模型诊断',
          type: 'radar',
          data: [
            {
              value: [4200, 3000, 20000, 35000, 40000],
              name: '司机模型诊断'
            }
          ]
        }
      ]
    })
  }, [])

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
          <div className={styles.data}>{formatNum(reportData?.cityCount)}座</div>
        </div>
      </div>
      <div className={styles.chart}>
        <Card title='订单和流水走势图' extra={<Button type='primary'>刷新</Button>}>
          <div id='lineChart' className={styles.itemChart}></div>
        </Card>
      </div>
      <div className={styles.chart}>
        <Card title='司机分布' extra={<Button type='primary'>刷新</Button>}>
          <div className={styles.pieChart}>
            <div id='pieChartCity' className={styles.itemPie}></div>
            <div id='pieChartAge' className={styles.itemPie}></div>
          </div>
        </Card>
      </div>
      <div className={styles.chart}>
        <Card title='模型诊断' extra={<Button type='primary'>刷新</Button>}>
          <div id='radarChart' className={styles.itemChart}></div>
        </Card>
      </div>
    </div>
  )
}
