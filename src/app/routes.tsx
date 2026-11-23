import { createBrowserRouter } from "react-router";
import { AppShell } from "../components/AppShell";
import { LandingPage } from "../pages/Landing";
import { AuthPage, OnboardingPage } from "../pages/Auth";
import {
  ActivityPage, AdminPage, CollectionsPage, ComparePage, DashboardPage, DesignSystemPage, DocumentDetailPage,
  DocumentsPage, FindingsPage, GraphPage, HelpPage, ImportsPage, InvestigationsPage, NotFoundPage,
  ProfilePage, ResearchPage, SearchPage, TemplatesPage, TimelinePage
} from "../pages/AppPages";

export const router = createBrowserRouter([
  { path: "/", Component: LandingPage },
  { path: "/auth/:mode", Component: AuthPage },
  { path: "/onboarding", Component: OnboardingPage },
  {
    path: "/app", Component: AppShell, children: [
      { index: true, Component: DashboardPage },
      { path: "documentos", Component: DocumentsPage },
      { path: "documentos/:id", Component: DocumentDetailPage },
      { path: "consultar", Component: ResearchPage },
      { path: "busqueda", Component: SearchPage },
      { path: "colecciones", Component: CollectionsPage },
      { path: "importaciones", Component: ImportsPage },
      { path: "relaciones", Component: GraphPage },
      { path: "comparador", Component: ComparePage },
      { path: "temporal", Component: TimelinePage },
      { path: "hallazgos", Component: FindingsPage },
      { path: "investigaciones", Component: InvestigationsPage },
      { path: "actividad", Component: ActivityPage },
      { path: "administracion", Component: AdminPage },
      { path: "perfil", Component: ProfilePage },
      { path: "ayuda", Component: HelpPage },
      { path: "design-system", Component: DesignSystemPage },
      { path: "templates", Component: TemplatesPage },
      { path: "*", Component: NotFoundPage },
    ]
  },
  { path: "*", Component: NotFoundPage },
]);
