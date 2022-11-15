class DateStamp {
  constructor() {
    this.currentDate = new Date();
  }

  getDate() {
    const currentDayOfMonth = this.currentDate.getDate();
    const currentMonth = this.currentDate.getMonth(); // Be careful! January is 0, not 1
    const currentYear = this.currentDate.getFullYear();

    const dateString =
      currentDayOfMonth + '/' + (currentMonth + 1) + '/' + currentYear;
    // "27-11-2020"
    return dateString;
  }
}

module.exports = DateStamp;
