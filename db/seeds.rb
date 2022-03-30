# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Favorite.destroy_all
Stream.destroy_all
Technology.destroy_all

User.create(email: "l@l.com", username: "l", password: "l", password_confirmation: "l")
User.create(email: "j@j.com", username: "j", password: "j", password_confirmation: "j")
User.create(email: "p@p.com", username: "p", password: "p", password_confirmation: "p")

Favorite.create(technology_id: 1, user_id: 1, stream_id: 1)
Favorite.create(technology_id: 1, user_id: 1, twitch_streamer: "a_seagull")
Favorite.create(technology_id: 3, user_id: 2, video_id: "27axs9dO7AE")

Stream.create(user_id: 1, mux_id: "ZEBrNTpHC02iUah025KM3te6ylM7W4S4silsrFtUkn3Ag", stream_key: "831b5bde-cd8a-5bc4-115d-4ba34b19f481")
Stream.create(user_id: 1, mux_id: "eHiP9j8iOKnOWDlme900xqN8j01rkhv7Zoe1ZtmOcDZRo", stream_key: "30aa2737-f4b2-d17f-5eb6-6af011f2af33")
Stream.create(user_id: 2, mux_id: "UpeSCQxUpDoqiOypwte2ASs4uBizHTfr8QWtaMot40200", stream_key: "3a297829-abb4-ca1f-0ed4-f8b0d9f6964b")

Technology.create(name: "unreal engine")
Technology.create(name: "javascript")
Technology.create(name: "ruby")
Technology.create(name: "python")
