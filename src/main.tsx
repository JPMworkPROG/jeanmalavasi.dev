import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

import './i18n/config'
import './styles/globals.css'
import './styles/animations.css'

import Layout from './components/Layout/Layout.tsx'
import Projects from './pages/Projects/Projects.tsx'
import Home from './pages/Home/Home.tsx'
import NotFound from './pages/NotFound/NotFound.tsx'
import Contact from './pages/Contact/Contact.tsx'
import Formation from './pages/Formation/Formation.tsx'
import Resume from './pages/Resume/Resume.tsx'
import { validatePaginationSearch } from './lib/pagination'
import { LanguageTransitionProvider } from './contexts/LanguageTransitionContext'

const rootRoute = createRootRoute({
  component: () => (
    <>
      <Layout>
        <Outlet />
      </Layout>
      <TanStackRouterDevtools />
    </>
  ),
})

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Home,
})

const projectsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/projects',
  validateSearch: validatePaginationSearch,
  component: Projects,
})

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/contacts',
  component: Contact,
})

const formationRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/formation',
  component: Formation,
})

const resumeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/resume',
  component: Resume,
})

const notFoundRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '$',
  component: NotFound,
})

const routeTree = rootRoute.addChildren([indexRoute, projectsRoute, contactRoute, formationRoute, resumeRoute, notFoundRoute])

const router = createRouter({
  routeTree,
  context: {},
  defaultPreload: 'intent',
  scrollRestoration: true,
  defaultStructuralSharing: true,
  defaultPreloadStaleTime: 0,
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const rootElement = document.getElementById('app')
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      <LanguageTransitionProvider>
        <RouterProvider router={router} />
      </LanguageTransitionProvider>
    </StrictMode>,
  )
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals