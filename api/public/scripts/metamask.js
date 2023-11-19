let contract;
let abi;

window.onload = async () => {
  const res = await fetch("/api/abi");
  const json = await res.json();
  contract = json.contract;
  abi = json.abi;
  console.log(contract);
};

const connectToMetaMask = async () => {
  let accounts = await window.ethereum.request({
    method: "eth_requestAccounts",
  });
  let sign = await window.ethereum.request({
    method: "personal_sign",
    params: [
      "0x57656c636f6d6520746f20436572746966696361746520444170702e204b696e646c79207369676e2074686973206d65737361676520746f206c6f6720696e2e20546869732070726f63656475726520646f6573206e6f74207265717569726520616e792045544820746f2070726f636573732e",
      accounts[0],
    ],
  });
  console.log(sign);

  if (sign === "<paste-sign-here>") {
    window.location.href = "/issue";
  } else {
    alert(`Account: ${accounts[0]} is not authorized!`);
  }
};

const issueCertificate = async () => {
  let accounts = await window.ethereum.request({
    method: "eth_requestAccounts",
  });

  let iface = new ethers.utils.Interface(abi);

  let certificateID = document.getElementById("certificateID").value;
  let candidateName = document.getElementById("candidateName").value;
  let courseName = document.getElementById("courseName").value;
  let grade = document.getElementById("grade").value;
  let date = document.getElementById("date").value;

  let data = await iface.encodeFunctionData("issue", [
    certificateID,
    candidateName,
    courseName,
    grade,
    date,
  ]);

  let trx = await window.ethereum.request({
    method: "eth_sendTransaction",
    params: [
      {
        from: accounts[0],
        to: contract,
        data: data,
      },
    ],
  });

  let trxReceipt = await window.ethereum.request({
    method: "eth_getTransactionReceipt",
    params: [trx],
  });

  console.log("Receipt: ", trxReceipt);
  alert(`Certificate is issued for ${certificateID}!`);
};
