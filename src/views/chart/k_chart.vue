<template>
  <div class="">
    <div class="" style="width:100%;height:600px" id="k_c"></div>
  </div>
</template>
<script>
export default {
  name: "k_chart",
  data() {
    return {};
  },
  mounted() {
    var echarts = require("echarts");
    var myChart = echarts.init(document.getElementById("k_c"));

    var upColor = "#ec0000";
    var upBorderColor = "#8A0000";
    var downColor = "#00da3c";
    var downBorderColor = "#008F28";

    // 数据意义：开盘(open)，收盘(close)，最低(lowest)，最高(highest)
    var data0 = splitData([
      ["2013/1/24", 2320.26, 2320.26, 2287.3, 2362.94],
      ["2013/3/7", 2340.44, 2324.29, 2304.27, 2352.02],
      ["2013/3/8", 2326.42, 2318.61, 2314.59, 2333.67],
      ["2013/3/11", 2314.68, 2310.59, 2296.58, 2320.96],
      ["2013/3/20", 2257.74, 2317.37, 2257.42, 2317.86],
      ["2013/3/25", 2334.74, 2326.72, 2319.91, 2344.89],
      ["2013/5/2", 2170.78, 2174.12, 2161.14, 2179.65],
      ["2013/5/3", 2179.05, 2205.5, 2179.05, 2222.81],
      ["2013/5/6", 2212.5, 2231.17, 2212.5, 2236.07],
      ["2013/5/7", 2227.86, 2235.57, 2219.44, 2240.26],
      ["2013/5/8", 2242.39, 2246.3, 2235.42, 2255.21],
      ["2013/5/9", 2246.96, 2232.97, 2221.38, 2247.86],
      ["2013/5/27", 2286.66, 2293.08, 2283.94, 2301.7],
      ["2013/5/28", 2293.4, 2321.32, 2281.47, 2322.1],
      ["2013/5/29", 2323.54, 2324.02, 2321.17, 2334.33],
      ["2013/5/30", 2316.25, 2317.75, 2310.49, 2325.72],
      ["2013/5/31", 2320.74, 2300.59, 2299.37, 2325.53],
      ["2013/6/3", 2300.21, 2299.25, 2294.11, 2313.43],
      ["2013/6/4", 2297.1, 2272.42, 2264.76, 2297.1],
      ["2013/6/5", 2270.71, 2270.93, 2260.87, 2276.86],
      ["2013/6/6", 2264.43, 2242.11, 2240.07, 2266.69],
      ["2013/6/7", 2242.26, 2210.9, 2205.07, 2250.63],
      ["2013/6/13", 2190.1, 2148.35, 2126.22, 2190.1]
    ]);

    function splitData(rawData) {
      var categoryData = [];
      var values = [];
      for (var i = 0; i < rawData.length; i++) {
        categoryData.push(rawData[i].splice(0, 1)[0]);
        values.push(rawData[i]);
      }
      return {
        categoryData: categoryData,
        values: values
      };
    }

    function calculateMA(dayCount) {
      var result = [];
      for (var i = 0, len = data0.values.length; i < len; i++) {
        if (i < dayCount) {
          result.push("-");
          continue;
        }
        var sum = 0;
        for (var j = 0; j < dayCount; j++) {
          sum += data0.values[i - j][1];
        }
        result.push(sum / dayCount);
      }
      return result;
    }

    myChart.setOption({
      tooltip: {},
      title: {
        text: "上证指数",
        left: 0
      },
      legend: {
        data: ["日K", "MA5", "MA10", "MA20", "MA30"]
      },
      grid: {
        left: "10%",
        right: "10%",
        bottom: "15%"
      },
      xAxis: {
        type: "category",
        data: data0.categoryData,
        scale: true,
        boundaryGap: false,
        axisLine: { onZero: false },
        splitLine: { show: false },
        splitNumber: 20,
        min: "dataMin",
        max: "dataMax"
      },
      yAxis: {
        scale: true,
        splitArea: {
          show: true
        }
      },
      dataZoom: [
        {
          type: "inside",
          start: 50,
          end: 100
        },
        {
          show: true,
          type: "slider",
          y: "90%",
          start: 50,
          end: 100
        }
      ],

      series: [
        {
          name: "日K",
          type: "candlestick",
          data: data0.values,
          itemStyle: {
            normal: {
              color: upColor,
              color0: downColor,
              borderColor: upBorderColor,
              borderColor0: downBorderColor
            }
          },
          markPoint: {
            label: {
              normal: {
                formatter: function(param) {
                  return param != null ? Math.round(param.value) : "";
                }
              }
            },
            data: [
              {
                name: "XX标点",
                coord: ["2013/5/31", 2300],
                value: 2300,
                itemStyle: {
                  normal: { color: "rgb(41,60,85)" }
                }
              },
              {
                name: "highest value",
                type: "max",
                valueDim: "highest"
              },
              {
                name: "lowest value",
                type: "min",
                valueDim: "lowest"
              },
              {
                name: "average value on close",
                type: "average",
                valueDim: "close"
              }
            ],
            tooltip: {
              formatter: function(param) {
                return param.name + "<br>" + (param.data.coord || "");
              }
            }
          },
          markLine: {
            symbol: ["none", "none"],
            data: [
              [
                {
                  name: "from lowest to highest",
                  type: "min",
                  valueDim: "lowest",
                  symbol: "circle",
                  symbolSize: 10,
                  label: {
                    normal: { show: false },
                    emphasis: { show: false }
                  }
                },
                {
                  type: "max",
                  valueDim: "highest",
                  symbol: "circle",
                  symbolSize: 10,
                  label: {
                    normal: { show: false },
                    emphasis: { show: false }
                  }
                }
              ],
              {
                name: "min line on close",
                type: "min",
                valueDim: "close"
              },
              {
                name: "max line on close",
                type: "max",
                valueDim: "close"
              }
            ]
          }
        },
        {
          name: "MA5",
          type: "line",
          data: calculateMA(5),
          smooth: true,
          lineStyle: {
            normal: { opacity: 0.5 }
          }
        },
        {
          name: "MA10",
          type: "line",
          data: calculateMA(10),
          smooth: true,
          lineStyle: {
            normal: { opacity: 0.5 }
          }
        },
        {
          name: "MA20",
          type: "line",
          data: calculateMA(20),
          smooth: true,
          lineStyle: {
            normal: { opacity: 0.5 }
          }
        },
        {
          name: "MA30",
          type: "line",
          data: calculateMA(30),
          smooth: true,
          lineStyle: {
            normal: { opacity: 0.5 }
          }
        }
      ]
    });
  }
};
</script>
