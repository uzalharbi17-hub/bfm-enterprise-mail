# BFM Email Management System

## Goal
Build the complete frontend application shell and all major enterprise workflows from the supplied specification. The initial state contains no contacts, campaigns, reports, statistics, or activity; every data area uses a purposeful empty state. The structure will be ready for the future email-sending backend without pretending that sending or persistence already exists.

## Design system
- Establish a BFM-specific visual system first: deep navy navigation, white/cool-gray work surfaces, restrained blue accents, semantic success/warning/error/info states, refined borders and shadows, an 8px spacing rhythm, and medium-large radii.
- Use a distinctive corporate sans-serif family with Arabic support, loaded at the document level.
- Build reusable primitives for buttons, inputs, badges, menus, dialogs, tabs, tooltips, tables, KPI panels, empty states, skeletons, breadcrumbs, page headers, and confirmation flows.
- Add calm motion for route changes, drawers, menus, dialogs, buttons, loading states, and status feedback, with reduced-motion support.

## Application shell and localization
- Create a responsive enterprise shell with expanded/collapsed desktop navigation, compact tablet navigation, and a mobile drawer.
- Add page title, breadcrumbs, system status, notifications, language control, and user menu in the top bar.
- Implement complete English and Arabic dictionaries for visible copy, `dir="ltr"` / `dir="rtl"` switching, mirrored navigation, and RTL-safe layouts.
- Persist only interface preferences such as language and collapsed navigation locally; business records remain empty until a backend is connected.

## Screens and routes
- Dashboard: five zero-valued KPIs plus empty campaign overview, recent campaigns, activity, sending status, group statistics, and sender-account status.
- Compose: recipient/group selector, subject, rich editor toolbar/body, attachments, templates, and a routing/recipient summary panel; sending opens a smart recipient preview and clearly communicates individual delivery.
- Campaigns and campaign details: filters, enterprise table/mobile cards, statuses, progress, timeline, and guarded pause/resume/stop/retry controls, all empty until real records exist.
- Contacts: search and filters, add/import/export controls, bulk selection affordances, sticky table on wide screens, and mobile cards.
- Groups, sender accounts, templates, reports, audit log, users/roles, and settings: dedicated routed screens matching the supplied controls, columns, actions, permission summaries, and empty states.
- Login: polished corporate sign-in screen with validation and safe password treatment; it will remain a presentation workflow until authentication is connected.

## Functional behavior in this phase
- Navigation, collapse/drawer behavior, language and direction switching, tabs, dropdowns, filters, dialogs, composer controls, form validation, loading/success feedback, and empty-state actions will work.
- Actions requiring persistence, authentication, imports, exports, SMTP, or sending will be safely disabled or clearly marked unavailable rather than fabricating success or data.
- Introduce typed domain contracts and a data-service boundary so a future backend can replace the empty implementation without rebuilding page components.

## Quality and verification
- Add unique metadata for every content route.
- Verify the build and inspect the live application at desktop and mobile sizes, including Arabic RTL, mobile navigation, table transformations, dialogs, empty states, and overflow.
- Check keyboard focus, labels, contrast, reduced motion, and that no demo business records or exposed secrets appear anywhere.
