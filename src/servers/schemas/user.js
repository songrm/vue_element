var mongoose=require('mongoose')
var UserSchema=new mongoose.Schema({
  id:String,
  name:{
    unique:true,
    type:String
  },
  password:{
    type:String
  },
  role:{
    // default:20,
    ///暂定：1～20 普通用户 21～35 管理员 36～50 超级管理员
    type:String
  },
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
UserSchema.pre('save',function(next){
  var user=this;
  if(this.isNew){
		this.meta.createAt=this.meta.updateAt=Date.now();
	}else{
		this.meta.updateAt=Date.now();
	}
	next() //存储流程 走下去
})

//创建一个静态方法，只有实例化之后 才能调用
UserSchema.statics={
  fetch:function(cd){
    return this
        .find({})
        .sort()
        .exec(cd)
  },
  select:function(name,cd){
    return this
        .find({'name':name})
        .sort()
        .exec(cd)
  }
}
module.exports=UserSchema
