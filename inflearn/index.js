const express = require('express')
const app = express()
const port = 5000
const bodyParser=require('body-parser');
const cookieParser = require('cookie-parser');

const config=require('./config/key')
const { User } = require("./models/user");

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());

const mongoose= require('mongoose');


mongoose.connect(config.mongoURI, {
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






app.post('./login',(req,res)=> {


  User.findOne({email: req.body.email}, (err, user)=> {
    if(!user){
      return res.json({
        loginSuccess: false,
        message:"제공된 이메일에 해당하는 유저가 없습니다."

      })
    }

    user.comparePassword(req.body.password , (err,isMatch)=>{
      if(!isMatch)
      return res.json({loginSuccessL: false,message:"비밀번호가 틀렸습니다."})


      user.generateToken((err,user)=>{

        if(err) return res.status(400).send(err);

        //토큰을 저장한다. 어디에? 쿠키? local storage?
        res.cookie("x_auth",user.token)
        .status(200)
        .json({loginSuccess: true, userId:user._id})


      })


    })
  })


})







app.listen(port, () => 
  console.log(`Example app listening at http://localhost:${port}`)
)