document.addEventListener('DOMContentLoaded', () => {
    
    const techSelect = document.getElementById('tech-select');
    const flutterRoadmap = document.getElementById('roadmap-flutter');
    const rnRoadmap = document.getElementById('roadmap-react-native');
    const logoTech = document.getElementById('logo-tech');
    const body = document.body;
    
    // Header/Hero Dynamic Content
    const heroTitle = document.querySelector('.glitch-text');
    const heroSubtitle = document.querySelector('.subtitle');
    const heroStats = document.querySelector('.hero-stats');

    // Hero Content Data
    const content = {
        flutter: {
            title: "MASTER THE FUTURE",
            subtitle: "The Ultimate Handbook to Becoming a <span class='highlight'>Flutter Architect</span> in 2026.",
            logo: "Flutter",
            stats: `
                <div class="stat-item fade-in-up" style="animation-delay: 0.2s;">
                    <span class="stat-number">Dart 4.0</span>
                    <span class="stat-label">Ready</span>
                </div>
                <div class="stat-item fade-in-up" style="animation-delay: 0.4s;">
                    <span class="stat-number">Impeller</span>
                    <span class="stat-label">Graphics</span>
                </div>
                <div class="stat-item fade-in-up" style="animation-delay: 0.6s;">
                    <span class="stat-number">AI Agents</span>
                    <span class="stat-label">Integrated</span>
                </div>
            `
        },
        'react-native': {
            title: "UNIFY THE PLATFORMS",
            subtitle: "The Definitive Path to <span class='highlight'>React Native</span> Mastery in 2026.",
            logo: "React Native",
            stats: `
                <div class="stat-item fade-in-up" style="animation-delay: 0.2s;">
                    <span class="stat-number">Fabric</span>
                    <span class="stat-label">Renderer</span>
                </div>
                <div class="stat-item fade-in-up" style="animation-delay: 0.4s;">
                    <span class="stat-number">Turbo</span>
                    <span class="stat-label">Modules</span>
                </div>
                <div class="stat-item fade-in-up" style="animation-delay: 0.6s;">
                    <span class="stat-number">Expo 52</span>
                    <span class="stat-label">Ecosystem</span>
                </div>
            `
        }
    };

    // Intersection Observer for Scroll Animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, observerOptions);

    function observeElements(container) {
        const hiddenElements = container.querySelectorAll('.hidden');
        hiddenElements.forEach((el) => {
            el.classList.remove('show'); // Reset animation
            scrollObserver.observe(el);
        });
    }

    // Initial Observation (Flutter)
    observeElements(flutterRoadmap);

    // Switcher Logic
    techSelect.addEventListener('change', (e) => {
        const val = e.target.value;
        const currentData = content[val];

        // 1. Theme Toggle
        if (val === 'react-native') {
            body.classList.add('react-native-theme');
            flutterRoadmap.style.display = 'none';
            rnRoadmap.style.display = 'block';
            observeElements(rnRoadmap); // Re-trigger animations
        } else {
            body.classList.remove('react-native-theme');
            rnRoadmap.style.display = 'none';
            flutterRoadmap.style.display = 'block';
            observeElements(flutterRoadmap);
        }

        // 2. Content Updates
        heroTitle.setAttribute('data-text', currentData.title);
        heroTitle.textContent = currentData.title;
        heroSubtitle.innerHTML = currentData.subtitle;
        logoTech.textContent = currentData.logo;
        heroStats.innerHTML = currentData.stats;
    });

    // 3D Parallax Effect for Hero
    const heroVisual = document.querySelector('.flutter-logo-3d');
    if(heroVisual) {
        document.addEventListener('mousemove', (e) => {
            const x = (window.innerWidth - e.pageX * 2) / 100;
            const y = (window.innerHeight - e.pageY * 2) / 100;
            
            heroVisual.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
        });
    }

});
