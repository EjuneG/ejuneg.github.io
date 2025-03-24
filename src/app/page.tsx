import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-12">
      <div className="max-w-4xl w-full">
        {/* Hero section */}
        <div className="mb-16 py-20">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">游戏策划 & 开发者</h1>
          <p className="text-xl text-gray-800 max-w-2xl">
            专注于游戏机制设计与技术实现，创造引人入胜的游戏体验
          </p>
          <div className="mt-8">
            <Link href="/projects" className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors">
              查看作品集
            </Link>
          </div>
        </div>

        {/* Featured project section */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 inline-block border-b-2 border-blue-500 pb-1">精选项目</h2>
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="h-72 bg-blue-100 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-blue-500 font-medium">项目图片</span>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">策略游戏设计与实现</h3>
              <p className="text-gray-800 mb-4">
                结合资源管理与战术战斗的回合制策略游戏，从概念设计到技术实现的完整项目展示。
              </p>
              <div className="flex flex-wrap mb-4">
                <span className="mr-2 mb-2 px-3 py-1 bg-gray-100 text-gray-800 text-sm font-medium rounded-full">游戏设计</span>
                <span className="mr-2 mb-2 px-3 py-1 bg-gray-100 text-gray-800 text-sm font-medium rounded-full">程序开发</span>
                <span className="mr-2 mb-2 px-3 py-1 bg-gray-100 text-gray-800 text-sm font-medium rounded-full">Unity</span>
              </div>
              <Link href="/projects/strategy-game" className="text-blue-600 font-medium hover:text-blue-800 transition-colors">
                查看详情 →
              </Link>
            </div>
          </div>
        </div>

        {/* Areas of focus */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-4">游戏策划</h2>
            <p className="text-gray-800 mb-4">
              专注于游戏机制设计、关卡设计和叙事架构，打造平衡且引人入胜的游戏体验。
            </p>
            <Link href="/projects?category=design" className="text-blue-600 font-medium hover:text-blue-800 transition-colors">
              策划作品 →
            </Link>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-4">技术开发</h2>
            <p className="text-gray-800 mb-4">
              精通Unity/Unreal引擎开发与前端技术，将创意概念转化为可玩的游戏原型。
            </p>
            <Link href="/projects?category=development" className="text-blue-600 font-medium hover:text-blue-800 transition-colors">
              开发作品 →
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}