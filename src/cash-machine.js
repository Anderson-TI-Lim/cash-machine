export default function cashMachine(requestedMoney) {
    const moneyAvailable = 537597
    const moneyNotes = [[0, 100], [0, 50], [0, 20], [0, 10], [0, 5], [0, 2], [0, 1]]

    if (requestedMoney > moneyAvailable || requestedMoney > 1999 || requestedMoney < 10) {
        console.log("\nError: value unavailable, try again.\n")
    } else {
        let remainingMoneyRequested = requestedMoney
        let indexOfRemainingMoneyRequested = remainingMoneyRequested.length

        while (remainingMoneyRequested > 0) {
            switch (indexOfRemainingMoneyRequested) {
                case 1:
                    if (remainingMoneyRequested >= 5) {
                        moneyNotes[4][0] += 1
                        remainingMoneyRequested -= 5
                    } else if (remainingMoneyRequested >= 2) {
                        moneyNotes[5][0] += 1
                        remainingMoneyRequested -= 2
                    } else if (remainingMoneyRequested === 1) {
                        moneyNotes[6][0] += 1
                        remainingMoneyRequested -= 1
                    }
                    break
                case 2:
                    if (remainingMoneyRequested >= 50) {
                        moneyNotes[1][0] += 1
                        remainingMoneyRequested -= 50
                    } else if (remainingMoneyRequested >= 20) {
                        moneyNotes[2][0] += 1
                        remainingMoneyRequested -= 20
                    } else {
                        moneyNotes[3][0] += 1
                        remainingMoneyRequested -= 10
                    }
                    break
                default:
                    moneyNotes[0][0] += 1
                    remainingMoneyRequested -= 100
            } 
            indexOfRemainingMoneyRequested = remainingMoneyRequested.toString().length
        }    
        const moneyAfterWithdrawal = moneyAvailable - requestedMoney

        return {
            moneyNotes,
            requestedMoney,
            moneyAvailable,
            moneyAfterWithdrawal
        }
    }
}