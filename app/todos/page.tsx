import HierarchicalBarChart from "@/components/HierarchicalBarChart";
import React from "react";

type Props = {};
const data = [
  {
    "id": "JavaScript",
    "data": [
      {
        "x": 2000,
        "y": 13
      },
      {
        "x": 2001,
        "y": 28
      },
      {
        "x": 2002,
        "y": 23
      },
      {
        "x": 2003,
        "y": 26
      },
      {
        "x": 2004,
        "y": 14
      },
      {
        "x": 2005,
        "y": 11
      }
    ]
  },
  {
    "id": "ReasonML",
    "data": [
      {
        "x": 2000,
        "y": 16
      },
      {
        "x": 2001,
        "y": 29
      },
      {
        "x": 2002,
        "y": 24
      },
      {
        "x": 2003,
        "y": 19
      },
      {
        "x": 2004,
        "y": 29
      },
      {
        "x": 2005,
        "y": 23
      }
    ]
  },
  {
    "id": "TypeScript",
    "data": [
      {
        "x": 2000,
        "y": 28
      },
      {
        "x": 2001,
        "y": 10
      },
      {
        "x": 2002,
        "y": 23
      },
      {
        "x": 2003,
        "y": 23
      },
      {
        "x": 2004,
        "y": 13
      },
      {
        "x": 2005,
        "y": 11
      }
    ]
  },
  {
    "id": "Elm",
    "data": [
      {
        "x": 2000,
        "y": 18
      },
      {
        "x": 2001,
        "y": 13
      },
      {
        "x": 2002,
        "y": 27
      },
      {
        "x": 2003,
        "y": 10
      },
      {
        "x": 2004,
        "y": 16
      },
      {
        "x": 2005,
        "y": 13
      }
    ]
  },
  {
    "id": "CoffeeScript",
    "data": [
      {
        "x": 2000,
        "y": 11
      },
      {
        "x": 2001,
        "y": 23
      },
      {
        "x": 2002,
        "y": 26
      },
      {
        "x": 2003,
        "y": 11
      },
      {
        "x": 2004,
        "y": 29
      },
      {
        "x": 2005,
        "y": 22
      }
    ]
  }
]

function Todos({}: Props) {
  return (
    <>
    <HierarchicalBarChart data={data} />
    </>
  );
}

export default Todos;
