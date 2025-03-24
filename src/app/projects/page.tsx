import React from "react";
import Link from "next/link";

export default function Projects() {
  // 项目数据，分为设计和开发两类
  const projects = [
    {
      id: 'strategy-game',
      title: '策略游戏设计',
      description: '回合制策略游戏的完整设计文档与原型实现，包含资源管理与战术战斗系统。',
      image: '/images/projects/strategy-game.jpg',
      tags: ['游戏设计', '战略', '回合制'],
      category: 'design'
    },
    {
      id: 'rpg-narrative',
      title: 'RPG叙事系统',
      description: '开放世界RPG的分支叙事架构设计与任务系统，注重玩家选择与游戏世界的互动。',
      image: '/images/projects/rpg-narrative.jpg',
      tags: ['叙事设计', 'RPG', '剧情分支'],
      category: 'design'
    },
    {
      id: 'puzzle-game',
      title: '解谜游戏开发',
      description: '基于物理的解谜游戏开发，使用Unity实现核心机制与关卡设计。',
      image: '/images/projects/puzzle-mechanics.jpg',
      tags: ['Unity', 'C#', '物理系统'],
      category: 'development'
    },
    {
      id: 'game-ai',
      title: '游戏AI系统',
      description: '针对多种游戏类型的AI行为系统实现，包含状态机和行为树的实际应用。',
      image: '/images/projects/game-ai.jpg',
      tags: ['AI编程', '行为树', 'C++'],
      category: 'development'
    }
  ];

  // 获取设计和开发类别的项目
  const designProjects = projects.filter(project => project.category === 'design');
  const devProjects = projects.filter(project => project.category === 'development');

  return (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">作品集</h1>
      <p className="text-lg text-gray-800 mb-10">
        我的游戏设计与开发作品，展示从概念到实现的完整项目
      </p>
      
      {/* 设计项目 */}
      <h2 className="text-2xl font-bold text-gray-900 mb-6 inline-block border-b-2 border-blue-500 pb-1">游戏设计</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {designProjects.map((project) => (
          <div key={project.id} className="bg-white rounded-lg shadow-sm overflow-hidden transition-transform hover:translate-y-[-4px]">
            <div className="h-48 bg-blue-100 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-blue-500 font-medium">项目图片</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
              <p className="text-gray-800 mb-4">{project.description}</p>
              <div className="mb-4">
                {project.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-medium text-gray-800 mr-2 mb-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Link href={`/projects/${project.id}`} className="text-blue-600 font-medium hover:text-blue-800 transition-colors">
                查看详情 →
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* 开发项目 */}
      <h2 className="text-2xl font-bold text-gray-900 mb-6 inline-block border-b-2 border-green-500 pb-1">技术开发</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {devProjects.map((project) => (
          <div key={project.id} className="bg-white rounded-lg shadow-sm overflow-hidden transition-transform hover:translate-y-[-4px]">
            <div className="h-48 bg-green-100 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-green-500 font-medium">项目图片</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
              <p className="text-gray-800 mb-4">{project.description}</p>
              <div className="mb-4">
                {project.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-medium text-gray-800 mr-2 mb-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Link href={`/projects/${project.id}`} className="text-blue-600 font-medium hover:text-blue-800 transition-colors">
                查看详情 →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}