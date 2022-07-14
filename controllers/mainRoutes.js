const router = require("express").Router()


let adjective;
let noun;
let verb;
let noun2;
let adjective2;



router.get("/", (req, res) => {
    res.sendFile('public/index.html', { root: process.cwd() })
    // console.log("Landing page yo?")
})

router.get("/first-word", (req, res) => {
    res.sendFile('public/first-word.html', { root: process.cwd() })
})

router.post("/second-word", (req, res) => {
    // console.log("Post hit")
    // console.log(req.body)
    res.sendFile('public/second-word.html', { root: process.cwd() })
    adjective = req.body.adjective
    // console.log(adjective)
})

router.post("/third-word", (req, res) => {
    res.sendFile('public/third-word.html', { root: process.cwd() })
    noun = req.body.noun
})

router.post("/fourth-word", (req, res) => {
    res.sendFile('public/fourth-word.html', { root: process.cwd() })
    verb = req.body.verb
})

router.post("/fifth-word", (req, res) => {
    res.sendFile('public/fifth-word.html', { root: process.cwd() })
    noun2 = req.body.noun2
})

router.post("/final-submit", (req, res) => {
    adjective2 = req.body.adjective2



    res.redirect("/story")
})

router.get("/story", (req, res) => {
    res.send(`<h5>The ${adjective} ${adjective2} ${noun} ${verb} over the ${noun2}</h5>`)
})

module.exports = router;