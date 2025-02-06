"use client";
import React from "react";
import ReactDOM from "react-dom";
import Draggable from "react-draggable";

export default function Home() {
  return (
    <Draggable
    // axis="both"
    // handle=".handle"
    // defaultPosition={{ x: 300, y: 300 }}
    // position={null}
    // grid={[100, 100]}
    // scale={1}
    // bounds={{ top: -100, left: -100, right: 100, bottom: 100 }}
    // onStart={this.handleStart}
    // onDrag={this.handleDrag}
    // onStop={this.handleStop}
    >
      <div>
        <div className="handle">Drag from here</div>
        <div>This readme is really dragging on...</div>
      </div>
    </Draggable>
  );
}

// export default App;
