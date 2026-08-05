import React from "react";

function PdfViewer({ src, title, showDownload = true }) {
  return (
    <div className="relative rounded-lg overflow-hidden border border-white/5 bg-black/40">
      <iframe
        src={src}
        title={title}
        className="w-full h-96"
        style={{ border: "none" }}
      />

      {showDownload && (
        <a
          href={src}
          download
          className="absolute right-3 top-3 inline-flex items-center justify-center rounded-full bg-amber p-2 text-ink shadow-lg"
          aria-label={`Download ${title}`}
          title={`Download ${title}`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
            <path d="M5 20h14v-2H5v2zM12 3v10.17l3.59-3.59L17 11l-5 5-5-5 1.41-1.41L11 13.17V3h1z" />
          </svg>
        </a>
      )}
    </div>
  );
}

export default PdfViewer;
