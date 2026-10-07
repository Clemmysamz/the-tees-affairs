import Image from 'next/image';
import Link from 'next/link';
import { CheckIcon, HeartIcon, ShieldCheckIcon, ShoppingBagIcon, TruckIcon } from '@/components/Icons';
import { ProductCard } from '@/components/ProductCard';
import { getProductBySlug, products } from '@/lib/data';
import { formatCurrency } from '@/lib/cart';

export async function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return (
      <div className="container-shell py-20 text-center">
        <h1 className="text-4xl font-semibold text-zinc-900">Product not found</h1>
        <Link href="/shop" className="mt-6 inline-flex border border-zinc-200 px-6 py-3">Return to shop</Link>
      </div>
    );
  }

  return (
    <div className="container-shell py-12">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <div className="grid gap-4 md:grid-cols-3">
            {product.gallery.map((image, index) => (
              <div key={image} className={`overflow-hidden border ${index === 0 ? 'md:col-span-2' : ''}`}>
                <Image src={image} alt={`${product.name} view ${index + 1}`} width={900} height={1100} className="h-full w-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">{product.category}</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-[-0.06em] text-zinc-900">{product.name}</h1>
          <div className="mt-5 flex items-center gap-3">
            <span className="text-3xl font-semibold text-zinc-900">{formatCurrency(product.salePrice ?? product.price)}</span>
            {product.salePrice ? <span className="text-lg text-zinc-400 line-through">{formatCurrency(product.price)}</span> : null}
          </div>

          <p className="mt-6 text-base leading-7 text-zinc-600">{product.description}</p>

          <div className="mt-8 space-y-5 border-t border-zinc-200 pt-6">
            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.2em] text-zinc-500">Color</p>
              <div className="flex flex-wrap gap-3">
                {product.colors.map((color) => (
                  <span key={color} className="rounded-full border border-zinc-200 bg-stone-50 px-3 py-2 text-sm text-zinc-700">{color}</span>
                ))}
              </div>
            </div>
            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.2em] text-zinc-500">Size</p>
              <div className="flex flex-wrap gap-3">
                {product.sizes.map((size) => (
                  <span key={size} className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 text-sm text-zinc-700">{size}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <button type="button" className="inline-flex items-center gap-2 bg-black px-6 py-3 text-sm font-medium uppercase tracking-[0.2em] text-white">
              <ShoppingBagIcon className="h-4 w-4" /> Add to cart
            </button>
            <button type="button" className="inline-flex items-center gap-2 border border-zinc-200 bg-white px-6 py-3 text-sm font-medium uppercase tracking-[0.2em] text-zinc-900">
              <HeartIcon className="h-4 w-4" /> Wishlist
            </button>
          </div>

          <div className="mt-8 space-y-4 rounded-[1.5rem] border border-zinc-200 bg-stone-50 p-5 text-sm text-zinc-600">
            <div className="flex items-center gap-3"><CheckIcon className="h-4 w-4 text-emerald-600" /> In stock · {product.stock} units available</div>
            <div className="flex items-center gap-3"><TruckIcon className="h-4 w-4 text-zinc-700" /> Nationwide delivery within 3–5 working days</div>
            <div className="flex items-center gap-3"><ShieldCheckIcon className="h-4 w-4 text-zinc-700" /> Easy returns and secure checkout</div>
          </div>
        </div>
      </div>

      <div className="mt-16 grid gap-8 lg:grid-cols-[1fr_1fr]">
        <div>
          <h2 className="text-2xl font-semibold text-zinc-900">Product details</h2>
          <ul className="mt-5 space-y-3 text-zinc-600">
            {product.details.map((detail) => (
              <li key={detail} className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-zinc-900" /> {detail}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-zinc-900">Fabric & care</h2>
          <div className="mt-5 space-y-5 text-zinc-600">
            <p><span className="font-medium text-zinc-900">Fabric:</span> {product.fabric}</p>
            <p><span className="font-medium text-zinc-900">Care:</span> {product.care}</p>
            <p><span className="font-medium text-zinc-900">SKU:</span> {product.sku}</p>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-3xl font-semibold text-zinc-900">You may also like</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {products.slice(0, 4).map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
