import React from "react";

type Props = {
  children?: React.ReactNode;
};

const getRandom2digitNum = () => Math.floor(Math.random() * 255);

export const RandomColorRect = React.memo((props: Props) => {
  const r = getRandom2digitNum();
  const g = getRandom2digitNum();
  const b = getRandom2digitNum();

  return (
    <div
      style={{
        backgroundColor: `rgb(${r}, ${g}, ${b})`,
        width: "200px",
        height: "200px"
      }}
    >
      {props.children}
    </div>
  );
}, () => true);
