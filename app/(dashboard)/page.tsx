import { ModeToggle } from "@/components/ui/theme-toggle";
import { count } from "@/lib/action/count/action";
import toast from "react-hot-toast";
import Dashboard from "@/components/dashboard/dashobard";

export default async function Home() {
  const counts = await count();
  console.log("count data", counts);

  return (
    <div className="min-h-[95dvh] p-4 space-y-4 rounded-md border-2">
      <div className="border-b-2 py-4 flex items-center justify-between">
        <h1 className="text-lg font-semibold ">Dashboard</h1>
        <ModeToggle />
      </div>
      <Dashboard counts={counts} />
    </div>
  );
}
