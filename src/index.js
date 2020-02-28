import readline from "readline-sync"
import cashMachine from "./cash-machine.js"

function draw() {
    function init() {
        console.log("--------------------------------")
        console.log("    Cash Machine - Simulation   ")
        console.log("--------------------------------")
    }

    function end(result) {
        console.log("\nSacando...\n")

        setTimeout(() => {
            console.log("-------------------------------  ")
            console.log("  withdrawal status - Success    ")
            console.log("-------------------------------\n")
    
            for (let index in result.moneyNotes) {
                if (result.moneyNotes[index][0] > 0 && result.moneyNotes[index][0] < 2) {
                    console.log(`___${result.moneyNotes[index][0]} nota de ${result.moneyNotes[index][1]}$`)
                } else if (result.moneyNotes[index][0] > 2) {
                    console.log(`___${result.moneyNotes[index][0]} notas de ${result.moneyNotes[index][1]}$`)
                }
            }
    
            console.log("\n-------------------------------")
            console.log("          account status         ")
            console.log("-------------------------------\n")
    
            console.log(`Previous money:     $${result.moneyAvailable.toLocaleString('pt-BR')}`)
            console.log(`Requested money:    $${result.requestedMoney.toLocaleString('pt-BR')}`)
            console.log(`Current money:      $${result.moneyAfterWithdrawal.toLocaleString('pt-BR')}\n`)
        }, 1500)
    }

    return {
        init,
        end
    }
}

function start() {
    const drawScreen = draw()
    drawScreen.init()

    const requestedMoney = readline.question("how much do you want to withdraw?: ")
    const cashWithdrawalResult = cashMachine(requestedMoney)
    
    if (cashWithdrawalResult) {
        drawScreen.end(cashWithdrawalResult)
    }
}

start()