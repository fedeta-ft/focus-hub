import { ChevronRight } from "lucide-react";

const UpNext = () => {
  return (
    <div className="glass-subtle rounded-2xl p-4 flex items-center gap-3">
      <ChevronRight size={14} className="text-primary shrink-0" />
      <div className="flex-1 min-w-0">
        <p className="text-[10px] font-semibold tracking-wider uppercase text-muted-foreground mb-0.5">
          Próxima Misión
        </p>
        <p className="text-sm font-medium text-foreground truncate">
          Revisar Contrato Legal Hornero
        </p>
      </div>
      <span className="text-xs text-muted-foreground font-mono shrink-0">16:00</span>
    </div>
  );
};

export default UpNext;
