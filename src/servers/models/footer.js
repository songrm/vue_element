var mongoose=require('mongoose')
var footerSchema=require('../schemas/footer')
var Footer=mongoose.model('Footer',footerSchema)
module.exports=Footer
