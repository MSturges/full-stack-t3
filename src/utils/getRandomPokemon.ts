const MAX_DEX_ID = 1008;

export const getRandomPokemon: (notThisOne?: number) => number = (
  notThisOne
) => {
  const randomNumber = Math.floor(Math.random() * MAX_DEX_ID + 1);

  if (randomNumber !== notThisOne) {
    return randomNumber;
  }
  return getRandomPokemon(notThisOne);
};

export const getOptionsForVote = () => {
  const firstId = getRandomPokemon();
  const secondId = getRandomPokemon(firstId);

  return [firstId, secondId];
};
