import { ClipboardCheck } from 'lucide-react';

interface Procedure {
  title: string;
  icon: any;
  steps: string[];
}

const DefaultProcedures: Procedure[] = [
  {
    title: "Proceso de Alta",
    icon: ClipboardCheck,
    steps: [
      "Validar identidad del usuario.",
      "Seleccionar categoría del producto.",
      "Confirmar método de pago.",
      "Emitir credencial digital."
    ]
  },
  {
    title: "Gestión de Abonos",
    icon: ClipboardCheck,
    steps: [
      "Verificar estado de cuenta.",
      "Seleccionar plazas disponibles.",
      "Confirmar período de vigencia.",
      "Vincular acceso al sistema."
    ]
  }
];

export const VisualProgress = ({ 
  procedures = DefaultProcedures,
  headerTitle = "Metodología",
  headerSubtitle = "Proceso de acompañamiento"
}: { 
  procedures?: Procedure[],
  headerTitle?: string,
  headerSubtitle?: string
}) => {
  return (
    <div className="vp-container animate-in slide-in-from-bottom duration-300">
      <div className="mb-10 text-center md:text-left">
        <h2 className="text-2xl md:text-3xl font-black text-violet-900 uppercase tracking-tight" style={{ color: 'var(--violeta-deep)', display: 'inline-block', marginRight: '1rem' }}>
          {headerTitle}
        </h2>
        <p className="text-xs text-slate-500 font-bold uppercase tracking-widest inline-block border-l pl-4 border-slate-200">
          {headerSubtitle}
        </p>
      </div>

      <div className="vp-grid">
        {procedures.map((proc, idx) => (
          <div key={idx} className="vp-card">
            <div className="vp-card-header">
              <div className="vp-icon-box">
                <proc.icon size={22} />
              </div>
              <h3 className="font-bold text-lg text-slate-800 m-0">{proc.title}</h3>
            </div>
            <ul className="vp-steps">
              {proc.steps.map((step, sIdx) => (
                <li key={sIdx} className="vp-step-item">
                  <span className="vp-step-number">{sIdx + 1}</span>
                  <span className="leading-tight">{step}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
