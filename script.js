/**
 * Akshara D Portfolio - Premium Dynamic Controller Matrix
 * Framework Strategy: Vanilla EcmaScript native modules
 */

document.addEventListener('DOMContentLoaded', () => {
    initializePreloader();
    initializeCustomCursor();
    initializeNeuralNetworkBackground();
    initializeTextRotator();
    initializeThemeColorExtractor();
    initializeScrollRevealEngine();
    initializeMagneticButtons();
    initializeCardTiltEffects();
    initializeStatsCounter();
    initializeMobileMenu();
});

/* Cinematic Preloader Handler */
function initializePreloader() {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        window.addEventListener('load', () => {
            setTimeout(() => {
                preloader.style.opacity = '0';
                preloader.style.visibility = 'hidden';
            }, 1000);
        });
        // Fallback safety if window load trigger completes early
        setTimeout(() => {
            preloader.style.opacity = '0';
            preloader.style.visibility = 'hidden';
        }, 2500);
    }
}

/* Interactive Cursor Tracking System */
function initializeCustomCursor() {
    const cursor = document.getElementById('customCursor');
    const spotlight = document.getElementById('cursorSpotlight');
    
    if (!cursor || !spotlight) return;

    window.addEventListener('mousemove', (e) => {
        const posX = e.clientX;
        const posY = e.clientY;

        // Custom high-performance micro-position interpolation using requestAnimationFrame syntax wrapper
        cursor.style.left = `${posX}px`;
        cursor.style.top = `${posY}px`;
        
        spotlight.style.left = `${posX}px`;
        spotlight.style.top = `${posY}px`;
    });

    // Hover Scaling Animations
    const actionableElements = document.querySelectorAll('a, button, .glass-card, .upload-btn-label');
    actionableElements.forEach(elem => {
        elem.addEventListener('mouseenter', () => {
            cursor.style.width = '24px';
            cursor.style.height = '24px';
        });
        elem.addEventListener('mouseleave', () => {
            cursor.style.width = '8px';
            cursor.style.height = '8px';
        });
    });
}

/* HTML5 Canvas Neural Network Generative Background Overlay */
function initializeNeuralNetworkBackground() {
    const canvas = document.getElementById('neuralCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    let dots = [];
    const dotsCount = 75;
    const connectionRadius = 135;

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Node generator model object structure
    for (let i = 0; i < dotsCount; i++) {
        dots.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.6,
            vy: (Math.random() - 0.5) * 0.6,
            radius: Math.random() * 2 + 1
        });
    }

    function animateNetwork() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Dynamic variable updates matching active extracted system accent profile
        const computedStyle = getComputedStyle(document.documentElement);
        const accentColor = computedStyle.getPropertyValue('--primary').trim();
        
        dots.forEach(dot => {
            dot.x += dot.vx;
            dot.y += dot.vy;

            // Boundary collision handling wrap rules
            if (dot.x < 0 || dot.x > canvas.width) dot.vx *= -1;
            if (dot.y < 0 || dot.y > canvas.height) dot.vy *= -1;

            ctx.beginPath();
            ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
            ctx.fill();
        });

        // Connection rules matching adjacency conditions
        for (let i = 0; i < dots.length; i++) {
            for (let j = i + 1; j < dots.length; j++) {
                const dist = Math.hypot(dots[i].x - dots[j].x, dots[i].y - dots[j].y);
                if (dist < connectionRadius) {
                    const opacity = (1 - dist / connectionRadius) * 0.12;
                    ctx.beginPath();
                    ctx.moveTo(dots[i].x, dots[i].y);
                    ctx.lineTo(dots[j].x, dots[j].y);
                    ctx.strokeStyle = accentColor.includes('#') ? hexToRgba(accentColor, opacity) : `rgba(255,51,51,${opacity})`;
                    ctx.lineWidth = 0.6;
                    ctx.stroke();
                }
            }
        }
        requestAnimationFrame(animateNetwork);
    }

    function hexToRgba(hex, alpha) {
        hex = hex.replace('#', '');
        if(hex.length === 3) hex = hex.split('').map(s => s+s).join('');
        const r = parseInt(hex.substring(0,2), 16);
        const g = parseInt(hex.substring(2,4), 16);
        const b = parseInt(hex.substring(4,6), 16);
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }

    animateNetwork();
}

/* Apple-style Typewriter Content Rotation Architecture */
function initializeTextRotator() {
    const TxtRotate = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtRotate.prototype.tick = function() {
        const i = this.loopNum % this.toRotate.length;
        const fullTxt = this.toRotate[i];

        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        let delta = 200 - Math.random() * 100;
        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.loopNum++;
            delta = 500;
        }

        setTimeout(() => { this.tick(); }, delta);
    };

    const elements = document.getElementsByClassName('txt-rotate');
    for (let i=0; i<elements.length; i++) {
        const toRotate = elements[i].getAttribute('data-rotate');
        const period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtRotate(elements[i], JSON.parse(toRotate), period);
        }
    }
}

/* Image Color Extraction and Theming Engine Matrix */
function initializeThemeColorExtractor() {
    const imageInput = document.getElementById('imageUploadInput');
    const profileImage = document.getElementById('profileImage');

    if (!imageInput || !profileImage) return;

    imageInput.addEventListener('change', function(e) {
        if (this.files && this.files[0]) {
            const reader = new FileReader();
            reader.onload = function(event) {
                profileImage.src = event.target.result;
                // Wait for async rendering cycle to map colors cleanly
                profileImage.onload = function() {
                    extractDominantColor(profileImage);
                };
            };
            reader.readAsDataURL(this.files[0]);
        }
    });

    function extractDominantColor(imgElement) {
        try {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            canvas.width = 50;
            canvas.height = 50; // Downscale layout sampling parameters for fast processing
            
            ctx.drawImage(imgElement, 0, 0, 50, 50);
            const imgData = ctx.getImageData(0, 0, 50, 50).data;
            
            let rSum = 0, gSum = 0, bSum = 0, count = 0;
            
            // Loop step iteration parameters skipping high-frequency low-value alpha fields
            for (let i = 0; i < imgData.length; i += 4) {
                const r = imgData[i];
                const g = imgData[i+1];
                const b = imgData[i+2];
                const a = imgData[i+3];
                
                if (a > 200) { // filter out background transparency elements
                    // Ignore absolute black/white saturation boundaries
                    if (!((r > 240 && g > 240 && b > 240) || (r < 25 && g < 25 && b < 25))) {
                        rSum += r;
                        gSum += g;
                        bSum += b;
                        count++;
                    }
                }
            }
            
            let dominantHex = "#ff3333"; // Luxury Red baseline fallback state
            if (count > 0) {
                const rAvg = Math.round(rSum / count);
                const gAvg = Math.round(gSum / count);
                const bAvg = Math.round(bSum / count);
                dominantHex = rgbToHex(rAvg, gAvg, bAvg);
            }
            
            applyDynamicTheme(dominantHex);
        } catch (error) {
            console.warn("Local security sandbox restrictions prevented pixel extraction; implementing premium luxury red theme mode.", error);
            applyDynamicTheme("#ff3333");
        }
    }

    function rgbToHex(r, g, b) {
        return "#" + [r, g, b].map(x => {
            const hex = x.toString(16);
            return hex.length === 1 ? "0" + hex : hex;
        }).join("");
    }

    function applyDynamicTheme(primaryHex) {
        document.documentElement.style.setProperty('--primary', primaryHex);
        document.documentElement.style.setProperty('--primary-glow', `${primaryHex}59`); // Maps alpha values to hex string
        
        // Formulating darker contextual variations for ambient depths manually
        document.documentElement.style.setProperty('--primary-dark', rgbaAdjustBrightness(primaryHex, 0.8));
        document.documentElement.style.setProperty('--border-glass-glow', `${primaryHex}33`);
    }

    function rgbaAdjustBrightness(hex, percent) {
        hex = hex.replace('#', '');
        let r = parseInt(hex.substring(0,2), 16);
        let g = parseInt(hex.substring(2,4), 16);
        let b = parseInt(hex.substring(4,6), 16);

        r = Math.min(255, Math.max(0, Math.round(r * percent)));
        g = Math.min(255, Math.max(0, Math.round(g * percent)));
        b = Math.min(255, Math.max(0, Math.round(b * percent)));

        return `#${r.toString(16).padStart(2,'0')}${g.toString(16).padStart(2,'0')}${b.toString(16).padStart(2,'0')}`;
    }
}

/* Intersection Observer Scroll-triggered Reveal Animations Engine */
function initializeScrollRevealEngine() {
    const sections = document.querySelectorAll('.scroll-reveal');
    
    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                
                // Trigger sub-animations inside sections automatically when target view shifts
                const fillBars = entry.target.querySelectorAll('.skill-bar-fill');
                fillBars.forEach(bar => bar.style.transform = 'scaleX(1)');
                
                observer.unobserve(entry.target);
            }
        });
    };

    const options = {
        root: null,
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver(revealCallback, options);
    sections.forEach(sec => observer.observe(sec));
}

/* Magnetic Premium Microinteractions Controller */
function initializeMagneticButtons() {
    const magneticBtns = document.querySelectorAll('.magnetic-button');
    
    magneticBtns.forEach(btn => {
        btn.addEventListener('mousemove', function(e) {
            const position = this.getBoundingClientRect();
            const x = e.clientX - position.left - position.width / 2;
            const y = e.clientY - position.top - position.height / 2;
            
            // Translate the target elements slightly towards user cursor vector weights
            this.style.transform = `translate(${x * 0.35}px, ${y * 0.35}px)`;
            const internalText = this.querySelector('.btn-text');
            if (internalText) {
                internalText.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
            }
        });

        btn.addEventListener('mouseleave', function() {
            this.style.transform = 'translate(0px, 0px)';
            const internalText = this.querySelector('.btn-text');
            if (internalText) {
                internalText.style.transform = 'translate(0px, 0px)';
            }
        });
    });
}

/* Luxury 3D Card Tilt Effect Layout Calculations */
function initializeCardTiltEffects() {
    const targets = document.querySelectorAll('.tilt-target');
    
    targets.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const width = this.offsetWidth;
            const height = this.offsetHeight;
            const rect = this.getBoundingClientRect();
            const mouseX = e.clientX - rect.left - width/2;
            const mouseY = e.clientY - rect.top - height/2;
            
            // Limit coordinate tilt spectrum transformations to keep presentation professional
            const rX = (mouseY / height) * -12; 
            const rY = (mouseX / width) * 12;
            
            this.style.transform = `perspective(1000px) rotateX(${rX}deg) rotateY(${rY}deg) translateY(-4px)`;
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
        });
    });
}

/* Interpolated Real-time Global Stats Counter Framework */
function initializeStatsCounter() {
    const statNums = document.querySelectorAll('.stat-num');
    
    const countStats = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const targetValue = parseFloat(target.getAttribute('data-target'));
                const isFloat = targetValue % 1 !== 0;
                let startValue = 0;
                const duration = 2000; // milliseconds scale parameters
                const startTime = performance.now();

                function step(currentTime) {
                    const elapsed = currentTime - startTime;
                    const progress = Math.min(elapsed / duration, 1);
                    
                    // Ease out cubic model formula implementation
                    const easeProgress = 1 - Math.pow(1 - progress, 3);
                    const currentVal = startValue + easeProgress * (targetValue - startValue);
                    
                    target.innerText = isFloat ? currentVal.toFixed(1) : Math.floor(currentVal);

                    if (progress < 1) {
                        requestAnimationFrame(step);
                    } else {
                        target.innerText = targetValue;
                    }
                }

                requestAnimationFrame(step);
                observer.unobserve(target);
            }
        });
    };

    const statsObserver = new IntersectionObserver(countStats, { threshold: 0.5 });
    statNums.forEach(num => statsObserver.observe(num));
}

/* Mobile Responsive Adaptive Menu Drawer System */
function initializeMobileMenu() {
    const toggle = document.getElementById('mobileToggle');
    const menu = document.getElementById('navMenu');
    const links = document.querySelectorAll('.nav-link');

    if (!toggle || !menu) return;

    toggle.addEventListener('click', () => {
        menu.classList.toggle('active');
        toggle.classList.toggle('active');
    });

    links.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('active');
            toggle.classList.remove('active');
            
            // Adjust header tracking configurations locally
            links.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });
}