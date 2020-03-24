let id = 1
export default {
  title: {
    id: 0,
    name: '标题',
    type: 'title', // 标题
    hasMargin: false, // 是否有边距
    textAlign:'center',
    content: '这里是标题'
  },
  imageList:{
    id: 1,
    name: '图片组合',
    type: 'imageList', // 标题
    margin: 0, // 边距 默认为0
    list:[
      {
        sortId: 0, // 排序
        id:0, // id
        url:'', // 图片路径
        text:'', // 文字描述
        jumpContent:'' // 跳转链接
      }
    ]
  },
  imageText:{
    id: `${++id}`,
    name: '图文',
    type: 'imageText', // 搜索
    hasMargin: false, // 是否有边距
    isGoodsList:false, // 是否导入商品
    goodsListData:[],
    typeList:[
      {
        id:'imageText1',
        typeList:{
          imgPosition:'top',
          textPosition: 'center'
        }
      },
      {
        id:'imageText2',
        typeList:{
          imgPosition:'left',
          imgMargin:0,
          textPosition: 'center'
        }
      }
    ]
  },
}

// export default eleData
