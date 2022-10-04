import React from "react";

import { FaImage } from "react-icons/fa";

import "./Styles/Create.css";

function Create() {
  const navigateToEvent = () => {
    window.location.href = "/event";
  };

  return (
    <div className="container-fluid">
      <div className="">
        <div className="create-panel">
          <div className="create-header">Create New Event</div>
          <div className="create-subheader">
            Enter the details of your event below
          </div>
        </div>
        <div className="image-upload">
          <FaImage size={100} color={"#8456EC"} />

          <div className="image-upload-text create-subheader">
            Add event image
          </div>
        </div>
        <div className="event-detail-form">
          <input type="text" placeholder="Envet Name" name="eventName"></input>
          <input type="text" placeholder="Hosted By" name="hostedBy"></input>
          <input type="text" placeholder="Location" name="location"></input>

          <input type="date" placeholder="Date" name="date"></input>
          <input type="time" placeholder="Time" name="time"></input>
          <input
            type="text"
            placeholder="Description"
            name="description"
          ></input>
        </div>
      </div>

      <div className="cta" onClick={navigateToEvent}>
        👍🏻 Next
      </div>
    </div>
  );
}

export default Create;
