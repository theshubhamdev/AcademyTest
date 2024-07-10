const trimString = (str: string) => {
  // Step 1: Trim the string to 20 characters
  let trimmedStr = str.slice(0, 21);

  // Step 2: Check if the last character is a space
  if (trimmedStr.length === 20 && trimmedStr[19] !== " ") {
    // Step 3: Find the last space within the first 20 characters
    const lastSpaceIndex = trimmedStr.lastIndexOf(" ");
    if (lastSpaceIndex !== -1) {
      trimmedStr = trimmedStr.slice(0, lastSpaceIndex);
    }
  }

  return trimmedStr + "...";
};

export { trimString };
