# TEES AFFAIRS

TEES AFFAIRS is a premium Nigerian T-shirt brand storefront and admin experience built with Next.js, TypeScript, and a scalable ecommerce architecture. The project is structured to support the customer journey from browsing products to checkout, order tracking, and admin product management.

## Tech stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS
- Lucide React
- Framer Motion
- Prisma ORM
- PostgreSQL-ready database layer
- Zod validation
- Paystack-ready checkout flow
- Cloudinary-ready asset handling
- Resend-ready transactional emails

## Installation

1. Install dependencies:
   npm install
2. Copy the environment template:
   cp .env.example .env.local
3. Fill in your database, payment, and media settings.
4. Run the app:
   npm run dev

## Environment variables

Provide values for:

- DATABASE_URL
- NEXTAUTH_SECRET
- NEXTAUTH_URL
- PAYSTACK_SECRET_KEY
- NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY
- CLOUDINARY_CLOUD_NAME
- CLOUDINARY_API_KEY
- CLOUDINARY_API_SECRET
- RESEND_API_KEY
- EMAIL_FROM
- NEXT_PUBLIC_APP_URL
- WHATSAPP_NUMBER

## Database setup

The schema is designed for PostgreSQL. After adding a valid connection string, run:

npx prisma generate
npx prisma db push

## Prisma migrations

npx prisma migrate dev --name init

## Seed command

npx prisma db seed

## Development server

npm run dev

## Admin account setup

This project includes a storefront and a dashboard shell for admin flows. In production, secure admin authentication and role checks should be enforced server-side before exposing administrative routes.

## Paystack setup

1. Create a Paystack account.
2. Add your public and secret keys to environment variables.
3. Validate payments server-side before reducing inventory or confirming orders.

## Cloudinary setup

1. Create a Cloudinary account.
2. Add your cloud name, API key, and secret.
3. Upload assets through the admin UI or the configured storage layer.

## Resend setup

1. Create a Resend account.
2. Add your API key and verified sender address.
3. Use the email provider for transactional notifications.

## Production deployment

Deploy this app using Vercel or another Node-friendly platform. Ensure your database and environment variables are configured securely in production.

## Webhook configuration

Configure Paystack webhooks so payment updates are processed server-side. Never trust frontend confirmation as proof of payment.

## Security considerations

- Never expose secrets to the browser.
- Validate all requests on the server.
- Protect admin routes with authorization.
- Keep cart and inventory logic server validated.
- Use verified payment status before fulfillment.

## Notes

This storefront foundation is designed for a premium Nigerian fashion brand and includes working storefront flow, product catalog data, cart logic, checkout presentation, and a usable admin dashboard structure.
