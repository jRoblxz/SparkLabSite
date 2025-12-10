// src/sections/SkillsSection.tsx
import { motion } from 'framer-motion';

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
import StyledCSS from '@/components/StyledButton/StyledCSS'
import StyledMySQL from '@/components/StyledButton/StyledMySQL'


interface Skill {
  name: string
  level: number
  icon: string
}

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
            My Skills
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 **justify-items-center** **md:justify-items-start**">
            <StyeledPHP />
            <StyeledLaravel />
            <StyledPython />
            <StyledReact />
            {/* <StyledUnity /> */}
            <StyledCSharp />
            <StyledGitHub />
            <StyledGit />
            <StyledFigma />
            <StyledHTML />
            <StyledCSS />
            <StyledMySQL />
            </div>
        </motion.div>
      </div>
    </section>
  );
}