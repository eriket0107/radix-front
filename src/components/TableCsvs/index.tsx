'use client'

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Card } from '../ui/card'
import { useGetCSVFiles } from '@/hooks/useGetCsvFiles'
import { Skeleton } from '../ui/skeleton'

const TableSkeleton = () => {
  return (
    <TableRow className="bg-gray-100">
      <TableCell className="bg-gray-200 hover:bg-gray-50">
        <Skeleton className="h-4 w-[150px]" />
      </TableCell>
      <TableCell className="bg-gray-200 hover:bg-gray-50">
        <Skeleton className="h-4 w-[150px]" />
      </TableCell>
      <TableCell className="bg-gray-200 hover:bg-gray-50">
        <Skeleton className="h-4 w-[150px]" />
      </TableCell>
    </TableRow>
  )
}

export const TableCsvs = () => {
  const { data, hasData, isLoading } = useGetCSVFiles()
  console.log({ data })
  return (
    <Card className="h-max[500px] w-[600px] overflow-auto rounded-t-none pb-4">
      <Table>
        <TableCaption>Lista de Arquivos CSV</TableCaption>
        <TableHeader>
          <TableRow className="border-separate">
            <TableHead className="w-[200px]">ID</TableHead>
            <TableHead className="w-[200px]">Caminho</TableHead>
            <TableHead className="w-[200px]">Nome do arquivo</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="w-[600px]">
          {isLoading && <TableSkeleton />}
          {!isLoading &&
            data?.map((csvFile) => (
              <TableRow className="w-[600px] bg-gray-100" key={csvFile.id}>
                <TableCell className="bg-gray-200 hover:bg-gray-50">
                  {csvFile.id}
                </TableCell>
                <TableCell className="bg-gray-200 hover:bg-gray-50">
                  {csvFile.path}
                </TableCell>
                <TableCell className="bg-gray-200 hover:bg-gray-50">
                  {csvFile.fileName}
                </TableCell>
              </TableRow>
            ))}
          {!isLoading && !hasData && (
            <TableRow className="w-[600px] bg-gray-100">
              <TableCell className="bg-gray-200 hover:bg-gray-50">
                Nenhum arquivo encontrado
              </TableCell>
              <TableCell className="bg-gray-200 hover:bg-gray-50" />
              <TableCell className="bg-gray-200 hover:bg-gray-50" />
            </TableRow>
          )}
        </TableBody>
      </Table>
    </Card>
  )
}
