import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import { ArrowLeft, ArrowRight, Building2, Check, Eye, EyeOff, FileUp, FolderPlus, MailCheck, ShieldAlert, Sparkles, UserPlus } from "lucide-react";
import { Alert, Button } from "../components/ui";

const configs: Record<string, { title: string; desc: string; button: string }> = {
  login: { title: "Volvé a tu espacio", desc: "Ingresá para continuar con tus investigaciones.", button: "Iniciar sesión" },
  register: { title: "Creá tu cuenta", desc: "Empezá con el espacio demostrativo de DocuMind.", button: "Crear cuenta" },
  forgot: { title: "Recuperá tu acceso", desc: "Te enviaremos instrucciones a tu correo.", button: "Enviar instrucciones" },
  reset: { title: "Definí una nueva contraseña", desc: "Usá al menos 10 caracteres y evitá datos personales.", button: "Restablecer contraseña" },
  verify: { title: "Verificá tu correo", desc: "Enviamos un enlace a marina@organizacion.demo.", button: "Reenviar correo" },
  invite: { title: "Te invitaron a Archivo Central", desc: "Tomás Vera te invitó como Analista.", button: "Aceptar invitación" },
  expired: { title: "Tu sesión finalizó", desc: "Por seguridad, volvé a ingresar para continuar.", button: "Volver a ingresar" },
  denied: { title: "Acceso restringido", desc: "No tenés permiso para ver este recurso.", button: "Volver al inicio" },
};

export function AuthPage() {
  const { mode = "login" } = useParams();
  const navigate = useNavigate();
  const config = configs[mode] || configs.login;
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const special = ["verify", "expired", "denied"].includes(mode);
  const submit = (e: React.FormEvent) => {
    e.preventDefault(); setError("");
    const form = new FormData(e.currentTarget as HTMLFormElement);
    if (!special && !form.get("email")) return setError("Ingresá un correo electrónico válido.");
    setLoading(true); setTimeout(() => navigate(mode === "register" || mode === "invite" ? "/onboarding" : "/app"), 700);
  };
  return <div className="auth-page">
    <aside><Link to="/" className="brand inverse"><span className="brand-mark">D</span>DocuMind</Link><div><span className="auth-quote">“</span><blockquote>La confianza no surge de una respuesta convincente, sino de poder volver a la evidencia que la sostiene.</blockquote><p>Inteligencia documental verificable</p></div><small>Entorno demostrativo · Los datos son ficticios</small></aside>
    <main><div className="auth-card"><Link className="back-link" to="/"><ArrowLeft size={16}/> Volver</Link>
      <div className={`auth-symbol ${mode}`} >{mode === "verify" ? <MailCheck/> : mode === "denied" ? <ShieldAlert/> : mode === "invite" ? <UserPlus/> : <Sparkles/>}</div>
      <h1>{config.title}</h1><p className="auth-desc">{config.desc}</p>
      {error && <Alert title="Revisá los datos" tone="danger">{error}</Alert>}
      <form onSubmit={submit}>
        {!special && <label>Correo electrónico<input name="email" type="email" placeholder="nombre@organizacion.com" /></label>}
        {["login","register","reset","invite"].includes(mode) && <label>Contraseña<div className="password-input"><input name="password" type={show ? "text" : "password"} placeholder="••••••••••" /><button type="button" onClick={()=>setShow(!show)} aria-label="Mostrar contraseña">{show?<EyeOff/>:<Eye/>}</button></div></label>}
        {mode === "register" && <label>Nombre completo<input name="name" placeholder="Tu nombre" /></label>}
        {mode === "login" && <div className="form-row"><label className="check"><input type="checkbox"/> Recordarme</label><Link to="/auth/forgot">Olvidé mi contraseña</Link></div>}
        <Button type="submit" className="full" disabled={loading}>{loading ? "Procesando…" : config.button}<ArrowRight size={16}/></Button>
      </form>
      {mode === "login" && <p className="auth-switch">¿No tenés cuenta? <Link to="/auth/register">Solicitar acceso</Link></p>}
      {mode === "register" && <p className="auth-switch">¿Ya tenés cuenta? <Link to="/auth/login">Ingresar</Link></p>}
    </div></main>
  </div>;
}

const onboardingSteps = [
  { title: "Bienvenida a DocuMind", text: "Vamos a preparar un espacio documental para tu equipo.", icon: Sparkles },
  { title: "Creá tu espacio de trabajo", text: "Este será el entorno principal de tu organización.", icon: Building2 },
  { title: "Configurá la organización", text: "Definí el nombre, área y preferencias generales.", icon: Building2 },
  { title: "Creá tu primera colección", text: "Agrupá documentos por proyecto, tema o nivel de acceso.", icon: FolderPlus },
  { title: "Importá documentos", text: "Podés comenzar con archivos PDF, DOCX o TXT.", icon: FileUp },
  { title: "Realizá tu primera consulta", text: "Probá una pregunta sobre los documentos demostrativos.", icon: Sparkles },
];

export function OnboardingPage() {
  const [step, setStep] = useState(0); const navigate = useNavigate(); const data = onboardingSteps[step]; const Icon = data.icon;
  return <div className="onboarding"><header><span className="brand"><span className="brand-mark">D</span>DocuMind</span><button onClick={()=>navigate("/app")}>Continuar más tarde</button></header>
    <div className="onboarding-progress">{onboardingSteps.map((s,i)=><span key={s.title} className={i<=step?"done":""}>{i<step?<Check/>:i+1}</span>)}</div>
    <main><div className="onboarding-icon"><Icon/></div><span className="step-label">Paso {step+1} de {onboardingSteps.length}</span><h1>{data.title}</h1><p>{data.text}</p>
      {step===0 && <div className="welcome-features"><div><Check/>Respuestas con evidencia</div><div><Check/>Relaciones documentales</div><div><Check/>Trazabilidad completa</div></div>}
      {[1,2].includes(step) && <div className="onboarding-form"><label>Nombre<input defaultValue={step===1?"Archivo Central":"Dirección de Gestión Documental"}/></label><label>Identificador<input defaultValue={step===1?"archivo-central":"gestion-documental"}/></label></div>}
      {step===3 && <div className="onboarding-form"><label>Nombre de la colección<input defaultValue="Marco normativo"/></label><label>Visibilidad<select><option>Compartida con el espacio</option><option>Privada</option></select></label></div>}
      {step===4 && <div className="upload-zone compact"><FileUp/><b>Arrastrá archivos aquí</b><span>PDF, DOCX o TXT · máximo 50 MB</span><Button variant="secondary">Seleccionar archivos</Button></div>}
      {step===5 && <div className="onboarding-form"><label>Tu primera pregunta<textarea defaultValue="¿Qué procedimiento establece la Resolución 120/2024?"/></label></div>}
      <div className="onboarding-actions">{step>0&&<Button variant="secondary" onClick={()=>setStep(step-1)}>Anterior</Button>}<Button onClick={()=>step===5?navigate("/app"):setStep(step+1)}>{step===5?"Ir a mi espacio":"Continuar"}<ArrowRight size={16}/></Button></div>
    </main>
  </div>;
}
