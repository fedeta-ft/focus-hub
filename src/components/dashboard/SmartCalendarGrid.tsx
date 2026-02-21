import { Calendar } from "lucide-react";

const hours = Array.from({ length: 10 }, (_, i) => i + 8); // 8AM - 5PM

const events = [
  { start: 9, duration: 1, title: "Daily Standup", color: "bg-primary/20 text-primary border-primary/30" },
  { start: 10, duration: 2, title: "Deep Work POLSA", color: "bg-blue-500/15 text-blue-700 border-blue-400/30" },
  { start: 12, duration: 1, title: "Almuerzo equipo DS", color: "bg-emerald-500/15 text-emerald-700 border-emerald-400/30" },
  { start: 14, duration: 1.5, title: "Review PPT Smart Foods", color: "bg-violet-500/15 text-violet-700 border-violet-400/30" },
  { start: 16, duration: 1, title: "Reunión Inversores", color: "bg-amber-500/15 text-amber-700 border-amber-400/30" },
];

const ROW_HEIGHT = 44; // px per hour

const SmartCalendarGrid = () => {
  return (
    <div className="glass-float rounded-2xl p-5">
      <div className="flex items-center gap-2 mb-4">
        <Calendar size={16} className="text-primary" />
        <h3 className="text-xs font-semibold tracking-wider uppercase text-muted-foreground">
          Smart Calendar Grid
        </h3>
      </div>

      <div className="relative" style={{ height: hours.length * ROW_HEIGHT }}>
        {/* Time labels & grid lines */}
        {hours.map((h) => (
          <div
            key={h}
            className="absolute w-full flex items-start"
            style={{ top: (h - 8) * ROW_HEIGHT }}
          >
            <span className="text-[10px] text-muted-foreground w-10 shrink-0 -mt-1.5 font-medium">
              {h > 12 ? `${h - 12}PM` : h === 12 ? "12PM" : `${h}AM`}
            </span>
            <div className="flex-1 border-t border-border/40 h-px" />
          </div>
        ))}

        {/* Events */}
        {events.map((ev, i) => (
          <div
            key={i}
            className={`absolute left-10 right-1 rounded-lg border px-3 py-1.5 backdrop-blur-sm ${ev.color}`}
            style={{
              top: (ev.start - 8) * ROW_HEIGHT + 2,
              height: ev.duration * ROW_HEIGHT - 4,
            }}
          >
            <p className="text-xs font-semibold truncate">{ev.title}</p>
            <p className="text-[10px] opacity-70">
              {ev.start > 12 ? ev.start - 12 : ev.start}:00 – {(() => {
                const end = ev.start + ev.duration;
                return end > 12 ? `${end - 12}` : end;
              })()}:00
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SmartCalendarGrid;
