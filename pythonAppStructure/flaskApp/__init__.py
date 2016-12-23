from flask import Flask
from config import Config
from extensions import db
from views import author_bp

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)
    db.init_app(app)
    # app.register_blueprint(author_bp)
    return app;