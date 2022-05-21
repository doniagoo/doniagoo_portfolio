import React from "react";

const CharacterList = ({ characters }) => {
  return (
    <div className="container">
      <div className="row">
        {characters.map((item, index) => (
          <div key={index} className="col-lg-3 col-md-6 col-sm-12 mb-4 ">
            <div className="card card-style" style={{ minWidth: "200px" }}>
              <img className="card-img-top p-5 card-img" src={item.image} alt="character" />
              <div className="card-body p-5">
                <h5 className="card-title"><b>{item.name}</b></h5>
                <hr />
                <p className="card-text"><b>Status:</b> {item.status}</p>
                <p className="card-text"><b>Gender:</b> {item.gender}</p>
                <p className="card-text"><b>Species:</b> {item.species}</p>
                <p className="card-text"><b>Location:</b> {item.location.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CharacterList;
