import { products } from '@/lib/data';

export default function AdminProductsPage() {
  return (
    <div className="container-shell py-10">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-semibold text-zinc-900">Products</h1>
        <button type="button" className="bg-black px-5 py-3 text-sm uppercase tracking-[0.18em] text-white">Add Product</button>
      </div>

      <div className="overflow-hidden rounded-[1.5rem] border border-zinc-200 bg-white">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-zinc-50 text-zinc-600 uppercase tracking-[0.18em]">
            <tr>
              <th className="px-5 py-4">Product</th>
              <th className="px-5 py-4">Category</th>
              <th className="px-5 py-4">Stock</th>
              <th className="px-5 py-4">Price</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="border-t border-zinc-200">
                <td className="px-5 py-4 font-medium text-zinc-900">{product.name}</td>
                <td className="px-5 py-4 text-zinc-600">{product.category}</td>
                <td className="px-5 py-4 text-zinc-600">{product.stock}</td>
                <td className="px-5 py-4 text-zinc-900">₦{product.price.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
