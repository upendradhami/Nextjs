

import { Card } from "@/components/card";
import Link from "next/link";

export default function ArchievedPage() {
  return (
    <Card>
       <div>this is archieved Page
        <Link href='/complex-dashboard'>default</Link>
       </div>
    </Card>
  );
}