<template>
  <div id="pdf" style="padding:20px;">
    <div class="lable marbottom20">在线预览pdf。npm install vueshowpdf -S</div>
    <div class="lable marbottom20" style="margin-bottom:250px;">在线预览00000pdf。npm install vueshowpdf -S</div>
    <div class="lable marbottom20" style="margin-bottom:250px">在线预览pdf。npm install vueshowpdf -S</div>
    <div class="lable marbottom20" style="margin-bottom:250px">在线预览pdf。npm install vueshowpdf -S</div>
    <div class="lable marbottom20" style="margin-bottom:250px">在线预览pdf。npm install vueshowpdf -S</div>
    <div class="lable marbottom20" style="margin-bottom:80px">在线预览pdf。npm install vueshowpdf -S</div>
    <div class="lable marbottom20" style="margin-bottom:50px">在线预览pdf。npm install vueshowpdf -S</div>
    <el-button type="info" @click='pdf_look'>预览pdf</el-button>
    <table>
      <tbody>
        <tr>
          <td>  123123</td>
          <td>  123123</td>
          <td>  123123</td>
          <td>  123123</td>
          <td>  123123</td>
        </tr>
        <tr>
          <td>  123123</td>
          <td>  123123</td>
          <td>  123123</td>
          <td>  123123</td>
          <td>  123123</td>
        </tr>
        <tr>
          <td>  123123</td>
          <td>  123123</td>
          <td>  123123</td>
          <td>  123123</td>
          <td>  123123</td>
        </tr>
        <tr>
          <td>  123123</td>
          <td>  123123</td>
          <td>  123123</td>
          <td>  123123</td>
          <td>  123123</td>
        </tr>
      </tbody>
    </table>

  </div>
</template>

<script>
import JSPDF from 'jspdf'
import html2canvas from 'html2canvas'


// import html2pdf from 'html2pdf'
  export default{
    name:'pdf',
    data(){
      return{

      }
    },
    methods:{
      pdf_look(){
        html2canvas(document.getElementById('pdf')).then(function(canvas) {
            document.body.appendChild(canvas);
            var contentWidth = canvas.width;
            var contentHeight = canvas.height;
            var ctx=canvas.getContext("2d");
  // ctx.rotate(Math.PI / 180 * 20);
  // ctx.font="60px microsoft yahei";
            ctx.fillStyle = "rgba(255,255,255,1)";
            ctx.strokeText("棱镜个人报告",250,50);
            var pageData = canvas.toDataURL('image/jpeg', 1.0);
            console.log(pageData)
            //一页pdf显示html页面生成的canvas高度;
            var pageHeight = contentWidth / 592.28 * 841.89;
            //未生成pdf的html页面高度
            var leftHeight = contentHeight;
            //页面偏移
            var position = 0;
            //a4纸的尺寸[595.28,841.89]，html页面生成的canvas在pdf中图片的宽高
            var imgWidth = 595.28;
            var imgHeight = 592.28/contentWidth * contentHeight;
            var pdf = new JSPDF('', 'pt', 'a4');

            if (leftHeight < pageHeight) {
            pdf.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight );
            } else {
                while(leftHeight > 0) {
                    pdf.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight)
                    leftHeight -= pageHeight;
                    position -= 841.89;
                    //避免添加空白页
                    if(leftHeight > 0) {
                      pdf.addPage();
                    }
                }
            }
            pdf.save('个人报告.pdf');
        })




      }


    },


  }

</script>
<style>
table tr td{height: 60px;line-height: 60px;background-color: red;}
</style>
