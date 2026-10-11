# Safar — Bespoke Tours & Travel Platform for Indian Globetrotters

An interactive, responsive travel agency website designed for Indian travelers looking for curated international and domestic holiday packages.

Modeled strictly on the high-end editorial reference design, featuring clean minimalist typography (`Outfit` + `Caveat` script accents), staggered tilted photocard galleries, interactive quote estimators, day-by-day itinerary previews, and multi-currency support.

---

## 🚀 Running Locally on Port 3000

The web server is configured to run on port **3000**.

### Preview URL
👉 **[http://localhost:3000](http://localhost:3000)** (or **[http://127.0.0.1:3000](http://127.0.0.1:3000)**)

### Commands to Run
```bash
# Using Python
python -m http.server 3000 -b 127.0.0.1

# Or using npm
npm start
```

---

## ⚡ Supabase Backend Integration

Connected to your Supabase Organization (**Ayaan | Content Creator**) via Supabase MCP:

- **Project Name**: `Safar Tours & Travels`
- **Project Ref**: `vnulxpvkuiqildklkjbl`
- **Region**: `ap-south-1` (Mumbai, India)
- **Status**: `ACTIVE_HEALTHY`
- **API URL**: `https://vnulxpvkuiqildklkjbl.supabase.co`

### Database Tables & Schema:
1. **`public.tour_inquiries`**
   - Automatically stores all tour booking calculations & quote requests (`lead_name`, `lead_phone`, `lead_email`, `tour_name`, `departure_city`, `departure_date`, `adults_count`, `children_count`, `meal_preference`, `flight_option`, `estimated_total`, `currency`, `booking_reference`, `status`).
   - Secured with Row Level Security (RLS) allowing anonymous visitor inserts.
2. **`public.newsletter_subscribers`**
   - Stores email subscriptions from the footer with unique constraints and RLS protection.
3. **`public.contact_inquiries`**
   - Stores general contact requests with RLS protection.


## 🌟 Key Features

### 1. Tailored for Indian Globetrotters
- **Guaranteed Visa Support**: Schengen, UK, US, Dubai, Japan, and Southeast Asia documentation guidance.
- **Pure Veg & Jain Meal Options**: Specially marked meal packages and Indian dining arrangements abroad.
- **Transparent Indian Rupee (₹) Pricing**: Compliant GST & refundable TCS tax calculations.
- **Departure from Major Indian Hubs**: Direct connections from Mumbai (BOM), Delhi (DEL), Bengaluru (BLR), Hyderabad (HYD), Ahmedabad (AMD), Chennai (MAA), and Kolkata (CCU).

### 2. Design & Layout Elements (Reference Match)
- **Framed Hero Banner**: Curved hero card with metrics strip directly below.
- **Staggered 4-Card Photogallery**: Desert dunes, Swiss Alps, Singapore skyline, and tropical beach.
- **6-Box Hairline Grid**: Clean 2-row × 3-column feature grid.
- **Top 10 Destinations**: 6 clean cards with duration, price, and instant modal view.
- **"Travel & Tour" Typographic Break**: Watermark typography.
- **Experience in Motion**: Split preview with interactive destination selector.
- **Top Curated Destinations**: Dark dramatic collection cards.
- **Memorable Journeys**: 4.9★ rating hero box with circular photo cutout.
- **30% Most Travel Deals**: Big typography discount card with overlapping postcard fan.
- **Effortless Booking Flow**: 3-step guide + dark horizontal banner with 15% OFF badge.
- **Common Travel Questions**: Clean minimalist FAQ accordion.
- **Grand Scenic Footer**: Scenic mountain backdrop with frosted glass card and giant watermark **Safar**.

---

## 📂 File Structure
- `index.html`: Complete semantic HTML5 structure with SEO tags and modals.
- `styles.css`: Editorial minimalist luxury design system.
- `app.js`: Dataset, currency switcher, itinerary modal, and price calculator.
- `package.json`: Project scripts configured for port 3000.
