class CommentsController < ApplicationController
  before_action :authenticate_user!, only: [:create, :destroy]

  def index
      @article = Article.find(params[:article_id])
      @comments = @article.comments.all
      commentArray = []

          @comments.each do |item|
            commentArray.push(
                id: item.id,
                body: item.body,
                article_id:item.article_id,
                date: item.created_at.strftime('%-H:%-M:%-S %-b %-d, %Y'),
                commenter: {
                  user_id: item.user.id,
                  user_email: item.user.email
                },
            )
          end

      render json: commentArray
  end

  def create
    @comment = current_user.comments.create(comment_params.merge(article_id: params[:article_id]))

    render json: {
        id: @comment.id,
        body: @comment.body,
        article_id: @comment.article_id,
        date: @comment.created_at.strftime('%-H:%-M:%-S %-b %-d, %Y'),
        commenter: {
            user_id: @comment.user.id,
            user_email: @comment.user.email
        }
    }
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
