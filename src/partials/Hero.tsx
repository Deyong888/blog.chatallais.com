const Hero = () => (
  <section className="relative">
    {/* 背景动画效果 */}
    <div className="bg-grid-slate-900/[0.04] motion-safe:animate-grid-fade absolute inset-0 bg-[size:32px_32px]" />
    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-tr from-purple-500/30 via-transparent to-cyan-500/30 blur-3xl" />
    <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
      <div className="pb-12 pt-32 md:pb-20 md:pt-40">
        {/* 主标题区域 */}
        <div className="pb-12 text-center md:pb-16">
          <div
            className="group relative mb-8 inline-flex"
            data-aos="zoom-y-out"
          >
            <div className="transitiona-all absolute -inset-px rounded-xl bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] opacity-70 blur-lg duration-1000 group-hover:-inset-1 group-hover:opacity-100 group-hover:duration-200"></div>
            <span className="relative inline-flex rounded-full bg-gray-800 px-3 py-1 text-sm font-semibold text-gray-200">
              全新升级 AI 创作体验
            </span>
          </div>

          <h1
            className="leading-tighter mb-4 text-5xl font-extrabold tracking-tighter md:text-6xl"
            data-aos="zoom-y-out"
          >
            <span className="bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">
              星界AI
            </span>
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              一站式AIGC创作平台
            </span>
          </h1>
          <div className="mx-auto max-w-3xl">
            <p
              className="mb-8 text-xl text-gray-400"
              data-aos="zoom-y-out"
              data-aos-delay="150"
            >
              集成全网顶级AI模型，让创作更简单
            </p>

            {/* 特性展示区 */}
            <div className="relative pb-10 pt-12">
              <div className="relative mx-auto w-full max-w-lg">
                <div className="animate-blob pointer-events-none absolute -left-4 top-0 size-72 rounded-full bg-purple-300 opacity-70 mix-blend-multiply blur-xl"></div>
                <div className="animate-blob animation-delay-2000 pointer-events-none absolute -right-4 top-0 size-72 rounded-full bg-cyan-300 opacity-70 mix-blend-multiply blur-xl"></div>
                <div className="animate-blob animation-delay-4000 pointer-events-none absolute -bottom-32 left-20 size-72 rounded-full bg-pink-300 opacity-70 mix-blend-multiply blur-xl"></div>
                <div className="relative">
                  <div className="glass-card relative rounded-2xl p-8">
                    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                      <div className="flex flex-col items-center rounded-lg bg-white/5 p-4">
                        <span className="mb-2 text-4xl">🤖</span>
                        <span className="text-sm text-gray-300">AI对话</span>
                      </div>
                      <div className="flex flex-col items-center rounded-lg bg-white/5 p-4">
                        <span className="mb-2 text-4xl">🎨</span>
                        <span className="text-sm text-gray-300">AI绘画</span>
                      </div>
                      <div className="flex flex-col items-center rounded-lg bg-white/5 p-4">
                        <span className="mb-2 text-4xl">🎵</span>
                        <span className="text-sm text-gray-300">AI音乐</span>
                      </div>
                      <div className="flex flex-col items-center rounded-lg bg-white/5 p-4">
                        <span className="mb-2 text-4xl">🎬</span>
                        <span className="text-sm text-gray-300">AI视频</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="relative mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center"
              data-aos="zoom-y-out"
              data-aos-delay="300"
              style={{ zIndex: 20 }}
            >
              <div>
                <a
                  className="z-20 mb-4 inline-block w-full rounded-lg bg-gradient-to-r from-purple-500 to-cyan-400 px-6 py-3 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:from-purple-600 hover:to-cyan-500 hover:shadow-lg hover:shadow-purple-500/25 active:translate-y-0 sm:mb-0 sm:w-auto"
                  href="https://chatallais.com/chat"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  开始创作
                </a>
              </div>
              <div>
                <a
                  className="z-20 inline-block w-full rounded-lg bg-gray-800 px-6 py-3 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-700 hover:shadow-lg hover:shadow-gray-800/25 active:translate-y-0 sm:ml-4 sm:w-auto"
                  href="https://linktoai.top"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  了解更多
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export { Hero };
