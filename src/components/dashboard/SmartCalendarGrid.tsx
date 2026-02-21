import { Calendar } from "lucide-react";

const events = [
  { start: "09:00", title: "Daily Standup", color: "border-blue-500", startsIn: "Ahora" },
  { start: "10:00", title: "Deep Work POLSA", color: "border-emerald-500", startsIn: "Empieza en 45m" },
  { start: "12:00", title: "Almuerzo equipo DS", color: "border-amber-500", startsIn: "Empieza en 2h" },
  { start: "14:00", title: "Review PPT Smart Foods", color: "border-violet-500", startsIn: "Empieza en 4h" },
  { start: "16:00", title: "Reunión Inversores", color: "border-sky-500", startsIn: "Empieza en 6h" },
];

const SmartCalendarGrid = () => {
  return (
    <div className="glass-float rounded-3xl p-5">
      <div className="flex items-center gap-2 mb-4">
        <Calendar size={16} className="text-primary" />
        <h3 className="text-xs font-semibold tracking-wider uppercase text-muted-foreground">
          Timeline Gantt
        </h3>
      </div>

      <div className="space-y-2.5">
        {events.map((ev, i) => (
          <div
            key={i}
            className={`flex items-center gap-3 rounded-2xl bg-white/[0.06] border-l-4 ${ev.color} px-4 py-3 transition-all hover:bg-white/[0.1]`}
          >
            <span className="text-xs font-mono text-muted-foreground shrink-0 w-10">
              {ev.start}
            </span>
            <p className="text-sm font-medium text-foreground flex-1 truncate">{ev.title}</p>
            <span className="text-[10px] text-muted-foreground shrink-0">{ev.startsIn}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SmartCalendarGrid;
