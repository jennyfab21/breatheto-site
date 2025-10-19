import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>BreatheTo – unlock your excellence</title>
        <meta name="description" content="Breathwork for focus, calm, and performance." />
      </Head>
      <main className="min-h-screen flex flex-col items-center justify-center text-center bg-gray-50">
        <h1 className="text-4xl font-bold mb-3">BreatheTo</h1>
        <p className="text-gray-600 mb-6">Practical, science-informed breathwork for focus, calm, and performance.</p>
        <div className="space-x-4">
          <a href="https://cal.com/YOUR_HANDLE/intro" className="bg-gray-900 text-white px-4 py-2 rounded-xl">Book a Session</a>
          <a href="mailto:hello@breatheto.com" className="border border-gray-300 px-4 py-2 rounded-xl">Contact</a>
        </div>
        <footer className="mt-10 text-gray-400 text-sm">© {new Date().getFullYear()} BreatheTo</footer>
      </main>
    </>
  );
}
