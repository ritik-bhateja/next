// This is a parallel route slot (@team)
// It renders simultaneously with the main dashboard page

export default async function TeamPanel() {
  // Simulate data fetching with different timing
  await new Promise(resolve => setTimeout(resolve, 800));
  
  const teamMembers = [
    {
      id: 1,
      name: 'Alice Johnson',
      role: 'Frontend Developer',
      status: 'online',
      avatar: '👩‍💻',
      lastActive: 'Active now'
    },
    {
      id: 2,
      name: 'Bob Smith',
      role: 'Backend Developer',
      status: 'away',
      avatar: '👨‍💻',
      lastActive: '5 minutes ago'
    },
    {
      id: 3,
      name: 'Carol Davis',
      role: 'UI/UX Designer',
      status: 'online',
      avatar: '👩‍🎨',
      lastActive: 'Active now'
    },
    {
      id: 4,
      name: 'David Wilson',
      role: 'DevOps Engineer',
      status: 'offline',
      avatar: '👨‍🔧',
      lastActive: '2 hours ago'
    }
  ];
  
  const getStatusColor = (status) => {
    switch (status) {
      case 'online': return 'bg-green-500';
      case 'away': return 'bg-yellow-500';
      case 'offline': return 'bg-gray-400';
      default: return 'bg-gray-400';
    }
  };
  
  return (
    <div className="space-y-3">
      {teamMembers.map((member) => (
        <div 
          key={member.id}
          className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
        >
          <div className="relative">
            <span className="text-2xl">{member.avatar}</span>
            <div className={`absolute -bottom-1 -right-1 w-3 h-3 ${getStatusColor(member.status)} rounded-full border-2 border-white dark:border-gray-700`}></div>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
              {member.name}
            </p>
            <p className="text-xs text-gray-600 dark:text-gray-400">
              {member.role}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-500">
              {member.lastActive}
            </p>
          </div>
        </div>
      ))}
      
      <div className="text-center pt-2">
        <button className="text-xs text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
          View All Team Members
        </button>
      </div>
      
      <div className="text-center pt-2 border-t border-gray-200 dark:border-gray-600">
        <div className="text-xs text-gray-500 dark:text-gray-400">
          {teamMembers.filter(m => m.status === 'online').length} online, {teamMembers.length} total
        </div>
      </div>
    </div>
  );
}