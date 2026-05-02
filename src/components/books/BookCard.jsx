import Image from 'next/image';
import Link from 'next/link';

export default function BookCard({ book }) {
  return (
    <div className="card overflow-hidden border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <figure className="relative h-90 w-full">
        <Image src={book.imageUrl} alt={book.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
      </figure>
      <div className="card-body">
        <span className="badge badge-outline border-blue-200 text-blue-700">{book.category}</span>
        <h3 className="card-title text-lg text-slate-900">{book.title}</h3>
        <p className="text-sm text-slate-500">By {book.author}</p>
        <div className="card-actions mt-4">
          <Link href={`/books/${book.id}`} className="btn w-full bg-slate-900 text-white hover:bg-slate-800">View Details</Link>
        </div>
      </div>
    </div>
  );
}
