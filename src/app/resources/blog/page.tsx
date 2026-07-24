"use client";

import { useRouter } from 'next/navigation';
import PageBanner from '@/components/PageBanner';
import { posts } from '../../../../lib/post';

export default function BlogPage() {
  const router = useRouter();

  return (
    /* text-[16px] makes the text and inner elements slightly smaller */
    <div className="bg-white text-[16px]">
      <PageBanner title="Blog" />
      <main className="bg-[#f5f5f5] py-12 pb-20 max-sm:py-8 max-sm:pb-15">
        {/* Restored the wide container so the cards themselves stay large */}
        <div className="max-w-[1440px] mx-auto px-6 max-lg:px-8 max-sm:px-5">
          <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-7 max-lg:gap-6 max-sm:gap-5">
            {posts.map((post) => (
              <article 
                key={post.id} 
                className="bg-[#f0f2f5] rounded-none overflow-hidden cursor-pointer flex flex-col transition-all duration-200 hover:shadow-md group"
                onClick={() => router.push(`/blog-article/${post.slug}`)}
              >
                {/* Image */}
                <div className="w-full aspect-video overflow-hidden bg-[#dde3f0] shrink-0">
                  {post.image ? (
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover block transition-transform duration-[350ms] group-hover:scale-[1.02]" 
                    />
                  ) : (
                    <div className="w-full h-full bg-[#c8d0e0]" />
                  )}
                </div>

                {/* Content Body - Clean, balanced padding layout */}
                <div className="p-[1.8em_1.6em_2em] flex flex-col flex-1">
                  {/* Date format updated to dark blue, uppercase text */}
                  <p className="font-sans text-[0.8em] font-medium text-[#1e3a8a] mb-[0.6em] uppercase tracking-wide">
                    {post.date}
                  </p>
                  
                  {/* Headline: Clean, condensed, bold uppercase typography */}
                  <h2 className="font-sans text-[1.25em] font-extrabold text-[#05264A111] uppercase tracking-normal leading-[1.2] mb-4 flex-1">
                    {post.title}
                  </h2>
                </div>

                {/* Accent Banner Action Button */}
                <div className="w-full bg-[#164081] py-[0.8em] text-center transition-colors duration-150 group-hover:bg-[#0f2d5c]">
                  <span className="font-sans text-[0.78em] font-bold text-white uppercase tracking-widest">
                    Read More
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
