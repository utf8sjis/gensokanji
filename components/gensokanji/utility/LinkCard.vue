<template>
  <div class="card" :class="{ '_fade-in': fadeIn }">
    <a
      :target="{ _blank: isExternalLink }"
      :rel="{ 'noreferrer noopener': isExternalLink }"
      :href="path"
    >
      <div class="card__image-container">
        <img class="card__image" :src="imageSrc" :alt="imageAlt" />
        <div class="card__image-inset-shadow"></div>
        <i
          v-show="isExternalLink"
          class="card__external-link-icon fas fa-external-link-alt"
        ></i>
      </div>
    </a>
    <div class="card__title">{{ title }}</div>
  </div>
</template>

<script>
export default {
  props: {
    path: { type: String, required: true },
    isExternalLink: { type: Boolean, required: true },
    imageSrc: { type: String, required: true },
    imageAlt: { type: String, required: true },
    title: { type: String, required: true },
  },

  data() {
    return {
      fadeIn: false,
    }
  },

  mounted() {
    // カードの交差を監視し、フェードインアニメーションを適用する
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2,
    }
    const cardsObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.fadeIn = true
        }
      })
    }, options)

    cardsObserver.observe(this.$el)
  },
}
</script>

<style lang="scss" scoped>
@use '@/assets/scss/global' as g;
@use '@/assets/scss/global/gensokanji' as gk;

.card {
  display: grid;
  grid-template-rows: 1fr auto;
  grid-gap: 10px;
  gap: 10px;
  transform: translateY(20px);
  opacity: 0;
  transition: transform 1s, opacity 1s;

  &._fade-in {
    transform: translateY(0);
    opacity: 1;
  }

  &__image-container {
    position: relative;
    overflow: hidden;
    border: 1px solid gk.$colorMain;
    border-radius: 6px;
    background-color: gk.$colorMain;
    transition: 0.3s;
    @include g.hover {
      &:hover {
        cursor: pointer;
        transform: translateY(-2px);
        box-shadow: #00000080 0px 20px 30px -10px;
      }
    }
  }

  &__image {
    width: 100%;
  }

  &__image-inset-shadow {
    position: absolute;
    inset: 0;
    box-shadow: inset 0 0 20px 0 #00000080;
  }

  &__external-link-icon {
    position: absolute;
    top: 0;
    right: 0;
    padding: 10px 10px 0 0;
    filter: drop-shadow(0 0 3px #00000080);
  }
}
</style>
