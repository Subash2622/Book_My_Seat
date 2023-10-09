let seats = document.querySelector(".all-seats");
let seatType = document.querySelectorAll('input[name="seat-type"]');
let quantitySelector = document.getElementById("quantity");

let selectedSeatType = "standard";

function generateSeats() {
  seats.innerHTML = "";

  let totalSeats = selectedSeatType === "standard" ? 59 : 20;
  let ticketPrice = selectedSeatType === "standard" ? 200 : 300;

  for (let i = 0; i < totalSeats; i++) {
    let booked = "";
    seats.insertAdjacentHTML(
      "beforeend",
      '<input type="checkbox" name="tickets" id="s' +
        (i + 2) +
        '" /><label for="s' +
        (i + 2) +
        '" class="seat ' +
        booked +
        '"></label>'
    );
  }

  document.querySelector(".amount").innerHTML = "0";
  document.querySelector(".count").innerHTML = "0";
  seats.querySelectorAll("input").forEach((ticket) => {
    ticket.addEventListener("change", () => {
      let amount = document.querySelector(".amount").innerHTML;
      let count = document.querySelector(".count").innerHTML;
      amount = Number(amount);
      count = Number(count);

      if (ticket.checked) {
        if (count < parseInt(quantitySelector.value)) {
          count += 1;
          amount += ticketPrice;
        } else {
          ticket.checked = false;
        }
      } else {
        count -= 1;
        amount -= ticketPrice;
      }
      document.querySelector(".amount").innerHTML = amount;
      document.querySelector(".count").innerHTML = count;
    });
  });
}

function markSeatsAsUnavailable() {
  document
    .querySelectorAll(".all-seats input:checked + label")
    .forEach((seat) => {
      seat.classList.remove("selected");
      seat.classList.add("booked");
      seat.previousElementSibling.disabled = true;
      seat.previousElementSibling.checked = false;
    });
}

seatType.forEach((radio) => {
  radio.addEventListener("change", (e) => {
    selectedSeatType = e.target.id;
    generateSeats();
  });
});

generateSeats();

quantitySelector.addEventListener("change", () => {
  let selectedQuantity = parseInt(quantitySelector.value);
  let selectedSeats = seats.querySelectorAll("input:checked").length;

  if (selectedSeats > selectedQuantity) {
    seats.querySelectorAll("input:checked").forEach((ticket, index) => {
      if (index >= selectedQuantity) {
        ticket.checked = false;
      }
    });
  }

  markSeatsAsUnavailable();
});

document.querySelector("#proceedButton").addEventListener("click", () => {
  markSeatsAsUnavailable();

  document.querySelector('input[name="seat-type"]:checked').checked = false;
  document.querySelector("#quantity").value = "1";

  document.querySelector(".amount").textContent = "0";
  document.querySelector(".count").textContent = "0";

  document.getElementById("confirmationModal").style.display = "block";
});

document.getElementById("closeModal").addEventListener("click", () => {
  document.getElementById("confirmationModal").style.display = "none";
});
