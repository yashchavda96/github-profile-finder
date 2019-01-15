import React from 'react';

let badgeStyle = {
    margin: "4px"
};

const UserProfile = ({ userDetails }) => {
    return (
        <div>
            <div className="card">
                <div className="card-header">
                    {userDetails.name}
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3">
                            <img className="thumbnail" style={{ width: "100%", borderRadius: "4px" }} src={userDetails.avatar_url} alt="user_avatar" />
                            <br />
                            <a className="btn btn-primary btn-block" rel="noopener noreferrer"style={{ marginTop: "10px" }} href={userDetails.html_url}>View Profile</a>
                            <br />
                        </div>
                        <div className="col-xs-12 col-sm-9 col-md-9 col-lg-9">
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
                    </div>
                </div>
            </div>
            <br /><br />
            <h3 className="page-header">Latest Repos</h3>
            <div className="repos"></div>
        </div>
    );
}

export default UserProfile;
