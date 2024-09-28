import { CsvFiles } from '@/@types'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

export const ViewCsv = ({ data }: { data: CsvFiles }) => {
  const { csvFiles } = data
  const hasData = csvFiles.length > 0

  return (
    <div className="w-[600px]">
      <Table>
        <TableCaption>Lista de Arquivos CSV</TableCaption>
        <TableHeader>
          <TableRow className="border-separate">
            <TableHead className="w-[200px] border-separate">ID</TableHead>
            <TableHead className="w-[200px]">Caminho</TableHead>
            <TableHead className="w-[200px]">Nome do arquivo</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="w-[600px]">
          {hasData ? (
            csvFiles.map((csvFile) => (
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
            ))
          ) : (
            <TableRow className="w-[600px] bg-gray-100">
              <TableCell className="bg-gray-200 hover:bg-gray-50">
                Nenhum arquivo encontrado
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  )
}
