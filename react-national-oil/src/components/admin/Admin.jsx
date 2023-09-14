import React from 'react'
import LOGO from '../../assets/nock j.png'
import HR from '../../assets/hr.jpg'

const Admin = () => {
      const showAlert = () => {
        // Function implementation
      };
    
      return (
        <div className="admin-container">
          <aside>
            <div className="top">
              <div className="admin-logo">
                <img src={LOGO} alt="logo" />
              </div>
            </div>
            <div className="sidebar">
              <a href="/" className="active">
                <span className="dicons">
                  <ion-icon name="grid-outline"></ion-icon>
                </span>
                <h5>Dashboard</h5>
              </a>
              <a href="/" onClick={showAlert}>
                <span className="dicons">
                  <ion-icon name="people-outline"></ion-icon>
                </span>
                <h5>Employees</h5>
              </a>
              <a href="analytics.html">
                <span className="dicons">
                  <ion-icon name="analytics-outline"></ion-icon>
                </span>
                <h5>Analytics</h5>
              </a>
              
              <a href="report.html">
                <span className="dicons">
                  <ion-icon name="albums-outline"></ion-icon>
                </span>
                <h5>Reports</h5>
              </a>
              <a href="settings.html">
                <span className="dicons">
                  <ion-icon name="settings-outline"></ion-icon>
                </span>
                <h5>Settings</h5>
              </a>
              <a href="/" id="add-employee-link">
                <span className="dicons">
                  <ion-icon name="person-add-outline"></ion-icon>
                </span>
                <h5>Add Employee</h5>
              </a>
              <a href="/" id="logout-link">
                <span className="dicons">
                  <ion-icon name="log-out-outline"></ion-icon>
                </span>
                <h5>Logout</h5>
              </a>
              
            </div>
          </aside>
          <main>
            <h1>Dashboard</h1>
    
            <div className="date">
              <input type="date" />
            </div>
            <div className="insights">
              <div className="ontime">
                <span className="time">
                  <ion-icon name="timer-outline"></ion-icon>
                </span>
                <div className="middle">
                  <div className="left">
                    <h3>Number of check-ins</h3>
                    <h1>50 employees</h1>
                  </div>
                  <div className="progress">
                    <svg>
                      <circle cx="38" cy="38" r="36"></circle>
                    </svg>
                    <div className="number">
                      <p>45%</p>
                    </div>
                  </div>
                </div>
                <small className="text-muted">By 8:24 a.m</small>
              </div>
    
              <div className="dayperf">
                <span className="time">
                  <ion-icon name="today-outline"></ion-icon>
                </span>
                <div className="middle">
                  <div className="left">
                    <h3>Number of check-ins</h3>
                    <h1>112 employees</h1>
                  </div>
                  <div className="progress">
                    <svg>
                      <circle cx="38" cy="38" r="36"></circle>
                    </svg>
                    <div className="number">
                      <p>84%</p>
                    </div>
                  </div>
                </div>
                <small className="text-muted">Today</small>
              </div>
    
              <div className="weekperf">
                <span className="time">
                  <ion-icon name="calendar-outline"></ion-icon>
                </span>
                <div className="middle">
                  <div className="left">
                    <h3>Best attendance</h3>
                    <h1>Tuesday</h1>
                  </div>
                </div>
                <small className="text-muted">Last 7 days</small>
              </div>
            </div>
            <div className="recent">
              <h2>Recent activity</h2>
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Staff no</th>
                    <th>Department</th>
                    <th>Check-in</th>
                    <th>Check-out</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Jackson Imani</td>
                    <td>1067</td>
                    <td>Upstream</td>
                    <td>8:11 am</td>
                    <td className="warning">Pending</td>
                  </tr>
                  <tr>
                    <td>Brian Bolo</td>
                    <td>1003</td>
                    <td>Finance</td>
                    <td>8:07 am</td>
                    <td className="warning">Pending</td>
                  </tr>
                  <tr>
                    <td>Sharon Rotich</td>
                    <td>870</td>
                    <td>Upstream</td>
                    <td>8:04 am</td>
                    <td className="warning">Pending</td>
                  </tr>
                  <tr>
                    <td>Eva Sankok</td>
                    <td>1100</td>
                    <td>Procurement</td>
                    <td>8:00 am</td>
                    <td className="warning">Pending</td>
                  </tr>
                  <tr>
                    <td>Duncun Samwel</td>
                    <td>975</td>
                    <td>Engineering</td>
                    <td>7:57 am</td>
                    <td className="warning">Pending</td>
                  </tr>
                  <tr>
                    <td>Millicent Aduor</td>
                    <td>650</td>
                    <td>Sales&amp;Markerting</td>
                    <td>7:55 am</td>
                    <td className="warning">Pending</td>
                  </tr>
                  <tr>
                    <td>Anthony Oluoch</td>
                    <td>645</td>
                    <td>Finance</td>
                    <td>7:50 am</td>
                    <td className="warning">Pending</td>
                  </tr>
                  <tr>
                    <td>Lily Munyanyu</td>
                    <td>812</td>
                    <td>Human resource</td>
                    <td>7:46 am</td>
                    <td className="warning">Pending</td>
                  </tr>
                </tbody>
              </table>
              <a href="/">Show All</a>
            </div>
          </main>
    
          <div className="right">
            <div className="top">
              <button id="menu-btn">
                <ion-icon name="menu-outline"></ion-icon>
              </button>
              <div className="theme-toggler">
                <span className="light-active">
                  <ion-icon name="sunny-outline"></ion-icon>
                </span>
                <span className="moon">
                  <ion-icon name="moon-outline"></ion-icon>
                </span>
              </div>
              <div className="profile">
                <div className="info">
                  <p>
                    {" "}
                    Hey <b>Willis</b>
                  </p>
                  <small className="text-muted">Admin</small>
                </div>
                <div className="profile-photo">
                  <img src={HR} alt="hr" />
                </div>
              </div>
            </div>
    
            <div className="departments">
              <h2>Departments</h2>
              <a href="/">Finance</a>
              <a href="/">Upstream</a>
              <a href="/">ICT</a>
              <a href="/">Engineering</a>
              <a href="/">Procurement</a>
              <a href="/">Sales&amp;Marketing</a>
              <a href="/">Human resource</a>
              <a href="/">Corprate</a>
              <a href="/">Legal</a>
            </div>
          </div>
        </div>
    
    
 

  )
}

export default Admin