
// Menu data structure
const menuData = {
    bestsellers: [
        {
            id: 1,
            name: "Signature Burger",
            description: "Our famous double-patty burger with special sauce, fresh lettuce, and premium cheese",
            price: "$12.99",
            type: "non-veg",
            serves: "1-2 people",
            calories: "650 cal",
            prepTime: "15 mins",
            ingredients: ["Beef Patty", "Cheese", "Lettuce", "Tomato", "Special Sauce"],
            icon: "🍔"
        },
        {
            id: 2,
            name: "Margherita Pizza",
            description: "Classic Italian pizza with fresh mozzarella, basil, and our homemade tomato sauce",
            price: "$14.99",
            type: "veg",
            serves: "2-3 people",
            calories: "280 cal per slice",
            prepTime: "20 mins",
            ingredients: ["Mozzarella", "Fresh Basil", "Tomato Sauce", "Olive Oil"],
            icon: "🍕"
        },
        {
            id: 3,
            name: "Chocolate Lava Cake",
            description: "Decadent chocolate cake with a molten chocolate center, served warm",
            price: "$7.99",
            type: "veg",
            serves: "1-2 people",
            calories: "450 cal",
            prepTime: "12 mins",
            ingredients: ["Dark Chocolate", "Butter", "Eggs", "Flour", "Sugar"],
            icon: "🍰"
        }
    ],
    pizza: [
        {
            id: 4,
            name: "Margherita Pizza",
            description: "Classic Italian pizza with fresh mozzarella, basil, and our homemade tomato sauce",
            price: "$14.99",
            type: "veg",
            serves: "2-3 people",
            calories: "280 cal per slice",
            prepTime: "20 mins",
            ingredients: ["Mozzarella", "Fresh Basil", "Tomato Sauce", "Olive Oil"],
            icon: "🍕"
        },
        {
            id: 5,
            name: "Pepperoni Supreme",
            description: "Loaded with premium pepperoni, mozzarella cheese, and our signature pizza sauce",
            price: "$16.99",
            type: "non-veg",
            serves: "2-3 people",
            calories: "320 cal per slice",
            prepTime: "20 mins",
            ingredients: ["Pepperoni", "Mozzarella", "Pizza Sauce", "Italian Herbs"],
            icon: "🍕"
        },
        {
            id: 6,
            name: "Veggie Deluxe",
            description: "Fresh vegetables including bell peppers, mushrooms, olives, and onions",
            price: "$15.99",
            type: "veg",
            serves: "2-3 people",
            calories: "260 cal per slice",
            prepTime: "22 mins",
            ingredients: ["Bell Peppers", "Mushrooms", "Olives", "Onions", "Cheese"],
            icon: "🍕"
        }
    ],
    burgers: [
        {
            id: 7,
            name: "Signature Burger",
            description: "Our famous double-patty burger with special sauce, fresh lettuce, and premium cheese",
            price: "$12.99",
            type: "non-veg",
            serves: "1-2 people",
            calories: "650 cal",
            prepTime: "15 mins",
            ingredients: ["Beef Patty", "Cheese", "Lettuce", "Tomato", "Special Sauce"],
            icon: "🍔"
        },
        {
            id: 8,
            name: "Chicken Deluxe",
            description: "Crispy chicken breast with avocado, bacon, and chipotle mayo",
            price: "$11.99",
            type: "non-veg",
            serves: "1-2 people",
            calories: "580 cal",
            prepTime: "18 mins",
            ingredients: ["Chicken Breast", "Avocado", "Bacon", "Chipotle Mayo"],
            icon: "🍔"
        },
        {
            id: 9,
            name: "Veggie Burger",
            description: "Plant-based patty with fresh vegetables and herb mayo",
            price: "$10.99",
            type: "veg",
            serves: "1-2 people",
            calories: "420 cal",
            prepTime: "15 mins",
            ingredients: ["Plant Patty", "Lettuce", "Tomato", "Herb Mayo"],
            icon: "🍔"
        }
    ],
    beverages: [
        {
            id: 10,
            name: "Fresh Orange Juice",
            description: "Freshly squeezed orange juice with no added sugar",
            price: "$4.99",
            type: "veg",
            serves: "1 person",
            calories: "110 cal",
            prepTime: "3 mins",
            ingredients: ["Fresh Oranges"],
            icon: "🧃"
        },
        {
            id: 11,
            name: "Espresso",
            description: "Rich, bold espresso shot made from premium coffee beans",
            price: "$3.99",
            type: "veg",
            serves: "1 person",
            calories: "5 cal",
            prepTime: "2 mins",
            ingredients: ["Coffee Beans"],
            icon: "☕"
        },
        {
            id: 12,
            name: "Mango Smoothie",
            description: "Creamy mango smoothie with fresh fruit and yogurt",
            price: "$5.99",
            type: "veg",
            serves: "1 person",
            calories: "180 cal",
            prepTime: "5 mins",
            ingredients: ["Mango", "Yogurt", "Honey"],
            icon: "🥤"
        }
    ],
    desserts: [
        {
            id: 13,
            name: "Chocolate Lava Cake",
            description: "Decadent chocolate cake with a molten chocolate center, served warm",
            price: "$7.99",
            type: "veg",
            serves: "1-2 people",
            calories: "450 cal",
            prepTime: "12 mins",
            ingredients: ["Dark Chocolate", "Butter", "Eggs", "Flour", "Sugar"],
            icon: "🍰"
        },
        {
            id: 14,
            name: "Tiramisu",
            description: "Classic Italian dessert with coffee-soaked ladyfingers and mascarpone",
            price: "$6.99",
            type: "veg",
            serves: "1 person",
            calories: "380 cal",
            prepTime: "5 mins",
            ingredients: ["Mascarpone", "Coffee", "Ladyfingers", "Cocoa"],
            icon: "🍰"
        },
        {
            id: 15,
            name: "Ice Cream Sundae",
            description: "Vanilla ice cream with chocolate sauce, nuts, and a cherry on top",
            price: "$5.99",
            type: "veg",
            serves: "1 person",
            calories: "320 cal",
            prepTime: "3 mins",
            ingredients: ["Vanilla Ice Cream", "Chocolate Sauce", "Nuts", "Cherry"],
            icon: "🍨"
        }
    ]
};
