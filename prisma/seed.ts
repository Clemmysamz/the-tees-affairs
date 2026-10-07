import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const products = [
    { slug: 'classic-black-tee', name: 'Classic Black Tee', price: 25000, salePrice: 22000, sku: 'TA-BLK-001', description: 'Premium everyday black tee', fit: 'Regular Fit', category: 'Essentials' },
    { slug: 'essential-white-tee', name: 'Essential White Tee', price: 24000, sku: 'TA-WHT-001', description: 'Clean everyday white tee', fit: 'Regular Fit', category: 'Essentials' },
    { slug: 'heavyweight-cream-tee', name: 'Heavyweight Cream Tee', price: 30000, salePrice: 27000, sku: 'TA-CRM-001', description: 'Premium heavyweight cream tee', fit: 'Relaxed Fit', category: 'Premium' },
  ];

  for (const entry of products) {
    await prisma.product.upsert({
      where: { slug: entry.slug },
      update: {},
      create: {
        slug: entry.slug,
        name: entry.name,
        description: entry.description,
        price: entry.price,
        salePrice: entry.salePrice,
        sku: entry.sku,
        fit: entry.fit,
        category: {
          connectOrCreate: {
            where: { name: entry.category },
            create: { name: entry.category, slug: entry.category.toLowerCase().replace(/\s+/g, '-') },
          },
        },
      },
    });
  }

  await prisma.siteSettings.upsert({
    where: { id: 'default' },
    update: {},
    create: {
      id: 'default',
      brandName: 'TEES AFFAIRS',
      currency: 'NGN',
      email: 'info@teesaffairs.com',
      phone: '+2340000000000',
      whatsapp: '2340000000000',
      address: 'Benin City and Abuja, Nigeria',
    },
  });
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
