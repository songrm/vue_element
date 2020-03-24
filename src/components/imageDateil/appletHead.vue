<template>
  <tck
    :dialog-visible="dialogVisible"
    title="修改小程序头像"
    @hide="hide"
    width="35%"
  >
    <div slot="content">
      <div class="vue-image-crop-upload">
        <div class="tip">
          头像不允许涉及政治敏感与色情;<br />

          图片格式必须为：png,bmp,jpeg,jpg,gif；不可大于2M；建议使用png格式图片，以保持最佳效果；建议图片尺寸为144px*144px
        </div>
        <div class="vicp-wrap">
          <div class="vicp-step1" v-show="step == 1">
            <div
              class="vicp-drop-area"
              @dragleave="preventDefault"
              @dragover="preventDefault"
              @dragenter="preventDefault"
              @click="handleClick"
              @drop="handleChange"
            >
              <icon-svg
                class="icon-Sc"
                icon-class="shangchuan"
                v-show="loading != 1"
              />

              <span class="vicp-hint" v-show="loading !== 1">{{
                lang.hint
              }}</span>
              <span class="vicp-no-supported-hint" v-show="!isSupported">{{
                lang.noSupported
              }}</span>
              <input
                type="file"
                v-show="false"
                v-if="step == 1"
                @change="handleChange"
                ref="fileinput"
              />
            </div>
            <div class="vicp-error" v-show="hasError">
              <i class="vicp-icon2"></i> {{ errorMsg }}
            </div>
          </div>

          <div class="vicp-step2" v-if="step == 2">
            <div class="vicp-crop">
              <div class="vicp-crop-left">
                <div class="vicp-img-container">
                  <img
                    :src="sourceImgUrl"
                    :style="sourceImgStyle"
                    class="vicp-img"
                    draggable="false"
                    @drag="preventDefault"
                    @dragstart="preventDefault"
                    @dragend="preventDefault"
                    @dragleave="preventDefault"
                    @dragover="preventDefault"
                    @dragenter="preventDefault"
                    @drop="preventDefault"
                    @touchstart="imgStartMove"
                    @touchmove="imgMove"
                    @touchend="createImg"
                    @touchcancel="createImg"
                    @mousedown="imgStartMove"
                    @mousemove="imgMove"
                    @mouseup="createImg"
                    @mouseout="createImg"
                    ref="img"
                  />
                  <div
                    class="vicp-img-shade vicp-img-shade-1"
                    :style="sourceImgShadeStyle"
                  ></div>
                  <div
                    class="vicp-img-shade vicp-img-shade-2"
                    :style="sourceImgShadeStyle"
                  ></div>
                </div>

                <div class="vicp-range">
                  <input
                    type="range"
                    :value="scale.range"
                    step="1"
                    min="0"
                    max="100"
                    @input="zoomChange"
                  />
                  <i
                    @mousedown="startZoomSub"
                    @mouseout="endZoomSub"
                    @mouseup="endZoomSub"
                    class="vicp-icon5"
                  ></i>
                  <i
                    @mousedown="startZoomAdd"
                    @mouseout="endZoomAdd"
                    @mouseup="endZoomAdd"
                    class="vicp-icon6"
                  ></i>
                </div>

                <div class="vicp-rotate" v-if="!noRotate">
                  <i @click="rotateImg">↺</i>
                </div>
              </div>
              <div class="vicp-crop-right">
                <div class="vicp-preview">
                  <div class="vicp-preview-item" v-if="!noSquare">
                    <img :src="createImgUrl" :style="previewStyle" />
                    <span>{{ lang.preview }}</span>
                  </div>
                  <div
                    class="vicp-preview-item vicp-preview-item-circle"
                    v-if="!noCircle"
                  >
                    <img :src="createImgUrl" :style="previewStyle" />
                    <span>{{ lang.preview }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="vicp-step3" v-if="step == 3">
            <div class="vicp-upload">
              <span class="vicp-loading" v-show="loading === 1">{{
                lang.loading
              }}</span>
              <div class="vicp-progress-wrap">
                <span
                  class="vicp-progress"
                  v-show="loading === 1"
                  :style="progressStyle"
                ></span>
              </div>
              <div class="vicp-error" v-show="hasError">
                <i class="vicp-icon2"></i> {{ errorMsg }}
              </div>
              <div class="vicp-success" v-show="loading === 2">
                <i class="vicp-icon3"></i> {{ lang.success }}
              </div>
            </div>
            <!-- <div class="vicp-operate">
              <a @click="setStep(2)" >{{ lang.btn.back }}</a>
              <a @click="off" >{{ lang.btn.close }}</a>
            </div> -->
          </div>
          <canvas
            v-show="false"
            :width="width"
            :height="height"
            ref="canvas"
          ></canvas>
        </div>
      </div>
    </div>

    <div class="footer" slot="footer">
      <div class="vicp-operate" v-show="step === 1">
        <el-button @click="hide"> 取消</el-button>
      </div>
      <div class="vicp-operate" v-show="step === 2">
        <el-button @click="setStep(1)"> 上一步</el-button>
        <el-button type="primary" @click="prepareUpload">保存</el-button>
      </div>
      <div class="vicp-operate" v-show="step === 3">
        <el-button type="primary" @click="setStep(2)">上一步</el-button>
        <el-button @click="hide"> 关闭</el-button>
      </div>
    </div>
  </tck>
</template>

<script>
import language from '../image/utils/language'
import mimes from '../image/utils/mimes'
import data2blob from '../image/utils/data2blob'

import tck from '../dialog'
export default {
  name: 'appletHead',
  components: { tck },
  props: {
    // 域，上传文件name，触发事件会带上（如果一个页面多个图片上传控件，可以做区分
    field: {
      type: String,
      default: 'avatar'
    },
    // 类似于id，触发事件会带上（如果一个页面多个图片上传控件，可以做区分
    ki: {
      default: 0
    },
    // 显示该控件与否
    value: {
      twoWay: true,
      default: true
    },
    // 上传地址
    url: {
      type: String,
      default: ''
    },
    // 其他要上传文件附带的数据，对象格式
    params: {
      type: Object,
      default: null
    },
    // Add custom headers

    headers: {
      type: Object,
      default: null
    },
    // 剪裁图片的宽
    width: {
      type: Number,
      default: 144
    },
    // 剪裁图片的高
    height: {
      type: Number,
      default: 144
    },
    // 不显示旋转功能
    noRotate: {
      type: Boolean,
      default: true
    },
    // 不预览圆形图片
    noCircle: {
      type: Boolean,
      default: false
    },
    // 不预览方形图片
    noSquare: {
      type: Boolean,
      default: false
    },
    // 单文件大小限制
    maxSize: {
      type: Number,
      default: 10240
    },
    // 语言类型
    langType: {
      type: String,
      default: 'zh'
    },
    // 语言包
    langExt: {
      type: Object,
      default: null
    },
    // 图片上传格式
    imgFormat: {
      type: String,
      default: 'png'
    },
    // 图片背景 jpg情况下生效
    imgBgc: {
      type: String,
      default: '#fff'
    },
    // 是否支持跨域
    withCredentials: {
      type: Boolean,
      default: false
    },
    method: {
      type: String,
      default: 'POST'
    }
  },
  data() {
    const that = this

    const { imgFormat, langType, langExt, width, height } = that
    let isSupported = true
    const allowImgFormat = ['jpg', 'png']
    const tempImgFormat =
      allowImgFormat.indexOf(imgFormat) === -1 ? 'jpg' : imgFormat
    const lang = language[langType] ? language[langType] : language.en
    const mime = mimes[tempImgFormat]
    // 规范图片格式
    that.imgFormat = tempImgFormat

    if (langExt) {
      Object.assign(lang, langExt)
    }
    if (typeof FormData !== 'function') {
      isSupported = false
    }
    return {
      dialogVisible: false,
      textarea: '',
      form: {},
      // 图片的mime
      mime,

      // 语言包
      lang,

      // 浏览器是否支持该控件
      isSupported,
      // 浏览器是否支持触屏事件
      // isSupportTouch: document.hasOwnProperty('ontouchstart'),
      isSupportTouch: false,

      // 步骤
      step: 1, // 1选择文件 2剪裁 3上传

      // 上传状态及进度
      loading: 0, // 0未开始 1正在 2成功 3错误
      progress: 0,

      // 是否有错误及错误信息
      hasError: false,
      errorMsg: '',

      // 需求图宽高比
      ratio: width / height,

      // 原图地址、生成图片地址
      sourceImg: null,
      sourceImgUrl: '',
      createImgUrl: '',

      // 原图片拖动事件初始值
      sourceImgMouseDown: {
        on: false,
        mX: 0, // 鼠标按下的坐标
        mY: 0,
        x: 0, // scale原图坐标
        y: 0
      },

      // 生成图片预览的容器大小
      previewContainer: {
        width: 100,
        height: 100
      },

      // 原图容器宽高
      sourceImgContainer: {
        // sic
        width: 240,
        height: 184 // 如果生成图比例与此一致会出现bug，先改成特殊的格式吧，哈哈哈
      },

      // 原图展示属性
      scale: {
        zoomAddOn: false, // 按钮缩放事件开启
        zoomSubOn: false, // 按钮缩放事件开启
        range: 1, // 最大100

        x: 0,
        y: 0,
        width: 0,
        height: 0,
        maxWidth: 0,
        maxHeight: 0,
        minWidth: 0, // 最宽
        minHeight: 0,
        naturalWidth: 0, // 原宽
        naturalHeight: 0
      }
    }
  },
  computed: {
    // 进度条样式
    progressStyle() {
      const { progress } = this
      return {
        width: progress + '%'
      }
    },
    // 原图样式
    sourceImgStyle() {
      const { scale, sourceImgMasking } = this
      return {
        top: scale.y + sourceImgMasking.y + 'px',
        left: scale.x + sourceImgMasking.x + 'px',
        width: scale.width + 'px',
        height: scale.height + 'px'
      }
    },
    // 原图蒙版属性
    sourceImgMasking() {
      const { width, height, ratio, sourceImgContainer } = this
      const sic = sourceImgContainer
      const sicRatio = sic.width / sic.height // 原图容器宽高比
      let x = 0
      let y = 0
      let w = sic.width
      let h = sic.height
      let scale = 1
      if (ratio < sicRatio) {
        scale = sic.height / height
        w = sic.height * ratio
        x = (sic.width - w) / 2
      }
      if (ratio > sicRatio) {
        scale = sic.width / width
        h = sic.width / ratio
        y = (sic.height - h) / 2
      }
      return {
        scale, // 蒙版相对需求宽高的缩放
        x,
        y,
        width: w,
        height: h
      }
    },
    // 原图遮罩样式
    sourceImgShadeStyle() {
      const { sourceImgMasking, sourceImgContainer } = this
      const sic = sourceImgContainer
      const sim = sourceImgMasking
      const w =
        sim.width === sic.width ? sim.width : (sic.width - sim.width) / 2
      const h =
        sim.height === sic.height ? sim.height : (sic.height - sim.height) / 2
      return {
        width: w + 'px',
        height: h + 'px'
      }
    },
    previewStyle() {
      const {
        // width,
        // height,
        ratio,
        previewContainer
      } = this
      const pc = previewContainer
      let w = pc.width
      let h = pc.height
      const pcRatio = w / h
      if (ratio < pcRatio) {
        w = pc.height * ratio
      }
      if (ratio > pcRatio) {
        h = pc.width / ratio
      }
      return {
        width: w + 'px',
        height: h + 'px'
      }
    }
  },
  watch: {
    value(newValue) {
      if (newValue && this.loading !== 1) {
        this.reset()
      }
    }
  },
  created() {
    // 绑定按键esc隐藏此插件事件
    document.addEventListener('keyup', e => {
      if (this.value && (e.key === 'Escape' || e.keyCode === 27)) {
        this.off()
      }
    })
  },
  methods: {
    show() {
      this.dialogVisible = true
    },
    hide() {
      this.dialogVisible = false
    },
    // 关闭控件
    off() {
      setTimeout(() => {
        this.value = false
        if (this.step === 3 && this.loading === 2) {
          this.setStep(1)
        }
      }, 200)
    },
    // 设置步骤
    setStep(no) {
      // 延时是为了显示动画效果呢，哈哈哈
      setTimeout(() => {
        this.step = no
      }, 200)
    },
    // 图片选择区域函数绑定/
    preventDefault(e) {
      e.preventDefault()
      return false
    },
    handleClick(e) {
      if (this.loading !== 1) {
        if (e.target !== this.$refs.fileinput) {
          e.preventDefault()
          if (document.activeElement !== this.$els) {
            this.$refs.fileinput.click()
          }
        }
      }
    },
    handleChange(e) {
      e.preventDefault()
      if (this.loading !== 1) {
        const files = e.target.files || e.dataTransfer.files
        this.reset()
        if (this.checkFile(files[0])) {
          this.setSourceImg(files[0])
        }
      }
    },
    // 检测选择的文件是否合适
    checkFile(file) {
      const that = this
      const { lang, maxSize } = that
      // 仅限图片
      if (file.type.indexOf('image') === -1) {
        that.hasError = true
        that.errorMsg = lang.error.onlyImg
        return false
      }

      // 超出大小
      if (file.size / 1024 > maxSize) {
        that.hasError = true
        that.errorMsg = lang.error.outOfSize + maxSize + 'kb'
        return false
      }
      return true
    },
    // 重置控件
    reset() {
      this.loading = 0
      this.progress = 0
      this.hasError = false
      this.errorMsg = ''
    },
    // 设置图片源
    setSourceImg(file) {
      this.$emit('srcFileSet', file.name, file.type, file.size)
      const that = this
      const fr = new FileReader()
      fr.onload = function(e) {
        that.sourceImgUrl = fr.result
        that.startCrop()
      }
      fr.readAsDataURL(file)
    },
    // 剪裁前准备工作
    startCrop() {
      const that = this
      const {
        width,
        height,
        ratio,
        scale,
        sourceImgUrl,
        sourceImgMasking,
        lang
      } = that
      const sim = sourceImgMasking
      const img = new Image()
      img.src = sourceImgUrl
      img.onload = function() {
        const nWidth = img.naturalWidth
        const nHeight = img.naturalHeight
        const nRatio = nWidth / nHeight
        let w = sim.width
        let h = sim.height
        let x = 0
        let y = 0
        // 图片像素不达标
        if (nWidth < width || nHeight < height) {
          that.hasError = true
          that.errorMsg = lang.error.lowestPx + width + '*' + height
          return false
        }
        if (ratio > nRatio) {
          h = w / nRatio
          y = (sim.height - h) / 2
        }
        if (ratio < nRatio) {
          w = h * nRatio
          x = (sim.width - w) / 2
        }
        scale.range = 0
        scale.x = x
        scale.y = y
        scale.width = w
        scale.height = h
        scale.minWidth = w
        scale.minHeight = h
        scale.maxWidth = nWidth * sim.scale
        scale.maxHeight = nHeight * sim.scale
        scale.naturalWidth = nWidth
        scale.naturalHeight = nHeight
        that.sourceImg = img
        that.createImg()
        that.setStep(2)
      }
    },
    // 鼠标按下图片准备移动
    imgStartMove(e) {
      e.preventDefault()
      // 支持触摸事件，则鼠标事件无效
      if (this.isSupportTouch && !e.targetTouches) {
        return false
      }
      const et = e.targetTouches ? e.targetTouches[0] : e
      const { sourceImgMouseDown, scale } = this
      const simd = sourceImgMouseDown
      simd.mX = et.screenX
      simd.mY = et.screenY
      simd.x = scale.x
      simd.y = scale.y
      simd.on = true
    },
    // 鼠标按下状态下移动，图片移动
    imgMove(e) {
      e.preventDefault()
      // 支持触摸事件，则鼠标事件无效
      if (this.isSupportTouch && !e.targetTouches) {
        return false
      }
      const et = e.targetTouches ? e.targetTouches[0] : e
      const {
        sourceImgMouseDown: { on, mX, mY, x, y },
        scale,
        sourceImgMasking
      } = this
      const sim = sourceImgMasking
      const nX = et.screenX
      const nY = et.screenY
      const dX = nX - mX
      const dY = nY - mY
      let rX = x + dX
      let rY = y + dY

      if (!on) return
      if (rX > 0) {
        rX = 0
      }
      if (rY > 0) {
        rY = 0
      }
      if (rX < sim.width - scale.width) {
        rX = sim.width - scale.width
      }
      if (rY < sim.height - scale.height) {
        rY = sim.height - scale.height
      }
      scale.x = rX
      scale.y = rY
    },
    // 顺时针旋转图片
    rotateImg(e) {
      const {
        sourceImg,
        scale: { naturalWidth, naturalHeight }
      } = this
      const width = naturalHeight
      const height = naturalWidth
      const canvas = this.$refs.canvas
      const ctx = canvas.getContext('2d')
      canvas.width = width
      canvas.height = height
      ctx.clearRect(0, 0, width, height)

      ctx.fillStyle = 'rgba(0,0,0,0)'
      ctx.fillRect(0, 0, width, height)

      ctx.translate(width, 0)
      ctx.rotate((Math.PI * 90) / 180)

      ctx.drawImage(sourceImg, 0, 0, naturalWidth, naturalHeight)
      const imgUrl = canvas.toDataURL(mimes.png)

      this.sourceImgUrl = imgUrl
      this.startCrop()
    },

    // 按钮按下开始放大
    startZoomAdd(e) {
      const that = this
      const { scale } = that
      scale.zoomAddOn = true

      function zoom() {
        if (scale.zoomAddOn) {
          const range = scale.range >= 100 ? 100 : ++scale.range
          that.zoomImg(range)
          setTimeout(function() {
            zoom()
          }, 60)
        }
      }
      zoom()
    },
    // 按钮松开或移开取消放大
    endZoomAdd(e) {
      this.scale.zoomAddOn = false
    },
    // 按钮按下开始缩小
    startZoomSub(e) {
      const that = this
      const { scale } = that
      scale.zoomSubOn = true

      function zoom() {
        if (scale.zoomSubOn) {
          const range = scale.range <= 0 ? 0 : --scale.range
          that.zoomImg(range)
          setTimeout(function() {
            zoom()
          }, 60)
        }
      }
      zoom()
    },
    // 按钮松开或移开取消缩小
    endZoomSub(e) {
      const { scale } = this
      scale.zoomSubOn = false
    },
    zoomChange(e) {
      this.zoomImg(e.target.value)
    },
    // 缩放原图
    zoomImg(newRange) {
      const that = this
      const {
        sourceImgMasking,
        // sourceImgMouseDown,
        scale
      } = this
      const {
        maxWidth,
        maxHeight,
        minWidth,
        minHeight,
        width,
        height,
        x,
        y
        // range
      } = scale
      const sim = sourceImgMasking
      // 蒙版宽高
      const sWidth = sim.width
      const sHeight = sim.height
      // 新宽高
      const nWidth = minWidth + ((maxWidth - minWidth) * newRange) / 100
      const nHeight = minHeight + ((maxHeight - minHeight) * newRange) / 100
      // 新坐标（根据蒙版中心点缩放）
      let nX = sWidth / 2 - (nWidth / width) * (sWidth / 2 - x)
      let nY = sHeight / 2 - (nHeight / height) * (sHeight / 2 - y)

      // 判断新坐标是否超过蒙版限制
      if (nX > 0) {
        nX = 0
      }
      if (nY > 0) {
        nY = 0
      }
      if (nX < sWidth - nWidth) {
        nX = sWidth - nWidth
      }
      if (nY < sHeight - nHeight) {
        nY = sHeight - nHeight
      }

      // 赋值处理
      scale.x = nX
      scale.y = nY
      scale.width = nWidth
      scale.height = nHeight
      scale.range = newRange
      setTimeout(function() {
        if (scale.range === newRange) {
          that.createImg()
        }
      }, 300)
    },
    // 生成需求图片
    createImg(e) {
      const that = this
      const {
        imgFormat,
        imgBgc,
        mime,
        sourceImg,
        scale: { x, y, width, height },
        sourceImgMasking: { scale }
      } = that
      const canvas = that.$refs.canvas
      const ctx = canvas.getContext('2d')
      if (e) {
        // 取消鼠标按下移动状态
        that.sourceImgMouseDown.on = false
      }
      canvas.width = that.width
      canvas.height = that.height
      ctx.clearRect(0, 0, that.width, that.height)

      if (imgFormat === 'png') {
        ctx.fillStyle = 'rgba(0,0,0,0)'
      } else {
        // 如果jpg 为透明区域设置背景，默认白色
        ctx.fillStyle = imgBgc
      }
      ctx.fillRect(0, 0, that.width, that.height)

      ctx.drawImage(
        sourceImg,
        x / scale,
        y / scale,
        width / scale,
        height / scale
      )
      that.createImgUrl = canvas.toDataURL(mime)
    },
    // 预备上传
    prepareUpload() {
      // const {
      //   url,
      //   createImgUrl,
      //   field,
      //   ki
      // } = this
      // this.$emit('cropSuccess', createImgUrl, field, ki)
      // console.log(createImgUrl, '=======')
      // if (typeof url === 'string' && url) {
      //   this.upload()
      // } else {
      //   this.off()
      // }

      // const {
      //   createImgUrl,
      //   field,
      //   ki
      // } = this
      // console.log(createImgUrl,
      //   field,
      //   ki)

      // let url
      const canvas = this.$refs.canvas
      const _that = this
      canvas.toBlob(function(blob) {
        // var newImg = document.createElement('img')

        // url = URL.createObjectURL(blob)
        _that.$emit('cropSuccess', blob, 'image.png')
      })
      // const a = getUrl(url)
      // console.log(a, 'aaa')
      // this.$emit('cropSuccess', url, 'image')
      // this.$emit('cropSuccess', createImgUrl, field, ki, url)
    },
    // 上传图片
    upload() {
      const that = this
      const {
        lang,
        imgFormat,
        mime,
        url,
        params,
        field,
        ki,
        createImgUrl,
        withCredentials,
        method
      } = this
      const fmData = new FormData()
      fmData.append(
        field,
        data2blob(createImgUrl, mime),
        field + '.' + imgFormat
      )

      // 添加其他参数
      if (typeof params === 'object' && params) {
        Object.keys(params).forEach(k => {
          fmData.append(k, params[k])
        })
      }

      // 监听进度回调
      const uploadProgress = function(event) {
        if (event.lengthComputable) {
          that.progress = (100 * Math.round(event.loaded)) / event.total
        }
      }

      // 上传文件
      that.reset()
      that.loading = 1
      that.setStep(3)
      new Promise(function(resolve, reject) {
        const client = new XMLHttpRequest()
        client.open(method, url, true)
        client.withCredentials = withCredentials
        client.onreadystatechange = function() {
          if (this.readyState !== 4) {
            return
          }
          if (this.status === 200 || this.status === 201) {
            resolve(JSON.parse(this.responseText))
          } else {
            reject(this.status)
          }
        }
        client.upload.addEventListener('progress', uploadProgress, false) // 监听进度\
        // // 设置header
        // if (typeof headers === 'object' && headers) {
        //   Object.keys(headers).forEach((k) => {
        //     client.setRequestHeader(k, headers[k])
        //   })
        // }
        client.send(fmData)
      }).then(
        // 上传成功
        function(resData) {
          if (that.value) {
            that.loading = 2
            that.$emit('cropUploadSuccess', resData, field, ki)
          }
        },
        // 上传失败
        function(sts) {
          if (that.value) {
            that.loading = 3
            that.hasError = true
            that.errorMsg = lang.fail
            that.$emit('cropUploadFail', sts, field, ki)
          }
        }
      )
    }
  }
}
</script>

<style lang="scss">
.tip {
  color: #9a9a9a;
  font-size: 13px;
  line-height: 23px;
}

.center {
  text-align: center;
}

@-webkit-keyframes vicp_progress {
  0% {
    background-position-y: 0;
  }

  100% {
    background-position-y: 40px;
  }
}

@keyframes vicp_progress {
  0% {
    background-position-y: 0;
  }

  100% {
    background-position-y: 40px;
  }
}

@-webkit-keyframes vicp {
  0% {
    opacity: 0;
    -webkit-transform: scale(0) translateY(-60px);
    transform: scale(0) translateY(-60px);
  }

  100% {
    opacity: 1;
    -webkit-transform: scale(1) translateY(0);
    transform: scale(1) translateY(0);
  }
}

@keyframes vicp {
  0% {
    opacity: 0;
    -webkit-transform: scale(0) translateY(-60px);
    transform: scale(0) translateY(-60px);
  }

  100% {
    opacity: 1;
    -webkit-transform: scale(1) translateY(0);
    transform: scale(1) translateY(0);
  }
}

.vicp-wrap .vicp-step1 .vicp-drop-area {
  position: relative;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 35px;
  height: 170px;
  background-color: rgba(0, 0, 0, 0.03);
  text-align: center;
  border: 1px dashed rgba(0, 0, 0, 0.08);
  overflow: hidden;
}

.vicp-wrap .vicp-step1 .vicp-drop-area .vicp-hint {
  display: block;
  padding: 15px;
  font-size: 14px;
  color: #666;
  line-height: 30px;
}

.vicp-wrap .vicp-step1 .vicp-drop-area .vicp-no-supported-hint {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  padding: 30px;
  width: 100%;
  height: 60px;
  line-height: 30px;
  background-color: #eee;
  text-align: center;
  color: #666;
  font-size: 14px;
}

.vicp-wrap .vicp-step1 .vicp-drop-area:hover {
  cursor: pointer;
  border-color: rgba(0, 0, 0, 0.1);
  background-color: rgba(0, 0, 0, 0.05);
}

.vicp-wrap .vicp-step2 .vicp-crop {
  overflow: hidden;
}

.vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left {
  float: left;
}

.vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-img-container {
  position: relative;
  display: block;
  width: 240px;
  height: 180px;
  background-color: #e5e5e0;
  overflow: hidden;
}

.vicp-wrap
  .vicp-step2
  .vicp-crop
  .vicp-crop-left
  .vicp-img-container
  .vicp-img {
  position: absolute;
  display: block;
  cursor: move;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.vicp-wrap
  .vicp-step2
  .vicp-crop
  .vicp-crop-left
  .vicp-img-container
  .vicp-img-shade {
  -webkit-box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.18);
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.18);
  position: absolute;
  background-color: rgba(241, 242, 243, 0.8);
}

.vicp-wrap
  .vicp-step2
  .vicp-crop
  .vicp-crop-left
  .vicp-img-container
  .vicp-img-shade.vicp-img-shade-1 {
  top: 0;
  left: 0;
}

.vicp-wrap
  .vicp-step2
  .vicp-crop
  .vicp-crop-left
  .vicp-img-container
  .vicp-img-shade.vicp-img-shade-2 {
  bottom: 0;
  right: 0;
}

.vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-rotate {
  position: relative;
  width: 240px;
  height: 18px;
}

.vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-rotate i {
  display: block;
  width: 18px;
  height: 18px;
  border-radius: 100%;
  line-height: 18px;
  text-align: center;
  font-size: 12px;
  font-weight: bold;
  background-color: rgba(0, 0, 0, 0.08);
  color: #fff;
  overflow: hidden;
}

.vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-rotate i:hover {
  -webkit-box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12);
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12);
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.14);
}

.vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-rotate i:first-child {
  float: left;
}

.vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-rotate i:last-child {
  float: right;
}

.vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range {
  position: relative;
  margin: 30px 0 10px 0;
  width: 240px;
  height: 18px;
}

.vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range .vicp-icon5,
.vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range .vicp-icon6 {
  position: absolute;
  top: 0;
  width: 18px;
  height: 18px;
  border-radius: 100%;
  background-color: rgba(0, 0, 0, 0.08);
}

.vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range .vicp-icon5:hover,
.vicp-wrap
  .vicp-step2
  .vicp-crop
  .vicp-crop-left
  .vicp-range
  .vicp-icon6:hover {
  -webkit-box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12);
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12);
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.14);
}

.vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range .vicp-icon5 {
  left: 0;
}

.vicp-wrap
  .vicp-step2
  .vicp-crop
  .vicp-crop-left
  .vicp-range
  .vicp-icon5::before {
  position: absolute;
  content: '';
  display: block;
  left: 3px;
  top: 8px;
  width: 12px;
  height: 2px;
  background-color: #fff;
}

.vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range .vicp-icon6 {
  right: 0;
}

.vicp-wrap
  .vicp-step2
  .vicp-crop
  .vicp-crop-left
  .vicp-range
  .vicp-icon6::before {
  position: absolute;
  content: '';
  display: block;
  left: 3px;
  top: 8px;
  width: 12px;
  height: 2px;
  background-color: #fff;
}

.vicp-wrap
  .vicp-step2
  .vicp-crop
  .vicp-crop-left
  .vicp-range
  .vicp-icon6::after {
  position: absolute;
  content: '';
  display: block;
  top: 3px;
  left: 8px;
  width: 2px;
  height: 12px;
  background-color: #fff;
}

.vicp-wrap
  .vicp-step2
  .vicp-crop
  .vicp-crop-left
  .vicp-range
  input[type='range'] {
  display: block;
  padding-top: 5px;
  margin: 0 auto;
  width: 180px;
  height: 8px;
  vertical-align: top;
  background: transparent;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  cursor: pointer;
}

.vicp-wrap
  .vicp-step2
  .vicp-crop
  .vicp-crop-left
  .vicp-range
  input[type='range']:focus {
  outline: none;
}

.vicp-wrap
  .vicp-step2
  .vicp-crop
  .vicp-crop-left
  .vicp-range
  input[type='range']::-webkit-slider-thumb {
  -webkit-box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.18);
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.18);
  -webkit-appearance: none;
  appearance: none;
  margin-top: -3px;
  width: 12px;
  height: 12px;
  background-color: #61c091;
  border-radius: 100%;
  border: none;
  -webkit-transition: 0.2s;
  transition: 0.2s;
}

.vicp-wrap
  .vicp-step2
  .vicp-crop
  .vicp-crop-left
  .vicp-range
  input[type='range']::-moz-range-thumb {
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.18);
  -moz-appearance: none;
  appearance: none;
  width: 12px;
  height: 12px;
  background-color: #61c091;
  border-radius: 100%;
  border: none;
  -webkit-transition: 0.2s;
  transition: 0.2s;
}

.vicp-wrap
  .vicp-step2
  .vicp-crop
  .vicp-crop-left
  .vicp-range
  input[type='range']::-ms-thumb {
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.18);
  appearance: none;
  width: 12px;
  height: 12px;
  background-color: #61c091;
  border: none;
  border-radius: 100%;
  -webkit-transition: 0.2s;
  transition: 0.2s;
}

.vicp-wrap
  .vicp-step2
  .vicp-crop
  .vicp-crop-left
  .vicp-range
  input[type='range']:active::-moz-range-thumb {
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.23);
  width: 14px;
  height: 14px;
}

.vicp-wrap
  .vicp-step2
  .vicp-crop
  .vicp-crop-left
  .vicp-range
  input[type='range']:active::-ms-thumb {
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.23);
  width: 14px;
  height: 14px;
}

.vicp-wrap
  .vicp-step2
  .vicp-crop
  .vicp-crop-left
  .vicp-range
  input[type='range']:active::-webkit-slider-thumb {
  -webkit-box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.23);
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.23);
  margin-top: -4px;
  width: 14px;
  height: 14px;
}

.vicp-wrap
  .vicp-step2
  .vicp-crop
  .vicp-crop-left
  .vicp-range
  input[type='range']::-webkit-slider-runnable-track {
  -webkit-box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12);
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12);
  width: 100%;
  height: 6px;
  cursor: pointer;
  border-radius: 2px;
  border: none;
  background-color: rgba(68, 170, 119, 0.3);
}

.vicp-wrap
  .vicp-step2
  .vicp-crop
  .vicp-crop-left
  .vicp-range
  input[type='range']::-moz-range-track {
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12);
  width: 100%;
  height: 6px;
  cursor: pointer;
  border-radius: 2px;
  border: none;
  background-color: rgba(68, 170, 119, 0.3);
}

.vicp-wrap
  .vicp-step2
  .vicp-crop
  .vicp-crop-left
  .vicp-range
  input[type='range']::-ms-track {
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12);
  width: 100%;
  cursor: pointer;
  background: transparent;
  border-color: transparent;
  color: transparent;
  height: 6px;
  border-radius: 2px;
  border: none;
}

.vicp-wrap
  .vicp-step2
  .vicp-crop
  .vicp-crop-left
  .vicp-range
  input[type='range']::-ms-fill-lower {
  background-color: rgba(68, 170, 119, 0.3);
}

.vicp-wrap
  .vicp-step2
  .vicp-crop
  .vicp-crop-left
  .vicp-range
  input[type='range']::-ms-fill-upper {
  background-color: rgba(68, 170, 119, 0.15);
}

.vicp-wrap
  .vicp-step2
  .vicp-crop
  .vicp-crop-left
  .vicp-range
  input[type='range']:focus::-webkit-slider-runnable-track {
  background-color: rgba(68, 170, 119, 0.5);
}

.vicp-wrap
  .vicp-step2
  .vicp-crop
  .vicp-crop-left
  .vicp-range
  input[type='range']:focus::-moz-range-track {
  background-color: rgba(68, 170, 119, 0.5);
}

.vicp-wrap
  .vicp-step2
  .vicp-crop
  .vicp-crop-left
  .vicp-range
  input[type='range']:focus::-ms-fill-lower {
  background-color: rgba(68, 170, 119, 0.45);
}

.vicp-wrap
  .vicp-step2
  .vicp-crop
  .vicp-crop-left
  .vicp-range
  input[type='range']:focus::-ms-fill-upper {
  background-color: rgba(68, 170, 119, 0.25);
}

.vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-right {
  float: right;
}

.vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-right .vicp-preview {
  height: 150px;
  overflow: hidden;
}

.vicp-wrap
  .vicp-step2
  .vicp-crop
  .vicp-crop-right
  .vicp-preview
  .vicp-preview-item {
  position: relative;
  padding: 5px;
  width: 100px;
  height: 100px;
  float: left;
  margin-right: 16px;
}

.vicp-wrap
  .vicp-step2
  .vicp-crop
  .vicp-crop-right
  .vicp-preview
  .vicp-preview-item
  span {
  position: absolute;
  bottom: -30px;
  width: 100%;
  font-size: 14px;
  color: #bbb;
  display: block;
  text-align: center;
}

.vicp-wrap
  .vicp-step2
  .vicp-crop
  .vicp-crop-right
  .vicp-preview
  .vicp-preview-item
  img {
  position: absolute;
  display: block;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  padding: 3px;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.15);
  overflow: hidden;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.vicp-wrap
  .vicp-step2
  .vicp-crop
  .vicp-crop-right
  .vicp-preview
  .vicp-preview-item.vicp-preview-item-circle {
  margin-right: 0;
}

.vicp-wrap
  .vicp-step2
  .vicp-crop
  .vicp-crop-right
  .vicp-preview
  .vicp-preview-item.vicp-preview-item-circle
  img {
  border-radius: 100%;
}

.vicp-wrap .vicp-step3 .vicp-upload {
  position: relative;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 35px;
  height: 170px;
  background-color: rgba(0, 0, 0, 0.03);
  text-align: center;
  border: 1px dashed #ddd;
}

.vicp-wrap .vicp-step3 .vicp-upload .vicp-loading {
  display: block;
  padding: 15px;
  font-size: 16px;
  color: #999;
  line-height: 30px;
}

.vicp-wrap .vicp-step3 .vicp-upload .vicp-progress-wrap {
  margin-top: 12px;
  background-color: rgba(0, 0, 0, 0.08);
  border-radius: 3px;
}

.vicp-wrap .vicp-step3 .vicp-upload .vicp-progress-wrap .vicp-progress {
  position: relative;
  display: block;
  height: 5px;
  border-radius: 3px;
  background-color: #4a7;
  -webkit-box-shadow: 0 2px 6px 0 rgba(68, 170, 119, 0.3);
  box-shadow: 0 2px 6px 0 rgba(68, 170, 119, 0.3);
  -webkit-transition: width 0.15s linear;
  transition: width 0.15s linear;
  background-image: -webkit-linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.2) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.2) 50%,
    rgba(255, 255, 255, 0.2) 75%,
    transparent 75%,
    transparent
  );
  background-image: linear-gradient(
    -45deg,
    rgba(255, 255, 255, 0.2) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.2) 50%,
    rgba(255, 255, 255, 0.2) 75%,
    transparent 75%,
    transparent
  );
  background-size: 40px 40px;
  -webkit-animation: vicp_progress 0.5s linear infinite;
  animation: vicp_progress 0.5s linear infinite;
}

.vicp-wrap .vicp-step3 .vicp-upload .vicp-progress-wrap .vicp-progress::after {
  content: '';
  position: absolute;
  display: block;
  top: -3px;
  right: -3px;
  width: 9px;
  height: 9px;
  border: 1px solid rgba(245, 246, 247, 0.7);
  -webkit-box-shadow: 0 1px 4px 0 rgba(68, 170, 119, 0.7);
  box-shadow: 0 1px 4px 0 rgba(68, 170, 119, 0.7);
  border-radius: 100%;
  background-color: #4a7;
}

.vicp-wrap .vicp-step3 .vicp-upload .vicp-error,
.vicp-wrap .vicp-step3 .vicp-upload .vicp-success {
  height: 100px;
  line-height: 100px;
}

.vicp-wrap .vicp-error,
.vicp-wrap .vicp-success {
  display: block;
  font-size: 14px;
  line-height: 24px;
  height: 24px;
  color: #d10;
  text-align: center;
  vertical-align: top;
}

.vicp-wrap .vicp-success {
  color: #4a7;
}

.vicp-wrap .vicp-icon3 {
  position: relative;
  display: inline-block;
  width: 20px;
  height: 20px;
  top: 4px;
}

.vicp-wrap .vicp-icon3::after {
  position: absolute;
  top: 3px;
  left: 6px;
  width: 6px;
  height: 10px;
  border-width: 0 2px 2px 0;
  border-color: #4a7;
  border-style: solid;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
  content: '';
}

.vicp-wrap .vicp-icon2 {
  position: relative;
  display: inline-block;
  width: 20px;
  height: 20px;
  top: 4px;
}

.icon-Sc {
  width: 40px;
  height: 40px;
  color: #666;
}

.vicp-wrap .vicp-icon2::after,
.vicp-wrap .vicp-icon2::before {
  content: '';
  position: absolute;
  top: 9px;
  left: 4px;
  width: 13px;
  height: 2px;
  background-color: #d10;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

.vicp-wrap .vicp-icon2::after {
  -webkit-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  transform: rotate(-45deg);
}

.e-ripple {
  position: absolute;
  border-radius: 100%;
  background-color: rgba(0, 0, 0, 0.15);
  background-clip: padding-box;
  pointer-events: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-transform: scale(0);
  -ms-transform: scale(0);
  transform: scale(0);
  opacity: 1;
}

.e-ripple.z-active {
  opacity: 0;
  -webkit-transform: scale(2);
  -ms-transform: scale(2);
  transform: scale(2);
  -webkit-transition: opacity 1.2s ease-out, -webkit-transform 0.6s ease-out;
  transition: opacity 1.2s ease-out, -webkit-transform 0.6s ease-out;
  transition: opacity 1.2s ease-out, transform 0.6s ease-out;
  transition: opacity 1.2s ease-out, transform 0.6s ease-out,
    -webkit-transform 0.6s ease-out;
}

.tip {
  line-height: 23px;
  font-size: 13px;
  color: #4a4a4a;
  font-weight: 600;
  margin-bottom: 20px;
}
</style>
