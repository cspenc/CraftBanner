var fullCup = ('#fullCup'),
  text1 = ('#text1'),
  text2 = ('#text2'),
  text3 = ('#text3'),
  halfCup = ('#halfCup'),
  cta = ('#cta');

var tl = new TimelineLite();

tl.set(fullCup, {scale: .95, x: -65, y: -50})
  .set(halfCup, {autoAlpha:0, scale: 0.20, x: -150, y: -285})
  .to(fullCup, 2, {scale: 0.8, x: -175, y: -345, delay: 2})
  .to(fullCup, 2, {scale: 0.5, x: -210, y: -385, delay: 2})
  .to(fullCup, 2, {scale: 0.5, x: -45, y: -395})
  .to(text1, 1, {autoAlpha: 1})
  .to(text1, 1, {autoAlpha: 0, delay: 3})
  .to(fullCup, 2, {scale: 0.20, x: -150, y: -285})
  .to(text2, 1, {autoAlpha:1 })
  .to(text3, 1, {autoAlpha:1 })
  .to(fullCup, 0.5, {autoAlpha: 0})
  .to(halfCup, 0.5, {autoAlpha: 1})
  .to(cta, 1, {autoAlpha: 1})
