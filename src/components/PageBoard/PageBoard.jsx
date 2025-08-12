import { EventsList } from "../EventsList/EventsList.jsx";
import { Sect, Title } from "./PageBoard.js";

export const PageBoard = ({ events, icons }) => {
  return (
    <Sect>
      <Title>24th Core Worlds Coalition Conference</Title>
      <EventsList events={events} icons={icons} />
    </Sect>
  );
};
