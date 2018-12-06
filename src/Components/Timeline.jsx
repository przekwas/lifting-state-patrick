import React from "react";

const Timeline = props => {
  return (
    <div className="row">
      {props.chirps.map((chirp, index) => {
        return (
          <div key={index} className="card w-25 text-center m-2 rounded">
            <div className="card-body">
              <h4 className="card-title">{chirp.userName}</h4>
              <p className="card-text">{chirp.chirp}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Timeline;
