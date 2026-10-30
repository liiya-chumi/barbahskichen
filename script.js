document.addEventListener('DOMContentLoaded', () => {
   const galleryImages = document.querySelectorAll('.gallery img');
    const lightbox = document.getElementById('lightbox');

  
    if (lightbox) {
      
   const lightboxImg = lightbox.querySelector('img');
   galleryImages.forEach(img => {
    img.addEventListener('click', () => {
    lightbox.style.display = 'flex';
      lightboxImg.src = img.src;
            });
        });
       lightbox.addEventListener('click', () => {
            lightbox.style.display = 'none';
        });
    }


  
  const contactForm = document.getElementById('contactForm');
    const enquiryForm = document.getElementById('enquiryForm');

    const validateForm = (e, formType) => {
        e.preventDefault(); // Stop form submission


      
        let isValid = true;
        const name = e.target.querySelector('input[name="name"]').value;
        const email = e.target.querySelector('input[name="email"]').value;
        const message = e.target.querySelector('textarea').value;

      
        
        // Simple Validation Logic
        if (name.length < 2) {
            alert("Please enter a valid name.");
            isValid = false;
        } else if (!email.includes('@')) {
            alert("Please enter a valid email address.");
            isValid = false;
        } else if (message.length < 10) {
            alert("Message must be at least 10 characters long.");
            isValid = false;
        }

        if (isValid) {
            alert(`${formType} submitted successfully! (This is a frontend simulation)`);
            e.target.reset();
        }
    };

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => validateForm(e, 'Contact Form'));
    }

    if (enquiryForm) {
        enquiryForm.addEventListener('submit', (e) => validateForm(e, 'Enquiry Form'));
    }
});
