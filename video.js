var $pipes = $('.pipes');

$pipes.on('mouseenter focus', function () {
  $pipes.get(0).play();
});

$polystar.on('mouseout blur', function () {
  $pipes.get(0).pause();
});
