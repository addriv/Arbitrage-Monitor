class CreateApiKucoinApis < ActiveRecord::Migration[5.1]
  def change
    create_table :api_kucoin_apis do |t|

      t.timestamps
    end
  end
end
