import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { 
  Wallet, 
  PiggyBank, 
  FileText, 
  Download, 
  CreditCard, 
  CheckCircle2, 
  Clock,
  BookOpen
} from 'lucide-react';

export function Dashboard() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');

  if (!user) return null;

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Wallet },
    { id: 'dues', label: 'Monthly Dues', icon: CreditCard },
    { id: 'ajo', label: 'Ajo / Contributions', icon: PiggyBank },
    { id: 'loans', label: 'Support Loans', icon: FileText },
    { id: 'minutes', label: 'Meeting Minutes', icon: Download },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-igbo-dark">Welcome, {user.name}</h1>
          <p className="text-gray-600 mt-1">Member ID: OKA-{user.id.padStart(4, '0')} | Joined: {user.joinDate}</p>
        </div>
        <a href="#" className="flex items-center gap-2 text-igbo-terra hover:text-orange-800 font-medium bg-orange-50 px-4 py-2 rounded-md border border-orange-200">
          <BookOpen size={18} />
          View Constitution
        </a>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar */}
        <div className="w-full lg:w-64 shrink-0">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden flex flex-row lg:flex-col overflow-x-auto snap-x">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-shrink-0 lg:w-full flex items-center gap-3 px-6 py-4 text-left font-medium transition-colors border-r lg:border-r-0 lg:border-b border-gray-100 last:border-0 snap-start whitespace-nowrap ${
                  activeTab === tab.id 
                    ? 'bg-igbo-green text-white' 
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <tab.icon size={20} />
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1">
          {activeTab === 'overview' && <OverviewTab />}
          {activeTab === 'dues' && <DuesTab />}
          {activeTab === 'ajo' && <AjoTab />}
          {activeTab === 'loans' && <LoansTab />}
          {activeTab === 'minutes' && <MinutesTab />}
        </div>
      </div>
    </div>
  );
}

function OverviewTab() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 border-t-4 border-t-igbo-green">
          <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">Dues Status</h3>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="text-green-500" size={24} />
            <span className="text-2xl font-bold text-igbo-dark">Up to Date</span>
          </div>
          <p className="text-sm text-gray-500 mt-2">Paid through Dec 2026</p>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 border-t-4 border-t-igbo-gold">
          <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">Ajo Pool Position</h3>
          <div className="flex items-center gap-2">
            <span className="text-3xl font-bold text-igbo-dark">#4</span>
          </div>
          <p className="text-sm text-gray-500 mt-2">Expected payout: Oct 2026</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 border-t-4 border-t-igbo-terra">
          <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">Active Loans</h3>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-igbo-dark">None</span>
          </div>
          <p className="text-sm text-gray-500 mt-2">Eligible to apply</p>
        </div>
      </div>

      <div className="bg-igbo-dark text-white p-6 rounded-xl shadow-sm relative overflow-hidden">
        <div className="absolute inset-0 uli-pattern-dark opacity-20"></div>
        <div className="relative z-10">
          <h3 className="text-xl font-bold text-igbo-gold mb-2">Next Zoom Meeting</h3>
          <p className="mb-4">Last Sunday of the month at 6:00 PM (EST)</p>
          <a href="#" className="inline-block bg-igbo-green hover:bg-green-700 text-white px-6 py-2 rounded-md font-medium transition-colors">
            Join Zoom Meeting
          </a>
        </div>
      </div>
    </div>
  );
}

function DuesTab() {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-igbo-dark">2026 Dues Tracker</h2>
        <button className="bg-igbo-green text-white px-4 py-2 rounded-md font-medium hover:bg-green-800">
          Pay Outstanding
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {months.map((month, idx) => (
          <div key={month} className={`p-4 rounded-lg border ${idx < 4 ? 'bg-green-50 border-green-200' : 'bg-gray-50 border-gray-200'}`}>
            <div className="flex justify-between items-center mb-2">
              <span className="font-bold text-gray-700">{month}</span>
              {idx < 4 ? <CheckCircle2 size={18} className="text-green-500" /> : <Clock size={18} className="text-gray-400" />}
            </div>
            <span className={`text-sm ${idx < 4 ? 'text-green-700' : 'text-gray-500'}`}>
              {idx < 4 ? 'Paid $50' : 'Pending'}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function AjoTab() {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-igbo-dark mb-2">Ajo (Contribution Pool)</h2>
        <p className="text-gray-600 mb-6">Current cycle: Jan 2026 - Dec 2026. Monthly contribution: $200.</p>
        
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mb-8 text-center">
          <h3 className="text-lg font-medium text-orange-800 mb-2">Current Pool Amount</h3>
          <p className="text-4xl font-bold text-igbo-terra">$4,000</p>
          <p className="text-sm text-orange-700 mt-2">To be disbursed to: <strong>Chinedu Nwachukwu</strong> this month.</p>
        </div>

        <button className="w-full bg-igbo-gold text-igbo-dark font-bold py-3 rounded-md hover:bg-yellow-500 transition-colors">
          Make Monthly Ajo Contribution
        </button>
      </div>
    </div>
  );
}

function LoansTab() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h2 className="text-2xl font-bold text-igbo-dark mb-4">Support Facilities (Soft Loans)</h2>
      <p className="text-gray-600 mb-8">As a member in good standing, you are eligible to apply for interest-free soft loans up to $2,000 for emergencies or business support.</p>
      
      <form className="space-y-4 max-w-2xl">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Loan Amount Requested ($)</label>
          <input type="number" className="w-full p-3 border border-gray-300 rounded-md focus:ring-igbo-green focus:border-igbo-green text-base" placeholder="e.g. 1000" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Purpose of Loan</label>
          <textarea className="w-full p-3 border border-gray-300 rounded-md focus:ring-igbo-green focus:border-igbo-green text-base" rows={4} placeholder="Briefly explain what the loan is for..."></textarea>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Proposed Repayment Plan (Months)</label>
          <select className="w-full p-3 border border-gray-300 rounded-md focus:ring-igbo-green focus:border-igbo-green text-base">
            <option>3 Months</option>
            <option>6 Months</option>
            <option>12 Months</option>
          </select>
        </div>
        <button type="button" className="bg-igbo-green text-white px-6 py-3 rounded-md font-medium hover:bg-green-800 transition-colors">
          Submit Application
        </button>
      </form>
    </div>
  );
}

function MinutesTab() {
  const minutes = [
    { date: 'March 2026', title: 'General Meeting Minutes', size: '2.4 MB' },
    { date: 'February 2026', title: 'General Meeting Minutes', size: '1.8 MB' },
    { date: 'January 2026', title: 'New Year Strategy Meeting', size: '3.1 MB' },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h2 className="text-2xl font-bold text-igbo-dark mb-6">Meeting Minutes Archive</h2>
      <div className="space-y-4">
        {minutes.map((doc, idx) => (
          <div key={idx} className="flex items-center justify-between p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
            <div className="flex items-center gap-4">
              <div className="bg-igbo-green/10 p-3 rounded-full text-igbo-green">
                <FileText size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-800">{doc.title}</h3>
                <p className="text-sm text-gray-500">{doc.date} • PDF • {doc.size}</p>
              </div>
            </div>
            <button className="text-igbo-terra hover:text-orange-800 flex items-center gap-2 font-medium">
              <Download size={18} />
              <span className="hidden sm:inline">Download</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
