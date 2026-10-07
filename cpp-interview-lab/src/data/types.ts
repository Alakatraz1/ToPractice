export type Difficulty = "beginner" | "easy" | "medium" | "hard";
export type InterviewRelevance = "low" | "medium" | "high";
export type ProblemType = "coding" | "output-prediction" | "debugging" | "multiple-choice";

export interface TestCase {
  id: string;
  input: string;
  expectedOutput: string;
  hidden: boolean;
}

export interface Example {
  input: string;
  output: string;
  explanation?: string;
}

export interface Problem {
  id: string;
  levelId: string;
  title: string;
  type: ProblemType;
  difficulty: Difficulty;
  order: number;

  description: string;
  whyThisMatters: string;

  concepts: string[];
  prerequisites: string[];
  learningObjectives: string[];
  constraints: string[];

  examples: Example[];
  testCases: TestCase[];

  starterCode: string;
  
  hints: string[];
  
  // Guided thinking framework
  howToThink: string[];

  approach: string;
  pseudocode: string;
  explanation: string;
  solution: string;
  
  commonMistakes: string[];
  timeComplexity: string;
  spaceComplexity: string;

  interviewRelevance: InterviewRelevance;
  tags: string[];
  options?: string[];
  
  isLevelChallenge?: boolean;
}

export interface Level {
  id: string;
  number: number;
  title: string;
  description: string;
  whatYouWillLearn: string[];
  whyThisMatters: string;
  concepts: string[];
  prerequisites: string[]; // concepts or level ids
  problems: string[]; // problem ids
}

export interface UserProgress {
  currentLevel: string;
  currentProblem: string;
  completedProblems: string[];
  attempts: Record<string, number>;
  hintsUsed: Record<string, number>;
  solutionsViewed: string[];
  savedCode: Record<string, string>;
  
  // Concept -> Score (0-100)
  mastery: Record<string, number>;
  
  // Tracks how a problem was solved: 'independent', 'hint_assisted', 'solution_assisted'
  solveQuality: Record<string, 'independent' | 'hint_assisted' | 'solution_assisted'>;
  
  lastOpenedAt: string;
}
