import * as P5 from 'p5';
import { RandomPointInCircle } from './utils/RandomPointInCircle';

class Brush {
  brush:any;

  constructor(brushType:string) {
    this.brush = this.brushes(brushType);
  }

  brushes = (type:string) => {
    let types: { [key: string]: any } = {
      standard: (p5:P5, x:number, y:number, radius:number) => {
        p5.fill(0);
        p5.circle(x,y,radius);
      },
      spray: (p5:P5, x:number, y:number, radius:number) => {
        const denseValue = Math.round(radius*3);
        const density = Array(denseValue).fill(undefined);
        p5.fill(0);

        const pass = Array(3).fill(undefined);

        pass.forEach(() => {
          density.forEach((val,index) => {
            const mutableRadius = index / density.length * radius;
            const coords = RandomPointInCircle(mutableRadius,x,y);
            p5.circle(coords[0],coords[1],1);
          })
        })
        
        
      }
    }

    return types[type];
  }

  draw = (p5:P5, x:number, y:number, radius:number) => {
    this.brush(p5,x,y,radius);
  }
}

export default Brush;