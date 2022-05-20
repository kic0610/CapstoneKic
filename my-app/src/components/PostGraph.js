import React from "react";
import { ResponsivePie } from "@nivo/pie";
import styled from "styled-components";

const PostGraph = () => {
  const DivGraph = styled.div`
    width: 500px;
    height: 500px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  `;

  let data = [
    {
      id: "go",
      label: "go",
      value: 262,
      color: "hsl(120, 70%, 50%)",
    },
    {
      id: "python",
      label: "python",
      value: 522,
      color: "hsl(208, 70%, 50%)",
    },
    {
      id: "css",
      label: "css",
      value: 106,
      color: "hsl(227, 70%, 50%)",
    },
    {
      id: "php",
      label: "php",
      value: 575,
      color: "hsl(124, 70%, 50%)",
    },
    {
      id: "erlang",
      label: "erlang",
      value: 337,
      color: "hsl(35, 70%, 50%)",
    },
  ];

  return (
    <DivGraph>
      <ResponsivePie
        data={data}
        theme={{ legends: { text: { fontSize: 17 } } }}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{
          from: "color",
          modifiers: [["darker", 0.2]],
        }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={5}
        arcLinkLabelsColor={{ from: "color" }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
          from: "color",
          modifiers: [["darker", 2]],
        }}
        defs={[
          {
            id: "dots",
            type: "patternDots",
            background: "inherit",
            color: "rgba(255, 255, 255, 0.3)",
            size: 4,
            padding: 1,
            stagger: true,
          },
          {
            id: "lines",
            type: "patternLines",
            background: "inherit",
            color: "rgba(255, 255, 255, 0.3)",
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
        ]}
        fill={[
          {
            match: {
              id: "ruby",
            },
            id: "dots",
          },
          {
            match: {
              id: "c",
            },
            id: "dots",
          },
          {
            match: {
              id: "go",
            },
            id: "dots",
          },
          {
            match: {
              id: "python",
            },
            id: "dots",
          },
          {
            match: {
              id: "scala",
            },
            id: "lines",
          },
          {
            match: {
              id: "lisp",
            },
            id: "lines",
          },
          {
            match: {
              id: "elixir",
            },
            id: "lines",
          },
          {
            match: {
              id: "javascript",
            },
            id: "lines",
          },
        ]}
        legends={[
          {
            anchor: "bottom",
            direction: "row",
            justify: false,
            translateX: 0,
            translateY: 56,
            itemsSpacing: 0,
            itemWidth: 100,
            itemHeight: 18,
            itemTextColor: "#999",
            itemDirection: "left-to-right",
            itemOpacity: 1,
            symbolSize: 18,
            symbolShape: "circle",
            effects: [
              {
                on: "hover",
                style: {
                  itemTextColor: "#000",
                },
              },
            ],
          },
        ]}
      />
    </DivGraph>
  );
};

export default PostGraph;
