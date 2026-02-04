type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
}

 export default async function UserServerPage() {
  await new Promise((resolve) => setTimeout(resolve,3000) );
  const response =  await fetch("https://jsonplaceholder.typicode.com/users");
  const Users:User[] = await response.json();
  
  return (
    <>
       <div> 
        <h1> Users Data in the Server Components</h1>
        <ul className="space-y-2 p-3">
           {Users.map((user) => ( 
          <li key={user.id} className="mb-2 bg-white text-black p-2 border-b">
            <p className="font-semibold">{user.name} ({user.username})</p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
          </li>
        ))}
        </ul>
       </div>
    </>
  )
}