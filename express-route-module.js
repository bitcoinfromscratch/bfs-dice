
const express = require('express')
const app = express()
const path = require('path')
const store = require('store')

module.exports = function(){

    // css and js files
    app.use('/assets', express.static(__dirname +'/assets'))
    app.use('/dist', express.static(__dirname +'/app/js/dist'))

    // translated content
    app.use('/translations/step-one-content', express.static(__dirname +`/translations/${store.get('s-lang')}/dist/step-one-content.html`))
    app.use('/translations/step-two-content', express.static(__dirname +`/translations/${store.get('s-lang')}/dist/step-two-content.html`))
    app.use('/translations/step-three-content', express.static(__dirname +`/translations/${store.get('s-lang')}/dist/step-three-content.html`))
    app.use('/translations/step-four-content', express.static(__dirname +`/translations/${store.get('s-lang')}/dist/step-four-content.html`))
    app.use('/translations/util-check-hash-content', express.static(__dirname +`/translations/${store.get('s-lang')}/dist/util-check_hash-content.html`))
    app.use('/translations/onetime-softwarewallet-content', express.static(__dirname +`/translations/${store.get('s-lang')}/dist/onetime-softwarewallet-content.html`))
    app.use('/translations/contact-page-content', express.static(__dirname +`/translations/${store.get('s-lang')}/dist/contact-page-content.html`))
    app.use('/translations/localized-content', express.static(__dirname + `/translations/${store.get('s-lang')}/resources.json`))

    app.get('/', function(req, res) {
        res.sendFile(path.join(__dirname, 'app/main.html'))
    })

    app.get('/step-one', function(req, res) {
        res.sendFile(path.join(__dirname, 'app/step-one.html'))
    })

    app.get('/step-two', function(req, res) {
        res.sendFile(path.join(__dirname, 'app/step-two.html'))
    })
    
    app.get('/step-three', function(req, res) {
        res.sendFile(path.join(__dirname, 'app/step-three.html'))
    })

    app.get('/step-four', function(req, res) {
        res.sendFile(path.join(__dirname, 'app/step-four.html'))
    })    
    
    app.get('/util-seed-gen', function(req, res) {
        res.sendFile(path.join(__dirname, 'app/util-seed_gen.html'))
    })

    app.get('/util-check-hash', function(req, res) {
        res.sendFile(path.join(__dirname, 'app/util-check_hash.html'))
    })

    app.get('/contact-page', function(req, res) {
        res.sendFile(path.join(__dirname, 'app/contact-page.html'))
    })

    app.get('/onetime-softwarewallet', function(req, res) {
        res.sendFile(path.join(__dirname, 'app/onetime-softwarewallet.html'))
    })

    app.get('/version', function(req, res) {
        res.send(store.get('version-number'))
    })

    app.listen(3000, function () {
        console.log('bfs-gui has been started')
    })
}