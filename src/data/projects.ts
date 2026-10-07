import lifeIsTech from '../assets/images/Day1_59.jpg'
import haitatsuGame from '../assets/images/screenshot-2025-10-16-151931.png'
import icarResearch from '../assets/images/screenshot-2025-05-24-conf077.jpg'
import sfcClipLogo from '../assets/images/sfcclip-logo.png'
import bikeTrip from '../assets/images/186321.jpg'
import sleeperTrain from '../assets/images/screenshot-2025-10-28-131800.png'
import tennisDb from '../assets/images/screenshot-2025-10-28-134020.png'
import quizletSite from '../assets/images/screenshot-2025-10-28-133526.png'
import busData from '../assets/images/bus_data.png'
import type { ImageMetadata } from 'astro'

type TagTone = 'pink' | 'gray' | 'purple' | 'green' | 'blue'

export type Project = {
  title: string
  period: string
  image: ImageMetadata
  alt: string
  imageClassName: string
  imageStyle?: string
  link?: { href: string; label: string }
  description: string
  tags: { label: string; tone: TagTone }[]
}

export const projects: Project[] = [
  {
    title: 'Life is Tech!',
    period: '大学',
    image: lifeIsTech,
    alt: 'Life is Tech! サマーキャンプで発表するメンター',
    imageClassName: 'h-56 w-full object-cover object-top',
    link: {
      href: 'https://life-is-tech.com/',
      label: 'Life is Tech! 公式サイト',
    },
    description:
      '大学生メンターとして、中高生にものづくりの楽しさを伝える活動に取り組んでいる。Unityコースを担当し、他メンターと共同でゲーム開発も行っています。',
    tags: [
      { label: '#リーダーシップ', tone: 'pink' },
      { label: '#教育', tone: 'gray' },
      { label: '#Unity', tone: 'gray' },
    ],
  },
  {
    title: 'Unityによるゲーム開発',
    period: '大学',
    image: haitatsuGame,
    alt: '「絶対に定時配達カンパニー」のゲーム画面',
    imageClassName: 'h-56 w-full object-cover object-top',
    link: {
      href: 'https://unityroom.com/games/haitatsu_615',
      label: 'ゲームを遊んでみる',
    },
    description:
      'Unityのゲーム開発に挑戦し、実世界の物流問題に焦点を当てたポップなゲーム、「絶対に定時配達カンパニー」を制作しました。',
    tags: [
      { label: '#Unity', tone: 'pink' },
      { label: '#ゲーム開発', tone: 'gray' },
      { label: '#クリエイティブ', tone: 'gray' },
    ],
  },
  {
    title: '交通×ITの研究',
    period: '大学 (現在)',
    image: icarResearch,
    alt: '首都高の標識を画像認識で検出した車載カメラ映像',
    imageClassName: 'h-56 w-full object-cover',
    link: {
      href: 'https://icar.sfc.wide.ad.jp/',
      label: '研究室紹介ページ',
    },
    description:
      '村井純研究室インターネット自動車研究グループにて、首都高との共同研究として画像認識による位置推定プロジェクトに取り組んでいます。',
    tags: [
      { label: '#Web', tone: 'purple' },
      { label: '#交通', tone: 'gray' },
      { label: '#AI', tone: 'gray' },
    ],
  },
  {
    title: 'SFC CLIP',
    period: '大学',
    image: sfcClipLogo,
    alt: 'SFC CLIP のロゴ',
    imageClassName: 'h-56 w-full object-contain',
    link: {
      href: 'https://sfcclip.net',
      label: 'SFC CLIP 公式サイト',
    },
    description:
      'キャンパスの情報発信サークル「SFC CLIP」に所属し、取材や記事執筆をする傍ら、校正・業務自動化・タスク管理ツールなどを開発し、サークル運営を支援しています。',
    tags: [
      { label: '#情報発信', tone: 'pink' },
      { label: '#リーダーシップ', tone: 'gray' },
      { label: '#問題解決', tone: 'gray' },
    ],
  },
  {
    title: '自転車旅',
    period: '高校~',
    image: bikeTrip,
    alt: '海沿いのガードレールに立てかけた2台のロードバイク',
    imageClassName: 'h-56 w-full object-cover object-top',
    imageStyle: 'object-position: 50% 25%',
    link: {
      href: 'https://www.strava.com/athletes/116006611',
      label: 'Strava プロフィール',
    },
    description:
      '自転車で日本各地を旅している。瀬戸内海一周、九州縦断、富士山一周などの経験を通して、多様な人々と交流し、視野を広げています。',
    tags: [
      { label: '#旅', tone: 'pink' },
      { label: '#自然', tone: 'gray' },
      { label: '#計画', tone: 'gray' },
    ],
  },
  {
    title: '寝台特急 予約検索システム',
    period: '高校時代',
    image: sleeperTrain,
    alt: '寝台特急の空席検索ツールの画面',
    imageClassName: 'h-56 w-full object-cover',
    link: {
      href: 'https://colab.research.google.com/drive/1UnzmVwHmPpwAMPcihR4Rl3u-JPQMjNUG?usp=sharing',
      label: 'Colab ノートブック',
    },
    description:
      '趣味の寝台特急の予約を効率化するため、Pythonでスクレイピングを行い、空席を一括検索するツールを開発しました。',
    tags: [
      { label: '#Python', tone: 'green' },
      { label: '#スクレイピング', tone: 'gray' },
      { label: '#課題解決', tone: 'gray' },
    ],
  },
  {
    title: '戦績データベースの構築・運用',
    period: '高校時代',
    image: tennisDb,
    alt: 'テニス部の戦績データベース',
    imageClassName: 'h-56 w-full object-cover object-top',
    description:
      '中高6年間所属したテニス部の戦績管理を効率化するため、Notionでデータベースを構築し、部員全員が簡単に利用できるようにしました。',
    tags: [
      { label: '#課題解決', tone: 'pink' },
      { label: '#データ分析', tone: 'gray' },
      { label: '#Notion', tone: 'gray' },
    ],
  },
  {
    title: '学習のサポート',
    period: '高校時代',
    image: quizletSite,
    alt: 'クイズレットまとめサイトの画面',
    imageClassName: 'h-56 w-full object-cover object-top',
    description:
      '学内で暗記アプリ「クイズレット」のまとめサイトを制作し、利他的精神に基づく助け合いのエコシステムを構築しました。3年間を通して150を超えるセットを制作。',
    tags: [
      { label: '#リーダーシップ', tone: 'pink' },
      { label: '#利他', tone: 'gray' },
      { label: '#Notion', tone: 'gray' },
    ],
  },
  {
    title: 'バス混雑の課題分析',
    period: '中学校時代',
    image: busData,
    alt: 'バス列の分析データグラフ',
    imageClassName: 'h-56 w-full object-cover',
    description:
      'バス通学の行列に疑問を持ち、自主的にアンケート調査とデータ分析を実施。待ち時間と到着時間の関係性を可視化しました。',
    tags: [
      { label: '#問題解決', tone: 'blue' },
      { label: '#データ分析', tone: 'gray' },
    ],
  },
]
