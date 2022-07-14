const router = require("express").Router()


let adjective;
let noun;
let verb;



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

module.exports = router;