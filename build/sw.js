let cacheData = 'App-Portopolio-V1';
//memasukan deta ke cache
self.addEventListener('install',(event) =>{
    event.waitUntil(
        caches.open(cacheData)
        .then((cache) =>{
            cache.addAll([
				'/static/css/main.b67f0b27.chunk.css',
				'/static/js/2.affa9bb5.chunk.js',
				'/static/js/main.61581bda.chunk.js',
                '/static/media/gambar1.1a7a782b.png',
                '/static/media/bg-halaman-utama.946a7ddd.jpg',
                '/static/media/bg-halaman-about.12299767.jpg',
				'/images/icons/icon-144x144.png',
				'/images/icons/icon-152x152.png',
				'/assets/index.js',
				'/assets/index.css',
				'/static/media/bg-halaman-kontak.0ee1f0de.jpg',
                '/https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css',
                '/manifest.json',
                '/logo-yudi.png',
                '/static/js/main.chunk.js',
				'/static/js/0.chunk.js',
				'/static/js/1.chunk.js',
                '/static/js/bundle.js',
                '/index.html',
                '/',
            ])
        })
    )
})
//hapus chache yang tidak di digunakan
self.addEventListener('activate', function(event){
	event.waitUntil(
		caches.keys()
		.then(function(cacheNames) {
			return Promise.all(
				cacheNames.map(function(cacheName){
					if(cacheName != cacheData){	
						console.log("ServiceWorker: cache " + cacheName + " dihapus");
						return caches.delete(cacheName);
					}
				})
			);
		})
	);
})
//menampilkan data
self.addEventListener('fetch', (event)=>{
	event.respondWith(
		caches.match(event.request, {cacheName:cacheData})
		.then(function(response) {
			if(response){
				return response;
			}
			return fetch(event.request);
		})
	);
});