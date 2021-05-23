window.addEventListener('load', init);

function init() {

  document.querySelector('.p1').addEventListener('click', change_img);
  document.querySelector('.p2').addEventListener('click', change_img);
  document.querySelector('.p3').addEventListener('click', change_img);
}

function change_img(e) {

  // console.log(e.target.getAttribute('src'));
  let simg = e.target.getAttribute('src');

  document.querySelector('.picture').setAttribute('src', simg);

}