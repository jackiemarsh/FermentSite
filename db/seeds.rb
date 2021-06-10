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

demoUser = User.create!(username: "demo_drinker123", password: 12345678, email: "demo@fermentsite.com")
user1 = User.create!(username: "ilovefedoras", password: 12345678, email: "garrettoliver@gmail.com")
user2 = User.create!(username: "thegdfther", password: 12345678, email: "michael.jackson@yahoo.com")
user3 = User.create!(username: "callmefritz", password: 12345678, email: "fritz@maytag.com")
user4 = User.create!(username: "kengrossman", password: 12345678, email: "ken@sierranevada.com")
user5 = User.create!(username: "certifieddrinker", password: 12345678, email: "raydaniels@cicerone.com")
user6 = User.create!(username: "thewatchdog", password: 12345678, email: "bob@brewersassoc.com")

event1 = Event.create!(title: "20th Annual Beer Fest on the Bay", description: "Are you a beer lover who wants to taste as many beers as possible or are you an aficionado seeking out the rarest brews? With over 50 craft brewers represented, we have something for everyone", location: "San Francisco", start_date: Date.parse("14 Jul 2021"), author_id: user1.id)
event2 = Event.create!(title: "Homebrew Competition", description: "Put your homebrew to the test!", location: "San Francisco", start_date: Date.parse("14 Jul 2021"), author_id: user2.id)
event3 = Event.create!(title: "Barleywine Fest", description: "Sample the largest selection of this unique and niche style, and cast your vote on which one is your favorite", location: "San Francisco", start_date: Date.parse("14 Jul 2021"), author_id: user1.id)
event4 = Event.create!(title: "BART Brew Crawl", description: "The weather is here, counties are opening back up, and we skipped a year. Let's do this!", location: "San Francisco", start_date: Date.parse("16 Jun 2021"), author_id: user3.id)
event5 = Event.create!(title: "Pints for Pups", description: "The most adorable day of drinking beer, and it benefits our furry friends. Combine great beer with a great cause!", location: "San Francisco", start_date: Date.parse("25 Aug 2021"), author_id: user1.id)
event6 = Event.create!(title: "Food Truck Picnic", description: "Sample from the best Bay Area trucks and enjoy a pint of local beer outside", location: "San Francisco", start_date: Date.parse("29 Jun 2021"), author_id: user4.id)
event7 = Event.create!(title: "Beers from Belgium", description: "Learn about the iconic beers from the most unique beer-producing country. Cicerone will be on hand to teach you about the ingredients and process, and to guide you through the flavors as you sample", location: "San Francisco", start_date: Date.parse("4 Sep 2021"), author_id: user1.id)
event8 = Event.create!(title: "Tacos and Cervezas", description: "Pair your favorite street food with your favorite beverage.", location: "San Francisco", start_date: Date.parse("18 Aug 2021"), author_id: user2.id)
event9 = Event.create!(title: "Hoppy Hour", description: "There's lots to celebrate at our happy hour with Beer Co. Special prices on pints from 4-6", location: "San Francisco", start_date: Date.parse("19 Jun 2021"), author_id: user2.id)
event10 = Event.create!(title: "Detox Retox", description: "Get your flow on with our yoga instructor then stay for a pint of craft beer. What better way to start your weekend!", location: "San Francisco", start_date: Date.parse("19 Jun 2021"), author_id: user1.id)
event11 = Event.create!(title: "Bier Garden", description: "Get your yeast stick out and learn about the strictly regulated beers of Germany", location: "San Francisco", start_date: Date.parse("22 Sep 2021"), author_id: user1.id)
event12 = Event.create!(title: "Sip and Slurp", description: "Neighborhood favorite Noodle House is showing how well some of their favorite beers can pair with their spicy and savory bowls of noods. Come for the curated 3-course meal, each course paired with a different pint.", location: "San Francisco", start_date: Date.parse("08 Sep 2021"), author_id: user1.id)
event13 = Event.create!(title: "Hops to It", description: "Learn about the (some say) most important ingredient in your IPA: the hops", location: "San Francisco", start_date: Date.parse("17 Jul 2021"), author_id: user3.id)
event14 = Event.create!(title: "Meet the Brewer", description: "Here's your chance to ask all your pressing questions to the brains (and brawn) behind your favorite brews!", location: "San Francisco", start_date: Date.parse("01 Aug 2021"), author_id: user3.id)
event15 = Event.create!(title: "Sampler Sunday", description: "If you have trouble making up your mind, come join us this Sunday for flights of our most popular offerings", location: "San Francisco", start_date: Date.parse("23 Jul 2021"), author_id: user3.id)
event16 = Event.create!(title: "Beers on the Beach", description: "Take advantage of the brief warm weather and join us for some drinks at Ocean Beach.  We'll also do our part to clean up the area!", location: "San Francisco", start_date: Date.parse("05 Jul 2021"), author_id: user2.id)
event17 = Event.create!(title: "Battle of the Brews", description: "When your favorite breweries compete, you're the winner!  Help us decide who makes the best Bay Area beers", location: "San Francisco", start_date: Date.parse("10 Oct 2021"), author_id: user2.id)
event18 = Event.create!(title: "Beer Week Opening Night", description: "Get ready for the upcoming festivities and celebrate opening night with exclusive pours", location: "San Francisco", start_date: Date.parse("25 Nov 2021"), author_id: user6.id)
event19 = Event.create!(title: "BrewCo Invitational", description: "You wait all year for this! A weekend unlike any other, with special appearances and access to the rarest pours", location: "San Francisco", start_date: Date.parse("03 Oct 2021"), author_id: user6.id)
event20 = Event.create!(title: "Laugh With Beers", description: "Come hold a beer in your hand and laugh while you're doing it! Maybe your friends will be doing it near you", location: "San Francisco", start_date: Date.parse("27 Jun 2021"), author_id: user6.id)


event1.image.attach(io: open("https://fermentsite-seeds.s3-us-west-1.amazonaws.com/bottle-cheers-sunset.jpg"), filename:'bottle-cheers-sunset.jpg')
event2.image.attach(io: open("https://fermentsite-seeds.s3-us-west-1.amazonaws.com/beertank-amber.jpg"), filename:'beertank-amber.jpg')
event3.image.attach(io: open("https://fermentsite-seeds.s3-us-west-1.amazonaws.com/tasters-tulip-cheers.jpg"), filename:'tasters-tulip-cheers.jpg')
event4.image.attach(io: open("https://fermentsite-seeds.s3-us-west-1.amazonaws.com/tasters-coasters.jpg"), filename:'tasters-coasters.jpg')
event5.image.attach(io: open("https://fermentsite-seeds.s3-us-west-1.amazonaws.com/dog-pom-beer.jpg"), filename:'dog-pom-beer.jpg')
event6.image.attach(io: open("https://fermentsite-seeds.s3-us-west-1.amazonaws.com/beer-bread-gingham.jpg"), filename:'beer-bread-gingham.jpg')
event7.image.attach(io: open("https://fermentsite-seeds.s3-us-west-1.amazonaws.com/tasters-patio-table.jpg"), filename:'tasters-patio-table.jpg')
event8.image.attach(io: open("https://fermentsite-seeds.s3-us-west-1.amazonaws.com/tasters-tacos.jpg"), filename:'tasters-tacos.jpg')
event9.image.attach(io: open("https://fermentsite-seeds.s3-us-west-1.amazonaws.com/barrel-drinkers.jpg"), filename:'barrel-drinkers.jpg')
event10.image.attach(io: open("https://fermentsite-seeds.s3-us-west-1.amazonaws.com/yoga.jpg"), filename:'yoga.jpg')
event11.image.attach(io: open("https://fermentsite-seeds.s3-us-west-1.amazonaws.com/biergarten-ferriswheel.jpg"), filename:'biergarten-ferriswheel.jpg')
event12.image.attach(io: open("https://fermentsite-seeds.s3-us-west-1.amazonaws.com/beer-noodle-bowl-restaurant.jpg"), filename:'beer-noodle-bowl-restaurant.jpg')
event13.image.attach(io: open("https://fermentsite-seeds.s3-us-west-1.amazonaws.com/hops.jpg"), filename:'hops.jpg')
event14.image.attach(io: open("https://fermentsite-seeds.s3-us-west-1.amazonaws.com/tanks-brewers.jpg"), filename:'tanks-brewers.jpg')
event15.image.attach(io: open("https://fermentsite-seeds.s3-us-west-1.amazonaws.com/tasters-palette.jpg"), filename:'tasters-palette.jpg')
event16.image.attach(io: open("https://fermentsite-seeds.s3-us-west-1.amazonaws.com/beach-tulip.jpg"), filename:'beach-tulip.jpg')
event17.image.attach(io: open("https://fermentsite-seeds.s3-us-west-1.amazonaws.com/tasters-red-sweatshirt.jpg"), filename:'tasters-red-sweatshirt.jpg')
event18.image.attach(io: open("https://fermentsite-seeds.s3-us-west-1.amazonaws.com/beer-sign.jpg"), filename:'beer-sign.jpg')
event19.image.attach(io: open("https://fermentsite-seeds.s3-us-west-1.amazonaws.com/various-beers-snacks-backlit.jpg"), filename:'various-beers-snacks-backlit.jpg')
event20.image.attach(io: open("https://fermentsite-seeds.s3-us-west-1.amazonaws.com/mural-laughing-women.jpg"), filename:'mural-laughing-women.jpg')