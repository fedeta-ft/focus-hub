import { Target, Check, Timer, Pencil } from "lucide-react";
import { useState, useEffect, useCallback } from "react";

const MisionActual = () => {
  const [completed, setCompleted] = useState(false);
  const [totalSeconds, setTotalSeconds] = useState(45 * 60); // 45 min
  const [isRunning, setIsRunning] = useState(true);
  const [editing, setEditing] = useState(false);
  const [editMin, setEditMin] = useState("45");

  useEffect(() => {
    if (!isRunning || totalSeconds <= 0 || completed) return;
    const interval = setInterval(() => setTotalSeconds((s) => s - 1), 1000);
    return () => clearInterval(interval);
  }, [isRunning, totalSeconds, completed]);

  const formatTime = useCallback((s: number) => {
    const h = Math.floor(s / 3600);
    const m = Math.floor((s % 3600) / 60);
    const sec = s % 60;
    return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
  }, []);

  const handleEditSave = () => {
    const mins = parseInt(editMin);
    if (!isNaN(mins) && mins > 0) {
      setTotalSeconds(mins * 60);
    }
    setEditing(false);
  };

  const urgency = totalSeconds < 600; // < 10 min

  return (
    <div className="glass-float rounded-2xl p-5">
      <div className="flex items-center gap-2 mb-4">
        <Target size={16} className="text-primary" />
        <h3 className="text-xs font-semibold tracking-wider uppercase text-muted-foreground">
          Current Task + Timebox
        </h3>
      </div>

      <div className={`transition-all duration-500 ${completed ? "opacity-50" : ""}`}>
        <div className="flex items-start justify-between gap-3 mb-4">
          <p className={`text-lg font-semibold text-foreground leading-snug ${completed ? "line-through" : ""}`}>
            Terminar PPT Smart Foods
          </p>
          <div className={`text-2xl font-mono font-bold tabular-nums tracking-tight ${urgency ? "text-destructive" : "text-primary"}`}>
            {formatTime(totalSeconds)}
          </div>
        </div>
      </div>

      {editing ? (
        <div className="flex items-center gap-2 mb-4">
          <input
            type="number"
            value={editMin}
            onChange={(e) => setEditMin(e.target.value)}
            className="w-20 h-9 rounded-lg glass-subtle text-center text-sm text-foreground outline-none focus:ring-1 focus:ring-primary"
            min={1}
          />
          <span className="text-xs text-muted-foreground">min</span>
          <button onClick={handleEditSave} className="h-9 px-3 rounded-lg bg-primary text-primary-foreground text-xs font-medium">
            OK
          </button>
        </div>
      ) : null}

      <div className="flex gap-3">
        <button
          onClick={() => setCompleted(!completed)}
          className={`flex-1 h-11 rounded-xl font-medium text-sm flex items-center justify-center gap-2 transition-all duration-300 ${
            completed
              ? "glass-subtle text-primary"
              : "bg-primary text-primary-foreground vision-glow hover:scale-[1.02]"
          }`}
        >
          <Check size={16} strokeWidth={2.5} />
          {completed ? "¡Completado!" : "Completado"}
        </button>
        <button
          onClick={() => { setEditing(!editing); setIsRunning(!isRunning); }}
          className="h-11 px-4 rounded-xl glass-subtle text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
        >
          {editing ? <Timer size={14} /> : <Pencil size={14} />}
          {editing ? "Timer" : "Editar Tiempo"}
        </button>
      </div>
    </div>
  );
};

export default MisionActual;
