import BookCard from '@/components/books/BookCard';
import { getAllBooks } from '@/lib/books';

export default function FeaturedBooks() {
  const books = getAllBooks().slice(0, 4);

  return (
    <section className="container-app py-16">
      <div className="mb-8 text-center">
        <p className="font-bold text-blue-600">Featured Collection</p>
        <h2 className="mt-2 text-4xl font-black text-slate-900">Top Books This Week</h2>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {books.map((book) => <BookCard key={book.id} book={book} />)}
      </div>
    </section>
  );
}
