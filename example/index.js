const SamplerNode = require('@fand/sampler-node');

const ctx = new AudioContext();
const samplerNode = new SamplerNode(ctx, ['./kick.wav', './snare.wav']);
samplerNode.connect(ctx.destination);

var timer;
document.querySelector('.boom-boom-pow').addEventListener('click', () => {
  if (timer) {
    clearInterval(timer);
  }
  timer = setInterval(() => {
    samplerNode.start(0, ctx.currentTime + 0.000);
    samplerNode.start(0, ctx.currentTime + 0.250);
    samplerNode.start(1, ctx.currentTime + 0.500);
  }, 1000);
});

const beepboop = new SamplerNode(ctx, {
  beep : './beep.mp3',
  boop : './boop.mp3',
});
beepboop.connect(ctx.destination);
document.querySelector('.beep-start').addEventListener('click', () => beepboop.start('beep'));
document.querySelector('.boop-start').addEventListener('click', () => beepboop.start('boop'));
document.querySelector('.beep-stop').addEventListener('click', () => beepboop.stop('beep'));
document.querySelector('.boop-stop').addEventListener('click', () => beepboop.stop('boop'));
