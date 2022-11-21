import express from 'express';
import diariesService from '../service/diariesService';
import toNewDiaryEntry from '../utils/utils';
const router = express.Router();

router.get('/', (_req, res) => {
  diariesService.getEntries()
  res.json(diariesService.getEntries());
})
router.get('/:id', (req, res) => {
  console.log(+req.params.id)
  res.json(diariesService.getById(+req.params.id));
})

router.post('/', (req, res) => {
  //const {date,weather,visibility,comment} =req.body;
  //const newEntry=req.body;
  const newEntry=toNewDiaryEntry(req.body)
  const newDiaryEntry=diariesService.addEntry(
    newEntry
  );
  //console.log(newDiaryEntry)
  res.json(newDiaryEntry);
})

export default router;