<script setup>
import { ref } from 'vue'
import { ArrowDown, ArrowRight, ArrowUpRight, Menu, Moon, Sun, X } from '@lucide/vue'

const navigation = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

const projects = [
  {
    number: '01',
    name: 'flex-qdisc',
    category: 'SYSTEMS · LINUX',
    description: 'Exploring queueing disciplines and traffic control in the Linux networking stack.',
    language: 'Shell',
    url: 'https://github.com/riyoMar/flex-qdisc',
    theme: 'project-lime',
    visual: 'qdisc',
  },
  {
    number: '02',
    name: 'MTVTracker',
    category: 'JAVA · PERSONAL PROJECT',
    description: 'A Java project for keeping track of movies and TV.',
    language: 'Java',
    url: 'https://github.com/riyoMar/MTVTracker',
    theme: 'project-pink',
    visual: 'tracker',
  },
  {
    number: '03',
    name: 'complex_website',
    category: 'WEB · LARAVEL + VUE',
    description: 'An evolving Laravel and Vue website. A sandbox for figuring out what works.',
    language: 'Blade',
    url: 'https://github.com/riyoMar/complex_website',
    theme: 'project-blue',
    visual: 'website',
  },
]

const open = ref(false)
const dark = ref(false)

function closeMenu() {
  open.value = false
}
</script>

<template>
  <div class="site-shell" :class="{ 'theme-dark': dark }">
    <header class="topbar">
      <a class="wordmark" href="#home" aria-label="riyoMar home" @click="closeMenu">
        <span class="wordmark-dot"></span>
        riyo<span class="wordmark-light">Mar</span><span class="wordmark-period">.</span>
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
          <p class="eyebrow"><span class="status-dot"></span> A developer's corner of the internet</p>
          <h1>Curious<br />by <span class="heading-accent">default.</span></h1>
          <div class="hero-lower">
            <p class="hero-description">I like figuring out how things work and building something useful along the way.</p>
            <a class="round-link" href="#work" aria-label="See selected work">
              <ArrowDown :size="21" />
            </a>
          </div>
        </div>

        <div class="hero-art" aria-label="Portrait of riyoMar">
          <div class="art-topline"><span>INDEPENDENTLY CURIOUS</span><span>EST. 2023</span></div>
          <div class="portrait-frame">
            <div class="portrait-backdrop"></div>
            <img
              class="portrait"
              src="https://github.com/riyoMar.png?size=640"
              alt="riyoMar's GitHub profile avatar"
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
            <p class="eyebrow section-kicker">A FEW THINGS I'VE BEEN MAKING</p>
            <h2>Made with<br />curiosity<span class="heading-accent">.</span></h2>
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

      <section id="about" class="about-section">
        <div class="about-inner section-wrap">
          <div class="about-intro">
            <p class="eyebrow">A NOTE ABOUT ME</p>
            <h2>Better questions.<br />Better <span class="heading-accent">software.</span></h2>
          </div>
          <div class="about-content">
            <p class="about-lead">I’m riyoMar. I enjoy the in-between part of making things: the experimenting, the rabbit holes, and the satisfying moment it finally clicks.</p>
            <p class="about-secondary">Right now, that curiosity takes me through Linux, Java, and the web. The projects here are snapshots of what I’m learning and what I’m building; there’s always something new around the corner.</p>
            <div class="interest-list" aria-label="Technologies and interests">
              <span>Linux</span><span>Java</span><span>Vue</span><span>Laravel</span><span>Open source</span>
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
      <a class="wordmark footer-mark" href="#home" aria-label="Back to top">riyo<span class="wordmark-light">Mar</span><span class="wordmark-period">.</span></a>
      <span class="footer-note">THOUGHTFULLY MADE, ONE IDEA AT A TIME.</span>
      <a class="footer-github" href="https://github.com/riyoMar" target="_blank" rel="noreferrer" aria-label="Visit riyoMar on GitHub">
        <ArrowUpRight :size="16" /><span>GitHub</span>
      </a>
      <a class="back-to-top" href="#home" aria-label="Back to top"><ArrowUpRight :size="17" /></a>
    </footer>
  </div>
</template>