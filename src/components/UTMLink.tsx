// src/components/UTMLink.tsx

'use client';

import React from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

function useUTMQueryString() {
  const searchParams = useSearchParams();
  
  if (!searchParams) return '';
  
  const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'utm_id'];
  const utmPairs = utmKeys
      .map(key => {
        const val = searchParams.get(key);
        return val ? `${key}=${encodeURIComponent(val)}` : '';
      })
      .filter(Boolean);
  
  return utmPairs.length > 0 ? `?${utmPairs.join('&')}` : '';
}

export default function UTMLink({ href, className, children, ...props }: { href: string; className?: string; children: React.ReactNode; [key: string]: any }) {
  const utmQuery = useUTMQueryString();
  
  // Don't append UTMs to external links, emails, phone numbers, or anchors
  const isExternal = href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('#');
  const finalHref = isExternal ? href : `${href.replace(/\/?$/, '/')}${utmQuery}`;
  
  return (
    <Link href={finalHref} className={className} {...props}>
      {children}
    </Link>
  );
}
