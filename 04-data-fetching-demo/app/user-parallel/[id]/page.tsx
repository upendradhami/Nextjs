

type Post = {
  userId:  number;
  id: number;
  title: string;
  body: string;
};

type Album = {
   userId: number;
   id: number;
   title: string;
};

async function getUserPosts(userId: string){
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
  return res.json();
}

async function getUserAlbums(userId: string){
  const res = await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`);
  return res.json();
}
export default async function UserProfile({params} : {
  params: Promise<{id: string}>
}) {
   const {id} = await params;
   const postData = getUserPosts(id);
   const albumData = getUserAlbums(id);
   const [posts,albums] = await Promise.all([postData,albumData]);

  return (
    <div className="p-4 max-w-7xl mx-auto">
       <h1 className="text-3xl font-extrabold "> Post information </h1>
       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-x-4">
          <h2 className="text-2xl text-amber-300 font-bold"> Posts </h2>
          {
            posts.map((post: Post) => (<div key={post.id} className="bg-white p-4 m-3 mx-auto" >
               <h2 className="text-lg font-bold text-gray-800 leading-tight">{post.title}</h2>
               <p className="text-gray-600 leading-relaxed">{post.body}</p>
              </div>))
          }
        </div>


        <div className="space-x-4">
          <h2 className="text-2xl text-amber-300 font-bold"> Albums </h2>
          {
            albums.map((post: Album) => (<div key={post.id} className="bg-white p-4 m-3 mx-auto" >
               <h2 className="text-lg font-bold text-gray-800 leading-tight">{post.title}</h2>
              </div>))
          }
        </div>
       </div>
    </div>
  );
}