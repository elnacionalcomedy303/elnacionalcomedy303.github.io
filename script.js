document.addEventListener('DOMContentLoaded', () => {

    // --- 1. CONFIGURACIÓN DE COLORES POR SUBPÁGINA (CORREGIDO) ---
    const body = document.body;

    if (body.classList.contains('theme-java')) {
        document.documentElement.style.setProperty('--accent-cyan', '#f89820'); // Naranja Java
    } else if (body.classList.contains('theme-python')) {
        document.documentElement.style.setProperty('--accent-cyan', '#39ff14'); // Verde Python
    } else if (body.classList.contains('theme-sysadmin')) {
        document.documentElement.style.setProperty('--accent-cyan', '#00a2ff'); // Azul Celeste SysAdmin
    } else if (body.classList.contains('theme-hardware')) {
        document.documentElement.style.setProperty('--accent-cyan', '#ff3366'); // Rojo Hardware
    } else if (body.classList.contains('theme-js')) {
        document.documentElement.style.setProperty('--accent-cyan', '#e024c3'); // Magenta JS
    }

    // --- 2. AÑO AUTOMÁTICO EN FOOTER ---
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // --- 3. EFECTO MÁQUINA DE ESCRIBIR ---
    const typewriterElement = document.getElementById('typewriter');
    if (typewriterElement) {
        const phrases = [
            "Desarrollador Back-End (Java & Spring Boot)",
            "Administrador de Sistemas & Tuning LTS",
            "Entusiasta de Hardware & Balance Térmico",
            "Interfaces Dinámicas en JavaScript"
        ];
        let phraseIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function type() {
            const currentPhrase = phrases[phraseIndex];
            
            if (isDeleting) {
                typewriterElement.textContent = currentPhrase.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typewriterElement.textContent = currentPhrase.substring(0, charIndex + 1);
                charIndex++;
            }

            let typeSpeed = isDeleting ? 30 : 60;

            if (!isDeleting && charIndex === currentPhrase.length) {
                typeSpeed = 2000;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
                typeSpeed = 500;
            }

            setTimeout(type, typeSpeed);
        }
        type();
    }

    // --- 4. CANVAS MATRIX / RED DE NODOS CIBERNÉTICA ---
    const canvas = document.getElementById('bg-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        window.addEventListener('resize', () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        });

        const particles = [];
        const particleCount = Math.floor(width / 25);

        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 0.8,
                vy: (Math.random() - 0.5) * 0.8,
                radius: Math.random() * 2 + 1
            });
        }

        function drawParticles() {
            ctx.clearRect(0, 0, width, height);
            
            // Toma el color exacto del tema de la subpágina en cada frame
            const accentColor = getComputedStyle(document.documentElement).getPropertyValue('--accent-cyan').trim() || '#00f3ff';
            
            ctx.fillStyle = accentColor;
            ctx.strokeStyle = accentColor;

            for (let i = 0; i < particles.length; i++) {
                let p = particles[i];
                p.x += p.vx;
                p.y += p.vy;

                if (p.x < 0 || p.x > width) p.vx *= -1;
                if (p.y < 0 || p.y > height) p.vy *= -1;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fill();

                for (let j = i + 1; j < particles.length; j++) {
                    let p2 = particles[j];
                    let dist = Math.hypot(p.x - p2.x, p.y - p2.y);

                    if (dist < 120) {
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.globalAlpha = 1 - (dist / 120);
                        ctx.stroke();
                        ctx.globalAlpha = 1;
                    }
                }
            }

            requestAnimationFrame(drawParticles);
        }
        drawParticles();
    }

    // --- 5. SONIDOS Y BEEP CIBERNÉTICO ---
    function playAudioBeep(freq = 440, duration = 0.1) {
        try {
            const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();

            osc.type = 'sine';
            osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
            gain.gain.setValueAtTime(0.05, audioCtx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.00001, audioCtx.currentTime + duration);

            osc.connect(gain);
            gain.connect(audioCtx.destination);

            osc.start();
            osc.stop(audioCtx.currentTime + duration);
        } catch (e) {
            // Silenciar bloqueo de autoplay
        }
    }

    const glitchTitle = document.getElementById('glitch-target');
    if (glitchTitle) {
        glitchTitle.addEventListener('click', () => {
            playAudioBeep(600, 0.15);
        });
    }

    document.querySelectorAll('.project-card, .skill-tag, .btn-neon').forEach(item => {
        item.addEventListener('mouseenter', () => {
            playAudioBeep(300, 0.05);
        });
    });

});