const tagToneClassMap = {
  pink: 'bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200',
  gray: 'bg-gray-200 dark:bg-gray-700',
  purple: 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200',
  green: 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200',
  blue: 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200',
}

function ProjectCard({ project }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
      <img
        className={project.imageClassName}
        src={project.image}
        alt={project.alt}
        style={project.imageStyle}
      />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
          <span className="font-semibold">時期:</span> {project.period}
        </p>
        {project.link ? (
          <a
            href={project.link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-semibold mb-4 transition-colors"
          >
            {project.link.label}
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        ) : null}
        <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
        {project.tags.map((tag) => (
          <span
            key={tag.label}
            className={`inline-block rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2 ${tagToneClassMap[tag.tone]}`}
          >
            {tag.label}
          </span>
        ))}
      </div>
    </div>
  )
}

export default ProjectCard
