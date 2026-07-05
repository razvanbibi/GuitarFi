// src/lib/cont
export const OXTXN_STREAK_ABI = [
  { 
    type: "function", 
    name: "streak",
    stateMutability: "view",
    inputs: [{ name: "user", type: "address" }],
    outputs: [{ name: "", type: "uint256" }],
  }, 
  {
    type: "function",
    name: "highestStreak", 
    stateMutability: "view",
    inputs: [{ name: "user", type: "address" }],
    outputs: [{ name: "", type: "uint256" }],
  },
  
] as const;
export const GUITARFI_SMART_CONTRACT = 
  "0x3C9A2992B29DD130b8E678E00eEdE76b717Ee885";

