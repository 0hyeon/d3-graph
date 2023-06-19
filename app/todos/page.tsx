import Bar from "@/components/Bar";
import HierarchicalBarChart from "@/components/HierarchicalBarChart";
import LineChart from "@/components/LineChart";
import React from "react";

type Props = {};
const data = [
  {
    id: "JavaScript",
    data: [
      {
        x: 2000,
        y: 13,
      },
      {
        x: 2001,
        y: 28,
      },
      {
        x: 2002,
        y: 23,
      },
      {
        x: 2003,
        y: 26,
      },
      {
        x: 2004,
        y: 14,
      },
      {
        x: 2005,
        y: 11,
      },
    ],
  },
  {
    id: "ReasonML",
    data: [
      {
        x: 2000,
        y: 16,
      },
      {
        x: 2001,
        y: 29,
      },
      {
        x: 2002,
        y: 24,
      },
      {
        x: 2003,
        y: 19,
      },
      {
        x: 2004,
        y: 29,
      },
      {
        x: 2005,
        y: 23,
      },
    ],
  },
  {
    id: "TypeScript",
    data: [
      {
        x: 2000,
        y: 28,
      },
      {
        x: 2001,
        y: 10,
      },
      {
        x: 2002,
        y: 23,
      },
      {
        x: 2003,
        y: 23,
      },
      {
        x: 2004,
        y: 13,
      },
      {
        x: 2005,
        y: 11,
      },
    ],
  },
  {
    id: "Elm",
    data: [
      {
        x: 2000,
        y: 18,
      },
      {
        x: 2001,
        y: 13,
      },
      {
        x: 2002,
        y: 27,
      },
      {
        x: 2003,
        y: 10,
      },
      {
        x: 2004,
        y: 16,
      },
      {
        x: 2005,
        y: 13,
      },
    ],
  },
  {
    id: "CoffeeScript",
    data: [
      {
        x: 2000,
        y: 11,
      },
      {
        x: 2001,
        y: 23,
      },
      {
        x: 2002,
        y: 26,
      },
      {
        x: 2003,
        y: 11,
      },
      {
        x: 2004,
        y: 29,
      },
      {
        x: 2005,
        y: 22,
      },
    ],
  },
];
const lineChartData = [
  {
    id: "japan",
    color: "hsl(124, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 24,
      },
      {
        x: "helicopter",
        y: 208,
      },
      {
        x: "boat",
        y: 262,
      },
      {
        x: "train",
        y: 56,
      },
      {
        x: "subway",
        y: 5,
      },
      {
        x: "bus",
        y: 164,
      },
      {
        x: "car",
        y: 42,
      },
      {
        x: "moto",
        y: 294,
      },
      {
        x: "bicycle",
        y: 260,
      },
      {
        x: "horse",
        y: 254,
      },
      {
        x: "skateboard",
        y: 121,
      },
      {
        x: "others",
        y: 284,
      },
    ],
  },
  {
    id: "france",
    color: "hsl(108, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 276,
      },
      {
        x: "helicopter",
        y: 252,
      },
      {
        x: "boat",
        y: 203,
      },
      {
        x: "train",
        y: 211,
      },
      {
        x: "subway",
        y: 159,
      },
      {
        x: "bus",
        y: 28,
      },
      {
        x: "car",
        y: 235,
      },
      {
        x: "moto",
        y: 254,
      },
      {
        x: "bicycle",
        y: 62,
      },
      {
        x: "horse",
        y: 175,
      },
      {
        x: "skateboard",
        y: 284,
      },
      {
        x: "others",
        y: 159,
      },
    ],
  },
  {
    id: "us",
    color: "hsl(260, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 201,
      },
      {
        x: "helicopter",
        y: 86,
      },
      {
        x: "boat",
        y: 244,
      },
      {
        x: "train",
        y: 227,
      },
      {
        x: "subway",
        y: 231,
      },
      {
        x: "bus",
        y: 55,
      },
      {
        x: "car",
        y: 35,
      },
      {
        x: "moto",
        y: 43,
      },
      {
        x: "bicycle",
        y: 97,
      },
      {
        x: "horse",
        y: 175,
      },
      {
        x: "skateboard",
        y: 53,
      },
      {
        x: "others",
        y: 298,
      },
    ],
  },
  {
    id: "germany",
    color: "hsl(301, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 275,
      },
      {
        x: "helicopter",
        y: 36,
      },
      {
        x: "boat",
        y: 299,
      },
      {
        x: "train",
        y: 158,
      },
      {
        x: "subway",
        y: 279,
      },
      {
        x: "bus",
        y: 161,
      },
      {
        x: "car",
        y: 78,
      },
      {
        x: "moto",
        y: 155,
      },
      {
        x: "bicycle",
        y: 229,
      },
      {
        x: "horse",
        y: 31,
      },
      {
        x: "skateboard",
        y: 282,
      },
      {
        x: "others",
        y: 142,
      },
    ],
  },
  {
    id: "norway",
    color: "hsl(11, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 163,
      },
      {
        x: "helicopter",
        y: 25,
      },
      {
        x: "boat",
        y: 19,
      },
      {
        x: "train",
        y: 97,
      },
      {
        x: "subway",
        y: 296,
      },
      {
        x: "bus",
        y: 186,
      },
      {
        x: "car",
        y: 267,
      },
      {
        x: "moto",
        y: 296,
      },
      {
        x: "bicycle",
        y: 242,
      },
      {
        x: "horse",
        y: 67,
      },
      {
        x: "skateboard",
        y: 75,
      },
      {
        x: "others",
        y: 70,
      },
    ],
  },
];
const dataBar = [
  {
    country: "AD",
    "hot dog": 121,
    "hot dogColor": "hsl(294, 70%, 50%)",
    burger: 116,
    burgerColor: "hsl(268, 70%, 50%)",
    sandwich: 57,
    sandwichColor: "hsl(127, 70%, 50%)",
    kebab: 124,
    kebabColor: "hsl(145, 70%, 50%)",
    fries: 89,
    friesColor: "hsl(343, 70%, 50%)",
    donut: 141,
    donutColor: "hsl(156, 70%, 50%)",
  },
  {
    country: "AE",
    "hot dog": 81,
    "hot dogColor": "hsl(309, 70%, 50%)",
    burger: 34,
    burgerColor: "hsl(19, 70%, 50%)",
    sandwich: 126,
    sandwichColor: "hsl(97, 70%, 50%)",
    kebab: 107,
    kebabColor: "hsl(144, 70%, 50%)",
    fries: 195,
    friesColor: "hsl(98, 70%, 50%)",
    donut: 19,
    donutColor: "hsl(194, 70%, 50%)",
  },
  {
    country: "AF",
    "hot dog": 182,
    "hot dogColor": "hsl(273, 70%, 50%)",
    burger: 44,
    burgerColor: "hsl(40, 70%, 50%)",
    sandwich: 76,
    sandwichColor: "hsl(186, 70%, 50%)",
    kebab: 177,
    kebabColor: "hsl(187, 70%, 50%)",
    fries: 70,
    friesColor: "hsl(77, 70%, 50%)",
    donut: 52,
    donutColor: "hsl(16, 70%, 50%)",
  },
  {
    country: "AG",
    "hot dog": 5,
    "hot dogColor": "hsl(104, 70%, 50%)",
    burger: 135,
    burgerColor: "hsl(313, 70%, 50%)",
    sandwich: 60,
    sandwichColor: "hsl(173, 70%, 50%)",
    kebab: 74,
    kebabColor: "hsl(226, 70%, 50%)",
    fries: 136,
    friesColor: "hsl(145, 70%, 50%)",
    donut: 104,
    donutColor: "hsl(205, 70%, 50%)",
  },
  {
    country: "AI",
    "hot dog": 75,
    "hot dogColor": "hsl(119, 70%, 50%)",
    burger: 199,
    burgerColor: "hsl(327, 70%, 50%)",
    sandwich: 34,
    sandwichColor: "hsl(128, 70%, 50%)",
    kebab: 49,
    kebabColor: "hsl(281, 70%, 50%)",
    fries: 194,
    friesColor: "hsl(193, 70%, 50%)",
    donut: 98,
    donutColor: "hsl(44, 70%, 50%)",
  },
  {
    country: "AL",
    "hot dog": 16,
    "hot dogColor": "hsl(253, 70%, 50%)",
    burger: 32,
    burgerColor: "hsl(224, 70%, 50%)",
    sandwich: 153,
    sandwichColor: "hsl(267, 70%, 50%)",
    kebab: 1,
    kebabColor: "hsl(134, 70%, 50%)",
    fries: 111,
    friesColor: "hsl(332, 70%, 50%)",
    donut: 86,
    donutColor: "hsl(129, 70%, 50%)",
  },
  {
    country: "AM",
    "hot dog": 104,
    "hot dogColor": "hsl(298, 70%, 50%)",
    burger: 31,
    burgerColor: "hsl(135, 70%, 50%)",
    sandwich: 61,
    sandwichColor: "hsl(313, 70%, 50%)",
    kebab: 71,
    kebabColor: "hsl(337, 70%, 50%)",
    fries: 198,
    friesColor: "hsl(17, 70%, 50%)",
    donut: 159,
    donutColor: "hsl(51, 70%, 50%)",
  },
];
function Todos({}: Props) {
  return (
    <>
      <HierarchicalBarChart data={data} />
      <LineChart data={lineChartData} />
      <Bar data={dataBar} />
    </>
  );
}

export default Todos;
