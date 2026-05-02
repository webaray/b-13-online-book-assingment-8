'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import PrivateRoute from '@/components/shared/PrivateRoute';
import { authClient } from '@/lib/auth-client';

export default function UpdateProfilePage() {
  const router = useRouter();
  const { data: session } = authClient.useSession();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ name: '', image: '' });

  useEffect(() => {
    if (session?.user) {
      setFormData({
        name: session.user.name || '',
        image: session.user.image || ''
      });
    }
  }, [session]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await authClient.updateUser({
      name: formData.name,
      image: formData.image
    });

    setLoading(false);

    if (error) {
      toast.error(error.message || 'Profile update failed');
      return;
    }

    toast.success('Profile updated successfully');
    router.push('/my-profile');
  };

  return (
    <PrivateRoute>
      <section className="container-app flex min-h-[75vh] items-center justify-center py-12">
        <div className="w-full max-w-md rounded-[2rem] bg-white p-8 shadow-xl">
          <h1 className="text-center text-4xl font-black text-slate-900">Update Profile</h1>
          <form onSubmit={handleUpdate} className="mt-8 space-y-4">
            <input name="name" type="text" placeholder="Name" value={formData.name} onChange={handleChange} required className="input input-bordered w-full" />
            <input name="image" type="url" placeholder="Image URL" value={formData.image} onChange={handleChange} className="input input-bordered w-full" />
            <button disabled={loading} className="btn w-full bg-blue-600 text-white hover:bg-blue-700">
              {loading ? 'Updating...' : 'Update Information'}
            </button>
          </form>
        </div>
      </section>
    </PrivateRoute>
  );
}
