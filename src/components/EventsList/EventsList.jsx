import { Event } from "../Event/Event.jsx";
import { List } from "./EventsList.js";

export const EventsList = ({ events, icons }) => {
  return (
    <List>
      {events.map((event) => (
        <Event
          key={event.name}
          icons={icons}
          name={event.name}
          location={event.location}
          speaker={event.speaker}
          start={event.time.start}
          end={event.time.end}
        />
      ))}
    </List>
  );
};
