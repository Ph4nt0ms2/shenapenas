export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen">
      <main className="container mx-auto min-w-[100%] px-6 flex-grow pt-16 bg-gradient-to-b from-purple-900 to-purple-500">
        {children}
      </main>
    </div>
  );
}
