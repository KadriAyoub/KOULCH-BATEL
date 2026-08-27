import { Link } from "react-router";
import { useAuthStore } from "../../store/useAuthStore";
import "./SecuredComponent.css";

export default function SecuredComponent({ children, requiredRole }) {
  const { user, isAuthenticated } = useAuthStore();

  if (!isAuthenticated) {
    return <AccessDeniedView reason="not_logged_in" />;
  }

  if (requiredRole && user?.role !== requiredRole) {
    return <AccessDeniedView reason="unauthorized" requiredRole={requiredRole} />;
  }

  return children;
}

function AccessDeniedView({ reason, requiredRole }) {
  return (
    <div className="access-denied-container">
      <div className="access-denied-card">
        <div className="lock-icon-container">
          <box-icon name="lock-alt" className="lock-icon" size="64px"></box-icon>
        </div>
        <h1>Protected Area</h1>
        <p className="access-denied-message">
          {reason === "not_logged_in"
            ? "This page requires administrator authentication. Please log in to proceed."
            : `Access restricted. You need '${requiredRole}' privileges to view this page.`}
        </p>
        <div className="access-denied-actions">
          {reason === "not_logged_in" ? (
            <Link to="/login" className="action-btn primary-btn">
              Log In
            </Link>
          ) : (
            <Link to="/" className="action-btn primary-btn">
              Go Home
            </Link>
          )}
          {reason === "not_logged_in" && (
            <Link to="/" className="action-btn secondary-btn">
              Back to Home
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
