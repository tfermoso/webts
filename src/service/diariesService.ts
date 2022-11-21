import diaryData from '../data/diaryEntries.json'
import { DiaryEntry, NewDiaryEntry } from '../types'
const diaries:Array<DiaryEntry>=diaryData as Array<DiaryEntry>

const getEntries = ():Array<DiaryEntry> => {
  return diaries;
};

const getById=(id: number):DiaryEntry|undefined=>{
const datos= diaries.find(d=>d.id===id)
return datos
}
/*
const addEntry = (date:string,weather:Weather,visibility:Visibility,comment:string) => {
  const newDiaryEntry={
    id:Math.max(...diaries.map(d=>d.id))+1,
    date,
    weather,
    visibility,
    comment
  }
  diaries.push(newDiaryEntry)
  return newDiaryEntry
};
*/
const addEntry = (entry:NewDiaryEntry) => {
  const newDiaryEntry={
    id:Math.max(...diaries.map(d=>d.id))+1,
    ...entry
  }
  console.log(entry)
  diaries.push(newDiaryEntry)
  return newDiaryEntry
};
export default {
  getEntries,
  addEntry,
  getById
};