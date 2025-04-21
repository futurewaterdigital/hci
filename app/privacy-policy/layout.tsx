import Header from '@/components/Header/page'
import Footer from '@/components/Footer/page'
import React from 'react';

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
} 