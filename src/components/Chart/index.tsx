'use client'

import { Bar, BarChart, CartesianGrid, LabelList, XAxis, YAxis } from 'recharts'
import { TrendingUp } from 'lucide-react'
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'
import { MeanByPeriod } from '@/@types'
import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card'

const chartConfig = {
  mean: {
    label: 'Valor médio ',
    color: '#60a5fa',
  },
} satisfies ChartConfig

export const Chart = ({ chartData = [] }: { chartData: MeanByPeriod }) => {
  console.log(chartData)
  return (
    <Card className="w-[600px] rounded-t-none">
      <CardHeader>
        <CardTitle className="flex gap-1">
          Valores médios <TrendingUp />
        </CardTitle>
        <CardDescription>Por período</CardDescription>
      </CardHeader>

      <ChartContainer
        config={chartConfig}
        className="min-h-[200px] w-[600px] rounded-sm"
      >
        <BarChart accessibilityLayer data={chartData}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="period"
            tickLine={false}
            tickMargin={10}
            axisLine={true}
            tickFormatter={(value) => value}
          />
          <YAxis
            type="number"
            dataKey="mean"
            tickLine={true}
            tickMargin={10}
            axisLine={true}
            tickFormatter={(value) => value}
            domain={[0, 100]}
          />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar dataKey="mean" fill="#60a5fa" radius={4}>
            <LabelList
              position="top"
              offset={12}
              className="fill-foreground"
              fontSize={12}
            />
          </Bar>
        </BarChart>
      </ChartContainer>
    </Card>
  )
}
