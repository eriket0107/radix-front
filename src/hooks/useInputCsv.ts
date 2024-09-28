import { ChangeEvent, useState } from 'react'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useFetch } from './useFech'
import { toast } from 'sonner'

const schema = z.object({
  csvFile: z.custom<FileList>((value) => value instanceof FileList, {
    message: 'Must be a file',
  }),
})

type ImportCsvFileForm = z.infer<typeof schema>
export const useInputCsv = () => {
  const inputCsvFormMethods = useForm<ImportCsvFileForm>({
    resolver: zodResolver(schema),
  })
  const [file, setFile] = useState<FileList | null>(null)
  const [postForm, { loading }] = useFetch()

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFile(event.target.files)
    }
  }

  const handleSubmitCsvInput = async (data: ImportCsvFileForm) => {
    const body = data.csvFile
    return await postForm('/input-csv', body, {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      },
      onSuccess: () => {
        toast.success('CSV importado com sucesso!')
      },
      onError: () => {
        toast.error('Falha ao importar CSV')
      },
    })
  }

  return {
    file,
    handleFileChange,
    inputCsvFormMethods,
    handleSubmitCsvInput,
    loading,
  }
}
