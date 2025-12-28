import {
  notFound,
  // , redirect
} from "next/navigation";

const getRandomInt = (count: number): number => {
  return Math.floor(Math.random() * count);
};
export default async function ReviewPage({
  params,
}: {
  params: Promise<{ reviewid: string; productid: string }>;
}) {
  const { reviewid, productid } = await params;
  if (parseInt(reviewid) >= 1000) {
    notFound(); // it is used to show not found page
    // redirect('/products');  // it is used to redirect to some other page
  }

  const random = getRandomInt(3);
  if (random === 1) {
    throw Error("Error loading Page review");
  }
  return (
    <>
      <h1 className="text-center text-3xl text-stone-300">
        This is review page for review id: {reviewid} and product id:{" "}
        {productid}
      </h1>
    </>
  );
}
