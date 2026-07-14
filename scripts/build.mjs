import { mkdirSync, copyFileSync, cpSync } from 'node:fs';
mkdirSync('dist/src/styles',{recursive:true});
copyFileSync('index.html','dist/index.html');
copyFileSync('src/standalone.js','dist/src/standalone.js');
cpSync('src/styles','dist/src/styles',{recursive:true});
console.log('dist prepared');
