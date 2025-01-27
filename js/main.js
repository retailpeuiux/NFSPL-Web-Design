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
    const principal = parseInt(document.getElementById('loanAmountValue').value);
    const interestRate = parseFloat(document.getElementById('interestRateValue').value) / 12 / 100;
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
    document.getElementById('loanAmountValue').value = 0;
    document.getElementById('interestRate').value = 0;
    document.getElementById('interestRateValue').value = 0;
    document.getElementById('loanTenure').value = 0;
    document.getElementById('loanTenureValue').value = 0;
    document.getElementById('emiResult').innerText = '$ 0';
    document.getElementById('principalResult').innerText = '$ 0';
    document.getElementById('interestResult').innerText = '$ 0';
    document.getElementById('totalResult').innerText = '$ 0';
}

// footer DropDown

// function togleFooter (){
//     const togglepage =  document.querySelector('.togglepage');
//     togglepage.style.display = togglepage.style.display === 'none' ? 'block' : 'none';
// };

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
