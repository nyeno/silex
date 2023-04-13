// Get the current date and time
const today = new Date();

// Set the target date to April 14th at midnight
const targetDate = new Date("2023-04-14T00:00:00");

// Calculate the time difference in seconds
const timeDiffInSeconds = Math.floor((targetDate - today) / 1000);

// Calculate the total number of seconds between the two dates
const totalSecond = Math.floor(
  (targetDate - today.setHours(0, 0, 0, 0)) / 1000
);

// Calculate the percentage
export const percentage = Math.floor(
  ((totalSecond - timeDiffInSeconds) / totalSecond) * 100
);
