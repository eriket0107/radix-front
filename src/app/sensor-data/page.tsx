import { ChartMeanByPeriod } from '@/components/ChartMeanByPeriod'
import { FormCsv } from '@/components/FormInputCsv'
import { TableCsvs } from '@/components/TableCsvs'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@radix-ui/react-tabs'

export default async function SensorData() {
  return (
    <div className="flex  w-full flex-col items-center justify-center">
      <Tabs
        defaultValue="csv"
        className="h-min-[900px]   w-[600px] rounded-md pb-4 "
      >
        <TabsList className="grid w-[600px]  grid-cols-2 items-center rounded-t-md bg-gray-100">
          <TabsTrigger
            value="csv"
            className="border-r-[1px] p-2 hover:rounded-tl-md  hover:bg-slate-200"
          >
            CSV
          </TabsTrigger>
          <TabsTrigger
            value="graph"
            className="border-tr-[1px] p-2 hover:rounded-tr-md  hover:bg-slate-200"
          >
            Gráfico
          </TabsTrigger>
        </TabsList>

        <TabsContent value="graph">
          <ChartMeanByPeriod />
        </TabsContent>
        <TabsContent value="csv" className="flex flex-col">
          <TableCsvs />
        </TabsContent>
      </Tabs>
      <FormCsv />
    </div>
  )
}
