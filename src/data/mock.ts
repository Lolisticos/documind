export type DocumentStatus = "Vigente" | "Histórico" | "Procesando" | "Revisión";

export interface DocumentRecord {
  id: string;
  title: string;
  shortTitle: string;
  type: string;
  collection: string;
  issuer: string;
  date: string;
  added: string;
  status: DocumentStatus;
  version: string;
  tags: string[];
  pages: number;
  description: string;
}

export const documents: DocumentRecord[] = [
  {
    id: "res-120-2024",
    title: "Resolución 120/2024 — Procedimiento de Gestión Documental",
    shortTitle: "Resolución 120/2024",
    type: "Resolución",
    collection: "Marco normativo",
    issuer: "Secretaría de Modernización",
    date: "2024-03-14",
    added: "2026-02-12",
    status: "Vigente",
    version: "v2",
    tags: ["procedimiento", "gestión", "base"],
    pages: 18,
    description: "Establece el procedimiento general y los requisitos para la gestión documental interna.",
  },
  {
    id: "res-85-2025",
    title: "Resolución 85/2025 — Modificación del Procedimiento",
    shortTitle: "Resolución 85/2025",
    type: "Resolución",
    collection: "Marco normativo",
    issuer: "Secretaría de Modernización",
    date: "2025-05-08",
    added: "2026-02-12",
    status: "Vigente",
    version: "v1",
    tags: ["modificación", "plazos"],
    pages: 9,
    description: "Modifica los artículos 4 y 9 de la Resolución 120/2024 sobre plazos y responsables.",
  },
  {
    id: "res-210-2026",
    title: "Resolución 210/2026 — Disposición Complementaria",
    shortTitle: "Resolución 210/2026",
    type: "Resolución",
    collection: "Marco normativo",
    issuer: "Dirección de Asuntos Institucionales",
    date: "2026-01-22",
    added: "2026-02-13",
    status: "Revisión",
    version: "v1",
    tags: ["complementaria", "digitalización"],
    pages: 12,
    description: "Introduce requisitos complementarios para expedientes digitalizados.",
  },
  {
    id: "dec-44-2023",
    title: "Decreto 44/2023 — Régimen de Archivo Administrativo",
    shortTitle: "Decreto 44/2023",
    type: "Decreto",
    collection: "Archivo institucional",
    issuer: "Poder Ejecutivo",
    date: "2023-08-19",
    added: "2026-01-28",
    status: "Histórico",
    version: "v3",
    tags: ["archivo", "conservación"],
    pages: 34,
    description: "Regula los criterios de conservación y archivo de actuaciones administrativas.",
  },
  {
    id: "circ-12-2026",
    title: "Circular 12/2026 — Criterios de Clasificación",
    shortTitle: "Circular 12/2026",
    type: "Circular",
    collection: "Operaciones",
    issuer: "Dirección de Archivo",
    date: "2026-02-04",
    added: "2026-02-15",
    status: "Procesando",
    version: "v1",
    tags: ["clasificación", "operaciones"],
    pages: 6,
    description: "Detalla criterios operativos para la clasificación de nuevos expedientes.",
  },
  {
    id: "inf-18-2025",
    title: "Informe Técnico 18/2025 — Evaluación de Trazabilidad",
    shortTitle: "Informe Técnico 18/2025",
    type: "Informe",
    collection: "Auditorías",
    issuer: "Unidad de Auditoría Interna",
    date: "2025-11-30",
    added: "2026-02-02",
    status: "Vigente",
    version: "v1",
    tags: ["auditoría", "trazabilidad"],
    pages: 42,
    description: "Analiza la trazabilidad de expedientes y propone medidas de mejora.",
  },
];

export const collections = [
  { name: "Marco normativo", count: 128, access: "Compartida", color: "indigo", updated: "Hoy, 09:42" },
  { name: "Archivo institucional", count: 84, access: "Compartida", color: "teal", updated: "Ayer, 16:18" },
  { name: "Auditorías", count: 36, access: "Privada", color: "amber", updated: "12 feb 2026" },
  { name: "Operaciones", count: 57, access: "Compartida", color: "blue", updated: "10 feb 2026" },
];

export const activities = [
  { time: "Hace 8 min", user: "Marina López", action: "validó una relación", resource: "Resolución 85/2025", result: "Correcto" },
  { time: "Hace 32 min", user: "Tomás Vera", action: "importó 14 documentos", resource: "Marco normativo", result: "Completado" },
  { time: "Hoy, 09:12", user: "Sistema", action: "detectó una posible contradicción", resource: "Hallazgo #284", result: "Revisión" },
  { time: "Ayer, 17:46", user: "Elena Ortiz", action: "actualizó metadatos", resource: "Decreto 44/2023", result: "Completado" },
];

export const findings = [
  { id: "H-284", type: "Posible contradicción", docs: "Res. 85/2025 ↔ Res. 210/2026", date: "Hoy, 09:12", status: "Pendiente", owner: "Sin asignar", severity: "Alta" },
  { id: "H-279", type: "Metadato inconsistente", docs: "Informe Técnico 18/2025", date: "Ayer, 14:20", status: "En revisión", owner: "Marina López", severity: "Media" },
  { id: "H-271", type: "Referencia cruzada", docs: "Decreto 44/2023 ↔ Res. 120/2024", date: "12 feb 2026", status: "Confirmado", owner: "Tomás Vera", severity: "Baja" },
];

export const relationships = [
  { from: "Resolución 85/2025", to: "Resolución 120/2024", type: "Modifica", evidence: "Artículos 4 y 9", kind: "Explícita" },
  { from: "Resolución 210/2026", to: "Resolución 120/2024", type: "Complementa", evidence: "Artículo 2", kind: "Explícita" },
  { from: "Informe Técnico 18/2025", to: "Decreto 44/2023", type: "Referencia", evidence: "Página 17", kind: "Explícita" },
  { from: "Resolución 210/2026", to: "Resolución 85/2025", type: "Contradice potencialmente", evidence: "Plazo del artículo 3", kind: "Inferida" },
];

export const timeline = [
  { date: "19 ago 2023", title: "Decreto 44/2023", description: "Establece el régimen inicial de archivo.", state: "Confirmado" },
  { date: "14 mar 2024", title: "Resolución 120/2024", description: "Define el procedimiento de gestión documental.", state: "Confirmado" },
  { date: "8 may 2025", title: "Resolución 85/2025", description: "Modifica plazos y responsables de dos artículos.", state: "Confirmado" },
  { date: "22 ene 2026", title: "Resolución 210/2026", description: "Agrega disposiciones para expedientes digitales.", state: "Requiere revisión" },
];

export const demoNotice = "Todos los documentos y datos presentados son ficticios y se utilizan únicamente con fines demostrativos.";
