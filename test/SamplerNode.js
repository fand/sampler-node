import assert       from 'power-assert';
import SamplerNode  from '../src/SamplerNode';
import AltAudioNode from 'altnode.alt-audio-node';

describe('SamplerNode', () => {
  let audioContext = null;
  let node;

  beforeEach(() => {
    audioContext = new global.AudioContext();
    node         = new SamplerNode(audioContext, '');
  });

  it('is an instance of AudioNode', () => {
    assert(node instanceof SamplerNode);
    assert(node instanceof AltAudioNode);
    assert(node instanceof global.AudioNode);
  });

});
