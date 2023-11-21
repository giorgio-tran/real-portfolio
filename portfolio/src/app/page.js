import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <header className="fixed w-full flex justify-between px-32 items-center top-1/3 mix-blend-difference font-semibold tracking-widest">
        <div className="flex flex-col gap-4">
          <h1 className="text-9xl">Giorgio</h1>
          <h1 className="text-9xl">Tran</h1>
        </div>
        <div className="flex flex-col text-7xl gap-4">
          <Link href="#">LinkedIn</Link>
          <Link href="#">GitHub</Link>
        </div>
      </header>
      <div className="min-h-screen w-full relative -z-10 overflow-visible">
        <div className="absolute rounded-full h-[30vw] w-[30vw] bg-blue-600 top-1/4 -translate-y-1/2 left-10" />
        <div className="absolute rounded-full h-[50vw] w-[50vw] bg-red-500 top-1/2 left-1/2 -translate-x-1/3 -translate-y-1/2" />
        <div className="absolute rounded-full h-[20vw] w-[20vw] bg-green-500 top-3/4 left-3/4" />
        <div className="absolute rounded-full h-[40vw] w-[40vw] bg-yellow-500 top-3/4 left-1/4 -translate-x-3/4 -translate-y-1/4" />
      </div>
      <div className="min-h-screen w-full">
      </div>
    </main>
  );
}
