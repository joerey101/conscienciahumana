import React from 'react';
import { 
  Clipboard, 
  Layout, 
  DeviceMobile, 
  CheckCircle, 
  Circle,
  Gear
} from '@phosphor-icons/react';

interface Step {
  label: string;
  completed: boolean;
}

interface Procedure {
  title: string;
  icon: React.ElementType;
  steps: Step[];
  accent: string;
}

const FCHProgress: Procedure[] = [
  {
    title: "Estructura Base",
    icon: Layout,
    accent: "var(--rosa)",
    steps: [
      { label: "Nuestra Mirada", completed: true },
      { label: "Nuestra Misión", completed: true },
      { label: "Bitácora Local", completed: true },
      { label: "Alianzas", completed: true }
    ]
  },
  {
    title: "Pulido Visual",
    icon: Gear,
    accent: "var(--amarillo)",
    steps: [
      { label: "Navbar Fixed", completed: true },
      { label: "Menu Reordenado", completed: true },
      { label: "Triada Icons Mobile", completed: true },
      { label: "Impacto Sections", completed: true }
    ]
  },
  {
    title: "Versión Mobile",
    icon: DeviceMobile,
    accent: "var(--verde)",
    steps: [
      { label: "Resposive Layout", completed: true },
      { label: "Botones CTA", completed: true },
      { label: "Imágenes Optimización", completed: false },
      { label: "Velocidad de Carga", completed: false }
    ]
  }
];

export const VisualProgress: React.FC = () => {
  return (
    <section className="section" id="visual-progress" style={{ background: '#1A1A2E', color: 'white', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
      <div className="section-inner">
        <div className="flex items-center gap-5 mb-14 reveal">
          <div className="p-4 bg-white/5 rounded-2xl text-white backdrop-blur-xl border border-white/10">
            <Clipboard size={32} weight="duotone" />
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-1" style={{ color: 'white', fontFamily: 'Poppins' }}>Tablero de Desarrollo</h2>
            <div className="flex items-center gap-2">
              <span className="text-[10px] bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded-full font-black uppercase tracking-widest border border-blue-500/30">
                Local Only
              </span>
              <p className="text-xs text-slate-400 font-medium uppercase tracking-widest">FCH Visual Engine v2.0</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger">
          {FCHProgress.map((proc, idx) => (
            <div key={idx} className="reveal group relative overflow-hidden bg-white/5 border border-white/10 p-8 rounded-[2rem] hover:bg-white/10 transition-all duration-500 hover:-translate-y-2">
              <div 
                className="absolute top-0 right-0 w-32 h-32 blur-[60px] opacity-20 pointer-events-none" 
                style={{ background: proc.accent }}
              />
              
              <div className="flex items-center gap-4 mb-8 pb-6 border-b border-white/10">
                <div className="p-3 rounded-xl bg-white/5 text-white group-hover:scale-110 transition-transform">
                  <proc.icon size={28} weight="duotone" color={proc.accent} />
                </div>
                <h3 className="font-bold text-lg uppercase tracking-tight" style={{ color: 'white', margin: 0 }}>{proc.title}</h3>
              </div>
              
              <ul className="space-y-5">
                {proc.steps.map((step, sIdx) => (
                  <li key={sIdx} className="flex items-center justify-between group/item">
                    <div className="flex items-center gap-3">
                      {step.completed ? (
                        <CheckCircle size={20} weight="fill" style={{ color: proc.accent }} />
                      ) : (
                        <Circle size={20} weight="light" className="text-white/30" />
                      )}
                      <span className={`text-[13px] font-medium transition-all ${
                        step.completed ? 'text-white/50 line-through decoration-white/20' : 'text-white/80'
                      }`}>
                        {step.label}
                      </span>
                    </div>
                    {step.completed && (
                      <span 
                        className="text-[9px] font-black uppercase tracking-tighter px-2 py-0.5 rounded-full"
                        style={{ background: `${proc.accent}20`, color: proc.accent }}
                      >
                        OK
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/5 text-center reveal">
          <p className="text-[10px] text-white/30 uppercase tracking-[0.3em] font-black">
            Fundación Consciencia Humana • Entorno de Trabajo Seguro
          </p>
        </div>
      </div>
      
      <style>{`
        #visual-progress .flex { display: flex; }
        #visual-progress .items-center { align-items: center; }
        #visual-progress .justify-between { justify-content: space-between; }
        #visual-progress .gap-5 { gap: 1.25rem; }
        #visual-progress .gap-4 { gap: 1rem; }
        #visual-progress .gap-3 { gap: 0.75rem; }
        #visual-progress .gap-2 { gap: 0.5rem; }
        #visual-progress .mb-14 { margin-bottom: 3.5rem; }
        #visual-progress .mb-8 { margin-bottom: 2rem; }
        #visual-progress .mb-1 { margin-bottom: 0.25rem; }
        #visual-progress .space-y-5 > * + * { margin-top: 1.25rem; }
        @media (min-width: 768px) {
          #visual-progress .md\\:grid-cols-3 { grid-template-columns: repeat(3, 1fr); }
        }
      `}</style>
    </section>
  );
};
