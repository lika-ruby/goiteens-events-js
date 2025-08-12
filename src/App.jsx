import "./App.css";
import { PageBoard } from "./components/PageBoard/PageBoard.jsx";
import events from "./data/upcoming-events.json";
import { IoMdAlarm } from "react-icons/io";
import { FaPerson } from "react-icons/fa6";
import { FaCalendar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { GlobalStyle } from "./GlobalStyles.js";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <PageBoard
        events={events}
        icons={[<IoMdAlarm />, <FaPerson />, <FaCalendar />, <FaLocationDot />]}
      />
    </div>
  );
}

export default App;
