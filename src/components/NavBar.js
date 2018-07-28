import React from 'react';

const NavBar = (props) => {
  const handleChange = (event) => {
    props.fetchUserDetails(event.target.value);
  };
  return (
    <nav className="navbar navbar-dark bg-primary">
      <span className="navbar-brand mb-0 h1">Github Profile Finder</span>
      <form className="form-inline" onSubmit={(e) => e.preventDefault()}>
        <input className="form-control mr-sm-2" type="text" placeholder="Search by username" value={props.username} onChange={handleChange} />
      </form>
    </nav>
  );
}

export default NavBar;
