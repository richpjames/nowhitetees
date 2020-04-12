const formatTimeFromSeconds = (seconds: number) => {
  let hrs = ~~(seconds / 3600);
  let mins = ~~((seconds % 3600) / 60);
  let secs = ~~seconds % 60;

  let time = "";
  if (hrs > 0) {
    time += `${hrs}:${mins < 10 ? "0" : ""}`;
  }
  time += `${mins === 0 ? "00" : mins < 10 ? `0${mins}` : `${mins}`}:${
    secs < 10 ? "0" : ""
  }`;
  time += `${secs}`;
  return time;
};
export default formatTimeFromSeconds;
