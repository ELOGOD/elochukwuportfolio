var GHPATH = '/elochukwuportfolio';
var APP_PREFIX = 'elopwa_';
var VERSION = 'version_001';
var URLS = [    
    `${GHPATH}/`,
    `${GHPATH}/index.html`,
    `${GHPATH}/assets/css/style.css`,
    `${GHPATH}/assets/img/favicon.png`,
    `${GHPATH}/assets/js/main.js`,
    `${GHPATH}/assets/img/certificates/Scan_2015_01.jpg`,
    `${GHPATH}/assets/img/certificates/Scan_2018_01.png`,
    `${GHPATH}/assets/img/certificates/Scan_2018_02.png`,
    `${GHPATH}/assets/img/certificates/Scan_2019_01.png`,
    `${GHPATH}/assets/img/certificates/Scan_2019_02.png`,
    `${GHPATH}/assets/img/certificates/Scan_2019_03.png`,
    `${GHPATH}/assets/img/certificates/Scan_2019_04.png`,
    `${GHPATH}/assets/img/certificates/Scan_2019_05.png`,
    `${GHPATH}/assets/img/certificates/Scan_2019_06.png`,
    `${GHPATH}/assets/img/certificates/Scan_2019_07.png`,
    `${GHPATH}/assets/img/certificates/Scan_2019_08.png`,
    `${GHPATH}/assets/img/certificates/Scan_2021_01.jpg`,
    `${GHPATH}/assets/img/certificates/Scan_2022_01_s.jpg`,
    `${GHPATH}/assets/img/certificates/Scan_2022_01.jpg`,
    `${GHPATH}/assets/img/certificates/Scan_2022_02_s.jpg`,
    `${GHPATH}/assets/img/certificates/Scan_2022_02.jpg`,
    `${GHPATH}/assets/img/certificates/Scan_2022_03_s.jpg`,
    `${GHPATH}/assets/img/certificates/Scan_2022_03.jpg`,
    `${GHPATH}/assets/img/certificates/Scan_2022_04.png`,
    `${GHPATH}/assets/img/certificates/Scan_2022_05.png`,
    `${GHPATH}/assets/img/certificates/Scan_2022_06.png`,
    `${GHPATH}/assets/img/certificates/Scan_2022_07.png`,
    `${GHPATH}/assets/img/certificates/Scan_2022_08.png`,
    `${GHPATH}/assets/img/certificates/Scan_2022_09.png`,
    `${GHPATH}/assets/img/certificates/Scan_2022_10.png`,
    `${GHPATH}/assets/img/certificates/Scan_2023_01.png`,
    `${GHPATH}/assets/img/certificates/Scan_2023_02.png`,
    `${GHPATH}/assets/img/certificates/Scan_2023_03.png`,
    `${GHPATH}/assets/img/certificates/Scan_2023_04.png`,
    `${GHPATH}/assets/img/certificates/Scan_2023_05.png`,
    `${GHPATH}/assets/img/certificates/Scan_2023_06.png`,
    `${GHPATH}/assets/img/certificates/Scan_2023_07.png`,
    `${GHPATH}/assets/img/certificates/Scan_2024_01.png`,
    `${GHPATH}/assets/img/certificates/Scan_2024_02.jpg`,
    `${GHPATH}/assets/img/certificates/Scan_2024_03.png`,
    `${GHPATH}/assets/img/certificates/Scan_2024_04.png`,
    `${GHPATH}/assets/img/certificates/Scan_2024_05.png`,
    `${GHPATH}/assets/img/certificates/Scan_2024_06.png`,
    `${GHPATH}/assets/img/certificates/Scan_2024_07.png`,
    `${GHPATH}/assets/img/certificates/Scan_2024_08.png`,
    `${GHPATH}/assets/img/projects/ai4science-1.png`,
    `${GHPATH}/assets/img/projects/ai4science-2.png`,
    `${GHPATH}/assets/img/projects/aocm_project-1.jpeg`,
    `${GHPATH}/assets/img/projects/community_development-1.png`,
    `${GHPATH}/assets/img/projects/community_development-2.png`,
    `${GHPATH}/assets/img/projects/community_development-3.jpg`,
    `${GHPATH}/assets/img/projects/community_development-4.jpg`,
    `${GHPATH}/assets/img/projects/community_development-5.jpg`,
    `${GHPATH}/assets/img/projects/community_development-6.jpg`,
    `${GHPATH}/assets/img/projects/community_development-7.jpg`,
    `${GHPATH}/assets/img/projects/community_development-8.jpg`,
    `${GHPATH}/assets/img/projects/eventmanagement_flask-1.png`,
    `${GHPATH}/assets/img/projects/eventmanagement_flask-2.png`,
    `${GHPATH}/assets/img/projects/eventmanagement_flask-3.png`,
    `${GHPATH}/assets/img/projects/eventmanagement_flask-4.png`,
    `${GHPATH}/assets/img/projects/eventmanagement_flask-5.png`,
    `${GHPATH}/assets/img/projects/eventmanagement_flask-6.png`,
    `${GHPATH}/assets/img/projects/eventmanagement_flask-7.png`,
    `${GHPATH}/assets/img/projects/frsc_cds-1.jpg`,
    `${GHPATH}/assets/img/projects/frsc_cds-2.jpg`,
    `${GHPATH}/assets/img/projects/frsc_cds-3.jpg`,
    `${GHPATH}/assets/img/projects/frsc_cds-4.jpg`,
    `${GHPATH}/assets/img/projects/frsc_cds-5.jpg`,
    `${GHPATH}/assets/img/projects/frsc_cds-6.jpg`,
    `${GHPATH}/assets/img/projects/humming_bird-1.png`,
    `${GHPATH}/assets/img/projects/humming_bird-2.png`,
    `${GHPATH}/assets/img/projects/klinnin-1.png`,
    `${GHPATH}/assets/img/projects/klinnin-2.png`,
    `${GHPATH}/assets/img/projects/klinnin-3.png`,
    `${GHPATH}/assets/img/projects/malware_tts-1.png`,
    `${GHPATH}/assets/img/projects/malware_tts-2.png`,
    `${GHPATH}/assets/img/projects/malware_tts-3.png`,
    `${GHPATH}/assets/img/projects/malware_tts-4.png`,
    `${GHPATH}/assets/img/projects/mico_project-1.png`,
    `${GHPATH}/assets/img/projects/mico_project-2.png`,
    `${GHPATH}/assets/img/projects/mico_project-3.png`,
    `${GHPATH}/assets/img/projects/mico_project-4.png`,
    `${GHPATH}/assets/img/projects/midata_analysis-1.png`,
    `${GHPATH}/assets/img/projects/midata_analysis-2.png`,
    `${GHPATH}/assets/img/projects/midata_analysis-3.png`,
    `${GHPATH}/assets/img/projects/midata_analysis-4.png`,
    `${GHPATH}/assets/img/projects/midata_analysis-5.png`,
    `${GHPATH}/assets/img/projects/pwa_project-1.png`,
    `${GHPATH}/assets/img/projects/pwa_project-2.png`,
    `${GHPATH}/assets/img/projects/pwa_project-3.png`,
    `${GHPATH}/assets/img/projects/pwa_project-4.png`,
    `${GHPATH}/assets/img/projects/pwa_project-5.png`,
    `${GHPATH}/assets/img/projects/pwa_project-6.png`,
    `${GHPATH}/assets/img/projects/pwa_project-7.png`,
    `${GHPATH}/assets/img/projects/pwa_project-8.png`,
    `${GHPATH}/assets/img/projects/pwa_project-9.png`,
    `${GHPATH}/assets/img/projects/udacity_cloud-1.png`,
    `${GHPATH}/assets/img/projects/udacity_cloud-2.PNG`,
    `${GHPATH}/assets/img/projects/udacity_cloud-3.PNG`,
    `${GHPATH}/assets/img/projects/udacity_cloud-4.png`,
    `${GHPATH}/assets/img/projects/udacity_cloud-5.png`,
    `${GHPATH}/assets/img/projects/udacity_cloud-6.png`,
    `${GHPATH}/assets/img/projects/udacity_cloud-7.png`,
    `${GHPATH}/assets/img/projects/udacity_cloud-8.png`,
    `${GHPATH}/assets/img/projects/udacity_cloud-9.png`,
    `${GHPATH}/assets/img/projects/udacity_cloud-10.png`,
    `${GHPATH}/assets/img/projects/udacity_cloud-11.PNG`,
    `${GHPATH}/assets/img/projects/udacity_cloud-12.PNG`,
    `${GHPATH}/assets/img/aibot-thumbnail.png`,
    `${GHPATH}/assets/img/apple-touch-icon.png`,
    `${GHPATH}/assets/img/Elochukwu_Profile.jpg`,
    `${GHPATH}/assets/img/Elochukwu_Profile.png`,
    `${GHPATH}/assets/img/favicon.png`,
    `${GHPATH}/assets/img/hero-bg.jpg`,
    `${GHPATH}/assets/img/hero-bgd.png`,
    `${GHPATH}/assets/img/hero-bgd.webp`,
    `${GHPATH}/assets/img/mico-thumbnail.png`,
    `${GHPATH}/assets/img/pwa-thumbnail.png`,
    `${GHPATH}/project-ai4science.html`,
    `${GHPATH}/project-aocm.html`,
    `${GHPATH}/project-awscloud.html`,
    `${GHPATH}/project-communityDevelopmentLibrary.html`,
    `${GHPATH}/project-eventManagementFlask.html`,
    `${GHPATH}/project-frscCds.html`,
    `${GHPATH}/project-hummingBird.html`,
    `${GHPATH}/project-intelligentPWA.html`,
    `${GHPATH}/project-klinnin.html`,
    `${GHPATH}/project-malwaretts.html`,
    `${GHPATH}/project-mico.html`,
    `${GHPATH}/project-midata.html`
];

var CACHE_NAME = APP_PREFIX + VERSION
self.addEventListener('fetch', function (e) {
    console.log('Fetch request : ' + e.request.url);
    e.respondWith(
        caches.match(e.request).then(function (response) {
            if (response) {
                console.log('Responding with cache : ' + e.request.url);
                return response;
            }
            console.log('File is not cached, fetching : ' + e.request.url);
            return fetch(e.request).then(function (networkResponse) {
                return caches.open(CACHE_NAME).then(function (cache) {
                    cache.put(e.request, networkResponse.clone());
                    console.log('New data cached : ' + e.request.url);
                    return networkResponse;
                });
            });
        })
    );
});

self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      console.log('Installing cache : ' + CACHE_NAME);
      return cache.addAll(URLS)
    })
  )
})

self.addEventListener('activate', function (e) {
    e.waitUntil(
        caches.keys().then(function (keyList) {
            var cacheWhitelist = keyList.filter(function (key) {
                return key.indexOf(APP_PREFIX)
            })
            cacheWhitelist.push(CACHE_NAME);
            return Promise.all(keyList.map(function (key, i) {
                if (cacheWhitelist.indexOf(key) === -1) {
                    console.log('Cache not in whitelist : ' + keyList[i]);
                    // Do not delete any cache
                }
            }))
        })
    )
})

if (navigator.storage && navigator.storage.persist) {
    navigator.storage.persist().then(persistent => {
        console.log(persistent ? "Storage will persist." : "Storage is not persistent.");
    });
}

