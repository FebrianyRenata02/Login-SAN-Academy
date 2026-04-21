document.addEventListener("DOMContentLoaded", function() {
    const app = document.getElementById("app");

    // ================= CONTAINER
    const container = document.createElement("div");
    container.className = "container";

    // ================= LEFT (SLIDER)
    const left = document.createElement("div");
    left.className = "left";

    const slider = document.createElement("div");
    slider.className = "slider";

    const slides = document.createElement("div");
    slides.className = "slides";

    // ================= DATA
    const images = [
        "img/learning_video.png",
        "img/remote_internship.png",
        "img/university.png",
        "img/school.png"
    ];

    const titles = [
        "Learning Videos",
        "Remote Internship",
        "University",
        "School"
    ];

    const descriptions = [
        "Learn to use videos as a means to convey learning material.",
        "Freelance and part-time internship facilities with guidance until you get a job.",
        "Online learning lecture facilities.",
        "Special education and distance learning facilities."
    ];

    // ================= CREATE IMAGES
    images.forEach((src) => {
        const img = document.createElement("img");
        img.src = src;

        img.onerror = () => {
            console.error("❌ Gagal load:", src);
        };

        slides.appendChild(img);
    });

    slider.appendChild(slides);

    // ================= TEXT
    const title = document.createElement("h3");
    title.innerText = titles[0];

    const desc = document.createElement("p");
    desc.innerText = descriptions[0];

    left.append(slider, title, desc);

    // ================= RIGHT (FORM)
    const right = document.createElement("div");
    right.className = "right";

    const formBox = document.createElement("div");
    formBox.className = "form-box";

    formBox.innerHTML = `
      <div class="logo">San Connect</div>
      <div class="sub">Enter your email below to login to your account</div>
  
      <label>Email</label>
      <input type="email" placeholder="@gmail.com"/>
  
      <label>Password</label>
      <input type="password"/>
  
      <button>Login</button>
  
      <div class="signup">Don't have an account? <b>Sign up</b></div>
    `;

    // EVENT LOGIN
    const button = formBox.querySelector("button");
    const emailInput = formBox.querySelector("input[type='email']");
    const passwordInput = formBox.querySelector("input[type='password']");

    button.addEventListener("click", function() {
        if (!emailInput.value || !passwordInput.value) {
            alert("Isi semua field!");
            return;
        }

        alert("Login berhasil (dummy)");
    });

    right.appendChild(formBox);

    // ================= APPEND
    container.append(left, right);
    app.appendChild(container);

    // ================= SLIDER LOGIC
    let index = 0;

    function updateSlide() {
        slides.style.transform = `translateX(-${index * 100}%)`;
        title.innerText = titles[index];
        desc.innerText = descriptions[index];
    }

    setInterval(() => {
        index++;
        if (index >= images.length) index = 0;

        updateSlide();
    }, 3000);

    // INIT
    updateSlide();
});