'use client';

import { useMemo, useState } from 'react';
import books from '@/data/books.json';
import BookCard from '@/components/books/BookCard';
import CategorySidebar from '@/components/books/CategorySidebar';

export default function AllBooksPage() {
  const [searchText, setSearchText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredBooks = useMemo(() => {
    return books.filter((book) => {
      const matchesSearch = book.title.toLowerCase().includes(searchText.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || book.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchText, selectedCategory]);

  return (
    <section className="container-app py-12">
      <div className="mb-8 text-center">
        <p className="font-bold text-blue-600">Explore Collection</p>
        <h1 className="mt-2 text-4xl font-black text-slate-900 md:text-5xl">All Books</h1>
      </div>

      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Search books by title..."
        className="input input-bordered mb-8 h-14 w-full rounded-2xl bg-white text-base shadow-sm"
      />

      <div className="grid gap-8 lg:grid-cols-[260px_1fr]">
        <CategorySidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        <div>
          {filteredBooks.length === 0 ? (
            <div className="rounded-3xl bg-white p-10 text-center shadow-sm">
              <h3 className="text-2xl font-bold">No books found</h3>
              <p className="mt-2 text-slate-500">Try another title or category.</p>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {filteredBooks.map((book) => <BookCard key={book.id} book={book} />)}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
