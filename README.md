# Stripe + Supabase Integration Showcase

This project demonstrates a **Stripe + Supabase integration**, allowing users to **authenticate** and make **test payments**.

---

## Requirements

You need either:

- **Docker** installed on your machine  
**or**  
- A regular **Next.js environment** (run `npm install` → `npm run dev`)

---

## Getting Started

You must have both **Supabase** and **Stripe** accounts. Set the following environment variables in your `.env` file:

```env
# Your local domain
DOMAIN="http://localhost:3000"

# Stripe API keys
STRIPE_SECRET_KEY="[from Stripe dashboard]"
STRIPE_SECRET_HOOK="[Production: your webhook URL] | [Development: run docker-compose and check terminal]"

# Supabase project info
NEXT_PUBLIC_SUPABASE_URL="[your Supabase project URL]"
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY="[Supabase anon key]"
```

# Once configured, you can start the project:

### If using Docker
`docker-compose up`

### If using local Next.js setup
`npm install` then
`npm run dev`
