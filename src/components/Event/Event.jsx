import { Item, Title, List, ListItem, Desc } from "./Event.js";

export const Event = ({ icons, name, location, speaker, start, end }) => {
  return (
    <Item>
      <Title>{name}</Title>
      <List>
        <ListItem>
          {icons[3]}
          <Desc>{location}</Desc>
        </ListItem>
        <ListItem>
          {icons[1]}
          <Desc>{speaker}</Desc>
        </ListItem>
        <ListItem>
          {icons[2]}
          <Desc>{formaterForStart(start)}</Desc>
        </ListItem>
        <ListItem>
          {icons[0]}
          <Desc>{formaterForDif(start, end)}</Desc>
        </ListItem>
      </List>
    </Item>
  );
};

const formaterForStart = (dateF) => {
  const date = new Date(dateF);
  const years = date.getFullYear();
  const months = date.toLocaleString("en-US", { month: "long" });
  const days = String(date.getDay()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  return `${days} ${months} ${years}, ${hours}:${minutes}`;
};

const formaterForDif = (start, end) => {
  const startDate = new Date(start);
  const startYears = startDate.getFullYear();
  const startMonths = startDate.getMonth();
  const startDays = Number(String(startDate.getDay()).padStart(2, "0"));
  const startHours = Number(String(startDate.getHours()).padStart(2, "0")) * 60;
  const startMinutes = Number(String(startDate.getMinutes()).padStart(2, "0"));

  const endDate = new Date(end);
  const endYears = endDate.getFullYear();
  const endMonths = endDate.getMonth();
  const endDays = Number(String(endDate.getDay()).padStart(2, "0"));
  const endHours = Number(String(endDate.getHours()).padStart(2, "0")) * 60;
  const endMinutes = Number(String(endDate.getMinutes()).padStart(2, "0"));

  const yearsDif = endYears - startYears;
  const monthsDif = endMonths - startMonths;
  const daysDif = endDays - startDays;
  const hoursDif = parseInt(
    (endHours + endMinutes - (startHours + startMinutes)) / 60
  );
  const minutesDif = (endHours + endMinutes - (startHours + startMinutes)) % 60;

  let yearsCor = "";
  let monthsCor = "";
  let daysCor = "";
  let hoursCor = "";
  let minutesCor = "";

  if (yearsDif) {
    yearsCor = `${yearsDif} years`;
  }
  if (monthsDif) {
    monthsCor = `${monthsDif} months`;
  }
  if (daysDif) {
    daysCor = `${daysDif} days`;
  }
  if (hoursDif) {
    hoursCor = `${hoursDif} hours`;
  }
  if (minutesDif) {
    minutesCor = `${minutesDif} minutes`;
  }

  return `${yearsCor} ${monthsCor} ${daysCor} ${hoursCor} ${minutesCor}`;
};
