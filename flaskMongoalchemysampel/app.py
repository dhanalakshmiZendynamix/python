from flask import Flask, request,json
from flask.ext.mongoalchemy import MongoAlchemy
app = Flask(__name__)
app.config['DEBUG'] = True
app.config['MONGOALCHEMY_DATABASE'] = 'library'
db = MongoAlchemy(app)


class Author(db.Document):
    name = db.StringField()
    nickName=db.ListField(db.StringField())

class Comment(db.Document):
    user_id = db.StringField(db_field='uid')
    posted = db.StringField(db_field='posted')

class Book(db.Document):
    title = db.StringField()
    author = db.DocumentField(Author)
    year = db.IntField();
    comments = db.ListField(db.DocumentField(Comment), db_field='Comments')





@app.route('/author/new')
def new_author():
    """Creates a new author by a giving name (via GET parameter)
    e.g.: GET /author/new?name=Francisco creates a author named Francisco
    """
    author = Author(name=request.args.get('name', ''))
    author.save()
    return 'Saved :)'


# route to store list of array strings
@app.route('/book/new',methods=['POST'])
def new_book():
    request_data = request.get_json()
    print request_data
    author1 = Author(name=request_data['author'],nickName=request_data['nickName'])
    book=Book(title=request_data['title'],author=author1,year=request_data['year'])
    book.save()
    return 'Saved :)'




#route to store list of objects
@app.route('/book/object',methods=['POST'])
def object_book():
     request_data = request.get_json()
     # print request_data['Comments'][0]
     #  print request_data['Comments'][1]
     comment_a = Comment(user_id='user_a', posted='post_a')
     comment_b = Comment(user_id='user_b', posted='post_b')
     comments = [comment_a, comment_b]
     author1 = Author(name=request_data['author'],nickName=request_data['nickName'])
     book=Book(title=request_data['title'],author=author1,year=request_data['year'],comments=comments)
     book.save()

     return 'Saved :)'

# add author
@app.route('/author/save/',method=['post'])
def create_author():
    kwargs={}
    for field in('name'):
        kwargs[field]=request.args.get(field)
        author = Author(**kwargs)
        author.save()
        return "saved :):)"



@app.route('/authors/')
def list_authors():
    """List all authors.
    e.g.: GET /authors"""
    authors = Author.query.all()
    formatted_authors=[]
    for a in authors:
        print a
        formatted_authors.append({
            'name':a.name

        })
    return json.dumps({'authors':formatted_authors}),
    200,{'Content-Type':'application/json'}

if __name__ == '__main__':
    app.run()
