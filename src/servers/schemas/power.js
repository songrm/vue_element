var mongoose=require('mongoose')
var PowerSchema=new mongoose.Schema({
  id:String,
  name:{
    type:String
  },
  email:{
    unique:true,
    type:String
  },
  power:{
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
PowerSchema.pre('save',function(next){
  var user=this;
  if(this.isNew){
    this.meta.updateAt=Date.now();
  }else {
    this.meta.updateAt=Date.now();
  }
})

//创建一个静态方法，只有实例化之后 才能调用
PowerSchema.statics={
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
module.exports=PowerSchema
