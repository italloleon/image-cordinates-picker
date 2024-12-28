import React, { useState } from "react";
import styles from "./picker.module.css";

type PickerProps = {
  width: string | number;
  height: string | number;
  background: string | undefined;
  coordinates?: { x: number; y: number } | null;
  onPick: (coordinates: { x: number; y: number }) => void;
};

const Picker: React.FC<PickerProps> = ({
  width,
  height,
  background,
  coordinates,
  onPick,
}) => {
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = (event.target as HTMLDivElement).getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const newCoordinates = { x: Math.round(x), y: Math.round(y) };
    onPick(newCoordinates);
  };

  return (
    <div
      style={{
        width: typeof width === "number" ? `${width}px` : width,
        height: typeof height === "number" ? `${height}px` : height,
        backgroundImage: `url(${background})`,
      }}
      className={styles.picker}
      onClick={handleClick}
      role="button"
      tabIndex={0}
    >
      {coordinates && (
        <div
          style={{
            position: "absolute",
            top: coordinates.y - 5,
            left: coordinates.x - 5,
          }}
          className={styles.cursor}
        ></div>
      )}
    </div>
  );
};

export default Picker;
