import User from "../model/user-model.js";

export const addTask = async (req, res) => {
  const { task } = req.body;

  const createUser = new User({ task });

  try {
    await createUser.save();
    res.json(createUser);
  } catch (error) {
    console.error(error);
  }
};

export const getAllTasks = async (req, res) => {
  try {
    const allUsers = await User.find();
    res.json(allUsers);
  } catch (error) {
    console.error(error);
  }
};

export const deleteTaskById = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedUser = await User.findByIdAndRemove(id);
    res.json(deletedUser);
  } catch (error) {
    console.error(error);
  }
};

export const updateTaskById = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  try {
    const updatedUser = await User.findById(id);
    updatedUser.name = name;

    await updatedUser.save();
    res.json(updatedUser);
  } catch (error) {
    console.error(error);
  }
};
