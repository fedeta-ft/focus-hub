import { Clock, Circle } from "lucide-react";

const waitingItems = [
  { person: "Chan", subject: "Presupuesto Hornero" },
  { person: "AF", subject: "OK Inversión" },
  { person: "Laura", subject: "Contrato Legal" },
];

const EnEspera = () => {
  return (
    <div className="glass-float rounded-3xl p-5">
      <div className="flex items-center gap-2 mb-4">
        <Clock size={16} className="text-primary" />
        <h3 className="text-xs font-semibold tracking-wider uppercase text-muted-foreground">
          Esperando Respuesta de...
        </h3>
      </div>

      <div className="space-y-3">
        {waitingItems.map((item, i) => (
          <div key={i} className="flex items-center gap-3">
            <Circle size={8} className="text-amber-500 fill-amber-500 shrink-0" />
            <div className="flex-1 min-w-0">
              <p className="text-sm text-foreground font-medium truncate">
                <span className="font-semibold">{item.person}</span>
                <span className="text-muted-foreground font-normal"> — {item.subject}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EnEspera;
