import Head from 'next/head'

export default function SocialsPage() {
  return (
    <div className="min-h-screen px-6 py-12 bg-[var(--background)] text-[var(--foreground)]">
      <Head>
        <title>Socials | Ethan Tarlov</title>
        <meta name="description" content="Follow Ethan Tarlov on social platforms" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10">
          Socials
        </h1>

        <div className="grid sm:grid-cols-2 gap-6">
          <a
            href="https://www.linkedin.com/in/ethan-tarlov/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-[var(--foreground)] hover:bg-[var(--foreground)] hover:text-[var(--background)] transition p-6"
          >
            <h2 className="text-2xl font-semibold mb-2">LinkedIn &rarr;</h2>
            <p>Connect with me professionally.</p>
          </a>

          <a
            href="https://github.com/ethan7144"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-[var(--foreground)] hover:bg-[var(--foreground)] hover:text-[var(--background)] transition p-6"
          >
            <h2 className="text-2xl font-semibold mb-2">GitHub &rarr;</h2>
            <p>Check out my projects and code.</p>
          </a>
        </div>
      </main>
    </div>
  )
}
