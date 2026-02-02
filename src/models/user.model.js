import bcrypt from "bcryptjs";

const users = [];

export const createUser = async ({ email, password }) => {
  const hashedPassword = await bcrypt.hash(password, 10);

  const user = {
    id: Date.now().toString(),
    email,
    password: hashedPassword
  };

  users.push(user);
  return user;
};

export const findUserByEmail = (email) =>
  users.find(user => user.email === email);

export const findUserById = (id) =>
  users.find(user => user.id === id);
