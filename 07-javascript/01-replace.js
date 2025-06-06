const replaceItems = (input) => {
  // 使用正则表达式全局且不区分大小写替换
  return input
    .replace(/gold/gi, 'shiny')
    .replace(/wander/gi, 'roam');
};

console.log(replaceItems('All that is gold does not glitter'));
// expected: 'All that is shiny does not glitter'
console.log(replaceItems('Wisdom is better than silver or GOLD.'));
// expected: 'Wisdom is better than silver or shiny.'
console.log(replaceItems('Not all those who Wander are lost'));
// expected: 'Not all those who roam are lost'
