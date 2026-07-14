'use client';

import dynamic from 'next/dynamic';

const BoothManagementSystem = dynamic(
  () => import('@/components/BoothManagementSystem'),
  {
    ssr: false,
    loading: () => (
      <div className="flex justify-center items-center h-96">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    )
  }
);

export default function BoothsPage() {
  return <BoothManagementSystem />;
}