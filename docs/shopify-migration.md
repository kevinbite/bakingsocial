# Shopify Migration Guide

This document outlines how to migrate The Baking Social landing page to Shopify Online Store 2.0.

## Architecture Overview

The current Next.js implementation is designed with Shopify compatibility in mind:

- **Section-based architecture**: Each section component maps to a Shopify section
- **Centralized content**: All content lives in `/lib/landingContent.ts`, making it easy to migrate to Shopify's JSON templates and metafields
- **No backend dependencies**: Pure frontend with no database or auth requirements

## Section to Shopify Mapping

| Next.js Component | Shopify Section | Notes |
|-------------------|-----------------|-------|
| `Hero.tsx` | `hero.liquid` | Use blocks for trust chips |
| `Offerings.tsx` | `offerings.liquid` | Use blocks for each offering card |
| `FeaturedClasses.tsx` | `featured-classes.liquid` | Classes as product references |
| `SchedulePreview.tsx` | `schedule.liquid` | Use metafields or third-party booking app |
| `Pricing.tsx` | `pricing.liquid` | Use blocks for pricing tiers |
| `PrivateEvents.tsx` | `private-events.liquid` | Form integrates with Klaviyo or similar |
| `StudioVibe.tsx` | `studio-vibe.liquid` | Standard content section |
| `Gallery.tsx` | `gallery.liquid` | Use Shopify's media picker |
| `FAQ.tsx` | `faq.liquid` | Use blocks for FAQ items |
| `Footer.tsx` | `footer.liquid` | Standard footer with newsletter |

## Shopify Section Schema Example

Here's how the Hero section would be structured in Shopify:

```liquid
{% schema %}
{
  "name": "Hero",
  "tag": "section",
  "class": "hero-section",
  "settings": [
    {
      "type": "text",
      "id": "headline",
      "label": "Headline",
      "default": "Atlanta's baking night out—hands-on, social, unforgettable."
    },
    {
      "type": "textarea",
      "id": "subheadline",
      "label": "Subheadline",
      "default": "Modern baking studio · Fun-not-formal · Live on TikTok + Instagram"
    },
    {
      "type": "text",
      "id": "primary_cta_text",
      "label": "Primary CTA Text",
      "default": "Book a Class"
    },
    {
      "type": "url",
      "id": "primary_cta_link",
      "label": "Primary CTA Link"
    },
    {
      "type": "text",
      "id": "secondary_cta_text",
      "label": "Secondary CTA Text",
      "default": "Plan a Private Event"
    },
    {
      "type": "url",
      "id": "secondary_cta_link",
      "label": "Secondary CTA Link"
    },
    {
      "type": "image_picker",
      "id": "hero_image",
      "label": "Hero Image"
    }
  ],
  "blocks": [
    {
      "type": "trust_chip",
      "name": "Trust Chip",
      "settings": [
        {
          "type": "text",
          "id": "text",
          "label": "Text"
        },
        {
          "type": "select",
          "id": "icon",
          "label": "Icon",
          "options": [
            { "value": "users", "label": "Users" },
            { "value": "check", "label": "Check" },
            { "value": "gift", "label": "Gift" },
            { "value": "video", "label": "Video" }
          ]
        }
      ]
    }
  ],
  "presets": [
    {
      "name": "Hero"
    }
  ]
}
{% endschema %}
```

## Booking & Classes Integration

### Option A: Classes as Shopify Products (Recommended)

1. **Create products for each class**
   - Product title = Class name
   - Product description = Class details
   - Variants = Different dates/times
   - Metafields for: duration, difficulty level, category

2. **Use a booking app**
   - Recommended: Sesami, Acuity, or BookThatApp
   - These apps handle:
     - Capacity limits (20 per class)
     - Date/time management
     - Calendar integration
     - Automated reminders

3. **Schedule data**
   - Store schedule in metafields or use booking app's API
   - Display via dynamic section that pulls from product variants

### Option B: External Booking System

1. Keep booking in a dedicated system (Acuity, Calendly, etc.)
2. Embed or link to booking from Shopify
3. Use webhooks to sync customer data

## Email Capture Integration

Replace the front-end-only email forms with:

1. **Klaviyo** (recommended for Shopify)
   - Native Shopify integration
   - Signup forms with popup/embedded options
   - Automated flows for class reminders

2. **Mailchimp**
   - Good for simpler needs
   - Shopify app available

## Private Events Inquiry Form

Options for form handling:

1. **Shopify Forms app** - Simple, native integration
2. **Typeform/Jotform embed** - More customization
3. **Klaviyo forms** - If already using for email

## CSS/Styling Migration

### Brand Colors in Shopify

Add to your `theme.liquid` or `base.css`:

```css
:root {
  --tbs-ivory: #E8E4DC;
  --tbs-powder: #CBDFEB;
  --tbs-mist: #C4D8E5;
  --tbs-biscuit: #D4AB78;
  --tbs-teal: #0B5052;
  --tbs-espresso: #372A25;
  --tbs-slate: #78848D;
}
```

### Tailwind in Shopify

If using Tailwind in Shopify:
1. Use Shopify's Dawn theme with Tailwind preset
2. Or set up a build process with npm scripts

### Alternative: Pure CSS

Convert Tailwind classes to standard CSS:
- Document key utility classes used
- Create equivalent CSS custom properties and classes

## JSON Template Structure

Your `templates/index.json` would look like:

```json
{
  "sections": {
    "hero": {
      "type": "hero",
      "settings": {
        "headline": "Atlanta's baking night out—hands-on, social, unforgettable.",
        "subheadline": "Modern baking studio · Fun-not-formal · Live on TikTok + Instagram"
      },
      "blocks": {
        "chip-1": { "type": "trust_chip", "settings": { "text": "20 seats per class", "icon": "users" } },
        "chip-2": { "type": "trust_chip", "settings": { "text": "All ingredients included", "icon": "check" } }
      }
    },
    "offerings": {
      "type": "offerings",
      "settings": {}
    }
  },
  "order": ["hero", "offerings", "featured-classes", "schedule", "pricing", "private-events", "studio-vibe", "gallery", "faq"]
}
```

## Migration Checklist

### Pre-Migration
- [ ] Export all content from `landingContent.ts`
- [ ] Prepare image assets (optimize for Shopify CDN)
- [ ] Choose booking/scheduling solution
- [ ] Set up email marketing platform
- [ ] Decide on Shopify theme (Dawn recommended)

### Migration Steps
1. [ ] Create Shopify store and install theme
2. [ ] Set up brand colors and typography
3. [ ] Create section files for each component
4. [ ] Build JSON template for homepage
5. [ ] Create class products with proper metafields
6. [ ] Install and configure booking app
7. [ ] Set up email capture integration
8. [ ] Configure forms for private events
9. [ ] Test all functionality
10. [ ] Set up analytics (Shopify + GA4)

### Post-Migration
- [ ] Set up proper redirects if changing domain
- [ ] Test checkout flow
- [ ] Configure shipping (if physical products)
- [ ] Set up order notifications
- [ ] Train team on Shopify admin

## Estimated Timeline

| Phase | Duration |
|-------|----------|
| Planning & Setup | 1 week |
| Section Development | 2-3 weeks |
| Booking Integration | 1 week |
| Testing & QA | 1 week |
| **Total** | **5-6 weeks** |

## Resources

- [Shopify Online Store 2.0 Docs](https://shopify.dev/docs/themes)
- [Dawn Theme](https://github.com/Shopify/dawn)
- [Shopify Section Schema](https://shopify.dev/docs/themes/architecture/sections)
- [Metafields Guide](https://shopify.dev/docs/apps/custom-data/metafields)

