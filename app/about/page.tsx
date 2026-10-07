import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="container-shell py-16">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="overflow-hidden rounded-[2rem] border border-zinc-200 bg-white">
          <Image src="/images/Ceo_tees_affairs.jpeg" alt="TEES AFFAIRS CEO Naibe Nancy" width={1200} height={1500} className="h-full w-full object-cover" />
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">About us</p>
          <h1 className="mt-5 text-4xl font-semibold tracking-[-0.06em] text-zinc-900">Simple pieces. Strong identity.</h1>
          <p className="mt-6 text-lg leading-8 text-zinc-700">
            TEES AFFAIRS was built to make premium everyday basics feel modern, distinct, and easy to wear. We design for confidence, comfort and the rhythm of everyday life across Nigeria.
          </p>
          <p className="mt-4 text-base leading-7 text-zinc-600">
            Proudly Nigerian, our brand is rooted in the energy of Benin City and Abuja, bringing carefully made essentials to shoppers from coast to coast.
          </p>
          <div className="mt-8 border-t border-zinc-200 pt-6">
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">CEO</p>
            <p className="mt-2 text-2xl font-medium text-zinc-900">NAIBE NANCY</p>
          </div>
        </div>
      </div>
    </div>
  );
}
