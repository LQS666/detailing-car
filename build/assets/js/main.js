let mapControl = document.querySelector('.map-panel');

mapControl.addEventListener('click', function () {
    mapControl.classList.remove('map-panel');
    mapControl.classList.add('map-panel-hidden');
});