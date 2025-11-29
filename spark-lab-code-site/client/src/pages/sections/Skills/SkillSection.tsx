// src/sections/SkillsSection.tsx
import { motion } from 'framer-motion';

import htmlIcon from '@/components/assets/Images/html.svg'
import cssIcon from '@/components/assets/Images/css.svg'
import mysqlIcon from '@/components/assets/Images/mysql.svg'
import StyeledPHP from '@/components/StyledButton/StyledPHP'
import StyeledLaravel from '@/components/StyledButton/StyledLavarel'
import StyledPython from '@/components/StyledButton/StyledPython'
import StyledReact from '@/components/StyledButton/StyledReact'
import StyledCSharp from '@/components/StyledButton/StyledCSharp'
import StyledUnity from '@/components/StyledButton/StyledUnity'
import StyledGitHub from '@/components/StyledButton/StyledGitHub'
import StyledGit from '@/components/StyledButton/StyledGit'
import StyledFigma from '@/components/StyledButton/StyledFigma'
import StyledHTML from '@/components/StyledButton/StyledHTML'

interface Skill {
  name: string
  level: number
  icon: string
}


const skills: Skill[] = [
  { name: 'HTML', level: 5, icon: htmlIcon },
  { name: 'CSS', level: 5, icon: cssIcon },
  { name: 'MySQL', level: 3, icon: mysqlIcon },
]
export function SkillsSection() {
  return (
    <section id="skills" className="min-h-screen flex items-center justify-center py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            My <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
            <StyeledPHP />
            <StyeledLaravel />
            <StyledPython />
            <StyledReact />
            <StyledUnity />
            <StyledCSharp />
            <StyledGitHub />
            <StyledGit />
            <StyledFigma />
            <StyledHTML />
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="flex flex-col items-center p-4 bg-slate-900/50 rounded-xl border border-slate-800 shadow-lg hover:shadow-blue-500/30 transition-shadow duration-300"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                    
                  <img src={skill.icon} alt={skill.name} className="w-12 h-12 mb-3 object-contain" />
                  <span className="text-sm font-medium text-slate-200">{skill.name}</span>
                  <div className="w-full h-2 bg-slate-700 rounded-full mt-2">
                    <motion.div
                      className="h-full bg-blue-500 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(skill.level / 5) * 100}%` }}
                      transition={{ duration: 1.5, delay: index * 0.1 + 0.5 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
        </motion.div>
      </div>
    </section>
  );
}