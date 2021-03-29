function justDance(songs) {
  if (!songs.length) {
    return;
  } else {
    justDance(songs);
  }
}

justDance(["I Wanna Dance With Somebody (Who Loves Me)"]);
