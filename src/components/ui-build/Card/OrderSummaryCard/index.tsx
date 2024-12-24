import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { OrderSummaryCardProps } from "@/types/card";

const OrderSummaryCard: React.FC<OrderSummaryCardProps> = () => {
  return (
    <Card className="h-fit max-w-[31.5rem]">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
};
export default OrderSummaryCard;
