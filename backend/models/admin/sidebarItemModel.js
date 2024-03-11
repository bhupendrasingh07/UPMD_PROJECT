const mongoose=require('mongoose')


const subtopicSchema=new mongoose.Schema({
    title:{type:String,required:true},
    slug:{type:String,required:true},
    icon:{type:String}
})
const sidebarItemSchema=new mongoose.Schema({
    heading:{type:String,required:true},
    subtopics:{type:[subtopicSchema],required:true}
}
)

module.exports=mongoose.model('SidebarItem',sidebarItemSchema)