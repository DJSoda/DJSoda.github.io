//mongoose模块引入
var db = require('mongoose');

//链接数据库 mongodb协议，localhost 主机ip，first_db 数据库名称
db.connect('mongodb://localhost/Ramv');

//备忘录内容
var pchongs = db.model('pchongs',{
    title: {
        type: String,
        default: ""
    },
    img: {
        type: String,
        default: ""
    },
    name: {
        type: Date,
        default:Date.now
    },
    url:{
      type:String,
        default:''
    }
});


//创建一个文件夹数据
// var noteFolder = new NoteFolder({name:"我的备忘录"})
// noteFolder.save((err)=>{
// 	if(err){
// 		console.log(err);
// 	}
// 	else{
// 		//创建一条文件数据 指定所属文件夹的id为创建的文件夹id
// 		var note = new Note({folder:noteFolder._id,content:'这是一个测试内容'})
// 		note.save(err=>{
// 			if(err){
// 				console.log(err);
// 			}
// 			else{
// 				console.log(note);
// 			}
// 		})
// 	}
// })
//模块导出
module.exports = {
    pchongs:pchongs
}