<template>
  <article class="article">
    <periodic-table-article-section
      headline="元素の漢字周期表"
      :is-level-one="true"
    >
      <periodic-table-article-subsection :is-no-headline="true">
        <periodic-table-article-p
          ><span class="u-marker-bold">元素の漢字周期表</span>は、<span
            class="u-bold"
            >中国語での元素名</span
          >を並べた漢字の元素周期表です。</periodic-table-article-p
        >
        <periodic-table-article-p
          >中国語圏では、化学元素の命名は<span class="u-bold">漢字1字</span
          >でなされます。日本では新しい元素が発見された場合、発音からカタカナ表記にして命名しますが、中国や台湾、香港ではその元素を表す新たな漢字が作られるのです。</periodic-table-article-p
        >
        <periodic-table-article-p
          >元素好き、漢字好きとなれば自ずと見えてくるその接点、「<span
            class="u-marker-bold"
            >元素の漢字</span
          >」を、このサイトでより好きになっていただければ幸いです。</periodic-table-article-p
        >
      </periodic-table-article-subsection>
    </periodic-table-article-section>

    <periodic-table-article-section headline="元素の漢字を眺める">
      <periodic-table-article-subsection headline="漢字の命名規則">
        <periodic-table-article-p
          >元素の漢字は基本的に漢字の分類法である六書のうち、意符＋音符で作られる「<span
            class="u-bold"
            >形声</span
          >」に従って命名されます。</periodic-table-article-p
        >
        <periodic-table-article-p
          >例えば、2016年に名称が決定した113番元素ニホニウムの漢字「<span
            class="u-tw"
            >鉨</span
          >」は、金属元素を表すかねへんを部首に、nihoniumの「ni」から、発音を表す「<span
            class="u-tw"
            >你</span
          >
          (nǐ)」などのつくり「<span class="u-tw">尔</span
          >」を付して作られました。</periodic-table-article-p
        >
        <periodic-table-article-p
          >このように、ほとんどの漢字は英語（IUPAC名）の発音の一部をとった<span
            class="u-marker-bold"
            >音訳によって新たに作られた漢字</span
          >です。</periodic-table-article-p
        >
        <periodic-table-article-p
          >一方、一部には音訳ではない漢字も存在します。</periodic-table-article-p
        >
        <periodic-table-article-p
          >例えば、塩素の「<span class="u-tw">氯</span>」です。きがまえに「<span
            class="u-tw"
            >彔</span
          >」ですが、この「<span class="u-tw">彔</span>」は「<span class="u-tw"
            >綠</span
          >（＝緑）」から来ています。中国では塩素のことを緑色の気体という意味で「<span
            class="u-tw"
            >綠氣</span
          >」と呼んでいたようです。</periodic-table-article-p
        >
        <periodic-table-article-p
          >このような、<span class="u-marker-bold"
            >既存の呼び名から新たに作られた漢字</span
          >は、比較的原子番号の小さい元素に多く見られます。日本語において水素や酸素が欧米の発音のカタカナ転写ではないのと同じようなものです。</periodic-table-article-p
        >
        <periodic-table-article-p
          >そのほか、「<span class="u-tw">鐵</span>」や「<span class="u-tw"
            >鉛</span
          >」、「<span class="u-tw">硫</span
          >」などは、伝統的に使われてきた漢字を<span class="u-marker-bold"
            >化学元素を表すものとして転用した漢字</span
          >です。日本人でもそのまま読んでわかるのが特徴です。</periodic-table-article-p
        >
      </periodic-table-article-subsection>
      <periodic-table-article-subsection headline="漢字の部首">
        <periodic-table-article-p
          >元素の漢字の最たる特徴といえば、ずばり「<span class="u-marker-bold"
            >部首</span
          >」です。</periodic-table-article-p
        >
        <periodic-table-article-p
          >漢字の命名規則として、常温での<span class="u-bold">三態</span
          >（気体・液体・固体）と、<span class="u-bold">金属・非金属</span
          >によって以下の4つの部首いずれかに属すことが定められています。</periodic-table-article-p
        >
        <div class="article__insert">
          <figure class="article__figure">
            <table class="article__table">
              <thead>
                <tr>
                  <th>部首</th>
                  <th>性質</th>
                  <th>例</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>气部</td>
                  <td>気体</td>
                  <td>
                    <span class="u-tw">氫</span>、<span class="u-tw">氧</span
                    >、<span class="u-tw">氯</span>、<span class="u-tw">氬</span
                    >など
                  </td>
                </tr>
                <tr>
                  <td>水部</td>
                  <td>液体</td>
                  <td>
                    <span class="u-tw">溴</span>、<span class="u-tw">汞</span
                    >のみ
                  </td>
                </tr>
                <tr>
                  <td>石部</td>
                  <td>固体非金属</td>
                  <td>
                    <span class="u-tw">硼</span>、<span class="u-tw">碳</span
                    >、<span class="u-tw">硫</span>、<span class="u-tw">砷</span
                    >など
                  </td>
                </tr>
                <tr>
                  <td>金部</td>
                  <td>固体金属</td>
                  <td>
                    <span class="u-tw">鐵</span>、<span class="u-tw">鉛</span
                    >、<span class="u-tw">鋰</span>、<span class="u-tw">鉨</span
                    >など
                  </td>
                </tr>
              </tbody>
            </table>
            <figcaption class="article__caption">元素の漢字の部首</figcaption>
          </figure>
        </div>
        <periodic-table-article-p
          >漢字を見ただけでその元素の性質がわかるのです。すごい！</periodic-table-article-p
        >
        <periodic-table-article-p
          >このような部首の決まりがあるので、例えば炭素の「<span class="u-tw"
            >碳</span
          >」は、普通なら<span class="u-tw">鐵</span
          >などと同様に伝統的に使われてきた「<span class="u-tw">炭</span
          >」がそのまま転用されるところを、規則に従っていしへんを付して新しく漢字を作っています。</periodic-table-article-p
        >
        <periodic-table-article-p
          >ただし例外も存在します。もっとも、原子番号の大きい人工元素は放射性崩壊によって性質を確かめられる量を十分に用意することができないため、テネシンの「<span
            class="u-tw"
            >鿬</span
          >」やオガネソンの「<span class="u-tw">鿫</span
          >」はそれぞれ石部、气部に属しますが、実際にそれらが非金属固体、気体であることが観察されたというわけではありません。</periodic-table-article-p
        >
      </periodic-table-article-subsection>
      <periodic-table-article-subsection headline="漢字の地域差">
        <periodic-table-article-p
          >中国大陸、台湾、香港では、簡体字・繁体字の差はあるものの基本的に同じ漢字を使っていますが、一部は、繁簡の差を除いても<span
            class="u-marker-bold"
            >地域によって異なる漢字</span
          >を使っている元素が存在します。ほとんどの場合、この差は<span
            class="u-bold"
            >中国大陸と台湾</span
          >の間に生じます。</periodic-table-article-p
        >
        <periodic-table-article-p
          >それらを見比べてみるとこんな感じになります。</periodic-table-article-p
        >
        <div class="article__insert">
          <figure class="article__figure">
            <table class="article__table">
              <thead>
                <tr>
                  <th>元素名</th>
                  <th>大陸</th>
                  <th>台湾</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>ケイ素</td>
                  <td><span class="u-cn">硅</span></td>
                  <td><span class="u-tw">矽</span></td>
                </tr>
                <tr>
                  <td>テクネチウム</td>
                  <td><span class="u-cn">锝</span></td>
                  <td><span class="u-tw">鎝</span></td>
                </tr>
                <tr>
                  <td>ルテチウム</td>
                  <td><span class="u-cn">镥</span></td>
                  <td><span class="u-tw">鎦</span></td>
                </tr>
                <tr>
                  <td>アスタチン</td>
                  <td><span class="u-cn">砹</span></td>
                  <td><span class="u-tw">砈</span></td>
                </tr>
                <tr>
                  <td>フランシウム</td>
                  <td><span class="u-cn">钫</span></td>
                  <td><span class="u-tw">鍅</span></td>
                </tr>
                <tr>
                  <td>ネプツニウム</td>
                  <td><span class="u-cn">镎</span></td>
                  <td><span class="u-tw">錼</span></td>
                </tr>
                <tr>
                  <td>プルトニウム</td>
                  <td><span class="u-cn">钚</span></td>
                  <td><span class="u-tw">鈽</span></td>
                </tr>
                <tr>
                  <td>アメリシウム</td>
                  <td><span class="u-cn">镅</span></td>
                  <td><span class="u-tw">鋂</span></td>
                </tr>
                <tr>
                  <td>バークリウム</td>
                  <td><span class="u-cn">锫</span></td>
                  <td><span class="u-tw">鉳</span></td>
                </tr>
                <tr>
                  <td>カリホルニウム</td>
                  <td><span class="u-cn">锎</span></td>
                  <td><span class="u-tw">鉲</span></td>
                </tr>
                <tr>
                  <td>アインスタイニウム</td>
                  <td><span class="u-cn">锿</span></td>
                  <td><span class="u-tw">鑀</span></td>
                </tr>
              </tbody>
            </table>
            <figcaption class="article__caption">
              中国大陸と台湾の元素の漢字の差異
            </figcaption>
          </figure>
        </div>
        <periodic-table-article-p
          >これは、中国大陸と台湾で<span class="u-bold"
            >元素を命名する機関が違う</span
          >ため生じています。しかし、この差異は大陸と台湾の交流が活発ではなかった時期の名残であり、現在は同じ漢字を決定するようになっています。</periodic-table-article-p
        >
        <periodic-table-article-p
          >一方、香港は台湾と同じ繁体字圏ですが、基本的には大陸の繁体字を使用しているようです。</periodic-table-article-p
        >
      </periodic-table-article-subsection>
    </periodic-table-article-section>

    <periodic-table-article-section headline="参考サイト">
      <periodic-table-article-subsection :is-no-headline="true">
        <periodic-table-article-p
          >以下、参考にしたサイトの一部です。間違いや、より良い文献等がありましたらツイッターのbotアカウント（<a
            class="u-link u-link--pt"
            target="_blank"
            rel="noreferrer noopener"
            href="https://twitter.com/gensokanji_bot"
            >@gensokanji_bot</a
          >）まで連絡していただけると助かりますm(_ _)m</periodic-table-article-p
        >
        <periodic-table-article-p
          ><a
            hreflang="zh-cmn-Hans"
            lang="zh-cmn-Hans"
            class="u-link u-link--pt u-zhcn"
            target="_blank"
            rel="noreferrer noopener"
            href="https://baike.baidu.com/item/%E5%85%83%E7%B4%A0%E5%91%A8%E6%9C%9F%E8%A1%A8/282048"
            >元素周期表（化学元素周期列表）_百度百科</a
          ><i class="u-pl5 fas fa-external-link-alt"></i
          ><br />大陸簡体の漢字と発音の参考にしました。</periodic-table-article-p
        >
        <periodic-table-article-p
          ><a
            hreflang="zh-cmn-Hant"
            lang="zh-cmn-Hant"
            class="u-link u-link--pt u-zhtw"
            target="_blank"
            rel="noreferrer noopener"
            href="http://terms.naer.edu.tw/download/159/"
            >國家教育研究院雙語詞彙、學術名詞暨辭書資訊網 - 下載專區
            化學名詞-化學元素一覽表</a
          ><i class="u-pl5 fas fa-external-link-alt"></i
          ><br />台湾正体の漢字と発音の参考にしました。</periodic-table-article-p
        >
        <periodic-table-article-p
          ><a
            hreflang="zh-cmn-Hans"
            lang="zh-cmn-Hans"
            class="u-link u-link--pt u-zhcn"
            target="_blank"
            rel="noreferrer noopener"
            href="https://zh.wikipedia.org/wiki/%E5%85%83%E7%B4%A0%E5%88%97%E8%A1%A8"
            >元素列表 - 维基百科，自由的百科全书</a
          ><i class="u-pl5 fas fa-external-link-alt"></i
          ><br />香港繁体の漢字の参考にしました。</periodic-table-article-p
        >
        <periodic-table-article-p
          ><a
            hreflang="zh-cmn-Hans"
            lang="zh-cmn-Hans"
            class="u-link u-link--pt u-zhcn"
            target="_blank"
            rel="noreferrer noopener"
            href="http://www.cnctst.cn/xwdt/mtgz/201705/t20170510_372222.html"
            >国际在线：中国科学院公布四种新增元素中文名称----全国科学技术名词审定委员会</a
          ><i class="u-pl5 fas fa-external-link-alt"></i
          ><br />2016年に名称が決定した新元素4つの漢字の決定に関する記事です。</periodic-table-article-p
        >
      </periodic-table-article-subsection>
    </periodic-table-article-section>
  </article>
</template>

<style lang="scss">
@use '@/assets/scss/global' as g;
@use '@/assets/scss/global/periodic-table' as pt;

.article {
  display: grid;
  grid-template-columns: auto;
  gap: 70px 0;
  padding: 70px 15%;
  @include g.breakpointMax(g.$tabletMax) {
    gap: 40px 0;
    padding: 40px 10%;
  }
  @include g.breakpointMax() {
    padding: 40px 10px;
  }

  &__insert {
    @include g.flexCentering();
    padding: 40px 20px;
    @include g.breakpointMax() {
      padding: 30px 20px;
    }
  }

  &__figure {
    display: grid;
    grid-template-columns: auto;
    gap: 15px 0;
    max-width: 600px;
  }

  &__caption {
    text-align: center;
    color: pt.$colorBlackA;
  }

  &__table {
    border-collapse: collapse;
    border-spacing: 0;

    th {
      padding: 7px 20px;
      text-align: center;
      @include g.font(ja, bold);
      color: pt.$colorWhite;
      background: pt.$colorMain2;
      @include g.breakpointMax() {
        padding: 5px;
      }
    }

    td {
      padding: 7px 20px;
      border-bottom: 1px solid pt.$colorBlackA;
      text-align: center;
      @include g.breakpointMax() {
        padding: 5px;
      }
    }
  }
}
</style>
