import React from "react";
import { Card, CardContent } from "@/components/ui/Card.jsx";
import { Button } from "@/components/ui/Button.jsx";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/Tab.jsx";
import { BarChart, LineChart } from "@/components/ui/Chart.jsx";
import { Table } from "@/components/ui/Table.jsx"; 
const AdminDashboard = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Hospital Management Dashboard</h1>
        <Button>Log Out</Button>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Cards for stats */}
        <Card>
          <CardContent>
            <h2 className="text-xl font-semibold">Total Patients</h2>
            <p className="text-3xl font-bold">1,245</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <h2 className="text-xl font-semibold">Doctors Available</h2>
            <p className="text-3xl font-bold">45</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <h2 className="text-xl font-semibold">Pending Appointments</h2>
            <p className="text-3xl font-bold">67</p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-6">
        {/* Charts Section */}
        <Tabs defaultValue="patients" className="w-full">
          <TabsList>
            <TabsTrigger value="patients">Patient Overview</TabsTrigger>
            <TabsTrigger value="appointments">Appointments</TabsTrigger>
          </TabsList>

          <TabsContent value="patients">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <BarChart data={[/* Patient data */]} title="Patient Admissions by Department" />
              <LineChart data={[/* Trends data */]} title="Monthly Patient Growth" />
            </div>
          </TabsContent>

          <TabsContent value="appointments">
            <BarChart data={[/* Appointment data */]} title="Appointment Distribution" />
          </TabsContent>
        </Tabs>
      </div>

      <div className="mt-6">
        {/* Table Section */}
        <h2 className="text-xl font-bold mb-4">Recent Activities</h2>
        <Table>
          <thead>
            <tr>
              <th>Activity</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>New Patient Registered</td>
              <td>2025-01-27</td>
              <td className="text-green-500">Completed</td>
            </tr>
            <tr>
              <td>Appointment Rescheduled</td>
              <td>2025-01-26</td>
              <td className="text-yellow-500">Pending</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default AdminDashboard;
