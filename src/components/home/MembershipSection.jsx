export default function MembershipSection() {
  return (
    <section className="bg-white py-16">
      <div className="container-app grid gap-8 md:grid-cols-3">
        {[
          ['Fast Borrowing', 'Request your favorite book digitally without traditional paperwork.'],
          ['Secure Access', 'Private routes protect book details and member profile information.'],
          ['Smart Categories', 'Find books faster using Story, Tech and Science category filters.']
        ].map(([title, desc]) => (
          <div key={title} className="rounded-3xl border border-slate-200 p-8 shadow-sm">
            <h3 className="text-2xl font-black text-slate-900">{title}</h3>
            <p className="mt-3 leading-7 text-slate-600">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
