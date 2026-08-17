import React, { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Download, Layers } from 'lucide-react';

export interface LightboxImage {
  src: string;
  caption: string;
  description?: string;
  projectTitle?: string;
}

interface LightboxProps {
  images: LightboxImage[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNavigate
}) => {
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        onNavigate((currentIndex + 1) % images.length);
        setIsZoomed(false);
      } else if (e.key === 'ArrowLeft') {
        onNavigate((currentIndex - 1 + images.length) % images.length);
        setIsZoomed(false);
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, currentIndex, images.length, onClose, onNavigate]);

  if (!isOpen || images.length === 0) return null;

  const currentImage = images[currentIndex] || images[0];

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    onNavigate((currentIndex - 1 + images.length) % images.length);
    setIsZoomed(false);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    onNavigate((currentIndex + 1) % images.length);
    setIsZoomed(false);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/95 backdrop-blur-xl transition-all duration-300 animate-in fade-in"
      onClick={onClose}
    >
      {/* Top Bar Controls */}
      <div
        className="absolute top-0 left-0 right-0 p-4 sm:p-6 flex items-center justify-between z-30 bg-gradient-to-b from-slate-950/90 to-transparent"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center gap-3">
          <span className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            <Layers className="w-5 h-5" />
          </span>
          <div>
            <h4 className="text-white font-semibold text-sm sm:text-base">
              {currentImage.projectTitle || 'Production Screenshot'}
            </h4>
            <p className="text-xs text-slate-400">
              Image {currentIndex + 1} of {images.length}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsZoomed(!isZoomed)}
            title={isZoomed ? 'Zoom Out' : 'Zoom In'}
            className="p-2.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 border border-slate-700 transition-colors"
          >
            {isZoomed ? <ZoomOut className="w-5 h-5" /> : <ZoomIn className="w-5 h-5" />}
          </button>
          <a
            href={currentImage.src}
            download
            target="_blank"
            rel="noreferrer"
            title="Open High-Res"
            className="p-2.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 border border-slate-700 transition-colors hidden sm:flex"
          >
            <Download className="w-5 h-5" />
          </a>
          <button
            onClick={onClose}
            title="Close Lightbox (Esc)"
            className="p-2.5 rounded-xl bg-slate-900/80 hover:bg-red-500/20 hover:text-red-400 text-slate-300 border border-slate-700 hover:border-red-500/40 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Image Container */}
      <div
        className="relative max-w-7xl max-h-[82vh] w-full mx-4 sm:mx-12 flex flex-col items-center justify-center"
        onClick={e => e.stopPropagation()}
      >
        <div
          className={`relative overflow-hidden rounded-2xl border border-slate-700/80 bg-slate-900 shadow-2xl transition-transform duration-300 ${
            isZoomed ? 'scale-125 cursor-zoom-out' : 'cursor-zoom-in'
          }`}
          onClick={() => setIsZoomed(!isZoomed)}
        >
          <img
            src={currentImage.src}
            alt={currentImage.caption || 'Project screenshot preview'}
            className="max-h-[68vh] w-auto object-contain select-none"
            loading="eager"
          />
        </div>

        {/* Caption & Description */}
        <div className="mt-4 max-w-2xl text-center px-4">
          <h3 className="text-white font-medium text-base sm:text-lg">
            {currentImage.caption}
          </h3>
          {currentImage.description && (
            <p className="text-sm text-slate-400 mt-1">
              {currentImage.description}
            </p>
          )}
        </div>
      </div>

      {/* Navigation Arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={handlePrev}
            aria-label="Previous image"
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-900/80 hover:bg-cyan-500 hover:text-slate-950 text-white border border-slate-700 transition-all duration-200 z-30 shadow-xl"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            aria-label="Next image"
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-900/80 hover:bg-cyan-500 hover:text-slate-950 text-white border border-slate-700 transition-all duration-200 z-30 shadow-xl"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      {/* Bottom Thumbnail Strip */}
      {images.length > 1 && (
        <div
          className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 p-2 rounded-2xl bg-slate-950/80 border border-slate-800 backdrop-blur-md z-30"
          onClick={e => e.stopPropagation()}
        >
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => {
                onNavigate(idx);
                setIsZoomed(false);
              }}
              className={`w-14 h-9 rounded-lg overflow-hidden border-2 transition-all ${
                currentIndex === idx
                  ? 'border-cyan-400 scale-105 shadow-md shadow-cyan-500/20'
                  : 'border-transparent opacity-60 hover:opacity-100'
              }`}
            >
              <img
                src={img.src}
                alt={img.caption}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
