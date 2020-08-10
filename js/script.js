function changeLogo() {
    var image = document.getElementById('logo');
    if (image.src.match("Moon")) {
      image.src = "./img/Sun.png";
    } else {
      image.src = "./img/Moon.png";
    }
  }