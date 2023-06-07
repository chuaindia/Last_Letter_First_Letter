module.exports = function findLongestChain(words) {
  const usedWords = new Set();
  let longestChain = [];

  function exploreChain(currentWord, chain) {
    if (chain.length > longestChain.length) {
      longestChain = chain;
    }

    for (let i = 0; i < words.length; i++) {
      const nextWord = words[i];
      if (!usedWords.has(nextWord) && nextWord[0] === currentWord[currentWord.length - 1]) {
        usedWords.add(nextWord);
        exploreChain(nextWord, [...chain, nextWord]);
        usedWords.delete(nextWord);
      }
    }
  }

  for (let i = 0; i < words.length; i++) {
    const currentWord = words[i];
    usedWords.add(currentWord);
    exploreChain(currentWord, [currentWord]);
    usedWords.delete(currentWord);
  }

  return longestChain;
}
