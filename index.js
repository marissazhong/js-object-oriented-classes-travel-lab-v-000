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
  blocksTravelled() {
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
    console.log(this.beginningLocation,this.endingLocation);
  }
}

driver = new Driver("Alfie", "Aug 9, 1995");
console.log(driver.startDate());
//console.log(driver.yearsExperienceFromBeginningOf(2017));
