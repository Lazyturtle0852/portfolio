import { timelineItems } from '../data/timeline'

function JourneySection() {
  return (
    <section id="timeline" className="py-16">
      <h2 className="text-3xl font-bold text-center mb-16">My Journey</h2>
      <div className="max-w-3xl mx-auto px-4">
        {timelineItems.map((item) => (
          <div key={item.period} className="relative pl-8 sm:pl-32 py-6 group">
            <div className="absolute inset-y-0 left-0 w-1 bg-gray-300 dark:bg-gray-700 rounded-full ml-4 -translate-x-1/2" />
            <div className="absolute w-5 h-5 bg-blue-600 dark:bg-blue-400 rounded-full left-4 -translate-x-1/2 top-1/2 -translate-y-1/2 shadow-lg" />
            <div className="flex flex-col sm:flex-row items-start">
              <time className="sm:absolute left-0 translate-y-0.5 inline-block w-auto sm:w-28 text-sm font-semibold uppercase text-gray-600 dark:text-gray-400 mb-2 sm:mb-0 sm:text-right pr-4">
                {item.period}
              </time>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 ml-4 sm:ml-0 flex-1 relative">
                <div className="absolute top-1/2 -left-4 w-4 h-4 bg-white dark:bg-gray-800 transform -translate-y-1/2 rotate-45 hidden sm:block" />
                <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                <p className="text-gray-700 dark:text-gray-300">{item.body}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default JourneySection
