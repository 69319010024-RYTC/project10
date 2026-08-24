// --- Pastel Spooky Match Game Logic ---

// 1. Unique Spooky-Cute Monster SVG Definitions (12 Types)
const MONSTERS = [
  {
    name: 'ghost',
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 50 C20 25, 80 25, 80 50 C80 65, 85 80, 80 85 C75 90, 70 80, 65 85 C60 90, 55 80, 50 85 C45 90, 40 80, 35 85 C30 90, 25 80, 20 85 C15 80, 20 65, 20 50 Z" fill="#E8F8F5" stroke="#8C7CF0" stroke-width="3" />
      <circle cx="40" cy="45" r="5.5" fill="#8C7CF0" />
      <circle cx="60" cy="45" r="5.5" fill="#8C7CF0" />
      <ellipse cx="50" cy="58" rx="4" ry="7" fill="#8C7CF0" />
      <ellipse cx="32" cy="50" rx="4" ry="2.5" fill="#FFB7B2" opacity="0.6" />
      <ellipse cx="68" cy="50" rx="4" ry="2.5" fill="#FFB7B2" opacity="0.6" />
    </svg>`
  },
  {
    name: 'pumpkin',
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 25 Q53 10 60 12 Q57 25 50 25 Z" fill="#5ED3B3" stroke="#4E4558" stroke-width="2" />
      <ellipse cx="50" cy="55" rx="35" ry="30" fill="#FFB7B2" stroke="#FF8DA1" stroke-width="3" />
      <ellipse cx="50" cy="55" rx="23" ry="30" fill="#FFC6FF" stroke="#FF8DA1" stroke-width="2" />
      <ellipse cx="50" cy="55" rx="10" ry="30" fill="#FFE5EC" stroke="#FF8DA1" stroke-width="1.5" />
      <polygon points="35,48 45,48 40,38" fill="#8C7CF0" />
      <polygon points="55,48 65,48 60,38" fill="#8C7CF0" />
      <polygon points="48,56 52,56 50,52" fill="#8C7CF0" />
      <path d="M32 62 Q50 75 68 62 L63 60 L57 64 L50 59 L43 64 L37 60 Z" fill="#8C7CF0" />
    </svg>`
  },
  {
    name: 'bat',
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 50 Q30 30 15 45 Q25 60 35 55 Q40 65 50 60 Q60 65 65 55 Q75 60 85 45 Q70 30 50 50 Z" fill="#D6C7FF" stroke="#8C7CF0" stroke-width="3" />
      <circle cx="50" cy="50" r="18" fill="#BDB2FF" stroke="#8C7CF0" stroke-width="2.5" />
      <polygon points="38,36 34,20 46,33" fill="#BDB2FF" stroke="#8C7CF0" stroke-width="2" />
      <polygon points="62,36 66,20 54,33" fill="#BDB2FF" stroke="#8C7CF0" stroke-width="2" />
      <polygon points="38,32 36,23 43,30" fill="#FFD1DC" />
      <polygon points="62,32 64,23 57,30" fill="#FFD1DC" />
      <circle cx="44" cy="46" r="3" fill="#4E4558" />
      <circle cx="56" cy="46" r="3" fill="#4E4558" />
      <path d="M46 54 Q50 58 54 54" fill="none" stroke="#4E4558" stroke-width="2" stroke-linecap="round" />
      <polygon points="46,54 48,54 47,57" fill="white" />
      <polygon points="54,54 52,54 53,57" fill="white" />
    </svg>`
  },
  {
    name: 'vampire',
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 75 Q50 65 80 75 L85 45 Q50 55 15 45 Z" fill="#FF8DA1" stroke="#4E4558" stroke-width="2.5" />
      <circle cx="50" cy="50" r="22" fill="#E8F8F5" stroke="#5ED3B3" stroke-width="2.5" />
      <path d="M29 45 C35 30, 65 30, 71 45 C71 35, 60 28, 50 35 C40 28, 29 35, 29 45 Z" fill="#8C7CF0" stroke="#8C7CF0" stroke-width="2" />
      <circle cx="43" cy="48" r="3" fill="#4E4558" />
      <circle cx="57" cy="48" r="3" fill="#4E4558" />
      <circle cx="36" cy="54" r="3.5" fill="#FFB7B2" opacity="0.8" />
      <circle cx="64" cy="54" r="3.5" fill="#FFB7B2" opacity="0.8" />
      <path d="M43 56 Q50 63 57 56" fill="none" stroke="#4E4558" stroke-width="2" stroke-linecap="round" />
      <polygon points="45,56 47,56 46,60" fill="white" />
      <polygon points="55,56 53,56 54,60" fill="white" />
      <polygon points="44,72 50,75 44,78" fill="#FFB7B2" />
      <polygon points="56,72 50,75 56,78" fill="#FFB7B2" />
      <circle cx="50" cy="75" r="3.5" fill="#FF8DA1" />
    </svg>`
  },
  {
    name: 'witch_hat',
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="50" cy="72" rx="36" ry="10" fill="#D4C5F9" stroke="#8C7CF0" stroke-width="3" />
      <path d="M26 68 C35 60, 40 45, 52 18 C56 16, 60 18, 56 25 C52 35, 60 50, 74 68 Z" fill="#BDB2FF" stroke="#8C7CF0" stroke-width="3" />
      <path d="M29 67 Q50 61 71 67 Q68 71 50 71 Q32 71 29 67 Z" fill="#FFB7B2" />
      <rect x="46" y="61" width="8" height="8" rx="2" fill="#FFE5EC" stroke="#FF8DA1" stroke-width="2" />
    </svg>`
  },
  {
    name: 'frankenstein',
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="55" width="8" height="10" rx="2" fill="#B0C4DE" stroke="#4E4558" stroke-width="2" />
      <rect x="72" y="55" width="8" height="10" rx="2" fill="#B0C4DE" stroke="#4E4558" stroke-width="2" />
      <rect x="26" y="25" width="48" height="46" rx="8" fill="#CAFFBF" stroke="#5ED3B3" stroke-width="3" />
      <path d="M26 33 L26 25 Q50 25 74 25 L74 33 L67 30 L60 35 L53 30 L46 35 L39 30 L33 35 Z" fill="#8C7CF0" stroke="#8C7CF0" stroke-width="2" />
      <path d="M34 45 L44 45" stroke="#4E4558" stroke-width="3" stroke-linecap="round" />
      <circle cx="39" cy="49" r="2.5" fill="#4E4558" />
      <path d="M56 45 L66 45" stroke="#4E4558" stroke-width="3" stroke-linecap="round" />
      <circle cx="61" cy="49" r="2.5" fill="#4E4558" />
      <path d="M61 33 L65 41 M60 37 L66 35 M62 41 L68 39" stroke="#FF8DA1" stroke-width="1.5" />
      <path d="M38 60 L62 60" stroke="#4E4558" stroke-width="2" stroke-linecap="round" />
      <path d="M44 57 L44 63" stroke="#4E4558" stroke-width="1.5" />
      <path d="M50 57 L50 63" stroke="#4E4558" stroke-width="1.5" />
      <path d="M56 57 L56 63" stroke="#4E4558" stroke-width="1.5" />
    </svg>`
  },
  {
    name: 'cyclops',
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 15 C30 15, 15 35, 15 55 C15 75, 30 85, 50 85 C70 85, 85 75, 85 55 C85 35, 70 15, 50 15 Z" fill="#FFE5EC" stroke="#FF8DA1" stroke-width="3" />
      <circle cx="50" cy="53" r="24" fill="white" stroke="#FF8DA1" stroke-width="2" />
      <circle cx="50" cy="53" r="14" fill="#D4C5F9" stroke="#8C7CF0" stroke-width="2" />
      <circle cx="50" cy="53" r="7" fill="#4E4558" />
      <circle cx="46" cy="49" r="3" fill="white" />
      <path d="M22 35 Q28 40 32 38" fill="none" stroke="#FF8DA1" stroke-width="1.5" />
      <path d="M78 35 Q72 40 68 38" fill="none" stroke="#FF8DA1" stroke-width="1.5" />
      <path d="M25 70 Q35 68 32 75" fill="none" stroke="#FF8DA1" stroke-width="1.5" />
      <path d="M75 70 Q65 68 68 75" fill="none" stroke="#FF8DA1" stroke-width="1.5" />
    </svg>`
  },
  {
    name: 'mummy',
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="30" fill="#E8F8F5" stroke="#8C7CF0" stroke-width="3" />
      <rect x="25" y="40" width="50" height="12" fill="#4E4558" rx="3" />
      <circle cx="40" cy="46" r="4.5" fill="#FFE5EC" />
      <circle cx="60" cy="46" r="4.5" fill="#FFE5EC" />
      <circle cx="40" cy="46" r="2" fill="#FF8DA1" />
      <circle cx="60" cy="46" r="2" fill="#FF8DA1" />
      <path d="M23 35 C40 30, 60 38, 77 35" fill="none" stroke="#D4C5F9" stroke-width="4.5" stroke-linecap="round" />
      <path d="M20 52 C35 55, 65 48, 80 52" fill="none" stroke="#D4C5F9" stroke-width="5" stroke-linecap="round" />
      <path d="M22 65 C40 62, 55 69, 78 63" fill="none" stroke="#D4C5F9" stroke-width="4.5" stroke-linecap="round" />
      <path d="M30 25 C45 28, 55 22, 70 25" fill="none" stroke="#D4C5F9" stroke-width="4" stroke-linecap="round" />
      <path d="M30 75 C45 72, 60 78, 70 75" fill="none" stroke="#D4C5F9" stroke-width="4.5" stroke-linecap="round" />
      <path d="M72 25 L82 20 L80 30 Z" fill="#D4C5F9" stroke="#8C7CF0" stroke-width="1.5" />
    </svg>`
  },
  {
    name: 'zombie',
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <rect x="25" y="30" width="50" height="46" rx="12" fill="#D1F2EB" stroke="#5ED3B3" stroke-width="3" />
      <path d="M32 30 C30 20, 50 16, 50 30 Z" fill="#FFB7B2" stroke="#FF8DA1" stroke-width="2.5" />
      <path d="M50 30 C50 16, 70 20, 68 30 Z" fill="#FFB7B2" stroke="#FF8DA1" stroke-width="2.5" />
      <path d="M42 22 Q50 25 58 22" fill="none" stroke="#FF8DA1" stroke-width="1.5" />
      <circle cx="40" cy="48" r="6" fill="white" stroke="#4E4558" stroke-width="2" />
      <circle cx="40" cy="48" r="2.5" fill="#4E4558" />
      <circle cx="60" cy="52" r="4.5" fill="white" stroke="#4E4558" stroke-width="2" />
      <circle cx="60" cy="52" r="1.5" fill="#4E4558" />
      <path d="M60 62 L66 68 M59 66 L65 63" stroke="#FF8DA1" stroke-width="2" stroke-linecap="round" />
      <path d="M38 62 Q50 72 58 62" fill="none" stroke="#4E4558" stroke-width="2.5" stroke-linecap="round" />
      <rect x="42" y="62" width="4" height="4" fill="white" stroke="#4E4558" stroke-width="1.5" />
    </svg>`
  },
  {
    name: 'skull',
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="32" fill="#F2F4F4" stroke="#BDC3C7" stroke-width="3" />
      <path d="M38 70 L62 70 L58 80 L42 80 Z" fill="#F2F4F4" stroke="#BDC3C7" stroke-width="3" />
      <line x1="46" y1="70" x2="46" y2="80" stroke="#BDC3C7" stroke-width="2" />
      <line x1="50" y1="70" x2="50" y2="80" stroke="#BDC3C7" stroke-width="2" />
      <line x1="54" y1="70" x2="54" y2="80" stroke="#BDC3C7" stroke-width="2" />
      <ellipse cx="40" cy="48" rx="8" ry="10" fill="#4E4558" />
      <ellipse cx="60" cy="48" rx="8" ry="10" fill="#4E4558" />
      <circle cx="42" cy="46" r="2" fill="#FFB7B2" />
      <circle cx="58" cy="46" r="2" fill="#FFB7B2" />
      <path d="M50 56 L47 61 C47 62, 53 62, 53 61 Z" fill="#4E4558" />
      <path d="M46 22 L49 30 L45 34" fill="none" stroke="#BDC3C7" stroke-width="2" stroke-linecap="round" />
    </svg>`
  },
  {
    name: 'spider',
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <line x1="50" y1="0" x2="50" y2="40" stroke="#8C7CF0" stroke-width="1.5" stroke-dasharray="3,3" />
      <path d="M40 50 Q20 38 12 50" fill="none" stroke="#8C7CF0" stroke-width="3" stroke-linecap="round" />
      <path d="M40 54 Q15 48 10 65" fill="none" stroke="#8C7CF0" stroke-width="3" stroke-linecap="round" />
      <path d="M40 58 Q18 64 14 78" fill="none" stroke="#8C7CF0" stroke-width="3" stroke-linecap="round" />
      <path d="M40 62 Q25 78 22 88" fill="none" stroke="#8C7CF0" stroke-width="3" stroke-linecap="round" />
      <path d="M60 50 Q80 38 88 50" fill="none" stroke="#8C7CF0" stroke-width="3" stroke-linecap="round" />
      <path d="M60 54 Q85 48 90 65" fill="none" stroke="#8C7CF0" stroke-width="3" stroke-linecap="round" />
      <path d="M60 58 Q82 64 86 78" fill="none" stroke="#8C7CF0" stroke-width="3" stroke-linecap="round" />
      <path d="M60 62 Q75 78 78 88" fill="none" stroke="#8C7CF0" stroke-width="3" stroke-linecap="round" />
      <circle cx="50" cy="58" r="16" fill="#D4C5F9" stroke="#8C7CF0" stroke-width="3" />
      <circle cx="50" cy="46" r="9" fill="#BDB2FF" stroke="#8C7CF0" stroke-width="2" />
      <circle cx="47" cy="44" r="2.2" fill="#4E4558" />
      <circle cx="53" cy="44" r="2.2" fill="#4E4558" />
      <polygon points="48,50 49,53 50,50" fill="white" />
      <polygon points="52,50 51,53 50,50" fill="white" />
    </svg>`
  },
  {
    name: 'slime',
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 75 C20 40, 30 25, 50 25 C70 25, 80 40, 80 75 C80 82, 75 85, 70 82 C65 80, 62 85, 58 83 C54 80, 50 86, 46 83 C42 80, 38 85, 34 83 C30 80, 20 82, 20 75 Z" fill="#CAFFBF" stroke="#5ED3B3" stroke-width="3" />
      <path d="M30 40 Q40 32 55 35" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" opacity="0.6" />
      <circle cx="38" cy="50" r="5" fill="white" stroke="#4E4558" stroke-width="1.5" />
      <circle cx="38" cy="50" r="2" fill="#4E4558" />
      <circle cx="50" cy="46" r="6" fill="white" stroke="#4E4558" stroke-width="1.5" />
      <circle cx="50" cy="46" r="2.5" fill="#4E4558" />
      <circle cx="62" cy="50" r="5" fill="white" stroke="#4E4558" stroke-width="1.5" />
      <circle cx="62" cy="50" r="2" fill="#4E4558" />
      <path d="M45 62 Q50 66 55 62" fill="none" stroke="#4E4558" stroke-width="2" stroke-linecap="round" />
      <path d="M49 63 L49 67 C49 68, 51 68, 51 67 L51 63 Z" fill="#FFE5EC" />
    </svg>`
  }
];

// 2. Synthesized Sound Effects (Web Audio API)
let audioCtx = null;
let soundEnabled = true;

function initAudio() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
}

function playSound(type) {
  if (!soundEnabled) return;
  
  try {
    initAudio();
    const now = audioCtx.currentTime;
    
    if (type === 'flip') {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      
      osc.type = 'sine';
      osc.frequency.setValueAtTime(250, now);
      osc.frequency.exponentialRampToValueAtTime(500, now + 0.1);
      
      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.1);
      
      osc.start(now);
      osc.stop(now + 0.1);
    } 
    else if (type === 'match') {
      // Pleasant rising arpeggio
      const notes = [523.25, 659.25, 783.99]; // C5, E5, G5
      notes.forEach((freq, idx) => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + idx * 0.08);
        
        gain.gain.setValueAtTime(0.08, now + idx * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.2);
        
        osc.start(now + idx * 0.08);
        osc.stop(now + idx * 0.08 + 0.2);
      });
    } 
    else if (type === 'mismatch') {
      // Soft disappointed down-sweep
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      
      osc.type = 'sine';
      osc.frequency.setValueAtTime(280, now);
      osc.frequency.exponentialRampToValueAtTime(150, now + 0.2);
      
      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
      
      osc.start(now);
      osc.stop(now + 0.2);
    } 
    else if (type === 'victory') {
      // Celebration melody
      const notes = [523.25, 659.25, 783.99, 523.25 * 2, 659.25 * 2, 783.99 * 2, 1046.50]; // Fanfare arpeggio
      notes.forEach((freq, idx) => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + idx * 0.07);
        
        gain.gain.setValueAtTime(0.07, now + idx * 0.07);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.07 + 0.3);
        
        osc.start(now + idx * 0.07);
        osc.stop(now + idx * 0.07 + 0.3);
      });
    }
  } catch (error) {
    console.error("Audio playback error:", error);
  }
}

// 3. Game State Variables
let cardsData = [];
let flippedCards = [];
let matchedPairs = 0;
let moves = 0;
let timeElapsed = 0; // In seconds
let timerInterval = null;
let gameStarted = false;
let boardLocked = false;

// High Scores Record
let bestMoves = localStorage.getItem('bestMoves') ? parseInt(localStorage.getItem('bestMoves')) : null;
let bestTime = localStorage.getItem('bestTime') ? parseInt(localStorage.getItem('bestTime')) : null;

// 4. DOM Elements
const gameGrid = document.getElementById('game-grid');
const movesCounter = document.getElementById('moves-counter');
const timerDisplay = document.getElementById('timer-display');
const bestMovesDisplay = document.getElementById('best-moves-display');
const bestTimeDisplay = document.getElementById('best-time-display');
const restartBtn = document.getElementById('restart-btn');
const soundBtn = document.getElementById('sound-btn');
const soundOnIcon = document.getElementById('sound-on-icon');
const soundOffIcon = document.getElementById('sound-off-icon');

// Modal Elements
const victoryModal = document.getElementById('victory-modal');
const modalMoves = document.getElementById('modal-moves');
const modalTime = document.getElementById('modal-time');
const newRecordRow = document.getElementById('new-record-row');
const playAgainBtn = document.getElementById('play-again-btn');

// 5. Initialize Game
function init() {
  updateBestScoresDisplay();
  setupCards();
  resetStats();
  
  // Event listeners
  restartBtn.addEventListener('click', () => {
    initAudio();
    resetGame();
  });
  
  soundBtn.addEventListener('click', toggleSound);
  playAgainBtn.addEventListener('click', () => {
    hideVictoryModal();
    resetGame();
  });
}

// 6. Setup Cards & Shuffle
function setupCards() {
  // Duplicate monsters to create 12 pairs (24 cards total)
  cardsData = [];
  MONSTERS.forEach((monster, index) => {
    // Push two identical cards
    cardsData.push({ id: index * 2, monsterId: monster.name, svg: monster.svg });
    cardsData.push({ id: index * 2 + 1, monsterId: monster.name, svg: monster.svg });
  });

  // Fisher-Yates Shuffle
  for (let i = cardsData.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cardsData[i], cardsData[j]] = [cardsData[j], cardsData[i]];
  }

  // Render cards to Grid
  gameGrid.innerHTML = '';
  cardsData.forEach(cardInfo => {
    const cardEl = document.createElement('div');
    cardEl.className = 'card-container';
    cardEl.setAttribute('role', 'button');
    cardEl.setAttribute('aria-label', 'การ์ดสัตว์ประหลาด คว่ำหน้า');
    cardEl.dataset.id = cardInfo.id;
    cardEl.dataset.monsterId = cardInfo.monsterId;

    const tarotBackSvg = `
      <svg class="tarot-back" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="6" width="88" height="88" rx="8" fill="none" stroke="rgba(255,255,255,0.75)" stroke-width="2.5" />
        <rect x="10" y="10" width="80" height="80" rx="6" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="1" />
        <circle cx="15" cy="15" r="2.5" fill="rgba(255,255,255,0.8)" />
        <circle cx="85" cy="15" r="2.5" fill="rgba(255,255,255,0.8)" />
        <circle cx="15" cy="85" r="2.5" fill="rgba(255,255,255,0.8)" />
        <circle cx="85" cy="85" r="2.5" fill="rgba(255,255,255,0.8)" />
        <polygon points="50,18 52,23 57,23 53,26 55,31 50,28 45,31 47,26 43,23 48,23" fill="rgba(255,255,255,0.7)" />
        <polygon points="50,82 52,77 57,77 53,74 55,69 50,72 45,69 47,74 43,77 48,77" fill="rgba(255,255,255,0.7)" />
        <circle cx="50" cy="50" r="22" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="1.5" stroke-dasharray="3,3" />
        <circle cx="50" cy="50" r="16" fill="none" stroke="rgba(255,255,255,0.5)" stroke-width="2" />
        <path d="M50 38 A12 12 0 0 1 50 62 A9 9 0 0 0 50 38 Z" fill="rgba(255,255,255,0.85)" />
        <line x1="50" y1="28" x2="50" y2="32" stroke="rgba(255,255,255,0.8)" stroke-width="2" />
        <line x1="50" y1="68" x2="50" y2="72" stroke="rgba(255,255,255,0.8)" stroke-width="2" />
        <line x1="28" y1="50" x2="32" y2="50" stroke="rgba(255,255,255,0.8)" stroke-width="2" />
        <line x1="68" y1="50" x2="72" y2="50" stroke="rgba(255,255,255,0.8)" stroke-width="2" />
        <line x1="35" y1="35" x2="38" y2="38" stroke="rgba(255,255,255,0.6)" stroke-width="1.5" />
        <line x1="65" y1="65" x2="62" y2="62" stroke="rgba(255,255,255,0.6)" stroke-width="1.5" />
        <line x1="65" y1="35" x2="62" y2="38" stroke="rgba(255,255,255,0.6)" stroke-width="1.5" />
        <line x1="35" y1="65" x2="38" y2="62" stroke="rgba(255,255,255,0.6)" stroke-width="1.5" />
      </svg>
    `;

    cardEl.innerHTML = `
      <div class="card">
        <div class="card-face card-back">${tarotBackSvg}</div>
        <div class="card-front">${cardInfo.svg}</div>
      </div>
    `;

    cardEl.addEventListener('click', () => handleCardClick(cardEl));
    gameGrid.appendChild(cardEl);
  });
}

// 7. Card Interactivity
function handleCardClick(cardEl) {
  if (boardLocked) return;
  
  const cardNode = cardEl.querySelector('.card');
  
  // Ignore already flipped or matched cards
  if (cardNode.classList.contains('flipped') || cardNode.classList.contains('matched')) {
    return;
  }

  initAudio(); // Resume audio context if suspended
  
  // Start timer on first card click
  if (!gameStarted) {
    gameStarted = true;
    startTimer();
  }

  // Flip card
  cardNode.classList.add('flipped');
  playSound('flip');
  flippedCards.push(cardEl);

  if (flippedCards.length === 2) {
    moves++;
    movesCounter.textContent = moves;
    checkForMatch();
  }
}

// 8. Match Checking Logic
function checkForMatch() {
  boardLocked = true;
  const [card1, card2] = flippedCards;
  const match = card1.dataset.monsterId === card2.dataset.monsterId;

  if (match) {
    disableCards(card1, card2);
  } else {
    unflipCards(card1, card2);
  }
}

function disableCards(card1, card2) {
  setTimeout(() => {
    card1.querySelector('.card').classList.add('matched');
    card2.querySelector('.card').classList.add('matched');
    playSound('match');
    
    matchedPairs++;
    resetTurn();
    
    // Check if won
    if (matchedPairs === MONSTERS.length) {
      handleWin();
    }
  }, 400);
}

function unflipCards(card1, card2) {
  setTimeout(() => {
    card1.querySelector('.card').classList.remove('flipped');
    card2.querySelector('.card').classList.remove('flipped');
    playSound('mismatch');
    resetTurn();
  }, 1000);
}

function resetTurn() {
  flippedCards = [];
  boardLocked = false;
}

// 9. Timer Control
function startTimer() {
  timeElapsed = 0;
  timerDisplay.textContent = '00:00';
  
  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    timeElapsed++;
    timerDisplay.textContent = formatTime(timeElapsed);
  }, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
}

function formatTime(seconds) {
  const min = Math.floor(seconds / 60).toString().padStart(2, '0');
  const sec = (seconds % 60).toString().padStart(2, '0');
  return `${min}:${sec}`;
}

// 10. Reset Game
function resetGame() {
  stopTimer();
  gameStarted = false;
  boardLocked = false;
  flippedCards = [];
  matchedPairs = 0;
  moves = 0;
  timeElapsed = 0;
  
  movesCounter.textContent = '0';
  timerDisplay.textContent = '00:00';
  
  setupCards();
}

function resetStats() {
  moves = 0;
  timeElapsed = 0;
  movesCounter.textContent = '0';
  timerDisplay.textContent = '00:00';
}

// 11. Audio Controls
function toggleSound() {
  soundEnabled = !soundEnabled;
  if (soundEnabled) {
    soundOnIcon.style.display = 'block';
    soundOffIcon.style.display = 'none';
    soundBtn.classList.remove('btn-secondary');
    soundBtn.classList.add('btn-primary');
    initAudio();
    playSound('flip');
  } else {
    soundOnIcon.style.display = 'none';
    soundOffIcon.style.display = 'block';
    soundBtn.classList.remove('btn-primary');
    soundBtn.classList.add('btn-secondary');
  }
}

// 12. Scoreboard Storage
function updateBestScoresDisplay() {
  if (bestMoves !== null) {
    bestMovesDisplay.textContent = bestMoves;
  } else {
    bestMovesDisplay.textContent = '-';
  }

  if (bestTime !== null) {
    bestTimeDisplay.textContent = formatTime(bestTime);
  } else {
    bestTimeDisplay.textContent = '-';
  }
}

// 13. Win / Victory Handling
function handleWin() {
  stopTimer();
  playSound('victory');
  
  let isNewRecord = false;

  // Check and save Best Moves
  if (bestMoves === null || moves < bestMoves) {
    bestMoves = moves;
    localStorage.setItem('bestMoves', bestMoves);
    isNewRecord = true;
  }

  // Check and save Best Time
  if (bestTime === null || timeElapsed < bestTime) {
    bestTime = timeElapsed;
    localStorage.setItem('bestTime', bestTime);
    isNewRecord = true;
  }

  updateBestScoresDisplay();
  showVictoryModal(moves, timeElapsed, isNewRecord);
  launchConfetti();
}

function showVictoryModal(finalMoves, finalTime, showRecord) {
  modalMoves.textContent = finalMoves;
  modalTime.textContent = formatTime(finalTime);
  newRecordRow.style.display = showRecord ? 'flex' : 'none';
  victoryModal.classList.add('active');
}

function hideVictoryModal() {
  victoryModal.classList.remove('active');
}

// 14. Confetti Animation (Pure CSS/JS)
function launchConfetti() {
  const colors = ['#FFD1DC', '#D4C5F9', '#BDB2FF', '#CAFFBF', '#FFB7B2', '#FFE5EC', '#E8F8F5'];
  const totalConfetti = 80;

  for (let i = 0; i < totalConfetti; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    
    // Randomize shape and size
    const size = Math.random() * 8 + 6; // 6px to 14px
    confetti.style.width = `${size}px`;
    confetti.style.height = `${size}px`;
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
    
    // Starting coordinates
    confetti.style.left = `${Math.random() * 100}vw`;
    confetti.style.top = `-20px`;
    
    // Physics and duration
    const duration = Math.random() * 2.5 + 2; // 2s to 4.5s
    const delay = Math.random() * 0.5;
    confetti.style.animation = `fall ${duration}s linear ${delay}s forwards`;
    
    document.body.appendChild(confetti);
    
    // Cleanup elements after animation ends
    setTimeout(() => {
      confetti.remove();
    }, (duration + delay) * 1000);
  }
}

// Run setup on load
document.addEventListener('DOMContentLoaded', init);
