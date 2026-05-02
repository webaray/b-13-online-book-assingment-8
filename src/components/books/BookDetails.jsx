'use client';

import Image from 'next/image';
import toast from 'react-hot-toast';

export default function BookDetails({ book }) {
  const handleBorrow = () => {
    toast.success(`Borrow request confirmed for ${book.title}`);
  };

  return (
    <section className="container-app py-12">
      <div className="grid gap-10 rounded-[2rem] bg-white p-6 shadow-xl md:grid-cols-2 md:p-10">
        <div className="relative min-h-[500px] overflow-hidden rounded-[1.5rem]">
          <Image src={book.imageUrl} alt={book.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
        </div>
        <div className="flex flex-col justify-center">
          <span className="badge badge-lg bg-blue-100 text-blue-700">{book.category}</span>
          <h1 className="mt-5 text-4xl font-black text-slate-900 md:text-5xl">{book.title}</h1>
          <p className="mt-3 text-lg font-semibold text-slate-600">By {book.author}</p>
          <p className="mt-6 leading-8 text-slate-600">{book.description}</p>
          <div className="mt-6 rounded-2xl bg-slate-100 p-5">
            <p className="text-xl font-bold text-slate-900">{book.available_quantity} copies left</p>
            <p className="mt-1 text-sm text-slate-500">Digital borrowing is available for registered members.</p>
          </div>
          <button onClick={handleBorrow} className="btn mt-8 bg-blue-600 text-white hover:bg-blue-700">Borrow This Book</button>
        </div>
      </div>
    </section>
  );
}
