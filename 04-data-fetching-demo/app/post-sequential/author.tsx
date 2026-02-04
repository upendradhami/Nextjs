type Author= {
  id:number;
  name: string;
}

export async function Author ({userId} : {userId: number}){

  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
  const user:Author = await response.json();

  return (
     <div>
      <h2 className="font-bold text-gray-500"> Writtten by : {user.name}</h2>
     </div>
)
}