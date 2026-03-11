function loadSettings() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser) {
        window.location.href = 'index.html';
        return;
    }
    
    const userSettings = JSON.parse(localStorage.getItem(`settings_${currentUser.email}`)) || {
        pauseDelay: 0.5,
        theme: 'light',
        fontSize: 'medium',
        gridColumns: 4
    };
    
    document.getElementById('pauseDelay').value = userSettings.pauseDelay;
    document.getElementById('delayValue').textContent = userSettings.pauseDelay;
    document.getElementById('fontSize').value = userSettings.fontSize;
    document.getElementById('gridColumns').value = userSettings.gridColumns;
    
    if (userSettings.theme === 'dark') {
        document.body.classList.add('dark-theme');
        document.querySelectorAll('.toggle-btn').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.toggle-btn')[1].classList.add('active');
    }
}

document.getElementById('pauseDelay').addEventListener('input', (e) => {
    document.getElementById('delayValue').textContent = e.target.value;
});

function setTheme(theme) {
    document.querySelectorAll('.toggle-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    if (theme === 'dark') {
        document.body.classList.add('dark-theme');
    } else {
        document.body.classList.remove('dark-theme');
    }
}

function saveSettings() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser) {
        alert('אינך מחובר');
        return;
    }
    
    const settings = {
        pauseDelay: parseFloat(document.getElementById('pauseDelay').value),
        theme: document.body.classList.contains('dark-theme') ? 'dark' : 'light',
        fontSize: document.getElementById('fontSize').value,
        gridColumns: parseInt(document.getElementById('gridColumns').value)
    };
    
    localStorage.setItem(`settings_${currentUser.email}`, JSON.stringify(settings));
    alert('ההגדרות נשמרו בהצלחה!');
}

loadSettings();
