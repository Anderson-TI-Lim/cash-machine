import readline from "readline-sync"

function draw() {
    function init() {
        console.log("--------------------------------")
        console.log("    Cash Machine - Simulation   ")
        console.log("--------------------------------")
    }

    function end(moneyNotes, requestedMoney, moneyAvailable, moneyAfterWithdrawal) {
        console.log("-------------------------------  ")
        console.log("  withdrawal status - Success    ")
        console.log("-------------------------------\n")

        for (let index in moneyNotes) {
            if (moneyNotes[index][0] > 0 && moneyNotes[index][0] < 2) {
                console.log(`___${moneyNotes[index][0]} nota de ${moneyNotes[index][1]}$`)
            } else if (moneyNotes[index][0] > 2) {
                console.log(`___${moneyNotes[index][0]} notas de ${moneyNotes[index][1]}$`)
            }
        }

        console.log("\n-------------------------------")
        console.log("          account status         ")
        console.log("-------------------------------\n")

        console.log(`Previous money:     $${moneyAvailable.toLocaleString('pt-BR')}`)
        console.log(`Requested money:    $${requestedMoney.toLocaleString('pt-BR')}`)
        console.log(`Current money:      $${moneyAfterWithdrawal.toLocaleString('pt-BR')}\n`)

    }

    return {
        init,
        end
    }
}

function start() {
    const moneyAvailable = 537597
    const moneyNotes = [[0, 100], [0, 50], [0, 20], [0, 10], [0, 5], [0, 2], [0, 1]]

    const drawScreen = draw()
    drawScreen.init()

    const requestedMoney = readline.question("how much do you want to withdraw?: ")

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

        console.log("\nSacando...\n")
        setTimeout(() => {
            drawScreen.end(moneyNotes, requestedMoney, moneyAvailable, moneyAfterWithdrawal)
        } ,1000)
    }
}   

start()