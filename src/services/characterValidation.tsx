export const checkForLanguageDiacritic = (string: string): boolean => {
  const polishDiacritic = new Set("ąćęłńóśźżĄĆĘŁŃÓŚŹŻ");
  for (const characters of string) {
    if (polishDiacritic.has(characters)) {
      return true;
    }
  }
  return false;
};
