import React from 'react';
let badgeStyle = {
    margin: "4px"
};
const Overview = ({ userDetails }) => {
    return (
        <div>
            <span className="badge badge-dark" style={badgeStyle}>Public Repos: {userDetails.public_repos}</span>
            <span className="badge badge-primary" style={badgeStyle}>Public Gists: {userDetails.public_gists}</span>
            <span className="badge badge-success" style={badgeStyle}>Followers: {userDetails.followers}</span>
            <span className="badge badge-danger" style={badgeStyle}>Following: {userDetails.following}</span>
            <br />
            <br />
            <div className="list-group">
                {userDetails.bio !== null ? <div className="list-group-item">About: {userDetails.bio}</div> : ""}
                {userDetails.email !== null ? <div className="list-group-item">Email: {userDetails.email}</div> : ""}
                {userDetails.company !== null ? <div className="list-group-item">Company: {userDetails.company}</div> : ""}
                {userDetails.blog !== "" ? <div className="list-group-item">Website/blog: {userDetails.blog}</div> : ""}
                {userDetails.location !== null ? <div className="list-group-item">Location: {userDetails.location}</div> : ""}
                {userDetails.created_at !== null ? <div className="list-group-item">Member Since: {userDetails.created_at}</div> : ""}
            </div>
        </div>
    );
}

export default Overview;
