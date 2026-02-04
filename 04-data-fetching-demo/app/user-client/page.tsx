"use client";
import { useEffect, useState } from "react";

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
}

export default function UserClientPage() { // Changed from 'userClientPage' to 'UserClientPage'
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        
        if (!response.ok) { 
          throw new Error(`Network response was not ok: ${response.status}`);
        }
        
        const data = await response.json();
        setUsers(data);
        
      } catch (error) {
        setError(error instanceof Error ? error.message : 'An unknown error occurred');
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
  }, []);

  return (
    <div className='m-4 p-5 border-2 rounded-lg'>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}

      <h1 className="text-2xl font-bold mb-4">User List (Client-Side Fetching)</h1>
      <ul>
        {users.map((user) => ( 
          <li key={user.id} className="mb-2 p-2 border-b">
            <p className="font-semibold">{user.name} ({user.username})</p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}