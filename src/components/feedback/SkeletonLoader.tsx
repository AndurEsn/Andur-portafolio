import React from 'react';
import { Language } from '../../types';

interface SkeletonLoaderProps {
  language: Language;
}

export default function SkeletonLoader({ language }: SkeletonLoaderProps) {
  return (
    <div
      className="pt-24 pb-16 px-4 max-w-7xl mx-auto w-full flex flex-col gap-12 animate-pulse"
      lang={language}
    >
      
      {/* Hero Skeleton */}
      <section className="flex flex-col items-center text-center max-w-4xl mx-auto w-full space-y-6">
        {/* Avatar */}
        <div className="w-24 h-24 rounded-full bg-surface-high animate-shimmer" />
        
        {/* Designer Name */}
        <div className="h-4 w-32 bg-surface-high rounded-full animate-shimmer" />
        
        {/* Headline lines */}
        <div className="space-y-3 w-full max-w-2xl">
          <div className="h-10 sm:h-12 w-full bg-surface-high rounded-2xl animate-shimmer" />
          <div className="h-10 sm:h-12 w-3/4 mx-auto bg-surface-high rounded-2xl animate-shimmer" />
        </div>
        
        {/* Body lines */}
        <div className="space-y-2 w-full max-w-lg pt-4">
          <div className="h-4 w-full bg-surface-high rounded-full animate-shimmer" />
          <div className="h-4 w-5/6 mx-auto bg-surface-high rounded-full animate-shimmer" />
        </div>
        
        {/* CTA Button */}
        <div className="h-14 w-48 bg-surface-high rounded-2xl mt-4 animate-shimmer" />
      </section>

      {/* Bento Metrics Skeleton */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full pt-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-surface-lowest border border-border rounded-2xl p-6 h-48 flex flex-col justify-between">
            <div className="flex justify-between items-center">
              <div className="w-12 h-12 rounded-xl bg-surface-high animate-shimmer" />
              <div className="w-24 h-4 bg-surface-high rounded-full animate-shimmer" />
            </div>
            <div className="space-y-2">
              <div className="h-8 w-24 bg-surface-high rounded-xl animate-shimmer" />
              <div className="h-4 w-36 bg-surface-high rounded-full animate-shimmer" />
            </div>
          </div>
        ))}
      </section>

      {/* Projects Skeleton */}
      <section className="space-y-8 pt-8">
        <div className="flex flex-col items-center text-center gap-3">
          <div className="h-8 w-48 bg-surface-high rounded-xl animate-shimmer" />
          <div className="h-4 w-64 bg-surface-high rounded-full animate-shimmer" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[1, 2].map((i) => (
            <div key={i} className="bg-surface-lowest rounded-2xl border border-border p-4 space-y-4">
              <div className="aspect-[16/10] bg-surface-high rounded-xl animate-shimmer" />
              <div className="space-y-2 px-2">
                <div className="h-6 w-3/4 bg-surface-high rounded-lg animate-shimmer" />
                <div className="h-4 w-full bg-surface-high rounded-md animate-shimmer" />
                <div className="h-4 w-5/6 bg-surface-high rounded-md animate-shimmer" />
              </div>
              <div className="h-12 bg-surface-high rounded-xl animate-shimmer" />
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
