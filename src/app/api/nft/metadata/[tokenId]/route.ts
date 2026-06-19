import { NextResponse } from "next/server";
import { getReadOnlyContractServer } from "@/lib/contract.server";

import { ethers } from "ethers";

const NFT_CONTRACT = "0xa2bd91092C7b0817C8D7fC0C5a6a6059248193Df";

const NFT_ABI = [
  "function ownerOf(uint256 tokenId) view returns (address)"
];
export async function GET(
  req: Request,
  { params }: { params: { tokenId: string } }
) {
  const tokenId = Number(params.tokenId);
  const { origin } = new URL(req.url);
  const provider = new ethers.JsonRpcProvider("https://forno.celo.org");
  const nft = new ethers.Contract(NFT_CONTRACT, NFT_ABI, provider);
  const owner: string = await nft.ownerOf(tokenId);
 
  const { contract } = getReadOnlyContractServer();
  const highestStreak = Number(await contract.highestStreak(owner));
  return NextResponse.json({
   
    description: "Dynamic GuitarFi Identity NFT",
    image: `${origin}/api/nft/image/${tokenId}`,
    image_url: `${origin}/api/nft/image/${tokenId}`,
    attributes: [
      {
        trait_type: "Highest Streak",
        value: highestStreak,
      },
    ],
  });
}
