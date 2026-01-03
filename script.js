// --- CONFIG & DATA STORE ---

// Base URL configuration for multi-page structure
const PATHS = {
    home: 'index.html',
    login: 'login.html',
    signup: 'login.html#signup', // Use hash for signup form on login page
    assessmentSetup: 'assessment.html',
    q10th: 'questions-10th.html',
    q12th: 'questions-12th.html',
    qDiploma: 'questions-diploma.html',
    qBTech: 'questions-btech.html',
    results: 'results.html',
    explore: 'careers.html',
    adminLogin: 'admin.html',
    adminDashboard: 'admin.html#dashboard'
};

// Questions Data for each qualification level (EXPANDED)
// Types: Tech (Technical/Engineering), Creative (Arts/Media), Medical (Health/Life Sciences), Mgmt (Management/Finance/Social), Govt (Government/Defence/UPSC)
const questionsDB = {
    '10th': [
        { q: "I enjoy solving puzzles and logical problems more than reading history.", type: "Tech" },
        { q: "I like expressing myself through art, writing, or music.", type: "Creative" },
        { q: "I am curious about the human body and how diseases work.", type: "Medical" },
        { q: "I like taking the lead and organizing school projects or events.", type: "Mgmt" },
        { q: "I find science experiments and research fascinating.", type: "Tech" },
        { q: "I am interested in current affairs and preparing for competitive exams.", type: "Govt" },
        { q: "I prefer practical work like electronics over theoretical subjects.", type: "Tech" },
        { q: "I would rather design an outfit than analyze stock markets.", type: "Creative" },
        { q: "I feel motivated to help people in distress or needing care.", type: "Medical" },
        { q: "I enjoy debating and convincing others of my point of view.", type: "Mgmt" },
        { q: "I am interested in pursuing a career in the armed forces or police.", type: "Govt" },
        { q: "I enjoy writing short stories, poetry, or blogging.", type: "Creative" },
        { q: "I prefer subjects that involve numbers and fixed rules.", type: "Tech" },
        { q: "I am patient and calm when dealing with sick people.", type: "Medical" },
        { q: "I enjoy learning about different cultures and history.", type: "Govt" },
    ],
    '12th': [
        { q: "Does the idea of writing complex algorithms and building software excite you?", type: "Tech" },
        { q: "Are you interested in pursuing advanced studies in medicine, dentistry, or pharmacy?", type: "Medical" },
        { q: "Do you see yourself designing buildings, fashion lines, or graphic campaigns?", type: "Creative" },
        { q: "Do you enjoy reading about economy, business cycles, and corporate strategy?", type: "Mgmt" },
        { q: "Are you willing to dedicate several years to clear top-tier competitive exams like UPSC or NDA?", type: "Govt" },
        { q: "I prefer working with computers and data analysis tools.", type: "Tech" },
        { q: "I enjoy public speaking and communicating complex ideas clearly.", type: "Mgmt" },
        { q: "I am interested in psychology, counselling, or social work.", type: "Medical" },
        { q: "I have a portfolio of creative work (drawings, videos, etc.).", type: "Creative" },
        { q: "The concept of managing national resources or public administration appeals to me.", type: "Govt" },
        { q: "I am comfortable with long coding sessions and debugging.", type: "Tech" },
        { q: "I would choose a career focused on research over patient care.", type: "Medical" },
        { q: "I see myself in a high-pressure sales or marketing role.", type: "Mgmt" },
        { q: "I am drawn to architecture and structural design challenges.", type: "Tech" },
        { q: "I find cinematography, photography, or multimedia fascinating.", type: "Creative" },
        { q: "I am interested in a career in defence, such as the Army, Navy, or Air Force.", type: "Govt" },
        { q: "I enjoy managing budgets and tracking expenditures.", type: "Mgmt" },
        { q: "I am fascinated by new technologies like AI and Robotics.", type: "Tech" },
        { q: "I like spending time helping the environment or wildlife.", type: "Medical" },
        { q: "I enjoy learning new languages and traveling.", type: "Creative" },
    ],
    'Diploma': [
        { q: "I prefer troubleshooting physical machinery (electrical/mechanical) over programming.", type: "Tech" },
        { q: "I am looking for a hands-on, vocational job path right after my studies.", type: "Tech" },
        { q: "I am interested in lateral entry to a B.Tech degree after my diploma.", type: "Tech" },
        { q: "I have skills in sketching, 3D modeling, or basic design software.", type: "Creative" },
        { q: "I enjoy managing small project teams or supervising work on site.", type: "Mgmt" },
        { q: "I want a career that involves fixing and maintaining essential infrastructure (plumbing, HVAC, etc.).", type: "Tech" },
        { q: "I am interested in becoming a nurse, physiotherapist, or lab technician.", type: "Medical" },
        { q: "I see myself starting my own small technical business soon.", type: "Mgmt" },
        { q: "I am detail-oriented and precise when following technical blueprints.", type: "Tech" },
        { q: "I enjoy working outdoors or in a field setting rather than an office.", type: "Tech" },
        { q: "I prefer to communicate technical issues clearly to non-technical people.", type: "Mgmt" },
        { q: "I have an interest in graphic design for local businesses.", type: "Creative" },
        { q: "I would like to teach my trade to others.", type: "Govt" },
        { q: "I enjoy reading technical manuals and figuring out how things work.", type: "Tech" },
        { q: "I am good at convincing suppliers to give me better prices.", type: "Mgmt" }
    ],
    'BTech': [
        { q: "I want to specialize in Artificial Intelligence, Machine Learning, or Cybersecurity.", type: "Tech" },
        { q: "I am actively preparing for CAT/GMAT to pursue an MBA in Finance or Marketing.", type: "Mgmt" },
        { q: "I am committed to working in core engineering sectors like Manufacturing or Aerospace.", type: "Tech" },
        { q: "My goal is to clear competitive exams like GATE, ESE, or UPSC (Civil Services).", type: "Govt" },
        { q: "I have a startup idea and dream of becoming an entrepreneur.", type: "Mgmt" },
        { q: "I prefer technical research (M.Tech/Ph.D.) over an industry job.", type: "Tech" },
        { q: "I am skilled at presentation, negotiation, and client management.", type: "Mgmt" },
        { q: "I am interested in technical writing or creating educational content.", type: "Creative" },
        { q: "I want to join the armed forces through a technical entry scheme.", type: "Govt" },
        { q: "I enjoy complex system architecture design.", type: "Tech" },
        { q: "I am interested in pursuing a career in public policy or administration.", type: "Govt" },
        { q: "I see myself consulting for large multinational corporations.", type: "Mgmt" },
        { q: "I prefer managing people and projects rather than purely technical execution.", type: "Mgmt" },
        { q: "I am interested in patent law or intellectual property rights.", type: "Govt" },
        { q: "I want a career that involves frequent international travel.", type: "Mgmt" },
    ]
};

const careersDB = [
    { title: "Software Engineer", category: "IT and Software", tags: ["Tech", "Code"], icon: 'fa-code', desc: "Build applications, systems, and websites." },
    { title: "Doctor / MBBS", category: "Medical & Life Sciences", tags: ["Bio", "Care"], icon: 'fa-user-doctor', desc: "Diagnose, treat patients, and perform surgery." },
    { title: "Graphic Designer", category: "Arts & Media", tags: ["Creative", "Design"], icon: 'fa-palette', desc: "Create visual concepts and layouts for communication." },
    { title: "Chartered Accountant (CA)", category: "Management", tags: ["Finance", "Mgmt"], icon: 'fa-calculator', desc: "Financial auditing, planning, and tax advisory." },
    { title: "UPSC/Civil Services", category: "Government exams", tags: ["Govt", "Mgmt"], icon: 'fa-landmark', desc: "Public administration and policy implementation." },
    { title: "Mechanical Engineer", category: "Engineering", tags: ["Tech", "Design"], icon: 'fa-gear', desc: "Design and manufacture mechanical systems." },
    { title: "Architect", category: "Arts & Media", tags: ["Creative", "Tech"], icon: 'fa-city', desc: "Design buildings and physical structures." },
    { title: "Data Scientist", category: "IT and Software", tags: ["Tech", "Data"], icon: 'fa-database', desc: "Analyze complex data for business insights." },
    { title: "Pilot / Defence Forces", category: "Defence & Armed forces", tags: ["Govt", "Tech"], icon: 'fa-fighter-jet', desc: "Serve in the military, navy, or air force." },
    { title: "Physiotherapist", category: "Medical & Life Sciences", tags: ["Health", "Care"], icon: 'fa-hand-holding-heart', desc: "Help patients recover physical movement and function." },
    { title: "Welder / Technician", category: "Vocational", tags: ["Tech", "Vocational"], icon: 'fa-tools', desc: "Skilled trades focusing on repair and construction." },
    { title: "Marketing Manager (MBA)", category: "Management", tags: ["Mgmt", "Social"], icon: 'fa-bullhorn', desc: "Develop and execute marketing strategies." },
    { title: "Forensic Scientist", category: "Medical & Life Sciences", tags: ["Bio", "Tech", "Govt"], icon: 'fa-dna', desc: "Apply scientific methods to criminal investigations." },
    { title: "Investment Banker", category: "Management", tags: ["Finance", "Mgmt"], icon: 'fa-chart-line', desc: "Raise capital and provide financial advisory services." },
    { title: "Art Director", category: "Arts & Media", tags: ["Creative", "Mgmt"], icon: 'fa-camera-retro', desc: "Oversee the artistic aspects of a film or publication." },
];


// --- STATE MANAGEMENT (using localStorage for persistence) ---
function saveState(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
        console.error("Error saving to localStorage", e);
    }
}

function loadState(key) {
    try {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : null;
    } catch (e) {
        console.error("Error loading from localStorage", e);
        return null;
    }
}

let state = {
    currentUser: loadState('currentUser') || null,
    currentLevel: loadState('currentLevel') || '',
    answers: loadState('answers') || [], 
    qIndex: loadState('qIndex') || 0,
    isAdmin: loadState('isAdmin') || false,
    currentQuestions: [] // Will be populated on question pages
};

let tempAnswer = null; // Store current selection before clicking next


// --- UI UTILITIES (Custom Modal) ---
function createModal() {
    const modalHtml = `
        <div id="custom-modal" class="modal-overlay hidden">
            <div class="modal-content">
                <h3 id="modal-title" class="text-xl font-bold mb-3 text-primary">Message</h3>
                <p id="modal-message" class="text-gray-700 mb-6"></p>
                <button id="modal-ok-btn" class="btn-gradient px-6 py-2 rounded-lg font-bold">OK</button>
            </div>
        </div>
    `;
    // Prevent creating modal multiple times
    if (!document.getElementById('custom-modal')) {
        document.body.insertAdjacentHTML('beforeend', modalHtml);
    }
}

function showMessage(title, message, callback) {
    const modal = document.getElementById('custom-modal');
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-message').textContent = message;
    
    const okBtn = document.getElementById('modal-ok-btn');
    okBtn.onclick = () => {
        modal.classList.add('hidden');
        if (callback) callback();
    };

    modal.classList.remove('hidden');
}


// Global functions for HTML pages (Router)
window.router = function(key) {
    if (!PATHS[key]) {
        console.error(`Unknown path key: ${key}`);
        showMessage("Error", "Page not found.", null);
        return;
    }
    // For Multi-Page structure, use window.location.href
    window.location.href = PATHS[key];
};

// --- AUTHENTICATION LOGIC ---

window.handleLogin = function(e) {
    e.preventDefault();
    const emailInput = e.target.querySelector('input[type="email"]').value;
    const passwordInput = e.target.querySelector('input[type="password"]').value;
    
    if (emailInput && passwordInput) {
        state.currentUser = { name: emailInput.split('@')[0], email: emailInput };
        saveState('currentUser', state.currentUser);
        showMessage("Success", `Welcome back, ${state.currentUser.name}!`, () => router('home'));
    } else {
        showMessage("Error", "Please enter valid credentials.", null);
    }
}

window.handleSignup = function(e) {
    e.preventDefault();
    const nameInput = document.getElementById('signup-name').value;
    const emailInput = e.target.querySelector('input[type="email"]').value;
    
    if (nameInput && emailInput) {
        state.currentUser = { name: nameInput, email: emailInput };
        saveState('currentUser', state.currentUser);
        showMessage("Success", `Account created for ${nameInput}! Start your assessment.`, () => router('home'));
    } else {
        showMessage("Error", "Please fill in all fields.", null);
    }
}

window.logout = function() {
    state.currentUser = null;
    state.isAdmin = false;
    localStorage.clear();
    showMessage("Logged Out", "You have been successfully logged out.", () => router('home'));
}

window.updateAuthUI = function() {
    const authBtns = document.getElementById('auth-buttons');
    const userProfile = document.getElementById('user-profile');
    const nameDisplay = document.getElementById('username-display');
    const isLoginPage = window.location.pathname.includes(PATHS.login.split('#')[0]);

    if (authBtns && userProfile) {
        if (loadState('currentUser')) {
            authBtns.classList.add('hidden');
            userProfile.classList.remove('hidden');
            userProfile.classList.add('flex');
            nameDisplay.textContent = loadState('currentUser').name;
        } else {
            authBtns.classList.remove('hidden');
            userProfile.classList.add('hidden');
            userProfile.classList.remove('flex');
        }
    }
    
    // Show/hide login/signup forms on login.html
    const signupForm = document.getElementById('signup-form');
    const loginForm = document.getElementById('login-form');
    if (isLoginPage && signupForm && loginForm) {
        if (window.location.hash === '#signup') {
            signupForm.classList.remove('hidden');
            loginForm.classList.add('hidden');
        } else {
            signupForm.classList.add('hidden');
            loginForm.classList.remove('hidden');
        }
    }
    
    if (window.location.hash) {
        window.onhashchange = updateAuthUI;
    }
}

window.checkAuthAndStart = function() {
    if (loadState('currentUser')) {
        router('assessmentSetup');
    } else {
        showMessage("Access Denied", "Please log in or sign up to start the assessment.", () => router('login'));
    }
}

// --- ASSESSMENT LOGIC ---

window.startAssessment = function(level) {
    if (!loadState('currentUser')) {
        showMessage("Access Denied", "Please log in to start the assessment.", () => router('login'));
        return;
    }
    
    // Reset state and save level
    saveState('currentLevel', level);
    saveState('qIndex', 0);
    saveState('answers', []);
    
    let pathKey = `q${level}`;
    if (!PATHS[pathKey]) {
        showMessage("Error", `Questions for ${level} are not yet available.`, null);
        return;
    }
    
    router(pathKey);
}

window.renderQuestion = function() {
    const level = loadState('currentLevel');
    const questions = questionsDB[level];
    const qIndex = loadState('qIndex');
    
    if (!questions || questions.length === 0 || qIndex === null) {
        showMessage("Error", "Assessment data reset or missing. Please restart.", () => router('assessmentSetup'));
        return;
    }
    
    state.currentQuestions = questions;
    state.currentLevel = level;
    state.qIndex = qIndex;

    const qData = questions[state.qIndex];
    const total = questions.length;
    
    // Update UI elements
    const currentQNum = document.getElementById('current-q-num');
    const totalQNum = document.getElementById('total-q-num');
    const progressBar = document.getElementById('progress-bar');
    const progressPercent = document.getElementById('progress-percent');
    const questionText = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options-container');
    const nextBtn = document.getElementById('next-btn');

    if (!currentQNum || !totalQNum || !progressBar || !questionText) return; 

    currentQNum.textContent = state.qIndex + 1;
    totalQNum.textContent = total;
    
    const pct = ((state.qIndex) / total) * 100;
    progressBar.style.width = `${pct}%`;
    progressPercent.textContent = `${Math.round(pct)}%`;

    questionText.textContent = qData.q;

    // Generate Options
    optionsContainer.innerHTML = `
        <div class="option-card p-4 rounded-lg border border-gray-200 cursor-pointer hover:bg-gray-50 transition" onclick="selectOption(this, 1, '${qData.type}')">
            <div class="flex items-center"><i class="fa-solid fa-check text-green-500 mr-3 hidden check-icon"></i><i class="fa-solid fa-circle-dot text-gray-300 mr-3 default-icon"></i><span class="font-medium">Strongly Agree / Very Interested (3 Points)</span></div>
        </div>
        <div class="option-card p-4 rounded-lg border border-gray-200 cursor-pointer hover:bg-gray-50 transition" onclick="selectOption(this, 0.6, '${qData.type}')">
           <div class="flex items-center"><i class="fa-solid fa-check text-green-500 mr-3 hidden check-icon"></i><i class="fa-solid fa-circle-dot text-gray-300 mr-3 default-icon"></i><span class="font-medium">Agree / Somewhat Interested (2 Points)</span></div>
        </div>
        <div class="option-card p-4 rounded-lg border border-gray-200 cursor-pointer hover:bg-gray-50 transition" onclick="selectOption(this, 0.3, '${qData.type}')">
           <div class="flex items-center"><i class="fa-solid fa-check text-green-500 mr-3 hidden check-icon"></i><i class="fa-solid fa-circle-dot text-gray-300 mr-3 default-icon"></i><span class="font-medium">Neutral / Unsure (1 Point)</span></div>
        </div>
        <div class="option-card p-4 rounded-lg border border-gray-200 cursor-pointer hover:bg-gray-50 transition" onclick="selectOption(this, 0, '${qData.type}')">
           <div class="flex items-center"><i class="fa-solid fa-check text-green-500 mr-3 hidden check-icon"></i><i class="fa-solid fa-circle-dot text-gray-300 mr-3 default-icon"></i><span class="font-medium">Disagree / Not Interested (0 Points)</span></div>
        </div>
    `;

    nextBtn.disabled = true;
    nextBtn.classList.add('opacity-50', 'cursor-not-allowed');
    nextBtn.innerHTML = `Next <i class="fa-solid fa-chevron-right ml-2"></i>`;

    if (state.qIndex === total - 1) {
         nextBtn.innerHTML = `View Results <i class="fa-solid fa-chart-pie ml-2"></i>`;
    }
}

window.selectOption = function(el, weight, type) {
    document.querySelectorAll('.option-card').forEach(c => {
        c.classList.remove('selected');
        c.querySelector('.check-icon')?.classList.add('hidden');
        c.querySelector('.default-icon')?.classList.remove('hidden');
    });
    
    el.classList.add('selected');
    el.querySelector('.check-icon')?.classList.remove('hidden');
    el.querySelector('.default-icon')?.classList.add('hidden');

    tempAnswer = { weight, type };
    
    const btn = document.getElementById('next-btn');
    btn.disabled = false;
    btn.classList.remove('opacity-50', 'cursor-not-allowed');
}

window.nextQuestion = function() {
    if (tempAnswer === null) {
        showMessage("Selection Required", "Please select an option before proceeding.", null);
        return;
    }

    // Load and update answers/index from state
    let answers = loadState('answers') || [];
    let qIndex = loadState('qIndex');

    answers.push(tempAnswer);
    qIndex++;
    
    saveState('answers', answers);
    saveState('qIndex', qIndex);

    tempAnswer = null;

    const questions = questionsDB[loadState('currentLevel')];

    if (qIndex < questions.length) {
        // Navigate to the next question page (reloads the same URL, which re-renders the next question)
        window.location.reload(); 
    } else {
        calculateAndShowResults();
    }
}

window.quitAssessment = function() {
    showMessage("Confirm Quit", "Are you sure you want to quit? Your current assessment progress will be lost.", () => {
        localStorage.removeItem('answers');
        localStorage.removeItem('qIndex');
        localStorage.removeItem('currentLevel');
        router('home');
    });
}


// --- RESULTS LOGIC ---
window.calculateAndShowResults = function() {
    let scores = { Tech: 0, Creative: 0, Medical: 0, Mgmt: 0, Govt: 0 };
    let maxScores = { Tech: 0, Creative: 0, Medical: 0, Mgmt: 0, Govt: 0 };
    
    const level = loadState('currentLevel');
    const allAnswers = loadState('answers');
    const questions = questionsDB[level];
    
    if (!allAnswers || !questions || allAnswers.length !== questions.length) {
        // This handles cases where state might be corrupt
        showMessage("Error", "Assessment data incomplete or corrupted. Please restart your test.", () => router('assessmentSetup'));
        return;
    }

    questions.forEach((q, index) => {
        const type = q.type;
        const answer = allAnswers[index];
        maxScores[type] += 1;
        if (answer && answer.weight !== undefined) {
            scores[type] += answer.weight;
        }
    });

    let finalScores = {};
    Object.keys(scores).forEach(key => {
        const maxPossible = maxScores[key] || 1; 
        // Max score is maxPossible * 1 (for strongly agree). Score is normalized by max possible for that category.
        finalScores[key] = Math.round((scores[key] / maxPossible) * 100);
    });

    saveState('finalScores', finalScores);
    
    // Clear assessment state
    localStorage.removeItem('answers');
    localStorage.removeItem('qIndex');
    localStorage.removeItem('currentLevel');
    
    router('results');
}

window.renderResultsPage = function() {
    const finalScores = loadState('finalScores');
    if (!finalScores) {
        showMessage("No Results", "Please complete an assessment first.", () => router('home'));
        return;
    }
    
    const updateBar = (key, pct) => {
        const scoreElement = document.getElementById(`score-${key.toLowerCase()}`);
        const barElement = document.getElementById(`bar-${key.toLowerCase()}`);
        if (scoreElement) scoreElement.textContent = `${pct}%`;
        if (barElement) barElement.style.width = `${pct}%`;
    };

    updateBar('Tech', finalScores.Tech);
    updateBar('Creative', finalScores.Creative);
    updateBar('Medical', finalScores.Medical);
    updateBar('Mgmt', finalScores.Mgmt);
    updateBar('Govt', finalScores.Govt || 0); 

    let topKey = Object.keys(finalScores).reduce((a, b) => finalScores[a] > finalScores[b] ? a : b);
    
    let strengthText = "";
    if (topKey === 'Tech') strengthText = "Technical & Analytical Problem Solving (Engineering, IT, Vocational)";
    else if (topKey === 'Creative') strengthText = "Artistic Design & Innovation (Arts, Media, Architecture)";
    else if (topKey === 'Medical') strengthText = "Empathy & Biological Sciences (Health, Care, Research)";
    else if (topKey === 'Mgmt') strengthText = "Leadership & Business Strategy (MBA, Finance, Management)";
    else if (topKey === 'Govt') strengthText = "Public Service & Strategic Planning (UPSC, Defence, Govt Jobs)";
    
    document.getElementById('top-strength-text').textContent = strengthText;

    // Generate Recommendations
    const recContainer = document.getElementById('recommendations-container');
    recContainer.innerHTML = '';

    let mapping = {
        'Tech': ['Engineering', 'IT and Software', 'Vocational'],
        'Creative': ['Arts & Media', 'Creative'],
        'Medical': ['Medical & Life Sciences'],
        'Mgmt': ['Management'],
        'Govt': ['Government exams', 'Defence & Armed forces']
    };

    const topCategories = mapping[topKey];
    const relevantCareers = careersDB
        .filter(c => topCategories.includes(c.category) || c.tags.includes(topKey))
        .sort(() => Math.random() - 0.5) // Randomize slightly for variety
        .slice(0, 4); 

    if (relevantCareers.length === 0) {
        recContainer.innerHTML = '<p class="text-center text-gray-500 col-span-2">No specific recommendations found. Try exploring all careers!</p>';
    } else {
        relevantCareers.forEach(career => {
            recContainer.innerHTML += `
                <div class="p-4 glass-card">
                    <h4 class="font-bold text-lg text-primary"><i class="fa-solid ${career.icon} mr-2"></i>${career.title}</h4>
                    <span class="text-xs font-semibold bg-gray-100 px-2 py-1 rounded text-gray-600">${career.category}</span>
                    <p class="text-sm text-gray-500 mt-2">${career.desc}</p>
                </div>
            `;
        });
    }
}

// --- EXPLORE LOGIC ---
window.renderCareers = function(list) {
    const grid = document.getElementById('all-careers-grid');
    if (!grid) return; 
    grid.innerHTML = '';
    
    if (list.length === 0) {
        grid.innerHTML = '<p class="text-center text-xl text-gray-500 col-span-3">No careers found matching your search/filter criteria.</p>';
        return;
    }

    list.forEach(c => {
        grid.innerHTML += `
            <div class="glass-card p-6">
                <div class="flex justify-between items-start mb-4">
                    <h3 class="font-bold text-lg"><i class="fa-solid ${c.icon} mr-2 text-secondary"></i>${c.title}</h3>
                    <span class="text-xs bg-indigo-50 text-indigo-600 px-2 py-1 rounded-full">${c.category}</span>
                </div>
                <p class="text-sm text-gray-500 mb-4">${c.desc}</p>
                <button class="text-sm text-primary font-bold hover:underline">View Details <i class="fa-solid fa-arrow-right text-xs"></i></button>
            </div>
        `;
    });
}

window.filterCategory = function(cat) {
    const careerFilterButtons = document.querySelectorAll('#career-filter-buttons button');
    careerFilterButtons.forEach(btn => {
        btn.classList.remove('bg-primary', 'text-white');
        btn.classList.add('bg-white', 'border', 'hover:bg-gray-50', 'text-gray-800');
    });
    
    const clickedButton = Array.from(careerFilterButtons).find(btn => btn.textContent.trim().includes(cat.split(' ')[0]));
    if (clickedButton) {
        clickedButton.classList.remove('bg-white', 'border', 'hover:bg-gray-50', 'text-gray-800');
        clickedButton.classList.add('bg-primary', 'text-white');
    }

    if (cat === 'All') renderCareers(careersDB);
    else {
        const filtered = careersDB.filter(c => c.category === cat);
        renderCareers(filtered);
    }
}

window.filterCareers = function() {
    const query = document.getElementById('search-career').value.toLowerCase();
    const filtered = careersDB.filter(c => c.title.toLowerCase().includes(query) || c.category.toLowerCase().includes(query) || c.tags.some(tag => tag.toLowerCase().includes(query)));
    renderCareers(filtered);
}

// --- ADMIN LOGIC ---
window.handleAdminLogin = function(e) {
    e.preventDefault();
    const key = document.getElementById('admin-key').value;
    if (key === '1234') { 
        saveState('isAdmin', true);
        showMessage("Admin Access Granted", "Welcome to the Dashboard.", () => router('adminDashboard'));
    } else {
        showMessage("Access Denied", "Invalid Admin Key!", null);
    }
}

window.logoutAdmin = function() {
    saveState('isAdmin', false);
    showMessage("Logged Out", "Admin session ended.", () => router('home'));
}

window.renderAdminDashboard = function() {
    if (!loadState('isAdmin')) {
        // Fallback to login if somehow navigated directly
        router('adminLogin');
        return;
    }
    // Mock data population logic can go here if needed, but the current HTML uses mock display data.
}
 // --- INITIALIZATION ---
window.addEventListener('DOMContentLoaded', function() {
    // 1. Run basic UI setup
    if (typeof createModal === "function") createModal();
    if (typeof updateAuthUI === "function") updateAuthUI();
    
    // 2. Fix the Path Detection
    // This gets just the filename (e.g., 'questions-10th.html')
    const page = window.location.pathname.split('/').pop();

    // 3. Logic to render the correct page
    if (page.includes('questions-10th.html') || 
        page.includes('questions-12th.html') || 
        page.includes('questions-diploma.html') || 
        page.includes('questions-btech.html')) {
        
        renderQuestion();
    } else if (page.includes('results.html')) {
        renderResultsPage();
    }
}); 
