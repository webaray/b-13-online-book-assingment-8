'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { authClient } from '@/lib/auth-client';
import toast from 'react-hot-toast';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/all-books', label: 'All Books' },
  { href: '/my-profile', label: 'My Profile' }
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();

  const handleLogout = async () => {
    await authClient.signOut();
    toast.success('Logged out successfully');
    router.push('/login');
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="navbar container-app px-0">
        <div className="navbar-start">
          <div className="dropdown lg:hidden">
            <button tabIndex={0} className="btn btn-ghost" aria-label="Open menu">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </button>
            <ul tabIndex={0} className="menu dropdown-content z-[1] mt-3 w-52 rounded-box bg-white p-2 shadow">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <Link href="/" className="text-2xl font-black tracking-tight text-slate-900">
            Book<span className="text-blue-600">Nest</span>
          </Link>
        </div>

        <nav className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-1 px-1 text-lg">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link className={pathname === link.href ? 'font-bold text-blue-600' : ''} href={link.href}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="navbar-end gap-3">
          {isPending ? (
            <span className="loading loading-spinner loading-sm" />
          ) : session?.user ? (
            <>
              <span className="hidden text-sm font-semibold text-slate-700 md:inline">{session.user.image}</span>
              <button onClick={handleLogout} className="btn btn-sm bg-slate-900 text-white hover:bg-slate-800">Logout</button>
            </>
          ) : (
            <Link href="/login" className="btn btn bg-blue-600 text-white hover:bg-blue-700">Login/Register</Link>
          )}
        </div>
      </div>
    </header>
  );
}
