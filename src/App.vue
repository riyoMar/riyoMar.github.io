<script setup>
import { onMounted, ref } from 'vue'
import { ArrowDown, ArrowRight, ArrowUpRight, FileText, Menu, Moon, Sun, X } from '@lucide/vue'

const navigation = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

const projects = [
  {
    number: '01',
    name: 'ml-heart-attack-classification',
    category: 'DATA SCIENTIST & AI',
    description: 'Applying machine learning to health data to classify heart-attack risk and communicate insights from the model.',
    language: 'Python',
    url: 'https://heart-disease-risk-classification.streamlit.app/',
    theme: 'project-lime',
    visual: 'data',
    certification: true,
  },
  {
    number: '02',
    name: 'complex_website',
    category: 'FULL-STACK DEVELOPER · VUE',
    description: 'A full-stack web project built with Laravel and Vue, connecting a responsive interface with application logic.',
    language: 'Vue',
    url: 'https://github.com/riyoMar/complex_website',
    theme: 'project-blue',
    visual: 'website',
  },
  {
    number: '03',
    name: 'react-profile',
    category: 'FULL-STACK DEVELOPER · REACT',
    description: 'A React portfolio project focused on reusable UI, clear content hierarchy, and a polished responsive experience.',
    language: 'React',
    url: 'https://github.com/riyoMar/react-profile',
    theme: 'project-pink',
    visual: 'website',
  },
  {
    number: '04',
    name: 'angular-profile',
    category: 'FULL-STACK DEVELOPER · ANGULAR',
    description: 'An Angular portfolio project showcasing component-driven development and a considered, responsive interface.',
    language: 'Angular',
    url: 'https://github.com/riyoMar/angular-profile',
    theme: 'project-blue',
    visual: 'website',
  },
  {
    number: '05',
    name: 'flex-qdisc',
    category: 'NETWORK ENGINEER · OPENWRT',
    description: 'An OpenWrt package for flexible queue management, designed to help mitigate bufferbloat and improve latency under load.',
    language: 'Shell',
    url: 'https://github.com/riyoMar/flex-qdisc',
    theme: 'project-lime',
    visual: 'qdisc',
  },
  {
    number: '06',
    name: 'MTVTracker',
    category: 'MOBILE DEVELOPER · JAVA',
    description: 'A media-tracking project for organizing movies and television, with a focus on a practical, user-friendly experience.',
    language: 'Java',
    url: 'https://github.com/riyoMar/MTVTracker',
    theme: 'project-pink',
    visual: 'tracker',
  },
]

const open = ref(false)
const dark = ref(false)
const certificateDialog = ref(null)

onMounted(() => {
  dark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
})

function closeMenu() {
  open.value = false
}

function openCertificate() {
  certificateDialog.value?.showModal()
}

function closeCertificate() {
  certificateDialog.value?.close()
}
</script>

<template>
  <div class="site-shell" :class="{ 'theme-dark': dark, 'theme-light': !dark }">
    <header class="topbar">
      <a class="wordmark" href="#home" aria-label="Riyo Maryadi home" @click="closeMenu">
        <span class="wordmark-dot"></span>
        Riyo<span class="wordmark-light">Maryadi</span>
      </a>

      <nav class="desktop-nav" aria-label="Main navigation">
        <a v-for="item in navigation" :key="item.label" :href="item.href">{{ item.label }}</a>
      </nav>

      <div class="nav-actions">
        <button
          class="icon-button theme-button"
          type="button"
          :aria-label="dark ? 'Switch to light theme' : 'Switch to dark theme'"
          :title="dark ? 'Switch to light theme' : 'Switch to dark theme'"
          @click="dark = !dark"
        >
          <Sun v-if="dark" :size="18" />
          <Moon v-else :size="18" />
        </button>
        <a class="nav-cta" href="https://github.com/riyoMar" target="_blank" rel="noreferrer">
          Find me on GitHub <ArrowUpRight :size="15" />
        </a>
        <button
          class="icon-button menu-button"
          type="button"
          :aria-expanded="open"
          :aria-label="open ? 'Close navigation' : 'Open navigation'"
          @click="open = !open"
        >
          <X v-if="open" :size="20" />
          <Menu v-else :size="20" />
        </button>
      </div>

      <nav v-if="open" class="mobile-nav" aria-label="Mobile navigation">
        <a v-for="item in navigation" :key="item.label" :href="item.href" @click="closeMenu">
          {{ item.label }} <ArrowUpRight :size="16" />
        </a>
        <a href="https://github.com/riyoMar" target="_blank" rel="noreferrer" @click="closeMenu">
          GitHub <ArrowUpRight :size="16" />
        </a>
      </nav>
    </header>

    <main>
      <section id="home" class="hero section-wrap">
        <div class="hero-copy">
          <p class="eyebrow"><span class="status-dot"></span> DEVELOPER · OPEN TO OPPORTUNITIES</p>
          <h1>Curious<br />by <span class="heading-accent">default.</span></h1>
          <div class="hero-lower">
            <p class="hero-description">I build practical software across data science, web development, networking, and mobile.</p>
            <a class="round-link" href="#work" aria-label="See selected work">
              <ArrowDown :size="21" />
            </a>
          </div>
        </div>

        <div class="hero-art" aria-label="Portrait of Riyo Maryadi">
          <div class="art-topline"><span>INDEPENDENTLY CURIOUS</span><span>EST. 2023</span></div>
          <div class="portrait-frame">
            <div class="portrait-backdrop"></div>
            <img
              class="portrait"
              src="https://github.com/riyoMar.png?size=640"
              alt="Riyo Maryadi's GitHub profile avatar"
              fetchpriority="high"
            />
            <span class="orbit orbit-one"></span>
            <span class="orbit orbit-two"></span>
            <span class="portrait-caption">A PERSON<br />BEHIND THE PROJECTS.</span>
            <span class="portrait-sticker" aria-hidden="true">MAKE<br />IT WORK<span>✳</span></span>
          </div>
          <div class="art-bottomline"><span>THOUGHTFUL BY NATURE.</span><span>✳</span></div>
        </div>

        <a class="scroll-note" href="#work"><span class="scroll-rule"></span> SCROLL TO EXPLORE</a>
      </section>

      <div class="ticker" aria-hidden="true">
        <div class="ticker-track">
          <span>THINK IT THROUGH</span><span>✳</span><span>MAKE A LITTLE THING</span><span>✳</span><span>LEARN AS YOU GO</span><span>✳</span>
          <span>THINK IT THROUGH</span><span>✳</span><span>MAKE A LITTLE THING</span><span>✳</span><span>LEARN AS YOU GO</span><span>✳</span>
        </div>
      </div>

      <section id="work" class="work-section section-wrap">
        <div class="section-heading">
          <div>
            <p class="eyebrow section-kicker">PROJECTS ACROSS DATA, WEB, NETWORKING &amp; MOBILE</p>
            <h2>Selected<br />work<span class="heading-accent">.</span></h2>
          </div>
          <a class="text-link all-projects-link" href="https://github.com/riyoMar?tab=repositories" target="_blank" rel="noreferrer">
            The rest of GitHub <ArrowUpRight :size="16" />
          </a>
        </div>

        <div class="project-list">
          <article v-for="project in projects" :key="project.number" class="project-card">
            <a
              class="project-art"
              :class="project.theme"
              :href="project.url"
              target="_blank"
              rel="noreferrer"
              :aria-label="`Explore ${project.name} on GitHub`"
            >
              <template v-if="project.visual === 'qdisc'">
                <span class="art-label">PACKET FLOW<br />STUDY NO. 01</span>
                <span class="network-map" aria-hidden="true">
                  <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
                  <span class="map-line map-line-one"></span><span class="map-line map-line-two"></span><span class="map-line map-line-three"></span>
                </span>
                <span class="art-number">01</span>
              </template>
              <template v-else-if="project.visual === 'data'">
                <span class="art-label">MODEL INSIGHTS<br />HEALTH DATA</span>
                <span class="data-chart" aria-hidden="true">
                  <i></i><i></i><i></i><i></i><i></i><i></i><i></i>
                </span>
                <span class="data-chart-label">CLASSIFICATION<br />01 / 06</span>
                <span class="art-number">01</span>
              </template>
              <template v-else-if="project.visual === 'tracker'">
                <span class="tracker-orbit tracker-orbit-one"></span>
                <span class="tracker-orbit tracker-orbit-two"></span>
                <span class="tracker-ticket">NOW<br /><strong>SHOWING</strong></span>
                <span class="tracker-big-type">PLAY<span>▶</span></span>
                <span class="art-number">02</span>
              </template>
              <template v-else>
                <span class="browser-window">
                  <span class="browser-bar"><i></i><i></i><i></i><span>somewhere.online</span></span>
                  <span class="browser-body"><span class="browser-kicker">A WORK IN PROGRESS</span><strong>Built to<br />become.</strong><span class="browser-block"></span></span>
                </span>
                <span class="art-number">03</span>
              </template>
            </a>

            <div class="project-details">
              <div class="project-info">
                <span class="project-category">{{ project.category }}</span>
                <h3>{{ project.name }}</h3>
                <p class="project-description">{{ project.description }}</p>
                <button
                  v-if="project.certification"
                  class="certificate-trigger"
                  type="button"
                  @click="openCertificate"
                >
                  <FileText :size="14" />
                  View Data Scientist &amp; AI certification
                </button>
              </div>
              <div class="project-meta">
                <span class="language-tag"><span class="language-dot" :class="`language-${project.language.toLowerCase()}`"></span>{{ project.language }}</span>
                <a class="project-link" :href="project.url" target="_blank" rel="noreferrer" :aria-label="`View ${project.name} on GitHub`">
                  <ArrowUpRight :size="19" />
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>

      <dialog ref="certificateDialog" class="certificate-dialog" aria-labelledby="certificate-title">
        <div class="certificate-dialog-header">
          <div>
            <p class="eyebrow">CERTIFICATION</p>
            <h2 id="certificate-title">Data Scientist &amp; AI</h2>
          </div>
          <button class="icon-button" type="button" aria-label="Close certification" @click="closeCertificate">
            <X :size="20" />
          </button>
        </div>
        <p class="certificate-description">
          View the Data Scientist &amp; AI certification.
        </p>
        <iframe
          class="certificate-viewer"
          src="/certifications/data-scientist-ai.pdf"
          title="Data Scientist &amp; AI certificate PDF"
        ></iframe>
        <a
          class="certificate-pdf-link"
          href="/certifications/data-scientist-ai.pdf"
          target="_blank"
          rel="noreferrer"
        >
          Open certificate PDF <ArrowUpRight :size="16" />
        </a>
      </dialog>

      <section id="about" class="about-section">
        <div class="about-inner section-wrap">
          <div class="about-intro">
            <p class="eyebrow">A NOTE ABOUT ME</p>
            <h2>Better questions.<br />Better <span class="heading-accent">software.</span></h2>
          </div>
          <div class="about-content">
            <p class="about-lead">I’m Riyo Maryadi, a developer exploring data science, full-stack web development, networking, and mobile applications.</p>
            <p class="about-secondary">I bring curiosity and a practical, project-led approach to solving problems—from machine-learning experiments and responsive web experiences to OpenWrt networking tools and media-tracking software. I’m looking for opportunities to keep learning while contributing thoughtful, useful work.</p>
            <div class="interest-list" aria-label="Technologies and interests">
              <span>Python</span><span>Vue</span><span>React</span><span>Angular</span><span>OpenWrt</span><span>Java</span>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" class="contact-section section-wrap">
        <p class="eyebrow"><span class="status-dot"></span> THE NEXT THING STARTS WITH A HELLO</p>
        <div class="contact-main">
          <h2>Got a good<br />question<span class="heading-accent">?</span></h2>
          <a class="contact-link" href="https://github.com/riyoMar" target="_blank" rel="noreferrer">
            <span>Find me on GitHub</span><ArrowUpRight :size="22" />
          </a>
        </div>
        <a class="contact-sub-link" href="https://github.com/riyoMar?tab=repositories" target="_blank" rel="noreferrer">
          Or wander through my repositories <ArrowRight :size="16" />
        </a>
      </section>
    </main>

    <footer class="footer section-wrap">
      <a class="wordmark footer-mark" href="#home" aria-label="Back to top">Riyo<span class="wordmark-light">Maryadi</span></a>
      <span class="footer-note">THOUGHTFULLY MADE, ONE IDEA AT A TIME.</span>
      <a class="footer-github" href="https://github.com/riyoMar" target="_blank" rel="noreferrer" aria-label="Visit Riyo Maryadi on GitHub">
        <ArrowUpRight :size="16" /><span>GitHub</span>
      </a>
      <a class="back-to-top" href="#home" aria-label="Back to top"><ArrowUpRight :size="17" /></a>
    </footer>
  </div>
</template>