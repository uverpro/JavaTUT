function exercise(bottle) {
  console.log("Just a few more reps!");
  drinkWater(bottle);
}

function drinkWater(bottle) {
  if (bottle.water > 0) {
      exercise({ water: bottle.water - 1 });
  } else {
      console.log("Whew! Good workout.");
      return;
  }
}

exercise({ water: 5 });
