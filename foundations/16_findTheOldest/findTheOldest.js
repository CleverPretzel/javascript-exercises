const findTheOldest = function(arrOfObj) {

  arrOfObj.sort((a, b) => {
    return ((b.yearOfDeath || new Date().getFullYear()) - b.yearOfBirth)
    - ((a.yearOfDeath || new Date().getFullYear()) - a.yearOfBirth);
  });

  return arrOfObj[0];
};

// Do not edit below this line
module.exports = findTheOldest;
