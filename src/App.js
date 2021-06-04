import "./App.css";
import Chart from "./Chart";
import Circle from "./Circle";

function App() {
  const chardata = [
    {
      id: "유동자산",
      data: [
        { x: 75, y: 19711791 },
        { x: 76, y: 21555416 },
        { x: 77, y: 26093382 },
      ],
    },
    {
      id: "비유동자산",
      data: [
        { x: 75, y: 32074814 },
        { x: 76, y: 33789382 },
        { x: 77, y: 34397061 },
      ],
    },
    {
      id: "유동부채",
      data: [
        { x: 75, y: 14834739 },
        { x: 76, y: 17276646 },
        { x: 77, y: 21097589 },
      ],
    },
    {
      id: "비유동부채",
      data: [
        { x: 75, y: 9708402 },
        { x: 76, y: 9090014 },
        { x: 77, y: 9501182 },
      ],
    },
    {
      id: "자본총계",
      data: [
        { x: 75, y: 27243464 },
        { x: 76, y: 28978138 },
        { x: 77, y: 29891672 },
      ],
    },
    {
      id: "매출액",
      data: [
        { x: 75, y: 54169813 },
        { x: 76, y: 58145959 },
        { x: 77, y: 59168096 },
      ],
    },
    {
      id: "영업이익",
      data: [
        { x: 75, y: 1157475 },
        { x: 76, y: 2009680 },
        { x: 77, y: 2066457 },
      ],
    },
    {
      id: "당기순이익",
      data: [
        { x: 75, y: 1155943 },
        { x: 76, y: 1826659 },
        { x: 77, y: 1487585 },
      ],
    },
  ];

  const circledata = {
    name: "circle",
    color: "hsl(232, 70%, 50%)",
    children: [
      {
        name: "자산총계",
        color: "hsl(166, 70%, 50%)",
        children: [
          {
            name: "유동자산",
            color: "hsl(316, 70%, 50%)",
            children: [
              {
                name: "현금및현금성자산",
                color: "hsl(112, 70%, 50%)",
                loc: 10160697,
              },
              {
                name: "단기금융상품",
                color: "hsl(257, 70%, 50%)",
                loc: 2912700,
              },
              {
                name: "매출채권",
                color: "hsl(234, 70%, 50%)",
                loc: 1819008,
              },
              {
                name: "재고자산",
                color: "hsl(153, 70%, 50%)",
                loc: 7093959,
              },
              {
                name: "기타",
                color: "hsl(214, 70%, 50%)",
                loc: 4107018,
              },
            ],
          },
          {
            name: "비유동자산",
            color: "hsl(166, 70%, 50%)",
            children: [
              {
                name: "유형자산",
                color: "hsl(316, 70%, 50%)",
                loc: 15579715,
              },
              {
                name: "무형자산",
                color: "hsl(316, 70%, 50%)",
                loc: 2665571,
              },
              {
                name: "공동기업 및 관계기업투자",
                color: "hsl(316, 70%, 50%)",
                loc: 14613560,
              },
              {
                name: "기타",
                color: "hsl(316, 70%, 50%)",
                loc: 1538215,
              },
            ],
          },
        ],
      },
      {
        name: "부채총계",
        color: "hsl(354, 70%, 50%)",
        children: [
          {
            name: "유동부채",
            color: "hsl(316, 70%, 50%)",
            loc: 21097589,
          },
          {
            name: "비유동부채",
            color: "hsl(316, 70%, 50%)",
            loc: 9501182,
          },
        ],
      },
      {
        name: "자본총계",
        color: "hsl(57, 70%, 50%)",
        children: [
          {
            name: "보통주자본금",
            color: "hsl(183, 70%, 50%)",
            loc: 2139317,
          },
          {
            name: "주식발행초과금",
            color: "hsl(319, 70%, 50%)",
            loc: 1560650,
          },
          {
            name: "이익잉여금",
            color: "hsl(285, 70%, 50%)",
            loc: 27173417,
          },
          {
            name: "기타포괄손익누계액",
            color: "hsl(61, 70%, 50%)",
            loc: 920638,
          },
          {
            name: "기타자본항목",
            color: "hsl(113, 70%, 50%)",
            loc: 61074,
          },
        ],
      },
    ],
  };

  return (
    <div className="App">
      <h1>기아 사업보고서(2021. 03.12)</h1>
      <img src="original.png" width="50%" />
      <Chart data={chardata} />
      <Circle data={circledata} />
    </div>
  );
}

export default App;
