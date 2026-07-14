import { createServer } from 'node:http';
import { readFileSync, existsSync, statSync } from 'node:fs';
import { extname, join, normalize } from 'node:path';
const root=process.cwd();const types={'.html':'text/html','.js':'text/javascript','.css':'text/css','.svg':'image/svg+xml'};
createServer((req,res)=>{const url=new URL(req.url||'/', 'http://localhost');let file=normalize(join(root,url.pathname));if(!file.startsWith(root)||!existsSync(file)||statSync(file).isDirectory())file=join(root,'index.html');res.setHeader('Content-Type',types[extname(file)]||'text/plain');res.end(readFileSync(file));}).listen(5173,'0.0.0.0',()=>console.log('Ashfall live at http://localhost:5173'));
