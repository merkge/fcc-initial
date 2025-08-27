const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

function updateRecords(records, id, prop, value) {
  const album = {};
  let unknown;
   
  if (value === "" ) {
    delete "prop";
    return records;
  }
  else if (prop != "tracks") {
    prop = value;
    return records;
    }
  else if (prop == "tracks") {
          if (!(hasOwnProperty("tracks")))        {
            const tracks = [];
            tracks.push(value);
            return records;
            }
          else {
            (tracks.push(value));
            }
          return records;
  }
}
    

console.log(updateRecords(updateRecords, 5439, "artist", "ABBA"));

console.log(updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me"));

console.log(updateRecords(recordCollection, 2548, "artist", ""));

console.log(updateRecords(recordCollection, 1245, "tracks", "Addicted to Love"));

console.log(updateRecords(recordCollection, 2468, "tracks", "Free"));

console.log(updateRecords(recordCollection, 2548, "tracks", ""));

console.log(updateRecords(recordCollection, 1245, "albumTitle", "Riptide"));
