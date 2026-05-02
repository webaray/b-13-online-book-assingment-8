import { notFound } from 'next/navigation';
import PrivateRoute from '@/components/shared/PrivateRoute';
import BookDetails from '@/components/books/BookDetails';
import { getBookById } from '@/lib/books';

export default function SingleBookPage({ params }) {
  const book = getBookById(params.id);

  if (!book) {
    notFound();
  }

  return (
    <PrivateRoute>
      <BookDetails book={book} />
    </PrivateRoute>
  );
}
