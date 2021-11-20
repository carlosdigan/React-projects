export default function displayTime(d, timeZone) {
  const options = {hour: "2-digit", minute: "2-digit", hour12: false, timeZone}  
  return new Intl.DateTimeFormat("default", options).format(d);
}