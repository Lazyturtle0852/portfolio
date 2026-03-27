import { useEffect } from 'react'
import JourneySection from './components/JourneySection'
import PersonalNewsSection from './components/PersonalNewsSection'
import ProjectsSection from './components/ProjectsSection'
import SkillsSection from './components/SkillsSection'

function App() {
  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [])

  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 selection:bg-blue-200 dark:selection:bg-blue-800 transition-colors duration-300">
      <header className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
            lazyta-toru.net
          </div>
          <div className="space-x-4">
            <a
              href="#timeline"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Journey
            </a>
            <a
              href="#projects"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Skills
            </a>
            <a
              href="#personal-news"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              News
            </a>
            <a
              href="#contact"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Contact
            </a>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-6 py-12">
        <section id="hero" className="text-center py-16">
          <img
            className="w-60 h-60 rounded-full object-cover mx-auto mb-6"
            src="/assets/images/turtle-icon.jpeg"
            alt="Turtle Icon"
          />

          <h1 className="text-4xl md:text-5xl font-bold mt-6">
            どうも、たーとるです。
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mt-4">
            テクノロジーで、社会の課題解決に挑戦しています。
          </p>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            大学1年生 / SFC / IT / 交通 / 画像認識
          </p>
        </section>

        <JourneySection />
        <ProjectsSection />
        <SkillsSection />
        <PersonalNewsSection />

        <section id="contact" className="py-16 text-center">
          <h2 className="text-3xl font-bold mb-8">Contact</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">

          </p>
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/Lazyturtle0852" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.165 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.455-1.158-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.685-.103-.253-.446-1.27.098-2.647 0 0 .84-.27 2.75 1.025.797-.222 1.643-.332 2.484-.336.841.004 1.687.114 2.484.336 1.91-1.294 2.747-1.025 2.747-1.025.546 1.377.201 2.394.1 2.647.64.701 1.028 1.594 1.028 2.685 0 3.843-2.339 4.686-4.566 4.935.359.309.678.92.678 1.856 0 1.34-.012 2.42-.012 2.747 0 .268.18.578.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="https://x.com/namakekame" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a href="mailto:kamenogakkou@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-16">
        <div className="container mx-auto px-6 py-8 text-center text-gray-600 dark:text-gray-400">
          このサイトはCI/CDで自動デプロイされています。
          <br />
          &copy; 2025 たーとる. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default App
