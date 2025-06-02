import Head from 'next/head'

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[var(--background)] text-[var(--foreground)] px-4">
      <Head>
        <title>Ethan Tarlov</title>
        <meta name="description" content="Software Engineer | Embedded Systems @ CIMON" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-5xl font-mono font-bold mb-6 text-center">
        Ethan Tarlov <span className="ml-2"></span>
      </h1>

      <p className="text-center text-lg font-mono">
        Software Engineer | SU Comp Sci 23' | San Diego ⇌ Las Vegas
      </p>
      <hr className="my-10 border-[var(--foreground)] opacity-20 w-1/2" />
      <section className="animate-fade-in duration-700 delay-200 max-w-xl text-center text-md font-sans leading-relaxed">
          <p className="mb-4">
            Hello there! My name is Ethan, and I am currently a Software Engineer on the Gateway team at <strong>CIMON Automation</strong>.
            I work on enabling communication between industrial devices and our HMI application, Canvas.
          </p>
          <p>
            My team implements and maintains protocol support (like Modbus), sends and receives frame data, and ensures it integrates
            seamlessly into the runtime environment.
          </p>
        </section>
    </div>
  )
}