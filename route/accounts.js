const router=require('express').Router();
const db=require('./db');

router.get('/',db.get);
router.get('/create',db.insert);
router.get('/update/:id',db.put);
router.get('/delete/:id',db.delete);
router.post('/create',db.insert);
router.post('/update/:id',db.put);
router.post('/delete/:id',db.delete);


module.exports=router;


