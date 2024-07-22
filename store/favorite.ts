import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Product } from "@/types";

interface FavouriteState {
  favouriteItems: Product[];
  addToFavourite: (product: Product) => void;
  deleteFavouriteItem: (itemId: string) => void;
  handleDecrement: (itemId: string) => void;
  handleIncrement: (itemId: string) => void;
  resetFavourite: () => void;
}

const useFavouriteStore = create<FavouriteState>(
  persist(
    (set) => ({
      favouriteItems: [],
      addToFavourite: (product: Product) =>
        set((state: FavouriteState) => {
          const existingIndex = state.favouriteItems.findIndex(
            (item) => item.id === product.id
          );

          if (existingIndex !== -1) {
            // Product already exists, update quantity
            const updatedFavouriteItems = [...state.favouriteItems];
            updatedFavouriteItems[existingIndex].quantity += product.quantity;
            return { favouriteItems: updatedFavouriteItems };
          } else {
            // Product doesn't exist, add a new entry
            return { favouriteItems: [...state.favouriteItems, product] };
          }
        }),
      deleteFavouriteItem: (itemId: string) =>
        set((state: FavouriteState) => {
          const updatedFavouriteItems = state.favouriteItems.filter(
            (item) => item.id.toString() !== itemId
          );
          return { favouriteItems: updatedFavouriteItems };
        }),
      handleDecrement: (itemId: string) =>
        set((state: FavouriteState) => {
          const updatedFavouriteItems = [...state.favouriteItems];
          const itemIndex = updatedFavouriteItems.findIndex(
            (item) => item.id.toString() === itemId
          );

          if (itemIndex !== -1) {
            const updatedItem = {
              ...updatedFavouriteItems[itemIndex],
              quantity: Math.max(
                updatedFavouriteItems[itemIndex].quantity - 1,
                1
              ),
            };
            updatedFavouriteItems[itemIndex] = updatedItem;
            return { favouriteItems: updatedFavouriteItems };
          }

          return state;
        }),
      handleIncrement: (itemId: string) =>
        set((state: FavouriteState) => {
          const updatedFavouriteItems = [...state.favouriteItems];
          const itemIndex = updatedFavouriteItems.findIndex(
            (item) => item.id.toString() === itemId
          );

          if (itemIndex !== -1) {
            const updatedItem = {
              ...updatedFavouriteItems[itemIndex],
              quantity: updatedFavouriteItems[itemIndex].quantity + 1,
            };
            updatedFavouriteItems[itemIndex] = updatedItem;
            return { favouriteItems: updatedFavouriteItems };
          }

          return state;
        }),
      resetFavourite: () =>
        set({
          favouriteItems: [],
        }),
    }),
    {
      name: "rydahFavourite",
      storage: createJSONStorage(() => AsyncStorage),
    }
  ) as any
);

export default useFavouriteStore;
