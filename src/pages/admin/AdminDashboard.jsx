import "chart.js/auto";
import { Line, Bar, Doughnut } from "react-chartjs-2";
import { useAuthStore } from "../../store/useAuthStore";
import { useThemeStore } from "../../store/useThemeStore";
import "./AdminDashboard.css";

export default function AdminDashboard() {
  const { user, logout } = useAuthStore();
  const theme = useThemeStore((state) => state.theme);

  // Define chart colors based on active theme
  const isDark = theme === "dark";
  const textColor = isDark ? "#ffffff" : "#111111";
  const gridColor = isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.08)";

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          color: textColor,
          font: { family: "Sora", size: 12 },
        },
      },
    },
    scales: {
      x: {
        grid: { color: gridColor },
        ticks: { color: textColor, font: { family: "Sora" } },
      },
      y: {
        grid: { color: gridColor },
        ticks: { color: textColor, font: { family: "Sora" } },
      },
    },
  };

  // Line Chart Data: Visits & Inquiries
  const lineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Website Visits",
        data: [1200, 1900, 3000, 5000, 4500, 6000],
        borderColor: isDark ? "#3b82f6" : "#00229c",
        backgroundColor: isDark ? "rgba(59, 130, 246, 0.1)" : "rgba(0, 34, 156, 0.1)",
        tension: 0.4,
        fill: true,
      },
      {
        label: "Contact Inquiries",
        data: [150, 200, 180, 250, 310, 400],
        borderColor: "#ef4444",
        backgroundColor: "rgba(239, 68, 68, 0.1)",
        tension: 0.4,
        fill: true,
      },
    ],
  };

  // Bar Chart Data: Categories
  const barData = {
    labels: ["Clothing", "Electronics", "Accessories", "Home & Living", "Books"],
    datasets: [
      {
        label: "Products Listed",
        data: [420, 290, 150, 320, 180],
        backgroundColor: [
          isDark ? "rgba(59, 130, 246, 0.8)" : "rgba(0, 34, 156, 0.8)",
          "rgba(16, 185, 129, 0.8)",
          "rgba(245, 158, 11, 0.8)",
          "rgba(139, 92, 246, 0.8)",
          "rgba(236, 72, 153, 0.8)",
        ],
        borderWidth: 0,
        borderRadius: 8,
      },
    ],
  };

  // Doughnut Chart Data: User segmentation
  const doughnutData = {
    labels: ["Regular Users", "Premium Members", "Administrators"],
    datasets: [
      {
        data: [3200, 600, 42],
        backgroundColor: [
          isDark ? "#3b82f6" : "#00229c",
          "#10b981",
          "#ef4444"
        ],
        hoverOffset: 4,
        borderWidth: 0,
      },
    ],
  };

  return (
    <div className="admin-dashboard-container">
      {/* Sidebar */}
      <aside className="admin-sidebar">
        <div className="sidebar-brand">
          <box-icon name="shield-quarter" size="32px"></box-icon>
          <span>Admin Portal</span>
        </div>
        <nav className="sidebar-menu">
          <a href="#overview" className="menu-item active">
            <box-icon name="grid-alt"></box-icon>
            <span>Overview</span>
          </a>
          <a href="#products" className="menu-item">
            <box-icon name="package"></box-icon>
            <span>Products</span>
          </a>
          <a href="#users" className="menu-item">
            <box-icon name="group"></box-icon>
            <span>Users</span>
          </a>
          <a href="#settings" className="menu-item">
            <box-icon name="cog"></box-icon>
            <span>Settings</span>
          </a>
        </nav>
        <div className="sidebar-footer">
          <button onClick={logout} className="logout-btn">
            <box-icon name="log-out" size="18px" color="white"></box-icon>
            <span>Log Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="admin-main">
        <header className="admin-header">
          <div>
            <h1>Dashboard Overview</h1>
            <p>Welcome back, {user?.name || "Administrator"}</p>
          </div>
          <div className="admin-profile-badge">
            <div className="avatar">AD</div>
            <div className="details">
              <span className="name">{user?.name}</span>
              <span className="role">{user?.role}</span>
            </div>
          </div>
        </header>

        {/* Stats Grid */}
        <section className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon-wrapper blue">
              <box-icon name="package" color={isDark ? "#3b82f6" : "#00229c"}></box-icon>
            </div>
            <div className="stat-info">
              <span className="label">Total Products</span>
              <h3>1,360</h3>
              <span className="trend positive">+12% from last month</span>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon-wrapper green">
              <box-icon name="group" color="#10b981"></box-icon>
            </div>
            <div className="stat-info">
              <span className="label">Active Users</span>
              <h3>3,842</h3>
              <span className="trend positive">+5.3% this week</span>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon-wrapper red">
              <box-icon name="message-square-detail" color="#ef4444"></box-icon>
            </div>
            <div className="stat-info">
              <span className="label">Inquiries</span>
              <h3>84</h3>
              <span className="trend negative">-2% from yesterday</span>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon-wrapper purple">
              <box-icon name="trending-up" color="#8b5cf6"></box-icon>
            </div>
            <div className="stat-info">
              <span className="label">Growth Rate</span>
              <h3>18.4%</h3>
              <span className="trend positive">+2.1% than target</span>
            </div>
          </div>
        </section>

        {/* Charts Section */}
        <section className="charts-section">
          {/* Line Chart */}
          <div className="chart-card span-two">
            <h2>Website Activity</h2>
            <div className="chart-wrapper">
              <Line data={lineData} options={chartOptions} />
            </div>
          </div>

          {/* Doughnut Chart */}
          <div className="chart-card">
            <h2>User Segmentation</h2>
            <div className="chart-wrapper">
              <Doughnut
                data={doughnutData}
                options={{
                  ...chartOptions,
                  scales: undefined,
                }}
              />
            </div>
          </div>

          {/* Bar Chart */}
          <div className="chart-card span-two">
            <h2>Product Categories</h2>
            <div className="chart-wrapper">
              <Bar data={barData} options={chartOptions} />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
