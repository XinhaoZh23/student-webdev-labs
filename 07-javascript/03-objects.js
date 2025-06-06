let result = {};

const insertItem = (key, value) => {
  // 插入属性
  result[key] = value;
  return key;
};

const deleteItem = (key) => {
  // 删除属性
  delete result[key];
  return key;
};

const lookupItem = (key) => {
  // 查找属性
  return result.hasOwnProperty(key) ? result[key] : 'Item does not exist';
};

const printItems = () => {
  // 返回所有key，用逗号分隔
  return Object.keys(result).join(', ');
};

insertItem('hello', 'world');
insertItem('lorem', 'ipsum');
insertItem('sit', 'amet');
console.log(printItems());
// expected: 'hello, lorem, sit' (order may be different)
console.log(lookupItem('lorem'));
// expected: 'ipsum'

deleteItem('lorem');
console.log(printItems());
// expected: 'hello, sit' (order may be different)
console.log(lookupItem('lorem'));
// expected: 'Item does not exist'
