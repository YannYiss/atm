//Obtencion de elementos HTML
const loginNav = document.getElementById("loginNav");
const mainSection = document.getElementById("mainSection");
const loginSection = document.getElementById("loginSection");
const loginAlert = document.getElementById("loginAlert");
const login = document.getElementById("login");
const logout = document.getElementById("logout"); 
const welcome = document.getElementById("welcome");
const blance = document.getElementById("balance");
const buttons = document.getElementById("buttons");
const depositForm = document.getElementById("depositForm");
const deposit =  document.getElementById("deposit");
const transferForm = document.getElementById("transferForm");
const transfer = document.getElementById("transfer");
const withdrawForm = document.getElementById("withdrawForm");
const withdraw = document.getElementById("withdraw");
const cancelDeposit = document.getElementById("cancelDeposit");
const cancelWithdraw = document.getElementById("cancelWithdraw");
const cancelTransfer = document.getElementById("cancelTransfer");

//Oculta secciones del usuario 
loginNav.hidden = true;
mainSection.hidden = true; 
loginAlert.hidden = true;
depositForm.hidden = true;
transferForm.hidden = true;
withdrawForm.hidden = true;


//"Base de datos"
const users = [
    {
        name: "Carlos",
        user: "carlosb",
        password: "sensei123",
        balance: 500,
    },
    {
        name: "Ahiram",
        user: "ahiram19",
        password: "mariha91",
        balance: 500,
    },   
    {
        name: "Adrian",
        user: "adriannc",
        password: "coder26",
        balance: 500,
    },
    {
        name: "Daniela",
        user: "danicastromtz",
        password: 7812150,
        balance: 500,
    },
    {
        name: "Camila",
        user: "camilanc",
        password: "nieto2020",
        balance: 500,
    },
    {
        name: "Hilda Lorena",
        user: "lorecoga",
        password: "maiestra16",
        balance: 0,
    },
    {
        name: "Admin",
        user: "admin",
        password: "admin1",
        balance: 500
    },
    {
        name: "Admin no. 2",
        user: "admin2",
        password: "admin2",
        balance: 500
    }
];

//Validacion de login
function loginCheck(user, password) {
    let flag = true;

    for (i = 0; i < users.length; i++) {
        let tempUser = users[i];
        if (user.toLowerCase() === tempUser.user.toLowerCase() && password == tempUser.password) {
            loginAlert.classList.add("alert-success");
            loginAlert.textContent = `Loged In Succesfuly!`;
            setTimeout(function() {
                loginAlert.hidden = true
                loginAlert.classList.remove("alert-success")}, 3000
            )
            welcome.textContent = `Welcome ${tempUser.name}`;
            balance.textContent = `$${tempUser.balance}`;
            flag = false;
            loginNav.hidden = false;
            mainSection.hidden = false; 
            loginSection.hidden = true;
            loginAlert.hidden = false;
            buttons.hidden = false;
            break;
        };
    };

    if (flag == true) {
        loginAlert.classList.add("alert-danger");
        loginAlert.textContent = "Incorrect user and/or password, please try";
        loginAlert.hidden = false;
        setTimeout(function() {
            loginAlert.hidden = true
            loginAlert.classList.remove("alert-danger")}, 2500
        );
    };
};

//Validacion de login
login.addEventListener("click", function() {
    let user = document.getElementById("user").value;
    let password = document.getElementById("password").value;
    loginCheck(user, password);
});

//Log out
logout.addEventListener("click", function() {
    loginNav.hidden = true;
    mainSection.hidden = true; 
    loginAlert.hidden = true;
    loginSection.hidden = false;
    depositForm.hidden = true;
    transferForm.hidden = true;
    withdrawForm.hidden = true;
});

//Variable Global


//Deposito
deposit.addEventListener("click", function(){
    depositForm.hidden = false;
    buttons.hidden = true;
});

applyDeposit.addEventListener("click", function(){
    const user = document.getElementById("user").value;
    let amount = parseInt(document.getElementById("depositAmount").value);
    let userAccount = users.find(account => account.user === user);
    if (amount > 0 && (userAccount.balance + amount) <= 990) {
        userAccount.balance += amount; 
    balance.textContent = `$${userAccount.balance}`
    depositForm.hidden = true;
    buttons.hidden = false;
    loginAlert.textContent = `Deposit for $${amount} applied to your account succesfuly!`;
    loginAlert.classList.add("alert-success");
    loginAlert.hidden = false;
    setTimeout(function() {
        loginAlert.hidden = true
        loginAlert.classList.remove("alert-success")}, 3500
    );
    } else if (amount <= 0) {
        loginAlert.classList.add("alert-danger");
        loginAlert.textContent = `Please enter a valid amount!`;
        loginAlert.hidden = false;
        setTimeout(function() {
            loginAlert.hidden = true;
            loginAlert.classList.remove("alert-danger")}, 3000
        );
    } else if ((userAccount.balance + amount) > 990) {
        let maxAmount = 990 - userAccount.balance; 
        loginAlert.classList.add("alert-danger");
        loginAlert.textContent = `You would exceed the maximum balance of $990 for your account. Max deposit allowed: $${maxAmount}. Please enter a valid amount`;
        loginAlert.hidden = false;
        setTimeout(function() {
            loginAlert.hidden = true;
            loginAlert.classList.remove("alert-danger")}, 5000
        );
    }
});

cancelDeposit.addEventListener("click", function() {
    depositForm.hidden = true;
    buttons.hidden = false; 
});

//Withdraw
withdraw.addEventListener("click", function(){
    withdrawForm.hidden = false;
    buttons.hidden = true;
});

applyWithdraw.addEventListener("click", function(){
    let user = document.getElementById("user").value;
    let amount = parseInt(document.getElementById("withdrawAmount").value);
    let userAccount = users.find(account => account.user === user);
    if ((userAccount.balance - amount) >= 10 && amount > 0) {
        userAccount.balance -= amount
        balance.textContent = `$${userAccount.balance}`;
        withdrawForm.hidden = true;
        buttons.hidden = false;
        loginAlert.textContent = `Withdraw for $${amount} applied to your account succesfuly!`;
        loginAlert.classList.add("alert-success");
        loginAlert.hidden = false;
        setTimeout(function() {
            loginAlert.hidden = true}, 3000
        );
    } else if ((userAccount.balance - amount) < 10) {
        let minAmount = (userAccount.balance - 10);
        loginAlert.classList.add("alert-danger");
        loginAlert.textContent = `The miminum balance allowed for your account is $10. Max withdraw allowed: $${minAmount}. Please enter a valid amount`;
        loginAlert.hidden = false;
        setTimeout(function() {
            loginAlert.hidden = true;
            loginAlert.classList.remove("alert-danger")}, 5000
        );
    } else if (amount <= 0) {
        loginAlert.classList.add("alert-danger");
        loginAlert.textContent = `Please enter a valid amount!`;
        loginAlert.hidden = false;
        setTimeout(function() {
            loginAlert.hidden = true;
            loginAlert.classList.remove("alert-danger")}, 3000
    )};
});

cancelWithdraw.addEventListener("click", function() {
    withdrawForm.hidden = true;
    buttons.hidden = false; 
});


//Transfer
transfer.addEventListener("click", function(){
    transferForm.hidden = false;
    buttons.hidden = true;
});

applyTransfer.addEventListener("click", function() {
    let receiverUser = document.getElementById("receiverAccount").value;
    let senderUser = document.getElementById("user").value;
    let amount = parseInt(document.getElementById("transferAmount").value);
    let receiverAccount = users.find(account => account.user === receiverUser);
    let senderAccount = users.find(account => account.user === senderUser);

    if (amount > 0 && (senderAccount.balance - amount) >= 10 && (receiverAccount.balance + amount <=990)) {
        senderAccount.balance -= amount;
        receiverAccount.balance += amount;
        transferForm.hidden = true;
        buttons.hidden = false;
        balance.textContent = `$${senderAccount.balance}`;
        loginAlert.textContent = `Transfer for $${amount} sent to ${receiverAccount.name} succesfuly!`;
        loginAlert.classList.add("alert-success");
        loginAlert.hidden = false;
        setTimeout(function() {
            loginAlert.hidden = true}, 4000
        );
    } else if (amount <= 0){
        loginAlert.classList.add("alert-danger");
        loginAlert.textContent = `Please enter a valid amount!`;
        loginAlert.hidden = false;
        setTimeout(function() {
            loginAlert.hidden = true;
            loginAlert.classList.remove("alert-danger")}, 3000
        )
    } else if (senderAccount.balance - amount < 10) {
        let minAmount = (senderAccount.balance - 10);
        loginAlert.classList.add("alert-danger");
        loginAlert.textContent = `The miminum balance allowed for your account is $10. Max transfer allowed: $${minAmount}. Please enter a valid amount`;
        loginAlert.hidden = false;
        setTimeout(function() {
            loginAlert.hidden = true;
            loginAlert.classList.remove("alert-danger")}, 5000
        )
    } else if (receiverAccount.balance + amount >= 990) {
        let maxAmount = 990 - receiverAccount.balance; 
        loginAlert.classList.add("alert-danger");
        loginAlert.textContent = `You would exceed the maximum balance of the receiver's account. Max deposit allowed: $${maxAmount}. Please enter a valid amount`;
        loginAlert.hidden = false;
        setTimeout(function() {
            loginAlert.hidden = true;
            loginAlert.classList.remove("alert-danger")}, 6000
        );
    };
});

cancelTransfer.addEventListener("click", function() {
    transferForm.hidden = true;
    buttons.hidden = false; 
});
