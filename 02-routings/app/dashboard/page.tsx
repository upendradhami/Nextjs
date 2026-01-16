function sayingHello() {
  return <h1 className="text-center font-bold text-2xl text-blue-500"> Welcome to Dashboard Page </h1>;
} 

export default function dashboard() {
  return <>
     <h1> this page is for dashboard 
      {sayingHello()}
     </h1>  i am going to do it because this will cause an effect very good
  </>
}   