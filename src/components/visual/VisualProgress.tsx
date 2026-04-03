import React from 'react';
import { ClipboardCheck } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface Procedure {
  title: string;
  icon: LucideIcon;
  steps: string[];
}

const DefaultProcedures: Procedure[] = [
  {
    title: "Reconocimiento",
    icon: ClipboardCheck,
    steps: [
      "Conversación inicial de diagnóstico.",
      "Identificación de patrones reactivos.",
      "Mapeo de la situación actual."
    ]
  },
  {
    title: "Activación",
    icon: ClipboardCheck,
    steps: [
      "Implementación de nuevas respuestas.",
      "Estructura de hábitos diarios.",
      "Sostenimiento de la intencionalidad."
    ]
  }
];

interface VisualProgressProps {
  procedures?: Procedure[];
  title?: string;
}

export const VisualProgress: React.FC<VisualProgressProps> = ({ 
  procedures = DefaultProcedures,
  title = "Fases del Proceso"
}) => {
  return (
    <div className="vp-container">
      <div className="vp-header" style={{ marginBottom: '2.5rem' }}>
        <div className="flex items-center gap-4">
          <div className="vp-icon-box" style={{ background: 'var(--violeta-deep)', color: 'white' }}>
            <ClipboardCheck size={24} strokeWidth={2.5} />
          </div>
          <div>
            <h2 className="text-xl font-bold text-[var(--violeta-deep)]" style={{ fontFamily: 'Poppins', margin: 0, lineHeight: 1.1 }}>
              {title}
            </h2>
          </div>
        </div>
      </div>

      <div className="vp-grid">
        {procedures.map((proc, idx) => (
          <div key={idx} className="vp-card group">
            <div className="vp-card-header">
              <div className="vp-icon-box">
                <proc.icon size={20} strokeWidth={2.5} />
              </div>
              <h3 className="font-bold text-lg text-[var(--texto)]" style={{ fontFamily: 'Poppins', margin: 0 }}>
                {proc.title}
              </h3>
            </div>
            
            <ul className="vp-steps">
              {proc.steps.map((step, sIdx) => (
                <li key={sIdx} className="vp-step-item">
                  <span className="vp-step-number">
                    {sIdx + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ul>

            <div className="vp-bg-icon">
              <proc.icon size={120} strokeWidth={1} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
