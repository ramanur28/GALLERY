var i = 0;
var image = [];
var time = 3000;

image[0] = 'photo/img1.jpg';
image[1] = 'photo/img2.jpg';
image[2] = 'photo/img3.jpg';

function slide() {
  document.getElementById('slide').setAttribute('src', image[i]);

  if (i < image.length) {
    i++;
  } else {
    document.getElementById('slide').setAttribute('src', 'photo/img4.jpg');
    i = 0;
  }
  setTimeout('slide()', time);
}

window.onload = slide();
