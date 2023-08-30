<?php
// Use the DateTime class
// use DateTime;
// use DateInterval;

// Get the current date
$today = new DateTime('now', new DateTimeZone('America/Toronto'));

// Format the date as YYYY-MM-DD
$dt1 = $today->format("Y-m-d");

// Add one day to get tomorrow's date
$tomorrow = $today->add(new DateInterval("P1D"));

// Format the date as YYYY-MM-DD
$dt2 = $tomorrow->format("Y-m-d");

// Create an array of filenames
$files = array(
  "mercury.txt",
  "venus.txt",
  "earth.txt",
  "mars.txt",
  "jupiter.txt",
  "saturn.txt",
  "uranus.txt",
  "neptune.txt"
);

foreach ($files as $file) { // Loop through the files
    // Read the file into an array of lines
    $lines = file($file);

    // Rewrite the lines with the new dates
    $lines[6] = "START_TIME="."'".$dt1."'\n";
    $lines[7] = "STOP_TIME="."'".$dt2."'\n";

    // Write the lines back to the file
    file_put_contents($file, $lines);
}
?>