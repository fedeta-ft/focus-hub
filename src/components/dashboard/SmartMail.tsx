import { AlertCircle, Mail } from "lucide-react";

const SmartMail = () => {
  return (
    <div className="glass-float rounded-2xl p-5">
      <div className="flex items-center gap-2 mb-4">
        <Mail size={16} className="text-primary" />
        <h3 className="text-xs font-semibold tracking-wider uppercase text-muted-foreground">
          Smart Mail
        </h3>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="glass-subtle rounded-xl p-4 flex flex-col items-center gap-2">
          <AlertCircle size={20} className="text-amber-500" />
          <span className="text-lg font-bold text-foreground">3</span>
          <span className="text-[10px] text-muted-foreground font-medium uppercase tracking-wide">Urgentes</span>
        </div>
        <div className="glass-subtle rounded-xl p-4 flex flex-col items-center gap-2">
          <Mail size={20} className="text-primary" />
          <span className="text-lg font-bold text-foreground">10</span>
          <span className="text-[10px] text-muted-foreground font-medium uppercase tracking-wide">Sin Leer</span>
        </div>
      </div>
    </div>
  );
};

export default SmartMail;
