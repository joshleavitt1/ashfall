declare module 'react' { export const StrictMode:any; export type ReactNode=any; export function createContext<T>(v:T):any; export function useContext(c:any):any; export function useEffect(f:any,d?:any[]):void; export function useMemo<T>(f:()=>T,d?:any[]):T; export function useState<T>(i:T|(()=>T)):[T,(v:T|((p:T)=>T))=>void]; }
declare module 'react-dom/client' { export function createRoot(el:Element):{render(v:any):void}; }
declare namespace JSX { interface IntrinsicElements { [elemName:string]: any } }
declare module 'react/jsx-runtime' { export const jsx:any; export const jsxs:any; export const Fragment:any; }
declare namespace React { type ReactNode=any; }
declare module '*.css' { const x:string; export default x; }
declare module 'vitest' { export const describe:any; export const it:any; export const expect:any; }
declare namespace JSX { interface IntrinsicAttributes { key?: any } }
