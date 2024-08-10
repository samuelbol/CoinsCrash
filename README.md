# CoinsCrash
A custom script for CoinsCrash, an online multiplayer bitcoin gambling game where an increasing curve can crash at any moment. This project implements a Martingale autobet strategy within a sandbox environment, allowing users to automate their bets and manage risk effectively. 
Ideal for those looking to experiment with algorithmic betting strategies in a controlled setting.

## Usage

1. **Login** or **Create a new account** on [CoinsCrash](https://CoinsCrash.com/register/Engineboy17).
2. Navigate to the **CoinsCrash game**.
3. Click on **AUTO**, then select **AutoBet/Custom**.
4. **Copy the SCRIPT** from the following link: [GitHub Script](https://github.com/samuelbol/CoinsCrash/blob/main/martingaleStrategy.js).
5. **Paste the SCRIPT** into the **Custom Script** box.
6. Click **Run**.

```diff
> Important: To ensure you can sustain and recover from potential losses,
> it's crucial to start betting with a bankroll of at least 1,000 bits when your initial bet is set at 1 bit.
> This bankroll size is designed to cover up to 8 consecutive losses,
> allowing you to maintain your strategy and minimize the risk of depleting your funds prematurely.
> Betting with a smaller bankroll may significantly increase the likelihood of loss, especially during extended losing streaks. Always bet responsibly and within your means.
```

## Script Simulation
> Here’s a simulation of the strategy over 150 rounds to showcase its performance.

| Round |  Bet  | Crash  | Outcome | Profit | Highest Bet |
|-------|-------|--------|---------|--------|-------------|
|   1   | 1.00  | 5.47x  |   Win   |  0.50  |      1      |
|   2   | 1.00  | 4.38x  |   Win   |  1.00  |      1      |
|   3   | 1.00  | 1.47x  |  Loss   |  1.00  |      1      |
|   4   | 2.00  | 1.01x  |  Loss   |  1.00  |     2.0     |
|   5   | 6.00  | 2.24x  |   Win   |  1.00  |     2.0     |
|   6   | 1.00  | 1.17x  |  Loss   |  1.00  |     2.0     |
|   7   | 2.00  |   3x   |   Win   |  1.00  |     2.0     |
|   8   | 1.00  | 1.82x  |   Win   |  1.50  |     2.0     |
|   9   | 1.00  | 1.64x  |   Win   |  2.00  |     2.0     |
|  10   | 1.00  | 1.66x  |   Win   |  2.50  |     2.0     |
|  11   | 1.00  | 1.52x  |   Win   |  3.00  |     2.0     |
|  12   | 1.00  | 1.16x  |  Loss   |  3.00  |     2.0     |
|  13   | 2.00  | 1.01x  |  Loss   |  3.00  |     2.0     |
|  14   | 6.00  | 1.55x  |   Win   |  3.00  |     2.0     |
|  15   | 1.00  | 1.19x  |  Loss   |  3.00  |     2.0     |
|  16   | 2.00  | 1.15x  |  Loss   |  3.00  |     2.0     |
|  17   | 6.00  | 3.05x  |   Win   |  3.00  |     2.0     |
|  18   | 1.00  | 2.28x  |   Win   |  3.50  |     2.0     |
|  19   | 1.00  | 1.47x  |  Loss   |  3.50  |     2.0     |
|  20   | 2.00  | 1.33x  |  Loss   |  3.50  |     2.0     |
|-------|-------|--------|---------|--------|-------------|
|  99   | 1.00  | 2.09x  |   Win   | 25.00  |     6.0     |
|  100  | 1.00  | 1.82x  |   Win   | 25.50  |     6.0     |
|  101  | 1.00  | 4.58x  |   Win   | 26.00  |     6.0     |
|  102  | 1.00  | 4.38x  |   Win   | 26.50  |     6.0     |
|  103  | 1.00  | 2.11x  |   Win   | 27.00  |     6.0     |
|  104  | 1.00  | 2.24x  |   Win   | 27.50  |     6.0     |
|  105  | 1.00  | 1.92x  |   Win   | 28.00  |     6.0     |
|  106  | 1.00  | 1.72x  |   Win   | 28.50  |     6.0     |
|  107  | 1.00  | 1.02x  |  Loss   | 28.50  |     6.0     |
|  108  | 2.00  | 4.25x  |   Win   | 28.50  |     6.0     |
|  109  | 1.00  | 43.73x |   Win   | 29.00  |     6.0     |
|  110  | 1.00  | 2.25x  |   Win   | 29.50  |     6.0     |
|  111  | 1.00  | 2.29x  |   Win   | 30.00  |     6.0     |
|  112  | 1.00  | 1.12x  |  Loss   | 30.00  |     6.0     |
|  113  | 2.00  | 3.09x  |   Win   | 30.00  |     6.0     |
|  114  | 1.00  | 2.53x  |   Win   | 30.50  |     6.0     |
|  115  | 1.00  | 1.35x  |  Loss   | 30.50  |     6.0     |
|  116  | 2.00  |  1.3x  |  Loss   | 30.50  |     6.0     |
|  117  | 6.00  |  1.1x  |  Loss   | 30.50  |     6.0     |
|  118  | 18.00 |  1.1x  |  Loss   | 30.50  |    18.0     |
|  119  | 54.00 | 6.69x  |   Win   | 30.50  |    18.0     |
|  120  | 1.00  | 1.59x  |   Win   | 31.00  |    18.0     |
|  121  | 1.00  | 1.78x  |   Win   | 31.50  |    18.0     |
|  122  | 1.00  | 2.45x  |   Win   | 32.00  |    18.0     |
|  123  | 1.00  |  5.2x  |   Win   | 32.50  |    18.0     |
|  124  | 1.00  | 1.91x  |   Win   | 33.00  |    18.0     |
|  125  | 1.00  | 1.15x  |  Loss   | 33.00  |    18.0     |
|  126  | 2.00  | 1.89x  |   Win   | 33.00  |    18.0     |
|  127  | 1.00  |  1.2x  |  Loss   | 33.00  |    18.0     |
|  128  | 2.00  | 1.06x  |  Loss   | 33.00  |    18.0     |
|  129  | 6.00  | 4.95x  |   Win   | 33.00  |    18.0     |
|  130  | 1.00  | 3.12x  |   Win   | 33.50  |    18.0     |
|  131  | 1.00  | 37.89x |   Win   | 34.00  |    18.0     |
|  132  | 1.00  | 1.52x  |   Win   | 34.50  |    18.0     |
|  133  | 1.00  | 1.24x  |  Loss   | 34.50  |    18.0     |
|  134  | 2.00  | 5.42x  |   Win   | 34.50  |    18.0     |
|  135  | 1.00  | 1.15x  |  Loss   | 34.50  |    18.0     |
|  136  | 2.00  | 6.05x  |   Win   | 34.50  |    18.0     |
|  137  | 1.00  | 1.09x  |  Loss   | 34.50  |    18.0     |
|  138  | 2.00  | 1.77x  |   Win   | 34.50  |    18.0     |
|  139  | 1.00  | 4.21x  |   Win   | 35.00  |    18.0     |
|  140  | 1.00  | 2.71x  |   Win   | 35.50  |    18.0     |
|  141  | 1.00  | 1.44x  |  Loss   | 35.50  |    18.0     |
|  142  | 2.00  |  3.2x  |   Win   | 35.50  |    18.0     |
|  143  | 1.00  | 1.82x  |   Win   | 36.00  |    18.0     |
|  144  | 1.00  | 1.25x  |  Loss   | 36.00  |    18.0     |
|  145  | 2.00  | 1.62x  |   Win   | 36.00  |    18.0     |
|  146  | 1.00  | 1.33x  |  Loss   | 36.00  |    18.0     |
|  147  | 2.00  | 2.79x  |   Win   | 36.00  |    18.0     |
|  148  | 1.00  | 5.22x  |   Win   | 36.50  |    18.0     |
|  149  | 1.00  | 10.16x |   Win   | 37.00  |    18.0     |
|  150  | 1.00  | 1.49x  |  Loss   | 37.00  |    18.0     |


**Summary**

> _Highest bet placed: 18.00 bits_
> 
> _Highest losing streak: 4 rounds_
> 
> _Total profit: 37.00 bits_


## Warning

```diff
-Betting involves significant risk and may lead to financial loss.
-Use this script at your own risk.
-The author is not responsible for any financial outcomes resulting from the use of this software.
-Gamble responsibly!
```

## Support
