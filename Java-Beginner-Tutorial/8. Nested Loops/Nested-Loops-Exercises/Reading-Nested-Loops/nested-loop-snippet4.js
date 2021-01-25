// snippet 4
let locations = ["Beograd", "Bowling Green", "Harrisburg", "Hartford"];

for (let i = 0; i < locations.length; i++) {
  for (let j = i + 1; j < locations.length; j++) {
    console.log(locations[i], locations[j]);
  }
};

// PREDICTIONS:
/*
Beograd, Bowling Green
Beograd, Harrisburg
Beograd, Hartford
Bowling Green, Harrisburg
Bowling Green, Hartford
Harrisburg, Hartford
*/
