import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Masqhaus</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center flex-1 px-4 text-center">
        <h1 className="text-6xl mt-6 font-bold">
          Masqhaus
        </h1>

        <div className="flex md:flex-row flex-col items-center justify-around max-w-full mt-2 sm:w-full">
          <div
            className="p-6 mt-6 text-left flex-1"
          >
            <img src="/logo.jpeg" />
          </div>

          <div className="flex-1">
            <a
              href="https://zora.co/masqhaus/1823"
              target="_blank"
              className="p-6 mt-6 text-left border rounded-xl block hover:text-blue-600 focus:text-blue-600 text-red-600"
            >
              <h3 className="text-2xl font-bold mb-4">NFT Drop &rarr;</h3>
              <code className="p-3 font-mono italic text-xs bg-gray-100 rounded-md">
                Venus - Zora#1823
              </code>
            </a>

            <a
              href="https://twitter.com/masqhaus"
              target="_blank"
              className="p-6 mt-6 text-left border rounded-xl block hover:text-blue-600 focus:text-blue-600"
            >
              <h3 className="text-xl font-bold">Twitter &rarr;</h3>
              <p className="mt-4">
                Follow for updates.
              </p>
            </a>

            <a
              href="https://www.instagram.com/masqhaus"
              target="_blank"
              className="p-6 mt-6 text-left border rounded-xl block hover:text-blue-600 focus:text-blue-600"
            >
              <h3 className="text-xl font-bold">Instagram &rarr;</h3>
              <p className="mt-4">
                Follow for art.
              </p>
            </a>

            <a
              href="mailto:freddie@masqhaus.com"
              target="_blank"
              className="p-6 mt-6 text-left border rounded-xl block hover:text-blue-600 focus:text-blue-600"
            >
              <h3 className="text-xl font-bold">Contact &rarr;</h3>
              <p className="mt-4">
                Email me for more information.
              </p>
              <p className="mt-4 text-xs">
                freddie@masqhaus.com
              </p>
            </a>

          </div>

        </div>
      </main>

      <footer className="flex items-center justify-center w-full mt-6 h-16 border-t">
        <p className="text-center text-gray-400">
          © 2021 Masqhaus
        </p>
      </footer>
    </div>
  )
}
