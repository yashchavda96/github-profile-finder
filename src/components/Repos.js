import React from 'react';

const Repos = ({ repos }) => {
  let repoList = [];
  repoList = repos.map((repo, index) => {
    return (
      <div className="card" key={index}>
        <div className="card-body">
          <div className="row">
            <div className="col-xs-12 col-sm-9 col-md-10 col-lg-10">
              <h5 className="card-title">{repo.name}</h5>
              {repo.description != "" ? <p className="card-text">{repo.description}</p> : ""}
            </div>
            <div className="col-xs-12 col-sm-3 col-md-2 col-lg-2">
              <a href={repo.html_url} class="btn btn-dark" style={{ float: "right", marginTop: "10px", marginRight: "20px" }} target="_blank">REPO PAGE</a>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="repo-list">
      {repoList}
    </div>
  );
}

export default Repos;


