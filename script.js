window.onscroll = function()
{
    const button = document.querySelector('.b2t');
    if
    (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100
    ) {
        button.style.display = "block";
      } else {
        button.style.display ="none";
      }
};
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttributes('href')).scrollIntoView({
            behavior:'smooth'
        });
    });
});