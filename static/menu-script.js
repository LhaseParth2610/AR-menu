// Menu page functionality
let currentCategory = 'bestsellers';
let scene, camera, renderer;

// Initialize the menu page
document.addEventListener('DOMContentLoaded', function() {
    loadCategory(currentCategory);
    setupCategoryNavigation();
    animate3DScene();
    
    // Add smooth entrance animations
    setTimeout(() => {
        const sidebar = document.querySelector('.category-sidebar');
        const content = document.querySelector('.menu-content');
        if (sidebar) sidebar.style.opacity = '1';
        if (content) content.style.opacity = '1';
    }, 300);
});

// Load food items for a specific category
function loadCategory(category) {
    currentCategory = category;
    const menuGrid = document.getElementById('menuGrid');
    const categoryTitle = document.getElementById('currentCategory');
    
    // Update category title
    const categoryNames = {
        bestsellers: 'Best Sellers',
        pizza: 'Pizza',
        burgers: 'Burgers',
        beverages: 'Beverages',
        desserts: 'Desserts'
    };
    
    categoryTitle.textContent = categoryNames[category];
    
    // Clear existing items
    menuGrid.innerHTML = '';
    
    // Add loading animation
    menuGrid.innerHTML = '<div class="loading">Loading delicious items...</div>';
    
    setTimeout(() => {
        menuGrid.innerHTML = '';
        
        // Get items for this category
        const items = menuData[category] || [];
        
        // Create food cards
        items.forEach((item, index) => {
            const card = createFoodCard(item);
            menuGrid.appendChild(card);
            
            // Animate card entrance
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 150);
        });
    }, 300);
}

// Create a food card element
function createFoodCard(item) {
    const card = document.createElement('div');
    card.className = 'food-card';
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.6s ease';
    
    card.innerHTML = `
        <div class="food-image">
            <div class="food-icon">${item.icon}</div>
            <div class="food-badges">
                <span class="food-badge ${item.type}">${item.type === 'veg' ? 'VEG' : 'NON-VEG'}</span>
                <span class="price-badge">${item.price}</span>
            </div>
        </div>
        <div class="food-content">
            <div class="food-name">${item.name}</div>
            <div class="food-description">${item.description}</div>
        </div>
    `;
    
    // Add click event to open detail modal
    card.addEventListener('click', () => openFoodDetail(item.id));
    
    return card;
}

// Setup category navigation
function setupCategoryNavigation() {
    const categoryItems = document.querySelectorAll('.category-item');
    
    categoryItems.forEach(item => {
        item.addEventListener('click', () => {
            // Remove active class from all items
            categoryItems.forEach(cat => cat.classList.remove('active'));
            
            // Add active class to clicked item
            item.classList.add('active');
            
            // Load the selected category
            const category = item.getAttribute('data-category');
            loadCategory(category);
        });
    });
}

// Function to open food detail modal
function openFoodDetail(itemId) {
    const item = findFoodItem(itemId);
    if (!item) return;

    // Update model viewer
    const modelViewer = document.getElementById('foodModel');
    modelViewer.src = item.modelPath;

    // Update food information
    document.getElementById('foodDetailName').textContent = item.name;
    document.getElementById('foodType').textContent = item.type;
    document.getElementById('foodPrice').textContent = item.price;
    document.getElementById('foodDescription').textContent = item.description;
    document.getElementById('foodServes').textContent = item.serves;
    document.getElementById('foodCalories').textContent = item.calories;
    document.getElementById('foodPrepTime').textContent = item.prepTime;

    // Update ingredients
    const ingredientsList = document.getElementById('foodIngredients');
    ingredientsList.innerHTML = '';
    item.ingredients.forEach(ingredient => {
        const tag = document.createElement('span');
        tag.className = 'ingredient-tag';
        tag.textContent = ingredient;
        ingredientsList.appendChild(tag);
    });

    // Show the modal
    document.getElementById('foodDetailModal').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Function to close food detail modal
function closeFoodDetail() {
    document.getElementById('foodDetailModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Function to find food item by ID
function findFoodItem(id) {
    for (const category in menuData) {
        const item = menuData[category].find(item => item.id === id);
        if (item) return item;
    }
    return null;
}

// Initialize 3D viewer
function init3DViewer(item) {
    const container = document.getElementById('food3D');
    
    // Clear existing content
    container.innerHTML = '';
    
    // Create a simple 3D representation
    const viewer = document.createElement('div');
    viewer.style.cssText = `
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 64px;
        background: linear-gradient(45deg, #ff6b35, #f7931e);
        border-radius: 15px;
        color: white;
        text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        animation: rotate3d 6s ease-in-out infinite;
    `;
    
    viewer.textContent = item.icon;
    container.appendChild(viewer);
    
    // Add 3D rotation animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes rotate3d {
            0%, 100% { transform: rotateY(0deg) rotateX(0deg); }
            25% { transform: rotateY(90deg) rotateX(0deg); }
            50% { transform: rotateY(180deg) rotateX(10deg); }
            75% { transform: rotateY(270deg) rotateX(0deg); }
        }
    `;
    document.head.appendChild(style);
}

// Animate 3D scene
function animate3DScene() {
    // This would be where Three.js animation would go
    // For now, we'll use CSS animations for the food icons
    setInterval(() => {
        const foodIcons = document.querySelectorAll('.food-icon');
        foodIcons.forEach(icon => {
            if (!icon.style.animation) {
                icon.style.animation = 'float 3s ease-in-out infinite';
            }
        });
    }, 1000);
}

// Function to open AR view
function openARView() {
    const modelViewer = document.getElementById('foodModel');
    modelViewer.activateAR();
}

// Function to go back
function goBack() {
    window.history.back();
}

// Function to open settings
function openSettings() {
    document.getElementById('settingsModal').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Function to close settings
function closeSettings() {
    document.getElementById('settingsModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modals when clicking outside
window.onclick = function(event) {
    const foodModal = document.getElementById('foodDetailModal');
    const settingsModal = document.getElementById('settingsModal');
    
    if (event.target === foodModal) {
        closeFoodDetail();
    }
    if (event.target === settingsModal) {
        closeSettings();
    }
}

// Close modals with escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeFoodDetail();
        closeSettings();
    }
});

// Touch gestures for mobile
let touchStartY = 0;
let touchEndY = 0;

document.addEventListener('touchstart', function(e) {
    touchStartY = e.changedTouches[0].screenY;
    
    // Add touch feedback
    if (e.target.closest('.food-card')) {
        e.target.closest('.food-card').style.transform = 'scale(0.98)';
    }
});

document.addEventListener('touchend', function(e) {
    touchEndY = e.changedTouches[0].screenY;
    
    // Remove touch feedback
    if (e.target.closest('.food-card')) {
        setTimeout(() => {
            e.target.closest('.food-card').style.transform = '';
        }, 150);
    }
    
    // Handle swipe gestures
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const swipeDistance = touchStartY - touchEndY;
    
    // You could add swipe navigation between categories here
    if (Math.abs(swipeDistance) > swipeThreshold) {
        // Swipe detected
        console.log('Swipe detected:', swipeDistance > 0 ? 'up' : 'down');
    }
}

// Add smooth scrolling for category sidebar
document.querySelector('.category-sidebar').addEventListener('wheel', function(e) {
    e.preventDefault();
    this.scrollLeft += e.deltaY;
});

// Optimize performance for mobile
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        // You could register a service worker here for offline functionality
        console.log('Service worker support detected');
    });
}
