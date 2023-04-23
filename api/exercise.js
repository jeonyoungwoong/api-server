const router = require('express').Router();
const exerciseController = require('./_controller/exerciseController');
const exercise = require('./_controller/exerciseController');

// insert
router.post("/", async (req, res) => {
    const result = await exerciseController.create(req);
    res.json(result);
    });


// list
router.get('/', async (req,res)=>{
    const result = await exerciseController.list(req);
    res.json(result);
})


// id : update
router.put('/:id', async (req,res)=>{
    const result = await exerciseController.update(req);
    res.json(result);
})

// delete
router.delete('/:id', async (req,res)=>{
    const result = await exerciseController.delete(req);
    res.json(result);
})

// truncate, dummy insert
router.post('/reset', async (req,res)=>{
    const result = await exerciseController.reset(req);
    res.json(result);
})

module.exports = router;