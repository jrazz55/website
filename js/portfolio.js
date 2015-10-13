/**
 * Loads the freewall plugin on the div with the ID 'portfolio-pictures'
 *
 * Created by Jonathan on 10/12/15.
 */


// Load up the portfolio div
var images = [
    {
        image: 'self_portrait.jpg',
        width: 300
    },
    {
        image: 'twisted-nail.jpg',
        width: 300
    },
    {
        image: 'trippy-triangles.png',
        width: 300
    },
    {
        image: 'kedar.jpg',
        width: 250
    },
    {
        image: 'paint-people.png',
        width: 300
    },
    {
        image: 'history-cover.jpg',
        width: 600
    },
    {
        image: 'APURA2.jpg',
        width: 200
    },

    {
        image: 'holidayspecial.jpg',
        width: 600
    },
    {
        image: 'banner.jpg',
        width: 300
    },
    {
        image: 'mathlabvswritinglab.jpg',
        width: 300
    },
    {
        image: 'sports_info.jpg',
        width: 300
    },
    {
        image: 'tomchaishabbat.jpg',
        width: 300
    }
];
var imageHtml = '<div class="brick" style="width:{width}px;"><a class="gallery" href="images/portfolio/{image}"><img src="images/portfolio/{image}" width="100%"></a></div>';
var html = "";
for (var i in images) {
    var temp = imageHtml.replace(/\{width\}/, images[i].width);
    temp = temp.replace(/\{image\}/g, images[i].image);
    html+= temp;
}
$('#portfolio-pictures').html(html);
$('a.gallery').colorbox({rel: 'gallery'});

var wall = new freewall("#portfolio-pictures");
wall.reset({
    selector: '.brick',
    animate: true,
    cellW: 150,
    cellH: 'auto',
    onResize: function() {
        wall.fitWidth();
    }
});

var images = wall.container.find('.brick');
images.find('img').load(function() {
    wall.fitWidth();
});