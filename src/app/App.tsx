import { Router } from './router';import { GameStateProvider } from '../state/GameStateContext';import { VillagePage } from '../pages/VillagePage';import { TrialPage } from '../pages/TrialPage';
export function App(){return <GameStateProvider><Router>{path=>path==='/trial'?<TrialPage/>:<VillagePage/>}</Router></GameStateProvider>}
