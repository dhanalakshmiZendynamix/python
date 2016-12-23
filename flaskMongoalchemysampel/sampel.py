#!/usr/bin/python
# -*- coding: utf-8 -*-

from flask import Flask
from flaskext.mongoalchemy import MongoAlchemy

app = Flask(__name__)
app.config['DEBUG'] = True
app.config['MONGOALCHEMY_DATABASE'] = 'book'
db = MongoAlchemy(app)

class Comment(db.Document):
    user_id = db.StringField(db_field='uid')
    posted = db.StringField(db_field='posted')

class Book(db.Document):
    title = db.StringField()
    author = db.StringField()
    comments = db.ListField(db.DocumentField(Comment), db_field='Comments')

from mongoalchemy.session import Session
def test():
    with Session.connect('book') as s:
        s.clear_collection(Book)

    save()
    test_Book()

def save():
    title = "Hello World"
    author = 'me'

    comment_a = Comment(user_id='user_a', posted='post_a')
    comment_b = Comment(user_id='user_b', posted='post_b')
    comments = [comment_a, comment_b]

    book = Book(title=title, author=author, comments=comments)
    book.save()

def test_Book():
    book = Book.query.filter({'author':'me'}).first()
    comment = book.comments[0]
    comment.posted = str(book.comments[0].posted)+'_new'
    book.save()
    print 'change posted: Book.comments[0].posted:', book.comments[0].posted
    comment_c = Comment(user_id='user_c', posted='post_c')
    book.comments.append(comment_c)
    book.save()
    print 'append: Book.comments[2].posted:', book.comments[2].posted

    query = Book.query.filter({Book.comments:{'$elemMatch':{Comment.user_id:'user_c'}}}).limit(1).first()
    print 'query type:', type(query)

if __name__ == '__main__':
    test()