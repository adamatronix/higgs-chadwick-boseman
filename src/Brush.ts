import * as P5 from 'p5';

class Brush {

  constructor() {

  }

  draw = (p5:P5, x:number, y:number, radius:number) => {
    p5.fill(0);
    p5.circle(x,y,radius);
  }
}

export default Brush;