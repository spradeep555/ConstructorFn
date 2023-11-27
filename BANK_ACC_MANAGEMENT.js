// BANK ACC MANAGEMENT

function BankAcc(accNumber, name, type, balance) {
    this.accNumber = accNumber;
    this.name = name;
    this.type = type;
    this.balance = balance;
    this.active = true;
}

BankAcc.prototype.deposit = function(amount) {
    if (amount > 0) {
        this.balance += amount;
        console.log(`Deposited ${amount} into ${this.name}'s account. New balance: ${this.balance}`);
    } else {
        console.log("Invalid deposit amount.");
    }
};

BankAcc.prototype.withdraw = function(amount) {
    if (amount > 0 && amount <= this.balance) {
        this.balance -= amount;
        console.log(`Withdrawn ${amount} from ${this.name}'s account. New balance: ${this.balance}`);
    } else {
        console.log("Invalid withdrawal amount or insufficient funds.");
    }
};

BankAcc.prototype.checkBal = function() {
    console.log(`${this.name}'s account balance: ${this.balance}`);
};

BankAcc.prototype.isActive = function() {
    return this.active;
};

const account1 = new BankAcc(1411, "Lasan", "Savings", 10000);
const account2 = new BankAcc(1910, "Hasan", "Checking", 50000);

account1.deposit(10200);
account1.withdraw(2550);
account1.checkBal();

account2.deposit(1900);
account2.withdraw(1200);
account2.checkBal();

console.log(`${account1.name}'s account is active: ${account1.isActive()}`);
console.log(`${account2.name}'s account is active: ${account2.isActive()}`);

function getTotalBalance(accounts) {
    let totalBalance = 0;
    for (const account of accounts) {
        if (account.isActive()) {
            totalBalance += account.balance;
        }
    }
    return totalBalance;
}

const allAccounts = [account1, account2];
const totalBalance = getTotalBalance(allAccounts);
console.log(`Total balance of all active accounts: ${totalBalance}`);
