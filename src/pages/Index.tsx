import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import BlackHoleInput from "@/components/dashboard/BlackHoleInput";
import JarvisChat from "@/components/dashboard/JarvisChat";
import MisionActual from "@/components/dashboard/MisionActual";
import UpNext from "@/components/dashboard/UpNext";
import SmartCalendarGrid from "@/components/dashboard/SmartCalendarGrid";
import CriticalPath from "@/components/dashboard/CriticalPath";
import EnEspera from "@/components/dashboard/EnEspera";
import SmartMail from "@/components/dashboard/SmartMail";

const Index = () => {
  return (
    <div className="min-h-screen flex">
      <DashboardSidebar />

      {/* Main content area — offset for sidebar */}
      <div className="flex-1 ml-[72px] flex">
        {/* Center Column */}
        <main className="flex-1 flex flex-col p-6 gap-5 max-w-3xl">
          <header className="mb-2">
            <h1 className="text-xl font-semibold text-foreground tracking-tight">
              Dashboard
            </h1>
          </header>

          <BlackHoleInput />
          <JarvisChat />
        </main>

        {/* Right Column */}
        <aside className="w-[360px] shrink-0 p-6 pl-0 flex flex-col gap-4 overflow-y-auto max-h-screen">
          <MisionActual />
          <UpNext />
          <SmartCalendarGrid />
          <CriticalPath />
          <EnEspera />
          <SmartMail />
        </aside>
      </div>
    </div>
  );
};

export default Index;
