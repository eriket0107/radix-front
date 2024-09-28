import { CsvFiles, MeanByPeriod } from '@/@types'
import { Chart } from '@/components/Chart'
import { FormCsv } from '@/components/FormCsv'
import { ViewCsv } from '@/components/ViewCsv'
import { api } from '@/lib/axios'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@radix-ui/react-tabs'
const getSensorData = async () => {
  const { data: meanByPeriod } = await api.get<MeanByPeriod>('/mean-by-period')
  const { data: csvFiles } = await api.get<CsvFiles>('/list-csv')

  return {
    csvFiles,
    meanByPeriod,
  }
}

export default async function SensorData() {
  const { csvFiles, meanByPeriod } = await getSensorData()

  return (
    <div className="h-[900px] items-center justify-items-center gap-16 p-8 pb-20 ">
      <Tabs defaultValue="csv" className="pb w-[400px] rounded-md pb-4 ">
        <TabsList className="grid w-[600px]  grid-cols-2 items-center rounded-t-md bg-gray-100">
          <TabsTrigger
            value="csv"
            className="border-r-[1px] hover:rounded-tl-md hover:bg-slate-200"
          >
            CSV
          </TabsTrigger>
          <TabsTrigger
            value="graph"
            className="border-tr-[1px] hover:rounded-tr-md hover:bg-slate-200"
          >
            Gráfico
          </TabsTrigger>
        </TabsList>

        <TabsContent value="graph">
          <Chart chartData={meanByPeriod} />
        </TabsContent>
        <TabsContent value="csv" className="flex flex-col gap-4">
          <ViewCsv data={csvFiles} />
          <FormCsv />
        </TabsContent>
      </Tabs>
    </div>
  )
}
