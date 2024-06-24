import { Sidebar } from "../components/Sidebar";
import { TopBarDash } from "../components/TopBarDash";
import { TrackerEntries } from "../components/TrackerEntries";

const TrackerDashboard = () => {
  return (
    <div className='flex'>
      <Sidebar />
      <div className='w-4/5'>
        <TopBarDash Name={"John Doe"} />
        <TrackerEntries />
      </div>
    </div>
  );
};

export default TrackerDashboard;
