const items = [
  {
    id: "bread_tie",
    name: "빵끈",
    officialName: "트위스트 타이 (Twist Tie)",
    category: "kitchen",
    image: "assets/bread_tie.png",
    description: "식빵이나 빵 봉지 등을 밀봉할 때 흔히 사용하는, 플라스틱이나 종이 내부에 얇은 철사가 들어있는 끈입니다. 모양을 쉽게 변형할 수 있어 케이블 정리나 공예용으로도 널리 쓰입니다.",
    tags: ["빵", "철사", "식빵", "묶는거", "철사끈", "포장"],
    pos: { x: 10, y: 15 },
    size: 130,
    rotation: 15,
    otherDesigns: [
      {
        image: "assets/bread_tie.png",
        officialName: "골드 트위스트 타이 (기본형)",
        description: "가장 클래식한 철사 내장형 골드 컬러 플라스틱 트위스트 타이입니다. 유연하고 변형이 쉬우며 단단히 고정됩니다."
      },
      {
        image: "assets/bread_tie_alt1.png",
        officialName: "무지개 메탈릭 타이",
        description: "다양한 메탈릭 색상 피막을 입혀 화려하게 포장할 수 있도록 만든 트위스트 타이입니다. 주로 선물 포장이나 파티 데코용으로 많이 쓰입니다."
      },
      {
        image: "assets/bread_tie_alt2.png",
        officialName: "내추럴 종이 타이",
        description: "철사 겉면을 플라스틱 대신 재생 종이로 감싸 친환경적인 느낌을 주는 타이입니다. 베이커리나 수제 과자 포장에 자연스러운 멋을 더해줍니다."
      },
      {
        image: "assets/bread_tie_alt3.png",
        officialName: "클립형 케이블 루프",
        description: "한 번 묶으면 고정이 잘 되며, 손쉽게 다시 풀 수 있도록 설계된 원형 플라스틱 및 철사 혼합 형태의 마감용 케이블 루프입니다."
      }
    ]
  },
  {
    id: "egg_carton",
    name: "계란 판 / 계란 곽",
    officialName: "난갑 (Egg Carton / Egg Tray)",
    category: "kitchen",
    image: "assets/egg_carton.png",
    description: "달걀이 깨지지 않도록 충격을 흡수하도록 디자인된 홈이 파여 있는 용기입니다. 주로 투명한 플라스틱(PET)이나 재생 펄프(종이) 재질로 만들어집니다.",
    tags: ["계란", "달걀", "통", "플라스틱", "판", "곽", "껍데기"],
    pos: { x: 30, y: 10 },
    size: 210,
    rotation: 12,
    otherDesigns: [
      {
        image: "assets/egg_carton.png",
        officialName: "펄프 난갑 (기본형)",
        description: "재생 종이 펄프로 만들어진 클래식한 30구 계란 판입니다. 습기 조절과 충격 흡수 능력이 탁월합니다."
      },
      {
        image: "assets/egg_carton_alt1.png",
        officialName: "친환경 재생종이 6구 팩",
        description: "재생 펄프를 압착하여 만든 소량 포장용 6구 계란 상자입니다. 뚜껑이 일체형으로 디자인되어 유통과 보관이 편리하고 환경에 무해합니다."
      },
      {
        image: "assets/egg_carton.png",
        officialName: "펄프 난갑 (디자인 C)",
        description: "습기 보존과 충격 방지에 우수한 친환경 펄프 재질의 계란 전용 트레이입니다."
      },
      {
        image: "assets/egg_carton.png",
        officialName: "펄프 난갑 (디자인 D)",
        description: "달걀의 크기와 신선도를 안전하게 유지해주는 견고한 격자형 계란 판 구조입니다."
      }
    ]
  },
  {
    id: "ship_helm",
    name: "배 키 / 배 운전대",
    officialName: "타륜 (Helm / Ship's Wheel)",
    category: "misc",
    image: "assets/ship_helm.png",
    description: "선박의 방향타를 조종하여 배의 진행 방향을 바꾸는 바퀴 모양의 장치입니다. 클래식한 목재 바퀴 디자인에 황동 장식이 들어간 모습이 대표적입니다.",
    tags: ["배", "운전대", "선장", "키", "바퀴", "바다"],
    pos: { x: 74, y: 12 },
    size: 190,
    rotation: 10,
    otherDesigns: [
      {
        image: "assets/ship_helm.png",
        officialName: "클래식 목재 타륜 (기본형)",
        description: "선박의 방향타를 조종하여 배의 진행 방향을 바꾸는 바퀴 모양의 장치입니다. 클래식한 목재 바퀴 디자인에 황동 장식이 들어간 모습이 대표적입니다."
      },
      {
        image: "assets/ship_helm.png",
        officialName: "목재 타륜 (디자인 B)",
        description: "클래식 선박의 고유한 조타륜 디자인으로, 8개의 살과 튼튼한 중앙 허브를 가집니다."
      },
      {
        image: "assets/ship_helm.png",
        officialName: "목재 타륜 (디자인 C)",
        description: "원목 핸들 그립이 적용되어 빈티지한 느낌을 자아내는 목조 보트 조타 키입니다."
      },
      {
        image: "assets/ship_helm.png",
        officialName: "목재 타륜 (디자인 D)",
        description: "오래된 범선이나 복고풍 인테리어 장식에 널리 쓰이는 정통 타륜 스타일 조타 장치입니다."
      }
    ]
  },
  {
    id: "paper_shreds",
    name: "선물 상자 종이 스타핑",
    officialName: "페이퍼 슈레드 / 스타핑 (Paper Shreds)",
    category: "office",
    image: "assets/paper_shreds.png",
    description: "선물 상자나 포장 상자 내부에 물건이 흔들리거나 파손되는 것을 막기 위해 가득 채워 넣는 꼬불꼬불한 종이 완충재입니다. 다양한 색상이 있어 데코용으로도 사용됩니다.",
    tags: ["선물", "상자", "종이", "완충재", "포장", "완충", "스타핑"],
    pos: { x: 24, y: 45 },
    size: 190,
    rotation: 0,
    otherDesigns: [
      {
        image: "assets/paper_shreds.png",
        officialName: "지그재그 페이퍼 스타핑 (기본형)",
        description: "선물 상자나 포장 상자 내부에 물건이 흔들리거나 파손되는 것을 막기 위해 가득 채워 넣는 꼬불꼬불한 종이 완충재입니다. 다양한 색상이 있어 데코용으로도 사용됩니다."
      },
      {
        image: "assets/paper_shreds.png",
        officialName: "페이퍼 슈레드 (디자인 B)",
        description: "선물의 미관을 높이고 물건의 흔들림을 완벽하게 방지하는 쿠션용 페이퍼 완충재입니다."
      },
      {
        image: "assets/paper_shreds.png",
        officialName: "페이퍼 슈레드 (디자인 C)",
        description: "선물 포장의 공간을 메우며 자연스러운 쿠션감을 제공하는 지그재그 종이 스타핑입니다."
      },
      {
        image: "assets/paper_shreds.png",
        officialName: "페이퍼 슈레드 (디자인 D)",
        description: "포장의 퀄리티를 한 단계 높여주는 가볍고 다채로운 색감의 종이 완충 필러입니다."
      }
    ]
  },
  {
    id: "pizza_saver",
    name: "피자 삼발이 / 피자 고정핀",
    officialName: "피자 세이버 (Pizza Saver)",
    category: "kitchen",
    image: "assets/pizza_saver.png",
    description: "피자 배달 중 상자 뚜껑이 피자의 치즈와 토핑에 눌러붙거나 가라앉는 것을 방지하기 위해 피자 한가운데에 꽂아두는 플라스틱 지지대입니다. 1983년 카멜라 비탈레(Carmela Vitale)가 발명했습니다.",
    tags: ["피자", "삼발이", "플라스틱", "지지대", "가운데", "고정"],
    pos: { x: 60, y: 40 },
    size: 160,
    rotation: -15,
    otherDesigns: [
      {
        image: "assets/pizza_saver.png",
        officialName: "3발 피자 세이버 (기본형)",
        description: "피자 배달 중 상자 뚜껑이 피자의 치즈와 토핑에 눌러붙거나 가라앉는 것을 방지하기 위해 피자 한가운데에 꽂아두는 플라스틱 지지대입니다."
      },
      {
        image: "assets/pizza_saver_alt1.png",
        officialName: "사각 4발 피자 세이버",
        description: "지지력을 더 높이기 위해 4개의 다리와 사각형 상판 구조로 설계된 피자 세이버입니다. 대형 피자나 토핑이 무거운 시카고 피자 등에 유용합니다."
      },
      {
        image: "assets/pizza_saver.png",
        officialName: "3발 피자 세이버 (디자인 C)",
        description: "피자 뚜껑과의 마찰을 고르게 분산하여 배달 중 형태가 무너지는 것을 완벽히 방지하는 핀입니다."
      },
      {
        image: "assets/pizza_saver.png",
        officialName: "3발 피자 세이버 (디자인 D)",
        description: "일반적으로 널리 쓰이는 흰색 플라스틱 재질의 삼발이 고정용 피자 세이버 구조입니다."
      }
    ]
  },
  {
    id: "thatch_roll",
    name: "짚 말이 / 미니 울타리",
    officialName: "김발 (Makisu) 또는 장식용 대나무발",
    category: "misc",
    image: "assets/thatch_roll.png",
    description: "초밥이나 김밥 등을 동그랗게 말 때 사용하는 대나무로 만든 발입니다. 혹은 요리 장식(쯔마)이나 미니 정원 조경용의 작은 짚/나무 울타리로도 쓰입니다.",
    tags: ["김밥", "말이", "대나무", "발", "울타리", "나무", "짚"],
    pos: { x: 12, y: 72 },
    size: 160,
    rotation: -30,
    otherDesigns: [
      {
        image: "assets/thatch_roll.png",
        officialName: "대나무 김발 (기본형)",
        description: "초밥이나 김밥 등을 동그랗게 말 때 사용하는 대나무로 만든 발입니다. 혹은 요리 장식(쯔마)이나 미니 정원 조경용의 작은 짚/나무 울타리로도 쓰입니다."
      },
      {
        image: "assets/thatch_roll.png",
        officialName: "대나무 김발 (디자인 B)",
        description: "얇은 대나무 살들을 실로 촘촘히 엮어 만든 김밥 조리 필수 보조 도구입니다."
      },
      {
        image: "assets/thatch_roll.png",
        officialName: "대나무 김발 (디자인 C)",
        description: "일정한 힘을 고르게 전달하여 음식의 모양을 동그랗게 잡아주는 조리 도구입니다."
      },
      {
        image: "assets/thatch_roll.png",
        officialName: "대나무 김발 (디자인 D)",
        description: "친환경 대나무 재질로 음식이 달라붙지 않고 손쉽게 마감할 수 있는 롤링 발입니다."
      }
    ]
  },
  {
    id: "sea_mine",
    name: "가시 달린 바다 폭탄",
    officialName: "기뢰 (Naval Mine / Sea Mine)",
    category: "misc",
    image: "assets/sea_mine.png",
    description: "물속에 설치하여 함선이 접근하거나 접촉했을 때 폭발하도록 만든 자동 폭발식 무기입니다. 외부에 솟아있는 돌기(촉각)에 부딪치면 내부 신관이 작동하여 터집니다.",
    tags: ["폭탄", "바다", "가시", "기뢰", "철구", "군사"],
    pos: { x: 45, y: 70 },
    size: 170,
    rotation: 0,
    otherDesigns: [
      {
        image: "assets/sea_mine.png",
        officialName: "촉각식 계류기뢰 (기본형)",
        description: "물속에 설치하여 함선이 접근하거나 접촉했을 때 폭발하도록 만든 자동 폭발식 무기입니다. 외부에 솟아있는 돌기(촉각)에 부딪치면 내부 신관이 작동하여 터집니다."
      },
      {
        image: "assets/sea_mine.png",
        officialName: "계류기뢰 (디자인 B)",
        description: "특유의 가시 달린 구형 철골 구조로 수중에 고정되어 선박을 격침시키는 고전식 기뢰입니다."
      },
      {
        image: "assets/sea_mine.png",
        officialName: "계류기뢰 (디자인 C)",
        description: "바다 속 깊이에 따라 체인을 이용해 계류해 놓는 충격 격침용 해상 무기입니다."
      },
      {
        image: "assets/sea_mine.png",
        officialName: "계류기뢰 (디자인 D)",
        description: "해군 작전 및 항만 방어에 주로 사용되는 파괴력이 강력한 자동 폭발 장치입니다."
      }
    ]
  },
  {
    id: "sushi_grass",
    name: "초밥 초록색 플라스틱 풀",
    officialName: "바란 (Baran / Sushi Grass)",
    category: "kitchen",
    image: "assets/sushi_grass.png",
    description: "초밥이나 일본식 도시락(벤토)에서 음식 간에 냄새가 섞이거나 마르는 것을 막고, 시각적인 장식을 위해 끼워 넣는 인조 플라스틱 풀 장식입니다. 원래는 엽란이라는 실제 식물 잎을 잘라 썼던 것에서 유래했습니다.",
    tags: ["초밥", "도시락", "풀", "초록색", "플라스틱", "바란", "장식"],
    pos: { x: 66, y: 72 },
    size: 200,
    rotation: -8,
    otherDesigns: [
      {
        image: "assets/sushi_grass.png",
        officialName: "플라스틱 인조 바란 (기본형)",
        description: "초밥이나 일본식 도시락(벤토)에서 음식 간에 냄새가 섞이거나 마르는 것을 막고, 시각적인 장식을 위해 끼워 넣는 인조 플라스틱 풀 장식입니다."
      },
      {
        image: "assets/sushi_grass.png",
        officialName: "인조 바란 (디자인 B)",
        description: "음식물 사이를 위생적으로 구분해주며 산뜻한 데코레이션 효과를 주는 초록색 인조 바란입니다."
      },
      {
        image: "assets/sushi_grass.png",
        officialName: "인조 바란 (디자인 C)",
        description: "초밥이나 롤 포장 등에서 간장이나 반찬의 섞임을 효과적으로 막아주는 구획 장식입니다."
      },
      {
        image: "assets/sushi_grass.png",
        officialName: "인조 바란 (디자인 D)",
        description: "일본 전통 도시락 문화에서 유래하여 음식의 고유한 향 및 수분을 보존하는 데 쓰이는 장치입니다."
      }
    ]
  },
  {
    id: "garland",
    name: "갈랜드",
    officialName: "가랜드 / 갈랜드 (Garland)",
    category: "misc",
    image: "assets/egg_carton.png",
    description: "캠핑장이나 홈파티, 크리스마스 때 밋밋한 벽이나 천장에 줄을 길게 늘어뜨려 아기자기하게 장식하는 깃발 또는 꽃줄입니다.",
    tags: ["파티", "장식", "캠핑", "줄", "깃발", "축제", "이벤트"],
    otherDesigns: [
      {
        image: "assets/egg_carton.png",
        officialName: "삼각 플래그 가랜드",
        description: "가장 흔히 볼 수 있는 삼각 깃발 모양의 패브릭 가랜드입니다. 홈파티나 캠핑장 텐트 장식용으로 널리 사용됩니다."
      },
      {
        image: "assets/egg_carton.png",
        officialName: "조명 펠트 가랜드",
        description: "펠트 재질과 귀여운 캐릭터에 LED 미니 전구를 매치하여 야간에 아늑한 인테리어 효과를 주는 가랜드입니다."
      },
      {
        image: "assets/egg_carton.png",
        officialName: "플라워 꽃줄 갈랜드",
        description: "조화나 말린 꽃을 엮어 문이나 거울 위에 장식하도록 만든 빈티지 스타일의 꽃 갈랜드입니다."
      },
      {
        image: "assets/egg_carton.png",
        officialName: "태슬 가랜드",
        description: "다채로운 색상의 실을 뭉쳐 만든 술(Tassel)을 줄줄이 엮어 실내 공간에 따뜻하고 포근한 느낌을 주는 데코 가랜드입니다."
      }
    ]
  },
  {
    id: "honey_dipper",
    name: "꿀봉 / 꿀 스푼",
    officialName: "허니 디퍼 (Honey Dipper)",
    category: "kitchen",
    image: "assets/egg_carton.png",
    description: "꿀을 흘리지 않고 깔끔하게 퍼서 빵이나 차에 얹을 수 있도록 머리 부분에 깊고 둥근 홈들이 파여 있는 나무 막대 모양의 도구입니다.",
    tags: ["꿀", "스푼", "나무막대", "시럽", "소재", "주방"],
    otherDesigns: [
      {
        image: "assets/egg_carton.png",
        officialName: "원목 클래식 허니 디퍼",
        description: "올리브나무나 단풍나무를 깎아 만든 가장 전통적인 형태의 친환경 목제 꿀 스푼입니다."
      },
      {
        image: "assets/egg_carton.png",
        officialName: "실리콘 허니 디퍼",
        description: "헤드 부분을 위생적이고 세척이 편리한 식품용 실리콘으로 제작하여 관리가 용이한 모던 디퍼입니다."
      },
      {
        image: "assets/egg_carton.png",
        officialName: "나선형 유리 꿀봉",
        description: "투명한 유리나 아크릴로 꼬아 만든 디자인으로 꿀병에 꽂아두면 아름다운 주방 데코가 되는 유리 디퍼입니다."
      },
      {
        image: "assets/egg_carton.png",
        officialName: "미니 꿀 스틱",
        description: "1인용 홍차잔이나 작은 수제 꿀병에 쏙 들어가는 앙증맞은 크기의 미니 소형 나무 디퍼입니다."
      }
    ]
  },
  {
    id: "measuring_doe",
    name: "되 / 됫박",
    officialName: "되 / 됫박 (Korean Traditional Rice Measure)",
    category: "kitchen",
    image: "assets/egg_carton.png",
    description: "과거 시장이나 가정에서 쌀, 콩 등 곡물이나 액체의 양을 잴 때 기준이 되었던 나무로 만든 사각형 또는 원기둥 모양의 전통 계량 용기입니다. 1되(약 1.8리터) 단위로 쓰였습니다.",
    tags: ["쌀", "되", "됫박", "측정", "곡식", "전통", "홉", "말"],
    otherDesigns: [
      {
        image: "assets/egg_carton.png",
        officialName: "전통 목제 사각 됫박",
        description: "나무판을 정교하게 맞추고 모서리에 쇠를 덧대어 만든 튼튼하고 예스러운 한국 정통 사각 되입니다."
      },
      {
        image: "assets/egg_carton.png",
        officialName: "현대 플라스틱 쌀되",
        description: "쌀통에 넣어두고 간편하게 1인분 분량을 계량할 수 있도록 투명 플라스틱으로 만든 계량컵 형태의 되입니다."
      },
      {
        image: "assets/egg_carton.png",
        officialName: "황동제 둥근 되",
        description: "액체나 가루를 좀 더 정확히 측정하기 위해 구리나 황동으로 원기둥처럼 제작한 전통 금속 계량컵입니다."
      },
      {
        image: "assets/egg_carton.png",
        officialName: "대형 1말 나무통",
        description: "10되에 해당하는 분량(1말, 약 18리터)을 대용량으로 측정할 수 있도록 튼튼한 나무판과 쇠 테두리로 엮은 대형 말통입니다."
      }
    ]
  },
  {
    id: "winnowing_ki",
    name: "키",
    officialName: "키 (Winnowing Fan / Ki)",
    category: "misc",
    image: "assets/egg_carton.png",
    description: "곡식을 올려놓고 위아래로 까불러서 바람을 이용해 찌꺼기나 껍질은 날려 보내고 알곡만 남기는 전통 도구입니다. 옛날에 밤에 오줌을 싼 아이에게 머리에 씌우고 이웃집에 소금을 얻으러 가게 하던 풍습으로 유명합니다.",
    tags: ["곡물", "시골", "전통", "오줌", "소금", "도구", "대나무", "까부르기"],
    otherDesigns: [
      {
        image: "assets/egg_carton.png",
        officialName: "대나무 엮음 전통 키",
        description: "대나무나 싸리나무를 촘촘히 엮어 앞이 트이고 뒤가 둥글넓적하게 만든 고전적인 농가용 키입니다."
      },
      {
        image: "assets/egg_carton.png",
        officialName: "장식용 미니 키",
        description: "벽면 인테리어나 명절 소품 등으로 활용할 수 있도록 아주 작게 축소해 만든 민속 공예용 키입니다."
      },
      {
        image: "assets/egg_carton.png",
        officialName: "합성수지 플라스틱 키",
        description: "나무 재질의 부식을 방지하고 세척이 쉽도록 가볍고 질긴 플라스틱으로 똑같이 사출 제작한 농업용 키입니다."
      },
      {
        image: "assets/egg_carton.png",
        officialName: "대형 싸리 키",
        description: "바람을 이용해 한 번에 많은 양의 곡식을 걸러낼 수 있도록 튼튼한 싸리나무를 두껍게 엮어 만든 키입니다."
      }
    ]
  },
  {
    id: "silage_bale",
    name: "곤포 사일리지 / 마시멜로",
    officialName: "곤포 사일리지 (Bale Silage)",
    category: "misc",
    image: "assets/egg_carton.png",
    description: "가을철 추수가 끝난 논 위에서 흔히 볼 수 있는, 목초나 볏짚을 둥글게 뭉쳐 흰색 비닐로 꽁꽁 싸맨 사료용 발효 덩어리입니다. 거대한 마시멜로나 롤케이크를 논에 흩뿌려놓은 듯한 귀여운 풍경을 연출합니다.",
    tags: ["논", "마시멜로", "볏짚", "흰색", "사료", "농사", "비닐", "시골"],
    otherDesigns: [
      {
        image: "assets/egg_carton.png",
        officialName: "라운드 흰색 곤포",
        description: "수분 보존과 젖산 발효를 돕기 위해 흰색 비닐 필름을 겹겹이 래핑한 가장 일반적인 원통형 볏짚 곤포입니다."
      },
      {
        image: "assets/egg_carton.png",
        officialName: "친환경 녹색 곤포",
        description: "자연 풍경과의 조화를 고려하고 재생 원료를 섞어 만든 은은한 녹색 비닐 래핑 사일리지입니다."
      },
      {
        image: "assets/egg_carton.png",
        officialName: "대형 사각 사일리지",
        description: "트랙터 운반과 창고 적재가 매우 용이하도록 네모반듯하게 압축하여 묶어둔 사각 블록형 사일리지입니다."
      },
      {
        image: "assets/egg_carton.png",
        officialName: "미닐 래핑 목초 롤",
        description: "목초지가 넓은 해외나 가축 사료용 알팔파 등을 비닐 없이 그물망(Net)으로만 둥글게 감싸 건조 보관하는 목초 롤입니다."
      }
    ]
  },
  {
    id: "fruit_tray",
    name: "과일 난좌 / 과일 포장재",
    officialName: "과일 난좌 (Fruit Tray / Cushioning Pad)",
    category: "kitchen",
    image: "assets/egg_carton.png",
    description: "사과, 배, 복숭아 등 충격에 약한 과일들이 유통 과정에서 멍들거나 손상되지 않도록 개별적으로 과일을 안착시킬 수 있는 둥근 홈이 규칙적으로 파여 있는 포장 패드입니다.",
    tags: ["과일", "포장", "받침", "사과", "배", "완충재", "보호"],
    otherDesigns: [
      {
        image: "assets/egg_carton.png",
        officialName: "핑크 스티로폼 개별 난좌",
        description: "배나 사과 개별 겉면에 그물망처럼 폭신하게 씌우는 폴리에틸렌 발포제 재질의 분홍빛 캡형 난좌입니다."
      },
      {
        image: "assets/egg_carton.png",
        officialName: "재생 펄프 다구 과일 판",
        description: "대용량 과일 박스 하단에 깔아 여러 개의 과일을 고르게 고정해주는 친환경 펄프 재질의 격자형 과일 트레이입니다."
      },
      {
        image: "assets/egg_carton.png",
        officialName: "PET 투명 플라스틱 과일 팩",
        description: "방울토마토나 블루베리, 딸기 등을 담아 신선하게 유통할 수 있는 개폐식 투명 플라스틱 포장 팩입니다."
      },
      {
        image: "assets/egg_carton.png",
        officialName: "보라색 발포 과일 트레이",
        description: "고급 과일 선물 세트의 밑바닥을 깔아 고급스러운 대조를 보여주는 탄성 있는 색상 난좌 패드입니다."
      }
    ]
  },
  {
    id: "road_bollard",
    name: "볼라드 / 길가 말뚝",
    officialName: "볼라드 (Bollard)",
    category: "misc",
    image: "assets/egg_carton.png",
    description: "자동차 진입을 억제하고 보행자의 안전을 보호하기 위해 인도와 차도 경계 구역이나 횡단보도 앞 등에 설치한 짧고 튼튼한 말뚝 형태의 시설물입니다.",
    tags: ["말뚝", "인도", "차선", "안전", "주차", "기둥", "길거리"],
    otherDesigns: [
      {
        image: "assets/egg_carton.png",
        officialName: "석제 클래식 원주형 볼라드",
        description: "대리석이나 화강암을 깎아 만들어 아주 견고하나 충돌 시 차량과 보행자 모두 큰 충격을 받는 고전적인 석제 말뚝입니다."
      },
      {
        image: "assets/egg_carton.png",
        officialName: "탄성 우레탄 안전 볼라드",
        description: "기둥 내부에 스프링이 들어있거나 고탄성 우레탄 고무로 만들어 충돌 시 휘어지며 부상을 최소화하는 주황색 안전 볼라드입니다."
      },
      {
        image: "assets/egg_carton.png",
        officialName: "스텐 볼 체인 자동 볼라드",
        description: "스테인리스 스틸 재질로 반사 띠가 둘러져 있으며 필요 시 땅 밑으로 들어가 통행을 허용하는 자동 리프팅 볼라드입니다."
      },
      {
        image: "assets/egg_carton.png",
        officialName: "예술 조형 디자인 볼라드",
        description: "도시 미관을 위해 조각품이나 벤치, 화분 등의 형태로 예쁘게 디자인하여 다용도로 쓰이는 하이브리드 볼라드입니다."
      }
    ]
  },
  {
    id: "nail_filer",
    name: "네일 파일러 / 손톱 사포",
    officialName: "네일 파일 / 에메리 보드 (Nail File / Emery Board)",
    category: "misc",
    image: "assets/egg_carton.png",
    description: "손톱이나 발톱을 깎은 후 거칠어진 절단면을 부드럽고 둥글게 갈아내거나 모양을 예쁘게 정돈하기 위해 사용하는 양면에 미세한 사포(파일)가 부착된 미용 도구입니다.",
    tags: ["손톱", "발톱", "네일", "사포", "뷰티", "정리", "미용"],
    otherDesigns: [
      {
        image: "assets/egg_carton.png",
        officialName: "종이 에메리 보드",
        description: "단단한 종이 판 양면에 세밀함이 다른 사포 가루를 입혀 만든 저렴하고 가벼운 일회용 및 일반 네일 샵용 파일입니다."
      },
      {
        image: "assets/egg_carton.png",
        officialName: "메탈 다이아몬드 네일 파일",
        description: "금속 판 겉면에 다이아몬드 연마 입자를 도포하여 영구적으로 튼튼하게 쓸 수 있고 가죽 집이 딸린 고급 파일입니다."
      },
      {
        image: "assets/egg_carton.png",
        officialName: "투명 크리스탈 글라스 파일",
        description: "유리 재질 표면에 미세한 에칭 가공을 하여 손톱 손상을 줄이고 표면 광택까지 낼 수 있는 위생적인 유리 파일입니다."
      },
      {
        image: "assets/egg_carton.png",
        officialName: "다기능 4단 버퍼 파일",
        description: "손톱 표면 정리, 굴곡 제거, 부드럽게 만들기, 광택 내기 등 4가지 면으로 나뉘어 단계별로 쓰는 두꺼운 블록 파일입니다."
      }
    ]
  },
  {
    id: "lash_tab",
    name: "래쉬 탭 / 백팩 돼지코",
    officialName: "래쉬 탭 (Lash Tab / Pig Snout)",
    category: "misc",
    image: "assets/egg_carton.png",
    description: "클래식 아웃도어 백팩이나 캐주얼 가방 겉면에 붙어 있는 구멍 두 개 뚫린 다이아몬드 가죽/플라스틱 패치입니다. 원래는 야외 활동 시 카라비너나 끈을 끼워 장비를 매다는 고정 장치입니다.",
    tags: ["가방", "백팩", "돼지코", "디자인", "가죽", "캠핑", "패치"],
    otherDesigns: [
      {
        image: "assets/egg_carton.png",
        officialName: "정통 천연가죽 돼지코 패치",
        description: "전통 등산 배낭의 멋을 살리기 위해 두꺼운 소가죽으로 튼튼하게 박음질된 다이아몬드 디자인 패치입니다."
      },
      {
        image: "assets/egg_carton.png",
        officialName: "현대 플라스틱 고무 래쉬 탭",
        description: "수분에 강하고 마찰력이 뛰어난 우레탄이나 고무 합성수지로 제작되어 카라비너 고정이 쉬운 아웃도어 전용 탭입니다."
      },
      {
        image: "assets/egg_carton.png",
        officialName: "원형 미니 가방 포인트",
        description: "여성용 가방이나 파우치 등에 장식 포인트로 사용하기 위해 크기를 대폭 줄인 부드러운 인조가죽 와펜입니다."
      },
      {
        image: "assets/egg_carton.png",
        officialName: "하네스 확장용 듀얼 탭",
        description: "전문 등산용 배낭의 바닥이나 측면에 여러 개 부착되어 텐트나 침낭을 외부로 묶어 고정할 수 있게 해주는 기능성 탭입니다."
      }
    ]
  },
  {
    id: "sushi_baran",
    name: "바란 / 도시락 플라스틱 풀",
    officialName: "바란 (Baran / Sushi Grass)",
    category: "kitchen",
    image: "assets/egg_carton.png",
    description: "도시락의 반찬이나 초밥 사이를 격리하여 위생적이고 시각적인 장식 효과를 주는 가느다란 톱니 모양의 녹색 인조 플라스틱 장식입니다.",
    tags: ["도시락", "초밥", "풀", "초록색", "플라스틱", "장식", "칸막이"],
    otherDesigns: [
      {
        image: "assets/egg_carton.png",
        officialName: "플라스틱 인조 바란",
        description: "도시락이나 반찬 팩에 널리 쓰이는 가장 대중적인 투명감 있는 초록색 인조 플라스틱 바란입니다."
      },
      {
        image: "assets/egg_carton.png",
        officialName: "엽란 나뭇잎 바란",
        description: "고급 일식집에서 실제 신선한 잎사귀를 가위로 정교하게 잘라 조리사의 솜씨를 뽐내는 천연 친환경 잎 바란입니다."
      },
      {
        image: "assets/egg_carton.png",
        officialName: "국화 문양 장식 바란",
        description: "초밥 접시나 연회용 음식을 더욱 화려하게 꾸미기 위해 꽃 모양으로 타공 가공된 특수 바란입니다."
      },
      {
        image: "assets/egg_carton.png",
        officialName: "은박 호일 바란",
        description: "수분을 단단히 막기 위해 얇은 호일 표면에 녹색 코팅을 하여 반찬이나 간장의 침범을 완벽히 차단하는 실드 바란입니다."
      }
    ]
  },
  {
    id: "shoelace_aglet",
    name: "애글릿 / 신발끈 마감",
    officialName: "애글릿 (Aglet)",
    category: "misc",
    image: "assets/egg_carton.png",
    description: "신발끈이나 후드 티셔츠 조임끈의 양쪽 끝부분을 감싸고 있는 플라스틱 또는 금속 재질의 얇은 튜브 형태 마감재입니다. 끈 끝이 풀어지는 것을 방지하고 구멍에 끈을 쉽게 끼울 수 있도록 돕습니다.",
    tags: ["신발끈", "끝", "마감", "튜브", "플라스틱", "쇠붙이", "옷끈"],
    otherDesigns: [
      {
        image: "assets/egg_carton.png",
        officialName: "클래식 플라스틱 열수축 애글릿",
        description: "끈 끝부분에 플라스틱 필름을 감싼 후 열을 가해 딱딱하게 밀착시킨 가장 흔한 형태의 투명/검은색 애글릿입니다."
      },
      {
        image: "assets/egg_carton.png",
        officialName: "빈티지 황동 금속 애글릿",
        description: "스트리트 웨어나 포멀한 운동화의 퀄리티를 한 단계 높이기 위해 금속 나사식이나 압착식으로 마감한 묵직한 구리빛 애글릿입니다."
      },
      {
        image: "assets/egg_carton.png",
        officialName: "실리콘 침지 팁 마감",
        description: "애글릿 대신 특수 액상 실리콘에 신발끈 끝을 담근 뒤 건조시켜 유연하면서도 절대 깨지지 않게 만든 현대식 마감입니다."
      },
      {
        image: "assets/egg_carton.png",
        officialName: "브랜드 로고 음각 컬러 애글릿",
        description: "알루미늄 팁 표면에 비비드한 컬러 도색과 브랜드 로고를 레이저 각인하여 디자인 포인트를 부각시킨 스페셜 애글릿입니다."
      }
    ]
  },
  {
    id: "okchundang",
    name: "옥춘당 / 제사 사탕",
    officialName: "옥춘당 (Okchundang / Korean Ceremonial Candy)",
    category: "misc",
    image: "assets/egg_carton.png",
    description: "한국의 전통 제사상이나 잔칫상에 괴어 올리는, 흰 바탕에 알록달록한 빨간색, 초록색 동심원 무늬가 화려하게 칠해진 둥글넓적한 모양의 전통 쌀가루 설탕 사탕입니다.",
    tags: ["제사", "제사상", "사탕", "알사탕", "전통", "무지개", "동그라미"],
    otherDesigns: [
      {
        image: "assets/egg_carton.png",
        officialName: "제사용 오색 옥춘당",
        description: "멥쌀가루와 설탕을 섞어 반죽한 후 겉에 식용 색소로 띠를 두르고 탑처럼 높이 쌓을 수 있게 동글넓적하게 굳힌 정통 옥춘당입니다."
      },
      {
        image: "assets/egg_carton.png",
        officialName: "잔치용 대형 화분 옥춘",
        description: "혼례나 환갑잔치 등 경사스러운 날의 큰상 차림을 장식하기 위해 지름이 20cm가 넘도록 아주 크게 제작된 잔치용 옥춘입니다."
      },
      {
        image: "assets/egg_carton.png",
        officialName: "현대 미니 간식 옥춘",
        description: "현대인들이 간식으로 한입에 먹기 편하도록 작은 크기로 잘게 잘라 유리병에 담아 파는 뉴트로 스타일 캔디입니다."
      },
      {
        image: "assets/egg_carton.png",
        officialName: "개별 비닐 포장 옥춘",
        description: "보관 중 수분을 흡수해 끈적해지거나 녹아내리지 않도록 플라스틱 필름으로 위생 포장한 보관용 옥춘당입니다."
      }
    ]
  },
  {
    id: "party_confetti",
    name: "컨페티 / 꽃가루 종이 조각",
    officialName: "컨페티 (Confetti)",
    category: "office",
    image: "assets/egg_carton.png",
    description: "축제나 결혼식, 생일 파티 등에서 공중에 뿌려 축하 분위기를 극대화하거나 다이어리를 꾸밀 때 사용하는 오색찬란하고 아주 작은 종이 또는 필름 조각들입니다.",
    tags: ["파티", "종이", "조각", "축제", "뿌리는거", "장식", "다꾸"],
    otherDesigns: [
      {
        image: "assets/egg_carton.png",
        officialName: "멀티 컬러 원형 컨페티",
        description: "가장 널리 쓰이는 가벼운 습식 종이로 만든 형형색색의 둥근 모양 꽃가루 조각입니다. 천천히 낙하합니다."
      },
      {
        image: "assets/egg_carton.png",
        officialName: "메탈릭 스팽글 컨페티",
        description: "빛을 받으면 화려하게 반사되어 무대나 클럽 연출에 탁월한 은박, 금박 필름 재질의 반짝이 컨페티입니다."
      },
      {
        image: "assets/egg_carton.png",
        officialName: "다이어리 데코용 스티커 컨페티",
        description: "다이어리 꾸미기(다꾸)용으로 개발되어 하나씩 떼어 수첩에 붙일 수 있는 길고 얇은 리본형 필름 스티커입니다."
      },
      {
        image: "assets/egg_carton.png",
        officialName: "에어 캐논 방출용 컨페티",
        description: "축제 엔딩 때 대형 송풍기로 하늘 높이 수천 장씩 날리기 위해 정전기 방지 처리가 된 대용량 매트 컨페티입니다."
      }
    ]
  },
  {
    id: "bookmark_ribbon",
    name: "가름끈 / 책갈피 끈",
    officialName: "북마크 가름끈 / 서표 (Bookmark Ribbon)",
    category: "office",
    image: "assets/egg_carton.png",
    description: "책을 읽다 멈춘 부분이나 중요한 페이지를 나중에 쉽게 찾을 수 있도록 책 제본용 등 부분에 길게 연결하여 책장 사이에 끼워두는 얇은 리본 형태의 천 끈입니다.",
    tags: ["책", "끈", "북마크", "독서", "리본", "표시", "책갈피"],
    otherDesigns: [
      {
        image: "assets/egg_carton.png",
        officialName: "클래식 새틴 가름끈",
        description: "다이어리나 양장본 도서에 주로 사용되는 부드럽고 은은한 광택을 내는 실크나 나일론 재질의 단색 리본끈입니다."
      },
      {
        image: "assets/egg_carton.png",
        officialName: "고급 가죽 레이스 가름끈",
        description: "두꺼운 성경책이나 고급 하드커버 노트에 품격을 더하기 위해 얇게 켠 갈색 천연 가죽 소재의 끈입니다."
      },
      {
        image: "assets/egg_carton.png",
        officialName: "멀티 듀얼 가름끈",
        description: "참고 문헌이 많은 전공 서적이나 플래너를 위해 색상이 다른 2~3개의 리본 줄을 하나로 묶어 결합해 둔 가름끈입니다."
      },
      {
        image: "assets/egg_carton.png",
        officialName: "태슬 장식 펜던트 가름끈",
        description: "끈 끝부분에 책 밖으로 늘어지도록 주석 펜던트나 실 태슬 장식을 달아 미적 가치를 높인 프리미엄 북마크 끈입니다."
      }
    ]
  },
  {
    id: "wrapping_cutter",
    name: "실링칼 / 배달 랩칼",
    officialName: "랩 커터 / 실링칼 (Wrapping Cutter / Mini Plastic Knife)",
    category: "kitchen",
    image: "assets/egg_carton.png",
    description: "배달 떡볶이, 족발 등 비닐 팩으로 밀봉 포장된 플라스틱 용기를 뜯을 때 비닐막을 슥 그어 쉽게 뜯을 수 있도록 동봉해 주는 아주 작고 귀여운 새 모양 또는 갈고리 모양의 미니 플라스틱 커터입니다.",
    tags: ["배달", "비닐", "칼", "플라스틱", "포장", "배달음식", "커터"],
    otherDesigns: [
      {
        image: "assets/egg_carton.png",
        officialName: "갈고리 새 부리형 랩칼",
        description: "가장 많이 동봉되는 형태의 플라스틱 사출 칼로, 안쪽에 날카로운 돌기가 숨어 있어 안전하게 긁어 비닐을 자릅니다."
      },
      {
        image: "assets/egg_carton.png",
        officialName: "지퍼형 롤러 랩 커터",
        description: "가정에서 슬라이딩식 크린랩을 자를 때 팩 입구 레일 위에 얹어 좌우로 밀어서 랩을 깔끔히 자르는 칼날입니다."
      },
      {
        image: "assets/egg_carton.png",
        officialName: "열선식 무선 미니 실러",
        description: "반대로 먹다 남은 과자 봉지나 비닐 입구에 대고 당기면 열선으로 녹여 밀봉해 주는 건전지식 가전 기기입니다."
      },
      {
        image: "assets/egg_carton.png",
        officialName: "자석 내장 냉장고 부착 랩칼",
        description: "냉장고 벽면에 붙여두고 포장 택배나 비닐을 뜯을 때 즉시 떼어서 쓸 수 있는 자석형 미니 오프너입니다."
      }
    ]
  },
  {
    id: "maracas",
    name: "마라카스",
    officialName: "마라카스 (Maracas)",
    category: "misc",
    image: "assets/egg_carton.png",
    description: "동그랗고 빈 머리 부분 안에 작은 모래, 씨앗, 조약돌 등을 넣어 손잡이를 잡고 흔들면 '샥샥' 청량하고 경쾌한 소리가 나는 라틴아메리카의 대표적인 타악기입니다.",
    tags: ["악기", "소리", "흔들기", "타악기", "리듬", "음악", "교육용"],
    otherDesigns: [
      {
        image: "assets/egg_carton.png",
        officialName: "천연 코코넛 마라카스",
        description: "말린 코코넛 열껍질을 깎아 손잡이를 달고 표면에 하와이안 조각을 새긴 클래식 라틴 타악기 마라카스입니다."
      },
      {
        image: "assets/egg_carton.png",
        officialName: "컬러풀 나무 유아용 마라카스",
        description: "어린이집 리듬 교육용으로 주로 쓰이는, 알록달록 무늬가 그려진 매끄러운 단풍나무 마라카스입니다."
      },
      {
        image: "assets/egg_carton.png",
        officialName: "모던 플라스틱 마라카스",
        description: "오케스트라나 스튜디오 녹음 시 균일하고 카랑카랑한 하이 피치 톤을 얻기 위해 인공 볼들로 채운 수지 마라카스입니다."
      },
      {
        image: "assets/egg_carton.png",
        officialName: "계란형 에그 셰이커",
        description: "손잡이 없이 진짜 달걀 크기로 만들어 손아귀에 쏙 쥐고 미세한 리듬을 쪼갤 수 있게 만든 휴대용 달걀 흔들개입니다."
      }
    ]
  },
  {
    id: "door_guard",
    name: "도어가드 / 차량 문콕 스펀지",
    officialName: "자동차 도어 가드 (Car Door Guard / Edge Protector)",
    category: "misc",
    image: "assets/egg_carton.png",
    description: "새 차를 사면 자동차 문 모서리에 붙어 있는 직사각형 모양의 파란색 스펀지입니다. 좁은 주차 공간에서 문을 열 때 옆 차를 치는 '문콕' 상처나 차량 페인트 벗겨짐을 방지하는 아주 고마운 보호대입니다.",
    tags: ["자동차", "문콕", "스펀지", "파란색", "방지", "쿠션", "새차"],
    otherDesigns: [
      {
        image: "assets/egg_carton.png",
        officialName: "신차 출고용 블루 스펀지",
        description: "새 차를 인도받을 때 임시로 차량 도어 모서리에 양면테이프로 붙어 있는 대중적인 직사각형 하늘색 스펀지입니다."
      },
      {
        image: "assets/egg_carton.png",
        officialName: "슬림 카본 도어 몰딩",
        description: "스펀지 대신 도어 가장자리 라인 전체를 투명하거나 카본 필름 무늬의 고무 몰딩으로 감싸 외관을 해치지 않는 슬림 패드입니다."
      },
      {
        image: "assets/egg_carton.png",
        officialName: "캐릭터 실리콘 날개 가드",
        description: "귀여운 날개나 동물 발바닥 모양으로 두껍게 입체 제작되어 시각적 귀여움과 뛰어난 충격 방지 효과를 주는 도어 가드입니다."
      },
      {
        image: "assets/egg_carton.png",
        officialName: "자석 탈부착형 대형 가드",
        description: "주차 시에만 자석식으로 옆문 전체 라인을 길게 덮고 내릴 때는 떼서 보관하는 외부 충돌 방지용 롱 패드입니다."
      }
    ]
  },
  {
    id: "molly_guard",
    name: "몰리 가드 / 비상 스위치 덮개",
    officialName: "몰리 가드 / 오작동 방지 덮개 (Molly Guard)",
    category: "office",
    image: "assets/egg_carton.png",
    description: "중요한 컴퓨터 서버실 전원이나 미사일 발사, 기계 비상 정지 스위치 등을 실수로 누르지 못하도록 투명한 플라스틱이나 금속으로 덮어둔 위로 열어젖히는 구조의 보호 덮개입니다. 장난꾸러기 꼬마 '몰리'가 자꾸 서버 전원을 내려서 발명되었습니다.",
    tags: ["스위치", "덮개", "방지", "보호", "안전", "서버실", "비상용"],
    otherDesigns: [
      {
        image: "assets/egg_carton.png",
        officialName: "투명 플라스틱 플립 덮개",
        description: "벽면 조명 스위치나 소방벨 버튼 겉면을 덮는, 손가락으로 가볍게 위로 플립해 젖히는 아크릴 재질의 기본 몰리 가드입니다."
      },
      {
        image: "assets/egg_carton.png",
        officialName: "산업용 스틸 케이지 가드",
        description: "중장비나 생산 설비 오동작을 막기 위해 두꺼운 강철 철조망이나 파이프로 물리 버튼 주변을 감싼 터프한 방패 가드입니다."
      },
      {
        image: "assets/egg_carton.png",
        officialName: "미사일 키 트위스트 커버",
        description: "중요 키를 꽂아 180도 돌린 후 보호 덮개를 열고 빨간 발사 스위치를 올리게 설계된 정교한 다단 잠금 가드입니다."
      },
      {
        image: "assets/egg_carton.png",
        officialName: "터치스크린 디지털 락",
        description: "화면의 가상 버튼을 잘못 터치하는 것을 예방하기 위해 화면 위에 슬라이드 잠금쇠 형태로 올려진 UI 디자인 영역입니다."
      }
    ]
  },
  {
    id: "ad_balloon",
    name: "애드벌룬 / 광고 풍선",
    officialName: "애드벌룬 (Ad Balloon / Advertising Balloon)",
    category: "misc",
    image: "assets/egg_carton.png",
    description: "아파트 모델하우스나 백화점 오픈 행사 시 하늘에 둥실둥실 띄워 멀리서도 잘 보이게 하는 대형 광고용 풍선입니다. 하단에 매단 세로 현수막에 축하 문구나 전화번호를 인쇄해 둡니다.",
    tags: ["풍선", "하늘", "광고", "하늘에뜬거", "대형", "오픈", "행사"],
    otherDesigns: [
      {
        image: "assets/egg_carton.png",
        officialName: "구형 오렌지 광고 풍선",
        description: "가장 일반적인 원형 고무 튜브에 헬륨가스를 채워 높은 하늘에 밧줄로 고정해 공중에 계류시키는 애드벌룬입니다."
      },
      {
        image: "assets/egg_carton.png",
        officialName: "비행선 모양 조종 풍선",
        description: "바람의 저항을 이겨내고 광고 면적을 넓히기 위해 가로가 긴 유선형 럭비공 모양으로 디자인된 비행선 애드벌룬입니다."
      },
      {
        image: "assets/egg_carton.png",
        officialName: "지상 송풍식 댄싱 가이",
        description: "가스 주입 없이 지상 모터 바람으로 흐느적흐느적 춤추며 골목 주유소나 상가 앞 시선을 끄는 바람 풍선 인형입니다."
      },
      {
        image: "assets/egg_carton.png",
        officialName: "LED 조명 투명 야간 벌룬",
        description: "야간 축제에서 풍선 내부에 고휘도 LED 램프를 켜서 밤하늘에 은은한 조명 효과를 주는 미적 야간 애드벌룬입니다."
      }
    ]
  },
  {
    id: "pharaoh_nemes",
    name: "네메스 / 파라오 머리수건",
    officialName: "네메스 (Nemes / Headdress)",
    category: "misc",
    image: "assets/egg_carton.png",
    description: "고대 이집트 파라오(왕)들이 왕권과 태양신을 상징하기 위해 머리에 썼던 줄무늬가 있는 천 재질의 두건입니다. 투탕카멘 황금가면의 옆머리 부분으로 늘어진 파란색과 금색 줄무늬가 바로 이것입니다.",
    tags: ["이집트", "파라오", "두건", "피라미드", "머리장식", "왕관", "줄무늬"],
    otherDesigns: [
      {
        image: "assets/egg_carton.png",
        officialName: "투탕카멘 금청색 네메스",
        description: "순금과 짙은 푸른색 라피스 라줄리 원석이 교대로 교차되어 이마에 코브라와 독수리 장식이 달린 호사스러운 전통 네메스입니다."
      },
      {
        image: "assets/egg_carton.png",
        officialName: "린넨 백색 일반 네메스",
        description: "의식용이 아닌 실생활에서 태양볕과 사막 모래를 차단하기 위해 일반 세마포(린넨) 천으로 가볍게 제작해 묶은 두건입니다."
      },
      {
        image: "assets/egg_carton.png",
        officialName: "파라오 벽화용 와이드 두건",
        description: "옆으로 귀 부분이 날개처럼 더 넓게 뻗어 나가 상반신 실루엣을 돋보이게 만든 고대 이집트 중왕기 시대 벽화형 네메스입니다."
      },
      {
        image: "assets/egg_carton.png",
        officialName: "코스프레용 패브릭 모자",
        description: "이집트 테마 파티나 영화 소품으로 간편하게 머리에 얹어 뒤를 벨크로로 고정할 수 있게 만든 현대 모방용 네메스입니다."
      }
    ]
  },
  {
    id: "winter_tree_wrap",
    name: "잠복소 / 나무 짚 옷",
    officialName: "잠복소 (Winter Tree Shelter / Banding)",
    category: "misc",
    image: "assets/egg_carton.png",
    description: "가을철 가로수 줄기 아래쪽에 허리띠처럼 둘러 묶어두는 짚으로 만든 거적입니다. 겨울에 추위를 피해 벌레들이 이 짚 밑으로 기어들어 가 숨게 한 뒤, 이듬해 봄에 짚을 떼어 불태움으로써 해충을 방제하는 친환경 농업 도구입니다.",
    tags: ["나무", "가로수", "짚", "겨울", "해충", "벌레", "시골", "보호"],
    otherDesigns: [
      {
        image: "assets/egg_carton.png",
        officialName: "볏짚 엮음 새끼줄 잠복소",
        description: "벼를 탈곡하고 남은 지푸라기를 촘촘하게 발처럼 엮어서 노끈이나 새끼줄로 단단히 감아 두는 전통 잠복소입니다."
      },
      {
        image: "assets/egg_carton.png",
        officialName: "현대 가로수 황토 부직포",
        description: "볏짚의 부식과 해충 방제 실효성 논란을 보완하기 위해 통기성과 보온성이 높은 부직포 원단으로 깔끔하게 감싼 부직포 밴딩입니다."
      },
      {
        image: "assets/egg_carton.png",
        officialName: "해충 유인 화학 코팅 밴드",
        description: "벌레들이 싫어하는 살충 물질을 내부에 도포하여 숨어 들어온 즉시 살충되도록 만든 특수 약제 함침 잠복 밴드입니다."
      },
      {
        image: "assets/egg_carton.png",
        officialName: "그래피티 니팅 뜨개옷",
        description: "겨울철 도시 미관을 따뜻하게 꾸미기 위해 시민들이 털실로 알록달록 무늬를 짜서 나무에 입혀준 뜨개 옷입니다."
      }
    ]
  },
  {
    id: "coffee_sip_stick",
    name: "십 스틱 / 구멍 두개 빨대",
    officialName: "십 스틱 / 커피 스틱 (Sip Stick / Coffee Stirrer)",
    category: "kitchen",
    image: "assets/egg_carton.png",
    description: "카페에서 테이크아웃 뜨거운 커피를 주문하면 꽂아 주는, 두 개의 아주 좁은 통로가 나란히 붙어 있는 얇고 납작한 갈색 플라스틱 빨대 겸용 젓개입니다. 구멍이 극히 좁아 뜨거운 음료가 한 번에 훅 들어와 혀를 데는 것을 막아줍니다.",
    tags: ["커피", "스틱", "빨대", "카페", "두구멍", "뜨거운커피", "젓개"],
    otherDesigns: [
      {
        image: "assets/egg_carton.png",
        officialName: "갈색 플라스틱 2구 십스틱",
        description: "구멍 두 개가 안경알처럼 붙어 있는 가장 표준적인 갈색 폴리스티렌 재질의 플라스틱 십 스틱입니다."
      },
      {
        image: "assets/egg_carton.png",
        officialName: "납작 1구 나무 슬림 젓개",
        description: "구멍이 뚫려 있지 않아 음료를 빨아 마실 수는 없고, 오직 설탕이나 시럽을 젓는 용도로만 쓰는 납작하고 얇은 자작나무 스틱입니다."
      },
      {
        image: "assets/egg_carton.png",
        officialName: "친환경 종이 슬라이스 스틱",
        description: "종이를 단단히 압착하여 액체에 오래 담가둬도 풀리지 않게 만든 친환경 종이 젓개입니다."
      },
      {
        image: "assets/egg_carton.png",
        officialName: "실리콘 다회용 에코 빨대",
        description: "개인 텀블러에 꽂아 다닐 수 있도록 얇은 빨대와 끝 머리에 세척 솔이 포함된 식품용 실리콘 다회용 스틱입니다."
      }
    ]
  },
  {
    id: "flagpole_finial",
    name: "국기봉 / 깃대 머리",
    officialName: "국기봉 무궁화 봉오리 / 깃대 장식 (Flagpole Finial)",
    category: "misc",
    image: "assets/egg_carton.png",
    description: "태극기나 단체 기를 매다는 깃대 끝부분에 달린 금빛 꽃봉오리 장식입니다. 대한민국의 경우 나라꽃인 무궁화의 핀 꽃봉오리 모양으로 하단에 꽃받침이 뚜렷하게 도안되어 있습니다.",
    tags: ["태극기", "깃대", "꼭대기", "무궁화", "금색", "봉오리", "국기"],
    otherDesigns: [
      {
        image: "assets/egg_carton.png",
        officialName: "무궁화 황동색 국기봉",
        description: "하단에 5片의 뚜렷한 꽃받침이 있고 겉면을 금색이나 황동색 전기도금으로 광택을 낸 정통 대한민국 규격 국기봉입니다."
      },
      {
        image: "assets/egg_carton.png",
        officialName: "미 군용 창끝 국기 장식",
        description: "미국 국기나 군기 꼭대기에 꽂는, 승리와 수호를 뜻하는 날카로운 금속 화살촉이나 창끝 모양의 스피어(Spear) 피니얼입니다."
      },
      {
        image: "assets/egg_carton.png",
        officialName: "영국식 왕관 깃대 헤드",
        description: "영국 연방 국가나 왕실 관련 깃발 끝에 매다는 황동 조각으로 된 로열 크라운 모양의 깃대 크라운 장식입니다."
      },
      {
        image: "assets/egg_carton.png",
        officialName: "행사용 원형 볼 피니얼",
        description: "야외 깃대에 국기가 바람에 엉키는 것을 막기 위해 회전 링 구조를 장착한 금색 알루미늄 구형(Ball) 헤드 장식입니다."
      }
    ]
  },
  {
    id: "traffic_cone",
    name: "트래픽 콘 / 라바콘",
    officialName: "트래픽 콘 / 도로 통제 고깔 (Traffic Cone / Road Cone)",
    category: "misc",
    image: "assets/egg_carton.png",
    description: "도로 공사 구간이나 주차 차단 구역, 사고 현장 등에서 차량 통행을 유도하고 보행자의 접근을 막기 위해 길에 세워두는 주황색 원뿔 모양의 고무 고깔입니다. 만화 '라바' 캐릭터처럼 생겨 '라바콘'으로도 널리 불립니다.",
    tags: ["도로", "라바콘", "원뿔", "안전", "공사", "주차", "차선", "오렌지"],
    otherDesigns: [
      {
        image: "assets/egg_carton.png",
        officialName: "주황색 탄성 고무 라바콘",
        description: "반사 띠 시트지가 둘러져 있어 야간에도 라이트를 받으면 밝게 빛나며 밟혀도 원래대로 복원되는 표준 트래픽 콘입니다."
      },
      {
        image: "assets/egg_carton.png",
        officialName: "블랙 베이스 중량 라바콘",
        description: "강풍이나 대형차 바람에 넘어지지 않도록 하단 받침을 무거운 재생 고무 블랙 플레이트로 묵직하게 보강한 콘입니다."
      },
      {
        image: "assets/egg_carton.png",
        officialName: "접이식 주머니 리플렉터 콘",
        description: "비상시 트렁크에 콤팩트하게 보관하다 위로 당겨 올리면 야간 LED 조명이 켜지며 자립하는 주름식 자바라 콘입니다."
      },
      {
        image: "assets/egg_carton.png",
        officialName: "링 탑 홀더 가이드 콘",
        description: "고깔 상단 구멍에 차단봉(Bar)이나 쇠사슬을 걸어서 여러 콘을 일렬로 넓게 연결할 수 있도록 고리가 부착된 연결용 콘입니다."
      }
    ]
  }
];

// App State
let activePage = 1;
let currentCategory = "all";
let isSearching = false;
let currentBgItem = null;

// DOM Elements
const binderPage = document.getElementById('binder-page');
const page1 = document.getElementById('page-1');
const page2 = document.getElementById('page-2');
const page3 = document.getElementById('page-3');
const page4 = document.getElementById('page-4');
const itemsContainerP1 = document.getElementById('items-container-p1');
const itemsContainerP2 = document.getElementById('items-container-p2');
const itemsContainerP3 = document.getElementById('items-container-p3');
const itemsContainerP4 = document.getElementById('items-container-p4');
const binderRingsContainer = document.getElementById('binder-rings');

const searchInput = document.getElementById('search-input');
const searchClearBtn = document.getElementById('search-clear-btn');
const searchDropdown = document.getElementById('search-dropdown');

const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

// Modals
const detailModal = document.getElementById('detail-modal');
const modalCloseBtn = document.getElementById('modal-close-btn');
const modalImg = document.getElementById('modal-item-img');
const modalCommonName = document.getElementById('modal-common-name');
const modalOfficialName = document.getElementById('modal-official-name');
const modalDescription = document.getElementById('modal-description');
const modalTagsContainer = document.getElementById('modal-tags');

const uploadBtn = document.getElementById('upload-btn');
const uploadModal = document.getElementById('upload-modal');
const uploadCloseBtn = document.getElementById('upload-close-btn');
const uploadForm = document.getElementById('upload-form');
const uploadDropzone = document.getElementById('upload-dropzone');

const logoButton = document.getElementById('logo-button');
const suggestBtn = document.getElementById('suggest-btn');

const infoBtn = document.getElementById('info-btn');
const infoModal = document.getElementById('info-modal');
const infoCloseBtn = document.getElementById('info-close-btn');

// Quiz Elements
const pageQuiz = document.getElementById('page-quiz');
const quizStartScreen = document.getElementById('quiz-start-screen');
const quizPlayScreen = document.getElementById('quiz-play-screen');
const quizResultScreen = document.getElementById('quiz-result-screen');
const quizStartBtn = document.getElementById('quiz-start-btn');
const quizNextBtn = document.getElementById('quiz-next-btn');
const quizRestartBtn = document.getElementById('quiz-restart-btn');
const quizBackBtn = document.getElementById('quiz-back-btn');
const quizProgressFill = document.getElementById('quiz-progress-fill');
const quizQuestionNumber = document.getElementById('quiz-question-number');
const quizScoreBadge = document.getElementById('quiz-score-badge');
const quizQuestionImg = document.getElementById('quiz-question-img');
const quizOptionsContainer = document.getElementById('quiz-options');
const quizFeedbackOverlay = document.getElementById('quiz-feedback');
const quizFeedbackTitle = document.getElementById('quiz-feedback-title');
const quizFeedbackDetail = document.getElementById('quiz-feedback-detail');

// Initialize Application
function init() {
  assignPagesToItems();
  layoutItemsGrid();
  generateRings();
  renderItems();
  setupEventListeners();
}

// Dynamically assign items to pages based on categories (max 10 per page)
function assignPagesToItems() {
  const categories = {
    kitchen: [],
    office: [],
    misc: []
  };
  
  items.forEach(item => {
    if (categories[item.category]) {
      categories[item.category].push(item);
    } else {
      categories.misc.push(item);
    }
  });
  
  // Kitchen starts at page 1
  categories.kitchen.forEach((item, index) => {
    item.page = 1 + Math.floor(index / 10);
  });
  const kitchenPages = Math.ceil(categories.kitchen.length / 10) || 1;
  
  // Office starts after kitchen pages
  const officeStart = 1 + kitchenPages;
  categories.office.forEach((item, index) => {
    item.page = officeStart + Math.floor(index / 10);
  });
  const officePages = Math.ceil(categories.office.length / 10) || 1;
  
  // Misc starts after office pages
  const miscStart = officeStart + officePages;
  categories.misc.forEach((item, index) => {
    item.page = miscStart + Math.floor(index / 10);
  });
}

// Position items on pages cleanly inside a grid to prevent initial overlaps
function layoutItemsGrid() {
  const pages = {};
  items.forEach(item => {
    const p = item.page || 1;
    if (!pages[p]) pages[p] = [];
    pages[p].push(item);
  });
  
  // Clean grid layout points (max 10 points)
  const grid = [
    { x: 10, y: 12 }, { x: 34, y: 10 }, { x: 58, y: 14 }, { x: 78, y: 12 },
    { x: 12, y: 42 }, { x: 36, y: 40 }, { x: 58, y: 44 }, { x: 76, y: 40 },
    { x: 15, y: 72 }, { x: 42, y: 70 }, { x: 68, y: 74 }
  ];
  
  Object.keys(pages).forEach(p => {
    pages[p].forEach((item, index) => {
      const pos = grid[index % grid.length];
      // Keep classic layout positions for original items on Page 1
      if (item.page === 1 && ["bread_tie", "egg_carton", "pizza_saver", "sushi_grass"].includes(item.id)) {
        // Keep original predefined position
      } else {
        item.pos = { x: pos.x, y: pos.y };
        item.rotation = (index % 2 === 0 ? 1 : -1) * (8 + (index * 3) % 15);
        item.size = 120;
      }
    });
  });
}

// Generate Binder Rings Dynamically
function generateRings() {
  const ringCount = 15;
  binderRingsContainer.innerHTML = '';
  for (let i = 0; i < ringCount; i++) {
    const ring = document.createElement('div');
    ring.className = 'binder-ring';
    binderRingsContainer.appendChild(ring);
  }
}

// Render Items on Pages
function renderItems() {
  const containers = {
    1: document.getElementById('items-container-p1'),
    2: document.getElementById('items-container-p2'),
    3: document.getElementById('items-container-p3'),
    4: document.getElementById('items-container-p4')
  };
  
  // Clear all containers
  Object.values(containers).forEach(container => {
    if (container) container.innerHTML = '';
  });
  
  items.forEach(item => {
    const itemEl = document.createElement('div');
    itemEl.className = 'interactive-item';
    itemEl.id = `item-${item.id}`;
    
    // Style settings for absolute positioning and rotation
    itemEl.style.left = `${item.pos.x}%`;
    itemEl.style.top = `${item.pos.y}%`;
    itemEl.style.width = `${item.size}px`;
    itemEl.style.transform = `rotate(${item.rotation}deg)`;
    
    itemEl.innerHTML = `
      <img src="${item.image}" alt="${item.name}" class="item-img" draggable="false">
    `;
    
    // Enable dragging and handle click
    makeItemDraggable(itemEl, item);
    
    const targetPage = item.page || 1;
    const targetContainer = containers[targetPage];
    if (targetContainer) {
      targetContainer.appendChild(itemEl);
    }
  });
}

// Set Background Image Function
function setBackgroundImage(item) {
  currentBgItem = item;
  const bgLayer = document.getElementById('bg-image-layer');
  if (!bgLayer) return;
  bgLayer.style.backgroundImage = `url('${item.image}')`;
  bgLayer.classList.add('active');
}

// Make Items Draggable with Cursor and Save Positions
function makeItemDraggable(itemEl, item) {
  let startX, startY;
  let startLeft, startTop;
  let hasMoved = false;
  let isDragging = false;
  
  itemEl.addEventListener('mousedown', (e) => {
    // Left click only
    if (e.button !== 0) return;
    
    // Set background image immediately on mousedown (drag or click)
    setBackgroundImage(item);
    
    e.preventDefault();
    isDragging = true;
    hasMoved = false;
    
    startX = e.clientX;
    startY = e.clientY;
    
    const parentRect = itemEl.parentElement.getBoundingClientRect();
    
    // Convert absolute pixels to container percentage using inline styles to avoid hover transform offset jumps
    startLeft = parseFloat(itemEl.style.left) || item.pos.x;
    startTop = parseFloat(itemEl.style.top) || item.pos.y;
    
    itemEl.classList.add('dragging');
    
    function onMouseMove(e) {
      if (!isDragging) return;
      
      const dx = e.clientX - startX;
      const dy = e.clientY - startY;
      
      if (Math.abs(dx) > 5 || Math.abs(dy) > 5) {
        hasMoved = true;
      }
      
      const deltaLeft = (dx / parentRect.width) * 100;
      const deltaTop = (dy / parentRect.height) * 100;
      
      let newLeft = startLeft + deltaLeft;
      let newTop = startTop + deltaTop;
      
      // Constrain within binder boundaries
      newLeft = Math.max(2, Math.min(84, newLeft));
      newTop = Math.max(2, Math.min(84, newTop));
      
      itemEl.style.left = `${newLeft}%`;
      itemEl.style.top = `${newTop}%`;
      
      // Persist coordinate updates in database
      item.pos.x = newLeft;
      item.pos.y = newTop;
    }
    
    function onMouseUp(e) {
      isDragging = false;
      itemEl.classList.remove('dragging');
      
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
      
      if (!hasMoved) {
        // Safe click: open modal
        openDetailModal(item);
      }
    }
    
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });
}

// Synchronize Left Category Tabs based on Active Page
function updateActiveTabForPage(page) {
  let category = 'kitchen';
  if (page === 1) category = 'kitchen';
  else if (page === 2) category = 'office';
  else if (page === 3 || page === 4) category = 'misc';
  
  const tabButtons = document.querySelectorAll('.tab-item');
  tabButtons.forEach(btn => {
    const btnCat = btn.getAttribute('data-category');
    // Don't auto-activate 'all' or 'quiz' tabs based on page nav
    if (btnCat === 'all' || btnCat === 'quiz') return;
    if (btnCat === category) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
  
  currentCategory = category;
}

// Set Page Visibility Helper
function setPagesVisibility(activePageNum) {
  const totalPages = 4;
  if (activePageNum === 'quiz') {
    for (let i = 1; i <= totalPages; i++) {
      const pEl = document.getElementById(`page-${i}`);
      if (pEl) pEl.classList.add('hidden');
    }
    pageQuiz.classList.remove('hidden');
  } else {
    pageQuiz.classList.add('hidden');
    for (let i = 1; i <= totalPages; i++) {
      const pEl = document.getElementById(`page-${i}`);
      if (pEl) {
        if (i === activePageNum) {
          pEl.classList.remove('hidden');
        } else {
          pEl.classList.add('hidden');
        }
      }
    }
  }
}

// Setup Event Listeners
function setupEventListeners() {
  // Search Input Events
  searchInput.addEventListener('input', handleSearch);
  searchClearBtn.addEventListener('click', clearSearch);
  
  // Close search dropdown on click outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('#search-bar-container')) {
      searchDropdown.classList.add('hidden');
    }
  });

  // Modal Close Events
  modalCloseBtn.addEventListener('click', closeDetailModal);
  detailModal.addEventListener('click', (e) => {
    if (e.target === detailModal) closeDetailModal();
  });
  
  // Upload Modal Events
  uploadBtn.addEventListener('click', openUploadModal);
  uploadCloseBtn.addEventListener('click', closeUploadModal);
  uploadModal.addEventListener('click', (e) => {
    if (e.target === uploadModal) closeUploadModal();
  });
  
  // Form submission
  uploadForm.addEventListener('submit', handleUploadSubmit);
  
  // Drag and Drop simulation for upload dropzone
  uploadDropzone.addEventListener('click', () => {
    alert('이미지 업로드 기능은 현재 프로토타입 시뮬레이션 모드입니다.');
  });

  // Navigation Button Events
  prevBtn.addEventListener('click', () => navigatePage(-1));
  nextBtn.addEventListener('click', () => navigatePage(1));
  
  // Suggest Button (Coming soon page)
  suggestBtn.addEventListener('click', () => {
    closeDetailModal();
    openUploadModal();
  });

  // Index Tab Events (Clicking directly jumps to category starting page)
  const tabButtons = document.querySelectorAll('.tab-item');
  tabButtons.forEach(tab => {
    tab.addEventListener('click', (e) => {
      tabButtons.forEach(btn => btn.classList.remove('active'));
      tab.classList.add('active');
      const category = tab.getAttribute('data-category');
      
      const prevCategory = currentCategory;

      if (category === 'quiz') {
        // Hide standard pages and navigation arrows
        prevBtn.style.display = 'none';
        nextBtn.style.display = 'none';
        setPagesVisibility('quiz');
        showQuizStartScreen();
      } else if (category === 'all') {
        // Show all items with flip animation
        prevBtn.style.display = 'flex';
        nextBtn.style.display = 'flex';
        if (prevCategory !== 'all') {
          const animClass = 'page-flip-prev';
          binderPage.classList.add(animClass);
          setTimeout(() => {
            binderPage.classList.remove(animClass);
            activateAllTab();
          }, 300);
        } else {
          activateAllTab();
        }
      } else {
        // Restore standard layout with flip animation
        prevBtn.style.display = 'flex';
        nextBtn.style.display = 'flex';

        let targetPage = 1;
        if (category === 'kitchen') targetPage = 1;
        else if (category === 'office') targetPage = 2;
        else if (category === 'misc') targetPage = 3;

        // Direction: from 'all' always go forward; otherwise compare pages
        let direction = null;
        if (prevCategory === 'all') {
          direction = 1;
        }

        filterByCategory(category);
        currentCategory = category;
        goToPage(targetPage, direction);
      }
    });
  });

  // Logo Button
  logoButton.addEventListener('click', () => {
    clearSearch();
    prevBtn.style.display = 'flex';
    nextBtn.style.display = 'flex';
    activePage = 1;
    setPagesVisibility(1);

    filterByCategory('all');
    document.querySelectorAll('.tab-item').forEach((tab, index) => {
      if (index === 0) tab.classList.add('active');
      else tab.classList.remove('active');
    });
  });

  // Info Modal Events
  infoBtn.addEventListener('click', () => {
    infoModal.classList.remove('hidden');
  });
  infoCloseBtn.addEventListener('click', () => {
    infoModal.classList.add('hidden');
  });
  infoModal.addEventListener('click', (e) => {
    if (e.target === infoModal) infoModal.classList.add('hidden');
  });

  // ESC key to close modals
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeDetailModal();
      closeUploadModal();
      infoModal.classList.add('hidden');
    }
  });

  // Alternate designs list click-and-drag scroll
  const altList = document.getElementById('modal-alt-list');
  let isDown = false;
  let startX;
  let scrollLeft;

  altList.addEventListener('mousedown', (e) => {
    isDown = true;
    altList.classList.add('active-drag');
    startX = e.pageX - altList.offsetLeft;
    scrollLeft = altList.scrollLeft;
  });
  altList.addEventListener('mouseleave', () => {
    isDown = false;
    altList.classList.remove('active-drag');
  });
  altList.addEventListener('mouseup', () => {
    isDown = false;
    altList.classList.remove('active-drag');
  });
  altList.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - altList.offsetLeft;
    const walk = (x - startX) * 2.5; // Drag speed multiplier
    altList.scrollLeft = scrollLeft - walk;
  });

  // Quiz Control Button Events
  quizStartBtn.addEventListener('click', startQuiz);
  quizNextBtn.addEventListener('click', nextQuestion);
  quizRestartBtn.addEventListener('click', startQuiz);
  quizBackBtn.addEventListener('click', () => {
    logoButton.click();
  });
}

// Open Detail Modal with Item Info
function openDetailModal(item) {
  const modalImgContainer = document.querySelector('.modal-img-container');
  modalImg.src = item.image;
  modalImg.alt = item.name;
  modalCommonName.textContent = item.officialName;
  modalOfficialName.textContent = item.name;
  modalDescription.textContent = item.description;
  
  // Build tags
  modalTagsContainer.innerHTML = '';
  item.tags.forEach(tag => {
    const tagEl = document.createElement('span');
    tagEl.className = 'tag-badge';
    tagEl.textContent = `#${tag}`;
    tagEl.addEventListener('click', () => {
      closeDetailModal();
      searchInput.value = tag;
      handleSearch();
    });
    modalTagsContainer.appendChild(tagEl);
  });
  
  // Build Alternate Designs ("다른 모양들")
  const modalAltSection = document.getElementById('modal-alt-designs-section');
  const modalAltList = document.getElementById('modal-alt-list');
  
  if (item.otherDesigns && item.otherDesigns.length > 1) {
    modalAltList.innerHTML = '';
    
    item.otherDesigns.forEach((design, index) => {
      const altItem = document.createElement('div');
      altItem.className = 'modal-alt-item';
      if (index === 0) altItem.classList.add('active');
      
      altItem.innerHTML = `
        <img src="${design.image}" alt="${design.officialName}" draggable="false">
      `;
      
      altItem.addEventListener('click', () => {
        if (altItem.classList.contains('active')) return;
        
        // Update active class
        const activeItems = modalAltList.querySelectorAll('.modal-alt-item');
        activeItems.forEach(el => el.classList.remove('active'));
        altItem.classList.add('active');
        
        // Swap image and content with a smooth transition
        modalImgContainer.style.opacity = '0';
        setTimeout(() => {
          modalImg.src = design.image;
          modalImg.alt = design.officialName;
          modalCommonName.textContent = design.officialName;
          modalOfficialName.textContent = item.name;
          modalDescription.textContent = design.description;
          modalImgContainer.style.opacity = '1';
        }, 150);
      });
      
      modalAltList.appendChild(altItem);
    });
    
    modalAltSection.classList.remove('hidden');
  } else {
    modalAltSection.classList.add('hidden');
  }
  
  // Reset modal scroll to top when opening
  const modalCard = document.querySelector('.modal-card');
  if (modalCard) modalCard.scrollTop = 0;
  
  detailModal.classList.remove('hidden');
}

function closeDetailModal() {
  detailModal.classList.add('hidden');
}

// Upload Modal Functions
function openUploadModal() {
  uploadModal.classList.remove('hidden');
}

// Close Upload Modal
function closeUploadModal() {
  uploadModal.classList.add('hidden');
  uploadForm.reset();
}

// Handle Upload Submit
function handleUploadSubmit(e) {
  e.preventDefault();
  alert('제보해 주셔서 감사합니다! 검토 후 도감에 등록하겠습니다.');
  closeUploadModal();
}

// Search Filtering Logic
function handleSearch() {
  const query = searchInput.value.trim().toLowerCase();
  
  if (query === '') {
    clearSearch();
    return;
  }
  
  isSearching = true;
  searchClearBtn.classList.add('visible');
  
  const matchedItems = [];
  
  items.forEach(item => {
    const isMatch = 
      item.name.toLowerCase().includes(query) ||
      item.officialName.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query) ||
      item.tags.some(tag => tag.toLowerCase().includes(query));
      
    const itemEl = document.getElementById(`item-${item.id}`);
    if (itemEl) {
      if (isMatch) {
        itemEl.classList.remove('dimmed');
        itemEl.classList.add('highlighted');
        matchedItems.push(item);
      } else {
        itemEl.classList.remove('highlighted');
        itemEl.classList.add('dimmed');
      }
    }
  });

  // Render dropdown suggestions
  renderSearchDropdown(matchedItems);
  
  // If we search, make sure we show the page containing the first matched item
  if (matchedItems.length > 0) {
    const firstMatch = matchedItems[0];
    const targetPage = firstMatch.page || 1;
    if (activePage !== targetPage) {
      goToPage(targetPage);
    }
  }
}

// Clear Search
function clearSearch() {
  searchInput.value = '';
  searchClearBtn.classList.remove('visible');
  searchDropdown.classList.add('hidden');
  isSearching = false;
  
  // Restore all items opacity and positions
  items.forEach(item => {
    const itemEl = document.getElementById(`item-${item.id}`);
    if (itemEl) {
      itemEl.classList.remove('dimmed', 'highlighted');
    }
  });
  
  // Re-apply current category filter if active
  if (currentCategory !== 'all') {
    filterByCategory(currentCategory);
  }
}

// Render Search Dropdown
function renderSearchDropdown(matchedItems) {
  if (matchedItems.length === 0) {
    searchDropdown.innerHTML = '<div style="padding: 10px 20px; font-size: 13px; color: var(--text-muted);">검색 결과가 없습니다.</div>';
  } else {
    searchDropdown.innerHTML = '';
    matchedItems.forEach(item => {
      const dropdownItem = document.createElement('div');
      dropdownItem.className = 'search-item';
      dropdownItem.innerHTML = `
        <span class="search-item-title">${item.name}</span>
        <span class="search-item-official">${item.officialName}</span>
      `;
      dropdownItem.addEventListener('click', () => {
        openDetailModal(item);
        searchInput.value = item.name;
        searchDropdown.classList.add('hidden');
        
        // Navigate to the item's page
        const targetPage = item.page || 1;
        if (activePage !== targetPage) {
          goToPage(targetPage);
        }

        // Highlight only this item
        items.forEach(it => {
          const itemEl = document.getElementById(`item-${it.id}`);
          if (itemEl) {
            if (it.id === item.id) {
              itemEl.classList.remove('dimmed');
              itemEl.classList.add('highlighted');
            } else {
              itemEl.classList.remove('highlighted');
              itemEl.classList.add('dimmed');
            }
          }
        });
      });
      searchDropdown.appendChild(dropdownItem);
    });
  }
  searchDropdown.classList.remove('hidden');
}

// Category Filter
function filterByCategory(category) {
  currentCategory = category;
  
  // Reset search
  if (isSearching) {
    clearSearch();
  }
  
  items.forEach(item => {
    const itemEl = document.getElementById(`item-${item.id}`);
    if (itemEl) {
      itemEl.classList.remove('highlighted');
      if (category === 'all' || item.category === category) {
        itemEl.classList.remove('dimmed');
      } else {
        itemEl.classList.add('dimmed');
      }
    }
  });
}

// Activate the red "all" tab state
function activateAllTab() {
  currentCategory = 'all';
  filterByCategory('all');
  document.querySelectorAll('.tab-item').forEach(btn => btn.classList.remove('active'));
  const allTab = document.querySelector('.tab-item[data-category="all"]');
  if (allTab) allTab.classList.add('active');
  // Go to page 1 so items are visible
  if (activePage !== 1) {
    const currentPageEl = document.getElementById(`page-${activePage}`);
    const page1El = document.getElementById('page-1');
    if (currentPageEl) currentPageEl.classList.add('hidden');
    if (page1El) page1El.classList.remove('hidden');
    activePage = 1;
  }
}

// Page Navigation with flip animation
// Cycle: all(red) → page1 → page2 → page3 → page4 → all(red) → ...
function navigatePage(direction) {
  const totalPages = 4;

  if (currentCategory === 'all') {
    // From 'all': next → page 1, prev → page 4
    if (direction === 1) {
      filterByCategory('kitchen');
      goToPage(1);
    } else {
      filterByCategory('misc');
      goToPage(totalPages);
    }
    return;
  }

  let targetPage = activePage + direction;

  if (targetPage < 1 || targetPage > totalPages) {
    // Out of bounds → activate the red "all" tab
    activateAllTab();
    return;
  }

  goToPage(targetPage, direction);
}

// Go to page with flip animation
function goToPage(targetPage, direction = null) {
  if (targetPage === activePage) return;
  
  const currentPageEl = document.getElementById(`page-${activePage}`);
  const targetPageEl = document.getElementById(`page-${targetPage}`);
  
  if (!currentPageEl || !targetPageEl) return;
  
  const actualDirection = direction !== null ? direction : (targetPage > activePage ? 1 : -1);
  const animationClass = actualDirection > 0 ? 'page-flip-next' : 'page-flip-prev';
  binderPage.classList.add(animationClass);
  
  setTimeout(() => {
    currentPageEl.classList.add('hidden');
    targetPageEl.classList.remove('hidden');
    binderPage.classList.remove(animationClass);
    activePage = targetPage;
    
    // Automatically update the active category tab based on the new page
    updateActiveTabForPage(activePage);
  }, 300);
}

// Run application when DOM is fully loaded
document.addEventListener('DOMContentLoaded', init);

// Quiz Game State Variables
let quizQuestions = [];
let currentQuizIdx = 0;
let quizScore = 0;

// Show Quiz Start Screen
function showQuizStartScreen() {
  quizStartScreen.classList.remove('hidden');
  quizPlayScreen.classList.add('hidden');
  quizResultScreen.classList.add('hidden');
  quizFeedbackOverlay.classList.add('hidden');
}

// Start Quiz Game
function startQuiz() {
  // Shuffle all items and pick 5 questions
  const shuffledItems = [...items].sort(() => 0.5 - Math.random());
  quizQuestions = shuffledItems.slice(0, 5);
  
  currentQuizIdx = 0;
  quizScore = 0;
  
  quizStartScreen.classList.add('hidden');
  quizPlayScreen.classList.remove('hidden');
  quizResultScreen.classList.add('hidden');
  quizFeedbackOverlay.classList.add('hidden');
  
  showQuizQuestion();
}

// Render current quiz question
function showQuizQuestion() {
  const currentItem = quizQuestions[currentQuizIdx];
  
  // Progress Bar
  const progressPercent = ((currentQuizIdx) / 5) * 100;
  quizProgressFill.style.width = `${progressPercent}%`;
  
  // Header texts
  quizQuestionNumber.textContent = `문제 ${currentQuizIdx + 1} / 5`;
  quizScoreBadge.textContent = `맞춘 개수: ${quizScore}`;
  
  // Question Image
  quizQuestionImg.src = currentItem.image;
  quizQuestionImg.alt = currentItem.officialName;
  
  // Options Choices Generation (1 correct + 3 incorrect)
  const correctOption = currentItem.name;
  const incorrectChoices = items
    .filter(it => it.id !== currentItem.id)
    .map(it => it.name);
  
  // Shuffle incorrect choices and pick 3
  const shuffledIncorrect = incorrectChoices.sort(() => 0.5 - Math.random()).slice(0, 3);
  
  // Mix correct and incorrect and shuffle
  const allChoices = [correctOption, ...shuffledIncorrect].sort(() => 0.5 - Math.random());
  
  // Populate buttons
  quizOptionsContainer.innerHTML = '';
  allChoices.forEach(choice => {
    const btn = document.createElement('button');
    btn.className = 'quiz-option-btn';
    btn.textContent = choice;
    btn.addEventListener('click', () => {
      evaluateAnswer(choice === correctOption, currentItem);
    });
    quizOptionsContainer.appendChild(btn);
  });
}

// Evaluate selected answer and show feedback
function evaluateAnswer(isCorrect, item) {
  // Disable option buttons
  const buttons = quizOptionsContainer.querySelectorAll('.quiz-option-btn');
  buttons.forEach(btn => btn.disabled = true);
  
  if (isCorrect) {
    quizScore++;
    quizFeedbackTitle.textContent = "정답입니다! 🎉";
    quizFeedbackTitle.className = "correct";
  } else {
    quizFeedbackTitle.textContent = "아쉽네요! 😢";
    quizFeedbackTitle.className = "incorrect";
  }
  
  quizFeedbackDetail.innerHTML = `
    <strong>우리가 부르는 이름:</strong> ${item.name}<br>
    <strong>진짜 공식 명칭:</strong> ${item.officialName}<br><br>
    <span style="font-size: 13.5px;">${item.description.substring(0, 90)}...</span>
  `;
  
  quizFeedbackOverlay.classList.remove('hidden');
}

// Go to next question or show final score
function nextQuestion() {
  quizFeedbackOverlay.classList.add('hidden');
  currentQuizIdx++;
  
  if (currentQuizIdx < 5) {
    showQuizQuestion();
  } else {
    // Fill the progress bar to 100%
    quizProgressFill.style.width = '100%';
    showQuizResults();
  }
}

// Display finalized score and comment
function showQuizResults() {
  quizPlayScreen.classList.add('hidden');
  quizResultScreen.classList.remove('hidden');
  
  quizFinalScore.textContent = `${quizScore} / 5`;
  
  let comment = "";
  switch(quizScore) {
    case 5:
      comment = "우와, 혹시 사물 사전 개발자이신가요?! 사물 이름의 완전한 신! 👑";
      break;
    case 4:
    case 3:
      comment = "그 뭐냐 그거! 일상 사물들의 진짜 이름들을 대단히 잘 알고 계시는군요! 👍";
      break;
    case 2:
    case 1:
      comment = "도감 사전을 더 꼼꼼히 탐색해 보세요! 조금만 더 하면 다 맞출 수 있습니다! 📖";
      break;
    case 0:
      comment = "그 뭐냐 그거... 정말 아무 이름도 기억나지 않으시는군요! 😂 다시 한번 도전해 볼까요?";
      break;
  }
  
  quizResultComment.textContent = comment;
}
