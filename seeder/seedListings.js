const Listing = require('../models/Listing');
const mongoose = require("mongoose");
// get your mongoose string
// create your array. i inserted only 1 object here
//demoUser 6297b832fbdf777ab18c0078
// honoratoDickerson 629927fab03db20ffd8c5250
// christineBurt 629928e9d166a69900915138
// portiaDuran 629928e9d166a69900915139
// kylaDominguez 629928e9d166a6990091513a
// raeJones 629928e9d166a6990091513b

const listings = [   
  new Listing({
    image:'',
    title: "Red Vine Tomatoes",
    body: 'These are ripe tomatoes that have peaked last week.',
    photoUrls: 'https://garden-swap-seed.s3.us-west-1.amazonaws.com/red-vine-tomatoes.jpg',
    price: "1.99",
    location: '92843',
    category: 'Vegetables',
    userId: '629927fab03db20ffd8c5250' 
  }),
new Listing({
    image: '',
    title: 'Broccoli',
    body: 'Broccoli grown with fertile soil, two vital nutrients for maintaining strong, healthy bones.',
    photoUrls:'https://garden-swap-seed.s3.us-west-1.amazonaws.com/broccoli.jpg',
    price: "2.65",
    location: '94707',
    category: 'Vegetables',
    userId: '6297b832fbdf777ab18c0078'
  }),
 new Listing({
    image: '',
    title: 'Russet Potatoes',
    body: 'These types of potatoes are larger and more oblong in shape than white potatoes. Russets also have a tougher skin.',
    photoUrls:'https://garden-swap-seed.s3.us-west-1.amazonaws.com/russet-potatoes.jpg',
    price: "1.96",
    location: '94710',
    category: 'Vegetables',
    userId: '629927fab03db20ffd8c5250'
  }),
 new Listing({
    image: '',
    title: 'Onions',
    body: 'Onions are high in vitamins, minerals, and antioxidants while being low in calories.',
    photoUrls:'https://garden-swap-seed.s3.us-west-1.amazonaws.com/onion.jpg',
    price: "2.10",
    location: '94608',
    category: 'Vegetables',
    userId: '629927fab03db20ffd8c5250'
  }),
 new Listing({
    image: '',
    title: 'Carrots',
    body: 'The fiber in carrots can help keep blood sugar levels under control. You can eat them raw, steamed, boiled, roasted, or as an ingredient in soups and stews.',
    photoUrls:'https://garden-swap-seed.s3.us-west-1.amazonaws.com/carrot.jpg',
    price: "2.42",
    location: '94609',
    category: 'Vegetables',
    userId: '629927fab03db20ffd8c5250'
  }),
 new Listing({
    image: '',
    title: 'Cucumbers',
    body: 'Antioxidants such as beta carotene in cucumbers can help fight free radicals in your body. They also have a mild, refreshing taste.',
    photoUrls:'https://garden-swap-seed.s3.us-west-1.amazonaws.com/cucumbers.jpg',
    price: "2.68",
    location: '94603',
    category: 'Vegetables',
    userId: '6297b832fbdf777ab18c0078'
  }),
 new Listing({
    image: '',
    title: 'Green Bell Peppers',
    body: 'Don’t limit yourself to eating bell peppers. Everyone can enjoy them grilled, sautéed, in soups or sauces, and even raw.',
    photoUrls:'https://garden-swap-seed.s3.us-west-1.amazonaws.com/green-bell-peppers.jpg',
    price: "1.97",
    location: '94578',
    category: 'Vegetables',
    userId: '629928e9d166a69900915138'
  }),
 new Listing({
    image: '',
    title: 'Loose-leaf Lettuce',
    body: 'This is one of the most popular types of lettuce. The greener the leaf, the more nutrients it provides.',
    photoUrls:'https://garden-swap-seed.s3.us-west-1.amazonaws.com/lettuce.jpg',
    price: "2.66",
    location: '94619',
    category: 'Vegetables',
    userId: '629927fab03db20ffd8c5250'
  }),
 new Listing({
    image: '',
    title: 'Celery',
    body: 'Not only these are appetizing, it also keeps your kidney and urinary bladder healthy.',
    photoUrls:'https://garden-swap-seed.s3.us-west-1.amazonaws.com/Celery-Tendercrisp-1-1024x768.jpg',
    price: "1.99",
    location: '94502',
    category: 'Vegetables',
    userId: '629928e9d166a6990091513b'
  }),
 new Listing({
    image: '',
    title: 'Mushrooms',
    body: "Aside from its affordability, mushrooms may also mitigate the risk of developing serious health conditions, such as Alzheimer's, heart disease, cancer, and diabetes.",
    photoUrls:'https://garden-swap-seed.s3.us-west-1.amazonaws.com/mushroom.jpg',
    price: "2.49",
    location: '94577',
    category: 'Vegetables',
    userId: '6297b832fbdf777ab18c0078'
  }),
 new Listing({
    image: '',
    title: 'Organic Garlic',
    body: 'Choose only the best selected and freshly stored mushrooms with high quality standards.',
    photoUrls:'https://garden-swap-seed.s3.us-west-1.amazonaws.com/garlic-plant.jpg',
    price: "2.35",
    location: '94602',
    category: 'Vegetables',
    userId: '6297b832fbdf777ab18c0078'
  }),
 new Listing({
    image: '',
    title: 'Corn on the Cob',
    body: 'Try our best-selling freshly produced and naturally sweet corn on the cob. These have lots of health benefits.',
    photoUrls:'https://garden-swap-seed.s3.us-west-1.amazonaws.com/corn.jpg',
    price: "2.97",
    location: '94578',
    category: 'Vegetables',
    userId: '629928e9d166a69900915138'
  }),
 new Listing({
    image: '',
    title: 'Yellow Honey Mangoes',
    body: 'This type of mango is one of the sweetest varieties of mangoes available. You’ll love its sweetness and creaminess.',
    photoUrls:'https://garden-swap-seed.s3.us-west-1.amazonaws.com/mango.jpg',
    price: "0.99",
    location: '94702',
    category: 'Fruit',
    userId: '6297b832fbdf777ab18c0078'
  }),
  new Listing({
    image: '',
    title: 'Clementines',
    body: 'Taste and see, these are high in Vitamin C!',
    photoUrls:'https://garden-swap-seed.s3.us-west-1.amazonaws.com/clementines_1_11zon.jpg',
    price: "1.00",
    location: '94575',
    category: 'Fruit',
    userId: '629927fab03db20ffd8c5250'
  }),
 new Listing({
    image: '',
    title: 'Blackberries',
    body: 'Blackberries contain high levels of antioxidants, such as anthocyanins. Antioxidants help people to fight against the adverse impact of free radicals in the body. We offer only the freshest!',
    photoUrls:'https://garden-swap-seed.s3.us-west-1.amazonaws.com/blackberries-plant.jpg',
    price: "2.99",
    location: '94611',
    category: 'Fruit',
    userId: '629928e9d166a69900915138'
  }),
 new Listing({
    image: '',
    title: 'Lemons',
    body: 'Get these lemons today! Lemons give flavor to baked goods, sauces, salad dressings, marinades, drinks, and desserts, and they are also a good source of vitamin C.',
    photoUrls:'https://garden-swap-seed.s3.us-west-1.amazonaws.com/lemons_3_11zon.jpg',
    price: "0.89",
    location: '94541',
    category: 'Fruit',
    userId: '629928e9d166a69900915138'
  }),
 new Listing({
    image: '',
    title:'Pears',
    body: 'These extremely aromatic pears are not only flavorful, but also a good source of fiber.',
    photoUrls:'https://garden-swap-seed.s3.us-west-1.amazonaws.com/pears.jpg',
    price: "1.95",
    location: '94501',
    category: 'Fruit',
    userId: '629928e9d166a6990091513a'
  }),
 new Listing({
    image: '',
    title: 'Red Raspberries',
    body: 'Delicious on their own as a healthy snack or as part of a recipe.',
    photoUrls:'https://garden-swap-seed.s3.us-west-1.amazonaws.com/red-raspberries.jpg',
    price: "3.19",
    location: '94580',
    category: 'Fruit',
    userId: '629928e9d166a6990091513a'
  }),
 new Listing({
    image: '',
    title: 'Cantaloupe',
    body: 'Make a refreshing and healthful fruit shake that is best during summer.',
    photoUrls:'https://garden-swap-seed.s3.us-west-1.amazonaws.com/cantaloupe.jpg',
    price: "3.99",
    location: '94610',
    category: 'Fruit',
    userId: '629928e9d166a69900915138'
  }),
 new Listing({
    image: '',
    title: 'Pineapples',
    body: 'Aside from its high levels of Vitamin C, pineapples also help in fighting inflammation in the body. So why don’t you give yourself a treat today?',
    photoUrls:'https://garden-swap-seed.s3.us-west-1.amazonaws.com/pineapple.jpg',
    price: "3.59",
    location: '94595',
    category: 'Fruit',
    userId: '629928e9d166a69900915138'
  }),
 new Listing({
    image: '',
    title: 'Red Cherries',
    body: 'Cherries are not only one of the healthiest fruits, they also rank as one of the most health protective foods overall. Always a good buy.',
    photoUrls:'https://garden-swap-seed.s3.us-west-1.amazonaws.com/red-cherries.jpg',
    price: "3.00",
    location: '94578',
    category: 'Fruit',
    userId: '629928e9d166a6990091513a'
  }),
 new Listing({
    image: '',
    title: 'Avocados',
    body: 'There are a lot of easy healthy recipes with this fruit! Avocado Chicken Salad, Avocado Chips, Avocado Tomato Salad, Taco-Stuffed Avocados, Bacon Avocado Fries, Keto Egg Salad, and a whole lot more!',
    photoUrls:'https://garden-swap-seed.s3.us-west-1.amazonaws.com/avocados.jpg',
    price: "2.89",
    location: '94850',
    category: 'Fruit',
    userId: '629928e9d166a69900915138'
  }),
 new Listing({
    image: '',
    title: 'Peaches',
    body: 'A peach a day can help rev up your immune system, energy levels, heart health and complexion. So better peach up today!',
    photoUrls:'https://garden-swap-seed.s3.us-west-1.amazonaws.com/peaches.jpg',
    price: "1.32",
    location: '94573',
    category: 'Fruit',
    userId: '629928e9d166a69900915138'
  }),
 new Listing({
    image: '',
    title: 'Oranges',
    body: 'Up for sale, freshly picked oranges! You can never go wrong with an orange juice.',
    photoUrls:'https://garden-swap-seed.s3.us-west-1.amazonaws.com/oranges.jpg',
    price: "1.99",
    location: '94579',
    category: 'Fruit',
    userId: '629928e9d166a6990091513a'
  }),
 new Listing({
    image: '',
    title: 'Almonds',
    body: 'Incredibly popular due to its flavor and have impressive nutrient profile, we call them almonds.',
    photoUrls:'https://garden-swap-seed.s3.us-west-1.amazonaws.com/almonds.jpg',
    price: "3.99",
    location: '94608',
    category: 'Nuts',
    userId: '6297b832fbdf777ab18c0078'
  }),
 new Listing({
    image: '',
    title: 'Pistachios',
    body: 'California-grown pistachios up for sale. These nuts are bursting with the fiber, minerals, and unsaturated fat that can help keep your blood sugar, blood pressure, and cholesterol in check.',
    photoUrls:'https://garden-swap-seed.s3.us-west-1.amazonaws.com/pistachio.jpg',
    price: "3.64",
    Location: '90241',
    category: 'Nuts',
    userId: '629928e9d166a69900915138'
  }),
 new Listing({
    image: '',
    title: 'Walnuts',
    body: 'Walnuts have been shown to benefit heart health and may reduce several heart disease risk factors, including elevated blood pressure and bad cholesterol. Love your heart.',
    photoUrls:'https://garden-swap-seed.s3.us-west-1.amazonaws.com/walnuts.jpg',
    price: "5.40",
    location: '94516',
    category: 'Nuts',
    userId: '629928e9d166a6990091513a'
  }),
 new Listing({
    image: '',
    title: 'Cashews',
    body: 'Cashews have a crunchy texture and creamy mouthfeel that pair well with both savory and sweet dishes. Eating them raw or roasted is fine.',
    photoUrls:'https://garden-swap-seed.s3.us-west-1.amazonaws.com/cashews.jpg',
    price: "4.00",
    location: '94577',
    category: 'Nuts',
    userId: '629928e9d166a69900915138'
  }),
 new Listing({
    image: '',
    title: 'Pecans',
    body: 'Selling these mild nuts that are popular for cakes, pies, salads, and grain dishes. We are proud of our high quality products.',
    photoUrls:'https://garden-swap-seed.s3.us-west-1.amazonaws.com/pecans.jpg',
    price: "3.29",
    location: '94580',
    category: 'Nuts',
    userId: '6297b832fbdf777ab18c0078'
  }),
 new Listing({
    image: '',
    title: 'Macadamia',
    body: 'These are healthy nuts that are naturally low in sugar and carbohydrates.',
    photoUrls:'https://garden-swap-seed.s3.us-west-1.amazonaws.com/macadamia.jpg',
    price: "2.77",
    location: '94606',
    category: 'Nuts',
    userId: '629928e9d166a69900915138'
  }),
 new Listing({
    image: '',
    title: 'Hazelnuts',
    body: 'Best flavor for cooking and baking, perfect choice for your favorite pecan pies.',
    photoUrls:'https://garden-swap-seed.s3.us-west-1.amazonaws.com/hazlenuts.jpg',
    price: "2.49",
    location: '94621',
    category: 'Nuts',
    userId: '629928e9d166a6990091513a'
  }),
 new Listing({
    image: '',
    title: 'Peanuts',
    body: 'Great nutritious meal for birds like Chickadees, Titmice, Woodpeckers, Jays and Nuthatches. These birds just love peanuts!',
    photoUrls:'https://garden-swap-seed.s3.us-west-1.amazonaws.com/peanuts.jpg',
    price: "4.21",
    location: '94607',
    category: 'Nuts',
    userId: '629927fab03db20ffd8c5250'
  }),
 new Listing({
    image: '',
    title: 'Pili Nut',
    body: 'Pili nuts is one of the lesser-known types of nuts, but taste-wise, they’re most like sunflower seeds or pine nuts. Try lightly toasting them and snacking away.',
    photoUrls:'https://garden-swap-seed.s3.us-west-1.amazonaws.com/pilinut.jpg',
    price: "3.79",
    location: '94602',
    category: 'Nuts',
    userId: '629928e9d166a69900915138'
  }),
 new Listing({
    image: '',
    title: 'Pine Nut',
    body: 'Satisfy your salad craving today with these pine nuts. These are perfect for toasting and adding to salads.',
    photoUrls:'https://garden-swap-seed.s3.us-west-1.amazonaws.com/pinenuts.jpg',
    price: "2.11",
    location: '94613',
    category: 'Nuts',
    userId: '629928e9d166a6990091513a'
  }),
 new Listing({
    image: '',
    title: 'Kola Nuts',
    body: 'About the size of a chestnut, this little fruit is packed with caffeine. Why not try something different today?',
    photoUrls:'https://garden-swap-seed.s3.us-west-1.amazonaws.com/kola-nuts_2_11zon.jpg',
    price: "1.99",
    location: '94556',
    category: 'Nuts',
    userId: '629928e9d166a69900915139'
  }),
 new Listing({
    image: '',
    title: 'Tiger Nut',
    body: 'While this is a lesser-known type of nut, they taste earthy with slight sweetness and can be added to salads and oatmeals as well. You’ll surely love it.',
    photoUrls:'https://garden-swap-seed.s3.us-west-1.amazonaws.com/tiger-nut.jpg',
    price: "3.33",
    location: '94605',
    category: 'Nuts',
    userId: '629928e9d166a6990091513b'
  }),
 new Listing({
    image: '',
    title: 'Custard',
    body: 'Available for the whole month, homemade custard. Our homemade custard does not have any artificial additives, which makes it tastier and healthier to consume.',
    photoUrls:'https://garden-swap-seed.s3.us-west-1.amazonaws.com/VanillaCustardPudding.jpeg',
    price: "3.96",
    location: '94703',
    category: 'Dairy',
    userId: '629928e9d166a6990091513a'
  }),
 new Listing({
    image: '',
    title: 'Cheese Curds',
    body: 'We provide quality cheese curds for your snack, finger food, and appetizer needs.',
    photoUrls:'https://garden-swap-seed.s3.us-west-1.amazonaws.com/cheese-curds.jpeg',
    price: "3.90",
    location: '94607',
    category: 'Dairy',
    userId: '629927fab03db20ffd8c5250'
  }),
 new Listing({
    image: '',
    title: 'Organic Whole Milk Yogurt',
    body: "Our organic yogurt is made slowly for a rich, creamy taste that's not too tart. Always packed with nutrients.",
    photoUrls:'https://garden-swap-seed.s3.us-west-1.amazonaws.com/organic-milk-yogurt+copy.jpg',
    price: "5.23",
    location: '94611',
    category: 'Dairy',
    userId: '629927fab03db20ffd8c5250'
  }),
 new Listing({
    image: '',
    title: 'Unsalted Butter',
    body: 'Unsalted butter that will provide the flavor control you need for baking and cooking. Satisfaction guaranteed!',
    photoUrls:'https://garden-swap-seed.s3.us-west-1.amazonaws.com/butter.jpeg',
    price: "4.19",
    location: '94710',
    category: 'Dairy',
    userId: '629928e9d166a6990091513a'
  }),
 new Listing({
    image: '',
    title: 'Whipped Cream',
    body: 'Just what you need for your cakes, pies and other desserts.',
    photoUrls:'https://garden-swap-seed.s3.us-west-1.amazonaws.com/whipped-cream+copy.jpg',
    price: "2.94",
    location: '94606',
    category: 'Dairy',
    userId: '629928e9d166a6990091513a'
  }),
 new Listing({
    image: '',
    title: 'Low Fat Milk',
    body: 'This low fat milk contain essential nutrients for building strong bones and bodies, may also be mixed with some of your baked goodies.',
    photoUrls:'https://garden-swap-seed.s3.us-west-1.amazonaws.com/low-fat-milk.jpeg',
    price: "5.99",
    location: '94706',
    category: 'Dairy',
    userId: '6297b832fbdf777ab18c0078'
  }),
 new Listing({
    image: '',
    title: 'Farm-Fresh Milk',
    body: 'Use evaporated lactose-free milk to create the richest desserts and creamiest soups, sauces and pastas. Definitely a good buy!',
    photoUrls:'https://garden-swap-seed.s3.us-west-1.amazonaws.com/raw-milk-in-glass.jpeg',
    price: "4.74",
    location: '94563',
    category: 'Dairy',
    userId: '629928e9d166a6990091513b'
  }),
 new Listing({
    image: '',
    title: 'Coconut Yogurt',
    body: 'Try our tangy yogurt alternative made with simple ingredients including raw young coconut, raw young coconut water and probiotic cultures.',
    photoUrls:'https://garden-swap-seed.s3.us-west-1.amazonaws.com/coconut-yogurt.jpeg',
    price: "4.85",
    location: '94501',
    category: 'Dairy',
    userId: '629928e9d166a69900915139'
  }),
 new Listing({
    image: '',
    title: 'Sour Cream',
    body: 'Sour cream is generally healthy to consume and is best for garnish or topping.',
    photoUrls:'https://garden-swap-seed.s3.us-west-1.amazonaws.com/sour-cream.jpeg',
    price: "3.47",
    location: '94610',
    category: 'Dairy',
    userId: '629928e9d166a6990091513b'
  }),
 new Listing({
    image: '',
    title: 'Strawberry Ice Cream',
    body: 'Make your day a happy one through this strawberry ice cream. Always the best choice.',
    photoUrls:'https://garden-swap-seed.s3.us-west-1.amazonaws.com/strawberry-ice-cream.jpeg',
    price: "2.87",
    location: '94595',
    category: 'Dairy',
    userId: '629928e9d166a69900915139'
  }),
 new Listing({
    image: '',
    title: 'Ice Cream Sandwich Cake',
    body: 'Your birthday or not, this flavorful ice cream sandwich cake is a must!',
    photoUrls:'https://garden-swap-seed.s3.us-west-1.amazonaws.com/ice-cream-sandwich.jpeg',
    price: "5.29",
    location: '94619',
    category: 'Dairy',
    userId: '629928e9d166a69900915139'
  }),
 new Listing({
    image: '',
    title: 'Rainbow Sherbet',
    body: 'Make your life more colorful with this rainbow sherbet.',
    photoUrls:'https://garden-swap-seed.s3.us-west-1.amazonaws.com/RainBow+Sherbet.jpeg',
    price: "4.39",
    location: '94602',
    category: 'Dairy',
    userId: '629928e9d166a6990091513b'
  }),
 new Listing({
    image: '',
    title: 'Beef Chuck Stew Meat',
    body: "No antibiotics or added growth hormones and meets standards for animal welfare, feed, and more, so you know about what you're buying and eating.",
    photoUrls:'https://garden-swap-seed.s3.us-west-1.amazonaws.com/beef-stew-meat.jpeg',
    price: "8.99",
    location: '94612',
    category: 'Meats',
    userId: '629928e9d166a6990091513b'
  }),
 new Listing({
    image: '',
    title: 'Boneless Pork Shoulder Butt Roast',
    body: 'This boneless pork shoulder butt roast has high fat content but has high satisfaction for you as well. Try it!',
    photoUrls:'https://garden-swap-seed.s3.us-west-1.amazonaws.com/pork-shoulder.jpeg',
    price: "6.49",
    location: '94606',
    category: 'Meats',
    userId: '629928e9d166a6990091513b'
  }),
 new Listing({
    image: '',
    title: 'Goat Meat',
    body: 'Goat meat might not be usual but it is naturally lean, very nutritious and has a range of health benefits.',
    photoUrls:'https://garden-swap-seed.s3.us-west-1.amazonaws.com/Goat-Loin-Chops.jpeg',
    price: "7.99",
    location: '94577',
    category: 'Meats',
    userId: '629927fab03db20ffd8c5250'
  }),
 new Listing({
    image: '',
    title: 'Lamb Shank',
    body: 'Lamb shanks are from the bottom section of the leg just below the knee. Enjoy it either braised or roasted.',
    photoUrls:'https://garden-swap-seed.s3.us-west-1.amazonaws.com/lamb-shanks.jpeg',
    price: "8.94",
    location: '94613',
    category: 'Meats',
    userId: '6297b832fbdf777ab18c0078'
  }),
 new Listing({
    image: '',
    title: 'Skinless Chicken Breast',
    body: 'Offering air chilled skinless chicken breast for better flavor and texture. We also offer a variety of cuts, styles and preparations.',
    photoUrls:'https://garden-swap-seed.s3.us-west-1.amazonaws.com/chicken.jpeg',
    price: "9.99",
    location: '94619',
    category: 'Meats',
    userId: '629928e9d166a6990091513b'
  }),
 new Listing({
    image: '',
    title: 'Sliced Organic Turkey',
    body: 'Affordable sliced organic turkey with only the most premium ingredients.',
    photoUrls:'https://garden-swap-seed.s3.us-west-1.amazonaws.com/turkey-meat+copy.jpg',
    price: "6.12",
    location: '94613',
    category: 'Meats',
    userId: '629928e9d166a69900915139'
  }),
 new Listing({
    image: '',
    title: 'Swordfish Steak',
    body: 'Try out our swordfish steak. Each are responsibly farmed with no preservatives added.',
    photoUrls:'https://garden-swap-seed.s3.us-west-1.amazonaws.com/swordfish.jpeg',
    price: "8.41",
    location: '94541',
    category: 'Meats',
    userId: '629928e9d166a69900915139'
  }),
 new Listing({
    image: '',
    title: 'Mutton Meat',
    body: 'Mutton meat contains a broad range of health-protective nutrients, especially zinc, selenium and B vitamins. This is an alternative for pork meat.',
    photoUrls:'https://garden-swap-seed.s3.us-west-1.amazonaws.com/mutton.png',
    price: "8.46",
    location: '94578',
    category: 'Meats',
    userId: '6297b832fbdf777ab18c0078'
  }),
 new Listing({
    image: '',
    title: 'Venison',
    body: 'Not the usual meat you know but this is as healthy as the common meats. Venison refers to the flesh of a deer, and it is a traditionally rarer type of meat.',
    photoUrls:'https://garden-swap-seed.s3.us-west-1.amazonaws.com/venison+copy.jpg',
    price: "7.96",
    Location: '94501',
    category: 'Meats',
    userId: '629928e9d166a69900915139'
  }),
 new Listing({
    image: '',
    title: 'Duck Meat',
    body: "Duck meat has immense popularity in Chinese populations, where 'Peking duck’ is a showpiece dish. This is a kind of white meat as well.",
    photoUrls: 'https://garden-swap-seed.s3.us-west-1.amazonaws.com/duck.jpeg',
    price: "6.44",
    location:'',
    category: 'Meats',
    userId: '629928e9d166a6990091513b'
  }),
 new Listing({
    image: '',
    title: 'Wild Boar Meat',
    body: 'Wild boar meat may sound strange but it actually contains a higher proportion of protein and a smaller amount of fat than regular pork.',
    photoUrls:'https://garden-swap-seed.s3.us-west-1.amazonaws.com/boar+copy.jpg',
    price: "9.59",
    location: '94580',
    category: 'Meats',
    userId: '629928e9d166a6990091513b'
  }),
 new Listing({
    image: '',
    title: 'Bison',
    body: 'Bison is a type of red meat that is nutritious and very lean. Know that this is the best choice of meat for anyone looking to keep their fat or calorie intake a little lower.',
    photoUrls:'https://garden-swap-seed.s3.us-west-1.amazonaws.com/bison+copy.jpg',
    price: "9.88",
    location: '94610',
    category: 'Meats',
    userId: '629928e9d166a69900915139'
  }),
 new Listing({
    image: '',
    title: 'Whole Grain Wheat',
    body: 'Only the most quality wheat in town. Try this out now!',
    photoUrls:'https://garden-swap-seed.s3.us-west-1.amazonaws.com/wheat+copy.jpg',
    price: "12.11",
    Location: '94612',
    category: 'Grains',
    userId: '629928e9d166a69900915139'
  }),
 new Listing({
    image: '',
    title: 'Old Fashioned Oats',
    body: 'Check out our low in saturated fat old fashioned oats.',
    photoUrls:'https://garden-swap-seed.s3.us-west-1.amazonaws.com/oats+copy.jpg',
    price: "2.53",
    location: '94610',
    category: 'Grains',
    userId: '6297b832fbdf777ab18c0078'
  }),
 new Listing({
    image: '',
    title: 'White Long Grain Rice',
    body: 'We’re proud that this is one of our products that support our commitment to help preserve the natural world.',
    photoUrls:'https://garden-swap-seed.s3.us-west-1.amazonaws.com/rice-1+copy.jpg',
    price: "5.99",
    location: 94611,
    category: 'Grains',
    userId: '629928e9d166a6990091513b'
  }),
 new Listing({
    image: '',
    title: 'Whole Kernel Corn',
    body: 'Whole kernel corn for a versatile quick side dish!',
    photoUrls:'https://garden-swap-seed.s3.us-west-1.amazonaws.com/corn.jpg',
    price: "8.99",
    location: '94541',
    category: 'Grains',
    userId: '629928e9d166a6990091513b'
  }),
 new Listing({
    image: '',
    title: 'Organic Pearled Barley',
    body: 'Enjoy our organic pearled barley, its hard outer layers are removed. Truly nutritious!',
    photoUrls:'https://garden-swap-seed.s3.us-west-1.amazonaws.com/barley+copy.jpg',
    price: "7.78",
    location: '94609',
    category: 'Grains',
    userId: '629928e9d166a69900915139'
  }),
 new Listing({
    image: '',
    title: 'Organic Hulled Millet',
    body: 'Our organic hulled Millet is grown and packed in the USA. These are verified gluten free!',
    photoUrls:'https://garden-swap-seed.s3.us-west-1.amazonaws.com/Millet-plant+copy.jpg',
    price: "13.49",
    location: '94516',
    category: 'Grains',
    userId: '629928e9d166a69900915139'
  }),
 new Listing({
    image: '',
    title: 'Organic Rye',
    body: 'Not only is it delicious and healthy but also a fiber-rich food. Get some here!',
    photoUrls:'https://garden-swap-seed.s3.us-west-1.amazonaws.com/Rye+copy.jpg',
    price: "23.49",
    location: '94707',
    category: 'Grains',
    userId: '629928e9d166a6990091513b'
  }),
 new Listing({
    image: '',
    title: 'Whole Grain Sorghum',
    body: 'Use whole grain sorghum in soups, salads, and pilafs or pop it to create a unique snack. Must try!',
    photoUrls:'https://garden-swap-seed.s3.us-west-1.amazonaws.com/sorghum+copy.jpg',
    price: "9.35",
    location: '94601',
    category: 'Grains',
    userId: '629928e9d166a69900915139'
  }),
 new Listing({
    image: '',
    title: 'Triticale',
    body: 'Triticale does not have the same popularity as other “healthy grains, but it can also be used to make cakes, muffins, crispbread, and breakfast cereals.',
    photoUrls:'https://garden-swap-seed.s3.us-west-1.amazonaws.com/Triticale+copy.jpg',
    price: "4.16",
    location: '94516',
    category: 'Grains',
    userId: '6297b832fbdf777ab18c0078'
  }),
 new Listing({
    image: '',
    title: 'Organic Quinoa',
    body: 'These grains contain a lot of amino acids and fiber. Quinoa is used to make breakfast flakes, flour, bread, crackers, and protein powder. 100% Certified Organic.',
    photoUrls:'https://garden-swap-seed.s3.us-west-1.amazonaws.com/quinoa+copy.jpg',
    price: "7.99",
    location: '94612',
    category: 'Grains',
    userId: '629927fab03db20ffd8c5250'
  }),
 new Listing({
    image: '',
    title: 'Amaranth',
    body: 'Another unique grain to try out is this amaranth. Amaranth can be boiled with just water, but you can add them to cookie batter, rice dishes, salad, and breakfast cereal.',
    photoUrls:'https://garden-swap-seed.s3.us-west-1.amazonaws.com/amaranth+copy.jpg',
    price: "9.13",
    location: '94709',
    category: 'Grains',
    userId: '6297b832fbdf777ab18c0078'
  }),
 new Listing({
    image: '',
    title: 'Buckwheat',
    body: 'Buckwheat is the main ingredient of Japanese soba. These grains contain a lot of vitamin B and minerals. Another healthy grain to try out.',
    photoUrls:'https://garden-swap-seed.s3.us-west-1.amazonaws.com/buckwheat+copy.jpg',
    price: "7.33",
    location: '94541',
    category: 'Grains',
    userId: '629927fab03db20ffd8c5250'
  }),
]
//connect mongoose
// const db = require('../config/keys').mongoURI;
const db = process.env.MONGO_URI
mongoose
  .connect(db, { useNewUrlParser: true })
  .catch(err => {
    console.log(err.stack);
    process.exit(1);
  })
  .then(() => {
    console.log("connected to db in development environment");
    Listing.deleteMany({})
      .then(listings => console.log(listings))
      .then(() => {
        listings.map(async (p, index) => {
          await p.save((err, result) => {
            if (index === listings.length - 1) {
              console.log("DONE!");
              mongoose.disconnect();
            }
          });
        });
      })
  });
//save your data. this is an async operation
//after you make sure you seeded all the products, disconnect automatically
