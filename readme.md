# web2

CSS Changes (Part 2):

Moved all inline <style> tags from every HTML file into a single external style.css file.

Added a CSS Reset (* { margin: 0; padding: 0; box-sizing: border-box; }) to ensure cross-browser consistency.

Added Responsive Media Queries (@media (max-width: 768px)) to ensure the navigation links stack vertically on mobile devices and buttons resize appropriately.

Linked style.css to the <head> of all HTML pages.

JavaScript Changes (Part 3):

Moved the Lightbox Gallery JavaScript from gallary.html into a new external script.js file.

Added new JavaScript functions to handle Form Validation (validateForm). It checks if the name is long enough, if the email contains an @ symbol, and if the message is at least 10 characters long before showing a success message.

Linked script.js to the bottom of the <body> of all HTML pages.

HTML Changes (Part 2 & 3):

Created a brand new enquiry.html page with a specific form for catering/volunteer enquiries (Required by Part 3).

Added a Contact Form (id="contactForm") to contact.html with HTML5 inputs (type="email", required) and JS validation.

Added SEO Meta Descriptions and Keywords to the <head> of all pages.

Added enquiry.html to the Navigation bar across all pages.

Created robots.txt and sitemap.xml for Search Engine Optimization.

References & Tutorials Used
Here are the links to the documentation and tutorials used to implement these features:

CSS & Responsive Design:

MDN Web Docs - CSS Reset: https://developer.mozilla.org/en-US/docs/Web/CSS/all

W3Schools - CSS Media Queries: https://www.w3schools.com/css/css3_mediaqueries.asp

MDN Web Docs - Using Media Queries for Responsive Design: [https://developer.mozilla.org/en-US