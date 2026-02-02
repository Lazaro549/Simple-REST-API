import {
  findAll,
  findById,
  create,
  update,
  remove
} from "../models/item.model.js";

export const getAllItems = (req, res) => {
  res.json(findAll());
};

export const getItemById = (req, res) => {
  const item = findById(req.params.id);
  if (!item) {
    return res.status(404).json({ message: "Item not found" });
  }
  res.json(item);
};

export const createItem = (req, res) => {
  const newItem = create(req.body);
  res.status(201).json(newItem);
};

export const updateItem = (req, res) => {
  const updatedItem = update(req.params.id, req.body);
  if (!updatedItem) {
    return res.status(404).json({ message: "Item not found" });
  }
  res.json(updatedItem);
};

export const deleteItem = (req, res) => {
  const deleted = remove(req.params.id);
  if (!deleted) {
    return res.status(404).json({ message: "Item not found" });
  }
  res.status(204).send();
};
