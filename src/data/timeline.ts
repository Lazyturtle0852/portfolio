export type Era = 'elementary' | 'junior-high' | 'high-school' | 'university'

export const timelineItems: { era: Era; period: string; title: string; body: string }[] = [
  {
    era: 'elementary',
    period: '小学校',
    title: 'テクノロジーとの出会い',
    body: 'インドネシアのインターナショナルスクールに通い、一人一台配られた PC でテクノロジーの面白さに目覚める。',
  },
  {
    era: 'junior-high',
    period: '中学校',
    title: '身近な問題をデータで見る',
    body: '通学バスの行列に疑問を持ち、学年アンケートで分析。Notion などのノーコードツールにも触れはじめる。',
  },
  {
    era: 'high-school',
    period: '高校',
    title: '自分の課題を技術で解く',
    body: '文化祭のクラス責任者を3年間務めながら、Python で寝台特急の空席検索ツールを作る。自転車旅もこの頃から。',
  },
  {
    era: 'university',
    period: '大学 (Now)',
    title: '技術を社会に届ける',
    body: 'SFC で ICAR とたくみ研を掛け持ちし、交通 × 画像認識の研究と、技術が社会に根付くための組織を考えている。AI スタートアップ ARCRA ではエンジニアとして働く。キャンパスの Wi-Fi で友達の在校がわかるアプリ COKOYO も公開。',
  },
]
