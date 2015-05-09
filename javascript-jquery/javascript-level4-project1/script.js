var main = function() {
  var cities = [
  "Atlanta",
  "Boston",
  "Chicago",
  "Denver",
  "Eerie",
  "Florence",
  "Glassboro",
  "Honolulu",
  "Indiana",
  "Jacksonville",
  "Kansas City",
  "Los Angeles",
  "Memphis",
  "New York",
  "Orlando",
  "Philadelphia",
  "Quebec",
  "Raliegh",
  "San Francisco",
  "Toronto",
  "Uruguay",
  "Vancover",
  "Washington D.C.",
  "York",
  "Zaire"
];

$("#cities-search").autocomplete({
  source: cities
})

}

$(document).ready(main);