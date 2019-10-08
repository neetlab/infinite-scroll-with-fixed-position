import React, { useLayoutEffect } from "react";
import { RandomColorRect } from "./random-color-rect";
import { useNumber } from "../hooks/use-number";
import { range } from "../prelude/range";

export const Root = () => {
  const [since, changeSince] = useNumber(0);
  const [until, changeUntil] = useNumber(3);

  useLayoutEffect(() => {
    // 固定の基準にする要素
    const target = document.getElementById(`item-${0}`);
    if (!target) return;

    target.scrollIntoView({ inline: "start" });
  }, [since, until]);

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
            id={`item-${i}`}
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
