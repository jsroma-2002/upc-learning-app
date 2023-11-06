import { create } from "zustand";
import { Item } from "../types/item";

interface ItemsState {
  items: Item[];
  setItems: (items: Item[]) => void;
  addItem: (item: Item) => void;
}

export const useItemsStore = create<ItemsState>((set) => ({
  items: [],
  setItems: (items: Item[]) => set({ items }),
  addItem: (item: Item) =>
    set((state: { items: Item[] }) => ({ items: [...state.items, item] })),
}));
