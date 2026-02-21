import { Mail, AlertTriangle, Inbox } from "lucide-react";

const SmartMail = () => {
  return (
    <div className="glass rounded-2xl p-5">
      <div className="flex items-center gap-2 mb-5">
        <Mail size={16} className="text-primary" />
        <h3 className="text-xs font-semibold tracking-wider uppercase text-muted-foreground">
          Smart Mail
        </h3>
      </div>

      <div className="flex gap-4">
        {/* Urgentes */}
        <div className="flex-1 glass-subtle rounded-xl p-4 text-center">
          <AlertTriangle size={18} className="text-primary mx-auto mb-2" />
          <p className="text-2xl font-bold text-primary text-glow">3</p>
          <p className="text-[11px] text-muted-foreground mt-1 font-medium">Urgentes</p>
        </div>

        {/* Sin Leer */}
        <div className="flex-1 glass-subtle rounded-xl p-4 text-center">
          <Inbox size={18} className="text-muted-foreground mx-auto mb-2" />
          <p className="text-2xl font-bold text-foreground">10</p>
          <p className="text-[11px] text-muted-foreground mt-1 font-medium">Sin Leer</p>
        </div>
      </div>
    </div>
  );
};

export default SmartMail;
