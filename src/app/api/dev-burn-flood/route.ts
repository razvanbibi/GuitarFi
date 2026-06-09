import { NextRequest, NextResponse } from "next/server";
import { ethers } from "ethers";
const RPC = process.env.CELO_RPC!;
const PRIVATE_KEY = process.env.RELAYER_PRIVATE_KEY!;
const TOKEN_ADDRESS =
    "0xF3473730b41f0F5720bC8AA8fade0480062125bA";
const TOKEN_ABI = [
    "function burn(uint256 amount) external"
];
export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const amount = body.amount;
        const count = Number(body.count);
        if (!amount || !count) {
            return NextResponse.json(
                { error: "Missing params" },
                { status: 400 }
            );
        }
        const provider =
            new ethers.JsonRpcProvider(RPC);

        const wallet =
            new ethers.Wallet(
                PRIVATE_KEY,
                provider
            );
        const token =
            new ethers.Contract(
                TOKEN_ADDRESS,
                TOKEN_ABI,
                wallet
            );
        let nonce =
            await provider.getTransactionCount(
                wallet.address,
                "pending"
            );
        const hashes: string[] = [];
