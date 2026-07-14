import { createContext,useContext,useEffect,useState } from 'react';
const NavCtx=createContext<(p:string)=>void>(()=>{});export const useNavigate=()=>useContext(NavCtx);
export function Router({children}:{children:(path:string)=>React.ReactNode}){const [path,setPath]=useState(location.pathname);const nav=(p:string)=>{history.pushState(null,'',p);setPath(p)};useEffect(()=>{const f=()=>setPath(location.pathname);addEventListener('popstate',f);return()=>removeEventListener('popstate',f)},[]);return <NavCtx.Provider value={nav}>{children(path)}</NavCtx.Provider>}
