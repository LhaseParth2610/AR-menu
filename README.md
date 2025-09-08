# TasteAR - Interactive AR Restaurant Menu

TasteAR is an innovative web application that brings restaurant menus to life using Augmented Reality (AR) technology. It allows customers to view 3D models of food items in AR, providing an immersive dining experience before ordering.
## 🎥 Demo Video
Watch the live demo on YouTube: [TasteAR Demo]([https://www.youtube.com/watch?v=YOUR_VIDEO_ID](https://youtube.com/shorts/pzrFSlivcYM))

---

## 📸 Screenshots

### Landing Page  
![Landing Page](static/assets/screenshots/landing.png)

### Menu Page  
![Menu Page](static/assets/screenshots/menu.png)


## 🌟 Features

- **Interactive 3D Menu**: Browse food items with 3D model previews
- **AR Experience**: View food items in Augmented Reality using your device's camera
- **Category Navigation**: Easy browsing through different food categories
- **Detailed Food Information**: View ingredients, nutritional info, and preparation time
- **Responsive Design**: Works seamlessly on both desktop and mobile devices
- **Modern UI**: Clean and intuitive user interface

### 3D Model Preview  
![3D Model](static/assets/screenshots/3dmodel.png)

### AR View  
![AR View](static/assets/screenshots/arview.png)

## 🛠️ Technologies Used

- **Frontend**:
  - HTML5, CSS3, JavaScript
  - A-Frame.js for AR functionality
  - AR.js for marker-based AR
  - Google's Model Viewer for 3D previews
  - Font Awesome for icons
  - Google Fonts for typography

- **Backend**:
  - Python Flask
  - Static file serving

## 📋 Prerequisites

- Python 3.7 or higher
- Modern web browser with WebGL support
- Device with camera for AR functionality
- AR marker (provided in the application)

## 🚀 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/3DModel.git
   cd 3DModel
   ```

2. Create and activate a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Run the application:
   ```bash
   python app.py
   ```

5. Open your browser and navigate to:
   ```
   http://localhost:5000
   ```

## 📱 Usage

1. **Browse Menu**:
   - Navigate through different food categories
   - Click on food items to view details

2. **View 3D Models**:
   - Each food item has a 3D preview
   - Interact with the model using mouse/touch controls

3. **AR Experience**:
   - Click "View in AR" on any food item
   - Allow camera access when prompted
   - Point your camera at the AR marker
   - View the 3D model in your real environment

## 📁 Project Structure

```
3DModel/
├── static/
│   ├── assets/         # AR markers and static assets
│   ├── models/         # 3D model files
│   ├── menu-data.js    # Food item data
│   ├── menu-script.js  # Menu functionality
│   ├── script.js       # General functionality
│   └── styles.css      # Application styles
├── templates/
│   ├── index.html      # Landing page
│   ├── menu.html       # Menu page
│   └── fullar.html     # AR view page
├── app.py             # Flask application
├── requirements.txt   # Python dependencies
└── README.md         # This file
```

## 🔧 Configuration

- AR marker settings can be modified in `fullar.html`
- 3D model settings can be adjusted in `menu-script.js`
- Food items can be added/modified in `menu-data.js`

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


