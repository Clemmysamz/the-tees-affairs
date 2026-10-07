export default function ContactPage() {
  return (
    <div className="container-shell py-16">
      <div className="mx-auto max-w-4xl rounded-[2rem] border border-zinc-200 bg-white p-8">
        <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">Contact</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-[-0.06em] text-zinc-900">Let’s talk style.</h1>

        <div className="mt-10 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-6 text-sm text-zinc-600">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Email</p>
              <p className="mt-2 text-base text-zinc-900">info@teesaffairs.com</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Phone</p>
              <p className="mt-2 text-base text-zinc-900">+234 (000) 000-0000</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">WhatsApp</p>
              <p className="mt-2 text-base text-zinc-900">Configured in admin settings</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Locations</p>
              <p className="mt-2 text-base text-zinc-900">Benin City, Edo State</p>
              <p className="mt-1 text-base text-zinc-900">Abuja, Nigeria</p>
            </div>
          </div>

          <form className="space-y-5">
            <div className="grid gap-4 sm:grid-cols-2">
              <input type="text" placeholder="First name" className="border border-zinc-200 px-4 py-3" />
              <input type="text" placeholder="Last name" className="border border-zinc-200 px-4 py-3" />
            </div>
            <input type="email" placeholder="Email address" className="w-full border border-zinc-200 px-4 py-3" />
            <input type="text" placeholder="Subject" className="w-full border border-zinc-200 px-4 py-3" />
            <textarea rows={6} placeholder="How can we help?" className="w-full border border-zinc-200 px-4 py-3" />
            <button type="submit" className="bg-black px-6 py-3 text-sm uppercase tracking-[0.18em] text-white">Send message</button>
          </form>
        </div>
      </div>
    </div>
  );
}
