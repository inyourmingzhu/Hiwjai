
import { NavLink, Outlet } from 'react-router-dom';
import { store } from './api';

function DoctorLayout() {
    const user = store.user();

    return (
        <div className="doctor-portal">

            {/* Sidebar */}
            <aside className="sidebar">

                <div className="brand">

                    <div>
                        <h2>HIWJAI</h2>
                        <span>DOCTOR PORTAL</span>
                    </div>
                </div>

                <div className="sidebar-menu">
                    <p className="menu-heading">เมนูหลัก</p>

                    <NavLink
                        to="/appointments"
                        className={({ isActive }) =>
                            `menu-item ${isActive ? 'active' : ''}`
                        }
                    >

                        <span>ตารางนัดหมาย</span>
                    </NavLink>

                    <NavLink
                        to="/patient-history"
                        className={({ isActive }) =>
                            `menu-item ${isActive ? 'active' : ''}`
                        }
                    >

                        <span>ดูประวัติคนไข้</span>
                    </NavLink>

                    <NavLink
                        to="/manage-leave"
                        className={({ isActive }) =>
                            `menu-item ${isActive ? 'active' : ''}`
                        }
                    >

                        <span>จัดการวันหยุด</span>
                    </NavLink>

                    <NavLink
                        to="/prescription"
                        className={({ isActive }) =>
                            `menu-item ${isActive ? 'active' : ''}`
                        }
                    >

                        <span>ฟอร์มสั่งยา</span>
                    </NavLink>
                </div>

                {/* ข้อมูลแพทย์ */}
                <div className="sidebar-profile">
                    <div className="profile-avatar">
                        {user?.name?.charAt(0) || 'หมอ'}
                    </div>

                    <div>
                        <strong>{user?.name || 'แพทย์'}</strong>
                        <span>{user?.username || 'Doctor'}</span>
                    </div>
                </div>

                <button
                    className="logout-button"
                    onClick={() => {
                        store.clear();
                        window.location.href = '/login';
                    }}
                >
                    ออกจากระบบ
                </button>

            </aside>

            {/* Main Content */}
            <main className="main-content">

                <header className="topbar">
                    <div className="breadcrumb">
                        Doctor Portal /
                        <strong>
                            {location.pathname === '/appointments' && 'ตารางนัดหมาย'}
                            {location.pathname === '/patient-history' && 'ประวัติคนไข้'}
                            {location.pathname === '/manage-leave' && 'จัดการวันหยุด'}
                            {location.pathname === '/prescription' && 'ฟอร์มสั่งยา'}
                        </strong>
                    </div>

                    <div className="topbar-actions">
                        <button className="topbar-avatar">
                            {user?.name?.charAt(0) || 'หมอ'}
                        </button>
                    </div>
                </header>

                <Outlet />

            </main>
        </div>
    );
}

export default DoctorLayout;
