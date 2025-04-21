import Header from '@/components/Header/page'
import Footer from '@/components/Footer/page'
import React from 'react';

export default function TermsAndConditionsLayout({
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