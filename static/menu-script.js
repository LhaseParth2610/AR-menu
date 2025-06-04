// Menu page functionality
let currentCategory = 'bestsellers';
// let scene, camera, renderer; // Three.js variables - assuming these are not needed for current menu display
let currentItemId = null; // Variable to store the ID of the currently displayed item

// Initialize the menu page
document.addEventListener('DOMContentLoaded', function() {
    loadCategory(currentCategory);
    setupCategoryNavigation();
    // Check if init3DViewer or animate3DScene are still relevant or can be removed.
    // Assuming Three.js specific setup is no longer required for the menu list view.
    
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
    
    // Add loading animation (Optional - re-add if desired)
    // menuGrid.innerHTML = '<div class="loading">Loading delicious items...</div>'; 
    
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

    currentItemId = itemId; // Store the current item ID here

    // Update model viewer (assuming model-viewer element exists in menu.html modal)
    const modelViewer = document.getElementById('foodModel');
    if (modelViewer && item.modelPath) {
         modelViewer.src = '/static/' + item.modelPath; // Use the correct static path
    } else if (modelViewer) {
        // Handle case where item has no model path
        modelViewer.src = ''; // Clear model viewer
         console.warn(`Item with ID ${itemId} has no modelPath.`);
    }

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
     currentItemId = null; // Clear current item ID when modal closes
}

// Function to find food item by ID across all categories
function findFoodItem(idToFind) {
    // Ensure idToFind is a number for strict comparison
     const numericalId = parseInt(idToFind, 10);
     if (isNaN(numericalId)) return null; // Return null if ID is not a valid number

    for (const category in menuData) {
        // Use strict equality (===) for comparison
        const item = menuData[category].find(item => item.id === numericalId);
        if (item) return item;
    }
    return null;
}

// Function to open AR view
function openARView() {
    // Check if an item is currently selected
    if (currentItemId !== null) {
        // Redirect to fullar.html with the current item ID as a query parameter
        window.location.href = `/fullar?itemId=${currentItemId}`;
    } else {
        console.error("No food item selected for AR view.");
        // Optionally, display a message to the user in the UI
    }
}

// Function to go back (likely used on fullar.html or similar)
function goBack() {
    window.history.back();
}

// Function to open settings modal
function openSettings() {
    document.getElementById('settingsModal').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Function to close settings modal
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
        // Check if any modal is open before closing
        const foodModal = document.getElementById('foodDetailModal');
        const settingsModal = document.getElementById('settingsModal');
        
        if (foodModal.style.display === 'block') {
             closeFoodDetail();
        } else if (settingsModal.style.display === 'block') {
             closeSettings();
        }
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

// --- Modal Carousel Functionality --- (New) --- 

// Function to get all food items in the current category
function getCurrentCategoryItems() {
    return menuData[currentCategory] || [];
}

// Function to find the index of an item within its category
function findItemIndexInCategory(itemId) {
    const items = getCurrentCategoryItems();
    // Ensure strict comparison with number type
    return items.findIndex(item => item.id === parseInt(itemId, 10));
}

// Function to navigate to the next item in the modal
function navigateNextItem() {
    const items = getCurrentCategoryItems();
    // Use strict comparison for null
    if (items.length === 0 || currentItemId === null) return;

    // Ensure currentItemId is treated as a number
    let currentIndex = findItemIndexInCategory(currentItemId);
     if (currentIndex === -1) {
         console.warn(`Current item ID ${currentItemId} not found in category ${currentCategory}.`);
         return; // Should not happen if logic is correct
     }

    const nextIndex = (currentIndex + 1) % items.length;
    openFoodDetail(items[nextIndex].id); // Open the detail for the next item
}

// Function to navigate to the previous item in the modal
function navigatePreviousItem() {
    const items = getCurrentCategoryItems();
    // Use strict comparison for null
    if (items.length === 0 || currentItemId === null) return;

     // Ensure currentItemId is treated as a number
    let currentIndex = findItemIndexInCategory(currentItemId);
     if (currentIndex === -1) {
          console.warn(`Current item ID ${currentItemId} not found in category ${currentCategory}.`);
          return; // Should not happen
     }

    const previousIndex = (currentIndex - 1 + items.length) % items.length; // Handle wrap around
    openFoodDetail(items[previousIndex].id); // Open the detail for the previous item
}

// You'll need to add buttons or swipe listeners in menu.html
// to call navigateNextItem() and navigatePreviousItem()
