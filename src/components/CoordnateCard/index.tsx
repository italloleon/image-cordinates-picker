import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

type Coordinate = {
  x: number;
  y: number;
};

type CoordinateCardProps = {
  index: number;
  coordinate: Coordinate;
  isActive: boolean;
  onEdit: () => void;
  onDelete: () => void;
};

export default function CoordinateCard({
  index,
  coordinate,
  isActive,
  onEdit,
  onDelete,
}: CoordinateCardProps) {
  return (
    <Card
      className={`text-left transition-all ${
        isActive ? "shadow-md shadow-slate-700" : ""
      }`}
    >
      <CardHeader>
        <CardTitle>{`Coordinate ${index}`}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="flex gap-5">
          <p>{`x: ${coordinate.x}`}</p>
          <p>{`y: ${coordinate.y}`}</p>
        </CardDescription>
        <Separator className="my-5" />
        <CardDescription></CardDescription>
      </CardContent>
      <CardFooter className="flex justify-end gap-5">
        <Button onClick={onEdit}>Edit</Button>
        <Button onClick={onDelete} variant={"destructive"}>
          Delete
        </Button>
      </CardFooter>
    </Card>
  );
}
