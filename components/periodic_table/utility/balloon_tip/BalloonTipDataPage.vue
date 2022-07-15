<template>
  <div class="content">
    <p>
      ここデータページでは元素の基本的なデータや漢字の情報を見ることができます。
    </p>
    <p>
      元素記号の後ろにうっすら見えているイラストは、その元素の常温での<span
        class="u-bold"
        >状態や性質</span
      >を示しています。
    </p>
    <div class="state-image-legend">
      <figure class="state-image-legend__figure">
        <img
          class="state-image-legend__image"
          src="@/assets/img/periodic-table/state/gas.svg"
          alt="気体のイラスト"
        />
        <figcaption class="state-image-legend__caption">気体</figcaption>
      </figure>
      <figure class="state-image-legend__figure">
        <img
          class="state-image-legend__image"
          src="@/assets/img/periodic-table/state/liquid_metal.svg"
          alt="液体金属のイラスト"
        />
        <figcaption class="state-image-legend__caption">液体金属</figcaption>
      </figure>
      <figure class="state-image-legend__figure">
        <img
          class="state-image-legend__image"
          src="@/assets/img/periodic-table/state/liquid_non-metal.svg"
          alt="液体非金属のイラスト"
        />
        <figcaption class="state-image-legend__caption">液体非金属</figcaption>
      </figure>
      <figure class="state-image-legend__figure">
        <img
          class="state-image-legend__image"
          src="@/assets/img/periodic-table/state/solid_metal.svg"
          alt="固体金属のイラスト"
        />
        <figcaption class="state-image-legend__caption">固体金属</figcaption>
      </figure>
      <figure class="state-image-legend__figure">
        <img
          class="state-image-legend__image"
          src="@/assets/img/periodic-table/state/solid_metalloid.svg"
          alt="半金属のイラスト"
        />
        <figcaption class="state-image-legend__caption">半金属</figcaption>
      </figure>
      <figure class="state-image-legend__figure">
        <img
          class="state-image-legend__image"
          src="@/assets/img/periodic-table/state/solid_non-metal.svg"
          alt="固体非金属のイラスト"
        />
        <figcaption class="state-image-legend__caption">固体非金属</figcaption>
      </figure>
    </div>
    <p>
      半金属の範囲は一例で、半減期が短い元素の状態は推定から独断と偏見で決めているのであしからず...
    </p>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/global' as g;

.content {
  display: grid;
  grid-template-columns: auto;
  gap: 10px;
}

.state-image-legend {
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(3, 1fr);
  gap: 5px 15px;
  @include g.breakpointMax() {
    gap: 2px 10px;
  }

  &__figure {
    display: grid;
    grid-template-columns: auto;
    gap: 5px;
    @include g.breakpointMax() {
      gap: 2px;
    }
  }

  &__caption {
    text-align: center;
    white-space: nowrap;
  }

  &__image {
    width: 100%;
    border-radius: 5px;
    padding: 10px;
    object-fit: cover;
    background: g.$colorMain2;
  }
}
</style>
