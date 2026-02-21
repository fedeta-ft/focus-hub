import { Calendar } from "lucide-react";

const events = [
  { time: "9:00", title: "Daily Standup", color: "bg-primary" },
  { time: "10:00", title: "Deep Work POLSA", color: "bg-blue-500" },
  { time: "12:00", title: "Almuerzo equipo DS", color: "bg-emerald-500" },
  { time: "14:00", title: "Review PPT Smart Foods", color: "bg-violet-500" },
  { time: "16:00", title: "Reunión Inversores", color: "bg-amber-500" },
];

const SmartCalendarGrid = () => {
  return (
    <div className="glass-float rounded-2xl p-5">
      <div className="flex items-center gap-2 mb-4">
        <Calendar size={16} className="text-primary" />
        <h3 className="text-xs font-semibold tracking-wider uppercase text-muted-foreground">
          Floating Timeline
        </h3>
      </div>

      <div className="space-y-4">
        {events.map((ev, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className={`w-2.5 h-2.5 rounded-full ${ev.color} shrink-0 shadow-[0_0_8px_currentColor]`} />
            <span className="text-xs text-muted-foreground font-mono w-12 shrink-0">{ev.time}</span>
            <span className="text-sm text-foreground font-medium">{ev.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SmartCalendarGrid;
