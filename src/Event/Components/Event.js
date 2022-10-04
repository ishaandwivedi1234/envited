import React, { useState } from "react";
import "../Styles/Event.css";
import EventTile from "./EventTile";

import { FaRegCalendarAlt } from "react-icons/fa";
import { GoLocation } from "react-icons/go";

function Event() {
  const [event, setEvent] = useState();

  return (
    <div className="container-fluid">
      <div className="event-poster"> </div>
      <div>
        <div className="event-name">{event.name}</div>
        <div className="event-host">{event.host}</div>
      </div>
      <div className="container">
        <EventTile icon={<FaRegCalendarAlt />} heading={""} subheading={""} />
      </div>
    </div>
  );
}

export default Event;
