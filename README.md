# App for the use of the owner and Chef Mr Christoffel.

## Description and Requirements 
This app was commissioned by the restaurant chef and owner Mr. Christoffel for the sake tracking and editing the nightly menus. The other actions that this stakeholder has asked for when it comes to the app, are:

### Requirements 
1. To be able to see the items on th home page of the app and  track the items in app.
2. To add new items to the existing menu that has been prepared.
3. To allow the user to delete menu items.
4. Ensure that items do not repeat when adding them into the existing list.
5. Add a search bar to the menu item selection page 


### Changes Made 

The first thing I was to add new router for making of a multi-folder app, this allowed me to store the page the user will navigate to in different tsx files. Then began making and storing th files for the use of the arrays in different tsx files as well. there after installed the zustand dependency for the use of the create variable so I can make and use sub-functions in the pages. The subfunctions can be found in [DataProcessing](./assets/Functions/DataProcessing.ts) which is what I constantly use for the use of most of my function specifically for the Cart, Deleted, Add, Menu and Remove pages. The subfunctions are imported and used for their specific purpose in all those pages. As part of making this multi-page project I deleted the App.tsx landing page, it would have interfere with routers settings. 

#### New pages 
The main pages are where the main work is done. These are the first pages that one will first be navigated to when the app has loaded, specifically the the Home page as listed bellow. This is because the [layout](./app/_layout.tsx) will immediately navigate you to that page as it is the main navigator, and is drawer navigation system. The second [layout](./app/(tabs)/_layout.tsx) page the secondary navigation which allow the navigate between the main three pages with a bottom tab navigation.

##### Main Pages 
-   The [Home](./app/(tabs)/index.tsx) page is where the menu is displayed along with the numbers in the menu and how many items are each in course for the menu. The user can scroll side-ways and up and down. Each items is shown under the appropriate course heading, which why will scroll side-ways in on the screen. The value for each item will change as the menu is edited and new items are added to it. The menu is directly taken from [DishEntries.ts](./assets/Functions/Lists/DishEntries.ts).

-  The [Editing](./app/(tabs)/Editing.tsx) page is the off ramp into the editing pages for the like Add and Remove listed below, if you wish to know about them. To summarize this page sends you to the pages meant for the editing/deleting of items in the menu. 

-  The [MenuSelection](./app/(tabs)/MenuSelection.tsx) page is wht  allows the user to select items that the user would like to add to their cart. If the user is having trouble with search for their preferred dish, they can use the filter menu which is dropdown menu which filter using the dropdown menu. Or the user can use the search for the item via its name using the search bar and it will be displayed. This page also uses the array in the [DishEntries.ts](./assets/Functions/Lists/DishEntries.ts) to display all its items, and in the display on will press the button at the bottom of the item display to store it in the cart. 


##### Secondary pages / Drawer menu
-  [Add](./app/Editing/Add.tsx) is the page which navigate to form that as user will have to fill with the attributes corresponding with the placeholder. The add function is used here where the [DishEntries.ts](./assets/Functions/Lists/DishEntries.ts) is edited via adding a new item that does not exist, and must press the button at the bottom the form to add to the menu, and the new item will be displayed and the top of the menu in all pages that use the same array. And you can alway press the backwards facing arrow to return to the page before, or use the drawer menu to navigate the home page by selecting the Home tab.

-  [Remove](./app/Editing/Remove.tsx) is where you go for deleting of items from the array. The remove function also uses [DishEntries.ts](./assets/Functions/Lists/DishEntries.ts) array for the display of the menu items. And you may delete the items by pressing the bin icon at the bottom of each item listed. This will trigger the removal of that specific item from the menu and into the page below. This will also be reflected in the item being removed from pages which use the array to display their items.

-  The [Deleted](./app/History/Deleted.tsx) page is where one goes via the drawer menu under the History toggle to open the tabs associate with it which is this one and the one bellow. The items which were deleted from the menu will display here and you can restore them using the button at the bottom of the item container. This page uses the array stored in the [Deleted.ts](./assets/Functions/Lists/Deleted.ts).

-  [Cart](./app/History/Cart.tsx) is the page where all the items added from the MenuSelection page above, this is where one will will delete items form their cart. This page use the array stored in the[Cart.ts](./assets/Functions/Lists/Cart.ts) file to display selected items from the MenuSelection page.





## Links and Repo(s)
### Repo(s)
- Mirror [https://github.com/Not4PplPrsn/ExperimentApp.git]
- Maine Repo [https://github.com/EMECPE/mast5112-2026-g2-mast5112-poe-not4pplprsn.git]

## Other Links 
- YouTube [https://youtu.be/ig9MQKpLw9M]


## References


#### Image references

Ashton, K., 2015. Chocolate Bread & Butter Pudding. Chef Kevin Ashton. Available at: <https://chefkevinashton.com/2015/05/10/chocolate-bread-butter-pudding/> [Accessed 12 November 2026].
Audrey, 2022. Classic French Sole Meunière. Pardon Your French. Available at: <https://www.pardonyourfrench.com/classic-french-sole-meuniere/> [Accessed 14 November 2026].
Ava, 2025. Grilled Salmon with Lemon Herb Marinade. Available at: <https://www.recipesbyava.com/grilled-salmon-with-lemon-herb-marinade/> [Accessed 12 November 2026].
Chef Skyler Recipes, 2025. Chicken Parmigiana: Your Easy Dinner! -. Available at: <https://chef.skylerrecipes.com/easy-chicken-parmigiana-recipe/> [Accessed 14 November 2026].
Clark, M., 2026. Easy Duck Confit Recipe • 4★. [online] NYT Cooking. Available at: <https://cooking.nytimes.com/recipes/1013002-easy-duck-confit> [Accessed 12 November 2026].
Cox, F., 2022. Bakewell Tart | goop. [online] Available at: <https://goop.com/recipes/bakewell-tart/> [Accessed 14 November 2026].
Dady, J., 2026. Steamed treacle sponge pudding with custard recipe | GoodtoKnow. [online] Available at: <https://www.goodto.com/recipes/treacle-sponge-and-custard> [Accessed 12 November 2026].
Homolka, G., 2026. Best Eggplant Rollatini Recipe (Vegetarian) | Skinnytaste. [online] Available at: <https://www.skinnytaste.com/best-skinny-eggplant-rollatini-with/> [Accessed 12 November 2026].
James, H., 2025. 18 Easy Ravioli Dinners Ready in No Time. Foodie Haven. Available at: <https://foodie-haven.com/18-easy-ravioli-dinners-ready-in-no-time/> [Accessed 11 November 2026].
Jane, 2025. Classic Sticky Toffee Pudding Recipe (Easy British Dessert). [online] Available at: <https://epicdishes.com/sticky-toffee-pudding-recipe/> [Accessed 12 November 2026].
Jones, B., 2021. Coq Au Vin Blanc Chicken in White Wine. Krumpli. Available at: <https://www.krumpli.co.uk/coq-au-vin-blanc/> [Accessed 12 November 2026].
Pasta Grammar, 2023. Ravioli alla Caprese | Cheesy Ravioli in Tomato Sauce Recipe. [online] Pasta Grammar. Available at: <https://pastagrammar.com/blogs/recipes/ravioli-alla-caprese-cheesy-ravioli-in-tomato-sauce-recipe> [Accessed 12 November 2026].
Wong-Folliet, G., 2016. Classic French Beef Bourguignon Recipe. INSPIRELLE. Available at: <https://inspirelle.com/beef-bourguignon-boeuf-bourguignon-recipe/> [Accessed 14 November 2026].



Expo, 2026. Authentication in Expo Router. [online] Expo documentation. Available at: <https://docs.expo.dev/router/advanced/authentication/> [Accessed 15 November 2026].
Expo, 2026. ImagePicker. [online] Expo documentation. Available at: <https://docs.expo.dev/versions/latest/sdk/imagepicker/> [Accessed 10 October 2026].
npm, 2025. react-native-paper-dropdown-2025. [online] npm. Available at: <https://www.npmjs.com/package/react-native-paper-dropdown-2025> [Accessed 3 October 2026].
Poimandres, 2026. Beginner TypeScript Guide - Zustand. [online] Available at: <https://pmndrs.github.io/zustand/learn/guides/beginner-typescript> [Accessed 10 October 2026].
Robin, 2022. Reset persisted stated of an application State managed with Zustand. [Forum post] Stack Overflow. Available at: <https://stackoverflow.com/q/74071660> [Accessed 10 October 2026].
The IIE, T.I.I. of E., 2026. MAST5112_MM.docx. [online] Available at: <https://advtechonline.sharepoint.com/:w:/r/sites/TertiaryStudents/_layouts/15/Doc.aspx?sourcedoc=%7BE64EF930-F31D-42F3-ABDE-632C1339F1AF%7D&file=MAST5112_MM.docx&action=default&mobileredirect=true> [Accessed 8 September 2026].
W3Schools, 2026. TypeScript Tutorial. [online] W3Schools. Available at: <https://www.w3schools.com/typescript/index.php> [Accessed 15 November 2026].






