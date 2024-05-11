
document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('.nav-link');

    for (let link of links) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const pathname = link.getAttribute('href');
            transitionToPage(pathname);
        });
    }

    function transitionToPage(url) {
        const loader = document.querySelector('.loader-wrapper');
        loader.style.display = 'flex';
        setTimeout(() => {
            window.location.href = url;
        }, 1000); // Wait for 1 second before redirecting
    }
});

window.addEventListener("load", function () {
    const loader = document.querySelector(".loader-wrapper");
    setTimeout(() => {
        loader.style.opacity = 0;
        setTimeout(() => {
            loader.style.display = "none";
        }, 500);
    }, 1000);
});
