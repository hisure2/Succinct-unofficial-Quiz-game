import type { Question } from "@/types/quiz"

export const questions: Question[] = [
  {
    text: "Suppose a user runs a guest program on SP1 and receives a proof. If they want Ethereum to verify it, they must ?",
    options: [" Install Rust on Ethereum", "Publish the SP1 verifier contract", " Run the SP1 node locally"],
    correctAnswer: "Publish the SP1 verifier contract",
  },
  {
    text: "SP1 is a zkVM and you replace the Rust guest program with malicious logic, the proof will?",
    options: ["Still be accepted", "Fail at verification", "Run silently onchain"],
    correctAnswer: "Fail at verification",
  },
  {
    text: "What is the primary purpose of Google Wallet's new age verification feature?",
    options: ["To enable contactless payments", "To verify a user's age for age-restricted purchases", "To replace physical credit cards"],
    correctAnswer: "To verify a user's age for age-restricted purchases",
  },
  {
    text: "A proof verified on-chain using SP1 was wrong. What’s the most likely issue?",
    options: ["Incorrect proof input", "Rust not compiled properly", "Blockchain latency"],
    correctAnswer: "Incorrect proof input",
  }
]
