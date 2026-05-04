'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { authClient } from '@/lib/auth-client';

export default function RegisterPage() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);

    const name = formData.get('name');
    const email = formData.get('email');
    const image = formData.get('image');
    const password = formData.get('password');

    if (!name || !email || !password) {
      toast.error('Please fill all required fields');
      setLoading(false);
      return;
    }

    if (password.length < 8) {
      toast.error('Password must be at least 8 characters');
      setLoading(false);
      return;
    }

    try {
      const payload = {
        name,
        email,
        password,
      };

      if (image && image.trim() !== '') {
        payload.image = image;
      }

      const { data, error } = await authClient.signUp.email(payload);

      if (error) {
        toast.error(error.message || 'Registration failed');
        return;
      }

      console.log('Signup success:', data);

      toast.success('Registration successful.');
      router.push('/Myprofile');
    } catch (err) {
      console.error('Signup error:', err);
      toast.error('Something went wrong. Please try again.');
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
      toast.error('Google login failed. Please try again.');
    } finally {
      setGoogleLoading(false);
    }
  };

  return (
    <section className="container-app flex min-h-[75vh] items-center justify-center py-12">
      <div className="w-full max-w-md rounded-[2rem] bg-white p-8 shadow-xl">
        <h1 className="text-center text-4xl font-black text-slate-900">
          Create Account
        </h1>

        <form onSubmit={handleRegister} className="mt-8 space-y-4">
          <input
            name="name"
            type="text"
            placeholder="Name"
            required
            className="input input-bordered w-full"
          />

          <input
            name="email"
            type="email"
            placeholder="Email"
            required
            className="input input-bordered w-full"
          />

          <input
            name="image"
            type="url"
            placeholder="Photo URL optional"
            className="input input-bordered w-full"
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            required
            className="input input-bordered w-full"
          />

          <button
            type="submit"
            disabled={loading}
            className="btn w-full bg-blue-600 text-white hover:bg-blue-700"
          >
            {loading ? 'Creating account...' : 'Register'}
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
          Already have an account?{' '}
          <Link className="font-bold text-blue-600" href="/login">
            Login
          </Link>
        </p>
      </div>
    </section>
  );
}