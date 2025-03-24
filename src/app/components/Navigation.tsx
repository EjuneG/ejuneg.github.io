"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  
  // 导航链接数据
  const navLinks = [
    { href: "/", label: "首页" },
    { href: "/projects", label: "作品集" },
    { href: "/about", label: "关于我" },
    { href: "/contact", label: "联系方式" }
  ];
  
  // 判断链接是否是当前活动的页面
  const isActive = (path: string) => {
    return pathname === path;
  };
  
  // 切换移动端菜单
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-gray-900 shadow-lg sticky top-0 z-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-white tracking-tight">
              游戏策划作品集
            </Link>
          </div>
          
          {/* 桌面端导航 */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link 
                href={link.href} 
                key={link.href}
                className={`transition-colors font-medium ${
                  isActive(link.href) 
                    ? "text-blue-400" 
                    : "text-gray-300 hover:text-blue-400"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          
          {/* 移动端菜单按钮 */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              <svg 
                className="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                {menuOpen ? (
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M6 18L18 6M6 6l12 12" 
                  />
                ) : (
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M4 6h16M4 12h16M4 18h16" 
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* 移动端导航菜单 */}
      {menuOpen && (
        <nav className="md:hidden bg-gray-800 pb-4 px-4">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <Link 
                href={link.href} 
                key={link.href}
                className={`block py-2 px-4 rounded transition-colors ${
                  isActive(link.href) 
                    ? "bg-gray-700 text-blue-400 font-medium" 
                    : "text-gray-300 hover:bg-gray-700 hover:text-blue-400"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}