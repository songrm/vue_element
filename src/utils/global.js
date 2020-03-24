/**
 *
 * @param {图片} src
 * 获得上传图片的宽度
 */
export function getImgWidth(src) {
  return new Promise(resolve => {
    const img = new Image()
    img.src = src
    if (img.complete) {
      resolve(getImageRatio(img.width))
    } else {
      img.onload = e => {
        resolve(getImageRatio(img.width))
      }
    }
  })

  function getImageRatio(width) {
    const ratio = width / 750
    return ratio * 375
  }
}

/**
 * 拼接
 * @param {*} paramObj
 */
export function formateObjToParamStr(paramObj) {
  const sdata = []
  for (const attr in paramObj) {
    if (paramObj[attr] !== undefined) {
      sdata.push(`${attr}=${paramObj[attr]}`)
    }
  }
  return sdata.join('&')
}

// 排序 asc升 desc降
export function sortData(data, key, direction) {
  return data.sort(function(a, b) {
    // 三目运算符：也可以自该为if语句
    return direction === 'asc' ? a[key] - b[key] : b[key] - a[key]
  })
}
