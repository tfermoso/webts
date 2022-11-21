import { NewDiaryEntry, Weather } from '../types';

const toNewDiaryEntry = (object:any): NewDiaryEntry => {
  const comment=parseComment(object.comment)
  const date=parseDate(object.date)
  const weather=parseWeather(object.weather)
  const newEntry: NewDiaryEntry = {
     date,
     weather,
     "visibility":object.visibility,
     comment
  }

  return newEntry;
}

const parseComment=(data:any):string=>{
  if(!data || isString(data)){
    throw new Error('Incorrect or missing data '+data)
  }
  return data
}
const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date));
};

const parseDate = (date: any): string => {
  if (!date || !isString(date) || !isDate(date)) {
      throw new Error('Incorrect or missing date: ' + date);
  }
  return date;
};

const isString = (text: any): text is string => {
  return typeof text === 'string' || text instanceof String;
};

const isWeather = (param: any): param is Weather => {
  return Object.values(Weather).includes(param);
};
const parseWeather = (weather: any): Weather => {
  if (!weather || !isWeather(weather)) {
      throw new Error('Incorrect or missing weather: ' + weather);
  }
  return weather;
};

export default toNewDiaryEntry;