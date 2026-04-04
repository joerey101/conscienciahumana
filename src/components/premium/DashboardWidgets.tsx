import { Calendar, Clock } from 'lucide-react';

export interface Metric {
  label: string;
  val: string;
}

export const MetricCards = ({ metrics }: { metrics?: Metric[] }) => {
  const defaultMetrics: Metric[] = metrics || [
    { label: 'Usuarios Activos', val: '1.240' },
    { label: 'Conversión', val: '12%' },
    { label: 'Recaudación Hoy', val: '$450.000' },
    { label: 'Pendientes', val: '15' },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {defaultMetrics.map((p, i) => (
        <div key={i} className="bg-white p-5 rounded-3xl shadow-sm border border-slate-100 hover:scale-105 transition-transform relative overflow-hidden">
          <p className="text-[10px] font-black text-slate-400 uppercase mb-1">{p.label}</p>
          <p className="text-2xl font-black text-violet-900" style={{ color: 'var(--violeta-deep)' }}>{p.val}</p>
        </div>
      ))}
    </div>
  );
};

export interface Match {
  date: string;
  time: string;
  rival: string;
  torneo: string;
  highlight?: boolean;
}

export const MatchesCalendar = ({ matches }: { matches?: Match[] }) => {
  const defaultMatches: Match[] = matches || [
    { date: "Jueves 19/02", time: "21:15", rival: "Rival A", torneo: "Torneo de Verano" },
    { date: "Martes 24/02", time: "18:00", rival: "Rival B", torneo: "Liga Local" },
  ];

  return (
    <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="bg-violet-900 p-4 flex items-center justify-between" style={{ background: 'var(--violeta-deep)' }}>
        <h3 className="text-white font-bold flex items-center gap-2 m-0">
          <Calendar className="text-pink-500" size={20} /> Calendario de Eventos
        </h3>
        <span className="text-[10px] text-blue-200 uppercase font-black tracking-widest bg-violet-950 px-2 py-1 rounded">Próximos</span>
      </div>
      <div className="divide-y divide-slate-100">
        {defaultMatches.map((match, idx) => (
          <div key={idx} className={`p-4 flex items-center justify-between hover:bg-slate-50 transition-colors ${match.highlight ? 'bg-pink-50' : ''}`}>
            <div className="flex items-center gap-4">
              <div className="bg-slate-100 p-2 rounded-xl text-center min-w-[60px]">
                <span className="text-[10px] font-black text-slate-400 uppercase">{match.date.split(' ')[0]}</span>
                <p className="text-lg font-black text-violet-900 m-0">{match.date.split(' ')[1]}</p>
              </div>
              <div>
                <p className="font-bold text-slate-800 uppercase m-0">VS {match.rival}</p>
                <p className="text-xs text-slate-500 m-0">{match.torneo}</p>
              </div>
            </div>
            <div className="text-right">
              <div className="flex items-center gap-1 justify-end text-slate-600 font-bold">
                <Clock size={14} /> {match.time} hs
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
