<template>
  <div>
    <div v-show="contentId === 'lang-switch'" class="content">
      <p>周期表の表示内容を変更します。</p>
      <p>
        選択できるのは<span class="u-bold">大陸簡体</span
        >（中国大陸で使われる簡体字）、<span class="u-bold">台湾正体</span
        >（台湾で使われる繁体字）、<span class="u-bold">香港繁体</span
        >（香港で使われる繁体字）の3つの地域で使われる漢字に<span class="u-bold"
          >原子番号</span
        >、<span class="u-bold">元素記号</span>、<span class="u-bold"
          >日本語名</span
        >、<span class="u-bold">英語名</span>を加えた計7種類です。
      </p>
    </div>

    <div v-show="contentId === 'element-search'" class="content">
      <p>
        <span class="u-bold">原子番号</span>の一致、および<span class="u-bold"
          >元素記号</span
        >、<span class="u-bold">日本語名</span>、<span class="u-bold"
          >英語名</span
        >、<span class="u-bold">中国語名</span>の部分一致で元素を検索します。
      </p>
      <p>
        結果のリストの各項目にはどのデータの種類でマッチしたかの<span
          class="u-bold"
          >タグ</span
        >が付いています（<inline-tag type="atomic-number">番号</inline-tag
        >＝原子番号、<inline-tag type="element-symbol">記号</inline-tag
        >＝元素記号、<inline-tag type="japanese-name">日</inline-tag
        >＝日本語名、<inline-tag type="english-name">英</inline-tag
        >＝英語名、<inline-tag type="simplified-chinese">大陸</inline-tag
        >＝大陸簡体、<inline-tag type="taiwan-trad">台湾</inline-tag
        >＝台湾正体、<inline-tag type="hongkong-trad">香港</inline-tag
        >＝香港繁体）。左の<span class="u-bold">選択メニュー</span
        >ではそのリストをデータの種類でフィルターすることができます。
      </p>
      <p>
        リストの項目を押すと直接<span class="u-bold">データページ</span
        >がオーバーレイ表示されます。
      </p>
    </div>
    <div v-show="contentId === 'periodic-table-scaler'" class="content">
      <p>周期表を拡大・縮小します。</p>
      <p>
        スライドバーを動かすことによって<span class="u-bold">0.5倍から2倍</span
        >の間で周期表のサイズを変えることができます。お使いのデバイスの画面サイズに合わせて調節してみてください。
      </p>
      <p>
        ちなみに、倍率が表示されているボタンを押すと倍率が1倍にリセットされます。
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    contentId: { type: String, required: true },
  },
}
</script>

<style lang="scss" scoped>
.content {
  display: grid;
  grid-template-columns: auto;
  gap: 10px;
}
</style>
