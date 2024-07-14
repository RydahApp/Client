import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface FirstState {
  isAppFirstLaunched: boolean;
}

// Define types for your actions
interface FirstActions {
  setIsAppFirstLaunched: (user: boolean) => void;
  removeFirstUser: () => void;
}

// Combine state and actions into a single type
type firstStore = FirstState & FirstActions;

const useFirstStore = create<firstStore>(
  persist(
    (set) => ({
      isAppFirstLaunched: false,
      setIsAppFirstLaunched: (user: boolean) =>
        set({ isAppFirstLaunched: user }),
      removeFirstUser: () => {
        set({ isAppFirstLaunched: false });
        AsyncStorage.removeItem("rydahglobalstore"); // Remove persisted data
      },
    }),
    {
      name: "rydahglobalstore",
      storage: createJSONStorage(() => AsyncStorage),
    }
  ) as any
);

export default useFirstStore;
