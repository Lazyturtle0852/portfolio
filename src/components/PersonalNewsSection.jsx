import { personalNewsItems } from '../data/personalNews'

function PersonalNewsSection() {
  return (
    <section id="personal-news" className="py-16">
      <div className="max-w-6xl mx-auto px-1 mb-6">
        <h2 className="text-3xl font-bold">Recent Personal News</h2>
      </div>
      <div className="max-w-6xl mx-auto">
        <div className="flex gap-4 overflow-x-auto pb-4 px-1">
          {personalNewsItems.map((item, index) => (
            <article
              key={`${item.date}-${item.title}-${index}`}
              className="w-[32%] min-w-[32%] h-[24rem] bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden shrink-0"
            >
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-1/2 object-cover"
                />
              ) : (
                <div className="w-full h-1/2 bg-gray-200 dark:bg-gray-700" />
              )}
              <div className="h-1/2 p-3 overflow-hidden">
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                  {item.date}
                </p>
                <h3 className="text-sm font-bold mb-1">{item.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 text-xs line-clamp-4">
                  {item.body}
                </p>
                {item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 text-blue-600 dark:text-blue-400 hover:underline text-sm"
                  >
                    詳しく見る
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PersonalNewsSection
