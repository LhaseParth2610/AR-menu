from flask import Flask, render_template, send_from_directory
import os

app = Flask(__name__, 
    static_folder='static',  # Serve static files from static directory
    template_folder='static' # Serve templates from static directory
)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/menu')
def menu():
    return render_template('menu.html')

@app.route('/<path:path>')
def serve_static(path):
    return send_from_directory('static', path)

if __name__ == '__main__':
    app.run(debug=True) 