const SamplerNode = require('@fand/sampler-node');

const ctx = new AudioContext();
const samplerNode = new SamplerNode(ctx, ['./kick.wav', './snare.wav']);
samplerNode.connect(ctx.destination);

var timer;
document.querySelector('button').addEventListener('click', () => {
  if (timer) {
    clearInterval(timer);
  }
  timer = setInterval(() => {
    samplerNode.start(0, ctx.currentTime + 0.000);
    samplerNode.start(0, ctx.currentTime + 0.250);
    samplerNode.start(1, ctx.currentTime + 0.500);
  }, 1000);
});
