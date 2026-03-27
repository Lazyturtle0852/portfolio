import { useEffect, useRef, useState } from 'react'
import { personalNewsItems } from '../data/personalNews'

function PersonalNewsSection() {
  const scrollerRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const scrollToIndex = (index) => {
    const scroller = scrollerRef.current
    if (!scroller) return

    const clampedIndex = Math.min(
      personalNewsItems.length - 1,
      Math.max(0, index),
    )
    const cards = scroller.querySelectorAll('article')
    const targetCard = cards[clampedIndex]
    if (!targetCard) return

    targetCard.scrollIntoView({
      inline: 'center',
      block: 'nearest',
      behavior: 'smooth',
    })
  }

  const scrollByOneCard = (direction) => {
    scrollToIndex(activeIndex + direction)
  }

  useEffect(() => {
    const scroller = scrollerRef.current
    if (!scroller) return

    const onScroll = () => {
      const cards = Array.from(scroller.querySelectorAll('article'))
      if (cards.length === 0) return

      const scrollerRect = scroller.getBoundingClientRect()
      const viewportCenter = scrollerRect.left + scrollerRect.width / 2
      let nearestIndex = 0
      let nearestDistance = Number.POSITIVE_INFINITY

      cards.forEach((card, index) => {
        const cardRect = card.getBoundingClientRect()
        const cardCenter = cardRect.left + cardRect.width / 2
        const distance = Math.abs(cardCenter - viewportCenter)
        if (distance < nearestDistance) {
          nearestDistance = distance
          nearestIndex = index
        }
      })

      setActiveIndex(nearestIndex)
    }

    scroller.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    return () => {
      scroller.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <section id="personal-news" className="py-16">
      <div className="max-w-3xl mx-auto mb-6 px-1 flex items-center justify-between gap-4">
        <h2 className="text-3xl font-bold">Recent Personal News</h2>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => scrollByOneCard(-1)}
            className="w-10 h-10 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-500 transition-colors"
            aria-label="前のニュースへ"
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => scrollByOneCard(1)}
            className="w-10 h-10 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-500 transition-colors"
            aria-label="次のニュースへ"
          >
            →
          </button>
        </div>
      </div>
      <div className="max-w-3xl mx-auto">
        <div
          ref={scrollerRef}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 px-6 md:px-10"
        >
          {personalNewsItems.map((item, index) => (
            <article
              key={`${item.date}-${item.title}`}
              onClick={() => scrollToIndex(index)}
              className={`min-w-[78%] md:min-w-[70%] snap-center bg-white dark:bg-gray-800 rounded-lg p-6 cursor-pointer transition-all duration-300 ${
                index === activeIndex
                  ? 'scale-100 opacity-100 shadow-xl'
                  : 'scale-95 opacity-70 shadow-md'
              }`}
            >
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                {item.date}
              </p>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-700 dark:text-gray-300">{item.body}</p>
              {item.link ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-blue-600 dark:text-blue-400 hover:underline"
                >
                  詳しく見る
                </a>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PersonalNewsSection
