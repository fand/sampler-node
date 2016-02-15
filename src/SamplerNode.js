import AltAudioNode from 'altnode.alt-audio-node';
import SampleNode   from '@fand/sample-node';

class SamplerNode extends AltAudioNode {

  /**
   * @param {AudioContext} ctx
   * @param {Object}       urls
   */
  constructor (ctx, urls) {
    super(ctx);

    this._ctx = ctx;
    this._in  = this._ctx.createGain();
    this._out = this._ctx.createGain();

    this._nodes = {};
    Object.keys(urls).forEach((key) => {
      this._nodes[key] = new SampleNode(ctx, urls[key]);
      this._nodes[key].connect(this._out);
    });
  }

  get gain () {
    return this._out.gain;
  }

  start (i, time = 0) {
    if (i == null || !this._nodes[i]) {
      return;
    }
    this._nodes[i].play(time);
  }

  connect (...args) {
    this._out.connect(...args);
  }

  disconnect (...args) {
    this._out.disconnect(...args);
  }

  dispose () {
    this._out.disconnect();
    this._out = null;
    this._nodes = null;
  }

  __connectFrom (source, ...args) {
    source.connect(this._in, ...args);
  }

  __disconnectFrom (source, ...args) {
    source.disconnect(this._in, ...args);
  }

}

export default SamplerNode;
