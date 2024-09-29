export type PeriodMean = {
  period: string
  mean: string
}

export type MeanByPeriod = PeriodMean[]

export type CsvFile = {
  id: string
  createdAt: string
  updatedAt: string
  fileName: string
  path: string
}

export type CsvFiles = {
  csvFiles: CsvFile[]
}

export type User = {
  id: string
  name: string
  email: string
  role: string
}
