let areahumberger = document.getElementById('area-humberger');
let iconhumberger = document.getElementById('humberger-icon');
let closehumberger = document.getElementById('humberger-close');
let dimmer = document.getElementById('dim');

iconhumberger.addEventListener('click', function () {
		areahumberger.style.transform = 'translateX(0)';
		dimmer.style.display = 'block';
		dimmer.style.opacity = '1';
});

closehumberger.addEventListener('click', function () {
		areahumberger.style.transform = 'translateX(100%)';
		dimmer.style.opacity = '0';
		dimmer.style.display = 'none';
});

