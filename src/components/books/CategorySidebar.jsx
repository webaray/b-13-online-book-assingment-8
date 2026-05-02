'use client';

const categories = ['All', 'Story', 'Tech', 'Science'];

export default function CategorySidebar({ selectedCategory, setSelectedCategory }) {
  return (
    <aside className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm lg:sticky lg:top-24 lg:h-fit">
      <h3 className="text-lg font-bold text-slate-900">Book Categories</h3>
      <div className="mt-4 grid gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`rounded-2xl px-4 py-3 text-left text-sm font-semibold transition ${selectedCategory === category ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
          >
            {category}
          </button>
        ))}
      </div>
    </aside>
  );
}
