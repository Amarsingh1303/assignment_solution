console.log("this is assignment");
function CountPair() {
  var input = prompt("Enter your array here", "Enter Here");
  let i = 0;
  let pair = 0;
  const arr = input.split(" ");
  arr.sort();
  console.log(arr);
  console.log(arr.length);
  while (i < arr.length) {
    if (arr[i] === arr[i + 1]) {
      pair++;
      i = i + 2;
    } else {
      i++;
    }
  }
  document.getElementById(
    "solution"
  ).innerHTML = `the number of pair of socks are ${pair}`;
  console.log("the number of pair of socks are ", pair);
}
