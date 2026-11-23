import React, { type ReactNode } from "react";
import { X, Search, ChevronRight, MoreHorizontal, FileText, AlertTriangle } from "lucide-react";

export function Button({ children, variant = "primary", icon, onClick, disabled, type = "button", className = "" }: {
  children: ReactNode; variant?: "primary" | "secondary" | "ghost" | "danger"; icon?: ReactNode;
  onClick?: () => void; disabled?: boolean; type?: "button" | "submit"; className?: string;
}) {
  return <button type={type} className={`btn btn-${variant} ${className}`} onClick={onClick} disabled={disabled}>{icon}{children}</button>;
}

export function Badge({ children, tone = "neutral" }: { children: ReactNode; tone?: string }) {
  return <span className={`badge badge-${tone}`}>{children}</span>;
}

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`card ${className}`}>{children}</div>;
}

export function PageHeader({ eyebrow, title, description, actions }: { eyebrow?: string; title: string; description?: string; actions?: ReactNode }) {
  return <header className="page-header">
    <div>{eyebrow && <div className="eyebrow">{eyebrow}</div>}<h1>{title}</h1>{description && <p>{description}</p>}</div>
    {actions && <div className="page-actions">{actions}</div>}
  </header>;
}

export function SearchInput({ value, onChange, placeholder = "Buscar..." }: { value: string; onChange: (v: string) => void; placeholder?: string }) {
  return <label className="search-input"><Search size={17} /><input value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} /></label>;
}

export function Modal({ title, children, onClose, footer }: { title: string; children: ReactNode; onClose: () => void; footer?: ReactNode }) {
  return <div className="modal-backdrop" role="presentation" onMouseDown={onClose}>
    <section className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" onMouseDown={(e) => e.stopPropagation()}>
      <header><h2 id="modal-title">{title}</h2><button className="icon-btn" onClick={onClose} aria-label="Cerrar"><X size={18} /></button></header>
      <div className="modal-body">{children}</div>{footer && <footer>{footer}</footer>}
    </section>
  </div>;
}

export function EmptyState({ title = "Todavía no hay información", description = "Los elementos aparecerán aquí cuando estén disponibles.", action }: { title?: string; description?: string; action?: ReactNode }) {
  return <div className="empty-state"><div className="empty-icon"><FileText size={24} /></div><h3>{title}</h3><p>{description}</p>{action}</div>;
}

export function Alert({ title, children, tone = "info" }: { title: string; children: ReactNode; tone?: "info" | "warning" | "danger" | "success" }) {
  return <div className={`alert alert-${tone}`}><AlertTriangle size={18} /><div><strong>{title}</strong><p>{children}</p></div></div>;
}

export function DataTable({ headers, rows }: { headers: string[]; rows: ReactNode[][] }) {
  return <div className="table-wrap"><table><thead><tr>{headers.map((h) => <th key={h}>{h}</th>)}</tr></thead>
    <tbody>{rows.map((row, i) => <tr key={i}>{row.map((cell, j) => <td key={j}>{cell}</td>)}</tr>)}</tbody></table></div>;
}

export function SectionTitle({ title, description, action }: { title: string; description?: string; action?: ReactNode }) {
  return <div className="section-title"><div><h2>{title}</h2>{description && <p>{description}</p>}</div>{action}</div>;
}

export function Breadcrumbs({ items }: { items: string[] }) {
  return <div className="breadcrumbs">{items.map((item, i) => <span key={item}>{i > 0 && <ChevronRight size={13} />}{item}</span>)}</div>;
}

export function MoreButton() {
  return <button className="icon-btn" aria-label="Más acciones"><MoreHorizontal size={18} /></button>;
}
