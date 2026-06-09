import { NextRequest, NextResponse } from "next/server";
import { ethers } from "ethers";
const RPC = process.env.CELO_RPC!;
const PRIVATE_KEY = process.env.RELAYER_PRIVATE_KEY!;
const TOKEN_ADDRESS =
    "0xF3473730b41f0F5720bC8AA8fade0480062125bA";
const TOKEN_ABI = [
    "function burn(uint256 amount) external"
];
