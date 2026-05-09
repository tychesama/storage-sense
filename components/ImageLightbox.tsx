"use client";

import Image from "next/image";
import { useState } from "react";

type ImageLightboxProps = {
  alt: string;
  src: string;
};

export function ImageLightbox({ alt, src }: ImageLightboxProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button type="button" onClick={() => setIsOpen(true)} className="group relative min-h-[280px] w-full overflow-hidden bg-[#071424] text-left">
        <Image src={src} alt={alt} fill sizes="(min-width: 1024px) 38vw, 100vw" className="object-cover transition duration-300 group-hover:scale-[1.03]" />
      </button>

      {isOpen ? (
        <div className="fixed inset-0 z-[100] grid place-items-center bg-[#020912]/90 p-4" role="dialog" aria-modal="true" aria-label={alt}>
          <button type="button" className="absolute inset-0 cursor-default" aria-label="Close image preview" onClick={() => setIsOpen(false)} />
          <div className="relative z-10 h-[82vh] w-full max-w-6xl border section-line bg-[#071424]">
            <Image src={src} alt={alt} fill sizes="100vw" className="object-contain" />
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute right-4 top-4 border border-[#8bbcff] bg-[#071424]/90 px-4 py-2 text-sm font-semibold text-bone hover:bg-[#8bbcff] hover:text-[#071424]"
            >
              Close
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
