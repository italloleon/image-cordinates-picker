import { useState } from "react";
import Picker from "../Picker";
import bg from "/bg.png";
import CoordinateCard from "../CoordnateCard";
import { Button } from "../ui/button";

type Coordinate = {
  x: number;
  y: number;
};

export default function ImagePicker() {
  const [currentCoordinates, setCurrentCoordinates] = useState<number | null>(
    null
  );

  const [coordinateItems, setCoordinateItems] = useState<Coordinate[]>([]);

  const handleDelete = (index: number) => {
    const newCoordinateItems = coordinateItems.filter((_, i) => i !== index);
    setCoordinateItems(newCoordinateItems);
  };

  return (
    <div className="grid grid-cols-2 gap-5">
      <Picker
        width="600px"
        height="600px"
        background={bg}
        coordinates={
          currentCoordinates !== null
            ? coordinateItems[currentCoordinates]
            : null
        }
        onPick={(cordinates) => {
          if (currentCoordinates !== null) {
            const newCoordinates = [...coordinateItems];
            newCoordinates[currentCoordinates] = cordinates;
            setCoordinateItems(newCoordinates);
          }
        }}
      />
      <div className="flex flex-col gap-5">
        <div className="grid grid-cols-2 place-content-start gap-5">
          {coordinateItems.map((item, index) => (
            <CoordinateCard
              key={`coordinate-${index}`}
              index={index}
              coordinate={item}
              isActive={currentCoordinates === index}
              onEdit={() => setCurrentCoordinates(index)}
              onDelete={() => handleDelete(index)}
            />
          ))}
        </div>
        <Button
          onClick={() => {
            // max 4
            if (coordinateItems.length >= 4) return;
            setCoordinateItems((prev) => [...prev, { x: 0, y: 0 }]);
            setCurrentCoordinates(coordinateItems.length);
          }}
          disabled={coordinateItems.length >= 4}
        >
          Add Coordinate
        </Button>
      </div>
    </div>
  );
}
