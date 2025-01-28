
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import DoctorDashboard from './components/Dashboards/Doctor/DoctorDashboard.jsx'
// import HospitalManagement from './components/Staff/StaffDashboard.jsx'
// import StaffDashboard from './components/Staff/StaffDashboard.jsx'
import AdminDashboard from './components/Dashboards/Admin/AdminDashboard.jsx'




createRoot(document.getElementById('root')).render(
 <>
 <App></App>
 {/* <DoctorDashboard></DoctorDashboard> */}
 <AdminDashboard></AdminDashboard>
 {/* { <HospitalManagement></HospitalManagement> } */}
    {/* <StaffDashboard></StaffDashboard> */}
 </>
)
