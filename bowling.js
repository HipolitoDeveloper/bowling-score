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

    //gameScore += handleScoreType(score, index, throwScore, hasNextRound);
  });

  return gameScore;
}

function handleScoreType(score, index, throwScore, hasNextRound) {

  switch (score) {
    case "/":
      const nextRoundScore = hasNextRound ? handleScoreType(throwScore[index + 1], index, throwScore, hasNextRound) : 0
      return (10 - Number(throwScore[index - 1])) + nextRoundScore
    case "X":
      const nextRoundScor = hasNextRound ? handleScoreType(throwScore[index + 1], index, throwScore, hasNextRound) : 0
      const nextSecondRoundScore = hasNextRound ? handleScoreType(throwScore[index + 2], index, throwScore, hasNextRound)  : 0

      return 10 + nextRoundScor + nextSecondRoundScore;
    default:
      return Number(score);
  }
}


console.log(calculateScore(input));
