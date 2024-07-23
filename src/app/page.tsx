import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Arrow } from '@/components/icons/arrow'

export default function Home() {
  return (
    <main className="flex w-full max-w-[52.5rem] flex-col gap-8 rounded-3xl rounded-br-[6.25rem] bg-white px-6 py-12 md:gap-0 md:rounded-br-[12.5rem] md:p-14">
      <form className="flex flex-col gap-8 md:gap-0">
        <div className="flex gap-4 md:gap-8">
          {['day', 'month', 'year'].map((field) => (
            <div key={field} className="flex max-w-40 flex-col gap-1 md:gap-2">
              <Label htmlFor={field}>{field}</Label>
              <Input type="number" name={field} id={field} />
            </div>
          ))}
        </div>

        <div className="flex items-center">
          <div className="h-px flex-1 bg-light-grey" />

          <Button aria-label="calculate">
            <Arrow className="size-6 text-white md:size-11 md:stroke-1" />
          </Button>

          <div className="h-px flex-1 bg-light-grey md:order-first" />
        </div>
      </form>

      <div>
        <p className="text-2xl font-extrabold italic tracking-tight text-off-black sm:text-3xl">
          <span className="text-purple">--</span> years
        </p>

        <p className="text-2xl font-extrabold italic tracking-tight text-off-black sm:text-3xl">
          <span className="text-purple">--</span> months
        </p>

        <p className="text-2xl font-extrabold italic tracking-tight text-off-black sm:text-3xl">
          <span className="text-purple">--</span> days
        </p>
      </div>
    </main>
  )
}
