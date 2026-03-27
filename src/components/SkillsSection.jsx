import SkillIcon from './SkillIcon'
import { skills } from '../data/skills'

function isImageLink(value) {
  return typeof value === 'string' && (value.startsWith('/') || value.startsWith('http'))
}

function SkillsSection() {
  return (
    <section id="skills" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
            >
              <div className="flex items-center mb-4">
                {isImageLink(skill.iconlink) ? (
                  <img
                    src={skill.iconlink}
                    alt={`${skill.title} icon`}
                    className="w-10 h-10 rounded-md object-cover mr-4"
                  />
                ) : (
                  <SkillIcon icon={skill.iconlink} />
                )}
                <h3 className="text-2xl font-bold">{skill.title}</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300">{skill.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillsSection
