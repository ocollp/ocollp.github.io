document.addEventListener("DOMContentLoaded", () => {
    const text = "Engineering Lead and Backend Developer";
    const typewriterText = document.getElementById("typewriter-text");
    let index = 0;

    function typeWriterEffect() {
        if (index < text.length) {
            typewriterText.textContent += text.charAt(index);
            index++;
            setTimeout(typeWriterEffect, 100);
        }
    }

    typeWriterEffect();
});