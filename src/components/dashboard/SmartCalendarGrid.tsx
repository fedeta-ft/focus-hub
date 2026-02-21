import { Calendar } from "lucide-react";

const events = [
  { start: 9, duration: 1, title: "Daily Standup", color: "bg-primary" },
  { start: 10, duration: 2, title: "Deep Work POLSA", color: "bg-emerald-500" },
  { start: 12, duration: 1, title: "Almuerzo equipo DS", color: "bg-amber-500" },
  { start: 14, duration: 2, title: "Review PPT Smart Foods", color: "bg-violet-500" },
  { start: 16, duration: 1.5, title: "Reunión Inversores", color: "bg-sky-500" },
];

const HOURS = [9, 10, 11, 12, 13, 14, 15, 16, 17];
const ROW_H = 36; // px per hour

const SmartCalendarGrid = () => {
  return (
    <div className="glass-float rounded-2xl p-5">
      <div className="flex items-center gap-2 mb-4">
        <Calendar size={16} className="text-primary" />
        <h3 className="text-xs font-semibold tracking-wider uppercase text-muted-foreground">
          Timeline Gantt
        </h3>
      </div>

      <div className="relative" style={{ height: `${HOURS.length * ROW_H}px` }}>
        {/* Hour labels + grid lines */}
        {HOURS.map((h) => (
          <div
            key={h}
            className="absolute left-0 right-0 flex items-start"
            style={{ top: `${(h - HOURS[0]) * ROW_H}px`, height: `${ROW_H}px` }}
          >
            <span className="text-[10px] text-muted-foreground font-mono w-10 shrink-0 -mt-1.5">
              {`${h}:00`}
            </span>
            <div className="flex-1 border-t border-border/30 mt-0" />
          </div>
        ))}

        {/* Event blocks */}
        {events.map((ev, i) => (
          <div
            key={i}
            className={`absolute left-10 right-0 rounded-lg ${ev.color}/20 border border-current/10 flex items-center px-3 transition-all hover:scale-[1.01]`}
            style={{
              top: `${(ev.start - HOURS[0]) * ROW_H + 2}px`,
              height: `${ev.duration * ROW_H - 4}px`,
            }}
          >
            <div className={`w-1.5 h-1.5 rounded-full ${ev.color} shrink-0 mr-2 shadow-[0_0_6px_currentColor]`} />
            <span className="text-xs font-medium text-foreground truncate">{ev.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SmartCalendarGrid;
