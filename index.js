const jadeLayerAbi = [
	{
		"inputs": [
			{
				"internalType": "uint16",
				"name": "destChainId",
				"type": "uint16"
			},
			{
				"internalType": "address",
				"name": "_otherContract",
				"type": "address"
			}
		],
		"name": "AddtrustAddress",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "Name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "Symbol",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "_endpoint",
				"type": "address"
			},
			{
				"internalType": "uint16",
				"name": "_chainid",
				"type": "uint16"
			},
			{
				"internalType": "uint256",
				"name": "initialSupplyOnMainEndpoint",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "subtractedValue",
				"type": "uint256"
			}
		],
		"name": "decreaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint16",
				"name": "_srcChainId",
				"type": "uint16"
			},
			{
				"internalType": "bytes",
				"name": "_srcAddress",
				"type": "bytes"
			}
		],
		"name": "forceResumeReceive",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "addedValue",
				"type": "uint256"
			}
		],
		"name": "increaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint16",
				"name": "_srcChainId",
				"type": "uint16"
			},
			{
				"internalType": "bytes",
				"name": "_srcAddress",
				"type": "bytes"
			},
			{
				"internalType": "uint64",
				"name": "_nonce",
				"type": "uint64"
			},
			{
				"internalType": "bytes",
				"name": "_payload",
				"type": "bytes"
			}
		],
		"name": "lzReceive",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint16",
				"name": "_srcChainId",
				"type": "uint16"
			},
			{
				"indexed": false,
				"internalType": "bytes",
				"name": "_srcAddress",
				"type": "bytes"
			},
			{
				"indexed": false,
				"internalType": "uint64",
				"name": "_nonce",
				"type": "uint64"
			},
			{
				"indexed": false,
				"internalType": "bytes",
				"name": "_payload",
				"type": "bytes"
			},
			{
				"indexed": false,
				"internalType": "bytes",
				"name": "_reason",
				"type": "bytes"
			}
		],
		"name": "MessageFailed",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint16",
				"name": "_srcChainId",
				"type": "uint16"
			},
			{
				"internalType": "bytes",
				"name": "_srcAddress",
				"type": "bytes"
			},
			{
				"internalType": "uint64",
				"name": "_nonce",
				"type": "uint64"
			},
			{
				"internalType": "bytes",
				"name": "_payload",
				"type": "bytes"
			}
		],
		"name": "nonblockingLzReceive",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "bool",
				"name": "isPaused",
				"type": "bool"
			}
		],
		"name": "Paused",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "bool",
				"name": "_pause",
				"type": "bool"
			}
		],
		"name": "pauseSendTokens",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint16",
				"name": "srcChainId",
				"type": "uint16"
			},
			{
				"indexed": false,
				"internalType": "uint64",
				"name": "nonce",
				"type": "uint64"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "qty",
				"type": "uint256"
			}
		],
		"name": "ReceiveFromChain",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint16",
				"name": "_srcChainId",
				"type": "uint16"
			},
			{
				"internalType": "bytes",
				"name": "_srcAddress",
				"type": "bytes"
			},
			{
				"internalType": "uint64",
				"name": "_nonce",
				"type": "uint64"
			},
			{
				"internalType": "bytes",
				"name": "_payload",
				"type": "bytes"
			}
		],
		"name": "retryMessage",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint16",
				"name": "_srcChainId",
				"type": "uint16"
			},
			{
				"indexed": false,
				"internalType": "bytes",
				"name": "_srcAddress",
				"type": "bytes"
			},
			{
				"indexed": false,
				"internalType": "uint64",
				"name": "_nonce",
				"type": "uint64"
			},
			{
				"indexed": false,
				"internalType": "bytes32",
				"name": "_payloadHash",
				"type": "bytes32"
			}
		],
		"name": "RetryMessageSuccess",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint16",
				"name": "dstChainId",
				"type": "uint16"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "qty",
				"type": "uint256"
			}
		],
		"name": "SendToChain",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint16",
				"name": "_dstChainId",
				"type": "uint16"
			},
			{
				"internalType": "address",
				"name": "_to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_qty",
				"type": "uint256"
			}
		],
		"name": "sendTokens",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint16",
				"name": "_version",
				"type": "uint16"
			},
			{
				"internalType": "uint16",
				"name": "_chainId",
				"type": "uint16"
			},
			{
				"internalType": "uint256",
				"name": "_configType",
				"type": "uint256"
			},
			{
				"internalType": "bytes",
				"name": "_config",
				"type": "bytes"
			}
		],
		"name": "setConfig",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint16",
				"name": "_dstChainId",
				"type": "uint16"
			},
			{
				"internalType": "uint16",
				"name": "_packetType",
				"type": "uint16"
			},
			{
				"internalType": "uint256",
				"name": "_minGas",
				"type": "uint256"
			}
		],
		"name": "setMinDstGas",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint16",
				"name": "_dstChainId",
				"type": "uint16"
			},
			{
				"indexed": false,
				"internalType": "uint16",
				"name": "_type",
				"type": "uint16"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "_minDstGas",
				"type": "uint256"
			}
		],
		"name": "SetMinDstGas",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint16",
				"name": "_dstChainId",
				"type": "uint16"
			},
			{
				"internalType": "uint256",
				"name": "_size",
				"type": "uint256"
			}
		],
		"name": "setPayloadSizeLimit",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_precrime",
				"type": "address"
			}
		],
		"name": "setPrecrime",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "precrime",
				"type": "address"
			}
		],
		"name": "SetPrecrime",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint16",
				"name": "_version",
				"type": "uint16"
			}
		],
		"name": "setReceiveVersion",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint16",
				"name": "_version",
				"type": "uint16"
			}
		],
		"name": "setSendVersion",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint16",
				"name": "_remoteChainId",
				"type": "uint16"
			},
			{
				"internalType": "bytes",
				"name": "_path",
				"type": "bytes"
			}
		],
		"name": "setTrustedRemote",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint16",
				"name": "_remoteChainId",
				"type": "uint16"
			},
			{
				"indexed": false,
				"internalType": "bytes",
				"name": "_path",
				"type": "bytes"
			}
		],
		"name": "SetTrustedRemote",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint16",
				"name": "_remoteChainId",
				"type": "uint16"
			},
			{
				"internalType": "bytes",
				"name": "_remoteAddress",
				"type": "bytes"
			}
		],
		"name": "setTrustedRemoteAddress",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint16",
				"name": "_remoteChainId",
				"type": "uint16"
			},
			{
				"indexed": false,
				"internalType": "bytes",
				"name": "_remoteAddress",
				"type": "bytes"
			}
		],
		"name": "SetTrustedRemoteAddress",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "DEFAULT_PAYLOAD_SIZE_LIMIT",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "endpoint",
		"outputs": [
			{
				"internalType": "contract ILayerZeroEndpoint",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint16",
				"name": "_dstChainId",
				"type": "uint16"
			},
			{
				"internalType": "bool",
				"name": "_useZro",
				"type": "bool"
			}
		],
		"name": "estimateSendTokensFee",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "nativeFee",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "zroFee",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint16",
				"name": "",
				"type": "uint16"
			},
			{
				"internalType": "bytes",
				"name": "",
				"type": "bytes"
			},
			{
				"internalType": "uint64",
				"name": "",
				"type": "uint64"
			}
		],
		"name": "failedMessages",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint16",
				"name": "_version",
				"type": "uint16"
			},
			{
				"internalType": "uint16",
				"name": "_chainId",
				"type": "uint16"
			},
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_configType",
				"type": "uint256"
			}
		],
		"name": "getConfig",
		"outputs": [
			{
				"internalType": "bytes",
				"name": "",
				"type": "bytes"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint16",
				"name": "_remoteChainId",
				"type": "uint16"
			}
		],
		"name": "getTrustedRemoteAddress",
		"outputs": [
			{
				"internalType": "bytes",
				"name": "",
				"type": "bytes"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "isMain",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint16",
				"name": "_srcChainId",
				"type": "uint16"
			},
			{
				"internalType": "bytes",
				"name": "_srcAddress",
				"type": "bytes"
			}
		],
		"name": "isTrustedRemote",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "lzEndpoint",
		"outputs": [
			{
				"internalType": "contract ILayerZeroEndpoint",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint16",
				"name": "",
				"type": "uint16"
			},
			{
				"internalType": "uint16",
				"name": "",
				"type": "uint16"
			}
		],
		"name": "minDstGasLookup",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "paused",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint16",
				"name": "",
				"type": "uint16"
			}
		],
		"name": "payloadSizeLimitLookup",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "precrime",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint16",
				"name": "",
				"type": "uint16"
			}
		],
		"name": "trustedRemoteLookup",
		"outputs": [
			{
				"internalType": "bytes",
				"name": "",
				"type": "bytes"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

let walletAddress;
let signer;
let sourceChainId;
let ethbalance;
let ua_contract;
let jadelayer_contract;
let estimatefee;
let dest_lz_id;
let send_tokenamount;

const data = new Map([
[137, {
    chain_name: "Polygon",
    symbol: "Matic",
    ua_ca: "0xca7C3fa8835aB194b94B91c47d7264Ef150DE5b7",
    lz_id: 109,
    }
],

[1284, {
    chain_name: "Moonbeam",
    symbol: "GLMR",
    ua_ca: "0xEF6D4747af5A9369c80C8AA5E85ED822BAAe49D4",
    lz_id: 126,
  }
],

[42220, {
	chain_name: "Celo",
	symbol: "Celo",
	ua_ca: "0xC28135446c01491Fa513d41A8D382f34A4A1324B",
	lz_id: 125,
  }
],

[122, {
	chain_name: "Fuse",
	symbol: "Fuse",
	ua_ca: "0x46dB503a13799085a31d4E9DfA640830aAA80454",
	lz_id: 138,
  }
],

[1666600000, {
	chain_name: "Harmony",
	symbol: "ONE",
	ua_ca: "0x6b22863aA85bEBa49fA951421548685cF097648d",
	lz_id: 116,
  }
],

[1559, {
	chain_name: "Tenet",
	symbol: "Tenet",
	ua_ca: "0x26E3583c55c771678C5c28Adfd97F9e3F19b0718",
	lz_id: 173,
  }
],

[7700, {
	chain_name: "Canto",
	symbol: "Canto",
	ua_ca: "0x1e0309d22487E630F25cB8A76a377783676c8D39",
	lz_id: 159,
  }
],

[2222, {
	chain_name: "KAVA",
	symbol: "Kava",
	ua_ca: "0x1e0309d22487E630F25cB8A76a377783676c8D39",
	lz_id: 177,
  }
],

[8217, {
	chain_name: "Klaytn",
	symbol: "Klay",
	ua_ca: "0x5acedc6f451D1B92eD995d1482836d37631C1b4f",
	lz_id: 150,
  }
],

[100, {
	chain_name: "Gnosis",
	symbol: "xDai",
	ua_ca: "0x1e0309d22487E630F25cB8A76a377783676c8D39",
	lz_id: 145,
  }
],

[1088, {
	chain_name: "Metis",
	symbol: "Metis",
	ua_ca: "0x1e0309d22487E630F25cB8A76a377783676c8D39",
	lz_id: 151,
  }
],

[1285, {
	chain_name: "Moonriver",
	symbol: "Movr",
	ua_ca: "0x1e0309d22487E630F25cB8A76a377783676c8D39",
	lz_id: 167,
  }
],

]);

//input send_token amount
const settokenamount = () => {
	send_tokenamount = parseFloat(document.getElementById("tokenamount").value);
}

const connectWallet = async () => {
    if(typeof window != "undefined" && typeof window.ethereum != "undefined"){
    //Metamask is installed.
        try{
        
    //get provider
        const provider = new ethers.providers.Web3Provider(window.ethereum);

  
    //get account
        const accounts = await provider.send("eth_requestAccounts",[]);
        walletAddress = accounts[0];
        console.log(walletAddress);

		let cutwalletaddress = walletAddress.substring(0,6) + "...." + walletAddress.substring(37);

		document.getElementById("connect").innerHTML = cutwalletaddress;

    //get signer
        signer = provider.getSigner();

    //get Network informations
        const netinfo = await provider.getNetwork();
        sourceChainId = (netinfo.chainId);
		document.getElementById("symbol").innerHTML = data.get(sourceChainId).symbol + "&nbsp &nbsp" ;
		document.getElementById("source").innerHTML = data.get(sourceChainId).chain_name;
    
    //Get ETH Balance
        const getbalance_big = await provider.getBalance(accounts[0]);
        const getbalance = ethers.utils.formatEther(getbalance_big);
        ethbalance = (getbalance);
		document.getElementById("eth_balance").innerHTML = parseFloat(ethbalance).toFixed(4) + "&nbsp";
    
    //get Contract Address by Chain Id
        ua_contract = data.get(netinfo.chainId).ua_ca;
        console.log(ua_contract);
    
        jadelayer_contract = new ethers.Contract(ua_contract, jadeLayerAbi, signer);

	//balance of Token
	const balanceOf = async() => {
		try{
			let balance_of_token_big =  await jadelayer_contract.balanceOf(walletAddress);
			let balance_of_token = parseFloat(ethers.utils.formatEther(balance_of_token_big._hex));
			document.getElementById("balanceOf_token").innerHTML = balance_of_token;
		}catch(err){
			console.log("error something");
		}
	}
	balanceOf();

    //if some error in connecting wallet
      }catch(err){
        alert("Error connecting Wallet");
      }
  
    }
    else{
    //Metamask is not installed.
      alert("Please installed Metamask");
    }


  }

//estimate fee
const tryestimatefee = async () => {
	let x = parseInt(document.getElementById("selectdestchain").value);
	dest_lz_id = data.get(x).lz_id;
		try{
			  let estimatefee_big = await jadelayer_contract.estimateSendTokensFee(dest_lz_id,false);
			  estimatefee = parseFloat(ethers.utils.formatEther(estimatefee_big.nativeFee._hex));
			  estimatefee = estimatefee + (estimatefee/20);
			  document.getElementById("estimatefee").innerHTML = estimatefee.toFixed(5);
			  document.getElementById("fee_symbol").innerHTML = "&nbsp &nbsp" + data.get(sourceChainId).symbol;
			   }catch(err){
			  alert("Current Destination Chain Dosen't Support Rightnow");
			}  
		  }

//Send JLB Tokens

const sendToken = async () => {

	const fee_string = estimatefee.toString();
	const amount_string = send_tokenamount.toString();
	
	const fee = { value: ethers.utils.parseEther(fee_string)};
	const amount = ethers.utils.parseEther(amount_string) ;

	try{
		const send = await jadelayer_contract.sendTokens(dest_lz_id,"0xC727092980D66C268A3E14fF82F1216ad6148E91",amount,fee);
		console.log(send);
	}catch(err){
		console.log(err);
	}
}



