import { MeanByPeriod } from '@/@types'
import { Card } from '@/components/ui/card'
import { api } from '@/lib/axios'

const getSensorData = async () => {
  const { data: sensorData } = await api.get<MeanByPeriod>('/mean-by-period')
  console.log(sensorData)
  return sensorData
}

export default async function SensorData() {
  const meanByPeriod = await getSensorData()
  // console.log(meanByPeriod)
  return (
    <div className="h-[900px] items-center justify-items-center gap-16 p-8 pb-20">
      <Card>
        TEste
        <pre className="text-xs text-black">
          {meanByPeriod.map((item) => JSON.stringify(item))}
        </pre>
      </Card>
    </div>
  )
}
