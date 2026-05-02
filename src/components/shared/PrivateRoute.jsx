'use client';

import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function PrivateRoute({ children }) {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();

  useEffect(() => {
    if (!isPending && !session?.user) {
      router.push('/login');
    }
  }, [isPending, session, router]);

  if (isPending) {
    return <div className="container-app py-24 text-center"><span className="loading loading-spinner loading-lg" /></div>;
  }

  if (!session?.user) return null;

  return children;
}
