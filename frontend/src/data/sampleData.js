// Sample Quiz Data for Quizzette
export const sampleQuizzes = [
  {
    id: 1,
    title: "JavaScript Fundamentals",
    description: "Test your knowledge of JavaScript basics including variables, functions, DOM manipulation, and ES6 features. Perfect for beginners and intermediate developers.",
    duration: 30,
    totalQuestions: 15,
    difficulty: "easy",
    isActive: true,
    createdBy: "John Doe",
    accessCode: "JS2024",
    category: "Programming",
    tags: ["JavaScript", "Web Development", "Frontend"]
  },
  {
    id: 2,
    title: "React Advanced Concepts",
    description: "Deep dive into React hooks, context API, performance optimization, custom hooks, and advanced patterns. For experienced React developers.",
    duration: 45,
    totalQuestions: 20,
    difficulty: "hard",
    isActive: true,
    createdBy: "Jane Smith",
    accessCode: "REACT2024",
    category: "Programming",
    tags: ["React", "JavaScript", "Frontend", "Hooks"]
  },
  {
    id: 3,
    title: "Python Data Structures",
    description: "Comprehensive quiz covering Python lists, dictionaries, sets, tuples, and their methods. Includes time complexity and best practices.",
    duration: 25,
    totalQuestions: 12,
    difficulty: "medium",
    isActive: true,
    createdBy: "Mike Johnson",
    accessCode: "PY2024",
    category: "Programming",
    tags: ["Python", "Data Structures", "Algorithms"]
  },
  {
    id: 4,
    title: "Database Design Principles",
    description: "Test your understanding of relational databases, normalization, SQL queries, indexing, and database optimization techniques.",
    duration: 40,
    totalQuestions: 18,
    difficulty: "medium",
    isActive: false,
    createdBy: "Sarah Wilson",
    accessCode: "DB2024",
    category: "Database",
    tags: ["SQL", "Database", "Normalization"]
  },
  {
    id: 5,
    title: "CSS Grid & Flexbox Mastery",
    description: "Master modern CSS layout techniques with Grid and Flexbox. Covers responsive design, alignment, and complex layouts.",
    duration: 35,
    totalQuestions: 16,
    difficulty: "medium",
    isActive: true,
    createdBy: "Alex Chen",
    accessCode: "CSS2024",
    category: "Web Design",
    tags: ["CSS", "Layout", "Responsive Design"]
  },
  {
    id: 6,
    title: "Node.js & Express Fundamentals",
    description: "Backend development with Node.js and Express. Covers routing, middleware, authentication, and RESTful API design.",
    duration: 50,
    totalQuestions: 22,
    difficulty: "hard",
    isActive: true,
    createdBy: "David Kumar",
    accessCode: "NODE2024",
    category: "Backend",
    tags: ["Node.js", "Express", "Backend", "API"]
  },
  {
    id: 7,
    title: "Git Version Control",
    description: "Essential Git commands, branching strategies, merge conflicts, and collaborative workflows. Perfect for team development.",
    duration: 20,
    totalQuestions: 10,
    difficulty: "easy",
    isActive: true,
    createdBy: "Lisa Park",
    accessCode: "GIT2024",
    category: "Tools",
    tags: ["Git", "Version Control", "Collaboration"]
  },
  {
    id: 8,
    title: "Machine Learning Basics",
    description: "Introduction to ML concepts, supervised/unsupervised learning, common algorithms, and model evaluation metrics.",
    duration: 60,
    totalQuestions: 25,
    difficulty: "hard",
    isActive: true,
    createdBy: "Dr. Emily Watson",
    accessCode: "ML2024",
    category: "Data Science",
    tags: ["Machine Learning", "AI", "Data Science"]
  }
];// 
Sample Questions for each quiz
export const sampleQuestions = {
  1: [ // JavaScript Fundamentals
    {
      id: 1,
      question: "What is the correct way to declare a variable in JavaScript ES6?",
      options: [
        "var myVariable = 'Hello';",
        "let myVariable = 'Hello';",
        "variable myVariable = 'Hello';",
        "declare myVariable = 'Hello';"
      ],
      correctAnswer: 1,
      explanation: "ES6 introduced 'let' and 'const' which have block scope, making them preferred over 'var'."
    },
    {
      id: 2,
      question: "Which method is used to add an element to the end of an array?",
      options: [
        "append()",
        "push()",
        "add()",
        "insert()"
      ],
      correctAnswer: 1,
      explanation: "The push() method adds one or more elements to the end of an array and returns the new length."
    },
    {
      id: 3,
      question: "What does DOM stand for?",
      options: [
        "Document Object Model",
        "Data Object Management",
        "Dynamic Object Method",
        "Document Oriented Model"
      ],
      correctAnswer: 0,
      explanation: "DOM stands for Document Object Model, which represents the structure of HTML documents."
    },
    {
      id: 4,
      question: "Which of the following is NOT a JavaScript data type?",
      options: [
        "undefined",
        "boolean",
        "float",
        "symbol"
      ],
      correctAnswer: 2,
      explanation: "JavaScript uses 'number' for all numeric values, there's no separate 'float' type."
    },
    {
      id: 5,
      question: "What is the output of: console.log(typeof null)?",
      options: [
        "null",
        "undefined",
        "object",
        "boolean"
      ],
      correctAnswer: 2,
      explanation: "This is a known JavaScript quirk - typeof null returns 'object', which is considered a bug in the language."
    }
  ],
  
  2: [ // React Advanced Concepts
    {
      id: 1,
      question: "Which hook is used to perform side effects in functional components?",
      options: [
        "useState",
        "useEffect",
        "useContext",
        "useReducer"
      ],
      correctAnswer: 1,
      explanation: "useEffect is used for side effects like API calls, subscriptions, and DOM manipulation."
    },
    {
      id: 2,
      question: "What is the purpose of React.memo()?",
      options: [
        "To memorize component state",
        "To prevent unnecessary re-renders",
        "To cache API responses",
        "To store component props"
      ],
      correctAnswer: 1,
      explanation: "React.memo is a higher-order component that prevents re-renders when props haven't changed."
    },
    {
      id: 3,
      question: "Which hook would you use to access context in a functional component?",
      options: [
        "useContext",
        "useProvider",
        "useConsumer",
        "useContextValue"
      ],
      correctAnswer: 0,
      explanation: "useContext hook allows functional components to consume context values."
    },
    {
      id: 4,
      question: "What is the correct way to update state that depends on the previous state?",
      options: [
        "setState(state + 1)",
        "setState(prevState => prevState + 1)",
        "setState(this.state + 1)",
        "setState(++state)"
      ],
      correctAnswer: 1,
      explanation: "Using a function that receives the previous state ensures the update is based on the latest state."
    }
  ],
  
  3: [ // Python Data Structures
    {
      id: 1,
      question: "Which Python data structure is ordered and mutable?",
      options: [
        "tuple",
        "set",
        "list",
        "frozenset"
      ],
      correctAnswer: 2,
      explanation: "Lists are ordered collections that can be modified after creation."
    },
    {
      id: 2,
      question: "What is the time complexity of accessing an element in a Python dictionary?",
      options: [
        "O(1) average case",
        "O(n)",
        "O(log n)",
        "O(n²)"
      ],
      correctAnswer: 0,
      explanation: "Dictionary access is O(1) on average due to hash table implementation."
    },
    {
      id: 3,
      question: "Which method removes and returns an arbitrary element from a set?",
      options: [
        "remove()",
        "discard()",
        "pop()",
        "delete()"
      ],
      correctAnswer: 2,
      explanation: "The pop() method removes and returns an arbitrary element from a set."
    }
  ],
  
  5: [ // CSS Grid & Flexbox
    {
      id: 1,
      question: "Which CSS property is used to create a flex container?",
      options: [
        "display: flex",
        "flex-container: true",
        "layout: flex",
        "flex: container"
      ],
      correctAnswer: 0,
      explanation: "Setting display: flex on an element makes it a flex container."
    },
    {
      id: 2,
      question: "In CSS Grid, which property defines the size of grid columns?",
      options: [
        "grid-columns",
        "grid-template-columns",
        "column-template",
        "grid-column-size"
      ],
      correctAnswer: 1,
      explanation: "grid-template-columns defines the line names and track sizing functions of the grid columns."
    },
    {
      id: 3,
      question: "What does 'justify-content: space-between' do in flexbox?",
      options: [
        "Centers items with equal space around them",
        "Distributes items with space only between them",
        "Aligns items to the start",
        "Stretches items to fill the container"
      ],
      correctAnswer: 1,
      explanation: "space-between distributes items evenly with the first item at the start and last item at the end."
    }
  ],
  
  7: [ // Git Version Control
    {
      id: 1,
      question: "Which command is used to create a new Git repository?",
      options: [
        "git create",
        "git init",
        "git new",
        "git start"
      ],
      correctAnswer: 1,
      explanation: "git init initializes a new Git repository in the current directory."
    },
    {
      id: 2,
      question: "What does 'git pull' do?",
      options: [
        "Downloads changes from remote repository",
        "Fetches and merges changes from remote repository",
        "Uploads changes to remote repository",
        "Creates a new branch"
      ],
      correctAnswer: 1,
      explanation: "git pull fetches changes from the remote repository and merges them into the current branch."
    },
    {
      id: 3,
      question: "Which command shows the commit history?",
      options: [
        "git history",
        "git commits",
        "git log",
        "git show"
      ],
      correctAnswer: 2,
      explanation: "git log displays the commit history for the current branch."
    }
  ]
};