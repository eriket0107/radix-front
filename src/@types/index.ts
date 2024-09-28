export type PeriodMean = {
  period: string
  mean: string
}

export type MeanByPeriod = PeriodMean[]

type CsvFile = {
  id: string
  createdAt: string
  updatedAt: string
  fileName: string
  path: string
}

export type CsvFiles = {
  csvFiles: CsvFile[]
}
