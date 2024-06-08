import { DataEntries } from "../components/DataEntries";
import { Sidebar } from "../components/Sidebar";
import { TopBarDash } from "../components/TopBarDash";

export const DataEntryDashboard = () => {
  return (
    <div>
      <Sidebar />
      <TopBarDash Name={"John Doe"} />
      <DataEntries />
    </div>
  );
};
