'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { authClient } from '@/lib/auth-client';

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await authClient.signIn.email({
      email: formData.email,
      password: formData.password
    });

    setLoading(false);

    if (error) {
      toast.error(error.message || 'Login failed');
      return;
    }

    toast.success('Login successful');
    router.push('/');
  };

  const handleGoogleLogin = async () => {
    await authClient.signIn.social({
      provider: 'google',
      callbackURL: '/'
    });
  };

  return (
    <section className="container-app flex min-h-[75vh] items-center justify-center py-12">
      <div className="w-full max-w-md rounded-[2rem] bg-white p-8 shadow-xl">
        <h1 className="text-center text-4xl font-black text-slate-900">Login</h1>
        <form onSubmit={handleLogin} className="mt-8 space-y-4">
          <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} required className="input input-bordered w-full" />
          <input name="password" type="password" placeholder="Password" value={formData.password} onChange={handleChange} required className="input input-bordered w-full" />
          <button disabled={loading} className="btn w-full bg-blue-600 text-white hover:bg-blue-700">
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
        <button onClick={handleGoogleLogin} className="btn mt-4 w-full bg-slate-900 text-white hover:bg-slate-800">Continue with Google</button>
        <p className="mt-5 text-center text-sm text-slate-600">New here? <Link className="font-bold text-blue-600" href="/register">Register</Link></p>
      </div>
    </section>
  );
}
