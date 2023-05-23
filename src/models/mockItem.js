import moment from "moment";

function calculateTimestamp() {
  const currentTime = moment();
  const minuteAgo = moment().subtract(1, "minute");

  if (currentTime.isBefore(minuteAgo)) {
    return currentTime.format("MMM Do LT");
  } else {
    const timeTillMinute = currentTime.startOf("minute").fromNow();
    return timeTillMinute;
  }
}

console.log(calculateTimestamp());

// Output: Either timeTillHour or the generic timestamp string

// Example usage with the "items" array
const items = [
  {
    id: 1,
    note: "Make your Note",
    xpos: 200,
    ypos: 300,
    timestamp: calculateTimestamp(), // Add the timestamp property to each item
  },
  {
    id: 2,
    note: "Get the Milk 🥛",
    xpos: 300,
    ypos: 200,
    timestamp: calculateTimestamp(), // Add the timestamp property to each item
  },
];

export default items;
