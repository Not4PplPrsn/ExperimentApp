import { DishEntries } from "../DataProcessing";
import { COURSES } from "../DataProcessing";

/**The image for all the items in the menu by course */

// Entrees 
const ravioliAllaCaprese = require('../../Icons/images/Entree/Ravioli-with-Sage-Butter.jpg'); /**(Pasta Grammar, 2023; James, 2025) */
const chickenParmagiana = require('../../Icons/images/Entree/Chicken-Parmigiana-2-720x720.webp'); /** (Chef Skyler Recipes, 2025)*/
const eggPlantRollanti = require('../../Icons/images/Entree/eggplant-rollatini-1.jpg'); /**(Homolka, 2026) */
const grilledSalmonWithLemon = require('../../Icons/images/Entree/chini1_398Grilled-Salmon-with-Lemon-and-Herbs__841a8fd2-af53-4765-9fb5-31f1827d636b.png'); /** (Ava, 2025)*/

//Mains 
const coqAuVin = require('../../Icons/images/Main/Coq-au-Vin-Blanc-02-1536x2048.jpg'); /** (Jones, 2021)*/
const soleMeuniere = require('../../Icons/images/Main/Classic-French-Sole-Meuniere-6.webp'); /** (Audrey, 2022)*/
const beoufBourgignon = require('../../Icons/images/Main/boeuf_bourguignon.jpg');/** (Wong-Folliet, 2016)*/
const duckConfit = require('../../Icons/images/Main/duck-confit-superJumbo.webp');/**(Clark, 2026) */

//Deserts 
const stickToffeePudding = require('../../Icons/images/Dessert/stick-toffee-pudding-48-768x768.webp');/*(Jane, 2025) */
const chocolateBreadAndButterPudding = require('../../Icons/images/Dessert/chocolate-bread-and-butter-pudding.jpg'); /**(Ashton, 2015) */
const bakewellTart = require('../../Icons/images/Dessert/bake-well-tart-page-1-1024x780.jpg'); /**(Cox, 2022)*/
const treacleSpongePudding = require('../../Icons/images/Dessert/X28s8KcXzJyQqcXeN9GzBf-1024-80.jpg.webp');/**(Dady, 2026) */



type existingDishes = DishEntries

export const DishList: existingDishes[] = [
{id: 1,name: 'Ravioli alla Caprese',course: 'Entrée',description:'Ravioli alla caprese, features delicate pasta samples, delicately stuffed with mozzarella, which is then seasoned with salt and herbs to perfection. Each bite of delivers the flavours of a light caprese salad - ripe tomato, mozzarella and fresh basil, making this dish a refreshing reminder of italian culinary tradition, and a wonderfully balanced dish.', image: ravioliAllaCaprese,price: 150 ,isDeleted: false},
{id: 2,name: 'Chicken Parmagiana',course: 'Entrée',description:'Tender chicken breast lightly breaded and pan-fried until golden, then topped with rich marinara and melted mozzarella, and baked to bubbling perfection. Each bite offers a comforting balance of crispy coating, savoury sauce, and creamy cheese—a classic Italian favourite that satisfies without overwhelming, delivering warm, familiar flavours that pair beautifully with the fresh, bright notes of our caprese-inspired dishes. ', image: chickenParmagiana,price: 150 ,isDeleted: false}, 
{id: 3,name: 'Egg plant rollatini',course: 'Entrée',description:'Thin slices of tender eggplant wrapped around creamy ricotta and fragrant herbs, then baked in a light tomato sauce until soft and bubbling. This vegetarian favourite delivers the comforting, home-style flavours of classic Italian cooking—earthy eggplant, delicate cheese, and bright sauce—creating a satisfying, well-balanced dish that complements the fresh, vibrant character of our caprese-inspired menu beautifully. ', image: eggPlantRollanti,price: 250 ,isDeleted: false},
{id: 4,name: 'Grilled salmon with lemon and herbs',course: 'Entrée',description:'Fresh salmon fillet gently grilled to flaky perfection, finished with bright lemon and a blend of fragrant herbs. Light yet satisfying, this dish offers a refreshing alternative for guests seeking something beyond pasta—its clean, citrus-forward flavours complementing the fresh, vibrant character of our caprese-inspired selections, and providing a beautifully balanced option that rounds out the menu with elegance and simplicity. ', image: grilledSalmonWithLemon,price: 450 ,isDeleted: false},

{id: 5,name: 'Coq au Vin',course: 'Main',description:'Tender chicken slowly braised in red wine with mushrooms, pearl onions, and smoky bacon until rich and deeply flavourful. This classic French dish delivers hearty, comforting character—silky sauce, succulent meat, and aromatic herbs—creating a warming, satisfying plate that showcases the elegance of traditional French country cooking, beautifully balanced and memorable from the first bite to the last. ', image: coqAuVin,price: 450 ,isDeleted: false},
{id: 6,name: 'Sole Meunière',course: 'Main',description:"Delicate sole fillet lightly dusted in flour and pan-fried in nutty browned butter, finished with fresh lemon and parsley. Simple yet refined, this classic French preparation highlights the fish's natural sweetness—crisp golden edges, bright citrus, and rich butter—offering a light, elegant dish that feels effortlessly sophisticated and beautifully balanced on the palate.", image: soleMeuniere,price: 150 ,isDeleted: false},
{id: 7,name: 'Boeuf Bourguignon',course: 'Main',description:"Slow-cooked beef simmered in red wine with carrots, onions, and mushrooms until meltingly tender and deeply savoury. This beloved French classic offers robust, comforting flavours—rich sauce, succulent meat, and earthy vegetables—creating a hearty, satisfying dish that embodies the warmth and elegance of traditional French cuisine, beautifully balanced and unforgettable from the first forkful to the last.", image: beoufBourgignon,price: 350 ,isDeleted: false},
{id: 8,name: 'Duck Confit',course: 'Main',description:"Tender duck leg cured with salt and herbs, then slowly cooked in its own fat until meltingly soft, with crisp golden skin. This celebrated French classic delivers rich, deeply savoury flavour—succulent meat, delicate seasoning, and irresistible texture—creating a luxurious, satisfying dish that embodies the elegance and tradition of French cuisine, beautifully balanced and unforgettable from the first bite to the last.", image: duckConfit,price: 650 ,isDeleted: false},

{id: 9,name: 'Sticky Toffee Pudding',course: 'Dessert',description:"A moist sponge cake made with finely chopped dates, baked until tender and generously drenched in warm toffee sauce. Served with rich vanilla custard or cream, this beloved English classic delivers deep, comforting sweetness—caramel notes, soft texture, and indulgent warmth—creating a satisfying, memorable dessert that embodies the homely, hearty character of traditional British cooking, beautifully balanced and irresistible from the first spoonful to the last.", image: stickToffeePudding,price: 150 ,isDeleted: false},
{id: 10,name: 'Chocolate Bread and Butter Pudding',course: 'Dessert',description:"Slices of buttered bread layered with chocolate chips, covered in a rich chocolate custard, and baked until golden and soft. This warm, comforting pudding is full of deep chocolate flavour with a tender, gooey texture. Rich, sweet, and easy to love, it turns a classic English favourite into a truly indulgent dessert that's hard to resist from the first spoonful to the last.", image: chocolateBreadAndButterPudding,price: 250 ,isDeleted: false},
{id: 11,name: 'Bakewell Tart',course: 'Dessert',description:"A crisp pastry case filled with sweet raspberry jam and fragrant almond frangipane, baked until golden and finished with flaked almonds. This classic English bake delivers a beautiful balance of nutty richness, fruity sweetness, and buttery texture—elegant yet comforting, and steeped in tradition—creating a satisfying, memorable dessert that showcases the very best of British baking, delightful from the first bite to the last.", image: bakewellTart,price: 350 ,isDeleted: false},
{id: 12,name: 'Treacle Sponge Pudding',course: 'Dessert',description:"A soft, steamed sponge generously soaked in golden syrup and served with warm custard, this traditional English pudding offers deep, comforting sweetness and a wonderfully tender texture. Rich caramel notes, buttery sponge, and creamy custard come together in a hearty, nostalgic dessert that embodies the warmth of classic British home cooking—indulgent, satisfying, and utterly irresistible from the first spoonful to the very last.", image: treacleSpongePudding,price: 550 ,isDeleted: false},

]