import React from "react";

export default function About() {
    return (
      <div className="max-w-4xl mx-auto p-8">
        <h1 className="text-3xl font-bold mb-8">关于我</h1>
        
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 mb-6 md:mb-0">
              <div className="bg-gray-200 w-full h-64 rounded-lg flex items-center justify-center">
                {/* 这里可以放置个人照片 */}
                <span className="text-gray-500">个人照片</span>
              </div>
            </div>
            <div className="md:w-2/3 md:pl-8">
              <h2 className="text-2xl font-bold mb-4">游戏策划师 & 开发者</h2>
              <p className="text-gray-700 mb-4">
                我是一位热衷于创造引人入胜游戏体验的游戏策划师和开发者。拥有多年的游戏设计经验，
                专注于游戏机制设计、关卡设计和叙事架构。同时，我也具备前后端开发能力，
                能够将创意概念转化为可玩的原型。
              </p>
              <p className="text-gray-700">
                我相信游戏是艺术与技术的完美结合，始终追求创新的游戏体验和精心打磨的游戏感受。
              </p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">技能</h2>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="w-4 h-4 bg-blue-500 rounded-full mr-2"></span>
                游戏机制设计
              </li>
              <li className="flex items-center">
                <span className="w-4 h-4 bg-blue-500 rounded-full mr-2"></span>
                关卡设计
              </li>
              <li className="flex items-center">
                <span className="w-4 h-4 bg-blue-500 rounded-full mr-2"></span>
                叙事设计
              </li>
              <li className="flex items-center">
                <span className="w-4 h-4 bg-blue-500 rounded-full mr-2"></span>
                原型开发
              </li>
              <li className="flex items-center">
                <span className="w-4 h-4 bg-blue-500 rounded-full mr-2"></span>
                用户体验设计
              </li>
              <li className="flex items-center">
                <span className="w-4 h-4 bg-blue-500 rounded-full mr-2"></span>
                前端开发
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">工具 & 技术</h2>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="w-4 h-4 bg-green-500 rounded-full mr-2"></span>
                Unity / Unreal Engine
              </li>
              <li className="flex items-center">
                <span className="w-4 h-4 bg-green-500 rounded-full mr-2"></span>
                Adobe Creative Suite
              </li>
              <li className="flex items-center">
                <span className="w-4 h-4 bg-green-500 rounded-full mr-2"></span>
                JavaScript / TypeScript
              </li>
              <li className="flex items-center">
                <span className="w-4 h-4 bg-green-500 rounded-full mr-2"></span>
                React / Next.js
              </li>
              <li className="flex items-center">
                <span className="w-4 h-4 bg-green-500 rounded-full mr-2"></span>
                C# / C++
              </li>
              <li className="flex items-center">
                <span className="w-4 h-4 bg-green-500 rounded-full mr-2"></span>
                3D 建模和动画
              </li>
            </ul>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">游戏设计理念</h2>
          <p className="text-gray-700 mb-4">
            我相信最好的游戏设计源自于深入理解玩家心理和行为。我的设计理念基于以下几点：
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>游戏机制应该直观易懂，但有足够的深度供玩家探索</li>
            <li>玩家的选择应该有意义，并带来可感知的影响</li>
            <li>挑战应该平衡，既能带来成就感，又不会令人沮丧</li>
            <li>叙事应该与游戏玩法无缝融合，互相强化</li>
            <li>良好的游戏节奏对维持玩家兴趣至关重要</li>
          </ul>
        </div>
      </div>
    );
  }