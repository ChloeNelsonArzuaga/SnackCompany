// Small interactivity for the static site
document.addEventListener('DOMContentLoaded', function(){
  // Insert current year
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();

  // Newsletter handling (simple demo)
  const form = document.getElementById('newsletter-form');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const emailEl = document.getElementById('email');
      const email = emailEl ? emailEl.value.trim() : '';
      if(!email){
        alert('Please enter an email address');
        return;
      }
      // Simple local confirmation — wire to a real service later
      alert('Thanks! ' + email + ' has been added to the demo list.');
      form.reset();
    });
  }

  // Small smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      const href = a.getAttribute('href');
      if(href === '#') return;
      const target = document.querySelector(href);
      if(target){
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth', block:'start'});
      }
    })
  })
});
