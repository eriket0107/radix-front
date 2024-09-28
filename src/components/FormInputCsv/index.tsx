'use client'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { RotateCcw, Upload } from 'lucide-react'
import { useInputCsv } from '@/hooks/useInputCsv'
import { useUpdateData } from '@/hooks/useUpdateData'

export const FormCsv = () => {
  const { file, handleFileChange, inputCsvFormMethods, handleSubmitCsvInput } =
    useInputCsv()
  const { updateFormMethods, handleSubmitUpdate, filePath } = useUpdateData()

  return (
    <div className="flex flex-col gap-4">
      <form
        className="flex w-[600px] items-center gap-8"
        onSubmit={inputCsvFormMethods.handleSubmit(handleSubmitCsvInput)}
      >
        <Input
          type="file"
          accept=".csv"
          {...inputCsvFormMethods.register('csvFile', {
            onChange: handleFileChange,
          })}
        />
        {file && (
          <Button className="gap-1">
            Enviar <Upload size={14} />
          </Button>
        )}
      </form>
      <form
        className="flex w-[600px] items-center gap-8"
        onSubmit={updateFormMethods.handleSubmit(handleSubmitUpdate)}
      >
        <Input
          {...updateFormMethods.register('filePath')}
          placeholder="Insira aqui o caminho do arquivo CSV para atualizar"
        />
        <Button className="gap-1" disabled={!filePath}>
          Update <RotateCcw size={14} />
        </Button>
      </form>
    </div>
  )
}
