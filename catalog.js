const recipes = [
    { id: 1, name: 'שקשוקה', category: 'breakfast', image: 'https://images.unsplash.com/photo-1607532941433-304659e8198a?w=400&h=300&fit=crop' },
    { id: 2, name: 'פנקייק', category: 'breakfast', image: 'https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=400&h=300&fit=crop' },
    { id: 3, name: 'פסטה ברוטב עגבניות', category: 'lunch', image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop' },
    { id: 4, name: 'סלט קיסר', category: 'salad', image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&h=300&fit=crop' },
    { id: 5, name: 'עוגת שוקולד', category: 'dessert', image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop' },
    { id: 6, name: 'סטייק', category: 'dinner', image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=400&h=300&fit=crop' },
    { id: 7, name: 'חביתה', category: 'breakfast', image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=400&h=300&fit=crop' },
    { id: 8, name: 'המבורגר', category: 'lunch', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop' },
    { id: 9, name: 'סלט ירקות', category: 'salad', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop' },
    { id: 10, name: 'עוף בתנור', category: 'dinner', image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400&h=300&fit=crop' },
    { id: 11, name: 'טירמיסו', category: 'dessert', image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=300&fit=crop' },
    { id: 12, name: 'פיצה', category: 'dinner', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop' }
];

let allRecipes = [];
let currentCategory = 'all';

// טעינת מתכונים
function loadAllRecipes() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser) {
        allRecipes = [...recipes];
    } else {
        const customRecipes = JSON.parse(localStorage.getItem(`customRecipes_${currentUser.email}`)) || [];
        allRecipes = [...recipes, ...customRecipes.map(r => r.catalog || r)];
    }
}

// הצגת המתכונים
function displayRecipes(recipesToShow) {
    const grid = document.getElementById('recipesGrid');
    if (!grid) return;
    grid.innerHTML = '';
    
    recipesToShow.forEach(recipe => {
        const card = document.createElement('a');
        card.className = 'recipe-card';
        card.href = `recipe.html?id=${recipe.id}`;
        
        const img = document.createElement('img');
        img.className = 'recipe-image';
        img.src = recipe.image;
        img.alt = recipe.name;
        img.setAttribute('referrerpolicy', 'no-referrer');

        const nameDiv = document.createElement('div');
        nameDiv.className = 'recipe-name';
        nameDiv.textContent = recipe.name;
        
        card.appendChild(img);
        card.appendChild(nameDiv);
        grid.appendChild(card);
    });
}

// פונקציית הסינון - חיוני ששם הפונקציה יהיה זהה ל-HTML
function filterCategory(category) {
    currentCategory = category;
    
    // עדכון כפתורים
    const buttons = document.querySelectorAll('.category-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    
    // סימון הכפתור הנכון כפעיל
    if (window.event && window.event.target) {
        window.event.target.classList.add('active');
    }

    const filtered = category === 'all' ? allRecipes : allRecipes.filter(r => r.category === category);
    displayRecipes(filtered);
}

// פונקציית החיפוש
function searchRecipes() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const filtered = allRecipes.filter(r => r.name.toLowerCase().includes(searchTerm));
    displayRecipes(filtered);
}

// אתחול
window.onload = function() {
    loadAllRecipes();
    displayRecipes(allRecipes);
    // אם יש פונקציית הגדרות, נוסיף אותה כאן
    if (typeof applySettings === "function") applySettings();
};