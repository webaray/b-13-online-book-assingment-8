import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="container-app flex min-h-[70vh] items-center justify-center py-12 text-center">
      <div className="rounded-[2rem] bg-white p-10 shadow-xl">
        <h1 className="text-5xl font-black text-slate-900">404</h1>
        <p className="mt-3 text-slate-600">The page you are looking for was not found.</p>
        <Link href="/" className="btn mt-6 bg-blue-600 text-white hover:bg-blue-700">Back to Home</Link>
      </div>
    </section>
  );
}
