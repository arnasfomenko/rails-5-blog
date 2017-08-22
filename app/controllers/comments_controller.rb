class CommentsController < ApplicationController

skip_before_action :verify_authenticity_token

  def index
    @article = Article.find(params[:article_id])
    @comment = @article.comments.all

    render json: @comment
  end

  def create
    @article = Article.find(params[:article_id])
    @comment = @article.comments.create(comment_params)

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
      params.require(:comment).permit(:commenter, :body)
    end
end
