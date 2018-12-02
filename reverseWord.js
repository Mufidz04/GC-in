function reverseWord(Word) {
  var reverseWord = '';
  for (var i = Word.length - 1; i >= 0; i--) {
    // console.log(i, Word[i]);
    reverseWord += Word[i];
  } 
  return reverseWord
}



console.log(reverseWord('Hello World and Coders')); // sredoC dna dlroW olleH
console.log(reverseWord('John Doe')); // eoD nhoJ
console.log(reverseWord('I am a bookworm')); // mrowkoob a ma I
console.log(reverseWord('Coding is my hobby')); // ybboh ym si gnidoC
console.log(reverseWord('Super')); // repuS
