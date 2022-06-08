
function KmToMiles() {
  const kilometers = parseInt(document.getElementById("Km").value);

  /// conversion factor
  const factor = 0.621371

  // calculate miles
  const miles = kilometers * factor;
  document.getElementById("miles").value = miles;
  // console.log(`${kilometers} kilometers is equal to ${miles} miles.`);

}

function MilesTokm(){
  const Miles = parseInt(document.getElementById("miles").value);

  /// conversion factor
  const factor = 0.621371

  // calculate miles
  const kilometers = Miles / factor;
  document.getElementById("Km").value = kilometers;
  // console.log(`${kilometers} kilometers is equal to ${miles} miles.`);

}

