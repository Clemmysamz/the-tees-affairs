export default function TrackOrderPage() {
  return (
    <div className="container-shell py-16">
      <div className="mx-auto max-w-xl rounded-[2rem] border border-zinc-200 bg-white p-8 text-center">
        <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">Order tracking</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-[-0.06em] text-zinc-900">Track your order</h1>
        <form className="mt-8 space-y-5 text-left">
          <input type="text" placeholder="Order number" className="w-full border border-zinc-200 px-4 py-3" />
          <input type="email" placeholder="Email address or phone number" className="w-full border border-zinc-200 px-4 py-3" />
          <button type="submit" className="w-full bg-black px-6 py-3 text-sm uppercase tracking-[0.18em] text-white">Track order</button>
        </form>
      </div>
    </div>
  );
}
