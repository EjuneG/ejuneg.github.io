import React from "react";

export default function About() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">关于我</h1>
      
      <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 mb-6 md:mb-0">
            <div className="bg-blue-100 w-full h-64 rounded-lg flex items-center justify-center">
              <span className="text-blue-500 font-medium">个人照片</span>
            </div>
          </div>
          <div className="md:w-2/3 md:pl-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">游戏策划师 & 开发者</h2>
            <p className="text-gray-800 mb-4">
              我专注于游戏机制设计与技术实现，致力于创造引人入胜的游戏体验。拥有多年游戏设计与开发经验，
              精通游戏机制设计、关卡设计和技术开发。
            </p>
            <p className="text-gray-800">
              作为一名独立游戏开发者，我能够将创意概念从设计阶段转化为可玩的游戏原型，确保游戏体验的一致性和完整性。
            </p>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-white p-8 rounded-lg shadow-sm">
          <h2 className="text-xl font-bold text-gray-900 mb-4">核心专长</h2>
          <ul className="space-y-3">
            <li className="flex items-center">
              <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
              <span className="text-gray-800">游戏机制设计</span>
            </li>
            <li className="flex items-center">
              <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
              <span className="text-gray-800">关卡设计</span>
            </li>
            <li className="flex items-center">
              <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
              <span className="text-gray-800">游戏程序开发</span>
            </li>
            <li className="flex items-center">
              <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
              <span className="text-gray-800">项目管理</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-white p-8 rounded-lg shadow-sm">
          <h2 className="text-xl font-bold text-gray-900 mb-4">技术工具</h2>
          <ul className="space-y-3">
            <li className="flex items-center">
              <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
              <span className="text-gray-800">Unity / Unreal Engine</span>
            </li>
            <li className="flex items-center">
              <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
              <span className="text-gray-800">C# / C++</span>
            </li>
            <li className="flex items-center">
              <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
              <span className="text-gray-800">JavaScript / TypeScript</span>
            </li>
            <li className="flex items-center">
              <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
              <span className="text-gray-800">React / Next.js</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="bg-white p-8 rounded-lg shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">游戏设计理念</h2>
        <p className="text-gray-800 mb-4">
          我的设计理念注重玩家体验与技术实现的平衡，专注于创造:
        </p>
        <ul className="space-y-2 text-gray-800 list-disc pl-5">
          <li>直观易懂但具深度的游戏机制</li>
          <li>有意义且具影响力的玩家选择</li>
          <li>平衡的挑战难度，带来成就感</li>
          <li>与游戏玩法无缝融合的叙事体验</li>
        </ul>
      </div>
    </div>
  );
}