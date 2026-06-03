import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/sections/HeroSection'
import ProjectsSection from '@/components/sections/ProjectsSection'
import WebsitesSection from '@/components/sections/WebsitesSection'
import AgentSection from '@/components/sections/AgentSection'
import StackSection from '@/components/sections/StackSection'
import ContactSection from '@/components/sections/ContactSection'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <div className="border-t border-green/5" />
        <ProjectsSection />
        <div className="border-t border-green/5" />
        <WebsitesSection />
        <div className="border-t border-green/5" />
        <StackSection />
        <div className="border-t border-green/5" />
        <AgentSection />
        <div className="border-t border-green/5" />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
