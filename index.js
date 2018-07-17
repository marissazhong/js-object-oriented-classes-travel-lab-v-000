class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = startDate;
  }
  startDate() {
    date = new Date.now();
    return date;
  };
  yearsExperienceFromBeginningOf(year) {
    return year-startDate().getFullYear();
  };

}
