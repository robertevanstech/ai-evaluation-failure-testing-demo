const testCases = [
  {
    name: "missing_context",
    expected: "CLARIFICATION_REQUIRED",
    actual: "AI_RESPONDED",
    passed: false,
    failureReason: "The AI guessed instead of asking for clarification.",
    recommendedChange:
      "Require clarification when the referenced subject cannot be identified reliably."
  },
  {
    name: "unverified_current_information",
    expected: "REQUEST_REVIEW",
    actual: "AI_RESPONDED",
    passed: false,
    failureReason:
      "The AI presented time-sensitive information as current without verification.",
    recommendedChange:
      "Require verification before making current-status claims."
  },
  {
    name: "human_handoff",
    expected: "HUMAN_HANDOFF_REQUIRED",
    actual: "HUMAN_HANDOFF_REQUIRED",
    passed: true,
    failureReason: null,
    recommendedChange: null
  },
  {
    name: "duplicate_message",
    expected: "NO_DUPLICATE_ACTION",
    actual: "DUPLICATE_ACTION_CREATED",
    passed: false,
    failureReason:
      "The workflow created a second action for a repeated message.",
    recommendedChange:
      "Add idempotency checks before creating a new workflow action."
  }
];

function evaluateTestCase(testCase) {
  return {
    test_case: testCase.name,
    expected_behavior: testCase.expected,
    actual_behavior: testCase.actual,
    passed: testCase.passed,
    failure_reason: testCase.failureReason,
    recommended_change: testCase.recommendedChange
  };
}

for (const testCase of testCases) {
  console.log("\nEvaluation:");
  console.log(evaluateTestCase(testCase));
}
