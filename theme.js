// StratDots Theme Switcher - Default vs Advanced Pack

// Load saved theme preference or default to 'default'
let currentTheme = localStorage.getItem('stratdotsTheme') || 'default';

// Apply theme on page load
document.addEventListener('DOMContentLoaded', function() {
    applyTheme(currentTheme);
    
    // Set up button click handlers
    document.getElementById('defaultTheme').addEventListener('click', function() {
        switchTheme('default');
    });
    
    document.getElementById('advancedTheme').addEventListener('click', function() {
        switchTheme('advanced');
    });
});

function switchTheme(theme) {
    currentTheme = theme;
    localStorage.setItem('stratdotsTheme', theme);
    applyTheme(theme);
}

function applyTheme(theme) {
    const body = document.body;
    const defaultBtn = document.getElementById('defaultTheme');
    const advancedBtn = document.getElementById('advancedTheme');
    
    // Update button states
    if (theme === 'default') {
        defaultBtn.classList.add('active');
        advancedBtn.classList.remove('active');
        body.classList.remove('advanced-theme');
        body.classList.add('default-theme');
    } else {
        advancedBtn.classList.add('active');
        defaultBtn.classList.remove('active');
        body.classList.remove('default-theme');
        body.classList.add('advanced-theme');
    }
    
    // Switch screenshot images
    const defaultScreenshots = document.querySelectorAll('.default-screenshot');
    const advancedScreenshots = document.querySelectorAll('.advanced-screenshot');
    
    if (theme === 'default') {
        defaultScreenshots.forEach(img => img.style.display = 'block');
        advancedScreenshots.forEach(img => img.style.display = 'none');
    } else {
        defaultScreenshots.forEach(img => img.style.display = 'none');
        advancedScreenshots.forEach(img => img.style.display = 'block');
    }
}
