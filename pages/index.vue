<script setup lang="ts">
import { Badge } from '@/components/ui/badge';

useHead({
  title: 'Rama Pradana',
  meta: [
    {
      name: 'description',
      content: 'Rama Pradana - Fullstack Software Engineer'
    }
  ]
});
</script>

<template>
  <div>
    <h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
      Rama Pradana
    </h1>
    <p>Hi there. I'm Rama Pradana, a Fullstack Software Engineer with a passion for backend development.</p>
    <p>Currently, I work at CSG as a Backend Developer, primarily focusing on Java. While backend work is my main focus, I often find myself drawn to the frontend when I'm looking for a creative challenge. On the side, I freelance, developing systems using Laravel and VueJS, and occasionally working with WordPress when the project calls for it. I also manage several business websites and VPS servers.</p>
    <p>Outside of coding, I love reading (and soon writing!) articles on Medium, covering everything from backend and frontend development to work-life balance and tech tips. To keep a healthy balance, I hit the gym regularly—not just to stay active, but to connect with people too. And when it's time to unwind, gaming and travel are my go-to stress reliever.</p>
    <p>Right now, I'm working on improving my leadership and mentoring skills, which I find super important for collaborating effectively in teams. Oh, and I’ve set a personal goal to build a micro SaaS product—so stay tuned for that!</p>
    
    <section id="tech-stack" class="mt-8">
      <p class="mt-1 mb-1 font-bold">My tech stack</p>
      <div class="inline-block">
        <span>Programming Languages</span>
        <Badge variant="secondary" class="m-1"><img class="left-badge-icon" src="~/assets/icons/java.svg" loading="lazy"/>Java</Badge>
        <Badge variant="secondary" class="m-1"><img class="left-badge-icon" src="~/assets/icons/php.svg" loading="lazy"/>PHP</Badge>
        <Badge variant="secondary" class="m-1"><img class="left-badge-icon" src="~/assets/icons/typescript.svg" loading="lazy"/>Typescript</Badge>
        <Badge variant="secondary" class="m-1"><img class="left-badge-icon" src="~/assets/icons/golang.svg" loading="lazy"/>Go</Badge>
      </div>
      <div class="inline-block">
        <span>Database</span>
        <Badge variant="secondary" class="m-1"><img class="left-badge-icon" src="~/assets/icons/postgres.svg" loading="lazy"/>Postgres</Badge>
        <Badge variant="secondary" class="m-1"><img class="left-badge-icon" src="~/assets/icons/mysql.svg" loading="lazy"/>MySQL</Badge>
      </div>
      <div class="inline-block">
        <span>Frameworks</span>
        <Badge variant="secondary" class="m-1"><img class="left-badge-icon" src="~/assets/icons/spring.svg" loading="lazy"/>Spring</Badge>
        <Badge variant="secondary" class="m-1"><img class="left-badge-icon" src="~/assets/icons/laravel.svg" loading="lazy"/>Laravel</Badge>
        <Badge variant="secondary" class="m-1"><img class="left-badge-icon" src="~/assets/icons/vuejs.svg" loading="lazy"/>VueJS</Badge>
        <Badge variant="secondary" class="m-1"><img class="left-badge-icon" src="~/assets/icons/nuxtjs.svg" loading="lazy"/>NuxtJS</Badge>
      </div>
      <div class="inline-block">
        <span>CI/CD</span>
        <Badge variant="secondary" class="m-1"><img class="left-badge-icon" src="~/assets/icons/jenkins.svg" loading="lazy"/>Jenkins</Badge>
        <Badge variant="secondary" class="m-1"><img class="left-badge-icon" src="~/assets/icons/githubactions.svg" loading="lazy"/>Github Action</Badge>
        <Badge variant="secondary" class="m-1"><img class="left-badge-icon" src="~/assets/icons/teamcity.svg" loading="lazy"/>TeamCity</Badge>
      </div>
      <div class="inline-block">
        <span>Others</span>
        <Badge variant="secondary" class="m-1"><img class="left-badge-icon" src="~/assets/icons/kafka.svg" loading="lazy"/>Kafka</Badge>
        <Badge variant="secondary" class="m-1"><img class="left-badge-icon" src="~/assets/icons/kubernetes.svg" loading="lazy"/>Kubernetes</Badge>
        <Badge variant="secondary" class="m-1"><img class="left-badge-icon" src="~/assets/icons/docker.svg" loading="lazy"/>Docker</Badge>
        <Badge variant="secondary" class="m-1"><img class="left-badge-icon" src="~/assets/icons/tailwind.svg" loading="lazy"/>Tailwind</Badge>
        <Badge variant="secondary" class="m-1"><img class="left-badge-icon" src="~/assets/icons/elasticsearch.svg" loading="lazy"/>Elasticsearch</Badge>
        <Badge variant="secondary" class="m-1"><img class="left-badge-icon" src="https://github.com/inertiajs.png" loading="lazy"/>InertiaJS</Badge>
      </div>
    </section>
  </div>
</template>
