const foodData = [
    {
        id: 'buta-reba',
        name: '豚レバー',
        iron: '13.0mg',
        recipe_summary: 'レバニラ炒め、レバーの甘辛煮',
        image: 'images/buta_reba.jpg',
        recipes: [
            {
                recipeName: 'レバニラ炒め',
                description: 'スタミナ満点でご飯が進む、家庭料理の定番。レバーの下処理が美味しさの秘訣です。',
                servings: '2人分',
                youtubeUrl: 'https://www.youtube.com/watch?v=s-s-0z_i-y8',
                ingredients: [
                    { name: '豚レバー', amount: '150g' },
                    { name: 'ニラ', amount: '1束' },
                    { name: 'もやし', amount: '1袋' },
                    { name: '[下処理用] 牛乳', amount: '100ml' },
                    { name: '[下処理用] 塩こしょう', amount: '少々' },
                    { name: '[下処理用] 片栗粉', amount: '大さじ1' },
                    { name: '[合わせ調味料] 醤油', amount: '大さじ1.5' },
                    { name: '[合わせ調味料] 酒', amount: '大さじ1' },
                    { name: '[合わせ調味料] 砂糖', amount: '小さじ1' },
                    { name: 'ごま油', amount: '大さじ1' },
                ],
                instructions: [
                    '豚レバーは薄切りにし、牛乳に10分ほど浸して臭みを取る。その後、水で洗いキッチンペーパーで水気を拭き取り、塩こしょうと片栗粉をまぶす。',
                    'ニラは5cmの長さに切る。',
                    'フライパンにごま油を熱し、レバーを中火で両面に焼き色がつくまで炒め、一度取り出す。',
                    '同じフライパンでもやしを炒め、しんなりしたらニラを加えてさっと炒め合わせる。',
                    'レバーをフライパンに戻し、[合わせ調味料]を全て加えて全体に絡めながら手早く炒めたら完成。',
                ]
            }
        ]
    },
    {
        id: 'tori-reba',
        name: '鶏レバー',
        iron: '9.0mg',
        recipe_summary: 'レバーパテ、焼き鳥',
        image: 'images/tori_reba.jpg',
        recipes: [
            {
                recipeName: '鶏レバーの甘辛煮',
                description: '貧血予防にぴったり。ご飯にもお酒にも合う、照りの良い常備菜です。',
                servings: '2〜3人分',
                youtubeUrl: 'https://www.youtube.com/watch?v=Asb1-c_2b_4',
                ingredients: [
                    { name: '鶏レバー', amount: '250g' },
                    { name: '生姜(薄切り)', amount: '1かけ' },
                    { name: '[調味料] 醤油', amount: '大さじ3' },
                    { name: '[調味料] みりん', amount: '大さじ3' },
                    { name: '[調味料] 酒', amount: '大さじ3' },
                    { name: '[調味料] 砂糖', amount: '大さじ1.5' },
                ],
                instructions: [
                    '鶏レバーは脂肪や血の塊を取り除き、一口大に切る。ハツは半分に切って中の血を洗い流す。',
                    'ボウルにレバーとたっぷりの水(分量外)を入れ、10分ほど置いて血抜きをし、水気を切る。',
                    '鍋に[調味料]と生姜を入れて中火にかけ、煮立ったら鶏レバーを加える。',
                    'アクを取りながら、落し蓋をして弱火で15分ほど煮る。',
                    '落し蓋を外し、煮汁が少なくなり照りが出るまで煮詰めたら完成。',
                ]
            }
        ]
    },
    {
        id: 'asari',
        name: 'あさり (水煮缶)',
        iron: '29.7mg',
        recipe_summary: 'あさりの味噌汁、ボンゴレビアンコ',
        image: 'images/asari.jpg',
        recipes: [
            {
                recipeName: 'あさりの味噌汁',
                description: 'あさりの旨味がだしに溶け込んだ、風味豊かな定番の味噌汁です。',
                servings: '2人分',
                youtubeUrl: 'https://www.youtube.com/watch?v=B-G3K_I5J-w',
                ingredients: [
                    { name: 'あさり(砂抜き済み)', amount: '200g' },
                    { name: '水', amount: '400ml' },
                    { name: '味噌', amount: '大さじ1.5' },
                    { name: '小ねぎ(小口切り)', amount: '適量' },
                ],
                instructions: [
                    'あさりは殻をこすり合わせるようにしてよく洗う。',
                    '鍋に水とあさりを入れて火にかける。沸騰してあさりの口が開いたら、アクを取り除く。',
                    '火を弱め、味噌を煮汁で溶いてから鍋全体に広げる。',
                    '煮立つ直前で火を止め、お椀に注ぎ、小ねぎを散らして完成。',
                ]
            }
        ]
    },
    {
        id: 'hijiki',
        name: 'ひじき (乾燥)',
        iron: '6.2mg',
        recipe_summary: 'ひじきの煮物、ひじきご飯',
        image: 'images/hijiki.jpg',
        recipes: [
            {
                recipeName: 'ひじきの煮物',
                description: '和食の基本。作り置きしておくとお弁当にも便利です。',
                servings: '4人分',
                youtubeUrl: 'https://www.youtube.com/watch?v=b-z3i2g-3qM',
                ingredients: [
                    { name: '乾燥ひじき', amount: '20g' },
                    { name: 'にんじん', amount: '1/3本' },
                    { name: '油揚げ', amount: '1枚' },
                    { name: '大豆水煮', amount: '50g' },
                    { name: 'だし汁', amount: '200ml' },
                    { name: '醤油', amount: '大さじ2' },
                    { name: 'みりん', amount: '大さじ2' },
                    { name: '砂糖', amount: '大さじ1' },
                    { name: 'ごま油', amount: '大さじ1' },
                ],
                instructions: [
                    'ひじきはたっぷりの水で20分ほど戻し、よく洗って水気を切る。',
                    'にんじんは細切り、油揚げは熱湯で油抜きしてから細切りにする。',
                    '鍋にごま油を熱し、にんじんとひじきを炒める。',
                    '油が回ったら、油揚げ、大豆、だし汁と調味料を全て加える。',
                    '煮立ったら落し蓋をし、弱火で煮汁が少なくなるまで10〜15分煮たら完成。',
                ]
            }
        ]
    },
    {
        id: 'komatsuna',
        name: '小松菜',
        iron: '2.8mg',
        recipe_summary: 'おひたし、スムージー、炒め物',
        image: 'images/komatsuna.jpg',
        recipes: [
            {
                recipeName: '小松菜のおひたし',
                description: 'シャキシャキ食感が美味しい、手軽な副菜の定番です。',
                servings: '2人分',
                youtubeUrl: 'https://www.youtube.com/watch?v=O811P6-3_sA',
                ingredients: [
                    { name: '小松菜', amount: '1束' },
                    { name: 'だし汁', amount: '100ml' },
                    { name: '醤油', amount: '小さじ2' },
                    { name: 'かつお節', amount: '適量' },
                ],
                instructions: [
                    '小松菜はよく洗い、根元を切り落として5cm長さに切る。',
                    '鍋に湯を沸かし、塩(分量外)を少々入れ、小松菜を茎から茹でる。1分ほどで葉も入れ、さっと茹でて冷水に取る。',
                    '水気をしっかり絞り、だし汁と醤油を合わせたものに浸す。',
                    '器に盛り付け、かつお節をかけて完成。',
                ]
            }
        ]
    },
    {
        id: 'hourensou',
        name: 'ほうれん草',
        iron: '2.0mg',
        recipe_summary: 'ほうれん草のソテー、ごま和え',
        image: 'images/hourensou.jpg',
        recipes: [
            {
                recipeName: 'ほうれん草のごま和え',
                description: 'ごまの風味が香ばしい、和食の食卓にかかせない一品です。',
                servings: '2人分',
                youtubeUrl: 'https://www.youtube.com/watch?v=cM32z93i62E',
                ingredients: [
                    { name: 'ほうれん草', amount: '1束' },
                    { name: '[A] すりごま', amount: '大さじ3' },
                    { name: '[A] 醤油', amount: '大さじ1' },
                    { name: '[A] 砂糖', amount: '大さじ1' },
                ],
                instructions: [
                    'ほうれん草はよく洗い、塩(分量外)を加えた熱湯でさっと茹でて冷水に取り、水気を固く絞る。',
                    'ほうれん草を4cm長さに切る。',
                    'ボウルに[A]の材料を全て混ぜ合わせる。',
                    '食べる直前に、ほうれん草と和え衣を混ぜ合わせて完成。',
                ]
            }
        ]
    },
    {
        id: 'kouya-toufu',
        name: '高野豆腐',
        iron: '6.8mg',
        recipe_summary: '煮物、卵とじ',
        image: 'images/kouya_toufu.jpg',
        recipes: [
            {
                recipeName: '高野豆腐の煮物',
                description: 'だしがじゅわっと染み込んだ、優しい味わいの煮物です。',
                servings: '2人分',
                youtubeUrl: 'https://www.youtube.com/watch?v=f-j_t2-g8_s',
                ingredients: [
                    { name: '高野豆腐', amount: '2枚' },
                    { name: 'にんじん', amount: '少々' },
                    { name: '干ししいたけ', amount: '2枚' },
                    { name: 'だし汁', amount: '400ml' },
                    { name: '砂糖', amount: '大さじ2' },
                    { name: 'みりん', amount: '大さじ1' },
                    { name: '醤油', amount: '大さじ1.5' },
                ],
                instructions: [
                    '高野豆腐と干ししいたけはぬるま湯で戻す。高野豆腐は水気を軽く絞り4等分に、しいたけは軸を取る。にんじんは飾り切りにする。',
                    '鍋にだし汁と調味料、干ししいたけ、にんじんを入れて火にかける。',
                    '煮立ったら高野豆腐を加え、落し蓋をして弱火で15分ほど煮る。',
                    '火を止めて一度冷まし、味を含ませて完成。',
                ]
            }
        ]
    }
];