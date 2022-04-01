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

User.create(email: "harris@harris.com", username: "harris", password: "harris", password_confirmation: "harris")

Stream.create(user_id: 1, mux_id: "ZEBrNTpHC02iUah025KM3te6ylM7W4S4silsrFtUkn3Ag", stream_key: "831b5bde-cd8a-5bc4-115d-4ba34b19f481")
Stream.create(user_id: 1, mux_id: "eHiP9j8iOKnOWDlme900xqN8j01rkhv7Zoe1ZtmOcDZRo", stream_key: "30aa2737-f4b2-d17f-5eb6-6af011f2af33")
Stream.create(user_id: 2, mux_id: "UpeSCQxUpDoqiOypwte2ASs4uBizHTfr8QWtaMot40200", stream_key: "3a297829-abb4-ca1f-0ed4-f8b0d9f6964b")

Technology.create(name: "unreal engine")
Technology.create(name: "javascript")
Technology.create(name: "ruby")
Technology.create(name: "python")
Technology.create(name: "react")
Technology.create(name: "sql")
Technology.create(name: "golang")
Technology.create(name: "java")
Technology.create(name: "unity")
Technology.create(name: "c")
Technology.create(name: "c++")
Technology.create(name: "typescript")
Technology.create(name: "rails")
Technology.create(name: "vue")
Technology.create(name: "angular")
Technology.create(name: "node")
Technology.create(name: "express")
Technology.create(name: "html")
Technology.create(name: "css")
Technology.create(name: "swift")
Technology.create(name: "kotlin")
Technology.create(name: "miscellaneous")
