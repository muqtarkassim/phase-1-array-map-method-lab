const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

/*const titleCased = (array) => {
  const mapedaray=array.map((item)=>item.toTitleCased())
  return mapedaray
}
console.log(titleCased(tutorials))*/

const titleCased = () => {
  const array=[...tutorials]
  const titleCasedArray = array.map((item) => {
   let words = item.split(' ');
    const titleCasedWords = words.map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
    return titleCasedWords.join(' ');
  });
  return titleCasedArray;
};

console.log(titleCased());






