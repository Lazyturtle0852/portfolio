import lifeIsTech from '../assets/images/Day1_59.jpg'
import haitatsuGame from '../assets/images/screenshot-2025-10-16-151931.png'
import icarResearch from '../assets/images/screenshot-2025-05-24-conf077.jpg'
import sfcClipLogo from '../assets/images/sfcclip-logo.png'
import bikeTrip from '../assets/images/186321.jpg'
import sleeperTrain from '../assets/images/screenshot-2025-10-28-131800.png'
import tennisDb from '../assets/images/screenshot-2025-10-28-134020.png'
import quizletSite from '../assets/images/screenshot-2025-10-28-133526.png'
import busData from '../assets/images/bus_data.png'
import minicar from '../assets/images/news3.png'
import portfolioSite from '../assets/images/news1.png'
import cokoyoIcon from '../assets/images/cokoyo-icon.png'
import takumilab from '../assets/images/takumilab.jpg'
import arcraLogo from '../assets/images/arcra-logo.png'
import type { ImageMetadata } from 'astro'
import type { Era } from './timeline'

type TagTone = 'pink' | 'gray' | 'purple' | 'green' | 'blue'

type Tag = { label: string; tone: TagTone }
type Link = { href: string; label: string }

/** いま所属している・続けている活動 */
export type Activity = {
  id: string
  /** false にすると Journey の写真に出さない */
  journey?: boolean
  title: string
  role: string
  period: string
  era: Era
  image?: ImageMetadata
  alt?: string
  imageClassName?: string
  imageStyle?: string
  link?: Link
  description: string
  tags: Tag[]
}

/** 作ったもの・挑戦したこと */
export type Work = {
  id: string
  /** false にすると Journey の写真に出さない */
  journey?: boolean
  title: string
  period: string
  era: Era
  image: ImageMetadata
  alt: string
  imageClassName: string
  imageStyle?: string
  link?: Link
  description: string
  tags: Tag[]
}

export const activities: Activity[] = [
  {
    id: 'icar',
    title: 'インターネット自動車研究グループ（ICAR）',
    role: '研究',
    period: '2025年〜',
    era: 'university',
    image: icarResearch,
    alt: '首都高の標識を画像認識で検出した車載カメラ映像',
    imageClassName: 'object-cover',
    link: { href: 'https://icar.sfc.wide.ad.jp/', label: '研究グループのページ' },
    description:
      '植原啓介合同研究室の研究グループで、首都高との共同研究に参加しています。GPS だけでは首都高の高架の上か下の一般道かを見分けられず、カーナビが誤案内する問題に、カメラ映像から場所を特定する VPR（Visual Place Recognition）で取り組んでいます。スマホでも動く軽さが目標です。',
    tags: [
      { label: '#画像認識', tone: 'purple' },
      { label: '#VPR', tone: 'gray' },
      { label: '#ITS', tone: 'gray' },
    ],
  },
  {
    id: 'takumilab',
    title: '清水たくみ研究室',
    role: '研究',
    period: '2026年〜',
    era: 'university',
    image: takumilab,
    alt: '池の向こうに見える SFC キャンパスの校舎',
    imageClassName: 'object-cover',
    link: { href: 'https://takumilab.sfc.keio.ac.jp/', label: '研究室のページ' },
    description:
      '「どうすれば技術が社会に役立つか」「どうすれば組織が技術を生み出せるか」を、組織の側から考える研究室です。ICAR と掛け持ちで、技術と組織の両面から社会実装を探っています。',
    tags: [
      { label: '#組織論', tone: 'purple' },
      { label: '#社会実装', tone: 'gray' },
    ],
  },
  {
    id: 'arcra',
    title: '株式会社ARCRA',
    role: 'エンジニア',
    period: '2026年〜',
    era: 'university',
    image: arcraLogo,
    alt: 'ARCRA のロゴ',
    imageClassName: 'object-contain bg-white',
    link: { href: 'https://www.green-japan.com/company/10847', label: '会社紹介' },
    description:
      '東京大学松尾研究室発の AI スタートアップです。オーダーメイドの AI やソフトウェアの受託開発と自社サービスを手がけていて、エンジニアとして開発に携わっています。',
    tags: [
      { label: '#AI', tone: 'purple' },
      { label: '#スタートアップ', tone: 'gray' },
    ],
  },
  {
    id: 'life-is-tech',
    title: 'Life is Tech!',
    role: 'メンター（Unity コース）',
    period: '2025年〜',
    era: 'university',
    image: lifeIsTech,
    alt: 'Life is Tech! サマーキャンプで発表するメンター',
    imageClassName: 'object-cover object-top',
    link: { href: 'https://life-is-tech.com/', label: 'Life is Tech! 公式サイト' },
    description:
      '中高生向けのプログラミングキャンプで、Unity コースのメンターをしています。ものづくりの楽しさを伝えつつ、メンター同士でゲームの共同開発もしています。',
    tags: [
      { label: '#教育', tone: 'pink' },
      { label: '#Unity', tone: 'gray' },
      { label: '#リーダーシップ', tone: 'gray' },
    ],
  },
  {
    id: 'sfc-clip',
    title: 'SFC CLIP',
    role: '記者・開発',
    period: '2025年〜',
    era: 'university',
    image: sfcClipLogo,
    alt: 'SFC CLIP のロゴ',
    imageClassName: 'object-contain bg-white p-4',
    link: { href: 'https://sfcclip.net', label: 'SFC CLIP 公式サイト' },
    description:
      'キャンパスの情報を発信するサークルです。取材や記事執筆に加えて、校正・業務自動化・タスク管理のツールを作り、サークルの運営を支えています。',
    tags: [
      { label: '#情報発信', tone: 'pink' },
      { label: '#業務自動化', tone: 'gray' },
    ],
  },
  {
    id: 'bike-trip',
    title: '自転車旅',
    role: '趣味',
    period: '高校〜',
    era: 'secondary',
    image: bikeTrip,
    alt: '海沿いのガードレールに立てかけた2台のロードバイク',
    imageClassName: 'object-cover',
    imageStyle: 'object-position: 50% 25%',
    link: { href: 'https://www.strava.com/athletes/116006611', label: 'Strava プロフィール' },
    description:
      '自転車で日本各地を旅しています。瀬戸内海一周、九州縦断、富士山一周など。行く先々で出会う人との話が楽しみです。',
    tags: [
      { label: '#旅', tone: 'pink' },
      { label: '#計画', tone: 'gray' },
    ],
  },
]

// 新しい順
export const works: Work[] = [
  {
    id: 'cokoyo',
    title: 'COKOYO',
    period: '2026年10月',
    era: 'university',
    image: cokoyoIcon,
    alt: 'COKOYO のアイコン（オレンジ地のスライム）',
    imageClassName: 'object-contain bg-[#ea580c]',
    link: { href: 'https://cokoyo.lazyta-toru.net/', label: 'アプリを開く' },
    description:
      'フレンドがいまキャンパスにいるかを、ボタンひとつで確かめられる SFC 生向けの Web アプリです。GPS は使わず、SFC Digital Twin API でキャンパスの Wi-Fi につながっているかだけを見ます。見せる範囲は相手ごとに選べて、いつでも隠れられます。',
    tags: [
      { label: '#Web', tone: 'blue' },
      { label: '#デジタルツイン', tone: 'gray' },
      { label: '#プライバシー', tone: 'gray' },
    ],
  },
  {
    id: 'minicar-battle',
    title: '自動運転ミニカーバトル',
    period: '2026年3月',
    era: 'university',
    image: minicar,
    alt: '自動運転ミニカーバトルの会場',
    imageClassName: 'object-cover',
    link: { href: 'https://42tokyo.jp/landing/autonomous-minicar-battle/', label: '大会ページ' },
    description:
      '42Tokyo 主催の自動運転ミニカーレースに、中高の友人とチームで出場。決勝に進み、50チーム中12位でした。ソフトとハードをつなげて実機で走らせる難しさを体感しました。',
    tags: [
      { label: '#自動運転', tone: 'purple' },
      { label: '#チーム開発', tone: 'gray' },
      { label: '#ハードウェア', tone: 'gray' },
    ],
  },
  {
    id: 'portfolio',
    title: 'このポートフォリオサイト',
    period: '2025年〜',
    era: 'university',
    image: portfolioSite,
    alt: 'ポートフォリオサイトの改修の画面',
    imageClassName: 'object-cover object-top',
    link: { href: 'https://github.com/Lazyturtle0852/portfolio', label: 'GitHub リポジトリ' },
    description:
      'HTML 直書きから React/Vite を経て、いまは Astro + Tailwind CSS で作っています。GitHub Actions で自前の VPS へ自動デプロイしています。',
    tags: [
      { label: '#Web', tone: 'blue' },
      { label: '#Astro', tone: 'gray' },
      { label: '#CI/CD', tone: 'gray' },
    ],
  },
  {
    id: 'haitatsu-game',
    title: '絶対に定時配達カンパニー',
    period: '2025年',
    era: 'university',
    image: haitatsuGame,
    alt: '「絶対に定時配達カンパニー」のゲーム画面',
    imageClassName: 'object-cover object-top',
    link: { href: 'https://unityroom.com/games/haitatsu_615', label: 'ゲームを遊んでみる' },
    description:
      '物流の「時間指定配達」をテーマにした、Unity 製のポップな配達ゲームです。unityroom で公開しています。',
    tags: [
      { label: '#Unity', tone: 'pink' },
      { label: '#ゲーム開発', tone: 'gray' },
    ],
  },
  {
    id: 'sleeper-train',
    title: '寝台特急 空席検索ツール',
    period: '高校',
    era: 'secondary',
    image: sleeperTrain,
    alt: '寝台特急の空席検索ツールの画面',
    imageClassName: 'object-cover',
    link: {
      href: 'https://colab.research.google.com/drive/1UnzmVwHmPpwAMPcihR4Rl3u-JPQMjNUG?usp=sharing',
      label: 'Colab ノートブック',
    },
    description:
      '「サンライズ出雲・瀬戸」の予約を取りやすくするため、Python のスクレイピングで空席を一括検索するツールを作りました。自分の困りごとを技術で解決した最初の経験です。',
    tags: [
      { label: '#Python', tone: 'green' },
      { label: '#スクレイピング', tone: 'gray' },
    ],
  },
  {
    id: 'tennis-db',
    title: 'テニス部 戦績データベース',
    period: '高校',
    era: 'secondary',
    image: tennisDb,
    alt: 'テニス部の戦績データベース',
    imageClassName: 'object-cover object-top',
    description:
      '中高6年間所属したテニス部の戦績を Notion のデータベースにまとめ、部員全員が記録・閲覧できるようにしました。',
    tags: [
      { label: '#Notion', tone: 'pink' },
      { label: '#データ管理', tone: 'gray' },
    ],
  },
  {
    id: 'quizlet',
    title: 'Quizlet まとめサイト',
    period: '高校',
    era: 'secondary',
    image: quizletSite,
    alt: 'Quizlet まとめサイトの画面',
    imageClassName: 'object-cover object-top',
    description:
      '暗記アプリ Quizlet の単語セットを学年で共有できるまとめサイトを作りました。3年間で150以上のセットを作り、みんなで教え合う仕組みにしました。',
    tags: [
      { label: '#Notion', tone: 'pink' },
      { label: '#学習支援', tone: 'gray' },
    ],
  },
  {
    id: 'bus-analysis',
    title: 'バス混雑の分析',
    period: '中学',
    era: 'secondary',
    image: busData,
    alt: 'バス列の分析データのグラフ',
    imageClassName: 'object-cover',
    description:
      '通学バスの長い行列に疑問を持ち、学年にアンケートを取って分析しました。到着時刻と待ち時間の関係をグラフにして可視化しました。',
    tags: [
      { label: '#データ分析', tone: 'blue' },
      { label: '#アンケート', tone: 'gray' },
    ],
  },
]
