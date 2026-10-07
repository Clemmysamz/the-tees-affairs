'use client';

import { useState } from 'react';

export default function AccountPage() {
  const [mode, setMode] = useState<'login' | 'register'>('login');

  return (
    <div className="container-shell py-16">
      <div className="mx-auto max-w-xl rounded-[2rem] border border-zinc-200 bg-white p-8">
        <div className="mb-8 flex gap-3 rounded-full bg-zinc-100 p-1">
          <button type="button" onClick={() => setMode('login')} className={`flex-1 rounded-full px-4 py-2 text-sm uppercase tracking-[0.18em] ${mode === 'login' ? 'bg-black text-white' : 'text-zinc-600'}`}>
            Login
          </button>
          <button type="button" onClick={() => setMode('register')} className={`flex-1 rounded-full px-4 py-2 text-sm uppercase tracking-[0.18em] ${mode === 'register' ? 'bg-black text-white' : 'text-zinc-600'}`}>
            Register
          </button>
        </div>

        <form className="space-y-5">
          {mode === 'register' ? (
            <div className="grid gap-4 sm:grid-cols-2">
              <input type="text" placeholder="First name" className="border border-zinc-200 px-4 py-3" />
              <input type="text" placeholder="Last name" className="border border-zinc-200 px-4 py-3" />
            </div>
          ) : null}
          <input type="email" placeholder="Email address" className="w-full border border-zinc-200 px-4 py-3" />
          <input type="password" placeholder="Password" className="w-full border border-zinc-200 px-4 py-3" />
          <button type="submit" className="w-full bg-black px-6 py-3 text-sm uppercase tracking-[0.18em] text-white">
            {mode === 'login' ? 'Login' : 'Create account'}
          </button>
        </form>
      </div>
    </div>
  );
}
