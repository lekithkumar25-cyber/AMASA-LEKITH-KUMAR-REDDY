import { useState } from 'react';
import { X, Play, Copy, Check, Terminal, ExternalLink } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
  onOpenGithubNotice: () => void;
}

export function ProjectModal({ project, onClose, onOpenGithubNotice }: ProjectModalProps) {
  const [activeTab, setActiveTab] = useState<'demo' | 'code'>('demo');
  const [copied, setCopied] = useState(false);

  // Simulation states
  // 1. Voter
  const [voterAge, setVoterAge] = useState<string>('19');
  const [voterOutput, setVoterOutput] = useState<string>('');

  // 2. Calculator
  const [calcNum1, setCalcNum1] = useState<string>('25');
  const [calcNum2, setCalcNum2] = useState<string>('75');
  const [calcOp, setCalcOp] = useState<string>('+');
  const [calcOutput, setCalcOutput] = useState<string>('');

  // 3. ATM
  const [atmBalance, setAtmBalance] = useState<number>(5000);
  const [atmAmount, setAtmAmount] = useState<string>('500');
  const [atmLog, setAtmLog] = useState<string[]>([
    'ATM System Initialized. Available Balance: $5,000.00'
  ]);

  // 4. Grade
  const [gradeMarks, setGradeMarks] = useState<string>('88');
  const [gradeOutput, setGradeOutput] = useState<string>('');

  const copyCode = () => {
    navigator.clipboard.writeText(project.pythonCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Run Voter Checker
  const runVoterChecker = () => {
    const age = parseInt(voterAge, 10);
    if (isNaN(age) || age < 0) {
      setVoterOutput('Invalid age entered. Please enter a positive whole number.');
      return;
    }
    if (age >= 18) {
      setVoterOutput(`✅ Eligible to vote! You are ${age} years old (minimum requirement is 18).`);
    } else {
      const remaining = 18 - age;
      setVoterOutput(`❌ Not eligible yet. You need ${remaining} more year(s) to become eligible.`);
    }
  };

  // Run Calculator
  const runCalculator = () => {
    const n1 = parseFloat(calcNum1);
    const n2 = parseFloat(calcNum2);
    if (isNaN(n1) || isNaN(n2)) {
      setCalcOutput('Please enter valid numeric inputs.');
      return;
    }
    let res = 0;
    if (calcOp === '+') res = n1 + n2;
    else if (calcOp === '-') res = n1 - n2;
    else if (calcOp === '*') res = n1 * n2;
    else if (calcOp === '/') {
      if (n2 === 0) {
        setCalcOutput('Error: Cannot divide by zero (ZeroDivisionError).');
        return;
      }
      res = n1 / n2;
    }
    setCalcOutput(`${n1} ${calcOp} ${n2} = ${res}`);
  };

  // Run ATM Actions
  const runAtmAction = (action: 'balance' | 'deposit' | 'withdraw') => {
    const amt = parseFloat(atmAmount);
    if (action === 'balance') {
      setAtmLog((prev) => [
        `[INQUIRY] Current Account Balance: $${atmBalance.toLocaleString(undefined, { minimumFractionDigits: 2 })}`,
        ...prev.slice(0, 4)
      ]);
    } else if (action === 'deposit') {
      if (isNaN(amt) || amt <= 0) {
        setAtmLog((prev) => ['[ERROR] Deposit amount must be greater than $0', ...prev.slice(0, 4)]);
        return;
      }
      const newBal = atmBalance + amt;
      setAtmBalance(newBal);
      setAtmLog((prev) => [
        `[DEPOSIT] Successfully deposited $${amt.toFixed(2)}. New Balance: $${newBal.toLocaleString(undefined, { minimumFractionDigits: 2 })}`,
        ...prev.slice(0, 4)
      ]);
    } else if (action === 'withdraw') {
      if (isNaN(amt) || amt <= 0) {
        setAtmLog((prev) => ['[ERROR] Withdrawal amount must be greater than $0', ...prev.slice(0, 4)]);
        return;
      }
      if (amt > atmBalance) {
        setAtmLog((prev) => [
          `[DECLINED] Insufficient funds. Requested: $${amt.toFixed(2)} | Available: $${atmBalance.toLocaleString(undefined, { minimumFractionDigits: 2 })}`,
          ...prev.slice(0, 4)
        ]);
        return;
      }
      const newBal = atmBalance - amt;
      setAtmBalance(newBal);
      setAtmLog((prev) => [
        `[WITHDRAWAL] Successfully dispensed $${amt.toFixed(2)}. Remaining Balance: $${newBal.toLocaleString(undefined, { minimumFractionDigits: 2 })}`,
        ...prev.slice(0, 4)
      ]);
    }
  };

  // Run Grade Calculator
  const runGradeCalculator = () => {
    const marks = parseFloat(gradeMarks);
    if (isNaN(marks) || marks < 0 || marks > 100) {
      setGradeOutput('Invalid Marks: Please enter a score between 0 and 100.');
      return;
    }
    if (marks >= 90) setGradeOutput(`Score: ${marks}/100 ➔ Grade A+ (Outstanding Performance)`);
    else if (marks >= 80) setGradeOutput(`Score: ${marks}/100 ➔ Grade A (Excellent Performance)`);
    else if (marks >= 70) setGradeOutput(`Score: ${marks}/100 ➔ Grade B (Good Effort)`);
    else if (marks >= 60) setGradeOutput(`Score: ${marks}/100 ➔ Grade C (Satisfactory)`);
    else if (marks >= 50) setGradeOutput(`Score: ${marks}/100 ➔ Grade D (Passing Grade)`);
    else setGradeOutput(`Score: ${marks}/100 ➔ Needs Improvement (Keep practicing!)`);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xl max-w-2xl w-full overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex items-start justify-between p-5 border-b border-slate-200 bg-slate-50/60">
          <div>
            <div className="text-xs font-semibold text-blue-600 uppercase tracking-wide">
              Python Project Demo & Inspection
            </div>
            <h3 id="modal-project-title" className="text-xl font-bold text-slate-900 mt-0.5">
              {project.title}
            </h3>
            <p className="text-xs text-slate-500 mt-1 max-w-md">
              {project.description}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors focus:ring-2 focus:ring-blue-600"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab navigation */}
        <div className="flex items-center gap-2 px-5 pt-3 border-b border-slate-200 bg-white">
          <button
            type="button"
            onClick={() => setActiveTab('demo')}
            className={`inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold border-b-2 transition-all cursor-pointer ${
              activeTab === 'demo'
                ? 'border-blue-600 text-blue-700'
                : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            <Play className="w-3.5 h-3.5" />
            Interactive Logic Simulator
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('code')}
            className={`inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold border-b-2 transition-all cursor-pointer ${
              activeTab === 'code'
                ? 'border-blue-600 text-blue-700'
                : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            <Terminal className="w-3.5 h-3.5" />
            Python Source Code
          </button>
        </div>

        {/* Tab Body */}
        <div className="p-5 overflow-y-auto flex-1 bg-white">
          {activeTab === 'demo' ? (
            <div className="space-y-4">
              <div className="text-xs text-slate-500 bg-blue-50/60 border border-blue-100 rounded-lg p-3">
                <strong>Live Browser Simulation:</strong> This runs the exact logical rules written in Lekith's Python program directly in your browser.
              </div>

              {/* Voter Checker Form */}
              {project.id === 'voter-eligibility' && (
                <div className="space-y-3">
                  <div>
                    <label htmlFor="voter-age" className="block text-xs font-semibold text-slate-700 mb-1">
                      Candidate Age (Years)
                    </label>
                    <div className="flex gap-2">
                      <input
                        id="voter-age"
                        type="number"
                        min="0"
                        max="120"
                        value={voterAge}
                        onChange={(e) => setVoterAge(e.target.value)}
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:border-blue-600 focus:outline-none"
                        placeholder="e.g. 19"
                      />
                      <button
                        type="button"
                        onClick={runVoterChecker}
                        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-lg shrink-0 transition-colors"
                      >
                        Check Eligibility
                      </button>
                    </div>
                  </div>

                  {voterOutput && (
                    <div className="mt-3 p-3 rounded-lg bg-slate-900 text-slate-100 font-mono text-xs">
                      <div className="text-slate-400 text-[10px] uppercase tracking-wider mb-1">Terminal Output:</div>
                      {voterOutput}
                    </div>
                  )}
                </div>
              )}

              {/* Calculator Form */}
              {project.id === 'calculator' && (
                <div className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Number 1</label>
                      <input
                        type="number"
                        value={calcNum1}
                        onChange={(e) => setCalcNum1(e.target.value)}
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:border-blue-600 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Operator</label>
                      <select
                        value={calcOp}
                        onChange={(e) => setCalcOp(e.target.value)}
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:border-blue-600 focus:outline-none bg-white"
                      >
                        <option value="+">+ (Addition)</option>
                        <option value="-">- (Subtraction)</option>
                        <option value="*">* (Multiplication)</option>
                        <option value="/">/ (Division)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Number 2</label>
                      <input
                        type="number"
                        value={calcNum2}
                        onChange={(e) => setCalcNum2(e.target.value)}
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:border-blue-600 focus:outline-none"
                      />
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={runCalculator}
                    className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-lg transition-colors"
                  >
                    Execute Calculation
                  </button>

                  {calcOutput && (
                    <div className="mt-3 p-3 rounded-lg bg-slate-900 text-slate-100 font-mono text-xs">
                      <div className="text-slate-400 text-[10px] uppercase tracking-wider mb-1">Terminal Output:</div>
                      {calcOutput}
                    </div>
                  )}
                </div>
              )}

              {/* ATM Simulator */}
              {project.id === 'atm-management' && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs">
                    <span className="text-slate-600 font-medium">Account Simulation Balance:</span>
                    <span className="font-bold text-slate-900 text-sm font-mono">
                      ${atmBalance.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                    </span>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Transaction Amount ($)
                    </label>
                    <input
                      type="number"
                      min="1"
                      value={atmAmount}
                      onChange={(e) => setAtmAmount(e.target.value)}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:border-blue-600 focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    <button
                      type="button"
                      onClick={() => runAtmAction('balance')}
                      className="py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded-lg transition-colors border border-slate-200"
                    >
                      Check Balance
                    </button>
                    <button
                      type="button"
                      onClick={() => runAtmAction('deposit')}
                      className="py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-lg transition-colors"
                    >
                      Deposit
                    </button>
                    <button
                      type="button"
                      onClick={() => runAtmAction('withdraw')}
                      className="py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-lg transition-colors"
                    >
                      Withdraw
                    </button>
                  </div>

                  <div className="p-3 rounded-lg bg-slate-900 text-slate-100 font-mono text-xs space-y-1">
                    <div className="text-slate-400 text-[10px] uppercase tracking-wider mb-1">
                      Simulated ATM Activity Log:
                    </div>
                    {atmLog.map((log, i) => (
                      <div key={i} className="text-[11px] leading-relaxed">
                        {log}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Student Grade Calculator */}
              {project.id === 'student-grade-calculator' && (
                <div className="space-y-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Student Marks (0 - 100)
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="number"
                        min="0"
                        max="100"
                        value={gradeMarks}
                        onChange={(e) => setGradeMarks(e.target.value)}
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:border-blue-600 focus:outline-none"
                        placeholder="e.g. 88"
                      />
                      <button
                        type="button"
                        onClick={runGradeCalculator}
                        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-lg shrink-0 transition-colors"
                      >
                        Compute Grade
                      </button>
                    </div>
                  </div>

                  {gradeOutput && (
                    <div className="mt-3 p-3 rounded-lg bg-slate-900 text-slate-100 font-mono text-xs">
                      <div className="text-slate-400 text-[10px] uppercase tracking-wider mb-1">Terminal Output:</div>
                      {gradeOutput}
                    </div>
                  )}
                </div>
              )}

              {/* Key Concepts Practiced */}
              <div className="pt-3 border-t border-slate-100">
                <div className="text-xs font-semibold text-slate-700 mb-1.5">Concepts Reinforced:</div>
                <div className="flex flex-wrap gap-1.5">
                  {project.concepts.map((concept) => (
                    <span
                      key={concept}
                      className="text-[11px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-medium"
                    >
                      {concept}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="relative">
              <button
                type="button"
                onClick={copyCode}
                className="absolute top-2 right-2 inline-flex items-center gap-1 px-2.5 py-1 text-xs bg-slate-800 hover:bg-slate-700 text-slate-200 rounded transition-colors"
                aria-label="Copy code to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
              <pre className="p-4 rounded-xl bg-slate-950 text-slate-100 font-mono text-xs overflow-x-auto leading-relaxed border border-slate-800">
                <code>{project.pythonCode}</code>
              </pre>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-slate-200 bg-slate-50 flex items-center justify-between">
          <button
            type="button"
            onClick={onOpenGithubNotice}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 hover:text-slate-900 transition-colors"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>[GitHub Profile] Repository Placeholder</span>
          </button>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-semibold text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-100 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
