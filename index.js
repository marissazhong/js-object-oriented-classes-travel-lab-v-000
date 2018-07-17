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
    return year-this.startDate().getFullYear();
  };

}

driver = new Driver("Alfie", "Aug 9, 1995");
console.log(driver.startDate());
