import PageBanner from "../components/common/PageBanner";
import PdfViewer from "../components/common/PdfViewer";
import { useState, useEffect } from "react";

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
  const [activePdf, setActivePdf] = useState(null);

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setActivePdf(null);
    }

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  function openPdf(book) {
    setActivePdf(book);
  }

  function closePdf() {
    setActivePdf(null);
  }
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
              <div className="mt-6 space-y-4">
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => {
                      // open a static viewer page in a new tab with query params
                      const url = `/pdf-viewer.html?src=${encodeURIComponent(
                        book.downloadUrl
                      )}&title=${encodeURIComponent(book.title)}`;
                      window.open(url, "_blank");
                    }}
                    className="inline-flex items-center gap-2 rounded-full bg-amber px-5 py-2 text-sm font-semibold text-ink transition hover:bg-amber/90"
                  >
                    View PDF
                  </button>

                  <a
                    href={book.downloadUrl}
                    download
                    className="inline-flex rounded-full bg-cream/90 px-4 py-2 text-sm font-medium text-ink transition hover:opacity-90"
                  >
                    Download PDF
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {activePdf && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-6"
          onClick={closePdf}
          role="dialog"
          aria-modal="true"
        >
          <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-end mb-3">
              <button
                onClick={closePdf}
                className="rounded-full bg-white/10 px-3 py-2 text-sm text-cream"
                aria-label="Close PDF viewer"
              >
                Close
              </button>
            </div>

            <PdfViewer
              src={activePdf.downloadUrl}
              title={activePdf.title}
              showDownload={true}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default Books;
