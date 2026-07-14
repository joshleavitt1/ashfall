import { GameState } from '../types/game';import { initialGameState } from './gameReducer';
export const STORAGE_KEY='ashfall-game-state-v1';
function valid(x:unknown):x is GameState{return !!x&&typeof x==='object'&&'traits'in x&&'title'in x}
export function loadGameState(storage:Storage|undefined=globalThis.localStorage):GameState{try{const raw=storage?.getItem(STORAGE_KEY);if(!raw)return initialGameState;const parsed=JSON.parse(raw);return valid(parsed)?{...initialGameState,...parsed,traits:{...initialGameState.traits,...parsed.traits}}:initialGameState}catch{return initialGameState}}
export function saveGameState(state:GameState,storage:Storage|undefined=globalThis.localStorage){try{storage?.setItem(STORAGE_KEY,JSON.stringify(state))}catch{/* unavailable */}}
export function clearGameState(storage:Storage|undefined=globalThis.localStorage){try{storage?.removeItem(STORAGE_KEY)}catch{/* unavailable */}}
