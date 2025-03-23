import { SampleProvider } from '@/context/sample-context';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* NAVBAR HERE */}
      <main>
        <SampleProvider>{children}</SampleProvider>
      </main>
    </>
  );
}
