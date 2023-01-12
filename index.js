// A function to find the longest common prefix string amongst an array of strings.

// const strs = ["flower", "flow", "flight"];
const strs = ["flotes", "fl", "flowerr"];
// const strs = ["dog", "racecar", "car"];

function findPrefix(inputArray) {
  let maxIteration = inputArray[0].length;
  let prefixCounter = 0;
  let longestPrefix = "";
  let prefixPicked = inputArray[0].charAt(prefixCounter);
  inputArray.forEach((element) => {
    if (maxIteration > element.length) {
      maxIteration = element.length;
    }
  });

  do {
    for (let i = 0; i < inputArray.length; i++) {
      if (prefixPicked != inputArray[i].charAt(prefixCounter)) {
        if (i == 0) {
          return "No prefix found";
        } else {
          return longestPrefix == "" ? "No common prefix found" : longestPrefix;
        }
      }
    }
    longestPrefix = longestPrefix.concat(prefixPicked);
    prefixCounter++;
    prefixPicked = inputArray[0].charAt(prefixCounter);
  } while (prefixCounter < maxIteration);
  return longestPrefix;
}

console.log(findPrefix(strs));
