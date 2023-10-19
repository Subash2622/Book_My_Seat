document.addEventListener("DOMContentLoaded", function () {
  const ticketTypeSelect = document.getElementById("tickettype");
  const ticketQuantitySelect = document.getElementById("qty");
  const container = document.querySelector(".container");
  const proceedBtn = document.getElementById("proceedBtn");

  const layout = [
    [
      { id: "A1", isBooked: false, type: "Premium" },
      { id: "A2", isBooked: false, type: "Premium" },
      { id: "A3", isBooked: false, type: "Premium" },
      { id: "A4", isBooked: false, type: "Premium" },
      { id: "A5", isBooked: false, type: "Premium" },
      { id: "A6", isBooked: false, type: "Premium" },
      { id: "A7", isBooked: false, type: "Premium" },
      { id: "A8", isBooked: false, type: "Premium" },
      { id: "A9", isBooked: false, type: "Premium" },
      { id: "A10", isBooked: false, type: "Premium" },
      { id: "A11", isBooked: false, type: "Premium" },
      { id: "A12", isBooked: false, type: "Premium" },
      { id: "A13", isBooked: false, type: "Premium" },
      { id: "A14", isBooked: false, type: "Premium" },
      { id: "A15", isBooked: false, type: "Premium" },
      { id: "A16", isBooked: false, type: "Premium" },
      { id: "A17", isBooked: false, type: "Premium" },
      { id: "A18", isBooked: false, type: "Premium" },
    ],
    [
      { id: "B1", isBooked: false, type: "Premium" },
      { id: "B2", isBooked: false, type: "Premium" },
      { id: "B3", isBooked: false, type: "Premium" },
      { id: "B4", isBooked: false, type: "Premium" },
      { id: "B5", isBooked: false, type: "Premium" },
      { id: "B6", isBooked: false, type: "Premium" },
      { id: "B7", isBooked: false, type: "Premium" },
      { id: "B8", isBooked: false, type: "Premium" },
      { id: "B9", isBooked: false, type: "Premium" },
      { id: "B10", isBooked: false, type: "Premium" },
      { id: "B11", isBooked: false, type: "Premium" },
      { id: "B12", isBooked: false, type: "Premium" },
      { id: "B13", isBooked: false, type: "Premium" },
      { id: "B14", isBooked: false, type: "Premium" },
      { id: "B15", isBooked: false, type: "Premium" },
      { id: "B16", isBooked: false, type: "Premium" },
      { id: "B17", isBooked: false, type: "Premium" },
      { id: "B18", isBooked: false, type: "Premium" },
    ],
    [
      { id: "C1", isBooked: false, type: "Standard" },
      { id: "C2", isBooked: false, type: "Standard" },
      { id: "C3", isBooked: false, type: "Standard" },
      { id: "C4", isBooked: false, type: "Standard" },
      { id: "C5", isBooked: false, type: "Standard" },
      { id: "C6", isBooked: false, type: "Standard" },
      { id: "C7", isBooked: false, type: "Standard" },
      { id: "C8", isBooked: false, type: "Standard" },
      { id: "C9", isBooked: false, type: "Standard" },
      { id: "C10", isBooked: false, type: "Standard" },
      { id: "C11", isBooked: false, type: "Standard" },
      { id: "C12", isBooked: false, type: "Standard" },
      { id: "C13", isBooked: false, type: "Standard" },
      { id: "C14", isBooked: false, type: "Standard" },
      { id: "C15", isBooked: false, type: "Standard" },
      { id: "C16", isBooked: false, type: "Standard" },
      { id: "C17", isBooked: false, type: "Standard" },
      { id: "C18", isBooked: false, type: "Standard" },
    ],
    [
      { id: "D1", isBooked: false, type: "Standard" },
      { id: "D2", isBooked: false, type: "Standard" },
      { id: "D3", isBooked: false, type: "Standard" },
      { id: "D4", isBooked: false, type: "Standard" },
      { id: "D5", isBooked: false, type: "Standard" },
      { id: "D6", isBooked: false, type: "Standard" },
      { id: "D7", isBooked: false, type: "Standard" },
      { id: "D8", isBooked: false, type: "Standard" },
      { id: "D9", isBooked: false, type: "Standard" },
      { id: "D10", isBooked: false, type: "Standard" },
      { id: "D11", isBooked: false, type: "Standard" },
      { id: "D12", isBooked: false, type: "Standard" },
      { id: "D13", isBooked: false, type: "Standard" },
      { id: "D14", isBooked: false, type: "Standard" },
      { id: "D15", isBooked: false, type: "Standard" },
      { id: "D16", isBooked: false, type: "Standard" },
      { id: "D17", isBooked: false, type: "Standard" },
      { id: "D18", isBooked: false, type: "Standard" },
    ],
    [
      { id: "E1", isBooked: false, type: "Standard" },
      { id: "E2", isBooked: false, type: "Standard" },
      { id: "E3", isBooked: false, type: "Standard" },
      { id: "E4", isBooked: false, type: "Standard" },
      { id: "E5", isBooked: false, type: "Standard" },
      { id: "E6", isBooked: false, type: "Standard" },
      { id: "E7", isBooked: false, type: "Standard" },
      { id: "E8", isBooked: false, type: "Standard" },
      { id: "E9", isBooked: false, type: "Standard" },
      { id: "E10", isBooked: false, type: "Standard" },
      { id: "E11", isBooked: false, type: "Standard" },
      { id: "E12", isBooked: false, type: "Standard" },
      { id: "E13", isBooked: false, type: "Standard" },
      { id: "E14", isBooked: false, type: "Standard" },
      { id: "E15", isBooked: false, type: "Standard" },
      { id: "E16", isBooked: false, type: "Standard" },
      { id: "E17", isBooked: false, type: "Standard" },
      { id: "E18", isBooked: false, type: "Standard" },
    ],
    [
      { id: "F1", isBooked: false, type: "Standard" },
      { id: "F2", isBooked: false, type: "Standard" },
      { id: "F3", isBooked: false, type: "Standard" },
      { id: "F4", isBooked: false, type: "Standard" },
      { id: "F5", isBooked: false, type: "Standard" },
      { id: "F6", isBooked: false, type: "Standard" },
      { id: "F7", isBooked: false, type: "Standard" },
      { id: "F8", isBooked: false, type: "Standard" },
      { id: "F9", isBooked: false, type: "Standard" },
      { id: "F10", isBooked: false, type: "Standard" },
      { id: "F11", isBooked: false, type: "Standard" },
      { id: "F12", isBooked: false, type: "Standard" },
      { id: "F13", isBooked: false, type: "Standard" },
      { id: "F14", isBooked: false, type: "Standard" },
      { id: "F15", isBooked: false, type: "Standard" },
      { id: "F16", isBooked: false, type: "Standard" },
      { id: "F17", isBooked: false, type: "Standard" },
      { id: "F18", isBooked: false, type: "Standard" },
    ],
    [
      { id: "G1", isBooked: false, type: "Standard" },
      { id: "G2", isBooked: false, type: "Standard" },
      { id: "G3", isBooked: false, type: "Standard" },
      { id: "G4", isBooked: false, type: "Standard" },
      { id: "G5", isBooked: false, type: "Standard" },
      { id: "G6", isBooked: false, type: "Standard" },
      { id: "G7", isBooked: false, type: "Standard" },
      { id: "G8", isBooked: false, type: "Standard" },
      { id: "G9", isBooked: false, type: "Standard" },
      { id: "G10", isBooked: false, type: "Standard" },
      { id: "G11", isBooked: false, type: "Standard" },
      { id: "G12", isBooked: false, type: "Standard" },
      { id: "G13", isBooked: false, type: "Standard" },
      { id: "G14", isBooked: false, type: "Standard" },
      { id: "G15", isBooked: false, type: "Standard" },
      { id: "G16", isBooked: false, type: "Standard" },
      { id: "G17", isBooked: false, type: "Standard" },
      { id: "G18", isBooked: false, type: "Standard" },
    ],
    [
      { id: "H1", isBooked: false, type: "Standard" },
      { id: "H2", isBooked: false, type: "Standard" },
      { id: "H3", isBooked: false, type: "Standard" },
      { id: "H4", isBooked: false, type: "Standard" },
      { id: "H5", isBooked: false, type: "Standard" },
      { id: "H6", isBooked: false, type: "Standard" },
      { id: "H7", isBooked: false, type: "Standard" },
      { id: "H8", isBooked: false, type: "Standard" },
      { id: "H9", isBooked: false, type: "Standard" },
      { id: "H10", isBooked: false, type: "Standard" },
      { id: "H11", isBooked: false, type: "Standard" },
      { id: "H12", isBooked: false, type: "Standard" },
      { id: "H13", isBooked: false, type: "Standard" },
      { id: "H14", isBooked: false, type: "Standard" },
      { id: "H15", isBooked: false, type: "Standard" },
      { id: "H16", isBooked: false, type: "Standard" },
      { id: "H17", isBooked: false, type: "Standard" },
      { id: "H18", isBooked: false, type: "Standard" },
    ],
    [
      { id: "I1", isBooked: false, type: "Standard" },
      { id: "I2", isBooked: false, type: "Standard" },
      { id: "I3", isBooked: false, type: "Standard" },
      { id: "I4", isBooked: false, type: "Standard" },
      { id: "I5", isBooked: false, type: "Standard" },
      { id: "I6", isBooked: false, type: "Standard" },
      { id: "I7", isBooked: false, type: "Standard" },
      { id: "I8", isBooked: false, type: "Standard" },
      { id: "I9", isBooked: false, type: "Standard" },
      { id: "I10", isBooked: false, type: "Standard" },
      { id: "I11", isBooked: false, type: "Standard" },
      { id: "I12", isBooked: false, type: "Standard" },
      { id: "I13", isBooked: false, type: "Standard" },
      { id: "I14", isBooked: false, type: "Standard" },
      { id: "I15", isBooked: false, type: "Standard" },
      { id: "I16", isBooked: false, type: "Standard" },
      { id: "I17", isBooked: false, type: "Standard" },
      { id: "I18", isBooked: false, type: "Standard" },
    ],
    [
      { id: "J1", isBooked: false, type: "Standard" },
      { id: "J2", isBooked: false, type: "Standard" },
      { id: "J3", isBooked: false, type: "Standard" },
      { id: "J4", isBooked: false, type: "Standard" },
      { id: "J5", isBooked: false, type: "Standard" },
      { id: "J6", isBooked: false, type: "Standard" },
      { id: "J7", isBooked: false, type: "Standard" },
      { id: "J8", isBooked: false, type: "Standard" },
      { id: "J9", isBooked: false, type: "Standard" },
      { id: "J10", isBooked: false, type: "Standard" },
      { id: "J11", isBooked: false, type: "Standard" },
      { id: "J12", isBooked: false, type: "Standard" },
      { id: "J13", isBooked: false, type: "Standard" },
      { id: "J14", isBooked: false, type: "Standard" },
      { id: "J15", isBooked: false, type: "Standard" },
      { id: "J16", isBooked: false, type: "Standard" },
      { id: "J17", isBooked: false, type: "Standard" },
      { id: "J18", isBooked: false, type: "Standard" },
    ],
    [
      { id: "K1", isBooked: false, type: "Standard" },
      { id: "K2", isBooked: false, type: "Standard" },
      { id: "K3", isBooked: false, type: "Standard" },
      { id: "K4", isBooked: false, type: "Standard" },
      { id: "K5", isBooked: false, type: "Standard" },
      { id: "K6", isBooked: false, type: "Standard" },
      { id: "K7", isBooked: false, type: "Standard" },
      { id: "K8", isBooked: false, type: "Standard" },
      { id: "K9", isBooked: false, type: "Standard" },
      { id: "K10", isBooked: false, type: "Standard" },
      { id: "K11", isBooked: false, type: "Standard" },
      { id: "K12", isBooked: false, type: "Standard" },
      { id: "K13", isBooked: false, type: "Standard" },
      { id: "K14", isBooked: false, type: "Standard" },
      { id: "K15", isBooked: false, type: "Standard" },
      { id: "K16", isBooked: false, type: "Standard" },
      { id: "K17", isBooked: false, type: "Standard" },
      { id: "K18", isBooked: false, type: "Standard" },
    ],
    [
      { id: "L1", isBooked: false, type: "Standard" },
      { id: "L2", isBooked: false, type: "Standard" },
      { id: "L3", isBooked: false, type: "Standard" },
      { id: "L4", isBooked: false, type: "Standard" },
      { id: "L5", isBooked: false, type: "Standard" },
      { id: "L6", isBooked: false, type: "Standard" },
      { id: "L7", isBooked: false, type: "Standard" },
      { id: "L8", isBooked: false, type: "Standard" },
      { id: "L9", isBooked: false, type: "Standard" },
      { id: "L10", isBooked: false, type: "Standard" },
      { id: "L11", isBooked: false, type: "Standard" },
      { id: "L12", isBooked: false, type: "Standard" },
      { id: "L13", isBooked: false, type: "Standard" },
      { id: "L14", isBooked: false, type: "Standard" },
      { id: "L15", isBooked: false, type: "Standard" },
      { id: "L16", isBooked: false, type: "Standard" },
      { id: "L17", isBooked: false, type: "Standard" },
      { id: "L18", isBooked: false, type: "Standard" },
    ],
  ];

  let selectedTicketType = "Standard";
  let selectedQuantity = 1; // Default ticket quantity

  function updateSelectedTicketType() {
    selectedTicketType = ticketTypeSelect.value;
  }

  function updateSelectedQuantity() {
    selectedQuantity = parseInt(ticketQuantitySelect.value);
  }

  function proceedHandler() {
    if (selectedTicketType === "") {
      alert("Please choose a ticket type (Standard or Premium).");
      return;
    }

    if (selectedQuantity <= 0) {
      alert("Please select a valid ticket quantity.");
      return;
    }

    const selectedSeats = seats.flat().filter((seat) => seat.isSelected);

    if (selectedSeats.length !== selectedQuantity) {
      alert(`Please select exactly ${selectedQuantity} seats.`);
      return;
    }

    // Here you can implement the logic to proceed with the booking and change the seat colors.

    // For now, let's just display an alert with the selected seats and quantity.
    const selectedSeatIds = selectedSeats.map((seat) => seat.id).join(", ");
    alert(
      `Selected Ticket Type: ${selectedTicketType}\nSelected Seats: ${selectedSeatIds}\nTicket Quantity: ${selectedQuantity}`
    );
  }

  // Add event listeners
  ticketTypeSelect.addEventListener("change", updateSelectedTicketType);
  ticketQuantitySelect.addEventListener("change", updateSelectedQuantity);
  proceedBtn.addEventListener("click", proceedHandler);

  // Initial rendering
  seats = layout.map((row, rowIndex) =>
    row.map((seat, seatIndex) => ({
      id: `${String.fromCharCode(65 + rowIndex)}${seatIndex + 1}`,
      isBooked: false,
      isSelected: false,
      type: seat.type,
    }))
  );
  renderSeats();

  function bookHandler(seat) {
    if (seat.isBooked) {
      // Seat is already booked, cannot select it
      return;
    }

    if (selectedTicketType === "Premium" && seat.type !== "Premium") {
      alert("You can only select Premium seats with a Premium ticket.");
      return;
    }

    if (selectedTicketType === "Standard" && seat.type !== "Standard") {
      alert("You can only select Standard seats with a Standard ticket.");
      return;
    }

    const selectedSeats = seats.flat().filter((s) => s.isSelected);
    if (selectedSeats.length === selectedQuantity && !seat.isSelected) {
      alert(`You can only select ${selectedQuantity} seats.`);
      return;
    }

    seat.isSelected = !seat.isSelected;

    // Update the UI to reflect the selection
    renderSeats();
  }

  function renderSeats() {
    container.innerHTML = "";
    seats.forEach((row, rowIndex) => {
      const rowDiv = document.createElement("div");
      rowDiv.classList.add("row");
      container.appendChild(rowDiv);

      const rowLabel = document.createElement("div");
      rowLabel.classList.add("row-label");
      rowLabel.textContent = String.fromCharCode(65 + rowIndex);
      rowDiv.appendChild(rowLabel);

      row.forEach((seat) => {
        const seatDiv = document.createElement("div");
        seatDiv.classList.add("seat");
        seatDiv.classList.add(
          seat.isBooked
            ? "booked"
            : seat.isSelected
            ? "selected"
            : seat.type === "Premium"
            ? "premiumcolor"
            : "available"
        );

        seatDiv.style.width = "35px";
        seatDiv.style.height = "35px";

        if (seat.isZero === 0) {
          seatDiv.style.marginRight = "3.5%";
          seatDiv.innerHTML = "";
        } else {
          seatDiv.style.backgroundImage = 'url("images/Black_Chair.png")';
          seatDiv.style.backgroundSize = "contain";
        }

        seatDiv.addEventListener("click", () => {
          bookHandler(seat);
        });

        rowDiv.appendChild(seatDiv);
      });
    });
  }
});
