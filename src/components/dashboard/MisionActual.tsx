import { Target, Check, GitBranch } from "lucide-react";
import { useState } from "react";

const MisionActual = () => {
  const [completed, setCompleted] = useState(false);

  return (
    <div className="glass rounded-2xl p-5">
      <div className="flex items-center gap-2 mb-5">
        <Target size={16} className="text-primary" />
        <h3 className="text-xs font-semibold tracking-wider uppercase text-muted-foreground">
          Misión Actual
        </h3>
      </div>

      <div className={`transition-all duration-500 ${completed ? "opacity-50" : ""}`}>
        <p className={`text-lg font-semibold text-foreground leading-snug mb-6 ${completed ? "line-through" : ""}`}>
          Terminar PPT Smart Foods
        </p>
      </div>

      <div className="flex gap-3">
        <button
          onClick={() => setCompleted(!completed)}
          className={`flex-1 h-11 rounded-xl font-medium text-sm flex items-center justify-center gap-2 transition-all duration-300 ${
            completed
              ? "bg-primary/20 text-primary"
              : "bg-primary text-primary-foreground neon-glow hover:scale-[1.02]"
          }`}
        >
          <Check size={16} strokeWidth={2.5} />
          {completed ? "¡Completado!" : "Completado"}
        </button>
        <button className="h-11 px-4 rounded-xl glass-subtle text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2">
          <GitBranch size={14} />
          Desglosar
        </button>
      </div>
    </div>
  );
};

export default MisionActual;
