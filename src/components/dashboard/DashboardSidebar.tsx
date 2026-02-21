import { Home, Building2, Database, Bird, ShoppingCart, Settings } from "lucide-react";

const navItems = [
  { icon: Home, label: "Home", active: true },
  { icon: Building2, label: "POLSA", active: false },
  { icon: Database, label: "DS", active: false },
  { icon: Bird, label: "Hornero", active: false },
  { icon: ShoppingCart, label: "Smart Foods", active: false },
];

const DashboardSidebar = () => {
  return (
    <aside className="fixed left-0 top-0 h-screen w-[72px] glass flex flex-col items-center py-6 z-50">
      {/* Avatar */}
      <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center mb-8 ring-2 ring-primary/30">
        <span className="text-sm font-semibold text-primary">JD</span>
      </div>

      {/* Nav Items */}
      <nav className="flex flex-col items-center gap-1 flex-1">
        {navItems.map((item) => (
          <button
            key={item.label}
            className={`group relative w-11 h-11 rounded-lg flex items-center justify-center transition-all duration-200 ${
              item.active
                ? "bg-primary/10 text-primary neon-glow-sm"
                : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
            }`}
          >
            {item.active && (
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-5 bg-primary rounded-r-full" />
            )}
            <item.icon size={20} strokeWidth={1.8} />
            {/* Tooltip */}
            <div className="absolute left-full ml-3 px-2.5 py-1 rounded-md bg-secondary text-xs font-medium text-foreground opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
              {item.label}
            </div>
          </button>
        ))}
      </nav>

      {/* Settings at bottom */}
      <button className="w-11 h-11 rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-all duration-200">
        <Settings size={20} strokeWidth={1.8} />
      </button>
    </aside>
  );
};

export default DashboardSidebar;
