import {create} from 'zustand';
import { DishList } from './Lists/DishEntries';
import { Trash } from './Lists/Deleted';
import { Alert } from 'react-native';
import { isDefined } from 'react-native-reanimated/lib/typescript/common';

const dishes = DishList;
const bin = Trash;

// these are type attributes 
export type CourseType =  'All'|'Entrée'  | 'Main' | 'Dessert'

export const  COURSES: CourseType[] = ['Dessert', 'Main',  'Entrée']; /*The choice for se of the  */


 export type DishEntries = {  // attributes of the array 
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

export const useDishStore = create<DishStore>((set,get) =>({

trash: bin,
entries: dishes,

addDish: (entry) => {

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
removeDish: (id) =>     
    set((state) => {
        const dishToDelete  = state.entries.find((dish) => dish.id === id)
        if (!dishToDelete) return {} as any;
        
        const updateDish = {...dishToDelete, isDeleted: true } 

        return {
            entries: state.entries.filter((dish) => dish.id !== id),
            trash: [...state.trash ?? [] , updateDish ]
        }
    }),
    restoreDish: (id) => {
         const{trash, entries} = get();

         const dishToRestore = trash.find((dish) => dish.id === id ); //Finds the items in the array 
         if (!dishToRestore) return;

            // changes the the deleted marker to not deleted 
            const restoredDish  ={...dishToRestore, isDeleted: false};

            
            const updatedMenu = [restoredDish, ...entries];

            const updatedEntries = updatedMenu.map((dish, index) => ({
                ...dish,
                id: index +1
                // adds the items back into the array but att the top of the list
            }));

         const updatedBin = trash.filter((dish) => dish.id === id) // find the item sit will delete based on the id.

         set({
            entries: updatedEntries,
            trash: updatedBin
             /**updates the dish and bin array to their new form */
         })



    }







}));