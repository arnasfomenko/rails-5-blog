class Comment < ApplicationRecord
  validates :body, presence: true,
                length: { minimum: 5 }

  belongs_to :article
  belongs_to :user
end
