const router = require('express').Router();
const exerciseController = require('./_controller/bookController');

// insert
router.post("/", async (req, res) => {
    const result = await bookController.create(req);
    res.json(result);
    });


// list
router.get('/', async (req,res)=>{
    const result = await bookController.list(req);
    res.json(result);
})


// id : update
router.put('/:id', async (req,res)=>{
    const result = await bookController.update(req);
    res.json(result);
})

// delete
router.delete('/:id', async (req,res)=>{
    const result = await bookController.delete(req);
    res.json(result);
})

// truncate, dummy insert
router.post('/reset', async (req,res)=>{
    const result = await bookController.reset(req);
    res.json(result);
})

module.exports = router;