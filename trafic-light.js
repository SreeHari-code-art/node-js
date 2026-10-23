function trafficLight(color) {
  let light = color.toLowerCase();

  if (light === "red") {
    return "stop";
  } else if (light === "yellow") {
    return "preparing to stop";
  } else if (light === "green") {
    return "gooooooooooooooo.......";
  } else {
    return "invalid";
  }
}
console.log(trafficLight("RED"));
