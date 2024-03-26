// Code your solution here
const driver=[{driver_name:"Felix"
,home_town:"Nairobi"}, {driver_name:"Hesbon",home_town:"Thika"}]
function findMatching(source, sought) {
    return source.filter(
      (possibleMatch) => possibleMatch.toLowerCase() === sought.toLowerCase()
    );
    } 
    function fuzzyMatch(source, testString) {
        return source.filter(
          (possibleMatch) =>
            possibleMatch.toLowerCase().indexOf(testString.toLowerCase()) === 0
        );
      }
      function matchName(source, soughtName) {
        return source.filter((record) => record.name === soughtName);
      }