"use client";
import React from "react";
import Label from "./Label";
import { ResponsiveBump } from "@nivo/bump";
import Pie from "./Pie";
import { pieData } from "@/constants/data";

const MyResponsiveBump = ({ data }: any) => (
  <>
    <Label>3.</Label>
    <div className="flex flex-row">
      <Pie data={pieData} />
      <div className="h-[400px] w-[70%]">
        <ResponsiveBump
          data={data}
          colors={{ scheme: "spectral" }}
          lineWidth={3}
          activeLineWidth={6}
          inactiveLineWidth={3}
          inactiveOpacity={0.15}
          pointSize={10}
          activePointSize={16}
          inactivePointSize={0}
          pointColor={{ theme: "background" }}
          pointBorderWidth={3}
          activePointBorderWidth={3}
          pointBorderColor={{ from: "serie.color" }}
          axisTop={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "",
            legendPosition: "middle",
            legendOffset: -36,
          }}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "",
            legendPosition: "middle",
            legendOffset: 32,
          }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "ranking",
            legendPosition: "middle",
            legendOffset: -40,
          }}
          margin={{ top: 40, right: 100, bottom: 40, left: 60 }}
          axisRight={null}
        />
      </div>
    </div>
  </>
);
export default MyResponsiveBump;
