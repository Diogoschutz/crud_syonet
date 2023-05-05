import { useEffect, useState } from 'react'
import api from '../../services/api';

type User = {
  id: number;
  email: string;
}

export default function UserListScreen() {
  const [users, setUsers] = useState<User[]>([]);

  async function fetchUsers() {
    try {
      const response = await api.get('/users');
      setUsers(response.data)
    }catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <h1>Lista de usuários</h1>
      {users.map(user => (
        <div key={user.id.toString()}>
            <p>ID: {user.id}</p>
            <p>{user.email}</p>
        </div>
      ))}
    </>
  )
}
