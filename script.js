// ===================================
// THREE.JS GLOBE SETUP
// ===================================
let scene, camera, renderer, earth, atmosphere, clouds, stars;
let isDragging = false;
let previousMousePosition = { x: 0, y: 0 };
let autoRotate = true;
let globeInitialized = false;

// Scroll animation variables
let scrollProgress = 0;
let targetCameraZ = 8;
let currentCameraZ = 8;

// Pokemon markers array
let pokemonMarkers = [];
let selectedPokemon = null;

// ===================================
// FICTION NEWS DATA
// ===================================
const NEWS = [
    {
        id: 1,
        headline: 'MYSTERIOUS GIANT BIRD SPOTTED ABOVE EVEREST',
        tag: 'FICTIONAL FIELD REPORT',
        date: 'Oct 21, 2026',
        body: 'An enormous ice-blue bird was briefly captured on camera amid a blizzard near Everest\'s summit. Witnesses reported vast wings and a ribbon-like tail before the creature vanished into the snow.',
        image: 'asset/Fiction-news/Articuno/Screenshot 2026-10-21 181440.png',
        relatedPokemon: 'Articuno'
    },
    {
        id: 2,
        headline: 'TSUNAMI WARNING ISSUED — UNDERWATER CREATURE SIGHTED NEAR MARIANA TRENCH',
        tag: 'FICTIONAL FIELD REPORT',
        date: 'Oct 20, 2026',
        body: 'A powerful undersea earthquake has prompted tsunami warning centers to issue an urgent alert. An underwater exploration robot near the Mariana Trench captured footage of a shadowy white creature with enormous wings swimming through a colossal whirlpool.',
        image: 'asset/Fiction-news/Lugia/Lugia-news.png',
        relatedPokemon: 'Lugia'
    },
    {
        id: 3,
        headline: 'MYSTERIOUS GIANT BIRD SPOTTED IN THE SKIES ABOVE KYOTO, DISPLAYING A RAINBOW OF COLORS',
        tag: 'FICTIONAL FIELD REPORT',
        date: 'Oct 19, 2026',
        body: 'An unnaturally vast display of seven-colored light illuminated the sky above Kyoto Tower. Numerous witnesses reported seeing the silhouette of a majestic, flame-colored bird spreading its wings and scattering shimmering particles of light across the city.',
        image: 'asset/Fiction-news/Ho-oh/Screenshot 2026-10-21 181415.png',
        relatedPokemon: 'Ho-Oh'
    },
    {
        id: 4,
        headline: 'COLOSSAL STONE CREATURE EMERGES FROM THE SANDS NEAR GIZA PYRAMIDS',
        tag: 'FICTIONAL FIELD REPORT',
        date: 'Oct 18, 2026',
        body: 'A gigantic swirling sandstorm engulfed the Great Pyramid of Giza as a colossal stone creature rose from beneath the sand. Local residents believe it is an ancient guardian deity protecting the sacred tombs of the pharaohs.',
        image: 'asset/Fiction-news/Regirock/Screenshot 2026-10-21 181403.png',
        relatedPokemon: 'Regirock'
    },
    {
        id: 5,
        headline: 'MYSTERIOUS BLUE AND RED OBJECTS SPOTTED RACING ABOVE VENICE',
        tag: 'FICTIONAL FIELD REPORT',
        date: 'Oct 17, 2026',
        body: 'Supersonic shockwaves tore through the clouds above Venice as cameras captured fleeting glimpses of blue and red flying objects cutting through the mist at jet-like speeds.',
        image: 'asset/Fiction-news/Latios-Latias/Screenshot 2026-10-21 181428.png',
        relatedPokemon: 'Latias / Latios'
    },
    {
        id: 6,
        headline: 'GIANT GOLDEN BIRD SIGHTED AS EXTREME LIGHTNING STORM STRIKES CATATUMBO',
        tag: 'FICTIONAL FIELD REPORT',
        date: 'Oct 16, 2026',
        body: 'An extreme lightning storm battered Catatumbo, triggering widespread power outages. Witnesses reported a giant golden bird spreading its wings against the dark sky, unleashing powerful bolts into the water below. Frightened residents compared it to the Thunderbird, a legendary being associated with thunder and storms in several Indigenous North American traditions.',
        image: 'asset/Fiction-news/Zapdos/Zapdos-news.png',
        relatedPokemon: 'Zapdos'
    }
];

// ===================================
// LOCATION FOLDER MAP (for Place/Legend images)
// ===================================
const LOCATION_FOLDER = {
    'articuno':  'Articuno, Mount Everest, NepalChina',
    'zapdos':    'Zapdos, Lake Maracaibo, Venezuela',
    'moltres':   'Moltres, Mount Merapi, Java, Indonesia',
    'raikou':    'Raikou, Gyeongju, South Korea',
    'entei':     'Entei, Beijing, China',
    'suicune':   'Suicune, Lake Geneva, Switzerland',
    'lugia':     'Lugia, Mariana_Trench',
    'hooh':      'Ho-Oh, Kyoto, Japan',
    'celebi':    'Celebi, Amazon rainforest, Brazil',
    'regirock':  'Regirock, Giza, Egypt',
    'regice':    'Regice, Greenland',
    'registeel': 'Registeel, Ngwenya Mine, Eswatini',
    'latias':    'Latios, Latias, Venice, Italy',
    'latios':    'Latios, Latias, Venice, Italy',
    'kyogre':    'kyogre, Point_Nemo',
    'groudon':   'Groudon, Uluru, Australia',
    'rayquaza':  'Rayquaza, Chichén Itzá, Mexico',
    'regigigas': 'Regigas, Easter Island, Chile'
};

// Exact filenames inside each Place / Legend subfolder
const PLACE_IMG = {
    'articuno':  'Sunset_view_of_Everest (1).jpg',
    'zapdos':    'Maracaibo_AMO_2021.jpg',
    'moltres':   'Melihat_erupsi_Gunung_Merapi_dari_Puncak_Bukit_Turgo.jpg',
    'raikou':    'Korea Screenshot 2026-10-19 203053.png',
    'entei':     'Forbidden_City_Beijing_China5.jpg',
    'suicune':   'Lake_Geneva,_Geneva_(Ank_Kumar)_03.jpg',
    'lugia':     'Mariana_Trench_Map_1907.jpg',
    'hooh':      'Toji-temple-kyoto.jpg',
    'celebi':    'Amazon_MODIS.jpg',
    'regirock':  'Giza,_Dahshur_and_Saqqara_-_Giza8278.jpg',
    'regice':    'Nuuk,_Greenland_skyline_at_night_under_the_northern_lights_(Quintin_Soloviev).png',
    'registeel': 'Ngwenya_Mine.jpg',
    'latias':    '960px-Venice_Old_Town_Lagoon_Aerial_View.jpg',
    'latios':    '960px-Venice_Old_Town_Lagoon_Aerial_View.jpg',
    'kyogre':    'Clouds-Pacific_Ocean.jpg',
    'groudon':   'Uluṟu_(Ayers_Rock),_Sunset.jpg',
    'rayquaza':  'ChichenItzaEquinox.jpg',
    'regigigas': 'Hodges_easter-island.jpg'
};

const LEGEND_IMG = {
    'articuno':  'Isfandiyar_battles_the_Simurgh_or_Persian_Phoenix,_Shah_Nama_(Book_of_Kings)_Shiraz,_1330.jpg',
    'zapdos':    'Thunderbird_with_a_whale_in_its_claws._Makah_Nuu-chah-nulth_art.png',
    'moltres':   'Phoenix-Fabelwesen.jpg',
    'raikou':    'Raiju-Thunder-Beast.jpeg',
    'entei':     'Transmongolie-660_(27643744552).jpg',
    'suicune':   'Kirin_encyclopédie_japonaise_(1875),_illustration_from_kinmō_zui.jpg',
    'lugia':     'ryujin-6775.jpg',
    'hooh':      'Yu_Sheng_-_Fenghuang_-_18th-century.jpg',
    'celebi':    'Kokopelli_kachina.jpg',
    'regirock':  'Mikoláš_Aleš_-_The_Maharal_of_Prague_and_the_Golem_(1899).jpg',
    'regice':    'Louis_Huard_-_Giant_Skrymir_and_Thor.jpg',
    'registeel': 'Prague-golem-reproduction.jpg',
    'latias':    '1516 Vittore Carpacci,_The_Lion_of_St_Mark_(detail)_Tempera_on_canvas,_Palazzo_Ducale,_Venice.jpg',
    'latios':    '1516 Vittore Carpacci,_The_Lion_of_St_Mark_(detail)_Tempera_on_canvas,_Palazzo_Ducale,_Venice.jpg',
    'kyogre':    'Destruction_of_Leviathan.png',
    'groudon':   'Behemoth-Leviathan.jpg',
    'rayquaza':  'A Kukulkan carving (Photo Credit DEA G. Dagli Orti De Agostini Getty Images).jpg',
    'regigigas': 'Hercules_Assisting_Atlas_MET_DP822474.jpg'
};

function placeImagePath(slug) {
    return `asset/World location/${LOCATION_FOLDER[slug]}/Place/${PLACE_IMG[slug]}`;
}
function legendImagePath(slug) {
    return `asset/World location/${LOCATION_FOLDER[slug]}/Legend/${LEGEND_IMG[slug]}`;
}

// ===================================
// INIT ON LOAD
// ===================================
window.addEventListener('DOMContentLoaded', () => {
    // Move the globe container out of #view-world and attach it directly to
    // <body>. It is position:fixed, so it does not need to live inside the
    // view. This prevents its WebGL canvas from collapsing to zero size when
    // #view-world becomes display:none during navigation (the root cause of
    // the globe disappearing after switching views).
    const gc = document.getElementById('globeContainer');
    if (gc && gc.parentElement !== document.body) {
        document.body.appendChild(gc);
    }

    initGlobe();
    setupScrollAnimation();
    createPokemonMarkers();
    setupModal();
    buildNewsPanel();
    buildNewsModal();
    setupContinentFilter();
    setupNavigation();
    buildSignalsFeed();
    buildPokedexGrid();
    setupMoreInfoButton();
    buildQuiz();
    applyInitialView();
});

// ===================================
// VIEW ROUTER  (pure SPA — no reload, no URL hash)
// ===================================
// We switch views in-place with JS. No page reload and no URL hash, because
// browsers remember zoom level per-URL: "index.html" and "index.html#world"
// were treated as different URLs with different zoom, which made the UI jump
// size after navigating. Keeping one single URL fixes that completely.
function setupNavigation() {
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
        link.addEventListener('click', () => navigateTo(link.dataset.view));
    });
}

function navigateTo(view) {
    const onWorldNow = !document.body.classList.contains('not-world');

    // Returning to WORLD: reload the page so the WebGL globe is re-created
    // fresh (fixes the globe disappearing). We reload the SAME url with no
    // hash, so the browser keeps the current zoom — no size jump.
    if (view === 'world') {
        if (onWorldNow) {
            // Already on world, just scroll to top
            window.scrollTo({ top: 0, behavior: 'auto' });
            return;
        }
        location.reload();   // url stays "index.html", zoom unchanged
        return;
    }

    // ABOUT is a scroll within the WORLD view
    if (view === 'about') {
        if (onWorldNow) {
            const about = document.getElementById('pokemonSection');
            if (about) about.scrollIntoView({ behavior: 'smooth' });
        } else {
            // Coming from another page: reload to world, then scroll on load
            sessionStorage.setItem('scrollToAbout', '1');
            location.reload();
        }
        return;
    }

    // Other views (signals / pokedex / quiz) switch in-place, no reload
    setActiveView(view);
    setActiveNav(view);
    window.scrollTo({ top: 0, behavior: 'auto' });
}

// Default view on load (always WORLD, since we never leave the base URL)
function applyInitialView() {
    setActiveView('world');
    setActiveNav('world');

    // If we reloaded specifically to reach the About section, scroll there
    if (sessionStorage.getItem('scrollToAbout')) {
        sessionStorage.removeItem('scrollToAbout');
        const about = document.getElementById('pokemonSection');
        if (about) requestAnimationFrame(() => about.scrollIntoView({ behavior: 'auto' }));
    }
}

function setActiveView(view) {
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    const target = document.getElementById(`view-${view}`);
    if (target) target.classList.add('active');

    if (view === 'world') {
        document.body.classList.remove('not-world');

        // Clear any inline styles the scroll handler left on the globe
        const gc = document.getElementById('globeContainer');
        if (gc) {
            gc.style.opacity = '';
            gc.style.pointerEvents = '';
        }

        // Reset scroll + camera so the globe shows at full size
        window.scrollTo({ top: 0, behavior: 'auto' });
        scrollProgress = 0;
        targetCameraZ = 8;

        // The globe canvas may have been hidden; resize the renderer to the
        // canvas's real pixel size once layout settles, so it never stays blank.
        requestAnimationFrame(resizeRenderer);
        setTimeout(resizeRenderer, 60);
    } else {
        document.body.classList.add('not-world');
    }
}

// Resize the WebGL renderer/camera to the current window size.
function resizeRenderer() {
    if (!camera || !renderer) return;
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function setActiveNav(view) {
    document.querySelectorAll('.nav-link').forEach(l => {
        l.classList.toggle('active', l.dataset.view === view);
    });
}

// ===================================
// SIGNALS FEED (IG-style)
// ===================================
function buildSignalsFeed() {
    const feed = document.getElementById('signalsFeed');
    if (!feed || !NEWS) return;

    NEWS.forEach(news => {
        const post = document.createElement('article');
        post.className = 'ig-post';
        post.innerHTML = `
            <div class="ig-post-header">
                <div class="ig-avatar"></div>
                <div>
                    <div class="ig-account">global_signal</div>
                    <div class="ig-time">${news.date}</div>
                </div>
            </div>
            <img class="ig-post-img" src="${news.image}" alt=""
                 onerror="this.style.minHeight='200px';this.removeAttribute('src')">
            <div class="ig-post-actions">
                <span>&#x2661;</span>
                <span>&#x1F4AC;</span>
                <span>&#x27A4;</span>
            </div>
            <div class="ig-post-caption">
                <span class="ig-tag">${news.tag}</span><br>
                <span class="ig-caption-account">global_signal</span>${news.headline}. ${news.body}
            </div>`;
        feed.appendChild(post);
    });
}

// ===================================
// POKEDEX GRID + DETAIL
// ===================================
function buildPokedexGrid() {
    const grid = document.getElementById('pokedexGrid');
    if (!grid || !POKEMON) return;

    POKEMON.forEach(pokemon => {
        const card = document.createElement('div');
        card.className = 'pokedex-card';
        card.dataset.slug = pokemon.slug;

        const typesHtml = pokemon.types.map(t =>
            `<span class="pokemon-type type-${t.toLowerCase()}">${t}</span>`).join('');

        card.innerHTML = `
            <div class="pokedex-card-no">#${String(pokemon.no).padStart(3, '0')}</div>
            <img class="pokedex-card-img" src="asset/Pokemon/${pokemon.name}.png" alt="${pokemon.name}">
            <div class="pokedex-card-name">${pokemon.name}</div>
            <div class="pokedex-card-types">${typesHtml}</div>`;

        card.addEventListener('click', () => showPokedexDetail(pokemon.slug));
        grid.appendChild(card);
    });
}

function renderRefs(list) {
    if (!list || !list.length) return '';
    const links = list.map(r =>
        `<li><a href="${r.u}" target="_blank" rel="noopener noreferrer">${r.t}</a></li>`
    ).join('');
    return `<div class="dossier-refs">
        <div class="dossier-refs-title">References</div>
        <ul>${links}</ul>
    </div>`;
}

function showPokedexDetail(slug) {
    const pokemon = POKEMON.find(p => p.slug === slug);
    const dex = POKEDEX[slug];
    const detail = document.getElementById('pokedexDetail');
    if (!pokemon || !dex || !detail) return;

    // Highlight selected card
    document.querySelectorAll('.pokedex-card').forEach(c => {
        c.classList.toggle('selected', c.dataset.slug === slug);
    });

    const typesHtml = pokemon.types.map(t =>
        `<span class="pokemon-type type-${t.toLowerCase()}">${t}</span>`).join('');

    detail.innerHTML = `
        <div class="dossier-header">
            <img class="dossier-img" src="asset/Pokemon/${pokemon.name}.png" alt="${pokemon.name}">
            <div>
                <div class="dossier-name">${pokemon.name}</div>
                <div class="dossier-title">${pokemon.title}</div>
                <div class="dossier-types">${typesHtml}</div>
            </div>
        </div>

        <div class="dossier-section">
            <div class="dossier-section-title">01 — Pokémon Overview</div>
            <div class="dossier-text">${dex.overview}</div>
            <div class="modal-info-grid">
                <div class="modal-info-item">
                    <div class="modal-info-label">Height</div>
                    <div class="modal-info-value">${pokemon.h}</div>
                </div>
                <div class="modal-info-item">
                    <div class="modal-info-label">Weight</div>
                    <div class="modal-info-value">${pokemon.w}</div>
                </div>
                <div class="modal-info-item">
                    <div class="modal-info-label">In-Game Habitat</div>
                    <div class="modal-info-value">${pokemon.game}</div>
                </div>
            </div>
            ${renderRefs(dex.refs && dex.refs.overview)}
        </div>

        <div class="dossier-section">
            <div class="dossier-section-title">02 — Real-World Location</div>
            <img class="dossier-img-full" src="${placeImagePath(slug)}" alt=""
                 onerror="this.style.display='none'">
            <div class="dossier-place-name">${dex.locationName}</div>
            <div class="dossier-place-country">${dex.locationCountry}</div>
            <div class="dossier-text">${dex.locationHistory}</div>
            <div class="dossier-why-box">
                <div class="dossier-why-label">Why here?</div>
                <div class="dossier-text" style="margin:0">${dex.whyHere}</div>
            </div>
            ${renderRefs(dex.refs && dex.refs.location)}
        </div>

        <div class="dossier-section">
            <div class="dossier-section-title">03 — Legend &amp; Design Reference</div>
            <img class="dossier-img-full" src="${legendImagePath(slug)}" alt=""
                 onerror="this.style.display='none'">
            <div class="dossier-place-name">${dex.legendName}</div>
            <div class="dossier-label">${dex.legendLabel}</div>
            <div class="dossier-text">${dex.legendText}</div>
            ${renderRefs(dex.refs && dex.refs.legend)}
        </div>
    `;

    detail.scrollTop = 0;
}

// ===================================
// MORE INFO BUTTON (popup -> pokedex)
// ===================================
function setupMoreInfoButton() {
    const btn = document.getElementById('moreInfoBtn');
    if (!btn) return;
    btn.addEventListener('click', () => {
        if (!selectedPokemon) return;
        const slug = selectedPokemon.slug;
        closePokemonModal();
        navigateTo('pokedex');
        showPokedexDetail(slug);
    });
}

// ===================================
// SCROLL ANIMATION
// ===================================
function setupScrollAnimation() {
    window.addEventListener('scroll', () => {
        const heroSection = document.getElementById('heroSection');
        const pokemonSection = document.getElementById('pokemonSection');
        const heroHeight = heroSection ? heroSection.offsetHeight : window.innerHeight;
        const scrollY = window.scrollY;

        scrollProgress = Math.min(Math.max(scrollY / heroHeight, 0), 1);

        const minDistance = 2.5;
        const maxDistance = 8;
        targetCameraZ = maxDistance - (maxDistance - minDistance) * scrollProgress;

        // Fade out globe when reaching pokemon section
        const globeContainer = document.getElementById('globeContainer');
        if (pokemonSection && globeContainer) {
            const dist = pokemonSection.offsetTop - scrollY - window.innerHeight;
            if (dist < 200) {
                const opacity = Math.max(0, dist / 200);
                globeContainer.style.opacity = opacity;
                globeContainer.style.pointerEvents = opacity <= 0 ? 'none' : 'all';
            } else {
                globeContainer.style.opacity = 1;
                globeContainer.style.pointerEvents = 'all';
            }
        }

        updateUIVisibility();
    });
}

function updateUIVisibility() {
    const controls    = document.querySelector('.controls');
    const instructions = document.querySelector('.instructions');
    const newsPanel   = document.getElementById('newsPanel');
    const controlPanel = document.getElementById('controlPanel');

    if (scrollProgress > 0.5) {
        controls    && controls.classList.add('visible');
        instructions && instructions.classList.add('visible');
        newsPanel   && newsPanel.classList.add('visible');
        controlPanel && controlPanel.classList.add('visible');
    } else {
        controls    && controls.classList.remove('visible');
        instructions && instructions.classList.remove('visible');
        newsPanel   && newsPanel.classList.remove('visible');
        controlPanel && controlPanel.classList.remove('visible');
    }
}

// ===================================
// GLOBE INITIALIZATION
// ===================================
function initGlobe() {
    const canvas = document.getElementById('heroGlobeCanvas');
    if (!canvas) return;

    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 8;
    currentCameraZ = 8;

    renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    scene.add(new THREE.AmbientLight(0x404040, 1.5));
    const dirLight = new THREE.DirectionalLight(0xffffff, 1);
    dirLight.position.set(5, 3, 5);
    scene.add(dirLight);

    createStars();

    const loader = new THREE.TextureLoader();
    const earthTex = loader.load(
        'https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/earth_atmos_2048.jpg',
        () => { const el = document.getElementById('loadingText'); if (el) el.style.display = 'none'; },
        undefined,
        () => { const el = document.getElementById('loadingText'); if (el) el.textContent = 'Error loading texture'; }
    );

    earth = new THREE.Mesh(
        new THREE.SphereGeometry(1, 64, 64),
        new THREE.MeshPhongMaterial({ map: earthTex, specular: new THREE.Color(0x333333), shininess: 5 })
    );
    scene.add(earth);

    atmosphere = new THREE.Mesh(
        new THREE.SphereGeometry(1.03, 64, 64),
        new THREE.MeshPhongMaterial({ color: 0x0099ff, transparent: true, opacity: 0.15, side: THREE.BackSide })
    );
    scene.add(atmosphere);

    const cloudTex = loader.load('https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/earth_clouds_1024.png');
    clouds = new THREE.Mesh(
        new THREE.SphereGeometry(1.01, 64, 64),
        new THREE.MeshPhongMaterial({ map: cloudTex, transparent: true, opacity: 0.4 })
    );
    scene.add(clouds);

    setupMouseControls(canvas);
    setupControls();
    animate();
    globeInitialized = true;
}

function createStars() {
    const geo = new THREE.BufferGeometry();
    const count = 8000;
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) pos[i] = (Math.random() - 0.5) * 2000;
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    stars = new THREE.Points(geo, new THREE.PointsMaterial({ color: 0xffffff, size: 1.2, sizeAttenuation: true }));
    scene.add(stars);
}

// ===================================
// MOUSE & TOUCH CONTROLS
// ===================================
function setupMouseControls(canvas) {
    canvas.addEventListener('mousedown', (e) => {
        isDragging = true;
        previousMousePosition = { x: e.clientX, y: e.clientY };
    });

    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        const dx = e.clientX - previousMousePosition.x;
        const dy = e.clientY - previousMousePosition.y;
        earth.rotation.y += dx * 0.01;
        earth.rotation.x += dy * 0.01;
        clouds.rotation.y = earth.rotation.y;
        clouds.rotation.x = earth.rotation.x;
        atmosphere.rotation.y = earth.rotation.y;
        atmosphere.rotation.x = earth.rotation.x;
        previousMousePosition = { x: e.clientX, y: e.clientY };
    });

    document.addEventListener('mouseup', () => { isDragging = false; });

    canvas.addEventListener('wheel', (e) => {
        if (scrollProgress >= 0.9) {
            e.preventDefault();
            targetCameraZ += e.deltaY * 0.01;
            targetCameraZ = Math.max(1.5, Math.min(15, targetCameraZ));
        }
    }, { passive: false });

    // Touch
    canvas.addEventListener('touchstart', (e) => {
        isDragging = true;
        previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    });
    document.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        const dx = e.touches[0].clientX - previousMousePosition.x;
        const dy = e.touches[0].clientY - previousMousePosition.y;
        earth.rotation.y += dx * 0.01;
        earth.rotation.x += dy * 0.01;
        clouds.rotation.y = earth.rotation.y;
        clouds.rotation.x = earth.rotation.x;
        atmosphere.rotation.y = earth.rotation.y;
        atmosphere.rotation.x = earth.rotation.x;
        previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    });
    document.addEventListener('touchend', () => { isDragging = false; });
}

// ===================================
// CONTROL BUTTONS
// ===================================
function setupControls() {
    const toggleBtn = document.getElementById('toggleRotation');
    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            autoRotate = !autoRotate;
            toggleBtn.textContent = autoRotate ? 'Pause Rotation' : 'Resume Rotation';
        });
    }
}

// ===================================
// ANIMATION LOOP
// ===================================
function animate() {
    requestAnimationFrame(animate);

    currentCameraZ += (targetCameraZ - currentCameraZ) * 0.1;
    camera.position.z = currentCameraZ;

    if (autoRotate) {
        earth.rotation.y += 0.002;
        clouds.rotation.y += 0.0022;
        atmosphere.rotation.y = earth.rotation.y;
        atmosphere.rotation.x = earth.rotation.x;
    }

    if (stars) stars.rotation.y += 0.0001;
    if (atmosphere) atmosphere.material.opacity = 0.15 + Math.sin(Date.now() * 0.001) * 0.05;

    updateMarkerPositions();
    renderer.render(scene, camera);
}

// ===================================
// POKEMON MARKERS
// ===================================
function createPokemonMarkers() {
    const container = document.getElementById('pokemonMarkers');
    if (!container || !POKEMON) return;

    POKEMON.forEach(pokemon => {
        const marker = document.createElement('div');
        marker.className = 'pokemon-marker';
        if (pokemon.slug === 'celebi') marker.classList.add('marker-large');

        const img = document.createElement('img');
        img.src = `asset/Pokemon/${pokemon.name}.png`;
        img.alt = pokemon.name;
        img.onerror = () => console.warn(`Image missing: ${pokemon.name}`);

        marker.appendChild(img);
        marker.addEventListener('click', () => openPokemonModal(pokemon));
        container.appendChild(marker);

        pokemonMarkers.push({ element: marker, lat: pokemon.lat, lon: pokemon.lon, pokemon });
    });
}

function updateMarkerPositions() {
    if (!earth || !camera || !renderer) return;

    const canvas = renderer.domElement;
    const W = canvas.offsetWidth;
    const H = canvas.offsetHeight;

    pokemonMarkers.forEach(marker => {
        const phi   = (90 - marker.lat) * (Math.PI / 180);
        const theta = (marker.lon + 180) * (Math.PI / 180);
        const r = 1.02;

        const x = -(r * Math.sin(phi) * Math.cos(theta));
        const z =   r * Math.sin(phi) * Math.sin(theta);
        const y =   r * Math.cos(phi);

        const world = new THREE.Vector3(x, y, z);
        world.applyEuler(earth.rotation);

        const dot = world.clone().normalize().dot(camera.position.clone().normalize());
        const isVisible = dot > 0;

        if (isVisible && scrollProgress > 0.4) {
            const screen = world.clone().project(camera);
            const x2D = (screen.x * 0.5 + 0.5) * W;
            const y2D = (-(screen.y * 0.5) + 0.5) * H;

            if (x2D >= 0 && x2D <= W && y2D >= 0 && y2D <= H) {
                marker.element.style.left    = `${x2D}px`;
                marker.element.style.top     = `${y2D}px`;
                marker.element.style.display = 'block';
                marker.element.style.opacity = Math.min(1, (scrollProgress - 0.4) * 1.5);
                return;
            }
        }
        marker.element.style.display = 'none';
    });
}

// ===================================
// POKEMON MODAL
// ===================================
function setupModal() {
    const modal    = document.getElementById('pokemonModal');
    const closeBtn = document.getElementById('modalClose');
    if (!modal || !closeBtn) return;

    closeBtn.addEventListener('click', closePokemonModal);
    modal.addEventListener('click', (e) => { if (e.target === modal) closePokemonModal(); });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) closePokemonModal();
    });
}

function openPokemonModal(pokemon) {
    const modal = document.getElementById('pokemonModal');
    if (!modal) return;
    selectedPokemon = pokemon;

    document.getElementById('modalPokemonImage').src = `asset/Pokemon/${pokemon.name}.png`;
    document.getElementById('modalPokemonName').textContent  = pokemon.name;
    document.getElementById('modalPokemonTitle').textContent = pokemon.title;

    const typesContainer = document.getElementById('modalPokemonTypes');
    typesContainer.innerHTML = '';
    pokemon.types.forEach(type => {
        const span = document.createElement('span');
        span.className = `pokemon-type type-${type.toLowerCase()}`;
        span.textContent = type;
        typesContainer.appendChild(span);
    });

    document.getElementById('modalHeight').textContent      = pokemon.h;
    document.getElementById('modalWeight').textContent      = pokemon.w;
    document.getElementById('modalGameLocation').textContent = pokemon.game;
    document.getElementById('modalRealLocation').textContent = pokemon.place;
    document.getElementById('modalWhy').textContent          = pokemon.why;

    const locImg = document.getElementById('modalLocationImage');
    if (pokemon.locationImage) {
        const folder = getLocationFolder(pokemon.name);
        locImg.src = `asset/World location/${folder}/${pokemon.locationImage}.jpg`;
        locImg.style.display = 'block';
        locImg.onerror = () => {
            locImg.src = `asset/World location/${folder}/${pokemon.locationImage}.JPG`;
            locImg.onerror = () => { locImg.style.display = 'none'; };
        };
    } else {
        locImg.style.display = 'none';
    }

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closePokemonModal() {
    const modal = document.getElementById('pokemonModal');
    if (!modal) return;
    modal.classList.remove('active');
    document.body.style.overflow = '';
    selectedPokemon = null;
}

function getLocationFolder(pokemonName) {
    const map = {
        'Articuno':  'Articuno, Mount Everest, NepalChina',
        'Zapdos':    'Zapdos, Lake Maracaibo, Venezuela',
        'Moltres':   'Moltres, Mount Merapi, Java, Indonesia',
        'Raikou':    'Raikou, Gyeongju, South Korea',
        'Entei':     'Entei, Beijing, China',
        'Suicune':   'Suicune, Lake Geneva, Switzerland',
        'Lugia':     'Lugia, Mariana_Trench',
        'Ho-Oh':     'Ho-Oh, Kyoto, Japan',
        'Celebi':    'Celebi, Amazon rainforest, Brazil',
        'Regirock':  'Regirock, Giza, Egypt',
        'Regice':    'Regice, Greenland',
        'Registeel': 'Registeel, Ngwenya Mine, Eswatini',
        'Latias':    'Latios, Latias, Venice, Italy',
        'Latios':    'Latios, Latias, Venice, Italy',
        'Kyogre':    'kyogre, Point_Nemo',
        'Groudon':   'Groudon, Uluru, Australia',
        'Rayquaza':  'Rayquaza, Chichén Itzá, Mexico',
        'Regigigas': 'Regigas, Easter Island, Chile'
    };
    return map[pokemonName] || pokemonName;
}

// ===================================
// BUILD NEWS PANEL
// ===================================
function buildNewsPanel() {
    const list = document.getElementById('newsList');
    if (!list) return;

    NEWS.forEach(news => {
        const item = document.createElement('div');
        item.className = 'news-item';
        item.innerHTML = `
            <img class="news-thumbnail" src="${news.image}" alt=""
                 onerror="this.style.background='rgba(100,180,255,0.1)';this.removeAttribute('src')">
            <div class="news-text">
                <div class="news-tag">${news.tag}</div>
                <div class="news-headline">${news.headline}</div>
                <div class="news-date">${news.date}</div>
            </div>`;
        item.addEventListener('click', () => openNewsModal(news));
        list.appendChild(item);
    });
}

// ===================================
// NEWS MODAL
// ===================================
function buildNewsModal() {
    const overlay = document.createElement('div');
    overlay.className = 'news-modal-overlay';
    overlay.id = 'newsModal';
    overlay.innerHTML = `
        <div class="news-modal-content">
            <button class="news-modal-close" id="newsModalClose">&times;</button>
            <div class="news-modal-tag"  id="newsModalTag"></div>
            <img class="news-modal-img"  id="newsModalImg" src="" alt="">
            <div class="news-modal-body">
                <div class="news-modal-headline" id="newsModalHeadline"></div>
                <div class="news-modal-date"     id="newsModalDate"></div>
                <div class="news-modal-text"     id="newsModalText"></div>
            </div>
        </div>`;
    document.body.appendChild(overlay);

    document.getElementById('newsModalClose').addEventListener('click', closeNewsModal);
    overlay.addEventListener('click', (e) => { if (e.target === overlay) closeNewsModal(); });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && overlay.classList.contains('active')) closeNewsModal();
    });
}

function openNewsModal(news) {
    document.getElementById('newsModalTag').textContent      = news.tag;
    document.getElementById('newsModalImg').src              = news.image;
    document.getElementById('newsModalHeadline').textContent = news.headline;
    document.getElementById('newsModalDate').textContent     = news.date;
    document.getElementById('newsModalText').textContent     = news.body;
    document.getElementById('newsModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeNewsModal() {
    document.getElementById('newsModal').classList.remove('active');
    document.body.style.overflow = '';
}

// ===================================
// CONTINENT FILTER
// ===================================
function setupContinentFilter() {
    document.querySelectorAll('.continent-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.continent-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            rotateTo(parseFloat(btn.dataset.lat), parseFloat(btn.dataset.lon));
        });
    });
}

function rotateTo(lat, lon) {
    if (!earth) return;

    // We need to find earth.rotation such that the point (lat,lon) faces the camera (+Z axis).
    //
    // In updateMarkerPositions the local sphere position for (lat,lon) is:
    //   phi   = (90 - lat) * PI/180
    //   theta = (lon + 180) * PI/180
    //   x_local = -(sin(phi)*cos(theta))
    //   z_local =   sin(phi)*sin(theta)
    //   y_local =   cos(phi)
    //
    // After earth.rotation.y is applied (Y-axis rotation by ry):
    //   x_world =  x_local*cos(ry) + z_local*sin(ry)
    //   z_world = -x_local*sin(ry) + z_local*cos(ry)
    //
    // We want z_world to be maximised (point faces camera), so:
    //   z_world = -x_local*sin(ry) + z_local*cos(ry)
    // This is maximised when ry = atan2(-x_local, z_local)  (standard "face camera" formula)
    //
    // For X tilt: we want the point to appear vertically centred,
    // so tilt = -lat converted to a small rotation.

    const phi   = (90 - lat) * (Math.PI / 180);
    const theta = (lon + 180) * (Math.PI / 180);

    const xLocal = -(Math.sin(phi) * Math.cos(theta));
    const zLocal =   Math.sin(phi) * Math.sin(theta);

    // Y rotation that brings the point to face +Z
    const targetY = Math.atan2(-xLocal, zLocal);

    // X tilt: positive lat = north = tilt globe down so north comes toward viewer
    const targetX = (lat * (Math.PI / 180)) * 0.5;

    const wasRotating = autoRotate;
    autoRotate = false;

    const startX = earth.rotation.x;
    const startY = earth.rotation.y;
    const duration = 1200;
    const startTime = performance.now();

    function step(now) {
        const t    = Math.min((now - startTime) / duration, 1);
        const ease = t < 0.5 ? 4*t*t*t : 1 - Math.pow(-2*t + 2, 3) / 2;

        // Shortest angular path on Y axis
        let dy = targetY - startY;
        dy = ((dy + Math.PI) % (2 * Math.PI)) - Math.PI;

        earth.rotation.x      = startX + (targetX - startX) * ease;
        earth.rotation.y      = startY + dy * ease;
        clouds.rotation.x     = earth.rotation.x;
        clouds.rotation.y     = earth.rotation.y;
        atmosphere.rotation.x = earth.rotation.x;
        atmosphere.rotation.y = earth.rotation.y;

        if (t < 1) requestAnimationFrame(step);
        else autoRotate = wasRotating;
    }
    requestAnimationFrame(step);
}

// ===================================
// RESIZE
// ===================================
window.addEventListener('resize', () => {
    if (camera && renderer) {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }
});

// ===================================
// QUIZ ENGINE
// ===================================
let quizState = null;

function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function buildQuiz() {
    const container = document.getElementById('quizContainer');
    if (!container || typeof QUIZ === 'undefined') return;
    startNewQuiz();
}

function startNewQuiz() {
    // Pick 3 random questions, shuffle each question's options
    const picked = shuffle(QUIZ).slice(0, 3).map(item => {
        const options = shuffle([item.correct, ...item.wrong]);
        return { ...item, options };
    });

    quizState = {
        questions: picked,
        answers: new Array(picked.length).fill(null), // index chosen
        answered: new Array(picked.length).fill(false)
    };

    renderQuiz();
}

function renderQuiz() {
    const container = document.getElementById('quizContainer');
    if (!container || !quizState) return;

    const html = quizState.questions.map((item, qi) => {
        const optsHtml = item.options.map((opt, oi) => {
            let cls = 'quiz-option';
            if (quizState.answered[qi]) {
                if (opt === item.correct) cls += ' correct';
                else if (oi === quizState.answers[qi]) cls += ' wrong';
                else cls += ' dimmed';
            }
            return `<button class="${cls}" data-q="${qi}" data-o="${oi}"
                        ${quizState.answered[qi] ? 'disabled' : ''}>${opt}</button>`;
        }).join('');

        const explainHtml = quizState.answered[qi]
            ? `<div class="quiz-explain">${item.explain}</div>`
            : '';

        return `
            <div class="quiz-card">
                <div class="quiz-q-number">Question ${qi + 1}</div>
                <div class="quiz-q-text">${item.q}</div>
                <div class="quiz-options">${optsHtml}</div>
                ${explainHtml}
            </div>`;
    }).join('');

    const allAnswered = quizState.answered.every(Boolean);
    const score = quizState.questions.reduce((s, item, qi) => {
        if (!quizState.answered[qi]) return s;
        return s + (item.options[quizState.answers[qi]] === item.correct ? 1 : 0);
    }, 0);

    const footerHtml = allAnswered
        ? `<div class="quiz-result">
               <div class="quiz-score">You scored ${score} / 3</div>
               <button class="quiz-restart" id="quizRestart">Try new questions &#x21BB;</button>
           </div>`
        : `<div class="quiz-result">
               <button class="quiz-restart" id="quizRestart">Shuffle new questions &#x21BB;</button>
           </div>`;

    container.innerHTML = html + footerHtml;

    // Bind option clicks
    container.querySelectorAll('.quiz-option').forEach(btn => {
        btn.addEventListener('click', () => {
            const qi = parseInt(btn.dataset.q);
            const oi = parseInt(btn.dataset.o);
            if (quizState.answered[qi]) return;
            quizState.answers[qi] = oi;
            quizState.answered[qi] = true;
            renderQuiz();
        });
    });

    const restart = document.getElementById('quizRestart');
    if (restart) restart.addEventListener('click', startNewQuiz);
}
