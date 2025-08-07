const appointments = [
  {
    name: "Dr. Sumit Raut",
    specialty: "MBBS, MD (General Physician)",
    experience: "8 Year Experience",
    rating: "4.1/5",
    reviews: "2,345",
    image: "../Public/sumit.png",
    status: "Payment Pending",
    callType: "Video Call - Confirmed",
    callIcon: "../Public/video.png",
    callColor: "text-primary",
    date: "01 April 25",
    time: "10:00 AM"
  },
  {
    name: "Dr. Kunal Patil",
    specialty: "MBBS, MD (Heart Specialist)",
    experience: "10 Year Experience",
    rating: "4.1/5",
    reviews: "2,345",
    image: "../Public/kunal.png",
    status: "Payment Pending",
    callType: "offline - Confirmed",
    callIcon: "../Public/office.png",
    callColor: "text-primary",
    date: "01 April 25",
    time: "11:00 AM"
  },
  {
    name: "Dr. Aditi Mone",
    specialty: "MBBS, MD (child Specialist)",
    experience: "6 Year Experience",
    rating: "4.1/5",
    reviews: "2,345",
    image: "../Public/aditi.png",
    status: "Paid",
    callType: "Audio Call - Pending",
    callIcon: "../Public/call.png",
    callColor: "text-primary",
    date: "01 April 25",
    time: "12:00 PM"
  },
  {
    name: "Dr. Sumit Raut",
    specialty: "MBBS, MD (General Physician)",
    experience: "8 Year Experience",
    rating: "4.1/5",
    reviews: "2,345",
    image: "../Public/sumit.png",
    status: "Payment Pending",
    callType: "offline - Confirmed",
    callIcon: "../Public/office.png",
    callColor: "text-primary",
    date: "01 April 25",
    time: "10:00 AM"
  }
];


function renderCards(data) {
  const container = document.getElementById("appointmentCards");

  data.forEach((appointment) => {
    const card = document.createElement("div");
    card.className = "col-12 col-md-12 col-lg-6";

    card.innerHTML = `
      <div class="card shadow-sm rounded-4 border-0 p-3 h-100">
        <div class="d-flex flex-column flex-md-row align-items-start gap-3">
          <img
            src="${appointment.image}"
            class="rounded-3"
            alt="Doctor Image"
            style="width: 100px; height: 100px; object-fit: cover"
          />
          <div class="flex-grow-1">
            <div class="d-flex justify-content-between flex-wrap gap-2">
              <div>
                <h5 class="mb-1 fw-bold">${appointment.name}</h5>
                <p class="mb-1 text-muted" style="font-size: 0.9rem">${appointment.specialty}</p>
              </div>
              <span class="badge bg-light text-dark fw-medium align-self-start">${appointment.status}</span>
            </div>
            <div class="flex-column align-items-center gap-0 mt-1">
              <p class="text-primary fw-medium" style="font-size: 0.9rem">${appointment.experience}</p>
              <p class="text-warning fw-semibold" style="font-size: 0.9rem">${appointment.rating} <span class="text-muted">(${appointment.reviews})</span></p>
            </div>
          </div>
        </div>
        <div class="d-flex flex-wrap align-items-center gap-3 mt-3">
              <div class="d-flex align-items-center gap-2">
               <image src="${appointment.callIcon}" alt="Call Icon" style="width: 20px; height: 20px;">
                <span class="text-success fw-semibold">${appointment.callType}</span>
              </div>
              <div class="d-flex align-items-center gap-2">
                <image src="../Public/calendar.png" alt="Calendar Icon" style="width: 20px; height: 20px;">
                <span class="text-muted">${appointment.date}</span>
              </div>
              <div class="d-flex align-items-center gap-2">
                <image src="../Public/clock.png" alt="Clock Icon" style="width: 20px; height: 20px;">
                <span class="text-muted">${appointment.time}</span>
              </div>
            </div>
      </div>
    `;

    container.appendChild(card);
  });
}


renderCards(appointments);
