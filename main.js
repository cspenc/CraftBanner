var fullCup = ('#fullCup'),
  text1 = ('#text1');
  text2 = ('#text2');
  text3 = ('#text3');
  cta = ('#cta');

var tl = new TimelineLite();

tl.set(fullCup, {scale: .95, x: -65, y: -50})
  .set(text1, {autoAlpha: 0})
  .to(fullCup, 2, {scale: 0.8, x: -175, y: -345, delay: 2})
  .to(fullCup, 2, {scale: 0.5, x: -210, y: -385, delay: 2})
  .to(fullCup, 2, {scale: 0.5, x: -45, y: -395})
  .to(text1, 1, {autoAlpha: 1, delay: 3})
  .to(text1, 1, {autoAlpha: 0})
  .to(fullCup, 2, {scale: 0.15, x: -150, y: -275})
