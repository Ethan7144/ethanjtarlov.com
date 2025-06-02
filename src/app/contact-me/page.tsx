import Head from 'next/head'

export default function ContactsPage() {
  return (
    <div className="min-h-screen px-6 py-12 bg-[var(--background)] text-[var(--foreground)]">
      <Head>
        <title>Contact | Ethan Tarlov</title>
        <meta name="description" content="Reach out to Ethan Tarlov" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10">
          Contact Me!
        </h1>

        <div className="grid sm:grid-cols-2 gap-6">
          <a
            href="https://www.linkedin.com/in/ethan-tarlov/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-[var(--foreground)] hover:bg-[var(--foreground)] hover:text-[var(--background)] transition p-6"
          >
            <h2 className="text-2xl font-semibold mb-2">LinkedIn &rarr;</h2>
            <p>Message me on LinkedIn!</p>
          </a>

          <a
            href="mailto:tarlov.ethan.j@gmail.com"
            className="rounded-xl border border-[var(--foreground)] hover:bg-[var(--foreground)] hover:text-[var(--background)] transition p-6"
          >
            <h2 className="text-2xl font-semibold mb-2">Email &rarr;</h2>
            <p>tarlov.ethan.j@gmail.com</p>
          </a>
        </div>
      </main>
    </div>
  )
}
