import { ArrowUpRightIcon, CreditCardIcon, PackageIcon, ShoppingBagIcon, UsersIcon } from '@/components/Icons';

const stats = [
  { label: 'Total Revenue', value: '₦4.8M', icon: CreditCardIcon },
  { label: 'Today', value: '₦286K', icon: ArrowUpRightIcon },
  { label: 'Orders', value: '1,482', icon: ShoppingBagIcon },
  { label: 'Customers', value: '912', icon: UsersIcon },
  { label: 'Products', value: '84', icon: PackageIcon },
];

export default function AdminPage() {
  return (
    <div className="container-shell py-10">
      <h1 className="text-3xl font-semibold text-zinc-900">Overview</h1>
      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-[1.5rem] border border-zinc-200 bg-white p-5">
            <div className="flex items-center justify-between">
              <span className="text-sm text-zinc-500">{stat.label}</span>
              <stat.icon className="h-5 w-5 text-zinc-800" />
            </div>
            <div className="mt-8 text-3xl font-semibold text-zinc-900">{stat.value}</div>
          </div>
        ))}
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <div className="rounded-[1.5rem] border border-zinc-200 bg-white p-6">
          <h2 className="text-lg font-medium text-zinc-900">Revenue overview</h2>
          <div className="mt-5 h-52 rounded-[1rem] bg-gradient-to-r from-zinc-100 to-zinc-200" />
        </div>
        <div className="rounded-[1.5rem] border border-zinc-200 bg-white p-6">
          <h2 className="text-lg font-medium text-zinc-900">Order activity</h2>
          <div className="mt-5 h-52 rounded-[1rem] bg-gradient-to-r from-zinc-100 to-stone-200" />
        </div>
      </div>
    </div>
  );
}
