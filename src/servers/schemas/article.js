
var mongoose=require('mongoose')
var ArticleSchema=new mongoose.Schema({
  _id:String,
  _name:String,
  _context:String,
  _author:String,
  _date:Date,
  _type:String,
  _lable:String,
  meta:{
		createAt:{
			type:Date,
			default:Date.now()
		},
		updateAt:{
			type:Date,
			default:Date.now()
		}
	}
})
//每次存储都会调用这个方法
ArticleSchema.pre('save',function(next){
  if(this.isNew){
		this.meta.createAt=this.meta.updateAt=Date.now();
	}else{
		this.meta.updateAt=Date.now();
	}
	next() //存储流程 走下去
})

//创建一个静态方法，只有实例化之后 才能调用
ArticleSchema.statics={
  fetch:function(cd){
    return this
        .find({})
        .sort()
        .exec(cd)
  },
  select:function(id,cd){
    return this
      .findOne({"_id":id}) //查找
      .exec(cd) //执行回调方法
  }
}
module.exports=ArticleSchema
