if (process.env.NODE_ENV != 'production') {
    require('dotenv').config()
}
const app = require('../app')
const http = require('http')
const server = http.createServer(app)
const port = process.env.PORT || 3000

app.set('port', port)

server.listen(port, () => {
    console.log(`app listen on port ${port}`)
})