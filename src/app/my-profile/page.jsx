'use client';

import Image from 'next/image';
import Link from 'next/link';
import PrivateRoute from '@/components/shared/PrivateRoute';
import { authClient } from '@/lib/auth-client';

export default function MyProfilePage() {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  return (
    <PrivateRoute>
      <section className="container-app py-12">
        <div className="mx-auto max-w-3xl rounded-[2rem] bg-white p-8 shadow-xl">
          <div className="flex flex-col items-center gap-5 text-center">
            <div className="avatar">
              <div className="relative h-32 w-32 overflow-hidden rounded-full ring ring-blue-200 ring-offset-4">
                {user?.image ? (
                  <Image src={user.image} alt={user.name || 'User'} fill className="object-cover" />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-blue-100 text-4xl font-black text-blue-700">
                    {user?.name?.charAt(0) || 'U'}
                  </div>
                )}
              </div>
            </div>
            <div>
              <h1 className="text-4xl font-black text-slate-900">{user?.name}</h1>
              <p className="mt-2 text-slate-500">{user?.email}</p>
            </div>
          </div>

          <div className="mt-8 grid gap-4 rounded-3xl bg-slate-100 p-6 md:grid-cols-2">
            <div>
              <p className="text-sm font-semibold text-slate-500">User ID</p>
              <p className="break-all font-bold text-slate-900">{user?.id}</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-500">Email Verified</p>
              <p className="font-bold text-slate-900">{user?.emailVerified ? 'Yes' : 'No'}</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-500">Name</p>
              <p className="font-bold text-slate-900">{user?.name}</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-500">Image URL</p>
              <p className="break-all font-bold text-slate-900">{user?.image || 'Not added'}</p>
            </div>
          </div>

          <Link href="/update-profile" className="btn mt-8 w-full bg-blue-600 text-white hover:bg-blue-700">Update Information</Link>
        </div>
      </section>
    </PrivateRoute>
  );
}
