import { AlertTriangle } from "lucide-react";

const items = [
  { task: "Draft Inversores", detail: "Due: Friday" },
  { task: "Aprobar Presupuesto", detail: "Unblocks: Chan" },
  { task: "Revisar Contrato Legal", detail: "Due: Monday" },
];

const CriticalPath = () => {
  return (
    <div className="glass-float rounded-3xl p-5 ring-1 ring-amber-400/20 shadow-[0_0_32px_hsl(38_90%_50%/0.08)]">
      <div className="flex items-center gap-2 mb-4">
        <AlertTriangle size={16} className="text-amber-500" />
        <h3 className="text-xs font-semibold tracking-wider uppercase text-muted-foreground">
          Impacto Futuro
        </h3>
      </div>

      <div className="space-y-3">
        {items.map((item, i) => (
          <div key={i} className="flex items-center justify-between gap-2">
            <p className="text-sm text-foreground font-medium">{item.task}</p>
            <span className="text-[10px] text-muted-foreground font-medium shrink-0">{item.detail}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CriticalPath;
