export function ajax() {
  document.addEventListener('DOMContentLoaded', () => {

    const form = document.querySelector('#contactForm');
    if (!form) return;

    const modalHTML = `
      <div id="thankYouModal" role="dialog" aria-modal="true" aria-labelledby="modalTitle" style="
        display: none;
        position: fixed;
        inset: 0;
        z-index: 9999;
        background: rgba(0,0,0,0.55);
        backdrop-filter: blur(4px);
        align-items: center;
        justify-content: center;
      ">
        <div style="
          background: #F5E9D3;
          border-radius: 12px;
          padding: 48px 40px 40px;
          max-width: 440px;
          width: 90%;
          text-align: center;
          position: relative;
          box-shadow: 0 24px 60px rgba(0,0,0,0.25);
          animation: popIn 0.35s cubic-bezier(0.34,1.56,0.64,1);
        ">
          <div style="font-size: 52px; margin-bottom: 16px;">✉️</div>
          <h2 id="modalTitle" style="margin: 0 0 12px; font-size: 1.9rem; color: #544339; font-family:'cornella';">Howdy bestie,</h2>
          <p id="modalBody" style="color: #BFA38B; font-size: 1.4rem; line-height: 1.6; margin: 0 0 28px; font-family:'librebodoni';"></p>
          <button id="modalClose" style="
            background: #544339;
            color: #F5E9D3;
            border: none;
            padding: 12px 32px;
            border-radius: 6px;
            font-family: 'cornella';
            font-size: 1rem;
            letter-spacing: 0.05em;
            cursor: pointer;
            transition: background 0.2s;
          ">CLOSE</button>
        </div>
      </div>
      <style>
        @keyframes popIn {
          from { opacity: 0; transform: scale(0.85); }
          to   { opacity: 1; transform: scale(1); }
        }
        #thankYouModal button:hover { background: #BFA38B !important; }
      </style>`;

    document.body.insertAdjacentHTML('beforeend', modalHTML);

    const modal      = document.querySelector('#thankYouModal');
    const modalBody  = document.querySelector('#modalBody');
    const modalClose = document.querySelector('#modalClose');
    const feedback   = document.querySelector('#feedback');
    const submitBtn  = form.querySelector('button[type="submit"]');

    const closeModal = () => {
      modal.style.display = 'none';
    };

    const showMessages = (container, messages, color) => {
      messages.forEach((msg) => {
        const errorParagraph = document.createElement('p');
        errorParagraph.textContent = msg;
        errorParagraph.style.color = color;
        errorParagraph.style.margin = '4px 0';
        container.appendChild(errorParagraph);
      });
    };

    const validateForm = (userName, userEmail, userMessage) => {
      const validationErrors = [];
      if (!userName)    validationErrors.push('Please enter your full name.');
      if (!userEmail)   validationErrors.push('Please enter your email address.');
      if (!userMessage) validationErrors.push('Please enter a message.');
      return validationErrors;
    };

    const submitForm = async (event) => {
      event.preventDefault();
      if (feedback) feedback.innerHTML = '';

      const userName    = form.elements['name'].value.trim();
      const userEmail   = form.elements['email'].value.trim();
      const userMessage = form.elements['message'].value.trim();

      const validationErrors = validateForm(userName, userEmail, userMessage);

      if (validationErrors.length) {
        if (feedback) showMessages(feedback, validationErrors, '#c0392b');
        return;
      }

      submitBtn.disabled    = true;
      submitBtn.textContent = 'Sending...';

      try {
        const response = await fetch('includes/send.php', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams({ name: userName, email: userEmail, message: userMessage }),
        });

        const rawResponse = await response.text();
        let responseData;

        try {
          responseData = JSON.parse(rawResponse);
        } catch (parseError) {
          console.error('Server returned non-JSON:', rawResponse);
          if (feedback) showMessages(feedback, ['Server error. Please try again later.'], '#c0392b');
          return;
        }

        if (responseData.errors && responseData.errors.length) {
          if (feedback) showMessages(feedback, responseData.errors, '#c0392b');
        } else {
          form.reset();
          modalBody.textContent = responseData.message ||
            `Thank you, ${userName}! Your message just landed safely on my Monster can! No worries. I will clean that.`;
          modal.style.display = 'flex';
          modalClose.focus();
        }

      } catch (networkError) {
        console.error('Fetch failed:', networkError);
        if (feedback) showMessages(feedback, ['Could not reach the server. Please check your connection.'], '#c0392b');
      } finally {
        submitBtn.disabled    = false;
        submitBtn.textContent = 'SEND';
      }
    };

    form.addEventListener('submit', submitForm);

    modalClose.addEventListener('click', closeModal);

    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeModal();
    });

  });
}