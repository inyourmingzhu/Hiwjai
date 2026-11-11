
import { useState } from 'react'
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import Login from './pages/Login'
import DocAppointments from './pages/DocAppointments'
import PatientHistory from './pages/PatientHistory'
import ManageLeave from './pages/ManageLeave'
import Prescription from './pages/Prescription'
import DoctorLayout from './DoctorLayout'
import { store } from './api'

function App() {
  const [user, setUser] = useState(() => store.user())
  const navigate = useNavigate()

  const handleLogin = (u) => {
    setUser(u)

    if (u.role === 'doctor') {
      navigate('/appointments', { replace: true })
    } else {
      navigate('/login', { replace: true })
    }
  }

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Navigate
            to={user?.role === 'doctor' ? '/appointments' : '/login'}
            replace
          />
        }
      />

      <Route
        path="/login"
        element={<Login onLogin={handleLogin} />}
      />

      <Route
        path="/home"
        element={
          user
            ? <div className="p-8">สวัสดี {user.name}</div>
            : <Navigate to="/login" replace />
        }
      />






      {/* หน้าสำหรับแพทย์ ใช้ Sidebar ร่วมกัน ของ ต้า */}
      <Route
        element={
          user?.role === 'doctor'
            ? <DoctorLayout />
            : <Navigate to="/login" replace />
        }
      >
        <Route
          path="/appointments"
          element={<DocAppointments />}
        />

        <Route
          path="/patient-history"
          element={<PatientHistory />}
        />

        <Route
          path="/manage-leave"
          element={<ManageLeave />}
        />

        <Route
          path="/prescription"
          element={<Prescription />}
        />
      </Route>


      {/* หน้าสำหรับแพทย์ ใช้ Sidebar ร่วมกัน ของ ต้า */}








      <Route
        path="*"
        element={<Navigate to="/" replace />}
      />
    </Routes>
  )
}

export default App
