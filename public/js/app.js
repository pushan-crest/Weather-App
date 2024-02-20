// client side js

console.log(`cliebnt side js is loaded`);

const searchbtn = document.querySelector(".btnsearch");
const t1 = document.querySelector("#message-1");

const fetchdata = function (address) {
  fetch(`https://weather-app-s2b4.onrender.com/weather?address=${address}`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      t1.innerHTML = data.forecast;
    });
};

searchbtn.addEventListener("click", (e) => {
  const address = document.getElementById("location").value;
  e.preventDefault();
  fetchdata(address);
});
