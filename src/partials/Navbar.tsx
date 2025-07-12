const Navbar = () => (
  <div className="fixed inset-x-0 top-0 z-50 h-20 border-b border-slate-700/30 bg-gradient-to-r from-slate-900/75 to-slate-800/75 backdrop-blur-md">
    <div className="container mx-auto h-full px-4">
      <div className="flex h-full items-center justify-between">
        <a href="/" className="flex items-center">
          <div className="flex items-center">
            <img
              src="/assets/images/blog-logo.png"
              alt="星界AI Logo"
              className="mr-2 size-16"
            />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-3xl font-bold text-transparent transition-all duration-300 hover:from-blue-300 hover:to-cyan-200">
              星界AI
            </span>
          </div>
        </a>

        <div className="flex gap-x-6">
          <a
            href="https://www.chatallais.com"
            className="font-medium text-gray-200 hover:text-cyan-400"
          >
            返回首页
          </a>
          <a
            href="https://www.linktoai.top"
            className="font-medium text-gray-200 hover:text-cyan-400"
          >
            AI未来城
          </a>
          <a
            href="https://resource.chatallais.com"
            className="font-medium text-gray-200 hover:text-cyan-400"
          >
            免费网络资源
          </a>
          <a
            href="https://24kwebgames.com"
            className="font-medium text-gray-200 hover:text-cyan-400"
          >
            24k在线游戏
          </a>
          <a
            href="/posts/"
            className="font-medium text-gray-200 hover:text-cyan-400"
          >
            教程列表
          </a>
          <a
            href="https://chatallais.com"
            className="rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-2 font-medium text-white transition-all duration-300 hover:from-cyan-600 hover:to-blue-600"
          >
            登录
          </a>
        </div>
      </div>
    </div>
  </div>
);

export { Navbar };
