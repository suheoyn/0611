/* =============================================================
   그그그그 그 뭐였더라 - app.js
   완전한 사물 아카이브 애플리케이션
   ============================================================= */

'use strict';

// ─────────────────────────────────────────────────────────────
// 1. DATA — 50 objects
// ─────────────────────────────────────────────────────────────
const ITEMS = [
  {
    id: 1,
    name: "피자 세이버",
    official: "피자 세이버 (Pizza Saver)",
    description: "피자를 피자 상자에 담아 배달할 때, 피자의 열기로 상자 뚜껑이 내려앉아 피자에 들러붙는 것을 막기 위해 피자 가운데에 꽂는 세 발 달린 작은 플라스틱 지지대입니다.\n\n1985년 Carmela Vitale이 특허를 취득했으며, 배달 피자가 일상화된 이후 전 세계적으로 쓰이게 되었습니다.",
    tags: ["피자", "배달", "삼발이", "플라스틱", "지지대"],
    category: "kitchen",
    image: "assets/1_pizza.jpg",
    hint: "배달 피자 상자 안에 꽂혀 있는 세 발 달린 작은 플라스틱"
  },
  {
    id: 2,
    name: "트위스트 타이",
    official: "트위스트 타이 (Twist Tie)",
    description: "식빵 봉지나 비닐봉지 입구를 꼬아 묶는 데 쓰이는 얇고 유연한 끈입니다. 얇은 금속 철심을 종이나 플라스틱 피복으로 감싸 만들며, 색깔로 식품 유통 날짜(제조 요일)를 구분하는 데도 사용됩니다.",
    tags: ["식빵", "봉지", "묶기", "철심", "꼬기", "주방"],
    category: "kitchen",
    image: "assets/2_twist.png",
    hint: "식빵 봉지 입구를 꼬아 막는 금속 심 내장 작은 끈"
  },
  {
    id: 3,
    name: "라바콘",
    official: "트래픽 콘 (Traffic Cone)",
    description: "도로 공사 구간, 주차 차단 구역, 사고 현장 등에서 차량 통행을 유도하고 보행자 접근을 막기 위해 길에 세워두는 주황색 원뿔 모양의 고무 고깔입니다.\n\n반사 테이프가 붙어 야간에도 잘 보이며, 속이 비어 가벼우므로 바람에 넘어지기 쉬운 단점이 있습니다.",
    tags: ["도로", "라바콘", "원뿔", "안전", "공사", "주차", "주황"],
    category: "misc",
    image: "assets/3_traffic.png",
    hint: "공사장 앞에 세워두는 주황 고깔 모양 고무 도로 표지"
  },
  {
    id: 4,
    name: "십 스틱",
    official: "커피 스터러 / 십 스틱 (Coffee Sip Stick)",
    description: "카페에서 뜨거운 테이크아웃 커피를 주문하면 꽂아주는, 두 개의 아주 좁은 통로가 나란히 붙어 있는 얇고 납작한 빨대 겸용 젓개입니다.\n\n구멍이 극히 좁아 음료가 한 번에 너무 많이 들어와 혀를 데는 것을 방지하며, 동시에 음료를 저을 수도 있습니다.",
    tags: ["커피", "빨대", "카페", "두구멍", "젓개", "테이크아웃"],
    category: "kitchen",
    image: "assets/4_sipstick.png",
    hint: "커피숍 뜨거운 음료에 꽂아주는 두 구멍짜리 납작 빨대"
  },
  {
    id: 5,
    name: "빵끈 클립",
    official: "퀵록 (Kwiklock / Bread Clip)",
    description: "식빵이나 과자 봉지 입구를 집어 고정하는 납작한 플라스틱 걸쇠입니다. 색깔로 유통 날짜를 구분하기도 하며, 발명가 Floyd Paxton의 이름에서 따 '퀵록'이라고도 부릅니다.\n\n납작하고 작아 쓰레기로 나오는 경우가 많지만, 케이블 정리나 냉장고 재료 표기 등 다양하게 재활용됩니다.",
    tags: ["식빵", "봉지", "클립", "걸쇠", "플라스틱", "마감"],
    category: "kitchen",
    image: "assets/5_breadclip.png",
    hint: "식빵 봉지 입구에 끼워 고정하는 작고 납작한 플라스틱"
  },
  {
    id: 6,
    name: "잠복소",
    official: "잠복소 / 나무 짚 허리띠 (Winter Tree Banding)",
    description: "가을철 가로수 줄기 아래쪽에 허리띠처럼 둘러 묶어두는 짚으로 만든 거적입니다.\n\n겨울에 추위를 피해 벌레들이 짚 밑으로 기어들어가 산란하게 한 뒤, 이듬해 봄에 짚을 떼어내 불태움으로써 해충을 방제하는 전통 친환경 방제 도구입니다.",
    tags: ["나무", "가로수", "짚", "겨울", "해충", "벌레", "보호"],
    category: "misc",
    image: "assets/6_jambokso.png",
    hint: "가로수 허리를 짚으로 둘러싼 해충 유인·방제 장치"
  },
  {
    id: 7,
    name: "네메스",
    official: "네메스 (Nemes Headdress)",
    description: "고대 이집트 파라오들이 왕권과 태양신을 상징하기 위해 머리에 썼던 줄무늬 천 두건입니다.\n\n투탕카멘 황금가면의 머리 양옆으로 늘어진 파란색과 금색 줄무늬 천이 바로 네메스입니다. 이집트 예술에서 파라오 묘사 시 가장 자주 등장하는 머리 장식 중 하나입니다.",
    tags: ["이집트", "파라오", "두건", "투탕카멘", "왕관", "줄무늬"],
    category: "misc",
    image: "assets/7_nemyss.png",
    hint: "투탕카멘 황금가면에서 볼 수 있는 줄무늬 이집트 두건"
  },
  {
    id: 8,
    name: "애드벌룬",
    official: "애드벌룬 (Advertising Balloon / Blimp)",
    description: "아파트 모델하우스나 매장 오픈 행사 시 하늘에 띄워 멀리서도 보이게 하는 대형 광고용 풍선입니다.\n\n하단에 매단 현수막에 전화번호나 광고 문구를 인쇄해 두며, 헬륨 또는 수소 가스로 부풀립니다.",
    tags: ["풍선", "하늘", "광고", "행사", "대형", "오픈"],
    category: "misc",
    image: "assets/8_adballoon.png",
    hint: "부동산 분양 현장에서 하늘 위에 띄워두는 대형 광고 풍선"
  },
  {
    id: 9,
    name: "몰리 가드",
    official: "몰리 가드 (Molly Guard)",
    description: "중요한 서버 전원 스위치나 기계 비상 정지 버튼을 실수로 누르지 못하도록 씌워두는 투명한 플라스틱 또는 금속 보호 덮개입니다.\n\n이름의 유래는, 어떤 회사의 꼬마 딸 '몰리'가 자꾸 서버실에 들어와 비상 전원을 누르는 바람에 덮개를 만들었다는 일화에서 비롯되었습니다.",
    tags: ["스위치", "덮개", "방지", "보호", "안전", "서버"],
    category: "office",
    image: "assets/9_mollyguard.png",
    hint: "비상 스위치를 실수로 누르지 못하도록 씌워두는 투명 덮개"
  },
  {
    id: 10,
    name: "문 핑거 가드",
    official: "도어 핑거 가드 (Door Finger Guard)",
    description: "문틈에 손가락이 끼이는 사고를 막기 위해 문 경첩 쪽에 붙이는 C자형 고무나 폼 소재의 쿠션 보호대입니다.\n\n주로 어린이 안전사고 예방을 위해 유치원, 어린이집, 학교 등에서 많이 사용됩니다.",
    tags: ["문", "손가락", "안전", "어린이", "쿠션", "보호"],
    category: "misc",
    image: "assets/10_doorguard.png",
    hint: "문틈에 손가락이 끼이지 않도록 문 가장자리에 붙이는 C형 쿠션"
  },
  {
    id: 11,
    name: "마라카스",
    official: "마라카스 (Maracas)",
    description: "안에 작은 구슬이나 씨앗이 가득 들어 있어 흔들면 소리가 나는 호리병 모양의 타악기입니다.\n\n라틴 아메리카 카리브 해 지역이 원산지로, 주로 두 개를 한 쌍으로 사용합니다. 살사, 룸바 등 라틴 음악에서 필수적인 리듬 악기입니다.",
    tags: ["악기", "타악기", "라틴", "흔들기", "리듬", "살사"],
    category: "misc",
    image: "assets/11_maracas.png",
    hint: "흔들면 소리가 나는 호리병 모양 라틴 리듬 악기"
  },
  {
    id: 12,
    name: "실 뜯개",
    official: "심 리퍼 (Seam Ripper)",
    description: "박음질을 뜯거나 단춧구멍을 열 때 쓰는 끝이 갈고리 모양으로 생긴 작은 재봉 도구입니다.\n\n뾰족한 끝을 실 아래에 걸고 당기면 실이 끊어집니다. 의류 수선 시 없어서는 안 될 필수 바느질 도구입니다.",
    tags: ["바느질", "재봉", "뜯기", "실", "도구", "의류"],
    category: "office",
    image: "assets/12_sealingknife.png",
    hint: "박음질을 뜯는 갈고리 모양 작은 바느질 도구"
  },
  {
    id: 13,
    name: "리본 책갈피",
    official: "리본 마커 (Ribbon Bookmark / Marker)",
    description: "책 페이지를 표시하기 위해 끼워두는 얇은 리본 모양 책갈피입니다.\n\n고급 서적이나 다이어리의 경우 제본 단계에서 리본 끈이 책등에 직접 부착되기도 합니다. 실크, 새틴 등 다양한 소재로 만들어집니다.",
    tags: ["책", "독서", "책갈피", "페이지", "리본", "마커"],
    category: "office",
    image: "assets/13_ribbonmarker.png",
    hint: "책 페이지를 표시하는 얇고 긴 리본 모양 끈 책갈피"
  },
  {
    id: 14,
    name: "콘페티",
    official: "콘페티 (Confetti)",
    description: "파티, 행사, 결혼식 등에서 축하를 표현하기 위해 뿌리는 알록달록한 작은 종이 조각들입니다.\n\n이탈리아어로 '작은 과자'라는 뜻에서 유래했으며, 원래는 사탕이나 견과류를 뿌리던 것이 종이 조각으로 변형되었습니다.",
    tags: ["파티", "행사", "축하", "종이", "장식", "생일"],
    category: "misc",
    image: "assets/14_confetti.png",
    hint: "파티에서 뿌리는 알록달록한 작은 종이 조각들"
  },
  {
    id: 15,
    name: "옥춘당 / 알사탕",
    official: "옥춘당 (Okchundang Hard Candy)",
    description: "오색으로 색을 입힌 단단한 구슬 모양의 전통 사탕입니다.\n\n주로 잔치나 제사상 위에 올리거나 어린이에게 나눠주는 용도로 많이 쓰입니다. 색깔은 오방색(청·백·적·흑·황)을 기반으로 하며, 달콤한 설탕 맛이 납니다.",
    tags: ["사탕", "알사탕", "전통", "구슬", "간식", "오방색"],
    category: "kitchen",
    image: "assets/15_Okchundang.png",
    hint: "잔칫날 나눠주는 오색 구슬 모양 단단한 전통 사탕"
  },
  {
    id: 16,
    name: "에글렛",
    official: "에글렛 (Aglet)",
    description: "신발 끈이나 가방 끈 끝에 씌워진 금속 또는 플라스틱 마감 캡입니다.\n\n이 캡이 없으면 끈 끝이 풀리거나 헤져서 끈을 구멍에 꿰기 어려워집니다. 15세기부터 이미 금속 에글렛이 사용된 기록이 남아 있습니다.",
    tags: ["신발", "끈", "마감", "금속", "캡", "신발끈", "가방"],
    category: "misc",
    image: "assets/16_aglet.png",
    hint: "신발 끈 끝에 씌워진 작은 금속 또는 플라스틱 마감 캡"
  },
  {
    id: 17,
    name: "바란",
    official: "바란 (Baran / 葉蘭)",
    description: "초밥 도시락이나 과일 용기 안에서 음식이 서로 섞이지 않도록 경계를 만드는 녹색 플라스틱 잎 모양 파티션입니다.\n\n일본어로 '하란(葉蘭)'이라고도 부르며, 원래는 실제 대나무나 조릿대 잎을 사용했습니다. 항균 효과가 있다고 알려져 있으나, 현대에는 대부분 플라스틱으로 대체되었습니다.",
    tags: ["초밥", "도시락", "구분", "녹색잎", "플라스틱", "일본"],
    category: "kitchen",
    image: "assets/17_baran.png",
    hint: "초밥 도시락 칸 사이에 넣는 녹색 플라스틱 잎 모양 칸막이"
  },
  {
    id: 18,
    name: "래싱 탭 / D링",
    official: "래싱 탭 (Lashing Tab / D-Ring)",
    description: "트럭이나 화물선의 화물 위에 씌운 방수포를 로프로 당겨 고정하는 금속 D자 모양 고리입니다.\n\n화물칸 바닥이나 측벽에 용접 또는 볼트로 단단히 고정되어 있으며, 적재물이 운송 중 이동하지 않도록 묶는 기준점 역할을 합니다.",
    tags: ["화물", "트럭", "고정", "로프", "D링", "운송"],
    category: "misc",
    image: "assets/18_lashtab.png",
    hint: "트럭 화물칸에 로프를 걸어 방수포를 고정하는 금속 D형 고리"
  },
  {
    id: 19,
    name: "못",
    official: "네일 (Nail)",
    description: "망치로 박아 물건을 고정하거나 벽에 걸이를 만드는 데 쓰는 뾰족한 금속 핀입니다.\n\n머리 부분(헤드)과 몸통(생크), 뾰족한 끝(팁)으로 구성되며, 길이·굵기·소재·끝 모양에 따라 수십 가지 종류가 있습니다.",
    tags: ["망치", "박기", "벽", "고정", "금속", "철", "공구"],
    category: "misc",
    image: "assets/19_nail.png",
    hint: "망치로 박아 물건을 고정하는 뾰족한 금속 핀"
  },
  {
    id: 20,
    name: "씰링 왁스",
    official: "봉랍 / 씰링 왁스 (Sealing Wax)",
    description: "편지나 봉투 봉인에 녹여 스탬프를 눌러 인장을 찍는 왁스 봉입니다.\n\n중세 시대부터 중요한 문서나 편지의 봉인에 사용되어 왔으며, 인장(시그넷 링)을 눌러 발신자를 인증하는 역할을 했습니다. 현대에는 복고 감성의 편지 꾸미기에 많이 쓰입니다.",
    tags: ["편지", "봉인", "스탬프", "왁스", "인장", "복고", "빨간"],
    category: "office",
    image: "assets/20_sealingwax.png",
    hint: "편지 봉인에 녹여 인장을 찍는 빨간 왁스 봉"
  },
  {
    id: 21,
    name: "부표",
    official: "부이 (Buoy)",
    description: "바다나 강에 떠있는 부유 구조물로, 선박에게 위치 정보·위험 구역·항로를 알려주는 신호 장치입니다.\n\n국제 표준에 따라 색과 모양으로 의미가 구분됩니다. 빨간색은 우측 항행 경계, 초록색은 좌측 항행 경계 등으로 사용됩니다.",
    tags: ["바다", "항해", "신호", "부유", "항구", "안전"],
    category: "misc",
    image: "assets/21_Buoy.png",
    hint: "바다에 떠서 선박에게 항로와 위험 구역을 알려주는 부유 신호"
  },
  {
    id: 22,
    name: "기뢰",
    official: "기뢰 (Naval Mine)",
    description: "바닷속에 숨겨 적 함선이 접촉하거나 가까이 오면 폭발하도록 설계된 수중 폭발 병기입니다.\n\n둥근 몸체에 여러 개의 돌기(촉각기)가 달린 특유의 형태로 알려져 있습니다. 19세기 크림 전쟁에서 실전 사용된 이후 주요 해군 전술 무기로 자리 잡았습니다.",
    tags: ["바다", "해군", "무기", "폭발", "전쟁", "수중"],
    category: "misc",
    image: "assets/22_NavalMine.png",
    hint: "바닷속에 숨겨두는 돌기 달린 구형 수중 폭발 무기"
  },
  {
    id: 23,
    name: "볼라드",
    official: "볼라드 (Bollard)",
    description: "인도와 차도 경계, 공공 시설 앞에 주차 차단과 보행자 보호를 위해 세워두는 짧고 굵은 기둥입니다.\n\n원래는 항구에서 배를 계류하는 데 쓰이던 말뚝에서 유래했습니다. 현대 도심에서는 테러 차량 돌진 방지용 강화형 볼라드도 사용됩니다.",
    tags: ["인도", "차단", "주차", "도시", "기둥", "안전", "보행자"],
    category: "misc",
    image: "assets/23_bollard.png",
    hint: "인도에서 차량 진입을 막기 위해 세우는 짧고 굵은 기둥"
  },
  {
    id: 24,
    name: "과일 받침 트레이",
    official: "후르츠 트레이 (Fruit Foam Tray / Net Wrap)",
    description: "마트 과일 코너에서 사과나 배 밑에 깔아두는 그물 모양 스티로폼 받침대입니다.\n\n과일 표면을 충격에서 보호하고 외관을 유지합니다. 발포 폴리스티렌(EPS) 소재가 많으며, 환경 부담이 커서 최근에는 종이 소재 대안도 개발되고 있습니다.",
    tags: ["과일", "사과", "마트", "포장", "스티로폼", "보호"],
    category: "kitchen",
    image: "assets/24_Fruit tray.png",
    hint: "사과나 배 밑에 까는 그물 모양 스티로폼 받침대"
  },
  {
    id: 25,
    name: "달걀 이력 코드",
    official: "계란 이력 추적 코드 (Egg Code)",
    description: "달걀 껍데기에 찍혀있는 10자리 이력 추적 코드입니다.\n\n산란 일자(4자리), 생산자 고유번호(5자리), 사육 환경 번호(1자리)로 구성됩니다. 사육 환경 번호는 1(방목), 2(케이지 없음), 3(개선 케이지), 4(기존 케이지)를 나타냅니다.",
    tags: ["달걀", "코드", "이력", "식품", "안전", "숫자", "껍데기"],
    category: "kitchen",
    image: "assets/25_Egg code.png",
    hint: "달걀 껍데기에 찍힌 10자리 이력 추적 숫자 코드"
  },
  {
    id: 26,
    name: "달걀판",
    official: "에그 카톤 (Egg Carton / Egg Box)",
    description: "달걀을 운반·보관할 때 깨지지 않도록 각각 품어주는 종이 또는 플라스틱 칸막이 용기입니다.\n\n6구, 10구, 12구, 30구 등 다양한 크기가 있으며, 오목한 각 칸이 달걀이 맞닿아 부딪히는 것을 막습니다. 빈 달걀판은 방음재·묘목 육묘판·공예 재료로 재활용 가능합니다.",
    tags: ["달걀", "포장", "운반", "칸막이", "종이", "보관"],
    category: "kitchen",
    image: "assets/26_eggcarton.png",
    hint: "달걀이 깨지지 않도록 품어주는 오목한 칸막이 용기"
  },
  {
    id: 27,
    name: "배 키 / 조타기",
    official: "선박 조타기 (Ship's Wheel / Helm)",
    description: "선박의 방향을 조절하는 나무 또는 금속 재질의 바퀴 모양 조향 장치입니다.\n\n18세기 초 선박에 도입되어, 그 이전의 조타봉(rudder tiller)을 대체했습니다. 해적·항해 시대의 아이콘으로도 널리 사용됩니다.",
    tags: ["배", "항해", "바퀴", "조타", "선박", "방향", "해적"],
    category: "misc",
    image: "assets/27_shiphelm.png",
    hint: "배의 방향을 조종하는 나무 바퀴 모양 조향 장치"
  },
  {
    id: 28,
    name: "베일 사일리지",
    official: "베일 사일리지 (Bale Silage / Round Bale)",
    description: "목초 등 여물을 원통형으로 압축해 하얀 비닐로 감싸 발효·보관하는 사료 덩어리입니다.\n\n농장에서 겨울철 가축 먹이를 저장하기 위해 들판에 굴려두는 하얀 원통입니다. 비닐 밀봉으로 혐기성 발효가 일어나 영양가가 높은 먹이가 됩니다.",
    tags: ["농장", "사료", "발효", "비닐", "소", "들판", "원통"],
    category: "misc",
    image: "assets/28_Bale Silage.png",
    hint: "농장 들판에 굴려두는 하얀 비닐로 감싼 원통형 사료 덩어리"
  },
  {
    id: 29,
    name: "킬",
    official: "용골 / 킬 (Keel)",
    description: "선박의 바닥 중앙을 앞뒤로 가로지르며 배의 척추 역할을 하는 주요 구조재입니다.\n\n배의 균형을 잡고 선체를 지지하는 핵심 부재로, 배를 건조할 때 가장 먼저 놓이는 부재입니다. '킬을 내린다'는 표현은 선박 건조 착공을 의미합니다.",
    tags: ["배", "구조", "선박", "균형", "건조", "척추"],
    category: "misc",
    image: "assets/29_kee.png",
    hint: "선박 바닥 중앙의 척추 역할을 하는 주요 구조재"
  },
  {
    id: 30,
    name: "암사슴",
    official: "도 (Doe)",
    description: "사슴의 암컷을 가리키는 영어 표현입니다.\n\n수컷(Buck)과 달리 뿔이 없고, 부드럽고 온순한 눈망울이 특징입니다. 새끼 사슴은 폰(Fawn)이라고 부릅니다. 솔의 눈, 밤비 등 많은 창작물에서 온순함·자연·순수함을 상징합니다.",
    tags: ["사슴", "동물", "암컷", "숲", "자연", "온순"],
    category: "misc",
    image: "assets/30_doe.png",
    hint: "뿔이 없는 사슴 암컷"
  },
  {
    id: 31,
    name: "꿀 디퍼",
    official: "허니 디퍼 (Honey Dipper)",
    description: "꿀 항아리에 담가 빙빙 돌려 꿀을 길어올린 뒤 음식이나 음료에 뿌리는 홈이 파인 나무 막대입니다.\n\n끝부분에 나선형으로 홈이 파여 있어 꿀이 실처럼 얇고 고르게 흘러내립니다. 나무 소재가 흔하지만 세라믹, 유리 제품도 있습니다.",
    tags: ["꿀", "주방", "나무", "막대", "디저트", "나선"],
    category: "kitchen",
    image: "assets/31_honeystick.png",
    hint: "꿀을 길어올려 뿌리는 홈 파인 나무 막대"
  },
  {
    id: 32,
    name: "가랜드",
    official: "가랜드 (Garland)",
    description: "파티나 행사 장식을 위해 여러 개의 종이·천·꽃 장식물을 끈에 매달아 연결한 장식 줄입니다.\n\n삼각기 형태(번팅 가랜드)나 꼬마전구 형태 등 다양한 종류가 있습니다. 생일 파티, 결혼식, 크리스마스 등 각종 행사 공간 꾸미기에 애용됩니다.",
    tags: ["파티", "장식", "행사", "꾸미기", "생일", "인테리어"],
    category: "misc",
    image: "assets/32_Garland.png",
    hint: "파티 장식을 위해 끈에 매단 깃발·종이 모양 장식 줄"
  },
  {
    id: 33,
    name: "메스틴",
    official: "메스틴 (Mess Tin)",
    description: "뚜껑이 달린 직사각형 알루미늄 야외 취사도구입니다.\n\n원래 군용으로 개발되어 밥·국·부식을 모두 담을 수 있도록 다용도로 설계되었습니다. 가볍고 내구성이 강해 현재는 캠핑·백패킹 마니아들 사이에서 큰 인기를 얻고 있습니다.",
    tags: ["캠핑", "취사", "알루미늄", "야외", "백패킹", "군용"],
    category: "misc",
    image: "assets/33_messtin.png",
    hint: "캠핑에서 쓰는 뚜껑 달린 직사각형 알루미늄 취사도구"
  },
  {
    id: 34,
    name: "국기봉 / 깃대 장식",
    official: "피니얼 / 국기봉 끝 장식 (Flagpole Finial)",
    description: "국기를 매다는 깃대 꼭대기에 달린 장식입니다.\n\n대한민국의 경우 나라꽃 무궁화의 꽃봉오리를 형상화한 금빛 장식을 사용합니다. 각 나라마다 독수리, 구슬, 창 등 다양한 형태의 피니얼을 씁니다.",
    tags: ["태극기", "깃대", "꼭대기", "무궁화", "금색", "봉오리", "국기"],
    category: "misc",
    image: "assets/34_starping.png",
    hint: "깃대 꼭대기에 달린 무궁화 꽃봉오리 모양의 금빛 장식"
  },
  {
    id: 35,
    name: "스프링클",
    official: "스프링클 (Sprinkles / Jimmies)",
    description: "케이크나 아이스크림 위에 뿌려 색을 내는 알록달록한 작은 막대 모양 설탕 장식입니다.\n\n미국 동부에서는 '지미스(Jimmies)'라고도 부릅니다. 초콜릿 맛, 바닐라 맛, 무지개색 등 다양한 종류가 있으며, 원형이나 별 모양 등 다양한 형태도 있습니다.",
    tags: ["케이크", "아이스크림", "설탕", "장식", "디저트", "달콤", "무지개"],
    category: "kitchen",
    image: "assets/35_sprinkle.png",
    hint: "케이크·아이스크림 위에 뿌리는 알록달록 작은 막대 설탕 장식"
  },
  {
    id: 36,
    name: "후크 앤 아이",
    official: "후크 앤 아이 클로저 (Hook and Eye Closure)",
    description: "두 개의 작은 금속 고리를 서로 채워 잠그는 의류 부착 도구입니다.\n\n드레스·블라우스의 등 부분, 스커트 허리 등에 많이 사용됩니다. 지퍼나 단추보다 얇고 눈에 잘 띄지 않아 외관상 깔끔한 마감에 쓰입니다.",
    tags: ["의류", "고리", "잠금", "핀", "후크", "패션", "잠금장치"],
    category: "misc",
    image: "assets/36_hook pin.png",
    hint: "옷의 고리 두 개를 서로 걸어 잠그는 작은 금속 의류 잠금 장치"
  },
  {
    id: 37,
    name: "테트라포드",
    official: "테트라포드 (Tetrapod)",
    description: "파도 에너지를 분산해 항구 방파제나 해안을 보호하는 네 다리 콘크리트 블록입니다.\n\n서로 맞물리도록 쌓여 파도의 에너지를 효과적으로 흡수하며, 1950년대 프랑스에서 처음 개발되었습니다. 바다 방파제 위에 쌓인 회색 덩어리들이 바로 이것입니다.",
    tags: ["방파제", "해안", "콘크리트", "파도", "항구", "보호", "네다리"],
    category: "misc",
    image: "assets/37_Tetrapod.png",
    hint: "방파제에 쌓인 네 다리 달린 회색 콘크리트 블록"
  },
  {
    id: 38,
    name: "이젤",
    official: "이젤 (Easel)",
    description: "그림판이나 캔버스를 세워두는, 세 다리를 펼칠 수 있는 나무 또는 금속 삼각대입니다.\n\n화가들이 그림을 그릴 때 필수로 사용하며, 전시용 패널이나 화이트보드를 지지하는 용도로도 쓰입니다. 접이식 구조로 이동이 간편합니다.",
    tags: ["그림", "미술", "캔버스", "삼각대", "화가", "전시"],
    category: "misc",
    image: "assets/38_easel.png",
    hint: "캔버스를 세워두는 세 다리 접이식 나무 삼각대"
  },
  {
    id: 39,
    name: "이퀄라이저",
    official: "그래픽 이퀄라이저 (Graphic Equalizer / EQ)",
    description: "각 주파수 대역의 음량을 개별적으로 조절하는 음향 장치입니다.\n\n저음(베이스)부터 고음(트레블)까지 여러 개의 슬라이더로 나누어 원하는 음향을 만들 수 있습니다. 음악 믹싱, 스튜디오 작업, 가정용 오디오에 폭넓게 사용됩니다.",
    tags: ["음악", "소리", "주파수", "음향", "스피커", "오디오", "슬라이더"],
    category: "office",
    image: "assets/39_Equalizer.png",
    hint: "음악 주파수를 조절하는 슬라이더 막대 장치"
  },
  {
    id: 40,
    name: "텀블위드",
    official: "텀블위드 (Tumbleweed)",
    description: "말라 죽으면 뿌리에서 끊겨 바람에 굴러다니며 씨앗을 퍼뜨리는 서부 사막 식물 덩어리입니다.\n\n미국 남서부와 유라시아 스텝 지대에 자생하는 러시아 엉겅퀴(Kali tragus)가 대표적입니다. 황량한 서부 영화의 상징으로, 적막함·고독함을 시각적으로 표현할 때 자주 등장합니다.",
    tags: ["사막", "서부", "바람", "식물", "굴러다니는", "미국"],
    category: "misc",
    image: "assets/40_Tumbleweed.png",
    hint: "서부 사막에서 바람에 굴러다니는 말라 죽은 식물 덩어리"
  },
  {
    id: 41,
    name: "의사봉 / 가벨",
    official: "가벨 (Gavel)",
    description: "법원 판사나 경매사, 의회 의장이 탁자에 탁 내리쳐 결정·개시·종료를 알리는 작은 나무 망치입니다.\n\n'딱!' 소리와 함께 판결 확정이나 경매 낙찰을 공식 선언합니다. 목재 재질이 흔하며, 그 아래에 사운딩 블록(타격대)이 함께 사용됩니다.",
    tags: ["법원", "판사", "경매", "망치", "결정", "선언", "의회"],
    category: "misc",
    image: "assets/41_gavel.png",
    hint: "법원에서 판사가 내리치는 결정을 알리는 작은 나무 망치"
  },
  {
    id: 42,
    name: "알베도 / 귤 속껍질",
    official: "알베도 (Albedo)",
    description: "오렌지나 귤 등 감귤류 과일의 외피와 과육 사이에 있는 하얗고 스펀지 같은 섬유 층입니다.\n\n쓴맛이 나지만 식이섬유와 바이오플라보노이드(헤스페리딘)가 풍부합니다. 귤을 까면 과육에 붙어 있는 하얀 실 같은 부분이 바로 알베도입니다.",
    tags: ["귤", "오렌지", "속껍질", "과일", "쓴맛", "하얀", "섬유"],
    category: "kitchen",
    image: "assets/42_albedo.png",
    hint: "귤을 까면 과육에 붙어있는 하얗고 스펀지 같은 안쪽 껍질"
  },
  {
    id: 43,
    name: "솜브레로",
    official: "솜브레로 (Sombrero)",
    description: "챙이 매우 넓고 꼭대기가 높이 솟은 멕시코 전통 모자입니다.\n\n스페인어로 '그늘을 만드는 것(sombra: 그늘)'이라는 뜻으로, 강한 햇볕을 차단하기 위한 실용적 목적에서 발전했습니다. 마리아치 음악과 함께 멕시코 문화를 상징하는 대표 아이콘입니다.",
    tags: ["멕시코", "모자", "전통", "라틴", "챙모자", "스페인"],
    category: "misc",
    image: "assets/43_Sombrero.png",
    hint: "챙이 넓고 꼭대기가 높이 솟은 멕시코 전통 모자"
  },
  {
    id: 44,
    name: "켈프 누들",
    official: "켈프 누들 (Kelp Noodles)",
    description: "다시마에서 추출한 젤 성분으로 만든 반투명 국수 형태의 해조류 음식입니다.\n\n칼로리가 거의 없고 글루텐 프리이며, 독특한 쫄깃한 식감이 특징입니다. 건강식·비건 요리에서 대체 면 재료로 주목받고 있습니다.",
    tags: ["다시마", "해조류", "국수", "건강식", "채식", "저칼로리"],
    category: "kitchen",
    image: "assets/44_kelp noodles.png",
    hint: "다시마로 만든 반투명 쫄깃한 저칼로리 해조류 국수"
  },
  {
    id: 45,
    name: "절구",
    official: "모르타르 앤드 페슬 (Mortar and Pestle)",
    description: "약초나 향신료를 으깨고 빻는 데 쓰는 돌 또는 도자기 그릇(모르타르)과 방망이(페슬) 세트입니다.\n\n인류 역사상 가장 오래된 조리 도구 중 하나로, 기원전 35,000년 이전부터 사용되었습니다. 고수를 갈거나 후추를 빻는 등 신선한 향신료 분쇄에 지금도 쓰입니다.",
    tags: ["절구", "향신료", "빻기", "조리", "돌", "주방", "갈기"],
    category: "kitchen",
    image: "assets/45_mortar and pestle.png",
    hint: "약초·향신료를 으깨는 돌절구와 방망이 세트"
  },
  {
    id: 46,
    name: "초승달",
    official: "크레센트 문 (Crescent Moon)",
    description: "달이 음력 초기에 보이는 얇은 활 모양입니다.\n\n이슬람 문화를 상징하는 아이콘으로 많은 이슬람 국가 국기에 등장합니다. 터키, 파키스탄, 알제리 등의 국기에서 찾아볼 수 있으며, 오스만 제국을 거쳐 이슬람권 전반의 상징이 되었습니다.",
    tags: ["달", "초승달", "이슬람", "장식", "밤", "기호", "하늘"],
    category: "misc",
    image: "assets/46_crescent.png",
    hint: "음력 초에 보이는 얇은 활 모양의 달"
  },
  {
    id: 47,
    name: "페룰",
    official: "페룰 (Ferrule)",
    description: "우산·지팡이·연필 끝을 마감하거나 강화하기 위해 끼우는 금속 캡이나 링입니다.\n\n도구 끝부분이 닳거나 갈라지지 않도록 보호하는 역할을 합니다. 우산 끝의 뾰족한 금속 마감, 지팡이나 목발 바닥의 고무 캡도 모두 페룰의 일종입니다.",
    tags: ["우산", "지팡이", "연필", "마감", "금속", "캡", "보호"],
    category: "misc",
    image: "assets/47_ferrule.png",
    hint: "우산·지팡이 끝을 보호하는 금속 또는 고무 마감 캡"
  },
  {
    id: 48,
    name: "지퍼 풀 / 풀 탭",
    official: "지퍼 풀 탭 (Zipper Pull Tab / Pull Loop)",
    description: "지퍼 끝이나 의류·가방 태그에 달린, 손으로 당겨 여닫는 작은 고리입니다.\n\n두꺼운 장갑을 끼고 있을 때도 쉽게 조작할 수 있도록 크게 만들기도 합니다. 재킷의 지퍼, 가방의 지퍼 등 생활 곳곳에서 찾아볼 수 있습니다.",
    tags: ["지퍼", "가방", "옷", "당기기", "고리", "패션", "야외"],
    category: "misc",
    image: "assets/48_Pull loops.png",
    hint: "지퍼를 여닫기 위해 손으로 당기는 작은 고리"
  },
  {
    id: 49,
    name: "슬라이드 버클",
    official: "슬라이드 버클 (Slide Buckle / Tri-Glide)",
    description: "가방이나 배낭 스트랩, 멜빵 등의 길이를 조절하는 금속 또는 플라스틱 걸쇠입니다.\n\n사각형 테두리 안에 가로대가 하나 있어 끈을 꿰어 길이를 무단계로 조절할 수 있습니다. 군용 장비, 배낭, 벨트, 반려동물 목줄에도 널리 쓰입니다.",
    tags: ["가방", "배낭", "버클", "스트랩", "조절", "금속", "벨트"],
    category: "misc",
    image: "assets/49_slide buckle.png",
    hint: "가방·배낭 끈 길이를 조절하는 네모 테두리 금속 걸쇠"
  },
  {
    id: 50,
    name: "종이 심",
    official: "페이퍼 코어 (Paper Tube / Core)",
    description: "두루마리 화장지, 키친타월, 호일, 비닐 랩의 중심에 들어있는 원통 모양의 종이 심입니다.\n\n강도를 높이기 위해 얇은 종이를 나선형으로 여러 겹 감아 만듭니다. 재료가 다 떨어진 뒤에도 공예, 놀이, 씨앗 묘목 포트 등으로 재활용할 수 있습니다.",
    tags: ["화장지", "두루마리", "종이", "심", "재활용", "원통", "공예"],
    category: "kitchen",
    image: "assets/50_paper tube.png",
    hint: "두루마리 화장지 다 쓰면 남는 원통 종이 심"
  }
];

// ─────────────────────────────────────────────────────────────
// 2. STATE
// ─────────────────────────────────────────────────────────────
const state = {
  currentView: 'grid',   // 'grid' | 'stack'
  favorites: new Set(JSON.parse(localStorage.getItem('favorites') || '[]')),
  showFavoritesOnly: false,
  searchQuery: '',
  filteredItems: [...ITEMS],
  stackActiveIdx: 0,
  quizQuestions: [],
  quizCurrentIdx: 0,
  quizScore: 0,
  quizHintUsed: false,
  openDetailId: null,
};

// ─────────────────────────────────────────────────────────────
// 3. HELPERS
// ─────────────────────────────────────────────────────────────
function saveFavorites() {
  localStorage.setItem('favorites', JSON.stringify([...state.favorites]));
}

function getDisplayItems() {
  let items = ITEMS;
  if (state.showFavoritesOnly) {
    items = items.filter(it => state.favorites.has(it.id));
  }
  if (state.searchQuery) {
    const q = state.searchQuery.toLowerCase().replace(/^#/, '');
    items = items.filter(it =>
      it.name.toLowerCase().includes(q) ||
      it.official.toLowerCase().includes(q) ||
      it.tags.some(t => t.toLowerCase().includes(q)) ||
      it.description.toLowerCase().includes(q)
    );
  }
  return items;
}

function showToast(msg, duration = 2400) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.remove('hidden');
  toast.classList.add('show');
  clearTimeout(showToast._t);
  showToast._t = setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.classList.add('hidden'), 350);
  }, duration);
}

function closeAllModals() {
  document.querySelectorAll('.modal-overlay').forEach(m => m.classList.add('hidden'));
}

// ─────────────────────────────────────────────────────────────
// 4. LANDING PAGE
// ─────────────────────────────────────────────────────────────
function initLanding() {
  const enterBtn = document.getElementById('enter-btn');
  const landing  = document.getElementById('landing');
  const app      = document.getElementById('app');

  enterBtn.addEventListener('click', () => {
    landing.classList.add('fade-out');
    setTimeout(() => {
      landing.classList.add('hidden');
      app.classList.remove('hidden');
      renderGrid();
    }, 600);
  });
}

// ─────────────────────────────────────────────────────────────
// 5. GRID VIEW
// ─────────────────────────────────────────────────────────────
function renderGrid() {
  const container = document.getElementById('grid-container');
  const noResults = document.getElementById('no-results');
  const items = getDisplayItems();

  container.innerHTML = '';

  if (items.length === 0) {
    noResults.classList.remove('hidden');
    return;
  }
  noResults.classList.add('hidden');

  items.forEach((item, i) => {
    const card = document.createElement('div');
    card.className = 'grid-card';
    card.setAttribute('role', 'listitem');
    card.style.animationDelay = `${i * 0.04}s`;
    card.dataset.id = item.id;

    const img = document.createElement('img');
    img.className = 'grid-card-img';
    img.src = item.image;
    img.alt = item.name;
    img.loading = 'lazy';

    const starBtn = document.createElement('button');
    starBtn.className = 'card-star-btn' + (state.favorites.has(item.id) ? ' starred' : '');
    starBtn.innerHTML = '★';
    starBtn.setAttribute('aria-label', `${item.name} 즐겨찾기`);
    starBtn.dataset.id = item.id;

    card.appendChild(img);
    card.appendChild(starBtn);

    // Click card → open detail
    card.addEventListener('click', (e) => {
      if (e.target.closest('.card-star-btn')) return;
      openDetail(item.id);
    });

    // Star button
    starBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleFavorite(item.id, starBtn);
    });

    container.appendChild(card);
  });
}

// ─────────────────────────────────────────────────────────────
// 6. DETAIL MODAL
// ─────────────────────────────────────────────────────────────
function openDetail(id) {
  const item = ITEMS.find(it => it.id === id);
  if (!item) return;
  state.openDetailId = id;

  document.getElementById('detail-img').src = item.image;
  document.getElementById('detail-img').alt = item.name;
  document.getElementById('detail-name').textContent = item.name;
  document.getElementById('detail-official').textContent = item.official;
  document.getElementById('detail-desc').textContent = item.description;

  // Tags
  const tagsEl = document.getElementById('detail-tags');
  tagsEl.innerHTML = '';
  item.tags.forEach(tag => {
    const chip = document.createElement('button');
    chip.className = 'tag-chip';
    chip.textContent = `#${tag}`;
    chip.addEventListener('click', () => {
      closeAllModals();
      state.searchQuery = tag;
      document.getElementById('search-input').value = tag;
      filterAndRefresh();
    });
    tagsEl.appendChild(chip);
  });

  // Star state
  const starBtn = document.getElementById('detail-star-btn');
  starBtn.classList.toggle('starred', state.favorites.has(id));

  document.getElementById('detail-modal').classList.remove('hidden');
}

function initDetailModal() {
  const modal   = document.getElementById('detail-modal');
  const starBtn = document.getElementById('detail-star-btn');
  const closeBtn = document.getElementById('detail-close-btn');

  closeBtn.addEventListener('click', () => modal.classList.add('hidden'));
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.add('hidden');
  });

  starBtn.addEventListener('click', () => {
    if (!state.openDetailId) return;
    toggleFavorite(state.openDetailId, starBtn);
  });
}

// ─────────────────────────────────────────────────────────────
// 7. FAVORITES
// ─────────────────────────────────────────────────────────────
function toggleFavorite(id, btn) {
  if (state.favorites.has(id)) {
    state.favorites.delete(id);
    if (btn) btn.classList.remove('starred');
    showToast('즐겨찾기에서 제거했습니다.');
  } else {
    state.favorites.add(id);
    if (btn) btn.classList.add('starred');
    // star pop animation
    if (btn) {
      btn.style.transform = 'scale(1.4)';
      setTimeout(() => { btn.style.transform = ''; }, 250);
    }
    showToast('즐겨찾기에 추가했습니다. ⭐');
  }
  saveFavorites();

  // Sync detail modal star if open
  const detailStar = document.getElementById('detail-star-btn');
  if (detailStar && state.openDetailId === id) {
    detailStar.classList.toggle('starred', state.favorites.has(id));
  }

  // Sync grid star buttons
  document.querySelectorAll(`.card-star-btn[data-id="${id}"]`).forEach(b => {
    b.classList.toggle('starred', state.favorites.has(id));
  });

  // If in favorites view, re-render
  if (state.showFavoritesOnly) renderGrid();

  // Update stack star if active
  if (state.currentView === 'stack') {
    const activeItem = state.filteredItems[state.stackActiveIdx];
    if (activeItem && activeItem.id === id) {
      document.getElementById('stack-star-btn').classList.toggle('starred', state.favorites.has(id));
    }
  }
}

// ─────────────────────────────────────────────────────────────
// 8. SEARCH
// ─────────────────────────────────────────────────────────────
function initSearch() {
  const input     = document.getElementById('search-input');
  const clearBtn  = document.getElementById('search-clear');
  const dropdown  = document.getElementById('search-dropdown');

  input.addEventListener('input', () => {
    const q = input.value.trim();
    state.searchQuery = q;
    if (q.length > 0) {
      showSearchDropdown(q);
    } else {
      dropdown.classList.add('hidden');
    }
    filterAndRefresh();
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      input.value = '';
      state.searchQuery = '';
      dropdown.classList.add('hidden');
      filterAndRefresh();
    }
  });

  clearBtn.addEventListener('click', () => {
    input.value = '';
    state.searchQuery = '';
    dropdown.classList.add('hidden');
    filterAndRefresh();
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.search-area')) {
      dropdown.classList.add('hidden');
    }
  });
}

function showSearchDropdown(q) {
  const dropdown = document.getElementById('search-dropdown');
  const clean = q.toLowerCase().replace(/^#/, '');
  const matches = ITEMS.filter(it =>
    it.name.toLowerCase().includes(clean) ||
    it.official.toLowerCase().includes(clean) ||
    it.tags.some(t => t.toLowerCase().includes(clean))
  ).slice(0, 6);

  if (matches.length === 0) {
    dropdown.classList.add('hidden');
    return;
  }

  dropdown.innerHTML = '';
  matches.forEach(item => {
    const div = document.createElement('div');
    div.className = 'dropdown-item';
    div.innerHTML = `
      <img src="${item.image}" alt="${item.name}" loading="lazy">
      <div>
        <div class="dropdown-item-name">${item.name}</div>
        <div class="dropdown-item-sub">${item.official}</div>
      </div>`;
    div.addEventListener('click', () => {
      openDetail(item.id);
      dropdown.classList.add('hidden');
    });
    dropdown.appendChild(div);
  });

  dropdown.classList.remove('hidden');
}

function filterAndRefresh() {
  state.filteredItems = getDisplayItems();
  if (state.currentView === 'grid') {
    renderGrid();
  } else {
    state.stackActiveIdx = 0;
    renderStack();
  }
}

// ─────────────────────────────────────────────────────────────
// 9. NAV BUTTONS
// ─────────────────────────────────────────────────────────────
function initNav() {
  // Logo → go home (grid, no filters)
  document.getElementById('logo-home-btn').addEventListener('click', () => {
    state.searchQuery = '';
    state.showFavoritesOnly = false;
    document.getElementById('search-input').value = '';
    document.getElementById('search-dropdown').classList.add('hidden');
    document.getElementById('favorites-bar').classList.add('hidden');
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    setView('grid');
  });

  document.getElementById('nav-favorites').addEventListener('click', () => {
    state.showFavoritesOnly = !state.showFavoritesOnly;
    document.getElementById('favorites-bar').classList.toggle('hidden', !state.showFavoritesOnly);
    document.getElementById('nav-favorites').classList.toggle('active', state.showFavoritesOnly);
    filterAndRefresh();
  });

  document.getElementById('favorites-back-btn').addEventListener('click', () => {
    state.showFavoritesOnly = false;
    document.getElementById('favorites-bar').classList.add('hidden');
    document.getElementById('nav-favorites').classList.remove('active');
    filterAndRefresh();
  });

  document.getElementById('nav-view-toggle').addEventListener('click', () => {
    const newView = state.currentView === 'grid' ? 'stack' : 'grid';
    setView(newView);
  });

  document.getElementById('nav-register').addEventListener('click', () => {
    document.getElementById('register-modal').classList.remove('hidden');
  });

  document.getElementById('nav-quiz').addEventListener('click', () => {
    openQuiz();
  });

  document.getElementById('nav-howto').addEventListener('click', () => {
    document.getElementById('howto-modal').classList.remove('hidden');
  });
}

function setView(view) {
  state.currentView = view;
  const gridView   = document.getElementById('grid-view');
  const stackView  = document.getElementById('stack-view');
  const toggleBtn  = document.getElementById('nav-view-toggle');
  const searchArea = document.getElementById('search-area');

  if (view === 'grid') {
    gridView.classList.remove('hidden');
    stackView.classList.add('hidden');
    toggleBtn.textContent = '펼쳐보기';
    toggleBtn.classList.remove('active');
    searchArea.style.display = '';
    renderGrid();
  } else {
    gridView.classList.add('hidden');
    stackView.classList.remove('hidden');
    toggleBtn.textContent = '모아보기';
    toggleBtn.classList.add('active');
    searchArea.style.display = 'none';
    state.filteredItems = getDisplayItems();
    state.stackActiveIdx = 0;
    renderStack();
  }

  // Right red scrollbar thumb zoom is visible when view is stack
  const scrollbar = document.getElementById('stack-scrollbar');
  if (scrollbar) {
    scrollbar.classList.toggle('hidden', state.currentView !== 'stack');
  }
}

// ─────────────────────────────────────────────────────────────
// 10. STACK VIEW
// ─────────────────────────────────────────────────────────────

// Zoom state for stack view
let stackZoom = 1;

function renderStack() {
  const stage = document.getElementById('stack-stage');
  const items = state.filteredItems;
  stage.innerHTML = '';

  const emptyMsg = document.getElementById('stack-empty-msg');

  if (items.length === 0) {
    if (emptyMsg) emptyMsg.classList.remove('hidden');
    const line = document.getElementById('stack-connector-line');
    if (line) {
      line.removeAttribute('x1');
      line.removeAttribute('y1');
      line.removeAttribute('x2');
      line.removeAttribute('y2');
    }
    document.getElementById('stack-item-name').textContent = '';
    document.getElementById('stack-star-btn').style.display = 'none';
    return;
  }

  if (emptyMsg) emptyMsg.classList.add('hidden');
  document.getElementById('stack-star-btn').style.display = 'flex';
  const activeIdx = state.stackActiveIdx;

  items.forEach((item, i) => {
    const card = document.createElement('div');
    card.className = 'stack-card';
    card.dataset.idx = i;

    const img = document.createElement('img');
    img.src = item.image;
    img.alt = item.name;
    img.loading = 'lazy';
    card.appendChild(img);

    // Position relative to active
    const offset = i - activeIdx;
    positionStackCard(card, offset, i, activeIdx);

    card.addEventListener('click', () => {
      const currentOffset = i - state.stackActiveIdx;
      if (Math.abs(currentOffset) < 0.1) {
        openDetail(item.id);
      } else {
        state.stackActiveIdx = i;
        updateStack();
      }
    });

    stage.appendChild(card);
  });

  updateStackUI();
}

function positionStackCard(card, offset, idx, activeIdx) {
  // Safe zoom check
  if (isNaN(stackZoom) || stackZoom <= 0) stackZoom = 1;

  const absOffset = Math.abs(offset);
  const vw = window.innerWidth || 1024;
  const vh = window.innerHeight || 768;

  // Card sizing based on zoom
  const baseW = 280 * stackZoom;
  const baseH = 240 * stackZoom;

  // Active card position: slightly right of center
  const activeCX = vw * 0.48;
  const activeCY = vh * 0.42;

  // 3D step translations - translateX and translateZ are symmetric (1 : -1)
  const step = 85 * stackZoom;
  const tx = offset * step;
  const ty = -offset * (step * 0.65);
  const tz = -offset * step;

  let scale = stackZoom;
  let opacity = Math.max(0, 1 - absOffset * 0.08);
  let zIdx = Math.max(1, Math.round(100 - absOffset * 2));

  // Safe checks
  if (isNaN(tx) || isNaN(ty) || isNaN(tz) || isNaN(scale)) {
    card.style.cssText = `display: none;`;
    return;
  }

  const rotY = -45;

  card.style.cssText = `
    width: ${baseW}px;
    height: ${baseH}px;
    left: ${activeCX}px;
    top: ${activeCY}px;
    transform: translate(-50%, -50%) translate3d(${tx}px, ${ty}px, ${tz}px) rotateY(${rotY}deg) scale(${scale});
    z-index: ${zIdx};
    opacity: ${opacity};
    pointer-events: ${absOffset < 15 ? 'auto' : 'none'};
  `;
  card.classList.toggle('is-active', Math.round(activeIdx) === idx);
}

function updateStack(customActiveIdx) {
  const cards = document.querySelectorAll('#stack-stage .stack-card');
  const activeIdx = (customActiveIdx !== undefined) ? customActiveIdx : state.stackActiveIdx;
  cards.forEach(card => {
    const i = parseInt(card.dataset.idx);
    const offset = i - activeIdx;
    positionStackCard(card, offset, i, activeIdx);
  });
  updateStackUI(activeIdx);
}

function updateStackUI(customActiveIdx) {
  const items = state.filteredItems;
  const activeIdx = (customActiveIdx !== undefined) ? customActiveIdx : state.stackActiveIdx;
  const roundedIdx = Math.round(activeIdx);
  const activeItem = items[roundedIdx];
  if (!activeItem) return;

  // 1. Update name label
  const labelWrap = document.getElementById('stack-label-wrap');
  const labelName = document.getElementById('stack-item-name');
  labelName.textContent = `${activeItem.name}.. 뭐였지`;

  // 2. Update star button
  const starBtn = document.getElementById('stack-star-btn');
  starBtn.classList.toggle('starred', state.favorites.has(activeItem.id));

  // 3. Dynamic positioning of Star, Label, and Connector Line
  const vw = window.innerWidth || 1024;
  const vh = window.innerHeight || 768;
  const baseW = 280 * stackZoom;
  const baseH = 240 * stackZoom;
  const activeCX = vw * 0.48;
  const activeCY = vh * 0.42;

  // Calculate 2D position for the focused card (using roundedIdx vs activeIdx diff)
  const val = roundedIdx - activeIdx;
  
  // 3D step projections - matching the layout translation and perspective d=1200
  const step = 85 * stackZoom;
  const tx = val * step;
  const ty = -val * (step * 0.65);
  const tz = -val * step;
  
  const d = 1200;
  const proj = d / (d - tz);
  
  let cx = activeCX + tx * proj;
  let cy = activeCY + ty * proj;
  let scale = stackZoom * proj;

  if (isNaN(cx) || isNaN(cy) || isNaN(scale)) {
    cx = activeCX;
    cy = activeCY;
    scale = stackZoom;
  }

  // A. Position Star Button: top-center of the card in 2D space
  const starX = cx - 10 * scale; 
  const starY = cy - (baseH * scale) / 2;
  starBtn.style.left = `${starX}px`;
  starBtn.style.top = `${starY}px`;
  starBtn.style.transform = `translate(-50%, -50%) scale(${scale})`;

  // B. Position Label and line
  // Line start point: bottom center of the active card
  const startX = cx + 15 * scale;
  const startY = cy + (baseH * scale) / 2 - 10 * scale;

  // Label end point: lower right
  const textX = cx + 180 * scale;
  const textY = cy + 130 * scale;

  // Render SVG Line
  const line = document.getElementById('stack-connector-line');
  if (line) {
    line.setAttribute('x1', startX);
    line.setAttribute('y1', startY);
    line.setAttribute('x2', textX);
    line.setAttribute('y2', textY);
  }

  // Position label-wrap and rotate it to match the line angle
  if (labelWrap) {
    const dx = textX - startX;
    const dy = textY - startY;
    const angle = Math.atan2(dy, dx) * 180 / Math.PI;

    labelWrap.style.left = `${textX}px`;
    labelWrap.style.top = `${textY}px`;
    labelWrap.style.transform = `rotate(${angle}deg) translateY(-110%)`;
  }

  // 4. Update scrollbar thumb position (based on zoom)
  const zoomRatio = (stackZoom - 0.3) / 2.2; // 0.3~2.5 range -> 0~1
  const thumb = document.getElementById('stack-scroll-thumb');
  const isDragging = thumb.classList.contains('dragging');
  if (!isDragging) {
    thumb.style.top = `${(1 - zoomRatio) * 100}%`;
  }
}

function initStackView() {
  // Mouse wheel navigation through cards
  let wheelLock = false;
  document.getElementById('stack-view').addEventListener('wheel', (e) => {
    e.preventDefault();
    if (wheelLock) return;
    wheelLock = true;
    setTimeout(() => { wheelLock = false; }, 300);

    const items = state.filteredItems;
    if (e.deltaY > 0) {
      state.stackActiveIdx = Math.min(state.stackActiveIdx + 1, items.length - 1);
    } else {
      state.stackActiveIdx = Math.max(state.stackActiveIdx - 1, 0);
    }
    updateStack();
  }, { passive: false });

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (state.currentView !== 'stack') return;
    if (document.querySelector('.modal-overlay:not(.hidden)')) return;
    const items = state.filteredItems;
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      state.stackActiveIdx = Math.min(state.stackActiveIdx + 1, items.length - 1);
      updateStack();
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      state.stackActiveIdx = Math.max(state.stackActiveIdx - 1, 0);
      updateStack();
    }
  });

  // Drag navigation on stage
  const stageEl = document.getElementById('stack-view');
  const stageContainer = document.getElementById('stack-stage');
  let dragStartX = 0;
  let isDragging = false;
  let dragStartIdx = 0;

  const startDrag = (clientX) => {
    isDragging = true;
    dragStartX = clientX;
    dragStartIdx = state.stackActiveIdx;
    stageContainer.classList.add('dragging');
    stageEl.style.cursor = 'grabbing';
  };

  const moveDrag = (clientX) => {
    if (!isDragging) return;
    const dx = clientX - dragStartX;
    const dragOffset = -dx / 180;
    let targetIdx = dragStartIdx + dragOffset;
    const items = state.filteredItems;
    targetIdx = Math.max(0, Math.min(items.length - 1, targetIdx));
    updateStack(targetIdx);
  };

  const endDrag = () => {
    if (!isDragging) return;
    isDragging = false;
    stageContainer.classList.remove('dragging');
    stageEl.style.cursor = '';
    updateStack();
  };

  // Mouse events
  stageEl.addEventListener('mousedown', (e) => {
    if (e.target.closest('.stack-scrollbar') || e.target.closest('.stack-star-btn') ||
        e.target.closest('.stack-search-wrap') || e.target.closest('.nav-btn')) return;
    startDrag(e.clientX);
  });

  document.addEventListener('mousemove', (e) => {
    if (isDragging) {
      moveDrag(e.clientX);
    }
  });

  document.addEventListener('mouseup', () => {
    if (isDragging) {
      const cards = document.querySelectorAll('#stack-stage .stack-card');
      let minAbsOffset = Infinity;
      let closestIdx = state.stackActiveIdx;
      cards.forEach(card => {
        const idx = parseInt(card.dataset.idx);
        const rect = card.getBoundingClientRect();
        const cardCX = rect.left + rect.width / 2;
        const vw = window.innerWidth;
        const distFromCenter = Math.abs(cardCX - vw * 0.48);
        if (distFromCenter < minAbsOffset) {
          minAbsOffset = distFromCenter;
          closestIdx = idx;
        }
      });
      state.stackActiveIdx = closestIdx;
      endDrag();
    }
  });

  // Touch events for mobile compatibility
  stageEl.addEventListener('touchstart', (e) => {
    if (e.target.closest('.stack-scrollbar') || e.target.closest('.stack-star-btn') ||
        e.target.closest('.stack-search-wrap') || e.target.closest('.nav-btn')) return;
    startDrag(e.touches[0].clientX);
  });

  document.addEventListener('touchmove', (e) => {
    if (isDragging) {
      moveDrag(e.touches[0].clientX);
    }
  }, { passive: true });

  document.addEventListener('touchend', () => {
    if (isDragging) {
      const cards = document.querySelectorAll('#stack-stage .stack-card');
      let minAbsOffset = Infinity;
      let closestIdx = state.stackActiveIdx;
      cards.forEach(card => {
        const idx = parseInt(card.dataset.idx);
        const rect = card.getBoundingClientRect();
        const cardCX = rect.left + rect.width / 2;
        const vw = window.innerWidth;
        const distFromCenter = Math.abs(cardCX - vw * 0.48);
        if (distFromCenter < minAbsOffset) {
          minAbsOffset = distFromCenter;
          closestIdx = idx;
        }
      });
      state.stackActiveIdx = closestIdx;
      endDrag();
    }
  });

  // Stack star button
  document.getElementById('stack-star-btn').addEventListener('click', () => {
    const activeItem = state.filteredItems[state.stackActiveIdx];
    if (!activeItem) return;
    toggleFavorite(activeItem.id, document.getElementById('stack-star-btn'));
  });

  // Scrollbar thumb drag → zoom control (0.3 ~ 2.5)
  const thumb = document.getElementById('stack-scroll-thumb');
  const track = thumb.closest('.stack-scroll-track');
  let zoomDragging = false;

  const startZoomDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    zoomDragging = true;
    thumb.classList.add('dragging');
  };

  const moveZoomDrag = (clientY) => {
    if (!zoomDragging) return;
    const trackRect = track.getBoundingClientRect();
    const trackHeight = trackRect.height || 100;
    const ratio = Math.max(0, Math.min(1, (clientY - trackRect.top) / trackHeight));
    stackZoom = 0.3 + (1 - ratio) * 2.2;
    if (isNaN(stackZoom)) stackZoom = 1;
    thumb.style.top = `${ratio * 100}%`;
    updateStack();
  };

  const endZoomDrag = () => {
    if (zoomDragging) {
      zoomDragging = false;
      thumb.classList.remove('dragging');
      updateStack();
    }
  };

  // Mouse zoom events
  thumb.addEventListener('mousedown', startZoomDrag);
  document.addEventListener('mousemove', (e) => {
    if (zoomDragging) {
      moveZoomDrag(e.clientY);
    }
  });
  document.addEventListener('mouseup', endZoomDrag);

  // Touch zoom events
  thumb.addEventListener('touchstart', startZoomDrag);
  document.addEventListener('touchmove', (e) => {
    if (zoomDragging) {
      moveZoomDrag(e.touches[0].clientY);
    }
  }, { passive: false });
  document.addEventListener('touchend', endZoomDrag);
}


// ─────────────────────────────────────────────────────────────
// 11. REGISTER MODAL
// ─────────────────────────────────────────────────────────────
function initRegisterModal() {
  const modal    = document.getElementById('register-modal');
  const closeBtn = document.getElementById('register-close-btn');
  const dropzone = document.getElementById('upload-dropzone');
  const fileInput = document.getElementById('upload-file');
  const submitBtn = document.getElementById('register-submit-btn');

  closeBtn.addEventListener('click', () => modal.classList.add('hidden'));
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.add('hidden');
  });

  // File upload
  dropzone.addEventListener('click', () => fileInput.click());
  dropzone.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') fileInput.click(); });

  dropzone.addEventListener('dragover', (e) => { e.preventDefault(); dropzone.classList.add('drag-over'); });
  dropzone.addEventListener('dragleave', () => dropzone.classList.remove('drag-over'));
  dropzone.addEventListener('drop', (e) => {
    e.preventDefault();
    dropzone.classList.remove('drag-over');
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) handleFilePreview(file);
  });

  fileInput.addEventListener('change', () => {
    const file = fileInput.files[0];
    if (file) handleFilePreview(file);
  });

  function handleFilePreview(file) {
    const reader = new FileReader();
    reader.onload = (ev) => {
      const label = document.getElementById('upload-label');
      const existingPreview = dropzone.querySelector('#upload-preview');
      if (existingPreview) existingPreview.remove();
      const preview = document.createElement('img');
      preview.id = 'upload-preview';
      preview.src = ev.target.result;
      dropzone.insertBefore(preview, label);
      label.textContent = file.name;
    };
    reader.readAsDataURL(file);
  }

  submitBtn.addEventListener('click', () => {
    const common   = document.getElementById('reg-common').value.trim();
    const official = document.getElementById('reg-official').value.trim();
    const desc     = document.getElementById('reg-desc').value.trim();
    if (!common) {
      showToast('익숙한 이름을 입력해 주세요.');
      return;
    }
    modal.classList.add('hidden');
    showToast(`"${common}" 제보가 등록되었습니다! 감사합니다 😊`);
    document.getElementById('reg-common').value = '';
    document.getElementById('reg-official').value = '';
    document.getElementById('reg-desc').value = '';
    fileInput.value = '';
    const existingPreview = dropzone.querySelector('#upload-preview');
    if (existingPreview) existingPreview.remove();
    document.getElementById('upload-label').textContent = '클릭하여 이미지 파일을 올리거나 드래그해 주세요.';
  });
}

// ─────────────────────────────────────────────────────────────
// 12. HOW TO USE MODAL
// ─────────────────────────────────────────────────────────────
function initHowtoModal() {
  const modal    = document.getElementById('howto-modal');
  const closeBtn = document.getElementById('howto-close-btn');
  closeBtn.addEventListener('click', () => modal.classList.add('hidden'));
  modal.addEventListener('click', (e) => { if (e.target === modal) modal.classList.add('hidden'); });
}

// ─────────────────────────────────────────────────────────────
// 13. QUIZ
// ─────────────────────────────────────────────────────────────
function openQuiz() {
  document.getElementById('quiz-modal').classList.remove('hidden');
  showQuizScreen('start');
}

function showQuizScreen(name) {
  document.querySelectorAll('.quiz-screen').forEach(s => {
    s.classList.remove('active-screen');
    s.style.display = 'none';
  });
  // Remove any feedback overlay
  document.querySelectorAll('.quiz-feedback-overlay').forEach(el => el.remove());

  const screenId = name === 'start' ? 'quiz-start-screen'
                 : name === 'play'  ? 'quiz-play-screen'
                 : 'quiz-result-screen';
  const screen = document.getElementById(screenId);
  screen.classList.add('active-screen');
  screen.style.display = 'flex';
}

function generateQuizQuestions() {
  // Pick 10 random unique items
  const pool = [...ITEMS];
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return pool.slice(0, 10);
}

function loadQuizQuestion() {
  const q = state.quizQuestions[state.quizCurrentIdx];
  if (!q) return;

  state.quizHintUsed = false;
  document.getElementById('quiz-img').src = q.image;
  document.getElementById('quiz-img').alt = '???';
  document.getElementById('quiz-question-marks').textContent = '???';
  document.getElementById('quiz-input').value = '';
  document.getElementById('quiz-hint-text').textContent = '';
  document.getElementById('quiz-hint-text').classList.add('hidden');

  const total = state.quizQuestions.length;
  const cur   = state.quizCurrentIdx + 1;
  document.getElementById('quiz-counter').textContent = `${cur} / ${total}`;
  document.getElementById('quiz-prog-fill').style.width = `${(cur / total) * 100}%`;
  document.getElementById('quiz-score-live').textContent = `${state.quizScore}개 정답`;

  document.getElementById('quiz-input').focus();
}

function checkQuizAnswer() {
  const q      = state.quizQuestions[state.quizCurrentIdx];
  const raw    = document.getElementById('quiz-input').value.trim();
  const answer = raw.toLowerCase().replace(/\s+/g, '');
  const correct = q.name.toLowerCase().replace(/\s+/g, '');

  // Also accept parts of the name or alternative forms
  const acceptableWords = [
    correct,
    q.official.toLowerCase().replace(/\s+/g, ''),
    ...q.tags.map(t => t.toLowerCase().replace(/\s+/g, ''))
  ];

  const isCorrect = answer.length > 0 && acceptableWords.some(w => {
    // Partial match: answer is at least 2 chars and matches a portion
    return w.includes(answer) || answer.includes(w.substring(0, Math.max(2, Math.floor(w.length * 0.6))));
  });

  if (isCorrect) state.quizScore++;

  // Show feedback overlay
  showQuizFeedback(isCorrect, q.name, raw);
}

function showQuizFeedback(isCorrect, correctAnswer, userAnswer) {
  const card = document.querySelector('#quiz-play-screen');

  // Remove old feedback
  const old = card.querySelector('.quiz-feedback-overlay');
  if (old) old.remove();

  const overlay = document.createElement('div');
  overlay.className = `quiz-feedback-overlay ${isCorrect ? 'correct' : 'wrong'}`;

  overlay.innerHTML = `
    <p class="feedback-result-text ${isCorrect ? 'correct' : 'wrong'}">${isCorrect ? '정답! 🎉' : '오답...'}</p>
    <p class="feedback-answer-text">정답: <strong>${correctAnswer}</strong></p>
    ${!isCorrect && userAnswer ? `<p class="feedback-answer-text" style="color:var(--color-gray-mid)">내 답: ${userAnswer}</p>` : ''}
    <button class="quiz-next-btn" id="quiz-next-btn">${
      state.quizCurrentIdx + 1 >= state.quizQuestions.length ? '결과 보기 →' : '다음 →'
    }</button>
  `;

  card.style.position = 'relative';
  card.appendChild(overlay);

  document.getElementById('quiz-next-btn').addEventListener('click', advanceQuiz);
}

function advanceQuiz() {
  state.quizCurrentIdx++;
  if (state.quizCurrentIdx >= state.quizQuestions.length) {
    showQuizResult();
  } else {
    showQuizScreen('play');
    loadQuizQuestion();
  }
}

function showQuizResult() {
  showQuizScreen('result');
  const score = state.quizScore;
  const total = state.quizQuestions.length;
  document.getElementById('result-score-text').textContent = `${score} / ${total} 개 맞췄습니다!`;

  let comment = '';
  if (score === total)        comment = '완벽합니다! 사물 박사 🏆';
  else if (score >= total*0.8) comment = '훌륭해요! 거의 다 알고 계시네요 😊';
  else if (score >= total*0.5) comment = '절반 이상! 조금만 더 공부해봐요 📚';
  else if (score >= total*0.3) comment = '아직 많이 낯선 사물들이 있군요 😅';
  else                         comment = '괜찮아요! 이 사이트가 도움이 될 거에요 💪';
  document.getElementById('result-comment-text').textContent = comment;

  launchConfetti();
}

function initQuizModal() {
  const modal    = document.getElementById('quiz-modal');
  const closeBtn = document.getElementById('quiz-close-btn');

  closeBtn.addEventListener('click', () => modal.classList.add('hidden'));
  modal.addEventListener('click', (e) => { if (e.target === modal) modal.classList.add('hidden'); });

  // Start button
  document.getElementById('quiz-start-btn').addEventListener('click', () => {
    state.quizQuestions = generateQuizQuestions();
    state.quizCurrentIdx = 0;
    state.quizScore = 0;
    showQuizScreen('play');
    loadQuizQuestion();
  });

  // Submit answer
  document.getElementById('quiz-submit-btn').addEventListener('click', checkQuizAnswer);
  document.getElementById('quiz-input').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') checkQuizAnswer();
  });

  // Hint button
  document.getElementById('quiz-hint-btn').addEventListener('click', () => {
    const q = state.quizQuestions[state.quizCurrentIdx];
    if (!q) return;
    const hintEl = document.getElementById('quiz-hint-text');
    hintEl.textContent = `힌트: ${q.hint}`;
    hintEl.classList.remove('hidden');
    state.quizHintUsed = true;
  });

  // Retry
  document.getElementById('quiz-retry-btn').addEventListener('click', () => {
    state.quizQuestions = generateQuizQuestions();
    state.quizCurrentIdx = 0;
    state.quizScore = 0;
    showQuizScreen('play');
    loadQuizQuestion();
  });
}

// ─────────────────────────────────────────────────────────────
// 14. CONFETTI ANIMATION
// ─────────────────────────────────────────────────────────────
function launchConfetti() {
  const canvas = document.getElementById('confetti-canvas');
  const ctx    = canvas.getContext('2d');

  // Size canvas
  const parent = canvas.parentElement;
  canvas.width  = parent.offsetWidth  || 800;
  canvas.height = parent.offsetHeight || 500;

  const colors = ['#e85d5d','#f6c644','#4ecdc4','#5ab552','#9b59b6','#e67e22','#e91e63','#00bcd4'];
  const pieces = Array.from({ length: 90 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height * -0.5,
    w: 8 + Math.random() * 14,
    h: 4 + Math.random() * 8,
    color: colors[Math.floor(Math.random() * colors.length)],
    rot: Math.random() * Math.PI * 2,
    dRot: (Math.random() - 0.5) * 0.16,
    vy: 2.5 + Math.random() * 3.5,
    vx: (Math.random() - 0.5) * 2.5,
  }));

  let frame = 0;
  const maxFrames = 220;

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pieces.forEach(p => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      ctx.restore();

      p.y   += p.vy;
      p.x   += p.vx;
      p.rot += p.dRot;
      if (p.y > canvas.height + 20) {
        p.y = -20;
        p.x = Math.random() * canvas.width;
      }
    });

    frame++;
    if (frame < maxFrames) requestAnimationFrame(draw);
    else ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  draw();
}

// ─────────────────────────────────────────────────────────────
// 15. KEYBOARD SHORTCUT — ESC closes modals
// ─────────────────────────────────────────────────────────────
function initKeyboardShortcuts() {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const openModal = document.querySelector('.modal-overlay:not(.hidden)');
      if (openModal) openModal.classList.add('hidden');
    }
  });
}

// ─────────────────────────────────────────────────────────────
// 16. INIT
// ─────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initLanding();
  initDetailModal();
  initSearch();
  initNav();
  initStackView();
  initRegisterModal();
  initHowtoModal();
  initQuizModal();
  initKeyboardShortcuts();

  // Redraw stack view responsively on window resize
  window.addEventListener('resize', () => {
    if (state.currentView === 'stack') {
      updateStack();
    }
  });
});
