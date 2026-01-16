import { Card } from "@/components/card";
import Link from "next/link";
export default function Notificationpage() {
  return (
    <Card>
      <div>
        Notification Page
        <Link href= "/complex-dashboard/archieved">archieved </Link>
      </div>
      

    </Card>
  );
}