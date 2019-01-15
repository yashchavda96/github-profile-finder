import React from 'react';

const People = ({ people }) => {
  let peopleList = [];
  peopleList = people.map((p, i) => {
    return (
      <div className="card" key={i}>
        <div className="card-body">
          <div className="row">
            <div className="col-xs-12 col-sm-3 col-md-3 col-lg-2">
              <img className="thumbnail" style={{ width: "180px", borderRadius: "4px" }} src={p.avatar_url} alt="user_avatar" />
            </div>
            <div className="col-xs-12 col-sm-9 col-md-9 col-lg-10" style={{ marginTop: "10px" }}>
              <h5 className="card-title">{p.login}</h5>
              <a href={p.html_url} rel="noopener noreferrer" className="btn btn-dark" target="_blank"> VIEW GH-PAGE</a>
            </div>
          </div>
        </div>
      </div >
    );
  });

  return (
    <div className="people-list">
      {peopleList}
    </div>
  );
}

export default People;


