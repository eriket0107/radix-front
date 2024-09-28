import { MeanByPeriod } from '@/@types'
import { Chart } from '@/components/Chart'
// import { ViewCsv } from '@/components/ViewCsv'
import { api } from '@/lib/axios'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@radix-ui/react-tabs'

const getSensorData = async () => {
  const { data: meanByPeriod } = await api.get<MeanByPeriod>('/mean-by-period')
  console.log(meanByPeriod)
  return meanByPeriod
}

export default async function SensorData() {
  const meanByPeriod = await getSensorData()

  return (
    <div className="h-[900px] items-center justify-items-center gap-16 p-8 pb-20">
      <Tabs defaultValue="graph" className="pb w-[400px] rounded-md pb-4">
        <TabsList className="grid w-[600px]  grid-cols-3 items-center rounded-t-md bg-gray-100">
          <TabsTrigger
            value="graph"
            className="border-tl-[1px] hover:rounded-tl-md hover:bg-slate-200"
          >
            Gráfico
          </TabsTrigger>
          <TabsTrigger
            value="csv"
            className="border-l-[1px]  hover:bg-slate-200"
          >
            CSV
          </TabsTrigger>
          <TabsTrigger
            value="action"
            className="border-l-[1px] hover:rounded-tr-md hover:bg-slate-200"
          >
            Seed
          </TabsTrigger>
        </TabsList>

        <TabsContent value="graph">
          <Chart chartData={meanByPeriod} />
        </TabsContent>
        <TabsContent value="csv">{/* <ViewCsv /> */}</TabsContent>
      </Tabs>
    </div>
  )
}
