# Fix Booking Email Address Task

## Steps:
- [x] Step 1: Create .env.local with OWNER_EMAIL=oasisofcalmholisticcenter@gmail.com
- [x] Step 2: Fix hardcoded email display typo in src/pages/Book.tsx
- [ ] Step 3: Test booking flow (navigate to /stlucia or /atlanta, click Book Now, submit form)
- [ ] Step 4: Verify emails use correct address (check console/server logs)

**Notes:** 
- Set EMAIL_USER and EMAIL_PASS in .env.local for Gmail (use App Password).
- Restart dev server after env changes: `bun dev` or `npm run dev`.

