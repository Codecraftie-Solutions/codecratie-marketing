# CodeCraftie Solutions

Next.js (App Router), TypeScript (strict), Tailwind CSS v4.

```bash
cp .env.example .env.local
npm install
npm run dev        # http://localhost:3000
npm run typecheck && npm run lint && npm run build
```

- **Content** lives in `lib/data/*` and `lib/constants/site.ts`. Replace placeholders there.
- **Project screenshots** go in `public/images/projects/<slug>/`; reference them in `lib/data/projects.ts` via `image`.
- **Career Launch / contact email**: set `NEXT_PUBLIC_CAREER_LAUNCH_URL` and `NEXT_PUBLIC_CONTACT_EMAIL`. The UI hides or marks anything that depends on them until then.
- **Form**: `POST /api/contact` validates, sanitises and calls `sendProjectInquiry()` (`lib/contact/send.ts`). Until a provider is added in `lib/contact/providers/index.ts` and `CONTACT_EMAIL` is set, it returns 503 and the form says submissions can't be accepted yet. Use `EMAIL_PROVIDER=log` in development to print submissions to the server console.
- **Motion**: `public/js/motion.js` is the approved prototype's JS, loaded by `components/motion/Motion.tsx`. Internal links are plain `<a>` so each page load initialises it cleanly.
