from flask import *
from flaskApp import create_app

app = Flask(__name__, static_url_path='/static')

@app.route('/', methods=['GET'])
def metrics():
    return redirect(url_for('static', filename='jenkins_analytics.html'))

app = create_app()
if __name__ == '__main__':
    app.run()