class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = startDate;
  }
  startDate() {return Date.now()};
  yearsExperienceFromBeginningOf(year) {
    return year-startDate().getFullYear();
  };

}
