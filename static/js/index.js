var extension = "";
var isChrome = !!window.chrome && !!window.chrome.webstore;
if (isChrome) extension = ".webp"; else extension = ".png";

/*var loadImageOnScrollIntoView = function(img) {
    var imgPos = img.getBoundingClientRect();
    var src = img.getAttribute('src') + extension;

    if (pageYOffset + imgPos.y - imgPos.height < window.innerHeight) {
        img.setAttribute('src', src);
        img.style.visibility = 'visible';
        return;
    }

    window.addEventListener('scroll', function loadImageWhenVisible() {
        return (window.innerHeight - imgPos.y < scrollY) ?
            (
                img.setAttribute('src', src),
                img.style.visibility = 'visible',
                window.removeEventListener('scroll', loadImageWhenVisible)
            ) : false;
    });
}*/

Array.apply(null, document.querySelectorAll('img')).forEach(function(img) {
    // loadImageOnScrollIntoView(img);
    img.setAttribute('src', img.getAttribute('data-src') + extension);
    img.style.visibility = 'visible';
})