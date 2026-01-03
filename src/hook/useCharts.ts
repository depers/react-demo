import * as echarts from 'echarts'
import { useEffect, useRef, useState, type RefObject } from 'react'

export const useCharts = (): [RefObject<HTMLDivElement|null>, echarts.EChartsType | undefined] => {
  // 组件第一次render时，DOM 还没挂载current 一定是 null，所以这里初始化为null
  const chartRef = useRef<HTMLDivElement>(null)
  const [chartInstance, setChartInstance] = useState<echarts.EChartsType>()
  useEffect(() => {
    // 当渲染完成再初始化echarts
    const chart = echarts.init(chartRef.current as HTMLElement)
    setChartInstance(chart)
  }, [])

  return [chartRef, chartInstance]
}
