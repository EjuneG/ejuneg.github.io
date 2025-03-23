import React from "react";

export default function Projects() {
    // 这里可以从数据文件或API获取项目数据
    const projects = [
      {
        id: 'strategy-game',
        title: '策略游戏设计',
        description: '一个结合资源管理与战术战斗的回合制策略游戏设计。',
        image: '/images/projects/strategy-game.jpg',
        tags: ['策略', '回合制', '资源管理']
      },
      {
        id: 'rpg-narrative',
        title: 'RPG叙事设计',
        description: '开放世界RPG的叙事架构与任务系统设计。',
        image: '/images/projects/rpg-narrative.jpg',
        tags: ['RPG', '叙事', '任务设计']
      },
      {
        id: 'puzzle-mechanics',
        title: '解谜游戏机制',
        description: '基于物理的解谜游戏核心机制与关卡设计。',
        image: '/images/projects/puzzle-mechanics.jpg',
        tags: ['解谜', '关卡设计', '物理机制']
      }
    ];
  
    return (
      <div className="max-w-6xl mx-auto p-8">
        <h1 className="text-3xl font-bold mb-8">游戏设计作品集</h1>
        <p className="text-xl text-gray-600 mb-10">
          以下是我的游戏设计项目，包括概念文档、游戏机制设计和原型演示。
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200 relative">
                {/* 注意：需要先在public文件夹中添加相应图片 */}
                {/* <img src={project.image} alt={project.title} className="w-full h-full object-cover" /> */}
                {/* 临时使用颜色块代替图片 */}
                <div className="absolute inset-0 bg-blue-100 flex items-center justify-center">
                  <span className="text-blue-500 font-medium">项目图片</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="mb-4">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a href={`/projects/${project.id}`} className="text-blue-500 font-medium hover:text-blue-700">
                  查看详情 &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }