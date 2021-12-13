// FIXME: not yet fixed
// const checker = { score: [] };
// calc.forEach((score, i) => {
//   console.warn(score, i);
//   // Analyze the object / find the existing score
//   console.info(checker, score);
//   const existingScoreIndex = checker.score.findIndex(
//     (score) => score.score === score
//   );
//   console.log(existingScoreIndex);
//   const existingScore = checker.score[existingScoreIndex];
//   console.log(existingScore);
//   let updatedScore;
//   // Add new score type / add quantity
//   if (existingScore) {
//     updatedScore = { ...existingScore };
//     updatedScore.qty = updatedScore.qty + 1;
//     checker.score = [...checker];
//     checker.score[existingScoreIndex] = updatedScore;
//     console.log("entered the exsisted score", updatedScore);
//   } else {
//     updatedScore = { score: score, qty: 1 };
//     checker.score = [...checker.score, updatedScore];
//     console.log("entered the new score", updatedScore);
//   }
//   console.log(checker);
// });

// switch (props.text) {
//   // System13 error vvv
//   case "err0":
//     modalH = "Odd amount of players";
//     modalP = "For system13 to randomize the team players needs to be even";
//     modalBtn = "Try again?";
//     break;
//   case "err1":
//     modalH = "Sum of tiers are odd";
//     modalP = "This team is an impossible team , please try a new team";
//     modalBtn = "Try again?";
//     break;
//   case "err2":
//     modalH = "These 2 players are not a match";
//     modalP = "This team is an impossible team , please try a new team";
//     modalBtn = "Try again?";
//     break;
//   case "err3":
//     modalH = "Player doesn't exist!";
//     modalP =
//       "Seems like you misspelled or that player isn't registered in the database or you probably forgot to login";
//     modalBtn = "Try again?";
//     break;
//   case "err4":
//     modalH = "Odd amount of tiers";
//     modalP = "Apparently this team cant be randomized";
//     modalBtn = "Try again?";
//     break;
//   // Server side errors vvv
//   case "500":
//     modalH = "Internal server error";
//     modalP =
//       "The server returned an error code of 500. Please try again in a few seconds";
//     break;
//   case "521":
//     modalH = "Database seems to be down";
//     modalP =
//       "The server didn't respond at all. Please come back later or try refreshing";
//     break;
//   case "503":
//     modalH = "Database down for maintenance";
//     modalP =
//       "The server is currently unavailable due to temporary overload or server maintenance";
//     break;
//   // Reminder modal
//   default:
//     modalH = "Reminder";
//     modalP =
//       "This program isn't perfect, this program might lag or worse crash your computer.";
//     modalBtn = "I Understand all of the possible consequence";
//     break;
// }
