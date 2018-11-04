var $pipes = $('.pipes');

$pipes.on('mouseclick', function () {
  $pipes.get(0).play();
});

$polystar.on('mouseout', function () {
  $pipes.get(0).pause();
});
