
const express = require('express')
const app = express()
const path = require('path')

const Store = require('electron-store')
const store = new Store()

module.exports = function(){

    // css and js files
    app.use('/assets', express.static(__dirname +'/assets'))
    app.use('/dist', express.static(__dirname +'/app/js/dist'))

    // translation resources
    app.get('/translations/localized-content', function(req, res){
        res.sendFile(path.join(__dirname, `/translations/${store.get('s-lang')}/resources.json`))
    })
    app.get('/translations/contact-page-content', function(req, res){
        res.sendFile(path.join(__dirname, `/translations/${store.get('s-lang')}/dist/contact-page-content.html`))
    })
    app.get('/translations/step-one-content', function(req, res){
        res.sendFile(path.join(__dirname, `/translations/${store.get('s-lang')}/dist/step-one-content.html`))
    })
    app.get('/translations/step-two-content', function(req, res){
        res.sendFile(path.join(__dirname, `/translations/${store.get('s-lang')}/dist/step-two-content.html`))
    })
    app.get('/translations/step-three-content', function(req, res){
        res.sendFile(path.join(__dirname, `/translations/${store.get('s-lang')}/dist/step-three-content.html`))
    })
    app.get('/translations/step-four-content', function(req, res){
        res.sendFile(path.join(__dirname, `/translations/${store.get('s-lang')}/dist/step-four-content.html`))
    })            

    app.get('/', function(req, res) {
        if(req.query.lang){
            store.set('s-lang', req.query.lang)
        }else if(!store.get('s-lang')){
            store.set('s-lang', 'en-us')
        }
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