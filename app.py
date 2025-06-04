from flask import Flask, render_template, send_from_directory, redirect, url_for
import os
import logging

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = Flask(__name__, 
    static_folder='static',
    template_folder='templates'
)

@app.route('/')
def index():
    try:
        logger.info('Accessing root route')
        return render_template('index.html')
    except Exception as e:
        logger.error(f'Error rendering index.html: {str(e)}')
        return redirect(url_for('menu'))

@app.route('/menu')
def menu():
    try:
        logger.info('Accessing menu route')
        return render_template('menu.html')
    except Exception as e:
        logger.error(f'Error rendering menu.html: {str(e)}')
        return f"Error: {str(e)}", 500

@app.route('/fullar')
def fullar():
    try:
        logger.info('Accessing fullar route')
        return render_template('fullar.html')
    except Exception as e:
        logger.error(f'Error rendering fullar.html: {str(e)}')
        return f"Error: {str(e)}", 500

@app.route('/<path:path>')
def serve_static(path):
    try:
        logger.info(f'Serving static file: {path}')
        return send_from_directory('static', path)
    except Exception as e:
        logger.error(f'Error serving static file {path}: {str(e)}')
        return f"File not found: {path}", 404

# Add error handlers
@app.errorhandler(404)
def not_found_error(error):
    logger.error(f'404 error: {str(error)}')
    return redirect(url_for('menu'))

@app.errorhandler(500)
def internal_error(error):
    logger.error(f'500 error: {str(error)}')
    return redirect(url_for('menu'))