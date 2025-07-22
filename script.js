document.addEventListener("DOMContentLoaded", function () {
    const typedText = document.querySelector(".home-content h1 span");
    const words = ["MOMIN SHEIKH", "a FullStack Developer", "a Web Designer"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    function typeEffect() {
        const currentWord = words[wordIndex];
        
        if (isDeleting) {
            typedText.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typedText.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
        }
        
        if (!isDeleting && charIndex === currentWord.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1500); // Pause before deleting
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length; // Switch to next word
            setTimeout(typeEffect, 500);
        } else {
            setTimeout(typeEffect, isDeleting ? 50 : 100);
        }
    }
    
    typeEffect();
});
document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.createElement("button");
    themeToggle.textContent = "Toggle Theme";
    themeToggle.classList.add("theme-toggle");
    document.body.appendChild(themeToggle);

    function setTheme(theme) {
        document.body.classList.toggle("dark-mode", theme === "dark");
        localStorage.setItem("theme", theme);
    }

    themeToggle.addEventListener("click", function () {
        const currentTheme = document.body.classList.contains("dark-mode") ? "light" : "dark";
        setTheme(currentTheme);
    });

    // Load saved theme
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
});
