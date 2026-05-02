import Link from 'next/link';

export default function Banner() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,#dbeafe,transparent_35%),linear-gradient(135deg,#0f172a,#1e3a8a)] py-20 text-white md:py-28">
      <div className="container-app grid items-center gap-10 md:grid-cols-2">
        <div className="animate__animated animate__fadeInLeft">
          <p className="font-semibold text-blue-200">Modern Digital Library</p>
          <h1 className="mt-4 text-5xl font-black leading-tight md:text-7xl">Find Your Next Read</h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-200">Explore stories, technology guides, and science books from one secure and responsive platform.</p>
          <Link href="/all-books" className="btn mt-8 bg-white text-slate-900 hover:bg-slate-200">Browse Now</Link>
        </div>
        <div className="glass-card rounded-[2rem] p-6 text-slate-900 animate__animated animate__fadeInRight">
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-3xl bg-white p-5 shadow-lg">
              <p className="text-4xl font-black text-blue-600">12+</p>
              <p className="mt-2 text-sm font-semibold">Curated Books</p>
            </div>
            <div className="rounded-3xl bg-white p-5 shadow-lg">
              <p className="text-4xl font-black text-blue-600">3</p>
              <p className="mt-2 text-sm font-semibold">Categories</p>
            </div>
            <div className="col-span-2 rounded-3xl bg-white p-5 shadow-lg">
              <p className="text-lg font-bold">Secure member access with BetterAuth</p>
              <p className="mt-2 text-sm text-slate-500">Login, register, Google auth, profile update, and protected routes.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
