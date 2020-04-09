const mongoose = require("mongoose");


mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/reactrecipes"
);

const walks = [
  {
    name: "Glyder fach",
    difficulty: "Medium",
    time: 8,
    location: "Snowdonia"
  },
  {
    name: "Snowdon",
    difficulty: "Medium",
    time: 6,
    location: "Snowdonia"
  },
  {
    name: "Tryfan",
    difficulty: "Medium",
    time: 8,
    location: "Snowdonia"
  },
  {
    name: "Ben Nevis",
    difficulty: "Hard",
    time: 10,
    location: "Scotland"
  },
  {
    name: "Black cullins",
    difficulty: "Hard",
    time: 10,
    location: "Scotland"
  },
  {
    name: "Glen Nevis",
    difficulty: "Easy",
    time: 4,
    location: "Scotland"
  },
  {
    name: "Scafell Pike",
    difficulty: "Hard",
    time: 6,
    location: "Lake District"
  },
  {
    name: "Helvellyn",
    difficulty: "Medium",
    time: 6,
    location: "Lake District"
  },
  {
    name: "Pen Y Fan",
    difficulty: "Medium",
    time: 6,
    location: "Snowdonia"
  },
  {
    name: "Skiddaw",
    difficulty: "Medium",
    time: 6,
    location: "Lake District"
  },
  {
    name: "Crib Goch",
    difficulty: "Hard",
    time: 8,
    location: "Snowdonia"
  },
  {
    name: "Dovedale",
    difficulty: "Easy",
    time: 4,
    location: "Peak District"
  },
  {
    name: "Edale",
    difficulty: "Easy",
    time: 6,
    location: "Peak District"
  },
  {
    name: "Shakerley Mere",
    difficulty: "Easy",
    time: 0.5,
    location: "Cheshire"
  },
  {
    name: "Congleton Cloud",
    difficulty: "Easy",
    time: 1,
    location: "Cheshire"
  },
  {
    name: "Brereton Heath",
    difficulty: "Easy",
    time: 1,
    location: "Cheshire"
  },
  {
    name: "Aber Falls",
    difficulty: "Easy",
    time: 2,
    location: "Snowdonia"
  },
  {
    name: "Llyn Ogwen",
    difficulty: "Easy",
    time: 2,
    location: "Snowdonia"
  },
  {
    name: "Beeston Castle",
    difficulty: "Easy",
    time: 2,
    location: "Cheshire"
  }
];