import { Card } from '@/components/ui/card'

export async function generateStaticParams() {
  return [
    {
      id: 'sensor-data',
    },
  ]
}

export default async function SensorData() {
  return (
    <div className="h-[900px] items-center justify-items-center gap-16 p-8 pb-20">
      <Card>Chart</Card>
    </div>
  )
}
