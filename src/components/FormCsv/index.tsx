'use client'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { useFormCsv } from '@/hooks/useFormCsv'

export const FormCsv = () => {
  const { file, handleFileChange, formMethods, handleSubmit } = useFormCsv()

  return (
    <form
      className="flex w-[600px] items-center gap-8"
      onSubmit={formMethods.handleSubmit(handleSubmit)}
    >
      <Input
        type="file"
        accept=".csv"
        {...formMethods.register('csvFile', {
          onChange: handleFileChange,
        })}
      />
      {file && <Button type="submit">Enviar </Button>}
    </form>
  )
}
