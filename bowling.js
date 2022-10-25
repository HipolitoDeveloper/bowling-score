const spare = "/";
const strike = "x";

const input = "165/251/X2/71XX1/7";

function calculateScore(input) {
  const throwScore = input.split("");
  let gameScore = 0;
  throwScore.forEach((score, index) => {
    const hasNextRound = index + 1 !== throwScore.length || index + 2 !== throwScore.length

    const sc = handleScoreType(score, index, throwScore, hasNextRound);
    console.log(throwScore[index + 1])

    gameScore += sc;
  });

  return gameScore;
}

function handleScoreType(score, index, throwScore, hasNextRound) {

  switch (score) {
    case "/":
      const nextRoundScore = hasNextRound && handleScoreWithoutBonus(throwScore[index + 1], throwScore, index) === 0 ?handleScoreType(throwScore[index + 1], index + 1, throwScore, hasNextRound) : 0
      return (10 - Number(throwScore[index - 1])) + nextRoundScore
    case "X":
      const nextRoundScor = hasNextRound && handleScoreWithoutBonus(throwScore[index + 1], throwScore, index) === 0 ? handleScoreType(throwScore[index + 1], index + 1, throwScore, hasNextRound) : 0
      const nextSecondRoundScore = hasNextRound && handleScoreWithoutBonus(throwScore[index + 2], throwScore, index +1) === 0 ? handleScoreType(throwScore[index + 2], index + 2, throwScore, hasNextRound)  : 0

      return 10 + nextRoundScor  + nextSecondRoundScore;
    default:
      return Number(score);
  }
}

function handleScoreWithoutBonus(score, throwScore, index) {
  switch (score) {
    case "/":
      return (10 - Number(throwScore[index]))
    case "X":
      return 10
    default:
      return 0
  }
}


console.log(calculateScore(input));
