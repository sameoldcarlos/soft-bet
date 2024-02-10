<script>
  import Header from '@/components/Header.vue'
  import Main from '@/components/Main.vue'
  import Footer from '@/components/Footer.vue'

  import '@/scss/normalize.scss'
  import '@/scss/vars.scss';
  import '@/scss/styles.scss';

  export default {
    components: {
      Header,
      Main,
      Footer
    }
  }
</script>

<template>
  <Header></Header>
  <Main></Main>
  <Footer></Footer>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap');

#app {
  width: 1440px;
  margin: 0 auto;
  background-color: var(--body-bg);
  color: var(--primary-text);
  font-family: 'Roboto';
  font-weight: normal;
}
</style>
