import { Close } from '@mui/icons-material'
import * as Dialog from '@radix-ui/react-dialog'
import { Button } from '../../../components/Button'

interface SearchInfoDialogProps {
  children: React.ReactNode
}

export function SearchInfoDialog({ children }: SearchInfoDialogProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="animate-dialogOverlayAnimation data-[state='closed']:animate-dialogOverlayCloseAnimation fixed inset-0 bg-slate-900 bg-opacity-50" />
        <Dialog.Content className="animate-dialogContentShow data-[state='closed']:animate-dialogContentClose fixed left-1/2 top-1/2 h-[100vh] w-[100vw] -translate-x-1/2 -translate-y-1/2 overflow-y-scroll bg-slate-100 p-4 shadow-md lg:h-2/3 lg:w-2/3 lg:rounded-lg">
          <div className="flex justify-end">
            <Dialog.Close>
              <Button size="sm" color="primary" variant="ghost" rounded>
                <Close />
              </Button>
            </Dialog.Close>
          </div>
          <div className="flex w-full flex-col lg:flex-row"></div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
