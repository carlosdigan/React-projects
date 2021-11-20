export default function getWeekDayIndex(unix_time) {
    const Day = new Date(unix_time * 1000)
    const WeekDayIndex = Day.getDay();
    return WeekDayIndex;
}