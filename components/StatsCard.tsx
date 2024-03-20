import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { Waypoints } from "lucide-react";

type Props = {
  title: string;
  count: number;
};
const StatsCard = ({ title, count }: Props) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <CardTitle className="text-2xl capitalize font-medium">
          {title}
        </CardTitle>
        <Waypoints />
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold">{count}</div>
      </CardContent>
    </Card>
  );
};
export default StatsCard;
