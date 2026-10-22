import React from 'react';

interface VideoShowcaseProps {
  isPlayingVideo: boolean;
  setIsPlayingVideo: (val: boolean) => void;
}

export const VideoShowcase: React.FC<VideoShowcaseProps> = ({
  isPlayingVideo,
  setIsPlayingVideo
}) => {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white border-b border-[#EEF0F1]" id="video-section">
      <div className="mx-auto w-full max-w-[1260px] px-4 md:px-10 min-[993px]:px-[60px] text-center">
        {/* H2 Headline: 56px at 993px+, 48px from 768-992px, 40px at 767px and below */}
        <h2 className="text-[40px] md:text-[48px] min-[993px]:text-[56px] font-semibold leading-[1.12] text-[#40474F] tracking-tight mb-4">
          Project Intelligence<span className="text-[18px] font-medium align-super leading-none" style={{ verticalAlign: 'super', lineHeight: 0 }}>™</span> in <span className="text-[#0072EA]">Action</span>
        </h2>
        
        {/* Paragraph: 16px, LH 1.7, #5C6670, Max 720px */}
        <p className="text-[16px] leading-[1.7] text-[#5C6670] max-w-[720px] mx-auto mb-12">
          Watch how BST Global is helping AEC firms transition from reactive operations to predictive, project-first intelligence.
        </p>

        {/* Video Player Container */}
        <div className="max-w-[960px] mx-auto">
          <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-xl border border-[#EEF0F1] bg-[#00254D] group">
            {!isPlayingVideo ? (
              <div
                className="absolute inset-0 w-full h-full cursor-pointer flex flex-col items-center justify-center focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
                onClick={() => setIsPlayingVideo(true)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setIsPlayingVideo(true);
                  }
                }}
                tabIndex={0}
                role="button"
                aria-label="Play Event Video"
              >
                {/* Visual Backdrop Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#00254D] via-[#00254D]/95 to-[#0072EA]/40"></div>
                <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#0072EA_1px,transparent_1px)] [background-size:24px_24px]"></div>

                {/* Content Overlay */}
                <div className="relative z-10 flex flex-col items-center justify-center p-6 text-center">
                  <div className="w-20 h-20 rounded-full bg-[#0072EA] hover:bg-[#0055AF] text-white flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-200">
                    <svg className="w-9 h-9 fill-current ml-1" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <span className="mt-6 text-[12px] font-semibold uppercase tracking-wider text-[#3191FF]">
                    Featured Keynote
                  </span>
                  <span className="mt-2 text-lg md:text-xl font-semibold max-w-lg text-white leading-snug">
                    The Journey to Project Intelligence<span className="text-[18px] font-medium align-super leading-none" style={{ verticalAlign: 'super', lineHeight: 0 }}>™</span>
                  </span>
                </div>
              </div>
            ) : (
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube-nocookie.com/embed/--cHuBl8amI?autoplay=1&rel=0"
                title="BST Global - The Journey to Project Intelligence™"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
