import { Bot, User } from "lucide-react";

const messages = [
  {
    role: "user" as const,
    text: "Necesito preparar la presentación de Smart Foods para mañana.",
  },
  {
    role: "jarvis" as const,
    text: "Entendido. He creado la tarea \"Terminar PPT Smart Foods\" como tu misión actual. Tenés 3 horas libres esta tarde — te sugiero bloquear de 15:00 a 18:00 para enfocarte sin interrupciones.",
  },
  {
    role: "user" as const,
    text: "¿Qué mails urgentes tengo?",
  },
  {
    role: "jarvis" as const,
    text: "Tenés 3 mails urgentes: uno de inversores sobre la ronda Serie A, otro del equipo legal sobre el contrato de Hornero, y una confirmación pendiente de la reunión de mañana. ¿Querés que los priorice?",
  },
];

const JarvisChat = () => {
  return (
    <div className="flex-1 flex flex-col gap-4 overflow-y-auto pr-1">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
          <Bot size={14} className="text-primary" />
        </div>
        <span className="text-xs font-medium text-primary/80 tracking-wide uppercase">
          J.A.R.V.I.S. Insight
        </span>
      </div>

      {messages.map((msg, i) => (
        <div
          key={i}
          className={`flex gap-3 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
        >
          {msg.role === "jarvis" && (
            <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
              <Bot size={14} className="text-primary" />
            </div>
          )}
          <div
            className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
              msg.role === "user"
                ? "glass-subtle text-foreground rounded-br-md"
                : "glass-float text-foreground rounded-bl-md"
            }`}
          >
            {msg.text}
          </div>
          {msg.role === "user" && (
            <div className="w-7 h-7 rounded-full bg-primary/5 flex items-center justify-center shrink-0 mt-1">
              <User size={14} className="text-muted-foreground" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default JarvisChat;
