import dynamic from 'next/dynamic';

const ClientPage = dynamic(() => import('./ClientPage'), { ssr: false });

export default function Page({ params }) {
  return <ClientPage params={params} />;
}
