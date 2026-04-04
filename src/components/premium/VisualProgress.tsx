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

export const VisualProgress = ({ procedures = DefaultProcedures }: { procedures?: Procedure[] }) => {
  return (
    <div className="vp-container animate-in slide-in-from-bottom duration-300">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-pink-100 rounded-lg text-pink-600">
          <ClipboardCheck size={24} />
        </div>
        <div>
          <h2 className="text-2xl font-black text-violet-900 uppercase tracking-tight" style={{ color: 'var(--violeta-deep)' }}>Proceso de Transformación</h2>
          <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Premium Module v1.2</p>
        </div>
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
            {/* Background subtile icon */}
            <div className="absolute -bottom-4 -right-4 opacity-[0.03] text-violet-950">
              <proc.icon size={120} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
