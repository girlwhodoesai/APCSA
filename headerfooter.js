document.addEventListener("DOMContentLoaded", function() {
    fetch('https://girlwhodoesai.github.io/APCSA/header.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('header').innerHTML = data;
    })
  .catch(error => console.error('Error loading the header:', error)); 
  });
  document.addEventListener("DOMContentLoaded", function() {
    fetch('https://girlwhodoesai.github.io/APCSA/footer.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('footer').innerHTML = data;
    })
  .catch(error => console.error('Error loading the footer:', error)); 
  });