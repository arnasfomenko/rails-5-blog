class CommentsController < ApplicationController
  #before_action :authenticate_user!, only: [:create, :destroy]

  def index
    @article = Article.find(params[:article_id])
    @comment = @article.comments.all

    render json: @comment
  end

  def create
    @comment = current_user.comments.create(comment_params.merge(article_id: params[:article_id]))

    render json: @comment
  end

  def destroy
    @article = Article.find(params[:article_id])
    @comment = @article.comments.find(params[:id])
    @comment.destroy
    redirect_to article_path(@article)
  end

  private
    def comment_params
      params.require(:comment).permit(:body)
    end
end
