import React from 'react';
import Overview from './Overview';
import Repos from './Repos';
import People from './People';

const baseUrl = 'https://github.com/';

const UserProfile = ({ userDetails, repos, starred, followers, followings }) => {
  let url = baseUrl + userDetails.login;
  return (
    <div style={{ marginBottom: "100px" }}>
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-3">
          <div className="card">
            <div className="card-header">
              {userDetails.name}
            </div>
            <div className="card-body">
              <img className="thumbnail" style={{ width: "100%", borderRadius: "4px" }} src={userDetails.avatar_url} alt="user_avatar" />
              <br />
              <a className="btn btn-primary btn-block" style={{ marginTop: "10px" }} href={userDetails.html_url} target="_blank">View Profile</a>
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-8 col-lg-9">
          <div className="card">
            <div className="card-header">
              Overview
            </div>
            <div className="card-body">
              <Overview userDetails={userDetails} />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <div className="card">
            <div className="card-header">
              <ul className="nav nav-pills" id="pills-tab" role="tablist">
                <li className="nav-item">
                  <a className="nav-link active" id="pills-repos-tab" data-toggle="pill" href="#pills-repos" role="tab" aria-controls="pills-repos" aria-selected="false">Repositories</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" id="pills-starred-tab" data-toggle="pill" href="#pills-starred" role="tab" aria-controls="pills-starred" aria-selected="false">Starred</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" id="pills-followers-tab" data-toggle="pill" href="#pills-followers" role="tab" aria-controls="pills-followers" aria-selected="false">Followers</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" id="pills-followings-tab" data-toggle="pill" href="#pills-followings" role="tab" aria-controls="pills-followings" aria-selected="false">Followings</a>
                </li>
              </ul>
            </div>
            <div className="card-body">
              <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-repos" role="tabpanel" aria-labelledby="pills-repos-tab">
                  <Repos repos={repos} />
                  <br />
                  <a href={url + "?tab=repositories"} className="btn btn-primary" target="_blank">View All Repositories</a>
                </div>
                <div className="tab-pane fade" id="pills-starred" role="tabpanel" aria-labelledby="pills-starred-tab">
                  <Repos repos={starred} />
                  <br />
                  <a href={url + "?tab=stars"} className="btn btn-primary" target="_blank">View All Starred Repositories</a>
                </div>
                <div className="tab-pane fade" id="pills-followers" role="tabpanel" aria-labelledby="pills-followers-tab">
                  <People people={followers} />
                  <br />
                  <a href={url + "?tab=followers"} className="btn btn-primary" target="_blank">View All Followers</a>
                </div>
                <div className="tab-pane fade" id="pills-followings" role="tabpanel" aria-labelledby="pills-followings-tab">
                  <People people={followings} />
                  <br />
                  <a href={url + "?tab=following"} className="btn btn-primary text-center" target="_blank">View All Followings</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
