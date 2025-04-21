import React from 'react';

function formatTitle(title) {
  const lowercaseWords = ['if', 'of', 'the', 'and'];
  const uppercaseWords = ['(gerd)'];

  return title
    .split(' ')
    .map((word, index, arr) => {
      const lower = word.toLowerCase();

      // Always uppercase specific words (e.g., GERD)
      if (uppercaseWords.includes(lower)) {
        return lower.toUpperCase();
      }

      // Lowercase for small words unless at the beginning or end
      if (
        lowercaseWords.includes(lower) &&
        index !== 0 &&
        index !== arr.length - 1
      ) {
        return lower;
      }

      // Title case for everything else
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(' ');
}

function H1({ title, className }) {
  return (
    <h1 className={`w-full ${className ? className : 'font-medium text-[#D84598] text-center mt-8 text-5xl my-12'}`}>
      {formatTitle(title)}
    </h1>
  );
}

export default H1;
