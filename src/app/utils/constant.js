export const topBarHeight = 150
export const sideNavWidth = 260
export const navbarHeight = 60
export const sidenavCompactWidth = 80
export const containedLayoutWidth = 1200
export const dataGridRowHeight = 30
export const dataGridHeight = 700

export const convertHexToRGB = (hex) => {
    // check if it's a rgba
    if (hex.match('rgba')) {
      let triplet = hex.slice(5).split(',').slice(0, -1).join(',');
      return triplet;
    }
  
    let c;
    if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
      c = hex.substring(1).split('');
      if (c.length === 3) {
        c = [c[0], c[0], c[1], c[1], c[2], c[2]];
      }
      c = '0x' + c.join('');
  
      return [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',');
    }
  };