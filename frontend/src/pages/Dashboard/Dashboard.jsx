import Input from "../../components/Auth/Input";
import DashFooter from "../../components/public/DashFooter";
import DashNav from "../../components/public/DashNav";
import Navbutton from "../../components/public/Navbutton";
const Dashboard = () => {

  return (
    <>
     <div className="min-h-screen flex flex-col bg-gray-50">


  {/* Main Content */}
  <main className="flex-1 container mx-auto px-6 py-8 grid grid-cols-1 lg:grid-cols-4 gap-8">
    {/* Left: Projects */}
    <div className="lg:col-span-3 space-y-6">
      {/* Search + Add Project */}
   <div className="flex w-full justify-between items-end gap-4">
 
  <div className="flex-[0.9]">
    <Input
      type="text"
      placeholder="Search projects..."
      classes="w-full px-4 py-4 border rounded-lg shadow-sm focus:ring-pink-500 focus:border-pink-500"
    />
  </div>


  <div className="flex-[0.2]">
    <Navbutton to="addproject" classes="w-full bg-pink-600 text-white px-6 py-4 rounded-lg shadow hover:bg-pink-700" text="+ Add Project"/>
  </div>
</div>


      {/* Project List */}
      <div className="grid gap-4">
        <div className="p-4 bg-white shadow rounded-lg border">
          <h2 className="text-lg font-semibold text-gray-800">Project Alpha</h2>
          <p className="text-sm text-gray-600 mt-1">Short description...</p>
        </div>
        <div className="p-4 bg-white shadow rounded-lg border">
          <h2 className="text-lg font-semibold text-gray-800">Project Beta</h2>
          <p className="text-sm text-gray-600 mt-1">Short description...</p>
        </div>
      </div>
    </div>

    {/* Right: Collaboration Requests */}
    <aside className="space-y-4">
      <h2 className="text-lg font-bold text-gray-800">Collab Requests</h2>
      <div className="bg-white p-4 rounded-lg shadow border">
        <p className="text-sm text-gray-700">Jane invited you to join <span className="font-semibold">Project Gamma</span></p>
        <div className="flex gap-2 mt-2">
          <button className="flex-1 bg-pink-600 text-white px-3 py-1 rounded-lg hover:bg-pink-700">Accept</button>
          <button className="flex-1 border border-gray-300 px-3 py-1 rounded-lg hover:bg-gray-100">Decline</button>
        </div>
      </div>
    </aside>
  </main>

</div>

    </>
  );
};

export default Dashboard;