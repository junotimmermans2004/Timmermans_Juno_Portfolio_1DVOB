
// smooth scroll
$(document).ready(function(e) {
    function filterPath(string) {
        return string
            .replace(/^\//,'')
            .replace(/(index|default).[a-zA-Z]{3,4}$/,'')
            .replace(/\/$/,'');
    }
    $('a[href*=#]').each(function() {
        if ( filterPath(location.pathname) == filterPath(this.pathname)
            && location.hostname == this.hostname
            && this.hash.replace(/#/,'') ) {
            var $targetId = $(this.hash), $targetAnchor = $('[name=' + this.hash.slice(1) +']');
            var $target = $targetId.length ? $targetId : $targetAnchor.length ? $targetAnchor : false;
            if ($target) {
                var targetOffset = $target.offset().top -0;
                $(this).click(function(event) {
                    event.preventDefault();
                    $('html, body').animate({scrollTop: targetOffset}, 1000);
                    var d = document.createElement("div");
                    d.style.height = "101%";
                    d.style.overflow = "hidden";
                    document.body.appendChild(d);
                    window.scrollTo(0,scrollToM);
                    setTimeout(function() {
                        d.parentNode.removeChild(d);
                    }, 10);
                    return false;
                });
            }
        }
    });
});



