let currentCategory = 'bestsellers';
let currentItemId = null;

document.addEventListener('DOMContentLoaded', function() {
    loadCategory(currentCategory);
    setupCategoryNavigation();
    
    setTimeout(() => {
        const sidebar = document.querySelector('.category-sidebar');
        const content = document.querySelector('.menu-content');
        if (sidebar) sidebar.style.opacity = '1';
        if (content) content.style.opacity = '1';
    }, 300);
});

function loadCategory(category) {
    currentCategory = category;
    const menuGrid = document.getElementById('menuGrid');
    const categoryTitle = document.getElementById('currentCategory');
    
    const categoryNames = {
        bestsellers: 'Best Sellers',
        pizza: 'Pizza',
        burgers: 'Burgers',
        beverages: 'Beverages',
        desserts: 'Desserts'
    };
    
    categoryTitle.textContent = categoryNames[category];
    
    menuGrid.innerHTML = '';
    
    setTimeout(() => {
        menuGrid.innerHTML = '';
        
        const items = menuData[category] || [];
        
        items.forEach((item, index) => {
            const card = createFoodCard(item);
            menuGrid.appendChild(card);
            
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 150);
        });
    }, 300);
}

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
    
    card.addEventListener('click', () => openFoodDetail(item.id));
    
    return card;
}

function setupCategoryNavigation() {
    const categoryItems = document.querySelectorAll('.category-item');
    
    categoryItems.forEach(item => {
        item.addEventListener('click', () => {
            categoryItems.forEach(cat => cat.classList.remove('active'));
            item.classList.add('active');
            const category = item.getAttribute('data-category');
            loadCategory(category);
        });
    });
}

function openFoodDetail(itemId) {
    console.log('openFoodDetail called with itemId:', itemId);
    try {
        const item = findFoodItem(itemId);
        if (!item) {
            console.error('Item not found for ID:', itemId);
            alert('Food item not found.');
            return;
        }

        currentItemId = itemId;
        console.log('Set currentItemId to:', currentItemId);

        const modelViewer = document.getElementById('foodModel');
        const loadingDiv = modelViewer.querySelector('.loading-3d');
        if (modelViewer && item.modelPath) {
            modelViewer.src = '/static/' + item.modelPath;
            console.log('Set model path to:', '/static/' + item.modelPath);
            loadingDiv.classList.remove('hidden');
        } else {
            modelViewer.src = '';
            loadingDiv.classList.add('hidden');
            loadingDiv.innerHTML = '<p>No 3D model available.</p>';
            console.warn(`Item with ID ${itemId} has no modelPath.`);
        }

        document.getElementById('foodDetailName').textContent = item.name;
        document.getElementById('foodType').textContent = item.type === 'veg' ? 'VEG' : 'NON-VEG';
        document.getElementById('foodPrice').textContent = item.price;
        document.getElementById('foodDescription').textContent = item.description;
        document.getElementById('foodServes').textContent = item.serves;
        document.getElementById('foodCalories').textContent = item.calories;
        document.getElementById('foodPrepTime').textContent = item.prepTime;

        const ingredientsList = document.getElementById('foodIngredients');
        ingredientsList.innerHTML = '';
        item.ingredients.forEach(ingredient => {
            const tag = document.createElement('span');
            tag.className = 'ingredient-tag';
            tag.textContent = ingredient;
            ingredientsList.appendChild(tag);
        });

        document.getElementById('foodDetailModal').style.display = 'block';
        document.body.style.overflow = 'hidden';
    } catch (error) {
        console.error('Error in openFoodDetail:', error);
        alert('Error loading food details.');
    }
}

function closeFoodDetail() {
    document.getElementById('foodDetailModal').style.display = 'none';
    document.body.style.overflow = 'auto';
    currentItemId = null;
}

function findFoodItem(idToFind) {
    const numericalId = parseInt(idToFind, 10);
    if (isNaN(numericalId)) return null;

    for (const category in menuData) {
        const item = menuData[category].find(item => item.id === numericalId);
        if (item) return item;
    }
    return null;
}

function normalizeModelSize(model, targetSize = 0.5) {
    if (typeof THREE === 'undefined' || !model) {
        console.warn("THREE.js or model element not available for normalization.");
        return;
    }

    const mesh = model.getObject3D('mesh');
    if (!mesh) {
        console.warn("Mesh not found for normalization.");
        return;
    }

    const box = new THREE.Box3().setFromObject(mesh);
    const size = box.getSize(new THREE.Vector3());
    const maxDim = Math.max(size.x, size.y, size.z);
    if (maxDim === 0) {
        console.warn("Model dimensions are zero, cannot normalize.");
        return;
    }

    const scaleFactor = targetSize / maxDim;
    model.setAttribute('scale', { x: scaleFactor, y: scaleFactor, z: scaleFactor });
    console.log(`Normalized model: ${model.id || 'entity'} with scale factor: ${scaleFactor.toFixed(3)}`);
}

function openARView() {
    console.log('Attempting to open AR view');
    if (currentItemId === null) {
        console.error('No food item selected for AR view.');
        alert('Please select a food item first.');
        return;
    }

    const foodItem = findFoodItem(currentItemId);
    if (foodItem && foodItem.modelPath) {
        console.log(`Opening AR view for item ${currentItemId} with model: ${foodItem.modelPath}`);
        window.location.href = `/fullar.html?modelPath=${encodeURIComponent(foodItem.modelPath)}&name=${encodeURIComponent(foodItem.name)}`;
    } else {
        console.error('No valid model path for item ID:', currentItemId);
        alert('3D model not available for this item.');
    }
}

function closeARView() {
    console.log('closeARView called but not implemented (AR handled by fullar.html)');
}

function goBack() {
    window.history.back();
}

function openSettings() {
    document.getElementById('settingsModal').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeSettings() {
    document.getElementById('settingsModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

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

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const foodModal = document.getElementById('foodDetailModal');
        const settingsModal = document.getElementById('settingsModal');

        if (foodModal.style.display === 'block') {
            closeFoodDetail();
        } else if (settingsModal.style.display === 'block') {
            closeSettings();
        }
    }
});

let touchStartY = 0;
let touchEndY = 0;

document.addEventListener('touchstart', function(e) {
    touchStartY = e.changedTouches[0].screenY;
    if (e.target.closest('.food-card')) {
        e.target.closest('.food-card').style.transform = 'scale(0.98)';
    }
});

document.addEventListener('touchend', function(e) {
    touchEndY = e.changedTouches[0].screenY;
    if (e.target.closest('.food-card')) {
        setTimeout(() => {
            e.target.closest('.food-card').style.transform = '';
        }, 150);
    }
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const swipeDistance = touchStartY - touchEndY;
    if (Math.abs(swipeDistance) > swipeThreshold) {
        console.log('Swipe detected:', swipeDistance > 0 ? 'up' : 'down');
    }
}

document.querySelector('.category-sidebar').addEventListener('wheel', function(e) {
    e.preventDefault();
    this.scrollLeft += e.deltaY;
});

if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        console.log('Service worker support detected');
    });
}

function getCurrentCategoryItems() {
    return menuData[currentCategory] || [];
}

function findItemIndexInCategory(itemId) {
    const items = getCurrentCategoryItems();
    return items.findIndex(item => item.id === parseInt(itemId, 10));
}

function navigateNextItem() {
    console.log('navigateNextItem function called');
    try {
        const items = getCurrentCategoryItems();
        if (items.length === 0 || currentItemId === null) {
            console.warn('Cannot navigate: items array is empty or currentItemId is null');
            return;
        }

        let currentIndex = findItemIndexInCategory(currentItemId);
        if (currentIndex === -1) {
            console.warn(`Current item ID ${currentItemId} not found in category ${currentCategory}.`);
            return;
        }

        const nextIndex = (currentIndex + 1) % items.length;
        openFoodDetail(items[nextIndex].id);
    } catch (error) {
        console.error('Error in navigateNextItem:', error);
    }
}

function navigatePreviousItem() {
    console.log('navigatePreviousItem function called');
    try {
        const items = getCurrentCategoryItems();
        if (items.length === 0 || currentItemId === null) {
            console.warn('Cannot navigate: items array is empty or currentItemId is null');
            return;
        }

        let currentIndex = findItemIndexInCategory(currentItemId);
        if (currentIndex === -1) {
            console.warn(`Current item ID ${currentItemId} not found in category ${currentCategory}.`);
            return;
        }

        const previousIndex = (currentIndex - 1 + items.length) % items.length;
        openFoodDetail(items[previousIndex].id);
    } catch (error) {
        console.error('Error in navigatePreviousItem:', error);
    }
}