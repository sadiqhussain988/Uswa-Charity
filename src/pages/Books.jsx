import PageBanner from "../components/common/PageBanner";
import PdfViewer from "../components/common/PdfViewer";
import { useState } from "react";

const books = [
  {
    id: "education-guide",
    title: "Education Guide",
    description:
      "A downloadable resource for community learning and educational outreach.",
    downloadUrl: "/docs/book1.pdf",
  },
  {
    id: "health-handbook",
    title: "Health Handbook",
    description:
      "A practical PDF for wellness, health awareness, and family care.",
    downloadUrl: "/docs/book2.pdf",
  },
];

const BANNER =
  "https://images.unsplash.com/photo-1496317556649-f930d733eea0?auto=format&fit=crop&w=1600&q=80";

function Books() {
  const [activePdf, setActivePdf] = useState(null);

  const openPDF = (book) => {
    setActivePdf(book);
  };

  const closePDF = () => {
    setActivePdf(null);
  };

  const handleCardKeyDown = (event, book) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openPDF(book);
    }
  };

  return (
    <>
      <PageBanner
        title="Books & PDFs"
        text="Browse our downloadable resources and select a PDF to read."
        image={BANNER}
      />

      <section className="border-b border-line bg-cream py-10">
        <div className="container-page grid gap-8 lg:grid-cols-2">
          {books.map((book) => (
            <article
              key={book.id}
              role="button"
              tabIndex="0"
              onClick={() => openPDF(book)}
              onKeyDown={(event) => handleCardKeyDown(event, book)}
              className="cursor-pointer rounded-3xl border border-white/10 bg-forest/95 p-6 shadow-2xl shadow-black/10 transition hover:border-amber hover:scale-[1.02]"
              aria-label={`Open ${book.title} PDF preview`}
            >
              <h2 className="text-2xl font-bold tracking-tight text-cream">
                {book.title}
              </h2>

              <p className="mt-3 text-sm leading-relaxed text-mint/80">
                {book.description}
              </p>

              <div className="mt-6 flex gap-4">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    openPDF(book);
                  }}
                  className="rounded-full bg-amber px-6 py-2 font-semibold text-black hover:bg-yellow-400"
                >
                  View PDF
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {activePdf && (
        <div
          className="fixed inset-0 z-[9999] flex items-stretch justify-center bg-black/90"
          onClick={closePDF}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative w-full h-full overflow-hidden bg-[#071012]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="absolute inset-x-0 top-0 z-20 flex items-center justify-between gap-4 bg-black/95 px-4 py-4 shadow-xl">
              <div className="text-sm font-semibold text-cream">
                {activePdf.title}
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={activePdf.downloadUrl}
                  download
                  className="rounded-full bg-amber px-4 py-2 text-sm font-semibold text-ink transition hover:bg-amber/90"
                >
                  Download PDF
                </a>
                <button
                  type="button"
                  onClick={closePDF}
                  className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-cream transition hover:bg-white/15"
                >
                  Close
                </button>
              </div>
            </div>

            <div className="absolute inset-0 pt-16">
              <PdfViewer
                src={activePdf.downloadUrl}
                title={activePdf.title}
                showDownload={false}
                className="h-full"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Books;