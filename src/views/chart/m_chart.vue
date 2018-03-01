<template>
  <div class="">
    <div class="" style="width:100%;height:600px" id='m_c'></div>
  </div>
</template>
<script>
  export default{
    name:'m_c',
    data(){
      return{

      }
    },
    mounted(){
      var echarts = require('echarts');

      var myChart = echarts.init(document.getElementById('m_c'));

      myChart.setOption({

              title : {
              text: '男性女性身高体重分布',
              subtext: '抽样调查来自: Heinz  2003'
          },
          grid: {
              left: '3%',
              right: '7%',
              bottom: '3%',
              containLabel: true
          },
          tooltip : {
              // trigger: 'axis',
              showDelay : 0,
              formatter : function (params) {
                  if (params.value.length > 1) {
                      return params.seriesName + ' :<br/>'
                      + params.value[0] + 'cm '
                      + params.value[1] + 'kg ';
                  }
                  else {
                      return params.seriesName + ' :<br/>'
                      + params.name + ' : '
                      + params.value + 'kg ';
                  }
              },
              axisPointer:{
                  show: true,
                  type : 'cross',
                  lineStyle: {
                      type : 'dashed',
                      width : 1
                  }
              }
          },
          toolbox: {
              feature: {
                  dataZoom: {},
                  brush: {
                      type: ['rect', 'polygon', 'clear']
                  }
              }
          },
          brush: {
          },
          legend: {
              data: ['女性','男性'],
              left: 'center'
          },
          xAxis : [
              {
                  type : 'value',
                  scale:true,
                  axisLabel : {
                      formatter: '{value} cm'
                  },
                  splitLine: {
                      show: false
                  }
              }
          ],
          yAxis : [
              {
                  type : 'value',
                  scale:true,
                  axisLabel : {
                      formatter: '{value} kg'
                  },
                  splitLine: {
                      show: false
                  }
              }
          ],
          series : [
              {
                  name:'女性',
                  type:'scatter',
                  data: [[161.2, 51.6], [167.5, 59.0], [159.5, 49.2], [157.0, 63.0], [155.8, 53.6],
                      [170.0, 59.0], [159.1, 47.6], [166.0, 69.8], [176.2, 66.8], [160.2, 75.2],
                      [172.5, 55.2], [170.9, 54.2], [172.9, 62.5], [153.4, 42.0], [160.0, 50.0],
                      [147.2, 49.8], [168.2, 49.2], [175.0, 73.2], [157.0, 47.8], [167.6, 68.8],
                      [159.5, 50.6], [175.0, 82.5], [166.8, 57.2], [176.5, 87.8], [170.2, 72.8],
                      [174.0, 54.5], [173.0, 59.8], [179.9, 67.3], [170.5, 67.8], [160.0, 47.0],

                      [174.0, 73.6], [162.6, 61.4], [174.0, 55.5], [162.6, 63.6], [161.3, 60.9],
                      [156.2, 60.0], [149.9, 46.8], [169.5, 57.3], [160.0, 64.1], [175.3, 63.6],
                      [169.5, 67.3], [160.0, 75.5], [172.7, 68.2], [162.6, 61.4], [157.5, 76.8],
                      [176.5, 71.8], [164.4, 55.5], [160.7, 48.6], [174.0, 66.4], [163.8, 67.3]
                  ],
                  markArea: {
                      silent: true,
                      itemStyle: {
                          normal: {
                              color: 'transparent',
                              borderWidth: 1,
                              borderType: 'dashed'
                          }
                      },
                      data: [[{
                          name: '女性分布区间',
                          xAxis: 'min',
                          yAxis: 'min'
                      }, {
                          xAxis: 'max',
                          yAxis: 'max'
                      }]]
                  },
                  markPoint : {
                      data : [
                          {type : 'max', name: '最大值'},
                          {type : 'min', name: '最小值'}
                      ]
                  },
                  markLine : {
                      lineStyle: {
                          normal: {
                              type: 'solid'
                          }
                      },
                      data : [
                          {type : 'average', name: '平均值'},
                          { xAxis: 160 }
                      ]
                  }
              },
              {
                  name:'男性',
                  type:'scatter',
                  data: [[174.0, 65.6], [175.3, 71.8], [193.5, 80.7], [186.5, 72.6], [187.2, 78.8],
                      [181.5, 74.8], [184.0, 86.4], [184.5, 78.4], [175.0, 62.0], [184.0, 81.6],

                      [180.6, 72.5], [177.0, 72.5], [177.1, 83.4], [181.6, 75.5], [176.5, 73.0],
                      [175.0, 70.2], [174.0, 73.4], [165.1, 70.5], [177.0, 68.9], [192.0, 102.3],
                      [176.5, 68.4], [169.4, 65.9], [182.1, 75.7], [179.8, 84.5], [175.3, 87.7],
                      [184.9, 86.4], [177.3, 73.2], [167.4, 53.9], [178.1, 72.0], [168.9, 55.5],

                      [176.5, 80.2], [177.8, 72.0], [180.3, 71.4], [171.4, 72.7], [172.7, 84.1],
                      [172.7, 76.8], [177.8, 63.6], [177.8, 80.9], [182.9, 80.9], [170.2, 85.5],
                      [167.6, 68.6], [175.3, 67.7], [165.1, 66.4], [185.4, 102.3], [181.6, 70.5],
                      [172.7, 95.9], [190.5, 84.1], [179.1, 87.3], [175.3, 71.8], [170.2, 65.9],
                      [193.0, 95.9], [171.4, 91.4], [177.8, 81.8], [177.8, 96.8], [167.6, 69.1],
                      [167.6, 82.7], [180.3, 75.5], [182.9, 79.5], [176.5, 73.6], [186.7, 91.8],
                      [188.0, 84.1], [188.0, 85.9], [177.8, 81.8], [174.0, 82.5], [177.8, 80.5],

                  ],
                  markArea: {
                      silent: true,
                      itemStyle: {
                          normal: {
                              color: 'transparent',
                              borderWidth: 1,
                              borderType: 'dashed'
                          }
                      },
                      data: [[{
                          name: '男性分布区间',
                          xAxis: 'min',
                          yAxis: 'min'
                      }, {
                          xAxis: 'max',
                          yAxis: 'max'
                      }]]
                  },
                  markPoint : {
                      data : [
                          {type : 'max', name: '最大值'},
                          {type : 'min', name: '最小值'}
                      ]
                  },
                  markLine : {
                      lineStyle: {
                          normal: {
                              type: 'solid'
                          }
                      },
                      data : [
                          {type : 'average', name: '平均值'},
                          { xAxis: 170 }
                      ]
                  }
              }
          ]



      })



    }
  }
</script>
