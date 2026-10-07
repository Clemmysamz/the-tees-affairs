import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="container-shell py-20 text-center">
      <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">404</p>
      <h1 className="mt-5 text-5xl font-semibold text-zinc-900">Page not found.</h1>
      <p className="mt-4 text-zinc-600">The page you are looking for may have moved or no longer exists.</p>
      <Link href="/" className="mt-8 inline-flex bg-black px-6 py-3 text-sm uppercase tracking-[0.18em] text-white">Back home</Link>
    </div>
  );
}
