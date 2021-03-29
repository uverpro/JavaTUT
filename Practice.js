function siren(message, volume) {
  if (volume === 10) {
      return;
  }

  console.log(message);
  siren(message, recursiveStep); // recursiveStep = ?
}

siren("WEE-OOO", 7); // should print "WEE-OOO", "WEE-OOO", "WEE-OOO"
