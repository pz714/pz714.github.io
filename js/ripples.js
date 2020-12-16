<link rel="stylesheet" class="aplayer-secondary-style-marker" href="\assets\css\APlayer.min.css"><script src="\assets\js\APlayer.min.js" class="aplayer-secondary-script-marker"></script><script class="meting-secondary-script-marker" src="\assets\js\Meting.min.js"></script>$(document).ready(function () {
  try {
    $("#page-header").ripples({
      resolution: 512,
      dropRadius: 10, //px
      perturbance: 0.04,
    });
  } catch (e) {
    $(".error").show().text(e);
  }
});