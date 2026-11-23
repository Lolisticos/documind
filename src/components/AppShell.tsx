import React, { useEffect, useState } from "react";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router";
import {
  Activity, Boxes, ChevronLeft, CircleHelp, Clock3, Columns3, FileSearch, FileText, GitCompareArrows,
  Home, Import, Lightbulb, Menu, Moon, Network, PanelLeftClose, Search, Settings, ShieldCheck, Sparkles, Sun, User, X
} from "lucide-react";
import { demoNotice } from "../data/mock";

const groups = [
  { label: "General", items: [
    { to: "/app", label: "Inicio", icon: Home, end: true },
    { to: "/app/documentos", label: "Explorar documentos", icon: FileText },
    { to: "/app/consultar", label: "Consultar con IA", icon: Sparkles },
    { to: "/app/colecciones", label: "Colecciones", icon: Boxes },
    { to: "/app/busqueda", label: "Búsqueda avanzada", icon: FileSearch },
  ]},
  { label: "Inteligencia documental", items: [
    { to: "/app/relaciones", label: "Relaciones", icon: Network },
    { to: "/app/comparador", label: "Comparador", icon: GitCompareArrows },
    { to: "/app/temporal", label: "Análisis temporal", icon: Clock3 },
    { to: "/app/hallazgos", label: "Hallazgos", icon: Lightbulb },
    { to: "/app/investigaciones", label: "Investigaciones", icon: Columns3 },
  ]},
  { label: "Gestión", items: [
    { to: "/app/importaciones", label: "Importaciones", icon: Import },
    { to: "/app/actividad", label: "Actividad", icon: Activity },
    { to: "/app/administracion", label: "Administración", icon: ShieldCheck },
  ]},
];

const routeNames: Record<string, string> = {
  "/app": "Inicio", "/app/documentos": "Explorar documentos", "/app/consultar": "Consultar con IA",
  "/app/colecciones": "Colecciones", "/app/busqueda": "Búsqueda avanzada", "/app/relaciones": "Relaciones",
  "/app/comparador": "Comparador", "/app/temporal": "Análisis temporal", "/app/hallazgos": "Hallazgos",
  "/app/investigaciones": "Investigaciones", "/app/importaciones": "Importaciones", "/app/actividad": "Actividad",
  "/app/administracion": "Administración", "/app/perfil": "Perfil y preferencias", "/app/ayuda": "Ayuda",
  "/app/design-system": "Design System", "/app/templates": "Templates",
};

export function AppShell() {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [commandOpen, setCommandOpen] = useState(false);
  const [dark, setDark] = useState(() => localStorage.getItem("theme") === "dark");
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);
  useEffect(() => setMobileOpen(false), [location.pathname]);

  return <div className={`app-shell ${collapsed ? "is-collapsed" : ""}`}>
    <aside className={`sidebar ${mobileOpen ? "mobile-open" : ""}`}>
      <div className="sidebar-brand"><NavLink to="/" className="brand"><span className="brand-mark">D</span><span>DocuMind</span></NavLink>
        <button className="icon-btn desktop-only" onClick={() => setCollapsed(!collapsed)} aria-label="Colapsar navegación"><PanelLeftClose size={18} /></button>
        <button className="icon-btn mobile-only" onClick={() => setMobileOpen(false)} aria-label="Cerrar navegación"><X size={18} /></button>
      </div>
      <div className="workspace-switch"><span className="avatar small">AC</span><div><strong>Archivo Central</strong><span>Espacio principal</span></div></div>
      <nav className="nav-groups" aria-label="Navegación principal">
        {groups.map((group) => <div className="nav-group" key={group.label}><div className="nav-label">{group.label}</div>
          {group.items.map(({ to, label, icon: Icon, end }) => <NavLink key={to} to={to} end={end} title={label} className={({ isActive }) => isActive ? "active" : ""}><Icon size={18} /><span>{label}</span>{label === "Hallazgos" && <b>3</b>}</NavLink>)}
        </div>)}
      </nav>
      <div className="sidebar-bottom">
        <NavLink to="/app/perfil"><User size={18} /><span>Perfil y preferencias</span></NavLink>
        <NavLink to="/app/ayuda"><CircleHelp size={18} /><span>Ayuda</span></NavLink>
        <div className="user-card"><span className="avatar">ML</span><div><strong>Marina López</strong><span>Analista</span></div><Settings size={16} /></div>
      </div>
    </aside>
    {mobileOpen && <div className="mobile-overlay" onClick={() => setMobileOpen(false)} />}
    <div className="shell-main">
      <header className="topbar">
        <button className="icon-btn mobile-only" onClick={() => setMobileOpen(true)} aria-label="Abrir navegación"><Menu size={20} /></button>
        <div className="context-title"><span>Archivo Central</span><ChevronLeft size={13} /><strong>{routeNames[location.pathname] || (location.pathname.includes("/documentos/") ? "Detalle documental" : "DocuMind")}</strong></div>
        <button className="global-search" onClick={() => setCommandOpen(true)}><Search size={16} /><span>Buscar documentos, colecciones o preguntas…</span><kbd>⌘ K</kbd></button>
        <div className="top-actions"><button className="icon-btn" onClick={() => setDark(!dark)} aria-label="Cambiar tema">{dark ? <Sun size={18} /> : <Moon size={18} />}</button><button className="icon-btn"><CircleHelp size={18} /></button><span className="avatar">ML</span></div>
      </header>
      <div className="demo-strip">{demoNotice}</div>
      <div className="page"><Outlet /></div>
    </div>
    {commandOpen && <div className="command-backdrop" onMouseDown={() => setCommandOpen(false)}><div className="command" onMouseDown={(e) => e.stopPropagation()}>
      <div className="command-search"><Search size={20} /><input autoFocus placeholder="Buscar en todo DocuMind…" /></div>
      <div className="command-group"><span>Acciones rápidas</span>
        {[["Consultar con IA", "/app/consultar"], ["Importar documentos", "/app/importaciones"], ["Explorar Resolución 120/2024", "/app/documentos/res-120-2024"]].map(([label, to]) => <button key={to} onClick={() => { navigate(to); setCommandOpen(false); }}><Search size={16} />{label}<kbd>↵</kbd></button>)}
      </div>
    </div></div>}
  </div>;
}
