export default class WorkWithWeek {
  constructor() {
    this.today = null;
    this.weekDays = [];
    this.interviewTimeArr = [];
    this.deleteButton = [];
    this.goToday();
  }

  goToday() {
    const dayNow = this.#setToday();
    this.#refreshData(dayNow);
    return this;
  }

  listForward() {
    this.#list(1);
    return this;
  }

  listBack() {
    this.#list(-1);
    return this;
  }

  addInterview(def = "0000-00-00 00:00:00") {
    const input = prompt(
      "Enter event time: \n YYYY-MM-DD HH:mm:ss",
      def
    )?.trim();

    if (!input || !/[1-2]\d{3}-[0-1]\d-[0-3]\d [0-2]\d/.test(input))
      return alert("Invalid data entered. Event not added.");

    const date = new Date(`${input.split(" ")[0]}`);
    const time = +input.split(" ")[1].split(":")[0];

    if (date === "Invalid Date")
      return alert("Invalid value data entered. Event not added.");
    if (time < 0 || time > 23)
      return alert("Invalid value time entered. Event not added.");

    this.#setInterview(date, time);
  }

  addInterviewByClick(wDay, time) {
    const date = new Date(this.weekDays[wDay].date);
    const str = `${date.getFullYear()}-${
      date.getMonth() + 1 < 10
        ? `0${date.getMonth() + 1}`
        : `${date.getMonth() + 1}`
    }-${date.getDate() < 10 ? `0${date.getDate()}` : `${date.getDate()}`} ${
      time < 10 ? `0${time}` : time
    }:00:00`;

    return this.addInterview(str);
  }

  deleteEvent(wDay, time) {
    const dayForDeleteEvent = this.weekDays[wDay].date;
    const newArr = this.#getInterview(dayForDeleteEvent).filter(
      (item) => +item !== +time
    );

    if (newArr.length) localStorage.setItem(dayForDeleteEvent, newArr.join());
    else localStorage.removeItem(dayForDeleteEvent);

    this.#refreshData();
  }

  #refreshData(dayNow = new Date(this.weekDays[0].date)) {
    this.weekDays = [];
    this.interviewTimeArr = [];

    const arr = Array(7).fill(0);
    for (let i = 0; i < 24; i++) {
      this.interviewTimeArr.push(arr.slice(0));
    }

    for (let i = 0; i < 7; i++) {
      const interviewTimeDB = this.#getInterview(dayNow);
      interviewTimeDB.forEach((time) => {
        this.interviewTimeArr[+time][i] = 1;
      });

      this.weekDays.push({
        day: dayNow.toString()[0],
        date: +dayNow,
        thisToday: +dayNow === this.today,
      });
      dayNow.setDate(dayNow.getDate() + 1);
    }
  }

  #getInterview(day) {
    return localStorage.getItem(+day)?.split(",") || [];
  }

  #setInterview(date, time) {
    date.setHours(0, 0, 0, 0);

    const interviewTimeArr = this.#getInterview(+date) || [];

    if (interviewTimeArr.includes(`${time}`))
      return alert(
        `An interview has already been scheduled for the selected time (${time}:00). Event not added.`
      );

    localStorage.setItem(+date, [...interviewTimeArr, time].join());
    this.#refreshData();
  }

  #list(corr) {
    this.#setToday();
    const dayNow = new Date(this.weekDays[0].date);
    dayNow.setDate(dayNow.getDate() + corr);
    this.#refreshData(dayNow);
  }

  #setToday() {
    const dayNow = new Date(Date.now());
    dayNow.setHours(0, 0, 0, 0);
    this.today = +dayNow;
    return dayNow;
  }
}
