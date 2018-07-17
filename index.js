class Driver {
  constructor(name, date) {
    this.name = name;
    this.date = date;
  }
  startDate() {
    const date = new Date(this.date);
    return date;
  };
  yearsExperienceFromBeginningOf(year) {
    return year-startDate().getFullYear();
  };

}
