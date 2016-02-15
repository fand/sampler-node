# sampler-node

An easy sampler AudioNode.

## Example

```js
import SamplerNode from '@fand/sampler-node';

const audioContext = new AudioContext();
const samplerNode   = new SampleNode([
    '//example.com/kick.mp3',
    '//example.com/snare.mp3',
]);

sampleNode.connect(audioContext.destination);

// BOOM BOOM POW
setInterval(() => {
    samplerNode.noteOn(0, 0);
    samplerNode.noteOn(0, 250);
    samplerNode.noteOn(1, 500);
}, 1000);
```

## LICENSE
MIT
