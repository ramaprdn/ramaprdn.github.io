<script lang="ts" setup>
import CareerItem from '@/components/custom/CareerItem.vue';

useHead({
  title: 'Career | Rama Pradana',
  meta: [
    {
      name: 'description',
      content: 'Rama Pradana - Career'
    }
  ]
});
type Career = {
  company: string;
  subtitle: string;
  descriptions?: string[];
};

const careers: Career[] = [
  {
    company: 'CSG',
    subtitle: 'Software Dev Engineer II, 2023 - Present',
    descriptions: [
      'I design and develop backend REST API services in Java to facilitate the forwarding of HTTP requests to other services. Employing a design-first API approach, I begin by crafting the REST API specification using OpenAPI Spec, followed by the implementation of the backend.',
      'I design and develop a human task service that efficiently manages human tasks, seamlessly integrated between the Camunda Process Engine and our product.',
      'I develop a backend service to seamlessly integrate our primary product with another product, primarily utilizing Kafka for efficient communication.',
      'I mentor other developers and actively participate in code reviews.'
    ]
  },
  {
    company: 'Timedoor',
    subtitle: 'Coding Mentor, 2023 - 2024',
    descriptions: [
      'Providing mentorship to students in frontend software engineering, with a focus on HTML, CSS, JavaScript, Vue.js, and Nuxt.js.'
    ]
  },
  {
    company: 'Igloocompany',
    subtitle: 'Backend Engineer, 2020 - 2021',
    descriptions: [
        'I develop unit tests for backend applications built with Koa.js, MongoDB, and various AWS technologies including SNS, SQS, and Lambda.',
        'Develop a new authentication pattern for the application using Secure Remote Password protocol for client-to-server authentication. This methodology allows us to hide passwords in the network communication during the authentication process.'
    ]
  },
  {
    company: 'Laksita Emi Saguna',
    subtitle: 'Software Engineer, 2018 - 2020',
    descriptions: [
        'Develop an integrated web application for university including a single sign-on service, academic system, payment system connected to one of the Bank in Indonesia (BNI), alongside other supplementary applications. Those applications were developed using Laravel framework with VueJs and MySQL.Develop an integrated web application for university including a single sign-on service, academic system, payment system connected to one of the Bank in Indonesia (BNI), alongside other supplementary applications. Those applications were developed using Laravel framework with VueJs and MySQL.'
    ]
  }
];
</script>

<template>
  <div>
    <CareerItem v-for="career in careers" :key="career.company" :title="career.company" :subtitle="career.subtitle">
      <p v-for="description in career.descriptions">
        {{ description }}
      </p>
    </CareerItem>
  </div>
</template>
