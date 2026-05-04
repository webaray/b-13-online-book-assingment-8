'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { authClient } from '@/lib/auth-client';

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await authClient.signIn.email({
        email: formData.email,
        password: formData.password,
      });

      if (error) {
        toast.error(error.message || 'Login failed');
        return;
      }

      toast.success('Login successful');
      router.push('/');
    } catch (err) {
      console.error(err);
      toast.error('Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setGoogleLoading(true);

    try {
      const { error } = await authClient.signIn.social({
        provider: 'google',
        callbackURL: '/',
      });

      if (error) {
        toast.error(error.message || 'Google login failed');
      }
    } catch (err) {
      console.error(err);
      toast.error('Google login failed');
    } finally {
      setGoogleLoading(false);
    }
  };

  return (
    <section className="container-app flex min-h-[75vh] items-center justify-center py-12">
      <div className="w-full max-w-md rounded-[2rem] bg-white p-8 shadow-xl">
        <h1 className="text-center text-4xl font-black text-slate-900">
          Login
        </h1>

        <form onSubmit={handleLogin} className="mt-8 space-y-4">
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="input input-bordered w-full"
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="input input-bordered w-full"
          />

          <button
            type="submit"
            disabled={loading}
            className="btn w-full bg-blue-600 text-white hover:bg-blue-700"
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        <button
          type="button"
          onClick={handleGoogleLogin}
          disabled={googleLoading}
          className="btn mt-4 w-full bg-slate-900 text-white hover:bg-slate-800"
        >
          {googleLoading ? 'Connecting...' : 'Continue with Google'}
        </button>

        <p className="mt-5 text-center text-sm text-slate-600">
          New here?{' '}
          <Link className="font-bold text-blue-600" href="/register">
            Register
          </Link>
        </p>
      </div>
    </section>
  );
}