import { useState } from 'react';
 
// Correct import syntax for react-icons
import { 
    BiGridAlt, 
    BiGridAlt,
    BiLogOut,
    BiMenuAltRight,
    BiMenu

    
  } 
  from "react-icons/bi";
import './Dashboard.css';

const Dashboard = () => {
  const [isSidebarActive, setIsSidebarActive] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarActive(!isSidebarActive);
  };

  return (
    <div className="dashboard-container">
      <div className={`sidebar ${isSidebarActive ? 'active' : ''}`}>
        <div className="logo-details">
          <BxGridAlt className="bx bxl-c-plus-plus" />
          <span className="logo_name">CodingLab</span>
        </div>
        <ul className="nav-links">
          {/* Navigation items */}
          <li>
            <a href="#" className="active">
              <BxGridAlt />
              <span className="links_name">Dashboard</span>
            </a>
          </li>
          {/* Add other navigation items similarly */}
          <li className="log_out">
            <a href="#">
              <BxLogOut />
              <span className="links_name">Log out</span>
            </a>
          </li>
        </ul>
      </div>

      <section className="home-section">
        <nav>
          <div className="sidebar-button">
            <button onClick={toggleSidebar}>
              {isSidebarActive ? <BxMenuAltRight /> : <BxMenu />}
            </button>
            <span className="dashboard">Dashboard</span>
          </div>
          {/* Rest of nav content */}
        </nav>

        <div className="home-content">
          {/* Dashboard content boxes */}
          <div className="overview-boxes">
            {/* Overview boxes */}
          </div>
          
          <div className="sales-boxes">
            {/* Sales content */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;