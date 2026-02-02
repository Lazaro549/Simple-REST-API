import items from "../data/items.data.js";

export const findAll = () => items;

export const findById = (id) =>
  items.find(item => item.id === id);

export const create = (data) => {
  const newItem = {
    id: Date.now().toString(),
    ...data
  };
  items.push(newItem);
  return newItem;
};

export const update = (id, data) => {
  const index = items.findIndex(item => item.id === id);
  if (index === -1) return null;

  items[index] = { ...items[index], ...data };
  return items[index];
};

export const remove = (id) => {
  const index = items.findIndex(item => item.id === id);
  if (index === -1) return false;

  items.splice(index, 1);
  return true;
};
