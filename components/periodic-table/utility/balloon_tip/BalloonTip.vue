<template>
  <transition name="balloon-tip-">
    <div
      v-show="balloonTipStatusDict[id].isActive"
      class="balloon-tip"
      :style="{ width: width, top: top, right: right, left: left }"
    >
      <div class="balloon-tip__balloon">
        <div
          class="balloon-tip__beak"
          :style="{ right: beakRight, left: beakLeft }"
        ></div>
        <div class="balloon-tip__container">
          <div class="balloon-tip__title">
            <i
              class="u-pr5"
              :class="balloonTipDict[id][index].titleIconClass"
            ></i
            ><span>{{ balloonTipDict[id][index].title }}</span>
          </div>
          <component
            :is="component"
            :content-id="balloonTipDict[id][index].contentId"
          />
        </div>
        <button
          type="button"
          class="balloon-tip__close-button"
          @click="closeBalloonTip(id)"
        >
          <i class="fas fa-times"></i>
        </button>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  props: {
    id: { type: String, required: true },
    index: { type: Number, default: 0 },
    width: { type: String, required: true },
    top: { type: String, default: 'auto' },
    right: { type: String, default: 'auto' },
    left: { type: String, default: 'auto' },
    beakRight: { type: String, default: 'auto' },
    beakLeft: { type: String, default: 'auto' },
  },

  computed: {
    ...mapGetters({
      balloonTipDict: 'balloon_tip/balloonTipDict',
      balloonTipStatusDict: 'balloon_tip/balloonTipStatusDict',
    }),
    component() {
      const camelToKebab = (str) =>
        str
          .split(/(?=[A-Z])/)
          .join('-')
          .toLowerCase()

      return 'balloon-tip-' + camelToKebab(this.id)
    },
  },

  methods: {
    ...mapActions({
      closeBalloonTip: 'balloon_tip/closeBalloonTip',
    }),
  },
}
</script>

<style lang="scss">
@use '@/assets/scss/global' as g;

.balloon-tip {
  position: absolute;
  max-width: 400px;
  filter: drop-shadow(0 0 2px #0002);
  &:hover {
    display: block;
  }
  &--enter-active,
  &--leave-active {
    transition: opacity 0.2s;
  }
  &--enter,
  &--leave-to {
    opacity: 0;
  }

  &__balloon {
    position: relative;
    font-size: 15px;
  }

  &__beak {
    position: absolute;
    top: -5px;
    width: 0;
    height: 0;
    border-right: 7px solid transparent;
    border-bottom: 7px solid g.$colorMain2;
    border-left: 7px solid transparent;
  }

  &__container {
    display: grid;
    grid-template-columns: auto;
    gap: 10px 0;
    margin-top: 5px;
    border: 2px solid g.$colorMain2;
    border-radius: 8px;
    padding: 12px 15px;
    background: g.$colorBaseA;
  }

  &__title {
    @include g.font(ja, bold);
    color: g.$colorMain1;
  }

  &__close-button {
    @include g.flexCentering();
    position: absolute;
    top: 7px;
    right: 7px;
    width: 30px;
    height: 30px;
    font-size: 20px;
    color: g.$colorMain2;
  }
}
</style>
