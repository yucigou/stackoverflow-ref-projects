var windowWidth = $(window).width();
var windowLength = $(window).height();

var yPos = [50, 100, 150, 200, 250];

var base = d3
  .select('#svgDiv')
  .append('svg')
  .attr('width', windowWidth)
  .attr('height', windowLength);

$(document).ready(function() {
  windowWidth = $(window).width();
  windowLength = $(window).height();

  base.attr('width', windowWidth).attr('height', windowLength);
  document.body.style.overflow = 'hidden';
});

$(window).resize(function() {
  windowWidth = $(window).width();
  windowLength = $(window).height();
  base.attr('width', windowWidth).attr('height', windowLength);
});

$('div').click(function(e) {
  base
    .selectAll('circle')
    .data(yPos)
    .enter()
    .append('circle')
    .attr('cx', function(d) {
      return d;
    })
    .attr('cy', d => d)
    .attr('r', 20)
    .style('fill', '00ACCD');

  console.log('click works');
});
