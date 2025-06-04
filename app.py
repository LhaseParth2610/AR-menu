from flask import Flask, render_template, send_from_directory
import os

app = Flask(__name__, 
    static_folder='static',
    template_folder='templates'
)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/menu')
def menu():
    return render_template('menu.html')

@app.route('/fullar')
def fullar():
    return render_template('fullar.html')

@app.route('/<path:path>')
def serve_static(path):
    return send_from_directory('static', path)