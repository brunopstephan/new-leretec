import { CalendarMonthOutlined, Close, Person } from '@mui/icons-material'
import * as Dialog from '@radix-ui/react-dialog'
import { Button } from '../../../components/Button'
import * as ScrollArea from '@radix-ui/react-scroll-area'

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
            <Dialog.Close asChild>
              <Button size="sm" color="primary" variant="ghost" rounded>
                <Close />
              </Button>
            </Dialog.Close>
          </div>
          <div className="mx-auto my-auto flex h-full flex-col items-center gap-4 md:w-5/6 md:flex-row lg:h-fit">
            <img src="https://placehold.co/300x450" alt="" />
            <div className="space-y-6 py-4">
              <div>
                <p className="body flex items-center text-neutral-400">
                  <Person />
                  Bruno Piffer
                </p>
                <p className="body flex items-center text-neutral-400">
                  <CalendarMonthOutlined /> 23/04/2021, há 3 anos
                </p>
              </div>
              <h1 className="headline font-bold">Title</h1>

              <ScrollArea.Root>
                <ScrollArea.Viewport className="h-60 w-full">
                  <p className="title">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Placeat, architecto beatae soluta culpa quod molestias
                    mollitia voluptate libero, at magnam magni illum? Quae quis
                    reiciendis sed optio sequi a voluptatibus! Lorem ipsum dolor
                    sit amet consectetur adipisicing elit. Placeat, architecto
                    beatae soluta culpa quod molestias mollitia voluptate
                    libero, at magnam magni illum? Quae quis reiciendis sed
                    optio sequi a voluptatibus! Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Placeat, architecto beatae
                    soluta culpa quod molestias mollitia voluptate libero, at
                    magnam magni illum? Quae quis reiciendis sed optio sequi a
                    voluptatibus! reiciendis sed optio sequi a voluptatibus!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Placeat, architecto beatae soluta culpa quod molestias
                    mollitia voluptate libero, at magnam magni illum? Quae quis
                    reiciendis sed optio sequi a voluptatibus! Lorem ipsum dolor
                    sit amet consectetur adipisicing elit. Placeat, architecto
                    beatae soluta culpa quod molestias mollitia voluptate
                    libero, at magnam magni illum? Quae quis reiciendis sed
                    optio sequi a voluptatibus! reiciendis sed optio sequi a
                    voluptatibus! Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Placeat, architecto beatae soluta culpa
                    quod molestias mollitia voluptate libero, at magnam magni
                    illum? Quae quis reiciendis sed optio sequi a voluptatibus!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Placeat, architecto beatae soluta culpa quod molestias
                    mollitia voluptate libero, at magnam magni illum? Quae quis
                    reiciendis sed optio sequi a voluptatibus! reiciendis sed
                    optio sequi a voluptatibus! Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Placeat, architecto beatae
                    soluta culpa quod molestias mollitia voluptate libero, at
                    magnam magni illum? Quae quis reiciendis sed optio sequi a
                    voluptatibus! Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Placeat, architecto beatae soluta culpa
                    quod molestias mollitia voluptate libero, at magnam magni
                    illum? Quae quis reiciendis sed optio sequi a voluptatibus!
                  </p>
                </ScrollArea.Viewport>
                <ScrollArea.Scrollbar
                  className="flex touch-none select-none rounded-lg bg-transparent p-0.5 transition-colors duration-150 ease-out hover:bg-slate-100 data-[orientation=vertical]:w-2.5"
                  orientation="vertical"
                >
                  <ScrollArea.Thumb className="relative flex-1 rounded-lg bg-slate-500 before:absolute before:left-1/2 before:top-1/2 before:h-full before:min-h-[44px] before:w-full before:min-w-[44px] before:-translate-x-1/2 before:-translate-y-1/2 before:content-['']" />
                </ScrollArea.Scrollbar>
              </ScrollArea.Root>
              <Button className="lg-w-fit mt-8 w-full lg:w-fit">
                Ir para página
              </Button>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
