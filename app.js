window.onload = function() {
    if(window.ethereum != "undefined") {
        this.ethereum.on("accountsChanged", handleAccountsChanged);
    }
}

let accounts;

const handleAccountsChanged = (a) => {
    console.log("Accounts Changed");
    accounts = a;
}

async function connectWallet() {
    accounts = await window.ethereum.request({method: "eth_requestAccounts"}).catch((err) => {
        // error handling
        console.log(err.code)
    })

    console.log(accounts);
}

async function checkBalance() {
    let balance = await window.ethereum.request({method: "eth_getBalance",
        params: [
            accounts[0],
            'latest'
        ]
    }).catch((err)=>{
    console.log(err)
})

    console.log(parseInt(balance) / Math.pow(10,18));
}

async function sendTransaction() {


    let result = await window.ethereum.request({method: "eth_sendTransaction", 
    params: [{
        "from": "0x648981eF5c19765158E3E778A2DAB21f734A97BA",
        "to": "0xcD4315E8c9050eC5c60106F2A8aaD6789453d639",
        "gas": Number(21000).toString(16), 
        "gasPrice": Number(2500000).toString(16), 
        "value": Number(20000000000000).toString(16), 
      }]
    }).catch((err) => {
        console.log(err)
    })

    console.log(result)
}