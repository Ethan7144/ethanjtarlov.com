import Head from 'next/head'

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col font-mono items-center justify-center bg-[var(--background)] text-[var(--foreground)] px-4">
      <Head>
        <title>Ethan Tarlov</title>
        <meta name="description" content="Software Engineer | Embedded Systems @ CIMON" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-5xl font-mono font-bold mb-6 text-center">
        Ethan Tarlov <span className="ml-2"></span>
      </h1>

      <p className="text-center text-lg font-mono">
        Software Engineer | SU Comp Sci 23&apos; | San Diego ⇌ Irvine
      </p>
      <hr className="my-10 border-[var(--foreground)] opacity-20 w-1/2"/>
          <section className="max-w-xl text-center text-md font-sans leading-relaxed">
            <p className="mb-4 font-mono">
              Hello there! My name is Ethan, and I am currently an Embedded Software Engineer on the Home Network Team at <strong>TP-Link</strong>.
              I currently am working on the Deco Mesh Wi-Fi system, where I focus on developing and optimizing the software that powers our mesh Wi-Fi products.
            </p>
            <p className="mb-4 font-mono">
              My team works on some of TP-Link&apos;s most popular products, including the Deco Mesh Wi-Fi system, doorbells, and security cameras.
            </p>
          </section>
    </div>
  )
}