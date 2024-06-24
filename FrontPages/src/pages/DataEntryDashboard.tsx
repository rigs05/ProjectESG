import { Sidebar } from "../components/Sidebar";
import { TopBarDash } from "../components/TopBarDash";
import { DataEntries } from "../components/DataEntries";

const DataEntryDashboard = () => {
  return (
    <div className='flex'>
      <Sidebar />
      <div>
        <TopBarDash Name={"John Doe"} />
        <DataEntries />
      </div>
    </div>
  );
};

export default DataEntryDashboard;
