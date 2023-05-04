import { useEffect, useState } from 'react'
import { UserTitle } from '../../components/UserTitle';
import Card from 'react-bootstrap/Card';

export default function UserListScreen() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
      const fetchUser = async () => {
      const response = await fetch('url');
      const data = await response.json();
      setUsers(data);
    };

    fetchUser();
  }, []);

  return (
    <UserTitle>
      <h1>Lista de usuários</h1>
      {users.map(user => (
        <Card key={user.id}>
          <Card.Body>
            <Card.Title>{user.name}</Card.Title>
            <Card.Text>ID: {user.id}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </UserTitle>


  )
}
