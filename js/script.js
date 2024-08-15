
document.querySelectorAll('.profile-circle, .user-profile div').forEach(function(profile) {
    profile.addEventListener('click', function (event) {
        const popup = document.getElementById('user-popup');
        if (popup.style.display === 'none' || !popup.style.display) {
            const sidebarWidth = document.querySelector('.sidebar').offsetWidth;
            popup.style.left = sidebarWidth + 'px';
            popup.style.top = event.target.offsetTop + 'px';
            popup.style.display = 'block';
        } else {
            popup.style.display = 'none';
        }
    });
});

document.addEventListener('click', function (event) {
    const popup = document.getElementById('user-popup');
    if (!popup.contains(event.target) && !event.target.closest('.profile-circle') && !event.target.closest('.user-profile div')) {
        popup.style.display = 'none';
    }
});

document.querySelectorAll('.template-card').forEach(function(card) {
    card.addEventListener('click', function () {
        if (card.innerText.trim() === 'Project A') {
            window.location.href = 'project_a.html';
        }
    });
});
