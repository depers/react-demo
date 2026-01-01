import { Button, Card, Descriptions } from 'antd'
import * as echarts from 'echarts'
import styles from './index.module.less'
import { useEffect } from 'react'

export default function DashBoard() {
  useEffect(() => {
    const lineChartDom = document.getElementById('lineChart')
    const chartInstance = echarts.init(lineChartDom as HTMLElement)
    chartInstance.setOption({
      tooltip: {
        trigger: 'axis'
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
  }, [])
  const userInfo = {
    userImg: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    userId: 'depers',
    userEmail: 'dev_fengxiao@163.com',
    state: '在职',
    mobile: '13200001111',
    job: '前端工程师',
    deptName: '大前端'
  }
  return (
    <div className={styles.dashboard}>
      <div className={styles.userInfo}>
        <img src={userInfo.userImg} className={styles.userImg} />
        <Descriptions title='欢迎新同学，每天都要开心！'>
          <Descriptions.Item label='用户ID'>{userInfo.userId}</Descriptions.Item>
          <Descriptions.Item label='邮箱'>{userInfo.userEmail}</Descriptions.Item>
          <Descriptions.Item label='状态'>{userInfo.state}</Descriptions.Item>
          <Descriptions.Item label='手机号'>{userInfo.mobile}</Descriptions.Item>
          <Descriptions.Item label='岗位'>{userInfo.job}</Descriptions.Item>
          <Descriptions.Item label='部门'>{userInfo.deptName}</Descriptions.Item>
        </Descriptions>
      </div>
      <div className={styles.report}>
        <div className={styles.card}>
          <div className='title'>司机数量</div>
          <div className={styles.data}>1000个</div>
        </div>
        <div className={styles.card}>
          <div className='title'>总流水</div>
          <div className={styles.data}>1000元</div>
        </div>
        <div className={styles.card}>
          <div className='title'>总订单</div>
          <div className={styles.data}>1000单</div>
        </div>
        <div className={styles.card}>
          <div className='title'>开通城市</div>
          <div className={styles.data}>1000座</div>
        </div>
      </div>
      <div className={styles.chart}>
        <Card title='订单和流水走势图' extra={<Button type='primary'>刷新</Button>}>
          <div id='lineChart' className={styles.itemChart}></div>
        </Card>
      </div>
      <div className={styles.chart}>
        <Card title='司机分布' extra={<Button type='primary'>刷新</Button>}>
          <div id='pieChartCity' className={styles.itemPie}></div>
          <div id='pieChartAge' className={styles.itemPie}></div>
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
