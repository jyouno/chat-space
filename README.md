#DB設計

## membersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

###Association
- belongs_to :group
- belongs_to :user

## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|e-mail|string|null: false|
|password|string|null: false|

###Association
- has_many :messages
- has_many :members
- has_many :groups, through: :members

##groupsテーブル

|Column|Type|Options|
|------|----|-------|
|group-name|string|null: false|

###Association
- has_many :messages
- has_many :members
- has_many :users, through: :members

##messagesテーブル

|Column|Type|Options|
|------|----|-------|
|body|text|null: false|
|image|string|""|
|group_id|integer|null: false|
|user_id|integer|null: false|

###Association
- belongs_to :group
- belongs_to :user
