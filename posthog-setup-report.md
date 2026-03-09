<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of PostHog into the DevEvent Next.js App Router project. The following changes were made:

- **`instrumentation-client.ts`**: Initializes PostHog client-side using the `instrumentation-client` pattern recommended for Next.js 15.3+. Configured with a reverse proxy path (`/ingest`), exception capture enabled, and debug mode in development.
- **`next.config.ts`**: Reverse proxy rewrites for `/ingest/static/*` and `/ingest/*` route PostHog traffic through the app, reducing ad blocker interference. `skipTrailingSlashRedirect: true` set for PostHog compatibility.
- **`.env.local`**: `NEXT_PUBLIC_POSTHOG_KEY` and `NEXT_PUBLIC_POSTHOG_HOST` environment variables configured.
- **`app/components/ExploreBtn.tsx`**: Captures `explore_events_clicked` in the button's `onClick` handler.
- **`app/components/EventCard.tsx`**: Captures `event_card_clicked` with `event_title`, `event_slug`, `event_location`, and `event_date` properties on the Link's `onClick`.
- **`app/components/Navbar.tsx`**: Captures `nav_link_clicked` with `label` property on each navigation link, and `logo_clicked` when the logo is clicked.

| Event Name | Description | File |
|---|---|---|
| `logo_clicked` | User clicked the DevEvent logo to navigate home | `app/components/Navbar.tsx` |
| `nav_link_clicked` | User clicked a navigation link (includes `label`: Home, Event, Create Event) | `app/components/Navbar.tsx` |
| `explore_events_clicked` | User clicked the 'Explore Events' button to scroll to the featured events list | `app/components/ExploreBtn.tsx` |
| `event_card_clicked` | User clicked an event card (includes `event_title`, `event_slug`, `event_location`, `event_date`) | `app/components/EventCard.tsx` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- **Dashboard — Analytics basics**: https://us.posthog.com/project/336594/dashboard/1344209
- **Insight — Event Discovery Trend**: https://us.posthog.com/project/336594/insights/hJmPinZy
- **Insight — Event Discovery to Click Funnel**: https://us.posthog.com/project/336594/insights/Arkzkoll
- **Insight — Navigation Link Clicks by Label**: https://us.posthog.com/project/336594/insights/sPKlYgVm
- **Insight — Top Clicked Events by Title**: https://us.posthog.com/project/336594/insights/WrA0AxKB
- **Insight — All User Actions Overview**: https://us.posthog.com/project/336594/insights/NnFA7z2U

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
