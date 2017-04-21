class ArticlesController < ApplicationController
  def index
  	@message = "This is a message!"
  	@articles = Article.all
  end
end
