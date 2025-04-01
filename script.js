document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector('.container');
  const registerBtn = document.querySelector('.register-btn');
  const loginBtn = document.querySelector('.login-btn');

  //REGISTER BTN
  registerBtn.addEventListener('click', () => {
    container.classList.add('active');
  });

  //LOGIN BTN
  loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
  });

  // REGISTER SUBMISSION
  document.getElementById("registerForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let popup = document.getElementById("confirmationMessage");
    popup.classList.add("show-popup");

    setTimeout(() => {
      popup.classList.remove("show-popup");
      container.classList.remove("active");
    }, 2000);
  });

  //NAVBAR STICKY
  const header = document.querySelector("header");
  window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 0);
  });

  //REVIEW FORM SUBMISSION
  document.getElementById("reviewForm").addEventListener("submit", function (event) {
    event.preventDefault();
    document.getElementById("confirmationMessage").style.display = "block";
    this.reset();
  });

  //NAVBAR RESPONSIVENESS
  const menuIcon = document.querySelector('#menu-icon');
  const navMenu = document.querySelector('.navmenu');

  menuIcon.addEventListener('click', () => {
    navMenu.classList.toggle('open');
  });
});

//LOGREG.HTML
function redirectToMain(event) {
  event.preventDefault();
  window.location.href = "index.html";
}

//PAYMENT & CALENDAR
document.addEventListener("DOMContentLoaded", function () {
  // PAYMENT
  const rentNowBtn = document.getElementById("rentNowBtn");
  const paymentBox = document.getElementById("paymentBox");
  const overlay = document.getElementById("overlay");
  const closePaymentBtn = document.querySelector("#paymentBox .close-btn");

  function closePaymentBox() {
    paymentBox.style.display = "none";
    overlay.style.display = "none";
  }

  if (rentNowBtn && paymentBox && overlay && closePaymentBtn) {
    rentNowBtn.addEventListener("click", function (event) {
      event.preventDefault();
      paymentBox.style.display = "block";
      overlay.style.display = "block";
    });

    overlay.addEventListener("click", closePaymentBox);
    closePaymentBtn.addEventListener("click", closePaymentBox);
  } else {
    console.error("One or more Payment elements not found.");
  }

  // Make closePaymentBox globally accessible
  window.closePaymentBox = closePaymentBox;

  // CALENDAR
  const checkAvailabilityBtn = document.getElementById("checkAvailabilityBtn");
  const calendarBox = document.getElementById("calendarBox");
  const calendarOverlay = document.getElementById("calendarOverlay");
  const closeCalendarBtn = document.querySelector("#calendarBox .close-btn");

  function closeCalendarBox() {
    calendarBox.style.display = "none";
    calendarOverlay.style.display = "none";
  }

  if (checkAvailabilityBtn && calendarBox && calendarOverlay && closeCalendarBtn) {
    checkAvailabilityBtn.addEventListener("click", function (event) {
      event.preventDefault();
      calendarBox.style.display = "block";
      calendarOverlay.style.display = "block";
    });

    calendarOverlay.addEventListener("click", closeCalendarBox);
    closeCalendarBtn.addEventListener("click", closeCalendarBox);
  } else {
    console.error("One or more Calendar elements not found.");
  }

  // Make closeCalendarBox globally accessible
  window.closeCalendarBox = closeCalendarBox;
});

//ACCOUNT.HTML
document.getElementById("logout-btn").addEventListener("click", function() {
  // Show confirmation before logging out
  let confirmLogout = confirm("Are you sure you want to log out?");
  
  if (confirmLogout) {
      // Clear any stored session data (if applicable)
      localStorage.clear(); // Example: Clear user session from local storage

      // Redirect to login page (update 'login.html' to your actual login page)
      window.location.href = "logreg.html";
  }
});

