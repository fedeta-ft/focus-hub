import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import BlackHoleInput from "@/components/dashboard/BlackHoleInput";
import JarvisChat from "@/components/dashboard/JarvisChat";
import MisionActual from "@/components/dashboard/MisionActual";
import SmartAgenda from "@/components/dashboard/SmartAgenda";
import SmartMail from "@/components/dashboard/SmartMail";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex">
      <DashboardSidebar />

      {/* Main content area — offset for sidebar */}
      <div className="flex-1 ml-[72px] flex">
        {/* Center Column */}
        <main className="flex-1 flex flex-col p-6 gap-5 max-w-3xl">
          <header className="mb-2">
            <h1 className="text-xl font-semibold text-foreground tracking-tight">
              El Agujero Negro
            </h1>
            <p className="text-xs text-muted-foreground mt-1">Brain dump. J.A.R.V.I.S. se encarga del resto.</p>
          </header>

          <BlackHoleInput />
          <JarvisChat />
        </main>

        {/* Right Column */}
        <aside className="w-[340px] shrink-0 p-6 pl-0 flex flex-col gap-4">
          <MisionActual />
          <SmartAgenda />
          <SmartMail />
        </aside>
      </div>
    </div>
  );
};

export default Index;
