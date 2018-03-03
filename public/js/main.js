/*console.log("I'm work");*/
var appendImg = function(index) {
    var div = document.createElement("div")
    div.classList.add('content')
    div.classList.add('content_show')
    div.innerHTML = '<div class="content"><img src="/public/img/top_'+index+'.jpg"></img></div>'
    document.getElementById('imgContainer').appendChild(div);
    //div.classList.remove('img_init')
    //div.classList.add('img_normal')
}

document.addEventListener('DOMContentLoaded', function () {

    // Get all "navbar-burger" elements
    var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {

        // Add a click event on each of them
        $navbarBurgers.forEach(function ($el) {
        $el.addEventListener('click', function () {

            // Get the target from the "data-target" attribute
            var target = $el.dataset.target;
            var $target = document.getElementById(target);

            // Toggle the class on both the "navbar-burger" and the "navbar-menu"
            $el.classList.toggle('is-active');
            $target.classList.toggle('is-active');

        });
        });
    }

    // write img containers
    [1,2,3].forEach(function(index){
        appendImg(index)
    })

});