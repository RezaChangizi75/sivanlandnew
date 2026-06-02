"use client";

export function ProductDetailsSkeleton() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-8">
        <div className="grid gap-5 lg:grid-cols-[1fr_340px]">
          <div className="h-[520px] animate-pulse rounded-2xl bg-card" />
          <div className="h-[360px] animate-pulse rounded-2xl bg-card" />
        </div>
      </div>
    </main>
  );
}
