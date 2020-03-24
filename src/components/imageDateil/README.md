<appletHead
  ref="appletHead"
  :width="144"
  :height="144"
  field="img"
  img-format="png"
  @cropSuccess="modifyImage"
  url="/upload"
  :params="params"
  :headers="headers"
/>

data(){
  params: {
    token: '123456798',
    name: 'avatar'
  },

  headers: {
    smail: '*_~'
  },

}

## 方法
async modifyImage(imgDataUrl, field) {
    console.log('-------- crop success 获得裁剪的图片 --------', imgDataUrl, field)

    const form = new FormData()

    form.append('file', imgDataUrl, 'image.png')
    form.append('weappId', this.weappId)
    form.append('mediaType', 'image')

    const url = await getUrl(form)


  },
