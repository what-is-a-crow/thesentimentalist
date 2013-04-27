(function() {
  App.setHomeBackground = function() {
    function random(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    var imageIndex = random(1, 5);
    var backgroundImage = "url(images/home-" + imageIndex + ".jpg)";
    $('#home .inner-content').css("background-image", backgroundImage);
  };
})();
