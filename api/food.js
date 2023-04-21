const router = require('express').Router();
const foodController = require('./_controller/foodController');

// insert
router.post("/", async (req, res) => {
    const result = await foodController.create(req);
    res.json(result);
    });


// list
router.get('/', async (req,res)=>{
    const result = await foodController.list(req);
    res.json(result);
})


// id : update
router.put('/:id', async (req,res)=>{
    const result = await foodController.update(req);
    res.json(result);
})

// delete
router.delete('/:id', async (req,res)=>{
    const result = await foodController.delete(req);
    res.json(result);
})

// truncate, dummy insert
router.post('/reset', async (req,res)=>{
    const result = await foodController.reset(req);
    res.json(result);
})

module.exports = router;