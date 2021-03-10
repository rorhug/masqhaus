import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Masqhaus</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Masqhaus
        </h1>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          <div
            className="p-6 mt-6 text-left w-96"
          >
            <img src="/logo.jpeg" />
          </div>

          <div className=" w-96">
            <span
              className="p-6 mt-6 text-left border w-96 rounded-xl block text-gray-300"
            >
              <h3 className="text-2xl font-bold mb-4">NFT Drop &rarr;</h3>
              <code className="p-3 font-mono text-xs bg-gray-100 rounded-md">
                coming soon
              </code>
            </span>

            <a
              href="https://www.instagram.com/masqhaus"
              target="_blank"
              className="p-6 mt-6 text-left border w-96 rounded-xl block hover:text-blue-600 focus:text-blue-600"
            >
              <h3 className="text-2xl font-bold">Instagram &rarr;</h3>
              <p className="mt-4 text-xl">
                Follow for pieces and updates.
              </p>
            </a>

            <a
              href="mailto:freddie@masqhaus.com"
              target="_blank"
              className="p-6 mt-6 text-left border w-96 rounded-xl block hover:text-blue-600 focus:text-blue-600"
            >
              <h3 className="text-2xl font-bold">Contact &rarr;</h3>
              <p className="mt-4 text-xl">
                Email me for more information.
              </p>
              <p className="mt-4 text-sm">
                freddie@masqhaus.com
              </p>
            </a>

          </div>

        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-16 border-t">
        <p className="text-center text-gray-400">
          © 2021 Masqhaus
        </p>
      </footer>
    </div>
  )
}
