import type { Question } from "@/types/quiz"

export const questions: Question[] = [
  {
    text: "Why is Succinct SP1 referred to as a universal prover client",
    options: ["It can generate ZK proofs for any type of application logic", "It eliminates the need for nodes", "It can verify any Ethereum transaction"],
    correctAnswer: "It can generate ZK proofs for any type of application logic",
  },
  {
    text: "In the Succinct architecture, what do applications primarily do",
    options: ["Verify blockchain consensus", "Request off-chain computation with proofs", "Secure the prover network"],
    correctAnswer: "Request off-chain computation with proofs",
  },
  {
    text: "Succinct’s approach to ZK proofs enables which key benefit",
    options: ["High gas fees", "Computation without privacy", "Trustless verification of off-chain computation"],
    correctAnswer: "Trustless verification of off-chain computation",
  },
  {
    text: "What does it logically mean if a verifier accepts a ZK proof in Succinct",
    options: ["The Ethereum L1 has validated it", "The prover signed a transaction", "The prover executed the task and can prove it without revealing how"],
    correctAnswer: "The prover executed the task and can prove it without revealing how",
  }
]
