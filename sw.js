// Nina: funciona offline e atualiza sozinha
const CACHE='nina-app-1.0';
const SHELL=['./','index.html','manifest.webmanifest','icon-192.png','icon-512.png','apple-touch-icon.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(SHELL)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{
  const u=new URL(e.request.url);
  if(e.request.method!=='GET'||u.hostname==='api.anthropic.com')return;
  if(e.request.mode==='navigate'){
    e.respondWith(fetch(e.request).then(r=>{const c=r.clone();caches.open(CACHE).then(x=>x.put('index.html',c));return r}).catch(()=>caches.match('index.html')));return;
  }
  e.respondWith(caches.match(e.request).then(hit=>hit||fetch(e.request).then(r=>{
    if(r.ok&&(u.origin===location.origin||u.hostname.endsWith('gstatic.com')||u.hostname.endsWith('googleapis.com'))){const c=r.clone();caches.open(CACHE).then(x=>x.put(e.request,c))}
    return r})))
});
self.addEventListener('notificationclick',e=>{e.notification.close();e.waitUntil(self.clients.matchAll({type:'window'}).then(cs=>cs.length?cs[0].focus():self.clients.openWindow('./')))});
