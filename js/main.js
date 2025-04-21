// Panel Hide and show
$(document).ready(function(){

$(".board2").hide();
$(".board3").hide();
$(".board4").hide();
$(".board5").hide();
$(".sec1").click(function(){
  $(".board1").show();
  $(".board2").hide();
  $(".board3").hide();
  $(".board4").hide();
  $(".board5").hide();
});
$(".sec2").click(function(){
    $(".board2").show();
    $(".board1").hide();
    $(".board3").hide();
    $(".board4").hide();
    $(".board5").hide();
});
$(".sec3").click(function(){
    $(".board3").show();
    $(".board1").hide();
    $(".board2").hide();
    $(".board4").hide();
    $(".board5").hide();
  });
$(".sec4").click(function(){
    $(".board4").show();
    $(".board1").hide();
    $(".board2").hide();
    $(".board3").hide();
    $(".board5").hide();
  });
$(".sec5").click(function(){
    $(".board5").show();
    $(".board1").hide();
    $(".board2").hide();
    $(".board3").hide();
    $(".board4").hide();
  });
});

$(document).ready(function(){
    $(".sec2").click(function(){
      $(".board1").slideUp();
    });
    $(".btn2").click(function(){
      $("p").slideDown();
    });
});

// loan form
function submitForm() {
    let fields = ["amountLoan", "ageBusiness", "numberPan", "annualSales", "businessNature"], isValid = true;

    document.querySelectorAll(".error-message").forEach(e => e.remove());

    fields.forEach(id => {
        let input = document.getElementById(id);
        let value = input.value.trim();
        let loanError = "";

        if (id === "amountLoan" && (value === "" || value < 50000 || value > 200000))
            loanError = "Loan amount must be ₹50,000.";
        else if (id === "numberPan" && value.length !== 10)
            loanError = "PAN number must be exactly 10 characters.";
        else if (value === "")
            loanError = "This field is required.";

        if (loanError) {
            input.style.border = "1px solid red";
            let errorDiv = document.createElement("div");
            errorDiv.className = "error-message";
            errorDiv.innerText = loanError;
            errorDiv.style.color = "red";
            errorDiv.style.fontSize = "10px";
            errorDiv.style.position = "absolute";
            input.parentNode.appendChild(errorDiv);
            isValid = false;
            input.addEventListener("input", () => clearError(input));
        } else clearError(input);
    });

    // If everything is valid
    if (isValid) {
        let loanSuccess = document.createElement("div");
        loanSuccess.innerText = "Your loan application is accepted!";
        loanSuccess.style.color = "green";
        loanSuccess.style.fontSize = "10px";
        loanSuccess.style.position = "absolute";
        loanSuccess.style.transform = "translateY(-20px)";
        document.querySelector(".btn-cntr").appendChild(loanSuccess);
    }
};

// for the clear error
function clearError(input) {
    input.style.border = "";
    let error = input.parentNode.querySelector(".error-message");
    if (error) error.remove();
}

// nav tobble button
const togglebutton = document.querySelector('.toggle');
const navLinks = document.querySelector('.nav-links');

togglebutton.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// loan eligibity

function updateValue(id, value){
    document.getElementById(id).value = value;
}

function sendOTP(){
    alert('OTP sent to your mobile number');
}

document.getElementById('eligibilityForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Form submitted successfully!');
});

// Calculator
function updateValue(id, value){
    document.getElementById(id).value = value;
}

function calculateEMI(){
    const principal = parseInt(document.getElementById('loanValue').value);
    const interestRate = parseFloat(document.getElementById('interestRate').value) / 12 / 100;
    const tenure = parseInt(document.getElementById('loanTenureValue').value) * 12;

    const emi = (principal * interestRate * Math.pow(1 + interestRate, tenure)) / (Math.pow(1 + interestRate, tenure) - 1);
    const totalPayment = emi * tenure;
    const totalInterest = totalPayment - principal;

    document.getElementById('emiResult').innerText = `₹ ${emi.toFixed(2)}`;
    document.getElementById('principalResult').innerText = `₹ ${principal.toLocaleString()}`;
    document.getElementById('interestResult').innerText = `₹ ${totalInterest.toLocaleString()}`;
    document.getElementById('totalResult').innerText = `₹ ${totalPayment.toLocaleString()}`;
}

function resetValues(){
    document.getElementById('loanAmount').value = 0;
    document.getElementById('loanValue').value = 0;
    document.getElementById('interestRate').value = 0;
    document.getElementById('interestRate').value = 0;
    document.getElementById('loanTenure').value = 0;
    document.getElementById('loanTenureValue').value = 0;
    document.getElementById('emiResult').innerText = '$ 0';
    document.getElementById('principalResult').innerText = '$ 0';
    document.getElementById('interestResult').innerText = '$ 0';
    document.getElementById('totalResult').innerText = '$ 0';
}

// OWL CAROUSEL INITIATION
$('.owl-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    margin:50,
    dots:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:3,
            nav:false,
        }
    }
});

// FAQ link bar
const button = document.querySelector(".faq-menu");
const menu = document.querySelector(".sub-link");

// when the button is click toggle the menu
button.onclick = function() {
    if (menu.style.display === "block"){
        menu.style.display = "none"; // hide menu
    } else{
        menu.style.display = "block"; // show menu
    }
};

function toggleSignInMethod() {
    let passwordField = document.getElementById("passwordField");
    let otpField = document.getElementById("otpField");
    let toggleText = document.getElementById("toggleSignIn");
    let extraOptions = document.getElementById("extraOptions"); // Wraps Remember Me & Forgot Password

    let isOtpMode = passwordField.style.display === "none"; 

    if (isOtpMode) {
        // Switch to Password Mode
        passwordField.style.display = "block";
        otpField.style.display = "none";
        otpField.style.color = "#6819E6";
        extraOptions.style.display = "flex"; // Show Remember Me & Forgot Password
        toggleText.innerText = "Sign via OTP";
    } else {
        // Switch to OTP Mode
        passwordField.style.display = "none";
        otpField.style.display = "block";
        extraOptions.style.display = "none"; // Hide Remember Me & Forgot Password
        toggleText.innerText = "Sign via password";
    }
}