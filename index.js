class Driver {
  constructor(name, date) {
    this.name = name;
    this.date = date;
  }
  startDate() {
    this.startDate = new Date(this.date);
  };
  yearsExperienceFromBeginningOf(year) {
    return year-this.startDate().getFullYear();
  };

}

driver = new Driver("Alfie", "Aug 9, 1995");
console.log(driver.startDate());
console.log(driver.yearsExperienceFromBeginningOf(2017));
