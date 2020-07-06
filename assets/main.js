const card = document.querySelector('#card');

var hammertime = new Hammer(card);
hammertime.on('swipeleft', function(ev) {
    console.log(ev);
    card.classList.add('anim-swip-left');
});
hammertime.on('swiperight', function(ev) {
    console.log(ev);
    card.classList.add('anim-swip-right');
});

card.addEventListener("animationend", function() {
    card.classList.remove('anim-swip-left', 'anim-swip-right');
});