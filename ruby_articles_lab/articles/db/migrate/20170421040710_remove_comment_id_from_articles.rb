class RemoveCommentIdFromArticles < ActiveRecord::Migration[5.0]
  def change
    remove_column :articles, :comment_id, :integer
  end
end
