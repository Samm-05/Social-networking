import "../styles/profile.css";

export default function Profile() {
  return (
    <div className="profile-page">
      <div className="profile-card">

        <div className="profile-header">
          <div className="avatar">Y</div>

          <div>
            <div className="profile-name">Your Name</div>
            <div className="profile-sub">XYZ Engineering College</div>
          </div>
        </div>

        <div className="profile-info">
          <div className="info-card">
            <div className="info-label">Branch</div>
            <div className="info-value">Computer Science</div>
          </div>

          <div className="info-card">
            <div className="info-label">Year</div>
            <div className="info-value">2nd Year</div>
          </div>

          <div className="info-card">
            <div className="info-label">Connections</div>
            <div className="info-value">12</div>
          </div>

          <div className="info-card">
            <div className="info-label">College Email</div>
            <div className="info-value">yourname@college.edu</div>
          </div>
        </div>

        <button className="edit-btn">Edit Profile</button>

      </div>
    </div>
  );
}
