import { cp, mkdir, rm, copyFile } from 'node:fs/promises';
await rm('dist', { recursive: true, force: true });
await mkdir('dist', { recursive: true });
for (const file of ["index.html","index.css","index.js","assets","Reto - La grilla de Bootstrap.html"]) await cp(file, 'dist/' + file, { recursive: true });
console.log('Sitio estático generado en dist/.');
