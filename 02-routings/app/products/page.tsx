import { nanoid } from 'nanoid'; // Correct import



export default function ProductPage() {
  const products = ['Product 1', 'Product 2', 'Product 3'];
  
  return (
    <>
      <h1 className="text-3xl font-bold text-center text-green-400">
        Welcome to Products Page
      </h1>
      <h2 className="text-center mt-4">
        Here you can find all our products. Some are:
      </h2>
      <ul className="list-disc list-inside mt-2 text-center">
        {products.map((product) => (
          <li key={nanoid()}>{product}</li> // Key on each list item
        ))}
      </ul>
    </>
  );
}