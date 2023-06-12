import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUsers, addUser, updateUser, deleteUser } from './userReducer';
import { getUsers, createUser, updateUser as updateUserApi, deleteUser as deleteUserApi } from './api';

const UserComponent = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  useEffect(() => {
    // Fetch users when the component mounts
    fetchUsers();
  }, []);
  const fetchUsers = async () => {
    try {
      const response = await getUsers();
      dispatch(setUsers(response.data));
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleAddUser = async () => {
    const newUser = { name: 'John Doe', email: 'john@example.com' };

    try {
      const response = await createUser(newUser);
      dispatch(addUser(response.data));
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  const handleUpdateUser = async (userId) => {
    const updatedUser = { name: 'Updated User', email: 'updated@example.com' };

    try {
      const response = await updateUserApi(userId, updatedUser);
      dispatch(updateUser(response.data));
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  const handleDeleteUser = async (userId) => {
    try {
      await deleteUserApi(userId);
      dispatch(deleteUser(userId));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div>
      <h2>Users</h2>
      <button onClick={handleAddUser}>Add User</button>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
            <button onClick={() => handleUpdateUser(user.id)}>Update</button>
            <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserComponent;
            