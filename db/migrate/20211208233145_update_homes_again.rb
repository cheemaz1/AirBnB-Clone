class UpdateHomesAgain < ActiveRecord::Migration[6.1]
  def change
    add_column :homes, :host_name, :string


  end
end
