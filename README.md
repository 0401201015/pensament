<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Para Meu Príncipe ❤️</title>
    <style>
        body {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            font-family: 'Comic Sans MS', cursive, sans-serif;
            background: linear-gradient(45deg, #ff9a9e 0%, #fecfef 50%, #fecfef 100%);
            min-height: 100vh;
            overflow-x: hidden;
        }

        .container {
            max-width: 800px;
            margin: 0 auto;
            padding: 2rem;
            text-align: center;
        }

        .header {
            margin-bottom: 3rem;
            animation: bounceIn 1s ease-out;
        }

        .title {
            font-size: 2.5rem;
            color: #ff6b9d;
            margin-bottom: 1rem;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
        }

        .subtitle {
            font-size: 1.2rem;
            color: #ff8fab;
            margin-bottom: 2rem;
        }

        .games-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            margin-bottom: 3rem;
        }

        .game-card {
            background: rgba(255, 255, 255, 0.9);
            border-radius: 20px;
            padding: 2rem;
            box-shadow: 0 10px 30px rgba(255, 107, 157, 0.3);
            transition: all 0.3s ease;
            border: 3px solid #ffb3d1;
        }

        .game-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 40px rgba(255, 107, 157, 0.4);
        }

        .game-title {
            font-size: 1.5rem;
            color: #ff6b9d;
            margin-bottom: 1rem;
            font-weight: bold;
        }

        /* Heart Filling Game */
        .heart-container {
            position: relative;
            margin: 2rem auto;
            width: 200px;
            height: 180px;
        }

        .heart {
            width: 200px;
            height: 180px;
            position: relative;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .heart::before,
        .heart::after {
            content: '';
            width: 100px;
            height: 160px;
            position: absolute;
            left: 100px;
            transform: rotate(-45deg);
            background: #ffb3d1;
            border-radius: 100px 100px 0 0;
            transform-origin: 0 100%;
            transition: all 0.3s ease;
        }

        .heart::after {
            left: 0;
            transform: rotate(45deg);
            transform-origin: 100% 100%;
        }

        .heart.filled::before,
        .heart.filled::after {
            background: #ff1744;
            animation: heartbeat 1s ease-in-out infinite;
        }

        .heart-progress {
            position: absolute;
            bottom: -30px;
            left: 50%;
            transform: translateX(-50%);
            font-size: 1.2rem;
            color: #ff6b9d;
            font-weight: bold;
        }

        /* Love Messages */
        .message-box {
            background: linear-gradient(45deg, #ff9a9e, #fad0c4);
            border-radius: 15px;
            padding: 1.5rem;
            margin: 1rem 0;
            color: white;
            font-size: 1.1rem;
            min-height: 60px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .message-box:hover {
            transform: scale(1.05);
        }

        /* Kiss Counter */
        .kiss-counter {
            font-size: 3rem;
            margin: 1rem 0;
        }

        .kiss-btn {
            background: linear-gradient(45deg, #ff6b9d, #ff8fab);
            border: none;
            border-radius: 50px;
            padding: 1rem 2rem;
            font-size: 2rem;
            color: white;
            cursor: pointer;
            transition: all 0.3s ease;
            margin: 1rem;
        }

        .kiss-btn:hover {
            transform: scale(1.1);
            box-shadow: 0 10px 25px rgba(255, 107, 157, 0.4);
        }

        /* Love Meter */
        .love-meter {
            width: 100%;
            height: 30px;
            background: #ffb3d1;
            border-radius: 15px;
            overflow: hidden;
            margin: 1rem 0;
        }

        .love-fill {
            height: 100%;
            background: linear-gradient(45deg, #ff1744, #ff6b9d);
            width: 0%;
            transition: width 2s ease;
            border-radius: 15px;
        }

        /* Floating Hearts */
        .floating-hearts {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 1000;
        }

        .floating-heart {
            position: absolute;
            font-size: 2rem;
            color: #ff1744;
            animation: floatUp 3s ease-out forwards;
        }

        /* Surprise Button */
        .surprise-btn {
            background: linear-gradient(45deg, #ffd89b, #19547b);
            border: none;
            border-radius: 25px;
            padding: 1rem 2rem;
            font-size: 1.2rem;
            color: white;
            cursor: pointer;
            transition: all 0.3s ease;
            margin: 1rem;
            font-weight: bold;
        }

        .surprise-btn:hover {
            transform: rotate(5deg) scale(1.05);
        }

        .surprise-message {
            background: rgba(255, 255, 255, 0.95);
            border-radius: 20px;
            padding: 2rem;
            margin: 1rem 0;
            font-size: 1.3rem;
            color: #ff6b9d;
            display: none;
            animation: fadeIn 1s ease-out;
        }

        /* Animations */
        @keyframes bounceIn {
            0% {
                opacity: 0;
                transform: scale(0.3);
            }
            50% {
                opacity: 1;
                transform: scale(1.05);
            }
            70% {
                transform: scale(0.9);
            }
            100% {
                opacity: 1;
                transform: scale(1);
            }
        }

        @keyframes heartbeat {
            0%, 100% {
                transform: scale(1);
            }
            50% {
                transform: scale(1.1);
            }
        }

        @keyframes floatUp {
            0% {
                opacity: 1;
                transform: translateY(0) rotate(0deg);
            }
            100% {
                opacity: 0;
                transform: translateY(-200px) rotate(180deg);
            }
        }

        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @media (max-width: 768px) {
            .container {
                padding: 1rem;
            }
            
            .title {
                font-size: 2rem;
            }
            
            .games-grid {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <div class="floating-hearts" id="floatingHearts"></div>

    <div class="container">
        <header class="header">
            <h1 class="title">💕 Para Meu Príncipe 💕</h1>
            <p class="subtitle">Joguinhos de amor só para nós dois! 👑❤️</p>
        </header>

        <div class="games-grid">
            <!-- Heart Filling Game -->
            <div class="game-card">
                <h3 class="game-title">💖 Preencha Nosso Coração</h3>
                <p>Clique no coração para enchê-lo de amor!</p>
                <div class="heart-container">
                    <div class="heart" id="heart" onclick="fillHeart()"></div>
                    <div class="heart-progress" id="heartProgress">0% ❤️</div>
                </div>
            </div>

            <!-- Love Messages -->
            <div class="game-card">
                <h3 class="game-title">💌 Mensagens de Amor</h3>
                <p>Clique para receber uma mensagem fofa!</p>
                <div class="message-box" id="messageBox" onclick="showLoveMessage()">
                    Clique aqui para uma surpresa! 💕
                </div>
            </div>

            <!-- Kiss Counter -->
            <div class="game-card">
                <h3 class="game-title">💋 Contador de Beijinhos</h3>
                <p>Quantos beijinhos você me deu hoje?</p>
                <div class="kiss-counter" id="kissCounter">0 💋</div>
                <button class="kiss-btn" onclick="addKiss()">💋</button>
            </div>

            <!-- Love Meter -->
            <div class="game-card">
                <h3 class="game-title">💕 Medidor de Amor</h3>
                <p>Clique para medir nosso amor!</p>
                <div class="love-meter">
                    <div class="love-fill" id="loveFill"></div>
                </div>
                <button class="surprise-btn" onclick="measureLove()">Medir Amor! 📏💕</button>
                <div id="loveResult"></div>
            </div>

            <!-- Surprise Messages -->
            <div class="game-card">
                <h3 class="game-title">🎁 Surpresa Especial</h3>
                <p>Uma mensagem especial só para você!</p>
                <button class="surprise-btn" onclick="showSurprise()">Abrir Surpresa! 🎁</button>
                <div class="surprise-message" id="surpriseMessage">
                    Eu te amo mais que chocolate, mais que pizza, mais que dormir até tarde no domingo! 
                    Você é meu príncipe encantado e meu melhor amigo. Obrigada por fazer meus dias mais felizes! 
                    💕👑✨
                </div>
            </div>

            <!-- Virtual Hug -->
            <div class="game-card">
                <h3 class="game-title"> Abraço Virtual</h3>
                <p>Precisa de um abraço? Eu tenho um para você!</p>
                <button class="kiss-btn" onclick="giveHug()" style="background: linear-gradient(45deg, #a8edea, #fed6e3);">
                     Abraço!
                </button>
                <div id="hugMessage"></div>
            </div>
        </div>
    </div>

    <script>
        let heartProgress = 0;
        let kissCount = 0;
        let loveMessages = [
            "Eu te amo mais que palavras podem expressar! 💕",
            "Você é meu príncipe encantado! 👑❤️",
            "Meu coração bate mais forte quando penso em você! 💓",
            "Você faz meus dias mais brilhantes! ☀️💕",
            "Sou a pessoa mais sortuda do mundo por ter você! 🍀❤️",
            "Você é meu lugar favorito no mundo! 🏠💕",
            "Cada dia com você é uma nova aventura! 🌟❤️",
            "Você é meu sonho que se tornou realidade! ✨💕",
            "Meu amor por você cresce a cada segundo! 📈❤️",
            "Você é minha pessoa favorita no universo! 🌌💕"
        ];

        function fillHeart() {
            heartProgress += 10;
            if (heartProgress > 100) heartProgress = 100;
            
            document.getElementById('heartProgress').textContent = heartProgress + '% ❤️';
            
            if (heartProgress === 100) {
                document.getElementById('heart').classList.add('filled');
                createFloatingHearts();
                setTimeout(() => {
                    alert('💕 Nosso coração está completamente cheio de amor! 💕');
                }, 500);
            }
        }

        function showLoveMessage() {
            const randomMessage = loveMessages[Math.floor(Math.random() * loveMessages.length)];
            document.getElementById('messageBox').textContent = randomMessage;
            createFloatingHearts();
        }

        function addKiss() {
            kissCount++;
            document.getElementById('kissCounter').textContent = kissCount + ' 💋';
            createFloatingHearts();
            
            if (kissCount === 10) {
                alert('🎉 10 beijinhos! Você merece um abraço extra! 🤗');
            } else if (kissCount === 50) {
                alert('🌟 50 beijinhos! Você é incrível! 🌟');
            } else if (kissCount === 100) {
                alert('👑 100 beijinhos! Você é oficialmente o rei dos beijinhos! 👑');
            }
        }

        function measureLove() {
            const loveLevel = Math.floor(Math.random() * 21) + 80; // 80-100%
            document.getElementById('loveFill').style.width = loveLevel + '%';
            
            setTimeout(() => {
                const resultDiv = document.getElementById('loveResult');
                resultDiv.innerHTML = `<div class="message-box" style="margin-top: 1rem;">
                    Nosso amor está em ${loveLevel}%! 💕 ${loveLevel > 95 ? 'AMOR INFINITO! 🚀' : 'SUPER FORTE! 💪'}
                </div>`;
                createFloatingHearts();
            }, 2000);
        }

        function showSurprise() {
            const surpriseMsg = document.getElementById('surpriseMessage');
            surpriseMsg.style.display = 'block';
            createFloatingHearts();
            
            // Change background temporarily
            document.body.style.background = 'linear-gradient(45deg, #ff9a9e 0%, #fad0c4 50%, #ffd1ff 100%)';
            setTimeout(() => {
                document.body.style.background = 'linear-gradient(45deg, #ff9a9e 0%, #fecfef 50%, #fecfef 100%)';
            }, 3000);
        }

        function giveHug() {
            const hugMessages = [
                '🤗 *Abraço apertadinho* Te amo muito! 💕',
                '🤗 *Abraço quentinho* Você é especial! ✨',
                '🤗 *Abraço carinhoso* Sempre aqui para você! 💖',
                '🤗 *Abraço gigante* Meu príncipe lindo! 👑'
            ];
            
            const randomHug = hugMessages[Math.floor(Math.random() * hugMessages.length)];
            document.getElementById('hugMessage').innerHTML = `<div class="message-box" style="margin-top: 1rem;">${randomHug}</div>`;
            createFloatingHearts();
        }

        function createFloatingHearts() {
            const heartsContainer = document.getElementById('floatingHearts');
            const hearts = ['💕', '💖', '💗', '💓', '💝', '❤️', '💜', '💙'];
            
            for (let i = 0; i < 5; i++) {
                setTimeout(() => {
                    const heart = document.createElement('div');
                    heart.className = 'floating-heart';
                    heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
                    heart.style.left = Math.random() * 100 + '%';
                    heart.style.animationDelay = Math.random() * 1 + 's';
                    
                    heartsContainer.appendChild(heart);
                    
                    setTimeout(() => {
                        heart.remove();
                    }, 3000);
                }, i * 200);
            }
        }

        // Auto-create floating hearts periodically
        setInterval(createFloatingHearts, 10000);

        // Welcome message
        setTimeout(() => {
            alert('💕 Bem-vindo ao nosso cantinho especial, meu príncipe! 👑✨');
        }, 1000);
    </script>
<script>(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'98770ada6436cdc3',t:'MTc1OTI3MDE0My4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();</script></body>
</html>
