import * as P5 from 'p5';
import Cursor from './Cursor';

class BosemanWall {

  container:HTMLDivElement;

  constructor(container: HTMLDivElement) {
    this.container = container;
    new Cursor(this.container);
    new P5(this.sketch);
  }

  sketch = (p5: P5) => {
    p5.setup = () => {
      const canvas = p5.createCanvas(this.container.offsetWidth, this.container.offsetHeight);
      canvas.parent(this.container);
      canvas.style('position', 'absolute');
      canvas.style('left', 0);
      canvas.style('top', 0);
      canvas.style('z-index', 1);
      p5.frameRate(60);
    }
  }

}

export default BosemanWall;