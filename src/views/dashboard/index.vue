<template>
	<div class="dashboard">
		<el-row :gutter="20">
			<el-col :span="4">
				<el-button type="primary" class="pan-btn" @click="aa">components</el-button>
			</el-col>
			<el-col :span="4">
				<el-button type="success" class="pan-btn">from</el-button>
			</el-col>
			<el-col :span="4">
				<el-button type="info" class="pan-btn">table</el-button>
			</el-col>
			<el-col :span="4">
				<el-button type="warning" class="pan-btn">excel</el-button>
			</el-col>
			<el-col :span="4">
				<el-button type="danger" class="pan-btn">form</el-button>
			</el-col>
			<el-col :span="4">
				<el-button type="info" class="pan-btn">theme</el-button>
			</el-col>
		</el-row>
		<el-row :gutter="20">
			<el-col :span="14">
				<el-card class="box-card">
					<div slot="header" class="clearfix">
						<span slot="label">information</span>
					</div>
				  <div class="source">
						 <countTo :startVal='startVal' :endVal='endVal' :duration='2000'></countTo>
						<el-alert  title="Copy of successful tips" type="success" description="Text description Text description Text description Text description" show-icon></el-alert>
						<el-alert title="no close alert" type="info" description="Text description Text description Text description" :closable="false"></el-alert>
						<el-alert title="Error prompt" type="error" description="Error description Error description" show-icon></el-alert>
						<el-alert title="warning prompt" type="warning" description="warning description warning description" show-icon></el-alert>
					</div>
				</el-card>
			</el-col>

			<el-col :span="10">
				<el-card class="box-card">
					<div slot="header" class="clearfix">
						<span slot="label"> echarts</span>
					</div>
				  <div class="echarts">
						<div id="mychart" :style="{width:'450px',height:'400px'}">90</div>
					</div>

				</el-card>
			</el-col>
		</el-row>
		<el-row :gutter="20">
			<el-col :span="18">
				<htable></htable>
			</el-col>
			<el-col :span="6">
				<todo-list></todo-list>
			</el-col>
		</el-row>

		<span class="demonstration">只可选择最后一级菜单的选项</span>
  <el-cascader
    placeholder="请输入要搜索的类目"
    :options="options" change-on-select
    filterable @change="handleChange"
  ></el-cascader>

	</div>
</template>
<script type="text/javascript">
	import todoList from '@/components/TodoList/Todo'
	import htable from '@/components/table/index'
	import countTo from 'vue-count-to';

	export default{
		name:'dash',
		components:{todoList,htable,countTo},
		data(){
			return{
				startVal: 0,
        endVal: '',
				options: [
					{
          value: 'zhinan',
          label: '指南',
          children: [

						{
            value: 'shejiyuanze',
            label: '设计原则',
            children: [{
              value: 'yizhi',
              label: '一致'
            }, {
              value: 'fankui',
              label: '反馈'
            }, {
              value: 'xiaolv',
              label: '效率'
            }, {
              value: 'kekong',
              label: '可控'
            }]
          }, {
            value: 'daohang',
            label: '导航',
            children: [{
              value: 'cexiangdaohang',
              label: '侧向导航'
            }, {
              value: 'dingbudaohang',
              label: '顶部导航'
            }]
          }]
        }, {
          value: 'zujian',
          label: '组件',
          children: [{
            value: 'basic',
            label: 'Basic',
            children: [{
              value: 'layout',
              label: 'Layout 布局'
            }, {
              value: 'color',
              label: 'Color 色彩'
            }, {
              value: 'typography',
              label: 'Typography 字体'
            }, {
              value: 'icon',
              label: 'Icon 图标'
            }, {
              value: 'button',
              label: 'Button 按钮'
            }]
          }, {
            value: 'form',
            label: 'Form',
            children: [{
              value: 'radio',
              label: 'Radio 单选框'
            }, {
              value: 'checkbox',
              label: 'Checkbox 多选框'
            }, {
              value: 'input',
              label: 'Input 输入框'
            }, {
              value: 'input-number',
              label: 'InputNumber 计数器'
            }, {
              value: 'select',
              label: 'Select 选择器'
            }, {
              value: 'cascader',
              label: 'Cascader 级联选择器'
            }, {
              value: 'switch',
              label: 'Switch 开关'
            }, {
              value: 'slider',
              label: 'Slider 滑块'
            }, {
              value: 'time-picker',
              label: 'TimePicker 时间选择器'
            }, {
              value: 'date-picker',
              label: 'DatePicker 日期选择器'
            }, {
              value: 'datetime-picker',
              label: 'DateTimePicker 日期时间选择器'
            }, {
              value: 'upload',
              label: 'Upload 上传'
            }, {
              value: 'rate',
              label: 'Rate 评分'
            }, {
              value: 'form',
              label: 'Form 表单'
            }]
          }, {
            value: 'data',
            label: 'Data',
            children: [{
              value: 'table',
              label: 'Table 表格'
            }, {
              value: 'tag',
              label: 'Tag 标签'
            }, {
              value: 'progress',
              label: 'Progress 进度条'
            }, {
              value: 'tree',
              label: 'Tree 树形控件'
            }, {
              value: 'pagination',
              label: 'Pagination 分页'
            }, {
              value: 'badge',
              label: 'Badge 标记'
            }]
          }, {
            value: 'notice',
            label: 'Notice',
            children: [{
              value: 'alert',
              label: 'Alert 警告'
            }, {
              value: 'loading',
              label: 'Loading 加载'
            }, {
              value: 'message',
              label: 'Message 消息提示'
            }, {
              value: 'message-box',
              label: 'MessageBox 弹框'
            }, {
              value: 'notification',
              label: 'Notification 通知'
            }]
          }, {
            value: 'navigation',
            label: 'Navigation',
            children: [{
              value: 'menu',
              label: 'NavMenu 导航菜单'
            }, {
              value: 'tabs',
              label: 'Tabs 标签页'
            }, {
              value: 'breadcrumb',
              label: 'Breadcrumb 面包屑'
            }, {
              value: 'dropdown',
              label: 'Dropdown 下拉菜单'
            }, {
              value: 'steps',
              label: 'Steps 步骤条'
            }]
          }, {
            value: 'others',
            label: 'Others',
            children: [{
              value: 'dialog',
              label: 'Dialog 对话框'
            }, {
              value: 'tooltip',
              label: 'Tooltip 文字提示'
            }, {
              value: 'popover',
              label: 'Popover 弹出框'
            }, {
              value: 'card',
              label: 'Card 卡片'
            }, {
              value: 'carousel',
              label: 'Carousel 走马灯'
            }, {
              value: 'collapse',
              label: 'Collapse 折叠面板'
            }]
          }]
        }, {
          value: 'ziyuan',
          label: '资源',
          children: [{
            value: 'axure',
            label: 'Axure Components'
          }, {
            value: 'sketch',
            label: 'Sketch Templates'
          }, {
            value: 'jiaohu',
            label: '组件交互文档'
          }]
        }]
			}

		},
		mounted(){
			var echarts = require('echarts/lib/echarts');
			// 引入柱状图
			require('echarts/lib/chart/bar');
			require('echarts/lib/chart/line')
			// 引入提示框和标题组件
			require('echarts/lib/component/tooltip');
			require('echarts/lib/component/title');
			require('echarts/lib/component/legend')
			// 基于准备好的dom，初始化echarts实例
			var myChart = echarts.init(document.getElementById('mychart'));

			// 绘制图表
			myChart.setOption({
			    tooltip: {trigger: 'axis'},
					legend: {
        data:['销量','销量2']
    },
			    xAxis: {
			        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子','衬衫01', '羊毛衫01', '雪纺衫01', '裤子01', '高跟鞋01', '袜子01']
			    },
			    yAxis: {},

			    series: [{
			        lable: '销量',
			        type: 'line',
			        data: [5, 25, 36, 10, 10, 20,5, 25, 36, 10, 10, 20]
			    },{
			        lable: '销量2',
			        type: 'line',
			        data: [5, 25, 36, 10, 10, 20,5, 25, 36, 10, 10, 20]
			    }]
			});
		},
		methods:{
			aa(){
				this.endVal=123
			},
			handleChange(value) {
        console.log(value);
      }
		},
		created(){
			this.options.unshift({value: '',label: '全部',})
		}

	}

</script>
<style type="text/css">
.pan-btn {font-size: 14px;color: #fff;padding: 14px 36px;border-radius: 4px;border: none;outline: none;margin-right: 25px;transition: all .6s ease;position: relative; display: inline-block;border: 0px;}
.source{height: 400px;overflow: auto;}
.source .el-alert{margin-top: 20px;}
.dashboard .el-row{margin-bottom: 20px;}
</style>
