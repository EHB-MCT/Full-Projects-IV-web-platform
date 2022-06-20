import React from "react";
import VHS from "../components/VHS";

export default function Timetable() {
  return (
    <>
      <div className="timetable-container">
        <h1 className="title">FINAL SHOW TIMETABLE</h1>
        <VHS color="pink" variation={1} title="intro" startTime="19:00" />
        <VHS color="white" variation={1} />
        <VHS color="red" variation={4} title="WEB & APP" startTime="19:01" />
        <VHS color="red" variation={1} title="uitreiking" rotate />
        <VHS color="white" variation={1} rotate />
        <VHS
          color="blue"
          variation={2}
          title="SMART TECHNOLOGY"
          startTime="19:06"
        />
        <VHS color="blue" variation={3} title="uitreiking" rotate />
        <VHS color="white" variation={1} />
        <VHS
          color="pink"
          variation={1}
          title="spel 1: spill your guts"
          startTime="19:11"
        />
        <VHS color="white" variation={1} rotate />
        <VHS color="orange" variation={1} title="MOTION" startTime="19:17" />
        <VHS color="orange" variation={2} title="uitreiking" rotate />
        <VHS color="white" variation={1} rotate />
        <VHS
          color="yellow"
          variation={3}
          title="EXTENDED REALITY"
          startTime="19:22"
        />
        <VHS color="yellow" variation={4} title="uitreiking" rotate />
        <VHS color="white" variation={1} />
        <VHS
          color="pink"
          variation={1}
          title="spel 2: spill your guts"
          startTime="19:27"
        />
        <VHS color="white" variation={1} rotate />
        <VHS
          color="pink"
          variation={1}
          title="HOOFDPRIJS"
          startTime="19:32"
          rotate
        />
        <VHS
          color="pink"
          variation={1}
          title="YOUNG POTENTIAL"
          startTime="19:35"
        />
        <VHS color="white" variation={1} rotate />
        <VHS
          color="pink"
          variation={1}
          title="outro"
          startTime="19:38"
          rotate
        />
      </div>
    </>
  );
}
