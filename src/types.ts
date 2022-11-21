//export type Weather = 'sunny' | 'rainy' | 'cloudy' | 'windy' | 'stormy'
export enum Weather {
    Sunny = 'sunny',
    Rainy = 'rainy',
    Cloudy = 'cloudy',
    Stormy = 'stormy',
    Windy = 'windy',
  }
export type Visibility = 'great' | 'good' | 'ok' | 'poor'

export interface DiaryEntry{
    id:number,
    date:string,
    weather:Weather,
    visibility:Visibility,
    comment:string
}
export type NewDiaryEntry=Omit<DiaryEntry,'id'>

//export type NonSensitiveInfoDiaryEntry = Pick<DiaryEntry, 'id'|'date'|'weather'|'visibility'>
export type NonSensitiveInfoDiaryEntry = Omit<DiaryEntry,'comment'>