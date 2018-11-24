import React from 'react';
import { Link } from 'react-router-dom'


const ProfileActions = () => {
  return (
    <div className="container">
      <div className="mb-4" role="group">
        <Link to="/edit-profile" className="btn btn-light">
          <i className="fas fa-user-circle text-info mr-1"></i> Edit Profile</Link>
          <br />
        <Link to="/add-experience" className="btn btn-light mt-2">
          <i className="fab fa-black-tie text-info mr-1"></i>
          Add Experience</Link>
          <br />
        <Link to="/add-education" className="btn btn-light mt-2">
          <i className="fas fa-graduation-cap text-info mr-1"></i>
          Add Education</Link>
      </div>
    </div>
  )
}

export default ProfileActions
