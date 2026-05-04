import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-950 py-12 text-slate-200">
      <div className="container-app grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="text-2xl font-black text-white">Book<span className="text-blue-400">Nest</span></h3>
          <p className="mt-3 text-sm leading-6 text-slate-400">A modern digital library experience for readers,<br /> students, and knowledge lovers.</p>
        </div>
        <div>
          <h4 className="font-bold text-white">Quick Links</h4>
          <div className="mt-3 flex flex-col gap-2 text-sm text-slate-400">
            <Link href="/">Home</Link>
            <Link href="/all-books">All Books</Link>
            <Link href="/my-profile">My Profile</Link>
          </div>
        </div>
        <div>
          <h4 className="font-bold text-white">Contact Us</h4>
          <p className="mt-3 text-sm text-slate-400">Email: josimuddin105464@gmail.com</p>
          <p className="text-sm text-slate-400">Phone: +880 1797805453</p>
          <div className="mt-4 flex gap-3">
            <a className="btn btn-circle btn-sm text-lg" href="#">f</a>
            <a className="btn btn-circle btn-sm text-lg" href="#">in</a>
            <a className="btn btn-circle btn-sm text-lg" href="#">x</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
