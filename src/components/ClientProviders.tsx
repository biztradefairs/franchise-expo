// src/components/ClientProviders.tsx

'use client';

import React, { Suspense, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { UTMProvider } from '@/components/UTMProvider';
import { UTMDebugger } from '@/components/UTMDebugger';
import { getUTMParams } from '@/lib/utmTracker';

export function ClientProviders({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Track page views on route change with UTM data
  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      // Get UTM parameters
      const utmData = getUTMParams();

      // Prepare page view data
      const pageData: any = {
        page_path: pathname,
        page_title: document.title,
        page_location: window.location.href,
      };

      // Add UTM parameters to tracking if they exist
      if (utmData.utm_source) pageData.utm_source = utmData.utm_source;
      if (utmData.utm_medium) pageData.utm_medium = utmData.utm_medium;
      if (utmData.utm_campaign) pageData.utm_campaign = utmData.utm_campaign;
      if (utmData.utm_term) pageData.utm_term = utmData.utm_term;
      if (utmData.utm_content) pageData.utm_content = utmData.utm_content;
      if (utmData.utm_id) pageData.utm_id = utmData.utm_id;

      // Send to Google Analytics
      (window as any).gtag('config', 'G-CGKLPLYCF9', pageData);

      console.log(`📊 Page view tracked: ${pathname}`, utmData);
    }
  }, [pathname]);

  return (
    <Suspense fallback={null}>
      <UTMProvider>
        {children}
        <UTMDebugger />
      </UTMProvider>
    </Suspense>
  );
}
