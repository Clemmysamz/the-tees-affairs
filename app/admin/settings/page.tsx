export default function AdminSettingsPage() {
  return (
    <div className="container-shell py-10">
      <h1 className="text-3xl font-semibold text-zinc-900">Store settings</h1>
      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <div className="rounded-[1.5rem] border border-zinc-200 bg-white p-6">
          <h2 className="text-lg font-medium text-zinc-900">Brand & storefront</h2>
          <div className="mt-5 space-y-4">
            <input type="text" value="TEES AFFAIRS" className="w-full border border-zinc-200 px-4 py-3" />
            <input type="email" value="info@teesaffairs.com" className="w-full border border-zinc-200 px-4 py-3" />
            <input type="text" value="₦" className="w-full border border-zinc-200 px-4 py-3" />
          </div>
        </div>
        <div className="rounded-[1.5rem] border border-zinc-200 bg-white p-6">
          <h2 className="text-lg font-medium text-zinc-900">Payment & delivery</h2>
          <div className="mt-5 space-y-4">
            <input type="text" placeholder="Paystack public key" className="w-full border border-zinc-200 px-4 py-3" />
            <input type="text" placeholder="Delivery fee (Edo)" className="w-full border border-zinc-200 px-4 py-3" />
            <input type="text" placeholder="Delivery estimate" className="w-full border border-zinc-200 px-4 py-3" />
          </div>
        </div>
      </div>
    </div>
  );
}
