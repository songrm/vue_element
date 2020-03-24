/**
 * type={
 * imageList // 图片组合 可上传多张
 * title  // 文字
 * navigation // 导航
 *
 *
 * }
 */
let id = 1
const element = [
  {
    id: `${++id}`,
    name: '标题',
    type: 'title', // 标题
    hasMargin: false, // 是否有边距
    textAlign:'center',
    content: '这里是标题'
  },
  {
    id: `${++id}`,
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
  {
    id: `${++id}`,
    name: '搜索框',
    type: 'SEARCH_BOX', // 搜索
    hasMargin: false, // 是否有边距
    placeholder: '搜索商品名称'
  },
  {
    id: `${++id}`,
    name: '图文',
    type: 'imageText', // 图文
    hasMargin: false, // 是否有边距
    isGoodsList:false, // 是否导入商品
    goodsListData:[], // 商品列表
    style:{
      imgPosition: 'top', // top, left
      borderRadius: 0,
      textPosition: 'center'
    },
    styleList:{
      imgPosition: {top,left},
      textPosition: {left, center},
    }
  },
]
