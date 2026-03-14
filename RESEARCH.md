# PrettyMap Project Research

This document outlines research conducted on March 12, 2026, to inform the development and long-term strategy for the PrettyMap project (`prettyparasites.ai`). The research covers domain configuration, hosting best practices, and a roadmap for future features.

## 1. Domain Configuration: GoDaddy to Vercel

The primary goal is to point the `prettyparasites.ai` domain, registered with GoDaddy, to the application hosted on Vercel. Research indicates two primary methods for this configuration, with the **Nameservers method** being the most straightforward.

### Step-by-Step Guide (Nameservers Method)

1.  **Vercel Configuration**: Navigate to the Vercel project dashboard, select the `PrettyMap` project, and go to the "Settings" > "Domains" tab. Add `prettyparasites.ai` as a new domain.
2.  **Retrieve Nameservers**: Vercel will provide a set of nameservers (typically two, e.g., `ns1.vercel-dns.com` and `ns2.vercel-dns.com`).
3.  **GoDaddy Configuration**: Log in to the GoDaddy account and navigate to the domain portfolio. Select `prettyparasites.ai` and go to the DNS management section.
4.  **Update Nameservers**: Choose the option to edit or change the nameservers. Replace the default GoDaddy nameservers with the ones provided by Vercel.
5.  **Propagation**: Save the changes. DNS propagation can take anywhere from a few minutes to 48 hours to complete globally. Vercel will automatically provision an SSL certificate once the domain is verified.

### Alternative Method (A Record)

For more granular control, an A record can be used instead of delegating the entire domain to Vercel's nameservers. This involves adding the following DNS records in GoDaddy's DNS management panel:

| Record Type | Host  | Value                      | Purpose                          |
| ----------- | ----- | -------------------------- | -------------------------------- |
| **A**       | `@`   | `76.76.21.21`              | Points the apex domain to Vercel |
| **CNAME**   | `www` | `cname.vercel-dns.com`     | Points the www subdomain         |

The nameserver method is generally recommended for simplicity, as it allows Vercel to manage all DNS records automatically. The A record method is better suited for cases where other DNS records (e.g., MX for email) need to remain managed by GoDaddy.

## 2. Long-Term Hosting Best Practices

For a Vite/React application like PrettyMap, Vercel is an excellent hosting choice due to its seamless Git integration, automatic deployments, and global CDN. The following best practices will ensure scalability, performance, and reliability.

| Practice                    | Description                                                                                                  |
| --------------------------- | ------------------------------------------------------------------------------------------------------------ |
| **CI/CD via Git**           | Maintain a direct integration with the GitHub repository. Every push to `main` triggers a production deploy. |
| **Environment Variables**   | Manage all API keys and secrets using Vercel's environment variable settings. Never hard-code them.          |
| **Analytics and Monitoring** | Use Vercel Analytics for traffic and performance. Integrate Sentry or LogRocket for error tracking.          |
| **CDN Caching**             | Vercel's CDN automatically caches static assets. Use appropriate caching headers for dynamic content.        |
| **Image Optimization**      | Use Vercel's built-in image optimization or Cloudinary to serve properly sized and formatted images.         |
| **Preview Deployments**     | Leverage Vercel's automatic preview deployments for every pull request to test changes before merging.       |
| **Security Headers**        | Configure security headers (CSP, HSTS, X-Frame-Options) in `vercel.json` to harden the application.        |

## 3. Future Feature Roadmap

To evolve PrettyMap from a static showcase into a dynamic community platform, the following features are recommended for development.

### 3.1 User Authentication

Allowing users to sign up, log in, and manage profiles is the foundational step toward a community platform. The table below compares the leading authentication solutions for React applications.

| Solution          | Strengths                                                  | Considerations                                    |
| ----------------- | ---------------------------------------------------------- | ------------------------------------------------- |
| **Clerk**         | Best DX, pre-built UI components, social logins, webhooks  | Paid beyond free tier, vendor lock-in              |
| **Supabase Auth** | Open source, pairs directly with Supabase database         | Less polished UI components than Clerk             |
| **Auth.js**       | Flexible, self-hosted, wide provider support               | Requires more manual setup and configuration       |

**Recommendation:** Clerk is the strongest choice for PrettyMap due to its excellent developer experience, pre-built React components, and robust user management dashboard. It allows rapid implementation without sacrificing security.

### 3.2 Database and User Submissions

A database is needed to store user-generated content, particularly new map pins submitted by community members. The submission workflow should include a form with a location picker, geocoding for address-to-coordinate conversion, and a moderation queue for quality control.

| Solution          | Type                 | Strengths                                              |
| ----------------- | -------------------- | ------------------------------------------------------ |
| **Supabase**      | PostgreSQL (managed) | Real-time, auth, storage, generous free tier            |
| **PlanetScale**   | MySQL (serverless)   | Database branching, serverless scaling                  |
| **Neon**          | PostgreSQL (serverless) | Auto-scaling, branching, modern serverless Postgres  |

**Recommendation:** Supabase is the most compelling option because it bundles a PostgreSQL database with real-time subscriptions, file storage, and authentication in a single platform. This reduces architectural complexity significantly.

### 3.3 Real-Time Chat

Implementing real-time chat within the Discord-like sidebar channels is the feature that will transform PrettyMap from a directory into a living community. Messages should be persisted in the database and delivered in real-time to all connected clients.

| Solution              | Type            | Strengths                                                |
| --------------------- | --------------- | -------------------------------------------------------- |
| **Supabase Realtime** | Managed         | Built-in with Supabase, no additional service needed     |
| **Socket.io**         | Self-hosted     | Most popular, room support, fallback transports          |
| **Ably**              | Managed         | Enterprise-grade, pub/sub, presence indicators           |
| **Pusher**            | Managed         | Easy setup, good documentation, managed infrastructure   |

**Recommendation:** If Supabase is adopted for the database, its built-in Realtime feature is the natural choice for chat, as it eliminates the need for a separate real-time service. For more advanced features (typing indicators, presence, read receipts), Ably or Socket.io would be stronger alternatives.

## Sources

- [Vercel: Adding and Configuring a Custom Domain](https://vercel.com/docs/domains/working-with-domains/add-a-domain)
- [Connect your Vercel app with the GoDaddy domain (Medium)](https://zainsadaqat.medium.com/connect-your-vercel-app-with-the-godaddy-domain-within-5-minutes-e3de095d4c8c)
- [Next.js: Production Checklist](https://nextjs.org/docs/pages/guides/production-checklist)
- [Clerk: User Authentication for Next.js](https://clerk.com/articles/user-authentication-for-nextjs-top-tools-and-recommendations-for-2025)
- [Supabase Documentation](https://supabase.com/docs)
- [Socket.io Documentation](https://socket.io/docs/)
