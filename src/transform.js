const grouping = item => {
  if (item.age <= 20) {
    return "20 and younger"
  }
  else if (item.age <= 30) {
    return "21-30"
  }
  else if (item.age <= 40) {
    return "31-40"
  }
  else if (item.age <= 50) {
    return "41-50"
  }
  else return "51 and older"

}

function groupAdultsByAgeRange(input) {
  if (input[0] === undefined) {
    return {};
  }

  return input
    .filter((person) => person.age >= 18)
    .reduce(function (acc, person) {
      const group = grouping(person)
      if (acc[group] === undefined) {
        acc[group] = []
      }
      acc[group].push(person)
      return acc
    }, {});


}


module.exports = { groupAdultsByAgeRange }