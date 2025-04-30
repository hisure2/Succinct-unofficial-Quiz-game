import type { Question } from "@/types/quiz"

export const questions: Question[] = [
  {
    text: "How succinct vApp is different dApp",
    options: ["Fully Onchain", "partially onchain & partially offchain", "offchain logic proof sent onchain"],
    correctAnswer: "offchain logic proof sent onchain",
  },
  {
    text: "What makes SP1 different from other ZKVMs like Risc0 or zkSync’s VM",
    options: ["written in Rust and built with modularity in mind", "prove a specific chain's execution ethereum", "prove a specific chain's execution cosmos"],
    correctAnswer: "written in Rust and built with modularity in mind",
  },
  {
    text: "Suppose a developer wants to prove a program’s result to another chain without trusting a centralized party. Which tool is best suited?",
    options: ["A zk-rollup only on Ethereum", "Succinct SP1", "A multisig bridge"],
    correctAnswer: "Succinct SP1",
  },
  {
    text: "What if SP1 proofs are verified on-chain and take less gas than computing the logic directly on-chain, then using SP1 can.",
    options: ["Increase on-chain computation costs", "Lower gas fees and improve scalability", "Slow down the chain"],
    correctAnswer: "Lower gas fees and improve scalability",
  },
]
