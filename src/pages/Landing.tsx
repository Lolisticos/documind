import React, { useState } from "react";
import { Link } from "react-router";
import { ArrowRight, Check, ChevronDown, FileCheck2, Fingerprint, GitBranch, Menu, Search, ShieldCheck, Sparkles, X } from "lucide-react";
import { Button } from "../components/ui";
import { demoNotice } from "../data/mock";

const capabilities = [
  ["Búsqueda híbrida", "Encontrá términos exactos y conceptos relacionados en una sola consulta.", Search],
  ["Respuestas con evidencia", "Cada afirmación relevante conserva un vínculo verificable a su fuente.", FileCheck2],
  ["Relaciones documentales", "Explorá modificaciones, referencias y dependencias entre documentos.", GitBranch],
  ["Auditoría completa", "Revisá cómo se obtuvo un resultado y qué fuentes fueron utilizadas.", Fingerprint],
];

export function LandingPage() {
  const [menu, setMenu] = useState(false);
  const [faq, setFaq] = useState(0);
  return <div className="public-page">
    <header className="public-nav"><Link to="/" className="brand"><span className="brand-mark">D</span><span>DocuMind</span></Link>
      <nav className={menu ? "open" : ""}><a href="#producto">Producto</a><a href="#capacidades">Capacidades</a><a href="#seguridad">Seguridad</a><a href="#faq">Preguntas</a></nav>
      <div className="public-actions"><Link to="/auth/login">Ingresar</Link><Link className="btn btn-primary" to="/auth/register">Solicitar acceso <ArrowRight size={16} /></Link></div>
      <button className="icon-btn mobile-only" onClick={() => setMenu(!menu)}>{menu ? <X /> : <Menu />}</button>
    </header>
    <main>
      <section className="landing-hero">
        <div className="hero-copy"><div className="pill"><Sparkles size={14} /> Inteligencia documental verificable</div>
          <h1>Conocimiento confiable, desde cada documento.</h1>
          <p>Importá, relacioná y analizá grandes colecciones documentales. Obtené respuestas claras con trazabilidad hasta la página y el fragmento original.</p>
          <div className="hero-actions"><Link className="btn btn-primary btn-large" to="/auth/register">Explorar DocuMind <ArrowRight size={18} /></Link><a className="btn btn-secondary btn-large" href="#demo">Ver cómo funciona</a></div>
          <span className="microcopy">Sin métricas opacas. Sin respuestas sin fuentes. Datos demostrativos.</span>
        </div>
        <div className="hero-product" id="demo">
          <div className="mini-window"><div className="mini-top"><span /><span /><span /><b>Investigación / Marco normativo</b></div>
            <div className="mini-question">¿Qué cambios introdujo la Resolución 85/2025 sobre los plazos del procedimiento?</div>
            <div className="mini-answer"><div className="answer-label"><Sparkles size={15} /> Respuesta respaldada</div>
              <p>La Resolución 85/2025 <mark>extiende el plazo de revisión de 10 a 15 días hábiles</mark> y asigna la validación final a la Dirección de Archivo. <button>1</button> <button>2</button></p>
              <div className="mini-sources"><div><b>1</b><span>Resolución 85/2025 · Art. 2 · pág. 3</span><Check size={14} /></div><div><b>2</b><span>Resolución 120/2024 · Art. 4 · pág. 6</span><Check size={14} /></div></div>
            </div>
          </div>
        </div>
      </section>
      <div className="trust-line">{demoNotice}</div>
      <section className="landing-section problem" id="producto"><div className="section-kicker">El problema</div><h2>Un chatbot responde. DocuMind permite verificar.</h2>
        <div className="comparison-grid"><div className="comparison muted"><h3>Chat documental convencional</h3>{["Respuesta aislada", "Fuentes difíciles de rastrear", "Documentos tratados por separado", "Resultados difíciles de auditar"].map(x => <p key={x}><X size={16} />{x}</p>)}</div>
          <div className="comparison emphasized"><h3>Investigación con DocuMind</h3>{["Afirmaciones vinculadas a evidencia", "Citas hasta la página original", "Relaciones y versiones conectadas", "Proceso completo auditable"].map(x => <p key={x}><Check size={16} />{x}</p>)}</div></div>
      </section>
      <section className="landing-section" id="capacidades"><div className="section-kicker">Capacidades</div><div className="section-heading"><h2>Diseñado para investigar, no solo preguntar.</h2><p>Herramientas profesionales para comprender colecciones complejas sin perder el contexto documental.</p></div>
        <div className="capability-grid">{capabilities.map(([title, text, Icon]: any) => <article key={title}><span><Icon size={21} /></span><h3>{title}</h3><p>{text}</p><a href="#demo">Explorar capacidad <ArrowRight size={15} /></a></article>)}</div>
      </section>
      <section className="landing-section graph-showcase"><div className="graph-copy"><div className="section-kicker">Relaciones</div><h2>Entendé cómo evoluciona el conocimiento.</h2><p>DocuMind conecta documentos que modifican, complementan, citan o potencialmente contradicen a otros. Las relaciones inferidas siempre se muestran como pendientes de revisión.</p><ul><li><Check /> Evidencia visible para cada relación</li><li><Check /> Diferenciación entre hechos e inferencias</li><li><Check /> Navegación temporal y por versiones</li></ul></div>
        <div className="landing-graph"><svg viewBox="0 0 520 340"><path d="M100 80L265 168M265 168L420 90M265 168L420 270M100 270L265 168" /><path className="dashed" d="M100 80L420 270" /></svg>
          {[["Res. 120/2024","base","18%","15%"],["Res. 85/2025","modifica","47%","43%"],["Res. 210/2026","complementa","76%","18%"],["Informe 18/2025","referencia","18%","76%"],["Circular 12/2026","inferencia","76%","76%"]].map(n => <div className="graph-node" key={n[0]} style={{left:n[2],top:n[3]}}><b>{n[0]}</b><span>{n[1]}</span></div>)}</div>
      </section>
      <section className="landing-section security" id="seguridad"><div><div className="section-kicker">Privacidad y seguridad</div><h2>Control sobre documentos, acceso y resultados.</h2><p>La configuración explica qué ocurre con la información en cada paso. DocuMind no presenta garantías absolutas: expone controles, permisos y registros para que cada organización evalúe su propia política.</p></div>
        <div className="security-list"><div><ShieldCheck /><span><b>Permisos por espacio y colección</b><small>Control granular de lectura, edición y administración.</small></span></div><div><Fingerprint /><span><b>Trazabilidad de operaciones</b><small>Registro consultable de accesos, cambios y validaciones.</small></span></div><div><FileCheck2 /><span><b>Configuración explícita de IA</b><small>Visibilidad sobre proveedor, modelo y tratamiento configurado.</small></span></div></div>
      </section>
      <section className="landing-section use-cases"><div className="section-kicker">Casos de uso</div><h2>Una base común para equipos que trabajan con evidencia.</h2><div className="use-grid">{["Análisis normativo","Auditoría y compliance","Investigación institucional","Gestión de conocimiento"].map((x,i)=><div key={x}><span>0{i+1}</span><h3>{x}</h3><p>Organizá fuentes, reconstruí cambios y conservá la evidencia detrás de cada conclusión.</p></div>)}</div></section>
      <section className="landing-section faq" id="faq"><div><div className="section-kicker">Preguntas frecuentes</div><h2>Respuestas antes de empezar.</h2></div><div>{[
        ["¿DocuMind reemplaza la revisión profesional?","No. Organiza evidencia y acelera el análisis, pero las conclusiones sensibles deben ser revisadas por especialistas."],
        ["¿Cómo se muestran las respuestas de IA?","Cada afirmación relevante incluye citas navegables. Las inferencias y la evidencia insuficiente tienen tratamientos visuales distintos."],
        ["¿Puedo trabajar con distintas versiones?","Sí. El comparador distingue cambios textuales objetivos de interpretaciones generadas, y mantiene el historial documental."],
      ].map(([q,a],i)=><button className={`faq-item ${faq===i?"open":""}`} key={q} onClick={()=>setFaq(i)}><span>{q}<ChevronDown /></span>{faq===i&&<p>{a}</p>}</button>)}</div></section>
      <section className="landing-cta"><span className="brand-mark">D</span><h2>Convertí documentos en conocimiento verificable.</h2><p>Recorré el producto con un conjunto documental demostrativo y descubrí el flujo completo.</p><Link className="btn btn-primary btn-large" to="/auth/register">Solicitar acceso <ArrowRight size={18}/></Link></section>
    </main>
    <footer className="public-footer"><div><Link to="/" className="brand"><span className="brand-mark">D</span>DocuMind</Link><p>Inteligencia documental verificable.</p></div><div><b>Producto</b><a href="#capacidades">Capacidades</a><Link to="/auth/login">Ingresar</Link></div><div><b>Recursos</b><a href="#seguridad">Seguridad</a><a href="#faq">Preguntas frecuentes</a></div><div><b>Legal</b><a href="#">Privacidad</a><a href="#">Términos</a></div><small>© 2026 DocuMind · Producto demostrativo</small></footer>
  </div>;
}
