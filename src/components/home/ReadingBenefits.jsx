import Link from 'next/link';

export default function ReadingBenefits() {
  return (
    <section className="container-app py-16">
      <div className="rounded-[2rem] bg-slate-900 p-8 text-white md:p-12">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <p className="font-semibold text-blue-300">Why digital library?</p>
            <h2 className="mt-3 text-4xl font-black">Learn faster with organized reading.</h2>
          </div>
          <div>
            <p className="leading-8 text-slate-300">BookNest helps users discover books faster, manage borrowing smoothly, and explore educational content from any device.</p>
            <Link href="/all-books" className="btn mt-6 bg-white text-slate-900 hover:bg-slate-200">Explore Books</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
