import { Arrow } from '@/components/icons/arrow'

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <main className="flex w-full max-w-[52.5rem] flex-col gap-8 rounded-3xl rounded-br-[6.25rem] bg-white px-6 py-12 md:gap-0 md:rounded-br-[12.5rem] md:p-14">
        <form className="flex flex-col gap-8 md:gap-0">
          <div className="flex gap-4 md:gap-8">
            {['day', 'month', 'year'].map((field) => (
              <div
                key={field}
                className="flex max-w-40 flex-col gap-1 md:gap-2"
              >
                <label
                  className="text-sm font-bold uppercase tracking-widest text-smokey-grey md:text-base"
                  htmlFor={field}
                >
                  {field}
                </label>

                <input
                  className="text-black w-full rounded-lg border border-light-grey px-4 py-3 text-lg font-bold tracking-wide text-off-black caret-purple outline-none transition-colors focus:border-purple md:px-6 md:text-xl [&::-webkit-inner-spin-button]:appearance-none"
                  type="number"
                  name={field}
                  id={field}
                />
              </div>
            ))}
          </div>

          <div className="flex items-center">
            <div className="h-px flex-1 bg-light-grey" />

            <button
              className="flex size-16 items-center justify-center rounded-full border-2 border-purple bg-purple outline-none transition-colors hover:border-off-black hover:bg-off-black focus:border-off-black md:size-24"
              aria-label="calculate"
            >
              <Arrow className="size-6 text-white md:size-11 md:stroke-1" />
            </button>

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
    </div>
  )
}
