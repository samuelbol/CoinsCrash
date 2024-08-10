var baseBet = 1; 
var baseMultiplier = 1.5; 
var streakSecurity = 4; 

var baseSatoshi = baseBet * 100; // Calculated
var currentBet = baseSatoshi; 
var currentMultiplier = baseMultiplier;
var currentGameID = 1;
var firstGame = true;
var lossStreak = 0;
var totalLosses = 0; 


console.log('====== Beginning of Script ======'); 
console.log('My username is: ' + engine.getUsername());  
console.log('Starting balance: ' + (engine.getBalance() / 100).toFixed(2) + ' bits'); 
var startingBalance = engine.getBalance(); 

engine.on('game_starting', function(info) {
    console.log('====== New Game ======');
    console.log('[Bot] Game #' + info.game_id);
    currentGameID = info.game_id;

    if (!firstGame) { 
        console.log('[Stats] Session profit: ' + ((engine.getBalance() - startingBalance) / 100).toFixed(2) + ' bits');
        console.log('[Stats] Profit percentage: ' + (((engine.getBalance() / startingBalance) - 1) * 100).toFixed(2) + '%');
    }

    if (engine.lastGamePlay() == 'LOST' && !firstGame) { 
        lossStreak++;
        totalLosses += currentBet;
        currentBet = (totalLosses / (baseMultiplier - 1)); 

    } else { 
        lossStreak = 0;
        totalLosses = 0; // Reset totalLosses on a win
        currentBet = baseSatoshi; 
        currentMultiplier = baseMultiplier;
    }
    
    console.log('[Bot] Betting ' + (currentBet / 100) + ' bits, cashing out at ' + currentMultiplier + 'x');
    firstGame = false;

    if (lossStreak < streakSecurity) {
        engine.placeBet(currentBet, currentMultiplier * 100, false);
    } 
    else {
        engine.stop() 
        console.warn('[Bot] Loss Streak is more than 3. Stop betting.')
    }
});

engine.on('game_started', function(data) {
    console.log('Game Started', data);
});

engine.on('game_crash', function(data) {
    console.log('Game crashed at ', data.game_crash / 100);
});

