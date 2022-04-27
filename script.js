document.querySelector(".btn-submit").addEventListener("click", (event) => {
  event.preventDefault();
  const rating = [...document.querySelectorAll(".value")].filter(
    (r) => r.checked === true
  );

  if (rating.length === 1) {
    const a = rating.pop(0).value;

    document.querySelector(".selected-value").innerHTML = a;

    document.getElementById("card1").style.display = "none";
    document.getElementById("card2").style.display = "flex";
  }
});
