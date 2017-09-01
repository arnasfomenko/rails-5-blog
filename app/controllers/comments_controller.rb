class CommentsController < ApplicationController
  before_action :authenticate_user!, only: [:create, :destroy]

  def index
    render json: (
      Comment.where(article_id: params[:article_id]).map do |comment|
        {
          id: comment.id,
          body: comment.body,
          article_id:comment.article_id,
          date: comment.created_at.strftime('%-H:%-M:%-S %-b %-d, %Y'),
          commenter: {
            user_id: comment.user.id,
            user_email: comment.user.email
          }
        }
      end
    )
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
    current_user.comments.find(params[:id]).destroy
    redirect_to article_path(params[:article_id])
  end

  private
    def comment_params
      params.require(:comment).permit(:body)
    end

end
