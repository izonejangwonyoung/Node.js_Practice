const express = require('express')
const app = express()
const port = 5000
const bodyParser=require('body-parser');

const { User } = require("./models/user");

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const mongoose= require('mongoose')

mongoose.connect('mongodb+srv://2000shim:wh0015@clustermain.4889h.mongodb.net/clusterMain?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology:true, useCreateIndex:true, useFindAndModify: false

}).then(()=> console.log('mongoDB Connected........'))
.catch(err=> console.log(err))


app.get('/', ( req , res) => {
  res.send('Hello World! 정말 바뀌나 ㅋㅋ')
})


app.post('/register',(req, res)=> {

  //회원 가입 필요 정보들은 클라이언트에서 
  // 가져오면 그것들을 데이터 베이스에 넣어준다


  const user= new User(req.body)


  user.save((err, userInfo)=>{
    if (err) return res.json({success: false, err})
    return res.status(200).json({
      success: true,
    })
  })
})




app.listen(port, () => 
  console.log(`Example app listening at http://localhost:${port}`)
)