import React from "react";
import { RandomColorRect } from "./random-color-rect";
import { useNumber } from "../hooks/use-number";
import { range } from "../prelude/range";

export const Root = () => {
  const [since, changeSince] = useNumber();
  const [until, changeUntil] = useNumber();

  return (
    <div>
      <input type="number" value={since} onChange={changeSince} />
      <input type="number" value={until} onChange={changeUntil} />

      <ul
        style={{
          display: "flex",
          flexWrap: "nowrap",
          overflowX: "scroll"
        }}
      >
        {range(since, until).map(i => (
          <li
            key={i}
            style={{
              flex: "0 0 auto",
              listStyleType: "none"
            }}
          >
            <RandomColorRect>{i}</RandomColorRect>
          </li>
        ))}
      </ul>
    </div>
  );
};
