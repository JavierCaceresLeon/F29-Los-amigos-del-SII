// Path: src/index.js
require('express')

app = express()
app.get('/', (req, res) => {
    res.send('Hello World!')
    }
)
// login access

app.post(/login/, (req, res) => {
    res.send('User logged in successfully')
    let username=req.body.username;
    let password=req.body.password;
    res.send(`Usernme: ${username} Pass: ${password}`)
    }
)
// object array para usuario

var ObjectArray1 = [{username:"user00",password:"password",email:"example.com",rut:"12345678-9"}]


app.listen(3000, () => {
    console.log('Server is running on port 3000')
    }
)
