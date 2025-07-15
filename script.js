// Space events data
const events = [
    {
        id: 1,
        date: 'October 4, 1957',
        title: 'Sputnik 1 Launched',
        desc: 'The Soviet Union launches the first artificial satellite, marking the beginning of the Space Age.',
        category: 'satellite',
        mission: 'Sputnik 1',
        duration: '21 days',
        crew: [],
        achievements: [
            'First artificial satellite to orbit Earth',
            'Transmitted radio signals for 21 days',
            'Proved feasibility of satellite technology'
        ],
        facts: [
            'The name "Sputnik" means "fellow traveler" in Russian',
            'Its radio signals could be heard by amateur radio operators',
            'It burned up in Earth\'s atmosphere after 3 months'
        ],
        imageUrl: 'images/sputnik 1.jpg'
    },
    {
        id: 2,
        date: 'April 12, 1961',
        title: 'Yuri Gagarin in Space',
        desc: 'Soviet cosmonaut Yuri Gagarin becomes the first human to journey into outer space and orbit Earth.',
        category: 'human',
        mission: 'Vostok 1',
        duration: '108 minutes',
        crew: ['Yuri Gagarin'],
        achievements: [
            'First human spaceflight',
            'Complete orbit around Earth',
            'Safe return and landing'
        ],
        facts: [
            'Gagarin was only 27 years old',
            'He ejected from his capsule and parachuted separately to Earth',
            'His famous words were "Poyekhali!" meaning "Let\'s go!"'
        ],
        imageUrl: 'images/yuri.jpg'
    },
    {
        id: 3,
        date: 'July 20, 1969',
        title: 'Apollo 11 Moon Landing',
        desc: 'Neil Armstrong and Buzz Aldrin become the first humans to walk on the Moon during the Apollo 11 mission.',
        category: 'human',
        mission: 'Apollo 11',
        duration: '8 days, 3 hours, 18 minutes',
        crew: ['Neil Armstrong', 'Buzz Aldrin', 'Michael Collins'],
        achievements: [
            'First crewed lunar landing',
            'First moonwalk (21 hours 36 minutes on surface)',
            'Collected 47.5 pounds of lunar samples',
            'Planted American flag on lunar surface'
        ],
        facts: [
            'Armstrong\'s first words: "That\'s one small step for man, one giant leap for mankind"',
            'They left a plaque reading "Here men from the planet Earth first set foot upon the Moon July 1969 A.D."',
            'The computer had less processing power than a modern calculator'
        ],
        imageUrl: 'images/apollo.jpg'
    },
    {
        id: 4,
        date: 'April 12, 1981',
        title: 'First Space Shuttle Launch',
        desc: 'NASA launches Columbia, the first reusable spacecraft, beginning the Space Shuttle era.',
        category: 'technology',
        mission: 'STS-1',
        duration: '2 days, 6 hours, 20 minutes',
        crew: ['John Young', 'Robert Crippen'],
        achievements: [
            'First reusable orbital spacecraft',
            'Successful launch and landing',
            'Proved shuttle concept viability'
        ],
        facts: [
            'Columbia was the first shuttle to fly',
            'The mission was originally planned for 1979',
            'It was the first crewed maiden flight of a new spacecraft type'
        ],
        imageUrl: 'images/first space.jpg'
    },
    {
        id: 5,
        date: 'February 20, 1986',
        title: 'Mir Space Station',
        desc: 'The Soviet Union launches the Mir space station, which would operate for 15 years.',
        category: 'technology',
        mission: 'Mir Space Station',
        duration: '15 years (1986-2001)',
        crew: [],
        achievements: [
            'Longest-operating space station at the time',
            'Hosted international crews',
            'Advanced life support systems',
            'Multiple scientific experiments'
        ],
        facts: [
            'Mir means "peace" or "world" in Russian',
            'It completed over 86,000 orbits',
            'Hosted visitors from 12 different countries'
        ],
        imageUrl: 'images/mir.webp'
    },
    {
        id: 6,
        date: 'April 24, 1990',
        title: 'Hubble Space Telescope',
        desc: 'NASA launches the Hubble Space Telescope, revolutionizing our understanding of the universe.',
        category: 'technology',
        mission: 'Hubble Space Telescope',
        duration: '30+ years (ongoing)',
        crew: [],
        achievements: [
            'Over 1.5 million observations',
            'Discovered dark energy acceleration',
            'Determined age of universe (13.8 billion years)',
            'Captured iconic deep space images'
        ],
        facts: [
            'Named after astronomer Edwin Hubble',
            'Has traveled more than 4 billion miles',
            'Takes about 97 minutes to orbit Earth'
        ],
        imageUrl: 'images/hubble.jpg'
    },
    {
        id: 7,
        date: 'July 4, 1997',
        title: 'Mars Pathfinder Landing',
        desc: 'NASA\'s Mars Pathfinder successfully lands on Mars, deploying the first Mars rover, Sojourner.',
        category: 'planetary',
        mission: 'Mars Pathfinder',
        duration: '85 days (planned: 30 days)',
        crew: [],
        achievements: [
            'First successful U.S. Mars landing since Viking',
            'Deployed first Mars rover',
            'Analyzed Martian rocks and atmosphere',
            'Demonstrated low-cost planetary exploration'
        ],
        facts: [
            'Sojourner was named after Sojourner Truth',
            'The rover was originally designed to last 7 days',
            'It used a novel airbag landing system'
        ],
        imageUrl: 'images/mars path.jpg'
    },
    {
        id: 8,
        date: 'November 20, 1998',
        title: 'International Space Station',
        desc: 'The first module of the International Space Station is launched, beginning construction of humanity\'s orbital outpost.',
        category: 'technology',
        mission: 'International Space Station',
        duration: '25+ years (ongoing)',
        crew: [],
        achievements: [
            'Largest human-made object in space',
            'Continuous human presence since 2000',
            'International partnership of 15 nations',
            'Platform for scientific research'
        ],
        facts: [
            'Orbits Earth every 90 minutes',
            'Has hosted over 260 people from 19 countries',
            'Travels at 17,500 mph'
        ],
        imageUrl: 'images/inter.jpg'
    },
    {
        id: 9,
        date: 'May 30, 2020',
        title: 'SpaceX Crew Dragon',
        desc: 'SpaceX successfully launches NASA astronauts to the ISS, marking the return of human spaceflight from American soil.',
        category: 'human',
        mission: 'Demo-2 / Crew Dragon',
        duration: '64 days',
        crew: ['Douglas Hurley', 'Robert Behnken'],
        achievements: [
            'First commercial crewed spaceflight',
            'Return of U.S. human spaceflight capability',
            'Successful autonomous docking',
            'Reusable spacecraft technology'
        ],
        facts: [
            'First splashdown by U.S. crew since 1975',
            'Features touchscreen controls instead of buttons',
            'The capsule was named "Endeavour"'
        ],
        imageUrl: 'images/spacex.jpg'
    },
    {
        id: 10,
        date: 'February 18, 2021',
        title: 'Perseverance Mars Landing',
        desc: 'NASA\'s Perseverance rover successfully lands on Mars, beginning the search for ancient microbial life.',
        category: 'planetary',
        mission: 'Mars 2020 Perseverance',
        duration: '2+ years (ongoing)',
        crew: [],
        achievements: [
            'Most advanced Mars rover to date',
            'First helicopter flight on another planet (Ingenuity)',
            'Sample collection for future return',
            'Oxygen production on Mars (MOXIE)'
        ],
        facts: [
            'Carries a piece of fabric from the Wright Flyer',
            'Has 23 cameras and 2 microphones',
            'Can produce oxygen from Martian atmosphere'
        ],
        imageUrl: 'images/preservarance mars.jpg'
    }
];

class SpaceTimelineApp {
    constructor() {
        this.events = events;
        this.filteredEvents = events;
        this.currentFilter = 'all';
        this.searchTerm = '';
        
        this.init();
    }
    
    init() {
        this.setupEventListeners();
        this.render();
        this.setupScrollAnimation();
        this.createStars();
        this.createFloatingEmojis();
    }
    
    setupEventListeners() {
        // Search functionality
        const searchBox = document.getElementById('search');
        searchBox.addEventListener('input', (e) => {
            this.searchTerm = e.target.value.toLowerCase();
            this.filterEvents();
        });
        
        // Filter buttons
        const filterBtns = document.querySelectorAll('.filter-btn');
        filterBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                filterBtns.forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                this.currentFilter = e.target.dataset.category;
                this.filterEvents();
            });
        });
        
        // Popup close functionality
        const closeBtn = document.querySelector('.close-btn');
        const popup = document.getElementById('popup');
        
        closeBtn.addEventListener('click', () => {
            popup.classList.remove('show');
        });
        
        popup.addEventListener('click', (e) => {
            if (e.target === popup) {
                popup.classList.remove('show');
            }
        });
        
        // Escape key to close popup
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                popup.classList.remove('show');
            }
        });
    }
    
    filterEvents() {
        this.filteredEvents = this.events.filter(event => {
            const matchesSearch = event.title.toLowerCase().includes(this.searchTerm) ||
                                 event.desc.toLowerCase().includes(this.searchTerm) ||
                                 event.mission.toLowerCase().includes(this.searchTerm);
            
            const matchesCategory = this.currentFilter === 'all' || event.category === this.currentFilter;
            
            return matchesSearch && matchesCategory;
        });
        
        this.render();
    }
    
    render() {
        const timeline = document.getElementById('timeline');
        timeline.innerHTML = '';
        
        if (this.filteredEvents.length === 0) {
            timeline.innerHTML = '<div class="no-results">No events found. Try adjusting your search or filter.</div>';
            return;
        }
        
        this.filteredEvents.forEach((event, index) => {
            const eventEl = this.createEventElement(event, index);
            timeline.appendChild(eventEl);
        });
        
        // Re-setup scroll animation for new elements
        setTimeout(() => {
            this.setupScrollAnimation();
        }, 100);
    }
    
    createEventElement(event, index) {
        const eventDiv = document.createElement('div');
        eventDiv.className = `event ${index % 2 === 0 ? 'left' : 'right'}`;
        
        const crewInfo = event.crew.length > 0 ? 
            `<div class="crew-info">👥 Crew: ${event.crew.join(', ')}</div>` : '';
        
        eventDiv.innerHTML = `
            <div class="event-card" data-id="${event.id}">
                <div class="event-dot"></div>
                <img src="${event.imageUrl}" alt="${event.title}" class="event-card-image">
                <div class="event-date">📅 ${event.date}</div>
                <h3 class="event-title">${event.title}</h3>
                <p class="event-desc">${event.desc}</p>
                <div class="event-meta">
                    <span class="event-category cat-${event.category}">${this.getCategoryEmoji(event.category)} ${event.category.toUpperCase()}</span>
                    <div class="mission-name">Mission: ${event.mission}</div>
                    ${crewInfo}
                </div>
            </div>
        `;
        
        // Add click event for popup
        const card = eventDiv.querySelector('.event-card');
        card.addEventListener('click', () => {
            this.showPopup(event);
        });
        
        return eventDiv;
    }
    
    getCategoryEmoji(category) {
        switch (category) {
            case 'satellite': return '🛰️';
            case 'human': return '👨‍🚀';
            case 'planetary': return '🪐';
            case 'technology': return '⚙️';
            default: return '🚀';
        }
    }
    
    showPopup(event) {
        const popup = document.getElementById('popup');
        const popupHeader = popup.querySelector('.popup-header');
        const title = popup.querySelector('.popup-title');
        const date = popup.querySelector('.popup-date');
        const desc = popup.querySelector('.popup-desc');
        const missionInfo = popup.querySelector('.mission-info');
        const achievements = popup.querySelector('.achievements');
        const facts = popup.querySelector('.facts');
        
        // Set background image for popup header
        popupHeader.style.backgroundImage = `url(${event.imageUrl})`;
        
        title.textContent = event.title;
        date.innerHTML = `📅 ${event.date}`;
        desc.textContent = event.desc;
        
        // Mission info
        const crewInfo = event.crew.length > 0 ? 
            `<div><strong>Crew:</strong> 👥 ${event.crew.join(', ')}</div>` : '';
        
        missionInfo.innerHTML = `
            <div><strong>Mission:</strong> ${event.mission}</div>
            <div><strong>Duration:</strong> ${event.duration}</div>
            ${crewInfo}
        `;
        
        // Achievements
        achievements.innerHTML = '';
        event.achievements.forEach(achievement => {
            const li = document.createElement('li');
            li.textContent = achievement;
            achievements.appendChild(li);
        });
        
        // Facts
        facts.innerHTML = '';
        event.facts.forEach(fact => {
            const li = document.createElement('li');
            li.textContent = fact;
            facts.appendChild(li);
        });
        
        popup.classList.add('show');
    }
    
    setupScrollAnimation() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        
        const eventElements = document.querySelectorAll('.event');
        eventElements.forEach(el => {
            observer.observe(el);
        });
    }
    
    createStars() {
        const starsContainer = document.querySelector('.stars');
        const starCount = 50;
        
        for (let i = 0; i < starCount; i++) {
            const star = document.createElement('div');
            star.style.position = 'absolute';
            star.style.width = Math.random() * 3 + 1 + 'px';
            star.style.height = star.style.width;
            star.style.backgroundColor = 'white';
            star.style.borderRadius = '50%';
            star.style.top = Math.random() * 100 + '%';
            star.style.left = Math.random() * 100 + '%';
            star.style.animation = `twinkle ${Math.random() * 3 + 2}s infinite`;
            star.style.animationDelay = Math.random() * 3 + 's';
            star.style.opacity = Math.random() * 0.8 + 0.2;
            
            starsContainer.appendChild(star);
        }
    }
    
    createFloatingEmojis() {
        const emojis = ['🚀', '🌌', '🌠', '💫', '🛰️', '✨', '🔭', '🧑‍🚀', '⭐', '🌕'];
        const container = document.querySelector('.floating-emojis-container');
        const emojiCount = 30;

        for (let i = 0; i < emojiCount; i++) {
            const emojiEl = document.createElement('span');
            emojiEl.classList.add('floating-emoji');
            emojiEl.textContent = emojis[Math.floor(Math.random() * emojis.length)];

            // Randomize initial position
            emojiEl.style.left = `${Math.random() * 100}vw`;
            emojiEl.style.top = `${100 + Math.random() * 10}vh`;

            // Randomize size
            const size = Math.random() * 1.5 + 0.8;
            emojiEl.style.fontSize = `${size}em`;

            // Randomize animation duration and delay
            const duration = Math.random() * 10 + 10;
            const delay = Math.random() * 15;
            emojiEl.style.animationDuration = `${duration}s`;
            emojiEl.style.animationDelay = `${delay}s`;

            // Randomize horizontal float
            emojiEl.style.setProperty('--float-x', `${Math.random() * 100 - 50}px`);
            emojiEl.style.setProperty('--float-scale', `${Math.random() * 0.5 + 0.8}`);

            container.appendChild(emojiEl);
        }
    }
}

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    new SpaceTimelineApp();
});

// Smooth scrolling for anchor links
document.addEventListener('click', (e) => {
    if (e.target.tagName === 'A' && e.target.getAttribute('href').startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(e.target.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    }
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.hero');
    const speed = scrolled * 0.5;
    
    if (parallax) {
        parallax.style.transform = `translateY(${speed}px)`;
    }
});

// Fade in effect on page load
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});