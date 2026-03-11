const recipesData = {
    1: {
        name: 'שקשוקה',
        image: 'https://images.unsplash.com/photo-1607532941433-304659e8198a?w=600&h=400&fit=crop',
        ingredients: ['4 ביצים', '4 עגבניות בשלות', '1 בצל', '2 שיני שום', 'פלפל אדום', 'כמון', 'מלח ופלפל', 'שמן זית'],
        instructions: ['חותכים את הבצל והשום דק', 'מחממים שמן בסיר ומטגנים את הבצל', 'מוסיפים עגבניות קצוצות ותבלינים', 'מבשלים 10 דקות', 'עושים גומות ושוברים ביצים', 'מכסים ומבשלים עד שהביצים מתקשות']
    },
    2: {
        name: 'פנקייק',
        image: 'https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=600&h=400&fit=crop',
        ingredients: ['2 כוסות קמח', '2 ביצים', '1.5 כוס חלב', '2 כפות סוכר', '1 כף אבקת אפייה', 'מלח', 'חמאה'],
        instructions: ['מערבבים קמח, סוכר, אבקת אפייה ומלח', 'מוסיפים ביצים וחלב', 'מערבבים עד לקבלת בלילה חלקה', 'מחממים מחבת עם חמאה', 'יוצקים בלילה ומטגנים משני הצדדים']
    },
    3: {
        name: 'פסטה ברוטב עגבניות',
        image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600&h=400&fit=crop',
        ingredients: ['500 גרם פסטה', '800 גרם עגבניות מרוסקות', '4 שיני שום', 'בזיליקום טרי', 'שמן זית', 'מלח ופלפל'],
        instructions: ['מבשלים את הפסטה לפי ההוראות', 'מטגנים שום בשמן זית', 'מוסיפים עגבניות ומבשלים 15 דקות', 'מוסיפים בזיליקום ותבלינים', 'מערבבים עם הפסטה']
    },
    4: {
        name: 'סלט קיסר',
        image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=600&h=400&fit=crop',
        ingredients: ['חסה רומית', 'קרוטונים', 'פרמזן', 'חזה עוף', 'מיונז', 'שום', 'לימון', 'אנשובי'],
        instructions: ['צולים את העוף וחותכים לרצועות', 'קורעים את החסה', 'מכינים רוטב ממיונז, שום, לימון ואנשובי', 'מערבבים הכל יחד', 'מוסיפים קרוטונים ופרמזן']
    },
    5: {
        name: 'עוגת שוקולד',
        image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&h=400&fit=crop',
        ingredients: ['200 גרם שוקולד מריר', '200 גרם חמאה', '4 ביצים', '1 כוס סוכר', '1 כוס קמח', 'אבקת אפייה'],
        instructions: ['ממיסים שוקולד וחמאה', 'מקציפים ביצים וסוכר', 'מערבבים הכל יחד', 'מוסיפים קמח ואבקת אפייה', 'אופים 180 מעלות 35 דקות']
    },
    6: {
        name: 'סטייק',
        image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=600&h=400&fit=crop',
        ingredients: ['סטייק בקר 300 גרם', 'שום', 'רוזמרין', 'חמאה', 'מלח גס', 'פלפל שחור'],
        instructions: ['מוציאים את הסטייק מהמקרר 30 דקות לפני', 'מתבלים במלח ופלפל', 'מחממים מחבת חזקה', 'צולים 3-4 דקות מכל צד', 'מוסיפים חמאה ושום בסוף', 'מניחים למנוחה 5 דקות']
    },
    7: {
        name: 'חביתה',
        image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=600&h=400&fit=crop',
        ingredients: ['3 ביצים', 'חמאה', 'מלח ופלפל', 'גבינה צהובה', 'ירקות לבחירה'],
        instructions: ['טורפים את הביצים', 'מחממים חמאה במחבת', 'יוצקים את הביצים', 'מוסיפים גבינה וירקות', 'מקפלים לחצי']
    },
    8: {
        name: 'המבורגר',
        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&h=400&fit=crop',
        ingredients: ['500 גרם בשר טחון', 'לחמניות', 'עגבנייה', 'חסה', 'בצל', 'מלפפון חמוץ', 'גבינה', 'קטשופ'],
        instructions: ['מעצבים קציצות מהבשר', 'מתבלים במלח ופלפל', 'צולים על גריל או מחבת', 'מוסיפים גבינה בסוף', 'מרכיבים עם הירקות והרטבים']
    },
    9: {
        name: 'סלט ירקות',
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&h=400&fit=crop',
        ingredients: ['מלפפון', 'עגבנייה', 'פלפל', 'בצל', 'לימון', 'שמן זית', 'מלח'],
        instructions: ['חותכים את כל הירקות לקוביות', 'מערבבים בקערה', 'מוסיפים מיץ לימון ושמן זית', 'מתבלים במלח', 'מערבבים ומגישים']
    },
    10: {
        name: 'עוף בתנור',
        image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=600&h=400&fit=crop',
        ingredients: ['עוף שלם', 'שום', 'לימון', 'רוזמרין', 'שמן זית', 'מלח ופלפל', 'ירקות שורש'],
        instructions: ['מתבלים את העוף מבפנים ומבחוץ', 'ממלאים בשום ולימון', 'מניחים על מצע ירקות', 'שופכים שמן זית', 'אופים 180 מעלות שעה וחצי']
    },
    11: {
        name: 'טירמיסו',
        image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600&h=400&fit=crop',
        ingredients: ['ביסקוויטים', 'קפה חזק', 'מסקרפונה', 'ביצים', 'סוכר', 'קקאו'],
        instructions: ['מכינים קפה ומצננים', 'מקציפים חלמונים וסוכר', 'מוסיפים מסקרפונה', 'טובלים ביסקוויטים בקפה', 'מניחים שכבות ומקררים 4 שעות', 'מפזרים קקאו']
    },
    12: {
        name: 'פיצה',
        image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&h=400&fit=crop',
        ingredients: ['בצק פיצה', 'רוטב עגבניות', 'גבינת מוצרלה', 'זיתים', 'פטריות', 'בזיליקום'],
        instructions: ['מרדדים את הבצק', 'מורחים רוטב עגבניות', 'מפזרים גבינה', 'מוסיפים תוספות', 'אופים 220 מעלות 15 דקות']
    }
};

let speech = null;
let isPlaying = false;
let isPaused = false;
let currentRecipeId = null;

function getRecipeId() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
}

function displayRecipe() {
    const id = getRecipeId();
    let recipe = recipesData[id];
    
    if (!recipe) {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser) {
            const customRecipes = JSON.parse(localStorage.getItem(`customRecipes_${currentUser.email}`)) || [];
            const customRecipe = customRecipes.find(r => r.details.id == id);
            if (customRecipe) {
                recipe = customRecipe.details;
            }
        }
        
        if (!recipe) {
            window.location.href = 'catalog.html';
            return;
        }
    }
    
    if (currentRecipeId !== id) {
        window.speechSynthesis.cancel();
        isPlaying = false;
        isPaused = false;
        currentRecipeId = id;
    }
    
    document.getElementById('recipeName').textContent = recipe.name;
    document.getElementById('recipeImage').src = recipe.image;
    document.getElementById('recipeImage').alt = recipe.name;
    
    const ingredientsList = document.getElementById('ingredients');
    recipe.ingredients.forEach(ingredient => {
        const li = document.createElement('li');
        li.textContent = ingredient;
        ingredientsList.appendChild(li);
    });
    
    const instructionsList = document.getElementById('instructions');
    recipe.instructions.forEach(instruction => {
        const li = document.createElement('li');
        li.textContent = instruction;
        instructionsList.appendChild(li);
    });
}

function toggleAudio() {
    if (isPlaying) {
        window.speechSynthesis.pause();
        isPlaying = false;
        isPaused = true;
        document.getElementById('playBtn').textContent = '▶ המשך השמעה';
    } else if (isPaused) {
        window.speechSynthesis.resume();
        isPlaying = true;
        isPaused = false;
        document.getElementById('playBtn').textContent = '⏸ עצור השמעה';
    } else {
        const id = getRecipeId();
        let recipe = recipesData[id];
        
        if (!recipe) {
            const currentUser = JSON.parse(localStorage.getItem('currentUser'));
            if (currentUser) {
                const customRecipes = JSON.parse(localStorage.getItem(`customRecipes_${currentUser.email}`)) || [];
                const customRecipe = customRecipes.find(r => r.details.id == id);
                if (customRecipe) recipe = customRecipe.details;
            }
        }
        
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        const settings = currentUser ? 
            JSON.parse(localStorage.getItem(`settings_${currentUser.email}`)) || { pauseDelay: 0.5 } : 
            { pauseDelay: 0.5 };
        
        let textParts = [];
        textParts.push(`מתכון ל${recipe.name}.`);
        textParts.push('חומרים:');
        recipe.ingredients.forEach(ingredient => textParts.push(ingredient));
        textParts.push('אופן ההכנה:');
        recipe.instructions.forEach((instruction, index) => textParts.push(`שלב ${index + 1}. ${instruction}`));
        
        const pauseText = ', '.repeat(Math.floor(settings.pauseDelay * 3));
        const text = textParts.join(pauseText);
        
        speech = new SpeechSynthesisUtterance(text);
        speech.lang = 'he-IL';
        speech.rate = 0.85;
        speech.pitch = 1.3;
        speech.volume = 1;
        
        const setVoice = () => {
            const voices = window.speechSynthesis.getVoices();
            const femaleVoice = voices.find(voice => 
                voice.lang.startsWith('he') && 
                (voice.name.includes('female') || voice.name.includes('Female') || 
                 voice.name.includes('נשי') || voice.gender === 'female')
            ) || voices.find(voice => voice.lang.startsWith('he'));
            
            if (femaleVoice) {
                speech.voice = femaleVoice;
            }
        };
        
        if (window.speechSynthesis.getVoices().length > 0) {
            setVoice();
        } else {
            window.speechSynthesis.onvoiceschanged = setVoice;
        }
        
        speech.onend = () => {
            isPlaying = false;
            isPaused = false;
            document.getElementById('playBtn').textContent = '▶ השמע מתכון';
        };
        
        window.speechSynthesis.speak(speech);
        isPlaying = true;
        document.getElementById('playBtn').textContent = '⏸ עצור השמעה';
    }
}

window.addEventListener('beforeunload', () => {
    window.speechSynthesis.cancel();
});

displayRecipe();
