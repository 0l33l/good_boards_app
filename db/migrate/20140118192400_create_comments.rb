class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
    	t.integer :user_id, :null => false
    	t.integer :review_id, :null => false
    	t.text :body, :null => false

      t.timestamps
    end
    add_index :comments, :user_id
    add_index :comments, :review_id
  end
end
