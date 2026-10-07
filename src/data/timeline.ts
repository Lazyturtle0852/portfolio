export type Era = 'childhood' | 'secondary' | 'university'

export const timelineItems: { era: Era; period: string; title: string; body: string }[] = [
  {
    era: 'childhood',
    period: '小・中学校',
    title: 'インドネシアで、テクノロジーと出会う',
    body: '小中学校時代をインドネシアで過ごす。インターナショナルスクールで一人一台配られた PC でテクノロジーの面白さに目覚め、現地で見た交通事情が、のちに交通に関心を持つきっかけになる。',
  },
  {
    era: 'secondary',
    period: '中学・高校',
    title: '身近な課題を、テクノロジーで解く',
    body: '通学バスの行列をアンケートで分析したり、テニス部の戦績データベースや学年の暗記セットのまとめサイト、寝台特急の空席検索ツールを作ったり。文化祭のクラス責任者を3年間務め、自転車旅もはじめる。',
  },
  {
    era: 'university',
    period: '大学 (Now)',
    title: 'テクノロジーを、社会に届ける',
    body: 'SFC で ICAR とたくみ研を掛け持ちし、首都高の位置をカメラ映像から特定する研究（VPR）と、技術が社会に根付くための組織を考えている。AI スタートアップ ARCRA ではエンジニアとして働く。キャンパスの Wi-Fi で友達の在校がわかるアプリ COKOYO も公開。',
  },
]
