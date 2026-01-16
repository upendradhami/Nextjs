import { Metadata } from "next";

export const metadata: Metadata = {
  title: "First Blog Page",
  description: "This is first blog page description",
}

export default function firstBlog() {
  return (
    <div>
      <h1 className="text-center font-bold text-2xl text-green-500">Welcome to first blog</h1>
    </div>
  );
}