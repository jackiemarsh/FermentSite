json.partial! "api/users/user", user: @user
# json.imageUrl url_for(@user.image) if @user.image.attached?