# Maktab Zaid Bin Sabit

## Current State
- Frontend-only Islamic madrasa website with 4 pages: Home, Courses, Admission, Contact
- Green & white Islamic theme with geometric patterns
- Contact page has outdated office hours (Sat–Thu: 8:00 AM – 2:00 PM) and incomplete address (Behrampura, Ahmedabad)
- Footer has dummy address (123 Madrasa Road...) and wrong phone (+92 300 1234567) and old timing
- Admission banner text: "Admission Open 2026-27 | Last Date: 30 April" (missing "Limited Seats Available")
- Hero section has heading but no subtext about Ahmedabad
- No Timings section exists on the site
- Islamic pattern exists but could be richer/more prominent

## Requested Changes (Diff)

### Add
- Hero subtext: "Best Islamic education for children in Ahmedabad"
- New Timings section on HomePage with three time slots:
  - Subah: 7:00 – 9:00 AM
  - Dopahar: 2:00 – 4:00 PM
  - Shaam: Maghrib – Isha
- Roman Urdu + English language mix for accessibility to Urdu-speaking parents
- More prominent Islamic geometric pattern (e.g., star/arabesque) as subtle background decoration

### Modify
- Office Hours everywhere: change from "Sat–Thu: 8:00 AM – 2:00 PM" to "Mon–Sat: 4:00 PM – 6:00 PM"
- Contact page address: change from "Behrampura, Ahmedabad" to full address: "2nd Floor, Muhammadi Jama Masjid (Markaz), Ahele Hadees, Parixitlal Nagar, Behrampura, Ahmedabad – 380028"
- Contact page phone: keep as 8849100903 (no international format, just local)
- Footer address: replace "123 Madrasa Road, Islamic Colony, City – 12345" with full correct address
- Footer phone: replace "+92 300 1234567" with "8849100903"
- Footer timing: update to "Mon–Sat: 4:00 PM – 6:00 PM"
- Admission banner: update to "Admission Open 2026-27 | Last Date: 30 April | Limited Seats Available"
- Map placeholder in ContactPage: update text to show full address
- Admission note on contact page: update to match new banner text

### Remove
- International phone format (+92...) from footer and contact
- Old dummy address from footer

## Implementation Plan
1. Update `ContactPage.tsx`: fix address, phone (no international format), office hours
2. Update `Footer.tsx`: fix address, phone, timing
3. Update `HomePage.tsx`:
   - Add subtext to hero
   - Update admission banner text
   - Add new Timings section (Subah/Dopahar/Shaam) with Roman Urdu + English labels
4. Enhance Islamic pattern CSS: add a richer SVG arabesque/star pattern variant for backgrounds
5. Apply Roman Urdu + English mixed language in new Timings section and improve existing copy subtly
