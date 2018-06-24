const plays = ['rock', 'paper', 'scissors'];
let wins = 0, losses = 0;

function displayResults( userPlay, computerPlay, result ) {
  const summaryString = `You chose ${userPlay}. Computer chose ${computerPlay}. That's a ${result}${result === 'tie' ? '!' : ' for you!'}`;

  document.getElementById('summary').innerText = summaryString;
  if (result === 'win') {
    wins++;
  }
  if (result === 'loss') {
    losses++;
  }
}

function playRound( userPlay ) {
  const computerPlay = plays[Math.floor(Math.random() * plays.length)];
  let result = 'loss';
  if ( userPlay === computerPlay ) {
    result = tie;
  } else if ( userPlay === 'rock' ) {
    result = ( computerPlay === 'scissors' ? 'win' : 'loss' );
  } else if ( userPlay === 'paper' ) {
    result = ( computerPlay === 'rock' ? 'win' : 'loss' );
  } else {
    result = ( computerPlay === 'paper' ? 'win' : 'loss' );
  }
  displayResults( userPlay, computerPlay, result );
}

function bindClick( play ) {
  return function() {
    playRound( play );
  }
}

let buttons = plays.map( play =>
  document.getElementById( play ));

buttons.forEach( button => {
  button.addEventListener( 'click', bindClick( button.id ))
});

// const plays = ['rock', 'paper', 'scissors'];
// let wins = 0, losses = 0;
//
// function displayResults( userPlay, computerPlay, result ) {
//   const summaryString = `You chose ${userPlay}. Computer chose ${computerPlay}. That's a ${result}${ result === 'tie' ? '!' : 'for you!'}`;
//   document.getElementById('summary').innerText = summaryString;
//   if ( result === 'win' ) {
//     wins++
//   }
//   if ( result === 'loss' ) {
//     losses++
//   }
//   document.getElementById('score').innerText = `${wins} wins, ${losses} losses`
// }
//
// function playRound( userPlay ) {
//   console.log(userPlay);
//   const computerPlay = plays[Math.floor(Math.random() * plays.length)];
//   let result = 'loss';
//   if ( userPlay === computerPlay ) {
//     result = 'tie';
//   } else if ( userPlay === 'rock' ) {
//     result = ( computerPlay === 'scissors' ? 'win' : 'loss' )
//   } else if ( userPlay === 'paper' ) {
//     result = ( computerPlay === 'rock' ? 'win' : 'loss' )
//   } else {
//     result = ( computerPlay === 'paper' ? 'win' : 'loss' )
//   }
//   displayResults( userPlay, computerPlay, result )
// }
//
// // Fast & elegant
// // const u = plays.indexOf(userPlay);
// // const c = plays.indexOf(computerPlay);
// // const results['tie', 'win', 'loss'];
// // result = results[(u - c + 3) % 3];
//
// function bindClick(play) {
//   return function() {
//     playRound(play);
//   }
// }
//
// let buttons = plays.map(play => document.getElementById(play));
//
// buttons.forEach(button => {
//   button.addEventListener('click', bindClick(button.id))
// });
