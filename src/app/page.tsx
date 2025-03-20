import GlobalLayout from "@/components/layout/GlobalLayout";
import ChartOverview from "@/components/layout/home/ChartOverview";
import DashboardHeader from "@/components/layout/home/DashboardHeaders";

export default function Home() {
  return (
    <GlobalLayout title="Mon Stock">
      <div className="mt-10 flex mb-5 ml-5">
      <h1 className="text-3xl font-bold text-black">Tableau de bord</h1>
      </div>
      <DashboardHeader />
      <ChartOverview/>
    </GlobalLayout>
  );
}
