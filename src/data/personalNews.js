import news1 from '../assets/news1.png'
import news3 from '../assets/news3.png'

export const personalNewsItems = [
  {
    date: '2026-04-09',
    title: 'お世話になっていた会社を離れました',
    body: '学業に力を入れたい・色々な経験を積みたいなどの理由から、約5ヶ月間エンジニアとして働かせていただいた株式会社Kiyonoをこの度離れ、別の環境に身を置くこととなりました。これまで大変お世話になりました!これからも頑張っていきます。',
    link: 'kiyono-co.jp',
    image: "/assets/images/turtle-icon.jpeg",
  },
  {
    date: '2026-03-27',
    title: 'ポートフォリオの改修',
    body: 'React/Viteを導入するとともに、これまで HTML 直書きだったプロフィール・経歴・プロジェクト・スキルなどの情報をsrc/data/*.js に切り出し、保守性を向上しました',
    link: 'https://github.com/Lazyturtle0852/portfolio/pull/1',
    image: news1,
  },
  {
    date: '2026-03-27',
    title: '清水たくみ研に入りました',
    body: 'RGのICAR（インターネット自動車研究グループ）に加え、組織という観点から「どうすれば技術が社会に役立つか」「どうすれば組織が技術を生み出せるか」を探究するために入りました。これから研究室掛け持ち体制で頑張っていきます。',
    link: 'https://takumilab.sfc.keio.ac.jp/',
    image: '/assets/images/turtle-icon.jpeg',
  },
  {
    date: '2026-03-15',
    title: '自動運転ミニカーレースで決勝に出場しました',
    body: '42Tokyo主催の自動運転ミニカーバトルで、中高時代の友人とチームを組み、出場しました。結果は50チーム中12位で、ソフトウェアとハードウェアの両方の技術、またそれらを連携させる難しさを学びました。めちゃたのしかった',
    link: 'https://42tokyo.jp/landing/autonomous-minicar-battle/',
    image: news3,
  },
]
