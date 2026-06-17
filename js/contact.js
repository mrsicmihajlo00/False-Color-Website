// contact.js — EmailJS form handler

(function () {
  emailjs.init({ publicKey: "S1_6exSxxOa0Ii3HC" });
})();

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const btn = document.getElementById('btnText');
    const status = document.getElementById('formStatus');
    const submitBtn = form.querySelector('.submit-btn');

    btn.textContent = 'Sending…';
    submitBtn.disabled = true;
    status.textContent = '';
    status.className = 'form-status';

    const templateParams = {
      name:    document.getElementById('name').value,
      email:   document.getElementById('email').value,
      subject: document.getElementById('subject').value,
      message: document.getElementById('message').value,
    };

    emailjs.send("service_h0un01o", "template_iwgzydk", templateParams)
      .then(() => {
        btn.textContent = 'Message Sent';
        status.textContent = 'Thank you! I\'ll be in touch soon.';
        status.className = 'form-status success';
        form.reset();
        setTimeout(() => {
          btn.textContent = 'Send Message';
          submitBtn.disabled = false;
        }, 3000);
      })
      .catch(err => {
        btn.textContent = 'Send Message';
        submitBtn.disabled = false;
        status.textContent = 'Something went wrong. Please email directly.';
        status.className = 'form-status error';
        console.error('EmailJS error:', err);
      });
  });
});
