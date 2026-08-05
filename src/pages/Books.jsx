import PageBanner from "../components/common/PageBanner";

const books = [
  {
    id: "education-guide",
    title: "Education Guide",
    description: "A downloadable resource for community learning and educational outreach.",
    downloadUrl: "/docs/book1.pdf",
  },
  {
    id: "health-handbook",
    title: "Health Handbook",
    description: "A practical PDF for wellness, health awareness, and family care.",
    downloadUrl: "/docs/book2.pdf",
  },
];

const BANNER =
  "https://images.unsplash.com/photo-1496317556649-f930d733eea0?auto=format&fit=crop&w=1600&q=80";

function Books() {
  return (
    <>
      <PageBanner
        title="Books & PDFs"
        text="Browse our downloadable resources and select a PDF to download from the navbar."
        image={BANNER}
      />

      <section className="border-b border-line bg-cream py-10">
        <div className="container-page grid gap-8 lg:grid-cols-2">
          {books.map((book) => (
            <article
              key={book.id}
              className="rounded-3xl border border-white/10 bg-forest/95 p-6 shadow-2xl shadow-black/10"
            >
              <h2 className="text-2xl font-bold tracking-tight text-cream">
                {book.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-mint/80">
                {book.description}
              </p>
              <div className="mt-6">
                <a
                  href={book.downloadUrl}
                  download
                  className="inline-flex rounded-full bg-amber px-6 py-3 text-sm font-semibold text-ink transition hover:bg-amber/90"
                >
                  Download PDF
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

export default Books;
