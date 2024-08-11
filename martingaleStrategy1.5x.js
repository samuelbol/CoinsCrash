// User-configurable variables
var baseBet = 1; // Base bet amount in bits
var baseMultiplier = 1.5; // Base multiplier for cashing out
var streakSecurity = 15; // Streak security factor
var sessionProfit = 50; 

// Internal variables (do not change)
var baseSatoshi = baseBet * 100; // Calculated from baseBet
var currentBet = baseSatoshi; 
var currentMultiplier = baseMultiplier;
var currentGameID = 1;
var firstGame = true;
var lossStreak = 0;
var totalLosses = 0;
var maximumBet = 999999; // Maximum bet allowed in bits

console.log('My username is: ' + engine.getUsername());  
console.log('Starting balance: ' + (engine.getBalance() / 100).toFixed(2) + ' bits'); 
var startingBalance = engine.getBalance(); 

engine.on('game_starting', function(info) {
    console.log('[Bot] Game #' + info.game_id);
    currentGameID = info.game_id;

    if (!firstGame) { 
        var profit = ((engine.getBalance() - startingBalance) / 100);
        console.log('[Stats] Session profit: ' + profit.toFixed(2) + ' bits');
        console.log('[Stats] Profit percentage: ' + (((engine.getBalance() / startingBalance) - 1) * 100).toFixed(2) + '%');
        if (profit >= sessionProfit) {
            engine.stop();
        }
    }

    if (engine.lastGamePlay() == 'LOST' && !firstGame) { 
        lossStreak++;
        totalLosses += currentBet;
        currentBet = (totalLosses / (baseMultiplier - 1)); 
    } else { 
        lossStreak = 0; // If it was a win, we reset the lossStreak
        totalLosses = 0; // Reset totalLosses on a win
        currentBet = baseSatoshi; 
        currentMultiplier = baseMultiplier;
    }
    
    console.log('[Bot] Betting ' + (currentBet / 100) + ' bits, cashing out at ' + currentMultiplier + 'x');
    firstGame = false;

    if (currentBet <= engine.getBalance()) { 
        if (currentBet > (maximumBet * 100)) { 
            console.warn('[Warn] Bet size exceeds maximum bet, lowering bet to ' + (maximumBet * 100) + ' bits');
            currentBet = maximumBet * 100; // Ensure currentBet is in bits
        }
        engine.placeBet(currentBet, Math.round(currentMultiplier * 100), false);
    } else { 
        if (engine.getBalance() < 100) {
            console.error('[Bot] Insufficient funds to do anything... stopping');
            engine.stop();
        } else {
            console.warn('[Bot] Insufficient funds to bet ' + (currentBet / 100) + ' bits.'); 
            console.warn('[Bot] Resetting to 1 bit basebet'); 
            baseBet = 1;  
            baseSatoshi = 100; 
        }
    }
});

engine.on('game_started', function(data) {
    console.log('Game Started', data);
});

engine.on('game_crash', function(data) {
    console.log('Game crashed at ', data.game_crash / 100);
});
