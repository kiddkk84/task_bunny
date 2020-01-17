# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{   name: 'Star Wars' }, {   name: 'Lord of the Rings' }])
#   Character.create(  name: 'Luke', movie: movies.first)




User.destroy_all
Category.destroy_all
Task.destroy_all

User.create!(
  username: 'Guest',
  password: 'test123',
  firstname: 'Hello',
  lastname: 'World',
  email: 'guest.password@test.com'
)


User.create!(
    username: 'mtest1',
    password: 'test123',
    firstname: 'mike1',
    lastname: 'test1',
    email: 'mtest1@test.com'
)

User.create!(
    username: 'mtest2',
    password: 'test123',
    firstname: 'mike2',
    lastname: 'test2',
    email: 'mtest2@test.com'
)

User.create!(
    username: 'mtest3',
    password: 'test123',
    firstname: 'mike3',
    lastname: 'test3',
    email: 'mtest3@test.com'
)

User.create!(
    username: 'mtest4',
    password: 'test123',
    firstname: 'mike4',
    lastname: 'test4',
    email: 'mtest4@test.com'
)

User.create!(
    username: 'mtest5',
    password: 'test123',
    firstname: 'mike5',
    lastname: 'test5',
    email: 'mtest5@test.com'
)


User.create!(
    username: 'mtest8',
    password: 'test123',
    firstname: 'mike8',
    lastname: 'test7',
    email: 'mtest8@test.com'
)


Category.create!(
    category_name: 'Mounting'
)

Category.create!(
    category_name: 'Moving'
)

Category.create!(
    category_name: 'IKEA Furniture Assembly'
)

Category.create!(
    category_name: 'Home Repairs'
)

Category.create!(
    category_name: 'Cleaning'
)

Category.create!(
    category_name: 'Heavy Lifting'
)

Category.create!(
    category_name: 'Personal Assistant'
)


