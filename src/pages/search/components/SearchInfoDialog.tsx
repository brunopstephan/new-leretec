import { CalendarMonthOutlined, Person } from '@mui/icons-material'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import * as ScrollArea from '@radix-ui/react-scroll-area'

interface SearchInfoDialogProps {
  children: React.ReactNode
}

export function SearchInfoDialog({ children }: SearchInfoDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="h-[100vh] w-[100vw] max-w-max overflow-hidden overflow-y-scroll rounded-none p-4 shadow-md lg:h-2/3 lg:w-2/3 lg:overflow-y-hidden lg:rounded-lg">
        <div className="mx-auto my-auto flex h-full flex-col items-center gap-4 md:w-5/6 lg:h-fit lg:flex-row">
          <img src="https://placehold.co/300x450" alt="" />
          <div className="space-y-6 py-4">
            <div>
              <p className="body flex items-center text-muted-foreground">
                <Person />
                Bruno Piffer
              </p>
              <p className="body flex items-center text-muted-foreground">
                <CalendarMonthOutlined /> 23/04/2021, há 3 anos
              </p>
            </div>
            <h1 className="headline font-bold">Title</h1>

            <ScrollArea.Root>
              <ScrollArea.Viewport className="h-60 w-full">
                <p className="text-foreground">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Placeat, architecto beatae soluta culpa quod molestias
                  mollitia voluptate libero, at magnam magni illum? Quae quis
                  reiciendis sed optio sequi a voluptatibus! Lorem ipsum dolor
                  sit amet consectetur adipisicing elit. Placeat, architecto
                  beatae soluta culpa quod molestias mollitia voluptate libero,
                  at magnam magni illum? Quae quis reiciendis sed optio sequi a
                  voluptatibus! Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Placeat, architecto beatae soluta culpa quod
                  molestias mollitia voluptate libero, at magnam magni illum?
                  Quae quis reiciendis sed optio sequi a voluptatibus!
                  reiciendis sed optio sequi a voluptatibus! Lorem ipsum dolor
                  sit amet consectetur adipisicing elit. Placeat, architecto
                  beatae soluta culpa quod molestias mollitia voluptate libero,
                  at magnam magni illum? Quae quis reiciendis sed optio sequi a
                  voluptatibus! Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Placeat, architecto beatae soluta culpa quod
                  molestias mollitia voluptate libero, at magnam magni illum?
                  Quae quis reiciendis sed optio sequi a voluptatibus!
                  reiciendis sed optio sequi a voluptatibus! Lorem ipsum dolor
                  sit amet consectetur adipisicing elit. Placeat, architecto
                  beatae soluta culpa quod molestias mollitia voluptate libero,
                  at magnam magni illum? Quae quis reiciendis sed optio sequi a
                  voluptatibus! Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Placeat, architecto beatae soluta culpa quod
                  molestias mollitia voluptate libero, at magnam magni illum?
                  Quae quis reiciendis sed optio sequi a voluptatibus!
                  reiciendis sed optio sequi a voluptatibus! Lorem ipsum dolor
                  sit amet consectetur adipisicing elit. Placeat, architecto
                  beatae soluta culpa quod molestias mollitia voluptate libero,
                  at magnam magni illum? Quae quis reiciendis sed optio sequi a
                  voluptatibus! Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Placeat, architecto beatae soluta culpa quod
                  molestias mollitia voluptate libero, at magnam magni illum?
                  Quae quis reiciendis sed optio sequi a voluptatibus!
                </p>
              </ScrollArea.Viewport>
              <ScrollArea.Scrollbar
                className="flex touch-none select-none rounded-lg bg-transparent p-0.5 transition-colors duration-150 ease-out hover:bg-slate-100 data-[orientation=vertical]:w-2.5"
                orientation="vertical"
              >
                <ScrollArea.Thumb className="relative flex-1 rounded-lg bg-slate-500 before:absolute before:left-1/2 before:top-1/2 before:h-full before:min-h-[44px] before:w-full before:min-w-[44px] before:-translate-x-1/2 before:-translate-y-1/2 before:content-['']" />
              </ScrollArea.Scrollbar>
            </ScrollArea.Root>
            <Button
              variant={'default'}
              className="lg-w-fit mt-8 w-full lg:w-fit"
            >
              Ir para página
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
