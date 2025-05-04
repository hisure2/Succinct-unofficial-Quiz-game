import type { Question } from "@/types/quiz"

export const questions: Question[] = [
  {
    text: "How does SP1 improve developer experience compared to older zkVMs?",
    options: ["Uses plain Rust code and a simple proving API", "Avoids any cryptographic assumptions", "Eliminates blockchain fees"],
    correctAnswer: "Uses plain Rust code and a simple proving API",
  },
  {
    text: "Which environment does SP1 aim to be compatible with for universal proving?",
    options: ["Ethereum only", "Celestia only", "Any verifiable backend (Ethereum, Celestia, etc.)"],
    correctAnswer: "Any verifiable backend (Ethereum, Celestia, etc.)",
  },
  {
    text: "Why is Succinct’s testnet important for developers?",
    options: ["It mines new tokens", "It allows testing of verifiable apps using SP1", "It replaces mainnet entirely"],
    correctAnswer: "It allows testing of verifiable apps using SP1",
  },
  {
    text: "What role do rollups play in SP1’s ecosystem?",
    options: ["They store NFTs", "They handle UI rendering", "They serve as scalable environments for SP1 apps"],
    correctAnswer: "They serve as scalable environments for SP1 apps",
  }
]
