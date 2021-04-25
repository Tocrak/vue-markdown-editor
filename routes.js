const express = require('express');
const router = express.Router();
const Note = require('./models/note');

// ------------  
router.get('/:id', async (req, res) => {
  
    try {
        const result = await Note.findById(req.params.id);

        if (result == null) {
            res.sendStatus(404); // not found
        } else {
            res.json(result);
        }

    } catch (err) {
      res.sendStatus(400); // error
    }
  
});
  
// ------------ 
router.post('/', async (req, res) => {
  
    try {
  
        const note = new Note({});
        const result = await note.save();
  
        // if else might not be required
        if (result == null) {
            res.sendStatus(400);
        } else {
            console.log(result)
            res.json(result);
        }
  
    } catch (err) {
      res.sendStatus(400);
    }
  
});
  
// ------------ 
router.patch('/:id', async (req, res) => {
    
    try {
        
        const result = await Note.findByIdAndUpdate(req.params.id, {$set: req.body});
        
        if (result == null) {
            res.sendStatus(404);
        } else {
            res.sendStatus(200);
        }
    
    } catch (err) {
        res.sendStatus(400);
    }
  
});


module.exports = router;