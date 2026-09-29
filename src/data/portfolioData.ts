export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  concepts: string[];
  pythonCode: string;
  defaultInputLabel?: string;
  defaultInputValue?: string;
}

export interface SkillItem {
  name: string;
  levelText: string;
  category: 'programming' | 'web' | 'ai' | 'tools';
}

export interface JourneyStage {
  stage: number;
  title: string;
  description: string;
  status: 'In Progress' | 'Upcoming';
  keyTopics: string[];
}

export const PORTFOLIO_DATA = {
  profile: {
    fullName: "Lekith Kumar Reddy Amasa",
    shortName: "Lekith Kumar Reddy",
    role: "B.Tech Student | Aspiring Engineer",
    subheading: "B.Tech Student | Aspiring Engineer | Python • Web Development • Generative AI",
    bio: "I’m a first-semester B.Tech student passionate about learning technology, building practical projects, and exploring the possibilities of Python, web development, and Generative AI.",
    aboutBio: "I am a first-semester B.Tech student and an aspiring engineer interested in software development and emerging technologies. I am currently building my foundation in Python, web development, and Generative AI through hands-on projects, hackathons, ideathons, and continuous learning. I enjoy turning simple ideas into working applications and improving my problem-solving skills step by step.",
    experienceLevel: "Beginner / Student",
    education: "B.Tech",
    currentStage: "1st Semester",
    focusAreas: "Python, Web Development, Generative AI",
    interests: "Projects, Hackathons, Ideathons",
    linkedinUrl: "https://www.linkedin.com/in/amasa-lekith-kumar-reddy-2a633b428",
    githubPlaceholder: "[GitHub Profile]",
    email: "amasachitra2912@gmail.com",
  },

  infoCards: [
    {
      title: "Education",
      value: "B.Tech",
      detail: "Engineering Degree Program",
      icon: "GraduationCap"
    },
    {
      title: "Current Stage",
      value: "1st Semester",
      detail: "Building Core Foundations",
      icon: "Calendar"
    },
    {
      title: "Experience Level",
      value: "Beginner / Student",
      detail: "Eager & Active Learner",
      icon: "Sparkles"
    },
    {
      title: "Focus Areas",
      value: "Python, Web Dev, GenAI",
      detail: "Core Technical Streams",
      icon: "Terminal"
    },
    {
      title: "Interests",
      value: "Projects & Hackathons",
      detail: "Hands-on Ideathons & Code",
      icon: "Flame"
    }
  ],

  currentFocus: [
    {
      title: "Python",
      tagline: "Core Programming",
      description: "Strengthening programming fundamentals and problem-solving skills through regular practice and logic challenges.",
      skills: ["Control Flow & Loops", "Functions & Modularity", "Data Structures Basics", "Input/Output Processing"],
      icon: "FileCode2"
    },
    {
      title: "Web Development",
      tagline: "Frontend Foundations",
      description: "Learning to build clean, responsive, and interactive websites using semantic markup and modern design principles.",
      skills: ["HTML5 & Semantic Structure", "CSS3 & Modern Layouts", "JavaScript Basics", "Responsive Design"],
      icon: "Layout"
    },
    {
      title: "Generative AI",
      tagline: "Emerging Technology",
      description: "Exploring AI tools, prompt engineering, and practical GenAI applications to understand future software workflows.",
      skills: ["AI Foundations", "Prompt Engineering", "LLM Workflows", "Practical AI Utilities"],
      icon: "Cpu"
    }
  ],

  skills: [
    // Programming
    { name: "Python", levelText: "Active Learning", category: "programming" },
    { name: "Basic Programming Concepts", levelText: "Core Foundation", category: "programming" },
    { name: "Problem Solving", levelText: "Regular Practice", category: "programming" },
    
    // Web Development
    { name: "HTML", levelText: "Foundational", category: "web" },
    { name: "CSS", levelText: "Foundational", category: "web" },
    { name: "JavaScript Fundamentals", levelText: "Currently Learning", category: "web" },
    { name: "Responsive Web Design", levelText: "Currently Learning", category: "web" },

    // AI & Emerging Technology
    { name: "Generative AI", levelText: "Active Exploration", category: "ai" },
    { name: "AI Fundamentals", levelText: "Foundational Concepts", category: "ai" },
    { name: "Prompt Engineering Fundamentals", levelText: "Hands-on Practice", category: "ai" },

    // Tools
    { name: "Git", levelText: "Version Control Basics", category: "tools" },
    { name: "GitHub", levelText: "Repo Basics & Collaboration", category: "tools" },
    { name: "VS Code", levelText: "Daily Code Editor", category: "tools" },
  ] as SkillItem[],

  projects: [
    {
      id: "voter-eligibility",
      title: "Voter Eligibility Checker",
      description: "A beginner-friendly Python project that checks whether a person is eligible to vote based on their age.",
      technologies: ["Python"],
      concepts: ["Conditional statements", "Input/output", "Logical thinking"],
      pythonCode: `# Voter Eligibility Checker
# Author: Lekith Kumar Reddy Amasa

def check_voting_eligibility(age: int):
    print("=== Voter Eligibility Checker ===")
    if age < 0:
        return "Invalid age entered. Please enter a positive number."
    elif age >= 18:
        return f"Eligible to vote! You are {age} years old (minimum age is 18)."
    else:
        years_left = 18 - age
        return f"Not eligible yet. You need {years_left} more year(s) to vote."

# Example usage
user_age = int(input("Enter your age: "))
result = check_voting_eligibility(user_age)
print(result)`,
      defaultInputLabel: "Enter Age",
      defaultInputValue: "19"
    },
    {
      id: "calculator",
      title: "Calculator",
      description: "A simple calculator application designed to perform basic arithmetic operations.",
      technologies: ["Python"],
      concepts: ["Functions", "Operators", "Input/output", "Conditional logic"],
      pythonCode: `# Simple Arithmetic Calculator
# Author: Lekith Kumar Reddy Amasa

def add(x, y):
    return x + y

def subtract(x, y):
    return x - y

def multiply(x, y):
    return x * y

def divide(x, y):
    if y == 0:
        return "Error: Cannot divide by zero"
    return x / y

def calculate(num1, num2, operator):
    if operator == '+':
        return add(num1, num2)
    elif operator == '-':
        return subtract(num1, num2)
    elif operator == '*':
        return multiply(num1, num2)
    elif operator == '/':
        return divide(num1, num2)
    else:
        return "Invalid operator"

# Example demonstration
n1 = float(input("First number: "))
op = input("Operator (+, -, *, /): ")
n2 = float(input("Second number: "))
print("Result:", calculate(n1, n2, op))`,
      defaultInputLabel: "Calculation (e.g. 15 * 4)",
      defaultInputValue: "25 + 75"
    },
    {
      id: "atm-management",
      title: "ATM Management System",
      description: "A basic ATM management project that simulates common banking operations such as checking balance, depositing money, withdrawing money, and exiting the system.",
      technologies: ["Python"],
      concepts: ["Conditional statements", "Loops", "Functions", "Menu-driven programming"],
      pythonCode: `# ATM Management System Simulator
# Author: Lekith Kumar Reddy Amasa

class SimpleATM:
    def __init__(self, initial_balance=5000):
        self.balance = initial_balance

    def check_balance(self):
        return f"Current Balance: \${self.balance:,.2f}"

    def deposit(self, amount):
        if amount <= 0:
            return "Deposit amount must be greater than zero."
        self.balance += amount
        return f"Successfully deposited \${amount:,.2f}. New balance: \${self.balance:,.2f}"

    def withdraw(self, amount):
        if amount <= 0:
            return "Withdrawal amount must be greater than zero."
        if amount > self.balance:
            return "Transaction declined: Insufficient funds."
        self.balance -= amount
        return f"Successfully withdrew \${amount:,.2f}. Remaining balance: \${self.balance:,.2f}"

# Menu simulation
atm = SimpleATM(5000)
print(atm.check_balance())
print(atm.deposit(1200))
print(atm.withdraw(2000))`,
      defaultInputLabel: "Simulated Action",
      defaultInputValue: "deposit 500"
    },
    {
      id: "student-grade-calculator",
      title: "Student Grade Calculator",
      description: "A simple application that calculates student grades based on marks and demonstrates basic programming logic.",
      technologies: ["Python"],
      concepts: ["Conditional statements", "Arithmetic operations", "Input/output"],
      pythonCode: `# Student Grade Calculator
# Author: Lekith Kumar Reddy Amasa

def compute_grade(marks: float):
    if marks < 0 or marks > 100:
        return "Invalid Marks: Score must be between 0 and 100."
    elif marks >= 90:
        return "Grade A+ (Outstanding Performance)"
    elif marks >= 80:
        return "Grade A (Excellent Performance)"
    elif marks >= 70:
        return "Grade B (Good Effort)"
    elif marks >= 60:
        return "Grade C (Satisfactory)"
    elif marks >= 50:
        return "Grade D (Passing Grade)"
    else:
        return "Needs Improvement (Keep practicing!)"

# Example run
score = float(input("Enter marks obtained (out of 100): "))
grade = compute_grade(score)
print(f"Marks: {score} -> Result: {grade}")`,
      defaultInputLabel: "Enter Marks (0-100)",
      defaultInputValue: "88"
    }
  ] as Project[],

  hackathons: [
    {
      title: "Hackathon Participation",
      status: "Actively Participating & Learning",
      description: "Engaging in competitive student hackathons to collaborate in team environments, brainstorm technical answers to real-world prompts, and build functional prototypes within designated time limits.",
      points: [
        "Hands-on collaborative problem solving with fellow students",
        "Experiencing rapid prototyping and MVP conception",
        "Learning git workflows and team coordination during sprint sessions"
      ],
      icon: "Code"
    },
    {
      title: "Ideathon Participation",
      status: "Exploring Real-World Problems",
      description: "Participating in college and student ideathons to research societal and technological challenges, formulate structured problem statements, and present technological solutions with clarity.",
      points: [
        "Structuring problem definitions and user impact",
        "Brainstorming practical engineering solutions to daily hurdles",
        "Developing structured presentations and articulation skills"
      ],
      icon: "Lightbulb"
    },
    {
      title: "Problem Solving & Idea Development",
      status: "Continuous Development",
      description: "Deconstructing complex problems into manageable sub-tasks. Translating concepts on paper into procedural logic and clean step-by-step programming routines.",
      points: [
        "Breaking down user flows into inputs, outputs, and edge conditions",
        "Strengthening computational and algorithmic thinking",
        "Iterating based on feedback from mentors and peers"
      ],
      icon: "Workflow"
    }
  ],

  learningJourney: [
    {
      stage: 1,
      title: "Building Programming Foundations",
      description: "Mastering the bedrock of computer science through Python: syntax, conditionals, iteration loops, reusable functions, and core computational logic.",
      status: "In Progress",
      keyTopics: ["Python Syntax", "Conditional Logic", "Loops & Iterations", "Functions & Scope", "Algorithmic Thinking"]
    },
    {
      stage: 2,
      title: "Exploring Web Development",
      description: "Learning how websites are structured, styled, and made interactive for end users across various screen resolutions.",
      status: "In Progress",
      keyTopics: ["Semantic HTML5", "Modern CSS & Flexbox/Grid", "JavaScript Fundamentals", "Responsive UI Design"]
    },
    {
      stage: 3,
      title: "Exploring Generative AI",
      description: "Understanding core AI principles, crafting precise prompts, and investigating practical GenAI tool integrations into development workflows.",
      status: "In Progress",
      keyTopics: ["Generative AI Basics", "Prompt Engineering", "API Integration Concepts", "Developer AI Tools"]
    },
    {
      stage: 4,
      title: "Building More Real-World Projects",
      description: "Future milestone: Integrating frontend, backend, and intelligent APIs into larger, comprehensive, and impactful engineering applications.",
      status: "Upcoming",
      keyTopics: ["Full-Stack Architecture", "Database Integrations", "Open Source Contribution", "Production Deployment"]
    }
  ] as JourneyStage[],

  goals: [
    {
      title: "Build strong programming fundamentals",
      category: "Foundation",
      description: "Establish a rock-solid understanding of computer science concepts, memory, and clean code hygiene."
    },
    {
      title: "Become better at Python",
      category: "Core Language",
      description: "Transition from basic scripts to advanced data structures, libraries, and modular object-oriented design."
    },
    {
      title: "Develop real-world web applications",
      category: "Full-Stack Growth",
      description: "Combine HTML, CSS, and modern JavaScript to build helpful, interactive, and responsive web products."
    },
    {
      title: "Learn Generative AI",
      category: "Emerging Tech",
      description: "Master modern AI utilities, prompt techniques, and explore intelligent automation in code."
    },
    {
      title: "Participate in more hackathons and ideathons",
      category: "Collaboration",
      description: "Team up with peers, solve tough problem statements under time constraints, and learn from other builders."
    },
    {
      title: "Build meaningful projects",
      category: "Practical Application",
      description: "Solve practical day-to-day problems through code rather than just writing textbook exercises."
    },
    {
      title: "Improve problem-solving and software development skills",
      category: "Engineering Mindset",
      description: "Continuously enhance analytical capability, algorithm fluency, debugging speed, and code quality."
    }
  ]
};
