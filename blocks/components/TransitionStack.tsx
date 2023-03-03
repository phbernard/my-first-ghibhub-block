import React, { ReactNode } from "react";

export type TransitionStackProps = {
  elements: ReactNode[];
  currentElement: number;
}

const TransitionStack = (props: TransitionStackProps) => (
  <div style={{ display: 'grid' }}>
    {props.elements.map((element, i) => (
      <div
        key={i}
        style={{
          gridRowStart: 1,
          gridColumnStart: 1,
          transitionProperty: 'opacity',
          transitionDuration: '250ms',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: i === props.currentElement ? 10 : 0,
          opacity: i === props.currentElement ? 1 : 0
        }}
      >
        {element}
      </div>
    ))}
  </div>
)

export default TransitionStack
