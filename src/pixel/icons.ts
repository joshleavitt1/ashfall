import { PixelSpriteData } from '../types/pixel';
const tr={'.':'transparent'};
export const heartIcon:PixelSpriteData={id:'heart',width:8,height:8,palette:{...tr,R:'#b84d4b',D:'#6b2427'},pixels:['.RR..RR.','RRRRRRRR','RRRRRRRR','.RRRRRR.','..RRRR..','...RR...','........','........']};
export const shieldIcon:PixelSpriteData={id:'shield',width:8,height:8,palette:{...tr,B:'#66839c',D:'#263a4e',L:'#a8bac6'},pixels:['.LLLLLL.','LBBBBBBL','LBBBBBBL','.BDDBB.','..BDB...','...B....','........','........']};
export const crownIcon:PixelSpriteData={id:'crown',width:8,height:8,palette:{...tr,V:'#8060a7',D:'#332244',G:'#c8963e'},pixels:['V..V..V.','VVVVVVV.','.VGVGV..','.VVVV...','DDDDDD..','........','........','........']};
export const scalesIcon:PixelSpriteData={id:'scales',width:10,height:8,palette:{...tr,L:'#b9c5c8',B:'#66839c'},pixels:['....L.....','..LLLLL...','L.L.L.L.L.','.BB.L.BB..','.BB.L.BB..','...LLL....','..LLLLL...','..........']};
export const gemFilled:PixelSpriteData={id:'gem-filled',width:5,height:5,palette:{...tr,G:'#d6a34c',L:'#f0c36a',D:'#76542a'},pixels:['..L..','.GGG.','GGDGG','.GGG.','..D..']};
export const gemEmpty:PixelSpriteData={id:'gem-empty',width:5,height:5,palette:{...tr,E:'#56585d'},pixels:['..E..','.E.E.','E...E','.E.E.','..E..']};
