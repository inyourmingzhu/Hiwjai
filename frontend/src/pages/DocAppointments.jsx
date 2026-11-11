
import React, { useState } from "react";
import "./Appointments.css";

function Appointments() {

    const [search, setSearch] = useState("");
    const [status, setStatus] = useState("all");

    const appointments = [
        {
            id: 1,
            name: "น.ส. รินทร์ทิพย์ จ.",
            date: "11 พ.ย. 2569 09:00",
            type: "ติดตามอาการ",
            channel: "ออนไลน์",
            status: "ยืนยันแล้ว"
        },
        {
            id: 2,
            name: "นาย ธนกร ส.",
            date: "11 พ.ย. 2569 10:30",
            type: "ปรึกษาครั้งแรก",
            channel: "ที่คลินิก",
            status: "รอยืนยัน"
        },
        {
            id: 3,
            name: "น.ส. ณัฐชา พ.",
            date: "11 พ.ย. 2569 13:00",
            type: "ติดตามอาการ",
            channel: "ออนไลน์",
            status: "ยืนยันแล้ว"
        },
        {
            id: 4,
            name: "นาย ศุภวิชญ์ ก.",
            date: "11 พ.ย. 2569 14:30",
            type: "ปรึกษาทั่วไป",
            channel: "ที่คลินิก",
            status: "ยกเลิก"
        },
        {
            id: 5,
            name: "น.ส. ลดาวัลย์ ม.",
            date: "12 พ.ย. 2569 09:30",
            type: "ติดตามอาการ",
            channel: "ออนไลน์",
            status: "ยืนยันแล้ว"
        },
        {
            id: 6,
            name: "นาย ปกรณ์ ท.",
            date: "12 พ.ย. 2569 11:00",
            type: "ปรึกษาทั่วไป",
            channel: "ที่คลินิก",
            status: "รอยืนยัน"
        }
    ];

    // ค้นหาและกรองรายการนัดหมาย
    const filteredAppointments = appointments.filter((item) => {

        const matchSearch =
            item.name.toLowerCase().includes(search.toLowerCase());

        const matchStatus =
            status === "all" || item.status === status;

        return matchSearch && matchStatus;
    });

    // แสดงสีตามสถานะ
    const getStatusClass = (status) => {

        if (status === "ยืนยันแล้ว") return "confirmed";
        if (status === "รอยืนยัน") return "pending";
        if (status === "ยกเลิก") return "cancelled";

        return "";
    };

    return (

        <div className="appointment-page">

            {/* SIDEBAR */}
            <aside className="sidebar">

                <div className="brand">
                    <div className="brand-icon">+</div>

                    <div className="brand-copy">
                        <div className="brand-name">MINDCARE</div>
                        <div className="brand-sub">DOCTOR PORTAL</div>
                    </div>
                </div>

                <div className="nav-label">เมนูหลัก</div>

                <a href="#" className="nav-link active">
                    <span className="nav-icon">▦</span>
                    <span className="nav-text">ตารางนัดหมาย</span>
                </a>

                <a href="#" className="nav-link">
                    <span className="nav-icon">♡</span>
                    <span className="nav-text">ประวัติคนไข้</span>
                </a>

                <a href="#" className="nav-link">
                    <span className="nav-icon">◷</span>
                    <span className="nav-text">จัดการวันหยุด</span>
                </a>

                <a href="#" className="nav-link">
                    <span className="nav-icon">＋</span>
                    <span className="nav-text">ฟอร์มสั่งยา</span>
                </a>

                <div className="sidebar-bottom">

                    <div className="doctor">
                        <div className="avatar">แพ</div>

                        <div className="doctor-info">
                            <strong>นพ. กิตติพงษ์ ใจดี</strong>
                            <small>จิตแพทย์</small>
                        </div>
                    </div>

                    <a href="#" className="logout">
                        ออกจากระบบ ↗
                    </a>

                </div>

            </aside>


            {/* HEADER */}
            <header className="topbar">

                <div className="breadcrumb">
                    Doctor Portal / <b>ตารางนัดหมาย</b>
                </div>

                <div className="top-actions">
                    <button className="round-action">♙</button>
                    <button className="round-action profile">ก</button>
                </div>

            </header>


            {/* MAIN CONTENT */}
            <main className="main-content">

                <section className="page-heading">
                    <h1>ตารางนัดหมาย</h1>

                    <p>
                        ตรวจสอบนัดหมายที่คนไข้จองเข้ามา
                        และติดตามสถานะการเข้ารับบริการ
                    </p>
                </section>


                {/* STATISTICS */}
                <section className="panel stats">

                    <div>
                        <div className="stat-number green">12</div>
                        <div className="stat-label">นัดหมายวันนี้</div>
                    </div>

                    <div>
                        <div className="stat-number orange">08</div>
                        <div className="stat-label">รอยืนยัน</div>
                    </div>

                    <div>
                        <div className="stat-number blue">03</div>
                        <div className="stat-label">กำลังปรึกษา</div>
                    </div>

                    <div>
                        <div className="stat-number dark">24</div>
                        <div className="stat-label">นัดหมายทั้งหมด</div>
                    </div>

                </section>


                {/* FILTER */}
                <section className="panel filters">

                    <div className="field">
                        <label htmlFor="search">
                            ค้นหาคนไข้ / ชื่อ / รหัส
                        </label>

                        <input
                            id="search"
                            type="search"
                            placeholder="พิมพ์ชื่อหรือรหัสคนไข้"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>

                    <div className="field">
                        <label htmlFor="dateFilter">
                            วันที่นัดหมาย
                        </label>

                        <input
                            id="dateFilter"
                            type="date"
                            defaultValue="2026-11-11"
                        />
                    </div>

                    <div className="field">
                        <label htmlFor="statusFilter">
                            สถานะ
                        </label>

                        <select
                            id="statusFilter"
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                        >
                            <option value="all">ทั้งหมด</option>
                            <option value="ยืนยันแล้ว">ยืนยันแล้ว</option>
                            <option value="รอยืนยัน">รอยืนยัน</option>
                            <option value="ยกเลิก">ยกเลิก</option>
                        </select>
                    </div>

                    <button
                        className="btn"
                        onClick={() => alert("เพิ่มการจอง")}
                    >
                        ＋ เพิ่มการจอง
                    </button>

                </section>


                {/* APPOINTMENT TABLE */}
                <section className="panel appointments">

                    <div className="table-heading">

                        <div>
                            <h2>รายการนัดหมาย</h2>
                            <p>แสดงรายการนัดหมายล่าสุดของคนไข้</p>
                        </div>

                        <button
                            className="btn"
                            onClick={() => alert("ดูปฏิทิน")}
                        >
                            ดูปฏิทิน
                        </button>

                    </div>


                    <div className="table-wrap">

                        <table>

                            <thead>
                                <tr>
                                    <th>คนไข้</th>
                                    <th>วันที่ / เวลา</th>
                                    <th>ประเภทการนัด</th>
                                    <th>ช่องทาง</th>
                                    <th>สถานะ</th>
                                    <th>รายละเอียด</th>
                                </tr>
                            </thead>

                            <tbody>

                                {filteredAppointments.map((item) => (

                                    <tr key={item.id}>

                                        <td>{item.name}</td>

                                        <td>{item.date}</td>

                                        <td>{item.type}</td>

                                        <td>{item.channel}</td>

                                        <td>
                                            <span className={`status ${getStatusClass(item.status)}`}>
                                                {item.status}
                                            </span>
                                        </td>

                                        <td>
                                            <a href="#" className="detail-link">
                                                ดูข้อมูล →
                                            </a>
                                        </td>

                                    </tr>

                                ))}

                            </tbody>

                        </table>

                        {filteredAppointments.length === 0 && (
                            <div className="empty">
                                ไม่พบรายการนัดหมาย
                            </div>
                        )}

                    </div>


                    {/* FOOTER */}
                    <div className="table-footer">

                        <span>
                            แสดง {filteredAppointments.length} รายการ
                        </span>

                        <div className="pagination">
                            <button>‹</button>
                            <button className="current">1</button>
                            <button>2</button>
                            <button>3</button>
                            <button>›</button>
                        </div>

                    </div>

                </section>

            </main>

        </div>
    );
}

export default Appointments;
