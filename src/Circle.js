import React from "react";
import { ResponsiveSunburst } from "@nivo/sunburst";

const Circle = ({ data }) => {
  return (
    <div style={{ height: 700, marginTop: 100 }}>
      <h2>항목별 상세 구성</h2>
      <ResponsiveSunburst
        data={data}
        margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
        id="name"
        value="loc"
        cornerRadius={2}
        borderColor={{ theme: "background" }}
        colors={{ scheme: "nivo" }}
        childColor={{ from: "color", modifiers: [["brighter", 0.3]] }}
        enableArcLabels={true}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{ from: "color", modifiers: [["darker", 1.4]] }}
      />
    </div>
  );
};

export default Circle;
