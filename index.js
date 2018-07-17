class Driver {
  constructor(name, date) {
    this.name = name;
    this.date = date;
  }
  startDate() {
    const date = new Date("Aug 9, 1995");
    //console.log(this.date);
    return date;
  };
  yearsExperienceFromBeginningOf(year) {
    return year-startDate().getFullYear();
  };

}

driver = new Driver("Alfie", "Aug 9, 1995");
console.log(driver.startDate);
