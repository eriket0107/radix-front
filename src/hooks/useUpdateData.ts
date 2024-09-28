import { z } from 'zod'
import { useFetch } from './useFech'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

const schema = z.object({
  filePath: z.string({ message: 'Must have be a file path' }),
})

type FilePathForm = z.infer<typeof schema>
export const useUpdateData = () => {
  const updateFormMethods = useForm<FilePathForm>({
    resolver: zodResolver(schema),
    mode: 'onBlur',
  })
  const [updateDataForm, { loading }] = useFetch()

  const handleSubmitUpdate = async (data: FilePathForm) => {
    return await updateDataForm('/fix-sensor-data', data, {
      method: 'put',
      onSuccess: () => {
        toast.success('Arquivo atualizado com sucesso!')
        updateFormMethods.setValue('filePath', '')
      },
      onError: () => {
        toast.error('Falha ao atualizar arquivo')
      },
    })
  }

  const filePath = updateFormMethods.watch('filePath')
  return {
    updateFormMethods,
    handleSubmitUpdate,
    loadingUpdate: loading,
    filePath,
  }
}
