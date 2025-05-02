import type { Question } from "@/types/quiz"

export const questions: Question[] = [
  {
    text: "SP1 is written in which programming language?",
    options: ["JavaScript", "solidity", "Rust"],
    correctAnswer: "Rust",
  },
  {
    text: "What makes SP1 stand out among other zkVMs?",
    options: ["It is open-source and developer-friendly", "It requires no proof system", "It runs only on Ethereum"],
    correctAnswer: "It is open-source and developer-friendly",
  },
  {
    text: "Which cryptographic technique is central to Succinct’s solutions?",
    options: ["Sharding", "Zero-Knowledge Proofs (ZKPs)", "Homomorphic Encryption"],
    correctAnswer: "Zero-Knowledge Proofs (ZKPs)",
  },
  {
    text: "What is the main use case of SP1 in the context of applications?",
    options: ["Launching Memecoins", "Building scalable zk-powered apps", "Hosting videos on-chain"],
    correctAnswer: "Building scalable zk-powered apps",
  }
]
