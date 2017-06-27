var fullCup = ('#fullCup');

var tl = new TimelineLite();

tl.set(fullCup, {scale: .95, x: -65, y: -50})
  .to(fullCup, 3, {scale: 0.8, x: -175, y: -345, delay: 2})
  .to(fullCup, 3, {scale: 0.5, x: -210, y: -385, delay: 2})
