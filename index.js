const captchatextbox = document.getElementById("captchatextbox");
const refreshbutton = document.querySelector(".refresh_button");
const captchainputbox = document.getElementById("captchainputbox");
const message = document.querySelector(".message");
const submitbutton = document.getElementById("submitbutton");

let captchatext = []; // Initialize captchatext as an empty array.

const generatecaptcha = () => {
    const randomstring = Math.random().toString(36).substring(2, 7);
    const changestring = randomstring.split("").map((char) => (Math.random() >= 0.5 ? char.toUpperCase() : char));
    captchatext = changestring; // Store the array in captchatext.
    captchatextbox.value = captchatext.join(""); // Join the array when displaying the captcha.
    console.log(captchatext);
};

const refreshbtnclick = () => {
    generatecaptcha();
    captchainputbox.value = "";
    captchakeyupvalidate();
};

const captchakeyupvalidate = () => {
    submitbutton.disabled = !captchainputbox.value || captchainputbox.value !== captchatext.join(""); // Join the array for comparison.
    message.classList.remove("active");
};

const submitbtnclick = () => {
    captchatext = captchatext.filter((char) => char !== ""); // Remove empty elements from the array.
    message.classList.add("active");
    // Perform the necessary actions with the valid captcha text
    if (captchainputbox.value === captchatext.join("")) { // Join the array for comparison.
        message.innerText = "Kode verifikasi yang dimasukkan benar !!";
        message.style.color = "#82afb";
    } else {
        message.innerText = "Kode verifikasi yang anda masukkan salah!!";
        message.style.color = "#ff2525";
    }
};

// Add event listeners for the button clicks and keyup events
refreshbutton.addEventListener("click", refreshbtnclick);
captchainputbox.addEventListener("keyup", captchakeyupvalidate);
submitbutton.addEventListener("click", submitbtnclick);

// Initialize the captcha generator on page load
generatecaptcha();