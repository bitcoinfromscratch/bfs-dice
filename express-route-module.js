
const express = require('express')
const app = express()
const path = require('path')

module.exports = function(){

    // css and js files
    app.use('/assets', express.static(__dirname +'/assets'))
    app.use('/dist', express.static(__dirname +'/app/js/dist'))

    app.get('/', function(req, res) {
        res.sendFile(path.join(__dirname, 'app/util-seed_gen.html'))
    })

    app.listen(3000, function () {
        console.log('bfs-gui has been started')
    })
}
