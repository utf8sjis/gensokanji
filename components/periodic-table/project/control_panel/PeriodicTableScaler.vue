<template>
  <div class="periodic-table-scaler">
    <input
      type="range"
      class="periodic-table-scaler__input-range"
      min="0.5"
      max="2"
      step="0.05"
      :value="periodicTableScale"
      @input="updatePeriodicTableScale(parseFloat($event.target.value))"
    />
    <button
      type="button"
      class="periodic-table-scaler__value-display"
      @click="updatePeriodicTableScale(1)"
    >
      {{ periodicTableScale + 'x' }}
    </button>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapGetters(['periodicTableScale']),
  },

  methods: {
    ...mapMutations(['updatePeriodicTableScale']),
  },
}
</script>

<style lang="scss">
@use 'sass:math';
@use '@/assets/scss/global' as g;
@use '@/assets/scss/global/periodic-table' as p;

$trackHeight: 8px;
$trackBorderRadius: 3px;
$trackColor: p.$colorLightGray;
$thumbSize: 20px;
$thumbColor: p.$colorMain1;

.periodic-table-scaler {
  @include g.flexCentering();
  height: 100%;
  padding: 0 20px;

  &__input-range {
    cursor: pointer;
    width: 300px;
    &[disabled] {
      cursor: default;
    }
    // トラック
    &::-webkit-slider-runnable-track {
      height: $trackHeight;
      border-radius: $trackBorderRadius;
      background: $trackColor;
    }
    &::-moz-range-track {
      height: $trackHeight;
      border-radius: $trackBorderRadius;
      background: $trackColor;
    }
    // つまみ
    &::-webkit-slider-thumb {
      appearance: none;
      height: $thumbSize;
      width: $thumbSize;
      border: none;
      border-radius: 50%;
      background: $thumbColor;
      transform: translateY(math.div($trackHeight - $thumbSize, 2));
    }
    &::-moz-range-thumb {
      height: $thumbSize;
      width: $thumbSize;
      border: none;
      border-radius: 50%;
      background: $thumbColor;
    }
  }

  &__value-display {
    cursor: pointer;
    flex: none;
    @include g.flexCentering();
    margin-left: 20px;
    width: 60px;
    height: 35px;
    border: solid 2px p.$colorMain2;
    border-radius: 5px;
  }
}
</style>
