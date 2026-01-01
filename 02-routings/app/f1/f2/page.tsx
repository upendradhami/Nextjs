import { Card } from "@/components/card";
import Link from "next/link";  

export default function F2Page() {
  return (
    <Card>
      <h1>f2page</h1>
       <Link href="/f1/f3">F3</Link>
    </Card>
  );
}