import { Button } from '../../../components/Button'
import { SearchInfoDialog } from './SearchInfoDialog'

export function SearchCard() {
  return (
    <div className="flex min-w-fit max-w-fit flex-1 flex-col items-center gap-4 rounded-lg border-2 border-slate-200 p-4">
      <img src="https://placehold.co/300x450" alt="" />
      <div className="flex w-full flex-col space-y-4 ">
        <h1 className="font-bold">Title</h1>
        <p className="body w-64 overflow-hidden text-ellipsis whitespace-nowrap text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat porro
          consequatur illum expedita nam tempora dolorum corporis eos in cumque.
          Expedita totam distinctio similique doloribus mollitia ab natus,
          maiores assumenda.
        </p>
        <SearchInfoDialog>
          <Button size="sm" variant="ghost" className="w-full">
            Saiba mais
          </Button>
        </SearchInfoDialog>
      </div>
    </div>
  )
}
