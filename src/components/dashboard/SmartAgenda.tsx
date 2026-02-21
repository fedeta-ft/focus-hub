import { Calendar } from "lucide-react";

const events = [
  { time: "09:00", title: "Daily Standup", color: "bg-primary" },
  { time: "11:30", title: "Reunión Inversores", color: "bg-blue-500" },
  { time: "14:00", title: "Almuerzo con equipo DS", color: "bg-emerald-500" },
  { time: "16:00", title: "Review PPT Smart Foods", color: "bg-violet-500" },
];

const SmartAgenda = () => {
  return (
    <div className="glass rounded-2xl p-5">
      <div className="flex items-center gap-2 mb-5">
        <Calendar size={16} className="text-primary" />
        <h3 className="text-xs font-semibold tracking-wider uppercase text-muted-foreground">
          Smart Agenda
        </h3>
      </div>

      <div className="space-y-0">
        {events.map((event, i) => (
          <div key={i} className="flex items-start gap-3 group">
            {/* Timeline */}
            <div className="flex flex-col items-center">
              <div className={`w-2.5 h-2.5 rounded-full ${event.color} shrink-0 mt-1 ring-2 ring-background`} />
              {i < events.length - 1 && (
                <div className="w-px h-10 bg-muted/40" />
              )}
            </div>

            {/* Content */}
            <div className="pb-4">
              <span className="text-[11px] text-muted-foreground font-medium">{event.time}</span>
              <p className="text-sm text-foreground font-medium mt-0.5">{event.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SmartAgenda;
