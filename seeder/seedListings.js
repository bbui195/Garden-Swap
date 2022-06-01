const Listing = require('../models/Listing')
const mongoose = require("mongoose");
const dev = require("../config/dev"); //get your mongoose string
//create your array. i inserted only 1 object here
const products = [   
  new Listing({
    image:'',
    title: "Red Vine Tomatoes",
    body: 'These are ripe tomatoes that have peaked last week.',
    photoUrls: '',
    price: 1.99,
    location: '92843',
    category: 'vegetables' 
  }),
new Listing({
    image: '',
    title: 'Broccoli',
    body: 'Broccoli grown with fertile soil, two vital nutrients for maintaining strong, healthy bones.',
    photoUrls:'',
    price: 2.65,
    location: '94707',
    category: 'vegetables'
  }),
 new Listing({
    image: '',
    title: 'Russet Potatoes',
    body: 'These types of potatoes are larger and more oblong in shape than white potatoes. Russets also have a tougher skin.',
    photoUrls:'',
    price: 1.96,
    location: '94710',
    category: 'vegetables'
  }),
 new Listing({
    image: '',
    title: 'Onions',
    body: 'Onions are high in vitamins, minerals, and antioxidants while being low in calories.',
    photoUrls:'',
    price: 2.10,
    location: '94608',
    category: 'vegetables'
  }),
 new Listing({
    image: '',
    title: 'Carrots',
    body: 'The fiber in carrots can help keep blood sugar levels under control. You can eat them raw, steamed, boiled, roasted, or as an ingredient in soups and stews.',
    photoUrls:'',
    price: 2.42,
    location: '94609',
    category: 'vegetables'
  }),
 new Listing({
    image: '',
    title: 'Cucumbers',
    body: 'Antioxidants such as beta carotene in cucumbers can help fight free radicals in your body. They also have a mild, refreshing taste.',
    photoUrls:'',
    price: 2.68,
    location: '94603',
    category: 'vegetables'
  }),
 new Listing({
    image: '',
    title: 'Green Bell Peppers',
    body: 'Don’t limit yourself to eating bell peppers. Everyone can enjoy them grilled, sautéed, in soups or sauces, and even raw.',
    photoUrls:'',
    price: 1.97,
    location: '94578',
    category: 'vegetables'
  }),
 new Listing({
    image: '',
    title: 'Loose-leaf Lettuce',
    body: 'This is one of the most popular types of lettuce. The greener the leaf, the more nutrients it provides.',
    photoUrls:'',
    price: 2.66,
    location: '94619',
    category: 'vegetables'
  }),
 new Listing({
    image: '',
    title: 'Celery',
    body: 'Not only these are appetizing, it also keeps your kidney and urinary bladder healthy.',
    photoUrls:'',
    price: 1.99,
    location: '94502',
    category: 'vegetables'
  }),
 new Listing({
    image: '',
    title: 'Mushrooms',
    body: "Aside from its affordability, mushrooms may also mitigate the risk of developing serious health conditions, such as Alzheimer's, heart disease, cancer, and diabetes.",
    photoUrls:'',
    price: 2.49,
    location: '94577',
    category: 'vegetables'
  }),
 new Listing({
    image: '',
    title: 'Organic Garlic',
    body: 'Choose only the best selected and freshly stored mushrooms with high quality standards.',
    photoUrls:'',
    price: 2.35,
    location: '94602',
    category: 'vegetables'
  }),
 new Listing({
    image: '',
    title: 'Corn on the Cob',
    body: 'Try our best-selling freshly produced and naturally sweet corn on the cob. These have lots of health benefits.',
    photoUrls:'',
    price: 2.97,
    location: '94578',
    category: 'vegetables'
  }),
 new Listing({
    image: '',
    title: 'Yellow Honey Mangoes',
    body: 'This type of mango is one of the sweetest varieties of mangoes available. You’ll love its sweetness and creaminess.',
    photoUrls:'',
    price: 0.99,
    location: '94702',
    category: 'fruit'
  }),
  new Listing({
    image: '',
    title: 'Clementines',
    body: 'Taste and see, these are high in Vitamin C!',
    photoUrls:'',
    price: 1.00,
    location: '94575',
    category: 'fruit'
  }),
 new Listing({
    image: '',
    title: 'Blackberries',
    body: 'Blackberries contain high levels of antioxidants, such as anthocyanins. Antioxidants help people to fight against the adverse impact of free radicals in the body. We offer only the freshest!',
    photoUrls:'',
    price: 2.99,
    location: '94611',
    category: 'fruit'
  }),
 new Listing({
    image: '',
    title: 'Lemons',
    body: 'Get these lemons today! Lemons give flavor to baked goods, sauces, salad dressings, marinades, drinks, and desserts, and they are also a good source of vitamin C.',
    photoUrls:'',
    price: 0.89,
    location: '94541',
    category: 'fruit'
  }),
 new Listing({
    image: '',
    title:'',
    body: 'These extremely aromatic pears are not only flavorful, but also a good source of fiber.',
    photoUrls:'',
    price: 1.95,
    location: '94501',
    category: 'fruit'
  }),
 new Listing({
    image: '',
    title: 'Red Raspberries',
    body: 'Delicious on their own as a healthy snack or as part of a recipe.',
    photoUrls:'',
    price: 3.19,
    location: '94580',
    category: 'fruit'
  }),
 new Listing({
    image: '',
    title: 'Cantaloupe',
    body: 'Make a refreshing and healthful fruit shake that is best during summer.',
    photoUrls:'',
    price: 3.99,
    location: '94610',
    category: 'fruit'
  }),
 new Listing({
    image: '',
    title: 'Pineapples',
    body: 'Aside from its high levels of Vitamin C, pineapples also help in fighting inflammation in the body. So why don’t you give yourself a treat today?',
    photoUrls:'',
    price: '3.59',
    location: '94595',
    category: 'fruit'
  }),
 new Listing({
    image: '',
    title: 'Red Cherries',
    body: 'Cherries are not only one of the healthiest fruits, they also rank as one of the most health protective foods overall. Always a good buy.',
    photoUrls:'',
    price: 3.00,
    location: '94578',
    category: 'fruit'
  }),
 new Listing({
    image: '',
    title: 'Avocados',
    body: 'There are a lot of easy healthy recipes with this fruit! Avocado Chicken Salad, Avocado Chips, Avocado Tomato Salad, Taco-Stuffed Avocados, Bacon Avocado Fries, Keto Egg Salad, and a whole lot more!',
    photoUrls:'',
    price: 2.89,
    location: '94850',
    category: 'fruit'
  }),
 new Listing({
    image: '',
    title: 'Peaches',
    body: 'A peach a day can help rev up your immune system, energy levels, heart health and complexion. So better peach up today!',
    photoUrls:'',
    price: 1.32,
    location: '94573',
    category: 'fruit'
  }),
 new Listing({
    image: '',
    title: 'Oranges',
    body: 'Up for sale, freshly picked oranges! You can never go wrong with an orange juice.',
    photoUrls:'',
    price: 1.99,
    location: '94579',
    category: 'fruit'
  }),
 new Listing({
    image: '',
    title: 'Almonds',
    body: 'Incredibly popular due to its flavor and have impressive nutrient profile, we call them almonds.',
    photoUrls:'',
    price: 3.99,
    location: '94608',
    category: 'nuts'
  }),
 new Listing({
    image: '',
    title: 'Pistachios',
    body: 'California-grown pistachios up for sale. These nuts are bursting with the fiber, minerals, and unsaturated fat that can help keep your blood sugar, blood pressure, and cholesterol in check.',
    photoUrls:'',
    price: 3.64,
    Location: '90241',
    category: 'nuts'
  }),
 new Listing({
    image: '',
    title: 'Walnuts',
    body: 'Walnuts have been shown to benefit heart health and may reduce several heart disease risk factors, including elevated blood pressure and bad cholesterol. Love your heart.',
    photoUrls:'',
    price: 5.40,
    location: '94516',
    category: 'nuts'
  }),
 new Listing({
    image: '',
    title: 'Cashews',
    body: 'Cashews have a crunchy texture and creamy mouthfeel that pair well with both savory and sweet dishes. Eating them raw or roasted is fine.',
    photoUrls:'',
    price: 4.00,
    location: '94577',
    category: 'nuts'
  }),
 new Listing({
    image: '',
    title: 'Pecans',
    body: 'Selling these mild nuts that are popular for cakes, pies, salads, and grain dishes. We are proud of our high quality products.',
    photoUrls:'',
    price: 3.29,
    location: '94580',
    category: 'nuts'
  }),
 new Listing({
    image: '',
    title: 'Macadamia',
    body: 'These are healthy nuts that are naturally low in sugar and carbohydrates.',
    photoUrls:'',
    price: 2.77,
    location: '94606',
    category: 'nuts'
  }),
 new Listing({
    image: '',
    title: 'Hazelnuts',
    body: 'Best flavor for cooking and baking, perfect choice for your favorite pecan pies.',
    photoUrls:'',
    price: 2.49,
    location: '94621',
    category: 'nuts'
  }),
 new Listing({
    image: '',
    title: 'Peanuts',
    body: 'Great nutritious meal for birds like Chickadees, Titmice, Woodpeckers, Jays and Nuthatches. These birds just love peanuts!',
    photoUrls:'',
    price: 4.21,
    location: '94607',
    category: 'nuts'
  }),
 new Listing({
    image: '',
    title: 'Pili Nut',
    body: 'Pili nuts is one of the lesser-known types of nuts, but taste-wise, they’re most like sunflower seeds or pine nuts. Try lightly toasting them and snacking away.',
    photoUrls:'',
    price: 3.79,
    location: '94602',
    category: 'nuts'
  }),
 new Listing({
    image: '',
    title: 'Pine Nut',
    body: 'Satisfy your salad craving today with these pine nuts. These are perfect for toasting and adding to salads.',
    photoUrls:'',
    price: 2.11,
    location: '94613',
    category: 'nuts'
  }),
 new Listing({
    image: '',
    title: 'Kola Nuts',
    body: 'About the size of a chestnut, this little fruit is packed with caffeine. Why not try something different today?',
    photoUrls:'',
    price: 1.99,
    location: '94556',
    category: 'nuts'
  }),
 new Listing({
    image: '',
    title: 'Tiger Nut',
    body: 'While this is a lesser-known type of nut, they taste earthy with slight sweetness and can be added to salads and oatmeals as well. You’ll surely love it.',
    photoUrls:'',
    price: 3.33,
    location: '94605',
    category: 'nuts'
  }),
 new Listing({
    image: '',
    title: 'Custard',
    body: 'Available for the whole month, homemade custard. Our homemade custard does not have any artificial additives, which makes it tastier and healthier to consume.',
    photoUrls:'',
    price: 3.96,
    location: '94703',
    category: 'dairy'
  }),
 new Listing({
    image: '',
    title: 'Cheese Curds',
    body: 'We provide quality cheese curds for your snack, finger food, and appetizer needs.',
    photoUrls:'',
    price: 3.90,
    location: '94607',
    category: 'dairy'
  }),
 new Listing({
    image: '',
    title: 'Organic Whole Milk Yogurt',
    body: "Our organic yogurt is made slowly for a rich, creamy taste that's not too tart. Always packed with nutrients.",
    photoUrls:'',
    price: 5.23,
    location: '94611',
    category: 'dairy'
  }),
 new Listing({
    image: '',
    title: 'Unsalted Butter',
    body: 'Unsalted butter that will provide the flavor control you need for baking and cooking. Satisfaction guaranteed!',
    photoUrls:'',
    price: 4.19,
    location: '94710',
    category: 'dairy'
  }),
 new Listing({
    image: '',
    title: 'Whip Cream',
    body: 'Just what you need for your cakes, pies and other desserts.',
    photoUrls:'',
    price: 2.94,
    location: '94606',
    category: 'dairy'
  }),
 new Listing({
    image: '',
    title: 'Low Fat Milk',
    body: 'This low fat milk contain essential nutrients for building strong bones and bodies, may also be mixed with some of your baked goodies.',
    photoUrls:'',
    price: 5.99,
    location: '94706',
    category: 'dairy'
  }),
 new Listing({
    image: '',
    title: 'Lactose-Free Milk',
    body: 'Use evaporated lactose-free milk to create the richest desserts and creamiest soups, sauces and pastas. Definitely a good buy!',
    photoUrls:'',
    price: 4.74,
    location: '94563',
    category: 'dairy'
  }),
 new Listing({
    image: '',
    title: 'Coconut Yogurt',
    body: 'Try our tangy yogurt alternative made with simple ingredients including raw young coconut, raw young coconut water and probiotic cultures.',
    photoUrls:'',
    price: 4.85,
    location: '94501',
    category: 'dairy'
  }),
 new Listing({
    image: '',
    title: 'Sour Cream',
    body: 'Sour cream is generally healthy to consume and is best for garnish or topping.',
    photoUrls:'',
    price: 3.47,
    location: '94610',
    category: 'dairy'
  }),
 new Listing({
    image: '',
    title: 'Strawberry Ice Cream',
    body: 'Make your day a happy one through this strawberry ice cream. Always the best choice.',
    photoUrls:'',
    price: 2.87,
    location: '94595',
    category: 'dairy'
  }),
 new Listing({
    image: '',
    title: 'Ice Cream Sandwich Cake',
    body: 'Your birthday or not, this flavorful ice cream sandwich cake is a must!',
    photoUrls:'',
    price: 5.29,
    location: '94619',
    category: 'dairy'
  }),
 new Listing({
    image: '',
    title: 'Rainbow Sherbet',
    body: 'Make your life more colorful with this rainbow sherbet.',
    photoUrls:'',
    price: 4.39,
    location: '94602',
    category: 'dairy'
  }),
 new Listing({
    image: '',
    title: 'Beef Chuck Stew Meat',
    body: "No antibiotics or added growth hormones and meets standards for animal welfare, feed, and more, so you know about what you're buying and eating.",
    photoUrls:'',
    price: 8.99,
    location: '94612',
    category: 'meats'
  }),
 new Listing({
    image: '',
    title: 'Boneless Pork Shoulder Butt Roast',
    body: 'This boneless pork shoulder butt roast has high fat content but has high satisfaction for you as well. Try it!',
    photoUrls:'',
    price: 6.49,
    location: '94606',
    category: 'meats'
  }),
 new Listing({
    image: '',
    title: 'Goat Meat',
    body: 'Goat meat might not be usual but it is naturally lean, very nutritious and has a range of health benefits.',
    photoUrls:'',
    price: 7.99,
    location: '94577',
    category: 'meats'
  }),
 new Listing({
    image: '',
    title: 'Lamb Shank',
    body: 'Lamb shanks are from the bottom section of the leg just below the knee. Enjoy it either braised or roasted.',
    photoUrls:'',
    price: 8.94,
    location: '94613',
    category: 'meats'
  }),
 new Listing({
    image: '',
    title: 'Skinless Chicken Breast',
    body: 'Offering air chilled skinless chicken breast for better flavor and texture. We also offer a variety of cuts, styles and preparations.',
    photoUrls:'',
    price: 9.99,
    location: '94619',
    category: 'meats'
  }),
 new Listing({
    image: '',
    title: 'Sliced Organic Turkey',
    body: 'Affordable sliced organic turkey with only the most premium ingredients.',
    photoUrls:'',
    price: 6.12,
    location: '94613',
    category: 'meats'
  }),
 new Listing({
    image: '',
    title: 'Swordfish Steak',
    body: 'Try out our swordfish steak. Each are responsibly farmed with no preservatives added.',
    photoUrls:'',
    price: 8.41,
    location: '94541',
    category: 'meats'
  }),
 new Listing({
    image: '',
    title: 'Mutton Meat',
    body: 'Mutton meat contains a broad range of health-protective nutrients, especially zinc, selenium and B vitamins. This is an alternative for pork meat.',
    photoUrls:'',
    price: 8.46,
    location: '94578',
    category: 'meats'
  }),
 new Listing({
    image: '',
    title: 'Venison',
    body: 'Not the usual meat you know but this is as healthy as the common meats. Venison refers to the flesh of a deer, and it is a traditionally rarer type of meat.',
    photoUrls:'',
    price: 7.96,
    Location: '94501',
    category: 'meats'
  }),
 new Listing({
    image: '',
    title: 'Duck Meat',
    body: "Duck meat has immense popularity in Chinese populations, where 'Peking duck’ is a showpiece dish. This is a kind of white meat as well.",
    photoUrls: '',
    price: 6.44,
    location:'',
    category: 'meats'
  }),
 new Listing({
    image: '',
    title: 'Wild Boar Meat',
    body: 'Wild boar meat may sound strange but it actually contains a higher proportion of protein and a smaller amount of fat than regular pork.',
    photoUrls:'',
    price: 9.59,
    location: '94580',
    category: 'meats'
  }),
 new Listing({
    image: '',
    title: 'Bison',
    body: 'Bison is a type of red meat that is nutritious and very lean. Know that this is the best choice of meat for anyone looking to keep their fat or calorie intake a little lower.',
    photoUrls:'',
    price: 9.88,
    location: '94610',
    category: 'meats'
  }),
 new Listing({
    image: '',
    title: 'Whole Grain Wheat',
    body: 'Only the most quality wheat in town. Try this out now!',
    photoUrls:'',
    price: 12.11,
    Location: '94612',
    category: 'grains'
  }),
 new Listing({
    image: '',
    title: 'Old Fashioned Oats',
    body: 'Check out our low in saturated fat old fashioned oats.',
    photoUrls:'',
    price: 2.53,
    location: '94610',
    category: 'grains'
  }),
 new Listing({
    image: '',
    title: 'White Long Grain Rice',
    body: 'We’re proud that this is one of our products that support our commitment to help preserve the natural world.',
    photoUrls:'',
    price: 5.99,
    location: 94611,
    category: 'grains'
  }),
 new Listing({
    image: '',
    title: 'Whole Kernel Corn',
    body: 'Whole kernel corn for a versatile quick side dish!',
    photoUrls:'',
    price: 8.99,
    location: '94541',
    category: 'grains'
  }),
 new Listing({
    image: '',
    title: 'Organic Pearled Barley',
    body: 'Enjoy our organic pearled barley, its hard outer layers are removed. Truly nutritious!',
    photoUrls:'',
    price: 7.78,
    location: '94609',
    category: 'grains'
  }),
 new Listing({
    image: '',
    title: 'Organic Hulled Millet',
    body: 'Our organic hulled Millet is grown and packed in the USA. These are verified gluten free!',
    photoUrls:'',
    price: 13.49,
    location: '94516',
    category: 'grains'
  }),
 new Listing({
    image: '',
    title: 'Organic Rye',
    body: 'Not only is it delicious and healthy but also a fiber-rich food. Get some here!',
    photoUrls:'',
    price: 23.49,
    location: '94707',
    category: 'grains'
  }),
 new Listing({
    image: '',
    title: 'Whole Grain Sorghum',
    body: 'Use whole grain sorghum in soups, salads, and pilafs or pop it to create a unique snack. Must try!',
    photoUrls:'',
    price: 9.35,
    location: '94601',
    category: 'grains'
  }),
 new Listing({
    image: '',
    title: 'Triticale',
    body: 'Triticale does not have the same popularity as other “healthy grains, but it can also be used to make cakes, muffins, crispbread, and breakfast cereals.',
    photoUrls:'',
    price: 4.16,
    location: '94516',
    category: 'grains'
  }),
 new Listing({
    image: '',
    title: 'Organic Quinoa',
    body: 'These grains contain a lot of amino acids and fiber. Quinoa is used to make breakfast flakes, flour, bread, crackers, and protein powder. 100% Certified Organic.',
    photoUrls:'',
    price: 7.99,
    location: '94612',
    category: 'grains'
  }),
 new Listing({
    image: '',
    title: 'Amaranth',
    body: 'Another unique grain to try out is this amaranth. Amaranth can be boiled with just water, but you can add them to cookie batter, rice dishes, salad, and breakfast cereal.',
    photoUrls:'',
    price: 9.13,
    location: '94709',
    category: 'grains'
  }),
 new Listing({
    image: '',
    title: 'Buckwheat',
    body: 'Buckwheat is the main ingredient of Japanese soba. These grains contain a lot of vitamin B and minerals. Another healthy grain to try out.',
    photoUrls:'',
    price: 7.33,
    location: '94541',
    category: 'grains'
  }),
]
//connect mongoose
mongoose
  .connect(String(dev.db), { useNewUrlParser: true })
  .catch(err => {
    console.log(err.stack);
    process.exit(1);
  })
  .then(() => {
    console.log("connected to db in development environment");
  });
//save your data. this is an async operation
//after you make sure you seeded all the products, disconnect automatically
products.map(async (p, index) => {
  await p.save((err, result) => {
    if (index === products.length - 1) {
      console.log("DONE!");
      mongoose.disconnect();
    }
  });
});