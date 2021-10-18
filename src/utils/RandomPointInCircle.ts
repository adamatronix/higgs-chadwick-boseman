
export const RandomPointInCircle = (radius:number, x_center:number, y_center:number) => {
  let ang = Math.random() * 2 * Math.PI,
      hyp = Math.sqrt(Math.random()) * radius/2,
      adj = Math.cos(ang) * hyp,
      opp = Math.sin(ang) * hyp
    
    return [x_center + adj, y_center + opp]

};