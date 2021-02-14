import {useEffect, useState} from 'react';
import {useUpdate} from './useUpdate';

type RecordItem = {
  tagIds: number[]
  note: string
  category: '+' | '-'
  amount: number
  createdAt: string // ISO 8601
}

type NewRecordItem = Omit<RecordItem, 'createdAt'> // 忽略 createdAt 这个属性

const useRecords = () => {
  const [records, setRecords] = useState<RecordItem[]>([]);
  useEffect(() => {
    setRecords(JSON.parse(window.localStorage.getItem('records') || '[]'));
  }, []);
  useUpdate(() => {
    window.localStorage.setItem('records', JSON.stringify(records));
  }, [records]);

  const addRecord = (newRecord: NewRecordItem) => {
    const record = {...newRecord, createdAt: (new Date()).toISOString()};
    setRecords([...records, record]);
  };
  return {records, addRecord};
};

export {useRecords};
