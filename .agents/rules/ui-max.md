# UI Max Premium Design Guidelines

Gunakan pendekatan UI/UX premium level “UI Max”: detail visual matang, spacing konsisten, hierarchy kuat, component proporsional, dan tidak terasa seperti website template hasil generator AI.

## Fokus desain:
- Clean, editorial, premium retail technology
- Banyak whitespace, grid yang rapi
- Typography hierarchy yang kuat
- Jangan terlalu banyak card, hindari semua section memakai rounded box
- Hindari gradient berlebihan, glow, glassmorphism, neon, efek AI generik
- Hindari layout yang terlalu simetris dan monoton
- Gunakan komposisi visual yang natural seperti website brand besar (Apple, Nothing, Linear, Stripe, Samsung)
- Prinsip visual utama: restraint, whitespace, typography, movement, dan polish.

## Motion & Interaction (Framer Motion):
- Animasi yang sangat smooth dan subtle.
- Smooth scroll, fade-up ringan saat section masuk viewport, stagger animation ringan untuk product cards.
- Hover micro-interaction yang lembut (button hover dengan transform sangat kecil, image scale 1.02–1.04 saat hover).
- Navbar transition halus saat scroll, reveal animation tanpa efek berlebihan.
- Durasi ideal: 200–500ms untuk micro interaction, 500–800ms untuk section reveal.
- Easing: `cubic-bezier(0.22, 1, 0.36, 1)`
- Tambahkan prefers-reduced-motion fallback.

## Visual System:
- Maksimal 3–4 warna utama: OG Yellow, White, Charcoal / Black, Soft Gray. (Kuning hanya sebagai accent).
- Sistem desain konsisten: spacing scale, border radius scale, typography scale, button styles, container width, section padding.

## Typography:
- Font modern premium (seperti Inter).
- Hierarchy: Hero sangat besar namun tetap elegan, Section heading kuat, Body nyaman, Caption rapi.
- Hindari terlalu banyak font weight.

## Layout:
- Desktop: max-width container 1200–1400px.
- Mobile: layout terasa native.
- Hindari: terlalu banyak 3-column cards, semua elemen di tengah, terlalu banyak icon, setiap section punya background berbeda, semua section border.

## Sections:
- **Hero**: Editorial, layout 2 kolom desktop (Headline/CTA di kiri, Mockup premium di kanan).
- **Product**: Curated collection (Image, brand/name, storage, current/old price, condition badge, CTA kecil). Border halus, shadow sangat subtle.
- **Navigation**: Sticky, transparan di atas, blur dengan border bawah tipis saat scroll. CTA WhatsApp kecil di navbar.
- **Mobile**: Bottom floating CTA WhatsApp yang subtle.

## UX & Performance:
- Komunikasi jelas dalam 5 detik: 1. OG Store Samarinda, 2. Jual HP, 3. Bisa kredit, 4. Tukar tambah, 5. Langsung WA.
- Lazy-load images, hindari library berat, pastikan layout stabil.

## Quality Control:
- Lakukan polishing pass khusus untuk spacing, alignment, typography, dan interaction sebelum selesai.
