class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = startDate;
  }
  startDate() {
    const date = new Date('December 17, 1995 03:24:00');
    return date;
  };
  yearsExperienceFromBeginningOf(year) {
    return year-startDate().getFullYear();
  };

}
