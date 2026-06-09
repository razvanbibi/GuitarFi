import { NextRequest, NextResponse } from "next/server";
import { ethers } from "ethers";
const RPC = process.env.CELO_RPC!;
const PRIVATE_KEY = process.env.RELAYER_PRIVATE_KEY!;
