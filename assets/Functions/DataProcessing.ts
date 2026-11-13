import {create} from 'zustand';
import { DishList } from './Lists/DishEntries';
import { Trash } from './Lists/Deleted';
import { Alert } from 'react-native';
import { isDefined } from 'react-native-reanimated/lib/typescript/common';
import { Store } from './Lists/Cart';

const dishes = DishList;
const bin = Trash;
let store =Store;

// these are type attributes 
export type CourseType =  'All'|'Entrée'  | 'Main' | 'Dessert'

export const  COURSES: CourseType[] = ['Dessert', 'Main',  'Entrée','All']; /*The choice for se of the  */


 export type DishEntries = {  // attributes of the array items
    id : number,
    name : string,
    course: string,
    description: string,
    price: number,
    image: any, 
    isDeleted: boolean
};

type DishStore = { // defines the the subfunctions of the main function
    trash : DishEntries[],
    entries: DishEntries[],
    addDish: (entry: DishEntries ) => void,
    removeDish: (id:number) => void,
    restoreDish: (id: number) => void,
    
}

export const useDishStore = create<DishStore>((set,get) =>({  /**(Robin, 2022) */

trash: bin,
entries: dishes,

addDish: (entry) => {  /**(Robin, 2022) */

    const currentEntries = get().entries;
    const alreadyExists = currentEntries.some(
        (dish) => 
            dish.name.toLowerCase() === entry.name.toLocaleLowerCase() 
        
    );

    const newEntry = {...entry, isDeleted: false};

    if (alreadyExists) {
        Alert.alert ('Duplicate', `"${entry.name}" is already in the list.`)
        return;
    }

    const updated  = [newEntry, ...currentEntries]

    const organizing = updated.map((dish, index)=> ({
        ...dish,
        id : index +1
    }));

    set({entries:organizing})
},
removeDish: (id) =>   /**(Robin, 2022) */    
    set((state) => {
        const dishToDelete  = state.entries.find((dish) => dish.id === id)
        if (!dishToDelete) return {} as any;
        
        const updateDish = {...dishToDelete, isDeleted: true } 
        Alert.alert('Item(s) have been successfully deleted')
        
        return {
            entries: state.entries.filter((dish) => dish.id !== id),
            trash: [...state.trash ?? [] , updateDish ]
            
        }
    }),

    restoreDish: (id) => {
         const{trash, entries} = get();

         const dishToRestore = trash.find((dish) => dish.id === id ); //Finds the items in the array 
         if (!dishToRestore) return ;

            // changes the the deleted marker to not deleted 
            const restoredDish  ={...dishToRestore, isDeleted: false};

            
            const updatedMenu = [restoredDish, ...entries];

            const updatedEntries = updatedMenu.map((dish, index) => ({
                ...dish,
                id: index +1
                // adds the items back into the array but att the top of the list
            }));

         const updatedBin = trash.filter((dish) => dish.id === id) // find the item sit will delete based on the id.
            Alert.alert('Item has been restored to the list')
         set({
            entries: updatedEntries,
            trash: updatedBin,
             /**updates the dish and bin array to their new form */
         })



    }







}));


 type CartItems = DishEntries

 type CartStore = {
    cart : CartItems[],
    addToCart:(entry:CartItems) => void;
    removeFromCart: (id: number) => void;
 };

 export const useCartStore = create<CartStore>((set,get) => ({  /**(Robin, 2022) */
cart: store,
addToCart: (dish: DishEntries) => {  /**(Robin, 2022), This is the sub-function for the add of items into the cart */ 
    set((state) => {
        const alreadyInCart = state.cart.some((item) => item.name === dish.name) // Check if there are any items in the cart that are the same 

        if (alreadyInCart){
            Alert.alert("Wait", `"${dish.name}" is already in the cart`) // Message for if the item is indeed the same 
            return {} as any;
        }

        const activeCart = {...dish, isDeleted: false} // Standardized the isDeleted attribute to false for all newly added items 

        return {cart: [...state.cart, activeCart]}  // sets the items in the cart list with the changes 

    });
},
  removeFromCart: (id) => { /**(Robin, 2022) */
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== id)//filter through the array to find the items id ,
    }));
  },

 }));