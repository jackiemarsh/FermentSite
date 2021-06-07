# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri';
User.delete_all
Event.delete_all
# rsvp.delete_all

user1 = User.create(username: "ilovefedoras", password: 12345678, email: "garrettoliver@gmail.com")
user2 = User.create!(username: "thegdfther", password: 12345678, email: "michael.jackson@yahoo.com")
user3 = User.create!(username: "callmefritz", password: 12345678, email: "fritz@maytag.com")
user4 = User.create!(username: "kengrossman", password: 12345678, email: "ken@sierranevada.com")
user5 = User.create!(username: "certifieddrinker", password: 12345678, email: "raydaniels@cicerone.com")
user6 = User.create!(username: "thewatchdog", password: 12345678, email: "bob@brewersassoc.com")

event1 = Event.create!(title: "20th Annual Beer Fest on the Bay", description: "Are you a beer lover who wants to taste as many beers as possible or are you an aficionado seeking out the rarest brews? With over 50 craft brewers represented, we have something for everyone", location: "San Francisco", start_date: Date.parse("14 Jul 2021"), author_id: user1.id)
event2 = Event.create!(title: "Homebrew Competition", description: "Put your homebrew to the test!", location: "San Francisco", start_date: Date.parse("14 Jul 2021"), author_id: user1.id)
event3 = Event.create!(title: "Barleywine Fest", description: "Sample the largest selection of this unique and niche style, and cast your vote on which one is your favorite", location: "San Francisco", start_date: Date.parse("14 Jul 2021"), author_id: user1.id)

event1.image.attach(io: open("https://fermentsite-seeds.s3-us-west-1.amazonaws.com/beer-bread-gingham.jpg"), filename:'beer-bread-gingham.jpg')