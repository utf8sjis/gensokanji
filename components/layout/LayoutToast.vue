<template>
  <transition-group name="toast-" tag="div" class="toast">
    <div
      v-for="toast in toastList"
      :key="toast.timeoutID"
      class="toast__item-wrapper"
    >
      <div class="toast__item" @click="clearToast(toast.timeoutID)">
        {{ toast.message }}
      </div>
    </div>
  </transition-group>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      toastList: 'toast/toastList',
    }),
  },

  methods: {
    ...mapActions({
      clearToast: 'toast/clearToast',
    }),
  },
}
</script>

<style lang="scss">
@use '@/assets/scss/global' as g;

.toast {
  position: fixed;
  top: 10px;
  left: 10px;
  pointer-events: none;
  z-index: 301;
  &--leave-active {
    position: absolute;
  }
  &--enter,
  &--leave-to {
    opacity: 0;
    transform: translateX(-10px);
  }

  &__item-wrapper {
    display: flex;
    width: 300px;
    transition-property: opacity, transform;
    transition-duration: 0.3s;
  }

  &__item {
    @include g.flexCentering();
    pointer-events: auto;
    cursor: pointer;
    margin-bottom: 5px;
    border-radius: 5px;
    padding: 15px 20px;
    color: g.$colorWhite;
    @include g.boxShadow(2);
    background: g.$colorBlackADark;
    @include g.mediaQuery() {
      padding: 12px 17px;
    }
  }
}
</style>
