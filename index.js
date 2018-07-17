class Driver {
  constructor(name, date) {
    this.name = name;
    this.startDate = new Date(date);
  }

  yearsExperienceFromBeginningOf(year) {
    return year-this.startDate.getFullYear();
  };
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }
}

driver = new Driver("Alfie", "Aug 9, 1995");
console.log(driver.startDate());
//console.log(driver.yearsExperienceFromBeginningOf(2017));
