type RecordItem = {
    tags: string[];
    notes: string;
    types: string;
    amount: number; // 数据类型 object | string
    createdAt?: Date;  // 类 / 构造函数
  }
const localStorageKeyName = 'recordList';
const recordListModel = {
  clone(data: RecordItem[] | RecordItem) {
    return JSON.parse(JSON.stringify(data));
  },
  fetch() {
    return JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]') as RecordItem[];
  },
  save(data: RecordItem[]) {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(data));
  }
};
export default recordListModel;