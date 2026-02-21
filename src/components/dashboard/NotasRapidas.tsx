import { StickyNote } from "lucide-react";
import { useState } from "react";

const NotasRapidas = () => {
  const [note, setNote] = useState("");

  return (
    <div className="glass-float rounded-2xl p-5">
      <div className="flex items-center gap-2 mb-4">
        <StickyNote size={16} className="text-primary" />
        <h3 className="text-xs font-semibold tracking-wider uppercase text-muted-foreground">
          Notas Rápidas
        </h3>
      </div>

      <textarea
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Tipeá una nota rápida..."
        className="w-full h-24 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none resize-none leading-relaxed"
      />
    </div>
  );
};

export default NotasRapidas;
