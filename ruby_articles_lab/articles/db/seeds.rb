# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Article.delete_all
Comment.delete_all

css_article = Article.create(content: "Some stuff...", title: "First CSS Lesson of 2017")
html_article = Article.create(content: "Stuff...", title: "What's the deal with HTML?")
javascript_article = Article.create(content: "Stuff...", title: "Js and ES6")

Comment.create(name: "I hate CSS! - John Doe", article_id: css_article.id)
Comment.create(name: "I love JS! - Jane Doe", article_id: javascript_article.id)
Comment.create(name: "This CSS article was great! - Mike R.", article_id: css_article.id)
Comment.create(name: "Do I really need to know HTML? - Rick S.", article_id: html_article.id)
