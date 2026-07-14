export type ChoiceId = 'order'|'compassion'|'punishment';
export type GameState = { trialCompleted:boolean; selectedChoice:ChoiceId|null; traits:{compassion:number;courage:number;ambition:number;wisdom:number}; title:string };
