<template>
  <main class="main">
    <section class="main__section">
      <h2 class="main__title">Works</h2>
      <ul class="main__cards-container">
        <li>
          <link-card
            path="/periodic-table"
            :is-external-link="false"
            :image-src="require('@/assets/img/periodic_table.png')"
            image-alt="元素の漢字周期表"
            title="元素の漢字周期表"
          />
        </li>
      </ul>
    </section>
    <section class="main__section">
      <h2 class="main__title">Posts</h2>
      <ul class="main__cards-container">
        <li v-for="post in posts" :key="post.slug">
          <link-card
            :path="`/post/${post.slug}`"
            :is-external-link="false"
            :image-src="require('@/assets/img/brand.png')"
            image-alt="gensokanji"
            :title="post.title"
          />
        </li>
      </ul>
    </section>
    <section class="main__section">
      <h2 class="main__title">Links</h2>
      <ul class="main__cards-container">
        <li>
          <link-card
            path="https://twitter.com/gensokanji_bot"
            :is-external-link="true"
            :image-src="require('@/assets/img/gensokanji_bot.png')"
            image-alt="元素の漢字bot"
            title="元素の漢字bot"
          />
        </li>
      </ul>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      posts: [],
    }
  },

  async fetch() {
    this.posts = await this.$content('post')
      .only(['slug', 'title'])
      .sortBy('updatedDate', 'desc')
      .fetch()
  },
}
</script>

<style lang="scss" scoped>
@use '@/assets/scss/module' as g;
@use '@/assets/scss/module/gensokanji' as gk;

.main {
  display: grid;
  grid-gap: 100px;
  gap: 100px;
  margin: 0 20px;
  @include g.breakpoint(g.$tablet) {
    margin: 0 100px;
  }
  @include g.breakpoint {
    margin: 0 200px;
  }

  &__section {
    display: grid;
    grid-gap: 20px;
    gap: 20px;
  }

  &__title {
    @include g.font(en, light);
    font-size: 40px;
  }

  &__cards-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 50px;
    gap: 50px;
  }
}
</style>
