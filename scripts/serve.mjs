import http from 'node:http';
import {readFile} from 'node:fs/promises';
import {resolve,extname} from 'node:path';
const root=resolve('docs'); const mime={'.html':'text/html','.js':'text/javascript','.css':'text/css','.svg':'image/svg+xml','.webmanifest':'application/manifest+json'};
http.createServer(async(req,res)=>{try{const p=resolve(root,'.'+decodeURIComponent(new URL(req.url,'http://local').pathname));if(!p.startsWith(root+'/')&&p!==root)throw Error();const f=p===root?root+'/index.html':p;const b=await readFile(f);res.writeHead(200,{'Content-Type':mime[extname(f)]||'application/octet-stream','Cache-Control':'no-store'});res.end(b);}catch{res.writeHead(404);res.end('Not found');}}).listen(4173,'0.0.0.0',()=>console.log('http://localhost:4173'));
