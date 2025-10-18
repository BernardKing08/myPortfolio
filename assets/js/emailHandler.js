document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector(".php-email-form");
  const loading = document.querySelector(".loading");
  const errorMsg = document.querySelector(".error-message");
  const sentMsg = document.querySelector(".sent-message");

  form.addEventListener("submit", async function(e) {
    e.preventDefault();

    loading.style.display = "block";
    errorMsg.style.display = "none";
    sentMsg.style.display = "none";

    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData
      });

      const result = await response.text();

      loading.style.display = "none";

      if (response.ok && result.trim() === "OK") {
        sentMsg.style.display = "block";
        form.reset();
      } else {
        errorMsg.innerHTML = result || "Something went wrong. Please try again.";
        errorMsg.style.display = "block";
      }
    } catch (error) {
      loading.style.display = "none";
      errorMsg.innerHTML = "An error occurred while sending your message.";
      errorMsg.style.display = "block";
    }
  });
});

