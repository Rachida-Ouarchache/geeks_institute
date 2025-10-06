import db from "../config/db.js";

export const createUser = async (userData, hashedPassword) => {
  return await db.transaction(async (trx) => {
    const [user] = await trx("users")
      .insert({
        email: userData.email,
        username: userData.username,
        first_name: userData.first_name,
        last_name: userData.last_name,
      })
      .returning("*");

    await trx("hashpwd").insert({
      username: user.username,
      password: hashedPassword,
    });

    return user;
  });
};

export const findByUsername = async (username) => {
  return await db("users").where({ username }).first();
};

export const getPasswordHash = async (username) => {
  return await db("hashpwd").where({ username }).first();
};

export const getAllUsers = async () => {
  return await db("users").select("id", "username", "email", "first_name", "last_name");
};

export const getUserById = async (id) => {
  return await db("users").where({ id }).first();
};

export const updateUser = async (id, data) => {
  return await db("users").where({ id }).update(data).returning("*");
};
