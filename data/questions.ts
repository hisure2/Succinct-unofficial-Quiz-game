import type { Question } from "@/types/quiz"

export const questions: Question[] = [
  {
    text: "Succinct's testnet using SP1 is intended to help developers do what?",
    options: [" Build ZK applications with verifiable proofs", "Create NFTs with privacy", "Convert ETH to BTC"],
    correctAnswer: " Build ZK applications with verifiable proofs",
  },
  {
    text: "What role does the prover play in SP1?",
    options: [" Generates a proof for program execution", "Publishes blocks to the blockchain", "Compiles the smart contract"],
    correctAnswer: "Generates a proof for program execution",
  },
  {
    text: "How does SP1 differ from other ZKVMs like zkEVM?",
    options: ["It supports general-purpose computation beyond smart contracts", "It is not Turing complete", "It runs only on Ethereum"],
    correctAnswer: "It supports general-purpose computation beyond smart contracts",
  },
  {
    text: "Which of the following best describes the scalability benefit of using SP1?",
    options: ["Reduced latency for layer-1 networks", "Running contracts in parallel", "Offloading computation to provers and verifying succinct proofs"],
    correctAnswer: "Offloading computation to provers and verifying succinct proofs",
  }
]
