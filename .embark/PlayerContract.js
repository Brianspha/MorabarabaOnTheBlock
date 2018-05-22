import web3 from 'Embark/web3';
import EmbarkJS from 'Embark/EmbarkJS';
let PlayerContractJSONConfig = {
  "contract_name": "PlayerContract",
  "address": "0x194A998D49302C1FC02Cf6dF1af7B720aD3Ae5e2",
  "code": "6080604052600a60005534801561001557600080fd5b50610816806100256000396000f30060806040526004361061006c5763ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663408b9599811461007157806345cd046c146100a657806378a3e890146101305780638d4b563014610151578063cb3aea3e14610172575b600080fd5b34801561007d57600080fd5b50610092600160a060020a0360043516610199565b604080519115158252519081900360200190f35b3480156100b257600080fd5b506100c7600160a060020a0360043516610201565b6040518085815260200184815260200183815260200180602001828103825283818151815260200191508051906020019060200280838360005b83811015610119578181015183820152602001610101565b505050509050019550505050505060405180910390f35b34801561013c57600080fd5b50610092600160a060020a03600435166102f1565b34801561015d57600080fd5b50610092600160a060020a0360043516610425565b34801561017e57600080fd5b50610092600160a060020a03600435811690602435166104a7565b6000600160a060020a03821615156101b057600080fd5b600160a060020a03821660009081526001602052604090206004015460ff1615156101da57600080fd5b50600160a060020a0316600090815260016020819052604090912060030180548201905590565b600080806060600160a060020a038516151561021c57600080fd5b600160a060020a03851660009081526001602052604090206004015460ff16151561024657600080fd5b600160a060020a038516600090815260016020908152604091829020600601805483518184028101840190945280845290918301828280156102b157602002820191906000526020600020905b8154600160a060020a03168152600190910190602001808311610293575b505050600160a060020a03909716600090815260016020819052604090912090810154600382015460029092015490999098509096509194509092505050565b60006060600160a060020a038316151561030a57600080fd5b600160a060020a03831660009081526001602052604090206004015460ff161561033357600080fd5b60408051620f42408082526301e84820820190925290602082016301e8480080388339019050506040805160e081018252338152600060208083018281528385018381526060850184815260016080870181815260a0880187815260c089018b8152600160a060020a038f81168a528489529a909820895181549b1673ffffffffffffffffffffffffffffffffffffffff19909b169a909a178a55945191890191909155915160028801555160038701555160048601805491151560ff199092169190911790555160058501559051805194955091936104199260068501920190610704565b50600195945050505050565b6000600160a060020a038216151561043c57600080fd5b600160a060020a03821660009081526001602052604090206004015460ff16151561046657600080fd5b600160a060020a03821660009081526001602081905260409091206002018054909101905561049482610698565b151561049f57600080fd5b506001919050565b6000600160a060020a038316158015906104c95750600160a060020a03821615155b15156104d457600080fd5b600160a060020a03831660009081526001602052604090206004015460ff16801561051a5750600160a060020a03821660009081526001602052604090206004015460ff165b151561052557600080fd5b600160a060020a038084166000818152600160208181526040808420888716855281852095855260079095019091529091208254815473ffffffffffffffffffffffffffffffffffffffff1916941693909317835581810154908301556002808201549083015560038082015490830155600480820154908301805460ff909216151560ff1990921691909117905560058082015490830155600680820180549293926105d59284019190610776565b505050600160a060020a0380831660008181526001602081815260408084206005908101805485019055958916845280842095860180549093019092559282526007909301909152206004015460ff161561066057600160a060020a038084166000908152600160208181526040808420948716845260079094019052919020600501805490910190555b50600160a060020a03908116600090815260016020818152604080842095909416835260079094019093522060050180548201905590565b6000600160a060020a03821615156106af57600080fd5b600160a060020a03821660009081526001602052604090206004015460ff1615156106d957600080fd5b5060008054600160a060020a0390921681526001602081905260409091208101805490920190915590565b828054828255906000526020600020908101928215610766579160200282015b82811115610766578251825473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a03909116178255602090920191600190910190610724565b506107729291506107b6565b5090565b8280548282559060005260206000209081019282156107665760005260206000209182015b8281111561076657825482559160010191906001019061079b565b6107e791905b8082111561077257805473ffffffffffffffffffffffffffffffffffffffff191681556001016107bc565b905600a165627a7a723058207b5dd921991106e47a16ab8130c937661c361416ac3fcf10abd57580a2d463500029",
  "runtime_bytecode": "60806040526004361061006c5763ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663408b9599811461007157806345cd046c146100a657806378a3e890146101305780638d4b563014610151578063cb3aea3e14610172575b600080fd5b34801561007d57600080fd5b50610092600160a060020a0360043516610199565b604080519115158252519081900360200190f35b3480156100b257600080fd5b506100c7600160a060020a0360043516610201565b6040518085815260200184815260200183815260200180602001828103825283818151815260200191508051906020019060200280838360005b83811015610119578181015183820152602001610101565b505050509050019550505050505060405180910390f35b34801561013c57600080fd5b50610092600160a060020a03600435166102f1565b34801561015d57600080fd5b50610092600160a060020a0360043516610425565b34801561017e57600080fd5b50610092600160a060020a03600435811690602435166104a7565b6000600160a060020a03821615156101b057600080fd5b600160a060020a03821660009081526001602052604090206004015460ff1615156101da57600080fd5b50600160a060020a0316600090815260016020819052604090912060030180548201905590565b600080806060600160a060020a038516151561021c57600080fd5b600160a060020a03851660009081526001602052604090206004015460ff16151561024657600080fd5b600160a060020a038516600090815260016020908152604091829020600601805483518184028101840190945280845290918301828280156102b157602002820191906000526020600020905b8154600160a060020a03168152600190910190602001808311610293575b505050600160a060020a03909716600090815260016020819052604090912090810154600382015460029092015490999098509096509194509092505050565b60006060600160a060020a038316151561030a57600080fd5b600160a060020a03831660009081526001602052604090206004015460ff161561033357600080fd5b60408051620f42408082526301e84820820190925290602082016301e8480080388339019050506040805160e081018252338152600060208083018281528385018381526060850184815260016080870181815260a0880187815260c089018b8152600160a060020a038f81168a528489529a909820895181549b1673ffffffffffffffffffffffffffffffffffffffff19909b169a909a178a55945191890191909155915160028801555160038701555160048601805491151560ff199092169190911790555160058501559051805194955091936104199260068501920190610704565b50600195945050505050565b6000600160a060020a038216151561043c57600080fd5b600160a060020a03821660009081526001602052604090206004015460ff16151561046657600080fd5b600160a060020a03821660009081526001602081905260409091206002018054909101905561049482610698565b151561049f57600080fd5b506001919050565b6000600160a060020a038316158015906104c95750600160a060020a03821615155b15156104d457600080fd5b600160a060020a03831660009081526001602052604090206004015460ff16801561051a5750600160a060020a03821660009081526001602052604090206004015460ff165b151561052557600080fd5b600160a060020a038084166000818152600160208181526040808420888716855281852095855260079095019091529091208254815473ffffffffffffffffffffffffffffffffffffffff1916941693909317835581810154908301556002808201549083015560038082015490830155600480820154908301805460ff909216151560ff1990921691909117905560058082015490830155600680820180549293926105d59284019190610776565b505050600160a060020a0380831660008181526001602081815260408084206005908101805485019055958916845280842095860180549093019092559282526007909301909152206004015460ff161561066057600160a060020a038084166000908152600160208181526040808420948716845260079094019052919020600501805490910190555b50600160a060020a03908116600090815260016020818152604080842095909416835260079094019093522060050180548201905590565b6000600160a060020a03821615156106af57600080fd5b600160a060020a03821660009081526001602052604090206004015460ff1615156106d957600080fd5b5060008054600160a060020a0390921681526001602081905260409091208101805490920190915590565b828054828255906000526020600020908101928215610766579160200282015b82811115610766578251825473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a03909116178255602090920191600190910190610724565b506107729291506107b6565b5090565b8280548282559060005260206000209081019282156107665760005260206000209182015b8281111561076657825482559160010191906001019061079b565b6107e791905b8082111561077257805473ffffffffffffffffffffffffffffffffffffffff191681556001016107bc565b905600a165627a7a723058207b5dd921991106e47a16ab8130c937661c361416ac3fcf10abd57580a2d463500029",
  "real_runtime_bytecode": "60806040526004361061006c5763ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663408b9599811461007157806345cd046c146100a657806378a3e890146101305780638d4b563014610151578063cb3aea3e14610172575b600080fd5b34801561007d57600080fd5b50610092600160a060020a0360043516610199565b604080519115158252519081900360200190f35b3480156100b257600080fd5b506100c7600160a060020a0360043516610201565b6040518085815260200184815260200183815260200180602001828103825283818151815260200191508051906020019060200280838360005b83811015610119578181015183820152602001610101565b505050509050019550505050505060405180910390f35b34801561013c57600080fd5b50610092600160a060020a03600435166102f1565b34801561015d57600080fd5b50610092600160a060020a0360043516610425565b34801561017e57600080fd5b50610092600160a060020a03600435811690602435166104a7565b6000600160a060020a03821615156101b057600080fd5b600160a060020a03821660009081526001602052604090206004015460ff1615156101da57600080fd5b50600160a060020a0316600090815260016020819052604090912060030180548201905590565b600080806060600160a060020a038516151561021c57600080fd5b600160a060020a03851660009081526001602052604090206004015460ff16151561024657600080fd5b600160a060020a038516600090815260016020908152604091829020600601805483518184028101840190945280845290918301828280156102b157602002820191906000526020600020905b8154600160a060020a03168152600190910190602001808311610293575b505050600160a060020a03909716600090815260016020819052604090912090810154600382015460029092015490999098509096509194509092505050565b60006060600160a060020a038316151561030a57600080fd5b600160a060020a03831660009081526001602052604090206004015460ff161561033357600080fd5b60408051620f42408082526301e84820820190925290602082016301e8480080388339019050506040805160e081018252338152600060208083018281528385018381526060850184815260016080870181815260a0880187815260c089018b8152600160a060020a038f81168a528489529a909820895181549b1673ffffffffffffffffffffffffffffffffffffffff19909b169a909a178a55945191890191909155915160028801555160038701555160048601805491151560ff199092169190911790555160058501559051805194955091936104199260068501920190610704565b50600195945050505050565b6000600160a060020a038216151561043c57600080fd5b600160a060020a03821660009081526001602052604090206004015460ff16151561046657600080fd5b600160a060020a03821660009081526001602081905260409091206002018054909101905561049482610698565b151561049f57600080fd5b506001919050565b6000600160a060020a038316158015906104c95750600160a060020a03821615155b15156104d457600080fd5b600160a060020a03831660009081526001602052604090206004015460ff16801561051a5750600160a060020a03821660009081526001602052604090206004015460ff165b151561052557600080fd5b600160a060020a038084166000818152600160208181526040808420888716855281852095855260079095019091529091208254815473ffffffffffffffffffffffffffffffffffffffff1916941693909317835581810154908301556002808201549083015560038082015490830155600480820154908301805460ff909216151560ff1990921691909117905560058082015490830155600680820180549293926105d59284019190610776565b505050600160a060020a0380831660008181526001602081815260408084206005908101805485019055958916845280842095860180549093019092559282526007909301909152206004015460ff161561066057600160a060020a038084166000908152600160208181526040808420948716845260079094019052919020600501805490910190555b50600160a060020a03908116600090815260016020818152604080842095909416835260079094019093522060050180548201905590565b6000600160a060020a03821615156106af57600080fd5b600160a060020a03821660009081526001602052604090206004015460ff1615156106d957600080fd5b5060008054600160a060020a0390921681526001602081905260409091208101805490920190915590565b828054828255906000526020600020908101928215610766579160200282015b82811115610766578251825473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a03909116178255602090920191600190910190610724565b506107729291506107b6565b5090565b8280548282559060005260206000209081019282156107665760005260206000209182015b8281111561076657825482559160010191906001019061079b565b6107e791905b8082111561077257805473ffffffffffffffffffffffffffffffffffffffff191681556001016107bc565b905600a165627a7a723058207b5dd921991106e47a16ab8130c937661c361416ac3fcf10abd57580a2d463500029",
  "swarm_hash": "7b5dd921991106e47a16ab8130c937661c361416ac3fcf10abd57580a2d46350",
  "gas_estimates": {
    "creation": {
      "codeDepositCost": "414000",
      "executionCost": "20455",
      "totalCost": "434455"
    },
    "external": {
      "AddPreviousOpponent(address,address)": "infinite",
      "GetPlayer(address)": "infinite",
      "RegisterPlayer(address)": "infinite",
      "UpdatePlayerTotalLosses(address)": "21121",
      "UpdatePlayerTotalWins(address)": "42316"
    },
    "internal": {
      "UpdatePlayerTotalWinnings(address)": "21083"
    }
  },
  "function_hashes": {
    "AddPreviousOpponent(address,address)": "cb3aea3e",
    "GetPlayer(address)": "45cd046c",
    "RegisterPlayer(address)": "78a3e890",
    "UpdatePlayerTotalLosses(address)": "408b9599",
    "UpdatePlayerTotalWins(address)": "8d4b5630"
  },
  "abi": [
    {
      "constant": false,
      "inputs": [
        {
          "name": "id",
          "type": "address"
        }
      ],
      "name": "UpdatePlayerTotalLosses",
      "outputs": [
        {
          "name": "success",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "id",
          "type": "address"
        }
      ],
      "name": "GetPlayer",
      "outputs": [
        {
          "name": "TotalWinnings",
          "type": "uint256"
        },
        {
          "name": "TotalWins",
          "type": "uint256"
        },
        {
          "name": "TotalLosses",
          "type": "uint256"
        },
        {
          "name": "PreviousOps",
          "type": "address[]"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "id",
          "type": "address"
        }
      ],
      "name": "RegisterPlayer",
      "outputs": [
        {
          "name": "success",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "id",
          "type": "address"
        }
      ],
      "name": "UpdatePlayerTotalWins",
      "outputs": [
        {
          "name": "success",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "opponent",
          "type": "address"
        },
        {
          "name": "player",
          "type": "address"
        }
      ],
      "name": "AddPreviousOpponent",
      "outputs": [
        {
          "name": "success",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]
}
;
let PlayerContract = new EmbarkJS.Contract(PlayerContractJSONConfig);

__embarkContext.execWhenReady(function() {

PlayerContract.setProvider(web3.currentProvider);

PlayerContract.options.from = web3.eth.defaultAccount;

});
export default PlayerContract;
