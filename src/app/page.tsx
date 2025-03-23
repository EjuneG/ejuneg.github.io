import React from 'react';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">游戏策划作品集</h1>
          <p className="text-xl text-gray-600">
            欢迎来到我的游戏设计世界，探索我的创意与作品
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">精选项目</h2>
            <p className="mb-4">
              浏览我的游戏设计作品，从概念到原型，展示我的设计思路和创作过程。
            </p>
            <a href="/projects" className="text-blue-500 font-medium hover:text-blue-700">
              查看作品 &rarr;
            </a>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">关于我</h2>
            <p className="mb-4">
              了解我的专业背景、技能和游戏设计理念。我致力于创造引人入胜的游戏体验。
            </p>
            <a href="/about" className="text-blue-500 font-medium hover:text-blue-700">
              了解更多 &rarr;
            </a>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">最新项目</h2>
          <div className="border-l-4 border-blue-500 pl-4 mb-6">
            <h3 className="text-xl font-bold mb-2">策略游戏设计示例</h3>
            <p className="text-gray-600">
              一个结合资源管理与战术战斗的回合制策略游戏设计，包含完整的游戏机制文档与原型演示。
            </p>
          </div>
          <a href="/projects" className="text-blue-500 font-medium hover:text-blue-700">
            查看所有项目 &rarr;
          </a>
        </div>
      </div>
    </main>
  );
}