import Link from 'next/link';
import Image from 'next/image';
import { ArrowRightIcon, CheckCircleIcon, ShieldCheckIcon, ShirtIcon, SparklesIcon, TruckIcon } from '@/components/Icons';
import { ProductCard } from '@/components/ProductCard';
import { SectionHeading } from '@/components/SectionHeading';
import { colorOptions, fitOptions, getBestSellers, getFeaturedProducts, getNewArrivals } from '@/lib/data';

export default function HomePage() {
  const featured = getFeaturedProducts();
  const arrivals = getNewArrivals();
  const bestSellers = getBestSellers();

  return (
    <div>
      <section className="bg-[#f5f1ea]">
        <div className="container-shell grid gap-8 py-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-20">
          <div>
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.35em] text-zinc-600">Premium Nigerian essentials</p>
            <h1 className="max-w-xl text-5xl font-semibold tracking-[-0.05em] text-zinc-950 sm:text-6xl">
              EVERYDAY TEES. ELEVATED.
            </h1>
            <p className="mt-6 max-w-lg text-lg text-zinc-700">
              Premium everyday T-shirts, designed for effortless style.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/shop" className="inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-medium uppercase tracking-[0.18em] text-white transition hover:bg-zinc-800">
                Shop T-shirts <ArrowRightIcon className="h-4 w-4" />
              </Link>
              <Link href="/about" className="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white px-6 py-3 text-sm font-medium uppercase tracking-[0.18em] text-zinc-900 transition hover:border-zinc-900">
                Explore collection
              </Link>
            </div>
            <div className="mt-10 flex items-center gap-8 text-sm text-zinc-600">
              <div className="flex items-center gap-2"><CheckCircleIcon className="h-4 w-4 text-emerald-600" /> Nationwide delivery</div>
              <div className="flex items-center gap-2"><CheckCircleIcon className="h-4 w-4 text-emerald-600" /> Secure payments</div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-zinc-200 bg-white p-3 shadow-[0_30px_80px_rgba(0,0,0,0.08)]">
            <div className="overflow-hidden rounded-[1.5rem]">
              <Image
                src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=80"
                alt="TEES AFFAIRS product styling"
                width={1200}
                height={1500}
                className="h-[30  0px] lg:h-[540px] w-full object-cover"
              />
            </div>
            <div className="absolute bottom-8 left-8 rounded-full bg-white/90 px-4 py-2 text-xs uppercase tracking-[0.2em] text-zinc-900 backdrop-blur-sm">
              Nigerians wear it best.
            </div>
          </div>
        </div>
      </section>

      <section className="container-shell py-20">
        <SectionHeading eyebrow="Featured" title="Curated bestsellers" description="Essential pieces built for everyday wear, refined finishes, and premium comfort." />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-shell">
          <SectionHeading eyebrow="Shop by color" title="Built for your palette" description="Choose your tone and refine your everyday rotation." />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {colorOptions.map((color) => (
              <Link key={color} href={`/shop?color=${encodeURIComponent(color)}`} className="group flex items-center justify-between border border-zinc-200 bg-stone-50 px-5 py-6 transition hover:border-zinc-900 hover:bg-white">
                <div className="flex items-center gap-4">
                  <span className="inline-block h-8 w-8 rounded-full border border-zinc-200" style={{ backgroundColor: color === 'Black' ? '#111111' : color === 'White' ? '#f4f4f5' : color === 'Cream' ? '#e7d7b8' : color === 'Grey' ? '#9ca3af' : color === 'Navy' ? '#1b2c4d' : color === 'Brown' ? '#7c4f3e' : color === 'Green' ? '#4a694a' : '#b63d3d' }} />
                  <span className="text-lg font-medium text-zinc-900">{color}</span>
                </div>
                <ArrowRightIcon className="h-4 w-4 text-zinc-500 transition group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="container-shell py-20">
        <SectionHeading eyebrow="Fit guide" title="Find your ideal cut" description="Relaxed, refined, or streamlined — each fit is designed to move with your day." />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {fitOptions.map((fit) => (
            <Link key={fit} href={`/shop?fit=${encodeURIComponent(fit)}`} className="rounded-[1.5rem] border border-zinc-200 bg-[#f3f1ee] p-8 text-center transition hover:bg-white hover:shadow-sm">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-zinc-900 shadow-sm">
                <ShirtIcon className="h-5 w-5" />
              </div>
              <p className="text-xl font-medium text-zinc-900">{fit}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-zinc-950 py-20 text-white">
        <div className="container-shell">
          <SectionHeading eyebrow="Why TEES AFFAIRS" title="Premium quality, every day" description="A brand built for comfort, confidence, and the rhythm of Nigerian life." />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {[
              ['Premium Quality', 'Thoughtful fabrics and consistent finishing that feel elevated from the very first wear.'],
              ['Comfortable Fabrics', 'Soft-touch cottons, comfortable weights, and polished silhouettes designed to last.'],
              ['Designed for Everyday Wear', 'Classic fits that transition from work to weekends without effort.'],
              ['Nationwide Delivery', 'Fast dispatch and reliable shipping across Nigeria with transparent delivery updates.'],
              ['Secure Payments', 'Trusted checkout and safe payment handling for everyday Nigerian shoppers.'],
              ['Easy Customer Support', 'Friendly guidance from team TEES AFFAIRS when you need help selecting or ordering.'],
            ].map(([title, text], index) => (
              <div key={title} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-zinc-900">
                  {index % 2 === 0 ? <SparklesIcon className="h-5 w-5" /> : index % 3 === 0 ? <TruckIcon className="h-5 w-5" /> : <ShieldCheckIcon className="h-5 w-5" />}
                </div>
                <h3 className="mb-3 text-xl font-medium text-white">{title}</h3>
                <p className="text-sm leading-7 text-zinc-300">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-shell py-20">
        <SectionHeading eyebrow="New arrivals" title="Fresh drops" description="New pieces styled for the contemporary Nigerian wardrobe." />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {arrivals.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="bg-stone-100 py-20">
        <div className="container-shell">
          <SectionHeading eyebrow="Best sellers" title="The pieces everyone returns to" description="Customer favourites measured by repeat orders and everyday demand." />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {bestSellers.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="container-shell py-20">
        <div className="grid gap-8 rounded-[2rem] border border-zinc-200 bg-white p-8 lg:grid-cols-[0.9fr_1.1fr] lg:p-12">
          <div className="overflow-hidden rounded-[1.5rem]">
            <Image src="/images/Ceo_tees_affairs.jpeg" alt="TEES AFFAIRS CEO Naibe Nancy" width={900} height={1100} className="h-full w-full object-cover" />
          </div>
          <div className="flex flex-col justify-center">
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-zinc-500">Brand story</p>
            <h2 className="font-serif text-4xl text-zinc-900 sm:text-5xl">Simple pieces. Strong identity.</h2>
            <p className="mt-6 text-lg leading-8 text-zinc-700">
              TEES AFFAIRS is a proudly Nigerian brand created for people who want everyday essentials with clarity, confidence, and a clean visual language.
            </p>
            <p className="mt-4 text-base leading-7 text-zinc-600">
              Founded with a focus on modern comfort and premium basics, we operate primarily from Benin City and Abuja, bringing consistent quality to customers across Nigeria.
            </p>
            <div className="mt-8 border-t border-zinc-200 pt-6">
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">CEO</p>
              <p className="mt-2 text-2xl font-medium text-zinc-900">Naibe Nancy</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 py-20 text-white">
        <div className="container-shell max-w-4xl text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-zinc-400">Newsletter</p>
          <h2 className="mt-6 text-4xl font-semibold tracking-[-0.05em]">Stay in the loop.</h2>
          <p className="mt-4 text-zinc-300">Get product updates, new drops, and curated style notes from TEES AFFAIRS.</p>
          <form className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <input type="email" placeholder="Email address" className="min-w-[260px] border border-white/20 bg-white/5 px-4 py-3 text-white placeholder:text-zinc-400 focus:outline-none" />
            <button type="submit" className="bg-white px-6 py-3 text-sm font-medium uppercase tracking-[0.18em] text-zinc-900">Subscribe</button>
          </form>
        </div>
      </section>
    </div>
  );
}
