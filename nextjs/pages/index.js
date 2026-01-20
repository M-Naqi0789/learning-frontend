import React from 'react'

const index = () => {
  return (
<>
{/* 
NEXT.JS — FULL NOTES (ONLY NEXT.JS, NOTHING EXTRA)

WHAT NEXT.JS IS
Next.js is a React framework that controls routing, rendering, backend logic,
performance optimizations, and deployment behavior.
Default approach is server-first, not client-first.

ROUTING SYSTEM
Next.js uses file-based routing.
Folder names map directly to URL segments.
No router configuration files exist.

APP ROUTER VS PAGES ROUTER
App Router lives inside the app/ directory and is the modern standard.
Pages Router lives inside pages/ and is legacy.
App Router uses React Server Components by default.

SPECIAL ROUTE FILES
page.tsx defines a route.
layout.tsx defines persistent UI that does not reset on navigation.
template.tsx is like layout but resets state on every navigation.
loading.tsx shows loading UI for a route segment.
error.tsx handles runtime errors for a route.
not-found.tsx handles 404 cases.

ROUTE TYPES
Dynamic routes use square brackets like [id].
Catch-all routes use [...slug].
Route groups use parentheses and do not appear in the URL.
Parallel routes allow multiple UI streams at the same route.
Intercepting routes allow showing one route on top of another.

RENDERING MODES
Static Site Generation renders at build time.
Server Side Rendering renders on each request.
Incremental Static Regeneration updates static pages in the background.
Streaming sends UI in chunks instead of waiting for everything.

SERVER COMPONENTS
Server components are the default.
They run only on the server.
They can access databases, environment secrets, and files.
They send less JavaScript to the browser.

CLIENT COMPONENTS
Client components are marked with "use client".
They run in the browser.
They are required for state, effects, event handlers, and interactivity.
Client components increase bundle size.

COMPONENT RULE
Server components can import client components.
Client components cannot import server components.

DATA FETCHING
fetch runs on the server by default.
fetch responses are cached automatically.
Cache behavior can be controlled with cache and revalidate options.
Revalidation enables ISR behavior.

CACHING UTILITIES
cache() memoizes server functions.
revalidatePath refreshes specific routes.
revalidateTag refreshes related cached data.

STREAMING DATA
Async server components allow streaming.
Suspense is used to control loading boundaries.
The use() hook unwraps async values in server components.

FORMS AND MUTATIONS
Server Actions replace traditional API routes for mutations.
Server Actions run securely on the server.
They are commonly used for form submissions.
Form helpers manage loading and optimistic UI.

API AND BACKEND
Route Handlers live in app/api.
They support standard HTTP methods.
They return Web Responses.
cookies and headers APIs access request data.
redirect and notFound control navigation flow.

MIDDLEWARE
Middleware runs before a request reaches a route.
It runs in the edge runtime.
Used for authentication, redirects, and request filtering.

SEO AND METADATA
Next.js manages document head automatically.
Metadata can be static or generated dynamically.
OpenGraph and social metadata are built in.

PERFORMANCE FEATURES
Images are optimized automatically.
Fonts load without layout shift.
Routes are prefetched automatically.
Server-first rendering reduces JavaScript.

RUNTIME
Node runtime is default.
Edge runtime is faster but has limited APIs.
Runtime can be selected per route or feature.

DEPLOYMENT
Next.js is optimized for Vercel.
Build output can be static, server, or edge.
Environment variables are built-in.
Image optimization works in production automatically. */}

</>  )
}

export default index