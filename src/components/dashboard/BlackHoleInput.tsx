import { Send, Mic } from "lucide-react";
import { useState } from "react";

const BlackHoleInput = () => {
  const [value, setValue] = useState("");

  return (
    <div className="glass rounded-2xl p-1.5 transition-all duration-300 focus-within:border-primary/20 focus-within:neon-glow-sm">
      <div className="flex items-center gap-3 px-4 py-2">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Volcá tu mente acá... (Brain Dump)"
          className="flex-1 bg-transparent text-foreground placeholder:text-muted-foreground text-sm font-light outline-none"
        />
        <button className="w-9 h-9 rounded-xl flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors">
          <Mic size={18} strokeWidth={1.8} />
        </button>
        <button className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center text-primary-foreground animate-pulse-glow transition-transform hover:scale-105">
          <Send size={16} strokeWidth={2} />
        </button>
      </div>
    </div>
  );
};

export default BlackHoleInput;
