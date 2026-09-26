// CET-4 科学词根全能终端 - 3137 核心高频全阶词典 (高配极简存储版)
if (typeof window === "undefined") { var window = global; }

// =========================================================================
// 0. 自动平滑继承并多源安全融合用户的历史五盒进度与艾宾浩斯复习数据
// =========================================================================
if (typeof window !== "undefined" && typeof localStorage !== "undefined") {
  try {
    var candidateKeys = [
      "morpho_stats_all_2800",
      "morpho_stats_all_2257",
      "morpho_stats_all_3137",
      "morpho_stats_all_3000",
      "morpho_stats_all_3271",
      "morpho_stats_all_3535",
      "morpho_stats_all_3720",
      "morpho_stats_all_4061",
      "morpho_stats_all_4050"
    ];

    var mergedStats = null;

    for (var i = 0; i < candidateKeys.length; i++) {
      var raw = localStorage.getItem(candidateKeys[i]);
      if (!raw || raw.length <= 2) continue;
      try {
        var parsed = JSON.parse(raw);
        if (parsed && typeof parsed === "object" && Object.keys(parsed).length > 0) {
          if (!mergedStats) {
            mergedStats = {};
          }
          for (var w in parsed) {
            if (!parsed.hasOwnProperty(w)) continue;
            var st = parsed[w];
            if (!st || typeof st !== "object") continue;
            if (!mergedStats[w]) {
              mergedStats[w] = Object.assign({}, st);
            } else {
              var cur = mergedStats[w];
              var curTime = cur.lastReviewed || 0;
              var newTime = st.lastReviewed || 0;
              if (newTime >= curTime) {
                mergedStats[w] = Object.assign({}, cur, st, {
                  box: Math.max(cur.box || 1, st.box || 1),
                  tested: Math.max(cur.tested || 0, st.tested || 0),
                  mistakes: Math.max(cur.mistakes || 0, st.mistakes || 0),
                  streak: Math.max(cur.streak || 0, st.streak || 0),
                  masteryScore: Math.max(cur.masteryScore || 35, st.masteryScore || 35)
                });
              } else {
                cur.box = Math.max(cur.box || 1, st.box || 1);
                cur.tested = Math.max(cur.tested || 0, st.tested || 0);
                cur.mistakes = Math.max(cur.mistakes || 0, st.mistakes || 0);
                cur.streak = Math.max(cur.streak || 0, st.streak || 0);
                cur.masteryScore = Math.max(cur.masteryScore || 35, st.masteryScore || 35);
              }
            }
          }
        }
      } catch (_) {}
    }

    if (mergedStats && Object.keys(mergedStats).length > 0) {
      var jsonStr = JSON.stringify(mergedStats);
      localStorage.setItem("morpho_stats_all_2257", jsonStr);
      localStorage.setItem("morpho_stats_all_2800", jsonStr);
    }

    // 释放冗余超大历史副本，给浏览器腾出宝贵存储配额
    localStorage.removeItem("morpho_stats_all_4061");
    localStorage.removeItem("morpho_stats_all_4050");
    localStorage.removeItem("morpho_stats_all_3720");
    localStorage.removeItem("morpho_stats_all_3535");
    localStorage.removeItem("morpho_stats_all_3271");
    localStorage.removeItem("morpho_stats_all_3137");
    localStorage.removeItem("morpho_stats_all_3000");
  } catch (e) {}
}

// =========================================================================
// 1. 全量唯一真实数据源 (Single Source of Truth) - 3137 核心高频词典常驻内存
// =========================================================================
(typeof window !== "undefined" ? window : global).WORDS_DATA = [
  {
    "word": "accept",
    "phonetic": "/əkˈsept/",
    "pos": "vt./vi.",
    "meaning": "接受， 领受； 同意， 认可",
    "part": "第一部分：超级核心母词族",
    "group": "【1. cap / capt / cept / ceiv / cip 抓/拿/容纳/理解】",
    "analysis_type": "构词",
    "analysis": "ac-（去） + cept（拿取） -> 伸手拿过来 -> 接受，领受。",
    "antonyms": [
      {
        "target": "reject",
        "pos": "vt.",
        "for_sense": "接受",
        "usage": "contrast",
        "in_pack": false
      },
      {
        "target": "refuse",
        "pos": "vt.",
        "for_sense": "接受",
        "usage": "contrast",
        "in_pack": true
      }
    ]
  },
  {
    "word": "acceptable",
    "phonetic": "/əkˈseptəbl/",
    "pos": "adj.",
    "meaning": "可接受的， 合意的",
    "part": "第一部分：超级核心母词族",
    "group": "【1. cap / capt / cept / ceiv / cip 抓/拿/容纳/理解】",
    "analysis_type": "构词",
    "analysis": "ac-（去） + cept（拿取） + -able（可…的） -> 可接纳的 -> 可接受的，合意的。",
    "antonyms": [
      {
        "target": "unacceptable",
        "pos": "adj.",
        "for_sense": "可接受的",
        "usage": "contrast",
        "in_pack": false
      }
    ]
  },
  {
    "word": "anticipate",
    "phonetic": "/ænˈtɪsɪpeɪt/",
    "pos": "vt.",
    "meaning": "预料， 预期； 期望",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "anti-（在前） + cip-（拿取） + -ate（动词后缀） -> 预料，预期。"
  },
  {
    "word": "capable",
    "phonetic": "/ˈkeɪpəbl/",
    "pos": "adj.",
    "meaning": "有能力的， 有才能的（of）",
    "part": "第一部分：超级核心母词族",
    "group": "【1. cap / capt / cept / ceiv / cip 抓/拿/容纳/理解】",
    "analysis_type": "构词",
    "analysis": "cap（容纳） + -able（能…的） -> 装得下、抓得住的 -> 有能力的，有才能的（of）。",
    "antonyms": [
      {
        "target": "unable",
        "pos": "adj.",
        "for_sense": "有能力的",
        "usage": "contrast",
        "in_pack": true
      }
    ]
  },
  {
    "word": "capacity",
    "phonetic": "/kəˈpæsəti/",
    "pos": "n.",
    "meaning": "容量， 容积； 才能， 能力； 身份",
    "part": "第一部分：超级核心母词族",
    "group": "【1. cap / capt / cept / ceiv / cip 抓/拿/容纳/理解】",
    "analysis_type": "构词",
    "analysis": "cap（容纳） + -acity（名词后缀） -> 容纳的能力 -> 容量，容积。"
  },
  {
    "word": "cape",
    "phonetic": "/keɪp/",
    "pos": "n.",
    "meaning": "海角； 披肩， 斗篷",
    "part": "第一部分：超级核心母词族",
    "group": "【1. cap / capt / cept / ceiv / cip 抓/拿/容纳/理解】",
    "analysis_type": "构词",
    "analysis": "词根 caput（头） -> 陆地伸向海洋的头部凸起 -> 海角。"
  },
  {
    "word": "capital",
    "phonetic": "/ˈkæpɪtl/",
    "pos": "n./adj.",
    "meaning": "n. 资本，资金，资产；首都，首府；大写字母 adj. 资本的；死刑的",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "capit-（头） + -al（形容词） -> 资本，资金。"
  },
  {
    "word": "captain",
    "phonetic": "/ˈkæptɪn/",
    "pos": "n.",
    "meaning": "队长； 船长， 机长； 上尉",
    "part": "第一部分：超级核心母词族",
    "group": "【1. cap / capt / cept / ceiv / cip 抓/拿/容纳/理解】",
    "analysis_type": "构词",
    "analysis": "capit-（头） + -ain（人） -> 领头人 -> 队长。"
  },
  {
    "word": "capture",
    "phonetic": "/ˈkæptʃə(r)/",
    "pos": "vt./n.",
    "meaning": "vt. 俘获， 捕获； 记录 n. 捕获",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "capt-（抓） + -ure（名词） -> 设网牢牢控制 -> 俘获。"
  },
  {
    "word": "conceive",
    "phonetic": "/kənˈsiːv/",
    "pos": "vt./vi.",
    "meaning": "vt./vi. 构想， 设想； 怀孕",
    "part": "第一部分：超级核心母词族",
    "group": "【1. cap / capt / cept / ceiv / cip 抓/拿/容纳/理解】",
    "analysis_type": "构词",
    "analysis": "con-（共同） + ceiv-（抓取） -> 头脑捕捉构思 -> / 构想， 设想。",
    "synonyms": [
      {
        "target": "devise",
        "pos": "vt.",
        "for_sense": "设想",
        "usage": "upgrade",
        "in_pack": true,
        "nuance": "在心中严密构架方案"
      }
    ]
  },
  {
    "word": "concept",
    "phonetic": "/ˈkɒnsept/",
    "pos": "n.",
    "meaning": "概念， 观念， 思想",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "con-（共同） + cept（拿取） -> 概念，观念。"
  },
  {
    "word": "conception",
    "phonetic": "/kənˈsepʃn/",
    "pos": "n.",
    "meaning": "构想， 设想； 受孕， 怀孕",
    "part": "第一部分：超级核心母词族",
    "group": "【1. cap / capt / cept / ceiv / cip 抓/拿/容纳/理解】",
    "analysis_type": "构词",
    "analysis": "con-（共同） + cept（抓取） + -ion（名词后缀） -> 在脑中形成的概念 -> 构想，设想。"
  },
  {
    "word": "deceive",
    "phonetic": "/dɪˈsiːv/",
    "pos": "vt./vi.",
    "meaning": "欺骗， 蒙骗",
    "part": "第一部分：超级核心母词族",
    "group": "【1. cap / capt / cept / ceiv / cip 抓/拿/容纳/理解】",
    "analysis_type": "构词",
    "analysis": "de-（偏离） + ceiv（拿取） -> 暗中设套抓取、引人走偏 -> 欺骗，蒙骗。"
  },
  {
    "word": "exceptional",
    "phonetic": "/ɪkˈsepʃənl/",
    "pos": "adj.",
    "meaning": "杰出的， 卓越的； 例外的",
    "part": "第一部分：超级核心母词族",
    "group": "【1. cap / capt / cept / ceiv / cip 抓/拿/容纳/理解】",
    "analysis_type": "构词",
    "analysis": "ex-（向外） + cept（拿取） + -ion + -al，合起来即被挑出来的、除外的 -> 杰出的，卓越的。",
    "synonyms": [
      {
        "target": "extraordinary",
        "pos": "adj.",
        "for_sense": "卓越的",
        "usage": "upgrade",
        "in_pack": true,
        "nuance": "凌驾于庸碌水平之上"
      },
      {
        "target": "outstanding",
        "pos": "adj.",
        "for_sense": "杰出的",
        "usage": "upgrade",
        "in_pack": false,
        "nuance": "傲立群雄引人注目"
      }
    ]
  },
  {
    "word": "intake",
    "phonetic": "/ˈɪnteɪk/",
    "pos": "n.",
    "meaning": "摄入量， 吸入； 入口",
    "part": "第一部分：超级核心母词族",
    "group": "【1. cap / capt / cept / ceiv / cip 抓/拿/容纳/理解】",
    "analysis_type": "构词",
    "analysis": "in-（向内） + take（拿取） -> 吸入、拿进体内 -> 摄入量，吸入。",
    "antonyms": [
      {
        "target": "output",
        "pos": "n.",
        "for_sense": "摄入量",
        "usage": "contrast",
        "in_pack": true
      }
    ]
  },
  {
    "word": "participate",
    "phonetic": "/pɑːˈtɪsɪpeɪt/",
    "pos": "vi.",
    "meaning": "参与， 参加（in）",
    "part": "第一部分：超级核心母词族",
    "group": "【1. cap / capt / cept / ceiv / cip 抓/拿/容纳/理解】",
    "analysis_type": "构词",
    "analysis": "part-（部分） + i + cip（拿取） + -ate（动词后缀） -> 参与，参加（in）。"
  },
  {
    "word": "perceive",
    "phonetic": "/pəˈsiːv/",
    "pos": "vt.",
    "meaning": "视为， 认为， 理解为； 察觉， 感知",
    "part": "第一部分：超级核心母词族",
    "group": "【1. cap / capt / cept / ceiv / cip 抓/拿/容纳/理解】",
    "analysis_type": "构词",
    "analysis": "per-（彻底） + ceiv（抓取） -> 通过感官彻底抓住信息 -> 视为，认为。",
    "synonyms": [
      {
        "target": "regard",
        "pos": "vt.",
        "for_sense": "视为",
        "usage": "paraphrase",
        "in_pack": false,
        "nuance": "主观定位看待"
      },
      {
        "target": "notice",
        "pos": "vt.",
        "for_sense": "察觉",
        "usage": "paraphrase",
        "in_pack": true,
        "nuance": "五官敏锐捕捉到"
      },
      {
        "target": "comprehend",
        "pos": "vt.",
        "for_sense": "理解",
        "usage": "upgrade",
        "in_pack": false,
        "nuance": "深刻洞悉内涵"
      }
    ]
  },
  {
    "word": "prince",
    "phonetic": "/prɪns/",
    "pos": "n.",
    "meaning": "王子， 亲王",
    "part": "第一部分：超级核心母词族",
    "group": "【1. cap / capt / cept / ceiv / cip 抓/拿/容纳/理解】",
    "analysis_type": "构词",
    "analysis": "prin-（第一） + c（i） -> p（掌握） -> 王子，亲王。"
  },
  {
    "word": "princess",
    "phonetic": "/ˌprɪnˈses/",
    "pos": "n.",
    "meaning": "公主， 王妃",
    "part": "第一部分：超级核心母词族",
    "group": "【1. cap / capt / cept / ceiv / cip 抓/拿/容纳/理解】",
    "analysis_type": "构词",
    "analysis": "prince（王子） + -ess（阴性后缀） -> 公主，王妃。"
  },
  {
    "word": "principal",
    "phonetic": "/ˈprɪnsəpl/",
    "pos": "adj./n.",
    "meaning": "adj. 主要的， 首要的 n. 校长； 本金",
    "part": "第一部分：超级核心母词族",
    "group": "【1. cap / capt / cept / ceiv / cip 抓/拿/容纳/理解】",
    "analysis_type": "构词",
    "analysis": "prin-（第一） + cip（掌握） + -al（人） -> 排在首位的管理者 -> 主要的。",
    "synonyms": [
      {
        "target": "primary",
        "pos": "adj.",
        "for_sense": "主要的",
        "usage": "paraphrase",
        "in_pack": true,
        "nuance": "排在第一位的"
      },
      {
        "target": "chief",
        "pos": "adj.",
        "for_sense": "主要的",
        "usage": "paraphrase",
        "in_pack": false,
        "nuance": "首领核心"
      }
    ]
  },
  {
    "word": "principle",
    "phonetic": "/ˈprɪnsəpl/",
    "pos": "n.",
    "meaning": "原则， 原理； 道义",
    "part": "第一部分：超级核心母词族",
    "group": "【1. cap / capt / cept / ceiv / cip 抓/拿/容纳/理解】",
    "analysis_type": "构词",
    "analysis": "prin-（第一） + cip（掌握） + -le（法则） -> 最初的根本准则 -> 原则，原理。"
  },
  {
    "word": "receipt",
    "phonetic": "/rɪˈsiːt/",
    "pos": "n.",
    "meaning": "收据， 发票； 收到",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "re-（回） + ceipt（拿取） -> 收据，发票。"
  },
  {
    "word": "reception",
    "phonetic": "/rɪˈsepʃn/",
    "pos": "n.",
    "meaning": "接待处， 服务台； 欢迎会； 接收效果",
    "part": "第一部分：超级核心母词族",
    "group": "【1. cap / capt / cept / ceiv / cip 抓/拿/容纳/理解】",
    "analysis_type": "构词",
    "analysis": "re-（回） + cept（拿取） + -ion（名词后缀） -> 接纳、接待的举动 -> 接待处，服务台。"
  },
  {
    "word": "receptionist",
    "phonetic": "/rɪˈsepʃənɪst/",
    "pos": "n.",
    "meaning": "接待员",
    "part": "第一部分：超级核心母词族",
    "group": "【1. cap / capt / cept / ceiv / cip 抓/拿/容纳/理解】",
    "analysis_type": "构词",
    "analysis": "reception（接待） + -ist（人） -> 负责接待的人 -> 接待员。"
  },
  {
    "word": "receptive",
    "phonetic": "/rɪˈseptɪv/",
    "pos": "adj.",
    "meaning": "乐于接受的， 虚心的",
    "part": "第一部分：超级核心母词族",
    "group": "【1. cap / capt / cept / ceiv / cip 抓/拿/容纳/理解】",
    "analysis_type": "构词",
    "analysis": "re-（接） + cept（拿取） + -ive（形容词后缀） -> 乐于接纳的 -> 乐于接受的，虚心的。"
  },
  {
    "word": "recipient",
    "phonetic": "/rɪˈsɪpiənt/",
    "pos": "n./adj.",
    "meaning": "n. 接受者， 收件人 adj. 接受的",
    "part": "第一部分：超级核心母词族",
    "group": "【1. cap / capt / cept / ceiv / cip 抓/拿/容纳/理解】",
    "analysis_type": "构词",
    "analysis": "re-（接） + cip（拿取） + -ient（名词后缀） -> 接收物品的人 -> 接受者。"
  },
  {
    "word": "susceptible",
    "phonetic": "/səˈseptəbl/",
    "pos": "adj.",
    "meaning": "易受影响的， 过敏的",
    "part": "第二部分：高频专业词根族",
    "group": "【41. 核心词根 1：cap / capt / cept / cip（抓/拿/取）】",
    "analysis_type": "构词",
    "analysis": "sub-（在…之下） + cept（拿取） + -ible（易…的） -> 易受影响的，过敏的。"
  },
  {
    "word": "affect",
    "phonetic": "/əˈfekt/",
    "pos": "vt.",
    "meaning": "影响； 感动； 侵袭",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、医疗生理与情绪心理】",
    "analysis_type": "构词",
    "analysis": "af-（ad- 朝向） + fect（做） -> 影响。"
  },
  {
    "word": "affection",
    "phonetic": "/əˈfekʃn/",
    "pos": "n.",
    "meaning": "喜爱， 感情， 钟爱",
    "part": "第一部分：超级核心母词族",
    "group": "【2. fac / fact / fect / fic / ficient 做/制作/产生】",
    "analysis_type": "构词",
    "analysis": "af-（朝向） + fect（打动） + -ion（名词后缀） -> 内心被打动的情感 -> 喜爱，感情。"
  },
  {
    "word": "artificial",
    "phonetic": "/ˌɑːtɪˈfɪʃl/",
    "pos": "adj.",
    "meaning": "人工的， 人造的； 虚伪的",
    "part": "第一部分：超级核心母词族",
    "group": "【2. fac / fact / fect / fic / ficient 做/制作/产生】",
    "analysis_type": "构词",
    "analysis": "arti-（技巧） + fic（制作） + -ial（的） -> 人工制作出来的 -> 人工的，人造的。"
  },
  {
    "word": "defect",
    "phonetic": "/ˈdiːfekt/",
    "pos": "n./vi.",
    "meaning": "n. 缺点， 缺陷 vi. 叛变， 脱离",
    "part": "第一部分：超级核心母词族",
    "group": "【2. fac / fact / fect / fic / ficient 做/制作/产生】",
    "analysis_type": "构词",
    "analysis": "de-（偏离） + fect（做） -> 做得不全、有缺失 -> 缺点。",
    "antonyms": [
      {
        "target": "perfection",
        "pos": "n.",
        "for_sense": "缺陷",
        "usage": "contrast",
        "in_pack": true
      }
    ]
  },
  {
    "word": "defective",
    "phonetic": "/dɪˈfektɪv/",
    "pos": "adj.",
    "meaning": "有缺陷的， 有瑕疵的",
    "part": "第一部分：超级核心母词族",
    "group": "【2. fac / fact / fect / fic / ficient 做/制作/产生】",
    "analysis_type": "构词",
    "analysis": "defect（缺陷） + -ive（形容词后缀） -> 有瑕疵的 -> 有缺陷的，有瑕疵的。"
  },
  {
    "word": "deficient",
    "phonetic": "/dɪˈfɪʃnt/",
    "pos": "adj.",
    "meaning": "不足的， 缺乏的； 有缺陷的",
    "part": "第一部分：超级核心母词族",
    "group": "【2. fac / fact / fect / fic / ficient 做/制作/产生】",
    "analysis_type": "构词",
    "analysis": "de-（离开） + fic（做） + -ient（形容词后缀） -> 未做足的 -> 不足的，缺乏的。",
    "antonyms": [
      {
        "target": "sufficient",
        "pos": "adj.",
        "for_sense": "不足的",
        "usage": "contrast",
        "in_pack": true
      }
    ]
  },
  {
    "word": "deficit",
    "phonetic": "/ˈdefɪsɪt/",
    "pos": "n.",
    "meaning": "赤字， 亏损， 不足额",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "de-（缺少） + fic-（做） + -it（第三人称单数） -> “尚欠缺、做得不够” -> 赤字，亏损。"
  },
  {
    "word": "effect",
    "phonetic": "/ɪˈfekt/",
    "pos": "n./vt.",
    "meaning": "效果， 影响 vt. 产生， 招致",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "ef-（ex- 向外） + fect（做成） -> 效果，影响。"
  },
  {
    "word": "effective",
    "phonetic": "/ɪˈfektɪv/",
    "pos": "adj.",
    "meaning": "有效的， 起作用的； 实际的",
    "part": "第一部分：超级核心母词族",
    "group": "【2. fac / fact / fect / fic / ficient 做/制作/产生】",
    "analysis_type": "构词",
    "analysis": "effect（效果） + -ive（形容词后缀） -> 产生实际效果的 -> 有效的，起作用的。",
    "antonyms": [
      {
        "target": "ineffective",
        "pos": "adj.",
        "for_sense": "有效的",
        "usage": "contrast",
        "in_pack": false
      }
    ]
  },
  {
    "word": "efficiency",
    "phonetic": "/ɪˈfɪʃnsi/",
    "pos": "n.",
    "meaning": "效率， 功效； 效能",
    "part": "第一部分：超级核心母词族",
    "group": "【2. fac / fact / fect / fic / ficient 做/制作/产生】",
    "analysis_type": "构词",
    "analysis": "ef-（出） + fic（做） + -iency（名词后缀） -> 做成产出的能力 -> 效率，功效。"
  },
  {
    "word": "efficient",
    "phonetic": "/ɪˈfɪʃnt/",
    "pos": "adj.",
    "meaning": "效率高的， 有能力的",
    "part": "第一部分：超级核心母词族",
    "group": "【2. fac / fact / fect / fic / ficient 做/制作/产生】",
    "analysis_type": "构词",
    "analysis": "ef-（出） + fic（做） + -ient（形容词后缀） -> 产出效率高的 -> 效率高的，有能力的。",
    "antonyms": [
      {
        "target": "inefficient",
        "pos": "adj.",
        "for_sense": "高效率的",
        "usage": "contrast",
        "in_pack": false
      }
    ]
  },
  {
    "word": "facility",
    "phonetic": "/fəˈsɪləti/",
    "pos": "n.",
    "meaning": "设施，设备；便利；熟练，熟巧",
    "part": "第一部分：超级核心母词族",
    "group": "【2. fac / fact / fect / fic / ficient 做/制作/产生】",
    "analysis_type": "构词",
    "analysis": "facil-（容易做） + -ity -> 使运作变便利的工具条件 -> 设施，设备。"
  },
  {
    "word": "factor",
    "phonetic": "/ˈfæktə(r)/",
    "pos": "n.",
    "meaning": "因素， 要素； 因数",
    "part": "第一部分：超级核心母词族",
    "group": "【2. fac / fact / fect / fic / ficient 做/制作/产生】",
    "analysis_type": "构词",
    "analysis": "fact（做） + -or（要素） -> 促成结果产生的要素 -> 因素，要素。"
  },
  {
    "word": "factory",
    "phonetic": "/ˈfæktri/",
    "pos": "n.",
    "meaning": "工厂， 制造厂",
    "part": "第一部分：超级核心母词族",
    "group": "【2. fac / fact / fect / fic / ficient 做/制作/产生】",
    "analysis_type": "构词",
    "analysis": "fact（制作） + -ory（场所） -> 制造物品的场所 -> 工厂，制造厂。"
  },
  {
    "word": "faculty",
    "phonetic": "/ˈfæklti/",
    "pos": "n.",
    "meaning": "全体教职员；能力，才能；学院，系",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "fac-（做/才能） + -ulty -> 具备专业学识才能的师资群体 -> 全体教职员。"
  },
  {
    "word": "feasible",
    "phonetic": "/ˈfiːzəbl/",
    "pos": "adj.",
    "meaning": "可行的， 行得通的",
    "part": "第一部分：超级核心母词族",
    "group": "【2. fac / fact / fect / fic / ficient 做/制作/产生】",
    "analysis_type": "构词",
    "analysis": "feas-（做） + -ible（可…的） -> 可做出来的 -> 可行的，行得通的。"
  },
  {
    "word": "feature",
    "phonetic": "/ˈfiːtʃə(r)/",
    "pos": "n./vt.",
    "meaning": "特征，特色；特写；面貌，vt.",
    "part": "第一部分：超级核心母词族",
    "group": "【2. fac / fact / fect / fic / ficient 做/制作/产生】",
    "analysis_type": "构词",
    "analysis": "feat-（制作） + -ure（名词后缀） -> 特征，特色。"
  },
  {
    "word": "infect",
    "phonetic": "/ɪnˈfekt/",
    "pos": "vt.",
    "meaning": "传染， 感染； 使受影响",
    "part": "第一部分：超级核心母词族",
    "group": "【2. fac / fact / fect / fic / ficient 做/制作/产生】",
    "analysis_type": "构词",
    "analysis": "in-（向内） + fect（做） -> 把病菌做进体内 -> 传染，感染。"
  },
  {
    "word": "infection",
    "phonetic": "/ɪnˈfekʃn/",
    "pos": "n.",
    "meaning": "感染， 传染病",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、医疗生理与情绪心理】",
    "analysis_type": "构词",
    "analysis": "in-（进入） + fect-（做） + -ion（名词后缀） -> 感染，传染病。"
  },
  {
    "word": "infectious",
    "phonetic": "/ɪnˈfekʃəs/",
    "pos": "adj.",
    "meaning": "传染性的； 有感染力的",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、医疗生理与情绪心理】",
    "analysis_type": "构词",
    "analysis": "infect（感染） + -ious（形容词后缀） -> 传染性的。"
  },
  {
    "word": "manufacture",
    "phonetic": "/ˌmænjuˈfæktʃə(r)/",
    "pos": "vt./n.",
    "meaning": "vt. 大量制造， 生产 n. 制造； 产品",
    "part": "第一部分：超级核心母词族",
    "group": "【2. fac / fact / fect / fic / ficient 做/制作/产生】",
    "analysis_type": "构词",
    "analysis": "manu-（手） + fact（制造） + -ure（名词） -> 工业制造 -> 大量制造。",
    "synonyms": [
      {
        "target": "produce",
        "pos": "vt.",
        "for_sense": "工业制造",
        "usage": "upgrade",
        "in_pack": true,
        "nuance": "流水线规模化制造"
      }
    ]
  },
  {
    "word": "perfect",
    "phonetic": "/ˈpɜːfɪkt/",
    "pos": "adj./vt.",
    "meaning": "adj. 完美的， 极佳的 vt. 使完善",
    "part": "第一部分：超级核心母词族",
    "group": "【2. fac / fact / fect / fic / ficient 做/制作/产生】",
    "analysis_type": "构词",
    "analysis": "per-（彻底） + fect（做） -> 彻底做完、无懈可击 -> 完美的。"
  },
  {
    "word": "perfection",
    "phonetic": "/pəˈfekʃn/",
    "pos": "n.",
    "meaning": "完美， 完善",
    "part": "第一部分：超级核心母词族",
    "group": "【2. fac / fact / fect / fic / ficient 做/制作/产生】",
    "analysis_type": "构词",
    "analysis": "perfect（完美） + -ion（名词后缀） -> 完美的状态 -> 完美，完善。",
    "antonyms": [
      {
        "target": "defect",
        "pos": "n.",
        "for_sense": "完美",
        "usage": "contrast",
        "in_pack": true
      }
    ]
  },
  {
    "word": "proficient",
    "phonetic": "/prəˈfɪʃnt/",
    "pos": "adj.",
    "meaning": "熟练的， 精通的",
    "part": "第一部分：超级核心母词族",
    "group": "【2. fac / fact / fect / fic / ficient 做/制作/产生】",
    "analysis_type": "构词",
    "analysis": "pro-（向前） + fic（做） + -ient（形容词后缀） -> 做得遥遥领先的 -> 熟练的，精通的。"
  },
  {
    "word": "sacrifice",
    "phonetic": "/ˈsækrɪfaɪs/",
    "pos": "vt./n.",
    "meaning": "vt. 牺牲， 献出； 献祭 n. 牺牲； 祭品",
    "part": "第一部分：超级核心母词族",
    "group": "【2. fac / fact / fect / fic / ficient 做/制作/产生】",
    "analysis_type": "构词",
    "analysis": "sacri-（神圣） + fic（做） + -e，合起来即向神明做献祭奉献 -> 牺牲。"
  },
  {
    "word": "sufficient",
    "phonetic": "/səˈfɪʃnt/",
    "pos": "adj.",
    "meaning": "足够的， 充分的",
    "part": "第一部分：超级核心母词族",
    "group": "【2. fac / fact / fect / fic / ficient 做/制作/产生】",
    "analysis_type": "构词",
    "analysis": "suf-（自下而上达到） + fic（做） + -ient（的） -> 足够的，充分的。",
    "antonyms": [
      {
        "target": "deficient",
        "pos": "adj.",
        "for_sense": "足够的",
        "usage": "contrast",
        "in_pack": true
      }
    ],
    "synonyms": [
      {
        "target": "adequate",
        "pos": "adj.",
        "for_sense": "足够的",
        "usage": "paraphrase",
        "in_pack": true,
        "nuance": "刚够及格标准线"
      }
    ]
  },
  {
    "word": "assist",
    "phonetic": "/əˈsɪst/",
    "pos": "vt./vi.",
    "meaning": "帮助， 协助",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "as-（ad- 去） + sist（站立） -> 帮助，协助。"
  },
  {
    "word": "bystander",
    "phonetic": "/ˈbaɪstændə(r)/",
    "pos": "n.",
    "meaning": "旁观者",
    "part": "第一部分：超级核心母词族",
    "group": "【3. sta / stat / stit / sist 站立/确立/安置/固定】",
    "analysis_type": "构词",
    "analysis": "by（在旁边） + stand（站立） + -er（人） -> 站在旁边袖手旁观的人 -> 旁观者。"
  },
  {
    "word": "consist",
    "phonetic": "/kənˈsɪst/",
    "pos": "vi.",
    "meaning": "由…组成（of）； 在于（in）",
    "part": "第一部分：超级核心母词族",
    "group": "【3. sta / stat / stit / sist 站立/确立/安置/固定】",
    "analysis_type": "构词",
    "analysis": "con-（共同） + sist（站立） -> 站在一起组合构成 -> 由…组成（of）。"
  },
  {
    "word": "consistent",
    "phonetic": "/kənˈsɪstənt/",
    "pos": "adj.",
    "meaning": "一致的， 连贯的； 坚持的",
    "part": "第一部分：超级核心母词族",
    "group": "【3. sta / stat / stit / sist 站立/确立/安置/固定】",
    "analysis_type": "构词",
    "analysis": "con-（共同） + sist（站立） + -ent（形容词后缀） -> 一致的，连贯的。",
    "antonyms": [
      {
        "target": "inconsistent",
        "pos": "adj.",
        "for_sense": "一致的",
        "usage": "contrast",
        "in_pack": false
      }
    ]
  },
  {
    "word": "constant",
    "phonetic": "/ˈkɒnstənt/",
    "pos": "adj./n.",
    "meaning": "adj. 不断的； 恒定的 n. 常数， 恒量",
    "part": "第一部分：超级核心母词族",
    "group": "【3. sta / stat / stit / sist 站立/确立/安置/固定】",
    "analysis_type": "构词",
    "analysis": "con-（加强） + stant（站立） -> 一直稳稳立在那里的 -> 不断的。",
    "synonyms": [
      {
        "target": "permanent",
        "pos": "adj.",
        "for_sense": "持续的",
        "usage": "paraphrase",
        "in_pack": false,
        "nuance": "始终如一长久不变"
      }
    ]
  },
  {
    "word": "constitute",
    "phonetic": "/ˈkɒnstɪtjuːt/",
    "pos": "vt.",
    "meaning": "构成， 组成； 设立， 制定",
    "part": "第一部分：超级核心母词族",
    "group": "【3. sta / stat / stit / sist 站立/确立/安置/固定】",
    "analysis_type": "构词",
    "analysis": "con-（共同） + stitute（确立） -> 共同立起来构成整体 -> 构成，组成。"
  },
  {
    "word": "constitution",
    "phonetic": "/ˌkɒnstɪˈtjuːʃn/",
    "pos": "n.",
    "meaning": "宪法； 构造， 体质",
    "part": "第一部分：超级核心母词族",
    "group": "【3. sta / stat / stit / sist 站立/确立/安置/固定】",
    "analysis_type": "构词",
    "analysis": "constitute（构成） + -ion（名词后缀） -> 宪法。"
  },
  {
    "word": "distant",
    "phonetic": "/ˈdɪstənt/",
    "pos": "adj.",
    "meaning": "遥远的， 远处的； 冷淡的",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "dis-（分离） + st-（站立） + -ant（形容词后缀） -> 遥远的，远处的。"
  },
  {
    "word": "establish",
    "phonetic": "/ɪˈstæblɪʃ/",
    "pos": "vt.",
    "meaning": "建立， 确立； 证实",
    "part": "第一部分：超级核心母词族",
    "group": "【3. sta / stat / stit / sist 站立/确立/安置/固定】",
    "analysis_type": "构词",
    "analysis": "e- / ex- + stabl-（使稳固站立） + -ish（动词后缀） -> 建立，确立。"
  },
  {
    "word": "establishment",
    "phonetic": "/ɪˈstæblɪʃmənt/",
    "pos": "n.",
    "meaning": "建立， 设立； 确立的机构； 当权派",
    "part": "第一部分：超级核心母词族",
    "group": "【3. sta / stat / stit / sist 站立/确立/安置/固定】",
    "analysis_type": "构词",
    "analysis": "establish（建立） + -ment（名词后缀） -> 建立的过程或已确立的机构 -> 建立，设立。"
  },
  {
    "word": "existence",
    "phonetic": "/ɪɡˈzɪstəns/",
    "pos": "n.",
    "meaning": "存在， 实在； 生存， 生活",
    "part": "第一部分：超级核心母词族",
    "group": "【3. sta / stat / stit / sist 站立/确立/安置/固定】",
    "analysis_type": "构词",
    "analysis": "ex-（向外） + sist（站立） + -ence（名词后缀） -> 存在，实在。"
  },
  {
    "word": "insist",
    "phonetic": "/ɪnˈsɪst/",
    "pos": "vi./vt.",
    "meaning": "坚持， 坚决主张（on）",
    "part": "第一部分：超级核心母词族",
    "group": "【3. sta / stat / stit / sist 站立/确立/安置/固定】",
    "analysis_type": "构词",
    "analysis": "in-（在其中） + sist（站立） -> 针对某事站定不退缩 -> 坚持，坚决主张（on）。"
  },
  {
    "word": "instant",
    "phonetic": "/ˈɪnstənt/",
    "pos": "n./adj.",
    "meaning": "立即的； 速溶的； 瞬间， 刹那",
    "part": "第一部分：超级核心母词族",
    "group": "【3. sta / stat / stit / sist 站立/确立/安置/固定】",
    "analysis_type": "构词",
    "analysis": "in-（逼近） + stant（站立） -> 就站在眼前的紧迫时刻 -> 立即的。"
  },
  {
    "word": "instantaneous",
    "phonetic": "/ˌɪnstənˈteɪniəs/",
    "pos": "adj.",
    "meaning": "瞬间的， 即时的",
    "part": "第一部分：超级核心母词族",
    "group": "【3. sta / stat / stit / sist 站立/确立/安置/固定】",
    "analysis_type": "构词",
    "analysis": "instant（瞬间） + -aneous（形容词后缀） -> 一瞬间发生的 -> 瞬间的，即时的。"
  },
  {
    "word": "institute",
    "phonetic": "/ˈɪnstɪtjuːt/",
    "pos": "n./vt.",
    "meaning": "研究所， 学院 vt. 创立",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "in-（建立在…上） + stitut-（确立） -> 研究所，学院。"
  },
  {
    "word": "institution",
    "phonetic": "/ˌɪnstɪˈtjuːʃn/",
    "pos": "n.",
    "meaning": "机构， 学校； 制度",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "institute（建立机构） + -ion（名词后缀） -> 机构，学校。"
  },
  {
    "word": "persist",
    "phonetic": "/pəˈsɪst/",
    "pos": "vi.",
    "meaning": "坚持不懈， 执意； 持续存在",
    "part": "第一部分：超级核心母词族",
    "group": "【3. sta / stat / stit / sist 站立/确立/安置/固定】",
    "analysis_type": "构词",
    "analysis": "per-（始终） + sist（站立） -> 从头到尾一直站定到底 -> 坚持不懈，执意。",
    "synonyms": [
      {
        "target": "endure",
        "pos": "vi.",
        "for_sense": "持续存在",
        "usage": "paraphrase",
        "in_pack": true,
        "nuance": "从头到尾挺到最后"
      }
    ]
  },
  {
    "word": "persistent",
    "phonetic": "/pəˈsɪstənt/",
    "pos": "adj.",
    "meaning": "坚持不懈的， 持续的",
    "part": "第一部分：超级核心母词族",
    "group": "【3. sta / stat / stit / sist 站立/确立/安置/固定】",
    "analysis_type": "构词",
    "analysis": "persist（坚持） + -ent（形容词后缀） -> 坚持到底的 -> 坚持不懈的，持续的。"
  },
  {
    "word": "resist",
    "phonetic": "/rɪˈzɪst/",
    "pos": "vt./vi.",
    "meaning": "抵抗， 抵制； 忍住",
    "part": "第一部分：超级核心母词族",
    "group": "【3. sta / stat / stit / sist 站立/确立/安置/固定】",
    "analysis_type": "构词",
    "analysis": "re-（反向） + sist（站立） -> 反向顶着站住不退 -> 抵抗，抵制。",
    "antonyms": [
      {
        "target": "surrender",
        "pos": "vi.",
        "for_sense": "抵抗",
        "usage": "contrast",
        "in_pack": false
      }
    ]
  },
  {
    "word": "resistance",
    "phonetic": "/rɪˈzɪstəns/",
    "pos": "n.",
    "meaning": "抵抗， 反抗； 阻力； 电阻",
    "part": "第一部分：超级核心母词族",
    "group": "【3. sta / stat / stit / sist 站立/确立/安置/固定】",
    "analysis_type": "构词",
    "analysis": "resist（抵抗） + -ance（名词后缀） -> 抗拒的力量 -> 抵抗，反抗。"
  },
  {
    "word": "stability",
    "phonetic": "/stəˈbɪləti/",
    "pos": "n.",
    "meaning": "稳定（性）， 稳固",
    "part": "第一部分：超级核心母词族",
    "group": "【3. sta / stat / stit / sist 站立/确立/安置/固定】",
    "analysis_type": "构词",
    "analysis": "stabil-（稳定的） + -ity（名词后缀） -> 站得稳的特性 -> 稳定（性），稳固。"
  },
  {
    "word": "stable",
    "phonetic": "/ˈsteɪbl/",
    "pos": "adj./n.",
    "meaning": "adj. 稳定的， 牢固的 n. 马厩",
    "part": "第一部分：超级核心母词族",
    "group": "【3. sta / stat / stit / sist 站立/确立/安置/固定】",
    "analysis_type": "构词",
    "analysis": "sta-（站立） + -able（易…的） -> 能稳稳立住的 -> 稳定的。",
    "synonyms": [
      {
        "target": "steady",
        "pos": "adj.",
        "for_sense": "稳定的",
        "usage": "paraphrase",
        "in_pack": true,
        "nuance": "步调平稳毫无起伏"
      },
      {
        "target": "firm",
        "pos": "adj.",
        "for_sense": "稳固的",
        "usage": "paraphrase",
        "in_pack": false,
        "nuance": "质地坚硬稳如磐石"
      }
    ],
    "antonyms": [
      {
        "target": "unstable",
        "pos": "adj.",
        "for_sense": "稳定的",
        "usage": "contrast",
        "in_pack": false
      }
    ]
  },
  {
    "word": "statistic",
    "phonetic": "/stəˈtɪstɪk/",
    "pos": "n.",
    "meaning": "统计数字， 统计资料； 统计学",
    "part": "第一部分：超级核心母词族",
    "group": "【3. sta / stat / stit / sist 站立/确立/安置/固定】",
    "analysis_type": "构词",
    "analysis": "stat-（国家状况） + -istic，合起来即对国家政务状态的数据统计 -> 统计数字，统计资料。"
  },
  {
    "word": "statue",
    "phonetic": "/ˈstætʃuː/",
    "pos": "n.",
    "meaning": "雕像， 塑像",
    "part": "第一部分：超级核心母词族",
    "group": "【3. sta / stat / stit / sist 站立/确立/安置/固定】",
    "analysis_type": "构词",
    "analysis": "stat-（立定） + -ue，合起来即立起来供人瞻仰的人像 -> 雕像，塑像。"
  },
  {
    "word": "status",
    "phonetic": "/ˈsteɪtəs/",
    "pos": "n.",
    "meaning": "地位， 身份； 状态， 情形",
    "part": "第一部分：超级核心母词族",
    "group": "【3. sta / stat / stit / sist 站立/确立/安置/固定】",
    "analysis_type": "构词",
    "analysis": "stat-（站立） + -us，合起来即人所站的社会位置或所处状态 -> 地位，身份。"
  },
  {
    "word": "statute",
    "phonetic": "/ˈstætʃuːt/",
    "pos": "n.",
    "meaning": "法规， 法令， 条例",
    "part": "第一部分：超级核心母词族",
    "group": "【3. sta / stat / stit / sist 站立/确立/安置/固定】",
    "analysis_type": "构词",
    "analysis": "stat-（立定） + -ute，合起来即国家正式确立颁布的条令 -> 法规，法令。"
  },
  {
    "word": "steady",
    "phonetic": "/ˈstedi/",
    "pos": "adj./vt.",
    "meaning": "adj. 稳定的， 稳固的 vt. 使稳定",
    "part": "第一部分：超级核心母词族",
    "group": "【3. sta / stat / stit / sist 站立/确立/安置/固定】",
    "analysis_type": "构词",
    "analysis": "stead-（站位） + -y（形容词后缀） -> 站得平稳牢固的 -> 稳定的。",
    "synonyms": [
      {
        "target": "stable",
        "pos": "adj.",
        "for_sense": "平稳的",
        "usage": "paraphrase",
        "in_pack": true,
        "nuance": "步调平稳毫无起伏"
      }
    ],
    "antonyms": [
      {
        "target": "unsteady",
        "pos": "adj.",
        "for_sense": "稳定的",
        "usage": "contrast",
        "in_pack": false
      }
    ]
  },
  {
    "word": "substance",
    "phonetic": "/ˈsʌbstəns/",
    "pos": "n.",
    "meaning": "物质， 实质； 主旨； 财产",
    "part": "第一部分：超级核心母词族",
    "group": "【3. sta / stat / stit / sist 站立/确立/安置/固定】",
    "analysis_type": "构词",
    "analysis": "sub-（在下面） + stance（站立） -> 立在表象之下的本质底子 -> 物质，实质。"
  },
  {
    "word": "substantial",
    "phonetic": "/səbˈstænʃl/",
    "pos": "adj.",
    "meaning": "大量的， 实质的； 坚固的",
    "part": "第一部分：超级核心母词族",
    "group": "【3. sta / stat / stit / sist 站立/确立/安置/固定】",
    "analysis_type": "构词",
    "analysis": "substance（实质） + -ial（形容词后缀） -> 有扎实底子的大量的 -> 大量的，实质的。",
    "antonyms": [
      {
        "target": "slight",
        "pos": "adj.",
        "for_sense": "大量的",
        "usage": "contrast",
        "in_pack": false
      }
    ]
  },
  {
    "word": "substitute",
    "phonetic": "/ˈsʌbstɪtjuːt/",
    "pos": "vt./n.",
    "meaning": "vt. 代替， 替换 n. 代替者， 代用品",
    "part": "第一部分：超级核心母词族",
    "group": "【3. sta / stat / stit / sist 站立/确立/安置/固定】",
    "analysis_type": "构词",
    "analysis": "sub-（在下方） + stitute（放置） -> 立在下方作为备用顶替 -> 代替。"
  },
  {
    "word": "superstition",
    "phonetic": "/ˌsuːpəˈstɪʃn/",
    "pos": "n.",
    "meaning": "迷信， 盲目信仰",
    "part": "第一部分：超级核心母词族",
    "group": "【3. sta / stat / stit / sist 站立/确立/安置/固定】",
    "analysis_type": "构词",
    "analysis": "super-（在上面） + stit（站立） + -ion，引申指迷信 -> 迷信，盲目信仰。"
  },
  {
    "word": "withstand",
    "phonetic": "/wɪðˈstænd/",
    "pos": "vt.",
    "meaning": "经受， 承受； 抵挡， 反抗",
    "part": "第一部分：超级核心母词族",
    "group": "【3. sta / stat / stit / sist 站立/确立/安置/固定】",
    "analysis_type": "构词",
    "analysis": "with-（反对） + stand（站立） -> 对着外力顶住站立 -> 经受，承受。"
  },
  {
    "word": "admission",
    "phonetic": "/ədˈmɪʃn/",
    "pos": "n.",
    "meaning": "准许进入； 准考费； 承认",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "ad-（朝向） + miss-（送入） + -ion（名词后缀） -> 准许进入。"
  },
  {
    "word": "admit",
    "phonetic": "/ədˈmɪt/",
    "pos": "v.",
    "meaning": "承认； 准许…进入",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "ad-（朝向） + mit（送入） -> 面对铁证不得不点头认可 -> 承认。"
  },
  {
    "word": "commission",
    "phonetic": "/kəˈmɪʃn/",
    "pos": "n./vt.",
    "meaning": "n. 委员会； 佣金 vt. 委托",
    "part": "第一部分：超级核心母词族",
    "group": "【4. mit / miss 送出/发射/委派/传达】",
    "analysis_type": "构词",
    "analysis": "com-（共同） + miss-（托付） + -ion，受托办理事务 -> 委员会。"
  },
  {
    "word": "commit",
    "phonetic": "/kəˈmɪt/",
    "pos": "vt.",
    "meaning": "承诺，致力于；犯（罪）；投入（资金/时间）",
    "part": "第一部分：超级核心母词族",
    "group": "【4. mit / miss 送出/发射/委派/传达】",
    "analysis_type": "构词",
    "analysis": "com-（完全） + mit-（托付） -> 完全交托责任与心力 -> 承诺，致力于。"
  },
  {
    "word": "commitment",
    "phonetic": "/kəˈmɪtmənt/",
    "pos": "n.",
    "meaning": "承诺， 保证； 献身， 投入",
    "part": "第一部分：超级核心母词族",
    "group": "【4. mit / miss 送出/发射/委派/传达】",
    "analysis_type": "构词",
    "analysis": "commit（承诺） + -ment（名词后缀） -> 全力托付的信诺 -> 承诺，保证。"
  },
  {
    "word": "committee",
    "phonetic": "/kəˈmɪti/",
    "pos": "n.",
    "meaning": "委员会， 全体委员",
    "part": "第一部分：超级核心母词族",
    "group": "【4. mit / miss 送出/发射/委派/传达】",
    "analysis_type": "构词",
    "analysis": "com-（共同） + mit（托付） + -ee（集体人员） -> 委员会，全体委员。"
  },
  {
    "word": "dismiss",
    "phonetic": "/dɪsˈmɪs/",
    "pos": "vt.",
    "meaning": "下课， 解散； 不予理会",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "dis-（离开） + miss（派送） -> 下课，解散。"
  },
  {
    "word": "emission",
    "phonetic": "/iˈmɪʃn/",
    "pos": "n.",
    "meaning": "排放， 散发； 排放物",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然地理、动植物与环境保护】",
    "analysis_type": "构词",
    "analysis": "e-（向外） + miss-（发出） + -ion（名词后缀） -> 排放，散发。"
  },
  {
    "word": "emit",
    "phonetic": "/iˈmɪt/",
    "pos": "vt.",
    "meaning": "发出， 发射； 放射",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "e-（向外） + mit（送出） -> 发出，发射。"
  },
  {
    "word": "missile",
    "phonetic": "/ˈmɪsaɪl/",
    "pos": "n.",
    "meaning": "导弹， 发射物； 飞镖",
    "part": "第一部分：超级核心母词族",
    "group": "【4. mit / miss 送出/发射/委派/传达】",
    "analysis_type": "构词",
    "analysis": "miss（发射） + -ile（能…的物体） -> 可远距离发射击打的武器 -> 导弹，发射物。"
  },
  {
    "word": "mission",
    "phonetic": "/ˈmɪʃn/",
    "pos": "n.",
    "meaning": "使命， 任务； 代表团",
    "part": "第一部分：超级核心母词族",
    "group": "【4. mit / miss 送出/发射/委派/传达】",
    "analysis_type": "构词",
    "analysis": "miss（派遣） + -ion（名词后缀） -> 被派遣去执行的重任 -> 使命，任务。"
  },
  {
    "word": "missionary",
    "phonetic": "/ˈmɪʃənri/",
    "pos": "n./adj.",
    "meaning": "n. 传教士 adj. 传教的",
    "part": "第一部分：超级核心母词族",
    "group": "【4. mit / miss 送出/发射/委派/传达】",
    "analysis_type": "构词",
    "analysis": "mission（传道使命） + -ary（人） -> 被派去传播信仰的人 -> 传教士。"
  },
  {
    "word": "omit",
    "phonetic": "/əˈmɪt/",
    "pos": "vt.",
    "meaning": "省略， 删去； 遗漏， 疏忽",
    "part": "第一部分：超级核心母词族",
    "group": "【4. mit / miss 送出/发射/委派/传达】",
    "analysis_type": "构词",
    "analysis": "o-（扔在一旁） + mit（送） -> 放过不理、留在外面 -> 省略，删去。"
  },
  {
    "word": "permission",
    "phonetic": "/pəˈmɪʃn/",
    "pos": "n.",
    "meaning": "允许， 许可， 同意",
    "part": "第一部分：超级核心母词族",
    "group": "【4. mit / miss 送出/发射/委派/传达】",
    "analysis_type": "构词",
    "analysis": "per-（彻底） + miss（放行） + -ion，合起来即彻底予以放行 -> 允许，许可。"
  },
  {
    "word": "permit",
    "phonetic": "/pəˈmɪt/",
    "pos": "vt./vi./n.",
    "meaning": "vt.ˈpɜːmɪt/ 许可证",
    "part": "第一部分：超级核心母词族",
    "group": "【4. mit / miss 送出/发射/委派/传达】",
    "analysis_type": "构词",
    "analysis": "per-（彻底） + mit（放行） -> 放开道路准许通过 -> vt.ˈpɜːmɪt，许可证。",
    "synonyms": [
      {
        "target": "allow",
        "pos": "vt.",
        "for_sense": "许可",
        "usage": "paraphrase",
        "in_pack": false,
        "nuance": "官方盖章放行准入"
      }
    ]
  },
  {
    "word": "submit",
    "phonetic": "/səbˈmɪt/",
    "pos": "vt./vi.",
    "meaning": "vt. 提交， 呈递 vi. 屈服， 服从（to）",
    "part": "第一部分：超级核心母词族",
    "group": "【4. mit / miss 送出/发射/委派/传达】",
    "analysis_type": "构词",
    "analysis": "sub-（在下方） + mit（送上） -> 自下而上呈递文件 -> 提交。",
    "synonyms": [
      {
        "target": "yield",
        "pos": "vi.",
        "for_sense": "服从",
        "usage": "paraphrase",
        "in_pack": true,
        "nuance": "低下头颅表示臣服"
      }
    ]
  },
  {
    "word": "transmit",
    "phonetic": "/trænzˈmɪt/",
    "pos": "vt.",
    "meaning": "传送， 传递； 传播（疾病）； 发射信号",
    "part": "第一部分：超级核心母词族",
    "group": "【4. mit / miss 送出/发射/委派/传达】",
    "analysis_type": "构词",
    "analysis": "trans-（跨越） + mit（传送） -> 传送，传递。"
  },
  {
    "word": "component",
    "phonetic": "/kəmˈpəʊnənt/",
    "pos": "n./adj.",
    "meaning": "n. 组成部分， 成分 adj. 组成的",
    "part": "第一部分：超级核心母词族",
    "group": "【5. pon / pos / posit 放置/摆设/立定】",
    "analysis_type": "构词",
    "analysis": "com-（共同） + pon（放置） + -ent（成分） -> 组成部分。"
  },
  {
    "word": "compose",
    "phonetic": "/kəmˈpəʊz/",
    "pos": "vt.",
    "meaning": "vt. 组成， 构成； 创作； 使平静",
    "part": "第一部分：超级核心母词族",
    "group": "【5. pon / pos / posit 放置/摆设/立定】",
    "analysis_type": "构词",
    "analysis": "com-（共同） + pos-（放置） -> 把要素组合在一起 -> 组成。"
  },
  {
    "word": "composition",
    "phonetic": "/ˌkɒmpəˈzɪʃn/",
    "pos": "n.",
    "meaning": "作文； 成分； 创作； 构图",
    "part": "第一部分：超级核心母词族",
    "group": "【5. pon / pos / posit 放置/摆设/立定】",
    "analysis_type": "构词",
    "analysis": "compose（组合创作） + -ition（名词后缀） -> 组织创作出的产物 -> 作文。"
  },
  {
    "word": "compound",
    "phonetic": "/ˈkɒmpaʊnd/",
    "pos": "n./adj./vt.",
    "meaning": "使加重， 使恶化； 复合物， 化合物； 复合的",
    "part": "第一部分：超级核心母词族",
    "group": "【5. pon / pos / posit 放置/摆设/立定】",
    "analysis_type": "构词",
    "analysis": "com-（共同） + pound（放置） -> 放在一起混合的复合体 -> 使加重，使恶化。"
  },
  {
    "word": "deposit",
    "phonetic": "/dɪˈpɒzɪt/",
    "pos": "vt./n.",
    "meaning": "存入； 付定金 n. 存款",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "de-（向下） + posit（放置） -> 或江河泥沙沉淀 -> 存入。"
  },
  {
    "word": "disposal",
    "phonetic": "/dɪˈspəʊzl/",
    "pos": "n.",
    "meaning": "处置， 处理； 支配， 使用； 丢弃",
    "part": "第一部分：超级核心母词族",
    "group": "【5. pon / pos / posit 放置/摆设/立定】",
    "analysis_type": "构词",
    "analysis": "dispose（处置） + -al（名词后缀） -> 处理丢弃的行为 -> 处置，处理。"
  },
  {
    "word": "dispose",
    "phonetic": "/dɪˈspəʊz/",
    "pos": "vi./vt.",
    "meaning": "vi. 处理， 处置（of） vt. 布置； 使倾向于",
    "part": "第一部分：超级核心母词族",
    "group": "【5. pon / pos / posit 放置/摆设/立定】",
    "analysis_type": "构词",
    "analysis": "dis-（分开） + pos（摆放） -> 分门别类摆放处理好 -> 处理。"
  },
  {
    "word": "expose",
    "phonetic": "/ɪkˈspəʊz/",
    "pos": "vt.",
    "meaning": "使接触， 使面临， 使遭受； 显露； 揭露",
    "part": "第一部分：超级核心母词族",
    "group": "【5. pon / pos / posit 放置/摆设/立定】",
    "analysis_type": "构词",
    "analysis": "ex-（向外） + pos（放置） -> 放在大庭广众之下让其显现 -> 使接触，使面临。"
  },
  {
    "word": "exposure",
    "phonetic": "/ɪkˈspəʊʒə(r)/",
    "pos": "n.",
    "meaning": "接触， 面临； 暴露； 曝光； 揭发",
    "part": "第一部分：超级核心母词族",
    "group": "【5. pon / pos / posit 放置/摆设/立定】",
    "analysis_type": "构词",
    "analysis": "expose（暴露） + -ure（名词后缀） -> 露在外面的状态 -> 接触，面临。"
  },
  {
    "word": "impose",
    "phonetic": "/ɪmˈpəʊz/",
    "pos": "vt.",
    "meaning": "把…强加于（on）； 征税， 处以罚款",
    "part": "第一部分：超级核心母词族",
    "group": "【5. pon / pos / posit 放置/摆设/立定】",
    "analysis_type": "构词",
    "analysis": "im-（向内） + pos（放置） -> 强行放在别人头上承担 -> 把…强加于（on）。"
  },
  {
    "word": "opponent",
    "phonetic": "/əˈpəʊnənt/",
    "pos": "n./adj.",
    "meaning": "n. 对手， 敌手； 反对者 adj. 对立的",
    "part": "第一部分：超级核心母词族",
    "group": "【5. pon / pos / posit 放置/摆设/立定】",
    "analysis_type": "构词",
    "analysis": "op-（对着） + pon（放置） + -ent（人） -> 对手。"
  },
  {
    "word": "oppose",
    "phonetic": "/əˈpəʊz/",
    "pos": "vt.",
    "meaning": "反对， 反抗， 对抗",
    "part": "第一部分：超级核心母词族",
    "group": "【5. pon / pos / posit 放置/摆设/立定】",
    "analysis_type": "构词",
    "analysis": "op-（对着） + pos（摆放） -> 摆在对立位置硬顶 -> 反对，反抗。",
    "antonyms": [
      {
        "target": "approve",
        "pos": "vt.",
        "for_sense": "反对",
        "usage": "contrast",
        "in_pack": false
      }
    ]
  },
  {
    "word": "opposite",
    "phonetic": "/ˈɒpəzɪt/",
    "pos": "adj./prep./n.",
    "meaning": "相反的；对面的，prep.",
    "part": "第一部分：超级核心母词族",
    "group": "【5. pon / pos / posit 放置/摆设/立定】",
    "analysis_type": "构词",
    "analysis": "oppose（反对） + -ite（形容词后缀） -> 面对面正对着的 -> 相反的。"
  },
  {
    "word": "pose",
    "phonetic": "/pəʊz/",
    "pos": "vt./vi./n.",
    "meaning": "造成，引起（威胁/风险）；提出（问题）；摆姿势",
    "part": "第一部分：超级核心母词族",
    "group": "【5. pon / pos / posit 放置/摆设/立定】",
    "analysis_type": "构词",
    "analysis": "pos-（放置） -> 将困难或威胁直接摆在眼前 -> 造成，引起（威胁。"
  },
  {
    "word": "position",
    "phonetic": "/pəˈzɪʃn/",
    "pos": "n./vt.",
    "meaning": "n. 位置； 职位； 立场 vt. 安置",
    "part": "第一部分：超级核心母词族",
    "group": "【5. pon / pos / posit 放置/摆设/立定】",
    "analysis_type": "构词",
    "analysis": "posit（放置） + -ion（名词后缀） -> 位置。"
  },
  {
    "word": "positive",
    "phonetic": "/ˈpɒzətɪv/",
    "pos": "adj.",
    "meaning": "积极的， 乐观的； 肯定的； 确信的； 阳性的",
    "part": "第一部分：超级核心母词族",
    "group": "【5. pon / pos / posit 放置/摆设/立定】",
    "analysis_type": "构词",
    "analysis": "posit（立定） + -ive（形容词后缀） -> 立论确切、确定无疑的 -> 积极的，乐观的。",
    "antonyms": [
      {
        "target": "negative",
        "pos": "adj.",
        "for_sense": "积极的",
        "usage": "contrast",
        "in_pack": false
      }
    ]
  },
  {
    "word": "postage",
    "phonetic": "/ˈpəʊstɪdʒ/",
    "pos": "n.",
    "meaning": "邮费， 邮资",
    "part": "第一部分：超级核心母词族",
    "group": "【5. pon / pos / posit 放置/摆设/立定】",
    "analysis_type": "构词",
    "analysis": "post（邮局） + -age（费用） -> 邮递投送的资费 -> 邮费，邮资。"
  },
  {
    "word": "postcard",
    "phonetic": "/ˈpəʊstkɑːd/",
    "pos": "n.",
    "meaning": "明信片",
    "part": "第一部分：超级核心母词族",
    "group": "【5. pon / pos / posit 放置/摆设/立定】",
    "analysis_type": "构词",
    "analysis": "post（邮递） + card（卡片） -> 可直接邮寄的明信卡片 -> 明信片。"
  },
  {
    "word": "postman",
    "phonetic": "/ˈpəʊstmən/",
    "pos": "n.",
    "meaning": "邮递员",
    "part": "第一部分：超级核心母词族",
    "group": "【5. pon / pos / posit 放置/摆设/立定】",
    "analysis_type": "构词",
    "analysis": "post（邮政） + man（人） -> 投送邮件的人 -> 邮递员。"
  },
  {
    "word": "postpone",
    "phonetic": "/pəˈspəʊn/",
    "pos": "vt.",
    "meaning": "推迟， 延期",
    "part": "第一部分：超级核心母词族",
    "group": "【5. pon / pos / posit 放置/摆设/立定】",
    "analysis_type": "构词",
    "analysis": "post-（在后面） + pon（放置） -> 把预定事项往后挪动摆放 -> 推迟，延期。"
  },
  {
    "word": "posture",
    "phonetic": "/ˈpɒstʃə(r)/",
    "pos": "n.",
    "meaning": "姿势， 姿态； 态度",
    "part": "第一部分：超级核心母词族",
    "group": "【5. pon / pos / posit 放置/摆设/立定】",
    "analysis_type": "构词",
    "analysis": "pos-（放置） + -ture（名词后缀） -> 身体放置摆出的姿态 -> 姿势，姿态。"
  },
  {
    "word": "proposal",
    "phonetic": "/prəˈpəʊzl/",
    "pos": "n.",
    "meaning": "提议， 建议； 求婚",
    "part": "第一部分：超级核心母词族",
    "group": "【5. pon / pos / posit 放置/摆设/立定】",
    "analysis_type": "构词",
    "analysis": "propose（提议） + -al（名词后缀） -> 摆在台面上的建议 -> 提议，建议。"
  },
  {
    "word": "propose",
    "phonetic": "/prəˈpəʊz/",
    "pos": "vt./vi.",
    "meaning": "vt. 提议， 建议； 打算 vi. 求婚",
    "part": "第一部分：超级核心母词族",
    "group": "【5. pon / pos / posit 放置/摆设/立定】",
    "analysis_type": "构词",
    "analysis": "pro-（向前） + pos（放置） -> 把想法推到前面供大家考量 -> 提议。"
  },
  {
    "word": "abstract",
    "phonetic": "/ˈæbstrækt/",
    "pos": "adj./n./vt.",
    "meaning": "adj. 抽象的 n. 摘要 vt. 提炼， 抽取",
    "part": "第一部分：超级核心母词族",
    "group": "【6. tract / treat 拉/拖/抽取/牵引】",
    "analysis_type": "构词",
    "analysis": "abs-（离开） + tract（抽取） -> 抽象的。",
    "antonyms": [
      {
        "target": "concrete",
        "pos": "adj.",
        "for_sense": "抽象的",
        "usage": "contrast",
        "in_pack": false
      }
    ]
  },
  {
    "word": "attract",
    "phonetic": "/əˈtrækt/",
    "pos": "vt.",
    "meaning": "吸引， 引起…的注意",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "at-（ad- 朝向） + tract（拉拽） -> 吸引，引起…的注意。"
  },
  {
    "word": "attraction",
    "phonetic": "/əˈtrækʃn/",
    "pos": "n.",
    "meaning": "吸引力； 有吸引力的事物",
    "part": "第一部分：超级核心母词族",
    "group": "【6. tract / treat 拉/拖/抽取/牵引】",
    "analysis_type": "构词",
    "analysis": "attract（吸引） + -ion（名词后缀） -> 牵引目光的事物或引力 -> 吸引力。"
  },
  {
    "word": "attractive",
    "phonetic": "/əˈtræktɪv/",
    "pos": "adj.",
    "meaning": "有吸引力的， 诱人的",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "attract（吸引） + -ive（形容词后缀） -> 有吸引力的，诱人的。"
  },
  {
    "word": "contract",
    "phonetic": "/ˈkɒntrækt/",
    "pos": "n./vt./vi.",
    "meaning": "合同，契约；收缩，缩减；感染（疾病）",
    "part": "第一部分：超级核心母词族",
    "group": "【6. tract / treat 拉/拖/抽取/牵引】",
    "analysis_type": "构词",
    "analysis": "con-（共同） + tract-（拉） -> 双方拉拢约束在一起的书面凭据 -> 合同，契约。",
    "antonyms": [
      {
        "target": "expand",
        "pos": "vi.",
        "for_sense": "收缩",
        "usage": "contrast",
        "in_pack": false
      }
    ],
    "synonyms": [
      {
        "target": "shrink",
        "pos": "vi.",
        "for_sense": "收缩",
        "usage": "paraphrase",
        "in_pack": false,
        "nuance": "体积规模萎缩"
      },
      {
        "target": "diminish",
        "pos": "vi.",
        "for_sense": "收缩",
        "usage": "paraphrase",
        "in_pack": false,
        "nuance": "程度减弱"
      },
      {
        "target": "agreement",
        "pos": "n.",
        "for_sense": "合同",
        "usage": "paraphrase",
        "in_pack": false,
        "nuance": "法律契约凭据"
      }
    ]
  },
  {
    "word": "distract",
    "phonetic": "/dɪˈstrækt/",
    "pos": "vt.",
    "meaning": "分散（注意力）， 使分心",
    "part": "第一部分：超级核心母词族",
    "group": "【6. tract / treat 拉/拖/抽取/牵引】",
    "analysis_type": "构词",
    "analysis": "dis-（分开） + tract（拉） -> 分散（注意力），使分心。"
  },
  {
    "word": "distraction",
    "phonetic": "/dɪˈstrækʃn/",
    "pos": "n.",
    "meaning": "分心， 分散注意力的事物",
    "part": "第一部分：超级核心母词族",
    "group": "【6. tract / treat 拉/拖/抽取/牵引】",
    "analysis_type": "构词",
    "analysis": "distract（分心） + -ion（名词后缀） -> 分散注意力的事物 -> 分心，分散注意力的事物。"
  },
  {
    "word": "extract",
    "phonetic": "/ɪkˈstrækt/",
    "pos": "vt./n.",
    "meaning": "vt. 提取， 拔出； 摘录 n. 提取物； 摘录",
    "part": "第一部分：超级核心母词族",
    "group": "【6. tract / treat 拉/拖/抽取/牵引】",
    "analysis_type": "构词",
    "analysis": "ex-（向外） + tract（抽取） -> 从原本内部拔出抽取出来 -> 提取。"
  },
  {
    "word": "retreat",
    "phonetic": "/rɪˈtriːt/",
    "pos": "vi./n.",
    "meaning": "撤退， 退避； 退缩",
    "part": "第一部分：超级核心母词族",
    "group": "【6. tract / treat 拉/拖/抽取/牵引】",
    "analysis_type": "构词",
    "analysis": "re-（往回） + treat（拉） -> 把阵线往后回拉撤退 -> 撤退，退避。",
    "antonyms": [
      {
        "target": "advance",
        "pos": "vi.",
        "for_sense": "撤退",
        "usage": "contrast",
        "in_pack": false
      }
    ]
  },
  {
    "word": "subtract",
    "phonetic": "/səbˈtrækt/",
    "pos": "vt.",
    "meaning": "减去， 扣除",
    "part": "第一部分：超级核心母词族",
    "group": "【6. tract / treat 拉/拖/抽取/牵引】",
    "analysis_type": "构词",
    "analysis": "sub-（在下方） + tract（拉走） -> 从总数里往下拉走扣除 -> 减去，扣除。"
  },
  {
    "word": "trace",
    "phonetic": "/treɪs/",
    "pos": "vt./n.",
    "meaning": "vt. 追踪， 追溯 n. 痕迹， 踪迹； 微量",
    "part": "第一部分：超级核心母词族",
    "group": "【6. tract / treat 拉/拖/抽取/牵引】",
    "analysis_type": "构词",
    "analysis": "词根 tract-（拉出线条） -> 拖曳拉出来的痕迹 -> 追踪。"
  },
  {
    "word": "track",
    "phonetic": "/træk/",
    "pos": "n./vt.",
    "meaning": "n. 跑道； 轨道； 足迹 vt. 跟踪， 追踪",
    "part": "第一部分：超级核心母词族",
    "group": "【6. tract / treat 拉/拖/抽取/牵引】",
    "analysis_type": "构词",
    "analysis": "源自拉车拖拽留下的车辙压痕 -> 跑道。"
  },
  {
    "word": "tractor",
    "phonetic": "/ˈtræktə(r)/",
    "pos": "n.",
    "meaning": "拖拉机， 牵引车",
    "part": "第一部分：超级核心母词族",
    "group": "【6. tract / treat 拉/拖/抽取/牵引】",
    "analysis_type": "构词",
    "analysis": "tract（拉） + -or（机器） -> 专门负责牵引重物的机器 -> 拖拉机，牵引车。"
  },
  {
    "word": "trail",
    "phonetic": "/treɪl/",
    "pos": "n./vt./vi.",
    "meaning": "n. 痕迹， 小径 vt./vi. 追踪， 拉拽",
    "part": "第一部分：超级核心母词族",
    "group": "【6. tract / treat 拉/拖/抽取/牵引】",
    "analysis_type": "构词",
    "analysis": "拉拽拖行形成的林间小迹 -> 痕迹。"
  },
  {
    "word": "treaty",
    "phonetic": "/ˈtriːti/",
    "pos": "n.",
    "meaning": "条约， 协定",
    "part": "第一部分：超级核心母词族",
    "group": "【6. tract / treat 拉/拖/抽取/牵引】",
    "analysis_type": "构词",
    "analysis": "源自 tractare（反复拉锯商讨） -> 谈判达成并签署的契约文件 -> 条约，协定。"
  },
  {
    "word": "attend",
    "phonetic": "/əˈtend/",
    "pos": "v.",
    "meaning": "出席， 参加； 照料",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "at-（ad- 朝向） + tend（伸展） -> 出席，参加。"
  },
  {
    "word": "attention",
    "phonetic": "/əˈtenʃn/",
    "pos": "n.",
    "meaning": "注意， 专心； 立正",
    "part": "第一部分：超级核心母词族",
    "group": "【7. tend / tens / tent 伸展/拉紧/倾向】",
    "analysis_type": "构词",
    "analysis": "attend（关注） + -ion（名词后缀） -> 注意，专心。"
  },
  {
    "word": "contend",
    "phonetic": "/kənˈtend/",
    "pos": "vi./vt.",
    "meaning": "坚称， 主张， 认为； 竞争， 争夺",
    "part": "第一部分：超级核心母词族",
    "group": "【7. tend / tens / tent 伸展/拉紧/倾向】",
    "analysis_type": "构词",
    "analysis": "con-（共同） + tend（绷紧） -> 双方合力绷紧角逐争抢 -> 坚称，主张。"
  },
  {
    "word": "extend",
    "phonetic": "/ɪkˈstend/",
    "pos": "v.",
    "meaning": "延伸， 延长； 伸出； 提供",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "ex-（向外） + tend（伸展） -> 延伸，延长。"
  },
  {
    "word": "extension",
    "phonetic": "/ɪkˈstenʃn/",
    "pos": "n.",
    "meaning": "延长， 扩大； 电话分机",
    "part": "第一部分：超级核心母词族",
    "group": "【7. tend / tens / tent 伸展/拉紧/倾向】",
    "analysis_type": "构词",
    "analysis": "extend（延伸） + -ion（名词后缀） -> 延长，扩大。"
  },
  {
    "word": "extensive",
    "phonetic": "/ɪkˈstensɪv/",
    "pos": "adj.",
    "meaning": "广阔的， 广泛的； 大量的",
    "part": "第一部分：超级核心母词族",
    "group": "【7. tend / tens / tent 伸展/拉紧/倾向】",
    "analysis_type": "构词",
    "analysis": "extend（延伸） + -ive（形容词后缀） -> 延伸范围极其宽广辽阔的 -> 广阔的，广泛的。"
  },
  {
    "word": "intend",
    "phonetic": "/ɪnˈtend/",
    "pos": "vt.",
    "meaning": "打算， 想要； 企图",
    "part": "第一部分：超级核心母词族",
    "group": "【7. tend / tens / tent 伸展/拉紧/倾向】",
    "analysis_type": "构词",
    "analysis": "in-（向内） + tend（伸展） -> 心思往特定方向延展渴望 -> 打算，想要。"
  },
  {
    "word": "intense",
    "phonetic": "/ɪnˈtens/",
    "pos": "adj.",
    "meaning": "强烈的， 剧烈的； 紧张的",
    "part": "第一部分：超级核心母词族",
    "group": "【7. tend / tens / tent 伸展/拉紧/倾向】",
    "analysis_type": "构词",
    "analysis": "in-（加强） + tens（绷紧） -> 拉扯到极紧的状态 -> 强烈的，剧烈的。",
    "antonyms": [
      {
        "target": "tense",
        "pos": "adj.",
        "for_sense": "强烈的",
        "usage": "contrast",
        "in_pack": true
      }
    ]
  },
  {
    "word": "intensive",
    "phonetic": "/ɪnˈtensɪv/",
    "pos": "adj.",
    "meaning": "集中的， 强化的； 精耕细作的",
    "part": "第一部分：超级核心母词族",
    "group": "【7. tend / tens / tent 伸展/拉紧/倾向】",
    "analysis_type": "构词",
    "analysis": "intense（紧绷） + -ive（形容词后缀） -> 精力高度集中的 -> 集中的，强化的。"
  },
  {
    "word": "intention",
    "phonetic": "/ɪnˈtenʃn/",
    "pos": "n.",
    "meaning": "意图， 目的， 打算",
    "part": "第一部分：超级核心母词族",
    "group": "【7. tend / tens / tent 伸展/拉紧/倾向】",
    "analysis_type": "构词",
    "analysis": "intend（打算） + -ion（名词后缀） -> 心之所向的既定目标 -> 意图，目的。"
  },
  {
    "word": "pretend",
    "phonetic": "/prɪˈtend/",
    "pos": "vt./vi.",
    "meaning": "假装， 装作",
    "part": "第一部分：超级核心母词族",
    "group": "【7. tend / tens / tent 伸展/拉紧/倾向】",
    "analysis_type": "构词",
    "analysis": "pre-（在前面） + tend（伸出） -> 假装，装作。"
  },
  {
    "word": "stretch",
    "phonetic": "/stretʃ/",
    "pos": "v./n.",
    "meaning": "vt./vi. 伸展， 拉长 n. 一段时间",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "本义 -> / 伸展， 拉长  一段时间。"
  },
  {
    "word": "tend",
    "phonetic": "/tend/",
    "pos": "vi./vt.",
    "meaning": "往往会， 趋向于（to）； 照料， 看护",
    "part": "第一部分：超级核心母词族",
    "group": "【7. tend / tens / tent 伸展/拉紧/倾向】",
    "analysis_type": "构词",
    "analysis": "词根 tend-（心之所向） -> 朝特定方向延展偏向 -> 往往会，趋向于（to）。"
  },
  {
    "word": "tendency",
    "phonetic": "/ˈtendənsi/",
    "pos": "n.",
    "meaning": "倾向， 趋势",
    "part": "第一部分：超级核心母词族",
    "group": "【7. tend / tens / tent 伸展/拉紧/倾向】",
    "analysis_type": "构词",
    "analysis": "tend（倾向） + -ency（名词后缀） -> 发展延伸的大体走向 -> 倾向，趋势。"
  },
  {
    "word": "tender",
    "phonetic": "/ˈtendə(r)/",
    "pos": "adj./vt./n.",
    "meaning": "vt./n. 投标，正式提交（辞呈/账单）；偿付 adj. 温柔体贴的；脆弱娇嫩的",
    "part": "第一部分：超级核心母词族",
    "group": "【7. tend / tens / tent 伸展/拉紧/倾向】",
    "analysis_type": "构词",
    "analysis": "词根 tend-（伸出） -> 温柔的。"
  },
  {
    "word": "tense",
    "phonetic": "/tens/",
    "pos": "adj./n./vt.",
    "meaning": "adj. 紧张的； 绷紧的 n. 时态 vt. 使拉紧",
    "part": "第一部分：超级核心母词族",
    "group": "【7. tend / tens / tent 伸展/拉紧/倾向】",
    "analysis_type": "构词",
    "analysis": "词根 tens-（绷紧） -> 拉紧的状态 -> 紧张的。",
    "antonyms": [
      {
        "target": "intense",
        "pos": "adj.",
        "for_sense": "紧张的",
        "usage": "contrast",
        "in_pack": true
      }
    ]
  },
  {
    "word": "tension",
    "phonetic": "/ˈtenʃn/",
    "pos": "n.",
    "meaning": "紧张局势， 张力； 拉力",
    "part": "第一部分：超级核心母词族",
    "group": "【7. tend / tens / tent 伸展/拉紧/倾向】",
    "analysis_type": "构词",
    "analysis": "tens（绷紧） + -ion（名词后缀） -> 相互拉拽对抗的紧绷力量 -> 紧张局势，张力。",
    "synonyms": [
      {
        "target": "stress",
        "pos": "n.",
        "for_sense": "紧张",
        "usage": "paraphrase",
        "in_pack": false,
        "nuance": "身心紧绷负重"
      }
    ]
  },
  {
    "word": "trend",
    "phonetic": "/trend/",
    "pos": "n./vi.",
    "meaning": "n. 趋势， 倾向 vi. 倾向",
    "part": "第一部分：超级核心母词族",
    "group": "【7. tend / tens / tent 伸展/拉紧/倾向】",
    "analysis_type": "构词",
    "analysis": "源自延展偏向同一方向的发展路线 -> 趋势。"
  },
  {
    "word": "aspect",
    "phonetic": "/ˈæspekt/",
    "pos": "n.",
    "meaning": "方面； 朝向； 面貌",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "a-（ad- 朝向） + spect（看） -> 方面。"
  },
  {
    "word": "expect",
    "phonetic": "/ɪkˈspekt/",
    "pos": "vt.",
    "meaning": "预料， 预期； 盼望， 期待",
    "part": "第一部分：超级核心母词族",
    "group": "【8. spec / spect / spic 看/查验/审视】",
    "analysis_type": "构词",
    "analysis": "ex-（向外） + spect（看） -> 探出头往外眺望等待 -> 预料，预期。"
  },
  {
    "word": "expectation",
    "phonetic": "/ˌekspekˈteɪʃn/",
    "pos": "n.",
    "meaning": "期待， 预料； 前程",
    "part": "第一部分：超级核心母词族",
    "group": "【8. spec / spect / spic 看/查验/审视】",
    "analysis_type": "构词",
    "analysis": "expect（期待） + -ation（名词后缀） -> 对未来抱有的瞻望 -> 期待，预料。"
  },
  {
    "word": "inspect",
    "phonetic": "/ɪnˈspekt/",
    "pos": "vt.",
    "meaning": "检查， 视察； 审视",
    "part": "第一部分：超级核心母词族",
    "group": "【8. spec / spect / spic 看/查验/审视】",
    "analysis_type": "构词",
    "analysis": "in-（向内） + spect（看） -> 往里面仔细查验端详 -> 检查，视察。"
  },
  {
    "word": "inspection",
    "phonetic": "/ɪnˈspekʃn/",
    "pos": "n.",
    "meaning": "检查， 视察， 细看",
    "part": "第一部分：超级核心母词族",
    "group": "【8. spec / spect / spic 看/查验/审视】",
    "analysis_type": "构词",
    "analysis": "inspect（检查） + -ion（名词后缀） -> 内视细看的严谨程序 -> 检查，视察。"
  },
  {
    "word": "perspective",
    "phonetic": "/pəˈspektɪv/",
    "pos": "n.",
    "meaning": "视角， 观点， 眼界； 透视图； 远景",
    "part": "第一部分：超级核心母词族",
    "group": "【8. spec / spect / spic 看/查验/审视】",
    "analysis_type": "构词",
    "analysis": "per-（穿透） + spect（看） + -ive（名词后缀） -> 视角，观点。",
    "synonyms": [
      {
        "target": "view",
        "pos": "n.",
        "for_sense": "视角",
        "usage": "paraphrase",
        "in_pack": true,
        "nuance": "宏观全景思想视角"
      },
      {
        "target": "standpoint",
        "pos": "n.",
        "for_sense": "立场",
        "usage": "upgrade",
        "in_pack": false,
        "nuance": "观察分析立足基点"
      }
    ]
  },
  {
    "word": "prospect",
    "phonetic": "/ˈprɒspekt/",
    "pos": "n./vi.",
    "meaning": "前景， 前途， 指望； 视野； 勘探",
    "part": "第一部分：超级核心母词族",
    "group": "【8. spec / spect / spic 看/查验/审视】",
    "analysis_type": "构词",
    "analysis": "pro-（向前） + spect（看） -> 前景，前途。"
  },
  {
    "word": "prospective",
    "phonetic": "/prəˈspektɪv/",
    "pos": "adj.",
    "meaning": "未来的， 预期的； 潜在的",
    "part": "第一部分：超级核心母词族",
    "group": "【8. spec / spect / spic 看/查验/审视】",
    "analysis_type": "构词",
    "analysis": "prospect（前景） + -ive（形容词后缀） -> 往前看有指望的、未来的 -> 未来的，预期的。"
  },
  {
    "word": "respect",
    "phonetic": "/rɪˈspekt/",
    "pos": "vt./n.",
    "meaning": "方面， 着眼点； 尊敬， 尊重",
    "part": "第一部分：超级核心母词族",
    "group": "【8. spec / spect / spic 看/查验/审视】",
    "analysis_type": "构词",
    "analysis": "re-（回） + spect（看） -> 方面，着眼点。"
  },
  {
    "word": "respective",
    "phonetic": "/rɪˈspektɪv/",
    "pos": "adj.",
    "meaning": "各自的， 分别的",
    "part": "第一部分：超级核心母词族",
    "group": "【8. spec / spect / spic 看/查验/审视】",
    "analysis_type": "构词",
    "analysis": "re-（各自分开） + spect（看） + -ive，合起来即各自按自身角度对应的 -> 各自的，分别的。"
  },
  {
    "word": "special",
    "phonetic": "/ˈspeʃl/",
    "pos": "adj./n.",
    "meaning": "adj. 特殊的； 专门的 n. 特刊； 特价商品",
    "part": "第一部分：超级核心母词族",
    "group": "【8. spec / spect / spic 看/查验/审视】",
    "analysis_type": "构词",
    "analysis": "speci-（外观种类） + -al（的） -> 属于专门特定类别的 -> 特殊的。"
  },
  {
    "word": "specialist",
    "phonetic": "/ˈspeʃəlɪst/",
    "pos": "n.",
    "meaning": "专家， 专科医生",
    "part": "第一部分：超级核心母词族",
    "group": "【8. spec / spect / spic 看/查验/审视】",
    "analysis_type": "构词",
    "analysis": "special（专门的） + -ist（专家） -> 专注于特定专门学科的人 -> 专家，专科医生。"
  },
  {
    "word": "speciality",
    "phonetic": "/ˌspeʃiˈæləti/",
    "pos": "n.",
    "meaning": "特产； 专长， 专业",
    "part": "第一部分：超级核心母词族",
    "group": "【8. spec / spect / spic 看/查验/审视】",
    "analysis_type": "构词",
    "analysis": "special（专门） + -ity（名词后缀） -> 专门生产的特长或产品 -> 特产。"
  },
  {
    "word": "species",
    "phonetic": "/ˈspiːʃiːz/",
    "pos": "n.",
    "meaning": "物种， 种类（单复同）",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然地理、动植物与环境保护】",
    "analysis_type": "构词",
    "analysis": "词根 species（外貌） -> 物种，种类（单复同）。"
  },
  {
    "word": "specific",
    "phonetic": "/spəˈsɪfɪk/",
    "pos": "adj./n.",
    "meaning": "adj. 具体的， 特定的 n. 细节； 特效药",
    "part": "第一部分：超级核心母词族",
    "group": "【8. spec / spect / spic 看/查验/审视】",
    "analysis_type": "构词",
    "analysis": "speci-（种类） + fic（使成形） -> 明具体所属种类的 -> 具体的。"
  },
  {
    "word": "specification",
    "phonetic": "/ˌspesɪfɪˈkeɪʃn/",
    "pos": "n.",
    "meaning": "规格， 规范； 详细说明书",
    "part": "第一部分：超级核心母词族",
    "group": "【8. spec / spect / spic 看/查验/审视】",
    "analysis_type": "构词",
    "analysis": "specific（具体的） + -ation（名词后缀） -> 详细明确列出的各项指标 -> 规格，规范。"
  },
  {
    "word": "specimen",
    "phonetic": "/ˈspesɪmən/",
    "pos": "n.",
    "meaning": "标本， 样本",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "spec-（看） + -i- + -men（名词后缀） -> 标本，样本。"
  },
  {
    "word": "spectacular",
    "phonetic": "/spekˈtækjələ(r)/",
    "pos": "adj./n.",
    "meaning": "adj. 壮观的， 引人入胜的 n. 盛大演出",
    "part": "第一部分：超级核心母词族",
    "group": "【8. spec / spect / spic 看/查验/审视】",
    "analysis_type": "构词",
    "analysis": "spectac-（壮观景致） + -ular（形容词后缀） -> 极其引人注目的宏大景观 -> 壮观的。",
    "synonyms": [
      {
        "target": "magnificent",
        "pos": "adj.",
        "for_sense": "引人入胜的",
        "usage": "upgrade",
        "in_pack": true,
        "nuance": "令人叹为观止的宏伟"
      }
    ]
  },
  {
    "word": "spectator",
    "phonetic": "/spekˈteɪtə(r)/",
    "pos": "n.",
    "meaning": "（比赛等的）观众， 旁观者",
    "part": "第一部分：超级核心母词族",
    "group": "【8. spec / spect / spic 看/查验/审视】",
    "analysis_type": "构词",
    "analysis": "spect-（看） + -ator（观看者） -> 在看台上观看比赛表演的人 -> （比赛等的）观众，旁观者。"
  },
  {
    "word": "speculate",
    "phonetic": "/ˈspekjuleɪt/",
    "pos": "vi./vt.",
    "meaning": "推测， 猜测； 投机",
    "part": "第一部分：超级核心母词族",
    "group": "【8. spec / spect / spic 看/查验/审视】",
    "analysis_type": "构词",
    "analysis": "specul-（望远侦察看清） + -ate（动词后缀） -> 推测，猜测。"
  },
  {
    "word": "suspect",
    "phonetic": "/səˈspekt/",
    "pos": "vt./vi./n./adj.",
    "meaning": "vt.ˈsʌspekt/ 嫌疑犯 adj. 可疑的",
    "part": "第一部分：超级核心母词族",
    "group": "【8. spec / spect / spic 看/查验/审视】",
    "analysis_type": "构词",
    "analysis": "sus-（在下方） + spect（看） -> 从底下斜着眼睛怀疑地看 -> vt.ˈsʌspekt，嫌疑犯。"
  },
  {
    "word": "suspicion",
    "phonetic": "/səˈspɪʃn/",
    "pos": "n.",
    "meaning": "怀疑， 嫌疑； 一点儿",
    "part": "第一部分：超级核心母词族",
    "group": "【8. spec / spect / spic 看/查验/审视】",
    "analysis_type": "构词",
    "analysis": "sus-（下方） + spic（看） + -ion（名词后缀） -> 怀疑，嫌疑。"
  },
  {
    "word": "suspicious",
    "phonetic": "/səˈspɪʃəs/",
    "pos": "adj.",
    "meaning": "可疑的； 多疑的（of）",
    "part": "第一部分：超级核心母词族",
    "group": "【8. spec / spect / spic 看/查验/审视】",
    "analysis_type": "构词",
    "analysis": "suspicion（怀疑） + -ous（充满…的） -> 让人心生疑窦的 -> 可疑的。"
  },
  {
    "word": "telescope",
    "phonetic": "/ˈtelɪskəʊp/",
    "pos": "n.",
    "meaning": "望远镜",
    "part": "第一部分：超级核心母词族",
    "group": "【8. spec / spect / spic 看/查验/审视】",
    "analysis_type": "构词",
    "analysis": "tele-（远距离） + scope（看） -> 可远距离看清星空的仪器 -> 望远镜。"
  },
  {
    "word": "device",
    "phonetic": "/dɪˈvaɪs/",
    "pos": "n.",
    "meaning": "装置， 器械； 策略",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "本义指“构想” -> 装置，器械。"
  },
  {
    "word": "devise",
    "phonetic": "/dɪˈvaɪz/",
    "pos": "vt.",
    "meaning": "设计， 发明， 策划",
    "part": "第一部分：超级核心母词族",
    "group": "【9. vid / vis / view 看/看见/视线】",
    "analysis_type": "构词",
    "analysis": "de-（向下） + vis-（看） -> 设计，发明。",
    "synonyms": [
      {
        "target": "conceive",
        "pos": "vt.",
        "for_sense": "策划",
        "usage": "upgrade",
        "in_pack": true,
        "nuance": "在心中严密构架方案"
      }
    ]
  },
  {
    "word": "divide",
    "phonetic": "/dɪˈvaɪd/",
    "pos": "v./n.",
    "meaning": "分， 划分； 除 n. 分水岭",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "di-（分开） + vid-（分开） -> 分，划分。"
  },
  {
    "word": "evidence",
    "phonetic": "/ˈevɪdəns/",
    "pos": "n./vt.",
    "meaning": "n. 证据， 证明； 迹象 vt. 证实",
    "part": "第一部分：超级核心母词族",
    "group": "【9. vid / vis / view 看/看见/视线】",
    "analysis_type": "构词",
    "analysis": "e-（显露出来） + vid（看见） + -ence（名词后缀） -> 证据。"
  },
  {
    "word": "evident",
    "phonetic": "/ˈevɪdənt/",
    "pos": "adj.",
    "meaning": "明显的， 明白的",
    "part": "第一部分：超级核心母词族",
    "group": "【9. vid / vis / view 看/看见/视线】",
    "analysis_type": "构词",
    "analysis": "e-（向外） + vid（看见） + -ent（形容词后缀） -> 显现在眼前极易看清的 -> 明显的，明白的。",
    "synonyms": [
      {
        "target": "obvious",
        "pos": "adj.",
        "for_sense": "明白的",
        "usage": "paraphrase",
        "in_pack": false,
        "nuance": "一览无余毋庸置疑"
      }
    ]
  },
  {
    "word": "individual",
    "phonetic": "/ˌɪndɪˈvɪdʒuəl/",
    "pos": "adj./n.",
    "meaning": "adj. 个别的； 独特的 n. 个人， 个体",
    "part": "第一部分：超级核心母词族",
    "group": "【9. vid / vis / view 看/看见/视线】",
    "analysis_type": "构词",
    "analysis": "in-（不） + di-（分开） + vid（划分） + -ual，引申指adj. 个别的 -> 个别的。"
  },
  {
    "word": "invisible",
    "phonetic": "/ɪnˈvɪzəbl/",
    "pos": "adj.",
    "meaning": "看不见的， 无形的",
    "part": "第一部分：超级核心母词族",
    "group": "【9. vid / vis / view 看/看见/视线】",
    "analysis_type": "构词",
    "analysis": "in-（否定前缀） + vis（看见） + -ible（能…的） -> 无法用肉眼看到的 -> 看不见的，无形的。",
    "antonyms": [
      {
        "target": "visible",
        "pos": "adj.",
        "for_sense": "看不见的",
        "usage": "contrast",
        "in_pack": true
      }
    ]
  },
  {
    "word": "provide",
    "phonetic": "/prəˈvaɪd/",
    "pos": "vt./vi.",
    "meaning": "提供，供给；规定；预防，准备（for）",
    "part": "第一部分：超级核心母词族",
    "group": "【9. vid / vis / view 看/看见/视线】",
    "analysis_type": "构词",
    "analysis": "pro-（提前） + vid-（看） -> 提前洞悉需求并预备妥当 -> 提供，供给。"
  },
  {
    "word": "provided",
    "phonetic": "/prəˈvaɪdɪd/",
    "pos": "conj.",
    "meaning": "假如， 若是， 以…为条件",
    "part": "第一部分：超级核心母词族",
    "group": "【9. vid / vis / view 看/看见/视线】",
    "analysis_type": "构词",
    "analysis": "provide（预先设好条件） + -ed，合起来即以预先设定的条件为前提 -> 假如，若是。"
  },
  {
    "word": "revise",
    "phonetic": "/rɪˈvaɪz/",
    "pos": "vt./vi.",
    "meaning": "修订， 修改； 复习",
    "part": "第一部分：超级核心母词族",
    "group": "【9. vid / vis / view 看/看见/视线】",
    "analysis_type": "构词",
    "analysis": "re-（再次） + vis（看） -> 修订，修改。"
  },
  {
    "word": "revision",
    "phonetic": "/rɪˈvɪʒn/",
    "pos": "n.",
    "meaning": "修订， 修改； 复习",
    "part": "第一部分：超级核心母词族",
    "group": "【9. vid / vis / view 看/看见/视线】",
    "analysis_type": "构词",
    "analysis": "revise（重看修正） + -ion（名词后缀） -> 修正纠错的稿件与过程 -> 修订，修改。"
  },
  {
    "word": "supervise",
    "phonetic": "/ˈsuːpəvaɪz/",
    "pos": "vt./vi.",
    "meaning": "监督， 管理， 指导",
    "part": "第一部分：超级核心母词族",
    "group": "【9. vid / vis / view 看/看见/视线】",
    "analysis_type": "构词",
    "analysis": "super-（在上方） + vis（看） + -e，合起来即站在高处居高临下注视监管 -> 监督，管理。"
  },
  {
    "word": "supervisor",
    "phonetic": "/ˈsuːpəvaɪzə(r)/",
    "pos": "n.",
    "meaning": "监督人， 导师， 主管",
    "part": "第一部分：超级核心母词族",
    "group": "【9. vid / vis / view 看/看见/视线】",
    "analysis_type": "构词",
    "analysis": "supervise（监督） + -or（人） -> 居高临下负责指导管理的人 -> 监督人，导师。"
  },
  {
    "word": "view",
    "phonetic": "/vjuː/",
    "pos": "n./vt.",
    "meaning": "观点， 见解； 看待， 把…视为； 景色",
    "part": "第一部分：超级核心母词族",
    "group": "【9. vid / vis / view 看/看见/视线】",
    "analysis_type": "构词",
    "analysis": "源自 visus（看） -> 观点，见解。",
    "synonyms": [
      {
        "target": "perspective",
        "pos": "n.",
        "for_sense": "见解",
        "usage": "paraphrase",
        "in_pack": true,
        "nuance": "宏观全景思想视角"
      }
    ]
  },
  {
    "word": "visible",
    "phonetic": "/ˈvɪzəbl/",
    "pos": "adj.",
    "meaning": "显而易见的， 明显的； 看得见的",
    "part": "第一部分：超级核心母词族",
    "group": "【9. vid / vis / view 看/看见/视线】",
    "analysis_type": "构词",
    "analysis": "vis（看） + -ible（能…的） -> 能被肉眼看见的 -> 显而易见的，明显的。",
    "antonyms": [
      {
        "target": "invisible",
        "pos": "adj.",
        "for_sense": "看得见的",
        "usage": "contrast",
        "in_pack": true
      }
    ]
  },
  {
    "word": "vision",
    "phonetic": "/ˈvɪʒn/",
    "pos": "n.",
    "meaning": "远见， 洞察力； 视野， 视觉； 幻象",
    "part": "第一部分：超级核心母词族",
    "group": "【9. vid / vis / view 看/看见/视线】",
    "analysis_type": "构词",
    "analysis": "vis（看） + -ion（名词后缀） -> 远见，洞察力。"
  },
  {
    "word": "visit",
    "phonetic": "/ˈvɪzɪt/",
    "pos": "vt./vi./n.",
    "meaning": "参观， 拜访， 访问",
    "part": "第一部分：超级核心母词族",
    "group": "【9. vid / vis / view 看/看见/视线】",
    "analysis_type": "构词",
    "analysis": "vis（看） + -it（走动词根） -> 走过去亲自探视看望 -> 参观，拜访。"
  },
  {
    "word": "visitor",
    "phonetic": "/ˈvɪzɪtə(r)/",
    "pos": "n.",
    "meaning": "访问者， 客人， 参观者",
    "part": "第一部分：超级核心母词族",
    "group": "【9. vid / vis / view 看/看见/视线】",
    "analysis_type": "构词",
    "analysis": "visit（拜访） + -or（人） -> 前来进行参观拜访的人 -> 访问者，客人。"
  },
  {
    "word": "visual",
    "phonetic": "/ˈvɪʒuəl/",
    "pos": "adj./n.",
    "meaning": "视觉的， 视力的； 视觉资料",
    "part": "第一部分：超级核心母词族",
    "group": "【9. vid / vis / view 看/看见/视线】",
    "analysis_type": "构词",
    "analysis": "vis（看） + -ual（形容词后缀） -> 属于视力感官视觉范畴的 -> 视觉的，视力的。"
  },
  {
    "word": "addict",
    "phonetic": "/ˈædɪkt/",
    "pos": "n./vt.",
    "meaning": "n. 上瘾者， 入迷的人 vt. 使上瘾， 使沉溺",
    "part": "第一部分：超级核心母词族",
    "group": "【10. dic / dict 说/指示/断定】",
    "analysis_type": "构词",
    "analysis": "ad-（朝向） + dict（判定） -> 整个人完全沉湎进去 -> 上瘾者。"
  },
  {
    "word": "contradict",
    "phonetic": "/ˌkɒntrəˈdɪkt/",
    "pos": "vt./vi.",
    "meaning": "反驳， 否定； 与…矛盾",
    "part": "第一部分：超级核心母词族",
    "group": "【10. dic / dict 说/指示/断定】",
    "analysis_type": "构词",
    "analysis": "contra-（相反） + dict（说） -> 反着说 -> 反驳，否定。"
  },
  {
    "word": "contradiction",
    "phonetic": "/ˌkɒntrəˈdɪkʃn/",
    "pos": "n.",
    "meaning": "矛盾， 不一致； 反驳",
    "part": "第一部分：超级核心母词族",
    "group": "【10. dic / dict 说/指示/断定】",
    "analysis_type": "构词",
    "analysis": "contradict（反驳） + -ion（名词后缀） -> 言语相互抵触的状态 -> 矛盾，不一致。"
  },
  {
    "word": "dedicate",
    "phonetic": "/ˈdedɪkeɪt/",
    "pos": "vt.",
    "meaning": "奉献， 把…献给（to）； 题献",
    "part": "第一部分：超级核心母词族",
    "group": "【10. dic / dict 说/指示/断定】",
    "analysis_type": "构词",
    "analysis": "de-（加强） + dic（宣誓宣告） + -ate（动词后缀） -> 奉献，把…献给（to）。"
  },
  {
    "word": "dictate",
    "phonetic": "/dɪkˈteɪt/",
    "pos": "vt./vi./n.",
    "meaning": "vt./vi. 口授； 命令， 听写 n. 命令， 指使",
    "part": "第一部分：超级核心母词族",
    "group": "【10. dic / dict 说/指示/断定】",
    "analysis_type": "构词",
    "analysis": "dict（说） + -ate（动词后缀） -> 口头宣说指令让人照办记录 -> / 口授。"
  },
  {
    "word": "dictionary",
    "phonetic": "/ˈdɪkʃənri/",
    "pos": "n.",
    "meaning": "词典， 字典",
    "part": "第一部分：超级核心母词族",
    "group": "【10. dic / dict 说/指示/断定】",
    "analysis_type": "构词",
    "analysis": "dict（说） + -ion + -ary（场所） -> 词典，字典。"
  },
  {
    "word": "indicate",
    "phonetic": "/ˈɪndɪkeɪt/",
    "pos": "vt.",
    "meaning": "指出， 指示； 表明， 暗示",
    "part": "第一部分：超级核心母词族",
    "group": "【10. dic / dict 说/指示/断定】",
    "analysis_type": "构词",
    "analysis": "in-（在内部） + dic（说） + -ate（动词后缀） -> 指出，指示。",
    "synonyms": [
      {
        "target": "show",
        "pos": "vt.",
        "for_sense": "指示",
        "usage": "paraphrase",
        "in_pack": false,
        "nuance": "提供明确迹象"
      },
      {
        "target": "reveal",
        "pos": "vt.",
        "for_sense": "表明",
        "usage": "paraphrase",
        "in_pack": false,
        "nuance": "真相水落石出"
      },
      {
        "target": "signify",
        "pos": "vt.",
        "for_sense": "表明",
        "usage": "upgrade",
        "in_pack": false,
        "nuance": "代表深层含义"
      }
    ]
  },
  {
    "word": "indication",
    "phonetic": "/ˌɪndɪˈkeɪʃn/",
    "pos": "n.",
    "meaning": "指示， 迹象， 暗示",
    "part": "第一部分：超级核心母词族",
    "group": "【10. dic / dict 说/指示/断定】",
    "analysis_type": "构词",
    "analysis": "indicate（指示） + -ion（名词后缀） -> 流露出来的指征暗示 -> 指示，迹象。"
  },
  {
    "word": "predict",
    "phonetic": "/prɪˈdɪkt/",
    "pos": "vt.",
    "meaning": "预言， 预测， 预报",
    "part": "第一部分：超级核心母词族",
    "group": "【10. dic / dict 说/指示/断定】",
    "analysis_type": "构词",
    "analysis": "pre-（提前） + dict（说） -> 提前说出 -> 预言，预测。"
  },
  {
    "word": "prediction",
    "phonetic": "/prɪˈdɪkʃn/",
    "pos": "n.",
    "meaning": "预言， 预报",
    "part": "第一部分：超级核心母词族",
    "group": "【10. dic / dict 说/指示/断定】",
    "analysis_type": "构词",
    "analysis": "predict（预言） + -ion（名词后缀） -> 提前说出的判断 -> 预言，预报。"
  },
  {
    "word": "verdict",
    "phonetic": "/ˈvɜːdɪkt/",
    "pos": "n.",
    "meaning": "裁决， 判决； 定论",
    "part": "第二部分：高频专业词根族",
    "group": "【49. 核心词根 9：dic / dict（说/指示）】",
    "analysis_type": "构词",
    "analysis": "ver-（真实） + dict（宣说） -> 裁决，判决。"
  },
  {
    "word": "conduct",
    "phonetic": "/kənˈdʌkt/",
    "pos": "vt./n.",
    "meaning": "vt. 组织， 实施； 引导 n. 行为",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "con-（共同） + duct-（引导） -> 带领团队执行推进行动 -> 组织。"
  },
  {
    "word": "conductor",
    "phonetic": "/kənˈdʌktə(r)/",
    "pos": "n.",
    "meaning": "（列车）乘务员； 指挥",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "conduct（指挥） + -or（人） -> （列车）乘务员。"
  },
  {
    "word": "deduct",
    "phonetic": "/dɪˈdʌkt/",
    "pos": "vt.",
    "meaning": "扣除， 减去",
    "part": "第一部分：超级核心母词族",
    "group": "【11. duc / duct 引导/带领/带来】",
    "analysis_type": "构词",
    "analysis": "de-（向下） + duct（引出） -> 从总数里往下拉走减去 -> 扣除，减去。"
  },
  {
    "word": "induce",
    "phonetic": "/ɪnˈdjuːs/",
    "pos": "vt.",
    "meaning": "引诱， 劝导； 引起， 导致",
    "part": "第一部分：超级核心母词族",
    "group": "【11. duc / duct 引导/带领/带来】",
    "analysis_type": "构词",
    "analysis": "in-（向内） + duc（引导） -> 引诱，劝导。",
    "synonyms": [
      {
        "target": "cause",
        "pos": "vt.",
        "for_sense": "诱导",
        "usage": "upgrade",
        "in_pack": false,
        "nuance": "间接推波助澜诱导"
      }
    ]
  },
  {
    "word": "introduce",
    "phonetic": "/ˌɪntrəˈdjuːs/",
    "pos": "vt.",
    "meaning": "介绍； 引进， 采用； 提出",
    "part": "第一部分：超级核心母词族",
    "group": "【11. duc / duct 引导/带领/带来】",
    "analysis_type": "构词",
    "analysis": "intro-（向内） + duc（引导） -> 引进门内让彼此相识 -> 介绍。"
  },
  {
    "word": "introduction",
    "phonetic": "/ˌɪntrəˈdʌkʃn/",
    "pos": "n.",
    "meaning": "介绍； 引进； 序言， 导论",
    "part": "第一部分：超级核心母词族",
    "group": "【11. duc / duct 引导/带领/带来】",
    "analysis_type": "构词",
    "analysis": "introduce（介绍） + -ion（名词后缀） -> 引言介绍的过程与序文 -> 介绍。"
  },
  {
    "word": "produce",
    "phonetic": "/prəˈdjuːs/",
    "pos": "vt./n.",
    "meaning": "生产，制造；引起，产生；农产品",
    "part": "第一部分：超级核心母词族",
    "group": "【11. duc / duct 引导/带领/带来】",
    "analysis_type": "构词",
    "analysis": "pro-（向前） + duc-（引出） -> 引导创造出成品推向人前 -> 生产，制造。",
    "synonyms": [
      {
        "target": "cause",
        "pos": "vt.",
        "for_sense": "生产",
        "usage": "paraphrase",
        "in_pack": false,
        "nuance": "创造带来成果"
      },
      {
        "target": "manufacture",
        "pos": "vt.",
        "for_sense": "制造",
        "usage": "upgrade",
        "in_pack": true,
        "nuance": "流水线规模化制造"
      },
      {
        "target": "yield",
        "pos": "vt.",
        "for_sense": "带来",
        "usage": "paraphrase",
        "in_pack": true,
        "nuance": "结出收益产出"
      }
    ]
  },
  {
    "word": "producer",
    "phonetic": "/prəˈdjuːsə(r)/",
    "pos": "n.",
    "meaning": "生产者， 制片人",
    "part": "第一部分：超级核心母词族",
    "group": "【11. duc / duct 引导/带领/带来】",
    "analysis_type": "构词",
    "analysis": "produce（生产） + -er（人） -> 生产者，制片人。"
  },
  {
    "word": "product",
    "phonetic": "/ˈprɒdʌkt/",
    "pos": "n.",
    "meaning": "产品， 产物； 乘积",
    "part": "第一部分：超级核心母词族",
    "group": "【11. duc / duct 引导/带领/带来】",
    "analysis_type": "构词",
    "analysis": "pro-（向前） + duct（带出） -> 被带到人前的劳动成果 -> 产品，产物。"
  },
  {
    "word": "production",
    "phonetic": "/prəˈdʌkʃn/",
    "pos": "n.",
    "meaning": "生产， 制作； 产量",
    "part": "第一部分：超级核心母词族",
    "group": "【11. duc / duct 引导/带领/带来】",
    "analysis_type": "构词",
    "analysis": "product（生产） + -ion（名词后缀） -> 制作加工的过程与总产量 -> 生产，制作。"
  },
  {
    "word": "productive",
    "phonetic": "/prəˈdʌktɪv/",
    "pos": "adj.",
    "meaning": "多产的， 富有成效的",
    "part": "第一部分：超级核心母词族",
    "group": "【11. duc / duct 引导/带领/带来】",
    "analysis_type": "构词",
    "analysis": "product（产出） + -ive（形容词后缀） -> 产出极大效益高的 -> 多产的，富有成效的。"
  },
  {
    "word": "productivity",
    "phonetic": "/ˌprɒdʌkˈtɪvəti/",
    "pos": "n.",
    "meaning": "生产率， 生产能力",
    "part": "第一部分：超级核心母词族",
    "group": "【11. duc / duct 引导/带领/带来】",
    "analysis_type": "构词",
    "analysis": "productive（富有成效的） + -ity（名词后缀） -> 单位时间内的产出效率 -> 生产率，生产能力。"
  },
  {
    "word": "reduce",
    "phonetic": "/rɪˈdjuːs/",
    "pos": "vt./vi.",
    "meaning": "减少， 降低； 使沦为",
    "part": "第一部分：超级核心母词族",
    "group": "【11. duc / duct 引导/带领/带来】",
    "analysis_type": "构词",
    "analysis": "re-（往回） + duc（带领） -> 带回较小水平、缩小规模 -> 减少，降低。",
    "synonyms": [
      {
        "target": "decrease",
        "pos": "vt.",
        "for_sense": "减少",
        "usage": "paraphrase",
        "in_pack": false,
        "nuance": "通用高频趋势词"
      }
    ]
  },
  {
    "word": "reduction",
    "phonetic": "/rɪˈdʌkʃn/",
    "pos": "n.",
    "meaning": "减少， 缩减， 降低",
    "part": "第一部分：超级核心母词族",
    "group": "【11. duc / duct 引导/带领/带来】",
    "analysis_type": "构词",
    "analysis": "reduce（减少） + -tion（名词后缀） -> 缩减压低的过程与幅度 -> 减少，缩减。"
  },
  {
    "word": "course",
    "phonetic": "/kɔːs/",
    "pos": "n.",
    "meaning": "进程， 过程； 课程； 路线",
    "part": "第一部分：超级核心母词族",
    "group": "【12. curr / curs / cours 跑/流动/进程】",
    "analysis_type": "构词",
    "analysis": "词根 cours-（奔跑） -> 时间或教学向前奔流的过程 -> 进程，过程。"
  },
  {
    "word": "currency",
    "phonetic": "/ˈkʌrənsi/",
    "pos": "n.",
    "meaning": "货币， 通货； 流通",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "curr-（流动） + -ency（名词后缀） -> 货币，通货。"
  },
  {
    "word": "current",
    "phonetic": "/ˈkʌrənt/",
    "pos": "adj./n.",
    "meaning": "当前的，现行的；水流，气流；电流",
    "part": "第一部分：超级核心母词族",
    "group": "【12. curr / curs / cours 跑/流动/进程】",
    "analysis_type": "构词",
    "analysis": "curr-（奔流） + -ent -> 正在当下流动推进中的 -> 当前的，现行的。"
  },
  {
    "word": "curriculum",
    "phonetic": "/kəˈrɪkjələm/",
    "pos": "n.",
    "meaning": "学校全部课程， 课程体系",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "curr-（奔跑） + -iculum（场所） -> 赛马场奔驰的整圈跑道 -> 学校全部课程，课程体系。"
  },
  {
    "word": "excursion",
    "phonetic": "/ɪkˈskɜːʃn/",
    "pos": "n.",
    "meaning": "远足， 短途旅行",
    "part": "第一部分：超级核心母词族",
    "group": "【12. curr / curs / cours 跑/流动/进程】",
    "analysis_type": "构词",
    "analysis": "ex-（向外） + curs（跑） + -ion（名词后缀） -> 跑到城市外面散心短跑 -> 远足，短途旅行。"
  },
  {
    "word": "occur",
    "phonetic": "/əˈkɜː(r)/",
    "pos": "vi.",
    "meaning": "发生， 出现； 存在； 被想起（to）",
    "part": "第一部分：超级核心母词族",
    "group": "【12. curr / curs / cours 跑/流动/进程】",
    "analysis_type": "构词",
    "analysis": "oc-（迎面而来） + cur（跑） -> 发生，出现。"
  },
  {
    "word": "occurrence",
    "phonetic": "/əˈkʌrəns/",
    "pos": "n.",
    "meaning": "发生， 出现； 事件， 发生的事情",
    "part": "第一部分：超级核心母词族",
    "group": "【12. curr / curs / cours 跑/流动/进程】",
    "analysis_type": "构词",
    "analysis": "occur（发生） + -ence（名词后缀） -> 突然冒出来的具体偶发事件 -> 发生，出现。"
  },
  {
    "word": "recur",
    "phonetic": "/rɪˈkɜː(r)/",
    "pos": "vi.",
    "meaning": "再发生， 重现； 重新被提及",
    "part": "第一部分：超级核心母词族",
    "group": "【12. curr / curs / cours 跑/流动/进程】",
    "analysis_type": "构词",
    "analysis": "re-（再次） + cur（跑） -> 同样的事情再次跑回来重现 -> 再发生，重现。"
  },
  {
    "word": "gender",
    "phonetic": "/ˈdʒendə(r)/",
    "pos": "n.",
    "meaning": "性别； （语法的）性",
    "part": "第一部分：超级核心母词族",
    "group": "【13. gen / gener / gent 出生/产生/种类/高贵】",
    "analysis_type": "构词",
    "analysis": "gend- / gen-（出生类别） -> 天生生理划分的男女分类 -> 性别。"
  },
  {
    "word": "general",
    "phonetic": "/ˈdʒenrəl/",
    "pos": "adj./n.",
    "meaning": "总的， 普遍的， 全面的； 将军",
    "part": "第一部分：超级核心母词族",
    "group": "【13. gen / gener / gent 出生/产生/种类/高贵】",
    "analysis_type": "构词",
    "analysis": "gener-（种类） + -al（形容词后缀） -> 总的，普遍的。"
  },
  {
    "word": "generally",
    "phonetic": "/ˈdʒenrəli/",
    "pos": "adv.",
    "meaning": "一般地， 通常； 普遍地",
    "part": "第一部分：超级核心母词族",
    "group": "【13. gen / gener / gent 出生/产生/种类/高贵】",
    "analysis_type": "构词",
    "analysis": "general（普遍的） + -ly（副词后缀） -> 就整体而言 -> 一般地，通常。"
  },
  {
    "word": "generate",
    "phonetic": "/ˈdʒenəreɪt/",
    "pos": "vt.",
    "meaning": "产生， 发生（电/热等）； 引起",
    "part": "第一部分：超级核心母词族",
    "group": "【13. gen / gener / gent 出生/产生/种类/高贵】",
    "analysis_type": "构词",
    "analysis": "gener-（产生） + -ate（动词后缀） -> 生发孕育出来新能量 -> 产生，发生（电。",
    "synonyms": [
      {
        "target": "cause",
        "pos": "vt.",
        "for_sense": "产生",
        "usage": "upgrade",
        "in_pack": false,
        "nuance": "催生出全新结果"
      }
    ]
  },
  {
    "word": "generation",
    "phonetic": "/ˌdʒenəˈreɪʃn/",
    "pos": "n.",
    "meaning": "一代， 一代人； 产生， 发生",
    "part": "第一部分：超级核心母词族",
    "group": "【13. gen / gener / gent 出生/产生/种类/高贵】",
    "analysis_type": "构词",
    "analysis": "generate（产生） + -ion（名词后缀） -> 同期生育出生的一代人 -> 一代，一代人。"
  },
  {
    "word": "generator",
    "phonetic": "/ˈdʒenəreɪtə(r)/",
    "pos": "n.",
    "meaning": "发电机； 发生器",
    "part": "第一部分：超级核心母词族",
    "group": "【13. gen / gener / gent 出生/产生/种类/高贵】",
    "analysis_type": "构词",
    "analysis": "generate（产生） + -or（设备） -> 发电机。"
  },
  {
    "word": "generous",
    "phonetic": "/ˈdʒenərəs/",
    "pos": "adj.",
    "meaning": "慷慨的， 大方的； 宽厚的",
    "part": "第一部分：超级核心母词族",
    "group": "【13. gen / gener / gent 出生/产生/种类/高贵】",
    "analysis_type": "构词",
    "analysis": "gener-（高贵出身） + -ous（充满…的） -> 胸襟博大的 -> 慷慨的，大方的。",
    "antonyms": [
      {
        "target": "mean",
        "pos": "adj.",
        "for_sense": "慷慨的",
        "usage": "contrast",
        "in_pack": true
      }
    ]
  },
  {
    "word": "genetic",
    "phonetic": "/dʒəˈnetɪk/",
    "pos": "adj.",
    "meaning": "遗传学的， 基因的",
    "part": "第一部分：超级核心母词族",
    "group": "【13. gen / gener / gent 出生/产生/种类/高贵】",
    "analysis_type": "构词",
    "analysis": "gen-（出生） + -etic（形容词后缀） -> 关于生命起源与遗传因子的 -> 遗传学的，基因的。"
  },
  {
    "word": "genius",
    "phonetic": "/ˈdʒiːniəs/",
    "pos": "n.",
    "meaning": "天才， 天赋， 天资",
    "part": "第一部分：超级核心母词族",
    "group": "【13. gen / gener / gent 出生/产生/种类/高贵】",
    "analysis_type": "构词",
    "analysis": "gen-（天生） + -ius，合起来即受上天恩赐生来就具备的神级天赋 -> 天才，天赋。"
  },
  {
    "word": "genuine",
    "phonetic": "/ˈdʒenjuɪn/",
    "pos": "adj.",
    "meaning": "真正的， 非人造的； 真诚的",
    "part": "第一部分：超级核心母词族",
    "group": "【13. gen / gener / gent 出生/产生/种类/高贵】",
    "analysis_type": "构词",
    "analysis": "gen-（纯正血统） + -uine，合起来即血统纯正绝无掺假的 -> 真正的，非人造的。",
    "synonyms": [
      {
        "target": "authentic",
        "pos": "adj.",
        "for_sense": "真实的",
        "usage": "upgrade",
        "in_pack": false,
        "nuance": "纯正绝无掺假"
      }
    ]
  },
  {
    "word": "advent",
    "phonetic": "/ˈædvent/",
    "pos": "n.",
    "meaning": "来临， 到来",
    "part": "第一部分：超级核心母词族",
    "group": "【14. ven / vent 来/到达/发生】",
    "analysis_type": "构词",
    "analysis": "ad-（朝向） + vent（来临） -> 来临，到来。"
  },
  {
    "word": "avenue",
    "phonetic": "/ˈævənjuː/",
    "pos": "n.",
    "meaning": "大街， 林荫大道； 途径",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "a-（ad- 朝向） + ven-（来） + -ue，引申指大街 -> 大街，林荫大道。"
  },
  {
    "word": "convenience",
    "phonetic": "/kənˈviːniəns/",
    "pos": "n.",
    "meaning": "方便， 便利",
    "part": "第一部分：超级核心母词族",
    "group": "【14. ven / vent 来/到达/发生】",
    "analysis_type": "构词",
    "analysis": "con-（共同） + ven-（来） + -ience（名词后缀） -> 方便，便利。"
  },
  {
    "word": "convention",
    "phonetic": "/kənˈvenʃn/",
    "pos": "n.",
    "meaning": "大会； 惯例， 常规； 公约",
    "part": "第一部分：超级核心母词族",
    "group": "【14. ven / vent 来/到达/发生】",
    "analysis_type": "构词",
    "analysis": "con-（共同） + vent-（来） + -ion（名词后缀） -> 大会。"
  },
  {
    "word": "conventional",
    "phonetic": "/kənˈvenʃənl/",
    "pos": "adj.",
    "meaning": "传统的， 常规的",
    "part": "第一部分：超级核心母词族",
    "group": "【14. ven / vent 来/到达/发生】",
    "analysis_type": "构词",
    "analysis": "convention（传统） + -al（形容词后缀） -> 传统的，常规的。"
  },
  {
    "word": "event",
    "phonetic": "/ɪˈvent/",
    "pos": "n.",
    "meaning": "事件， 大事； 比赛项目",
    "part": "第一部分：超级核心母词族",
    "group": "【14. ven / vent 来/到达/发生】",
    "analysis_type": "构词",
    "analysis": "e-（出） + vent（来） -> 事件，大事。"
  },
  {
    "word": "eventual",
    "phonetic": "/ɪˈventʃuəl/",
    "pos": "adj.",
    "meaning": "最终的， 结果的",
    "part": "第一部分：超级核心母词族",
    "group": "【14. ven / vent 来/到达/发生】",
    "analysis_type": "构词",
    "analysis": "event（事件） + -ual（形容词后缀） -> 最终的，结果的。"
  },
  {
    "word": "eventually",
    "phonetic": "/ɪˈventʃuəli/",
    "pos": "adv.",
    "meaning": "最终， 终于",
    "part": "第一部分：超级核心母词族",
    "group": "【14. ven / vent 来/到达/发生】",
    "analysis_type": "构词",
    "analysis": "eventual（最终的） + -ly（副词后缀） -> 最终，终于。"
  },
  {
    "word": "invent",
    "phonetic": "/ɪnˈvent/",
    "pos": "vt.",
    "meaning": "发明， 创造； 编造",
    "part": "第一部分：超级核心母词族",
    "group": "【14. ven / vent 来/到达/发生】",
    "analysis_type": "构词",
    "analysis": "in-（进入） + vent（来） -> 发明，创造。"
  },
  {
    "word": "invention",
    "phonetic": "/ɪnˈvenʃn/",
    "pos": "n.",
    "meaning": "发明， 创造",
    "part": "第一部分：超级核心母词族",
    "group": "【14. ven / vent 来/到达/发生】",
    "analysis_type": "构词",
    "analysis": "invent（发明） + -ion（名词后缀） -> 发明，创造。"
  },
  {
    "word": "inventor",
    "phonetic": "/ɪnˈventə(r)/",
    "pos": "n.",
    "meaning": "发明家， 创造者",
    "part": "第一部分：超级核心母词族",
    "group": "【14. ven / vent 来/到达/发生】",
    "analysis_type": "构词",
    "analysis": "invent（发明） + -or（人） -> 发明家，创造者。"
  },
  {
    "word": "prevent",
    "phonetic": "/prɪˈvent/",
    "pos": "vt.",
    "meaning": "预防， 防止； 阻止",
    "part": "第一部分：超级核心母词族",
    "group": "【14. ven / vent 来/到达/发生】",
    "analysis_type": "构词",
    "analysis": "pre-（在前） + vent（来） -> 预防，防止。"
  },
  {
    "word": "prevention",
    "phonetic": "/prɪˈvenʃn/",
    "pos": "n.",
    "meaning": "预防， 防止",
    "part": "第一部分：超级核心母词族",
    "group": "【14. ven / vent 来/到达/发生】",
    "analysis_type": "构词",
    "analysis": "prevent（预防） + -ion（名词后缀） -> 预防，防止。"
  },
  {
    "word": "revenue",
    "phonetic": "/ˈrevənjuː/",
    "pos": "n.",
    "meaning": "财政收入， 税收； 收入",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "re-（回） + ven-（来） + -ue，引申指财政收入 -> 财政收入，税收。"
  },
  {
    "word": "venture",
    "phonetic": "/ˈventʃə(r)/",
    "pos": "n./vi.",
    "meaning": "风险投资； 冒险",
    "part": "第一部分：超级核心母词族",
    "group": "【14. ven / vent 来/到达/发生】",
    "analysis_type": "构词",
    "analysis": "由 adventure（冒险）截头简缩而来 -> 风险投资。"
  },
  {
    "word": "adverse",
    "phonetic": "/ˈædvɜːs/",
    "pos": "adj.",
    "meaning": "不利的， 有害的； 逆向的",
    "part": "第一部分：超级核心母词族",
    "group": "【15. vert / vers 转/转向/反转】",
    "analysis_type": "构词",
    "analysis": "ad-（朝向） + vers（转向） -> 风向迎面扑来逆向阻挠 -> 不利的，有害的。"
  },
  {
    "word": "adversity",
    "phonetic": "/ədˈvɜːsəti/",
    "pos": "n.",
    "meaning": "逆境， 苦难",
    "part": "第一部分：超级核心母词族",
    "group": "【15. vert / vers 转/转向/反转】",
    "analysis_type": "构词",
    "analysis": "adverse（不利的） + -ity（名词后缀） -> 逆境，苦难。"
  },
  {
    "word": "advertise",
    "phonetic": "/ˈædvətaɪz/",
    "pos": "vt./vi.",
    "meaning": "做广告， 宣传； 公布",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "ad-（朝向） + vert-（转动） + -ise（使动后缀） -> 做广告，宣传。"
  },
  {
    "word": "conversion",
    "phonetic": "/kənˈvɜːʃn/",
    "pos": "n.",
    "meaning": "转变， 转换",
    "part": "第一部分：超级核心母词族",
    "group": "【15. vert / vers 转/转向/反转】",
    "analysis_type": "构词",
    "analysis": "convert（转变） + -ion（名词后缀） -> 转变，转换。"
  },
  {
    "word": "convert",
    "phonetic": "/kənˈvɜːt/",
    "pos": "vt./vi.",
    "meaning": "转变， 转换； 改变信仰",
    "part": "第一部分：超级核心母词族",
    "group": "【15. vert / vers 转/转向/反转】",
    "analysis_type": "构词",
    "analysis": "con-（完全） + vert（转动） -> 转变，转换。"
  },
  {
    "word": "diverse",
    "phonetic": "/daɪˈvɜːs/",
    "pos": "adj.",
    "meaning": "多种多样的， 形形色色的",
    "part": "第一部分：超级核心母词族",
    "group": "【15. vert / vers 转/转向/反转】",
    "analysis_type": "构词",
    "analysis": "di-（分开） + vers（转向） -> 多种多样的，形形色色的。"
  },
  {
    "word": "diversity",
    "phonetic": "/daɪˈvɜːsəti/",
    "pos": "n.",
    "meaning": "多样性， 差异",
    "part": "第一部分：超级核心母词族",
    "group": "【15. vert / vers 转/转向/反转】",
    "analysis_type": "构词",
    "analysis": "diverse（多样的） + -ity（名词后缀） -> 多样性，差异。"
  },
  {
    "word": "divert",
    "phonetic": "/daɪˈvɜːt/",
    "pos": "vt.",
    "meaning": "使转向， 使改道； 转移",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "di-（离开） + vert（转动） -> 道路施工使车流改道绕行 -> 使转向，使改道。"
  },
  {
    "word": "reverse",
    "phonetic": "/rɪˈvɜːs/",
    "pos": "vt./n./adj.",
    "meaning": "颠倒， 倒转； 反面； 相反的",
    "part": "第一部分：超级核心母词族",
    "group": "【15. vert / vers 转/转向/反转】",
    "analysis_type": "构词",
    "analysis": "re-（向后） + vers（转动） + -e，沿着原路逆时针彻底倒转过来 -> 颠倒，倒转。"
  },
  {
    "word": "universal",
    "phonetic": "/ˌjuːnɪˈvɜːsl/",
    "pos": "adj.",
    "meaning": "普遍的， 通用的； 全世界的",
    "part": "第一部分：超级核心母词族",
    "group": "【15. vert / vers 转/转向/反转】",
    "analysis_type": "构词",
    "analysis": "uni-（唯一） + vers-（旋转） + -al，万物旋转归于一体的宇宙宏阔法则 -> 普遍的，通用的。"
  },
  {
    "word": "universe",
    "phonetic": "/ˈjuːnɪvɜːs/",
    "pos": "n.",
    "meaning": "宇宙， 万物",
    "part": "第一部分：超级核心母词族",
    "group": "【15. vert / vers 转/转向/反转】",
    "analysis_type": "构词",
    "analysis": "uni-（单一） + vers-（旋转） -> 宇宙，万物。"
  },
  {
    "word": "version",
    "phonetic": "/ˈvɜːʃn/",
    "pos": "n.",
    "meaning": "版本； 译本； 说法",
    "part": "第一部分：超级核心母词族",
    "group": "【15. vert / vers 转/转向/反转】",
    "analysis_type": "构词",
    "analysis": "vers-（转动） + -ion（名词后缀） -> 版本。"
  },
  {
    "word": "versus",
    "phonetic": "/ˈvɜːsəs/",
    "pos": "prep.",
    "meaning": "与…相对， 对抗（vs.）",
    "part": "第一部分：超级核心母词族",
    "group": "【15. vert / vers 转/转向/反转】",
    "analysis_type": "构词",
    "analysis": "词根 versus（转向相对） -> 与…相对，对抗（vs.）。"
  },
  {
    "word": "vertical",
    "phonetic": "/ˈvɜːtɪkl/",
    "pos": "adj./n.",
    "meaning": "垂直的； 垂直线",
    "part": "第一部分：超级核心母词族",
    "group": "【15. vert / vers 转/转向/反转】",
    "analysis_type": "构词",
    "analysis": "vert-（转动） + -ic + -al，从地平线笔直指向正天顶的几何状态 -> 垂直的。"
  },
  {
    "word": "construct",
    "phonetic": "/kənˈstrʌkt/",
    "pos": "vt.",
    "meaning": "建造， 构建； 创立",
    "part": "第一部分：超级核心母词族",
    "group": "【16. stru / struct 建造/构筑/堆叠】",
    "analysis_type": "构词",
    "analysis": "con-（共同） + struct（堆叠） -> 建造，构建。"
  },
  {
    "word": "construction",
    "phonetic": "/kənˈstrʌkʃn/",
    "pos": "n.",
    "meaning": "建造， 建设； 建筑物",
    "part": "第一部分：超级核心母词族",
    "group": "【16. stru / struct 建造/构筑/堆叠】",
    "analysis_type": "构词",
    "analysis": "construct（建造） + -ion（名词后缀） -> 建造，建设。"
  },
  {
    "word": "constructive",
    "phonetic": "/kənˈstrʌktɪv/",
    "pos": "adj.",
    "meaning": "建设性的， 积极有益的",
    "part": "第一部分：超级核心母词族",
    "group": "【16. stru / struct 建造/构筑/堆叠】",
    "analysis_type": "构词",
    "analysis": "construct（构建） + -ive（形容词后缀） -> 建设性的，积极有益的。"
  },
  {
    "word": "destruction",
    "phonetic": "/dɪˈstrʌkʃn/",
    "pos": "n.",
    "meaning": "破坏， 毁灭",
    "part": "第一部分：超级核心母词族",
    "group": "【16. stru / struct 建造/构筑/堆叠】",
    "analysis_type": "构词",
    "analysis": "de-（向下） + struct（建造） + -ion（名词后缀） -> 破坏，毁灭。"
  },
  {
    "word": "destructive",
    "phonetic": "/dɪˈstrʌktɪv/",
    "pos": "adj.",
    "meaning": "破坏性的， 毁灭性的",
    "part": "第一部分：超级核心母词族",
    "group": "【16. stru / struct 建造/构筑/堆叠】",
    "analysis_type": "构词",
    "analysis": "de-（毁坏） + struct（建造） + -ive（形容词后缀） -> 破坏性的，毁灭性的。"
  },
  {
    "word": "industry",
    "phonetic": "/ˈɪndəstri/",
    "pos": "n.",
    "meaning": "n. 勤奋，勤劳，敬业；工业，制造业，产业",
    "part": "第一部分：超级核心母词族",
    "group": "【16. stru / struct 建造/构筑/堆叠】",
    "analysis_type": "构词",
    "analysis": "indu-（内部） + stru-（建造） -> 工业，产业。"
  },
  {
    "word": "infrastructure",
    "phonetic": "/ˈɪnfrəstrʌktʃə(r)/",
    "pos": "n.",
    "meaning": "基础设施， 公共设施",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "infra-（在下方） + structure（结构） -> 基础设施，公共设施。"
  },
  {
    "word": "instruct",
    "phonetic": "/ɪnˈstrʌkt/",
    "pos": "vt.",
    "meaning": "教， 指导； 命令， 指示",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "in-（在内） + struct（建造） -> 教，指导。"
  },
  {
    "word": "instruction",
    "phonetic": "/ɪnˈstrʌkʃn/",
    "pos": "n.",
    "meaning": "教学； 指示； 说明书",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "instruct（教导） + -ion（名词后缀） -> 教学。"
  },
  {
    "word": "instructor",
    "phonetic": "/ɪnˈstrʌktə(r)/",
    "pos": "n.",
    "meaning": "大学讲师； 教员， 教练",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "instruct（指导） + -or（专业人员） -> 大学讲师。"
  },
  {
    "word": "obstruct",
    "phonetic": "/əbˈstrʌkt/",
    "pos": "vt.",
    "meaning": "阻碍， 阻塞； 妨碍",
    "part": "第一部分：超级核心母词族",
    "group": "【16. stru / struct 建造/构筑/堆叠】",
    "analysis_type": "构词",
    "analysis": "ob-（逆着） + struct（堆叠） -> 阻碍，阻塞。"
  },
  {
    "word": "structure",
    "phonetic": "/ˈstrʌktʃə(r)/",
    "pos": "n./vt.",
    "meaning": "结构； 建筑物 vt. 组织",
    "part": "第一部分：超级核心母词族",
    "group": "【16. stru / struct 建造/构筑/堆叠】",
    "analysis_type": "构词",
    "analysis": "struct-（建造） + -ure（名词后缀） -> 结构。"
  },
  {
    "word": "coincide",
    "phonetic": "/ˌkəʊɪnˈsaɪd/",
    "pos": "vi.",
    "meaning": "同时发生； 一致",
    "part": "第一部分：超级核心母词族",
    "group": "【17. cid / cis 切/割/杀/落】",
    "analysis_type": "构词",
    "analysis": "co-（共同） + in-（落入） + cid-（掉落） -> 同时发生。"
  },
  {
    "word": "coincidence",
    "phonetic": "/kəʊˈɪnsɪdəns/",
    "pos": "n.",
    "meaning": "巧合， 一致",
    "part": "第一部分：超级核心母词族",
    "group": "【17. cid / cis 切/割/杀/落】",
    "analysis_type": "构词",
    "analysis": "coincide（同时发生） + -ence（名词后缀） -> 巧合，一致。"
  },
  {
    "word": "concise",
    "phonetic": "/kənˈsaɪs/",
    "pos": "adj.",
    "meaning": "简明的， 简练的",
    "part": "第一部分：超级核心母词族",
    "group": "【17. cid / cis 切/割/杀/落】",
    "analysis_type": "构词",
    "analysis": "con-（彻底） + cis-（切割） -> 简明的，简练的。"
  },
  {
    "word": "decide",
    "phonetic": "/dɪˈsaɪd/",
    "pos": "vt./vi.",
    "meaning": "决定， 裁决",
    "part": "第一部分：超级核心母词族",
    "group": "【17. cid / cis 切/割/杀/落】",
    "analysis_type": "构词",
    "analysis": "de-（离去） + cid-（切断） -> 决定，裁决。"
  },
  {
    "word": "decision",
    "phonetic": "/dɪˈsɪʒn/",
    "pos": "n.",
    "meaning": "决定， 决心； 决断力",
    "part": "第一部分：超级核心母词族",
    "group": "【17. cid / cis 切/割/杀/落】",
    "analysis_type": "构词",
    "analysis": "decide（决定） + -ion（名词后缀） -> 决定，决心。"
  },
  {
    "word": "decisive",
    "phonetic": "/dɪˈsaɪsɪv/",
    "pos": "adj.",
    "meaning": "决定性的， 坚决的",
    "part": "第一部分：超级核心母词族",
    "group": "【17. cid / cis 切/割/杀/落】",
    "analysis_type": "构词",
    "analysis": "decide（决定） + -ive（形容词后缀） -> 决定性的，坚决的。"
  },
  {
    "word": "incident",
    "phonetic": "/ˈɪnsɪdənt/",
    "pos": "n.",
    "meaning": "事件， 事变",
    "part": "第一部分：超级核心母词族",
    "group": "【17. cid / cis 切/割/杀/落】",
    "analysis_type": "构词",
    "analysis": "in-（在内） + cid-（掉落） + -ent（名词） -> 事件，事变。"
  },
  {
    "word": "precise",
    "phonetic": "/prɪˈsaɪs/",
    "pos": "adj.",
    "meaning": "精确的， 准确的",
    "part": "第一部分：超级核心母词族",
    "group": "【17. cid / cis 切/割/杀/落】",
    "analysis_type": "构词",
    "analysis": "pre-（预先） + cis-（切割） -> 精确的，准确的。"
  },
  {
    "word": "precision",
    "phonetic": "/prɪˈsɪʒn/",
    "pos": "n.",
    "meaning": "精确， 准确（度）",
    "part": "第一部分：超级核心母词族",
    "group": "【17. cid / cis 切/割/杀/落】",
    "analysis_type": "构词",
    "analysis": "precise（精准的） + -ion（名词后缀） -> 精确，准确（度）。"
  },
  {
    "word": "suicide",
    "phonetic": "/ˈsuːɪsaɪd/",
    "pos": "n./vi.",
    "meaning": "自杀",
    "part": "第一部分：超级核心母词族",
    "group": "【17. cid / cis 切/割/杀/落】",
    "analysis_type": "构词",
    "analysis": "sui-（自己） + cid-（杀戮） -> 自杀。"
  },
  {
    "word": "accomplish",
    "phonetic": "/əˈkʌmplɪʃ/",
    "pos": "vt.",
    "meaning": "达到， 完成， 实现",
    "part": "第一部分：超级核心母词族",
    "group": "【18. ple / plet / plen / pli 满/填补/完成】",
    "analysis_type": "构词",
    "analysis": "ac-（加强语气） + com- + pli-（填满） + -ish（动词后缀） -> 达到，完成。"
  },
  {
    "word": "accomplishment",
    "phonetic": "/əˈkʌmplɪʃmənt/",
    "pos": "n.",
    "meaning": "成就， 造诣",
    "part": "第一部分：超级核心母词族",
    "group": "【18. ple / plet / plen / pli 满/填补/完成】",
    "analysis_type": "构词",
    "analysis": "accomplish（完成） + -ment（名词后缀） -> 成就，造诣。"
  },
  {
    "word": "complete",
    "phonetic": "/kəmˈpliːt/",
    "pos": "adj./vt.",
    "meaning": "完全的 vt. 完成",
    "part": "第一部分：超级核心母词族",
    "group": "【18. ple / plet / plen / pli 满/填补/完成】",
    "analysis_type": "构词",
    "analysis": "com-（彻底） + plet-（填满） -> 完全的，vt.。"
  },
  {
    "word": "completely",
    "phonetic": "/kəmˈpliːtli/",
    "pos": "adv.",
    "meaning": "完全地， 十分地",
    "part": "第一部分：超级核心母词族",
    "group": "【18. ple / plet / plen / pli 满/填补/完成】",
    "analysis_type": "构词",
    "analysis": "complete（完全的） + -ly（副词后缀） -> 完全地，十分地。"
  },
  {
    "word": "completion",
    "phonetic": "/kəmˈpliːʃn/",
    "pos": "n.",
    "meaning": "完成， 结束",
    "part": "第一部分：超级核心母词族",
    "group": "【18. ple / plet / plen / pli 满/填补/完成】",
    "analysis_type": "构词",
    "analysis": "complete（完成） + -ion（名词后缀） -> 完成，结束。"
  },
  {
    "word": "deplete",
    "phonetic": "/dɪˈpliːt/",
    "pos": "vt.",
    "meaning": "耗尽， 使枯竭",
    "part": "第一部分：超级核心母词族",
    "group": "【18. ple / plet / plen / pli 满/填补/完成】",
    "analysis_type": "构词",
    "analysis": "de-（去除） + plet-（填满） -> 耗尽，使枯竭。"
  },
  {
    "word": "fill",
    "phonetic": "/fɪl/",
    "pos": "v./n.",
    "meaning": "装满， 盛满； 填补（空缺）； 满足",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "源自词根意为“充满” -> 注入实体至无空隙 -> 装满，盛满。"
  },
  {
    "word": "fulfill",
    "phonetic": "/fʊlˈfɪl/",
    "pos": "vt.",
    "meaning": "履行， 实现； 满足",
    "part": "第一部分：超级核心母词族",
    "group": "【18. ple / plet / plen / pli 满/填补/完成】",
    "analysis_type": "构词",
    "analysis": "ful-（满） + fill（装满） -> 履行，实现。"
  },
  {
    "word": "fulfilling",
    "phonetic": "/fʊlˈfɪlɪŋ/",
    "pos": "adj.",
    "meaning": "令人满足的， 有成就感的",
    "part": "第一部分：超级核心母词族",
    "group": "【18. ple / plet / plen / pli 满/填补/完成】",
    "analysis_type": "构词",
    "analysis": "fulfill（实现） + -ing（形容词后缀） -> 令人满足的，有成就感的。"
  },
  {
    "word": "full",
    "phonetic": "/fʊl/",
    "pos": "adj./adv.",
    "meaning": "adj. 满的； 完全的 adv. 十分",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "与 ple/plen 同源 -> 满的。"
  },
  {
    "word": "implement",
    "phonetic": "/ˈɪmplɪment/",
    "pos": "vt./n.",
    "meaning": "贯彻， 实施 n. 工具",
    "part": "第一部分：超级核心母词族",
    "group": "【18. ple / plet / plen / pli 满/填补/完成】",
    "analysis_type": "构词",
    "analysis": "im-（进入） + ple-（填满充实） + -ment（名词后缀） -> 将蓝图落到实处 -> 贯彻，实施。"
  },
  {
    "word": "implementation",
    "phonetic": "/ˌɪmplɪmenˈteɪʃn/",
    "pos": "n.",
    "meaning": "贯彻， 执行",
    "part": "第一部分：超级核心母词族",
    "group": "【18. ple / plet / plen / pli 满/填补/完成】",
    "analysis_type": "构词",
    "analysis": "implement（贯彻落实） + -ation（名词后缀） -> 贯彻，执行。"
  },
  {
    "word": "plentiful",
    "phonetic": "/ˈplentɪfl/",
    "pos": "adj.",
    "meaning": "丰富的， 富足的",
    "part": "第一部分：超级核心母词族",
    "group": "【18. ple / plet / plen / pli 满/填补/完成】",
    "analysis_type": "构词",
    "analysis": "plenti-（丰富充裕） + -ful（充满的） -> 丰富的，富足的。"
  },
  {
    "word": "plenty",
    "phonetic": "/ˈplenti/",
    "pos": "pron./n./adv.",
    "meaning": "pron./n. 充足， 大量 adv. 十分",
    "part": "第一部分：超级核心母词族",
    "group": "【18. ple / plet / plen / pli 满/填补/完成】",
    "analysis_type": "构词",
    "analysis": "plen-（充满） + -ty（名词后缀） -> 告别匮乏的充盈状态 -> pron.，n.。"
  },
  {
    "word": "supplement",
    "phonetic": "/ˈsʌplɪmənt/",
    "pos": "n./vt.",
    "meaning": "补遗， 增刊 vt. 补充",
    "part": "第一部分：超级核心母词族",
    "group": "【18. ple / plet / plen / pli 满/填补/完成】",
    "analysis_type": "构词",
    "analysis": "sub-（自下而上） + ple-（填满） + -ment（名词） -> 补遗，增刊。"
  },
  {
    "word": "supply",
    "phonetic": "/səˈplaɪ/",
    "pos": "n./vt.",
    "meaning": "供应， 物资 vt. 提供",
    "part": "第一部分：超级核心母词族",
    "group": "【18. ple / plet / plen / pli 满/填补/完成】",
    "analysis_type": "构词",
    "analysis": "sub-（由下向上） + ply（填满） -> 供应，物资。"
  },
  {
    "word": "assess",
    "phonetic": "/əˈses/",
    "pos": "vt.",
    "meaning": "评估， 评定； 估算",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "as-（ad- 坐在） + sess（坐） -> 评估，评定。"
  },
  {
    "word": "assessment",
    "phonetic": "/əˈsesmənt/",
    "pos": "n.",
    "meaning": "评估， 评定",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "assess（评估） + -ment（名词后缀） -> 评估，评定。"
  },
  {
    "word": "possess",
    "phonetic": "/pəˈzes/",
    "pos": "vt.",
    "meaning": "拥有， 占有； 具有",
    "part": "第一部分：超级核心母词族",
    "group": "【19. sed / sid / sess 坐/停留/安置/沉淀】",
    "analysis_type": "构词",
    "analysis": "pot-（有力量的） + sess（坐镇） -> 拥有，占有。"
  },
  {
    "word": "possession",
    "phonetic": "/pəˈzeʃn/",
    "pos": "n.",
    "meaning": "拥有； 财产",
    "part": "第一部分：超级核心母词族",
    "group": "【19. sed / sid / sess 坐/停留/安置/沉淀】",
    "analysis_type": "构词",
    "analysis": "possess（拥有） + -ion（名词后缀） -> 拥有。"
  },
  {
    "word": "president",
    "phonetic": "/ˈprezɪdənt/",
    "pos": "n.",
    "meaning": "总统； 大学校长； 会长",
    "part": "第一部分：超级核心母词族",
    "group": "【19. sed / sid / sess 坐/停留/安置/沉淀】",
    "analysis_type": "构词",
    "analysis": "pre-（在前） + sid-（坐） + -ent（人） -> 总统。"
  },
  {
    "word": "reside",
    "phonetic": "/rɪˈzaɪd/",
    "pos": "vi.",
    "meaning": "居住， 定居； 在于（in）",
    "part": "第一部分：超级核心母词族",
    "group": "【19. sed / sid / sess 坐/停留/安置/沉淀】",
    "analysis_type": "构词",
    "analysis": "re-（向后） + sid-（坐下） -> 居住，定居。"
  },
  {
    "word": "residence",
    "phonetic": "/ˈrezɪdəns/",
    "pos": "n.",
    "meaning": "居住； 住宅， 宅第",
    "part": "第一部分：超级核心母词族",
    "group": "【19. sed / sid / sess 坐/停留/安置/沉淀】",
    "analysis_type": "构词",
    "analysis": "reside（定居） + -ence（名词后缀） -> 居住。"
  },
  {
    "word": "resident",
    "phonetic": "/ˈrezɪdənt/",
    "pos": "n./adj.",
    "meaning": "居民 adj. 居住的",
    "part": "第一部分：超级核心母词族",
    "group": "【19. sed / sid / sess 坐/停留/安置/沉淀】",
    "analysis_type": "构词",
    "analysis": "reside（定居） + -ent（人） -> 居民，adj.。"
  },
  {
    "word": "residential",
    "phonetic": "/ˌrezɪˈdenʃl/",
    "pos": "adj.",
    "meaning": "居住的， 住宅的",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "reside（居住定居） + -ent + -ial（形容词后缀） -> 居住的，住宅的。"
  },
  {
    "word": "session",
    "phonetic": "/ˈseʃn/",
    "pos": "n.",
    "meaning": "会议； 会期； 学期",
    "part": "第一部分：超级核心母词族",
    "group": "【19. sed / sid / sess 坐/停留/安置/沉淀】",
    "analysis_type": "构词",
    "analysis": "sess-（坐下） + -ion（名词后缀） -> 会议。"
  },
  {
    "word": "settle",
    "phonetic": "/ˈsetl/",
    "pos": "vt./vi.",
    "meaning": "解决， 结算 vi. 定居",
    "part": "第一部分：超级核心母词族",
    "group": "【19. sed / sid / sess 坐/停留/安置/沉淀】",
    "analysis_type": "构词",
    "analysis": "本义指“使坐下” -> 解决，结算。"
  },
  {
    "word": "settlement",
    "phonetic": "/ˈsetlmənt/",
    "pos": "n.",
    "meaning": "解决， 协议； 居留地",
    "part": "第一部分：超级核心母词族",
    "group": "【19. sed / sid / sess 坐/停留/安置/沉淀】",
    "analysis_type": "构词",
    "analysis": "settle（定居） + -ment（名词后缀） -> 解决，协议。"
  },
  {
    "word": "appeal",
    "phonetic": "/əˈpiːl/",
    "pos": "vi./n.",
    "meaning": "呼吁， 恳求； 上诉 n. 吸引力",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "ap-（ad- 去） + peal（驱使） -> 呼吁，恳求。"
  },
  {
    "word": "compel",
    "phonetic": "/kəmˈpel/",
    "pos": "vt.",
    "meaning": "vt. 强迫， 迫使； 引起",
    "part": "第一部分：超级核心母词族",
    "group": "【20. pel / puls / peal 推/驱使/搏动】",
    "analysis_type": "构词",
    "analysis": "com-（加强） + pel-（驱使） -> 施加推力使人行事 -> 强迫。"
  },
  {
    "word": "compulsory",
    "phonetic": "/kəmˈpʌlsəri/",
    "pos": "adj.",
    "meaning": "必修的， 强制的",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "com-（共同） + puls-（推动） + -ory（形容词后缀） -> 必修的，强制的。"
  },
  {
    "word": "expel",
    "phonetic": "/ɪkˈspel/",
    "pos": "vt.",
    "meaning": "驱逐， 开除； 排出",
    "part": "第一部分：超级核心母词族",
    "group": "【20. pel / puls / peal 推/驱使/搏动】",
    "analysis_type": "构词",
    "analysis": "ex-（向外） + pel（驱逐） -> 驱逐，开除。"
  },
  {
    "word": "impulse",
    "phonetic": "/ˈɪmpʌls/",
    "pos": "n.",
    "meaning": "冲动， 一时兴起； 脉冲",
    "part": "第一部分：超级核心母词族",
    "group": "【20. pel / puls / peal 推/驱使/搏动】",
    "analysis_type": "构词",
    "analysis": "im-（向内） + puls-（推动） -> 冲动，一时兴起。"
  },
  {
    "word": "propel",
    "phonetic": "/prəˈpel/",
    "pos": "vt.",
    "meaning": "推动， 推进； 激励",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "pro-（向前） + pel（推） -> 从后方施力促使向前移动 -> 推动，推进。"
  },
  {
    "word": "pulse",
    "phonetic": "/pʌls/",
    "pos": "n./vi.",
    "meaning": "n. 脉搏； 脉冲 vi. 搏动， 跳动",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、医疗生理与情绪心理】",
    "analysis_type": "构词",
    "analysis": "词根 puls-（推） -> 脉搏。"
  },
  {
    "word": "repel",
    "phonetic": "/rɪˈpel/",
    "pos": "vt.",
    "meaning": "击退； 抵制； 排斥",
    "part": "第一部分：超级核心母词族",
    "group": "【20. pel / puls / peal 推/驱使/搏动】",
    "analysis_type": "构词",
    "analysis": "re-（向后） + pel（击退） -> 击退。"
  },
  {
    "word": "advocate",
    "phonetic": "/ˈædvəkeɪt/",
    "pos": "vt./n.",
    "meaning": "倡导 vt. 拥护者",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "ad-（去） + voc-（呼唤） + -ate，引申指倡导 vt. 拥护者 -> 倡导，vt.。"
  },
  {
    "word": "evoke",
    "phonetic": "/ɪˈvəʊk/",
    "pos": "vt.",
    "meaning": "唤起， 引起（回忆）",
    "part": "第一部分：超级核心母词族",
    "group": "【21. voc / vok / voice 声音/呼唤/主张】",
    "analysis_type": "构词",
    "analysis": "e-（向外） + vok-（呼唤） -> 唤起，引起（回忆）。"
  },
  {
    "word": "provoke",
    "phonetic": "/prəˈvəʊk/",
    "pos": "vt.",
    "meaning": "激怒， 挑衅； 引起",
    "part": "第一部分：超级核心母词族",
    "group": "【21. voc / vok / voice 声音/呼唤/主张】",
    "analysis_type": "构词",
    "analysis": "pro-（向前） + vok-（呼唤） -> 激怒挑起事端 -> 激怒，挑衅。"
  },
  {
    "word": "revoke",
    "phonetic": "/rɪˈvəʊk/",
    "pos": "vt.",
    "meaning": "撤销， 废除， 吊销",
    "part": "第一部分：超级核心母词族",
    "group": "【21. voc / vok / voice 声音/呼唤/主张】",
    "analysis_type": "构词",
    "analysis": "re-（收回） + vok-（呼唤） -> 吊销执照或废除特权 -> 撤销，废除。"
  },
  {
    "word": "vocabulary",
    "phonetic": "/vəˈkæbjələri/",
    "pos": "n.",
    "meaning": "词汇， 词汇量； 词表",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "voc-（声音） + -able + -ary（场所） -> 词汇，词汇量。"
  },
  {
    "word": "vocal",
    "phonetic": "/ˈvəʊkl/",
    "pos": "adj.",
    "meaning": "直言不讳的； 发声的",
    "part": "第一部分：超级核心母词族",
    "group": "【21. voc / vok / voice 声音/呼唤/主张】",
    "analysis_type": "构词",
    "analysis": "voc-（声音） + -al（形容词后缀） -> 敢于公开大声发声抗议的 -> 直言不讳的。"
  },
  {
    "word": "vocation",
    "phonetic": "/vəʊˈkeɪʃn/",
    "pos": "n.",
    "meaning": "天职， 使命感； 职业",
    "part": "第一部分：超级核心母词族",
    "group": "【21. voc / vok / voice 声音/呼唤/主张】",
    "analysis_type": "构词",
    "analysis": "voc-（呼唤） + -ation（名词后缀） -> 天职，使命感。"
  },
  {
    "word": "aspire",
    "phonetic": "/əˈspaɪə(r)/",
    "pos": "vi.",
    "meaning": "渴望， 有志于（to）",
    "part": "第一部分：超级核心母词族",
    "group": "【22. spir / spirit 呼吸/精神/渴望】",
    "analysis_type": "构词",
    "analysis": "ad-（朝向） + spir-（呼吸） -> 渴望，有志于（to）。"
  },
  {
    "word": "expire",
    "phonetic": "/ɪkˈspaɪə(r)/",
    "pos": "vi.",
    "meaning": "期满， 失效； 逝世",
    "part": "第一部分：超级核心母词族",
    "group": "【22. spir / spirit 呼吸/精神/渴望】",
    "analysis_type": "构词",
    "analysis": "ex-（向外） + spir-（呼出） -> 证件合同期限届满 -> 期满，失效。"
  },
  {
    "word": "inspiration",
    "phonetic": "/ˌɪnspəˈreɪʃn/",
    "pos": "n.",
    "meaning": "灵感， 鼓舞",
    "part": "第一部分：超级核心母词族",
    "group": "【22. spir / spirit 呼吸/精神/渴望】",
    "analysis_type": "构词",
    "analysis": "in-（向内） + spir-（呼吸） + -ation（名词后缀） -> 灵感，鼓舞。"
  },
  {
    "word": "inspire",
    "phonetic": "/ɪnˈspaɪə(r)/",
    "pos": "vt.",
    "meaning": "激励， 鼓舞； 赋予灵感",
    "part": "第一部分：超级核心母词族",
    "group": "【22. spir / spirit 呼吸/精神/渴望】",
    "analysis_type": "构词",
    "analysis": "in-（注入） + spir-（呼吸） -> 激励，鼓舞。"
  },
  {
    "word": "spirit",
    "phonetic": "/ˈspɪrɪt/",
    "pos": "n.",
    "meaning": "精神， 心灵； 勇气",
    "part": "第一部分：超级核心母词族",
    "group": "【22. spir / spirit 呼吸/精神/渴望】",
    "analysis_type": "构词",
    "analysis": "词根 spiritus（呼吸） -> 精神，心灵。"
  },
  {
    "word": "spiritual",
    "phonetic": "/ˈspɪrɪtʃuəl/",
    "pos": "adj.",
    "meaning": "精神的， 心灵的",
    "part": "第一部分：超级核心母词族",
    "group": "【22. spir / spirit 呼吸/精神/渴望】",
    "analysis_type": "构词",
    "analysis": "spirit（精神） + -ual（形容词后缀） -> 精神的，心灵的。"
  },
  {
    "word": "confer",
    "phonetic": "/kənˈfɜː(r)/",
    "pos": "vt./vi.",
    "meaning": "授予， 赋予； 商谈",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "con-（共同） + fer（带来） -> 授予，赋予。"
  },
  {
    "word": "differ",
    "phonetic": "/ˈdɪfə(r)/",
    "pos": "vi.",
    "meaning": "不同， 相异； 分歧",
    "part": "第一部分：超级核心母词族",
    "group": "【23. fer / phor 运载/带来/承受】",
    "analysis_type": "构词",
    "analysis": "dis-（分开） + fer（带来） -> 不同，相异。"
  },
  {
    "word": "difference",
    "phonetic": "/ˈdɪfrəns/",
    "pos": "n.",
    "meaning": "差别， 差异",
    "part": "第一部分：超级核心母词族",
    "group": "【23. fer / phor 运载/带来/承受】",
    "analysis_type": "构词",
    "analysis": "differ（相异） + -ence（名词后缀） -> 差别，差异。"
  },
  {
    "word": "different",
    "phonetic": "/ˈdɪfrənt/",
    "pos": "adj.",
    "meaning": "不同的， 差异的",
    "part": "第一部分：超级核心母词族",
    "group": "【23. fer / phor 运载/带来/承受】",
    "analysis_type": "构词",
    "analysis": "differ（不同） + -ent（形容词后缀） -> 特征各异绝不千篇一律的 -> 不同的，差异的。"
  },
  {
    "word": "fertile",
    "phonetic": "/ˈfɜːtaɪl/",
    "pos": "adj.",
    "meaning": "肥沃的， 富饶的",
    "part": "第一部分：超级核心母词族",
    "group": "【23. fer / phor 运载/带来/承受】",
    "analysis_type": "构词",
    "analysis": "fert-（承载） + -ile（形容词后缀） -> 肥沃的，富饶的。"
  },
  {
    "word": "indifferent",
    "phonetic": "/ɪnˈdɪfrənt/",
    "pos": "adj.",
    "meaning": "漠不关心的， 冷淡的",
    "part": "第一部分：超级核心母词族",
    "group": "【23. fer / phor 运载/带来/承受】",
    "analysis_type": "构词",
    "analysis": "in-（不） + different（有区别的） -> 漠不关心的，冷淡的。"
  },
  {
    "word": "infer",
    "phonetic": "/ɪnˈfɜː(r)/",
    "pos": "vt.",
    "meaning": "推论， 推断",
    "part": "第一部分：超级核心母词族",
    "group": "【23. fer / phor 运载/带来/承受】",
    "analysis_type": "构词",
    "analysis": "in-（进入） + fer（带来） -> 推论，推断。"
  },
  {
    "word": "inference",
    "phonetic": "/ˈɪnfərəns/",
    "pos": "n.",
    "meaning": "推论， 结论",
    "part": "第一部分：超级核心母词族",
    "group": "【23. fer / phor 运载/带来/承受】",
    "analysis_type": "构词",
    "analysis": "infer（推断） + -ence（名词后缀） -> 推论，结论。"
  },
  {
    "word": "prefer",
    "phonetic": "/prɪˈfɜː(r)/",
    "pos": "vt.",
    "meaning": "更喜欢， 宁愿",
    "part": "第一部分：超级核心母词族",
    "group": "【23. fer / phor 运载/带来/承受】",
    "analysis_type": "构词",
    "analysis": "pre-（在前） + fer（带来） -> 更喜欢，宁愿。"
  },
  {
    "word": "preference",
    "phonetic": "/ˈprefrəns/",
    "pos": "n.",
    "meaning": "偏爱， 优先选择",
    "part": "第一部分：超级核心母词族",
    "group": "【23. fer / phor 运载/带来/承受】",
    "analysis_type": "构词",
    "analysis": "prefer（偏好） + -ence（名词后缀） -> 偏爱，优先选择。"
  },
  {
    "word": "refer",
    "phonetic": "/rɪˈfɜː(r)/",
    "pos": "vi./vt.",
    "meaning": "谈及， 涉及； 查阅（to）",
    "part": "第一部分：超级核心母词族",
    "group": "【23. fer / phor 运载/带来/承受】",
    "analysis_type": "构词",
    "analysis": "re-（向后） + fer（带来） -> 谈及，涉及。"
  },
  {
    "word": "referee",
    "phonetic": "/ˌrefəˈriː/",
    "pos": "n.",
    "meaning": "裁判员； 仲裁人",
    "part": "第一部分：超级核心母词族",
    "group": "【23. fer / phor 运载/带来/承受】",
    "analysis_type": "构词",
    "analysis": "refer（提交仲裁） + -ee（受托人） -> 裁判员。"
  },
  {
    "word": "reference",
    "phonetic": "/ˈrefrəns/",
    "pos": "n.",
    "meaning": "参考， 查阅； 推荐信",
    "part": "第一部分：超级核心母词族",
    "group": "【23. fer / phor 运载/带来/承受】",
    "analysis_type": "构词",
    "analysis": "refer（参考） + -ence（名词后缀） -> 参考，查阅。"
  },
  {
    "word": "suffer",
    "phonetic": "/ˈsʌfə(r)/",
    "pos": "vt./vi.",
    "meaning": "受苦， 遭受",
    "part": "第一部分：超级核心母词族",
    "group": "【23. fer / phor 运载/带来/承受】",
    "analysis_type": "构词",
    "analysis": "sub-（从下方） + fer（承载） -> 受苦，遭受。"
  },
  {
    "word": "transfer",
    "phonetic": "/trænsˈfɜː(r)/",
    "pos": "vt./vi./n.",
    "meaning": "转移， 调动； 换乘",
    "part": "第一部分：超级核心母词族",
    "group": "【23. fer / phor 运载/带来/承受】",
    "analysis_type": "构词",
    "analysis": "trans-（跨越） + fer（运送） -> 转移，调动。"
  },
  {
    "word": "conserve",
    "phonetic": "/kənˈsɜːv/",
    "pos": "vt.",
    "meaning": "节约， 保护（资源）",
    "part": "第一部分：超级核心母词族",
    "group": "【24. serv / serf 保留/服务/守候】",
    "analysis_type": "构词",
    "analysis": "con-（共同） + serv-（守护） -> 节约，保护（资源）。"
  },
  {
    "word": "deserve",
    "phonetic": "/dɪˈzɜːv/",
    "pos": "vt.",
    "meaning": "应受， 值得",
    "part": "第一部分：超级核心母词族",
    "group": "【24. serv / serf 保留/服务/守候】",
    "analysis_type": "构词",
    "analysis": "de-（彻底） + serv-（服务） -> 应受，值得。"
  },
  {
    "word": "observation",
    "phonetic": "/ˌɒbzəˈveɪʃn/",
    "pos": "n.",
    "meaning": "观察， 观测； 言论",
    "part": "第一部分：超级核心母词族",
    "group": "【24. serv / serf 保留/服务/守候】",
    "analysis_type": "构词",
    "analysis": "observe（观察） + -ation（名词后缀） -> 观察，观测。"
  },
  {
    "word": "observe",
    "phonetic": "/əbˈzɜːv/",
    "pos": "vt.",
    "meaning": "vt. 遵守，奉行（规则/法律/传统）；评论，评说；观察，注意到",
    "part": "第一部分：超级核心母词族",
    "group": "【24. serv / serf 保留/服务/守候】",
    "analysis_type": "构词",
    "analysis": "ob-（在面前） + serv-（留神） -> 留心注视并严格照办 -> 观察，注意到。"
  },
  {
    "word": "preserve",
    "phonetic": "/prɪˈzɜːv/",
    "pos": "vt./n.",
    "meaning": "保护， 保存 n. 专属领域",
    "part": "第一部分：超级核心母词族",
    "group": "【24. serv / serf 保留/服务/守候】",
    "analysis_type": "构词",
    "analysis": "pre-（预先） + serv-（守护） -> 保护，保存。"
  },
  {
    "word": "reservation",
    "phonetic": "/ˌrezəˈveɪʃn/",
    "pos": "n.",
    "meaning": "预订； 保留意见",
    "part": "第一部分：超级核心母词族",
    "group": "【24. serv / serf 保留/服务/守候】",
    "analysis_type": "构词",
    "analysis": "reserve（保留） + -ation（名词后缀） -> 预订。"
  },
  {
    "word": "reserve",
    "phonetic": "/rɪˈzɜːv/",
    "pos": "vt./n.",
    "meaning": "保留，预订；储备，储存；内向，克制",
    "part": "第一部分：超级核心母词族",
    "group": "【24. serv / serf 保留/服务/守候】",
    "analysis_type": "构词",
    "analysis": "re-（向后） + serv-（保存） -> 留存于身后以备关键时刻启用 -> 保留，预订。"
  },
  {
    "word": "reservoir",
    "phonetic": "/ˈrezəvwɑː(r)/",
    "pos": "n.",
    "meaning": "水库， 蓄水池； 储藏",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然地理、动植物与环境保护】",
    "analysis_type": "构词",
    "analysis": "re-（向后） + serv-（保存守护） + -oir（场所） -> 水库，蓄水池。"
  },
  {
    "word": "serve",
    "phonetic": "/sɜːv/",
    "pos": "vt./vi.",
    "meaning": "服务， 伺候； 供应",
    "part": "第一部分：超级核心母词族",
    "group": "【24. serv / serf 保留/服务/守候】",
    "analysis_type": "构词",
    "analysis": "源自拉丁动词 servire（充当奴仆） -> 服务，伺候。"
  },
  {
    "word": "service",
    "phonetic": "/ˈsɜːvɪs/",
    "pos": "n.",
    "meaning": "服务； 检修",
    "part": "第一部分：超级核心母词族",
    "group": "【24. serv / serf 保留/服务/守候】",
    "analysis_type": "构词",
    "analysis": "serve（服务） + -ice（名词后缀） -> 服务。"
  },
  {
    "word": "conform",
    "phonetic": "/kənˈfɔːm/",
    "pos": "vi.",
    "meaning": "顺从， 遵守（to）； 符合",
    "part": "第一部分：超级核心母词族",
    "group": "【25. form 形状/形式/塑造】",
    "analysis_type": "构词",
    "analysis": "con-（共同） + form（形状） -> 顺从，遵守（to）。"
  },
  {
    "word": "form",
    "phonetic": "/fɔːm/",
    "pos": "n./v.",
    "meaning": "形式， 形状； 形成",
    "part": "第一部分：超级核心母词族",
    "group": "【25. form 形状/形式/塑造】",
    "analysis_type": "构词",
    "analysis": "词根 form（外形模具） -> 形式，形状。"
  },
  {
    "word": "formal",
    "phonetic": "/ˈfɔːml/",
    "pos": "adj.",
    "meaning": "正式的， 正规的",
    "part": "第一部分：超级核心母词族",
    "group": "【25. form 形状/形式/塑造】",
    "analysis_type": "构词",
    "analysis": "form（形式） + -al（形容词后缀） -> 正式的，正规的。"
  },
  {
    "word": "format",
    "phonetic": "/ˈfɔːmæt/",
    "pos": "n./vt.",
    "meaning": "版式， 格式 vt. 格式化",
    "part": "第一部分：超级核心母词族",
    "group": "【25. form 形状/形式/塑造】",
    "analysis_type": "构词",
    "analysis": "词根 formatus（塑造成型的） -> 版式，格式。"
  },
  {
    "word": "formation",
    "phonetic": "/fɔːˈmeɪʃn/",
    "pos": "n.",
    "meaning": "形成， 构成； 队形",
    "part": "第一部分：超级核心母词族",
    "group": "【25. form 形状/形式/塑造】",
    "analysis_type": "构词",
    "analysis": "form（形成） + -ation（名词后缀） -> 形成，构成。"
  },
  {
    "word": "formula",
    "phonetic": "/ˈfɔːmjələ/",
    "pos": "n.",
    "meaning": "公式， 方程式； 配方",
    "part": "第一部分：超级核心母词族",
    "group": "【25. form 形状/形式/塑造】",
    "analysis_type": "构词",
    "analysis": "form-（形式） + -ula（指小后缀） -> 公式，方程式。"
  },
  {
    "word": "formulate",
    "phonetic": "/ˈfɔːmjuleɪt/",
    "pos": "vt.",
    "meaning": "构想， 系统阐述",
    "part": "第一部分：超级核心母词族",
    "group": "【25. form 形状/形式/塑造】",
    "analysis_type": "构词",
    "analysis": "formula（公式） + -ate（动词后缀） -> 构想，系统阐述。"
  },
  {
    "word": "perform",
    "phonetic": "/pəˈfɔːm/",
    "pos": "vt./vi.",
    "meaning": "执行，履行；运转，表现；表演",
    "part": "第一部分：超级核心母词族",
    "group": "【25. form 形状/形式/塑造】",
    "analysis_type": "构词",
    "analysis": "per-（彻底） + form-（成形） -> 彻底将任务塑造完成 -> 执行，履行。"
  },
  {
    "word": "performance",
    "phonetic": "/pəˈfɔːməns/",
    "pos": "n.",
    "meaning": "表现， 性能； 表演",
    "part": "第一部分：超级核心母词族",
    "group": "【25. form 形状/形式/塑造】",
    "analysis_type": "构词",
    "analysis": "perform（表现） + -ance（名词后缀） -> 表现，性能。"
  },
  {
    "word": "reform",
    "phonetic": "/rɪˈfɔːm/",
    "pos": "vt./vi./n.",
    "meaning": "改革， 革新",
    "part": "第一部分：超级核心母词族",
    "group": "【25. form 形状/形式/塑造】",
    "analysis_type": "构词",
    "analysis": "re-（重新） + form（塑造形式） -> 改革，革新。"
  },
  {
    "word": "transform",
    "phonetic": "/trænsˈfɔːm/",
    "pos": "vt.",
    "meaning": "使改变形态， 彻底改造",
    "part": "第一部分：超级核心母词族",
    "group": "【25. form 形状/形式/塑造】",
    "analysis_type": "构词",
    "analysis": "trans-（跨越） + form（形态） -> 使改变形态，彻底改造。"
  },
  {
    "word": "transformation",
    "phonetic": "/ˌtrænsfəˈmeɪʃn/",
    "pos": "n.",
    "meaning": "彻底改变， 转变",
    "part": "第一部分：超级核心母词族",
    "group": "【25. form 形状/形式/塑造】",
    "analysis_type": "构词",
    "analysis": "transform（蜕变） + -ation（名词后缀） -> 彻底改变，转变。"
  },
  {
    "word": "uniform",
    "phonetic": "/ˈjuːnɪfɔːm/",
    "pos": "n./adj.",
    "meaning": "制服 adj. 统一的， 一致的",
    "part": "第一部分：超级核心母词族",
    "group": "【25. form 形状/形式/塑造】",
    "analysis_type": "构词",
    "analysis": "uni-（单一） + form（形态） -> 制服，adj.。"
  },
  {
    "word": "confine",
    "phonetic": "/kənˈfaɪn/",
    "pos": "vt.",
    "meaning": "vt. 限制， 使局限于； 监禁",
    "part": "第一部分：超级核心母词族",
    "group": "【26. fin 界限/限制/结束/精细】",
    "analysis_type": "构词",
    "analysis": "con-（加强） + fin-（边界） -> 严格围圈在边界范围内 -> 限制。"
  },
  {
    "word": "define",
    "phonetic": "/dɪˈfaɪn/",
    "pos": "vt.",
    "meaning": "给…下定义； 界定",
    "part": "第一部分：超级核心母词族",
    "group": "【26. fin 界限/限制/结束/精细】",
    "analysis_type": "构词",
    "analysis": "de-（彻底） + fin-（划定边界） -> 给…下定义。"
  },
  {
    "word": "definite",
    "phonetic": "/ˈdefɪnət/",
    "pos": "adj.",
    "meaning": "明确的， 肯定的",
    "part": "第一部分：超级核心母词族",
    "group": "【26. fin 界限/限制/结束/精细】",
    "analysis_type": "构词",
    "analysis": "de-（彻底） + fin-（边界） + -ite（形容词后缀） -> 明确的，肯定的。"
  },
  {
    "word": "definitely",
    "phonetic": "/ˈdefɪnətli/",
    "pos": "adv.",
    "meaning": "明确地， 必定地",
    "part": "第一部分：超级核心母词族",
    "group": "【26. fin 界限/限制/结束/精细】",
    "analysis_type": "构词",
    "analysis": "definite（明确的） + -ly（副词后缀） -> 明确地，必定地。"
  },
  {
    "word": "definition",
    "phonetic": "/ˌdefɪˈnɪʃn/",
    "pos": "n.",
    "meaning": "定义， 释义； 清晰度",
    "part": "第一部分：超级核心母词族",
    "group": "【26. fin 界限/限制/结束/精细】",
    "analysis_type": "构词",
    "analysis": "define（界定） + -ition（名词后缀） -> 定义，释义。"
  },
  {
    "word": "final",
    "phonetic": "/ˈfaɪnl/",
    "pos": "adj./n.",
    "meaning": "最终的， 决定性的 n. 决赛",
    "part": "第一部分：超级核心母词族",
    "group": "【26. fin 界限/限制/结束/精细】",
    "analysis_type": "构词",
    "analysis": "fin-（终点） + -al（形容词后缀） -> 最终的，决定性的。"
  },
  {
    "word": "finally",
    "phonetic": "/ˈfaɪnəli/",
    "pos": "adv.",
    "meaning": "最终， 终于",
    "part": "第一部分：超级核心母词族",
    "group": "【26. fin 界限/限制/结束/精细】",
    "analysis_type": "构词",
    "analysis": "final（最终的） + -ly（副词后缀） -> 最终，终于。"
  },
  {
    "word": "finance",
    "phonetic": "/ˈfaɪnæns/",
    "pos": "n./vt.",
    "meaning": "财政， 金融 vt. 资助",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "本义指“清偿账目” -> 财政，金融。"
  },
  {
    "word": "financial",
    "phonetic": "/faɪˈnænʃl/",
    "pos": "adj.",
    "meaning": "财政的， 金融的",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "finance（金融） + -ial（形容词后缀） -> 财政的，金融的。"
  },
  {
    "word": "fine",
    "phonetic": "/faɪn/",
    "pos": "adj./vt./n.",
    "meaning": "vt./n. 罚款，处以罚款 adj. 纤细精密的；晴朗美好的；健康的",
    "part": "第一部分：超级核心母词族",
    "group": "【26. fin 界限/限制/结束/精细】",
    "analysis_type": "构词",
    "analysis": "fin-（打磨到极致边） + -e，引申指违规按章罚没的罚款结算 -> 好的。"
  },
  {
    "word": "infinite",
    "phonetic": "/ˈɪnfɪnət/",
    "pos": "adj.",
    "meaning": "无限的， 无穷的",
    "part": "第一部分：超级核心母词族",
    "group": "【26. fin 界限/限制/结束/精细】",
    "analysis_type": "构词",
    "analysis": "in-（无） + fin-（界限） + -ite（形容词后缀） -> 无限的，无穷的。"
  },
  {
    "word": "refine",
    "phonetic": "/rɪˈfaɪn/",
    "pos": "vt.",
    "meaning": "精炼， 提纯； 改善",
    "part": "第一部分：超级核心母词族",
    "group": "【26. fin 界限/限制/结束/精细】",
    "analysis_type": "构词",
    "analysis": "re-（再次） + fine（纯净） -> 精炼，提纯。"
  },
  {
    "word": "describe",
    "phonetic": "/dɪˈskraɪb/",
    "pos": "vt.",
    "meaning": "描述， 形容",
    "part": "第一部分：超级核心母词族",
    "group": "【27. scrib / script 写/记录】",
    "analysis_type": "构词",
    "analysis": "de-（向下） + scribe（书写） -> 描述，形容。"
  },
  {
    "word": "description",
    "phonetic": "/dɪˈskrɪpʃn/",
    "pos": "n.",
    "meaning": "描述， 说明",
    "part": "第一部分：超级核心母词族",
    "group": "【27. scrib / script 写/记录】",
    "analysis_type": "构词",
    "analysis": "describe（描写） + -tion（名词后缀） -> 描述，说明。"
  },
  {
    "word": "inscribe",
    "phonetic": "/ɪnˈskraɪb/",
    "pos": "vt.",
    "meaning": "雕刻， 题写",
    "part": "第一部分：超级核心母词族",
    "group": "【27. scrib / script 写/记录】",
    "analysis_type": "构词",
    "analysis": "in-（向内） + scribe（刻写） -> 雕刻，题写。"
  },
  {
    "word": "manuscript",
    "phonetic": "/ˈmænjuskrɪpt/",
    "pos": "n.",
    "meaning": "手稿， 原稿",
    "part": "第一部分：超级核心母词族",
    "group": "【27. scrib / script 写/记录】",
    "analysis_type": "构词",
    "analysis": "manu-（手） + script（书写文字） -> 手稿，原稿。"
  },
  {
    "word": "prescribe",
    "phonetic": "/prɪˈskraɪb/",
    "pos": "vt./vi.",
    "meaning": "开处方； 规定",
    "part": "第一部分：超级核心母词族",
    "group": "【27. scrib / script 写/记录】",
    "analysis_type": "构词",
    "analysis": "pre-（预先） + scribe（书写） -> 开处方。"
  },
  {
    "word": "prescription",
    "phonetic": "/prɪˈskrɪpʃn/",
    "pos": "n.",
    "meaning": "处方， 药方； 开处方",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、医疗生理与情绪心理】",
    "analysis_type": "构词",
    "analysis": "pre-（提前） + script-（书写） + -ion，引申指处方 -> 处方，药方。"
  },
  {
    "word": "script",
    "phonetic": "/skrɪpt/",
    "pos": "n./vt.",
    "meaning": "剧本， 脚本； 文字",
    "part": "第一部分：超级核心母词族",
    "group": "【27. scrib / script 写/记录】",
    "analysis_type": "构词",
    "analysis": "源自拉丁动词 scribere 之过去分词 scriptum（书写之物等 -> 剧本，脚本。"
  },
  {
    "word": "subscribe",
    "phonetic": "/səbˈskraɪb/",
    "pos": "vi./vt.",
    "meaning": "订阅， 订购（to）； 赞成",
    "part": "第一部分：超级核心母词族",
    "group": "【27. scrib / script 写/记录】",
    "analysis_type": "构词",
    "analysis": "sub-（在下方） + scribe（签字书写） -> 订阅，订购（to）。"
  },
  {
    "word": "subscription",
    "phonetic": "/səbˈskrɪpʃn/",
    "pos": "n.",
    "meaning": "订阅； 订阅费",
    "part": "第一部分：超级核心母词族",
    "group": "【27. scrib / script 写/记录】",
    "analysis_type": "构词",
    "analysis": "subscribe（订阅） + -tion（名词后缀） -> 订阅。"
  },
  {
    "word": "consensus",
    "phonetic": "/kənˈsensəs/",
    "pos": "n.",
    "meaning": "共识， 一致意见",
    "part": "第一部分：超级核心母词族",
    "group": "【28. sens / sent 感觉/感受/意识】",
    "analysis_type": "构词",
    "analysis": "con-（共同） + sens-（感觉） + -us（名词后缀） -> 共识，一致意见。"
  },
  {
    "word": "consent",
    "phonetic": "/kənˈsent/",
    "pos": "vi./n.",
    "meaning": "同意， 赞同（to）",
    "part": "第一部分：超级核心母词族",
    "group": "【28. sens / sent 感觉/感受/意识】",
    "analysis_type": "构词",
    "analysis": "con-（共同） + sent（感受） -> 同意，赞同（to）。"
  },
  {
    "word": "nonsense",
    "phonetic": "/ˈnɒnsns/",
    "pos": "n.",
    "meaning": "胡说， 废话",
    "part": "第一部分：超级核心母词族",
    "group": "【28. sens / sent 感觉/感受/意识】",
    "analysis_type": "构词",
    "analysis": "non-（无） + sense（意义） -> 胡说，废话。"
  },
  {
    "word": "present",
    "phonetic": "/ˈpreznt/",
    "pos": "adj./n./vt.",
    "meaning": "出席的，在场的；现在的；呈现，提出；赠送；礼物",
    "part": "第一部分：超级核心母词族",
    "group": "【28. sens / sent 感觉/感受/意识】",
    "analysis_type": "构词",
    "analysis": "pre-（在面前） + sent-（存在） -> 站在众人面前捧出呈现 -> 出席的，在场的。"
  },
  {
    "word": "represent",
    "phonetic": "/ˌreprɪˈzent/",
    "pos": "vt.",
    "meaning": "代表； 象征",
    "part": "第一部分：超级核心母词族",
    "group": "【28. sens / sent 感觉/感受/意识】",
    "analysis_type": "构词",
    "analysis": "re-（再次） + present（呈现在前） -> 代为表达 -> 代表。"
  },
  {
    "word": "representative",
    "phonetic": "/ˌreprɪˈzentətɪv/",
    "pos": "n./adj.",
    "meaning": "代表 adj. 典型的",
    "part": "第一部分：超级核心母词族",
    "group": "【28. sens / sent 感觉/感受/意识】",
    "analysis_type": "构词",
    "analysis": "represent（代表） + -ative（人） -> 代表，adj.。"
  },
  {
    "word": "resent",
    "phonetic": "/rɪˈzent/",
    "pos": "vt.",
    "meaning": "对…表示愤恨， 怨恨",
    "part": "第一部分：超级核心母词族",
    "group": "【28. sens / sent 感觉/感受/意识】",
    "analysis_type": "构词",
    "analysis": "re-（再次） + sent（感受） -> 对…表示愤恨，怨恨。"
  },
  {
    "word": "resentment",
    "phonetic": "/rɪˈzentmənt/",
    "pos": "n.",
    "meaning": "愤恨， 怨气",
    "part": "第一部分：超级核心母词族",
    "group": "【28. sens / sent 感觉/感受/意识】",
    "analysis_type": "构词",
    "analysis": "resent（怨恨） + -ment（名词后缀） -> 愤恨，怨气。"
  },
  {
    "word": "scent",
    "phonetic": "/sent/",
    "pos": "n./vt.",
    "meaning": "气味， 香味 vt. 嗅到",
    "part": "第一部分：超级核心母词族",
    "group": "【28. sens / sent 感觉/感受/意识】",
    "analysis_type": "构词",
    "analysis": "源自拉丁动词 sentire（感知） -> 气味，香味。"
  },
  {
    "word": "sense",
    "phonetic": "/sens/",
    "pos": "n./vt.",
    "meaning": "感觉； 意义； 理智 vt. 察觉",
    "part": "第一部分：超级核心母词族",
    "group": "【28. sens / sent 感觉/感受/意识】",
    "analysis_type": "构词",
    "analysis": "sens-（感知） + -e，引申为头脑清醒的辨别常识判断力 -> 感觉。"
  },
  {
    "word": "sensible",
    "phonetic": "/ˈsensəbl/",
    "pos": "adj.",
    "meaning": "明智的， 通情达理的",
    "part": "第一部分：超级核心母词族",
    "group": "【28. sens / sent 感觉/感受/意识】",
    "analysis_type": "构词",
    "analysis": "sens-（理智） + -ible（能…的） -> 明智的，通情达理的。"
  },
  {
    "word": "sensitive",
    "phonetic": "/ˈsensətɪv/",
    "pos": "adj.",
    "meaning": "敏感的， 易受伤害的",
    "part": "第一部分：超级核心母词族",
    "group": "【28. sens / sent 感觉/感受/意识】",
    "analysis_type": "构词",
    "analysis": "sens-（感觉敏锐） + -itive（形容词后缀） -> 敏感的，易受伤害的。"
  },
  {
    "word": "sentiment",
    "phonetic": "/ˈsentɪmənt/",
    "pos": "n.",
    "meaning": "情感， 情绪； 观点",
    "part": "第一部分：超级核心母词族",
    "group": "【28. sens / sent 感觉/感受/意识】",
    "analysis_type": "构词",
    "analysis": "sent-（情感） + -i- + -ment（名词后缀） -> 情感，情绪。"
  },
  {
    "word": "blueprint",
    "phonetic": "/ˈbluːprɪnt/",
    "pos": "n.",
    "meaning": "蓝图， 设计图； 方案",
    "part": "第一部分：超级核心母词族",
    "group": "【29. press / print 压/按/挤压/印刷】",
    "analysis_type": "构词",
    "analysis": "blue（蓝色） + print（晒印印刷） -> 宏伟规划蓝图 -> 蓝图，设计图。"
  },
  {
    "word": "compress",
    "phonetic": "/kəmˈpres/",
    "pos": "vt./n.",
    "meaning": "压紧， 压缩； 精简（语言等）",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "com-（共同） + press（按压） -> 从四周向内施力聚拢 -> 压紧，压缩。"
  },
  {
    "word": "depress",
    "phonetic": "/dɪˈpres/",
    "pos": "vt.",
    "meaning": "使沮丧； 使萧条； 按下",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、医疗生理与情绪心理】",
    "analysis_type": "构词",
    "analysis": "de-（向下） + press（按压） -> 心情或经济被向下重压 -> 使沮丧。"
  },
  {
    "word": "depression",
    "phonetic": "/dɪˈpreʃn/",
    "pos": "n.",
    "meaning": "忧郁， 抑郁症； 萧条， 不景气",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、医疗生理与情绪心理】",
    "analysis_type": "构词",
    "analysis": "depress（使低沉） + -ion（名词后缀） -> 长期处于低沉压抑状态 -> 忧郁，抑郁症。"
  },
  {
    "word": "express",
    "phonetic": "/ɪkˈspres/",
    "pos": "vt./adj.",
    "meaning": "adj. 特快的，快捷的；明确清晰的 n. 特快列车，快递业务 vt. 表达",
    "part": "第一部分：超级核心母词族",
    "group": "【29. press / print 压/按/挤压/印刷】",
    "analysis_type": "构词",
    "analysis": "ex-（向外） + press（挤压榨出） -> 表达。"
  },
  {
    "word": "expression",
    "phonetic": "/ɪkˈspreʃn/",
    "pos": "n.",
    "meaning": "表达， 表情； 词语",
    "part": "第一部分：超级核心母词族",
    "group": "【29. press / print 压/按/挤压/印刷】",
    "analysis_type": "构词",
    "analysis": "express（表达） + -ion（名词后缀） -> 表达，表情。"
  },
  {
    "word": "fingerprint",
    "phonetic": "/ˈfɪŋɡəprɪnt/",
    "pos": "n.",
    "meaning": "指纹， 手印",
    "part": "第一部分：超级核心母词族",
    "group": "【29. press / print 压/按/挤压/印刷】",
    "analysis_type": "构词",
    "analysis": "finger（手指） + print（印痕） -> 指纹，手印。"
  },
  {
    "word": "impress",
    "phonetic": "/ɪmˈpres/",
    "pos": "vt.",
    "meaning": "给…深刻印象",
    "part": "第一部分：超级核心母词族",
    "group": "【29. press / print 压/按/挤压/印刷】",
    "analysis_type": "构词",
    "analysis": "im-（进入） + press（压印） -> 给…深刻印象。"
  },
  {
    "word": "impression",
    "phonetic": "/ɪmˈpreʃn/",
    "pos": "n.",
    "meaning": "印象， 感想",
    "part": "第一部分：超级核心母词族",
    "group": "【29. press / print 压/按/挤压/印刷】",
    "analysis_type": "构词",
    "analysis": "impress（留下印记） + -ion（名词后缀） -> 印象，感想。"
  },
  {
    "word": "impressive",
    "phonetic": "/ɪmˈpresɪv/",
    "pos": "adj.",
    "meaning": "令人钦佩的， 深刻的",
    "part": "第一部分：超级核心母词族",
    "group": "【29. press / print 压/按/挤压/印刷】",
    "analysis_type": "构词",
    "analysis": "impress（留下印象） + -ive（形容词后缀） -> 令人钦佩的，深刻的。"
  },
  {
    "word": "oppress",
    "phonetic": "/əˈpres/",
    "pos": "vt.",
    "meaning": "压迫， 压制",
    "part": "第一部分：超级核心母词族",
    "group": "【29. press / print 压/按/挤压/印刷】",
    "analysis_type": "构词",
    "analysis": "ob-（对着） + press（按压） -> 压迫，压制。"
  },
  {
    "word": "press",
    "phonetic": "/pres/",
    "pos": "vt./n.",
    "meaning": "压， 按； 新闻界， 出版界",
    "part": "第一部分：超级核心母词族",
    "group": "【29. press / print 压/按/挤压/印刷】",
    "analysis_type": "构词",
    "analysis": "源自拉丁动词 premere（挤压） -> 压，按。"
  },
  {
    "word": "pressure",
    "phonetic": "/ˈpreʃə(r)/",
    "pos": "n./vt.",
    "meaning": "压力， 压迫",
    "part": "第一部分：超级核心母词族",
    "group": "【29. press / print 压/按/挤压/印刷】",
    "analysis_type": "构词",
    "analysis": "press（按压） + -ure（名词后缀） -> 压力，压迫。"
  },
  {
    "word": "print",
    "phonetic": "/prɪnt/",
    "pos": "vt./n.",
    "meaning": "打印， 印刷 n. 印迹",
    "part": "第一部分：超级核心母词族",
    "group": "【29. press / print 压/按/挤压/印刷】",
    "analysis_type": "构词",
    "analysis": "本义指“按压压出的印” -> 打印，印刷。"
  },
  {
    "word": "repress",
    "phonetic": "/rɪˈpres/",
    "pos": "vt.",
    "meaning": "抑制， 压抑",
    "part": "第一部分：超级核心母词族",
    "group": "【29. press / print 压/按/挤压/印刷】",
    "analysis_type": "构词",
    "analysis": "re-（向后） + press（挤压） -> 抑制，压抑。"
  },
  {
    "word": "suppress",
    "phonetic": "/səˈpres/",
    "pos": "vt.",
    "meaning": "镇压， 平定； 查禁",
    "part": "第一部分：超级核心母词族",
    "group": "【29. press / print 压/按/挤压/印刷】",
    "analysis_type": "构词",
    "analysis": "sub-（从下方） + press（压住） -> 镇压，平定。"
  },
  {
    "word": "apologize",
    "phonetic": "/əˈpɒlədʒaɪz/",
    "pos": "vi.",
    "meaning": "道歉， 认错， 赔礼",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "apology（道歉） + -ize（动词后缀） -> 道歉，认错。"
  },
  {
    "word": "apology",
    "phonetic": "/əˈpɒlədʒi/",
    "pos": "n.",
    "meaning": "道歉， 认错",
    "part": "第一部分：超级核心母词族",
    "group": "【30. log / logy / loqu 言语/理性/学科】",
    "analysis_type": "构词",
    "analysis": "apo-（离开） + log-（说话） -> 道歉，认错。"
  },
  {
    "word": "biology",
    "phonetic": "/baɪˈɒlədʒi/",
    "pos": "n.",
    "meaning": "生物学； 生态学",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然地理、动植物与环境保护】",
    "analysis_type": "构词",
    "analysis": "bio-（生命） + -logy（学科） -> 生物学。"
  },
  {
    "word": "catalogue",
    "phonetic": "/ˈkætəlɒɡ/",
    "pos": "n./vt.",
    "meaning": "目录 vt. 编入目录",
    "part": "第一部分：超级核心母词族",
    "group": "【30. log / logy / loqu 言语/理性/学科】",
    "analysis_type": "构词",
    "analysis": "cata-（向下） + log-（挑选） -> 目录，vt.。"
  },
  {
    "word": "dialogue",
    "phonetic": "/ˈdaɪəlɒɡ/",
    "pos": "n.",
    "meaning": "对话， 交流",
    "part": "第一部分：超级核心母词族",
    "group": "【30. log / logy / loqu 言语/理性/学科】",
    "analysis_type": "构词",
    "analysis": "dia-（在两者之间） + log-（说话） -> 对话，交流。"
  },
  {
    "word": "logic",
    "phonetic": "/ˈlɒdʒɪk/",
    "pos": "n.",
    "meaning": "逻辑， 逻辑学； 条理性",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "log-（说） + -ic（名词后缀） -> 经严谨推导的思辨 -> 逻辑，逻辑学。"
  },
  {
    "word": "logical",
    "phonetic": "/ˈlɒdʒɪkl/",
    "pos": "adj.",
    "meaning": "逻辑的， 符合逻辑的； 合理的",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "logic（逻辑） + -al（形容词后缀） -> 遵循严密推理事理的 -> 逻辑的，符合逻辑的。"
  },
  {
    "word": "psychology",
    "phonetic": "/saɪˈkɒlədʒi/",
    "pos": "n.",
    "meaning": "心理学； 心理状态",
    "part": "第一部分：超级核心母词族",
    "group": "【30. log / logy / loqu 言语/理性/学科】",
    "analysis_type": "构词",
    "analysis": "psycho-（心灵） + -logy（学科） -> 心理学。"
  },
  {
    "word": "sociology",
    "phonetic": "/ˌsəʊsiˈɒlədʒi/",
    "pos": "n.",
    "meaning": "社会学",
    "part": "第一部分：超级核心母词族",
    "group": "【30. log / logy / loqu 言语/理性/学科】",
    "analysis_type": "构词",
    "analysis": "socio-（社会） + -logy（学科） -> 社会学。"
  },
  {
    "word": "affluent",
    "phonetic": "/ˈæfluənt/",
    "pos": "adj.",
    "meaning": "富裕的， 富足的",
    "part": "第一部分：超级核心母词族",
    "group": "【31. flu / flux / fluid 流/流动/溢出】",
    "analysis_type": "构词",
    "analysis": "af-（ad- 朝向） + flu-（流动） + -ent，引申指富裕的 -> 富裕的，富足的。"
  },
  {
    "word": "flood",
    "phonetic": "/flʌd/",
    "pos": "n./v.",
    "meaning": "n. 洪水； 大量 vt./vi. 淹没",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然地理、动植物与环境保护】",
    "analysis_type": "构词",
    "analysis": "与 flow/flu 同源 -> 水溢出漫灌 -> 洪水。"
  },
  {
    "word": "fluctuate",
    "phonetic": "/ˈflʌktʃueɪt/",
    "pos": "vi.",
    "meaning": "波动， 起伏",
    "part": "第一部分：超级核心母词族",
    "group": "【31. flu / flux / fluid 流/流动/溢出】",
    "analysis_type": "构词",
    "analysis": "fluct-（波浪） + -uate（动词后缀） -> 波动，起伏。"
  },
  {
    "word": "fluctuation",
    "phonetic": "/ˌflʌktʃuˈeɪʃn/",
    "pos": "n.",
    "meaning": "波动， 起伏",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "fluctuate（波动） + -ion（名词后缀） -> 波动，起伏。"
  },
  {
    "word": "fluency",
    "phonetic": "/ˈfluːənsi/",
    "pos": "n.",
    "meaning": "流利， 流畅",
    "part": "第一部分：超级核心母词族",
    "group": "【31. flu / flux / fluid 流/流动/溢出】",
    "analysis_type": "构词",
    "analysis": "flu-（流动） + -ency（名词后缀） -> 流利，流畅。"
  },
  {
    "word": "fluent",
    "phonetic": "/ˈfluːənt/",
    "pos": "adj.",
    "meaning": "（语言）流利的",
    "part": "第一部分：超级核心母词族",
    "group": "【31. flu / flux / fluid 流/流动/溢出】",
    "analysis_type": "构词",
    "analysis": "flu-（流动） + -ent（形容词后缀） -> （语言）流利的。"
  },
  {
    "word": "fluid",
    "phonetic": "/ˈfluːɪd/",
    "pos": "n./adj.",
    "meaning": "流体， 液体 adj. 流动的",
    "part": "第一部分：超级核心母词族",
    "group": "【31. flu / flux / fluid 流/流动/溢出】",
    "analysis_type": "构词",
    "analysis": "flu-（流动） + -id（形容词） -> 流体，液体。"
  },
  {
    "word": "flush",
    "phonetic": "/flʌʃ/",
    "pos": "vi./vt.",
    "meaning": "脸红； 冲洗",
    "part": "第一部分：超级核心母词族",
    "group": "【31. flu / flux / fluid 流/流动/溢出】",
    "analysis_type": "构词",
    "analysis": "源自拟声/古动词 -> 水流猛烈奔涌冲刷马桶污秽 -> 脸红。"
  },
  {
    "word": "influence",
    "phonetic": "/ˈɪnfluəns/",
    "pos": "n./vt.",
    "meaning": "影响， 感化力",
    "part": "第一部分：超级核心母词族",
    "group": "【31. flu / flux / fluid 流/流动/溢出】",
    "analysis_type": "构词",
    "analysis": "in-（进入） + flu-（流动） + -ence，引申为潜移默化的支配熏陶感染力 -> 影响，感化力。"
  },
  {
    "word": "influential",
    "phonetic": "/ˌɪnfluˈenʃl/",
    "pos": "adj.",
    "meaning": "有很大影响力的",
    "part": "第一部分：超级核心母词族",
    "group": "【31. flu / flux / fluid 流/流动/溢出】",
    "analysis_type": "构词",
    "analysis": "influence（影响力） + -tial（形容词后缀） -> 有很大影响力的。"
  },
  {
    "word": "influenza",
    "phonetic": "/ˌɪnfluˈenzə/",
    "pos": "n.",
    "meaning": "流感",
    "part": "第一部分：超级核心母词族",
    "group": "【31. flu / flux / fluid 流/流动/溢出】",
    "analysis_type": "构词",
    "analysis": "源自意大利语 influenza（流注） -> 流感。"
  },
  {
    "word": "stream",
    "phonetic": "/striːm/",
    "pos": "n./vi.",
    "meaning": "小溪； 川流 vi. 流出",
    "part": "第一部分：超级核心母词族",
    "group": "【31. flu / flux / fluid 流/流动/溢出】",
    "analysis_type": "构词",
    "analysis": "核心意象为“流动之水” -> 小溪。"
  },
  {
    "word": "close",
    "phonetic": "/kləʊz/",
    "pos": "v./adj.",
    "meaning": "关闭； 终止 adj. 亲密的",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "源自拉丁动词 claudere（关闭） -> 关闭。"
  },
  {
    "word": "closet",
    "phonetic": "/ˈklɒzɪt/",
    "pos": "n.",
    "meaning": "壁橱， 储藏室",
    "part": "第一部分：超级核心母词族",
    "group": "【32. clud / clus / clos 关闭/封锁】",
    "analysis_type": "构词",
    "analysis": "close（关闭） + -et（指小后缀） -> 壁橱，储藏室。"
  },
  {
    "word": "conclude",
    "phonetic": "/kənˈkluːd/",
    "pos": "vt./vi.",
    "meaning": "推断出； 使结束",
    "part": "第一部分：超级核心母词族",
    "group": "【32. clud / clus / clos 关闭/封锁】",
    "analysis_type": "构词",
    "analysis": "con-（共同） + clud-（关门） -> 推断出。"
  },
  {
    "word": "conclusion",
    "phonetic": "/kənˈkluːʒn/",
    "pos": "n.",
    "meaning": "结论， 推论； 结尾",
    "part": "第一部分：超级核心母词族",
    "group": "【32. clud / clus / clos 关闭/封锁】",
    "analysis_type": "构词",
    "analysis": "conclude（结项断定） + -ion（名词后缀） -> 结论，推论。"
  },
  {
    "word": "disclose",
    "phonetic": "/dɪsˈkləʊz/",
    "pos": "vt.",
    "meaning": "揭露， 泄露， 公开",
    "part": "第一部分：超级核心母词族",
    "group": "【32. clud / clus / clos 关闭/封锁】",
    "analysis_type": "构词",
    "analysis": "dis-（解开） + close（闭合锁闭） -> 揭露，泄露。"
  },
  {
    "word": "enclose",
    "phonetic": "/ɪnˈkləʊz/",
    "pos": "vt.",
    "meaning": "围住， 包围； 随函附上",
    "part": "第一部分：超级核心母词族",
    "group": "【32. clud / clus / clos 关闭/封锁】",
    "analysis_type": "构词",
    "analysis": "en-（置于内） + close（关闭） -> 围住，包围。"
  },
  {
    "word": "exclude",
    "phonetic": "/ɪkˈskluːd/",
    "pos": "vt.",
    "meaning": "排除在外， 排斥",
    "part": "第一部分：超级核心母词族",
    "group": "【32. clud / clus / clos 关闭/封锁】",
    "analysis_type": "构词",
    "analysis": "ex-（向外） + clud-（关门） -> 排除在外，排斥。"
  },
  {
    "word": "exclusive",
    "phonetic": "/ɪkˈskluːsɪv/",
    "pos": "adj.",
    "meaning": "专有的， 独占的； 排他的",
    "part": "第一部分：超级核心母词族",
    "group": "【32. clud / clus / clos 关闭/封锁】",
    "analysis_type": "构词",
    "analysis": "exclude（排除在外） + -ive（形容词） -> 专有的，独占的。"
  },
  {
    "word": "include",
    "phonetic": "/ɪnˈkluːd/",
    "pos": "vt.",
    "meaning": "包括， 包含， 计入",
    "part": "第一部分：超级核心母词族",
    "group": "【32. clud / clus / clos 关闭/封锁】",
    "analysis_type": "构词",
    "analysis": "in-（向内） + clud-（关门） -> 包括，包含。"
  },
  {
    "word": "including",
    "phonetic": "/ɪnˈkluːdɪŋ/",
    "pos": "prep.",
    "meaning": "包含， 包括…在内",
    "part": "第一部分：超级核心母词族",
    "group": "【32. clud / clus / clos 关闭/封锁】",
    "analysis_type": "构词",
    "analysis": "include（包括） + -ing（介词化后缀） -> 包含，包括…在内。"
  },
  {
    "word": "compensate",
    "phonetic": "/ˈkɒmpenseɪt/",
    "pos": "vt./vi.",
    "meaning": "vt./vi. 补偿， 赔偿； 抵消",
    "part": "第一部分：超级核心母词族",
    "group": "【33. pend / pens 悬挂/称重/付出/依赖】",
    "analysis_type": "构词",
    "analysis": "com-（共同） + pens-（称重） + -ate，放砝码平衡 -> / 补偿， 赔偿。"
  },
  {
    "word": "depend",
    "phonetic": "/dɪˈpend/",
    "pos": "vi.",
    "meaning": "依靠， 取决于（on）",
    "part": "第一部分：超级核心母词族",
    "group": "【33. pend / pens 悬挂/称重/付出/依赖】",
    "analysis_type": "构词",
    "analysis": "de-（向下） + pend（悬挂） -> 依靠，取决于（on）。"
  },
  {
    "word": "dependant",
    "phonetic": "/dɪˈpendənt/",
    "pos": "n.",
    "meaning": "受赡养者， 受抚养家属",
    "part": "第一部分：超级核心母词族",
    "group": "【33. pend / pens 悬挂/称重/付出/依赖】",
    "analysis_type": "构词",
    "analysis": "depend（依赖） + -ant（人） -> 受赡养者，受抚养家属。"
  },
  {
    "word": "dependent",
    "phonetic": "/dɪˈpendənt/",
    "pos": "adj.",
    "meaning": "依靠的， 依赖的（on）",
    "part": "第一部分：超级核心母词族",
    "group": "【33. pend / pens 悬挂/称重/付出/依赖】",
    "analysis_type": "构词",
    "analysis": "depend（依靠） + -ent（形容词后缀） -> 依靠的，依赖的（on）。"
  },
  {
    "word": "expend",
    "phonetic": "/ɪkˈspend/",
    "pos": "vt.",
    "meaning": "花费， 消耗（时间/精力）",
    "part": "第一部分：超级核心母词族",
    "group": "【33. pend / pens 悬挂/称重/付出/依赖】",
    "analysis_type": "构词",
    "analysis": "ex-（向外） + pend（称量付钱） -> 花费，消耗（时间。"
  },
  {
    "word": "expenditure",
    "phonetic": "/ɪkˈspendɪtʃə(r)/",
    "pos": "n.",
    "meaning": "支出， 花费； 经费",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "expend（花费） + -i- + -ture（名词后缀） -> 支出，花费。"
  },
  {
    "word": "expensive",
    "phonetic": "/ɪkˈspensɪv/",
    "pos": "adj.",
    "meaning": "昂贵的， 花钱多的",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "expend（耗费） + -sive（形容词后缀） -> 昂贵的，花钱多的。"
  },
  {
    "word": "independence",
    "phonetic": "/ˌɪndɪˈpendəns/",
    "pos": "n.",
    "meaning": "独立， 自主",
    "part": "第一部分：超级核心母词族",
    "group": "【33. pend / pens 悬挂/称重/付出/依赖】",
    "analysis_type": "构词",
    "analysis": "in-（不） + dependence（依附依赖） -> 独立，自主。"
  },
  {
    "word": "independent",
    "phonetic": "/ˌɪndɪˈpendənt/",
    "pos": "adj.",
    "meaning": "独立的， 自主的",
    "part": "第一部分：超级核心母词族",
    "group": "【33. pend / pens 悬挂/称重/付出/依赖】",
    "analysis_type": "构词",
    "analysis": "in-（不） + dependent（依赖的） -> 独立的，自主的。"
  },
  {
    "word": "pension",
    "phonetic": "/ˈpenʃn/",
    "pos": "n.",
    "meaning": "养老金， 退休金",
    "part": "第一部分：超级核心母词族",
    "group": "【33. pend / pens 悬挂/称重/付出/依赖】",
    "analysis_type": "构词",
    "analysis": "pens-（支付） + -ion（名词后缀） -> 养老金，退休金。"
  },
  {
    "word": "suspend",
    "phonetic": "/səˈspend/",
    "pos": "vt.",
    "meaning": "暂停， 中止； 悬挂",
    "part": "第一部分：超级核心母词族",
    "group": "【33. pend / pens 悬挂/称重/付出/依赖】",
    "analysis_type": "构词",
    "analysis": "sub-（在下方） + pend（悬挂） -> 暂停，中止。"
  },
  {
    "word": "suspension",
    "phonetic": "/səˈspenʃn/",
    "pos": "n.",
    "meaning": "暂停， 中止； 悬挂",
    "part": "第一部分：超级核心母词族",
    "group": "【33. pend / pens 悬挂/称重/付出/依赖】",
    "analysis_type": "构词",
    "analysis": "suspend（悬吊） + -ion（名词后缀） -> 暂停，中止。"
  },
  {
    "word": "acclaim",
    "phonetic": "/əˈkleɪm/",
    "pos": "vt./n.",
    "meaning": "欢呼， 喝彩， 赞誉",
    "part": "第一部分：超级核心母词族",
    "group": "【34. claim / clam 呼喊/声称】",
    "analysis_type": "构词",
    "analysis": "ac-（ad- 朝向） + claim（大声呼喊） -> 欢呼，喝彩。"
  },
  {
    "word": "claim",
    "phonetic": "/kleɪm/",
    "pos": "vt./n.",
    "meaning": "声称，主张；索赔；认领；索取",
    "part": "第一部分：超级核心母词族",
    "group": "【34. claim / clam 呼喊/声称】",
    "analysis_type": "构词",
    "analysis": "clam-（大声呼喊） -> 当众大声主张自身权益 -> 声称，主张。"
  },
  {
    "word": "declare",
    "phonetic": "/dɪˈkleə(r)/",
    "pos": "vt.",
    "meaning": "宣布， 公布； 申报",
    "part": "第一部分：超级核心母词族",
    "group": "【34. claim / clam 呼喊/声称】",
    "analysis_type": "构词",
    "analysis": "de-（彻底） + clar-（清楚） + -e，引申指宣布 -> 宣布，公布。"
  },
  {
    "word": "exclaim",
    "phonetic": "/ɪkˈskleɪm/",
    "pos": "vt./vi.",
    "meaning": "呼喊， 惊叫",
    "part": "第一部分：超级核心母词族",
    "group": "【34. claim / clam 呼喊/声称】",
    "analysis_type": "构词",
    "analysis": "ex-（向外） + claim（呼喊） -> 呼喊，惊叫。"
  },
  {
    "word": "proclaim",
    "phonetic": "/prəˈkleɪm/",
    "pos": "vt.",
    "meaning": "宣告， 宣布； 声明",
    "part": "第一部分：超级核心母词族",
    "group": "【34. claim / clam 呼喊/声称】",
    "analysis_type": "构词",
    "analysis": "pro-（向前） + claim（呼喊宣告） -> 宣告，宣布。"
  },
  {
    "word": "reclaim",
    "phonetic": "/rɪˈkleɪm/",
    "pos": "vt.",
    "meaning": "收回； 开垦， 回收利用",
    "part": "第一部分：超级核心母词族",
    "group": "【34. claim / clam 呼喊/声称】",
    "analysis_type": "构词",
    "analysis": "re-（重新） + claim（呼喊认领） -> 收回。"
  },
  {
    "word": "assign",
    "phonetic": "/əˈsaɪn/",
    "pos": "vt.",
    "meaning": "指派， 分配； 布置（作业）",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "as-（ad- 朝向） + sign（签字盖印） -> 指派，分配。"
  },
  {
    "word": "assignment",
    "phonetic": "/əˈsaɪnmənt/",
    "pos": "n.",
    "meaning": "任务， 作业； 分配",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "assign（分配任务） + -ment（名词后缀） -> 任务，作业。"
  },
  {
    "word": "resign",
    "phonetic": "/rɪˈzaɪn/",
    "pos": "vt./vi.",
    "meaning": "辞职； 放弃",
    "part": "第一部分：超级核心母词族",
    "group": "【35. sign / signi 标记/信号/迹象】",
    "analysis_type": "构词",
    "analysis": "re-（解开） + sign（签字盖印） -> 不得不听任命运安排 -> 辞职。"
  },
  {
    "word": "sign",
    "phonetic": "/saɪn/",
    "pos": "n./vt.",
    "meaning": "迹象； 标记 vt. 签名",
    "part": "第一部分：超级核心母词族",
    "group": "【35. sign / signi 标记/信号/迹象】",
    "analysis_type": "构词",
    "analysis": "词根 signum（记号） -> 迹象。"
  },
  {
    "word": "signal",
    "phonetic": "/ˈsɪɡnəl/",
    "pos": "n./vt.",
    "meaning": "信号， 暗号 vt. 发信号",
    "part": "第一部分：超级核心母词族",
    "group": "【35. sign / signi 标记/信号/迹象】",
    "analysis_type": "构词",
    "analysis": "sign-（记号） + -al（名词） -> 信号，暗号。"
  },
  {
    "word": "signature",
    "phonetic": "/ˈsɪɡnətʃə(r)/",
    "pos": "n.",
    "meaning": "签名， 署名； 鲜明特征",
    "part": "第一部分：超级核心母词族",
    "group": "【35. sign / signi 标记/信号/迹象】",
    "analysis_type": "构词",
    "analysis": "sign（签名） + -ature（名词后缀） -> 签名，署名。"
  },
  {
    "word": "significance",
    "phonetic": "/sɪɡˈnɪfɪkəns/",
    "pos": "n.",
    "meaning": "重要性， 重大意义",
    "part": "第一部分：超级核心母词族",
    "group": "【35. sign / signi 标记/信号/迹象】",
    "analysis_type": "构词",
    "analysis": "signific-（带有深刻含义） + -ance（名词后缀） -> 重要性，重大意义。"
  },
  {
    "word": "significant",
    "phonetic": "/sɪɡˈnɪfɪkənt/",
    "pos": "adj.",
    "meaning": "重大的， 显著的",
    "part": "第一部分：超级核心母词族",
    "group": "【35. sign / signi 标记/信号/迹象】",
    "analysis_type": "构词",
    "analysis": "signific-（有标志性含义） + -ant（形容词后缀） -> 重大的，显著的。"
  },
  {
    "word": "export",
    "phonetic": "/ˈekspɔːt/",
    "pos": "v./n.",
    "meaning": "出口， 输出 n. 出口产品",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "ex-（向外） + port（港口） -> 出口，输出。"
  },
  {
    "word": "import",
    "phonetic": "/ˈɪmpɔːt/",
    "pos": "vt./n.",
    "meaning": "进口， 输入",
    "part": "第一部分：超级核心母词族",
    "group": "【36. port 搬运/携带/港口】",
    "analysis_type": "构词",
    "analysis": "im-（向内） + port（港口运入） -> 进口，输入。"
  },
  {
    "word": "opportunity",
    "phonetic": "/ˌɒpəˈtjuːnəti/",
    "pos": "n.",
    "meaning": "机会， 时机， 良机",
    "part": "第一部分：超级核心母词族",
    "group": "【36. port 搬运/携带/港口】",
    "analysis_type": "构词",
    "analysis": "op-（ob- 朝向） + port-（港口） + -unity，引申指机会 -> 机会，时机。"
  },
  {
    "word": "passport",
    "phonetic": "/ˈpɑːspɔːt/",
    "pos": "n.",
    "meaning": "护照； 手段",
    "part": "第一部分：超级核心母词族",
    "group": "【36. port 搬运/携带/港口】",
    "analysis_type": "构词",
    "analysis": "pass（通行） + port（港口） -> 护照。"
  },
  {
    "word": "port",
    "phonetic": "/pɔːt/",
    "pos": "n.",
    "meaning": "港口， 港市",
    "part": "第一部分：超级核心母词族",
    "group": "【36. port 搬运/携带/港口】",
    "analysis_type": "构词",
    "analysis": "词根 portus（港口） -> 港口，港市。"
  },
  {
    "word": "portable",
    "phonetic": "/ˈpɔːtəbl/",
    "pos": "adj.",
    "meaning": "便携式的， 轻便的",
    "part": "第一部分：超级核心母词族",
    "group": "【36. port 搬运/携带/港口】",
    "analysis_type": "构词",
    "analysis": "port（搬运） + -able（能…的） -> 便携式的，轻便的。"
  },
  {
    "word": "porter",
    "phonetic": "/ˈpɔːtə(r)/",
    "pos": "n.",
    "meaning": "搬运工； 门卫",
    "part": "第一部分：超级核心母词族",
    "group": "【36. port 搬运/携带/港口】",
    "analysis_type": "构词",
    "analysis": "port（搬运） + -er（人） -> 搬运工。"
  },
  {
    "word": "support",
    "phonetic": "/səˈpɔːt/",
    "pos": "vt./n.",
    "meaning": "支持， 拥护； 供养",
    "part": "第一部分：超级核心母词族",
    "group": "【36. port 搬运/携带/港口】",
    "analysis_type": "构词",
    "analysis": "sup-（sub- 从） + port（挑起） -> 出资抚养或道义声援 -> 支持，拥护。"
  },
  {
    "word": "transport",
    "phonetic": "/ˈtrænspɔːt/",
    "pos": "n./vt.",
    "meaning": "运输， 运送 vt. 运输",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "trans-（跨越） + port（运载） -> 运输，运送。"
  },
  {
    "word": "transportation",
    "phonetic": "/ˌtrænspɔːˈteɪʃn/",
    "pos": "n.",
    "meaning": "运输系统， 运输工具； 运输",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "transport（运输） + -ation（名词后缀） -> 运输系统，运输工具。"
  },
  {
    "word": "flexibility",
    "phonetic": "/ˌfleksəˈbɪləti/",
    "pos": "n.",
    "meaning": "柔韧性； 灵活性",
    "part": "第一部分：超级核心母词族",
    "group": "【37. flect / flex 弯曲/折回】",
    "analysis_type": "构词",
    "analysis": "flex-（弯曲） + -ibility（名词后缀） -> 柔韧性。"
  },
  {
    "word": "flexible",
    "phonetic": "/ˈfleksəbl/",
    "pos": "adj.",
    "meaning": "柔韧的； 易弯曲的； 灵活的",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "flex-（弯曲） + -ible（可…的） -> 柔韧的。"
  },
  {
    "word": "reflect",
    "phonetic": "/rɪˈflekt/",
    "pos": "vt./vi.",
    "meaning": "vi. 深思，反思，沉思回顾（on） vt. 反映，显示；反射（光热）",
    "part": "第一部分：超级核心母词族",
    "group": "【37. flect / flex 弯曲/折回】",
    "analysis_type": "构词",
    "analysis": "re-（回） + flect-（弯曲） -> 折返回来审视自身或映照外界 -> 反映，显示。"
  },
  {
    "word": "reflection",
    "phonetic": "/rɪˈflekʃn/",
    "pos": "n.",
    "meaning": "反射； 倒影； 深思",
    "part": "第一部分：超级核心母词族",
    "group": "【37. flect / flex 弯曲/折回】",
    "analysis_type": "构词",
    "analysis": "reflect（反射） + -ion（名词后缀） -> 反射。"
  },
  {
    "word": "absolute",
    "phonetic": "/ˈæbsəluːt/",
    "pos": "adj.",
    "meaning": "绝对的， 完全的",
    "part": "第一部分：超级核心母词族",
    "group": "【38. solv / solut 解开/松弛/溶解】",
    "analysis_type": "构词",
    "analysis": "ab-（离开） + solute（解脱） -> 绝对的，完全的。"
  },
  {
    "word": "dissolve",
    "phonetic": "/dɪˈzɒlv/",
    "pos": "vt./vi.",
    "meaning": "溶解； 解散； 消除",
    "part": "第一部分：超级核心母词族",
    "group": "【38. solv / solut 解开/松弛/溶解】",
    "analysis_type": "构词",
    "analysis": "dis-（分离） + solve（解开） -> 溶解。"
  },
  {
    "word": "resolution",
    "phonetic": "/ˌrezəˈluːʃn/",
    "pos": "n.",
    "meaning": "决议； 解决； 分辨率",
    "part": "第一部分：超级核心母词族",
    "group": "【38. solv / solut 解开/松弛/溶解】",
    "analysis_type": "构词",
    "analysis": "re-（彻底） + solut-（解开） + -ion（名词后缀） -> 大会表决通过的决议 -> 决议。"
  },
  {
    "word": "resolve",
    "phonetic": "/rɪˈzɒlv/",
    "pos": "vt./vi./n.",
    "meaning": "解决； 下决心",
    "part": "第一部分：超级核心母词族",
    "group": "【38. solv / solut 解开/松弛/溶解】",
    "analysis_type": "构词",
    "analysis": "re-（彻底） + solve（松绑） -> 解决。"
  },
  {
    "word": "solution",
    "phonetic": "/səˈluːʃn/",
    "pos": "n.",
    "meaning": "解决办法； 溶液",
    "part": "第一部分：超级核心母词族",
    "group": "【38. solv / solut 解开/松弛/溶解】",
    "analysis_type": "构词",
    "analysis": "solut-（解开） + -ion（名词后缀） -> 解决办法。"
  },
  {
    "word": "solve",
    "phonetic": "/sɒlv/",
    "pos": "vt.",
    "meaning": "解决， 解答",
    "part": "第一部分：超级核心母词族",
    "group": "【38. solv / solut 解开/松弛/溶解】",
    "analysis_type": "构词",
    "analysis": "源自拉丁动词 solvere（松开） -> 解决，解答。"
  },
  {
    "word": "bankrupt",
    "phonetic": "/ˈbæŋkrʌpt/",
    "pos": "adj./n./vt.",
    "meaning": "破产的 n. 破产者 vt. 使破产",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "bank（长凳） + rupt（破裂） -> 破产的，n.。"
  },
  {
    "word": "bankruptcy",
    "phonetic": "/ˈbæŋkrəptsi/",
    "pos": "n.",
    "meaning": "破产， 破产状态",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "bankrupt（破产） + -cy（名词后缀） -> 破产，破产状态。"
  },
  {
    "word": "corrupt",
    "phonetic": "/kəˈrʌpt/",
    "pos": "adj./vt.",
    "meaning": "腐败的， 贪污的",
    "part": "第一部分：超级核心母词族",
    "group": "【39. rupt 打破/断裂/破裂】",
    "analysis_type": "构词",
    "analysis": "cor-（com- 彻） + rupt（破碎） -> 道德沦丧贪赃枉法 -> 腐败的，贪污的。"
  },
  {
    "word": "corruption",
    "phonetic": "/kəˈrʌpʃn/",
    "pos": "n.",
    "meaning": "腐败， 贪污",
    "part": "第一部分：超级核心母词族",
    "group": "【39. rupt 打破/断裂/破裂】",
    "analysis_type": "构词",
    "analysis": "corrupt（腐败） + -ion（名词后缀） -> 腐败，贪污。"
  },
  {
    "word": "disrupt",
    "phonetic": "/dɪsˈrʌpt/",
    "pos": "vt.",
    "meaning": "扰乱， 破坏； 使中断",
    "part": "第一部分：超级核心母词族",
    "group": "【39. rupt 打破/断裂/破裂】",
    "analysis_type": "构词",
    "analysis": "dis-（分离） + rupt（破裂） -> 扰乱，破坏。"
  },
  {
    "word": "disruption",
    "phonetic": "/dɪsˈrʌpʃn/",
    "pos": "n.",
    "meaning": "混乱， 中断",
    "part": "第一部分：超级核心母词族",
    "group": "【39. rupt 打破/断裂/破裂】",
    "analysis_type": "构词",
    "analysis": "disrupt（扰乱） + -ion（名词后缀） -> 混乱，中断。"
  },
  {
    "word": "erupt",
    "phonetic": "/ɪˈrʌpt/",
    "pos": "vi.",
    "meaning": "爆发， 喷发",
    "part": "第一部分：超级核心母词族",
    "group": "【39. rupt 打破/断裂/破裂】",
    "analysis_type": "构词",
    "analysis": "e-（向外） + rupt（破裂） -> 或情绪骤然爆发 -> 爆发，喷发。"
  },
  {
    "word": "interrupt",
    "phonetic": "/ˌɪntəˈrʌpt/",
    "pos": "vt./vi.",
    "meaning": "打断， 打扰； 中断",
    "part": "第一部分：超级核心母词族",
    "group": "【39. rupt 打破/断裂/破裂】",
    "analysis_type": "构词",
    "analysis": "inter-（在两者之间） + rupt（切断） -> 打断，打扰。"
  },
  {
    "word": "interruption",
    "phonetic": "/ˌɪntəˈrʌpʃn/",
    "pos": "n.",
    "meaning": "打扰， 中断",
    "part": "第一部分：超级核心母词族",
    "group": "【39. rupt 打破/断裂/破裂】",
    "analysis_type": "构词",
    "analysis": "interrupt（打断） + -ion（名词后缀） -> 打扰，中断。"
  },
  {
    "word": "route",
    "phonetic": "/ruːt/",
    "pos": "n./vt.",
    "meaning": "路线， 航线 vt. 按路线发送",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "本义指“开辟出的道路” -> 路线，航线。"
  },
  {
    "word": "attach",
    "phonetic": "/əˈtætʃ/",
    "pos": "vt./vi.",
    "meaning": "贴上， 附上； 使依附",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "at-（ad- 朝向） + tach（钉子） -> 贴上，附上。"
  },
  {
    "word": "attachment",
    "phonetic": "/əˈtætʃmənt/",
    "pos": "n.",
    "meaning": "附件； 依恋",
    "part": "第一部分：超级核心母词族",
    "group": "【40. tang / tact / tag 触碰/接触/完整】",
    "analysis_type": "构词",
    "analysis": "attach（附着） + -ment（名词后缀） -> 附件。"
  },
  {
    "word": "contact",
    "phonetic": "/ˈkɒntækt/",
    "pos": "n./vt.",
    "meaning": "接触； 联系 vt. 与…取得联系",
    "part": "第一部分：超级核心母词族",
    "group": "【40. tang / tact / tag 触碰/接触/完整】",
    "analysis_type": "构词",
    "analysis": "con-（共同） + tact（触摸） -> 彼此双手或视线相互接触 -> 接触。"
  },
  {
    "word": "intact",
    "phonetic": "/ɪnˈtækt/",
    "pos": "adj.",
    "meaning": "完好无损的， 完整无缺的",
    "part": "第一部分：超级核心母词族",
    "group": "【40. tang / tact / tag 触碰/接触/完整】",
    "analysis_type": "构词",
    "analysis": "in-（未曾） + tact（触碰） -> 完好无损的，完整无缺的。"
  },
  {
    "word": "contemporary",
    "phonetic": "/kənˈtemprəri/",
    "pos": "adj./n.",
    "meaning": "adj. 当代的； 同时代的 n. 同代人",
    "part": "第二部分：高频专业词根族",
    "group": "【41. temp / tempor 时间/时代/适度】",
    "analysis_type": "构词",
    "analysis": "con-（共同） + tempor（时间） + -ary（的） -> 当代的。"
  },
  {
    "word": "temper",
    "phonetic": "/ˈtempə(r)/",
    "pos": "n./vt.",
    "meaning": "n. 脾气， 情绪； 韧度 vt. 调和， 使缓和",
    "part": "第二部分：高频专业词根族",
    "group": "【41. temp / tempor 时间/时代/适度】",
    "analysis_type": "构词",
    "analysis": "词根 temp-（适度调节） -> 脾气。"
  },
  {
    "word": "temporary",
    "phonetic": "/ˈtemprəri/",
    "pos": "adj.",
    "meaning": "暂时的， 临时的",
    "part": "第二部分：高频专业词根族",
    "group": "【41. temp / tempor 时间/时代/适度】",
    "analysis_type": "构词",
    "analysis": "tempor（时间） + -ary（形容词后缀） -> 只维持极短一段时间的 -> 暂时的，临时的。",
    "antonyms": [
      {
        "target": "permanent",
        "pos": "adj.",
        "for_sense": "暂时的",
        "usage": "contrast",
        "in_pack": false
      }
    ]
  },
  {
    "word": "attribute",
    "phonetic": "/əˈtrɪbjuːt/",
    "pos": "vt./n.",
    "meaning": "vt. 把…归因于（to） n. 属性， 特征",
    "part": "第二部分：高频专业词根族",
    "group": "【42. tribut 给予/交纳/分发】",
    "analysis_type": "构词",
    "analysis": "at-（朝向） + tribut（给予） -> 把功劳原因归给对方 -> 把…归因于（to）。"
  },
  {
    "word": "contribute",
    "phonetic": "/kənˈtrɪbjuːt/",
    "pos": "vi./vt.",
    "meaning": "vt./vi. 贡献， 捐赠； 促成",
    "part": "第二部分：高频专业词根族",
    "group": "【42. tribut 给予/交纳/分发】",
    "analysis_type": "构词",
    "analysis": "con-（共同） + tribut-（给予） -> 把个人力量交付集体 -> / 贡献， 捐赠。"
  },
  {
    "word": "contribution",
    "phonetic": "/ˌkɒntrɪˈbjuːʃn/",
    "pos": "n.",
    "meaning": "贡献， 促成因素； 捐款",
    "part": "第二部分：高频专业词根族",
    "group": "【42. tribut 给予/交纳/分发】",
    "analysis_type": "构词",
    "analysis": "contribute（贡献） + -ion（名词后缀） -> 贡献，促成因素。"
  },
  {
    "word": "distribute",
    "phonetic": "/dɪˈstrɪbjuːt/",
    "pos": "vt.",
    "meaning": "分发， 分配； 散布， 分布",
    "part": "第二部分：高频专业词根族",
    "group": "【42. tribut 给予/交纳/分发】",
    "analysis_type": "构词",
    "analysis": "dis-（分开） + tribut（分派） -> 分门别类分发派送下去 -> 分发，分配。"
  },
  {
    "word": "distribution",
    "phonetic": "/ˌdɪstrɪˈbjuːʃn/",
    "pos": "n.",
    "meaning": "分发， 分配； 散布， 分布",
    "part": "第二部分：高频专业词根族",
    "group": "【42. tribut 给予/交纳/分发】",
    "analysis_type": "构词",
    "analysis": "distribute（分发） + -ion（名词后缀） -> 分发，分配。"
  },
  {
    "word": "accuracy",
    "phonetic": "/ˈækjərəsi/",
    "pos": "n.",
    "meaning": "准确性， 精确度",
    "part": "第二部分：高频专业词根族",
    "group": "【43. cur / cura 照料/关心/医治】",
    "analysis_type": "构词",
    "analysis": "accurat-（精确） + -cy（名词后缀） -> 准确性，精确度。"
  },
  {
    "word": "accurate",
    "phonetic": "/ˈækjərət/",
    "pos": "adj.",
    "meaning": "准确的， 精确的",
    "part": "第二部分：高频专业词根族",
    "group": "【43. cur / cura 照料/关心/医治】",
    "analysis_type": "构词",
    "analysis": "ac-（去） + cur（用心照料） + -ate，引申指准确的 -> 准确的，精确的。",
    "synonyms": [
      {
        "target": "precise",
        "pos": "adj.",
        "for_sense": "准确的",
        "usage": "paraphrase",
        "in_pack": false,
        "nuance": "与测量事实毫厘不差"
      }
    ]
  },
  {
    "word": "cure",
    "phonetic": "/kjʊə(r)/",
    "pos": "vt./n.",
    "meaning": "治愈， 治好； 消除",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、医疗生理与情绪心理】",
    "analysis_type": "构词",
    "analysis": "词根 cura（关心） -> 治愈，治好。"
  },
  {
    "word": "curiosity",
    "phonetic": "/ˌkjʊəriˈɒsəti/",
    "pos": "n.",
    "meaning": "好奇心， 求知欲； 奇物",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "curious（好奇的） + -ity（名词后缀） -> 好奇心，求知欲。"
  },
  {
    "word": "curious",
    "phonetic": "/ˈkjʊəriəs/",
    "pos": "adj.",
    "meaning": "好奇的； 古怪的",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "cur-（关心） + -ious（形容词后缀） -> 好奇的。"
  },
  {
    "word": "secure",
    "phonetic": "/səˈkjʊə(r)/",
    "pos": "adj./vt.",
    "meaning": "vt. 争取到，获得（资金/职位/合同）；系紧固定 adj. 安全稳妥的",
    "part": "第二部分：高频专业词根族",
    "group": "【43. cur / cura 照料/关心/医治】",
    "analysis_type": "构词",
    "analysis": "se-（脱离） + cur-（忧虑） -> 摆脱忧患并牢牢把控住 -> 获得，争取到。",
    "synonyms": [
      {
        "target": "obtain",
        "pos": "vt.",
        "for_sense": "争取到",
        "usage": "upgrade",
        "in_pack": false,
        "nuance": "历经艰辛稳固拿下"
      }
    ]
  },
  {
    "word": "security",
    "phonetic": "/səˈkjʊərəti/",
    "pos": "n.",
    "meaning": "安全， 平安； 保证； 证券， 抵押品",
    "part": "第二部分：高频专业词根族",
    "group": "【43. cur / cura 照料/关心/医治】",
    "analysis_type": "构词",
    "analysis": "secure（安全的） + -ity（名词后缀） -> 安全，平安。",
    "antonyms": [
      {
        "target": "danger",
        "pos": "n.",
        "for_sense": "安全",
        "usage": "contrast",
        "in_pack": false
      }
    ]
  },
  {
    "word": "aggressive",
    "phonetic": "/əˈɡresɪv/",
    "pos": "adj.",
    "meaning": "侵略的， 好斗的； 有进取心的",
    "part": "第二部分：高频专业词根族",
    "group": "【44. grad / gress 走/步伐/阶段】",
    "analysis_type": "构词",
    "analysis": "ag-（朝向） + gress（迈步） + -ive（具…特性的） -> 侵略的，好斗的。"
  },
  {
    "word": "congress",
    "phonetic": "/ˈkɒŋɡres/",
    "pos": "n.",
    "meaning": "（代表）大会； 国会， 议会",
    "part": "第二部分：高频专业词根族",
    "group": "【44. grad / gress 走/步伐/阶段】",
    "analysis_type": "构词",
    "analysis": "con-（共同） + gress（走到一起） -> （代表）大会。"
  },
  {
    "word": "grade",
    "phonetic": "/ɡreɪd/",
    "pos": "n./vt.",
    "meaning": "成绩； 等级； 年级 vt. 批改",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "词根 gradus（步伐） -> 向上迈进的阶梯层次 -> 成绩。"
  },
  {
    "word": "gradual",
    "phonetic": "/ˈɡrædʒuəl/",
    "pos": "adj.",
    "meaning": "逐渐的， 渐进的",
    "part": "第二部分：高频专业词根族",
    "group": "【44. grad / gress 走/步伐/阶段】",
    "analysis_type": "构词",
    "analysis": "grad-（一步一步走） + -ual（形容词后缀） -> 一步一个脚印循序渐进的 -> 逐渐的，渐进的。"
  },
  {
    "word": "graduate",
    "phonetic": "/ˈɡrædʒuət/",
    "pos": "vi./n./adj.",
    "meaning": "毕业 n. 毕业生 adj. 研究生的",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "gradu-（台阶） + -ate -> 迈上人生新台阶 -> 毕业，n.。"
  },
  {
    "word": "graduation",
    "phonetic": "/ˌɡrædʒuˈeɪʃn/",
    "pos": "n.",
    "meaning": "毕业， 毕业典礼",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "graduate（毕业） + -ion（名词后缀） -> 毕业，毕业典礼。"
  },
  {
    "word": "progress",
    "phonetic": "/ˈprəʊɡres/",
    "pos": "n./vi.",
    "meaning": "n. 进步， 进展 vi. 前进， 推进",
    "part": "第二部分：高频专业词根族",
    "group": "【44. grad / gress 走/步伐/阶段】",
    "analysis_type": "构词",
    "analysis": "pro-（向前） + gress（迈步） -> 坚定大步向前走 -> 进步。"
  },
  {
    "word": "progressive",
    "phonetic": "/prəˈɡresɪv/",
    "pos": "adj.",
    "meaning": "进步的， 先进的； 渐进的",
    "part": "第二部分：高频专业词根族",
    "group": "【44. grad / gress 走/步伐/阶段】",
    "analysis_type": "构词",
    "analysis": "progress（进步） + -ive（形容词后缀） -> 眼光超前勇于破旧立新的 -> 进步的，先进的。"
  },
  {
    "word": "undergraduate",
    "phonetic": "/ˌʌndəˈɡrædʒuət/",
    "pos": "n./adj.",
    "meaning": "本科生 adj. 本科的",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "under-（在…之下） + graduate（大学毕业生） -> 本科生，adj.。"
  },
  {
    "word": "upgrade",
    "phonetic": "/ˌʌpˈɡreɪd/",
    "pos": "vt./n.",
    "meaning": "升级， 提升； 提升机",
    "part": "第二部分：高频专业词根族",
    "group": "【44. grad / gress 走/步伐/阶段】",
    "analysis_type": "构词",
    "analysis": "up-（向上） + grade（等级） -> 把原有阶梯档次向上提升 -> 升级，提升。"
  },
  {
    "word": "devalue",
    "phonetic": "/ˌdiːˈvæljuː/",
    "pos": "vt./vi.",
    "meaning": "使贬值， 贬值",
    "part": "第二部分：高频专业词根族",
    "group": "【45. val / vail 强壮/力量/价值】",
    "analysis_type": "构词",
    "analysis": "de-（向下） + value（价值） -> 让货币资产价值大幅跌落 -> 使贬值，贬值。"
  },
  {
    "word": "evaluate",
    "phonetic": "/ɪˈvæljueɪt/",
    "pos": "vt.",
    "meaning": "评价， 评估",
    "part": "第二部分：高频专业词根族",
    "group": "【45. val / vail 强壮/力量/价值】",
    "analysis_type": "构词",
    "analysis": "e-（引出） + valu（价值） + -ate（动词后缀） -> 评价，评估。",
    "synonyms": [
      {
        "target": "assess",
        "pos": "vt.",
        "for_sense": "评价",
        "usage": "upgrade",
        "in_pack": false,
        "nuance": "客观衡量真实身价"
      }
    ]
  },
  {
    "word": "prevail",
    "phonetic": "/prɪˈveɪl/",
    "pos": "vi.",
    "meaning": "流行， 盛行； 战胜， 占优势",
    "part": "第二部分：高频专业词根族",
    "group": "【45. val / vail 强壮/力量/价值】",
    "analysis_type": "构词",
    "analysis": "pre-（在最前面） + vail（强大有力） -> 流行，盛行。"
  },
  {
    "word": "prevalent",
    "phonetic": "/ˈprevələnt/",
    "pos": "adj.",
    "meaning": "流行的， 普遍的",
    "part": "第二部分：高频专业词根族",
    "group": "【45. val / vail 强壮/力量/价值】",
    "analysis_type": "构词",
    "analysis": "prevail（盛行） + -ent（形容词后缀） -> 流行的，普遍的。",
    "antonyms": [
      {
        "target": "rare",
        "pos": "adj.",
        "for_sense": "流行的",
        "usage": "contrast",
        "in_pack": false
      }
    ]
  },
  {
    "word": "valid",
    "phonetic": "/ˈvælɪd/",
    "pos": "adj.",
    "meaning": "有效的， 有根据的； 正当的",
    "part": "第二部分：高频专业词根族",
    "group": "【45. val / vail 强壮/力量/价值】",
    "analysis_type": "构词",
    "analysis": "val-（强壮） + -id，合起来即在法律或逻辑上具有充分效力站得住脚的 -> 有效的，有根据的。"
  },
  {
    "word": "validate",
    "phonetic": "/ˈvælɪdeɪt/",
    "pos": "vt.",
    "meaning": "证实， 验证； 使生效",
    "part": "第二部分：高频专业词根族",
    "group": "【45. val / vail 强壮/力量/价值】",
    "analysis_type": "构词",
    "analysis": "valid（有效的） + -ate（动词后缀） -> 通过严格验证使其正式生效 -> 证实，验证。"
  },
  {
    "word": "validity",
    "phonetic": "/vəˈlɪdəti/",
    "pos": "n.",
    "meaning": "有效性， 正确性； 合法性",
    "part": "第二部分：高频专业词根族",
    "group": "【45. val / vail 强壮/力量/价值】",
    "analysis_type": "构词",
    "analysis": "valid（有效） + -ity（名词后缀） -> 有效性，正确性。"
  },
  {
    "word": "valuable",
    "phonetic": "/ˈvæljuəbl/",
    "pos": "adj./n.",
    "meaning": "adj. 贵重的， 很有价值的 n. 贵重物品",
    "part": "第二部分：高频专业词根族",
    "group": "【45. val / vail 强壮/力量/价值】",
    "analysis_type": "构词",
    "analysis": "value（价值） + -able（具…的） -> 具有极高贵重身价价值的 -> 贵重的。"
  },
  {
    "word": "value",
    "phonetic": "/ˈvæljuː/",
    "pos": "n./vt.",
    "meaning": "珍视， 重视； 评价； 价值； 价值观",
    "part": "第二部分：高频专业词根族",
    "group": "【45. val / vail 强壮/力量/价值】",
    "analysis_type": "构词",
    "analysis": "词根 val-（有价值） -> 珍视，重视。"
  },
  {
    "word": "alien",
    "phonetic": "/ˈeɪliən/",
    "pos": "adj./n.",
    "meaning": "adj. 外国的； 陌生的 n. 外侨； 外星人",
    "part": "第二部分：高频专业词根族",
    "group": "【46. alter / ali 其他/变更】",
    "analysis_type": "构词",
    "analysis": "ali-（另一个人） + -en，合起来即来自异国他乡的外来异类客旅 -> 外国的。"
  },
  {
    "word": "alter",
    "phonetic": "/ˈɔːltə(r)/",
    "pos": "vt./vi.",
    "meaning": "改变， 更改； 改建",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "词根 alter（另一个） -> 改变，更改。"
  },
  {
    "word": "alternative",
    "phonetic": "/ɔːlˈtɜːnətɪv/",
    "pos": "adj./n.",
    "meaning": "adj. 供选择的， 两者择一的 n. 替换物， 抉择",
    "part": "第二部分：高频专业词根族",
    "group": "【46. alter / ali 其他/变更】",
    "analysis_type": "构词",
    "analysis": "alter（两者择一） + -ative（的） -> 供选择的。"
  },
  {
    "word": "animal",
    "phonetic": "/ˈænɪml/",
    "pos": "n./adj.",
    "meaning": "n. 动物， 兽 adj. 动物的",
    "part": "第二部分：高频专业词根族",
    "group": "【47. anim 生命/心智/气息】",
    "analysis_type": "构词",
    "analysis": "anim-（生命之气） + -al（物） -> 动物。"
  },
  {
    "word": "animate",
    "phonetic": "/ˈænɪmeɪt/",
    "pos": "vt./adj.",
    "meaning": "vt. 赋予生命， 使有生气 adj. 有生命的",
    "part": "第二部分：高频专业词根族",
    "group": "【47. anim 生命/心智/气息】",
    "analysis_type": "构词",
    "analysis": "anim（生命） + -ate（使成形） -> 为死物注入生机与活动灵魂 -> 赋予生命。"
  },
  {
    "word": "animation",
    "phonetic": "/ˌænɪˈmeɪʃn/",
    "pos": "n.",
    "meaning": "动画制作； 生气， 生机",
    "part": "第二部分：高频专业词根族",
    "group": "【47. anim 生命/心智/气息】",
    "analysis_type": "构词",
    "analysis": "animate（赋予生机） + -ion（名词后缀） -> 动画制作。"
  },
  {
    "word": "unanimous",
    "phonetic": "/juˈnænɪməs/",
    "pos": "adj.",
    "meaning": "全体一致的， 无异议的",
    "part": "第二部分：高频专业词根族",
    "group": "【47. anim 生命/心智/气息】",
    "analysis_type": "构词",
    "analysis": "un-（单一） + anim（心灵） + -ous（的） -> 全体一致的，无异议的。"
  },
  {
    "word": "audience",
    "phonetic": "/ˈɔːdiəns/",
    "pos": "n.",
    "meaning": "听众， 观众； 读者",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "audi-（听） + -ence（人群名词后缀） -> 听众，观众。"
  },
  {
    "word": "audio",
    "phonetic": "/ˈɔːdiəʊ/",
    "pos": "adj./n.",
    "meaning": "adj. 声音的， 音频的 n. 音频信号",
    "part": "第二部分：高频专业词根族",
    "group": "【48. audi / audit 听/声音】",
    "analysis_type": "构词",
    "analysis": "audi（声音） + -o，合起来即关于声音录制传播与播放的信号 -> 声音的。"
  },
  {
    "word": "audit",
    "phonetic": "/ˈɔːdɪt/",
    "pos": "vt./n.",
    "meaning": "旁听（课程） n. 审计",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "词根 audi-（听） -> 旁听（课程），n.。"
  },
  {
    "word": "auditorium",
    "phonetic": "/ˌɔːdɪˈtɔːriəm/",
    "pos": "n.",
    "meaning": "礼堂， 演讲大厅",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "audit-（听） + -orium（场所后缀） -> 礼堂，演讲大厅。"
  },
  {
    "word": "battery",
    "phonetic": "/ˈbætəri/",
    "pos": "n.",
    "meaning": "电池； 一组， 一套； 炮兵连",
    "part": "第二部分：高频专业词根族",
    "group": "【49. bell / bat 战斗/敲打】",
    "analysis_type": "构词",
    "analysis": "batter-（连续击打） + -y，原指一排连续轰击的火炮阵列，引申为并联击打放电的电池组 -> 电池。"
  },
  {
    "word": "battle",
    "phonetic": "/ˈbætl/",
    "pos": "n./v.",
    "meaning": "战役， 战斗 v. 作战",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "源自晚期词根 battualia（击打） -> 战役，战斗。"
  },
  {
    "word": "beat",
    "phonetic": "/biːt/",
    "pos": "vt./vi./n.",
    "meaning": "vt. 打败， 战胜； 敲打 vi. 跳动 n. 节拍",
    "part": "第二部分：高频专业词根族",
    "group": "【49. bell / bat 战斗/敲打】",
    "analysis_type": "构词",
    "analysis": "击打搏击同源词 -> 反复重击打败对手 -> 打败。"
  },
  {
    "word": "combat",
    "phonetic": "/ˈkɒmbæt/",
    "pos": "n./vt./vi.",
    "meaning": "n. 战斗， 格斗 vt.kəmˈbæt/ 与…搏斗， 抗争",
    "part": "第二部分：高频专业词根族",
    "group": "【49. bell / bat 战斗/敲打】",
    "analysis_type": "构词",
    "analysis": "com-（共同） + bat（击打） -> 双方扭打交锋在一起血战 -> 战斗。"
  },
  {
    "word": "debate",
    "phonetic": "/dɪˈbeɪt/",
    "pos": "n./v.",
    "meaning": "辩论， 争论 v. 辩论",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "de-（彻底） + bat-（击打） -> 辩论，争论。"
  },
  {
    "word": "punch",
    "phonetic": "/pʌntʃ/",
    "pos": "vt./n.",
    "meaning": "vt. 猛击； 打孔 n. 重拳猛击； 打孔机",
    "part": "第二部分：高频专业词根族",
    "group": "【49. bell / bat 战斗/敲打】",
    "analysis_type": "构词",
    "analysis": "源自短促猛烈的重击刺戳 -> 猛击。"
  },
  {
    "word": "rebel",
    "phonetic": "/rɪˈbel/",
    "pos": "vi./n.",
    "meaning": "vi. 反叛， 造反 n. 叛乱者， 反抗者",
    "part": "第二部分：高频专业词根族",
    "group": "【49. bell / bat 战斗/敲打】",
    "analysis_type": "构词",
    "analysis": "re-（反向） + bel（战争） -> 反叛。"
  },
  {
    "word": "rebellion",
    "phonetic": "/rɪˈbeljən/",
    "pos": "n.",
    "meaning": "叛乱， 反抗",
    "part": "第二部分：高频专业词根族",
    "group": "【49. bell / bat 战斗/敲打】",
    "analysis_type": "构词",
    "analysis": "rebel（造反） + -ion（名词后缀） -> 叛乱，反抗。"
  },
  {
    "word": "candid",
    "phonetic": "/ˈkændɪd/",
    "pos": "adj.",
    "meaning": "坦率的， 坦诚的； 抓拍的",
    "part": "第二部分：高频专业词根族",
    "group": "【50. cand / cens 白/发光/燃烧】",
    "analysis_type": "构词",
    "analysis": "词根 cand-（纯白发亮） -> 坦率的，坦诚的。",
    "synonyms": [
      {
        "target": "frank",
        "pos": "adj.",
        "for_sense": "坦率的",
        "usage": "upgrade",
        "in_pack": false,
        "nuance": "毫无遮拦直抒胸臆"
      }
    ]
  },
  {
    "word": "candidate",
    "phonetic": "/ˈkændɪdət/",
    "pos": "n.",
    "meaning": "候选人， 求职者； 应试者",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "candid-（发白光） + -ate（人） -> 候选人，求职者。"
  },
  {
    "word": "candle",
    "phonetic": "/ˈkændl/",
    "pos": "n.",
    "meaning": "蜡烛",
    "part": "第二部分：高频专业词根族",
    "group": "【50. cand / cens 白/发光/燃烧】",
    "analysis_type": "构词",
    "analysis": "cand-（发白光照耀） + -le（小物体） -> 蜡烛。"
  },
  {
    "word": "certain",
    "phonetic": "/ˈsɜːtn/",
    "pos": "adj.",
    "meaning": "确定的， 无疑的； 某种",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "cert-（确凿） + -ain（形容词后缀） -> 确定的，无疑的。"
  },
  {
    "word": "certainly",
    "phonetic": "/ˈsɜːtnli/",
    "pos": "adv.",
    "meaning": "一定， 必定； 当然可以",
    "part": "第二部分：高频专业词根族",
    "group": "【51. cert / cern 确信/弄清/分辨】",
    "analysis_type": "构词",
    "analysis": "certain（确定的） + -ly（副词后缀） -> 一定，必定。"
  },
  {
    "word": "certificate",
    "phonetic": "/səˈtɪfɪkət/",
    "pos": "n.",
    "meaning": "证书， 文凭； 合格证",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "cert-（确信） + -i- + fic-（做） + -ate（名词后缀） -> 证书，文凭。"
  },
  {
    "word": "certify",
    "phonetic": "/ˈsɜːtɪfaɪ/",
    "pos": "vt.",
    "meaning": "证明， 证实； 发证书",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "cert-（确信） + -ify（使动后缀） -> 证明，证实。"
  },
  {
    "word": "concern",
    "phonetic": "/kənˈsɜːn/",
    "pos": "v./n.",
    "meaning": "涉及； 关心， 挂念",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、医疗生理与情绪心理】",
    "analysis_type": "构词",
    "analysis": "con-（共同） + cern-（甄别） -> 涉及。"
  },
  {
    "word": "accord",
    "phonetic": "/əˈkɔːd/",
    "pos": "n./vt./vi.",
    "meaning": "n. 一致； 协议 vt. 给予 vi. 符合",
    "part": "第二部分：高频专业词根族",
    "group": "【52. cord / card 心/核心】",
    "analysis_type": "构词",
    "analysis": "ac-（朝向） + cord（心） -> 心心相印走到同一拍子上 -> 一致。"
  },
  {
    "word": "accordance",
    "phonetic": "/əˈkɔːdns/",
    "pos": "n.",
    "meaning": "一致， 和谐； 依照",
    "part": "第二部分：高频专业词根族",
    "group": "【52. cord / card 心/核心】",
    "analysis_type": "构词",
    "analysis": "accord（一致） + -ance（名词后缀） -> 一致，和谐。"
  },
  {
    "word": "core",
    "phonetic": "/kɔː(r)/",
    "pos": "n./adj.",
    "meaning": "n. 核心， 要点； 果核 adj. 最核心的",
    "part": "第二部分：高频专业词根族",
    "group": "【52. cord / card 心/核心】",
    "analysis_type": "构词",
    "analysis": "词根 cor-（心脏） -> 核心。"
  },
  {
    "word": "courage",
    "phonetic": "/ˈkʌrɪdʒ/",
    "pos": "n.",
    "meaning": "勇气， 胆量",
    "part": "第二部分：高频专业词根族",
    "group": "【52. cord / card 心/核心】",
    "analysis_type": "构词",
    "analysis": "cour-（心） + -age（性质） -> 勇气，胆量。",
    "antonyms": [
      {
        "target": "cowardice",
        "pos": "n.",
        "for_sense": "勇气",
        "usage": "contrast",
        "in_pack": false
      }
    ]
  },
  {
    "word": "discourage",
    "phonetic": "/dɪsˈkʌrɪdʒ/",
    "pos": "vt.",
    "meaning": "使泄气， 使灰心； 阻碍",
    "part": "第二部分：高频专业词根族",
    "group": "【52. cord / card 心/核心】",
    "analysis_type": "构词",
    "analysis": "dis-（剥夺） + courage（勇气） -> 使泄气，使灰心。",
    "antonyms": [
      {
        "target": "encourage",
        "pos": "vt.",
        "for_sense": "使泄气",
        "usage": "contrast",
        "in_pack": true
      }
    ]
  },
  {
    "word": "encourage",
    "phonetic": "/ɪnˈkʌrɪdʒ/",
    "pos": "vt.",
    "meaning": "鼓励， 支持； 促进",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "en-（注入） + courage（勇气） -> 鼓励，支持。"
  },
  {
    "word": "record",
    "phonetic": "/ˈrekɔːd/",
    "pos": "n./vt.",
    "meaning": "n. 记录； 唱片； 履历 vt. 记录； 录音",
    "part": "第二部分：高频专业词根族",
    "group": "【52. cord / card 心/核心】",
    "analysis_type": "构词",
    "analysis": "re-（再次） + cord（铭刻在心） -> 记录。"
  },
  {
    "word": "agriculture",
    "phonetic": "/ˈæɡrɪkʌltʃə(r)/",
    "pos": "n.",
    "meaning": "农业， 农学",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然地理、动植物与环境保护】",
    "analysis_type": "构词",
    "analysis": "agri-（田地） + cult-（耕作） + -ure，引申指农业 -> 农业，农学。"
  },
  {
    "word": "cultivate",
    "phonetic": "/ˈkʌltɪveɪt/",
    "pos": "vt.",
    "meaning": "耕作， 种植； 培养， 陶冶",
    "part": "第二部分：高频专业词根族",
    "group": "【53. cult 耕作/培养/崇拜】",
    "analysis_type": "构词",
    "analysis": "cult-（耕耘培植） + -iv- + -ate（动词后缀） -> 陶冶身心 -> 耕作，种植。"
  },
  {
    "word": "cultural",
    "phonetic": "/ˈkʌltʃərəl/",
    "pos": "adj.",
    "meaning": "文化的， 教养的",
    "part": "第二部分：高频专业词根族",
    "group": "【53. cult 耕作/培养/崇拜】",
    "analysis_type": "构词",
    "analysis": "culture（文化） + -al（形容词后缀） -> 文化的，教养的。"
  },
  {
    "word": "culture",
    "phonetic": "/ˈkʌltʃə(r)/",
    "pos": "n./vt.",
    "meaning": "n. 文化， 文明； 培养， 培养物 vt. 培植， 培养",
    "part": "第二部分：高频专业词根族",
    "group": "【53. cult 耕作/培养/崇拜】",
    "analysis_type": "构词",
    "analysis": "cult（耕耘培植） + -ure（名词后缀） -> 对人类精神世界的深耕滋养 -> 文化。"
  },
  {
    "word": "condemn",
    "phonetic": "/kənˈdem/",
    "pos": "vt.",
    "meaning": "谴责， 声讨； 判处（刑罚）",
    "part": "第二部分：高频专业词根族",
    "group": "【54. damn / demn 损失/谴责/惩戒】",
    "analysis_type": "构词",
    "analysis": "con-（完全） + demn（定罪惩治） -> 谴责，声讨。"
  },
  {
    "word": "damage",
    "phonetic": "/ˈdæmɪdʒ/",
    "pos": "n./vt.",
    "meaning": "n. 损害， 毁坏； 赔偿金 vt. 损害",
    "part": "第二部分：高频专业词根族",
    "group": "【54. damn / demn 损失/谴责/惩戒】",
    "analysis_type": "构词",
    "analysis": "dam-（损失损害） + -age（名词后缀） -> 损害。",
    "synonyms": [
      {
        "target": "harm",
        "pos": "vt.",
        "for_sense": "损害",
        "usage": "paraphrase",
        "in_pack": false,
        "nuance": "带来实际创伤损失"
      }
    ],
    "antonyms": [
      {
        "target": "repair",
        "pos": "vt.",
        "for_sense": "损坏",
        "usage": "contrast",
        "in_pack": false
      }
    ]
  },
  {
    "word": "doctor",
    "phonetic": "/ˈdɒktə(r)/",
    "pos": "n./vt.",
    "meaning": "医生； 博士 vt. 篡改",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "doc-（教导） + -tor（人） -> 医生。"
  },
  {
    "word": "document",
    "phonetic": "/ˈdɒkjumənt/",
    "pos": "n./vt.",
    "meaning": "n. 公文， 文件； 证件 vt. 记录， 记载",
    "part": "第二部分：高频专业词根族",
    "group": "【55. doc / doct 教导/文件/凭证】",
    "analysis_type": "构词",
    "analysis": "doc-（教导授业） + -u- + -ment（文书凭据） -> 公文。"
  },
  {
    "word": "documentary",
    "phonetic": "/ˌdɒkjuˈmentri/",
    "pos": "adj./n.",
    "meaning": "adj. 文件的， 记实的 n. 纪录片",
    "part": "第二部分：高频专业词根族",
    "group": "【55. doc / doct 教导/文件/凭证】",
    "analysis_type": "构词",
    "analysis": "document（文献记录） + -ary（的） -> 文件的。"
  },
  {
    "word": "donate",
    "phonetic": "/dəʊˈneɪt/",
    "pos": "vt./vi.",
    "meaning": "捐赠， 赠送（to）",
    "part": "第二部分：高频专业词根族",
    "group": "【56. don / dot / dow 赠送/给予】",
    "analysis_type": "构词",
    "analysis": "don-（给予） + -ate（动词后缀） -> 捐赠，赠送（to）。"
  },
  {
    "word": "donation",
    "phonetic": "/dəʊˈneɪʃn/",
    "pos": "n.",
    "meaning": "捐款， 捐赠物； 捐助",
    "part": "第二部分：高频专业词根族",
    "group": "【56. don / dot / dow 赠送/给予】",
    "analysis_type": "构词",
    "analysis": "donate（捐赠） + -ion（名词后缀） -> 无偿奉献给社会的善款物资 -> 捐款，捐赠物。"
  },
  {
    "word": "dose",
    "phonetic": "/dəʊs/",
    "pos": "n./vt.",
    "meaning": "剂量， 一剂 vt. 服药",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、医疗生理与情绪心理】",
    "analysis_type": "构词",
    "analysis": "词根 dos（给予） -> 单次给予的用药分量 -> 剂量，一剂。"
  },
  {
    "word": "durable",
    "phonetic": "/ˈdjʊərəbl/",
    "pos": "adj.",
    "meaning": "耐用的， 持久的",
    "part": "第二部分：高频专业词根族",
    "group": "【57. dur 持久/坚硬/耐受】",
    "analysis_type": "构词",
    "analysis": "dur-（坚硬持久） + -able（能…的） -> 耐用的，持久的。",
    "antonyms": [
      {
        "target": "brittle",
        "pos": "adj.",
        "for_sense": "耐用的",
        "usage": "contrast",
        "in_pack": false
      }
    ],
    "synonyms": [
      {
        "target": "permanent",
        "pos": "adj.",
        "for_sense": "耐用的",
        "usage": "upgrade",
        "in_pack": false,
        "nuance": "经得起风吹雨打磨砺"
      }
    ]
  },
  {
    "word": "duration",
    "phonetic": "/djuˈreɪʃn/",
    "pos": "n.",
    "meaning": "持续， 持续期间",
    "part": "第二部分：高频专业词根族",
    "group": "【57. dur 持久/坚硬/耐受】",
    "analysis_type": "构词",
    "analysis": "dur（持续存在） + -ation（名词后缀） -> 持续，持续期间。"
  },
  {
    "word": "endure",
    "phonetic": "/ɪnˈdjʊə(r)/",
    "pos": "vt./vi.",
    "meaning": "vt. 忍受， 忍耐 vi. 持久， 持续",
    "part": "第二部分：高频专业词根族",
    "group": "【57. dur 持久/坚硬/耐受】",
    "analysis_type": "构词",
    "analysis": "en-（使处于） + dur（坚固耐受） + -e，合起来即身处苦难严寒之中咬紧牙关熬过去 -> 忍受。",
    "synonyms": [
      {
        "target": "persist",
        "pos": "vi.",
        "for_sense": "坚持",
        "usage": "paraphrase",
        "in_pack": true,
        "nuance": "从头到尾挺到最后"
      }
    ]
  },
  {
    "word": "adequate",
    "phonetic": "/ˈædɪkwət/",
    "pos": "adj.",
    "meaning": "足够的， 充分的； 胜任的",
    "part": "第二部分：高频专业词根族",
    "group": "【58. equ / equi 平等/相同/公允】",
    "analysis_type": "构词",
    "analysis": "ad-（达到） + equ（平等） + -ate，引申指足够的 -> 足够的，充分的。",
    "antonyms": [
      {
        "target": "scarce",
        "pos": "adj.",
        "for_sense": "足够的",
        "usage": "contrast",
        "in_pack": false
      }
    ],
    "synonyms": [
      {
        "target": "sufficient",
        "pos": "adj.",
        "for_sense": "充分的",
        "usage": "paraphrase",
        "in_pack": true,
        "nuance": "刚够及格标准线"
      }
    ]
  },
  {
    "word": "equal",
    "phonetic": "/ˈiːkwəl/",
    "pos": "adj./vt./n.",
    "meaning": "平等的； 相等的 vt. 等于",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "源自拉丁形容词 aequus（平坦的） -> 平等的。"
  },
  {
    "word": "equality",
    "phonetic": "/iˈkwɒləti/",
    "pos": "n.",
    "meaning": "平等， 同等， 均等",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "equal（平等的） + -ity（名词后缀） -> 平等，同等。"
  },
  {
    "word": "equate",
    "phonetic": "/iˈkweɪt/",
    "pos": "vt.",
    "meaning": "使等同， 把…等同于",
    "part": "第二部分：高频专业词根族",
    "group": "【58. equ / equi 平等/相同/公允】",
    "analysis_type": "构词",
    "analysis": "equ-（平等相同） + -ate（使成形） -> 使等同，把…等同于。"
  },
  {
    "word": "equation",
    "phonetic": "/ɪˈkweɪʒn/",
    "pos": "n.",
    "meaning": "方程式， 等式； 平衡",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "equat-（使平衡相等） + -ion（名词后缀） -> 方程式，等式。"
  },
  {
    "word": "equivalent",
    "phonetic": "/ɪˈkwɪvələnt/",
    "pos": "adj./n.",
    "meaning": "等价的， 等同的 n. 等价物",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "equi-（相等） + val-（价值） + -ent，引申指等价的 -> 等价的，等同的。"
  },
  {
    "word": "defend",
    "phonetic": "/dɪˈfend/",
    "pos": "vt.",
    "meaning": "保卫， 防卫； 辩护",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "de-（离开） + fend（击打） -> 保卫，防卫。"
  },
  {
    "word": "defense",
    "phonetic": "/dɪˈfens/",
    "pos": "n.",
    "meaning": "（论文）答辩； 辩护； 防御",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "de-（推开） + fens-（击打） -> 修筑堡垒防御敌国侵略入侵 -> （论文）答辩。"
  },
  {
    "word": "defensive",
    "phonetic": "/dɪˈfensɪv/",
    "pos": "adj.",
    "meaning": "防御的， 戒备的",
    "part": "第二部分：高频专业词根族",
    "group": "【59. fend / fens 防卫/击退】",
    "analysis_type": "构词",
    "analysis": "defense（防御） + -ive（形容词后缀） -> 防御的，戒备的。"
  },
  {
    "word": "fence",
    "phonetic": "/fens/",
    "pos": "n./vt.",
    "meaning": "n. 栅栏， 篱笆 vt. 围住",
    "part": "第二部分：高频专业词根族",
    "group": "【59. fend / fens 防卫/击退】",
    "analysis_type": "构词",
    "analysis": "源自 defence（防卫堡垒） -> 栅栏。"
  },
  {
    "word": "offend",
    "phonetic": "/əˈfend/",
    "pos": "vt./vi.",
    "meaning": "冒犯， 得罪； 令人不适",
    "part": "第二部分：高频专业词根族",
    "group": "【59. fend / fens 防卫/击退】",
    "analysis_type": "构词",
    "analysis": "of-（对着） + fend（击打） -> 冒犯，得罪。"
  },
  {
    "word": "offensive",
    "phonetic": "/əˈfensɪv/",
    "pos": "adj./n.",
    "meaning": "adj. 冒犯的， 无礼的； 进攻性的 n. 攻势",
    "part": "第二部分：高频专业词根族",
    "group": "【59. fend / fens 防卫/击退】",
    "analysis_type": "构词",
    "analysis": "offend（冒犯） + -ive（形容词后缀） -> 带有咄咄逼人强烈攻击性的 -> 冒犯的。"
  },
  {
    "word": "confidence",
    "phonetic": "/ˈkɒnfɪdəns/",
    "pos": "n.",
    "meaning": "信任， 信心； 把握",
    "part": "第二部分：高频专业词根族",
    "group": "【60. fide / feder 信任/信仰/联盟】",
    "analysis_type": "构词",
    "analysis": "con-（完全） + fid（信任） + -ence（名词后缀） -> 信任，信心。"
  },
  {
    "word": "confident",
    "phonetic": "/ˈkɒnfɪdənt/",
    "pos": "adj.",
    "meaning": "确信的， 有信心的",
    "part": "第二部分：高频专业词根族",
    "group": "【60. fide / feder 信任/信仰/联盟】",
    "analysis_type": "构词",
    "analysis": "con-（完全） + fid（信任） + -ent（形容词后缀） -> 确信的，有信心的。"
  },
  {
    "word": "faith",
    "phonetic": "/feɪθ/",
    "pos": "n.",
    "meaning": "信任， 信心； 宗教信仰",
    "part": "第二部分：高频专业词根族",
    "group": "【60. fide / feder 信任/信仰/联盟】",
    "analysis_type": "构词",
    "analysis": "源自 fides（信仰信任） -> 信任，信心。"
  },
  {
    "word": "faithful",
    "phonetic": "/ˈfeɪθfl/",
    "pos": "adj.",
    "meaning": "忠诚的， 守信的； 如实的",
    "part": "第二部分：高频专业词根族",
    "group": "【60. fide / feder 信任/信仰/联盟】",
    "analysis_type": "构词",
    "analysis": "faith（忠诚信仰） + -ful（充满…的） -> 忠诚的，守信的。"
  },
  {
    "word": "federal",
    "phonetic": "/ˈfedərəl/",
    "pos": "adj.",
    "meaning": "联邦的， 中央政权的",
    "part": "第二部分：高频专业词根族",
    "group": "【60. fide / feder 信任/信仰/联盟】",
    "analysis_type": "构词",
    "analysis": "feder-（同盟） + -al（的） -> 联邦的，中央政权的。"
  },
  {
    "word": "bloom",
    "phonetic": "/bluːm/",
    "pos": "n./vi.",
    "meaning": "开花； 繁盛 vi. 开花",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然地理、动植物与环境保护】",
    "analysis_type": "构词",
    "analysis": "源自古诺尔斯语 blomi（花朵绽放） -> 开花。"
  },
  {
    "word": "flour",
    "phonetic": "/ˈflaʊə(r)/",
    "pos": "n.",
    "meaning": "面粉， 粉末",
    "part": "第二部分：高频专业词根族",
    "group": "【61. flor / flour 花/开花/繁荣】",
    "analysis_type": "构词",
    "analysis": "源自 flower（花） -> 面粉，粉末。"
  },
  {
    "word": "flourish",
    "phonetic": "/ˈflʌrɪʃ/",
    "pos": "vi./n.",
    "meaning": "繁荣， 昌盛； 茁壮成长",
    "part": "第二部分：高频专业词根族",
    "group": "【61. flor / flour 花/开花/繁荣】",
    "analysis_type": "构词",
    "analysis": "flour-（繁花盛开） + -ish（动词后缀） -> 繁荣，昌盛。"
  },
  {
    "word": "flower",
    "phonetic": "/ˈflaʊə(r)/",
    "pos": "n./vi.",
    "meaning": "n. 花， 开花的植物 vi. 开花； 发育成熟",
    "part": "第二部分：高频专业词根族",
    "group": "【61. flor / flour 花/开花/繁荣】",
    "analysis_type": "构词",
    "analysis": "词根 flor-（花朵绽放） -> 花。"
  },
  {
    "word": "confuse",
    "phonetic": "/kənˈfjuːz/",
    "pos": "vt.",
    "meaning": "使困惑， 使混乱； 混淆",
    "part": "第二部分：高频专业词根族",
    "group": "【62. fuse / fund 浇灌/倾倒/熔化】",
    "analysis_type": "构词",
    "analysis": "con-（共同） + fus（倾倒） + -e，引申指使困惑 -> 使困惑，使混乱。"
  },
  {
    "word": "confusion",
    "phonetic": "/kənˈfjuːʒn/",
    "pos": "n.",
    "meaning": "困惑， 混淆； 骚乱",
    "part": "第二部分：高频专业词根族",
    "group": "【62. fuse / fund 浇灌/倾倒/熔化】",
    "analysis_type": "构词",
    "analysis": "confuse（混淆） + -ion（名词后缀） -> 困惑，混淆。"
  },
  {
    "word": "refusal",
    "phonetic": "/rɪˈfjuːzl/",
    "pos": "n.",
    "meaning": "拒绝， 谢绝",
    "part": "第二部分：高频专业词根族",
    "group": "【62. fuse / fund 浇灌/倾倒/熔化】",
    "analysis_type": "构词",
    "analysis": "refuse（拒绝） + -al（名词后缀） -> 拒绝，谢绝。"
  },
  {
    "word": "refuse",
    "phonetic": "/rɪˈfjuːz/",
    "pos": "vt./vi./n.",
    "meaning": "vt.ˈrefjuːs/ 废弃物， 垃圾",
    "part": "第二部分：高频专业词根族",
    "group": "【62. fuse / fund 浇灌/倾倒/熔化】",
    "analysis_type": "构词",
    "analysis": "re-（往回） + fus（倾倒） + -e，引申为倒掉的残渣废料 -> vt.ˈrefjuːs，废弃物。",
    "antonyms": [
      {
        "target": "accept",
        "pos": "vt.",
        "for_sense": "拒绝",
        "usage": "contrast",
        "in_pack": true
      }
    ]
  },
  {
    "word": "aggravate",
    "phonetic": "/ˈæɡrəveɪt/",
    "pos": "vt.",
    "meaning": "加重， 加剧， 使恶化",
    "part": "第二部分：高频专业词根族",
    "group": "【63. grav / griev 沉重/庄重/痛苦】",
    "analysis_type": "构词",
    "analysis": "ag-（去） + grav（沉重） + -ate（动词后缀） -> 加重，加剧。"
  },
  {
    "word": "grave",
    "phonetic": "/ɡreɪv/",
    "pos": "adj./n.",
    "meaning": "adj. 严峻的，极其严重的；严肃沉重的 n. 坟墓，墓穴 vt. 铭刻",
    "part": "第二部分：高频专业词根族",
    "group": "【63. grav / griev 沉重/庄重/痛苦】",
    "analysis_type": "构词",
    "analysis": "词根 grav-（沉重严肃） -> 表情严峻不苟言笑 -> 严肃的。"
  },
  {
    "word": "gravity",
    "phonetic": "/ˈɡrævəti/",
    "pos": "n.",
    "meaning": "重力， 万有引力； 严肃， 庄重",
    "part": "第二部分：高频专业词根族",
    "group": "【63. grav / griev 沉重/庄重/痛苦】",
    "analysis_type": "构词",
    "analysis": "grav（沉重） + -ity（名词后缀） -> 重力，万有引力。"
  },
  {
    "word": "grief",
    "phonetic": "/ɡriːf/",
    "pos": "n.",
    "meaning": "悲伤， 悲痛； 伤心事",
    "part": "第二部分：高频专业词根族",
    "group": "【63. grav / griev 沉重/庄重/痛苦】",
    "analysis_type": "构词",
    "analysis": "griev- / grav-（沉重巨痛） -> 悲伤，悲痛。",
    "antonyms": [
      {
        "target": "joy",
        "pos": "n.",
        "for_sense": "悲伤",
        "usage": "contrast",
        "in_pack": false
      }
    ],
    "synonyms": [
      {
        "target": "sorrow",
        "pos": "n.",
        "for_sense": "悲痛",
        "usage": "paraphrase",
        "in_pack": false,
        "nuance": "心如刀绞的痛楚"
      }
    ]
  },
  {
    "word": "grieve",
    "phonetic": "/ɡriːv/",
    "pos": "vi./vt.",
    "meaning": "（使）悲伤， 哀伤",
    "part": "第二部分：高频专业词根族",
    "group": "【63. grav / griev 沉重/庄重/痛苦】",
    "analysis_type": "构词",
    "analysis": "griev-（沉重痛苦） + -e，合起来即在无尽的苦痛思念中黯然神伤 -> （使）悲伤，哀伤。",
    "synonyms": [
      {
        "target": "mourn",
        "pos": "vi.",
        "for_sense": "悲伤",
        "usage": "paraphrase",
        "in_pack": false,
        "nuance": "沉痛哀思怀念"
      }
    ]
  },
  {
    "word": "exhibit",
    "phonetic": "/ɪɡˈzɪbɪt/",
    "pos": "vt./n.",
    "meaning": "vt. 展出， 陈列； 表现出 n. 展览品",
    "part": "第二部分：高频专业词根族",
    "group": "【64. habit / hibit 居住/持有/拥有】",
    "analysis_type": "构词",
    "analysis": "ex-（向外） + hibit（拿出来） -> 展出。",
    "synonyms": [
      {
        "target": "show",
        "pos": "vt.",
        "for_sense": "展出",
        "usage": "paraphrase",
        "in_pack": false,
        "nuance": "陈列摆放供观赏"
      }
    ]
  },
  {
    "word": "exhibition",
    "phonetic": "/ˌeksɪˈbɪʃn/",
    "pos": "n.",
    "meaning": "展览会， 陈列",
    "part": "第二部分：高频专业词根族",
    "group": "【64. habit / hibit 居住/持有/拥有】",
    "analysis_type": "构词",
    "analysis": "exhibit（展出） + -ion（名词后缀） -> 展览会，陈列。"
  },
  {
    "word": "habit",
    "phonetic": "/ˈhæbɪt/",
    "pos": "n.",
    "meaning": "习惯， 习性； 怪癖",
    "part": "第二部分：高频专业词根族",
    "group": "【64. habit / hibit 居住/持有/拥有】",
    "analysis_type": "构词",
    "analysis": "词根 habit-（常年持有） -> 习惯，习性。"
  },
  {
    "word": "habitat",
    "phonetic": "/ˈhæbɪtæt/",
    "pos": "n.",
    "meaning": "栖息地， 自然生活环境",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然地理、动植物与环境保护】",
    "analysis_type": "构词",
    "analysis": "源自拉丁动词 habitare（居住） -> 栖息地，自然生活环境。"
  },
  {
    "word": "inhabit",
    "phonetic": "/ɪnˈhæbɪt/",
    "pos": "vt.",
    "meaning": "居住于， 栖息于",
    "part": "第二部分：高频专业词根族",
    "group": "【64. habit / hibit 居住/持有/拥有】",
    "analysis_type": "构词",
    "analysis": "in-（在其中） + habit（居住） -> 安坐居住在某片土地上繁衍 -> 居住于，栖息于。"
  },
  {
    "word": "inhabitant",
    "phonetic": "/ɪnˈhæbɪtənt/",
    "pos": "n.",
    "meaning": "居民， 住户",
    "part": "第二部分：高频专业词根族",
    "group": "【64. habit / hibit 居住/持有/拥有】",
    "analysis_type": "构词",
    "analysis": "inhabit（居住） + -ant（人） -> 居民，住户。"
  },
  {
    "word": "prohibit",
    "phonetic": "/prəˈhɪbɪt/",
    "pos": "vt.",
    "meaning": "禁止， 阻止",
    "part": "第二部分：高频专业词根族",
    "group": "【64. habit / hibit 居住/持有/拥有】",
    "analysis_type": "构词",
    "analysis": "pro-（在前面） + hibit（持有） -> 禁止，阻止。",
    "synonyms": [
      {
        "target": "prevent",
        "pos": "vt.",
        "for_sense": "禁止",
        "usage": "upgrade",
        "in_pack": false,
        "nuance": "法令红线明令禁止"
      }
    ]
  },
  {
    "word": "injure",
    "phonetic": "/ˈɪndʒə(r)/",
    "pos": "vt.",
    "meaning": "伤害， 使受伤； 损害",
    "part": "第二部分：高频专业词根族",
    "group": "【65. jur / jud / just 法律/审判/正义】",
    "analysis_type": "构词",
    "analysis": "in-（无） + jur（正义） + -e，引申指伤害 -> 伤害，使受伤。",
    "antonyms": [
      {
        "target": "heal",
        "pos": "vt.",
        "for_sense": "伤害",
        "usage": "contrast",
        "in_pack": false
      }
    ]
  },
  {
    "word": "injury",
    "phonetic": "/ˈɪndʒəri/",
    "pos": "n.",
    "meaning": "损害， 伤害； 受损处",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、医疗生理与情绪心理】",
    "analysis_type": "构词",
    "analysis": "in-（不） + jur-（正义） + -y，引申指损害 -> 损害，伤害。"
  },
  {
    "word": "judge",
    "phonetic": "/dʒʌdʒ/",
    "pos": "n./vt./vi.",
    "meaning": "n. 法官， 裁判员 vt./vi. 审判； 评定， 判断",
    "part": "第二部分：高频专业词根族",
    "group": "【65. jur / jud / just 法律/审判/正义】",
    "analysis_type": "构词",
    "analysis": "jud-（法律） + dic（宣布说出） -> 法官。"
  },
  {
    "word": "judgement",
    "phonetic": "/ˈdʒʌdʒmənt/",
    "pos": "n.",
    "meaning": "审判， 判决； 判断力； 看法",
    "part": "第二部分：高频专业词根族",
    "group": "【65. jur / jud / just 法律/审判/正义】",
    "analysis_type": "构词",
    "analysis": "judge（审判） + -ment（名词后缀） -> 审判，判决。"
  },
  {
    "word": "jury",
    "phonetic": "/ˈdʒʊəri/",
    "pos": "n.",
    "meaning": "陪审团； 评判委员会",
    "part": "第二部分：高频专业词根族",
    "group": "【65. jur / jud / just 法律/审判/正义】",
    "analysis_type": "构词",
    "analysis": "jur-（发誓立誓） + -y，合起来即由十二名公民发下庄严誓词依据良心决断的陪审团 -> 陪审团。"
  },
  {
    "word": "justice",
    "phonetic": "/ˈdʒʌstɪs/",
    "pos": "n.",
    "meaning": "正义， 公正； 司法， 审判",
    "part": "第二部分：高频专业词根族",
    "group": "【65. jur / jud / just 法律/审判/正义】",
    "analysis_type": "构词",
    "analysis": "just（公道正义） + -ice（性质） -> 正义，公正。"
  },
  {
    "word": "justify",
    "phonetic": "/ˈdʒʌstɪfaɪ/",
    "pos": "vt.",
    "meaning": "证明…是正当的， 为…辩护",
    "part": "第二部分：高频专业词根族",
    "group": "【65. jur / jud / just 法律/审判/正义】",
    "analysis_type": "构词",
    "analysis": "just（正义） + -ify（使成真） -> 证明…是正当的，为…辩护。"
  },
  {
    "word": "collaborate",
    "phonetic": "/kəˈlæbəreɪt/",
    "pos": "vi.",
    "meaning": "合作， 协作",
    "part": "第二部分：高频专业词根族",
    "group": "【66. labor 劳动/劳作/艰辛】",
    "analysis_type": "构词",
    "analysis": "col-（共同） + labor（劳动劳作） + -ate（动词后缀） -> 合作，协作。",
    "synonyms": [
      {
        "target": "cooperate",
        "pos": "vi.",
        "for_sense": "合作",
        "usage": "paraphrase",
        "in_pack": true,
        "nuance": "齐心协力并肩攻关"
      }
    ]
  },
  {
    "word": "elaborate",
    "phonetic": "/ɪˈlæbərət/",
    "pos": "adj./vt./vi.",
    "meaning": "精心制作的，详尽的",
    "part": "第二部分：高频专业词根族",
    "group": "【66. labor 劳动/劳作/艰辛】",
    "analysis_type": "构词",
    "analysis": "e-（出来） + labor（劳动制作） + -ate，引申指adj. 精心制作的 -> 精心制作的，详尽的。"
  },
  {
    "word": "labor",
    "phonetic": "/ˈleɪbə(r)/",
    "pos": "n./vi.",
    "meaning": "n. 劳动， 劳力； 劳工 vi. 艰苦劳作",
    "part": "第二部分：高频专业词根族",
    "group": "【66. labor 劳动/劳作/艰辛】",
    "analysis_type": "构词",
    "analysis": "词根 labor-（艰苦劳作） -> 劳动。"
  },
  {
    "word": "laboratory",
    "phonetic": "/ləˈbɒrətri/",
    "pos": "n.",
    "meaning": "实验室， 研究室",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "labor-（劳动） + -atory（场所后缀） -> 实验室，研究室。"
  },
  {
    "word": "labour",
    "phonetic": "/ˈleɪbə(r)/",
    "pos": "n./vi.",
    "meaning": "劳动， 劳力； 分娩 vi. 劳作",
    "part": "第二部分：高频专业词根族",
    "group": "【66. labor 劳动/劳作/艰辛】",
    "analysis_type": "构词",
    "analysis": "英式拼写形式 -> 与 labor 同源 -> 劳动，劳力。"
  },
  {
    "word": "collect",
    "phonetic": "/kəˈlekt/",
    "pos": "vt./vi.",
    "meaning": "收集， 搜集； 聚集",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "col-（com- 汇） + lect（挑选） -> 收集，搜集。"
  },
  {
    "word": "collection",
    "phonetic": "/kəˈlekʃn/",
    "pos": "n.",
    "meaning": "收集， 采集； 收藏品",
    "part": "第二部分：高频专业词根族",
    "group": "【67. leg / lect / lig 收集/挑选/阅读/法律】",
    "analysis_type": "构词",
    "analysis": "collect（收集） + -ion（名词后缀） -> 收集，采集。"
  },
  {
    "word": "dialect",
    "phonetic": "/ˈdaɪəlekt/",
    "pos": "n.",
    "meaning": "方言， 土语",
    "part": "第二部分：高频专业词根族",
    "group": "【67. leg / lect / lig 收集/挑选/阅读/法律】",
    "analysis_type": "构词",
    "analysis": "dia-（在两者之间） + lect（说话） -> 方言，土语。"
  },
  {
    "word": "elect",
    "phonetic": "/ɪˈlekt/",
    "pos": "vt./adj.",
    "meaning": "vt. 选举， 推举； 选择 adj. 当选的",
    "part": "第二部分：高频专业词根族",
    "group": "【67. leg / lect / lig 收集/挑选/阅读/法律】",
    "analysis_type": "构词",
    "analysis": "e-（向外） + lect（挑选） -> 选举。"
  },
  {
    "word": "election",
    "phonetic": "/ɪˈlekʃn/",
    "pos": "n.",
    "meaning": "选举， 推选",
    "part": "第二部分：高频专业词根族",
    "group": "【67. leg / lect / lig 收集/挑选/阅读/法律】",
    "analysis_type": "构词",
    "analysis": "elect（选举） + -ion（名词后缀） -> 选举，推选。"
  },
  {
    "word": "intellect",
    "phonetic": "/ˈɪntəlekt/",
    "pos": "n.",
    "meaning": "智力， 理解力； 知识分子",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "intel-（在…之间） + lect（挑选） -> 智力，理解力。"
  },
  {
    "word": "intellectual",
    "phonetic": "/ˌɪntəˈlektʃuəl/",
    "pos": "adj./n.",
    "meaning": "智力的； 知识分子",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "intellect（智力） + -ual（形容词） -> 智力的。"
  },
  {
    "word": "intelligence",
    "phonetic": "/ɪnˈtelɪdʒəns/",
    "pos": "n.",
    "meaning": "智力， 聪明； 情报",
    "part": "第二部分：高频专业词根族",
    "group": "【67. leg / lect / lig 收集/挑选/阅读/法律】",
    "analysis_type": "构词",
    "analysis": "intel-（在…之间） + lig（挑选） + -ence（名词后缀） -> 智力，聪明。"
  },
  {
    "word": "intelligent",
    "phonetic": "/ɪnˈtelɪdʒənt/",
    "pos": "adj.",
    "meaning": "聪明的， 有才智的； 智能的",
    "part": "第二部分：高频专业词根族",
    "group": "【67. leg / lect / lig 收集/挑选/阅读/法律】",
    "analysis_type": "构词",
    "analysis": "intel-（在…之间） + lig（挑选） + -ent（形容词后缀） -> 聪明的，有才智的。"
  },
  {
    "word": "lecture",
    "phonetic": "/ˈlektʃə(r)/",
    "pos": "n./vi.",
    "meaning": "演讲， 授课 vi. 讲课",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "lect-（朗读） + -ure（名词） -> 演讲，授课。"
  },
  {
    "word": "legal",
    "phonetic": "/ˈliːɡl/",
    "pos": "adj.",
    "meaning": "法律的； 合法的， 法定的",
    "part": "第二部分：高频专业词根族",
    "group": "【67. leg / lect / lig 收集/挑选/阅读/法律】",
    "analysis_type": "构词",
    "analysis": "leg-（法律规范） + -al（形容词后缀） -> 法律的。",
    "antonyms": [
      {
        "target": "illegal",
        "pos": "adj.",
        "for_sense": "合法的",
        "usage": "contrast",
        "in_pack": false
      }
    ]
  },
  {
    "word": "legislation",
    "phonetic": "/ˌledʒɪsˈleɪʃn/",
    "pos": "n.",
    "meaning": "立法， 法规， 法律",
    "part": "第二部分：高频专业词根族",
    "group": "【67. leg / lect / lig 收集/挑选/阅读/法律】",
    "analysis_type": "构词",
    "analysis": "legis-（法律） + lat-（带来提出） + -ion，引申指立法 -> 立法，法规。"
  },
  {
    "word": "neglect",
    "phonetic": "/nɪˈɡlekt/",
    "pos": "vt./n.",
    "meaning": "忽视， 忽略； 疏忽",
    "part": "第二部分：高频专业词根族",
    "group": "【67. leg / lect / lig 收集/挑选/阅读/法律】",
    "analysis_type": "构词",
    "analysis": "neg-（否定不） + lect（挑选） -> 忽视，忽略。"
  },
  {
    "word": "select",
    "phonetic": "/sɪˈlekt/",
    "pos": "vt./adj.",
    "meaning": "vt. 选择， 挑选 adj. 精选的， 优等的",
    "part": "第二部分：高频专业词根族",
    "group": "【67. leg / lect / lig 收集/挑选/阅读/法律】",
    "analysis_type": "构词",
    "analysis": "se-（分开） + lect（挑选） -> 选择。"
  },
  {
    "word": "selection",
    "phonetic": "/sɪˈlekʃn/",
    "pos": "n.",
    "meaning": "选择， 挑选； 选集",
    "part": "第二部分：高频专业词根族",
    "group": "【67. leg / lect / lig 收集/挑选/阅读/法律】",
    "analysis_type": "构词",
    "analysis": "select（挑选） + -ion（名词后缀） -> 选择，挑选。"
  },
  {
    "word": "alleviate",
    "phonetic": "/əˈliːvieɪt/",
    "pos": "vt.",
    "meaning": "减轻， 缓和（痛苦/负担）",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "al-（ad- 朝向） + levi-（轻的） + -ate（使动后缀） -> 减轻，缓和（痛苦。"
  },
  {
    "word": "elevate",
    "phonetic": "/ˈelɪveɪt/",
    "pos": "vt.",
    "meaning": "提升， 举起； 提拔",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "e-（向上） + lev-（轻的） + -ate，引申指提升 -> 提升，举起。"
  },
  {
    "word": "elevator",
    "phonetic": "/ˈelɪveɪtə(r)/",
    "pos": "n.",
    "meaning": "电梯， 升降机",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "elevate（抬升） + -or（机器） -> 电梯，升降机。"
  },
  {
    "word": "relief",
    "phonetic": "/rɪˈliːf/",
    "pos": "n.",
    "meaning": "宽慰， 安心； 救济品； 缓解",
    "part": "第二部分：高频专业词根族",
    "group": "【68. lev 轻/举起/升高】",
    "analysis_type": "构词",
    "analysis": "re-（回） + lief（减轻） -> 宽慰，安心。"
  },
  {
    "word": "relieve",
    "phonetic": "/rɪˈliːv/",
    "pos": "vt.",
    "meaning": "vt. 接替，换班；缓解，减轻，消除（痛苦/负担）；解除",
    "part": "第二部分：高频专业词根族",
    "group": "【68. lev 轻/举起/升高】",
    "analysis_type": "构词",
    "analysis": "re-（再） + liev-（变轻） -> 让原本沉重的重负重新变轻 -> 缓解，减轻（痛苦）。"
  },
  {
    "word": "deliberate",
    "phonetic": "/dɪˈlɪbərət/",
    "pos": "adj./vt./vi.",
    "meaning": "深思熟虑的； 仔细考虑； 故意的",
    "part": "第二部分：高频专业词根族",
    "group": "【69. liber 自由/释放/称量】",
    "analysis_type": "构词",
    "analysis": "de-（彻底） + liber（天平称量权衡） + -ate，引申指深思熟虑的 -> 深思熟虑的。",
    "antonyms": [
      {
        "target": "accidental",
        "pos": "adj.",
        "for_sense": "故意的",
        "usage": "contrast",
        "in_pack": false
      },
      {
        "target": "spontaneous",
        "pos": "adj.",
        "for_sense": "深思熟虑的",
        "usage": "contrast",
        "in_pack": false
      }
    ]
  },
  {
    "word": "liberal",
    "phonetic": "/ˈlɪbərəl/",
    "pos": "adj./n.",
    "meaning": "adj. 自由的； 心胸宽广的； 慷慨的 n. 自由主义者",
    "part": "第二部分：高频专业词根族",
    "group": "【69. liber 自由/释放/称量】",
    "analysis_type": "构词",
    "analysis": "liber（自由的） + -al（的） -> 自由的。"
  },
  {
    "word": "liberate",
    "phonetic": "/ˈlɪbəreɪt/",
    "pos": "vt.",
    "meaning": "解放， 使获自由",
    "part": "第二部分：高频专业词根族",
    "group": "【69. liber 自由/释放/称量】",
    "analysis_type": "构词",
    "analysis": "liber（自由） + -ate（动词后缀） -> 解放，使获自由。"
  },
  {
    "word": "liberty",
    "phonetic": "/ˈlɪbəti/",
    "pos": "n.",
    "meaning": "自由， 自由权",
    "part": "第二部分：高频专业词根族",
    "group": "【69. liber 自由/释放/称量】",
    "analysis_type": "构词",
    "analysis": "liber（自由） + -ty（名词后缀） -> 自由，自由权。",
    "antonyms": [
      {
        "target": "slavery",
        "pos": "n.",
        "for_sense": "自由权",
        "usage": "contrast",
        "in_pack": false
      }
    ]
  },
  {
    "word": "allocate",
    "phonetic": "/ˈæləkeɪt/",
    "pos": "vt.",
    "meaning": "分配， 分派； 拨出专款",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "al-（ad- 去） + loc-（地方） + -ate（动词后缀） -> 分配，分派。"
  },
  {
    "word": "local",
    "phonetic": "/ˈləʊkl/",
    "pos": "adj./n.",
    "meaning": "adj. 当地的， 地方性的 n. 当地人",
    "part": "第二部分：高频专业词根族",
    "group": "【70. loc 地点/放置/位置】",
    "analysis_type": "构词",
    "analysis": "loc（地点） + -al（的） -> 当地的。"
  },
  {
    "word": "locate",
    "phonetic": "/ləʊˈkeɪt/",
    "pos": "vt.",
    "meaning": "探明， 找出…的位置； 使坐落于",
    "part": "第二部分：高频专业词根族",
    "group": "【70. loc 地点/放置/位置】",
    "analysis_type": "构词",
    "analysis": "loc（地点） + -ate（动词后缀） -> 探明，找出…的位置。"
  },
  {
    "word": "location",
    "phonetic": "/ləʊˈkeɪʃn/",
    "pos": "n.",
    "meaning": "位置， 场所； 定位",
    "part": "第二部分：高频专业词根族",
    "group": "【70. loc 地点/放置/位置】",
    "analysis_type": "构词",
    "analysis": "locate（定位） + -ion（名词后缀） -> 建筑物坐落安歇的地理处所 -> 位置，场所。"
  },
  {
    "word": "magnificent",
    "phonetic": "/mæɡˈnɪfɪsnt/",
    "pos": "adj.",
    "meaning": "壮丽的， 宏伟的； 极好的",
    "part": "第二部分：高频专业词根族",
    "group": "【71. magn / maj / max 巨大/伟大/最高】",
    "analysis_type": "构词",
    "analysis": "magn-（巨大宏伟） + i + fic（做） + -ent（的） -> 壮丽的，宏伟的。",
    "synonyms": [
      {
        "target": "spectacular",
        "pos": "adj.",
        "for_sense": "壮丽的",
        "usage": "upgrade",
        "in_pack": true,
        "nuance": "令人叹为观止的宏伟"
      }
    ]
  },
  {
    "word": "major",
    "phonetic": "/ˈmeɪdʒə(r)/",
    "pos": "adj./vi./n.",
    "meaning": "主要的，重大的；少校",
    "part": "第二部分：高频专业词根族",
    "group": "【71. magn / maj / max 巨大/伟大/最高】",
    "analysis_type": "构词",
    "analysis": "词根 maj-（更大） -> 主要的，重大的。",
    "antonyms": [
      {
        "target": "minor",
        "pos": "adj.",
        "for_sense": "主要的",
        "usage": "contrast",
        "in_pack": true
      }
    ]
  },
  {
    "word": "majority",
    "phonetic": "/məˈdʒɒrəti/",
    "pos": "n.",
    "meaning": "多数， 大多数",
    "part": "第二部分：高频专业词根族",
    "group": "【71. magn / maj / max 巨大/伟大/最高】",
    "analysis_type": "构词",
    "analysis": "major（主要的） + -ity（名词后缀） -> 多数，大多数。",
    "antonyms": [
      {
        "target": "minority",
        "pos": "n.",
        "for_sense": "多数",
        "usage": "contrast",
        "in_pack": true
      }
    ]
  },
  {
    "word": "maximum",
    "phonetic": "/ˈmæksɪməm/",
    "pos": "adj./n.",
    "meaning": "adj. 最大的， 最高的 n. 最大值， 最大限度",
    "part": "第二部分：高频专业词根族",
    "group": "【71. magn / maj / max 巨大/伟大/最高】",
    "analysis_type": "构词",
    "analysis": "max-（最大） + -imum（最高级） -> 攀登攀升到顶点的极限量 -> 最大的。",
    "antonyms": [
      {
        "target": "minimum",
        "pos": "adj.",
        "for_sense": "最大值的",
        "usage": "contrast",
        "in_pack": true
      }
    ]
  },
  {
    "word": "command",
    "phonetic": "/kəˈmɑːnd/",
    "pos": "v./n.",
    "meaning": "命令， 指挥； 掌握",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "com-（加强语气） + mand（委托） -> 命令，指挥。"
  },
  {
    "word": "commend",
    "phonetic": "/kəˈmend/",
    "pos": "vt.",
    "meaning": "称赞， 表扬； 推荐",
    "part": "第二部分：高频专业词根族",
    "group": "【72. mand / mend 命令/委托/托付】",
    "analysis_type": "构词",
    "analysis": "com-（全力） + mend（托付赞誉） -> 称赞，表扬。",
    "synonyms": [
      {
        "target": "praise",
        "pos": "vt.",
        "for_sense": "称赞",
        "usage": "upgrade",
        "in_pack": false,
        "nuance": "当众宣讲赞赏功绩"
      }
    ]
  },
  {
    "word": "demand",
    "phonetic": "/dɪˈmɑːnd/",
    "pos": "v./n.",
    "meaning": "要求； 需要 n. 需求",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "de-（彻底） + mand（要求） -> 要求。"
  },
  {
    "word": "demanding",
    "phonetic": "/dɪˈmɑːndɪŋ/",
    "pos": "adj.",
    "meaning": "要求高的， 费力的， 苛求的",
    "part": "第二部分：高频专业词根族",
    "group": "【72. mand / mend 命令/委托/托付】",
    "analysis_type": "构词",
    "analysis": "demand（要求） + -ing（形容词后缀） -> 要求高的，费力的。"
  },
  {
    "word": "recommend",
    "phonetic": "/ˌrekəˈmend/",
    "pos": "vt.",
    "meaning": "推荐， 介绍； 劝告， 建议",
    "part": "第二部分：高频专业词根族",
    "group": "【72. mand / mend 命令/委托/托付】",
    "analysis_type": "构词",
    "analysis": "re-（反复） + com- + mend（托付赞许） -> 推荐，介绍。"
  },
  {
    "word": "recommendation",
    "phonetic": "/ˌrekəmenˈdeɪʃn/",
    "pos": "n.",
    "meaning": "推荐， 介绍； 推荐信； 建议",
    "part": "第二部分：高频专业词根族",
    "group": "【72. mand / mend 命令/委托/托付】",
    "analysis_type": "构词",
    "analysis": "recommend（推荐） + -ation（名词后缀） -> 正式书写的引荐担保文书 -> 推荐，介绍。"
  },
  {
    "word": "immediate",
    "phonetic": "/ɪˈmiːdiət/",
    "pos": "adj.",
    "meaning": "立即的， 即刻的； 直接的",
    "part": "第二部分：高频专业词根族",
    "group": "【73. med / medi 中间/居中】",
    "analysis_type": "构词",
    "analysis": "im-（无） + med（中间间隔） + -iate，引申指立即的 -> 立即的，即刻的。"
  },
  {
    "word": "immediately",
    "phonetic": "/ɪˈmiːdiətli/",
    "pos": "adv./conj.",
    "meaning": "adv. 立即， 马上 conj. 一…就",
    "part": "第二部分：高频专业词根族",
    "group": "【73. med / medi 中间/居中】",
    "analysis_type": "构词",
    "analysis": "immediate（立即的） + -ly（副词后缀） -> 分秒不差一刹那间达成 -> 立即。"
  },
  {
    "word": "intermediate",
    "phonetic": "/ˌɪntəˈmiːdiət/",
    "pos": "adj./n.",
    "meaning": "adj. 中间的， 中级的 n. 中间体",
    "part": "第二部分：高频专业词根族",
    "group": "【73. med / medi 中间/居中】",
    "analysis_type": "构词",
    "analysis": "inter-（在两者之间） + medi（中间） + -ate，引申指adj. 中间的 -> 中间的。"
  },
  {
    "word": "mean",
    "phonetic": "/miːn/",
    "pos": "vt./adj./n.",
    "meaning": "adj. 吝啬刻薄的；卑鄙的 vt. 意味着；打算 n. 平均值",
    "part": "第二部分：高频专业词根族",
    "group": "【73. med / medi 中间/居中】",
    "analysis_type": "构词",
    "analysis": "处于中间的平均值 -> 或通过言语居中传达意义 -> 意味着。",
    "antonyms": [
      {
        "target": "generous",
        "pos": "adj.",
        "for_sense": "吝啬的",
        "usage": "contrast",
        "in_pack": true
      }
    ]
  },
  {
    "word": "means",
    "phonetic": "/miːnz/",
    "pos": "n.",
    "meaning": "手段， 方法， 方式； 财富， 资产",
    "part": "第二部分：高频专业词根族",
    "group": "【73. med / medi 中间/居中】",
    "analysis_type": "构词",
    "analysis": "mean（居中媒介） + -s，合起来即用来达成最终目标的居中工具途径或钱财家底 -> 手段，方法。"
  },
  {
    "word": "meanwhile",
    "phonetic": "/ˈmiːnwaɪl/",
    "pos": "adv./n.",
    "meaning": "adv. 与此同时， 在此期间 n. 其间",
    "part": "第二部分：高频专业词根族",
    "group": "【73. med / medi 中间/居中】",
    "analysis_type": "构词",
    "analysis": "mean（居中） + while（时光） -> 与此同时。"
  },
  {
    "word": "media",
    "phonetic": "/ˈmiːdiə/",
    "pos": "n.",
    "meaning": "新闻媒体， 大众传播媒介",
    "part": "第二部分：高频专业词根族",
    "group": "【73. med / medi 中间/居中】",
    "analysis_type": "构词",
    "analysis": "词根 medi-（居中媒介） -> 的复数形式 -> 新闻媒体，大众传播媒介。"
  },
  {
    "word": "mediate",
    "phonetic": "/ˈmiːdieɪt/",
    "pos": "vt./vi.",
    "meaning": "调停， 调解， 斡旋",
    "part": "第二部分：高频专业词根族",
    "group": "【73. med / medi 中间/居中】",
    "analysis_type": "构词",
    "analysis": "medi-（居中） + -ate（动词后缀） -> 调停，调解。"
  },
  {
    "word": "medium",
    "phonetic": "/ˈmiːdiəm/",
    "pos": "n./adj.",
    "meaning": "媒介， 媒体； 手段； 中等的",
    "part": "第二部分：高频专业词根族",
    "group": "【73. med / medi 中间/居中】",
    "analysis_type": "构词",
    "analysis": "medi-（中间） + -um（媒介） -> 媒介，媒体。"
  },
  {
    "word": "memo",
    "phonetic": "/ˈmeməʊ/",
    "pos": "n.",
    "meaning": "备忘录",
    "part": "第二部分：高频专业词根族",
    "group": "【74. memor / member 记忆/纪念】",
    "analysis_type": "构词",
    "analysis": "词根 memorandum（备忘录） -> 的缩写 -> 备忘录。"
  },
  {
    "word": "memorial",
    "phonetic": "/məˈmɔːriəl/",
    "pos": "adj./n.",
    "meaning": "adj. 纪念的 n. 纪念碑， 纪念馆",
    "part": "第二部分：高频专业词根族",
    "group": "【74. memor / member 记忆/纪念】",
    "analysis_type": "构词",
    "analysis": "memor-（记忆怀念） + -ial（的） -> 纪念的。"
  },
  {
    "word": "memorize",
    "phonetic": "/ˈmeməraɪz/",
    "pos": "vt.",
    "meaning": "记住， 熟记",
    "part": "第二部分：高频专业词根族",
    "group": "【74. memor / member 记忆/纪念】",
    "analysis_type": "构词",
    "analysis": "memor-（记忆） + -ize（使成形） -> 记住，熟记。"
  },
  {
    "word": "memory",
    "phonetic": "/ˈmeməri/",
    "pos": "n.",
    "meaning": "记忆， 记忆力； 回忆； 内存",
    "part": "第二部分：高频专业词根族",
    "group": "【74. memor / member 记忆/纪念】",
    "analysis_type": "构词",
    "analysis": "memor（记忆） + -y（能力） -> 记忆，记忆力。"
  },
  {
    "word": "monument",
    "phonetic": "/ˈmɒnjumənt/",
    "pos": "n.",
    "meaning": "纪念碑， 纪念馆； 历史遗迹",
    "part": "第二部分：高频专业词根族",
    "group": "【74. memor / member 记忆/纪念】",
    "analysis_type": "构词",
    "analysis": "monu-（提醒警戒） + -ment（建筑） -> 纪念碑，纪念馆。"
  },
  {
    "word": "recall",
    "phonetic": "/rɪˈkɔːl/",
    "pos": "vt./n.",
    "meaning": "回忆起， 回想起； 召回",
    "part": "第二部分：高频专业词根族",
    "group": "【74. memor / member 记忆/纪念】",
    "analysis_type": "构词",
    "analysis": "re-（回） + call（呼唤） -> 回忆起，回想起。"
  },
  {
    "word": "remind",
    "phonetic": "/rɪˈmaɪnd/",
    "pos": "vt.",
    "meaning": "提醒， 使想起（of）",
    "part": "第二部分：高频专业词根族",
    "group": "【74. memor / member 记忆/纪念】",
    "analysis_type": "构词",
    "analysis": "re-（再次） + mind（心智） -> 提醒，使想起（of）。"
  },
  {
    "word": "emigrate",
    "phonetic": "/ˈemɪɡreɪt/",
    "pos": "vi.",
    "meaning": "移居国外， 迁居",
    "part": "第二部分：高频专业词根族",
    "group": "【75. migr 迁移/移居】",
    "analysis_type": "构词",
    "analysis": "e-（向外） + migr（迁徙） + -ate（动词后缀） -> 移居国外，迁居。"
  },
  {
    "word": "immigrate",
    "phonetic": "/ˈɪmɪɡreɪt/",
    "pos": "vi.",
    "meaning": "（从外国）移入， 移民",
    "part": "第二部分：高频专业词根族",
    "group": "【75. migr 迁移/移居】",
    "analysis_type": "构词",
    "analysis": "im-（向内） + migr（迁徙） + -ate（动词后缀） -> （从外国）移入 -> （从外国）移入，移民。"
  },
  {
    "word": "migrate",
    "phonetic": "/maɪˈɡreɪt/",
    "pos": "vi.",
    "meaning": "迁移， 移居； （候鸟等）迁徙",
    "part": "第二部分：高频专业词根族",
    "group": "【75. migr 迁移/移居】",
    "analysis_type": "构词",
    "analysis": "migr-（改变居所） + -ate（动词后缀） -> 迁移，移居。"
  },
  {
    "word": "migration",
    "phonetic": "/maɪˈɡreɪʃn/",
    "pos": "n.",
    "meaning": "迁徙， 移居； 移动",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然地理、动植物与环境保护】",
    "analysis_type": "构词",
    "analysis": "migr-（迁移） + -ation（名词后缀） -> 迁徙，移居。"
  },
  {
    "word": "minimize",
    "phonetic": "/ˈmɪnɪmaɪz/",
    "pos": "vt.",
    "meaning": "使减少到最低限度； 轻视",
    "part": "第二部分：高频专业词根族",
    "group": "【76. min / mini 微小/变小】",
    "analysis_type": "构词",
    "analysis": "minim-（最小） + -ize（使…化） -> 使减少到最低限度。"
  },
  {
    "word": "minimum",
    "phonetic": "/ˈmɪnɪməm/",
    "pos": "adj./n.",
    "meaning": "adj. 最小的， 最低的 n. 最小值",
    "part": "第二部分：高频专业词根族",
    "group": "【76. min / mini 微小/变小】",
    "analysis_type": "构词",
    "analysis": "minim-（最小） + -um（名词后缀） -> 最小的。",
    "antonyms": [
      {
        "target": "maximum",
        "pos": "adj.",
        "for_sense": "最小值的",
        "usage": "contrast",
        "in_pack": true
      }
    ]
  },
  {
    "word": "minor",
    "phonetic": "/ˈmaɪnə(r)/",
    "pos": "adj./vi./n.",
    "meaning": "较小的，次要的",
    "part": "第二部分：高频专业词根族",
    "group": "【76. min / mini 微小/变小】",
    "analysis_type": "构词",
    "analysis": "min-（小） + -or（比较级） -> 分量较轻较次要的 -> 较小的，次要的。",
    "antonyms": [
      {
        "target": "major",
        "pos": "adj.",
        "for_sense": "次要的",
        "usage": "contrast",
        "in_pack": true
      }
    ]
  },
  {
    "word": "minority",
    "phonetic": "/maɪˈnɒrəti/",
    "pos": "n.",
    "meaning": "少数， 少数派； 少数民族",
    "part": "第二部分：高频专业词根族",
    "group": "【76. min / mini 微小/变小】",
    "analysis_type": "构词",
    "analysis": "minor（少数的） + -ity（名词后缀） -> 少数，少数派。",
    "antonyms": [
      {
        "target": "majority",
        "pos": "n.",
        "for_sense": "少数",
        "usage": "contrast",
        "in_pack": true
      }
    ]
  },
  {
    "word": "minute",
    "phonetic": "/ˈmɪnɪt/",
    "pos": "n./adj.",
    "meaning": "adj. 极其微小的，细微的；详尽细致的 n. 分钟，分；会议记录",
    "part": "第二部分：高频专业词根族",
    "group": "【76. min / mini 微小/变小】",
    "analysis_type": "构词",
    "analysis": "min-（微小） + -ute，源自钟表盘上经第二次微小细分得出的极小时间单位 -> 微小的，细微的。"
  },
  {
    "word": "monitor",
    "phonetic": "/ˈmɒnɪtə(r)/",
    "pos": "vt./n.",
    "meaning": "vt. 监控， 监测 n. 监视器； 班长",
    "part": "第二部分：高频专业词根族",
    "group": "【77. mon / monit 提醒/警告】",
    "analysis_type": "构词",
    "analysis": "monit-（提醒） + -or（人） -> 实时侦听侦测的仪器 -> 监控。"
  },
  {
    "word": "abnormal",
    "phonetic": "/æbˈnɔːml/",
    "pos": "adj.",
    "meaning": "反常的， 异常的， 变态的",
    "part": "第二部分：高频专业词根族",
    "group": "【78. norm 规范/标准/常态】",
    "analysis_type": "构词",
    "analysis": "ab-（偏离） + normal（正常的） -> 反常的，异常的。"
  },
  {
    "word": "enormous",
    "phonetic": "/ɪˈnɔːməs/",
    "pos": "adj.",
    "meaning": "巨大的， 庞大的",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "e-（出） + norm（规范） + -ous，引申指巨大的 -> 巨大的，庞大的。"
  },
  {
    "word": "norm",
    "phonetic": "/nɔːm/",
    "pos": "n.",
    "meaning": "规范， 行为标准； 准则； 平均水平",
    "part": "第二部分：高频专业词根族",
    "group": "【78. norm 规范/标准/常态】",
    "analysis_type": "构词",
    "analysis": "词根 norm-（木工直角尺） -> 规范，行为标准。"
  },
  {
    "word": "normal",
    "phonetic": "/ˈnɔːml/",
    "pos": "adj./n.",
    "meaning": "adj. 正常的， 正规的， 标准的 n. 常态",
    "part": "第二部分：高频专业词根族",
    "group": "【78. norm 规范/标准/常态】",
    "analysis_type": "构词",
    "analysis": "norm（规范标准） + -al（形容词后缀） -> 正常的。"
  },
  {
    "word": "notable",
    "phonetic": "/ˈnəʊtəbl/",
    "pos": "adj./n.",
    "meaning": "adj. 显著的， 著名的 n. 名人",
    "part": "第二部分：高频专业词根族",
    "group": "【79. not 知道/注意/标明】",
    "analysis_type": "构词",
    "analysis": "not-（知道） + -able（值得…的） -> 显著的。"
  },
  {
    "word": "note",
    "phonetic": "/nəʊt/",
    "pos": "n./vt.",
    "meaning": "n. 便条， 笔记； 注释 vt. 注意到； 记录",
    "part": "第二部分：高频专业词根族",
    "group": "【79. not 知道/注意/标明】",
    "analysis_type": "构词",
    "analysis": "词根 not-（做出可见标记） -> 便条。"
  },
  {
    "word": "notice",
    "phonetic": "/ˈnəʊtɪs/",
    "pos": "vt./n.",
    "meaning": "vt. 注意到 n. 通知， 通告； 注意",
    "part": "第二部分：高频专业词根族",
    "group": "【79. not 知道/注意/标明】",
    "analysis_type": "构词",
    "analysis": "not-（知道） + -ice（名词） -> 注意到。",
    "synonyms": [
      {
        "target": "perceive",
        "pos": "vt.",
        "for_sense": "注意到",
        "usage": "paraphrase",
        "in_pack": true,
        "nuance": "五官敏锐捕捉到"
      }
    ]
  },
  {
    "word": "noticeable",
    "phonetic": "/ˈnəʊtɪsəbl/",
    "pos": "adj.",
    "meaning": "显而易见的， 引人注目的",
    "part": "第二部分：高频专业词根族",
    "group": "【79. not 知道/注意/标明】",
    "analysis_type": "构词",
    "analysis": "notice（注意到） + -able（易…的） -> 显而易见的，引人注目的。",
    "synonyms": [
      {
        "target": "obvious",
        "pos": "adj.",
        "for_sense": "显而易见的",
        "usage": "paraphrase",
        "in_pack": false,
        "nuance": "极易引起注意"
      }
    ]
  },
  {
    "word": "notion",
    "phonetic": "/ˈnəʊʃn/",
    "pos": "n.",
    "meaning": "概念， 观念； 想法， 见解",
    "part": "第二部分：高频专业词根族",
    "group": "【79. not 知道/注意/标明】",
    "analysis_type": "构词",
    "analysis": "not-（知道） + -ion（名词后缀） -> 概念，观念。",
    "synonyms": [
      {
        "target": "concept",
        "pos": "n.",
        "for_sense": "观念",
        "usage": "paraphrase",
        "in_pack": true,
        "nuance": "脑中抽象成型观念"
      }
    ]
  },
  {
    "word": "innovate",
    "phonetic": "/ˈɪnəveɪt/",
    "pos": "vi./vt.",
    "meaning": "创新， 革新",
    "part": "第二部分：高频专业词根族",
    "group": "【80. nov / neo 新/新颖】",
    "analysis_type": "构词",
    "analysis": "in-（进入） + nov（新颖） + -ate（动词后缀） -> 创新，革新。"
  },
  {
    "word": "innovation",
    "phonetic": "/ˌɪnəˈveɪʃn/",
    "pos": "n.",
    "meaning": "创新， 革新； 新方法",
    "part": "第二部分：高频专业词根族",
    "group": "【80. nov / neo 新/新颖】",
    "analysis_type": "构词",
    "analysis": "innovate（创新） + -ion（名词后缀） -> 创新，革新。"
  },
  {
    "word": "innovative",
    "phonetic": "/ˈɪnəveɪtɪv/",
    "pos": "adj.",
    "meaning": "创新的， 富有革新精神的",
    "part": "第二部分：高频专业词根族",
    "group": "【80. nov / neo 新/新颖】",
    "analysis_type": "构词",
    "analysis": "innovate（创新） + -ive（形容词后缀） -> 创新的，富有革新精神的。"
  },
  {
    "word": "novel",
    "phonetic": "/ˈnɒvl/",
    "pos": "adj./n.",
    "meaning": "adj. 新颖独特的，新奇的 n. （长篇）小说",
    "part": "第二部分：高频专业词根族",
    "group": "【80. nov / neo 新/新颖】",
    "analysis_type": "构词",
    "analysis": "nov-（新奇） + -el -> 前所未见的新颖事物 -> 新颖的，新奇的。"
  },
  {
    "word": "novelty",
    "phonetic": "/ˈnɒvlti/",
    "pos": "n.",
    "meaning": "新奇， 新颖； 新奇的事物",
    "part": "第二部分：高频专业词根族",
    "group": "【80. nov / neo 新/新颖】",
    "analysis_type": "构词",
    "analysis": "novel（新奇） + -ty（名词后缀） -> 新奇，新颖。"
  },
  {
    "word": "renovate",
    "phonetic": "/ˈrenəveɪt/",
    "pos": "vt.",
    "meaning": "翻新， 修整， 修复",
    "part": "第二部分：高频专业词根族",
    "group": "【80. nov / neo 新/新颖】",
    "analysis_type": "构词",
    "analysis": "re-（重新） + nov（翻新） + -ate（动词后缀） -> 翻新，修整。",
    "synonyms": [
      {
        "target": "restore",
        "pos": "vt.",
        "for_sense": "翻新",
        "usage": "paraphrase",
        "in_pack": false,
        "nuance": "使老建筑焕发新生"
      }
    ]
  },
  {
    "word": "renovation",
    "phonetic": "/ˌrenəˈveɪʃn/",
    "pos": "n.",
    "meaning": "翻新， 整修， 翻新工程",
    "part": "第二部分：高频专业词根族",
    "group": "【80. nov / neo 新/新颖】",
    "analysis_type": "构词",
    "analysis": "renovate（翻新） + -ion（名词后缀） -> 翻新，整修。"
  },
  {
    "word": "deny",
    "phonetic": "/dɪˈnaɪ/",
    "pos": "vt.",
    "meaning": "否认， 否定； 拒绝给予",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【81. 前缀群：否定与相反】",
    "analysis_type": "构词",
    "analysis": "de-（彻底离开） + ny（否定不） -> 断然摆头表示决不认可 -> 否认，否定。",
    "antonyms": [
      {
        "target": "admit",
        "pos": "vt.",
        "for_sense": "否认",
        "usage": "contrast",
        "in_pack": true
      }
    ]
  },
  {
    "word": "disadvantage",
    "phonetic": "/ˌdɪsədˈvɑːntɪdʒ/",
    "pos": "n.",
    "meaning": "缺点， 劣势， 不利条件",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【81. 前缀群：否定与相反】",
    "analysis_type": "构词",
    "analysis": "dis-（否定相反） + advantage（优势） -> 缺点，劣势。",
    "antonyms": [
      {
        "target": "advantage",
        "pos": "n.",
        "for_sense": "劣势",
        "usage": "contrast",
        "in_pack": false
      }
    ]
  },
  {
    "word": "disagree",
    "phonetic": "/ˌdɪsəˈɡriː/",
    "pos": "vi.",
    "meaning": "有分歧， 不同意",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【81. 前缀群：否定与相反】",
    "analysis_type": "构词",
    "analysis": "dis-（相反） + agree（同意） -> 意见相左不合拍 -> 有分歧，不同意。"
  },
  {
    "word": "disappear",
    "phonetic": "/ˌdɪsəˈpɪə(r)/",
    "pos": "vi.",
    "meaning": "消失， 消散； 不复存在",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【81. 前缀群：否定与相反】",
    "analysis_type": "构词",
    "analysis": "dis-（剥离消失） + appear（出现显现） -> 消失，消散。"
  },
  {
    "word": "misfortune",
    "phonetic": "/ˌmɪsˈfɔːtʃuːn/",
    "pos": "n.",
    "meaning": "不幸， 厄运； 灾祸",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【81. 前缀群：否定与相反】",
    "analysis_type": "构词",
    "analysis": "mis-（恶） + fortune（好运） -> 不幸，厄运。"
  },
  {
    "word": "mislead",
    "phonetic": "/ˌmɪsˈliːd/",
    "pos": "vt.",
    "meaning": "把…引错方向， 误导",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【81. 前缀群：否定与相反】",
    "analysis_type": "构词",
    "analysis": "mis-（错误） + lead（带领） -> 把…引错方向，误导。"
  },
  {
    "word": "mistake",
    "phonetic": "/mɪˈsteɪk/",
    "pos": "n./vt.",
    "meaning": "n. 错误， 过失 vt. 误解， 弄错",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【81. 前缀群：否定与相反】",
    "analysis_type": "构词",
    "analysis": "mis-（错误） + take（拿取） -> 错拿了不该拿的东西 -> 错误。"
  },
  {
    "word": "misunderstand",
    "phonetic": "/ˌmɪsʌndəˈstænd/",
    "pos": "vt.",
    "meaning": "误解， 误会",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【81. 前缀群：否定与相反】",
    "analysis_type": "构词",
    "analysis": "mis-（错误） + understand（理解） -> 把对方的原意彻底理解错位 -> 误解，误会。"
  },
  {
    "word": "unable",
    "phonetic": "/ʌnˈeɪbl/",
    "pos": "adj.",
    "meaning": "不能的， 不会的（to do）",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【81. 前缀群：否定与相反】",
    "analysis_type": "构词",
    "analysis": "un-（不） + able（有能力的） -> 不能的，不会的（to。",
    "antonyms": [
      {
        "target": "capable",
        "pos": "adj.",
        "for_sense": "不能的",
        "usage": "contrast",
        "in_pack": true
      }
    ]
  },
  {
    "word": "uncertain",
    "phonetic": "/ʌnˈsɜːtn/",
    "pos": "adj.",
    "meaning": "不确定的， 易变的",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【81. 前缀群：否定与相反】",
    "analysis_type": "构词",
    "analysis": "un-（不） + certain（确定的） -> 不确定的，易变的。",
    "antonyms": [
      {
        "target": "certain",
        "pos": "adj.",
        "for_sense": "不确定的",
        "usage": "contrast",
        "in_pack": true
      }
    ]
  },
  {
    "word": "uncomfortable",
    "phonetic": "/ʌnˈkʌmftəbl/",
    "pos": "adj.",
    "meaning": "不舒服的， 不自在的",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【81. 前缀群：否定与相反】",
    "analysis_type": "构词",
    "analysis": "un-（不） + comfortable（舒适的） -> 不舒服的，不自在的。"
  },
  {
    "word": "unexpected",
    "phonetic": "/ˌʌnɪkˈspektɪd/",
    "pos": "adj.",
    "meaning": "想不到的， 意外的",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【81. 前缀群：否定与相反】",
    "analysis_type": "构词",
    "analysis": "un-（未） + expected（预期的） -> 想不到的，意外的。"
  },
  {
    "word": "administer",
    "phonetic": "/ədˈmɪnɪstə(r)/",
    "pos": "vt.",
    "meaning": "管理， 治理； 执行",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "ad-（朝向） + minister（仆人） -> 管理，治理。"
  },
  {
    "word": "administrative",
    "phonetic": "/ədˈmɪnɪstrətɪv/",
    "pos": "adj.",
    "meaning": "行政的， 管理的",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "administer（管理） + -ative（形容词后缀） -> 行政的，管理的。"
  },
  {
    "word": "antique",
    "phonetic": "/ænˈtiːk/",
    "pos": "n./adj.",
    "meaning": "n. 古董， 古玩 adj. 古老的， 过时的",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【82. 前缀群：空间方位与位移】",
    "analysis_type": "构词",
    "analysis": "anti-（在…之前） + -que，引申指n. 古董 -> 古董。"
  },
  {
    "word": "beforehand",
    "phonetic": "/bɪˈfɔːhænd/",
    "pos": "adv.",
    "meaning": "预先， 事先",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【82. 前缀群：空间方位与位移】",
    "analysis_type": "构词",
    "analysis": "before（在…之前） + hand（手头） -> 预先，事先。",
    "antonyms": [
      {
        "target": "afterward",
        "pos": "adv.",
        "for_sense": "事先",
        "usage": "contrast",
        "in_pack": false
      }
    ]
  },
  {
    "word": "circle",
    "phonetic": "/ˈsɜːkl/",
    "pos": "n./v.",
    "meaning": "圆， 圆圈； 界 v. 环绕",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "词根 circus（圆圈） -> 圆，圆圈。"
  },
  {
    "word": "circuit",
    "phonetic": "/ˈsɜːkɪt/",
    "pos": "n.",
    "meaning": "电路， 线路； 环形， 巡回",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【82. 前缀群：空间方位与位移】",
    "analysis_type": "构词",
    "analysis": "circu-（环绕） + it（走动） -> 电路，线路。"
  },
  {
    "word": "circulate",
    "phonetic": "/ˈsɜːkjəleɪt/",
    "pos": "vi./vt.",
    "meaning": "循环， 流通； 散播， 流传",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【82. 前缀群：空间方位与位移】",
    "analysis_type": "构词",
    "analysis": "circul-（小圆圈） + -ate（动词后缀） -> 循环，流通。"
  },
  {
    "word": "circumstance",
    "phonetic": "/ˈsɜːkəmstəns/",
    "pos": "n.",
    "meaning": "情况， 环境； 境遇， 境况",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【82. 前缀群：空间方位与位移】",
    "analysis_type": "构词",
    "analysis": "circum-（环绕在四周） + stance（站立的事物） -> 情况，环境。"
  },
  {
    "word": "deliver",
    "phonetic": "/dɪˈlɪvə(r)/",
    "pos": "vt./vi.",
    "meaning": "递送，交付；发表（讲话）；履行，兑现；接生",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【82. 前缀群：空间方位与位移】",
    "analysis_type": "构词",
    "analysis": "de-（完全） + liver（释放/交出） -> 完整交出并送达目标手头 -> 递送，交付。"
  },
  {
    "word": "dropout",
    "phonetic": "/ˈdrɒpaʊt/",
    "pos": "n.",
    "meaning": "退学者， 辍学生； 拒绝传统社会的人",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【82. 前缀群：空间方位与位移】",
    "analysis_type": "构词",
    "analysis": "drop（跌落掉出） + out（向外） -> 退学者，辍学生。"
  },
  {
    "word": "empire",
    "phonetic": "/ˈempaɪə(r)/",
    "pos": "n.",
    "meaning": "帝国， 大企业集团",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【82. 前缀群：空间方位与位移】",
    "analysis_type": "构词",
    "analysis": "em-（在内部） + par-（发号施令） -> 帝国，大企业集团。"
  },
  {
    "word": "enterprise",
    "phonetic": "/ˈentəpraɪz/",
    "pos": "n.",
    "meaning": "企业， 事业； 进取心",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "enter-（inter-） + prise（抓住） -> 企业，事业。"
  },
  {
    "word": "exchange",
    "phonetic": "/ɪksˈtʃeɪndʒ/",
    "pos": "vt./n.",
    "meaning": "交换， 交流； 调换； 汇兑",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【82. 前缀群：空间方位与位移】",
    "analysis_type": "构词",
    "analysis": "ex-（向外） + change（改变变换） -> 交换，交流。"
  },
  {
    "word": "exterior",
    "phonetic": "/ɪkˈstɪəriə(r)/",
    "pos": "adj./n.",
    "meaning": "adj. 外部的， 外面的 n. 外部， 外表",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【82. 前缀群：空间方位与位移】",
    "analysis_type": "构词",
    "analysis": "ex-（向外） + -terior（比较级后缀） -> 外部的。"
  },
  {
    "word": "external",
    "phonetic": "/ɪkˈstɜːnl/",
    "pos": "adj.",
    "meaning": "外部的， 外面的； 对外的",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【82. 前缀群：空间方位与位移】",
    "analysis_type": "构词",
    "analysis": "extern-（外部） + -al（形容词后缀） -> 外部的，外面的。"
  },
  {
    "word": "extraordinary",
    "phonetic": "/ɪkˈstrɔːdnri/",
    "pos": "adj.",
    "meaning": "非同寻常的， 特别的； 卓越的",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【82. 前缀群：空间方位与位移】",
    "analysis_type": "构词",
    "analysis": "extra-（超出） + ordinary（寻常普通） -> 非同寻常的，特别的。",
    "synonyms": [
      {
        "target": "exceptional",
        "pos": "adj.",
        "for_sense": "非同寻常的",
        "usage": "upgrade",
        "in_pack": true,
        "nuance": "凌驾于庸碌水平之上"
      }
    ]
  },
  {
    "word": "fore",
    "phonetic": "/fɔː(r)/",
    "pos": "adj./adv./n.",
    "meaning": "adj. 在前部的 adv. 在前头 n. 前部",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【82. 前缀群：空间方位与位移】",
    "analysis_type": "构词",
    "analysis": "与 before 同源 -> 位于最前方 -> 在前部的。"
  },
  {
    "word": "forecast",
    "phonetic": "/ˈfɔːkɑːst/",
    "pos": "n./vt.",
    "meaning": "预测， 天气预报 vt. 预报",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然地理、动植物与环境保护】",
    "analysis_type": "构词",
    "analysis": "fore-（预先） + cast（投掷） -> 预测，天气预报。"
  },
  {
    "word": "foresee",
    "phonetic": "/fɔːˈsiː/",
    "pos": "vt.",
    "meaning": "预见， 预知",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【82. 前缀群：空间方位与位移】",
    "analysis_type": "构词",
    "analysis": "fore-（提前） + see（看见） -> 预见，预知。"
  },
  {
    "word": "forth",
    "phonetic": "/fɔːθ/",
    "pos": "adv.",
    "meaning": "向前， 往外； 以后",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【82. 前缀群：空间方位与位移】",
    "analysis_type": "构词",
    "analysis": "与 fore 同源 -> 向前，往外。"
  },
  {
    "word": "forward",
    "phonetic": "/ˈfɔːwəd/",
    "pos": "adv./adj./vt.",
    "meaning": "adv. 向前 adj. 前进的 vt. 转交",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【82. 前缀群：空间方位与位移】",
    "analysis_type": "构词",
    "analysis": "fore-（前） + -ward（朝向） -> 朝着前方迈进 -> 向前。",
    "antonyms": [
      {
        "target": "backward",
        "pos": "adv.",
        "for_sense": "向前",
        "usage": "contrast",
        "in_pack": false
      }
    ]
  },
  {
    "word": "gap",
    "phonetic": "/ɡæp/",
    "pos": "n.",
    "meaning": "缺口， 裂口； 差距， 隔阂",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【82. 前缀群：空间方位与位移】",
    "analysis_type": "构词",
    "analysis": "源自古诺斯语 gap（张开大口） -> 缺口，裂口。"
  },
  {
    "word": "govern",
    "phonetic": "/ˈɡʌvn/",
    "pos": "vt./vi.",
    "meaning": "统治， 治理； 支配， 控制",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【82. 前缀群：空间方位与位移】",
    "analysis_type": "构词",
    "analysis": "源自古希腊语掌舵操舟之意 -> 统治，治理。"
  },
  {
    "word": "inferior",
    "phonetic": "/ɪnˈfɪəriə(r)/",
    "pos": "adj./n.",
    "meaning": "adj. 较低的； 劣等的， 次等的（to） n. 下级",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【82. 前缀群：空间方位与位移】",
    "analysis_type": "构词",
    "analysis": "infer-（在下方） + -ior（比较级后缀） -> 较低的。",
    "antonyms": [
      {
        "target": "superior",
        "pos": "adj.",
        "for_sense": "劣等的",
        "usage": "contrast",
        "in_pack": true
      }
    ]
  },
  {
    "word": "interact",
    "phonetic": "/ˌɪntərˈækt/",
    "pos": "vi.",
    "meaning": "相互作用， 相互影响； 互动",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【82. 前缀群：空间方位与位移】",
    "analysis_type": "构词",
    "analysis": "inter-（在…之间） + act（行动） -> 相互作用，相互影响。"
  },
  {
    "word": "interaction",
    "phonetic": "/ˌɪntərˈækʃn/",
    "pos": "n.",
    "meaning": "相互作用， 互动， 交流",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【82. 前缀群：空间方位与位移】",
    "analysis_type": "构词",
    "analysis": "interact（互动） + -ion（名词后缀） -> 相互作用，互动。"
  },
  {
    "word": "interfere",
    "phonetic": "/ˌɪntəˈfɪə(r)/",
    "pos": "vi.",
    "meaning": "干涉， 干预（in）； 妨碍",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【82. 前缀群：空间方位与位移】",
    "analysis_type": "构词",
    "analysis": "inter-（在两者中间） + fere（撞击） -> 奔马双腿彼此交叉碰撞失蹄 -> 干涉，干预（in）。"
  },
  {
    "word": "interior",
    "phonetic": "/ɪnˈtɪəriə(r)/",
    "pos": "adj./n.",
    "meaning": "adj. 内部的， 内地的 n. 内部， 内地",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【82. 前缀群：空间方位与位移】",
    "analysis_type": "构词",
    "analysis": "inter-（向内） + -ior（比较级后缀） -> 内部的。"
  },
  {
    "word": "internal",
    "phonetic": "/ɪnˈtɜːnl/",
    "pos": "adj.",
    "meaning": "内部的； 体内的； 国内的",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【82. 前缀群：空间方位与位移】",
    "analysis_type": "构词",
    "analysis": "intern-（在里面） + -al（形容词后缀） -> 内部的。"
  },
  {
    "word": "interpret",
    "phonetic": "/ɪnˈtɜːprɪt/",
    "pos": "vt./vi.",
    "meaning": "解释， 说明； 口译； 理解",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【82. 前缀群：空间方位与位移】",
    "analysis_type": "构词",
    "analysis": "inter-（在两者之间） + pret（经纪人商谈居） -> 口译与深刻阐释 -> 解释，说明。"
  },
  {
    "word": "interval",
    "phonetic": "/ˈɪntəvl/",
    "pos": "n.",
    "meaning": "间隔， 间歇； 幕间休息",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【82. 前缀群：空间方位与位移】",
    "analysis_type": "构词",
    "analysis": "inter-（在…之间） + val（罗马城墙栅栏） -> 时间空间的空当 -> 间隔，间歇。"
  },
  {
    "word": "intervene",
    "phonetic": "/ˌɪntəˈviːn/",
    "pos": "vi.",
    "meaning": "干预， 干涉； 介入",
    "part": "第一部分：超级核心母词族",
    "group": "【14. ven / vent 来/到达/发生】",
    "analysis_type": "构词",
    "analysis": "inter-（在两者之间） + vene（走来） -> 干预，干涉。"
  },
  {
    "word": "interview",
    "phonetic": "/ˈɪntəvjuː/",
    "pos": "n./vt.",
    "meaning": "接见， 会见； 面试； 采访",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【82. 前缀群：空间方位与位移】",
    "analysis_type": "构词",
    "analysis": "inter-（彼此之间） + view（对看审视） -> 接见，会见。"
  },
  {
    "word": "layout",
    "phonetic": "/ˈleɪaʊt/",
    "pos": "n.",
    "meaning": "布局， 排版， 规划",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【82. 前缀群：空间方位与位移】",
    "analysis_type": "构词",
    "analysis": "lay（铺开摆放） + out（向外展开） -> 布局，排版。"
  },
  {
    "word": "ministry",
    "phonetic": "/ˈmɪnɪstri/",
    "pos": "n.",
    "meaning": "（政府的）部； 内阁",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【82. 前缀群：空间方位与位移】",
    "analysis_type": "构词",
    "analysis": "minister（部长） + -y，引申指（政府的） -> （政府的）部。"
  },
  {
    "word": "outcome",
    "phonetic": "/ˈaʊtkʌm/",
    "pos": "n.",
    "meaning": "结果， 结局， 成果",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【82. 前缀群：空间方位与位移】",
    "analysis_type": "构词",
    "analysis": "out-（向外） + come（走出来） -> 结果，结局。"
  },
  {
    "word": "outdoors",
    "phonetic": "/ˌaʊtˈdɔːz/",
    "pos": "adv./n.",
    "meaning": "adv. 在户外， 在野外 n. 户外",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【82. 前缀群：空间方位与位移】",
    "analysis_type": "构词",
    "analysis": "out（向外） + doors（门扇） -> 在户外。"
  },
  {
    "word": "outlet",
    "phonetic": "/ˈaʊtlet/",
    "pos": "n.",
    "meaning": "出口， 出路； 排遣途径； 专卖店， 奥特莱斯",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【82. 前缀群：空间方位与位移】",
    "analysis_type": "构词",
    "analysis": "out-（向外） + let（放行释放） -> 出口，出路。"
  },
  {
    "word": "outlook",
    "phonetic": "/ˈaʊtlʊk/",
    "pos": "n.",
    "meaning": "观点， 见解； 前景， 展望",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【82. 前缀群：空间方位与位移】",
    "analysis_type": "构词",
    "analysis": "out-（向外） + look（看） -> 观点，见解。"
  },
  {
    "word": "overall",
    "phonetic": "/ˌəʊvərˈɔːl/",
    "pos": "adj./adv./n.",
    "meaning": "adj. 全面的， 总体的 adv. 总的说来 n. 工装裤",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【82. 前缀群：空间方位与位移】",
    "analysis_type": "构词",
    "analysis": "over-（覆盖在上方） + all（万事万物） -> 全面的。"
  },
  {
    "word": "overcome",
    "phonetic": "/ˌəʊvəˈkʌm/",
    "pos": "vt.",
    "meaning": "战胜， 克服； 压倒",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【82. 前缀群：空间方位与位移】",
    "analysis_type": "构词",
    "analysis": "over-（跨过） + come（走来） -> 战胜，克服。"
  },
  {
    "word": "overdue",
    "phonetic": "/ˌəʊvəˈdjuː/",
    "pos": "adj.",
    "meaning": "过期的， 迟到的； 早就该发生的",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【82. 前缀群：空间方位与位移】",
    "analysis_type": "构词",
    "analysis": "over-（超过） + due（到期的） -> 过期的，迟到的。"
  },
  {
    "word": "overhear",
    "phonetic": "/ˌəʊvəˈhɪə(r)/",
    "pos": "vt.",
    "meaning": "无意中听到， 偷听到",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【82. 前缀群：空间方位与位移】",
    "analysis_type": "构词",
    "analysis": "over-（越过隔墙） + hear（听到） -> 无意中听到，偷听到。"
  },
  {
    "word": "overlook",
    "phonetic": "/ˌəʊvəˈlʊk/",
    "pos": "vt.",
    "meaning": "忽视， 忽略； 俯瞰， 眺望； 宽恕",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【82. 前缀群：空间方位与位移】",
    "analysis_type": "构词",
    "analysis": "over-（自上方） + look（看） -> 忽视，忽略。"
  },
  {
    "word": "overnight",
    "phonetic": "/ˌəʊvəˈnaɪt/",
    "pos": "adv./adj.",
    "meaning": "adv. 一夜之间， 在夜间 adj. 通宵的； 一夜间的",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【82. 前缀群：空间方位与位移】",
    "analysis_type": "构词",
    "analysis": "over-（度过） + night（黑夜） -> 一夜之间。"
  },
  {
    "word": "overseas",
    "phonetic": "/ˌəʊvəˈsiːz/",
    "pos": "adv./adj.",
    "meaning": "adv. 在海外， 向海外 adj. 海外的， 国外的",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【82. 前缀群：空间方位与位移】",
    "analysis_type": "构词",
    "analysis": "over-（跨过） + seas（汪洋大洋） -> 在海外。"
  },
  {
    "word": "oversee",
    "phonetic": "/ˌəʊvəˈsiː/",
    "pos": "vt.",
    "meaning": "监督， 监视， 管理",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【82. 前缀群：空间方位与位移】",
    "analysis_type": "构词",
    "analysis": "over-（在上方） + see（看守） -> 监督，监视。"
  },
  {
    "word": "overtake",
    "phonetic": "/ˌəʊvəˈteɪk/",
    "pos": "vt.",
    "meaning": "追上， 超过； （灾祸等）突然降临于",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【82. 前缀群：空间方位与位移】",
    "analysis_type": "构词",
    "analysis": "over-（超过超越） + take（抓取把握） -> 追上，超过。"
  },
  {
    "word": "overtime",
    "phonetic": "/ˈəʊvətaɪm/",
    "pos": "n./adv.",
    "meaning": "n. 加班， 加班时间； 加时赛 adv. 加班地",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【82. 前缀群：空间方位与位移】",
    "analysis_type": "构词",
    "analysis": "over-（超过） + time（法定工时） -> 加班。"
  },
  {
    "word": "overwhelm",
    "phonetic": "/ˌəʊvəˈwelm/",
    "pos": "vt.",
    "meaning": "淹没， 压倒； 使不知所措",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【82. 前缀群：空间方位与位移】",
    "analysis_type": "构词",
    "analysis": "over-（盖顶） + whelm（巨浪翻滚倾扣） -> 淹没，压倒。"
  },
  {
    "word": "preliminary",
    "phonetic": "/prɪˈlɪmɪnri/",
    "pos": "adj./n.",
    "meaning": "adj. 预备的， 初步的 n. 初步行动， 预赛",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【82. 前缀群：空间方位与位移】",
    "analysis_type": "构词",
    "analysis": "pre-（在前面） + limin-（门槛） + -ary（的） -> 预备的。"
  },
  {
    "word": "previous",
    "phonetic": "/ˈpriːviəs/",
    "pos": "adj.",
    "meaning": "先前的， 早先的（to）",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【82. 前缀群：空间方位与位移】",
    "analysis_type": "构词",
    "analysis": "pre-（提前） + vi-（道路） + -ous（的） -> 先前的，早先的（to）。"
  },
  {
    "word": "primary",
    "phonetic": "/ˈpraɪməri/",
    "pos": "adj.",
    "meaning": "首要的， 主要的； 最初的， 初级的",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【82. 前缀群：空间方位与位移】",
    "analysis_type": "构词",
    "analysis": "prim-（第一） + -ary（的） -> 首要的，主要的。",
    "synonyms": [
      {
        "target": "principal",
        "pos": "adj.",
        "for_sense": "首要的",
        "usage": "paraphrase",
        "in_pack": true,
        "nuance": "排在第一位的"
      },
      {
        "target": "main",
        "pos": "adj.",
        "for_sense": "首要的",
        "usage": "paraphrase",
        "in_pack": false,
        "nuance": "主干主体"
      }
    ]
  },
  {
    "word": "prime",
    "phonetic": "/praɪm/",
    "pos": "adj./n./vt.",
    "meaning": "首要的； 最好的， 头等的； 鼎盛期",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【82. 前缀群：空间方位与位移】",
    "analysis_type": "构词",
    "analysis": "词根 prim-（第一） -> 首要的。"
  },
  {
    "word": "primitive",
    "phonetic": "/ˈprɪmətɪv/",
    "pos": "adj./n.",
    "meaning": "adj. 原始的， 早期的； 简陋的 n. 原始人",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【82. 前缀群：空间方位与位移】",
    "analysis_type": "构词",
    "analysis": "prim-（最初） + -itive（远古时期的） -> 原始的。"
  },
  {
    "word": "prior",
    "phonetic": "/ˈpraɪə(r)/",
    "pos": "adj./adv.",
    "meaning": "优先的， 在前的； 先前的",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【82. 前缀群：空间方位与位移】",
    "analysis_type": "构词",
    "analysis": "pri-（在前） + -or（比较级） -> 优先的，在前的。"
  },
  {
    "word": "priority",
    "phonetic": "/praɪˈɒrəti/",
    "pos": "n.",
    "meaning": "优先（权）， 头等重要的事情",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【82. 前缀群：空间方位与位移】",
    "analysis_type": "构词",
    "analysis": "prior（优先的） + -ity（特质） -> 优先（权），头等重要的事情。"
  },
  {
    "word": "prison",
    "phonetic": "/ˈprɪzn/",
    "pos": "n.",
    "meaning": "监狱， 监牢",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【82. 前缀群：空间方位与位移】",
    "analysis_type": "构词",
    "analysis": "pris-（抓捕锁拿） + -on，引申指监狱 -> 监狱，监牢。"
  },
  {
    "word": "routine",
    "phonetic": "/ruːˈtiːn/",
    "pos": "n./adj.",
    "meaning": "常规的， 例行的； 例行公事， 惯例",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【82. 前缀群：空间方位与位移】",
    "analysis_type": "构词",
    "analysis": "rout-（熟悉的日常道） + -ine（性质） -> 常规的，例行的。"
  },
  {
    "word": "secondary",
    "phonetic": "/ˈsekəndri/",
    "pos": "adj.",
    "meaning": "第二的， 次要的； 中等的",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【82. 前缀群：空间方位与位移】",
    "analysis_type": "构词",
    "analysis": "second（第二） + -ary（的） -> 第二的，次要的。"
  },
  {
    "word": "submarine",
    "phonetic": "/ˌsʌbməˈriːn/",
    "pos": "n./adj.",
    "meaning": "n. 潜艇 adj. 水下的， 海底的",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【82. 前缀群：空间方位与位移】",
    "analysis_type": "构词",
    "analysis": "sub-（在下方） + marine（海洋的） -> 潜艇。"
  },
  {
    "word": "suburb",
    "phonetic": "/ˈsʌbɜːb/",
    "pos": "n.",
    "meaning": "郊区， 城郊",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【82. 前缀群：空间方位与位移】",
    "analysis_type": "构词",
    "analysis": "sub-（接近） + urb（繁华都市） -> 郊区，城郊。"
  },
  {
    "word": "subway",
    "phonetic": "/ˈsʌbweɪ/",
    "pos": "n.",
    "meaning": "地铁； 地下通道",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "sub-（在下方） + way（道路） -> 地铁。"
  },
  {
    "word": "superb",
    "phonetic": "/suːˈpɜːb/",
    "pos": "adj.",
    "meaning": "极好的， 卓越的， 一流的",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【82. 前缀群：空间方位与位移】",
    "analysis_type": "构词",
    "analysis": "super-（在绝顶之上） + -b，合起来即站在巅峰俯瞰群芳无可挑剔的最高水准 -> 极好的，卓越的。",
    "synonyms": [
      {
        "target": "excellent",
        "pos": "adj.",
        "for_sense": "一流的",
        "usage": "upgrade",
        "in_pack": false,
        "nuance": "品质无可挑剔"
      }
    ]
  },
  {
    "word": "superior",
    "phonetic": "/suːˈpɪəriə(r)/",
    "pos": "adj./n.",
    "meaning": "较高的；优越的，优良的",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【82. 前缀群：空间方位与位移】",
    "analysis_type": "构词",
    "analysis": "super-（在上方） + -ior（比较级后缀） -> 较高的。",
    "antonyms": [
      {
        "target": "inferior",
        "pos": "adj.",
        "for_sense": "优越的",
        "usage": "contrast",
        "in_pack": true
      }
    ]
  },
  {
    "word": "superiority",
    "phonetic": "/suːˌpɪəriˈɒrəti/",
    "pos": "n.",
    "meaning": "优越（性）， 优势",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【82. 前缀群：空间方位与位移】",
    "analysis_type": "构词",
    "analysis": "superior（优越的） + -ity（名词后缀） -> 优越（性） -> 优越（性），优势。",
    "antonyms": [
      {
        "target": "inferiority",
        "pos": "n.",
        "for_sense": "优越性",
        "usage": "contrast",
        "in_pack": false
      }
    ]
  },
  {
    "word": "supreme",
    "phonetic": "/suːˈpriːm/",
    "pos": "adj.",
    "meaning": "最高的， 至上的； 极度的",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【82. 前缀群：空间方位与位移】",
    "analysis_type": "构词",
    "analysis": "super-（上方） + -eme（最高级） -> 最高的，至上的。"
  },
  {
    "word": "surround",
    "phonetic": "/səˈraʊnd/",
    "pos": "vt.",
    "meaning": "包围， 环绕， 围绕",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【82. 前缀群：空间方位与位移】",
    "analysis_type": "构词",
    "analysis": "sur-（上方覆盖） + round（圆圈） -> 大浪涌来彻底覆盖包拢 -> 包围，环绕。"
  },
  {
    "word": "thunder",
    "phonetic": "/ˈθʌndə(r)/",
    "pos": "n./vi.",
    "meaning": "n. 雷， 雷声 vi. 打雷； 轰鸣",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【82. 前缀群：空间方位与位移】",
    "analysis_type": "拟声",
    "analysis": "本义拟声词 -> 雷。"
  },
  {
    "word": "transaction",
    "phonetic": "/trænˈzækʃn/",
    "pos": "n.",
    "meaning": "交易， 买卖",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "trans-（跨越） + act-（行动） + -ion，引申指交易 -> 交易，买卖。"
  },
  {
    "word": "transit",
    "phonetic": "/ˈtrænzɪt/",
    "pos": "n./v.",
    "meaning": "运输， 公交； 过境 v. 通过",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "trans-（穿过） + it（走） -> 运输，公交。"
  },
  {
    "word": "translate",
    "phonetic": "/trænzˈleɪt/",
    "pos": "vt./vi.",
    "meaning": "翻译； 转化， 转变",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【82. 前缀群：空间方位与位移】",
    "analysis_type": "构词",
    "analysis": "trans-（跨越两界） + lat-（运载带来） + -e，引申指翻译 -> 翻译。"
  },
  {
    "word": "transparent",
    "phonetic": "/trænsˈpærənt/",
    "pos": "adj.",
    "meaning": "透明的； 显而易见的， 坦诚的",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【82. 前缀群：空间方位与位移】",
    "analysis_type": "构词",
    "analysis": "trans-（穿过） + par-（出现显现） + -ent（的） -> 透明的。"
  },
  {
    "word": "transplant",
    "phonetic": "/trænsˈplɑːnt/",
    "pos": "vt./n.",
    "meaning": "vt. 移植（植物ˈtrænsplɑːnt/ 移植手术",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【82. 前缀群：空间方位与位移】",
    "analysis_type": "构词",
    "analysis": "trans-（改变地点跨越） + plant（种植） -> 移植（植物ˈtrænsplɑːnt。"
  },
  {
    "word": "undergo",
    "phonetic": "/ˌʌndəˈɡəʊ/",
    "pos": "vt.",
    "meaning": "经历， 经受， 忍受（困难/手术等）",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【82. 前缀群：空间方位与位移】",
    "analysis_type": "构词",
    "analysis": "under-（在重压下方） + go（走过历经） -> 经历，经受。"
  },
  {
    "word": "underlie",
    "phonetic": "/ˌʌndəˈlaɪ/",
    "pos": "vt.",
    "meaning": "位于…之下； 构成…的基础",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【82. 前缀群：空间方位与位移】",
    "analysis_type": "构词",
    "analysis": "under-（在底部下方） + lie（平躺横卧） -> 位于…之下。"
  },
  {
    "word": "underlying",
    "phonetic": "/ˌʌndəˈlaɪɪŋ/",
    "pos": "adj.",
    "meaning": "潜在的； 根本的， 基础的",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【82. 前缀群：空间方位与位移】",
    "analysis_type": "构词",
    "analysis": "underlie（构成基础） + -ing（形容词后缀） -> 潜在的。",
    "synonyms": [
      {
        "target": "fundamental",
        "pos": "adj.",
        "for_sense": "基础的",
        "usage": "paraphrase",
        "in_pack": false,
        "nuance": "深层基石"
      }
    ]
  },
  {
    "word": "undermine",
    "phonetic": "/ˌʌndəˈmaɪn/",
    "pos": "vt.",
    "meaning": "暗中破坏， 逐渐削弱； 侵蚀…的基础",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【82. 前缀群：空间方位与位移】",
    "analysis_type": "构词",
    "analysis": "under-（在下方） + mine（挖地道挖矿） -> 暗中破坏，逐渐削弱。"
  },
  {
    "word": "undertake",
    "phonetic": "/ˌʌndəˈteɪk/",
    "pos": "vt.",
    "meaning": "承担， 从事； 承诺， 保证",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【82. 前缀群：空间方位与位移】",
    "analysis_type": "构词",
    "analysis": "under-（在下方承受） + take（抓起挑在肩头） -> 承担，从事。"
  },
  {
    "word": "weaken",
    "phonetic": "/ˈwiːkən/",
    "pos": "vt./vi.",
    "meaning": "削弱， 变弱； 动摇",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【82. 前缀群：空间方位与位移】",
    "analysis_type": "构词",
    "analysis": "weak（虚弱） + -en（使动后缀） -> 削弱，变弱。",
    "antonyms": [
      {
        "target": "strengthen",
        "pos": "vt.",
        "for_sense": "削弱",
        "usage": "contrast",
        "in_pack": false
      }
    ],
    "synonyms": [
      {
        "target": "decrease",
        "pos": "vt.",
        "for_sense": "削弱",
        "usage": "upgrade",
        "in_pack": false,
        "nuance": "力量体魄走弱"
      }
    ]
  },
  {
    "word": "workout",
    "phonetic": "/ˈwɜːkaʊt/",
    "pos": "n.",
    "meaning": "锻炼， 训练， 健身活动",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【82. 前缀群：空间方位与位移】",
    "analysis_type": "构词",
    "analysis": "work（用力） + out（向外透出汗水） -> 锻炼，训练。"
  },
  {
    "word": "postgraduate",
    "phonetic": "/ˌpəʊstˈɡrædʒuət/",
    "pos": "n./adj.",
    "meaning": "研究生 adj. 研究生的",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "post-（在…之后） + graduate（大学本科毕业） -> 研究生，adj.。"
  },
  {
    "word": "precaution",
    "phonetic": "/prɪˈkɔːʃn/",
    "pos": "n.",
    "meaning": "预防， 防备， 预防措施",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【83. 前缀群：时间与递进】",
    "analysis_type": "构词",
    "analysis": "pre-（提前） + caution（警觉小心） -> 预防，防备。"
  },
  {
    "word": "preceding",
    "phonetic": "/prɪˈsiːdɪŋ/",
    "pos": "adj.",
    "meaning": "在前的， 先前的",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【83. 前缀群：时间与递进】",
    "analysis_type": "构词",
    "analysis": "precede（走在前面） + -ing（形容词后缀） -> 在前的，先前的。"
  },
  {
    "word": "proceed",
    "phonetic": "/prəˈsiːd/",
    "pos": "vi.",
    "meaning": "继续进行； 前进， 行进",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【83. 前缀群：时间与递进】",
    "analysis_type": "构词",
    "analysis": "pro-（向前） + ceed（走动） -> 继续进行。"
  },
  {
    "word": "promote",
    "phonetic": "/prəˈməʊt/",
    "pos": "vt.",
    "meaning": "促进， 增进； 提升， 提拔； 促销",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【83. 前缀群：时间与递进】",
    "analysis_type": "构词",
    "analysis": "pro-（向前） + mot（移动搬动） -> 促进，增进。"
  },
  {
    "word": "react",
    "phonetic": "/riˈækt/",
    "pos": "vi.",
    "meaning": "做出反应； 起化学反应； 反抗（to）",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【83. 前缀群：时间与递进】",
    "analysis_type": "构词",
    "analysis": "re-（回） + act（行动） -> 做出反应。"
  },
  {
    "word": "reaction",
    "phonetic": "/riˈækʃn/",
    "pos": "n.",
    "meaning": "反应； 抗拒， 反动； 化学反应",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【83. 前缀群：时间与递进】",
    "analysis_type": "构词",
    "analysis": "react（反应） + -ion（名词后缀） -> 反应。"
  },
  {
    "word": "repay",
    "phonetic": "/rɪˈpeɪ/",
    "pos": "vt./vi.",
    "meaning": "偿还， 还钱； 报答， 回报",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【83. 前缀群：时间与递进】",
    "analysis_type": "构词",
    "analysis": "re-（回） + pay（支付） -> 偿还，还钱。"
  },
  {
    "word": "ally",
    "phonetic": "/ˈælaɪ/",
    "pos": "n./vt./vi.",
    "meaning": "n. 同盟国， 盟友 vt.əˈlaɪ/ 结盟， 联合",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【84. 前缀群：共同与强化】",
    "analysis_type": "构词",
    "analysis": "al-（去） + ligare（捆绑） -> 同盟国。"
  },
  {
    "word": "combination",
    "phonetic": "/ˌkɒmbɪˈneɪʃn/",
    "pos": "n.",
    "meaning": "结合， 组合； 化合； 密码",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【84. 前缀群：共同与强化】",
    "analysis_type": "构词",
    "analysis": "combine（结合） + -ation（名词后缀） -> 结合，组合。"
  },
  {
    "word": "combine",
    "phonetic": "/kəmˈbaɪn/",
    "pos": "v.",
    "meaning": "vt./vi. 结合， 联合 n. 联合收割机",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "com-（共同） + bin-（两个） -> 将两者绑合并作一处 -> / 结合， 联合  联合收割机。"
  },
  {
    "word": "communicate",
    "phonetic": "/kəˈmjuːnɪkeɪt/",
    "pos": "v.",
    "meaning": "vi. 沟通， 交流 vt. 传达",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "com-（共同） + mun-（分享） + -icate，公开交流思想 -> 沟通。"
  },
  {
    "word": "community",
    "phonetic": "/kəˈmjuːnəti/",
    "pos": "n.",
    "meaning": "社区， 社会； 界， 群落； 共同体",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【84. 前缀群：共同与强化】",
    "analysis_type": "构词",
    "analysis": "commun-（公共的） + -ity（名词后缀） -> 社区，社会。"
  },
  {
    "word": "connect",
    "phonetic": "/kəˈnekt/",
    "pos": "vt./vi.",
    "meaning": "连接， 结合； 联系",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "con-（共同） + nect（绑定） -> 连接，结合。"
  },
  {
    "word": "connection",
    "phonetic": "/kəˈnekʃn/",
    "pos": "n.",
    "meaning": "连接， 联系； 熟人， 人脉",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【84. 前缀群：共同与强化】",
    "analysis_type": "构词",
    "analysis": "connect（连接） + -ion（名词后缀） -> 连接，联系。"
  },
  {
    "word": "cooperate",
    "phonetic": "/kəʊˈɒpəreɪt/",
    "pos": "vi.",
    "meaning": "合作， 协作， 配合",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【84. 前缀群：共同与强化】",
    "analysis_type": "构词",
    "analysis": "co-（共同） + operate（运转操作） -> 合作，协作。",
    "synonyms": [
      {
        "target": "collaborate",
        "pos": "vi.",
        "for_sense": "协作",
        "usage": "paraphrase",
        "in_pack": true,
        "nuance": "齐心协力并肩攻关"
      }
    ]
  },
  {
    "word": "cooperation",
    "phonetic": "/kəʊˌɒpəˈreɪʃn/",
    "pos": "n.",
    "meaning": "合作， 协作",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【84. 前缀群：共同与强化】",
    "analysis_type": "构词",
    "analysis": "cooperate（合作） + -ion（名词后缀） -> 合作，协作。"
  },
  {
    "word": "coordinate",
    "phonetic": "/kəʊˈɔːdɪneɪt/",
    "pos": "vt./adj./n.",
    "meaning": "协调， 统筹； 同等的； 坐标",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【84. 前缀群：共同与强化】",
    "analysis_type": "构词",
    "analysis": "co-（共同） + ordin-（顺序秩序） + -ate，引申指协调 -> 协调，统筹。"
  },
  {
    "word": "mutual",
    "phonetic": "/ˈmjuːtʃuəl/",
    "pos": "adj.",
    "meaning": "相互的， 彼此的； 共有的",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【84. 前缀群：共同与强化】",
    "analysis_type": "构词",
    "analysis": "mut-（交换往来） + -ual（的） -> 相互的，彼此的。"
  },
  {
    "word": "neighbourhood",
    "phonetic": "/ˈneɪbəhʊd/",
    "pos": "n.",
    "meaning": "四邻， 街坊； 邻近地区",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【84. 前缀群：共同与强化】",
    "analysis_type": "构词",
    "analysis": "neighbour（邻居：nea） + -hood（状态） -> 四邻，街坊。"
  },
  {
    "word": "agent",
    "phonetic": "/ˈeɪdʒənt/",
    "pos": "n.",
    "meaning": "代理人， 经纪人； 特工",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "ag-（做） + -ent（人） -> 代理人，经纪人。"
  },
  {
    "word": "allowance",
    "phonetic": "/əˈlaʊəns/",
    "pos": "n.",
    "meaning": "津贴， 补贴； 零用钱",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "allow（允许） + -ance（名词后缀） -> 津贴，补贴。"
  },
  {
    "word": "amateur",
    "phonetic": "/ˈæmətə(r)/",
    "pos": "n./adj.",
    "meaning": "业余爱好者； 业余的",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "amat-（爱慕） + -eur（人） -> 业余爱好者。"
  },
  {
    "word": "appreciate",
    "phonetic": "/əˈpriːʃieɪt/",
    "pos": "vt./vi.",
    "meaning": "感激，感谢；理解，意识到；欣赏，赏识；增值",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "ap-（朝向） + preci-（价值） + -ate -> 深刻领会其真正价值 -> 感激，感谢。"
  },
  {
    "word": "arise",
    "phonetic": "/əˈraɪz/",
    "pos": "vi.",
    "meaning": "出现， 发生； 起床",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "a-（由下向上起） + rise（升起） -> 出现，发生。"
  },
  {
    "word": "asset",
    "phonetic": "/ˈæset/",
    "pos": "n.",
    "meaning": "资产， 财产； 有价值的人或物",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "源自盎格鲁-诺曼法语 assez（足够） -> 资产，财产。"
  },
  {
    "word": "average",
    "phonetic": "/ˈævrɪdʒ/",
    "pos": "n./adj./vt.",
    "meaning": "平均数； 平均的； 均分",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "原指海运遭遇风暴受损后各货主共同平摊的海损比例 -> 平均数。"
  },
  {
    "word": "bargain",
    "phonetic": "/ˈbɑːɡɪn/",
    "pos": "n./vi.",
    "meaning": "特价商品； 讨价还价",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "本义指“讨价还价” -> 特价商品。"
  },
  {
    "word": "behalf",
    "phonetic": "/bɪˈhɑːf/",
    "pos": "n.",
    "meaning": "代表， 利益",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "be-（在身边） + half（一边） -> 代表，利益。"
  },
  {
    "word": "benefit",
    "phonetic": "/ˈbenɪfɪt/",
    "pos": "n./v.",
    "meaning": "利益， 好处 v. 有益于",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "bene-（良好） + fit（做成） -> 利益，好处。"
  },
  {
    "word": "bill",
    "phonetic": "/bɪl/",
    "pos": "n./vt.",
    "meaning": "n. 议案，法案；账单，清册；纸币，钞票；海报",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "词根 bulla（盖有印章的文件） -> 列有金额或法律条款的正式单据 -> 账单。"
  },
  {
    "word": "bother",
    "phonetic": "/ˈbɒðə(r)/",
    "pos": "v./n.",
    "meaning": "打扰， 烦扰 n. 麻烦",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、医疗生理与情绪心理】",
    "analysis_type": "构词",
    "analysis": "源自爱尔兰语 buaidhrim（打扰） -> 打扰，烦扰。"
  },
  {
    "word": "brand",
    "phonetic": "/brænd/",
    "pos": "n./vt.",
    "meaning": "品牌， 商标 vt. 铭刻",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "源自词根核心本义 -> 品牌，商标。"
  },
  {
    "word": "bribe",
    "phonetic": "/braɪb/",
    "pos": "n./vt.",
    "meaning": "贿赂； 向…行贿",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "本义指“施舍给乞丐的” -> 贿赂。"
  },
  {
    "word": "budget",
    "phonetic": "/ˈbʌdʒɪt/",
    "pos": "n./vi.",
    "meaning": "预算 vi. 编预算",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "本义指“装钱币的皮革” -> 预算，vi.。"
  },
  {
    "word": "business",
    "phonetic": "/ˈbɪznəs/",
    "pos": "n.",
    "meaning": "商业， 生意； 事务， 职责",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "busy（忙碌） + -ness（状态） -> 商业，生意。"
  },
  {
    "word": "cash",
    "phonetic": "/kæʃ/",
    "pos": "n./vt.",
    "meaning": "现金 vt. 兑现",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "本义指“装钱的小钱箱” -> 现金，vt.。"
  },
  {
    "word": "cattle",
    "phonetic": "/ˈkætl/",
    "pos": "n.",
    "meaning": "牛， 牲口（总称）",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然地理、动植物与环境保护】",
    "analysis_type": "构词",
    "analysis": "本义指“个人动产财产” -> 牛，牲口（总称）。"
  },
  {
    "word": "charge",
    "phonetic": "/tʃɑːdʒ/",
    "pos": "v./n.",
    "meaning": "收费，要价；主管，掌管；指控，控告；充电",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "carr-（装载负荷） -> 承受经济费用或法律责任 -> 收费，要价。"
  },
  {
    "word": "cheque",
    "phonetic": "/tʃek/",
    "pos": "n.",
    "meaning": "支票",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "引申",
    "analysis": "源自国际象棋将死与核查对照 -> 支票。"
  },
  {
    "word": "classic",
    "phonetic": "/ˈklæsɪk/",
    "pos": "adj./n.",
    "meaning": "经典的， 第一流的； 经典作品",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "class-（等级阶层） + -ic，古罗马最高纳税阶层专享的顶级艺术水准 -> 经典的，第一流的。"
  },
  {
    "word": "commerce",
    "phonetic": "/ˈkɒmɜːs/",
    "pos": "n.",
    "meaning": "商业， 贸易",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "com-（共同） + merc-（商品） + -e，引申指商业 -> 商业，贸易。"
  },
  {
    "word": "commercial",
    "phonetic": "/kəˈmɜːʃl/",
    "pos": "adj./n.",
    "meaning": "商业的， 营利的 n. 广告",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "commerce（商业） + -ial（形容词） -> 商业的，营利的。"
  },
  {
    "word": "commodity",
    "phonetic": "/kəˈmɒdəti/",
    "pos": "n.",
    "meaning": "n. 商品， 货物； 有用的物品",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "com-（共同） + mod-（方便） + -ity，方便交易的物品 -> 商品。"
  },
  {
    "word": "confess",
    "phonetic": "/kənˈfes/",
    "pos": "vt./vi.",
    "meaning": "坦白， 供认； 忏悔",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "con-（彻底） + fess（说出宣讲） -> 坦白，供认。",
    "synonyms": [
      {
        "target": "admit",
        "pos": "vt.",
        "for_sense": "坦白",
        "usage": "paraphrase",
        "in_pack": true,
        "nuance": "坦白过错罪责"
      }
    ]
  },
  {
    "word": "consult",
    "phonetic": "/kənˈsʌlt/",
    "pos": "vt./vi.",
    "meaning": "请教， 咨询； 查阅； 商讨",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "con-（共同） + sult（坐在一起商议） -> 请教，咨询。"
  },
  {
    "word": "consume",
    "phonetic": "/kənˈsjuːm/",
    "pos": "vt./vi.",
    "meaning": "vt. 消耗， 耗尽； 消费",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "con-（完全） + sum-（拿取） -> 全部抓取拿尽耗用 -> 消耗。"
  },
  {
    "word": "consumer",
    "phonetic": "/kənˈsjuːmə(r)/",
    "pos": "n.",
    "meaning": "消费者， 顾客",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "consume（消费） + -er（人） -> 消费者，顾客。"
  },
  {
    "word": "costly",
    "phonetic": "/ˈkɒstli/",
    "pos": "adj.",
    "meaning": "昂贵的， 代价高昂的",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "cost（花费） + -ly（形容词后缀） -> 昂贵的，代价高昂的。"
  },
  {
    "word": "counsel",
    "phonetic": "/ˈkaʊnsl/",
    "pos": "n./vt.",
    "meaning": "忠告， 劝告； 律师 vt. 建议",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "coun-（com- 共） + sel-（召集呼唤） -> 忠告，劝告。"
  },
  {
    "word": "count",
    "phonetic": "/kaʊnt/",
    "pos": "v./n.",
    "meaning": "数数， 计算； 认为 n. 总数",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "源自拉丁动词 computare（计算） -> 数数，计算。"
  },
  {
    "word": "custom",
    "phonetic": "/ˈkʌstəm/",
    "pos": "n./adj.",
    "meaning": "海关， 关税； 风俗， 习惯； 定制的",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "引申",
    "analysis": "常年沿袭的习惯做法 -> 商船过境交税形成惯例 -> 海关，关税。"
  },
  {
    "word": "customer",
    "phonetic": "/ˈkʌstəmə(r)/",
    "pos": "n.",
    "meaning": "顾客， 主顾， 客户",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "custom（经常光顾的习） + -er（人） -> 顾客，主顾。"
  },
  {
    "word": "debt",
    "phonetic": "/det/",
    "pos": "n.",
    "meaning": "债务， 欠款",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "词根 debitum（亏欠之物） -> 债务，欠款。"
  },
  {
    "word": "diploma",
    "phonetic": "/dɪˈpləʊmə/",
    "pos": "n.",
    "meaning": "毕业文凭， 学位证书",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "源自希腊语 diploma（折叠成双层的） -> 毕业文凭，学位证书。"
  },
  {
    "word": "discharge",
    "phonetic": "/dɪsˈtʃɑːdʒ/",
    "pos": "vt./vi./n.",
    "meaning": "准许出院/释放； 解雇； 履行职责； 排出",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "dis-（卸下） + charge（负荷） -> 准许出院，释放。"
  },
  {
    "word": "drawback",
    "phonetic": "/ˈdrɔːbæk/",
    "pos": "n.",
    "meaning": "缺点， 短板， 不利条件",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "draw（拉） + back（向后） -> 缺点，短板。",
    "antonyms": [
      {
        "target": "advantage",
        "pos": "n.",
        "for_sense": "缺点",
        "usage": "contrast",
        "in_pack": false
      }
    ],
    "synonyms": [
      {
        "target": "shortcoming",
        "pos": "n.",
        "for_sense": "缺点",
        "usage": "paraphrase",
        "in_pack": false,
        "nuance": "未能及格的短板"
      }
    ]
  },
  {
    "word": "economic",
    "phonetic": "/ˌiːkəˈnɒmɪk/",
    "pos": "adj.",
    "meaning": "经济的， 经济学的",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "economy（经济） + -ic（形容词后缀） -> 经济的，经济学的。"
  },
  {
    "word": "economical",
    "phonetic": "/ˌiːkəˈnɒmɪkl/",
    "pos": "adj.",
    "meaning": "节约的， 经济实惠的",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "economic（精打细算） + -al（的） -> 节约的，经济实惠的。",
    "antonyms": [
      {
        "target": "expensive",
        "pos": "adj.",
        "for_sense": "经济实惠的",
        "usage": "contrast",
        "in_pack": false
      }
    ]
  },
  {
    "word": "economics",
    "phonetic": "/ˌiːkəˈnɒmɪks/",
    "pos": "n.",
    "meaning": "经济学； 经济状况",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "economic + -s（学术门类后缀） -> 经济学。"
  },
  {
    "word": "economist",
    "phonetic": "/ɪˈkɒnəmɪst/",
    "pos": "n.",
    "meaning": "经济学家",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "economy（经济） + -ist（学者专家） -> 经济学家。"
  },
  {
    "word": "economy",
    "phonetic": "/ɪˈkɒnəmi/",
    "pos": "n.",
    "meaning": "经济， 经济制度； 节约",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "eco-（家园） + nom-（管理） -> 经济，经济制度。"
  },
  {
    "word": "employment",
    "phonetic": "/ɪmˈplɔɪmənt/",
    "pos": "n.",
    "meaning": "就业， 雇用； 工作",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "employ（雇佣） + -ment（名词后缀） -> 就业，雇用。"
  },
  {
    "word": "entertain",
    "phonetic": "/ˌentəˈteɪn/",
    "pos": "v.",
    "meaning": "vt. 怀有，抱有（想法/疑虑）；款待，招待；使娱乐，娱乐",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "enter-（inter-） + tain（握住） -> 招待，款待。"
  },
  {
    "word": "estate",
    "phonetic": "/ɪˈsteɪt/",
    "pos": "n.",
    "meaning": "房地产， 地产； 庄园； 个人全部财产",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "e- + stat-（立足确立稳固） -> 房地产，地产。"
  },
  {
    "word": "estimate",
    "phonetic": "/ˈestɪmeɪt/",
    "pos": "vt./n.",
    "meaning": "估计， 估算 n. 预算， 估计值",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "aest-（价值评估） + -imate，引申指估计 -> 估计，估算。",
    "synonyms": [
      {
        "target": "assess",
        "pos": "vt.",
        "for_sense": "预算",
        "usage": "paraphrase",
        "in_pack": false,
        "nuance": "推算大体金额跨度"
      }
    ]
  },
  {
    "word": "executive",
    "phonetic": "/ɪɡˈzekjətɪv/",
    "pos": "n./adj.",
    "meaning": "执行官， 高管 adj. 行政的",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "execute（执行） + -ive（人） -> 执行官，高管。"
  },
  {
    "word": "fare",
    "phonetic": "/feə(r)/",
    "pos": "n./vi.",
    "meaning": "车费， 船费 vi. 进展",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "本义指“走” -> 车费，船费。"
  },
  {
    "word": "farewell",
    "phonetic": "/ˌfeəˈwel/",
    "pos": "int./n.",
    "meaning": "再会， 别了； 告别",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "fare（走得顺） + well（平安顺利） -> 再会，别了。"
  },
  {
    "word": "fashion",
    "phonetic": "/ˈfæʃn/",
    "pos": "n./vt.",
    "meaning": "流行式样， 风尚； 方式 vt. 塑造",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "fact- / faction（制作成形） -> 当季名家剪裁制作并在等 -> 流行式样，风尚。"
  },
  {
    "word": "fee",
    "phonetic": "/fiː/",
    "pos": "n.",
    "meaning": "费， 酬金； 学费， 入场费",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "引申",
    "analysis": "核心意象为“牛羊牲畜” -> 古代以牛羊支付酬劳封赏 -> 费，酬金。"
  },
  {
    "word": "feedback",
    "phonetic": "/ˈfiːdbæk/",
    "pos": "n.",
    "meaning": "反馈， 反应意见",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "feed（喂养） + back（回传） -> 反馈，反应意见。"
  },
  {
    "word": "frequent",
    "phonetic": "/ˈfriːkwənt/",
    "pos": "adj./vt.",
    "meaning": "adj. 经常的， 频繁的 vt. 常去",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "引申",
    "analysis": "源自人群熙熙攘攘挤在一起的拥挤集市 -> 如人流般一波接一波发生 -> 经常的。",
    "antonyms": [
      {
        "target": "rare",
        "pos": "adj.",
        "for_sense": "频繁的",
        "usage": "contrast",
        "in_pack": false
      }
    ]
  },
  {
    "word": "grant",
    "phonetic": "/ɡrɑːnt/",
    "pos": "vt./n.",
    "meaning": "准予， 授予； 认为理所当然； 拨款， 补助金",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "源自 credere（信任保证） -> 准予，授予。"
  },
  {
    "word": "harness",
    "phonetic": "/ˈhɑːnɪs/",
    "pos": "vt./n.",
    "meaning": "开发， 治理， 利用（自然力/潜能）； 马具",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "引申",
    "analysis": "给烈马套上马鞍缰绳加以驾驭 -> 开发，治理。"
  },
  {
    "word": "herd",
    "phonetic": "/hɜːd/",
    "pos": "n./vt./vi.",
    "meaning": "兽群， 牧群； 放牧， 聚集",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "引申",
    "analysis": "原始词根 -> 本义为“看护、守护” -> 兽群，牧群。"
  },
  {
    "word": "heritage",
    "phonetic": "/ˈherɪtɪdʒ/",
    "pos": "n.",
    "meaning": "遗产， 继承物； 传统文化遗产",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "herit-（继承继承人） + -age（性质物） -> 遗产，继承物。"
  },
  {
    "word": "income",
    "phonetic": "/ˈɪnkʌm/",
    "pos": "n.",
    "meaning": "收入， 收益， 所得",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "in-（向内） + come（来） -> 收入，收益。"
  },
  {
    "word": "insurance",
    "phonetic": "/ɪnˈʃʊərəns/",
    "pos": "n.",
    "meaning": "保险； 保险金",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "in-（使成为） + sure（确信） + -ance（名词后缀） -> 保险。"
  },
  {
    "word": "invest",
    "phonetic": "/ɪnˈvest/",
    "pos": "vt./vi.",
    "meaning": "投资， 投入",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "in-（穿上） + vest（衣服） -> 投资，投入。"
  },
  {
    "word": "investigate",
    "phonetic": "/ɪnˈvestɪɡeɪt/",
    "pos": "vt./vi.",
    "meaning": "调查， 调查研究",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "in-（顺着） + vestig-（深坑脚印踪迹） + -ate，引申指调查 -> 调查，调查研究。"
  },
  {
    "word": "investment",
    "phonetic": "/ɪnˈvestmənt/",
    "pos": "n.",
    "meaning": "投资， 投资额； 投资物",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "invest（投资） + -ment（名词后缀） -> 投资，投资额。"
  },
  {
    "word": "item",
    "phonetic": "/ˈaɪtəm/",
    "pos": "n.",
    "meaning": "条， 条款； 项目； 一件商品",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "引申",
    "analysis": "词根副词 item（同样地） -> 条，条款。"
  },
  {
    "word": "loan",
    "phonetic": "/ləʊn/",
    "pos": "n./vt.",
    "meaning": "贷款， 借款 vt. 借出",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "源自古诺尔斯语 lān（借给他人之物） -> 贷款，借款。"
  },
  {
    "word": "margin",
    "phonetic": "/ˈmɑːdʒɪn/",
    "pos": "n.",
    "meaning": "差额， 幅度； 利润率； 边缘； 页边空白",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "引申",
    "analysis": "书页最外侧的留白边线 -> 差额，幅度。"
  },
  {
    "word": "merchandise",
    "phonetic": "/ˈmɜːtʃəndaɪs/",
    "pos": "n.",
    "meaning": "商品， 货物",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "merchant（商人） + -ise（集合名词后缀） -> 商品，货物。"
  },
  {
    "word": "merchant",
    "phonetic": "/ˈmɜːtʃənt/",
    "pos": "n.",
    "meaning": "商人， 批发商",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "merc-（商品） + -ant（人） -> 商人，批发商。"
  },
  {
    "word": "middle-class",
    "phonetic": "/ˌmɪdl ˈklɑːs/",
    "pos": "adj./n.",
    "meaning": "中产阶级的； 中产阶级",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "复合",
    "analysis": "middle（中间） + class（阶层） -> 中产阶级的。"
  },
  {
    "word": "mortgage",
    "phonetic": "/ˈmɔːɡɪdʒ/",
    "pos": "n./vt.",
    "meaning": "按揭抵押贷款 vt. 抵押",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "mort-（死亡） + gage（抵押） -> 按揭抵押贷款，vt.。"
  },
  {
    "word": "negotiate",
    "phonetic": "/nɪˈɡəʊʃieɪt/",
    "pos": "v.",
    "meaning": "谈判， 协商； 转让",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "neg-（不） + otium（闲暇） -> 放下闲暇全力投入奔走公务 -> 谈判，协商。"
  },
  {
    "word": "nerve",
    "phonetic": "/nɜːv/",
    "pos": "n.",
    "meaning": "神经； 勇气， 胆魄； 神经紧张",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "引申",
    "analysis": "原指紧绷发力的人体筋腱神经 -> 神经。"
  },
  {
    "word": "nutrition",
    "phonetic": "/njuˈtrɪʃn/",
    "pos": "n.",
    "meaning": "营养， 营养学； 营养补充",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、医疗生理与情绪心理】",
    "analysis_type": "构词",
    "analysis": "nutri-（滋养） + -tion（名词后缀） -> 营养，营养学。"
  },
  {
    "word": "occupation",
    "phonetic": "/ˌɒkjuˈpeɪʃn/",
    "pos": "n.",
    "meaning": "职业， 行业； 占领， 占据",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "occupy（占据心力时间） + -ation，占据了一个人每天核心黄金时间精力的行当差事 -> 职业，行业。"
  },
  {
    "word": "output",
    "phonetic": "/ˈaʊtpʊt/",
    "pos": "n./vt.",
    "meaning": "产量， 产出； 输出功率",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "out-（向外） + put（投放） -> 产量，产出。",
    "antonyms": [
      {
        "target": "intake",
        "pos": "n.",
        "for_sense": "产出量",
        "usage": "contrast",
        "in_pack": true
      }
    ]
  },
  {
    "word": "ownership",
    "phonetic": "/ˈəʊnəʃɪp/",
    "pos": "n.",
    "meaning": "所有权， 所有权地位",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "owner（拥有者） + -ship（法定状态） -> 所有权，所有权地位。"
  },
  {
    "word": "patent",
    "phonetic": "/ˈpætnt/",
    "pos": "n./vt.",
    "meaning": "专利权 vt. 获得专利",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "词根 patere（敞开） -> 专利权，vt.。"
  },
  {
    "word": "patience",
    "phonetic": "/ˈpeɪʃns/",
    "pos": "n.",
    "meaning": "耐心， 忍耐力",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "pati-（承受忍耐痛楚） + -ence，漫长市场寒冬与波折中耐住寂寞静待花开的心性 -> 耐心，忍耐力。"
  },
  {
    "word": "payroll",
    "phonetic": "/ˈpeɪrəʊl/",
    "pos": "n.",
    "meaning": "工资单； 发放工资总额",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "pay（支付薪水） + roll（卷轴名单） -> 工资单。"
  },
  {
    "word": "perplex",
    "phonetic": "/pəˈpleks/",
    "pos": "vt.",
    "meaning": "使困惑， 使难住， 使费解",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "per-（彻底） + plex（交织编织打死） -> 使困惑，使难住。"
  },
  {
    "word": "precious",
    "phonetic": "/ˈpreʃəs/",
    "pos": "adj.",
    "meaning": "珍贵的， 宝贵的； 过分讲究的",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "prec-（价格价值） + -ious（充满的） -> 珍贵的，宝贵的。"
  },
  {
    "word": "profession",
    "phonetic": "/prəˈfeʃn/",
    "pos": "n.",
    "meaning": "职业（尤指需专门训练者）； 声明",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "pro-（当众） + fess（宣誓） + -ion，引申指职业（尤指需专门训练者） -> 职业（尤指需专门训练者）。"
  },
  {
    "word": "professional",
    "phonetic": "/prəˈfeʃənl/",
    "pos": "adj./n.",
    "meaning": "专业的， 职业的； 内行， 专业人士",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "profession（职业） + -al（的） -> 专业的，职业的。"
  },
  {
    "word": "property",
    "phonetic": "/ˈprɒpəti/",
    "pos": "n.",
    "meaning": "财产， 资产； 性质",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "proper-（自身拥有的） + -ty（名词后缀） -> 财产，资产。"
  },
  {
    "word": "purchase",
    "phonetic": "/ˈpɜːtʃəs/",
    "pos": "vt./n.",
    "meaning": "购买， 采购 n. 购买的物品",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "pur-（pro- 向） + chase（追逐） -> 购买，采购。"
  },
  {
    "word": "purpose",
    "phonetic": "/ˈpɜːpəs/",
    "pos": "n.",
    "meaning": "目的， 意图； 意志， 毅力",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "pur-（向前） + pos（摆放） -> 目的，意图。"
  },
  {
    "word": "qualify",
    "phonetic": "/ˈkwɒlɪfaɪ/",
    "pos": "vt./vi.",
    "meaning": "（使）具有资格， （使）合格； 限定",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "quali-（品质特质） + -fy（使具备） -> （使）具有资格，（使）合格。"
  },
  {
    "word": "resource",
    "phonetic": "/rɪˈsɔːs/",
    "pos": "n.",
    "meaning": "资源， 财力； 谋略， 应变能力",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "re-（再次） + source（源泉喷涌） -> 资源，财力。"
  },
  {
    "word": "retail",
    "phonetic": "/ˈriːteɪl/",
    "pos": "n./v./adj.",
    "meaning": "零售， 零售的",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "re-（再次） + tail（切割） -> 零售，零售的。"
  },
  {
    "word": "salary",
    "phonetic": "/ˈsæləri/",
    "pos": "n.",
    "meaning": "薪水， 薪金",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "sal-（食盐） + -ary（津贴） -> 薪水，薪金。"
  },
  {
    "word": "sample",
    "phonetic": "/ˈsɑːmpl/",
    "pos": "n./vt.",
    "meaning": "样品， 标本； 抽样调查 vt. 品尝； 抽样",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "源自 example（从全体中挑出） -> 样品，标本。"
  },
  {
    "word": "seafood",
    "phonetic": "/ˈsiːfuːd/",
    "pos": "n.",
    "meaning": "海鲜， 海产食品",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "复合",
    "analysis": "sea（海洋） + food（食材食物） -> 海鲜，海产食品。"
  },
  {
    "word": "seller",
    "phonetic": "/ˈselə(r)/",
    "pos": "n.",
    "meaning": "卖方， 销售者； 畅销商品",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "sell（出卖让渡） + -er（人） -> 卖方，销售者。"
  },
  {
    "word": "spoil",
    "phonetic": "/spɔɪl/",
    "pos": "vt./vi./n.",
    "meaning": "损坏； 宠坏； 食物变质 n. 战利品",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "引申",
    "analysis": "词根 spolium（剥下敌人战利） -> 损坏。"
  },
  {
    "word": "stake",
    "phonetic": "/steɪk/",
    "pos": "n./vt.",
    "meaning": "利害攸关， 利益； 股份； 赌注； 下注",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "引申",
    "analysis": "原指牢固钉在地上的木桩 -> 生死攸关的股权利害关系 -> 利害攸关，利益。"
  },
  {
    "word": "stock",
    "phonetic": "/stɒk/",
    "pos": "n./vt.",
    "meaning": "股票； 库存 vt. 储备",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "源自词根核心本义 -> 股票。"
  },
  {
    "word": "trade",
    "phonetic": "/treɪd/",
    "pos": "n./v.",
    "meaning": "贸易， 商业 v. 交换",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "本义指“既定轨迹” -> 贸易，商业。"
  },
  {
    "word": "trademark",
    "phonetic": "/ˈtreɪdmɑːk/",
    "pos": "n.",
    "meaning": "商标， 特征",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "trade（商业） + mark（记号） -> 商标，特征。"
  },
  {
    "word": "treasure",
    "phonetic": "/ˈtreʒə(r)/",
    "pos": "n./vt.",
    "meaning": "财宝， 财富； 珍品 vt. 珍爱， 珍惜",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "词根 thesaur-（金库） -> 视若珍宝 -> 财宝，财富。"
  },
  {
    "word": "triumph",
    "phonetic": "/ˈtraɪʌmf/",
    "pos": "n./vi.",
    "meaning": "胜利， 凯旋； 获得巨大成功",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "引申",
    "analysis": "古罗马战胜归来的统帅披红挂绿进城接受万民欢呼的盛大凯旋仪式 -> 胜利，凯旋。",
    "antonyms": [
      {
        "target": "failure",
        "pos": "n.",
        "for_sense": "凯旋",
        "usage": "contrast",
        "in_pack": false
      }
    ]
  },
  {
    "word": "utilize",
    "phonetic": "/ˈjuːtəlaɪz/",
    "pos": "vt.",
    "meaning": "利用， 使用",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "util-（有用的） + -ize（使动后缀） -> 利用，使用。"
  },
  {
    "word": "via",
    "phonetic": "/ˈvaɪə/",
    "pos": "prep.",
    "meaning": "经由， 经过， 通过（途径）",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "词根 via（道路） -> 经由，经过。"
  },
  {
    "word": "victory",
    "phonetic": "/ˈvɪktəri/",
    "pos": "n.",
    "meaning": "胜利， 成功",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "vict-（征服打胜仗） + -ory（状态） -> 胜利，成功。",
    "antonyms": [
      {
        "target": "defeat",
        "pos": "n.",
        "for_sense": "胜利",
        "usage": "contrast",
        "in_pack": false
      }
    ]
  },
  {
    "word": "wage",
    "phonetic": "/weɪdʒ/",
    "pos": "n./vt.",
    "meaning": "vt. 发动，开展，发起（战役/斗争/战争） n. 工资，薪酬，工钱",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "本义指“抵押保证” -> 工资，报酬。"
  },
  {
    "word": "wealth",
    "phonetic": "/welθ/",
    "pos": "n.",
    "meaning": "财富， 财产； 丰富",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "weal（福祉） + -th（名词后缀） -> 财富，财产。"
  },
  {
    "word": "welfare",
    "phonetic": "/ˈwelfeə(r)/",
    "pos": "n.",
    "meaning": "福利， 安康； 社会救济金",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "well（好） + fare（过日子） -> 福利，安康。"
  },
  {
    "word": "wholesale",
    "phonetic": "/ˈhəʊlseɪl/",
    "pos": "n./adj.",
    "meaning": "批发； 成批的",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "whole（整个） + sale（销售） -> 批发。"
  },
  {
    "word": "worth",
    "phonetic": "/wɜːθ/",
    "pos": "adj./n.",
    "meaning": "值…钱的； 值得的 n. 价值",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "引申",
    "analysis": "与 value 同源 -> 具备对等价值 -> 值…钱的。"
  },
  {
    "word": "worthwhile",
    "phonetic": "/ˌwɜːθˈwaɪl/",
    "pos": "adj.",
    "meaning": "值得花时间（或精力）的",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "复合",
    "analysis": "worth（值得） + while（耗费时光） -> 值得花时间（或精力）的。"
  },
  {
    "word": "yield",
    "phonetic": "/jiːld/",
    "pos": "vt./vi./n.",
    "meaning": "vt. 产生，产出（产量/利润/效益） n. 产量，收益 vi. 屈服，让步（to）",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "引申",
    "analysis": "本义为支付与给予 -> 结出成果或被迫交出让步 -> 产生，出产。",
    "synonyms": [
      {
        "target": "cause",
        "pos": "vt.",
        "for_sense": "出产",
        "usage": "paraphrase",
        "in_pack": false,
        "nuance": "结出果实收益"
      },
      {
        "target": "produce",
        "pos": "vt.",
        "for_sense": "产生",
        "usage": "paraphrase",
        "in_pack": true,
        "nuance": "结出收益产出"
      },
      {
        "target": "surrender",
        "pos": "vi.",
        "for_sense": "屈服",
        "usage": "upgrade",
        "in_pack": false,
        "nuance": "彻底放下武器认输"
      }
    ]
  },
  {
    "word": "academic",
    "phonetic": "/ˌækəˈdemɪk/",
    "pos": "adj./n.",
    "meaning": "学术的； 学院的 n. 学者",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "academy（学园） + -ic（形容词） -> 学术的。"
  },
  {
    "word": "academy",
    "phonetic": "/əˈkædəmi/",
    "pos": "n.",
    "meaning": "学院， 研究院； 学会",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "源自古希腊雅典英雄阿卡德摩之神圣树林 Akademeia（哲人柏拉图在） -> 学院，研究院。"
  },
  {
    "word": "art",
    "phonetic": "/ɑːt/",
    "pos": "n.",
    "meaning": "艺术， 美术； 技巧， 技术",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "词根 ars（技巧） -> 经人巧妙构筑的美学表现 -> 艺术，美术。"
  },
  {
    "word": "articulate",
    "phonetic": "/ɑːˈtɪkjuleɪt/",
    "pos": "vt./adj.",
    "meaning": "清楚表达 adj. 口才极好的",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "articulus（关节） + -ate，引申指清楚表达 adj. 口才极好的 -> 清楚表达，adj.。"
  },
  {
    "word": "associate",
    "phonetic": "/əˈsəʊʃieɪt/",
    "pos": "v./n./adj.",
    "meaning": "联想； 结交 n. 伙伴",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "as-（ad- 朝向） + soci-（同伴） + -ate，引申指联想 -> 联想。"
  },
  {
    "word": "attempt",
    "phonetic": "/əˈtempt/",
    "pos": "vt./n.",
    "meaning": "尝试， 企图； 试图",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "at-（ad- 去） + tempt（尝试） -> 尝试，企图。"
  },
  {
    "word": "bachelor",
    "phonetic": "/ˈbætʃələ(r)/",
    "pos": "n.",
    "meaning": "学士； 单身汉",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "源自中世纪词根 baccalarius（年轻见习骑士） -> 学士。"
  },
  {
    "word": "biotechnology",
    "phonetic": "/ˌbaɪəʊtekˈnɒlədʒi/",
    "pos": "n.",
    "meaning": "生物技术， 生物工程",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "bio-（生命） + techno-（工艺） + -logy（学科） -> 生物技术，生物工程。"
  },
  {
    "word": "campus",
    "phonetic": "/ˈkæmpəs/",
    "pos": "n.",
    "meaning": "大学校园， 校区",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "词根 campus（平原） -> 大学校园，校区。"
  },
  {
    "word": "chemical",
    "phonetic": "/ˈkemɪkl/",
    "pos": "n.",
    "meaning": "adj. 化学的 n. 化学品",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "chem-（炼金） + -ical（形容词后缀） -> 与物质反应相关的 -> 化学的。"
  },
  {
    "word": "church",
    "phonetic": "/tʃɜːtʃ/",
    "pos": "n.",
    "meaning": "教堂； 礼拜； 教会",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "源自希腊语 kyriakon（主之居所） -> 信徒聚会敬拜的圣所 -> 教堂。"
  },
  {
    "word": "coach",
    "phonetic": "/kəʊtʃ/",
    "pos": "n.",
    "meaning": "n. 长途大巴，长途客车；旅客车厢；教练 vt. 训练，指导辅导",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "源自匈牙利地名 Kocs（造车地） -> 引导载运人成长 -> 长途汽车。"
  },
  {
    "word": "code",
    "phonetic": "/kəʊd/",
    "pos": "n.",
    "meaning": "n. 准则； 代号； 密码 vt. 编码",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "本义指“法典” -> 把规范条文规整集合 -> 准则。"
  },
  {
    "word": "consideration",
    "phonetic": "/kənˌsɪdəˈreɪʃn/",
    "pos": "n.",
    "meaning": "仔细考虑， 斟酌； 体贴， 关照",
    "part": "第一部分：超级核心母词族",
    "group": "【35. sid / sed / sess 坐/停留/沉淀】",
    "analysis_type": "构词",
    "analysis": "con-（加强语义） + sider（星宿） + -ation（名词后缀） -> 仰观深思 -> 仔细考虑，斟酌。"
  },
  {
    "word": "context",
    "phonetic": "/ˈkɒntekst/",
    "pos": "n.",
    "meaning": "语境， 上下文； 背景， 环境",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "con-（共同） + text（编织） -> 语境，上下文。"
  },
  {
    "word": "creature",
    "phonetic": "/ˈkriːtʃə(r)/",
    "pos": "n.",
    "meaning": "生物， 动物， 人",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然地理、动植物与环境保护】",
    "analysis_type": "构词",
    "analysis": "creat-（创造） + -ure（名词后缀） -> 生物，动物。"
  },
  {
    "word": "dean",
    "phonetic": "/diːn/",
    "pos": "n.",
    "meaning": "（大学）学院院长， 系主任； 教长",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "词根 decanus（统领十人的首） -> （大学）学院院长 -> （大学）学院院长，系主任。"
  },
  {
    "word": "degree",
    "phonetic": "/dɪˈɡriː/",
    "pos": "n.",
    "meaning": "学位； 度数； 程度",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "de-（向下） + gree（台阶） -> 学位。"
  },
  {
    "word": "digest",
    "phonetic": "/daɪˈdʒest/",
    "pos": "n.",
    "meaning": "vt./vi. 消化； 领会 n. 文摘",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "di-（分开） + gest（运送） -> 将食物摄入分解运送至全身 -> / 消化。"
  },
  {
    "word": "diplomat",
    "phonetic": "/ˈdɪpləmæt/",
    "pos": "n.",
    "meaning": "外交官； 圆滑的人",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "diplo-（双重折叠，源） + -mat，手持折叠公文特派者 -> 外交官。"
  },
  {
    "word": "discipline",
    "phonetic": "/ˈdɪsəplɪn/",
    "pos": "n./vt.",
    "meaning": "n. 学科，学术专业领域；纪律，风纪 vt. 管教，训导，惩戒",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "discip-（学生） + -line（规章规则） -> 学科。"
  },
  {
    "word": "edit",
    "phonetic": "/ˈedɪt/",
    "pos": "vt.",
    "meaning": "编辑， 校订； 编选",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "e-（出） + dit-（给予） -> 将书稿公诸于世交付印刷 -> 编辑，校订。"
  },
  {
    "word": "electricity",
    "phonetic": "/ɪˌlekˈtrɪsəti/",
    "pos": "n.",
    "meaning": "电， 电能； 电流",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "electr-（琥珀） + -icity（名词后缀） -> 电，电能。"
  },
  {
    "word": "electron",
    "phonetic": "/ɪˈlektrɒn/",
    "pos": "n.",
    "meaning": "电子",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "electr-（琥珀） + -on（物理粒子后缀） -> 带负电的基本粒子 -> 电子。"
  },
  {
    "word": "enroll",
    "phonetic": "/ɪnˈrəʊl/",
    "pos": "vt./vi.",
    "meaning": "招收； 入学， 注册（in）",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "en-（置于内） + roll（花名册） -> 招收。"
  },
  {
    "word": "essay",
    "phonetic": "/ˈeseɪ/",
    "pos": "n.",
    "meaning": "短文， 小论文； 散文",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "本义指“尝试” -> 短文，小论文。"
  },
  {
    "word": "expedition",
    "phonetic": "/ˌekspəˈdɪʃn/",
    "pos": "n.",
    "meaning": "远征， 探险； 科学考察队",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然生态、地理环境与动植物】",
    "analysis_type": "构词",
    "analysis": "ex-（向外） + ped-（脚） + -ition（名词后缀） -> “挣脱羁绊将双脚迈出” -> 远征，探险。"
  },
  {
    "word": "fancy",
    "phonetic": "/ˈfænsi/",
    "pos": "adj./vt./n.",
    "meaning": "昂贵的， 别致的； 想要； 想象， 喜爱",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "由 fantasy 缩略演化而来 -> 昂贵的，别致的。"
  },
  {
    "word": "fantasy",
    "phonetic": "/ˈfæntəsi/",
    "pos": "n.",
    "meaning": "幻想， 幻想作品； 白日梦",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "源自希腊语 phantasia（使显现） -> 幻想，幻想作品。"
  },
  {
    "word": "fascinate",
    "phonetic": "/ˈfæsɪneɪt/",
    "pos": "vt.",
    "meaning": "深深吸引， 使着迷",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "词根 fascinum（巫术符咒） -> 深深吸引，使着迷。"
  },
  {
    "word": "fiction",
    "phonetic": "/ˈfɪkʃn/",
    "pos": "n.",
    "meaning": "小说； 虚构的事",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "fict-（塑造） + -ion，头脑编造出的情节 -> 小说。"
  },
  {
    "word": "file",
    "phonetic": "/faɪl/",
    "pos": "n./vt.",
    "meaning": "档案， 文件； 归档， 整理； 正式提出（诉讼/申请）",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "词根 filum（细线） -> 档案，文件。"
  },
  {
    "word": "forum",
    "phonetic": "/ˈfɔːrəm/",
    "pos": "n.",
    "meaning": "论坛， 讨论会； 公共集会场所",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "词根 -> 论坛，讨论会。"
  },
  {
    "word": "freshman",
    "phonetic": "/ˈfreʃmən/",
    "pos": "n.",
    "meaning": "大学一年级新生",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "fresh（新鲜的） + man（人） -> 大学一年级新生。"
  },
  {
    "word": "fundamental",
    "phonetic": "/ˌfʌndəˈmentl/",
    "pos": "adj./n.",
    "meaning": "根本的， 基本的， 基础的； 基本原理",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "fund-（底） + -ament（基础构筑） + -al（形容词后缀） -> 根本的，基本的。"
  },
  {
    "word": "gallery",
    "phonetic": "/ˈɡæləri/",
    "pos": "n.",
    "meaning": "美术馆， 画廊； 走廊",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "本义指“长廊” -> 陈列展示艺术品的长厅 -> 美术馆，画廊。"
  },
  {
    "word": "geometry",
    "phonetic": "/dʒiˈɒmətri/",
    "pos": "n.",
    "meaning": "几何学； 几何结构",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "geo-（大地） + metr-（测量） + -y（学科后缀） -> 几何学。"
  },
  {
    "word": "guess",
    "phonetic": "/ɡes/",
    "pos": "v./n.",
    "meaning": "猜测， 推测； 估计",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "本义指“依据直觉揣摩” -> 猜测，推测。"
  },
  {
    "word": "ideal",
    "phonetic": "/aɪˈdiːəl/",
    "pos": "adj./n.",
    "meaning": "理想的， 完美的； 理想， 完美典范",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "idea（观念） + -al（形容词后缀） -> 理想的，完美的。"
  },
  {
    "word": "illusion",
    "phonetic": "/ɪˈluːʒn/",
    "pos": "n.",
    "meaning": "错觉， 幻觉； 虚假幻想",
    "part": "第二部分：高频专业词根族",
    "group": "【54. lud / lus 嬉戏/扮演/欺骗】",
    "analysis_type": "构词",
    "analysis": "il-（在…之上） + lus（嬉戏） + -ion（名词后缀） -> 错觉，幻觉。"
  },
  {
    "word": "imagine",
    "phonetic": "/ɪˈmædʒɪn/",
    "pos": "vt.",
    "meaning": "想象， 设想； 料想",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "image（图像） + -ine（动词后缀） -> 想象，设想。"
  },
  {
    "word": "incidence",
    "phonetic": "/ˈɪnsɪdəns/",
    "pos": "n.",
    "meaning": "发生率； 影响程度， 波及范围",
    "part": "第二部分：高频专业词根族",
    "group": "【41. cid / cas 落下/降临/发生】",
    "analysis_type": "构词",
    "analysis": "in-（在…之上） + cid（落下） + -ence（名词后缀） -> 发生率。"
  },
  {
    "word": "index",
    "phonetic": "/ˈɪndeks/",
    "pos": "n.",
    "meaning": "指数， 指标； 索引",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "in-（在内） + dic-（指示） -> 伸出食指指向目标方向 -> 指数，指标。"
  },
  {
    "word": "journal",
    "phonetic": "/ˈdʒɜːnl/",
    "pos": "n.",
    "meaning": "定期刊物， 杂志； 日志",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "journ-（日） + -al，记录每日动态的刊物 -> 定期刊物，杂志。"
  },
  {
    "word": "junior",
    "phonetic": "/ˈdʒuːniə(r)/",
    "pos": "adj./n.",
    "meaning": "资历较浅的， 地位较低的； 大学三年级生； 晚辈",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "词根 juvenis（年轻的） -> 资历较浅的，地位较低的。"
  },
  {
    "word": "likewise",
    "phonetic": "/ˈlaɪkwaɪz/",
    "pos": "adv.",
    "meaning": "同样地， 照样地； 也",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "like（相同的） + -wise（方式） -> 同样地，照样地。"
  },
  {
    "word": "literacy",
    "phonetic": "/ˈlɪtərəsi/",
    "pos": "n.",
    "meaning": "识字， 有文化； 读写能力",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "liter-（文字） + -acy（名词后缀） -> 识字，有文化。"
  },
  {
    "word": "literal",
    "phonetic": "/ˈlɪtərəl/",
    "pos": "adj.",
    "meaning": "字面的， 逐字的； 如实的， 无夸张的",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "liter-（字母） + -al（形容词后缀） -> 字面的，逐字的。"
  },
  {
    "word": "literature",
    "phonetic": "/ˈlɪtrətʃə(r)/",
    "pos": "n.",
    "meaning": "文学， 文学作品； 文献",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "liter-（文字） + -ature（名词后缀） -> 文学，文学作品。"
  },
  {
    "word": "magic",
    "phonetic": "/ˈmædʒɪk/",
    "pos": "n./adj.",
    "meaning": "魔法， 魔力； 有魔力的， 神奇的",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "源自希腊语 magike（古波斯祭司 ） -> 魔法，魔力。"
  },
  {
    "word": "master",
    "phonetic": "/ˈmɑːstə(r)/",
    "pos": "n./vt.",
    "meaning": "硕士； 主人； 大师 vt. 精通",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "词根magister -> 硕士。"
  },
  {
    "word": "masterpiece",
    "phonetic": "/ˈmɑːstəpiːs/",
    "pos": "n.",
    "meaning": "杰作， 传世之作， 代表作",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "master（行家师傅） + piece（件） -> 杰作，传世之作。"
  },
  {
    "word": "mechanic",
    "phonetic": "/məˈkænɪk/",
    "pos": "n.",
    "meaning": "机修工， 技工",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "mechan-（机械） + -ic（人） -> 机修工，技工。"
  },
  {
    "word": "mechanism",
    "phonetic": "/ˈmekənɪzəm/",
    "pos": "n.",
    "meaning": "机械装置； 机制， 运行机理",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "mechan-（机械） + -ism（名词后缀，引申指机械装置 -> 机械装置。"
  },
  {
    "word": "mental",
    "phonetic": "/ˈmentl/",
    "pos": "adj.",
    "meaning": "精神的， 心理的； 智力的",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、医疗生理与情绪心理】",
    "analysis_type": "构词",
    "analysis": "ment-（心智） + -al（形容词后缀） -> 精神的，心理的。"
  },
  {
    "word": "occasion",
    "phonetic": "/əˈkeɪʒn/",
    "pos": "n./vt.",
    "meaning": "重要场合， 盛事； 时机； 引起， 致使",
    "part": "第二部分：高频专业词根族",
    "group": "【41. cid / cas 落下/降临/发生】",
    "analysis_type": "构词",
    "analysis": "oc-（朝向） + cas（落下） + -ion（名词后缀） -> 重要场合，盛事。"
  },
  {
    "word": "operate",
    "phonetic": "/ˈɒpəreɪt/",
    "pos": "v.",
    "meaning": "运转，运行；经营，管理；操作；动手术",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "oper-（工作/劳作） + -ate -> 持续维持系统有效运转劳作 -> 运转，运行。"
  },
  {
    "word": "organism",
    "phonetic": "/ˈɔːɡənɪzəm/",
    "pos": "n.",
    "meaning": "生物体， 有机体； 有机结构",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然生态、地理环境与动植物】",
    "analysis_type": "构词",
    "analysis": "organ（器官） + -ism（名词后缀） -> 生物体，有机体。"
  },
  {
    "word": "outbreak",
    "phonetic": "/ˈaʊtbreɪk/",
    "pos": "n.",
    "meaning": "（疾病、战争等的）爆发， 突然发作",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "out（向外） + break（破裂） -> （疾病，战争等的）爆发。"
  },
  {
    "word": "password",
    "phonetic": "/ˈpɑːswɜːd/",
    "pos": "n.",
    "meaning": "密码， 口令",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "pass（通行） + word（字词） -> 密码，口令。"
  },
  {
    "word": "phenomenon",
    "phonetic": "/fəˈnɒmɪnən/",
    "pos": "n.",
    "meaning": "现象； 非凡的人或事（复数）",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "源自希腊语 phainomenon（显现出来的事） -> 现象。"
  },
  {
    "word": "philosopher",
    "phonetic": "/fəˈlɒsəfə(r)/",
    "pos": "n.",
    "meaning": "哲学家， 哲人",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "philo-（喜爱） + soph-（智慧） + -er（人） -> 哲学家，哲人。"
  },
  {
    "word": "physician",
    "phonetic": "/fɪˈzɪʃn/",
    "pos": "n.",
    "meaning": "内科医生； 执业医师",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、医疗生理与情绪心理】",
    "analysis_type": "构词",
    "analysis": "physic-（自然） + -ian（专业人员） -> 内科医生。"
  },
  {
    "word": "preface",
    "phonetic": "/ˈprefəs/",
    "pos": "n./vt.",
    "meaning": "前言， 序言； 为…作序， 以…为开场白",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "pre-（在…前面） + face（说话） -> 在正文内容开始前先说的话 -> 前言，序言。"
  },
  {
    "word": "quote",
    "phonetic": "/kwəʊt/",
    "pos": "v./n.",
    "meaning": "引用， 引述； 报价； 引文",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "词根 quotare（按章节编号标） -> 引用，引述。"
  },
  {
    "word": "reckless",
    "phonetic": "/ˈrekləs/",
    "pos": "adj.",
    "meaning": "鲁莽的， 不计后果的； 轻率狂妄的",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "reck（顾虑） + -less（毫无…的） -> 鲁莽的，不计后果的。"
  },
  {
    "word": "reckon",
    "phonetic": "/ˈrekən/",
    "pos": "v.",
    "meaning": "认为， 估计； 计算， 料想",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "词根族核心意象 -> 理清头绪推算结果 -> 认为，估计。"
  },
  {
    "word": "regard",
    "phonetic": "/rɪˈɡɑːd/",
    "pos": "vt./n.",
    "meaning": "把…看作，认为；尊重，看重；关于",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "re-（再） + gard-（注视守护） -> 仔细观察并给予主观审视定位 -> 把…看作，认为。"
  },
  {
    "word": "religion",
    "phonetic": "/rɪˈlɪdʒən/",
    "pos": "n.",
    "meaning": "宗教， 信仰； 极其认真的事物",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "re-（紧紧） + lig-（捆绑） + -ion，引申指宗教 -> 宗教，信仰。"
  },
  {
    "word": "sacred",
    "phonetic": "/ˈseɪkrɪd/",
    "pos": "adj.",
    "meaning": "神圣的， 庄严的； 不可侵犯的",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "源自拉丁词根 sacr-（献给神明的） -> 神圣的，庄严的。"
  },
  {
    "word": "scholar",
    "phonetic": "/ˈskɒlə(r)/",
    "pos": "n.",
    "meaning": "学者； 奖学金获得者",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "schol-（闲暇） + -ar（人） -> 学者。"
  },
  {
    "word": "scholarship",
    "phonetic": "/ˈskɒləʃɪp/",
    "pos": "n.",
    "meaning": "奖学金； 学术， 学问",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "scholar（学者） + -ship（状态） -> 奖学金。"
  },
  {
    "word": "semester",
    "phonetic": "/sɪˈmestə(r)/",
    "pos": "n.",
    "meaning": "学期， 半学年",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "se-（六个） + mestri-（月） -> 学期，半学年。"
  },
  {
    "word": "seminar",
    "phonetic": "/ˈsemɪnɑː(r)/",
    "pos": "n.",
    "meaning": "专题研讨班， 讨论会",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "semin-（种子） + -ar（场所） -> 专题研讨班，讨论会。"
  },
  {
    "word": "senior",
    "phonetic": "/ˈsiːniə(r)/",
    "pos": "adj./n.",
    "meaning": "高级的， 资深的； 大学四年级生； 长者",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "词根 senex（年长的老者） -> 高级的，资深的。"
  },
  {
    "word": "skill",
    "phonetic": "/skɪl/",
    "pos": "n.",
    "meaning": "技能， 技艺； 熟练技巧",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "源自古诺斯语 skil（辨析） -> 技能，技艺。"
  },
  {
    "word": "sophomore",
    "phonetic": "/ˈsɒfəmɔː(r)/",
    "pos": "n.",
    "meaning": "大学二年级学生",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "sopho-（智慧） + more（愚蠢无知） -> 大学二年级学生。"
  },
  {
    "word": "stiff",
    "phonetic": "/stɪf/",
    "pos": "adj./adv.",
    "meaning": "僵硬的， 生硬的； 艰难严峻的； 极其地",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "源自词根意为“坚固挺立” -> 僵硬的，生硬的。"
  },
  {
    "word": "surgeon",
    "phonetic": "/ˈsɜːdʒən/",
    "pos": "n.",
    "meaning": "外科医生",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、医疗生理与情绪心理】",
    "analysis_type": "构词",
    "analysis": "源自希腊语 kheirourgos（用双手劳作施） -> 外科医生。"
  },
  {
    "word": "surgery",
    "phonetic": "/ˈsɜːdʒəri/",
    "pos": "n.",
    "meaning": "外科手术； 外科学； 手术室",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、医疗生理与情绪心理】",
    "analysis_type": "构词",
    "analysis": "surgeon（外科医生手艺） + -ery（行业） -> 外科手术。"
  },
  {
    "word": "survive",
    "phonetic": "/səˈvaɪv/",
    "pos": "v.",
    "meaning": "幸免于难， 生存； 比…活得长",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然生态、地理环境与动植物】",
    "analysis_type": "构词",
    "analysis": "sur-（超越） + viv-（生命） -> 幸免于难，生存。"
  },
  {
    "word": "technician",
    "phonetic": "/tekˈnɪʃn/",
    "pos": "n.",
    "meaning": "技术员， 技师",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "techn-（工艺） + -ician（专门从业者） -> 技术员，技师。"
  },
  {
    "word": "technique",
    "phonetic": "/tekˈniːk/",
    "pos": "n.",
    "meaning": "技巧， 技术； 具体工艺方法",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "源自希腊语 tekhnikos（手艺的） -> 技巧，技术。"
  },
  {
    "word": "technologist",
    "phonetic": "/tekˈnɒlədʒɪst/",
    "pos": "n.",
    "meaning": "技术专家， 工艺学家",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "techno-（科技） + -logist（专门学者） -> 技术专家，工艺学家。"
  },
  {
    "word": "technology",
    "phonetic": "/tekˈnɒlədʒi/",
    "pos": "n.",
    "meaning": "科学技术， 工业技术； 工艺学",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "techno-（技艺） + -logy（学科体系） -> 科学技术，工业技术。"
  },
  {
    "word": "term",
    "phonetic": "/tɜːm/",
    "pos": "n./vt.",
    "meaning": "术语，专门词汇；学期；条款，条件；期限",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "term-（界限/定界） -> 明确界定学科概念范围的词语 -> 术语，专门词汇。"
  },
  {
    "word": "triangle",
    "phonetic": "/ˈtraɪæŋɡl/",
    "pos": "n.",
    "meaning": "三角形； 三人组； 三角铁乐器",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "tri-（三） + angle（角） -> 具有三个内角的几何图形 -> 三角形。"
  },
  {
    "word": "tuition",
    "phonetic": "/tjuˈɪʃn/",
    "pos": "n.",
    "meaning": "学费； 教学， 讲授",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "tuit-（守护） + -ion（名词后缀） -> 学费。"
  },
  {
    "word": "utter",
    "phonetic": "/ˈʌtə(r)/",
    "pos": "adj./vt.",
    "meaning": "完全的， 彻底的； 说出， 发出声音",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "本义指“外面的” -> 彻底推向极限毫无保留的 -> 完全的，彻底的。"
  },
  {
    "word": "vital",
    "phonetic": "/ˈvaɪtl/",
    "pos": "adj.",
    "meaning": "生死攸关的， 极其重要的； 充满活力的",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "vit-（生命） + -al（形容词后缀） -> 关乎生命存续的 -> 生死攸关的，极其重要的。"
  },
  {
    "word": "vitamin",
    "phonetic": "/ˈvɪtəmɪn/",
    "pos": "n.",
    "meaning": "维生素， 维他命",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "vita-（生命） + amine（胺） -> 维生素，维他命。"
  },
  {
    "word": "vivid",
    "phonetic": "/ˈvɪvɪd/",
    "pos": "adj.",
    "meaning": "生动的， 栩栩如生的； 清晰鲜明的",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "viv-（活） + -id（形容词后缀） -> 生动的，栩栩如生的。"
  },
  {
    "word": "website",
    "phonetic": "/ˈwebsaɪt/",
    "pos": "n.",
    "meaning": "网站， 互联网站点",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "web（互联网） + site（地点） -> 网站，互联网站点。"
  },
  {
    "word": "weird",
    "phonetic": "/wɪəd/",
    "pos": "adj.",
    "meaning": "怪异的， 超自然的； 古怪离奇的",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "本义指“命运女神” -> 怪异的，超自然的。"
  },
  {
    "word": "wild",
    "phonetic": "/waɪld/",
    "pos": "adj./n.",
    "meaning": "野生的， 未驯化的； 狂热的； 荒野， 野外",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然生态、地理环境与动植物】",
    "analysis_type": "构词",
    "analysis": "词根族核心意象 -> 野生的，未驯化的。"
  },
  {
    "word": "wise",
    "phonetic": "/waɪz/",
    "pos": "adj.",
    "meaning": "明智的， 有远见的； 博学的",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "源自词根意为“看见” -> 明智的，有远见的。"
  },
  {
    "word": "wit",
    "phonetic": "/wɪt/",
    "pos": "n.",
    "meaning": "风趣， 机智； 才思， 智力（常复数）",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "本义指“感知” -> 风趣，机智。"
  },
  {
    "word": "absorb",
    "phonetic": "/əbˈzɔːb/",
    "pos": "vt.",
    "meaning": "吸收； 同化； 吸引…的注意",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "ab-（离去） + sorb（吮吸） -> 吸收。"
  },
  {
    "word": "addition",
    "phonetic": "/əˈdɪʃn/",
    "pos": "n.",
    "meaning": "增加， 添加物； 加法； 新增扩充内容",
    "part": "第一部分：超级核心母词族",
    "group": "【37. don / dot / do 给予/奉献】",
    "analysis_type": "构词",
    "analysis": "ad-（朝向） + dit（给予） + -ion（名词后缀） -> 增加，添加物。"
  },
  {
    "word": "alike",
    "phonetic": "/əˈlaɪk/",
    "pos": "adj./adv.",
    "meaning": "极其相似的， 同样的； 同样地",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "a-（处于…状态） + like（肖像） -> 极其相似的，同样的。"
  },
  {
    "word": "altitude",
    "phonetic": "/ˈæltɪtjuːd/",
    "pos": "n.",
    "meaning": "海拔， 高度； 高处",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然地理、动植物与环境保护】",
    "analysis_type": "构词",
    "analysis": "alt-（高） + -itude（名词后缀） -> 海拔，高度。"
  },
  {
    "word": "ashamed",
    "phonetic": "/əˈʃeɪmd/",
    "pos": "adj.",
    "meaning": "惭愧的， 羞愧的",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、医疗生理与情绪心理】",
    "analysis_type": "构词",
    "analysis": "a-（使处于…状态） + shame（羞耻） + -ed（形容词后缀） -> 惭愧的，羞愧的。"
  },
  {
    "word": "astronaut",
    "phonetic": "/ˈæstrənɔːt/",
    "pos": "n.",
    "meaning": "宇航员， 航天员",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "astro-（星星） + naut（水手） -> 在繁星苍穹间远航的水手 -> 宇航员，航天员。"
  },
  {
    "word": "atmosphere",
    "phonetic": "/ˈætməsfɪə(r)/",
    "pos": "n.",
    "meaning": "大气， 大气层； 气氛",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然地理、动植物与环境保护】",
    "analysis_type": "构词",
    "analysis": "atmo-（蒸汽） + sphere（球体） -> 大气，大气层。"
  },
  {
    "word": "balance",
    "phonetic": "/ˈbæləns/",
    "pos": "n./v.",
    "meaning": "平衡， 均衡； 结余 v. 平衡",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "bi-（两个） + lanx（盘子） -> 平衡，均衡。"
  },
  {
    "word": "base",
    "phonetic": "/beɪs/",
    "pos": "n./vt.",
    "meaning": "基础， 底部 vt. 基于",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "源自希腊语 basis（底座） -> 基础，底部。"
  },
  {
    "word": "basin",
    "phonetic": "/ˈbeɪsn/",
    "pos": "n.",
    "meaning": "盆地； 河流流域； 洗脸水盆",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然生态、地理环境与动植物】",
    "analysis_type": "构词",
    "analysis": "源自晚期词根 baccinum（敞口浅平盛水） -> 盆地。"
  },
  {
    "word": "beast",
    "phonetic": "/biːst/",
    "pos": "n.",
    "meaning": "野兽， 凶残动物； 残忍如兽之人",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然生态、地理环境与动植物】",
    "analysis_type": "构词",
    "analysis": "词根 bestia（不受驯化之野） -> 野兽，凶残动物。"
  },
  {
    "word": "board",
    "phonetic": "/bɔːd/",
    "pos": "vt./vi./n.",
    "meaning": "vt./vi. 登上（飞机/船/车） n. 董事会，理事会；木板，牌子",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "核心意象为“厚木板” -> 登机，上船。"
  },
  {
    "word": "breeze",
    "phonetic": "/briːz/",
    "pos": "n.",
    "meaning": "微风， 和风",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然地理、动植物与环境保护】",
    "analysis_type": "构词",
    "analysis": "源自古西班牙语 briza（东北风） -> 微风，和风。"
  },
  {
    "word": "bubble",
    "phonetic": "/ˈbʌbl/",
    "pos": "n./vi.",
    "meaning": "气泡， 水泡； 资产泡沫； 冒泡， 洋溢",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "拟声构词法 -> 气泡，水泡。"
  },
  {
    "word": "bucket",
    "phonetic": "/ˈbʌkɪt/",
    "pos": "n.",
    "meaning": "提桶， 水桶； 一桶之量",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "本义指“带提手的木盆” -> 提桶，水桶。"
  },
  {
    "word": "bug",
    "phonetic": "/bʌɡ/",
    "pos": "n./vt.",
    "meaning": "虫子； 程序隐患漏洞； 窃听器； 打扰",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "早期计算机继电器中因误飞入飞蛾导致电路短路跳闸 -> 虫子。"
  },
  {
    "word": "bulb",
    "phonetic": "/bʌlb/",
    "pos": "n.",
    "meaning": "电灯泡； 植物球茎， 鳞茎",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "源自希腊语 bolbos（圆球根茎） -> 电灯泡。"
  },
  {
    "word": "bush",
    "phonetic": "/bʊʃ/",
    "pos": "n.",
    "meaning": "灌木， 灌木丛； 荒野丛林",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然生态、地理环境与动植物】",
    "analysis_type": "构词",
    "analysis": "核心意象为“低矮繁密的丛” -> 灌木，灌木丛。"
  },
  {
    "word": "carrot",
    "phonetic": "/ˈkærət/",
    "pos": "n.",
    "meaning": "胡萝卜； 报酬， 诱饵",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "源自希腊语 karoton（角状根） -> 根部形如兽角 -> 胡萝卜。"
  },
  {
    "word": "cement",
    "phonetic": "/sɪˈment/",
    "pos": "n./vt.",
    "meaning": "水泥； 粘合胶剂； 巩固， 胶合加强",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "词根 caementum（建筑碎石混凝） -> 水泥。"
  },
  {
    "word": "challenge",
    "phonetic": "/ˈtʃælɪndʒ/",
    "pos": "n./vt.",
    "meaning": "艰巨挑战， 考验； 向…提出挑战， 质疑",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "词根 calumnia（当面指控） -> 艰巨挑战，考验。"
  },
  {
    "word": "channel",
    "phonetic": "/ˈtʃænl/",
    "pos": "n./vt.",
    "meaning": "海峡， 水道； 流通渠道； 电视频道； 引导调配",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然生态、地理环境与动植物】",
    "analysis_type": "构词",
    "analysis": "与 canal（运河）同源 -> 海峡，水道。"
  },
  {
    "word": "chart",
    "phonetic": "/tʃɑːt/",
    "pos": "n./vt.",
    "meaning": "n. 图表； 海图 vt. 绘制； 规划",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "源自希腊语 chartes（纸莎草纸） -> 将信息绘于图幅上 -> 图表。"
  },
  {
    "word": "chill",
    "phonetic": "/tʃɪl/",
    "pos": "n./adj./v.",
    "meaning": "寒意， 寒冷； 使冰冷， 变凉； 寒冷的",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然生态、地理环境与动植物】",
    "analysis_type": "构词",
    "analysis": "本义指“刺骨之寒” -> 寒意，寒冷。"
  },
  {
    "word": "clash",
    "phonetic": "/klæʃ/",
    "pos": "vi./n.",
    "meaning": "发生冲突， 猛烈撞击； 冲突， 抵触",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "拟声词 -> 发生冲突，猛烈撞击。"
  },
  {
    "word": "clay",
    "phonetic": "/kleɪ/",
    "pos": "n.",
    "meaning": "黏土， 陶土",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然生态、地理环境与动植物】",
    "analysis_type": "构词",
    "analysis": "源自词根意为“粘稠” -> 黏土，陶土。"
  },
  {
    "word": "climate",
    "phonetic": "/ˈklaɪmət/",
    "pos": "n.",
    "meaning": "气候； 风气， 环境",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然地理、动植物与环境保护】",
    "analysis_type": "构词",
    "analysis": "源自希腊语 klima（地表倾斜度） -> 气候。"
  },
  {
    "word": "counterpart",
    "phonetic": "/ˈkaʊntəpɑːt/",
    "pos": "n.",
    "meaning": "对应的人或物； 地位相当者",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【78. 前缀：counter- / contra- 相反/对应】",
    "analysis_type": "构词",
    "analysis": "counter-（对应） + part（部分） -> 对应的人或物。"
  },
  {
    "word": "crystal",
    "phonetic": "/ˈkrɪstl/",
    "pos": "n./adj.",
    "meaning": "水晶； 结晶体； 晶莹剔透的， 清澈的",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "源自希腊语 krystallos（寒冷凝固之净） -> 水晶。"
  },
  {
    "word": "damp",
    "phonetic": "/dæmp/",
    "pos": "adj./n./vt.",
    "meaning": "潮湿的 n. 潮气 vt. 使潮湿",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然地理、动植物与环境保护】",
    "analysis_type": "构词",
    "analysis": "源自中古低地德语 damp（水气） -> 潮湿的，n.。"
  },
  {
    "word": "dash",
    "phonetic": "/dæʃ/",
    "pos": "vi./n.",
    "meaning": "猛冲， 飞奔； 猛击； 破折号",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "本义指“猛烈猛冲撞击” -> 猛冲，飞奔。"
  },
  {
    "word": "dawn",
    "phonetic": "/dɔːn/",
    "pos": "n./vi.",
    "meaning": "黎明， 拂晓； 崭新开端； 破晓， 逐渐被悟出",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然生态、地理环境与动植物】",
    "analysis_type": "构词",
    "analysis": "本义指“日出于东方” -> 夜尽天明破晓之时 -> 黎明，拂晓。"
  },
  {
    "word": "decay",
    "phonetic": "/dɪˈkeɪ/",
    "pos": "vi./n.",
    "meaning": "腐烂， 腐朽； 衰退， 衰减",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "de-（向下） + cay（掉落） -> 腐烂，腐朽。"
  },
  {
    "word": "deprive",
    "phonetic": "/dɪˈpraɪv/",
    "pos": "vt.",
    "meaning": "剥夺， 使丧失",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "de-（彻底） + prive（私人的） -> 剥夺，使丧失。"
  },
  {
    "word": "derive",
    "phonetic": "/dɪˈraɪv/",
    "pos": "v.",
    "meaning": "源自， 源于； 提取， 推导",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "de-（从…向下） + riv-（河流） -> 源自，源于。"
  },
  {
    "word": "desperately",
    "phonetic": "/ˈdespərətli/",
    "pos": "adv.",
    "meaning": "拼命地， 绝望地； 极其迫切地",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "de-（彻底失去） + sper-（希望） + -ate + -ly，引申指拼命地 -> 拼命地，绝望地。"
  },
  {
    "word": "destination",
    "phonetic": "/ˌdestɪˈneɪʃn/",
    "pos": "n.",
    "meaning": "目的地， 终点",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "de-（彻底） + stin-（站立） + -ation，引申指目的地 -> 目的地，终点。"
  },
  {
    "word": "disaster",
    "phonetic": "/dɪˈzɑːstə(r)/",
    "pos": "n.",
    "meaning": "灾难， 天灾， 灾祸",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然地理、动植物与环境保护】",
    "analysis_type": "构词",
    "analysis": "dis-（反常） + aster（星辰） -> 灾难，天灾。"
  },
  {
    "word": "dispute",
    "phonetic": "/dɪˈspjuːt/",
    "pos": "n./v.",
    "meaning": "争端， 纠纷； 辩驳， 争论",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "dis-（彼此分离） + pute（思考） -> 争端，纠纷。"
  },
  {
    "word": "district",
    "phonetic": "/ˈdɪstrɪkt/",
    "pos": "n.",
    "meaning": "区， 行政区， 地区",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "dis-（分开） + strict-（拉紧） -> 区，行政区。"
  },
  {
    "word": "draft",
    "phonetic": "/drɑːft/",
    "pos": "n./vt.",
    "meaning": "vt. 起草，拟定 n. 草案，草稿；汇票；征兵，征召入伍",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "与 draw（拉/画）同源 -> 用线条拉出轮廓雏形 -> 起草，拟定。"
  },
  {
    "word": "drawer",
    "phonetic": "/drɔː(r)/",
    "pos": "n.",
    "meaning": "抽屉； 起草人， 开票者",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "draw（拉） + -er（器具后缀） -> 抽屉。"
  },
  {
    "word": "earthquake",
    "phonetic": "/ˈɜːθkweɪk/",
    "pos": "n.",
    "meaning": "地震",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然地理、动植物与环境保护】",
    "analysis_type": "构词",
    "analysis": "earth（大地） + quake（震颤） -> 地震。"
  },
  {
    "word": "ecosystem",
    "phonetic": "/ˈiːkəʊsɪstəm/",
    "pos": "n.",
    "meaning": "生态系统",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然地理、动植物与环境保护】",
    "analysis_type": "构词",
    "analysis": "eco-（家园） + system（系统） -> 生态系统。"
  },
  {
    "word": "enlighten",
    "phonetic": "/ɪnˈlaɪtn/",
    "pos": "vt.",
    "meaning": "启发， 启蒙； 使明白",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "en-（使成为） + light（光芒） + -en（动词后缀） -> 将真理之光照入愚昧蒙昧的 -> 启发，启蒙。"
  },
  {
    "word": "environment",
    "phonetic": "/ɪnˈvaɪrənmənt/",
    "pos": "n.",
    "meaning": "环境， 外界； 围绕",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然地理、动植物与环境保护】",
    "analysis_type": "构词",
    "analysis": "environ（环绕） + -ment（名词后缀） -> 环境，外界。"
  },
  {
    "word": "environmental",
    "phonetic": "/ɪnˌvaɪrənˈmentl/",
    "pos": "adj.",
    "meaning": "环境的， 环保的",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然地理、动植物与环境保护】",
    "analysis_type": "构词",
    "analysis": "environment（环境） + -al（形容词后缀） -> 环境的，环保的。"
  },
  {
    "word": "exhaust",
    "phonetic": "/ɪɡˈzɔːst/",
    "pos": "vt./n.",
    "meaning": "使筋疲力尽； 耗尽； 废气， 排气管",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "ex-（出） + haust（汲水） -> 把容器里的水全部舀干抽尽 -> 使筋疲力尽。"
  },
  {
    "word": "extinct",
    "phonetic": "/ɪkˈstɪŋkt/",
    "pos": "adj.",
    "meaning": "灭绝的， 绝种的； 熄灭的",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然地理、动植物与环境保护】",
    "analysis_type": "构词",
    "analysis": "ex-（向外） + stinct-（熄灭） -> 灭绝的，绝种的。"
  },
  {
    "word": "fabric",
    "phonetic": "/ˈfæbrɪk/",
    "pos": "n.",
    "meaning": "织物， 布料； 社会基本结构， 组织架构",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "词根 fabrica（工匠手艺） -> 织物，布料。"
  },
  {
    "word": "fairly",
    "phonetic": "/ˈfeəli/",
    "pos": "adv.",
    "meaning": "相当地， 颇； 公正地， 公平地",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "fair（公平的） + -ly（副词后缀） -> 相当地，颇。"
  },
  {
    "word": "fame",
    "phonetic": "/feɪm/",
    "pos": "n.",
    "meaning": "声誉， 名望， 名气",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "源自拉丁词根 fa- / fari（言说） -> 人人交口传颂、美名远扬 -> 声誉，名望。"
  },
  {
    "word": "field",
    "phonetic": "/fiːld/",
    "pos": "n./vt.",
    "meaning": "田野， 牧场； 专业领域， 学科； 现场实地； 派选手上场",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "本义指“平坦开阔的原” -> 田野，牧场。"
  },
  {
    "word": "fire",
    "phonetic": "/ˈfaɪə(r)/",
    "pos": "n./v.",
    "meaning": "火， 火灾； 热情； 点火， 开火； 解雇， 开除",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "同源（火） -> 火，火灾。"
  },
  {
    "word": "fortnight",
    "phonetic": "/ˈfɔːtnaɪt/",
    "pos": "n.",
    "meaning": "两星期， 十四天",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "fourteen（十四） + night（夜晚） -> 两星期，十四天。"
  },
  {
    "word": "fragrant",
    "phonetic": "/ˈfreɪɡrənt/",
    "pos": "adj.",
    "meaning": "香气扑鼻的， 芳香的",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然生态、地理环境与动植物】",
    "analysis_type": "构词",
    "analysis": "源自拉丁词根 fragr-（散发浓烈芳香） -> 香气扑鼻的，芳香的。"
  },
  {
    "word": "freeze",
    "phonetic": "/friːz/",
    "pos": "v./n.",
    "meaning": "结冰， 冻结； 僵住 n. 严寒",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "源自词根核心本义 -> 结冰，冻结。"
  },
  {
    "word": "fuel",
    "phonetic": "/ˈfjuːəl/",
    "pos": "n./vt.",
    "meaning": "n. 燃料 vt. 加燃料； 煽动",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然生态、地理环境与动植物】",
    "analysis_type": "构词",
    "analysis": "词根 focus（火） -> 提供维持燃烧的物质 -> 燃料。"
  },
  {
    "word": "glitter",
    "phonetic": "/ˈɡlɪtə(r)/",
    "pos": "vi./n.",
    "meaning": "闪烁， 闪耀； 闪光， 灿烂光芒",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "与 glass（玻璃）、glow（发光）同源 -> 闪烁，闪耀。"
  },
  {
    "word": "glory",
    "phonetic": "/ˈɡlɔːri/",
    "pos": "n./vi.",
    "meaning": "光荣， 荣誉； 壮丽 vi. 自豪",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "本义指“词根字面” -> 光荣，荣誉。"
  },
  {
    "word": "glow",
    "phonetic": "/ɡləʊ/",
    "pos": "vi./n.",
    "meaning": "发光， 发热； 容光焕发； 红光， 暖意",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "同源（发光） -> 发光，发热。"
  },
  {
    "word": "glue",
    "phonetic": "/ɡluː/",
    "pos": "n./vt.",
    "meaning": "胶水， 粘结剂； 用胶水粘贴； 紧紧附着于",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "源自晚期词根 gluten（粘稠胶状物质） -> 利用粘性使两者无缝结合 -> 胶水，粘结剂。"
  },
  {
    "word": "grain",
    "phonetic": "/ɡreɪn/",
    "pos": "n.",
    "meaning": "谷物， 粮食； 颗粒， 细粒； 纹理",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然生态、地理环境与动植物】",
    "analysis_type": "构词",
    "analysis": "词根 granum（种子） -> 或微小坚硬的粒子 -> 谷物，粮食。"
  },
  {
    "word": "heaven",
    "phonetic": "/ˈhevn/",
    "pos": "n.",
    "meaning": "天堂， 天国； 苍穹， 天空（常复数）",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "本义指“被高高举起的” -> 天堂，天国。"
  },
  {
    "word": "hell",
    "phonetic": "/hel/",
    "pos": "n.",
    "meaning": "地狱； 极度痛苦的境地， 苦难深渊",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "本义指地下的幽暗冥界 -> 极度痛苦的境地 -> 地狱。"
  },
  {
    "word": "heroin",
    "phonetic": "/ˈherəʊɪn/",
    "pos": "n.",
    "meaning": "海洛因（毒品）",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "源自希腊语 heros（英雄） -> 海洛因（毒品）。"
  },
  {
    "word": "highlight",
    "phonetic": "/ˈhaɪlaɪt/",
    "pos": "vt./n.",
    "meaning": "强调， 突出； 最好看的部分， 最精彩的场面",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "high（高） + light（光芒） -> 强调，突出。"
  },
  {
    "word": "horizon",
    "phonetic": "/həˈraɪzn/",
    "pos": "n.",
    "meaning": "地平线； 眼界， 视野（常复数）",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然生态、地理环境与动植物】",
    "analysis_type": "构词",
    "analysis": "源自希腊语 horizon kyklos（划定视野极限） -> 天地相交的视线边界 -> 地平线。"
  },
  {
    "word": "ignite",
    "phonetic": "/ɪɡˈnaɪt/",
    "pos": "v.",
    "meaning": "点燃， 使燃烧； 激起， 引发（热潮/争议）",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "源自拉丁词根 ignis（火） + -ite（动词后缀） -> 引火上身点燃火苗 -> 点燃，使燃烧。"
  },
  {
    "word": "innocent",
    "phonetic": "/ˈɪnəsnt/",
    "pos": "adj./n.",
    "meaning": "清白的， 无罪的； 天真无邪的； 无辜者",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "in-（不） + noc-（伤害） + -ent（形容词后缀） -> 清白的，无罪的。"
  },
  {
    "word": "insect",
    "phonetic": "/ˈɪnsekt/",
    "pos": "n.",
    "meaning": "昆虫，虫子；微不足道遭人鄙视之徒",
    "part": "第一部分：超级核心母词族",
    "group": "【30. sec / sect 切/割】",
    "analysis_type": "构词",
    "analysis": "in-（切入） + sect-（切割割开） -> 昆虫，虫子。"
  },
  {
    "word": "invariably",
    "phonetic": "/ɪnˈveəriəbli/",
    "pos": "adv.",
    "meaning": "不变地， 始终如一地； 总是",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "in-（不） + vary（改变） + -able（能…的） + -ly，引申指不变地 -> 不变地，始终如一地。"
  },
  {
    "word": "jungle",
    "phonetic": "/ˈdʒʌŋɡl/",
    "pos": "n.",
    "meaning": "丛林， 热带密林； 险恶环境",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然地理、动植物与环境保护】",
    "analysis_type": "构词",
    "analysis": "源自梵语 jangala（荒野） -> 丛林，热带密林。"
  },
  {
    "word": "kettle",
    "phonetic": "/ˈketl/",
    "pos": "n.",
    "meaning": "水壶， 水汽壶",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "族借自词根 catillus（深浅平底烧煮） -> 水壶，水汽壶。"
  },
  {
    "word": "label",
    "phonetic": "/ˈleɪbl/",
    "pos": "n./vt.",
    "meaning": "标签， 标牌； 加标签于； 把…贴上标签归类",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "本义指“挂在衣服或包” -> 标明名称价格成分的铭牌 -> 标签，标牌。"
  },
  {
    "word": "landlord",
    "phonetic": "/ˈlændlɔːd/",
    "pos": "n.",
    "meaning": "地主， 房东",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "land（土地） + lord（领主） -> 地主，房东。"
  },
  {
    "word": "lawn",
    "phonetic": "/lɔːn/",
    "pos": "n.",
    "meaning": "草坪， 草地",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然生态、地理环境与动植物】",
    "analysis_type": "构词",
    "analysis": "本义指“开阔林间空地” -> 草坪，草地。"
  },
  {
    "word": "leadership",
    "phonetic": "/ˈliːdəʃɪp/",
    "pos": "n.",
    "meaning": "领导能力， 领导地位； 领导层",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "leader（领路人） + -ship（状态） -> 领导能力，领导地位。"
  },
  {
    "word": "light",
    "phonetic": "/laɪt/",
    "pos": "n./adj./v.",
    "meaning": "光线， 光芒； 轻的， 轻松的； 点燃， 照亮",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "源自词根意为“发光” -> 照彻黑暗的物理辐射 -> 光线，光芒。"
  },
  {
    "word": "lightning",
    "phonetic": "/ˈlaɪtnɪŋ/",
    "pos": "n.",
    "meaning": "闪电； 急如闪电的",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然生态、地理环境与动植物】",
    "analysis_type": "构词",
    "analysis": "lighten（闪耀放光） + -ing（动名词后缀） -> 闪电。"
  },
  {
    "word": "liquid",
    "phonetic": "/ˈlɪkwɪd/",
    "pos": "n./adj.",
    "meaning": "液体，流体；液态的，液化的；流动性极佳易于变现的",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然生态、地理环境与动植物】",
    "analysis_type": "构词",
    "analysis": "源自拉丁词根 liquere（像融化的冰雪） -> 液体，流体。"
  },
  {
    "word": "march",
    "phonetic": "/mɑːtʃ/",
    "pos": "v./n.",
    "meaning": "行进， 齐步前进； 示威游行； 三月",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "与 mark（边界印记）同源 -> 行进，齐步前进。"
  },
  {
    "word": "marine",
    "phonetic": "/məˈriːn/",
    "pos": "adj./n.",
    "meaning": "海洋的； 海产的 n. 水兵",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然地理、动植物与环境保护】",
    "analysis_type": "构词",
    "analysis": "mar-（海洋） + -ine（形容词后缀） -> 海洋的。"
  },
  {
    "word": "melt",
    "phonetic": "/melt/",
    "pos": "v.",
    "meaning": "熔化， 融化； 消散， 软化",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "同源（变软） -> 熔化，融化。"
  },
  {
    "word": "moist",
    "phonetic": "/mɔɪst/",
    "pos": "adj.",
    "meaning": "湿润的， 微湿的； 多雨潮湿的",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然生态、地理环境与动植物】",
    "analysis_type": "构词",
    "analysis": "本义指“受水分浸润微” -> 湿润的，微湿的。"
  },
  {
    "word": "moon",
    "phonetic": "/muːn/",
    "pos": "n.",
    "meaning": "月亮， 月球； 卫星",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然生态、地理环境与动植物】",
    "analysis_type": "构词",
    "analysis": "源自词根意为“测量” -> 月亮，月球。"
  },
  {
    "word": "mud",
    "phonetic": "/mʌd/",
    "pos": "n.",
    "meaning": "泥， 泥浆， 淤泥",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然生态、地理环境与动植物】",
    "analysis_type": "构词",
    "analysis": "本义指“水土交融而成” -> 泥，泥浆。"
  },
  {
    "word": "naive",
    "phonetic": "/naɪˈiːv/",
    "pos": "adj.",
    "meaning": "天真的， 幼稚的； 缺乏世俗经验的",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "词根 nativus（天然生成的） -> 天真的，幼稚的。"
  },
  {
    "word": "overdraw",
    "phonetic": "/ˌəʊvəˈdrɔː/",
    "pos": "v.",
    "meaning": "透支（账户）； 夸张， 夸大其词",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "over-（超过极限） + draw（提取） -> 透支（账户）。"
  },
  {
    "word": "paste",
    "phonetic": "/peɪst/",
    "pos": "n./vt.",
    "meaning": "面团； 膏状物， 糊状物； 粘贴",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "源自希腊语 paste（面粉与水混合） -> 面团。"
  },
  {
    "word": "perfume",
    "phonetic": "/ˈpɜːfjuːm/",
    "pos": "n./vt.",
    "meaning": "香水； 芳香； 使散发香气",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "per-（完全） + fume（烟雾） -> 香水。"
  },
  {
    "word": "pesticide",
    "phonetic": "/ˈpestɪsaɪd/",
    "pos": "n.",
    "meaning": "杀虫剂， 农药",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然生态、地理环境与动植物】",
    "analysis_type": "构词",
    "analysis": "pest（害虫） + -i- + cide（杀灭） -> 杀虫剂，农药。"
  },
  {
    "word": "pirate",
    "phonetic": "/ˈpaɪrət/",
    "pos": "n./vt.",
    "meaning": "海盗； 侵犯版权者； 盗印， 非法复制",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "源自希腊语 peirates（尝试打劫冒险） -> 海盗。"
  },
  {
    "word": "plough",
    "phonetic": "/plaʊ/",
    "pos": "n./v.",
    "meaning": "犁； 耕地， 犁田； 艰难费力地前进",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然生态、地理环境与动植物】",
    "analysis_type": "构词",
    "analysis": "词根族核心意象 -> 翻动板结土层以备春播 -> 犁。"
  },
  {
    "word": "pollute",
    "phonetic": "/pəˈluːt/",
    "pos": "vt.",
    "meaning": "弄脏， 污染； 败坏",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然地理、动植物与环境保护】",
    "analysis_type": "构词",
    "analysis": "词根 -> 弄脏，污染。"
  },
  {
    "word": "pollution",
    "phonetic": "/pəˈluːʃn/",
    "pos": "n.",
    "meaning": "污染； 污染物",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然地理、动植物与环境保护】",
    "analysis_type": "构词",
    "analysis": "pol-（pro- 向） + lut-（污泥） + -ion，引申指污染 -> 污染。"
  },
  {
    "word": "prey",
    "phonetic": "/preɪ/",
    "pos": "n./vi.",
    "meaning": "猎物； 捕食 vi. 捕食（on）",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然地理、动植物与环境保护】",
    "analysis_type": "构词",
    "analysis": "本义指“战利品” -> 猎物。"
  },
  {
    "word": "randomly",
    "phonetic": "/ˈrændəmli/",
    "pos": "adv.",
    "meaning": "随机地， 随意地； 未预先选定地",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "random（随机的） + -ly（副词后缀） -> 随机地，随意地。"
  },
  {
    "word": "range",
    "phonetic": "/reɪndʒ/",
    "pos": "n./v.",
    "meaning": "n. （山）脉；范围，幅度 vi. （在一定范围内）变化，变动 n. 射程",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "与 rank（军阶）同源 -> 范围，幅度。"
  },
  {
    "word": "raw",
    "phonetic": "/rɔː/",
    "pos": "adj.",
    "meaning": "生的，未经烹煮的；原始未加工的；未经训练的新手",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "同源（带血生肉） -> 保留天然原始野性状态的 -> 生的，未经烹煮的。"
  },
  {
    "word": "region",
    "phonetic": "/ˈriːdʒən/",
    "pos": "n.",
    "meaning": "地区，区域；行政大区；部位，特定身体解剖区域",
    "part": "第二部分：高频专业词根族",
    "group": "【62. reg / rig / rect 正/直/统治】",
    "analysis_type": "构词",
    "analysis": "reg-（统治） + -ion（名词后缀） -> 地区，区域。"
  },
  {
    "word": "resort",
    "phonetic": "/rɪˈzɔːt/",
    "pos": "n./vi.",
    "meaning": "诉诸，求助于（to）；度假胜地，旅游区",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "re-（再） + sort-（外出求援） -> 别无他法只能转身寻求该手段帮助 -> 诉诸，求助于（to）。"
  },
  {
    "word": "rot",
    "phonetic": "/rɒt/",
    "pos": "v./n.",
    "meaning": "腐烂， 腐败； 腐朽， 腐烂过程",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然生态、地理环境与动植物】",
    "analysis_type": "构词",
    "analysis": "词根族核心意象 -> 腐烂，腐败。"
  },
  {
    "word": "rotate",
    "phonetic": "/rəʊˈteɪt/",
    "pos": "v.",
    "meaning": "旋转， 转动； 轮流",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "rot-（车轮） + -ate（动词后缀） -> 旋转，转动。"
  },
  {
    "word": "ruin",
    "phonetic": "/ˈruːɪn/",
    "pos": "vt./n.",
    "meaning": "毁坏， 破坏； 毁灭， 废墟， 遗迹（常复数）",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "源自拉丁词根 ruere（崩塌） -> 毁坏，破坏。"
  },
  {
    "word": "satellite",
    "phonetic": "/ˈsætəlaɪt/",
    "pos": "n.",
    "meaning": "人造卫星； 天然卫星（如月球）； 卫星国",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "词根 satelles（形影不离贴身） -> 人造卫星。"
  },
  {
    "word": "seal",
    "phonetic": "/siːl/",
    "pos": "n./vt.",
    "meaning": "海豹； 印章， 封条； 封上， 盖印； 封存， 确定",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然生态、地理环境与动植物】",
    "analysis_type": "构词",
    "analysis": "词根核心意象引申 -> 海豹。"
  },
  {
    "word": "setting",
    "phonetic": "/ˈsetɪŋ/",
    "pos": "n.",
    "meaning": "环境， 背景； 文学叙事背景； 安装配置",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "set（放置） + -ing（动名词后缀） -> 环境，背景。"
  },
  {
    "word": "shade",
    "phonetic": "/ʃeɪd/",
    "pos": "n./vt.",
    "meaning": "阴凉处， 遮阳处； 色调， 浓淡深浅； 遮蔽， 遮光",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然生态、地理环境与动植物】",
    "analysis_type": "构词",
    "analysis": "本义指“阴影” -> 阴凉处，遮阳处。"
  },
  {
    "word": "shrink",
    "phonetic": "/ʃrɪŋk/",
    "pos": "v./n.",
    "meaning": "收缩， 缩小； 畏缩， 退缩",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "词根族核心意象 -> 收缩，缩小。"
  },
  {
    "word": "sightseeing",
    "phonetic": "/ˈsaɪtsiːɪŋ/",
    "pos": "n.",
    "meaning": "观光， 游览风景",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "sight（景观） + see（看） + -ing，引申指观光 -> 观光，游览风景。"
  },
  {
    "word": "skyline",
    "phonetic": "/ˈskaɪlaɪn/",
    "pos": "n.",
    "meaning": "天际线， 城市建筑轮廓线",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "sky（天空） + line（线条） -> 天际线，城市建筑轮廓线。"
  },
  {
    "word": "solar",
    "phonetic": "/ˈsəʊlə(r)/",
    "pos": "adj.",
    "meaning": "太阳的， 太阳能的",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然地理、动植物与环境保护】",
    "analysis_type": "构词",
    "analysis": "sol-（太阳） + -ar（形容词后缀） -> 太阳的，太阳能的。"
  },
  {
    "word": "sparkle",
    "phonetic": "/ˈspɑːkl/",
    "pos": "vi./n.",
    "meaning": "闪耀， 闪烁； 才智焕发； 火花， 闪光",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "spark（火星） + -le（反复动作小后） -> 闪耀，闪烁。"
  },
  {
    "word": "spot",
    "phonetic": "/spɒt/",
    "pos": "n./vt.",
    "meaning": "斑点， 污点； 地点， 场所； 发现， 看出； 处于困境",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "本义指“衣服上的一小” -> 斑点，污点。"
  },
  {
    "word": "steam",
    "phonetic": "/stiːm/",
    "pos": "n./v.",
    "meaning": "水蒸气， 蒸汽； 冒热气； 用蒸汽蒸煮； 疾驰行驶",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "本义指“热气升腾散发” -> 水蒸气，蒸汽。"
  },
  {
    "word": "straw",
    "phonetic": "/strɔː/",
    "pos": "n.",
    "meaning": "麦秆， 稻草； 吸管； 微不足道之物（预兆）",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然生态、地理环境与动植物】",
    "analysis_type": "构词",
    "analysis": "源自词根意为“铺展” -> 麦秆，稻草。"
  },
  {
    "word": "sunlight",
    "phonetic": "/ˈsʌnlaɪt/",
    "pos": "n.",
    "meaning": "日光， 阳光",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然地理、动植物与环境保护】",
    "analysis_type": "构词",
    "analysis": "sun（太阳） + light（光辉） -> 日光，阳光。"
  },
  {
    "word": "sunset",
    "phonetic": "/ˈsʌnset/",
    "pos": "n.",
    "meaning": "日落， 傍晚； 晚霞， 晚年衰退期",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然生态、地理环境与动植物】",
    "analysis_type": "构词",
    "analysis": "sun（太阳） + set（下沉） -> 日落，傍晚。"
  },
  {
    "word": "surface",
    "phonetic": "/ˈsɜːfɪs/",
    "pos": "n./v./adj.",
    "meaning": "表面，表层；浮出水面，水下潜水器升至水面；显露暴露，潜伏矛盾彻底浮现出来",
    "part": "第二部分：高频专业词根族",
    "group": "【47. fac / fici / front 脸/面】",
    "analysis_type": "构词",
    "analysis": "sur-（在…上方） + face（面） -> 表面，表层。"
  },
  {
    "word": "sway",
    "phonetic": "/sweɪ/",
    "pos": "v./n.",
    "meaning": "摇摆， 摇晃； 左右， 施加统治影响力； 摇摆动摇",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "词根族核心意象 -> 摇摆，摇晃。"
  },
  {
    "word": "swing",
    "phonetic": "/swɪŋ/",
    "pos": "v./n.",
    "meaning": "摆动， 摇摆； 剧烈转向改变； 秋千； 大幅波动",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "核心意象为“挥舞” -> 摆动，摇摆。"
  },
  {
    "word": "tag",
    "phonetic": "/tæɡ/",
    "pos": "n./vt.",
    "meaning": "标签， 标牌； 附加语； 给…贴标签； 追踪标记（尾随）",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "本义指“服装或包裹悬” -> 标明属性代码便于溯源管理 -> 标签，标牌。"
  },
  {
    "word": "talent",
    "phonetic": "/ˈtælənt/",
    "pos": "n.",
    "meaning": "天赋， 天资； 天才人物； 人才队伍",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "源自希腊语 talanton（古代贵重金银） -> 天赋，天资。"
  },
  {
    "word": "tap",
    "phonetic": "/tæp/",
    "pos": "v./n.",
    "meaning": "轻敲， 轻拍； 开发利用（潜能/资源）； 水龙头； 轻叩声",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "词根核心意象引申 -> 轻敲，轻拍。"
  },
  {
    "word": "territory",
    "phonetic": "/ˈterətri/",
    "pos": "n.",
    "meaning": "领土， 版图； 管辖领地； 专业业务领地",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "terr-（土地） + -itory（场所） -> 领土，版图。"
  },
  {
    "word": "terror",
    "phonetic": "/ˈterə(r)/",
    "pos": "n.",
    "meaning": "极度恐惧， 惊恐； 恐怖活动， 恐怖主义",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "同源（颤抖） -> 极度恐惧，惊恐。"
  },
  {
    "word": "tide",
    "phonetic": "/taɪd/",
    "pos": "n./v.",
    "meaning": "潮汐， 潮水； 潮流 v. 渡过",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然地理、动植物与环境保护】",
    "analysis_type": "构词",
    "analysis": "源自词根核心本义 -> 潮汐，潮水。"
  },
  {
    "word": "tissue",
    "phonetic": "/ˈtɪʃuː/",
    "pos": "n.",
    "meaning": "（动植物细胞）组织； 纸巾， 面巾纸； 薄织物",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "本义指“交织而成的精” -> （动植物细胞）组织。"
  },
  {
    "word": "tourist",
    "phonetic": "/ˈtʊərɪst/",
    "pos": "n.",
    "meaning": "旅游者， 观光客",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "tour（周游） + -ist（人） -> 旅游者，观光客。"
  },
  {
    "word": "trash",
    "phonetic": "/træʃ/",
    "pos": "n./vt.",
    "meaning": "垃圾，生活废弃物废品；毫无文学艺术价值的平庸垃圾烂作；彻底捣毁，砸烂破坏",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "本义指“原本指在原始” -> 垃圾，生活废弃物废品。"
  },
  {
    "word": "tunnel",
    "phonetic": "/ˈtʌnl/",
    "pos": "n./v.",
    "meaning": "隧道， 地道 v. 挖地道",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "本义指“盛酒的大木桶” -> 隧道，地道。"
  },
  {
    "word": "twinkle",
    "phonetic": "/ˈtwɪŋkl/",
    "pos": "vi./n.",
    "meaning": "闪烁， 闪耀； 眨眼； 闪光， 闪亮眼神",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "本义指“快速眨眼” -> 闪烁，闪耀。"
  },
  {
    "word": "volcano",
    "phonetic": "/vɒlˈkeɪnəʊ/",
    "pos": "n.",
    "meaning": "火山",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然地理、动植物与环境保护】",
    "analysis_type": "构词",
    "analysis": "源自罗马神话火神与锻造之神沃尔坎（Vulcan） -> 火山。"
  },
  {
    "word": "voyage",
    "phonetic": "/ˈvɔɪɪdʒ/",
    "pos": "n./vi.",
    "meaning": "航行， 航海 vi. 航行",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "本义指“旅行” -> 航行，航海。"
  },
  {
    "word": "wave",
    "phonetic": "/weɪv/",
    "pos": "n./v.",
    "meaning": "波浪， 波涛； 挥手致意； 波动起伏； 挥动（手/旗帜）",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "词根族核心意象 -> 波浪，波涛。"
  },
  {
    "word": "weed",
    "phonetic": "/wiːd/",
    "pos": "n./v.",
    "meaning": "杂草， 野草； 清除杂草， 除草； 剔除淘汰",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然生态、地理环境与动植物】",
    "analysis_type": "构词",
    "analysis": "本义指“无用乱生的田” -> 杂草，野草。"
  },
  {
    "word": "wheat",
    "phonetic": "/wiːt/",
    "pos": "n.",
    "meaning": "小麦， 小麦粒",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然生态、地理环境与动植物】",
    "analysis_type": "构词",
    "analysis": "同源（明亮） -> 小麦，小麦粒。"
  },
  {
    "word": "wicked",
    "phonetic": "/ˈwɪkɪd/",
    "pos": "adj.",
    "meaning": "邪恶的， 恶毒的； 极坏的； 恶劣的",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "本义指“巫师” -> 邪恶的，恶毒的。"
  },
  {
    "word": "withdraw",
    "phonetic": "/wɪðˈdrɔː/",
    "pos": "v.",
    "meaning": "撤回， 撤销； 取款； 退隐， 退出（比赛/竞选）",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "with-（向后） + draw（拉出） -> 撤回，撤销。"
  },
  {
    "word": "wooden",
    "phonetic": "/ˈwʊdn/",
    "pos": "adj.",
    "meaning": "木质的， 木头的； 呆板的， 生硬僵化的",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "wood（木材） + -en（材质形容词后） -> 木质的，木头的。"
  },
  {
    "word": "worm",
    "phonetic": "/wɜːm/",
    "pos": "n./v.",
    "meaning": "蠕虫， 虫； 小人； 蠕动， 曲折爬行； 慢慢探听",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然生态、地理环境与动植物】",
    "analysis_type": "构词",
    "analysis": "同源（弯曲蠕动） -> 蠕虫，虫。"
  },
  {
    "word": "aboard",
    "phonetic": "/əˈbɔːd/",
    "pos": "adv./prep.",
    "meaning": "在（船、飞机、列车）上， 上船/登机",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "a-（在…之上） + board（甲板） -> 在（船，飞机。"
  },
  {
    "word": "abroad",
    "phonetic": "/əˈbrɔːd/",
    "pos": "adv.",
    "meaning": "到国外， 在海外； 广泛流传",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "a-（处于…状态） + broad（广阔天地的） -> 到国外，在海外。"
  },
  {
    "word": "accompany",
    "phonetic": "/əˈkʌmpəni/",
    "pos": "vt.",
    "meaning": "陪伴， 陪同； 伴随",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "ac-（ad- 朝向） + company（同伴） -> 与好友并肩同行陪伴在侧 -> 陪伴，陪同。"
  },
  {
    "word": "accountant",
    "phonetic": "/əˈkaʊntənt/",
    "pos": "n.",
    "meaning": "会计师， 出纳",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "account（会计账目） + -ant（人） -> 会计师，出纳。"
  },
  {
    "word": "accumulate",
    "phonetic": "/əˈkjuːmjəleɪt/",
    "pos": "vt./vi.",
    "meaning": "积聚， 堆积； 积累",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "ac-（ad- 朝向） + cumul-（堆叠） + -ate（动词后缀） -> 积聚，堆积。"
  },
  {
    "word": "address",
    "phonetic": "/əˈdres/",
    "pos": "n./vt.",
    "meaning": "vt. 解决，处理，应对（难题）；对…发表演说 n. 演说，演讲；地址",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "ad-（朝向） + dress（直/引导） -> 迎面直面问题并着手解决 -> 解决，处理。"
  },
  {
    "word": "aircraft",
    "phonetic": "/ˈeəkrɑːft/",
    "pos": "n.",
    "meaning": "飞机， 航空器（单复同）",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "air（空中） + craft（工艺） -> 飞机，航空器（单复同）。"
  },
  {
    "word": "airline",
    "phonetic": "/ˈeəlaɪn/",
    "pos": "n.",
    "meaning": "航空公司； 航线",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "air（空中） + line（航线） -> 航空公司。"
  },
  {
    "word": "airport",
    "phonetic": "/ˈeəpɔːt/",
    "pos": "n.",
    "meaning": "机场， 航空港",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "air（空中） + port（口岸） -> 机场，航空港。"
  },
  {
    "word": "ambulance",
    "phonetic": "/ˈæmbjələns/",
    "pos": "n.",
    "meaning": "救护车",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、医疗生理与情绪心理】",
    "analysis_type": "构词",
    "analysis": "源自法语 hôpital ambulant（流动战地野战） -> 救护车。"
  },
  {
    "word": "apartment",
    "phonetic": "/əˈpɑːtmənt/",
    "pos": "n.",
    "meaning": "公寓套房， 单元住宅",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "a- + part（部分） + -ment（名词后缀） -> 公寓套房，单元住宅。"
  },
  {
    "word": "author",
    "phonetic": "/ˈɔːθə(r)/",
    "pos": "n./vt.",
    "meaning": "作者， 作家 vt. 著作",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "词根 auctor（创造者） -> 作者，作家。"
  },
  {
    "word": "automobile",
    "phonetic": "/ˈɔːtəməbiːl/",
    "pos": "n.",
    "meaning": "汽车， 机动车",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "auto-（自己） + mobile（可移动的） -> 汽车，机动车。"
  },
  {
    "word": "aviation",
    "phonetic": "/ˌeɪviˈeɪʃn/",
    "pos": "n.",
    "meaning": "航空， 航空学； 飞行术",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "avi-（飞鸟） + -ation（名词后缀） -> 航空，航空学。"
  },
  {
    "word": "baggage",
    "phonetic": "/ˈbæɡɪdʒ/",
    "pos": "n.",
    "meaning": "行李（总称）",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "本义指“行囊” -> 行李（总称）。"
  },
  {
    "word": "ban",
    "phonetic": "/bæn/",
    "pos": "vt./n.",
    "meaning": "禁止， 取缔 n. 禁令",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "源自词根核心本义 -> 禁止，取缔。"
  },
  {
    "word": "band",
    "phonetic": "/bænd/",
    "pos": "n./v.",
    "meaning": "乐队； 带子， 箍； 一群人； 联合聚合起来",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "与 bind（捆绑）同源 -> 志等 -> 乐队。"
  },
  {
    "word": "bandage",
    "phonetic": "/ˈbændɪdʒ/",
    "pos": "n./vt.",
    "meaning": "绷带 vt. 用绷带包扎",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、医疗生理与情绪心理】",
    "analysis_type": "构词",
    "analysis": "band（布条） + -age（名词） -> 绷带，vt.。"
  },
  {
    "word": "barber",
    "phonetic": "/ˈbɑːbə(r)/",
    "pos": "n.",
    "meaning": "理发师（尤指男士理发修面师）",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "词根 barba（胡须） -> 理发师（尤指男士理发修面师）。"
  },
  {
    "word": "bypass",
    "phonetic": "/ˈbaɪpɑːs/",
    "pos": "n./vt.",
    "meaning": "旁路， 绕道公路 vt. 绕过",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "by-（在旁） + pass（通过） -> 旁路，绕道公路。"
  },
  {
    "word": "cabin",
    "phonetic": "/ˈkæbɪn/",
    "pos": "n.",
    "meaning": "船舱； 机舱； 小木屋",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "源自晚期词根 capanna（茅舍） -> 船舱。"
  },
  {
    "word": "cabinet",
    "phonetic": "/ˈkæbɪnɪt/",
    "pos": "n.",
    "meaning": "内阁； 储物柜， 陈列柜",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "cabin（小木屋） + -et（小后缀） -> 内阁。"
  },
  {
    "word": "camp",
    "phonetic": "/kæmp/",
    "pos": "n./v.",
    "meaning": "营地，野外营地帐篷营；阵营，具有相同意识形态派系集团；野营，在户外扎营宿营",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "源自拉丁词根 campus（原本平整开阔） -> 营地，野外营地帐篷营。"
  },
  {
    "word": "campaign",
    "phonetic": "/kæmˈpeɪn/",
    "pos": "n./vi.",
    "meaning": "竞选运动； 战役 vi. 参加活动",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "本义指“开阔原野平原” -> 竞选运动。"
  },
  {
    "word": "canteen",
    "phonetic": "/kænˈtiːn/",
    "pos": "n.",
    "meaning": "（大学、工厂或军队）食堂， 小卖部； 随身便携军用水壶",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "源自意大利语 cantina（地窖） -> （大学、工厂或军队）食堂 -> （大学，工厂或军队）食堂。"
  },
  {
    "word": "career",
    "phonetic": "/kəˈrɪə(r)/",
    "pos": "n.",
    "meaning": "职业， 生涯",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "源自晚期词根 cararia（战车轨道） -> 职业，生涯。"
  },
  {
    "word": "cargo",
    "phonetic": "/ˈkɑːɡəʊ/",
    "pos": "n.",
    "meaning": "船货， 货物",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "carg-（装载） + -o（名词后缀） -> 船货，货物。"
  },
  {
    "word": "carpenter",
    "phonetic": "/ˈkɑːpəntə(r)/",
    "pos": "n.",
    "meaning": "木匠， 木工",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "源自晚期词根 carpentarius（马车制造工匠） -> 木匠，木工。"
  },
  {
    "word": "carpet",
    "phonetic": "/ˈkɑːpɪt/",
    "pos": "n./vt.",
    "meaning": "地毯； 厚厚覆盖的一层； 铺上地毯",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "词根 carpere（梳理羊毛） -> 地毯。"
  },
  {
    "word": "carriage",
    "phonetic": "/ˈkærɪdʒ/",
    "pos": "n.",
    "meaning": "（火车）客车厢； 四轮马车",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "carr-（两轮战车） + -i- + -age（名词后缀） -> （火车）客车厢。"
  },
  {
    "word": "cart",
    "phonetic": "/kɑːt/",
    "pos": "n./vt.",
    "meaning": "手推车； 马车 vt. 用车运",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "源自古诺尔斯语 kartr（两轮运货小推） -> 手推车。"
  },
  {
    "word": "checkpoint",
    "phonetic": "/ˈtʃekpɔɪnt/",
    "pos": "n.",
    "meaning": "检查站， 关卡； 核查检验点",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "check（核对） + point（关键节点） -> 检查站，关卡。"
  },
  {
    "word": "chore",
    "phonetic": "/tʃɔː(r)/",
    "pos": "n.",
    "meaning": "家庭杂务， 琐事； 讨厌繁重乏味的差事",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "本义 / char（转动一下） -> 家庭杂务，琐事。"
  },
  {
    "word": "citizen",
    "phonetic": "/ˈsɪtɪzn/",
    "pos": "n.",
    "meaning": "公民； 市民， 城镇居民",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "cit-（城市） + -zen（人） -> 公民。"
  },
  {
    "word": "civil",
    "phonetic": "/ˈsɪvl/",
    "pos": "adj.",
    "meaning": "国民的； 民事的； 文明的",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "civ-（公民） + -il（形容词后缀） -> 国民的。"
  },
  {
    "word": "civilization",
    "phonetic": "/ˌsɪvəlaɪˈzeɪʃn/",
    "pos": "n.",
    "meaning": "文明， 文化； 文明社会",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "civilize（使开化教化） + -ation（名词后缀） -> 文明，文化。"
  },
  {
    "word": "cohesion",
    "phonetic": "/kəʊˈhiːʒn/",
    "pos": "n.",
    "meaning": "凝聚力， 结合； 物理内聚力",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "co-（共同） + hes-（粘附） + -ion（名词后缀） -> 凝聚力，结合。"
  },
  {
    "word": "colleague",
    "phonetic": "/ˈkɒliːɡ/",
    "pos": "n.",
    "meaning": "同事， 同僚",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "col-（com- 共） + league（结盟） -> 同事，同僚。"
  },
  {
    "word": "column",
    "phonetic": "/ˈkɒləm/",
    "pos": "n.",
    "meaning": "圆柱， 立柱； 专栏（报刊）； 纵队， 列",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "词根 columna（高耸挺立的圆） -> 圆柱，立柱。"
  },
  {
    "word": "common",
    "phonetic": "/ˈkɒmən/",
    "pos": "adj./n.",
    "meaning": "普通的， 平常的； 共同的",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "com-（共同） + mun-（公共义务） -> 普通的，平常的。"
  },
  {
    "word": "commonplace",
    "phonetic": "/ˈkɒmənpleɪs/",
    "pos": "adj./n.",
    "meaning": "司空见惯的， 平淡无奇的； 平庸老套的言辞",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "common（普遍的） + place（论题） -> 司空见惯的，平淡无奇的。"
  },
  {
    "word": "correspond",
    "phonetic": "/ˌkɒrəˈspɒnd/",
    "pos": "vi.",
    "meaning": "相符合， 相一致； 通信， 通书信",
    "part": "第一部分：超级核心母词族",
    "group": "【36. spon / spond 约定/回应/保证】",
    "analysis_type": "构词",
    "analysis": "cor-（共同） + respond（回应） -> 相符合，相一致。"
  },
  {
    "word": "cottage",
    "phonetic": "/ˈkɒtɪdʒ/",
    "pos": "n.",
    "meaning": "乡间小屋， 农舍； 度假别墅",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "cot（小屋） + -age（名词后缀） -> 乡间小屋，农舍。"
  },
  {
    "word": "council",
    "phonetic": "/ˈkaʊnsl/",
    "pos": "n.",
    "meaning": "理事会，委员会；地方自治议会；代表协商磋商会",
    "part": "第一部分：超级核心母词族",
    "group": "【23. cal / claim / clam 呼喊/叫喊】",
    "analysis_type": "构词",
    "analysis": "coun-（共同） + cil-（呼喊召集） -> 理事会，委员会。"
  },
  {
    "word": "country",
    "phonetic": "/ˈkʌntri/",
    "pos": "n.",
    "meaning": "国家； 国土； 乡下， 农村",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "源自晚期拉丁语 terra contrata（展现在视野前） -> 国家。"
  },
  {
    "word": "county",
    "phonetic": "/ˈkaʊnti/",
    "pos": "n.",
    "meaning": "（英国的）郡； （美国的）县， 行政县",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "count（伯爵） + -y（领地后缀） -> （英国的）郡。"
  },
  {
    "word": "court",
    "phonetic": "/kɔːt/",
    "pos": "n./vt.",
    "meaning": "vt. 招致（危险/灾祸），招惹；追求，献殷勤 n. 法院，法庭；球场",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "词根 hort（围拢的庭院） -> 召集众人开庭裁决之地 -> 法庭，法院。"
  },
  {
    "word": "crawl",
    "phonetic": "/krɔːl/",
    "pos": "vi./n.",
    "meaning": "爬行， 匍匐前进； 缓慢费力地移动； 自由泳爬泳",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "本义指“腹部贴近地面” -> 爬行，匍匐前进。"
  },
  {
    "word": "crew",
    "phonetic": "/kruː/",
    "pos": "n.",
    "meaning": "全体机组人员，全体船员舰员；齐心协力的一帮伙伴队伍",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "本义指“原指在战舰出” -> 全体机组人员，全体船员舰员。"
  },
  {
    "word": "crime",
    "phonetic": "/kraɪm/",
    "pos": "n.",
    "meaning": "罪行， 犯罪",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "词根 crimen（司法判决） -> 罪行，犯罪。"
  },
  {
    "word": "critic",
    "phonetic": "/ˈkrɪtɪk/",
    "pos": "n.",
    "meaning": "批评家， 评论家",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "crit-（判断） + -ic（人） -> 批评家，评论家。"
  },
  {
    "word": "curb",
    "phonetic": "/kɜːb/",
    "pos": "vt./n.",
    "meaning": "控制， 抑制， 勒住； 路缘， 马路牙子",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "本义指“弯曲” -> 控制，抑制。"
  },
  {
    "word": "delegate",
    "phonetic": "/ˈdelɪɡət/",
    "pos": "n./vt.",
    "meaning": "n. 代表 vt. 委派， 授权",
    "part": "第二部分：高频专业词根族",
    "group": "【67. leg / lect / lig 收集/挑选/阅读/法律】",
    "analysis_type": "构词",
    "analysis": "de-（向下） + leg-（委派） + -ate，受命代行职权 -> 代表。"
  },
  {
    "word": "democratic",
    "phonetic": "/ˌdeməˈkrætɪk/",
    "pos": "adj.",
    "meaning": "民主的， 民主政体的； 人人平等的",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "demo-（人民） + krat-（统治） + -ic（形容词后缀） -> 民主的，民主政体的。"
  },
  {
    "word": "discard",
    "phonetic": "/dɪˈskɑːd/",
    "pos": "vt./n.",
    "meaning": "丢弃， 抛弃， 淘汰； 被丢弃的人或物",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "dis-（离开） + card（纸牌） -> 丢弃，抛弃。"
  },
  {
    "word": "domestic",
    "phonetic": "/dəˈmestɪk/",
    "pos": "adj./n.",
    "meaning": "本国的， 国内的； 家庭内部的， 家政的； 家佣",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "dom-（家） + -estic（形容词后缀） -> 本国的，国内的。"
  },
  {
    "word": "dominant",
    "phonetic": "/ˈdɒmɪnənt/",
    "pos": "adj.",
    "meaning": "占支配主导地位的， 统治性的； 显著的",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "domin-（主人） + -ant（形容词后缀） -> 占支配主导地位的，统治性的。"
  },
  {
    "word": "downtown",
    "phonetic": "/ˌdaʊnˈtaʊn/",
    "pos": "adv./adj./n.",
    "meaning": "往/在商业中心区； 市中心的； 市中心商圈",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "down（沿着地势向低） + town（城镇） -> 往/在商业中心区 -> 往，在商业中心区。"
  },
  {
    "word": "dwell",
    "phonetic": "/dwel/",
    "pos": "vi.",
    "meaning": "居住， 栖身； 老是琢磨沉湎于",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "本义指“耽搁滞留” -> 居住，栖身。"
  },
  {
    "word": "enforce",
    "phonetic": "/ɪnˈfɔːs/",
    "pos": "vt.",
    "meaning": "实施， 执行； 强制",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "en-（使动） + force（力量） -> 实施，执行。"
  },
  {
    "word": "essential",
    "phonetic": "/ɪˈsenʃl/",
    "pos": "adj./n.",
    "meaning": "必不可少的， 极其重要的； 本质的； 必需品",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "ess-（存在） + -ent + -ial（形容词后缀） -> 必不可少的，极其重要的。"
  },
  {
    "word": "execute",
    "phonetic": "/ˈeksɪkjuːt/",
    "pos": "vt.",
    "meaning": "贯彻执行， 实施； 处决死刑； 精准完成（高难动作）",
    "part": "第一部分：超级核心母词族",
    "group": "【30. sequ / secut 跟随】",
    "analysis_type": "构词",
    "analysis": "ex-（彻底从头到尾） + secut（紧紧跟随） -> 贯彻执行，实施。"
  },
  {
    "word": "expert",
    "phonetic": "/ˈekspɜːt/",
    "pos": "n./adj.",
    "meaning": "专家， 行家 adj. 熟练的",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "ex-（出） + pert（尝试） -> 专家，行家。"
  },
  {
    "word": "expressway",
    "phonetic": "/ɪkˈspresweɪ/",
    "pos": "n.",
    "meaning": "高速公路",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "express（特快的） + way（道路） -> 高速公路。"
  },
  {
    "word": "fair",
    "phonetic": "/feə(r)/",
    "pos": "adj./adv./n.",
    "meaning": "公正平等的；美丽的；晴朗的",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "词根核心意象引申 -> 公正平等的。"
  },
  {
    "word": "fellow",
    "phonetic": "/ˈfeləʊ/",
    "pos": "n./adj.",
    "meaning": "同伴， 同类； 学者， 高级研究员； 同类的， 同伴的",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "feh（财产） + lag（放置） -> 同伴，同类。"
  },
  {
    "word": "female",
    "phonetic": "/ˈfiːmeɪl/",
    "pos": "adj./n.",
    "meaning": "女性的， 雌性的； 女子， 雌性动物/植物",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "词根 femella（年轻女子的昵） -> 女性的，雌性的。"
  },
  {
    "word": "firm",
    "phonetic": "/fɜːm/",
    "pos": "adj./adv./n./v.",
    "meaning": "坚定的，牢固的；商行，公司",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "firm-（坚固/稳固） -> 基础牢固稳健的机构或态度 -> 坚定的，牢固的。"
  },
  {
    "word": "fleet",
    "phonetic": "/fliːt/",
    "pos": "n./adj./vi.",
    "meaning": "舰队， 船队； 车队； 飞速疾驰的； 飞逝， 疾驰掠过",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "与 float（漂浮）同源 -> 舰队，船队。"
  },
  {
    "word": "flight",
    "phonetic": "/flaɪt/",
    "pos": "n.",
    "meaning": "飞行， 航班航程； 逃跑溃逃； 一段阶梯",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "fly（飞） + -t（名词后缀） -> 飞行，航班航程。"
  },
  {
    "word": "flock",
    "phonetic": "/flɒk/",
    "pos": "n./vi.",
    "meaning": "（鸟兽或信徒）群； 成群结队蜂拥前去",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然生态、地理环境与动植物】",
    "analysis_type": "构词",
    "analysis": "本义指“成团聚集的群” -> （鸟兽或信徒）群。"
  },
  {
    "word": "forbid",
    "phonetic": "/fəˈbɪd/",
    "pos": "vt.",
    "meaning": "明令禁止， 不准； 妨碍阻碍",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "for-（彻底离开） + bid（命令） -> 明令禁止，不准。"
  },
  {
    "word": "freeway",
    "phonetic": "/ˈfriːweɪ/",
    "pos": "n.",
    "meaning": "高速公路",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "free（自由） + way（道路） -> 高速公路。"
  },
  {
    "word": "furnish",
    "phonetic": "/ˈfɜːnɪʃ/",
    "pos": "vt.",
    "meaning": "布置装修（家具）； 提供， 供给配备",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "本义指“装配” -> 布置装修（家具）。"
  },
  {
    "word": "gang",
    "phonetic": "/ɡæŋ/",
    "pos": "n./vi.",
    "meaning": "帮派， 团伙； 一伙人， 一群朋友； 结成团伙欺凌",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "源自古诺斯语 gangr（一同行进的一） -> 帮派，团伙。"
  },
  {
    "word": "garage",
    "phonetic": "/ˈɡærɑːʒ/",
    "pos": "n./vt.",
    "meaning": "车库； 修车厂 vt. 入库",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "源自法语 garer（停放避风） -> 车库。"
  },
  {
    "word": "guilt",
    "phonetic": "/ɡɪlt/",
    "pos": "n.",
    "meaning": "内疚， 负罪感； 犯罪行为， 有罪判决",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "本义指“应受惩戒的过” -> 内疚，负罪感。"
  },
  {
    "word": "harbour",
    "phonetic": "/ˈhɑːbə(r)/",
    "pos": "n./vt.",
    "meaning": "港口，海港；避风港；心怀怀抱",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "here（军队） + beorg（避难所） -> 港口，海港。"
  },
  {
    "word": "helicopter",
    "phonetic": "/ˈhelɪkɒptə(r)/",
    "pos": "n./v.",
    "meaning": "直升机，旋翼垂直起降直升飞行器；直升机式父母；乘直升机飞赴运送",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "helico-（螺旋） + pter-（翅膀） -> 直升机，旋翼垂直起降直升飞行器。"
  },
  {
    "word": "highway",
    "phonetic": "/ˈhaɪweɪ/",
    "pos": "n.",
    "meaning": "公路， 干线公路线",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "high（高级的） + way（道路） -> 公路，干线公路线。"
  },
  {
    "word": "hostile",
    "phonetic": "/ˈhɒstaɪl/",
    "pos": "adj.",
    "meaning": "敌对的， 充满敌意的； 极度不利的， 恶劣残酷的",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "host-（敌人） + -ile（形容词后缀） -> 敌对的，充满敌意的。"
  },
  {
    "word": "household",
    "phonetic": "/ˈhaʊshəʊld/",
    "pos": "n./adj.",
    "meaning": "家庭， 一家人； 家喻户晓的人或事； 家庭的， 日常家用的",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "house（房屋） + hold（把握维系） -> 家庭，一家人。"
  },
  {
    "word": "housewife",
    "phonetic": "/ˈhaʊswaɪf/",
    "pos": "n.",
    "meaning": "家庭主妇",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "house（房屋） + wife（女主人） -> 家庭主妇。"
  },
  {
    "word": "indispensable",
    "phonetic": "/ˌɪndɪˈspensəbl/",
    "pos": "adj.",
    "meaning": "必不可少的， 绝不可或缺的",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【73. 前缀：in- / im- 否定】",
    "analysis_type": "构词",
    "analysis": "in-（不） + dis-（分开） + pens-（称重掂量） + -able（能…的） -> 必不可少的，绝不可或缺的。"
  },
  {
    "word": "jet",
    "phonetic": "/dʒet/",
    "pos": "n./v.",
    "meaning": "喷气式飞机； 喷射出来的强劲水流/气流； 喷出， 高速飞行",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "源自拉丁词根 jacere / jactare（投掷） -> 喷气式飞机。"
  },
  {
    "word": "journey",
    "phonetic": "/ˈdʒɜːni/",
    "pos": "n./vi.",
    "meaning": "旅行， 旅程； 人生成长心路历程； 去旅行， 远行",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "词根 diurnus（一天的） -> 旅行，旅程。"
  },
  {
    "word": "kilometer",
    "phonetic": "/ˈkɪləmiːtə(r)/",
    "pos": "n.",
    "meaning": "千米， 公里",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "kilo-（千） + meter（公尺） -> 千米，公里。"
  },
  {
    "word": "layer",
    "phonetic": "/ˈleɪə(r)/",
    "pos": "n./vt.",
    "meaning": "层， 层次， 阶层； 分层堆放放置",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "lay（铺设） + -er（物） -> 层，层次。"
  },
  {
    "word": "layman",
    "phonetic": "/ˈleɪmən/",
    "pos": "n.",
    "meaning": "门外汉， 非专业人员； 俗人（平信徒）",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "lay（俗人的） + man（人） -> 门外汉，非专业人员。"
  },
  {
    "word": "loyal",
    "phonetic": "/ˈlɔɪəl/",
    "pos": "adj.",
    "meaning": "忠诚的， 忠贞不渝的； 坚定义气的",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "本义指“合乎法律伦理” -> 忠诚的，忠贞不渝的。"
  },
  {
    "word": "magnetic",
    "phonetic": "/mæɡˈnetɪk/",
    "pos": "adj.",
    "meaning": "磁性的， 有磁力的； 有强烈吸引力的， 富有魅力的",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "源自小亚细亚盛产天然磁铁矿石（lodest） -> 磁性的，有磁力的。"
  },
  {
    "word": "manage",
    "phonetic": "/ˈmænɪdʒ/",
    "pos": "v.",
    "meaning": "管理， 经营操持； 设法做成， 勉力应付达成",
    "part": "第一部分：超级核心母词族",
    "group": "【32. man / manu 手】",
    "analysis_type": "构词",
    "analysis": "源自意大利语 maneggiare（在马术训练场） -> 管理，经营操持。"
  },
  {
    "word": "metropolitan",
    "phonetic": "/ˌmetrəˈpɒlɪtən/",
    "pos": "adj./n.",
    "meaning": "大都市的， 大都会圈的； 大都会居民",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "metro-（母国） + polis（城市） -> 大都市的，大都会圈的。"
  },
  {
    "word": "miracle",
    "phonetic": "/ˈmɪrəkl/",
    "pos": "n.",
    "meaning": "奇迹， 令人赞叹的奇迹； 不可思议的杰作",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "mir-（惊奇） + -acle（工具） -> 奇迹，令人赞叹的奇迹。"
  },
  {
    "word": "motel",
    "phonetic": "/məʊˈtel/",
    "pos": "n.",
    "meaning": "汽车旅馆",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "motor（汽车） + hotel（旅馆） -> 汽车与旅馆的合成词 -> 汽车旅馆。"
  },
  {
    "word": "motor",
    "phonetic": "/ˈməʊtə(r)/",
    "pos": "n./adj./v.",
    "meaning": "电动机， 马达； 汽车发动机； 机动的； 驾车出行",
    "part": "第二部分：高频专业词根族",
    "group": "【58. mot / mov / mob 动/移动】",
    "analysis_type": "构词",
    "analysis": "mot-（动） + -or（施动者） -> 电动机，马达。"
  },
  {
    "word": "motorway",
    "phonetic": "/ˈməʊtəweɪ/",
    "pos": "n.",
    "meaning": "高速公路，全封闭多车道立体互通式机动车快速干线大通道",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "motor（机动车辆） + way（道路通路） -> （英式英语专用）高速公路 -> 高速公路，全封闭多车道立体互通式机动车快速干线大通道。"
  },
  {
    "word": "navigate",
    "phonetic": "/ˈnævɪɡeɪt/",
    "pos": "v.",
    "meaning": "航行，航海；导航，精准辨明方向；顺利通过，妥善应对",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "nav-（船舶） + ag-（驱使） -> 航行，航海。"
  },
  {
    "word": "noble",
    "phonetic": "/ˈnəʊbl/",
    "pos": "adj./n.",
    "meaning": "高尚的， 崇高的； 贵族的， 身世显赫的； 贵族阶层成员",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "词根 nobilis（大名鼎鼎为人） -> 高尚的，崇高的。"
  },
  {
    "word": "palace",
    "phonetic": "/ˈpæləs/",
    "pos": "n.",
    "meaning": "王宫， 皇宫； 富丽堂皇的宏伟殿堂",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "源自古罗马七座山丘之一的帕拉蒂尼山（Mons P） -> 王宫，皇宫。"
  },
  {
    "word": "parade",
    "phonetic": "/pəˈreɪd/",
    "pos": "n./v.",
    "meaning": "游行，盛大检阅；列队行进；夸耀显摆炫耀",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "源自拉丁词根 parare（准备齐全） -> 游行，盛大检阅。"
  },
  {
    "word": "parallel",
    "phonetic": "/ˈpærəlel/",
    "pos": "adj./n./vt.",
    "meaning": "平行的；极其相似的；纬线",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "para-（平行并列） + allel-（彼此相对） -> 平行的。"
  },
  {
    "word": "parliament",
    "phonetic": "/ˈpɑːləmənt/",
    "pos": "n.",
    "meaning": "议会， 国会（尤指英联邦国家议会）",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "parle（说话） + -ment（议事机构名词） -> 议会，国会（尤指英联邦国家议会）。"
  },
  {
    "word": "passage",
    "phonetic": "/ˈpæsɪdʒ/",
    "pos": "n.",
    "meaning": "通道， 走廊； 章节， 段落； （法案的）通过",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "pass（通过） + -age（场所） -> 通道，走廊。"
  },
  {
    "word": "passenger",
    "phonetic": "/ˈpæsɪndʒə(r)/",
    "pos": "n.",
    "meaning": "乘客， 旅客",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "pass-（通行） + -en- + -ger（人） -> 乘客，旅客。"
  },
  {
    "word": "petrol",
    "phonetic": "/ˈpetrəl/",
    "pos": "n.",
    "meaning": "汽油（英式英语美式为）",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "petr-（岩石） + -ol（油） -> 汽油（英式英语美式为）。"
  },
  {
    "word": "pilot",
    "phonetic": "/ˈpaɪlət/",
    "pos": "n./v./adj.",
    "meaning": "飞行员， 领航员； 驾驶， 领航； 试验性的",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "源自希腊语 pedotes（掌控船舵者） -> 飞行员，领航员。"
  },
  {
    "word": "prosecute",
    "phonetic": "/ˈprɒsɪkjuːt/",
    "pos": "vt.",
    "meaning": "起诉， 控告； 检举， 对…提起公诉",
    "part": "第一部分：超级核心母词族",
    "group": "【30. sequ / secut 跟随】",
    "analysis_type": "构词",
    "analysis": "pro-（向前） + secut（追随） -> 起诉，控告。"
  },
  {
    "word": "public",
    "phonetic": "/ˈpʌblɪk/",
    "pos": "adj./n.",
    "meaning": "公共的， 公用的； 公开的； 公众， 民众",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "词根 publicus（人民的） -> 公共的，公用的。"
  },
  {
    "word": "publish",
    "phonetic": "/ˈpʌblɪʃ/",
    "pos": "vt.",
    "meaning": "出版， 发行； 刊登， 公开发表",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "publ-（公众） + -ish（动词后缀） -> 出版，发行。"
  },
  {
    "word": "racial",
    "phonetic": "/ˈreɪʃl/",
    "pos": "adj.",
    "meaning": "种族的， 人种的； 种族之间的",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "race（人种） + -al（形容词后缀） -> 种族的，人种的。"
  },
  {
    "word": "rare",
    "phonetic": "/reə(r)/",
    "pos": "adj.",
    "meaning": "adj. 稀有的， 罕见的； 半熟的",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "词根 rarus（稀疏的） -> 分布稀少不常见 -> 稀有的。"
  },
  {
    "word": "realm",
    "phonetic": "/relm/",
    "pos": "n.",
    "meaning": "王国， 国度； 学术或活动领域， 范围",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "本义指“王室统治的疆” -> 王国，国度。"
  },
  {
    "word": "release",
    "phonetic": "/rɪˈliːs/",
    "pos": "vt./n.",
    "meaning": "释放，放出；赦免，释放出狱使重获自由；解脱，从精神焦虑中释放解脱",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "re-（向后） + lease（松开） -> 释放，放出。"
  },
  {
    "word": "romance",
    "phonetic": "/rəʊˈmæns/",
    "pos": "n.",
    "meaning": "浪漫， 浪漫爱情； 浪漫传奇小说； 风流韵事",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "词根 Romanice（以罗马民间通） -> 浪漫，浪漫爱情。"
  },
  {
    "word": "royal",
    "phonetic": "/ˈrɔɪəl/",
    "pos": "adj./n.",
    "meaning": "王室的， 皇家的； 第一流的； 王室成员",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "词根 regalis（王者的） -> 王室的，皇家的。"
  },
  {
    "word": "rural",
    "phonetic": "/ˈrʊərəl/",
    "pos": "adj.",
    "meaning": "农村的， 乡村的； 田园风味的",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "rur-（乡野） + -al（形容词后缀） -> 农村的，乡村的。"
  },
  {
    "word": "saddle",
    "phonetic": "/ˈsædl/",
    "pos": "n./vt.",
    "meaning": "马鞍， 鞍状物； 车座； 给…装上马鞍； 使承担沉重负担",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "源自词根意为“坐” -> 马鞍，鞍状物。"
  },
  {
    "word": "scar",
    "phonetic": "/skɑː(r)/",
    "pos": "n./v.",
    "meaning": "伤疤， 疤痕； 精神创伤； 留下伤疤， 摧残",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "源自希腊语 eskhara（烧伤焦痂） -> 伤疤，疤痕。"
  },
  {
    "word": "scarce",
    "phonetic": "/skeəs/",
    "pos": "adj.",
    "meaning": "缺乏的， 罕见的； 稀少的",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "本义指“被挑拣剔除剩” -> 缺乏的，罕见的。"
  },
  {
    "word": "scare",
    "phonetic": "/skeə(r)/",
    "pos": "vt./vi./n.",
    "meaning": "惊吓， 使恐慌； 受惊； 惊恐， 恐慌事件",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "源自古诺斯语 skirra（躲闪） -> 惊吓，使恐慌。"
  },
  {
    "word": "scarf",
    "phonetic": "/skɑːf/",
    "pos": "n.",
    "meaning": "围巾， 披肩， 头巾",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "本义指“斜跨肩头的朝” -> 围巾，披肩。"
  },
  {
    "word": "senator",
    "phonetic": "/ˈsenətə(r)/",
    "pos": "n.",
    "meaning": "参议员",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "sen-（年长者） + -ator（官员后缀） -> 参议员。"
  },
  {
    "word": "shelter",
    "phonetic": "/ˈʃeltə(r)/",
    "pos": "n./v.",
    "meaning": "庇护所， 避难处； 遮蔽； 庇护， 掩蔽， 保护",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "本义指“盾牌构筑的坚” -> 庇护所，避难处。"
  },
  {
    "word": "sidewalk",
    "phonetic": "/ˈsaɪdwɔːk/",
    "pos": "n.",
    "meaning": "人行道",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "side（路侧） + walk（人行步道） -> 人行道。"
  },
  {
    "word": "site",
    "phonetic": "/saɪt/",
    "pos": "n./vt.",
    "meaning": "位置， 场所； 遗址， 工地； 使坐落在， 为…选址",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "词根 situs（被安放安放的） -> 位置，场所。"
  },
  {
    "word": "situate",
    "phonetic": "/ˈsɪtʃueɪt/",
    "pos": "vt.",
    "meaning": "使位于， 使坐落于； 使处于（某种境地）",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "site（位置） + -uate（动词后缀） -> 使位于，使坐落于。"
  },
  {
    "word": "sociable",
    "phonetic": "/ˈsəʊʃəbl/",
    "pos": "adj.",
    "meaning": "好交际的， 友善合群的； 社交性的",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "soci-（同伴） + -able（易于…的） -> 好交际的，友善合群的。"
  },
  {
    "word": "stick",
    "phonetic": "/stɪk/",
    "pos": "n./v.",
    "meaning": "木棍， 枝条； 手杖； 刺入； 粘贴； 坚持坚守",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "源自词根意为“尖锐刺戳” -> 木棍，枝条。"
  },
  {
    "word": "summit",
    "phonetic": "/ˈsʌmɪt/",
    "pos": "n.",
    "meaning": "最高峰， 山顶； 最高点； 国际峰会， 国家首脑会议",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然生态、地理环境与动植物】",
    "analysis_type": "构词",
    "analysis": "词根 summus（最高的） -> 最高峰，山顶。"
  },
  {
    "word": "tailor",
    "phonetic": "/ˈteɪlə(r)/",
    "pos": "n./vt.",
    "meaning": "裁缝； 裁缝师； 量身定制， 量体剪裁",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "本义指“用剪刀剪裁布” -> 量体裁衣精准修剪 -> 裁缝。"
  },
  {
    "word": "take-off",
    "phonetic": "/ˈteɪk ɒf/",
    "pos": "n.",
    "meaning": "（飞机的）起飞； 事业或经济的腾飞， 突飞猛进",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "take（拿取） + off（离开地表） -> （飞机的）起飞。"
  },
  {
    "word": "temple",
    "phonetic": "/ˈtempl/",
    "pos": "n.",
    "meaning": "庙宇， 寺院， 神殿； 太阳穴（解剖学）",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "词根 templum（古罗马占卜官） -> 庙宇，寺院。"
  },
  {
    "word": "traffic",
    "phonetic": "/ˈtræfɪk/",
    "pos": "n./v.",
    "meaning": "vt./n. 非法买卖，走私，贩卖（毒品/人口）；交通，车流量",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "源自意大利语 trafficare（往来贸易） -> 交通，通行量。"
  },
  {
    "word": "trial",
    "phonetic": "/ˈtraɪəl/",
    "pos": "n./adj.",
    "meaning": "审判， 审讯； 磨难， 严峻考验； 试验， 试验性的",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "try（检验） + -al（名词后缀） -> 审判，审讯。"
  },
  {
    "word": "trolley",
    "phonetic": "/ˈtrɒli/",
    "pos": "n.",
    "meaning": "手推车， 行李推车； 有轨电车",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "源自 troll（滚动） -> 手推车，行李推车。"
  },
  {
    "word": "unveil",
    "phonetic": "/ˌʌnˈveɪl/",
    "pos": "vt.",
    "meaning": "为…揭幕； 首次公开展出， 推出公布",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【74. 前缀：un- 否定/相反】",
    "analysis_type": "构词",
    "analysis": "un-（反向动作） + veil（面纱） -> 为…揭幕。"
  },
  {
    "word": "urban",
    "phonetic": "/ˈɜːbən/",
    "pos": "adj.",
    "meaning": "城市的， 市区的； 都市生活特质的",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "urb-（城市） + -an（形容词后缀） -> 城市的，市区的。"
  },
  {
    "word": "vehicle",
    "phonetic": "/ˈviːəkl/",
    "pos": "n.",
    "meaning": "n. 媒介，手段，表达工具，载体；车辆，交通工具",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "veh-（运载） + -icle（工具载体） -> 车辆，交通工具。"
  },
  {
    "word": "vessel",
    "phonetic": "/ˈvesl/",
    "pos": "n.",
    "meaning": "大船， 轮船； 容器； 血管",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "源自晚期词根 vascellum（小罐子） -> 大船，轮船。"
  },
  {
    "word": "violate",
    "phonetic": "/ˈvaɪəleɪt/",
    "pos": "vt.",
    "meaning": "违反， 违背（法律人权）",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "viol-（暴力） + -ate（动词后缀） -> 违反，违背（法律人权）。"
  },
  {
    "word": "violent",
    "phonetic": "/ˈvaɪələnt/",
    "pos": "adj.",
    "meaning": "暴力的， 残暴的； 剧烈的， 狂暴猛烈的",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "viol-（暴力） + -ent（形容词后缀） -> 暴力的，残暴的。"
  },
  {
    "word": "virtue",
    "phonetic": "/ˈvɜːtʃuː/",
    "pos": "n.",
    "meaning": "美德， 高尚德行； 长处， 优点； 凭借， 由于",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "virt-（男儿阳刚品质） + -ue，引申指美德 -> 美德，高尚德行。"
  },
  {
    "word": "wagon",
    "phonetic": "/ˈwæɡən/",
    "pos": "n.",
    "meaning": "四轮重型运货马车； 铁路敞篷货车车皮",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "源自荷兰语 wagen（带有四个轮子） -> 四轮重型运货马车。"
  },
  {
    "word": "wayside",
    "phonetic": "/ˈweɪsaɪd/",
    "pos": "n./adj.",
    "meaning": "路旁， 路边； 路边的",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "way（道路） + side（侧边） -> 路旁，路边。"
  },
  {
    "word": "workshop",
    "phonetic": "/ˈwɜːkʃɒp/",
    "pos": "n.",
    "meaning": "研讨会， 讲习班； 车间",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "work（工作） + shop（工坊） -> 研讨会，讲习班。"
  },
  {
    "word": "worship",
    "phonetic": "/ˈwɜːʃɪp/",
    "pos": "v./n.",
    "meaning": "崇拜， 敬奉神明； 顶礼膜拜； 狂热崇拜， 盲目倾慕",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "worth（价值） + -ship（状态后缀） -> 崇拜，敬奉神明。"
  },
  {
    "word": "admire",
    "phonetic": "/ədˈmaɪə(r)/",
    "pos": "vt.",
    "meaning": "钦佩， 赞赏； 羡慕",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "ad-（去） + mire（惊叹） -> 钦佩，赞赏。"
  },
  {
    "word": "adore",
    "phonetic": "/əˈdɔː(r)/",
    "pos": "vt.",
    "meaning": "深爱， 极其崇拜； 喜爱极了",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "ad-（去） + or-（言说） -> 满怀崇敬深情挚爱 -> 深爱，极其崇拜。"
  },
  {
    "word": "affair",
    "phonetic": "/əˈfeə(r)/",
    "pos": "n.",
    "meaning": "事情， 事务； 私事",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "本义à faire（去做之事） -> 或婚外情 -> 事情，事务。"
  },
  {
    "word": "alarm",
    "phonetic": "/əˈlɑːm/",
    "pos": "n./vt.",
    "meaning": "警报； 惊慌 vt. 报警",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "源自意大利语 all'arme!（拿起武器！准） -> 警报。"
  },
  {
    "word": "amaze",
    "phonetic": "/əˈmeɪz/",
    "pos": "vt.",
    "meaning": "使大为惊奇， 使惊愕",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "a-（使处于…状态） + maze（迷宫） -> 使大为惊奇，使惊愕。"
  },
  {
    "word": "ambition",
    "phonetic": "/æmˈbɪʃn/",
    "pos": "n.",
    "meaning": "雄心壮志， 野心； 宏大抱负",
    "part": "第一部分：超级核心母词族",
    "group": "【17. it 行走】",
    "analysis_type": "构词",
    "analysis": "ambi-（四周） + it-（行走） + -ion，引申指雄心壮志 -> 雄心壮志，野心。"
  },
  {
    "word": "amuse",
    "phonetic": "/əˈmjuːz/",
    "pos": "vt.",
    "meaning": "逗乐， 逗笑； 给…娱乐",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "a-（使） + muse（凝视） -> 逗乐，逗笑。"
  },
  {
    "word": "annoy",
    "phonetic": "/əˈnɔɪ/",
    "pos": "vt.",
    "meaning": "使恼怒， 打扰； 使心烦意乱",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "词根in odio esse（令人深恶痛绝） -> 使恼怒，打扰。"
  },
  {
    "word": "anxiety",
    "phonetic": "/æŋˈzaɪəti/",
    "pos": "n.",
    "meaning": "焦虑， 忧虑； 渴望",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、医疗生理与情绪心理】",
    "analysis_type": "构词",
    "analysis": "anx-（扼住喉咙） + -i- + -ety（名词后缀） -> 焦虑，忧虑。"
  },
  {
    "word": "anxious",
    "phonetic": "/ˈæŋkʃəs/",
    "pos": "adj.",
    "meaning": "焦急的， 忧虑的； 急切的",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、医疗生理与情绪心理】",
    "analysis_type": "构词",
    "analysis": "anx-（窒息焦虑） + -ious（形容词后缀） -> 焦急的，忧虑的。"
  },
  {
    "word": "awe",
    "phonetic": "/ɔː/",
    "pos": "n./vt.",
    "meaning": "敬畏， 惊叹， 崇敬； 使敬畏， 使惊叹折服",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "源自古诺斯语 agi（恐惧战栗中夹） -> 敬畏，惊叹。"
  },
  {
    "word": "bacteria",
    "phonetic": "/bækˈtɪəriə/",
    "pos": "n.",
    "meaning": "细菌（的复数）",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然地理、动植物与环境保护】",
    "analysis_type": "构词",
    "analysis": "词根 bacter（小手杖） -> 显微镜下呈杆状的微生物 -> 细菌（的复数）。"
  },
  {
    "word": "beard",
    "phonetic": "/bɪəd/",
    "pos": "n.",
    "meaning": "络腮胡子， 下巴胡须",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "核心意象为“男子下颌生长” -> 络腮胡子，下巴胡须。"
  },
  {
    "word": "bitter",
    "phonetic": "/ˈbɪtə(r)/",
    "pos": "adj.",
    "meaning": "苦味的； 极其痛苦惨烈的； 充满敌意怨恨的； 严寒刺骨的",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "核心意象为“像被尖齿凶狠” -> 苦味的。"
  },
  {
    "word": "bleed",
    "phonetic": "/bliːd/",
    "pos": "vi./vt.",
    "meaning": "流血， 出血 vt. 勒索",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、医疗生理与情绪心理】",
    "analysis_type": "构词",
    "analysis": "本义指“血” -> 流血，出血。"
  },
  {
    "word": "blush",
    "phonetic": "/blʌʃ/",
    "pos": "vi./n.",
    "meaning": "脸红， 羞愧发红； 害羞， 惭愧； 红晕",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "本义指“像烈火燃烧般” -> 脸红，羞愧发红。"
  },
  {
    "word": "breed",
    "phonetic": "/briːd/",
    "pos": "v./n.",
    "meaning": "繁殖，繁育饲育；优良品种；特定类型品格风格之人",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然生态、地理环境与动植物】",
    "analysis_type": "构词",
    "analysis": "同源（温热孵化使胚） -> 繁殖，繁育饲育。"
  },
  {
    "word": "bruise",
    "phonetic": "/bruːz/",
    "pos": "n./v.",
    "meaning": "青肿， 瘀伤； 擦伤碰伤； 击伤， 使受挫皮肉瘀青",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "本义指“粉碎” -> 青肿，瘀伤。"
  },
  {
    "word": "carrier",
    "phonetic": "/ˈkæriə(r)/",
    "pos": "n.",
    "meaning": "运输工具； 航空公司； 航母",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "carry（搬运） + -er（人） -> 运输工具。"
  },
  {
    "word": "caution",
    "phonetic": "/ˈkɔːʃn/",
    "pos": "n./vt.",
    "meaning": "谨慎， 小心警惕； 告诫， 警告； 告诫提示",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "源自拉丁词根 cav- / cavere（警惕防范） -> 谨慎，小心警惕。"
  },
  {
    "word": "cheek",
    "phonetic": "/tʃiːk/",
    "pos": "n.",
    "meaning": "面颊， 脸蛋； 厚颜无耻， 放肆无礼",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "本义指“上下颚” -> 面颊，脸蛋。"
  },
  {
    "word": "clumsy",
    "phonetic": "/ˈklʌmzi/",
    "pos": "adj.",
    "meaning": "笨拙的， 笨手笨脚的； 不得体的， 拙劣的",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "本义指“手脚被严寒冻” -> 笨拙的，笨手笨脚的。"
  },
  {
    "word": "comedy",
    "phonetic": "/ˈkɒmədi/",
    "pos": "n.",
    "meaning": "喜剧； 喜剧艺术， 幽默闹剧事件",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "komos（狂欢狂饮游行） + oide（歌谣） -> 喜剧。"
  },
  {
    "word": "complex",
    "phonetic": "/ˈkɒmpleks/",
    "pos": "adj./n.",
    "meaning": "adj. 复杂的； 复合的 n. 综合体",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "com-（同） + plex-（编织） -> 多重线索交织交错 -> 复杂的。"
  },
  {
    "word": "concentrate",
    "phonetic": "/ˈkɒnsntreɪt/",
    "pos": "v./n.",
    "meaning": "全神贯注， 专心致志； 集中聚合； 浓缩物",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "con-（共同） + centr-（中心） + -ate（动词后缀） -> 全神贯注，专心致志。"
  },
  {
    "word": "conscience",
    "phonetic": "/ˈkɒnʃəns/",
    "pos": "n.",
    "meaning": "良心， 良知； 内心的道德正义感",
    "part": "第一部分：超级核心母词族",
    "group": "【29. sci 知道】",
    "analysis_type": "构词",
    "analysis": "con-（彻底） + sci-（知道） + -ence（名词后缀） -> 良心，良知。"
  },
  {
    "word": "considerate",
    "phonetic": "/kənˈsɪdərət/",
    "pos": "adj.",
    "meaning": "体贴的， 体谅的； 考虑周到的",
    "part": "第一部分：超级核心母词族",
    "group": "【35. sid / sed / sess 坐/停留/沉淀】",
    "analysis_type": "构词",
    "analysis": "consider（仔细考虑） + -ate（形容词后缀） -> 体贴的，体谅的。"
  },
  {
    "word": "dazzle",
    "phonetic": "/ˈdæzl/",
    "pos": "v./n.",
    "meaning": "使目眩， 耀眼； 使赞叹倾倒； 耀眼光芒",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "daze（发懵） + -le（反复小后缀） -> 被惊世才华或美貌深深折服 -> 使目眩，耀眼。"
  },
  {
    "word": "decent",
    "phonetic": "/ˈdiːsnt/",
    "pos": "adj.",
    "meaning": "体面的， 得体的； 宽厚的， 正派善良的； 相当不错的",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "词根 decens（合宜的） -> 体面的，得体的。"
  },
  {
    "word": "delight",
    "phonetic": "/dɪˈlaɪt/",
    "pos": "n./v.",
    "meaning": "高兴， 愉快； 令人欣喜之事； 使高兴， 使欣喜（以为乐）",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "de-（彻底） + light（词根） -> 感官受到极大愉悦享受吸引 -> 高兴，愉快。"
  },
  {
    "word": "dentist",
    "phonetic": "/ˈdentɪst/",
    "pos": "n.",
    "meaning": "牙科医生， 牙医",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "dent-（牙齿） + -ist（专业从业者） -> 牙科医生，牙医。"
  },
  {
    "word": "depressed",
    "phonetic": "/dɪˈprest/",
    "pos": "adj.",
    "meaning": "抑郁的， 情绪沮丧消沉的； 经济萧条低迷的； 凹陷的",
    "part": "第一部分：超级核心母词族",
    "group": "【23. press 挤压/压迫】",
    "analysis_type": "构词",
    "analysis": "de-（向下） + press（按压） + -ed（形容词后缀） -> 抑郁的，情绪沮丧消沉的。"
  },
  {
    "word": "desire",
    "phonetic": "/dɪˈzaɪə(r)/",
    "pos": "n./vt.",
    "meaning": "渴望， 热切期望； 强烈的意愿； 渴望得到",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "de-（完全） + sire（星辰） -> 渴望，热切期望。"
  },
  {
    "word": "devote",
    "phonetic": "/dɪˈvəʊt/",
    "pos": "vt.",
    "meaning": "把…奉献给， 致力于",
    "part": "第二部分：高频专业词根族",
    "group": "【70. vot 誓言/发誓】",
    "analysis_type": "构词",
    "analysis": "de-（庄重向神明宣） + vote（发誓） -> 把…奉献给，致力于。"
  },
  {
    "word": "diligent",
    "phonetic": "/ˈdɪlɪdʒənt/",
    "pos": "adj.",
    "meaning": "勤奋用功的， 孜孜不倦的； 审慎勤勉的",
    "part": "第一部分：超级核心母词族",
    "group": "【19. leg / lig / lect 采集/阅读/选择】",
    "analysis_type": "构词",
    "analysis": "di-（分开） + lig（挑选） + -ent，引申指勤奋用功的 -> 勤奋用功的，孜孜不倦的。"
  },
  {
    "word": "disease",
    "phonetic": "/dɪˈziːz/",
    "pos": "n.",
    "meaning": "疾病， 病患； 弊病",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、医疗生理与情绪心理】",
    "analysis_type": "构词",
    "analysis": "dis-（失去） + ease（舒适） -> 疾病，病患。"
  },
  {
    "word": "disgust",
    "phonetic": "/dɪsˈɡʌst/",
    "pos": "n./vt.",
    "meaning": "反感， 厌恶， 恶心； 使厌恶， 使作呕",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "dis-（相反） + gust（品尝） -> 反感，厌恶。"
  },
  {
    "word": "distress",
    "phonetic": "/dɪˈstres/",
    "pos": "n./vt.",
    "meaning": "极度痛苦， 忧伤悲痛； 危难， 险境； 使苦恼忧伤",
    "part": "第二部分：高频专业词根族",
    "group": "【65. strict / strain / string 拉紧/紧缚】",
    "analysis_type": "构词",
    "analysis": "dis-（四面八方拉扯） + stress（拉紧） -> 极度痛苦，忧伤悲痛。"
  },
  {
    "word": "dreadful",
    "phonetic": "/ˈdredfl/",
    "pos": "adj.",
    "meaning": "极其糟糕可怕的， 令人惊恐骇人的； 极差恶劣的",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "dread（极度恐惧害怕） + -ful（充满…的） -> 极其糟糕可怕的，令人惊恐骇人的。"
  },
  {
    "word": "dynamic",
    "phonetic": "/daɪˈnæmɪk/",
    "pos": "adj./n.",
    "meaning": "充满生机活力的， 动态的； 发展变化的动力机制",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "源自希腊语 dynamis（能量） -> 充满生机活力的，动态的。"
  },
  {
    "word": "earnest",
    "phonetic": "/ˈɜːnɪst/",
    "pos": "adj./n.",
    "meaning": "极其认真的， 诚恳真挚的； 严肃诚意； 郑重认真",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "词根族核心意象 -> 极其认真的，诚恳真挚的。"
  },
  {
    "word": "ease",
    "phonetic": "/iːz/",
    "pos": "n./v.",
    "meaning": "容易； 舒适 v. 缓和， 减轻",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、医疗生理与情绪心理】",
    "analysis_type": "构词",
    "analysis": "本义指“闲适” -> 容易。"
  },
  {
    "word": "emergency",
    "phonetic": "/ɪˈmɜːdʒənsi/",
    "pos": "n.",
    "meaning": "紧急情况， 突发事件",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "e-（出） + merg-（浸没） + -ency，引申指紧急情况 -> 紧急情况，突发事件。"
  },
  {
    "word": "emotion",
    "phonetic": "/ɪˈməʊʃn/",
    "pos": "n.",
    "meaning": "情绪， 情感； 激情",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、医疗生理与情绪心理】",
    "analysis_type": "构词",
    "analysis": "e-（向外） + mot-（移动） + -ion，引申指情绪 -> 情绪，情感。"
  },
  {
    "word": "emotional",
    "phonetic": "/ɪˈməʊʃənl/",
    "pos": "adj.",
    "meaning": "情绪的， 情感的； 易动感情的",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、医疗生理与情绪心理】",
    "analysis_type": "构词",
    "analysis": "emotion（情感） + -al（形容词后缀） -> 情绪的，情感的。"
  },
  {
    "word": "fatigue",
    "phonetic": "/fəˈtiːɡ/",
    "pos": "n./v.",
    "meaning": "疲劳， 劳累 v. 使疲乏",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、医疗生理与情绪心理】",
    "analysis_type": "构词",
    "analysis": "本义指“使疲惫疲劳” -> 疲劳，劳累。"
  },
  {
    "word": "fear",
    "phonetic": "/fɪə(r)/",
    "pos": "n./v.",
    "meaning": "害怕， 恐惧； 忧虑担心； 畏惧害怕（唯恐）",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "核心意象为“前路未知的凶” -> 害怕，恐惧。"
  },
  {
    "word": "fierce",
    "phonetic": "/fɪəs/",
    "pos": "adj.",
    "meaning": "凶猛残酷的， 暴烈的； 极度激烈的； 狂热的",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "词根 ferus（未受人类规训） -> 凶猛残酷的，暴烈的。"
  },
  {
    "word": "flesh",
    "phonetic": "/fleʃ/",
    "pos": "n.",
    "meaning": "肉， 肌肉， 皮肉； 肉体； 果肉； 使充实丰满",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "核心意象为“附着在骨骼表” -> 肉，肌肉。"
  },
  {
    "word": "frighten",
    "phonetic": "/ˈfraɪtn/",
    "pos": "vt.",
    "meaning": "使惊恐， 吓唬， 使害怕惊慌",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "fright（突然受惊引发） + -en（动词后缀） -> 使惊恐，吓唬。"
  },
  {
    "word": "germ",
    "phonetic": "/dʒɜːm/",
    "pos": "n.",
    "meaning": "微生物， 致病细菌， 病菌； 萌芽， 发端之源",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "词根 germen（初生微小的萌） -> 微生物，致病细菌。"
  },
  {
    "word": "gesture",
    "phonetic": "/ˈdʒestʃə(r)/",
    "pos": "n./vi.",
    "meaning": "手势， 身体姿态； 表示姿态的善意举动； 做手势比划",
    "part": "第一部分：超级核心母词族",
    "group": "【31. ger / gest 产生/搬运/承载】",
    "analysis_type": "构词",
    "analysis": "gest-（承载） + -ure（名词后缀） -> 手势，身体姿态。"
  },
  {
    "word": "glare",
    "phonetic": "/ɡleə(r)/",
    "pos": "vi./n.",
    "meaning": "怒目而视，恶狠狠地瞪着；发出刺目强光；刺眼炫光",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "与 glass -> glow（发光）同源 -> 怒目而视，恶狠狠地瞪着。"
  },
  {
    "word": "grateful",
    "phonetic": "/ˈɡreɪtfl/",
    "pos": "adj.",
    "meaning": "感激的， 感谢的， 心存感恩的",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "grate-（令人欢喜的） + -ful，内心充满知恩图报的温情 -> 感激的，感谢的。"
  },
  {
    "word": "greedy",
    "phonetic": "/ˈɡriːdi/",
    "pos": "adj.",
    "meaning": "贪婪的， 贪得无厌的； 极度渴望求知的",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "greed（贪欲） + -y（形容词后缀） -> 贪婪的，贪得无厌的。"
  },
  {
    "word": "gym",
    "phonetic": "/dʒɪm/",
    "pos": "n.",
    "meaning": "健身房， 体育馆（的口语缩略形式）",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "源自古希腊语 gymnasion（古希腊青年裸） -> 健身房，体育馆（的口语缩略形式）。"
  },
  {
    "word": "headache",
    "phonetic": "/ˈhedeɪk/",
    "pos": "n.",
    "meaning": "头痛； 令人头痛的事",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、医疗生理与情绪心理】",
    "analysis_type": "构词",
    "analysis": "head（头颅） + ache（持续隐痛） -> 头痛。"
  },
  {
    "word": "heal",
    "phonetic": "/hiːl/",
    "pos": "v.",
    "meaning": "治愈， 愈合； 调解",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、医疗生理与情绪心理】",
    "analysis_type": "构词",
    "analysis": "本义指“健全” -> 治愈，愈合。"
  },
  {
    "word": "hesitate",
    "phonetic": "/ˈhezɪteɪt/",
    "pos": "vi.",
    "meaning": "犹豫， 迟疑不决； 含糊顾虑， 不情愿",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "源自拉丁词根 haerere（粘住）之反复动词形式 haesitare -> 犹豫，迟疑不决。"
  },
  {
    "word": "holy",
    "phonetic": "/ˈhəʊli/",
    "pos": "adj.",
    "meaning": "神圣的， 圣洁的； 受到极度虔诚敬奉的",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "核心意象为“完好无损的” -> 神圣的，圣洁的。"
  },
  {
    "word": "horror",
    "phonetic": "/ˈhɒrə(r)/",
    "pos": "n.",
    "meaning": "极度恐惧， 战栗骇然； 惨绝人寰的恐怖景象",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "源自拉丁词根 horr- / horrere（毛发倒竖） -> 极度恐惧，战栗骇然。"
  },
  {
    "word": "identity",
    "phonetic": "/aɪˈdentəti/",
    "pos": "n.",
    "meaning": "身份， 个体特性； 本体特征； 同一性， 认同感",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "ident-（相同的） + -ity（名词后缀） -> 身份，个体特性。"
  },
  {
    "word": "insult",
    "phonetic": "/ɪnˈsʌlt/ (v.), /ˈɪnsʌlt/ (n.)",
    "pos": "vt./n.",
    "meaning": "公然侮辱， 辱骂； 羞辱， 凌辱行为； 对人身尊严的践踏",
    "part": "第二部分：高频专业词根族",
    "group": "【62. sal / sult 跳/跳跃】",
    "analysis_type": "构词",
    "analysis": "in-（朝向…扑去） + sult（跳跃） -> 公然侮辱，辱骂。"
  },
  {
    "word": "jealous",
    "phonetic": "/ˈdʒeləs/",
    "pos": "adj.",
    "meaning": "嫉妒的， 心胸狭隘吃醋的； 谨防受损悉心守护的",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "源自希腊语 zelos（狂热的热情） -> 嫉妒的，心胸狭隘吃醋的。"
  },
  {
    "word": "joint",
    "phonetic": "/dʒɔɪnt/",
    "pos": "n./adj.",
    "meaning": "关节， 骨节连接处； 接头接缝； 联合的， 共同的",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "join（连接） + -t（名词后缀） -> 关节，骨节连接处。"
  },
  {
    "word": "lavatory",
    "phonetic": "/ˈlævətri/",
    "pos": "n.",
    "meaning": "（飞机、列车上的）洗手间， 盥洗室， 卫生间",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "lav-（洗涤） + -atory（专门场所后缀） -> （飞机、列车上的）洗手间 -> （飞机，列车上的）洗手间。"
  },
  {
    "word": "lick",
    "phonetic": "/lɪk/",
    "pos": "v./n.",
    "meaning": "舔，舔吃；轻轻卷过擦过；一舔之量",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "舌头在物体表面轻刷划过 -> 舔，舔吃。"
  },
  {
    "word": "lump",
    "phonetic": "/lʌmp/",
    "pos": "n./v.",
    "meaning": "小块， 硬块； 肿块； 把…归并合并在一起； 勉强忍受",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "源自斯堪的纳维亚语（一团未经精细） -> 小块，硬块。"
  },
  {
    "word": "male",
    "phonetic": "/meɪl/",
    "pos": "adj./n.",
    "meaning": "男性的， 雄性的； 雄性动植物， 男人",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "词根 masculus（强壮有力的成） -> 男性的，雄性的。"
  },
  {
    "word": "massage",
    "phonetic": "/ˈmæsɑːʒ/",
    "pos": "n./vt.",
    "meaning": "推拿， 按摩； 进行推拿理疗； 篡改润色（数据/账目）",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "源自阿拉伯语 massa（用手掌轻柔按） -> 推拿，按摩。"
  },
  {
    "word": "mature",
    "phonetic": "/məˈtʃʊə(r)/",
    "pos": "adj./v.",
    "meaning": "成熟的，完全长成的；深思熟虑的；到期",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "词根 maturus（及时熟透的） -> 成熟的，完全长成的。"
  },
  {
    "word": "mercy",
    "phonetic": "/ˈmɜːsi/",
    "pos": "n.",
    "meaning": "仁慈， 宽恕， 怜悯； 侥幸幸运之事； 任由…摆布宰割",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "词根 merces（报酬） -> 仁慈，宽恕。"
  },
  {
    "word": "merit",
    "phonetic": "/ˈmerɪt/",
    "pos": "n./vt.",
    "meaning": "优点， 价值， 长处； 功劳功勋； 值得， 应受到",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "源自拉丁词根 merere / meritum（凭借自身卓越） -> 优点，价值。"
  },
  {
    "word": "mess",
    "phonetic": "/mes/",
    "pos": "n./vt.",
    "meaning": "凌乱， 脏乱不堪； 混乱困境； 弄乱， 把…搞得一团糟",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "词根 missus（摆上餐桌的一） -> 凌乱，脏乱不堪。"
  },
  {
    "word": "mild",
    "phonetic": "/maɪld/",
    "pos": "adj.",
    "meaning": "温和的，和缓的；轻微的；温暖宜人的",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "同源（柔软的） -> 温和的，和缓的。"
  },
  {
    "word": "modest",
    "phonetic": "/ˈmɒdɪst/",
    "pos": "adj.",
    "meaning": "谦虚的，谦逊审慎的；适度的，不过分的；朴素不大手大脚的",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "mod-（尺度） + -est（形容词后缀） -> 谦虚的，谦逊审慎的。"
  },
  {
    "word": "nourish",
    "phonetic": "/ˈnʌrɪʃ/",
    "pos": "vt.",
    "meaning": "滋养， 提供养分； 抚养培育； 滋长长期怀抱（希望/信念）",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然生态、地理环境与动植物】",
    "analysis_type": "构词",
    "analysis": "nour-（哺乳） + -ish（动词后缀） -> 滋养，提供养分。"
  },
  {
    "word": "nuisance",
    "phonetic": "/ˈnjuːsns/",
    "pos": "n.",
    "meaning": "令人讨厌的人或事物； 麻烦事； 公害， 妨害公共利益的行为",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "本义指“造成实质性肉” -> 令人讨厌的人或事物。"
  },
  {
    "word": "pale",
    "phonetic": "/peɪl/",
    "pos": "adj./v.",
    "meaning": "苍白的， 灰白的； 暗淡微弱的； 相形见绌， 显得逊色",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "词根 pallidus（失血发白） -> 苍白的，灰白的。"
  },
  {
    "word": "palm",
    "phonetic": "/pɑːm/",
    "pos": "n./vt.",
    "meaning": "手掌，手心；棕榈树，棕榈叶；将…藏于手心",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "同源（扁平展开） -> 手掌，手心。"
  },
  {
    "word": "passive",
    "phonetic": "/ˈpæsɪv/",
    "pos": "adj.",
    "meaning": "被动的， 消极不反抗的； 顺从的； 被动语态的",
    "part": "第二部分：高频专业词根族",
    "group": "【60. pass / path 感受/痛苦】",
    "analysis_type": "构词",
    "analysis": "pass-（遭受） + -ive（形容词后缀） -> 被动的，消极不反抗的。"
  },
  {
    "word": "pill",
    "phonetic": "/pɪl/",
    "pos": "n.",
    "meaning": "药丸， 药片",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、医疗生理与情绪心理】",
    "analysis_type": "构词",
    "analysis": "词根 pila（球） -> 药丸，药片。"
  },
  {
    "word": "pinch",
    "phonetic": "/pɪntʃ/",
    "pos": "v./n.",
    "meaning": "捏， 掐， 捏住； 紧掐， 勒痛； 一小撮； 紧缺拮据",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "本义指“用食指与拇指” -> 捏，掐。"
  },
  {
    "word": "powder",
    "phonetic": "/ˈpaʊdə(r)/",
    "pos": "n./vt.",
    "meaning": "粉末，细粉；火药，炸药；爽身粉，香粉",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "词根pulvis / pulveris（尘土） -> 粉末，细粉。"
  },
  {
    "word": "praise",
    "phonetic": "/preɪz/",
    "pos": "vt./n.",
    "meaning": "赞扬， 表彰， 夸奖； 称赞， 赞美之词； 歌颂崇拜神明",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "与 price（价值） -> prize（奖赏）同源 -> 赞扬，表彰。"
  },
  {
    "word": "pray",
    "phonetic": "/preɪ/",
    "pos": "v.",
    "meaning": "祈祷， 祈求神明庇佑； 企盼渴望",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "源自拉丁词根 precari（恳求） -> 祈祷，祈求神明庇佑。"
  },
  {
    "word": "pregnant",
    "phonetic": "/ˈpreɡnənt/",
    "pos": "adj.",
    "meaning": "怀孕的， 妊娠的； 意味深长的， 饱含意蕴的",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "pre-（在…之前） + gn-（出生） + -ant（形容词后缀） -> 怀孕的，妊娠的。"
  },
  {
    "word": "prestige",
    "phonetic": "/preˈstiːʒ/",
    "pos": "n.",
    "meaning": "声望， 威望； 崇高社会威信",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "词根 praestigium（变戏法产生的） -> 声望，威望。"
  },
  {
    "word": "punish",
    "phonetic": "/ˈpʌnɪʃ/",
    "pos": "vt.",
    "meaning": "依法惩罚， 处罚； 严厉惩治折磨",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "源自拉丁词根 poena（报应刑罚/惩罚代价） + -ish（动词后缀） -> 依法惩罚，处罚。"
  },
  {
    "word": "puzzle",
    "phonetic": "/ˈpʌzl/",
    "pos": "n./v.",
    "meaning": "vt. 使迷惑，使困惑难解 n. 令人费解的难题，谜团；智力拼图",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "本义指“摆放” -> 令人费解的难题，谜团。"
  },
  {
    "word": "ache",
    "phonetic": "/eɪk/",
    "pos": "vi./n.",
    "meaning": "疼痛； 隐痛",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、医疗生理与情绪心理】",
    "analysis_type": "构词",
    "analysis": "源自词根核心本义 -> 疼痛。"
  },
  {
    "word": "blind",
    "phonetic": "/blaɪnd/",
    "pos": "adj./vt./n.",
    "meaning": "失明的， 双目失明的； 盲目的无原则的； 使失明； 百叶窗",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "源自词根意为“模糊不清” -> 失明的，双目失明的。"
  },
  {
    "word": "deaf",
    "phonetic": "/def/",
    "pos": "adj.",
    "meaning": "聋的， 听不见的； 充耳不闻拒不理睬的",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "核心意象为“神经呆滞麻木” -> 聋的，听不见的。"
  },
  {
    "word": "dumb",
    "phonetic": "/dʌm/",
    "pos": "adj.",
    "meaning": "哑的， 不能说话的； 说不出话目瞪口呆的； 愚蠢的（口语）",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "同源（知觉麻木） -> 哑的，不能说话的。"
  },
  {
    "word": "cough",
    "phonetic": "/kɒf/",
    "pos": "vi./vt./n.",
    "meaning": "咳嗽，咳出痰液异物；咳出，勉强交出勉强掏出钱款；咳嗽声，阵咳",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "高拟声生理词汇（模拟横膈膜突） -> 咳嗽，咳出痰液异物。"
  },
  {
    "word": "fever",
    "phonetic": "/ˈfiːvə(r)/",
    "pos": "n./vt.",
    "meaning": "发烧， 发热； 狂热 vt. 使发烧",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、医疗生理与情绪心理】",
    "analysis_type": "构词",
    "analysis": "词根febris -> 发烧，发热。"
  },
  {
    "word": "illness",
    "phonetic": "/ˈɪlnəs/",
    "pos": "n.",
    "meaning": "疾病， 生病； 身体不适时期",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "ill（恶劣的） + -ness（名词抽象后缀） -> 疾病，生病。"
  },
  {
    "word": "vomit",
    "phonetic": "/ˈvɒmɪt/",
    "pos": "v./n.",
    "meaning": "呕吐， 吐出； 呕吐物； 大量喷涌喷出",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "源自拉丁词根 vomere（强行自胃部向） -> 呕吐，吐出。"
  },
  {
    "word": "sore",
    "phonetic": "/sɔː(r)/",
    "pos": "adj./n.",
    "meaning": "疼痛发炎的，酸痛的；痛处，疮伤；感到气恼恼火的",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "核心意象为“遭受撕裂刺痛” -> 疼痛发炎的，酸痛的。"
  },
  {
    "word": "poison",
    "phonetic": "/ˈpɔɪzn/",
    "pos": "n./vt.",
    "meaning": "毒药， 毒物； 毒害， 败坏； 在…中下毒； 毒杀",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "词根potio / potionis（供饮用的一杯） -> 毒药，毒物。"
  },
  {
    "word": "poisonous",
    "phonetic": "/ˈpɔɪzənəs/",
    "pos": "adj.",
    "meaning": "有毒的，含有剧毒致死毒素的；恶意的，极具破坏性充满敌意恶毒的",
    "part": "第二部分：高频专业词根族",
    "group": "【59. pot 饮/喝】",
    "analysis_type": "构词",
    "analysis": "poison（毒药） + -ous（充满…的形容） -> 有毒的，含有剧毒致死毒素的。"
  },
  {
    "word": "throat",
    "phonetic": "/θrəʊt/",
    "pos": "n.",
    "meaning": "喉咙， 咽喉； 狭窄通道",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、医疗生理与情绪心理】",
    "analysis_type": "构词",
    "analysis": "本义 -> 喉咙，咽喉。"
  },
  {
    "word": "lung",
    "phonetic": "/lʌŋ/",
    "pos": "n.",
    "meaning": "肺， 肺部",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、医疗生理与情绪心理】",
    "analysis_type": "构词",
    "analysis": "本义 -> 肺，肺部。"
  },
  {
    "word": "liver",
    "phonetic": "/ˈlɪvə(r)/",
    "pos": "n.",
    "meaning": "肝脏； 生活者",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、医疗生理与情绪心理】",
    "analysis_type": "构词",
    "analysis": "本义 -> 肝脏。"
  },
  {
    "word": "kidney",
    "phonetic": "/ˈkɪdni/",
    "pos": "n.",
    "meaning": "肾， 肾脏",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、医疗生理与情绪心理】",
    "analysis_type": "构词",
    "analysis": "本义指“腰腹内脏” -> 肾，肾脏。"
  },
  {
    "word": "stomach",
    "phonetic": "/ˈstʌmək/",
    "pos": "n./vt.",
    "meaning": "胃， 腹部； 食欲， 胃口； 忍受， 容忍",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "源自希腊语 stomakhos（原本特指连接） -> 胃，腹部。"
  },
  {
    "word": "clinic",
    "phonetic": "/ˈklɪnɪk/",
    "pos": "n.",
    "meaning": "门诊部， 诊所",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、医疗生理与情绪心理】",
    "analysis_type": "构词",
    "analysis": "clin-（斜倚） + -ic（场所） -> 门诊部，诊所。"
  },
  {
    "word": "bone",
    "phonetic": "/bəʊn/",
    "pos": "n.",
    "meaning": "骨头， 骨骼； 骨质； 核心本质（争论焦点）",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "核心意象为“支撑人体四肢” -> 骨头，骨骼。"
  },
  {
    "word": "muscle",
    "phonetic": "/ˈmʌsl/",
    "pos": "n.",
    "meaning": "肌肉； 力量， 实力",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、医疗生理与情绪心理】",
    "analysis_type": "构词",
    "analysis": "词根 musculus（小老鼠） -> 肌肉。"
  },
  {
    "word": "tooth",
    "phonetic": "/tuːθ/",
    "pos": "n.",
    "meaning": "牙齿； 齿状物； 威力， 约束效力（复数赋予法律效力）",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "同源（咀嚼进食之齿） -> 牙齿。"
  },
  {
    "word": "tongue",
    "phonetic": "/tʌŋ/",
    "pos": "n.",
    "meaning": "舌头； 母语， 语言； 说话方式腔调； 鞋舌",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "同源（用以辨味发音） -> 舌头。"
  },
  {
    "word": "breast",
    "phonetic": "/brest/",
    "pos": "n.",
    "meaning": "胸脯， 胸膛； 乳房； 胸怀内心深处； 挺胸面对（劈波斩浪）",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "同源（隆起膨胀） -> 胸脯，胸膛。"
  },
  {
    "word": "chin",
    "phonetic": "/tʃɪn/",
    "pos": "n.",
    "meaning": "下巴， 颏部； 保持乐观昂扬（别气馁昂起头来）",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "同源（下巴） -> 下巴，颏部。"
  },
  {
    "word": "forehead",
    "phonetic": "/ˈfɔːhed/",
    "pos": "n.",
    "meaning": "额头， 前额",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "fore-（在最前方） + head（头部） -> 额头，前额。"
  },
  {
    "word": "wrist",
    "phonetic": "/rɪst/",
    "pos": "n.",
    "meaning": "手腕， 腕关节； 腕部（腕表）",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "核心意象为“能灵活自如翻” -> 手腕，腕关节。"
  },
  {
    "word": "ankle",
    "phonetic": "/ˈæŋkl/",
    "pos": "n.",
    "meaning": "踝， 脚踝， 踝关节",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "同源（弯曲成折角） -> 踝，脚踝。"
  },
  {
    "word": "thumb",
    "phonetic": "/θʌm/",
    "pos": "n./v.",
    "meaning": "大拇指；竖起大拇指表示赞许认可；翘起拇指搭便车",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "同源（肿大粗壮） -> 大拇指。"
  },
  {
    "word": "heel",
    "phonetic": "/hiːl/",
    "pos": "n./v.",
    "meaning": "脚后跟，踵部；鞋后跟；紧跟在后",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "核心意象为“弯曲的足后凸” -> 脚后跟，踵部。"
  },
  {
    "word": "panic",
    "phonetic": "/ˈpænɪk/",
    "pos": "n./v./adj.",
    "meaning": "恐慌，惊慌失措；使恐慌失措；惊恐的，因慌乱造成的",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "源自古希腊神话中半人半羊的山林牧神潘（Pan） -> 恐慌，惊慌失措。"
  },
  {
    "word": "hygiene",
    "phonetic": "/ˈhaɪdʒiːn/",
    "pos": "n.",
    "meaning": "卫生， 卫生学； 保健学",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、医疗生理与情绪心理】",
    "analysis_type": "构词",
    "analysis": "源自希腊神话健康女神许癸厄亚（Hygiei） -> 卫生，卫生学。"
  },
  {
    "word": "rage",
    "phonetic": "/reɪdʒ/",
    "pos": "n./vi.",
    "meaning": "狂怒，盛怒暴怒；狂暴肆虐；肆虐蔓延",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "词根 rabies（狂犬病病发时） -> 狂怒，盛怒暴怒。"
  },
  {
    "word": "fury",
    "phonetic": "/ˈfjʊəri/",
    "pos": "n.",
    "meaning": "暴怒， 狂怒； 狂暴， 猛烈狂暴的力量",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "源自古罗马神话中专门奉命追剿并严惩弑亲等滔天反人类大罪犯的复仇三女神（等 -> 暴怒，狂怒。"
  },
  {
    "word": "choke",
    "phonetic": "/tʃəʊk/",
    "pos": "v./n.",
    "meaning": "窒息，使噎住；扼杀阻塞，掐死；在关键决胜时刻因极度紧张严重失常",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "拟声词 -> 窒息，使噎住。"
  },
  {
    "word": "sorrow",
    "phonetic": "/ˈsɒrəʊ/",
    "pos": "n./vi.",
    "meaning": "悲伤，悲痛；令人痛心疾首的伤心事；感到由衷悲伤痛惜",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "源自原始ō（如同心尖被钝） -> 悲伤，悲痛。"
  },
  {
    "word": "mourn",
    "phonetic": "/mɔːn/",
    "pos": "v.",
    "meaning": "哀悼， 悼念逝者； 为…深感痛惜惋惜",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "因痛失挚爱而悲伤致哀 -> 哀悼，悼念逝者。"
  },
  {
    "word": "regret",
    "phonetic": "/rɪˈɡret/",
    "pos": "vt./n.",
    "meaning": "后悔， 懊悔； 遗憾， 抱歉； 由衷的痛悔（很遗憾地说）",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "re-（反复） + gret（源自古诺斯语） -> 后悔，懊悔。"
  },
  {
    "word": "glad",
    "phonetic": "/ɡlæd/",
    "pos": "adj.",
    "meaning": "高兴的， 欣慰的； 乐意效劳的",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "同源（发光闪耀） -> 高兴的，欣慰的。"
  },
  {
    "word": "cheerful",
    "phonetic": "/ˈtʃɪəfl/",
    "pos": "adj.",
    "meaning": "兴高采烈的， 开朗乐观的； 让人心情舒畅愉快的",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "cheer（容貌表情） + -ful（充满…的） -> 兴高采烈的，开朗乐观的。"
  },
  {
    "word": "content",
    "phonetic": "/kənˈtent/ (adj.), /ˈkɒntent/ (n.)",
    "pos": "adj./vt./n.",
    "meaning": "满意的， 知足常乐的； 使满意满足； 内容， 容量， 目录",
    "part": "第一部分：超级核心母词族",
    "group": "【20. ten / tain / tin 握/持/容纳】",
    "analysis_type": "构词",
    "analysis": "con-（彻底全部） + tent（容纳握住） -> 满意的，知足常乐的。"
  },
  {
    "word": "faint",
    "phonetic": "/feɪnt/",
    "pos": "adj./vi./n.",
    "meaning": "微弱暗淡的，不明显的；眩晕欲厥的；昏厥，晕倒",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "本义指“假装无力” -> 微弱暗淡的，不明显的。"
  },
  {
    "word": "dizzy",
    "phonetic": "/ˈdɪzi/",
    "pos": "adj./vt.",
    "meaning": "头晕目眩的， 眩晕的； 令人眼花缭乱飞旋的； 使眩晕混乱",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "核心意象为“愚钝发懵” -> 头晕目眩的，眩晕的。"
  },
  {
    "word": "optimistic",
    "phonetic": "/ˌɒptɪˈmɪstɪk/",
    "pos": "adj.",
    "meaning": "乐观的， 充满积极信心的； 乐天派的",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "optim-（最好的） + -istic（形容词后缀） -> 乐观的，充满积极信心的。"
  },
  {
    "word": "pessimistic",
    "phonetic": "/ˌpesɪˈmɪstɪk/",
    "pos": "adj.",
    "meaning": "悲观的， 悲观失望的； 厌世疑虑重重的",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "pessim-（最坏的） + -istic（形容词后缀） -> 悲观的，悲观失望的。"
  },
  {
    "word": "passion",
    "phonetic": "/ˈpæʃn/",
    "pos": "n.",
    "meaning": "激情， 极度强烈的热情； 挚爱之物； 酷爱； 耶稣受难",
    "part": "第二部分：高频专业词根族",
    "group": "【60. pass / path 感受/痛苦】",
    "analysis_type": "构词",
    "analysis": "pass-（承受） + -ion，引申指激情 -> 激情，极度强烈的热情。"
  },
  {
    "word": "eager",
    "phonetic": "/ˈiːɡə(r)/",
    "pos": "adj.",
    "meaning": "热切渴望的， 急不可耐的； 充满求知若渴激情的",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "本义指“尖锐锋利” -> 热切渴望的，急不可耐的。"
  },
  {
    "word": "enthusiastic",
    "phonetic": "/ɪnˌθjuːziˈæstɪk/",
    "pos": "adj.",
    "meaning": "热情的， 热心的",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、医疗生理与情绪心理】",
    "analysis_type": "构词",
    "analysis": "en-（进入） + the-（神明） + -astic，引申指热情的 -> 热情的，热心的。"
  },
  {
    "word": "calm",
    "phonetic": "/kɑːm/",
    "pos": "adj./n./v.",
    "meaning": "镇静沉着冷静的；平静无波的风平浪静的；使平静镇定",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "源自希腊语 kauma（炎炎夏日午后） -> 镇静沉着冷静的。"
  },
  {
    "word": "nervous",
    "phonetic": "/ˈnɜːvəs/",
    "pos": "adj.",
    "meaning": "焦虑紧张不安的； 神经系统的， 神经源性的； 心惊胆战的",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "nerve（神经） + -ous（多…的） -> 焦虑紧张不安的。"
  },
  {
    "word": "appear",
    "phonetic": "/əˈpɪə(r)/",
    "pos": "vi.",
    "meaning": "突然出现，显现露面；似乎，看来好像；登台亮相",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "ap-（去） + pear（显现看见） -> 突然出现，显现露面。"
  },
  {
    "word": "appearance",
    "phonetic": "/əˈpɪərəns/",
    "pos": "n.",
    "meaning": "外貌， 外表体貌； 公开露面， 登台亮相； 骤然出现浮现",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "appear（出现） + -ance（名词行为状态） -> 外貌，外表体貌。"
  },
  {
    "word": "case",
    "phonetic": "/keɪs/",
    "pos": "n./vt.",
    "meaning": "情况，事实境况；箱盒容器；案件，病例",
    "part": "第二部分：高频专业词根族",
    "group": "【41. cid / cas 落下/降临/发生】",
    "analysis_type": "构词",
    "analysis": "词根核心意象引申 -> 情况，事实境况。"
  },
  {
    "word": "chair",
    "phonetic": "/tʃeə(r)/",
    "pos": "n./vt.",
    "meaning": "椅子，坐具；大学首席讲席教授职位；会议主席",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "源自古希腊语 kathedra（有扶手的高贵） -> 椅子，坐具。"
  },
  {
    "word": "colony",
    "phonetic": "/ˈkɒləni/",
    "pos": "n.",
    "meaning": "殖民地，宗主国统治下的海外属地；群体，聚居群落群居区；具有相同国籍或职业者的侨民聚居区，聚集区社区",
    "part": "第一部分：超级核心母词族",
    "group": "【21. col / cult 耕作/培养】",
    "analysis_type": "构词",
    "analysis": "源自拉丁词根 colonia（古罗马退役军） -> 殖民地，宗主国统治下的海外属地。"
  },
  {
    "word": "concrete",
    "phonetic": "/ˈkɒŋkriːt/ (n./adj.), /kənˈkriːt/ (v.)",
    "pos": "n./adj./v.",
    "meaning": "adj. 具体的， 有形的 n. 混凝土",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "con-（共同） + cret-（生长） -> 颗粒凝结为坚实固态 -> 具体的。"
  },
  {
    "word": "dive",
    "phonetic": "/daɪv/",
    "pos": "vi./n.",
    "meaning": "跳水；潜水，深潜探索；暴跌，急剧俯冲暴挫",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "核心意象为“将身躯彻底没” -> 跳水。"
  },
  {
    "word": "drown",
    "phonetic": "/draʊn/",
    "pos": "v.",
    "meaning": "溺水， 溺死， 淹死； 浸泡淹没； （噪音）压过淹没其他声音",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "与 drink（饮用）同源 -> 溺水，溺死。"
  },
  {
    "word": "exotic",
    "phonetic": "/ɪɡˈzɒtɪk/",
    "pos": "adj.",
    "meaning": "具有异国情调的， 来自异域奇特的； 外来的， 罕见奇妙的",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "exo-（在外部） + -tic（形容词后缀） -> 具有异国情调的，来自异域奇特的。"
  },
  {
    "word": "integrate",
    "phonetic": "/ˈɪntɪɡreɪt/",
    "pos": "v.",
    "meaning": "整合， 使成一体； 使融入社会； 求…的积分（数学积分）",
    "part": "第二部分：高频专业词根族",
    "group": "【66. tang / tact / tag 触碰/接触】",
    "analysis_type": "构词",
    "analysis": "in-（不） + teg-（触碰） + -ate（动词后缀） -> 整合，使成一体。"
  },
  {
    "word": "kidnap",
    "phonetic": "/ˈkɪdnæp/",
    "pos": "vt./n.",
    "meaning": "绑架， 诱拐劫持（尤指人质绑架）； 绑架案， 勒赎绑架行为",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "kid（孩童） + nap（顺手猛扑一把） -> 绑架，诱拐劫持（尤指人质绑架）。"
  },
  {
    "word": "kneel",
    "phonetic": "/niːl/",
    "pos": "vi.",
    "meaning": "跪， 下跪； 双膝着地祈祷/致敬",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "词根族核心意象 -> 跪，下跪。"
  },
  {
    "word": "lag",
    "phonetic": "/læɡ/",
    "pos": "vi./n.",
    "meaning": "落后， 滞后于； 间隔， 滞后时间",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "源自斯堪的纳维亚语（脚步拖沓沉重） -> 落后，滞后于。"
  },
  {
    "word": "landscape",
    "phonetic": "/ˈlændskeɪp/",
    "pos": "n./vt.",
    "meaning": "风景， 自然地貌风光； 风景画； 全景态势； 美化环境",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然生态、地理环境与动植物】",
    "analysis_type": "构词",
    "analysis": "land（陆地） + -scape（形态） -> 政治商业的全景版图生态 -> 风景，自然地貌风光。"
  },
  {
    "word": "later",
    "phonetic": "/ˈleɪtə(r)/",
    "pos": "adv./adj.",
    "meaning": "后来， 随后； 以后的， 后期的； 更晚的（的比较级）",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "late（迟） + -er（比较级后缀） -> 后来，随后。"
  },
  {
    "word": "launch",
    "phonetic": "/lɔːntʃ/",
    "pos": "vt./vi./n.",
    "meaning": "发起，发动；推出，投放市场；发射",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "lance-（投掷标枪） -> 如飞掷长矛般将新产品猛力推向市场 -> 发起，发动。"
  },
  {
    "word": "lead",
    "phonetic": "/liːd/ (v./n.), /led/ (n.)",
    "pos": "v./n.",
    "meaning": "带领，引领；导致引起；处于领先主导地位",
    "part": "第一部分：超级核心母词族",
    "group": "【17. it 行走】",
    "analysis_type": "构词",
    "analysis": "核心意象为“在前方手持火” -> 带领，引领。"
  },
  {
    "word": "leap",
    "phonetic": "/liːp/",
    "pos": "vi./n.",
    "meaning": "飞跃， 跳跃； 剧增， 猛涨； 质的飞跃",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "核心意象为“双足同时奋力” -> 飞跃，跳跃。"
  },
  {
    "word": "left-handed",
    "phonetic": "/ˌleft ˈhændɪd/",
    "pos": "adj.",
    "meaning": "左撇子的，习惯用左手的；左手操作的；别扭尴尬的",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "left（左边的） + hand（手） + -ed（形容词后缀） -> 左撇子的，习惯用左手的。"
  },
  {
    "word": "lengthen",
    "phonetic": "/ˈleŋθən/",
    "pos": "v.",
    "meaning": "变长， 延长； 延长（时间/期限）； 拉长",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "length（长度） + -en（动词后缀，引申指变长 -> 变长，延长。"
  },
  {
    "word": "lengthy",
    "phonetic": "/ˈleŋθi/",
    "pos": "adj.",
    "meaning": "漫长的， 冗长的； 过于冗长乏味的",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "length（长度） + -y（形容词后缀） -> 漫长的，冗长的。"
  },
  {
    "word": "liable",
    "phonetic": "/ˈlaɪəbl/",
    "pos": "adj.",
    "meaning": "有法律责任的， 承担法定义务的； 极可能发生的， 易于患病的",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "源自法文 lier（捆绑/约束） + -able（能…的） -> 有法律责任的，承担法定义务的。"
  },
  {
    "word": "license",
    "phonetic": "/ˈlaɪsns/",
    "pos": "n./vt.",
    "meaning": "执照， 许可证； 特许专利权； 特许批准， 准许",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "源自拉丁词根 licere（被法律或公序） -> 执照，许可证。"
  },
  {
    "word": "lift",
    "phonetic": "/lɪft/",
    "pos": "vt./n.",
    "meaning": "举起，提起；提升，振奋；解除",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "源自古诺斯语 lypta（将重物高高举） -> 举起，提起。"
  },
  {
    "word": "loom",
    "phonetic": "/luːm/",
    "pos": "vi./n.",
    "meaning": "（庞然大物或危机）赫然耸现， 隐隐迫近； 织布机",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "词根核心意象引申 -> （庞然大物或危机）赫然耸现，隐隐迫近。"
  },
  {
    "word": "loophole",
    "phonetic": "/ˈluːphəʊl/",
    "pos": "n.",
    "meaning": "法律或规则中的漏洞， 破绽； 古代城堡墙上的窥视射箭狭孔",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "loop（圆环弯孔） + hole（洞穴） -> 法律或规则中的漏洞，破绽。"
  },
  {
    "word": "loose",
    "phonetic": "/luːs/",
    "pos": "adj./v.",
    "meaning": "松散的，未系紧的；不受拘束的，自由的；不严谨精确的",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "核心意象为“被解开绳索彻” -> 松散的，未系紧的。"
  },
  {
    "word": "lower",
    "phonetic": "/ˈləʊə(r)/",
    "pos": "vt./adj.",
    "meaning": "降低，减少；放下，降下；较低的，低洼的",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "low（低的） + -er（动词） -> 降低，减少。"
  },
  {
    "word": "main",
    "phonetic": "/meɪn/",
    "pos": "adj./n.",
    "meaning": "最主要的， 核心最重要的； 总管道， 总线路； 大海",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "本义ægen（气力） -> 最主要的，核心最重要的。"
  },
  {
    "word": "mainstream",
    "phonetic": "/ˈmeɪnstriːm/",
    "pos": "n./adj.",
    "meaning": "主流， 主流趋势； 主流的， 正统大众所认可的",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "main（主要的） + stream（大江大河溪流） -> 主流，主流趋势。"
  },
  {
    "word": "maintain",
    "phonetic": "/meɪnˈteɪn/",
    "pos": "vt.",
    "meaning": "维持，保持；坚持认为；维修，保养",
    "part": "第一部分：超级核心母词族",
    "group": "【20. ten / tain / tin 握/持/容纳】",
    "analysis_type": "构词",
    "analysis": "main-（手） + tain-（握住） -> 用手稳稳握住不松手 -> 维持，保持。"
  },
  {
    "word": "manipulate",
    "phonetic": "/məˈnɪpjuleɪt/",
    "pos": "vt.",
    "meaning": "操作，操纵设备；操控，操纵摆布",
    "part": "第一部分：超级核心母词族",
    "group": "【32. man / manu 手】",
    "analysis_type": "构词",
    "analysis": "词根 manipulus（源自 man） -> 操作，操纵设备。"
  },
  {
    "word": "mark",
    "phonetic": "/mɑːk/",
    "pos": "n./v.",
    "meaning": "印记，痕迹；分数，成绩；标志",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "源自原始ō（在国界边境树） -> 印记，痕迹。"
  },
  {
    "word": "mask",
    "phonetic": "/mɑːsk/",
    "pos": "n./vt.",
    "meaning": "面具， 口罩， 防护面罩； 遮蔽， 掩饰伪装； 戴面具",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "源自中世纪阿拉伯语 maskhara（滑稽演员在戏） -> 面具，口罩。"
  },
  {
    "word": "mass",
    "phonetic": "/mæs/",
    "pos": "n./adj./v.",
    "meaning": "n. 大量，大批；民众，群众；物理质量 adj. 大规模的大众的",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "源自希腊语 maza（用手将水与大） -> 大量，巨额。"
  },
  {
    "word": "massive",
    "phonetic": "/ˈmæsɪv/",
    "pos": "adj.",
    "meaning": "巨大的， 极其庞大的； 厚重结实的； 大规模举国体制的",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "mass（质量） + -ive（具有…属性的） -> 巨大的，极其庞大的。"
  },
  {
    "word": "measure",
    "phonetic": "/ˈmeʒə(r)/",
    "pos": "v./n.",
    "meaning": "量，测量度量；衡量评估；措施，办法",
    "part": "第二部分：高频专业词根族",
    "group": "【56. meter / metr 测量/计量】",
    "analysis_type": "构词",
    "analysis": "源自拉丁词根 mensura / metiri（利用标尺绳墨精准校核长等 -> 量，测量度量。"
  },
  {
    "word": "merely",
    "phonetic": "/ˈmɪəli/",
    "pos": "adv.",
    "meaning": "仅仅， 只不过， 纯粹只是",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "mere（纯粹的） + -ly（副词后缀） -> 仅仅，只不过。"
  },
  {
    "word": "military",
    "phonetic": "/ˈmɪlətri/",
    "pos": "adj./n.",
    "meaning": "军事的， 军用的； 军人的； 军队， 武装力量",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "milit-（士兵） + -ary（关于…的形容） -> 军事的，军用的。"
  },
  {
    "word": "moderate",
    "phonetic": "/ˈmɒdərət/ (adj.), /ˈmɒdəreɪt/ (v.)",
    "pos": "adj./v./n.",
    "meaning": "温和适度的，中等的；缓和，使适度；主持节制",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "mod-（尺度） + -erate（动词） -> 温和适度的，中等的。"
  },
  {
    "word": "modern",
    "phonetic": "/ˈmɒdn/",
    "pos": "adj./n.",
    "meaning": "现代的， 当代的； 近代历史的； 新颖时尚的； 现代人",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "源自晚期词根 modernus（属于当下的） -> 现代的，当代的。"
  },
  {
    "word": "modify",
    "phonetic": "/ˈmɒdɪfaɪ/",
    "pos": "vt.",
    "meaning": "修改， 更改修饰； 改造； （语法上）修饰限制",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "mod-（尺度） + -ify（使动词后缀，引申指修改 -> 修改，更改修饰。"
  },
  {
    "word": "moreover",
    "phonetic": "/mɔːrˈəʊvə(r)/",
    "pos": "adv.",
    "meaning": "而且， 此外， 再者（书面正式递进连词）",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "more（更多的论据） + over（在已有基础之） -> 而且，此外。"
  },
  {
    "word": "mould",
    "phonetic": "/məʊld/",
    "pos": "n./vt.",
    "meaning": "模具，铸模；发霉的霉菌，霉斑；塑造，打造成型",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "词根核心意象引申 -> 模具，铸模。"
  },
  {
    "word": "multiply",
    "phonetic": "/ˈmʌltɪplaɪ/",
    "pos": "v.",
    "meaning": "乘， 使相乘； 成倍增加， 急剧繁殖倍增",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "multi-（多） + ply（折叠） -> 乘，使相乘。"
  },
  {
    "word": "mutton",
    "phonetic": "/ˈmʌtn/",
    "pos": "n.",
    "meaning": "羊肉",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "本义指“绵羊” -> 专门指代供食用的成年羊肉 -> 羊肉。"
  },
  {
    "word": "namely",
    "phonetic": "/ˈneɪmli/",
    "pos": "adv.",
    "meaning": "即， 也就是， 换言之（用于列举具体细节）",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "name（指明名字） + -ly（副词后缀） -> 即，也就是。"
  },
  {
    "word": "napkin",
    "phonetic": "/ˈnæpkɪn/",
    "pos": "n.",
    "meaning": "餐巾， 餐巾纸； 尿布（英国婴儿尿布称）",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "本义指“餐桌上的高档纯白亚麻台布/桌布” + -kin（微小指小亲昵） -> 餐巾，餐巾纸。"
  },
  {
    "word": "narrate",
    "phonetic": "/nəˈreɪt/",
    "pos": "vt.",
    "meaning": "叙述， 讲述故事； 为（纪录片/影视剧）担任解说配音旁白",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "源自拉丁词根 gnarus（通晓世事心知）之动词形态 narrare -> 叙述，讲述故事。"
  },
  {
    "word": "necessary",
    "phonetic": "/ˈnesəsəri/",
    "pos": "adj./n.",
    "meaning": "必需的， 必要的， 不可缺少的； 必然不可避免的； 必需品",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "ne-（不） + cess-（退让） -> 必需的，必要的。"
  },
  {
    "word": "negative",
    "phonetic": "/ˈneɡətɪv/",
    "pos": "adj./n./vt.",
    "meaning": "负面的，消极的；否定的；阴性的",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "neg-（否定） + -ative（形容词后缀） -> 负面的，消极的。"
  },
  {
    "word": "network",
    "phonetic": "/ˈnetwɜːk/",
    "pos": "n./v.",
    "meaning": "网络，网状组织；广播网，电视网；人际交往关系网",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "net（丝线交织编成） + work（劳作成品） -> 网络，网状组织。"
  },
  {
    "word": "neutral",
    "phonetic": "/ˈnjuːtrəl/",
    "pos": "adj./n.",
    "meaning": "中立的， 不偏不倚的； 中性的； 中立国； 汽车空挡",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "ne-（不） + uter（两者中的任何） -> 中立的，不偏不倚的。"
  },
  {
    "word": "numerous",
    "phonetic": "/ˈnjuːmərəs/",
    "pos": "adj.",
    "meaning": "为数众多的， 大量的， 无数的",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "numer-（数字） + -ous（多…的形容词） -> 为数众多的，大量的。"
  },
  {
    "word": "nylon",
    "phonetic": "/ˈnaɪlɒn/",
    "pos": "n.",
    "meaning": "尼龙（合成聚酰胺纤维）； 尼龙丝袜",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "合成杜邦公司人造词 -> 尼龙（合成聚酰胺纤维）。"
  },
  {
    "word": "obscure",
    "phonetic": "/əbˈskjʊə(r)/",
    "pos": "adj./vt.",
    "meaning": "晦涩难懂的，深奥含糊的；不知名的，鲜为人知的；遮掩掩盖，使变暗模糊不清",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "ob-（在前面） + scur-（被厚厚乌云阴） -> 晦涩难懂的，深奥含糊的。"
  },
  {
    "word": "obstacle",
    "phonetic": "/ˈɒbstəkl/",
    "pos": "n.",
    "meaning": "障碍，绊脚石；障碍赛跑训练道具",
    "part": "第一部分：超级核心母词族",
    "group": "【2. sta / sist / st 站立/建立/停留】",
    "analysis_type": "构词",
    "analysis": "ob-（在…面前横挡） + sta-（站立） + -acle（实体名词后缀） -> 障碍，绊脚石。"
  },
  {
    "word": "obtain",
    "phonetic": "/əbˈteɪn/",
    "pos": "v.",
    "meaning": "通过努力获得，赢得考取；沿袭，流行存在",
    "part": "第一部分：超级核心母词族",
    "group": "【20. ten / tain / tin 握/持/容纳】",
    "analysis_type": "构词",
    "analysis": "ob-（朝向…去） + tain（握住） -> 通过努力获得，赢得考取。"
  },
  {
    "word": "obvious",
    "phonetic": "/ˈɒbviəs/",
    "pos": "adj.",
    "meaning": "显而易见的， 明显的， 一清二楚一目了然的",
    "part": "第一部分：超级核心母词族",
    "group": "【16. vi / via 路】",
    "analysis_type": "构词",
    "analysis": "ob-（正对着） + vi-（道路） + -ous，引申指显而易见的 -> 显而易见的，明显的。"
  },
  {
    "word": "occupy",
    "phonetic": "/ˈɒkjupaɪ/",
    "pos": "vt.",
    "meaning": "占领，武力进占；占用；使忙碌于",
    "part": "第一部分：超级核心母词族",
    "group": "【1. cap / capt / cept / ceiv / cip 抓/拿/容纳/理解】",
    "analysis_type": "构词",
    "analysis": "oc-（朝向） + cup-（抓取） -> 占领，武力进占。"
  },
  {
    "word": "onion",
    "phonetic": "/ˈʌnjən/",
    "pos": "n.",
    "meaning": "洋葱， 洋葱头",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "词根 unio（合一） -> 因多层鳞茎紧密包裹为一体 -> 洋葱，洋葱头。"
  },
  {
    "word": "orderly",
    "phonetic": "/ˈɔːdəli/",
    "pos": "adj./n.",
    "meaning": "井然有序的， 整齐有条理的； 守纪律的； 医院勤杂工， 护工",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "order（秩序） + -ly（形容词后缀） -> 井然有序的，整齐有条理的。"
  },
  {
    "word": "organ",
    "phonetic": "/ˈɔːɡən/",
    "pos": "n.",
    "meaning": "器官；机关报刊，权威官方喉舌机构；风琴，管风琴",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "源自古希腊语 organon（用于从事特定） -> （人体或动植物生理）器官 -> 器官。"
  },
  {
    "word": "organize",
    "phonetic": "/ˈɔːɡənaɪz/",
    "pos": "vt.",
    "meaning": "组织，筹备筹划；整理编排，使条理化系统化；组织建立",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "organ（器械） + -ize（使动词后缀） -> 组织，筹备筹划。"
  },
  {
    "word": "originate",
    "phonetic": "/əˈrɪdʒɪneɪt/",
    "pos": "v.",
    "meaning": "发源， 源自起于； 首创， 开创创立； 发起",
    "part": "第二部分：高频专业词根族",
    "group": "【59. orig 升起/开始】",
    "analysis_type": "构词",
    "analysis": "origin（起源） + -ate（动词后缀） -> 发源，源自起于。"
  },
  {
    "word": "ornament",
    "phonetic": "/ˈɔːnəmənt/",
    "pos": "n./vt.",
    "meaning": "装饰品， 点缀物； 装饰， 美化",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "orn-（装备） + -ment（名词后缀） -> 装饰品，点缀物。"
  },
  {
    "word": "outdated",
    "phonetic": "/ˌaʊtˈdeɪtɪd/",
    "pos": "adj.",
    "meaning": "过时的， 陈旧落伍的； 废弃不用的",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "out-（超出） + date（日期） + -ed，引申指过时的 -> 过时的，陈旧落伍的。"
  },
  {
    "word": "outline",
    "phonetic": "/ˈaʊtlaɪn/",
    "pos": "n./vt.",
    "meaning": "轮廓， 外形； 大纲， 提要； 概述， 勾勒出…的轮廓",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "out（外部） + line（线条） -> 文章或方案的骨架脉络 -> 轮廓，外形。"
  },
  {
    "word": "outstanding",
    "phonetic": "/aʊtˈstændɪŋ/",
    "pos": "adj.",
    "meaning": "杰出的， 出众的； 显著突出的； 未解决的， 未清偿的",
    "part": "第一部分：超级核心母词族",
    "group": "【2. sta / sist / st 站立/建立/停留】",
    "analysis_type": "构词",
    "analysis": "out（向外） + stand（站立） + -ing，引申指杰出的 -> 杰出的，出众的。"
  },
  {
    "word": "oversight",
    "phonetic": "/ˈəʊvəsaɪt/",
    "pos": "n.",
    "meaning": "疏忽， 失察疏漏； 监管， 监察看管",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "over（自上方俯瞰） + sight（视线） -> 疏忽，失察疏漏。"
  },
  {
    "word": "owe",
    "phonetic": "/əʊ/",
    "pos": "vt.",
    "meaning": "欠（债/钱）； 归功于， 得益于； 感恩感激",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "本义指“拥有” -> 欠（债，钱）。"
  },
  {
    "word": "pace",
    "phonetic": "/peɪs/",
    "pos": "n./v.",
    "meaning": "步调，步伐；生活节奏，速度；踱步，跨步走",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "源自拉丁词根 passus（跨出一步的双） -> 步调，步伐。"
  },
  {
    "word": "pack",
    "phonetic": "/pæk/",
    "pos": "v./n.",
    "meaning": "收拾行李，打包；塞满挤满；包裹，背包",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "源自中古低地德语 pak（用麻绳帆布紧） -> 塞入紧凑空间或群聚狩猎 -> 收拾行李，打包。"
  },
  {
    "word": "packet",
    "phonetic": "/ˈpækɪt/",
    "pos": "n.",
    "meaning": "小包， 小袋； 数据包（计算机网络）； 一大笔钱",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "pack（包裹） + -et（指小后缀） -> 小包，小袋。"
  },
  {
    "word": "paint",
    "phonetic": "/peɪnt/",
    "pos": "n./v.",
    "meaning": "油漆， 颜料； 绘画， 涂刷； 描绘， 刻画描摹",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "源自拉丁词根 pingere（用彩色矿物浆） -> 以颜料描摹形态留存真容 -> 油漆，颜料。"
  },
  {
    "word": "paradox",
    "phonetic": "/ˈpærədɒks/",
    "pos": "n.",
    "meaning": "悖论， 反论； 自相矛盾却看似有理的怪事",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "para-（违背） + dox-（观念） -> 悖论，反论。"
  },
  {
    "word": "parcel",
    "phonetic": "/ˈpɑːsl/",
    "pos": "n./vt.",
    "meaning": "包裹，小包邮包；一块，一片；打包，分包划分",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "本义指“一小部分” -> 包裹，小包邮包。"
  },
  {
    "word": "partial",
    "phonetic": "/ˈpɑːʃl/",
    "pos": "adj.",
    "meaning": "部分的， 不完全的； 偏袒的， 偏心的（偏爱）",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "part（部分） + -ial（形容词后缀） -> 部分的，不完全的。"
  },
  {
    "word": "particle",
    "phonetic": "/ˈpɑːtɪkl/",
    "pos": "n.",
    "meaning": "微粒， 粒子； 极小量， 微量； （语法中的）助词",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "part（部分） + -icle（指小后缀） -> 微粒，粒子。"
  },
  {
    "word": "particular",
    "phonetic": "/pəˈtɪkjələ(r)/",
    "pos": "adj./n.",
    "meaning": "特定的， 特指的； 挑剔苛求的； 细节， 详情",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "part（部分） + -icular（形容词后缀） -> 要求严苛苛求细节 -> 特定的，特指的。"
  },
  {
    "word": "pat",
    "phonetic": "/pæt/",
    "pos": "v./n./adj.",
    "meaning": "轻拍， 抚摩； 轻拍声； 小块； 恰好的， 顺口敷衍的",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "拟声词 -> 轻拍，抚摩。"
  },
  {
    "word": "pave",
    "phonetic": "/peɪv/",
    "pos": "vt.",
    "meaning": "铺路， 铺设地面； 为…铺平道路",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "词根 pavire（用重木夯全力） -> 铺路，铺设地面。"
  },
  {
    "word": "peak",
    "phonetic": "/piːk/",
    "pos": "n./vi./adj.",
    "meaning": "山峰， 顶峰； 巅峰时期； 达到最高峰； 高峰期的",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然生态、地理环境与动植物】",
    "analysis_type": "构词",
    "analysis": "与 pike（尖头矛枪）同源 -> 山峰，顶峰。"
  },
  {
    "word": "peculiar",
    "phonetic": "/pɪˈkjuːliə(r)/",
    "pos": "adj.",
    "meaning": "奇怪独特的， 罕见的； 特有的， 专属独特的",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "词根 peculium（古罗马奴隶在） -> 奇怪独特的，罕见的。"
  },
  {
    "word": "peer",
    "phonetic": "/pɪə(r)/",
    "pos": "n./vi.",
    "meaning": "同行， 同龄人； 贵族成员； 仔细端详， 凝视窥探",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "词根核心意象引申 -> 同行，同龄人。"
  },
  {
    "word": "penetrate",
    "phonetic": "/ˈpenətreɪt/",
    "pos": "v.",
    "meaning": "穿透， 刺入； 深入； 看透",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "pen-（在内部深处） + -etrate（动词后缀） -> 彻底看穿伪装迷雾 -> 穿透，刺入。"
  },
  {
    "word": "permanent",
    "phonetic": "/ˈpɜːmənənt/",
    "pos": "adj.",
    "meaning": "永久的， 长久不变的； 终身的",
    "part": "第一部分：超级核心母词族",
    "group": "【2. sta / sist / st 站立/建立/停留】",
    "analysis_type": "构词",
    "analysis": "per-（始终） + man-（停留） + -ent，引申指永久的 -> 永久的，长久不变的。"
  },
  {
    "word": "pertain",
    "phonetic": "/pəˈteɪn/",
    "pos": "vi.",
    "meaning": "属于， 附属； 关于， 与…直接相关",
    "part": "第一部分：超级核心母词族",
    "group": "【20. ten / tain / tin 握/持/容纳】",
    "analysis_type": "构词",
    "analysis": "per-（自始至终） + tain（握住） -> 属于，附属。"
  },
  {
    "word": "phase",
    "phonetic": "/feɪz/",
    "pos": "n./vt.",
    "meaning": "阶段， 时期； 月相（天文学）； 分阶段逐步实施",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "源自希腊语 phasis（天体显现的表） -> 阶段，时期。"
  },
  {
    "word": "phrase",
    "phonetic": "/freɪz/",
    "pos": "n./vt.",
    "meaning": "短语， 词组； 警句名言； 用言语表达措辞",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "源自希腊语 phrasis（表达言语风格） -> 短语，词组。"
  },
  {
    "word": "picnic",
    "phonetic": "/ˈpɪknɪk/",
    "pos": "n./vi.",
    "meaning": "野餐； 郊游露餐； 极其轻松容易的事情（口语绝非易事）",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "源自法语 pique-nique（每个人随手各） -> 野餐。"
  },
  {
    "word": "pierce",
    "phonetic": "/pɪəs/",
    "pos": "v.",
    "meaning": "刺穿， 刺破； 穿透（黑暗迷雾）； 洞悉识破",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "源自拉丁词根 pertundere（用力击打凿出） -> 刺穿，刺破。"
  },
  {
    "word": "pigeon",
    "phonetic": "/ˈpɪdʒɪn/",
    "pos": "n.",
    "meaning": "鸽子， 野鸽； 容易受骗上当的人（俚语）",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然生态、地理环境与动植物】",
    "analysis_type": "构词",
    "analysis": "源自晚期词根 pipio（幼小雏鸟啼鸣） -> 鸽子，野鸽。"
  },
  {
    "word": "pioneer",
    "phonetic": "/ˌpaɪəˈnɪə(r)/",
    "pos": "n./v.",
    "meaning": "先驱者， 倡导者， 拓荒者； 开拓开创",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "本义指“为大军在崇山” -> 先驱者，倡导者。"
  },
  {
    "word": "plain",
    "phonetic": "/pleɪn/",
    "pos": "adj./n./adv.",
    "meaning": "清晰显而易见的；朴素简朴的；坦诚直率的",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "词根 planus（平坦平整毫无） -> 清晰显而易见的。"
  },
  {
    "word": "plastic",
    "phonetic": "/ˈplæstɪk/",
    "pos": "n./adj.",
    "meaning": "塑料，人造高分子合成树脂材料；虚伪做作不自然的外在表现；信用卡",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然生态、地理环境与动植物】",
    "analysis_type": "构词",
    "analysis": "源自希腊语 plastikos（具有极高柔韧） -> 塑料，人造高分子合成树脂材料。"
  },
  {
    "word": "pledge",
    "phonetic": "/pledʒ/",
    "pos": "n./vt.",
    "meaning": "庄严誓言， 郑重承诺保证； 抵押典当担保",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "当众立下的庄重承诺 -> 庄严誓言，郑重承诺保证。"
  },
  {
    "word": "plight",
    "phonetic": "/plaɪt/",
    "pos": "n.",
    "meaning": "苦难， 困境， 艰难尴尬的处境",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "本义指“潜伏巨大危险” -> 苦难，困境。"
  },
  {
    "word": "point",
    "phonetic": "/pɔɪnt/",
    "pos": "n./v.",
    "meaning": "尖端，点；要点，核心观点；得分",
    "part": "第二部分：高频专业词根族",
    "group": "【61. punct / pung 刺/点/尖】",
    "analysis_type": "构词",
    "analysis": "源自拉丁词根 punctum（用尖锥刺戳扎） -> 尖端，点。"
  },
  {
    "word": "polish",
    "phonetic": "/ˈpɒlɪʃ/",
    "pos": "vt./n.",
    "meaning": "擦亮，磨光使光滑；修改润色，雕琢打磨；抛光剂",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "源自拉丁词根 polire（用细砂纸全力） -> 擦亮，磨光使光滑。"
  },
  {
    "word": "pond",
    "phonetic": "/pɒnd/",
    "pos": "n.",
    "meaning": "池塘， 小湖； 人工蓄水池",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然生态、地理环境与动植物】",
    "analysis_type": "构词",
    "analysis": "源自 pound（围栏） -> 池塘，小湖。"
  },
  {
    "word": "pork",
    "phonetic": "/pɔːk/",
    "pos": "n.",
    "meaning": "猪肉",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "词根 porcus（猪） -> 专门指代供食用的肉品 -> 猪肉。"
  },
  {
    "word": "portray",
    "phonetic": "/pɔːˈtreɪ/",
    "pos": "vt.",
    "meaning": "描绘， 描摹画像； 在戏剧中饰演刻画（角色）； 表现刻画",
    "part": "第一部分：超级核心母词族",
    "group": "【24. tract 拉/引/抽】",
    "analysis_type": "构词",
    "analysis": "por-（向前） + tray / tr等 -> 描绘，描摹画像。"
  },
  {
    "word": "possibility",
    "phonetic": "/ˌpɒsəˈbɪləti/",
    "pos": "n.",
    "meaning": "可能性， 潜在机率； 可能发生的事； 未来的潜能发展空间",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "pos-（能够） + -ible（能…的） + -ity（抽象名词后缀） -> 可能性，潜在机率。"
  },
  {
    "word": "potential",
    "phonetic": "/pəˈtenʃl/",
    "pos": "adj./n.",
    "meaning": "潜在的，有潜力的；潜力，潜能；电势，势能",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "potent-（具有强劲内在） + -ial（形容词后缀） -> 潜在的，有潜力的。"
  },
  {
    "word": "pour",
    "phonetic": "/pɔː(r)/",
    "pos": "v.",
    "meaning": "倾倒， 倒出（液体）； 倾盆而下（大雨）； 大批涌入涌出",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "本义指“将水流源源不” -> 倾倒，倒出（液体）。"
  },
  {
    "word": "power",
    "phonetic": "/ˈpaʊə(r)/",
    "pos": "n./vt.",
    "meaning": "力量，威力；电力，能源；政权，统治权",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "本义指“拥有达成某事” -> 力量，威力。"
  },
  {
    "word": "presume",
    "phonetic": "/prɪˈzjuːm/",
    "pos": "v.",
    "meaning": "推测， 推定（在缺乏反证时视为真实）； 擅自妄为， 放肆冒昧",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "pre-（在事先） + sume（拿取） -> 推测，推定（在缺乏反证时视为真实）。"
  },
  {
    "word": "probable",
    "phonetic": "/ˈprɒbəbl/",
    "pos": "adj.",
    "meaning": "很可能的， 大概率发生的（比可能性更高）",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "prob-（检验） + -able（能…的） -> 很可能的，大概率发生的（比可能性更高）。"
  },
  {
    "word": "profile",
    "phonetic": "/ˈprəʊfaɪl/",
    "pos": "n./vt.",
    "meaning": "侧面肖像，侧面轮廓；人物生平简介，概况档案；知名度形象",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "pro-（在正前方向前） + file（细线条） -> 个人核心履历画像档案 -> 侧面肖像，侧面轮廓。"
  },
  {
    "word": "project",
    "phonetic": "/ˈprɒdʒekt/ (n.), /prəˈdʒekt/ (v.)",
    "pos": "n./v.",
    "meaning": "项目，工程；预测，推算；投影，展现",
    "part": "第一部分：超级核心母词族",
    "group": "【15. ject 投/掷/扔】",
    "analysis_type": "构词",
    "analysis": "pro-（向前） + ject-（投掷） -> 将构想推演抛向未来规划 -> 项目，工程。"
  },
  {
    "word": "prominent",
    "phonetic": "/ˈprɒmɪnənt/",
    "pos": "adj.",
    "meaning": "显著突出的， 极其醒目的； 卓越杰出的， 享誉社会的知名人物",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "pro-（向前） + min-（突出） + -ent，引申指显著突出的 -> 显著突出的，极其醒目的。"
  },
  {
    "word": "prompt",
    "phonetic": "/prɒmpt/",
    "pos": "adj./vt./n.",
    "meaning": "迅速敏捷及时的；促使，激励激起；提示台词，提示符",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "pro-（向前） + mpt（拿取） -> 迅速敏捷及时的。"
  },
  {
    "word": "proof",
    "phonetic": "/pruːf/",
    "pos": "n./adj.",
    "meaning": "证据， 证明； 严格数学论证； 校样； 防…的， 耐…的",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "源自拉丁词根 probare（经受严格考验） -> 证据，证明。"
  },
  {
    "word": "prosper",
    "phonetic": "/ˈprɒspə(r)/",
    "pos": "vi.",
    "meaning": "繁荣， 兴旺昌盛； 蓬勃发展茁壮成长（繁荣的）",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "pro-（顺应向前） + sper-（希望） -> 繁荣，兴旺昌盛。"
  },
  {
    "word": "protect",
    "phonetic": "/prəˈtekt/",
    "pos": "vt.",
    "meaning": "保护， 保卫； 防护捍卫",
    "part": "第二部分：高频专业词根族",
    "group": "【68. tect 覆盖/掩蔽】",
    "analysis_type": "构词",
    "analysis": "pro-（在最前方） + tect（屋顶） -> 保护，保卫。"
  },
  {
    "word": "protest",
    "phonetic": "/ˈprəʊtest/ (n.), /prəˈtest/ (v.)",
    "pos": "n./v.",
    "meaning": "抗议，坚决反对；抗议集会，申辩抗辩；坚决断言声明",
    "part": "第二部分：高频专业词根族",
    "group": "【69. test 证据/见证】",
    "analysis_type": "构词",
    "analysis": "pro-（公开展现在大） + test（当堂作证） -> 抗议，坚决反对。"
  },
  {
    "word": "punctual",
    "phonetic": "/ˈpʌŋktʃuəl/",
    "pos": "adj.",
    "meaning": "准时的， 守时的； 分秒不差毫不迟到的",
    "part": "第二部分：高频专业词根族",
    "group": "【61. punct / pung 刺/点/尖】",
    "analysis_type": "构词",
    "analysis": "punct-（用尖锐表针在） + -ual（形容词后缀） -> 准时的，守时的。"
  },
  {
    "word": "pursue",
    "phonetic": "/pəˈsjuː/",
    "pos": "vt.",
    "meaning": "追求，致力于；追逐，追捕；继续进行",
    "part": "第一部分：超级核心母词族",
    "group": "【30. sequ / secut 跟随】",
    "analysis_type": "构词",
    "analysis": "pur-（向前） + sue-（跟随） -> 一路紧紧向前跟随不舍 -> 追求，致力于。"
  },
  {
    "word": "quarter",
    "phonetic": "/ˈkwɔːtə(r)/",
    "pos": "n./vt.",
    "meaning": "四分之一；一刻钟；季度",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "源自拉丁词根 quartus（第四） -> 四分之一。"
  },
  {
    "word": "queen",
    "phonetic": "/kwiːn/",
    "pos": "n.",
    "meaning": "女王， 王后； 蜂王， 蚁后； 纸牌或国际象棋中的后",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "同源（妇女） -> 女王，王后。"
  },
  {
    "word": "quest",
    "phonetic": "/kwest/",
    "pos": "n./vi.",
    "meaning": "长期的艰难求索， 探索探寻； 寻求追求",
    "part": "第一部分：超级核心母词族",
    "group": "【38. quest / quir / quis 询问/求索】",
    "analysis_type": "构词",
    "analysis": "源自拉丁词根 quaerere / quaesitum（四处奔走询问/等 -> 长期的艰难求索，探索探寻。"
  },
  {
    "word": "queue",
    "phonetic": "/kjuː/",
    "pos": "n./vi.",
    "meaning": "（人或车辆排成的）长队； 队列； 排队等候",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "词根 cauda（动物身后甩动） -> （人或车辆排成的）长队。"
  },
  {
    "word": "radar",
    "phonetic": "/ˈreɪdɑː(r)/",
    "pos": "n.",
    "meaning": "雷达， 无线电探测与测距系统； 敏锐直觉（受到关注）",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "二战全军首创缩略首字母拼写词：RAdio Detection And等 -> 雷达，无线电探测与测距系统。"
  },
  {
    "word": "radiation",
    "phonetic": "/ˌreɪdiˈeɪʃn/",
    "pos": "n.",
    "meaning": "辐射， 放射线； 发散",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然地理、动植物与环境保护】",
    "analysis_type": "构词",
    "analysis": "radi-（光线） + -ation（名词后缀） -> 辐射，放射线。"
  },
  {
    "word": "radical",
    "phonetic": "/ˈrædɪkl/",
    "pos": "adj./n.",
    "meaning": "根本的，彻底的；激进极端的；激进派分子",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "radic-（植物根系） + -al（形容词后缀） -> 根本的，彻底的。"
  },
  {
    "word": "raise",
    "phonetic": "/reɪz/",
    "pos": "vt./n.",
    "meaning": "举起， 抬高； 筹集（资金）； 抚养抚育（孩子异议）； 加薪",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "源自古诺斯语 reisa（用双手使原本） -> 举起，抬高。"
  },
  {
    "word": "rank",
    "phonetic": "/ræŋk/",
    "pos": "n./v./adj.",
    "meaning": "军衔，军阶；社会地位阶层；排，行列",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "与 range（排列）同源 -> 排列整齐的层级行列 -> 军衔，军阶。"
  },
  {
    "word": "ready",
    "phonetic": "/ˈredi/",
    "pos": "adj./vt.",
    "meaning": "准备就绪的， 准备好的； 敏捷即刻的； 使准备好",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "本义æde（整装待发备好） -> 准备就绪的，准备好的。"
  },
  {
    "word": "reality",
    "phonetic": "/riˈæləti/",
    "pos": "n.",
    "meaning": "现实，客观现实；真实性，逼真性；客观实际事实",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "real（真实的） + -ity（抽象名词后缀） -> 现实，客观现实。"
  },
  {
    "word": "realize",
    "phonetic": "/ˈriːəlaɪz/",
    "pos": "vt.",
    "meaning": "认识到，领悟意识到；使成为现实，兑现实现；变现",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "real（现实的） + -ize（使动词后缀，引申指认识到 -> 认识到，领悟意识到。"
  },
  {
    "word": "reap",
    "phonetic": "/riːp/",
    "pos": "v.",
    "meaning": "收割， 收获（庄稼）； 收获获得， 谋取（巨大利益）",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然生态、地理环境与动植物】",
    "analysis_type": "构词",
    "analysis": "源自原始īpan（在金秋时节手） -> 收割，收获（庄稼）。"
  },
  {
    "word": "recipe",
    "phonetic": "/ˈresəpi/",
    "pos": "n.",
    "meaning": "烹饪食谱，菜谱；诀窍，行之有效的方法；致祸之由，必由之路",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "词根 recipe（请照方抓药领） -> 烹饪食谱，菜谱。"
  },
  {
    "word": "recover",
    "phonetic": "/rɪˈkʌvə(r)/",
    "pos": "v.",
    "meaning": "恢复， 痊愈康复； 重新找回失物； 复苏挽回",
    "part": "第一部分：超级核心母词族",
    "group": "【1. cap / capt / cept / ceiv / cip 抓/拿/容纳/理解】",
    "analysis_type": "构词",
    "analysis": "re-（重新） + cover（源自拉丁词根） -> 恢复，痊愈康复。"
  },
  {
    "word": "recruit",
    "phonetic": "/rɪˈkruːt/",
    "pos": "v./n.",
    "meaning": "招募，吸收；招聘招纳贤才；新兵，新成员",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "re-（再次） + cruit（生长） -> 招募，吸收。"
  },
  {
    "word": "refresh",
    "phonetic": "/rɪˈfreʃ/",
    "pos": "v.",
    "meaning": "使恢复精力， 使精神振作； 刷新（网页/数据）； 唤起回忆",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "re-（重新） + fresh（新鲜的） -> 使恢复精力，使精神振作。"
  },
  {
    "word": "regal",
    "phonetic": "/ˈriːɡl/",
    "pos": "adj.",
    "meaning": "帝王的， 王室的； 极具威严庄重、华贵雍容气派的",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "reg-（统治） + -al（形容词后缀） -> 帝王的，王室的。"
  },
  {
    "word": "regardless",
    "phonetic": "/rɪˈɡɑːdləs/",
    "pos": "adv./adj.",
    "meaning": "不顾， 不管， 不加理会； 无论如何毫无畏惧依然前行",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "regard（注视） + -less（毫无…的） -> 不顾，不管。"
  },
  {
    "word": "register",
    "phonetic": "/ˈredʒɪstə(r)/",
    "pos": "v./n.",
    "meaning": "登记，注册；挂号，正式申报；显露出，被感知注意到",
    "part": "第一部分：超级核心母词族",
    "group": "【31. ger / gest 产生/搬运/承载】",
    "analysis_type": "构词",
    "analysis": "re-（向后） + gest-（搬运） -> 登记，注册。"
  },
  {
    "word": "regular",
    "phonetic": "/ˈreɡjələ(r)/",
    "pos": "adj./n.",
    "meaning": "规则的，有规律的；经常定期的；合格标准的，正规的",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "regul-（直尺） + -ar（形容词后缀） -> 规则的，有规律的。"
  },
  {
    "word": "regulate",
    "phonetic": "/ˈreɡjuleɪt/",
    "pos": "vt.",
    "meaning": "管理，监管控制；调节，调控",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "regul-（规矩） + -ate（动词后缀） -> （依法或制定规则）管理 -> 管理，监管控制。"
  },
  {
    "word": "reinforce",
    "phonetic": "/ˌriːɪnˈfɔːs/",
    "pos": "vt.",
    "meaning": "增强， 加强； 加固",
    "part": "第二部分：高频专业词根族",
    "group": "【45. val / vail / forc / fort 强壮/力量/价值】",
    "analysis_type": "构词",
    "analysis": "re-（再次） + in-（使入） + force（力量） -> 反复注入力量 -> 增强，加强。"
  },
  {
    "word": "reject",
    "phonetic": "/rɪˈdʒekt/ (v.), /ˈriːdʒekt/ (n.)",
    "pos": "vt./n.",
    "meaning": "拒绝，驳回；排斥抛弃；发生排异免疫反应",
    "part": "第一部分：超级核心母词族",
    "group": "【15. ject 投/掷/扔】",
    "analysis_type": "构词",
    "analysis": "re-（向后） + ject（投掷） -> 拒绝，驳回。"
  },
  {
    "word": "relate",
    "phonetic": "/rɪˈleɪt/",
    "pos": "v.",
    "meaning": "联系， 使发生相互关联； 叙述讲述； 理解共情， 相处融洽",
    "part": "第一部分：超级核心母词族",
    "group": "【19. leg / lig / lect 采集/阅读/选择】",
    "analysis_type": "构词",
    "analysis": "re-（向后） + late（带来） -> 联系，使发生相互关联。"
  },
  {
    "word": "relationship",
    "phonetic": "/rɪˈleɪʃnʃɪp/",
    "pos": "n.",
    "meaning": "关系， 关联联系； 亲密恋爱关系； 人际亲属关联",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "relation（关联） + -ship（状态） -> 关系，关联联系。"
  },
  {
    "word": "relative",
    "phonetic": "/ˈrelətɪv/",
    "pos": "adj./n.",
    "meaning": "相对的， 比较而言的（与绝对相对）； 相关的； 亲属， 亲戚",
    "part": "第一部分：超级核心母词族",
    "group": "【19. leg / lig / lect 采集/阅读/选择】",
    "analysis_type": "构词",
    "analysis": "relat-（带回） + -ive（形容词后缀） -> 相对的，比较而言的（与绝对相对）。"
  },
  {
    "word": "relax",
    "phonetic": "/rɪˈlæks/",
    "pos": "v.",
    "meaning": "放松， 使身心松弛； 放宽， 放宽限制宽容； 缓和",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "re-（向后） + lax（松弛） -> 放松，使身心松弛。"
  },
  {
    "word": "relay",
    "phonetic": "/ˈriːleɪ/ (n.), /rɪˈleɪ/ (v.)",
    "pos": "n./vt.",
    "meaning": "接力赛；中继器，继电器；中继转播传送",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "re-（再次） + lay（放置） -> 接力赛。"
  },
  {
    "word": "reliable",
    "phonetic": "/rɪˈlaɪəbl/",
    "pos": "adj.",
    "meaning": "可靠的， 可信赖的； 性能稳定经久耐用的",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "rely（信赖依靠） + -able（能…的） -> 可靠的，可信赖的。"
  },
  {
    "word": "remark",
    "phonetic": "/rɪˈmɑːk/",
    "pos": "n./v.",
    "meaning": "言辞，评论议论；注意察觉到；谈论评论",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "re-（再次） + mark（标记） -> 言辞，评论议论。"
  },
  {
    "word": "render",
    "phonetic": "/ˈrendə(r)/",
    "pos": "vt.",
    "meaning": "使得， 致使； 翻译转译； 渲染（计算机三维建模图像）",
    "part": "第一部分：超级核心母词族",
    "group": "【37. don / dot / do 给予/奉献】",
    "analysis_type": "构词",
    "analysis": "本义指“退还” -> 使得，致使。"
  },
  {
    "word": "replace",
    "phonetic": "/rɪˈpleɪs/",
    "pos": "vt.",
    "meaning": "替换， 取代； 把…放回原处原位； 更换（损耗零部件）",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "re-（再次） + place（位置） -> 替换，取代。"
  },
  {
    "word": "reply",
    "phonetic": "/rɪˈplaɪ/",
    "pos": "v./n.",
    "meaning": "回答， 答复； 作出反击回应； 答卷， 复信",
    "part": "第一部分：超级核心母词族",
    "group": "【4. ple / pli / plic 折叠/倍/重】",
    "analysis_type": "构词",
    "analysis": "re-（向后） + ply（折叠） -> 回答，答复。"
  },
  {
    "word": "reputation",
    "phonetic": "/ˌrepjuˈteɪʃn/",
    "pos": "n.",
    "meaning": "名誉， 声誉； 公众口碑名望（以著称）",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "re-（反复） + put-（思考） + -ation（名词后缀） -> 名誉，声誉。"
  },
  {
    "word": "request",
    "phonetic": "/rɪˈkwest/",
    "pos": "n./vt.",
    "meaning": "请求，恳求；邀请；点播",
    "part": "第一部分：超级核心母词族",
    "group": "【38. quest / quir / quis 询问/求索】",
    "analysis_type": "构词",
    "analysis": "re-（再次） + quest（求索） -> 请求，恳求。"
  },
  {
    "word": "require",
    "phonetic": "/rɪˈkwaɪə(r)/",
    "pos": "vt.",
    "meaning": "需要， 依靠； 依法规定， 要求",
    "part": "第一部分：超级核心母词族",
    "group": "【38. quest / quir / quis 询问/求索】",
    "analysis_type": "构词",
    "analysis": "re-（反复） + quire（探寻） -> 需要，依靠。"
  },
  {
    "word": "rescue",
    "phonetic": "/ˈreskjuː/",
    "pos": "vt./n.",
    "meaning": "营救，拯救；救助，挺身相救力挽狂澜；救市，紧急金融纾困救助",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "本义指“re- 彻底” -> 营救，拯救。"
  },
  {
    "word": "resemble",
    "phonetic": "/rɪˈzembl/",
    "pos": "vt.",
    "meaning": "与…极其相似， 像， 与…外貌神似",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "re-（完全） + semble（相同） -> 与…极其相似，像。"
  },
  {
    "word": "respond",
    "phonetic": "/rɪˈspɒnd/",
    "pos": "v.",
    "meaning": "回答，作出答复；作出积极敏捷反应；对治疗产生良好应答",
    "part": "第一部分：超级核心母词族",
    "group": "【36. spon / spond 约定/回应/保证】",
    "analysis_type": "构词",
    "analysis": "re-（反向） + spond（庄严起誓） -> 回答，作出答复。"
  },
  {
    "word": "respondent",
    "phonetic": "/rɪˈspɒndənt/",
    "pos": "n./adj.",
    "meaning": "调查对象，受访者；被告人；作出回答反应的",
    "part": "第一部分：超级核心母词族",
    "group": "【36. spon / spond 约定/回应/保证】",
    "analysis_type": "构词",
    "analysis": "respond（回答） + -ent（人） -> 调查对象，受访者。"
  },
  {
    "word": "responsible",
    "phonetic": "/rɪˈspɒnsəbl/",
    "pos": "adj.",
    "meaning": "负有法律或道德责任的； 有高度责任心可靠的； 责任重大的",
    "part": "第一部分：超级核心母词族",
    "group": "【36. spon / spond 约定/回应/保证】",
    "analysis_type": "构词",
    "analysis": "response（回应） + -ible（能…的） -> 负有法律或道德责任的。"
  },
  {
    "word": "restore",
    "phonetic": "/rɪˈstɔː(r)/",
    "pos": "vt.",
    "meaning": "恢复， 使复原； 修复修缮（文物/古迹）； 归还交还",
    "part": "第一部分：超级核心母词族",
    "group": "【2. sta / sist / st 站立/建立/停留】",
    "analysis_type": "构词",
    "analysis": "re-（重新） + store（站立） -> 恢复，使复原。"
  },
  {
    "word": "restrain",
    "phonetic": "/rɪˈstreɪn/",
    "pos": "vt.",
    "meaning": "抑制， 克制（冲动/情绪）； 遏止制止； 限制阻止",
    "part": "第二部分：高频专业词根族",
    "group": "【65. strict / strain / string 拉紧/紧缚】",
    "analysis_type": "构词",
    "analysis": "re-（向后） + strain（拉紧粗绳缰绳） -> 抑制，克制（冲动。"
  },
  {
    "word": "restrict",
    "phonetic": "/rɪˈstrɪkt/",
    "pos": "vt.",
    "meaning": "限制， 限定（数量范围）； 束缚妨碍",
    "part": "第二部分：高频专业词根族",
    "group": "【65. strict / strain / string 拉紧/紧缚】",
    "analysis_type": "构词",
    "analysis": "re-（向后） + strict（拉紧） -> 限制，限定（数量范围）。"
  },
  {
    "word": "resume",
    "phonetic": "/rɪˈzjuːm/ (v.), /ˈrezjuːmeɪ/ (n.)",
    "pos": "v./n.",
    "meaning": "（中断后）重新开始， 恢复",
    "part": "第一部分：超级核心母词族",
    "group": "【39. sum / sumpt 拿取/消耗】",
    "analysis_type": "构词",
    "analysis": "re-（重新） + sume（拿取） -> （中断后）重新开始，恢复。"
  },
  {
    "word": "retain",
    "phonetic": "/rɪˈteɪn/",
    "pos": "vt.",
    "meaning": "保留， 保持（所有权水分）； 留存， 记住； 聘请付定金留用",
    "part": "第一部分：超级核心母词族",
    "group": "【20. ten / tain / tin 握/持/容纳】",
    "analysis_type": "构词",
    "analysis": "re-（向后） + tain（握在手中不撒） -> 保留，保持（所有权水分）。"
  },
  {
    "word": "reveal",
    "phonetic": "/rɪˈviːl/",
    "pos": "vt.",
    "meaning": "揭露，揭示揭开；展现，展现出显露出原本被遮蔽的面貌；神圣启示透露",
    "part": "第二部分：高频专业词根族",
    "group": "【69. vel / veil 覆盖/遮蔽】",
    "analysis_type": "构词",
    "analysis": "re-（反向逆向） + veal-（面纱） -> 揭露，揭示揭开。"
  },
  {
    "word": "revive",
    "phonetic": "/rɪˈvaɪv/",
    "pos": "v.",
    "meaning": "苏醒， 使复活； 使复兴重振； 重新上映重新焕发",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "re-（再次） + viv-（生命） -> 苏醒，使复活。"
  },
  {
    "word": "reward",
    "phonetic": "/rɪˈwɔːd/",
    "pos": "n./vt.",
    "meaning": "奖励， 奖赏， 报酬； 丰厚回报； 酬劳， 奖赏报答",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "re-（作为对等回报） + ward（注视） -> 奖励，奖赏。"
  },
  {
    "word": "ridiculous",
    "phonetic": "/rɪˈdɪkjələs/",
    "pos": "adj.",
    "meaning": "荒谬绝伦的， 可笑怪诞的； 愚蠢至极毫无道理的",
    "part": "第二部分：高频专业词根族",
    "group": "【54. lud / lus 嬉戏/扮演/欺骗】",
    "analysis_type": "构词",
    "analysis": "rid-（发笑） + -iculous（充满…倾向的） -> 荒谬绝伦的，可笑怪诞的。"
  },
  {
    "word": "rigid",
    "phonetic": "/ˈrɪdʒɪd/",
    "pos": "adj.",
    "meaning": "刚硬僵直不易弯曲的；死板刻板僵化的；极其严苛毫无妥协余地的",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "rig-（笔挺僵直） + -id（形容词后缀） -> 官僚体制教条僵化不知变通 -> 刚硬僵直不易弯曲的。"
  },
  {
    "word": "rim",
    "phonetic": "/rɪm/",
    "pos": "n./vt.",
    "meaning": "外边缘，边沿；轮圈轮辋；环绕…边缘",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "本义指“圆边” -> （圆形物体的）外边缘 -> 外边缘，边沿。"
  },
  {
    "word": "rip",
    "phonetic": "/rɪp/",
    "pos": "v./n.",
    "meaning": "猛撕，扯开撕裂；强行扯下夺走；裂口，裂缝",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "拟声促音动词 -> 猛撕，扯开撕裂。"
  },
  {
    "word": "ripe",
    "phonetic": "/raɪp/",
    "pos": "adj.",
    "meaning": "成熟的（果实/庄稼）； 时机成熟适宜的； 年事已高的",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然生态、地理环境与动植物】",
    "analysis_type": "构词",
    "analysis": "源自原始īpiz（适于用镰刀收） -> 成熟的（果实/庄稼） -> 成熟的（果实，庄稼）。"
  },
  {
    "word": "rise",
    "phonetic": "/raɪz/",
    "pos": "vi./n.",
    "meaning": "上升，升起；上涨增加；起立站起",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "源自原始īsan（自平躺卧倒状） -> 上升，升起。"
  },
  {
    "word": "roar",
    "phonetic": "/rɔː(r)/",
    "pos": "v./n.",
    "meaning": "咆哮，怒吼；轰鸣，呼啸作响；哄堂大笑",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "拟声促音大动词 -> 咆哮，怒吼。"
  },
  {
    "word": "root",
    "phonetic": "/ruːt/",
    "pos": "n./v.",
    "meaning": "植物根，根系；词根；根本原因，祸根",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然生态、地理环境与动植物】",
    "analysis_type": "构词",
    "analysis": "同源（深埋于地下吸） -> 植物根，根系。"
  },
  {
    "word": "rough",
    "phonetic": "/rʌf/",
    "pos": "adj./adv./n./v.",
    "meaning": "粗糙不平的；汹涌狂暴的；粗略大概的",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "源自原始ūhwaz（未修剪动物粗） -> 粗糙不平的。"
  },
  {
    "word": "saint",
    "phonetic": "/seɪnt/",
    "pos": "n./adj.",
    "meaning": "圣人，圣徒；道德极度崇高如圣贤般的人；神圣的，圣…",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "词根 sanctus（神圣纯洁不可） -> （基督教教会追封的）圣人 -> 圣人，圣徒。"
  },
  {
    "word": "satisfy",
    "phonetic": "/ˈsætɪsfaɪ/",
    "pos": "vt.",
    "meaning": "使满意， 使心满意足； 满足， 契合（需求条件）",
    "part": "第二部分：高频专业词根族",
    "group": "【63. sat / satis 饱足/满足】",
    "analysis_type": "构词",
    "analysis": "satis（足够） + -fy（使动词后缀：） -> 使满意，使心满意足。"
  },
  {
    "word": "sauce",
    "phonetic": "/sɔːs/",
    "pos": "n.",
    "meaning": "调味汁， 沙司， 酱汁； 无礼， 厚颜放肆（口语少废话）",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "词根 salsa（用精盐浸泡腌） -> 调味汁，沙司。"
  },
  {
    "word": "scale",
    "phonetic": "/skeɪl/",
    "pos": "n./v.",
    "meaning": "n. 规模，范围；天平，秤；比例（尺） vt. 攀登，攀越 n. 鱼鳞",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "scal-（阶梯） + -e -> 衡量层级高低的刻度与体量 -> 规模，范围。"
  },
  {
    "word": "scatter",
    "phonetic": "/ˈskætə(r)/",
    "pos": "v./n.",
    "meaning": "撒播， 四散分开； 使分散驱散； 零星分散分布； 散落",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "与 shatter（粉碎成无数碎）同源 -> 撒播，四散分开。"
  },
  {
    "word": "scenery",
    "phonetic": "/ˈsiːnəri/",
    "pos": "n.",
    "meaning": "风景， 自然景色（不可数名词）； 舞台布景道具",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然生态、地理环境与动植物】",
    "analysis_type": "构词",
    "analysis": "scene（舞台幕景） + -ery（集合名词后缀） -> 风景，自然景色（不可数名词）。"
  },
  {
    "word": "schedule",
    "phonetic": "/ˈʃedjuːl/ (英音), /ˈskedʒuːl/ (美音)",
    "pos": "n./vt.",
    "meaning": "日程表， 时间进度计划表； 课程表； 安排预定， 排定进度",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "源自晚期词根 schedula（一张裁切整齐） -> 日程表，时间进度计划表。"
  },
  {
    "word": "scheme",
    "phonetic": "/skiːm/",
    "pos": "n./v.",
    "meaning": "体系，宏大规划蓝图方案；阴谋，诡计；策划筹谋",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "源自希腊语 skhema（整体的构想形） -> 体系，宏大规划蓝图方案。"
  },
  {
    "word": "scrape",
    "phonetic": "/skreɪp/",
    "pos": "v./n.",
    "meaning": "刮，擦；擦伤蹭破皮；勉强凑集糊口",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "源自古诺斯语 skrapa（用扁平坚硬的） -> 刮，擦。"
  },
  {
    "word": "scratch",
    "phonetic": "/skrætʃ/",
    "pos": "v./n.",
    "meaning": "抓，搔抓挠痒；划伤划破；抓痕，划伤",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "与 scrape（刮擦）及 crack（裂痕）拟声交织 -> 用指甲或尖锐等 -> 抓，搔抓挠痒。"
  },
  {
    "word": "scream",
    "phonetic": "/skriːm/",
    "pos": "vi./n.",
    "meaning": "尖叫， 发出一声声刺耳凄厉惨叫； 呼啸尖啸； 尖叫声",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "拟声强音大动词 -> 尖叫，发出一声声刺耳凄厉惨叫。"
  },
  {
    "word": "screw",
    "phonetic": "/skruː/",
    "pos": "n./v.",
    "meaning": "螺丝，螺钉；螺旋桨；用螺丝拧紧紧固",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "本义指“表面切削有螺” -> 螺丝，螺钉。"
  },
  {
    "word": "second-hand",
    "phonetic": "/ˌsekənd ˈhænd/",
    "pos": "adj./adv.",
    "meaning": "二手流通的， 旧的； 间接听闻转手获得的",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "second（第二的） + hand（手） -> 二手流通的，旧的。"
  },
  {
    "word": "section",
    "phonetic": "/ˈsekʃn/",
    "pos": "n./vt.",
    "meaning": "部分，节；部门，科室；截面剖面",
    "part": "第二部分：高频专业词根族",
    "group": "【64. sect / sec 切割/分开】",
    "analysis_type": "构词",
    "analysis": "sect-（切割） + -ion（名词后缀） -> 部分，节。"
  },
  {
    "word": "sector",
    "phonetic": "/ˈsektə(r)/",
    "pos": "n.",
    "meaning": "部门，行业领域；扇形，扇形区域；战区防区",
    "part": "第二部分：高频专业词根族",
    "group": "【64. sect / sec 切割/分开】",
    "analysis_type": "构词",
    "analysis": "sect-（切割） + -or（实体） -> 部门，行业领域。"
  },
  {
    "word": "segment",
    "phonetic": "/ˈseɡmənt/ (n.), /seɡˈment/ (v.)",
    "pos": "n./vt.",
    "meaning": "段， 节， 片段； 部分； 细分市场； 分割划分成段",
    "part": "第二部分：高频专业词根族",
    "group": "【64. sect / sec 切割/分开】",
    "analysis_type": "构词",
    "analysis": "seg-（切开） + -ment（具体片段后缀） -> 段，节。"
  },
  {
    "word": "sequence",
    "phonetic": "/ˈsiːkwəns/",
    "pos": "n./vt.",
    "meaning": "连续，前后相继的顺序；一连串事件；测序",
    "part": "第一部分：超级核心母词族",
    "group": "【30. sequ / secut 跟随】",
    "analysis_type": "构词",
    "analysis": "sequ-（紧紧跟随） + -ence（名词后缀） -> 连续，前后相继的顺序。"
  },
  {
    "word": "series",
    "phonetic": "/ˈsɪəriːz/",
    "pos": "n.",
    "meaning": "一系列， 一连串； 丛书， 连续剧； 串联（电路中的串联）",
    "part": "第二部分：高频专业词根族",
    "group": "【64. sect / sec 切割/分开】",
    "analysis_type": "构词",
    "analysis": "源自拉丁词根 serere（用结实麻线将） -> 一系列，一连串。"
  },
  {
    "word": "setback",
    "phonetic": "/ˈsetbæk/",
    "pos": "n.",
    "meaning": "挫折， 阻碍； 倒退， 暂时的倒霉退步",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "set（放置） + back（向后） -> 挫折，阻碍。"
  },
  {
    "word": "severe",
    "phonetic": "/sɪˈvɪə(r)/",
    "pos": "adj.",
    "meaning": "极其严重的，严峻残酷的；严厉严苛不讲情面的；朴素毫无修饰的",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "词根 severus（严肃严苛） -> 极其严重的，严峻残酷的。"
  },
  {
    "word": "shallow",
    "phonetic": "/ˈʃæləʊ/",
    "pos": "adj./n.",
    "meaning": "浅的，水浅不深的；肤浅浅薄的，缺乏深度的；浅滩水洼",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "本义指“水体深度仅能” -> 浅的，水浅不深的。"
  },
  {
    "word": "shape",
    "phonetic": "/ʃeɪp/",
    "pos": "n./v.",
    "meaning": "形状，外形轮廓；健康体态身体状况；塑造，决定影响…的发展形态",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "核心意象为“用利刃砍削刻” -> 形状，外形轮廓。"
  },
  {
    "word": "sharp",
    "phonetic": "/ʃɑːp/",
    "pos": "adj./adv.",
    "meaning": "锋利的，尖锐的；敏锐机警的；急剧剧烈的",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "刃口极其纤薄能切割 -> 锋利的，尖锐的。"
  },
  {
    "word": "shave",
    "phonetic": "/ʃeɪv/",
    "pos": "v./n.",
    "meaning": "剃须， 刮脸； 剃毛； 微调削减； 侥幸脱险",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "核心意象为“用贴合皮肉的” -> 剃须，刮脸。"
  },
  {
    "word": "shed",
    "phonetic": "/ʃed/",
    "pos": "v./n.",
    "meaning": "摆脱，去除；散发，发出；脱落；棚屋",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "与 shade 同源 -> 蜕去旧皮或向外倾泻光芒 -> 摆脱，去除。"
  },
  {
    "word": "sheer",
    "phonetic": "/ʃɪə(r)/",
    "pos": "adj./adv./vi.",
    "meaning": "完全的，纯粹的；极陡峭险峻的垂直的；薄如蝉翼轻薄透明的",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "本义指“完全纯净毫无” -> 完全的，纯粹的。"
  },
  {
    "word": "shield",
    "phonetic": "/ʃiːld/",
    "pos": "n./vt.",
    "meaning": "盾牌， 防御护盾； 防护罩； 保护， 庇护使其免受伤害",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "抵挡刀剑弓箭的防护板 -> 盾牌，防御护盾。"
  },
  {
    "word": "shift",
    "phonetic": "/ʃɪft/",
    "pos": "v./n.",
    "meaning": "转移，移动；转变转换；轮班，当班工作时间",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "核心意象为“彼此分工安排” -> 转移，移动。"
  },
  {
    "word": "shiver",
    "phonetic": "/ˈʃɪvə(r)/",
    "pos": "vi./n.",
    "meaning": "（因严寒、恐惧或极度激动而）打颤， 发抖， 战栗； 战栗冷颤",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "拟声与生理应激交织词 -> （因严寒，恐惧或极度激动而）打颤。"
  },
  {
    "word": "short-term",
    "phonetic": "/ˌʃɔːt ˈtɜːm/",
    "pos": "adj.",
    "meaning": "短期的， 近期的； 急功近利的",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "short（短暂的） + term（期限） -> 短期的，近期的。"
  },
  {
    "word": "shortcoming",
    "phonetic": "/ˈʃɔːtkʌmɪŋ/",
    "pos": "n.",
    "meaning": "缺点， 短处； 不足之处， 制度或方案中的缺陷漏洞（常复数）",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "short（差一截） + come（到来） -> 缺点，短处。"
  },
  {
    "word": "shot",
    "phonetic": "/ʃɒt/",
    "pos": "n./adj.",
    "meaning": "射击，开枪开炮；投篮，击球；针剂注射",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "词根 shoot（射击） -> 之过去分词名词化 -> 射击，开枪开炮。"
  },
  {
    "word": "sight",
    "phonetic": "/saɪt/",
    "pos": "n./vt.",
    "meaning": "视力，视觉视觉感知能力；视线视野；名胜风景",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "see（看） + -t（名词抽象后缀） -> 视力，视觉视觉感知能力。"
  },
  {
    "word": "simple",
    "phonetic": "/ˈsɪmpl/",
    "pos": "adj.",
    "meaning": "简单的，简易不复杂的；朴素朴实纯粹的；头脑单纯天真的",
    "part": "第一部分：超级核心母词族",
    "group": "【4. ple / pli / plic 折叠/倍/重】",
    "analysis_type": "构词",
    "analysis": "sim-（单一的） + ple（折叠） -> 简单的，简易不复杂的。"
  },
  {
    "word": "simulate",
    "phonetic": "/ˈsɪmjuleɪt/",
    "pos": "vt.",
    "meaning": "模拟， 模仿（物理过程/飞行）； 假装装作",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "simul-（相同） + -ate（动词后缀） -> 模拟，模仿（物理过程。"
  },
  {
    "word": "singular",
    "phonetic": "/ˈsɪŋɡjələ(r)/",
    "pos": "adj./n.",
    "meaning": "单数的，单数形式的；非凡卓越罕见的；奇特异常独一无二的",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "singul-（唯一的） + -ar（形容词后缀） -> 单数的，单数形式的。"
  },
  {
    "word": "slap",
    "phonetic": "/slæp/",
    "pos": "vt./n./adv.",
    "meaning": "巴掌拍打，用手掌猛击；啪的一声摔在放上；拍打声，耳光",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "拟声爆发性动词 -> 巴掌拍打，用手掌猛击。"
  },
  {
    "word": "slice",
    "phonetic": "/slaɪs/",
    "pos": "n./v.",
    "meaning": "薄片， 切片； 一份， 份额； 切开， 切成薄片； 轻快划过",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "本义指“从木桩或坚硬” -> 薄片，切片。"
  },
  {
    "word": "slight",
    "phonetic": "/slaɪt/",
    "pos": "adj./vt./n.",
    "meaning": "微小的，微不足道的；纤细苗条瘦弱的；轻视，怠慢看不起",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "词根族核心意象 -> 微小的，微不足道的。"
  },
  {
    "word": "slope",
    "phonetic": "/sləʊp/",
    "pos": "n./v.",
    "meaning": "斜坡，斜面；斜率；倾斜，有坡度",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "本义指“向下倾斜滑落” -> 斜坡，斜面。"
  },
  {
    "word": "slump",
    "phonetic": "/slʌmp/",
    "pos": "vi./n.",
    "meaning": "突然暴跌，骤降骤减；无力倒下瘫软；经济严重萧条期",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "拟声重坠动词 -> 突然暴跌，骤降骤减。"
  },
  {
    "word": "smash",
    "phonetic": "/smæʃ/",
    "pos": "v./n.",
    "meaning": "打碎，猛烈粉碎砸得粉碎；猛撞轰然相撞；彻底粉碎摧毁",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "融合拟声复合词（由 smac） -> 打碎，猛烈粉碎砸得粉碎。"
  },
  {
    "word": "so-called",
    "phonetic": "/ˌsəʊ ˈkɔːld/",
    "pos": "adj.",
    "meaning": "所谓的，号称的；被大众如此俗称称谓的",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "so（如此这般） + called（被称为） -> 所谓的，号称的。"
  },
  {
    "word": "soak",
    "phonetic": "/səʊk/",
    "pos": "v./n.",
    "meaning": "浸泡，在液体中浸湿湿透；浸透，湿透；吸收吸取",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "本义指“彻底浸润于汤” -> 浸泡，在液体中浸湿湿透。"
  },
  {
    "word": "sole",
    "phonetic": "/səʊl/",
    "pos": "adj./n./vt.",
    "meaning": "唯一的，仅有的；专用的独占的；脚底板，脚掌",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "词根核心意象引申 -> 唯一的，仅有的。"
  },
  {
    "word": "sophisticated",
    "phonetic": "/səˈfɪstɪkeɪtɪd/",
    "pos": "adj.",
    "meaning": "极其精密的， 先进尖端的； 见多识广老练成熟的； 复杂深奥的",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "sophist（古希腊智者） + -ic + -ated，引申指极其精密的 -> 极其精密的，先进尖端的。"
  },
  {
    "word": "source",
    "phonetic": "/sɔːs/",
    "pos": "n./vt.",
    "meaning": "来源，源头；出处；水源地",
    "part": "第二部分：高频专业词根族",
    "group": "【59. orig 升起/开始】",
    "analysis_type": "构词",
    "analysis": "源自拉丁词根 surgere（从地底深处泉） -> 来源，源头。"
  },
  {
    "word": "splash",
    "phonetic": "/splæʃ/",
    "pos": "v./n.",
    "meaning": "泼洒，飞溅；使溅起水花；扑通溅水声",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "拟声促音大动词（由 plas） -> 泼洒，飞溅。"
  },
  {
    "word": "split",
    "phonetic": "/splɪt/",
    "pos": "v./n./adj.",
    "meaning": "劈开，分裂裂开；分开，分摊分享；产生内部分歧分裂",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "源自原始ītanan（用锋利战斧顺） -> 劈开，分裂裂开。"
  },
  {
    "word": "sponsor",
    "phonetic": "/ˈspɒnsə(r)/",
    "pos": "n./vt.",
    "meaning": "赞助商，资助者；法案共同发起倡议者；赞助资助",
    "part": "第一部分：超级核心母词族",
    "group": "【36. spon / spond 约定/回应/保证】",
    "analysis_type": "构词",
    "analysis": "spons-（庄严起誓） + -or（人） -> 赞助商，资助者。"
  },
  {
    "word": "spontaneous",
    "phonetic": "/spɒnˈteɪniəs/",
    "pos": "adj.",
    "meaning": "自发的，非外力强加自然产生的；即兴的，真情流露的；自发性的",
    "part": "第一部分：超级核心母词族",
    "group": "【36. spon / spond 约定/回应/保证】",
    "analysis_type": "构词",
    "analysis": "spont-（出于自身完全） + -aneous（复合形容词后） -> 自发的，非外力强加自然产生的。"
  },
  {
    "word": "spray",
    "phonetic": "/spreɪ/",
    "pos": "n./v.",
    "meaning": "浪花，水花；喷剂，喷雾器；喷射喷洒",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "源自中古低地德语 sprien（液体在高压强） -> 浪花，水花。"
  },
  {
    "word": "spur",
    "phonetic": "/spɜː(r)/",
    "pos": "n./vt.",
    "meaning": "马刺，靴后金属踢马刺；激励鞭策动力；支脉，分支支线",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "核心意象为“骑手牛皮长筒” -> 马刺，靴后金属踢马刺。"
  },
  {
    "word": "spy",
    "phonetic": "/spaɪ/",
    "pos": "n./v.",
    "meaning": "间谍，特工；暗中监视刺探情报者；暗中从事间谍侦察活动",
    "part": "第一部分：超级核心母词族",
    "group": "【3. spec / spect / spic 看】",
    "analysis_type": "构词",
    "analysis": "本义指“暗中窥探察看” -> 间谍，特工。"
  },
  {
    "word": "squeeze",
    "phonetic": "/skwiːz/",
    "pos": "v./n.",
    "meaning": "压榨， 挤压； 紧挤 n. 拥挤",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "源自词根核心本义 -> 压榨，挤压。"
  },
  {
    "word": "stain",
    "phonetic": "/steɪn/",
    "pos": "v./n.",
    "meaning": "污染，玷污弄脏；着色，染色；污渍污斑",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "本义指“使原有的纯净” -> 污染，玷污弄脏。"
  },
  {
    "word": "stale",
    "phonetic": "/steɪl/",
    "pos": "adj.",
    "meaning": "不新鲜的， 发硬变味的（面包笑话）； 身心倦怠厌倦的",
    "part": "第一部分：超级核心母词族",
    "group": "【2. sta / sist / st 站立/建立/停留】",
    "analysis_type": "构词",
    "analysis": "源自古诺斯语（站立停滞太久） -> 不新鲜的，发硬变味的（面包笑话）。"
  },
  {
    "word": "standpoint",
    "phonetic": "/ˈstændpɔɪnt/",
    "pos": "n.",
    "meaning": "立场， 观点， 审视立足点",
    "part": "第一部分：超级核心母词族",
    "group": "【2. sta / sist / st 站立/建立/停留】",
    "analysis_type": "构词",
    "analysis": "stand（站立之立足点） + point（点） -> 立场，观点。"
  },
  {
    "word": "stare",
    "phonetic": "/steə(r)/",
    "pos": "vi./n.",
    "meaning": "凝视，目不转睛凝视盯看；瞪眼凝视；注视",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "同源（僵直硬挺不动） -> 凝视，目不转睛凝视盯看。"
  },
  {
    "word": "steep",
    "phonetic": "/stiːp/",
    "pos": "adj./v.",
    "meaning": "陡峭险峻的，极倾斜的；急剧大幅度的；过高的过分的",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "核心意象为“高耸如断崖直” -> 陡峭险峻的，极倾斜的。"
  },
  {
    "word": "steer",
    "phonetic": "/stɪə(r)/",
    "pos": "v./n.",
    "meaning": "驾驶掌舵操纵方向；引导引领，带领；阉公牛",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "操纵船舵掌控行进方向 -> 驾驶掌舵操纵方向。"
  },
  {
    "word": "stem",
    "phonetic": "/stem/",
    "pos": "n./v.",
    "meaning": "植物茎，树干；高脚杯把；词干",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然生态、地理环境与动植物】",
    "analysis_type": "构词",
    "analysis": "同源（挺立站立） -> 植物茎，树干。"
  },
  {
    "word": "stimulate",
    "phonetic": "/ˈstɪmjuleɪt/",
    "pos": "vt.",
    "meaning": "刺激， 促使发生； 激发唤起， 激励促进； 使兴奋兴奋",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "stimul-（尖锐驯兽刺棒） + -ate（动词后缀） -> 刺激，促使发生。"
  },
  {
    "word": "strategy",
    "phonetic": "/ˈstrætədʒi/",
    "pos": "n.",
    "meaning": "战略，宏观全局大策略；对策筹谋，长远战术规划",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "strat-（行军大军） + ag-（引领指挥统帅） -> 战略，宏观全局大策略。"
  },
  {
    "word": "strip",
    "phonetic": "/strɪp/",
    "pos": "v./n.",
    "meaning": "脱去衣物，剥夺剥光；剥去外皮剥去涂层；细长条，带状物",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "源自中古低地德语 stripen（用双手一把用） -> 脱去衣物，剥夺剥光。"
  },
  {
    "word": "stripe",
    "phonetic": "/straɪp/",
    "pos": "n./vt.",
    "meaning": "条纹，线条斑纹；军衔军阶条纹；给…加上条纹",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "与 strip（狭长条带）及 strike（抽打留下一道）同等 -> 条纹，线条斑纹。"
  },
  {
    "word": "strive",
    "phonetic": "/straɪv/",
    "pos": "vi.",
    "meaning": "努力奋斗， 竭尽全力力争； 斗争对抗",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "本义指“在比武场中拼” -> 努力奋斗，竭尽全力力争。"
  },
  {
    "word": "stroll",
    "phonetic": "/strəʊl/",
    "pos": "vi./n.",
    "meaning": "散步，漫步；从容不迫地轻松迈步慢走；闲庭信步走过",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "源自早期现代德语 strolchen（流浪乐人无拘） -> 散步，漫步。"
  },
  {
    "word": "stuff",
    "phonetic": "/stʌf/",
    "pos": "n./vt.",
    "meaning": "n. 东西， 材料 vt. 填满， 塞满",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "本义指“织物原料” -> 往空隙内填塞的填充料 -> 东西。"
  },
  {
    "word": "subject",
    "phonetic": "/ˈsʌbdʒɪkt/ (n./adj.), /səbˈdʒekt/ (v.)",
    "pos": "n./adj./vt.",
    "meaning": "n. 实验对象，受试者；学科，科目；主题 vt. 使遭受，使经受（to）",
    "part": "第一部分：超级核心母词族",
    "group": "【15. ject 投/掷/扔】",
    "analysis_type": "构词",
    "analysis": "sub-（在下方） + ject-（投掷） -> 抛在案头供研究探讨之物 -> 主题，题目。"
  },
  {
    "word": "submerge",
    "phonetic": "/səbˈmɜːdʒ/",
    "pos": "v.",
    "meaning": "潜入水中，没入水中；浸没，彻底淹没；完全掩盖淹没",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "sub-（在…下方） + merge（浸入） -> 潜入水中，没入水中。"
  },
  {
    "word": "subsequent",
    "phonetic": "/ˈsʌbsɪkwənt/",
    "pos": "adj.",
    "meaning": "随后的， 后来的； 接续相继发生的（与先前相对）",
    "part": "第一部分：超级核心母词族",
    "group": "【30. sequ / secut 跟随】",
    "analysis_type": "构词",
    "analysis": "sub-（紧接在后面） + sequ-（紧紧跟随追随） + -ent，引申指随后的 -> 随后的，后来的。"
  },
  {
    "word": "subtle",
    "phonetic": "/ˈsʌtl/",
    "pos": "adj.",
    "meaning": "微妙隐晦的，不易察觉的；机智巧妙的；清淡幽微隐约的",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "sub-（在…底下微观） + tle（织造） -> 微妙隐晦的，不易察觉的。"
  },
  {
    "word": "sue",
    "phonetic": "/suː/",
    "pos": "v.",
    "meaning": "控告， 提起民事诉讼； 请求， 乞求（求和）",
    "part": "第一部分：超级核心母词族",
    "group": "【30. sequ / secut 跟随】",
    "analysis_type": "构词",
    "analysis": "本义指“紧追不放” -> 控告，提起民事诉讼。"
  },
  {
    "word": "summary",
    "phonetic": "/ˈsʌməri/",
    "pos": "n./adj.",
    "meaning": "总结，概要；即决的，草率从简的；简要的",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "sum-（总数） + -ary（名词） -> 总结，概要。"
  },
  {
    "word": "surge",
    "phonetic": "/sɜːdʒ/",
    "pos": "n./vi.",
    "meaning": "剧增，急剧上升；汹涌奔腾，澎湃汹涌；狂潮激增",
    "part": "第二部分：高频专业词根族",
    "group": "【59. orig 升起/开始】",
    "analysis_type": "构词",
    "analysis": "源自拉丁词根 surgere（从地底或波底） -> 剧增，急剧上升。"
  },
  {
    "word": "surname",
    "phonetic": "/ˈsɜːneɪm/",
    "pos": "n./vt.",
    "meaning": "姓氏， 家族姓（与名字相对）； 给…加姓氏或冠以别号称号",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "sur-（在上方） + name（名字） -> 姓氏，家族姓（与名字相对）。"
  },
  {
    "word": "surpass",
    "phonetic": "/səˈpɑːs/",
    "pos": "vt.",
    "meaning": "超越， 超过； 胜过， 在品质或成就上优于凌驾于",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "sur-（超越） + pass（走过） -> 超越，超过。"
  },
  {
    "word": "surrender",
    "phonetic": "/səˈrendə(r)/",
    "pos": "v./n.",
    "meaning": "投降，屈服放下武器；放弃，交出交还；屈从沉溺于",
    "part": "第一部分：超级核心母词族",
    "group": "【37. don / dot / do 给予/奉献】",
    "analysis_type": "构词",
    "analysis": "sur-（自下而上彻底） + render（交付） -> 投降，屈服放下武器。"
  },
  {
    "word": "survey",
    "phonetic": "/ˈsɜːveɪ/ (n.), /səˈveɪ/ (v.)",
    "pos": "n./vt.",
    "meaning": "调查，民意调查问卷调查；地质测绘测量，地形勘测实测",
    "part": "第二部分：高频专业词根族",
    "group": "【70. vid / vis / view 看】",
    "analysis_type": "构词",
    "analysis": "sur-（在…上方） + vey-（审视凝望） -> 调查，民意调查问卷调查。"
  },
  {
    "word": "sustain",
    "phonetic": "/səˈsteɪn/",
    "pos": "vt.",
    "meaning": "维持， 保持（生命伤亡）； 在法庭上裁定异议成立",
    "part": "第一部分：超级核心母词族",
    "group": "【20. ten / tain / tin 握/持/容纳】",
    "analysis_type": "构词",
    "analysis": "sus-（自下而上托起） + tain（用手紧紧抓牢） -> 维持，保持（生命伤亡）。"
  },
  {
    "word": "swallow",
    "phonetic": "/ˈswɒləʊ/",
    "pos": "v./n.",
    "meaning": "吞下，咽下；吞并，吞噬侵吞；勉强强忍忍受",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然生态、地理环境与动植物】",
    "analysis_type": "构词",
    "analysis": "词根核心意象引申 -> 吞下，咽下。"
  },
  {
    "word": "swear",
    "phonetic": "/sweə(r)/",
    "pos": "v.",
    "meaning": "庄严起誓， 发誓； 诅咒， 咒骂爆粗口； 坚信确定无疑",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "核心意象为“在神坛或氏族” -> 庄严起誓，发誓。"
  },
  {
    "word": "swell",
    "phonetic": "/swel/",
    "pos": "v./n./adj.",
    "meaning": "膨胀，肿胀；增加，扩大壮大；海面不起白浪的长涌浪",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "源自原始ą（微观细胞吸水） -> 膨胀，肿胀。"
  },
  {
    "word": "swift",
    "phonetic": "/swɪft/",
    "pos": "adj./adv./n.",
    "meaning": "极其迅速敏捷的，飞快的；立刻及时的；雨燕",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "源自原始īftaz（身形矫健如闪） -> 极其迅速敏捷的，飞快的。"
  },
  {
    "word": "sword",
    "phonetic": "/sɔːd/",
    "pos": "n.",
    "meaning": "剑，利剑；武装力量，武力；尚方宝剑",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "同源（用于刺击伤敌） -> 剑，利剑。"
  },
  {
    "word": "symbol",
    "phonetic": "/ˈsɪmbl/",
    "pos": "n.",
    "meaning": "象征，标志；符号，代号；具有代表性的典型人物事物",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "sym-（共同） + bol-（投掷） -> 象征，标志。"
  },
  {
    "word": "tablet",
    "phonetic": "/ˈtæblət/",
    "pos": "n.",
    "meaning": "药片，片剂；平板电脑；纪念石碑，铭牌匾额",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "本义指“由 tabl” -> 药片，片剂。"
  },
  {
    "word": "tackle",
    "phonetic": "/ˈtækl/",
    "pos": "v./n.",
    "meaning": "着手解决，全力对付处理；拦截抢断阻截；用具器械",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "源自中古低地德语 takel（航海帆船上由） -> 着手解决，全力对付处理。"
  },
  {
    "word": "tame",
    "phonetic": "/teɪm/",
    "pos": "adj./vt.",
    "meaning": "驯服的，温顺温和的；枯燥平淡乏味的；驯化驯服",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然生态、地理环境与动植物】",
    "analysis_type": "构词",
    "analysis": "同源（房屋） -> 驯服的，温顺温和的。"
  },
  {
    "word": "target",
    "phonetic": "/ˈtɑːɡɪt/",
    "pos": "n./vt.",
    "meaning": "目标，靶子；战略指标目标；针对，面向定位以…为靶向",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "本义指“轻装步兵随身” -> 目标，靶子。"
  },
  {
    "word": "tedious",
    "phonetic": "/ˈtiːdiəs/",
    "pos": "adj.",
    "meaning": "枯燥乏味的， 沉闷单调冗长的； 令人厌烦厌倦的",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "源自拉丁词根 taedium（极度厌倦心烦） -> 枯燥乏味的，沉闷单调冗长的。"
  },
  {
    "word": "tempt",
    "phonetic": "/tempt/",
    "pos": "vt.",
    "meaning": "诱惑，引诱；鼓动招惹吸引；冒…的风险诱发",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "源自拉丁词根 temptare（伸手去反复触） -> 诱惑，引诱。"
  },
  {
    "word": "terminal",
    "phonetic": "/ˈtɜːmɪnl/",
    "pos": "n./adj.",
    "meaning": "航站楼； 终点站 adj. 末端的",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "termin-（界限） + -al（形容词） -> 航站楼。"
  },
  {
    "word": "thereby",
    "phonetic": "/ˌðeəˈbaɪ/",
    "pos": "adv.",
    "meaning": "从而， 借此， 因此",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "there（那里） + by（通过…手段） -> 从而，借此。"
  },
  {
    "word": "thorough",
    "phonetic": "/ˈθʌrə/ (英音), /ˈθɜːrəʊ/ (美音)",
    "pos": "adj.",
    "meaning": "彻底的， 完全的； 极其细致周密的， 一丝不苟滴水不漏的",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "源自 through（穿透） -> 彻底的，完全的。"
  },
  {
    "word": "thrive",
    "phonetic": "/θraɪv/",
    "pos": "vi.",
    "meaning": "蓬勃发展，繁荣兴旺；茁壮成长，如鱼得水般生生不息",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然生态、地理环境与动植物】",
    "analysis_type": "构词",
    "analysis": "源自古诺斯语 thrifask（通过双手辛勤） -> 蓬勃发展，繁荣兴旺。"
  },
  {
    "word": "thrust",
    "phonetic": "/θrʌst/",
    "pos": "v./n.",
    "meaning": "猛推， 刺入； 推进力 n. 关键",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "源自古诺尔斯语 thrysta（用力向前猛刺） -> 猛推，刺入。"
  },
  {
    "word": "tidy",
    "phonetic": "/ˈtaɪdi/",
    "pos": "adj./v.",
    "meaning": "整齐整洁的，井井有条的；可观的相当大的；收拾整理，理顺",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "族 īdiz（正值当令的） -> 整齐整洁的，井井有条的。"
  },
  {
    "word": "tight",
    "phonetic": "/taɪt/",
    "pos": "adj./adv.",
    "meaning": "紧的， 牢固的； 紧凑的， 拮据的； 严厉严密的； 紧紧地",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "本义指“紧密无缝隙的” -> 紧的，牢固的。"
  },
  {
    "word": "tolerate",
    "phonetic": "/ˈtɒləreɪt/",
    "pos": "vt.",
    "meaning": "容忍， 容许， 宽容； 耐受",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "toler-（承受重担） + -ate（动词后缀） -> 容忍，容许。"
  },
  {
    "word": "torture",
    "phonetic": "/ˈtɔːtʃə(r)/",
    "pos": "n./vt.",
    "meaning": "拷打， 肉刑； 极其痛苦的折磨煎熬； 使受肉体精神折磨",
    "part": "第二部分：高频专业词根族",
    "group": "【66. tort 扭曲/缠绕】",
    "analysis_type": "构词",
    "analysis": "tort-（扭曲） + -ure（名词后缀） -> 拷打，肉刑。"
  },
  {
    "word": "total",
    "phonetic": "/ˈtəʊtl/",
    "pos": "adj./n./v.",
    "meaning": "总计的，完全彻底的；总数，总计；总计达",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "tot-（整体） + -al（形容词后缀） -> 总计的，完全彻底的。"
  },
  {
    "word": "tour",
    "phonetic": "/tʊə(r)/",
    "pos": "n./v.",
    "meaning": "旅行， 观光游历； 巡回（演说赛事）； 巡视巡查； 游历参观",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "本义指“围绕中心旋转” -> 旅行，观光游历。"
  },
  {
    "word": "towel",
    "phonetic": "/ˈtaʊəl/",
    "pos": "n./vt.",
    "meaning": "毛巾，浴巾；手巾；用毛巾擦干身体",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "本义指“系 ” -> 毛巾，浴巾。"
  },
  {
    "word": "tower",
    "phonetic": "/ˈtaʊə(r)/",
    "pos": "n./vi.",
    "meaning": "塔， 高楼， 塔楼； 控制塔台； 高耸， 巍然耸立凌驾于",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "本义指“巨石高筑直插” -> 塔，高楼。"
  },
  {
    "word": "trap",
    "phonetic": "/træp/",
    "pos": "n./vt.",
    "meaning": "n. 陷阱， 圈套 vt. 诱捕； 困住",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "核心意象为“踏板” -> 猎物踩中弹起锁住的夹具 -> 陷阱。"
  },
  {
    "word": "tremble",
    "phonetic": "/ˈtrembl/",
    "pos": "vi./n.",
    "meaning": "发抖， 战栗（因恐惧激动）； 轻微摇晃颤动； 颤抖战栗声",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "源自拉丁词根 tremere（身体剧烈筛糠） -> 发抖，战栗（因恐惧激动）。"
  },
  {
    "word": "tremendous",
    "phonetic": "/trəˈmendəs/",
    "pos": "adj.",
    "meaning": "巨大的，极其浩大庞大的；极其精彩的，好得令人惊叹的；令人震颤震撼敬畏的",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "源自拉丁词根 tremere（在震撼天地的雷霆） + -endous（产生如此巨大） -> 巨大的，极其浩大庞大的。"
  },
  {
    "word": "tropic",
    "phonetic": "/ˈtrɒpɪk/",
    "pos": "n./adj.",
    "meaning": "回归线（北回归线南回归线）； 热带地区； 热带的， 湿热的",
    "part": "第二部分：高频专业词根族",
    "group": "【66. tort 扭曲/缠绕】",
    "analysis_type": "构词",
    "analysis": "源自希腊语 tropikos（太阳在天空中） -> 回归线（北回归线南回归线）。"
  },
  {
    "word": "tune",
    "phonetic": "/tjuːn/",
    "pos": "n./vt.",
    "meaning": "曲调，旋律；调谐，调整调校；收听收看，换台调频",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "源自 tone（声音） -> 曲调，旋律。"
  },
  {
    "word": "ultimate",
    "phonetic": "/ˈʌltɪmət/",
    "pos": "adj./n.",
    "meaning": "最终的， 终极的； 最根本首要的； 终极事物， 最高极限典范",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "ultim-（最远的） + -ate（形容词后缀） -> 最终的，终极的。"
  },
  {
    "word": "uncover",
    "phonetic": "/ʌnˈkʌvə(r)/",
    "pos": "vt.",
    "meaning": "揭开盖子； 揭露， 揭发（真相阴谋）； 偶然发现发掘",
    "part": "第一部分：超级核心母词族",
    "group": "【1. cap / capt / cept / ceiv / cip 抓/拿/容纳/理解】",
    "analysis_type": "构词",
    "analysis": "un-（解开） + cover（遮盖物） -> 揭开盖子。"
  },
  {
    "word": "underline",
    "phonetic": "/ˌʌndəˈlaɪn/",
    "pos": "vt./n.",
    "meaning": "在…下方划线； 强调， 突出强调； 下划线",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "under（在…下方） + line（线） -> 在…下方划线。"
  },
  {
    "word": "undo",
    "phonetic": "/ʌnˈduː/",
    "pos": "vt.",
    "meaning": "解开，解散松开；撤销撤回；消除，毁掉败坏",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "un-（反向逆转） + do（做） -> 解开，解散松开。"
  },
  {
    "word": "unfold",
    "phonetic": "/ʌnˈfəʊld/",
    "pos": "v.",
    "meaning": "展开， 摊开（纸张重大历史事实）",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "un-（打开解封） + fold（折叠） -> 展开，摊开（纸张重大历史事实）。"
  },
  {
    "word": "unique",
    "phonetic": "/juˈniːk/",
    "pos": "adj./n.",
    "meaning": "独一无二的，绝无仅有的；独具特色极其罕见的；独一无二的事物",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "uni-（唯一） + -que（法语形容词后） -> 独一无二的，绝无仅有的。"
  },
  {
    "word": "unload",
    "phonetic": "/ˌʌnˈləʊd/",
    "pos": "v.",
    "meaning": "卸载，卸货；倒空，倾倒；摆脱倾诉",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "un-（去除） + load（负重） -> 卸载，卸货。"
  },
  {
    "word": "up-to-date",
    "phonetic": "/ˌʌp tə ˈdeɪt/",
    "pos": "adj.",
    "meaning": "最新的， 紧跟时代的； 现代化的， 包含最新进展资讯的",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "up to（一直延伸向上） + date（当前日历最新） -> 最新的，紧跟时代的。"
  },
  {
    "word": "upright",
    "phonetic": "/ˈʌpraɪt/",
    "pos": "adj./adv./n.",
    "meaning": "直立的，垂直挺拔的；为人正直诚实一身正气的；挺直地",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "up（向上） + right（笔直正派） -> 直立的，垂直挺拔的。"
  },
  {
    "word": "urge",
    "phonetic": "/ɜːdʒ/",
    "pos": "vt./n.",
    "meaning": "极力敦促， 力劝力荐； 驱策推动； 强烈的冲动欲念",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "源自拉丁词根 urgere（用力在身后猛） -> 极力敦促，力劝力荐。"
  },
  {
    "word": "utmost",
    "phonetic": "/ˈʌtməʊst/",
    "pos": "adj./n.",
    "meaning": "极度的，最大的；极限，最大可能",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "ut-（外部） + -most（最高级后缀） -> 极度的，最大的。"
  },
  {
    "word": "vacant",
    "phonetic": "/ˈveɪkənt/",
    "pos": "adj.",
    "meaning": "空着的，未被占用的",
    "part": "第二部分：高频专业词根族",
    "group": "【68. vac / van 空】",
    "analysis_type": "构词",
    "analysis": "vac-（空的） + -ant（形容词后缀） -> 空着的，未被占用的。"
  },
  {
    "word": "vacation",
    "phonetic": "/vəˈkeɪʃn/ (英), /veɪˈkeɪʃn/ (美)",
    "pos": "n./vi.",
    "meaning": "假期， 休假； 度假； 把房屋腾空搬出",
    "part": "第二部分：高频专业词根族",
    "group": "【68. vac / van 空】",
    "analysis_type": "构词",
    "analysis": "vac-（空出） + -ation（名词后缀） -> 假期，休假。"
  },
  {
    "word": "vacuum",
    "phonetic": "/ˈvækjuəm/",
    "pos": "n./vt.",
    "meaning": "真空，完全没有任何空气与物质的虚空物理空间；真空状态，脱离现实社会与世隔绝的环境；空虚感，权力真空",
    "part": "第二部分：高频专业词根族",
    "group": "【68. vac / van 空】",
    "analysis_type": "构词",
    "analysis": "vac-（空的） + -uum（中性名词后缀） -> 真空，完全没有任何空气与物质的虚空物理空间。"
  },
  {
    "word": "vague",
    "phonetic": "/veɪɡ/",
    "pos": "adj.",
    "meaning": "含糊不清的， 模棱两可语焉不详的； 模糊不清的（视线记忆）",
    "part": "第二部分：高频专业词根族",
    "group": "【68. vac / van 空】",
    "analysis_type": "构词",
    "analysis": "词根 vagus（四处漂泊流浪） -> 含糊不清的，模棱两可语焉不详的。"
  },
  {
    "word": "vain",
    "phonetic": "/veɪn/",
    "pos": "adj.",
    "meaning": "自负虚荣的，爱慕虚荣的；徒劳徒然的，枉费心机的；空洞毫无实质意义的",
    "part": "第二部分：高频专业词根族",
    "group": "【68. vac / van 空】",
    "analysis_type": "构词",
    "analysis": "源自拉丁词根 vanus（空虚毫无实质） -> 自负虚荣的，爱慕虚荣的。"
  },
  {
    "word": "vanish",
    "phonetic": "/ˈvænɪʃ/",
    "pos": "vi.",
    "meaning": "突然不见， 凭空消失； 绝迹消亡",
    "part": "第二部分：高频专业词根族",
    "group": "【68. vac / van 空】",
    "analysis_type": "构词",
    "analysis": "van-（空虚） + -ish（动词后缀） -> 突然不见，凭空消失。"
  },
  {
    "word": "variable",
    "phonetic": "/ˈveəriəbl/",
    "pos": "adj./n.",
    "meaning": "易变的， 多变无常的； （数学）",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "vari-（多样） + -able（能…的） -> 易变的，多变无常的。"
  },
  {
    "word": "vast",
    "phonetic": "/vɑːst/",
    "pos": "adj.",
    "meaning": "辽阔的， 广袤无垠的； 巨大的， 海量的",
    "part": "第二部分：高频专业词根族",
    "group": "【68. vac / van 空】",
    "analysis_type": "构词",
    "analysis": "源自拉丁词根 vastus（荒凉广袤空旷） -> 辽阔的，广袤无垠的。"
  },
  {
    "word": "veil",
    "phonetic": "/veɪl/",
    "pos": "n./vt.",
    "meaning": "面纱，头巾面罩；遮蔽物掩饰；用面纱遮掩",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "词根 velum（航海风帆） -> 面纱，头巾面罩。"
  },
  {
    "word": "verify",
    "phonetic": "/ˈverɪfaɪ/",
    "pos": "vt.",
    "meaning": "核实， 核验； 证实， 证明…属实",
    "part": "第二部分：高频专业词根族",
    "group": "【69. ver 真实】",
    "analysis_type": "构词",
    "analysis": "ver-（真实的） + -i- + -fy（使动词后缀，引申指核实 -> 核实，核验。"
  },
  {
    "word": "veteran",
    "phonetic": "/ˈvetərən/",
    "pos": "n./adj.",
    "meaning": "老兵，退役退伍军人；经验丰富的老手，各界资深专家泰斗；老练深资历的",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "veter-（年老古老） + -an（人） -> 老兵，退役退伍军人。"
  },
  {
    "word": "vibrate",
    "phonetic": "/vaɪˈbreɪt/",
    "pos": "v.",
    "meaning": "振动， 摆动； 摇摆",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "vibr-（晃动） + -ate（动词后缀） -> 振动，摆动。"
  },
  {
    "word": "victim",
    "phonetic": "/ˈvɪktɪm/",
    "pos": "n.",
    "meaning": "受害者， 罹难者； 牺牲品",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "词根 victima（古罗马祭神大） -> 受害者，罹难者。"
  },
  {
    "word": "vigorous",
    "phonetic": "/ˈvɪɡərəs/",
    "pos": "adj.",
    "meaning": "充满活力的， 精力充沛的； 强有力的， 坚决有力大刀阔斧的",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "vigor（旺盛生命力） + -ous（充满…的大形） -> 政策执行时展现出大刀阔斧 -> 充满活力的，精力充沛的。"
  },
  {
    "word": "waken",
    "phonetic": "/ˈweɪkən/",
    "pos": "v.",
    "meaning": "唤醒， 醒来（使从睡眠中清醒）； 激起唤起， 重新觉醒",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "wake（醒来） + -en（使动词后缀，引申指沉痛的社会惨剧如黄钟大吕般 -> 唤醒，醒来（使从睡眠中清醒）。"
  },
  {
    "word": "wander",
    "phonetic": "/ˈwɒndə(r)/",
    "pos": "vi./vt./n.",
    "meaning": "漫步，闲逛；偏离正道迷失走失；漫步闲逛漫游",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "源自原始ōną（身躯双腿在微） -> 漫步，闲逛。"
  },
  {
    "word": "watertight",
    "phonetic": "/ˈwɔːtətaɪt/",
    "pos": "adj.",
    "meaning": "水密的， 不漏水的（水密隔舱）； 无懈可击滴水不漏的",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "water（水） + tight（紧密的） -> 水密的，不漏水的（水密隔舱）。"
  },
  {
    "word": "weary",
    "phonetic": "/ˈwɪəri/",
    "pos": "adj./v.",
    "meaning": "疲劳疲惫不堪的； 厌倦厌烦的； 使精疲力竭厌倦",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "本义ērig（长途泥泞跋涉） -> 疲劳疲惫不堪的。"
  },
  {
    "word": "weave",
    "phonetic": "/wiːv/",
    "pos": "v./n.",
    "meaning": "编织，织造；穿行穿梭；编排编造",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "同源（将经线与纬线） -> 编织，织造。"
  },
  {
    "word": "well-being",
    "phonetic": "/ˈwel biːɪŋ/",
    "pos": "n.",
    "meaning": "幸福， 安康； 身心健康与全面福祉",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "well（良好完满的状） + being（存在） -> 幸福，安康。"
  },
  {
    "word": "whereas",
    "phonetic": "/ˌweərˈæz/",
    "pos": "conj.",
    "meaning": "然而，但是；鉴于，考虑到",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "where（在那种情况下） + as（正如） -> 然而，但是。"
  },
  {
    "word": "whip",
    "phonetic": "/wɪp/",
    "pos": "n./vt.",
    "meaning": "鞭子，皮鞭；鞭笞抽打；快速猛烈移动抽动",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "源自中古低地德语 wippen（以极高角速度） -> 鞭子，皮鞭。"
  },
  {
    "word": "whisper",
    "phonetic": "/ˈwɪspə(r)/",
    "pos": "v./n.",
    "meaning": "低语，耳语；沙沙作响；耳语声",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "拟声轻音大动词 -> 低语，耳语。"
  },
  {
    "word": "whistle",
    "phonetic": "/ˈwɪsl/",
    "pos": "n./v.",
    "meaning": "口哨，哨子；汽笛声；吹口哨，鸣笛",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "拟声高频尖音词 -> 口哨，哨子。"
  },
  {
    "word": "whole",
    "phonetic": "/həʊl/",
    "pos": "adj./n.",
    "meaning": "完整的，完好无损的；全部的整个的；整体全貌",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "核心意象为“完好无损没有” -> 完整的，完好无损的。"
  },
  {
    "word": "widen",
    "phonetic": "/ˈwaɪdn/",
    "pos": "v.",
    "meaning": "加宽， 拓宽（道路视野）",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "wide（宽阔的） + -en（使动词后缀，引申指两极分化差距进一步拉大加深 -> 加宽，拓宽（道路视野）。"
  },
  {
    "word": "willpower",
    "phonetic": "/ˈwɪlpaʊə(r)/",
    "pos": "n.",
    "meaning": "意志力， 毅力； 自制力， 抵制诱惑的心理定力",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "will（钢铁般的主观） + power（力量） -> 意志力，毅力。"
  },
  {
    "word": "wing",
    "phonetic": "/wɪŋ/",
    "pos": "n./v.",
    "meaning": "翅膀，鸟翼；飞机机翼；侧翼配楼",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "源自古诺斯语 vængr（鸟类或昆虫在） -> 翅膀，鸟翼。"
  },
  {
    "word": "wire",
    "phonetic": "/ˈwaɪə(r)/",
    "pos": "n./v.",
    "meaning": "金属丝，铁丝；电线，导线；电汇",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "同源（编织） -> 金属丝，铁丝。"
  },
  {
    "word": "witness",
    "phonetic": "/ˈwɪtnəs/",
    "pos": "n./vt.",
    "meaning": "目击者，见证人；证人；亲眼目睹，亲历见证",
    "part": "第二部分：高频专业词根族",
    "group": "【70. vid / vis / view 看】",
    "analysis_type": "构词",
    "analysis": "wit（智慧） + -ness（名词后缀） -> 目击者，见证人。"
  },
  {
    "word": "workforce",
    "phonetic": "/ˈwɜːkfɔːs/",
    "pos": "n.",
    "meaning": "劳动力，劳动人口大军；在编人员职工总数",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "work（劳动生产） + force（力量大军） -> 劳动力，劳动人口大军。"
  },
  {
    "word": "workplace",
    "phonetic": "/ˈwɜːkpleɪs/",
    "pos": "n.",
    "meaning": "工作场所， 职场； 劳动环境， 办公天地",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "work（劳动） + place（场所空间） -> 工作场所，职场。"
  },
  {
    "word": "wrap",
    "phonetic": "/ræp/",
    "pos": "v./n.",
    "meaning": "包裹， 包扎； 披肩围巾； 圆满收官收尾",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "本义指“用柔软织物或” -> 包裹，包扎。"
  },
  {
    "word": "wreck",
    "phonetic": "/rek/",
    "pos": "n./vt.",
    "meaning": "残骸； 失事 vt. 摧毁",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "源自古诺尔斯语 vreki（被海浪冲上沙） -> 残骸。"
  },
  {
    "word": "yoga",
    "phonetic": "/ˈjəʊɡə/",
    "pos": "n.",
    "meaning": "瑜伽， 身心整合训练法； 源自古印度的哲学身心修行体系",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "源自梵语 yuga（套上牛轭） -> 瑜伽，身心整合训练法。"
  },
  {
    "word": "youngster",
    "phonetic": "/ˈjʌŋstə(r)/",
    "pos": "n.",
    "meaning": "年轻人， 青少年， 小伙子； 少年儿童后生",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "young（年少青春的） + -ster（从事特定身份） -> 年轻人，青少年。"
  },
  {
    "word": "abrupt",
    "phonetic": "/əˈbrʌpt/",
    "pos": "adj.",
    "meaning": "突然的，出其不意的；粗鲁唐突鲁莽的；陡峭险峻的",
    "part": "第一部分：超级核心母词族",
    "group": "【23. rupt 破/裂/断】",
    "analysis_type": "构词",
    "analysis": "ab-（离开） + rupt（断裂） -> 突然的，出其不意的。"
  },
  {
    "word": "abruptly",
    "phonetic": "/əˈbrʌptli/",
    "pos": "adv.",
    "meaning": "突然地， 出其不意地； 唐突无礼地， 骤然毫无预警地",
    "part": "第一部分：超级核心母词族",
    "group": "【23. rupt 破/裂/断】",
    "analysis_type": "构词",
    "analysis": "abrupt（突然折断断裂） + -ly（副词后缀） -> 突然地，出其不意地。"
  },
  {
    "word": "acute",
    "phonetic": "/əˈkjuːt/",
    "pos": "adj.",
    "meaning": "急性的； 敏锐的； 尖锐的",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、医疗生理与情绪心理】",
    "analysis_type": "构词",
    "analysis": "词根 acutus（尖锐的） -> 急性的。"
  },
  {
    "word": "ahead",
    "phonetic": "/əˈhed/",
    "pos": "adv./adj.",
    "meaning": "在前，向前；领先于；提前",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "a-（处于…方位） + head（头颅） -> 在前，向前。"
  },
  {
    "word": "alert",
    "phonetic": "/əˈlɜːt/",
    "pos": "adj./n./vt.",
    "meaning": "机警警觉的，保持戒备的；警报，警戒防备状态；向…发出警报提醒",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "源自意大利语 all'erta（全员登上险峻） -> 机警警觉的，保持戒备的。"
  },
  {
    "word": "aloud",
    "phonetic": "/əˈlaʊd/",
    "pos": "adv.",
    "meaning": "出声地， 大声地",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "a-（进入特定状态） + loud（响亮） -> 出声地，大声地。"
  },
  {
    "word": "altogether",
    "phonetic": "/ˌɔːltəˈɡeðə(r)/",
    "pos": "adv.",
    "meaning": "完全，彻底地；总共，一共计；总而言之总体上",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "all（全体） + together（在一起聚拢为） -> 完全，彻底地。"
  },
  {
    "word": "angle",
    "phonetic": "/ˈæŋɡl/",
    "pos": "n./vt.",
    "meaning": "角， 角度 vt. 斜移",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "词根 angulus（角） -> 角，角度。"
  },
  {
    "word": "anyway",
    "phonetic": "/ˈeniweɪ/",
    "pos": "adv.",
    "meaning": "无论如何， 不管怎样； 至少； 反正是， 反正",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "any（任何一个可能） + way（道路） -> 无论如何，不管怎样。"
  },
  {
    "word": "anywhere",
    "phonetic": "/ˈeniweə(r)/",
    "pos": "adv./pron.",
    "meaning": "在任何地方，无论何处；去任何地方；用于否定和疑问句中代替，somewhere",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "any（任何一个经纬） + where（地点场所） -> 在任何地方，无论何处。"
  },
  {
    "word": "apart",
    "phonetic": "/əˈpɑːt/",
    "pos": "adv./adj.",
    "meaning": "分开，相距；分离断裂；除…之外",
    "part": "第二部分：高频专业词根族",
    "group": "【60. part / port 分配/部分】",
    "analysis_type": "构词",
    "analysis": "a-（处于特定方位） + part（部分） -> 分开，相距。"
  },
  {
    "word": "arc",
    "phonetic": "/ɑːk/",
    "pos": "n./vi.",
    "meaning": "弧，弧形；电弧；划出弧线，呈弧形飞过",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "词根 arcus（弯曲紧绷的强） -> 弧，弧形。"
  },
  {
    "word": "arch",
    "phonetic": "/ɑːtʃ/",
    "pos": "n./v./adj.",
    "meaning": "拱门，拱形结构；足弓；弓起使成拱形",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "词根核心意象引申 -> 拱门，拱形结构。"
  },
  {
    "word": "area",
    "phonetic": "/ˈeəriə/",
    "pos": "n.",
    "meaning": "面积，表面积大小；区域，大片划定地理地带",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "源自拉丁词根 area（古罗马露天用） -> 面积，表面积大小。"
  },
  {
    "word": "aside",
    "phonetic": "/əˈsaɪd/",
    "pos": "adv./n.",
    "meaning": "在旁边，到一边；留存留出；戏剧舞台旁白，私下低语小声交谈",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "a-（朝向…方向） + side（侧面） -> 在旁边，到一边。"
  },
  {
    "word": "awaken",
    "phonetic": "/əˈweɪkən/",
    "pos": "v.",
    "meaning": "唤醒， 使醒来； 觉醒， 激起唤起； 意识到领悟",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "a-（完全强化） + wake（清醒） + -en（使动词后缀） -> 唤醒，使醒来。"
  },
  {
    "word": "axis",
    "phonetic": "/ˈæksɪs/",
    "pos": "n.",
    "meaning": "轴，旋转中心轴；坐标轴；枢纽核心轴心",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "同源（古罗马战车两） -> 轴，旋转中心轴。"
  },
  {
    "word": "backward",
    "phonetic": "/ˈbækwəd/",
    "pos": "adj./adv.",
    "meaning": "向后的，倒退的；落后的，发展滞后的；迟钝的",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "back（后方） + -ward（朝向…方向后） -> 向后的，倒退的。"
  },
  {
    "word": "bake",
    "phonetic": "/beɪk/",
    "pos": "v./n.",
    "meaning": "烘烤，烘焙；在烈日暴晒下烤热烤焦；使砖瓦陶器在高温窑炉中烧结固化",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "同源（利用干燥温热） -> 烘烤，烘焙。"
  },
  {
    "word": "bald",
    "phonetic": "/bɔːld/",
    "pos": "adj.",
    "meaning": "秃顶的，头顶脱发的；光秃秃寸草不生的；直截了当毫无掩饰修饰的",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "本义指“原本长满浓密” -> 秃顶的，头顶脱发的。"
  },
  {
    "word": "bang",
    "phonetic": "/bæŋ/",
    "pos": "n./v./adv.",
    "meaning": "砰的一声巨响，猛烈撞击敲打；猛摔，砰地关上；正好径直地",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "拟声强爆音词 -> 砰的一声巨响，猛烈撞击敲打。"
  },
  {
    "word": "bare",
    "phonetic": "/beə(r)/",
    "pos": "adj./vt.",
    "meaning": "赤裸露在外毫无衣物遮盖的；光秃秃毫无叶片树皮的；少得可怜的最起码的",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "同源（没有穿戴任何） -> 赤裸露在外毫无衣物遮盖的。"
  },
  {
    "word": "barely",
    "phonetic": "/ˈbeəli/",
    "pos": "adv.",
    "meaning": "仅仅， 勉强； 几乎不， 几乎完全没有",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "bare（赤裸露出） + -ly（副词后缀） -> 仅仅，勉强。"
  },
  {
    "word": "bark",
    "phonetic": "/bɑːk/",
    "pos": "n./v.",
    "meaning": "树皮；犬吠声，狗叫；吠叫，狂吠",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然生态、地理环境与动植物】",
    "analysis_type": "构词",
    "analysis": "词根核心意象引申 -> 树皮。"
  },
  {
    "word": "barren",
    "phonetic": "/ˈbærən/",
    "pos": "adj.",
    "meaning": "贫瘠荒芜的，寸草不生的；不结果实的，不育的；毫无成果价值的，空洞枯燥的",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然生态、地理环境与动植物】",
    "analysis_type": "构词",
    "analysis": "本义指“干燥龟裂沙化” -> 贫瘠荒芜的，寸草不生的。"
  },
  {
    "word": "barrier",
    "phonetic": "/ˈbæriə(r)/",
    "pos": "n.",
    "meaning": "障碍物， 屏障栅栏； 隔阂阻碍（语言隔阂）； 贸易关税壁垒",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "barr-（坚硬粗木横木） + -ier（实体后缀） -> 障碍物，屏障栅栏。"
  },
  {
    "word": "bat",
    "phonetic": "/bæt/",
    "pos": "n./v.",
    "meaning": "蝙蝠（哺乳动物）； 球棒， 球拍（面不改色心不跳）",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然生态、地理环境与动植物】",
    "analysis_type": "构词",
    "analysis": "词根核心意象引申 -> 蝙蝠（哺乳动物）。"
  },
  {
    "word": "beam",
    "phonetic": "/biːm/",
    "pos": "n./v.",
    "meaning": "大梁，横梁；光束，光柱；灿烂微笑",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "核心意象为“生长挺拔的巨” -> （建筑核心承重）大梁 -> 大梁，横梁。"
  },
  {
    "word": "bend",
    "phonetic": "/bend/",
    "pos": "v./n.",
    "meaning": "弯曲，使折弯曲折；屈服，弯腰顺从；转弯处，急转弯道",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "同源（用绳索把两头） -> 弯曲，使折弯曲折。"
  },
  {
    "word": "beneath",
    "phonetic": "/bɪˈniːθ/",
    "pos": "prep./adv.",
    "meaning": "在…正下方，在…底下；在…掩盖遮蔽之下；有失身份，不屑于屈尊去干",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "be-（处于…位置） + neath（向下） -> 在…正下方，在…底下。"
  },
  {
    "word": "besides",
    "phonetic": "/bɪˈsaɪdz/",
    "pos": "prep./adv.",
    "meaning": "除…之外； 而且， 此外况且（论据递进连词）",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "be-（在旁边） + side（侧翼） + -s（副词所有格后） -> 除了A之外还有B -> 除…之外。"
  },
  {
    "word": "bind",
    "phonetic": "/baɪnd/",
    "pos": "vt./vi.",
    "meaning": "捆绑， 捆扎； 约束； 凝固",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "源自词根核心本义 -> 捆绑，捆扎。"
  },
  {
    "word": "blade",
    "phonetic": "/bleɪd/",
    "pos": "n.",
    "meaning": "刀刃，刀片；叶片，桨叶；单片细长叶草叶",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "源自原始ą（像一柄薄平扁） -> 刀刃，刀片。"
  },
  {
    "word": "blank",
    "phonetic": "/blæŋk/",
    "pos": "adj./n./v.",
    "meaning": "空白的，未填写的；空虚茫然毫无表情的；空白处空格",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "本义指“洁白无瑕如白” -> 空白的，未填写的。"
  },
  {
    "word": "blanket",
    "phonetic": "/ˈblæŋkɪt/",
    "pos": "n./vt./adj.",
    "meaning": "毛毯，羊毛毯；厚厚的覆盖层遮蔽层；全面覆盖笼罩",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "本义指“纯白色的原色” -> 毛毯，羊毛毯。"
  },
  {
    "word": "blast",
    "phonetic": "/blɑːst/",
    "pos": "n./vt.",
    "meaning": "爆炸，爆破产生的极强冲击波；一阵突发的猛烈狂风疾风；炸碎爆破开山",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "本义æst（由风箱或肺部） -> 爆炸，爆破产生的极强冲击波。"
  },
  {
    "word": "blaze",
    "phonetic": "/bleɪz/",
    "pos": "n./vi.",
    "meaning": "熊熊烈火，烈焰大火；耀眼的光彩璀璨；熊熊燃烧，迸发火光",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "核心意象为“在黑暗中光芒” -> 熊熊烈火，烈焰大火。"
  },
  {
    "word": "blend",
    "phonetic": "/blend/",
    "pos": "vt./vi./n.",
    "meaning": "混合， 调和； 融合 n. 混合物",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "源自古诺尔斯语 blanda（把…混合在一） -> 混合，调和。"
  },
  {
    "word": "bless",
    "phonetic": "/bles/",
    "pos": "vt.",
    "meaning": "保佑，祈求赐福；使有幸拥有，赋予享有；在宗教仪式上为…祝圣施洗",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "祈求神明护佑平安 -> 保佑，祈求赐福。"
  },
  {
    "word": "blink",
    "phonetic": "/blɪŋk/",
    "pos": "v./n.",
    "meaning": "眨眼；闪烁；眨眼瞬间",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "与 blench（因恐惧而退缩）及 glance 拟声交织 -> 上下眼等 -> 眨眼。"
  },
  {
    "word": "block",
    "phonetic": "/blɒk/",
    "pos": "n./vt.",
    "meaning": "街区； 障碍物 vt. 堵塞",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "本义指“木桩” -> 街区。"
  },
  {
    "word": "blossom",
    "phonetic": "/ˈblɒsəm/",
    "pos": "n./vi.",
    "meaning": "花朵，花簇；开花盛开；蓬勃发展，繁荣绽放成",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然生态、地理环境与动植物】",
    "analysis_type": "构词",
    "analysis": "同源（膨胀破裂开花） -> （尤其指果树的）花朵 -> 花朵，花簇。"
  },
  {
    "word": "blow",
    "phonetic": "/bləʊ/",
    "pos": "v./n.",
    "meaning": "吹，刮风；吹响吹奏；吹灭吹走",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "源自原始ēanan（从胸腔深处调） -> 吹，刮风。"
  },
  {
    "word": "blunt",
    "phonetic": "/blʌnt/",
    "pos": "adj./vt.",
    "meaning": "钝的，不锋利的；言辞直截了当直率不饶人的；使迟钝减弱削弱",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "本义指“由于长期使用” -> 钝的，不锋利的。"
  },
  {
    "word": "blur",
    "phonetic": "/blɜː(r)/",
    "pos": "v./n.",
    "meaning": "变得模糊不清，使模糊难以辨认；模糊的印记影像；记忆中的一片模糊",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "本义指“水墨未干受水” -> 变得模糊不清，使模糊难以辨认。"
  },
  {
    "word": "boast",
    "phonetic": "/bəʊst/",
    "pos": "v./n.",
    "meaning": "自豪地拥有享有； 夸耀， 吹嘘吹大话； 吹嘘夸口之词",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "本义指“在篝火酒宴上” -> 自豪地拥有享有。"
  },
  {
    "word": "boil",
    "phonetic": "/bɔɪl/",
    "pos": "v./n.",
    "meaning": "沸腾，使水沸腾烧开；水煮，在沸水中焯烫煮熟；沸点，沸腾翻滚状态",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "源自拉丁词根 bullire（由于持续吸收） -> 沸腾，使水沸腾烧开。"
  },
  {
    "word": "bold",
    "phonetic": "/bəʊld/",
    "pos": "adj.",
    "meaning": "大胆勇敢的大刀阔斧的；勇于突破创新的；醒目的，粗体的",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "源自原始þaz（面对千军万马） -> 大胆勇敢的大刀阔斧的。"
  },
  {
    "word": "bolt",
    "phonetic": "/bəʊlt/",
    "pos": "n./v./adv.",
    "meaning": "螺栓，坚固紧固件螺栓；门栓闩锁；一道闪电",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "同源（从强弓弩机或） -> 螺栓，坚固紧固件螺栓。"
  },
  {
    "word": "bomb",
    "phonetic": "/bɒm/",
    "pos": "n./v.",
    "meaning": "炸弹；核弹；投弹轰炸",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "拟声巨响词（源自希腊语 ） -> 炸弹。"
  },
  {
    "word": "bond",
    "phonetic": "/bɒnd/",
    "pos": "n./v.",
    "meaning": "债券； 纽带 v. 结合",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "源自词根核心本义 -> 债券。"
  },
  {
    "word": "boom",
    "phonetic": "/buːm/",
    "pos": "vi./n.",
    "meaning": "繁荣， 激增 n. 繁荣期",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "源自拟声词 -> 繁荣，激增。"
  },
  {
    "word": "boost",
    "phonetic": "/buːst/",
    "pos": "vt./n.",
    "meaning": "提升， 增加， 促进",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "源自美式俚语 -> 提升，增加。"
  },
  {
    "word": "border",
    "phonetic": "/ˈbɔːdə(r)/",
    "pos": "n./v.",
    "meaning": "边界， 国界 v. 邻近",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "本义指“衣服边缘” -> 边界，国界。"
  },
  {
    "word": "bounce",
    "phonetic": "/baʊns/",
    "pos": "vi./vt./n.",
    "meaning": "反弹， 弹起； 弹跳 n. 弹力",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "本义指“猛击弹回” -> 反弹，弹起。"
  },
  {
    "word": "bound",
    "phonetic": "/baʊnd/",
    "pos": "adj./v./n.",
    "meaning": "一定必然的；受法律道义约束绑定的；开往奔向的",
    "part": "第一部分：超级核心母词族",
    "group": "【2. sta / sist / st 站立/建立/停留】",
    "analysis_type": "构词",
    "analysis": "词根 bind（捆绑） -> 一定必然的。"
  },
  {
    "word": "boundary",
    "phonetic": "/ˈbaʊndri/",
    "pos": "n.",
    "meaning": "边界，分界线；前沿界限，边界极限",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "bound（边界极限） + -ary（名词后缀） -> 边界，分界线。"
  },
  {
    "word": "bow",
    "phonetic": "/baʊ/ (鞠躬), /bəʊ/ (弓/蝴蝶结)",
    "pos": "v./n.",
    "meaning": "鞠躬弯腰致敬；屈服低头顺从；弓箭",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "同源（弯曲成优美弧） -> 鞠躬弯腰致敬。"
  },
  {
    "word": "bowl",
    "phonetic": "/bəʊl/",
    "pos": "n./v.",
    "meaning": "碗，深钵深盆；碗状洼地，天然盆地体育场；保龄球",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "核心意象为“由整块圆木或” -> 碗，深钵深盆。"
  },
  {
    "word": "box",
    "phonetic": "/bɒks/",
    "pos": "n./v.",
    "meaning": "盒子，箱子；包厢；方框",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "词根核心意象引申 -> 盒子，箱子。"
  },
  {
    "word": "brake",
    "phonetic": "/breɪk/",
    "pos": "n./v.",
    "meaning": "刹车， 制动器 v. 刹车",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "源自中古荷兰语 brake（压碎机） -> 刹车，制动器。"
  },
  {
    "word": "branch",
    "phonetic": "/brɑːntʃ/",
    "pos": "n./vi.",
    "meaning": "分支， 分科； 树枝 vi. 分支",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "本义指“从树干上生长” -> 分支，分科。"
  },
  {
    "word": "breadth",
    "phonetic": "/bredθ/",
    "pos": "n.",
    "meaning": "宽度，幅度；广度，博大包容",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "broad（宽阔广袤的） + -th（名词后缀） -> 宽度，幅度。"
  },
  {
    "word": "break",
    "phonetic": "/breɪk/",
    "pos": "v./n.",
    "meaning": "打破，折断碎裂；违反破坏；中断",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "同源（在外在暴力猛） -> 打破，折断碎裂。"
  },
  {
    "word": "brick",
    "phonetic": "/brɪk/",
    "pos": "n./vt.",
    "meaning": "砖，砌墙砖块；砖状物；用砖砌筑砌封",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "源自中古荷兰语 bricke（用纯净黄土红） -> 砖，砌墙砖块。"
  },
  {
    "word": "brief",
    "phonetic": "/briːf/",
    "pos": "adj./vt./n.",
    "meaning": "简短的 vt. 简短汇报",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "brev-（简短短小） + -e，引申指简短的 vt. 简短汇报 -> 简短的，vt.。"
  },
  {
    "word": "bright",
    "phonetic": "/braɪt/",
    "pos": "adj./adv.",
    "meaning": "明亮的，光芒四射的；聪颖伶俐绝顶聪明的；前途一片光明的",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "同源（在墨黑夜空中） -> 明亮的，光芒四射的。"
  },
  {
    "word": "brilliant",
    "phonetic": "/ˈbrɪliənt/",
    "pos": "adj.",
    "meaning": "卓越非凡绝顶聪明的； 璀璨夺目光辉四射的； 出色的极为精彩的",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "源自意大利语 brillare（钻石经过数百） -> 卓越非凡绝顶聪明的。"
  },
  {
    "word": "brim",
    "phonetic": "/brɪm/",
    "pos": "n./v.",
    "meaning": "（茶杯草帽的）帽檐； 充盈洋溢， 满溢而出",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "本义指“水面涨满紧贴” -> （茶杯草帽的）帽檐。"
  },
  {
    "word": "brisk",
    "phonetic": "/brɪsk/",
    "pos": "adj.",
    "meaning": "轻快敏捷充满生机活力的；清爽凛冽宜人的；生意兴隆活跃的",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "步履干脆利落不拖沓 -> 轻快敏捷充满生机活力的。"
  },
  {
    "word": "brittle",
    "phonetic": "/ˈbrɪtl/",
    "pos": "adj.",
    "meaning": "易碎的，脆性的；脆弱易断裂的；生硬尖锐刺耳的",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "本义指“极易受外力击” -> 易碎的，脆性的。"
  },
  {
    "word": "broad",
    "phonetic": "/brɔːd/",
    "pos": "adj.",
    "meaning": "宽广的， 辽阔的； 广泛的",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "源自词根核心本义 -> 宽广的，辽阔的。"
  },
  {
    "word": "broadcast",
    "phonetic": "/ˈbrɔːdkɑːst/",
    "pos": "v./n.",
    "meaning": "广播，播送；大肆散布宣扬传扬；广播电台节目，电视播送",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "broad（宽阔广袤的大） + cast（用双手大把挥） -> 广播，播送。"
  },
  {
    "word": "broom",
    "phonetic": "/bruːm/",
    "pos": "n.",
    "meaning": "扫帚，扫把；金雀花；彻底扫除清除",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "源自原始āmaz（古欧洲原野上） -> 扫帚，扫把。"
  },
  {
    "word": "buckle",
    "phonetic": "/ˈbʌkl/",
    "pos": "n./v.",
    "meaning": "（皮带鞋扣的）金属搭扣扣环； 扣上系好扣子",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "词根 buccula（古罗马重步兵） -> （皮带鞋扣的）金属搭扣扣环。"
  },
  {
    "word": "bulk",
    "phonetic": "/bʌlk/",
    "pos": "n./v./adj.",
    "meaning": "体积，容积大块头；大部分，大半主体；散装大宗商品货物",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "源自古诺斯语 búlki（远洋货船深邃） -> （巨大的）体积 -> 体积，容积大块头。"
  },
  {
    "word": "bullet",
    "phonetic": "/ˈbʊlɪt/",
    "pos": "n.",
    "meaning": "子弹， 弹头弹丸； 项目符号小黑点； 咬紧牙关硬挺直面逆境",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "本义指“由 boul” -> 子弹，弹头弹丸。"
  },
  {
    "word": "bundle",
    "phonetic": "/ˈbʌndl/",
    "pos": "n./vt.",
    "meaning": "捆，扎；包裹；一大笔钱",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "同源（捆绑） -> 捆，扎。"
  },
  {
    "word": "burden",
    "phonetic": "/ˈbɜːdn/",
    "pos": "n./vt.",
    "meaning": "负担，重担；沉重的心理压力，经济包袱；使负重担，加重…的负担压迫",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "同源（搬运） -> 负担，重担。"
  },
  {
    "word": "burn",
    "phonetic": "/bɜːn/",
    "pos": "v./n.",
    "meaning": "燃烧，着火；烧伤，烫伤；灼痛",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "同源（水沸腾腾跃或） -> 燃烧，着火。"
  },
  {
    "word": "burst",
    "phonetic": "/bɜːst/",
    "pos": "v./n.",
    "meaning": "爆裂， 爆炸； 突然爆发",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "源自词根核心本义 -> 爆裂，爆炸。"
  },
  {
    "word": "bury",
    "phonetic": "/ˈberi/",
    "pos": "vt.",
    "meaning": "埋葬，安葬逝者；掩埋深埋于地底废墟；将身躯脸庞埋入",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "核心意象为“将亲人遗体” -> 埋葬，安葬逝者。"
  },
  {
    "word": "cage",
    "phonetic": "/keɪdʒ/",
    "pos": "n./vt.",
    "meaning": "笼子，鸟笼兽笼；罐笼升降机；把…关进笼中",
    "part": "第一部分：超级核心母词族",
    "group": "【1. cap / capt / cept / ceiv / cip 抓/拿/容纳/理解】",
    "analysis_type": "构词",
    "analysis": "词根 cavea（用坚固铁条或） -> 笼子，鸟笼兽笼。"
  },
  {
    "word": "canal",
    "phonetic": "/kəˈnæl/",
    "pos": "n.",
    "meaning": "运河； 渠道； 导管",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "can-（苇管） + -al，人工在大地上挖凿引水连通两大水系通航灌溉的大运河大水渠 -> 运河。"
  },
  {
    "word": "cane",
    "phonetic": "/keɪn/",
    "pos": "n./vt.",
    "meaning": "手杖，老人盲人拐杖；坚硬直立空心茎秆；用藤条手杖严厉抽打体罚",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然生态、地理环境与动植物】",
    "analysis_type": "构词",
    "analysis": "源自希腊语 kanna（生长在河畔由） -> 手杖，老人盲人拐杖。"
  },
  {
    "word": "canvas",
    "phonetic": "/ˈkænvəs/",
    "pos": "n./adj.",
    "meaning": "粗帆布，耐磨帆布布料；油画画布，油画艺术作品；帆布台面",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "词根 cannabis（大麻植物纤维） -> 粗帆布，耐磨帆布布料。"
  },
  {
    "word": "carve",
    "phonetic": "/kɑːv/",
    "pos": "v.",
    "meaning": "雕刻， 刻凿雕琢",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "同源（用尖锐刻刀在） -> 雕刻，刻凿雕琢。"
  },
  {
    "word": "cast",
    "phonetic": "/kɑːst/",
    "pos": "v./n.",
    "meaning": "投掷，抛出；投射；全体演员阵容",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "源自古诺斯语 kasta（双手抓住重物） -> 投掷，抛出。"
  },
  {
    "word": "catch",
    "phonetic": "/kætʃ/",
    "pos": "v./n.",
    "meaning": "接住，抓住；捕捉，逮捕捕获；赶上",
    "part": "第一部分：超级核心母词族",
    "group": "【1. cap / capt / cept / ceiv / cip 抓/拿/容纳/理解】",
    "analysis_type": "构词",
    "analysis": "源自通俗词根 captiare（在密林中四处） -> 接住，抓住。"
  },
  {
    "word": "cease",
    "phonetic": "/siːs/",
    "pos": "v./n.",
    "meaning": "停止，中止；停息断绝；终结停止",
    "part": "第一部分：超级核心母词族",
    "group": "【6. ced / ceed / cess 走/退让】",
    "analysis_type": "构词",
    "analysis": "源自拉丁词根 cedere / cessare（彻底收住脚步） -> 停止，中止。"
  },
  {
    "word": "ceiling",
    "phonetic": "/ˈsiːlɪŋ/",
    "pos": "n.",
    "meaning": "天花板，顶棚；最高上限，法定顶格限额；云底高度，最低安全飞行云高",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "本义指“用木板或石膏” -> 天花板，顶棚。"
  },
  {
    "word": "chain",
    "phonetic": "/tʃeɪn/",
    "pos": "n./vt.",
    "meaning": "链条，铁链锁链；商业连锁店，连锁网络；一系列一连串连环",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "词根 catena（由高强度金属） -> 链条，铁链锁链。"
  },
  {
    "word": "chalk",
    "phonetic": "/tʃɔːk/",
    "pos": "n./v.",
    "meaning": "粉笔 v. 用粉笔写",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "源自词根核心本义 -> 粉笔，v.。"
  },
  {
    "word": "chase",
    "phonetic": "/tʃeɪs/",
    "pos": "v./n.",
    "meaning": "追赶， 追捕追踪； 追求追逐； 驱逐赶跑； 追逐追捕过程",
    "part": "第一部分：超级核心母词族",
    "group": "【1. cap / capt / cept / ceiv / cip 抓/拿/容纳/理解】",
    "analysis_type": "构词",
    "analysis": "本义指“在丛林中策马” -> 追赶，追捕追踪。"
  },
  {
    "word": "chew",
    "phonetic": "/tʃuː/",
    "pos": "v./n.",
    "meaning": "咀嚼，细细嚼碎；反复深思咀嚼琢磨；严厉训斥痛骂",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "同源（利用上下颌臼） -> 咀嚼，细细嚼碎。"
  },
  {
    "word": "chip",
    "phonetic": "/tʃɪp/",
    "pos": "n./v.",
    "meaning": "微芯片，集成电路芯片；碎片，碎屑；油炸土豆片薯片",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "本义指“用锋利战斧在” -> 微芯片，集成电路芯片。"
  },
  {
    "word": "chop",
    "phonetic": "/tʃɒp/",
    "pos": "v./n.",
    "meaning": "剁碎，劈；大刀阔斧削减取消；排骨，带骨肉排",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "与 chip（碎屑）同源强化动词 -> 剁碎，劈。"
  },
  {
    "word": "clap",
    "phonetic": "/klæp/",
    "pos": "v./n.",
    "meaning": "拍手鼓掌；猛拍轻拍；鼓掌声",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "拟声强拍词 -> 拍手鼓掌。"
  },
  {
    "word": "clasp",
    "phonetic": "/klɑːsp/",
    "pos": "v./n.",
    "meaning": "紧握，紧抱紧抓金属搭扣扣钩；紧紧扣住锁死；紧抱抓牢",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "本义指“五指弯曲如钢” -> 紧握，紧抱紧抓金属搭扣扣钩。"
  },
  {
    "word": "claw",
    "phonetic": "/klɔː/",
    "pos": "n./v.",
    "meaning": "尖锐利爪，弯爪；强壮大螯钳；用爪子抓挠撕扯",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然生态、地理环境与动植物】",
    "analysis_type": "构词",
    "analysis": "禽兽弯曲锐利的硬趾爪 -> 尖锐利爪，弯爪。"
  },
  {
    "word": "climb",
    "phonetic": "/klaɪm/",
    "pos": "v./n.",
    "meaning": "攀登， 爬； 上升",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "源自词根核心本义 -> 攀登，爬。"
  },
  {
    "word": "cling",
    "phonetic": "/klɪŋ/",
    "pos": "vi.",
    "meaning": "紧贴； 死死抱住； 黏着（to）",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "源自词根核心本义 -> 紧贴。"
  },
  {
    "word": "clip",
    "phonetic": "/klɪp/",
    "pos": "n./v.",
    "meaning": "夹子，回形针发夹；弹夹弹匣；影视微视频剪辑片段",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "双源融合词 -> 夹子，回形针发夹。"
  },
  {
    "word": "clothe",
    "phonetic": "/kləʊð/",
    "pos": "vt.",
    "meaning": "给…穿衣服， 供给衣物； 给…提供温饱； 覆盖遮蔽， 笼罩",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "词根 cloth（纺织布料） -> 用温暖厚实的棉等 -> 给…穿衣服，供给衣物。"
  },
  {
    "word": "clutch",
    "phonetic": "/klʌtʃ/",
    "pos": "v./n.",
    "meaning": "紧握， 紧抓； 离合器",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "源自词根核心本义 -> 紧握，紧抓。"
  },
  {
    "word": "coarse",
    "phonetic": "/kɔːs/",
    "pos": "adj.",
    "meaning": "粗糙不光滑细腻的（纹理）粗大的， 大颗粒的（粗盐）",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "源自 course（正规航线） -> 粗糙不光滑细腻的（纹理）粗大的，大颗粒的（粗盐）。"
  },
  {
    "word": "coil",
    "phonetic": "/kɔɪl/",
    "pos": "n./v.",
    "meaning": "线圈，螺线管卷；盘卷盘绕；卷成卷缠绕",
    "part": "第一部分：超级核心母词族",
    "group": "【19. leg / lig / lect 采集/阅读/选择】",
    "analysis_type": "构词",
    "analysis": "源自拉丁词根 colligere（聚拢收集） -> 线圈，螺线管卷。"
  },
  {
    "word": "collapse",
    "phonetic": "/kəˈlæps/",
    "pos": "vi./n.",
    "meaning": "vi./n. 倒塌， 崩溃； 折叠",
    "part": "第二部分：高频专业词根族",
    "group": "【54. lud / lus 嬉戏/扮演/欺骗】",
    "analysis_type": "构词",
    "analysis": "col-（共同） + lapse-（滑落） -> 整个结构一齐向内坍塌滑落 -> / 倒塌， 崩溃。"
  },
  {
    "word": "compact",
    "phonetic": "/kəmˈpækt/ (adj.), /ˈkɒmpækt/ (n./v.)",
    "pos": "adj./n./v.",
    "meaning": "adj. 紧凑的； 结实的 vt. 压实",
    "part": "第一部分：超级核心母词族",
    "group": "【21. pac / peac 和平/平息/契约】",
    "analysis_type": "构词",
    "analysis": "com-（共同） + pact-（系紧） -> 紧密扎实结合在一起 -> 紧凑的。"
  },
  {
    "word": "cone",
    "phonetic": "/kəʊn/",
    "pos": "n.",
    "meaning": "圆锥体，圆锥形物体；松果松塔；交通反光路锥雪糕筒",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "源自希腊语 konos（底部为一个完） -> 圆锥体，圆锥形物体。"
  },
  {
    "word": "cook",
    "phonetic": "/kʊk/",
    "pos": "v./n.",
    "meaning": "烹饪，烧菜做饭；篡改伪造凭证数据；策划谋划秘密方案",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "源自拉丁词根 coquere（调动薪火热度） -> 烹饪，烧菜做饭。"
  },
  {
    "word": "cool",
    "phonetic": "/kuːl/",
    "pos": "adj./v./n.",
    "meaning": "凉爽凉快的；冷静沉着镇定的；态度冷淡冷漠疏离的",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "同源（寒冷冰凉） -> 凉爽凉快的。"
  },
  {
    "word": "cord",
    "phonetic": "/kɔːd/",
    "pos": "n.",
    "meaning": "粗绳，细麻绳扎带；电线，家用电器软电线电源线；索带结构",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "源自希腊语 khorde（古代七弦琴由） -> 粗绳，细麻绳扎带。"
  },
  {
    "word": "cork",
    "phonetic": "/kɔːk/",
    "pos": "n./vt.",
    "meaning": "软木，软木塞；用软木塞塞紧瓶口；抑制克制压抑",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "词根 cortex（栓皮栎树干外） -> 软木，软木塞。"
  },
  {
    "word": "corner",
    "phonetic": "/ˈkɔːnə(r)/",
    "pos": "n./vt.",
    "meaning": "角，墙角；街角，路口拐角；逼入死角绝境",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "词根 cornu（公牛或羚羊头） -> 角，墙角。"
  },
  {
    "word": "crack",
    "phonetic": "/kræk/",
    "pos": "v./n.",
    "meaning": "破裂； 砸开 n. 裂纹， 裂缝",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "源自拟声词 -> 破裂。"
  },
  {
    "word": "crash",
    "phonetic": "/kræʃ/",
    "pos": "n./v.",
    "meaning": "碰撞， 坠毁； 暴跌 v. 撞车",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "源自拟声词 -> 碰撞，坠毁。"
  },
  {
    "word": "creep",
    "phonetic": "/kriːp/",
    "pos": "vi./n.",
    "meaning": "蹑手蹑脚缓慢潜行，爬行匍匐前进；悄悄滋生蔓延；令人毛骨悚然厌恶的怪人",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "源自原始ą（四肢贴紧冰冷） -> 蹑手蹑脚缓慢潜行，爬行匍匐前进。"
  },
  {
    "word": "crisp",
    "phonetic": "/krɪsp/",
    "pos": "adj./n./v.",
    "meaning": "酥脆的，咬上去清脆作响的；干冷清爽宜人的；干脆利落简明扼要的",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "词根 crispus（表面弯曲卷缩） -> 酥脆的，咬上去清脆作响的。"
  },
  {
    "word": "crooked",
    "phonetic": "/ˈkrʊkɪd/",
    "pos": "adj.",
    "meaning": "弯曲扭曲不平直的",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "crook（弯钩） + -ed（形容词后缀） -> 弯曲扭曲不平直的。"
  },
  {
    "word": "cross",
    "phonetic": "/krɒs/",
    "pos": "v./n./adj.",
    "meaning": "穿过， 跨越 n. 十字",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "源自古爱尔兰语 cros（十字架） -> 穿过，跨越。"
  },
  {
    "word": "crude",
    "phonetic": "/kruːd/",
    "pos": "adj./n.",
    "meaning": "原生的，未经提炼加工的；粗糙简陋简易的；粗俗粗暴无礼言辞粗鄙的",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "同源（刚从刚捕杀猎） -> 原生的，未经提炼加工的。"
  },
  {
    "word": "crush",
    "phonetic": "/krʌʃ/",
    "pos": "vt./n.",
    "meaning": "压碎， 碾碎； 压垮； 拥挤",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "本义指“用重力压碎砸” -> 压碎，碾碎。"
  },
  {
    "word": "crust",
    "phonetic": "/krʌst/",
    "pos": "n./v.",
    "meaning": "地壳；面包坚硬酥脆的外皮；硬壳硬结表面层",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然生态、地理环境与动植物】",
    "analysis_type": "构词",
    "analysis": "词根 crusta（滚烫热汤或烤） -> 地壳。"
  },
  {
    "word": "curl",
    "phonetic": "/kɜːl/",
    "pos": "v./n.",
    "meaning": "卷曲，使卷曲蜷缩；卷发，螺旋卷状物；冰壶石",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "源自中古荷兰语 krul（受热后角质蛋） -> 卷曲，使卷曲蜷缩。"
  },
  {
    "word": "curve",
    "phonetic": "/kɜːv/",
    "pos": "n./v.",
    "meaning": "曲线，弧线；弯道；学习曲线",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "源自拉丁词根 curvus（自然弯曲不平） -> 曲线，弧线。"
  },
  {
    "word": "dark",
    "phonetic": "/dɑːk/",
    "pos": "adj./n.",
    "meaning": "黑暗的； 暗色的 n. 黑暗",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然地理、动植物与环境保护】",
    "analysis_type": "构词",
    "analysis": "源自词根核心本义 -> 黑暗的。"
  },
  {
    "word": "dense",
    "phonetic": "/dens/",
    "pos": "adj.",
    "meaning": "稠密的， 密集紧凑的； 浓厚的浓稠的； 愚钝迟钝不易理解的",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "词根 densus（微观分子或参） -> 稠密的，密集紧凑的。"
  },
  {
    "word": "depth",
    "phonetic": "/depθ/",
    "pos": "n.",
    "meaning": "深度，深处深渊；深刻性，学术深邃深沉性；在深水深处",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "deep（深邃的） + -th（抽象名词后缀） -> 深度，深处深渊。"
  },
  {
    "word": "diameter",
    "phonetic": "/daɪˈæmɪtə(r)/",
    "pos": "n.",
    "meaning": "直径； 放大倍数， 透镜放大率",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "dia-（穿越） + meter（测量） -> 直径。"
  },
  {
    "word": "dim",
    "phonetic": "/dɪm/",
    "pos": "adj./v.",
    "meaning": "昏暗的，光线暗淡模糊的；模糊不清的；不聪颖迟钝愚钝的",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "核心意象为“光线受重度阴” -> 昏暗的，光线暗淡模糊的。"
  },
  {
    "word": "downward",
    "phonetic": "/ˈdaʊnwəd/",
    "pos": "adj./adv.",
    "meaning": "向下的，朝下的日趋下降走低恶化的；向下地，往下地",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "down（向下） + -ward（朝向…方向后） -> 向下的，朝下的日趋下降走低恶化的。"
  },
  {
    "word": "drag",
    "phonetic": "/dræɡ/",
    "pos": "v./n.",
    "meaning": "拖，拉；拖延，缓慢费力拖沓前行；流体阻力，空气阻力",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "同源（紧贴地面克服） -> 拖，拉。"
  },
  {
    "word": "drift",
    "phonetic": "/drɪft/",
    "pos": "vi./n.",
    "meaning": "漂流， 漂泊； 漂移 n. 大意",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "源自词根核心本义 -> 漂流，漂泊。"
  },
  {
    "word": "dry",
    "phonetic": "/draɪ/",
    "pos": "adj./v.",
    "meaning": "干的， 干燥的 v. 弄干",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然地理、动植物与环境保护】",
    "analysis_type": "构词",
    "analysis": "本义 -> 干的，干燥的。"
  },
  {
    "word": "dull",
    "phonetic": "/dʌl/",
    "pos": "adj./v.",
    "meaning": "枯燥乏味的，沉闷单调让人昏昏欲睡的；迟钝笨拙悟性不高的；不锋利的，变钝的",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "核心意象为“头脑被烈酒或” -> 枯燥乏味的，沉闷单调让人昏昏欲睡的。"
  },
  {
    "word": "dust",
    "phonetic": "/dʌst/",
    "pos": "n./v.",
    "meaning": "灰尘，尘土细碎微尘；遗骸骨灰；除尘，掸去灰尘",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "同源（被微风狂风吹） -> 灰尘，尘土细碎微尘。"
  },
  {
    "word": "early",
    "phonetic": "/ˈɜːli/",
    "pos": "adj./adv.",
    "meaning": "早期的， 早的 adv. 提早",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "er-（早早破晓） + -ly（形容词） -> 早期的，早的。"
  },
  {
    "word": "edge",
    "phonetic": "/edʒ/",
    "pos": "n./v.",
    "meaning": "边缘，外缘边际；锋利的刀刃刀口；竞争中微弱但决定性的领先优势",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "同源（尖锐突刺） -> 边缘，外缘边际。"
  },
  {
    "word": "elastic",
    "phonetic": "/ɪˈlæstɪk/",
    "pos": "adj./n.",
    "meaning": "有弹性的； 灵活的 n. 橡皮筋",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "词根 elau（伸缩） -> 受力变形后能迅速回弹 -> 有弹性的。"
  },
  {
    "word": "elsewhere",
    "phonetic": "/ˌelsˈweə(r)/",
    "pos": "adv.",
    "meaning": "在别处， 去别处， 到其他地方（与相对另寻他处）",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "else（其他的） + where（地点场所） -> 在别处，去别处。"
  },
  {
    "word": "entire",
    "phonetic": "/ɪnˈtaɪə(r)/",
    "pos": "adj.",
    "meaning": "全部的， 整个的； 完全的",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "en-（未受） + tire（触碰碰破） -> 全部的，整个的。"
  },
  {
    "word": "evaporate",
    "phonetic": "/ɪˈvæpəreɪt/",
    "pos": "v.",
    "meaning": "蒸发， 挥发； 消失",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然地理、动植物与环境保护】",
    "analysis_type": "构词",
    "analysis": "e-（向外） + vapor-（水汽） + -ate（动词后缀） -> 蒸发，挥发。"
  },
  {
    "word": "even",
    "phonetic": "/ˈiːvn/",
    "pos": "adv./adj./v.",
    "meaning": "甚至，连…都；平坦平整的；均匀相等的，均等的",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "核心意象为“用木水平尺校” -> 甚至，连…都。"
  },
  {
    "word": "everywhere",
    "phonetic": "/ˈevriweə(r)/",
    "pos": "adv.",
    "meaning": "到处，处处；普遍存在无所不在的",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "every（每一个离散的） + where（地点场所） -> 到处，处处。"
  },
  {
    "word": "expand",
    "phonetic": "/ɪkˈspænd/",
    "pos": "v.",
    "meaning": "扩大， 膨胀； 扩充",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "ex-（向外） + pand（展开） -> 扩大，膨胀。"
  },
  {
    "word": "explode",
    "phonetic": "/ɪkˈspləʊd/",
    "pos": "v.",
    "meaning": "爆炸，爆裂爆碎突然强烈爆发；急剧激增飞速膨胀；彻底推翻破除",
    "part": "第二部分：高频专业词根族",
    "group": "【54. lud / lus 嬉戏/扮演/欺骗】",
    "analysis_type": "构词",
    "analysis": "ex-（向外彻底喷出） + plode（拍击手掌喝倒） -> 爆炸，爆裂爆碎突然强烈爆发。"
  },
  {
    "word": "extent",
    "phonetic": "/ɪkˈstent/",
    "pos": "n.",
    "meaning": "程度， 限度（在很大程度上）； 广度， 广袤范围； 延伸长度",
    "part": "第一部分：超级核心母词族",
    "group": "【20. ten / tain / tin 握/持/容纳】",
    "analysis_type": "构词",
    "analysis": "ex-（向外） + tent（伸展） -> 程度，限度（在很大程度上）。"
  },
  {
    "word": "fade",
    "phonetic": "/feɪd/",
    "pos": "v.",
    "meaning": "逐渐褪色，变淡变浅；逐渐衰微凋谢；逐渐消逝无声息",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "本义指“平淡无味” -> 逐渐褪色，变淡变浅。"
  },
  {
    "word": "fast",
    "phonetic": "/fɑːst/",
    "pos": "adj./adv./v./n.",
    "meaning": "adj./adv. 牢固紧固的；快速敏捷的 vi./n. 禁食，斋戒",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "原始 本义为“坚固不可动摇紧密咬合在一起”（与等 -> 快速的，迅疾飞快的。"
  },
  {
    "word": "fasten",
    "phonetic": "/ˈfɑːsn/",
    "pos": "v.",
    "meaning": "扎牢，扣紧；把…牢牢固定紧固在；集中注意力注视锁定于",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "fast（牢固坚实的） + -en（使动词后缀，引申指侦探或审判长在法庭上将如鹰 -> 扎牢，扣紧。"
  },
  {
    "word": "fat",
    "phonetic": "/fæt/",
    "pos": "adj./n.",
    "meaning": "肥胖的， 体态丰满肥硕的； 丰厚的， 可观油水大的； 肥肉",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "同源（由于食物充沛） -> 肥胖的，体态丰满肥硕的。"
  },
  {
    "word": "flat",
    "phonetic": "/flæt/",
    "pos": "adj./n./adv.",
    "meaning": "n. 单元房，公寓 adj. 平坦水平的；断然彻底的；萧条无波澜的",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "源自古诺斯语 flatr（没有高低起伏） -> 平的，平坦水平的。"
  },
  {
    "word": "fling",
    "phonetic": "/flɪŋ/",
    "pos": "vt./n.",
    "meaning": "猛掷，用力抛扔丢出；猛冲，毅然决然全身心扑向；挥臂猛甩",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "源自古诺斯语 flengja（调动全身腰腹） -> 猛掷，用力抛扔丢出。"
  },
  {
    "word": "float",
    "phonetic": "/fləʊt/",
    "pos": "v./n.",
    "meaning": "浮动， 漂浮； 浮起 n. 浮标",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "源自词根核心本义 -> 浮动，漂浮。"
  },
  {
    "word": "flow",
    "phonetic": "/fləʊ/",
    "pos": "vi./n.",
    "meaning": "流动，奔流涌动；流畅，连贯持续不断地流淌产生；车流，人流",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然生态、地理环境与动植物】",
    "analysis_type": "构词",
    "analysis": "同源（如同奔腾大江） -> 流动，奔流涌动。"
  },
  {
    "word": "fold",
    "phonetic": "/fəʊld/",
    "pos": "v./n.",
    "meaning": "折叠，对折对卷；交叉双臂；彻底破产倒闭关张",
    "part": "第一部分：超级核心母词族",
    "group": "【4. ple / pli / plic 折叠/倍/重】",
    "analysis_type": "构词",
    "analysis": "同源（将原本平展的） -> 折叠，对折对卷。"
  },
  {
    "word": "foul",
    "phonetic": "/faʊl/",
    "pos": "adj./n./v.",
    "meaning": "恶臭难闻令人作呕的；邪恶肮脏令人唾弃的；狂风暴雨极其恶劣阴冷的",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "同源（有机物腐烂变） -> 恶臭难闻令人作呕的。"
  },
  {
    "word": "frame",
    "phonetic": "/freɪm/",
    "pos": "n./vt.",
    "meaning": "框架，骨架框框底盘承重构架；身材骨骼体格；制定，起草拟定",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "本义指“有益推进” -> 框架，骨架框框底盘承重构架。"
  },
  {
    "word": "fresh",
    "phonetic": "/freʃ/",
    "pos": "adj.",
    "meaning": "新鲜的； 清新的； 新型的",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然地理、动植物与环境保护】",
    "analysis_type": "构词",
    "analysis": "本义指“词根字面” -> 新鲜的。"
  },
  {
    "word": "frost",
    "phonetic": "/frɒst/",
    "pos": "n./v.",
    "meaning": "霜， 严寒 v. 结霜",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然地理、动植物与环境保护】",
    "analysis_type": "构词",
    "analysis": "源自词根核心本义 -> 霜，严寒。"
  },
  {
    "word": "fry",
    "phonetic": "/fraɪ/",
    "pos": "v./n.",
    "meaning": "油炸，油煎；烤得皮开肉绽焦头烂额；小鱼苗，刚孵化的微小淡水鱼苗",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "源自拉丁词根 frigere（在烧得滚烫翻） -> 油炸，油煎。"
  },
  {
    "word": "gasp",
    "phonetic": "/ɡɑːsp/",
    "pos": "vi./n.",
    "meaning": "倒抽一口冷气，屏息倒吸凉气；大口喘气倒气；急促粗重的喘息声",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "拟声强吸气词（源自古诺斯语） -> 倒抽一口冷气，屏息倒吸凉气。"
  },
  {
    "word": "gaze",
    "phonetic": "/ɡeɪz/",
    "pos": "vi./n.",
    "meaning": "凝视，凝望；目光定格凝望；专注长久的目光注视",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "本义指“双眼瞳孔散发” -> 凝视，凝望。"
  },
  {
    "word": "gentle",
    "phonetic": "/ˈdʒentl/",
    "pos": "adj.",
    "meaning": "温柔温和的，轻柔轻抚的；文雅高尚出身名门的；温顺驯服的",
    "part": "第一部分：超级核心母词族",
    "group": "【7. gen / gener / gent 产生/出生/种属】",
    "analysis_type": "构词",
    "analysis": "词根 gen-（出身高贵名门） -> 温柔温和的，轻柔轻抚的。"
  },
  {
    "word": "glance",
    "phonetic": "/ɡlɑːns/",
    "pos": "vi./n.",
    "meaning": "瞥一眼，匆匆迅速看上一眼；闪烁闪现反光；反弹擦过擦飞",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "双源融合词 -> 瞥一眼，匆匆迅速看上一眼。"
  },
  {
    "word": "glide",
    "phonetic": "/ɡlaɪd/",
    "pos": "vi./n.",
    "meaning": "滑行，滑翔；悄然流逝；滑翔飞行运动",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "同源（发光） -> 滑行，滑翔。"
  },
  {
    "word": "glimpse",
    "phonetic": "/ɡlɪmps/",
    "pos": "n./vt.",
    "meaning": "一瞥， 瞥见， 若隐若现的一看",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "本义指“闪烁微光” -> 一瞥，瞥见。"
  },
  {
    "word": "globe",
    "phonetic": "/ɡləʊb/",
    "pos": "n.",
    "meaning": "地球，整个世界；地球仪；球体，球状天体物",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然生态、地理环境与动植物】",
    "analysis_type": "构词",
    "analysis": "词根 globus（圆滚滚没有任） -> 地球，整个世界。"
  },
  {
    "word": "grab",
    "phonetic": "/ɡræb/",
    "pos": "v./n.",
    "meaning": "一把抓住，强行夺取；急忙匆匆抓取吃喝；抢夺抓取动作",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "源自中古低地德语 grabben（五指大张以极） -> 一把抓住，强行夺取。"
  },
  {
    "word": "grand",
    "phonetic": "/ɡrænd/",
    "pos": "adj./n.",
    "meaning": "宏伟壮丽雄伟的；盛大隆重的，崇高宏大的；华丽高贵的",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "源自拉丁词根 grandis（身材高大体量） -> 宏伟壮丽雄伟的。"
  },
  {
    "word": "grasp",
    "phonetic": "/ɡrɑːsp/",
    "pos": "vt./n.",
    "meaning": "紧紧抓牢，紧握；彻底理解，透彻领会掌握；果断抓住",
    "part": "第一部分：超级核心母词族",
    "group": "【1. cap / capt / cept / ceiv / cip 抓/拿/容纳/理解】",
    "analysis_type": "构词",
    "analysis": "本义指“伸手用五指像” -> 紧紧抓牢，紧握。"
  },
  {
    "word": "grind",
    "phonetic": "/ɡraɪnd/",
    "pos": "v./n.",
    "meaning": "磨碎，碾碎研磨；咬牙切齿摩擦；枯燥艰辛耗尽耐心的日常苦差事",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "同源（用两块巨大沉） -> 磨碎，碾碎研磨。"
  },
  {
    "word": "grip",
    "phonetic": "/ɡrɪp/",
    "pos": "v./n.",
    "meaning": "紧握， 抓牢； 吸引力 n. 控制",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "源自词根核心本义 -> 紧握，抓牢。"
  },
  {
    "word": "groan",
    "phonetic": "/ɡrəʊn/",
    "pos": "vi./n.",
    "meaning": "呻吟，发出痛苦低沉呻吟；发出沉重刺耳的吱嘎嘎受力呻吟声；抱怨叹息发牢骚",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "拟声沉闷长音动词 -> 呻吟，发出痛苦低沉呻吟。"
  },
  {
    "word": "gross",
    "phonetic": "/ɡrəʊs/",
    "pos": "adj./vt.",
    "meaning": "总的， 毛重的 vt. 获得总收入",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "源自晚期词根 grossus（粗大厚重） -> 总的，毛重的。"
  },
  {
    "word": "hang",
    "phonetic": "/hæŋ/",
    "pos": "v./n.",
    "meaning": "悬挂，吊挂挂在；处以绞刑，吊死绞死；悬垂垂挂",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "同源（仅由顶端一个） -> 悬挂，吊挂挂在。"
  },
  {
    "word": "hard",
    "phonetic": "/hɑːd/",
    "pos": "adj./adv.",
    "meaning": "坚硬的， 硬质的",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "同源（充满钢铁般不） -> 坚硬的，硬质的。"
  },
  {
    "word": "harsh",
    "phonetic": "/hɑːʃ/",
    "pos": "adj.",
    "meaning": "严酷恶劣无情的； 刺耳刺目刺鼻的； 粗糙刺手的",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "本义指“摸上去像马尾” -> 严酷恶劣无情的。"
  },
  {
    "word": "haul",
    "phonetic": "/hɔːl/",
    "pos": "v./n.",
    "meaning": "用力拖，使劲拉拽；长途运输运送；一次捕获的大批鱼虾，缴获战利品",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "本义指“水手在甲板上” -> 用力拖，使劲拉拽。"
  },
  {
    "word": "heave",
    "phonetic": "/hiːv/",
    "pos": "v./n.",
    "meaning": "用力举起搬起，费力拉动拉起；剧烈起伏升降；用力一拉一推",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "同源（抓住并调动全） -> 用力举起搬起，费力拉动拉起。"
  },
  {
    "word": "height",
    "phonetic": "/haɪt/",
    "pos": "n.",
    "meaning": "高度，高程；高处高地；极点顶峰全盛期",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "high（高耸挺拔的） + -th（抽象名词后缀） -> 古代帝国国力达到四海归心 -> 高度，高程。"
  },
  {
    "word": "hence",
    "phonetic": "/hens/",
    "pos": "adv.",
    "meaning": "因此，所以；自此以后，今后；从此处由此离开",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "本义指“从这个既定出” -> 因此，所以。"
  },
  {
    "word": "hiss",
    "phonetic": "/hɪs/",
    "pos": "vi./n.",
    "meaning": "发出嘶嘶声；压低喉咙愤怒厉声斥责耳语；发出嘘声喝倒彩",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "拟声摩擦尖锐气音词 -> 发出嘶嘶声。"
  },
  {
    "word": "hit",
    "phonetic": "/hɪt/",
    "pos": "v./n.",
    "meaning": "击打，打击撞击；沉重袭击侵袭重创；突然顿悟想到，脑海中猛然闪现",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "源自古诺斯语 hitta（射手弯弓搭箭） -> 击打，打击撞击。"
  },
  {
    "word": "hoist",
    "phonetic": "/hɔːl/",
    "pos": "vt./n.",
    "meaning": "起吊，吊起升起；用力向上托起抬起；起重升降设备，卷扬机吊车绞盘",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "源自中古荷兰语 hijsen（水手在风浪中） -> 起吊，吊起升起。"
  },
  {
    "word": "hollow",
    "phonetic": "/ˈhɒləʊ/",
    "pos": "adj./n./v.",
    "meaning": "中空的，空心的；深陷凹陷的；山谷深洼地",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "本义指“由流水在岩石” -> 中空的，空心的。"
  },
  {
    "word": "hook",
    "phonetic": "/hʊk/",
    "pos": "n./v.",
    "meaning": "钩子，铁钩鱼钩；挂钩；拳击弧线左，右勾拳",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "源自原始ōkaz（弯曲成U形或） -> 钩子，铁钩鱼钩。"
  },
  {
    "word": "hop",
    "phonetic": "/hɒp/",
    "pos": "vi./n.",
    "meaning": "单脚跳跃，单足蹦跳；轻快双脚跳跃跳动；快速短暂的换乘旅程",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然生态、地理环境与动植物】",
    "analysis_type": "构词",
    "analysis": "同源（两腿蜷缩聚力） -> 单脚跳跃，单足蹦跳。"
  },
  {
    "word": "howl",
    "phonetic": "/haʊl/",
    "pos": "v./n.",
    "meaning": "凄厉长嚎长啸；怒号呼啸咆哮；痛哭哀嚎大放悲声",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然生态、地理环境与动植物】",
    "analysis_type": "构词",
    "analysis": "拟声深长凄凉长音动词 -> 凄厉长嚎长啸。"
  },
  {
    "word": "hug",
    "phonetic": "/hʌɡ/",
    "pos": "v./n.",
    "meaning": "拥抱，紧紧拥抱搂入怀中；紧贴依偎贴着边缘延伸；欣喜若狂紧紧抓住拥抱",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "源自古诺斯语 hugga（在亲人饱受恐） -> 拥抱，紧紧拥抱搂入怀中。"
  },
  {
    "word": "huge",
    "phonetic": "/hjuːdʒ/",
    "pos": "adj.",
    "meaning": "巨大的，庞大无比的；体积容积规模极其恢弘浩瀚的；极其轰动极成功的",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "本义指“宏伟崇高拔地” -> 巨大的，庞大无比的。"
  },
  {
    "word": "hum",
    "phonetic": "/hʌm/",
    "pos": "v./n.",
    "meaning": "哼唱，闭唇轻哼；发出连续低沉嗡嗡声；繁忙喧闹活跃",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "拟声低频闭唇词 -> 或高压变压器变等 -> 哼唱，闭唇轻哼。"
  },
  {
    "word": "hurl",
    "phonetic": "/hɜːl/",
    "pos": "vt.",
    "meaning": "猛投，猛摔；厉声大肆辱骂斥责；猛扑冲向",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "本义指“调动腰背全部” -> 猛投，猛摔。"
  },
  {
    "word": "immense",
    "phonetic": "/ɪˈmens/",
    "pos": "adj.",
    "meaning": "巨大的， 极其广袤浩瀚的",
    "part": "第一部分：超级核心母词族",
    "group": "【17. men / mens / meter 测量】",
    "analysis_type": "构词",
    "analysis": "im-（无） + mens-（测量） -> 巨大的，极其广袤浩瀚的。"
  },
  {
    "word": "indoor",
    "phonetic": "/ˈɪndɔː(r)/",
    "pos": "adj.",
    "meaning": "室内的， 户内的， 在屋子建筑内部进行的",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "in（在…内部） + door（房屋大门） -> 室内的，户内的。"
  },
  {
    "word": "indoors",
    "phonetic": "/ˌɪnˈdɔːz/",
    "pos": "adv.",
    "meaning": "在室内， 往室内",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "indoor（室内） + -s（副词所有格后） -> 在室内，往室内。"
  },
  {
    "word": "inward",
    "phonetic": "/ˈɪnwəd/",
    "pos": "adj./adv.",
    "meaning": "向内的，朝向内部的；内心的，精神深处的；向内地",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "in（向内） + -ward（朝向…方向后） -> 向内的，朝向内部的。"
  },
  {
    "word": "jerk",
    "phonetic": "/dʒɜːk/",
    "pos": "v./n.",
    "meaning": "猛拉，猝然一扯急拽；抽搐，痉挛颤动；肌肉抽动",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "拟声与突发动作词（与 yerk） -> 猛拉，猝然一扯急拽。"
  },
  {
    "word": "keen",
    "phonetic": "/kiːn/",
    "pos": "adj.",
    "meaning": "敏锐机敏的； 白热化激烈的； 刺骨凛冽的",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "源自原始ōnjaz（勇猛如猛禽） -> 敏锐机敏的。"
  },
  {
    "word": "kick",
    "phonetic": "/kɪk/",
    "pos": "v./n.",
    "meaning": "踢，踹；后坐力反冲；极大的兴奋快感刺激",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "本义指“利用腿部股四” -> 踢，踹。"
  },
  {
    "word": "knock",
    "phonetic": "/nɒk/",
    "pos": "v./n.",
    "meaning": "敲，打；碰撞猛撞；严厉指责挑刺批评",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "拟声重击词 -> 或等 -> 敲，打。"
  },
  {
    "word": "knot",
    "phonetic": "/nɒt/",
    "pos": "n./v.",
    "meaning": "（绳索小时）； 打结系紧",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "核心意象为“将柔软绳头在” -> （绳索/领带打成的）结 -> （绳索小时）。"
  },
  {
    "word": "late",
    "phonetic": "/leɪt/",
    "pos": "adj./adv.",
    "meaning": "迟到的，晚的；已故的，刚刚去世不久的前任的；深夜晚期地",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "核心意象为“行动迟缓疲惫” -> 迟到的，晚的。"
  },
  {
    "word": "lean",
    "phonetic": "/liːn/",
    "pos": "v./adj.",
    "meaning": "倾斜，斜靠在倚靠在；倾向于，偏向；精干瘦削无多余赘肉的",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "源自原始ōną（身体偏离垂直） -> 倾斜，斜靠在倚靠在。"
  },
  {
    "word": "length",
    "phonetic": "/leŋθ/",
    "pos": "n.",
    "meaning": "长度，长短距离；时间跨度长短；一节一段",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "long（修长漫长的） + -th（抽象名词后缀） -> 长度，长短距离。"
  },
  {
    "word": "level",
    "phonetic": "/ˈlevl/",
    "pos": "n./adj./vt.",
    "meaning": "水平面，水平线；水平高度水准等级；平坦平整的",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "本义指“古代石匠利用” -> 水平面，水平线。"
  },
  {
    "word": "limit",
    "phonetic": "/ˈlɪmɪt/",
    "pos": "n./vt.",
    "meaning": "界限，限度极限；法定边界；限制，限定限定于",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "源自拉丁词根 limes / limitis（古罗马帝国在） -> 界限，限度极限。"
  },
  {
    "word": "linear",
    "phonetic": "/ˈlɪniə(r)/",
    "pos": "adj.",
    "meaning": "线性的，直线的；线性的；线性思维一步一印的",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "line（线条） + -ar（形容词后缀） -> 线性的，直线的。"
  },
  {
    "word": "lock",
    "phonetic": "/lɒk/",
    "pos": "v./n.",
    "meaning": "锁上，锁紧锁死；固定牢固锁定；锁，门锁锁具",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "源自原始ōną（用特制金属锁） -> 锁上，锁紧锁死。"
  },
  {
    "word": "loop",
    "phonetic": "/luːp/",
    "pos": "n./v.",
    "meaning": "环，圆圈；循环；知情圈内",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "同源（弯曲弯折闭合） -> 环，圆圈。"
  },
  {
    "word": "loosen",
    "phonetic": "/ˈluːsn/",
    "pos": "v.",
    "meaning": "松开， 解开， 使松脱变松（肌肉）使疏松放松",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "loose（松散宽松的） + -en（使动词后缀，引申指中央宏观调控适度放开审批权 -> 松开，解开。"
  },
  {
    "word": "loud",
    "phonetic": "/laʊd/",
    "pos": "adj./adv.",
    "meaning": "响亮的，大声高分贝的；大声地响亮地；刺眼花哨招摇俗气的",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "同源（为人所听闻知） -> 响亮的，大声高分贝的。"
  },
  {
    "word": "mend",
    "phonetic": "/mend/",
    "pos": "v./n.",
    "meaning": "修补， 修缮缝补（和好）； 康复愈合（身体逐渐康复痊愈）",
    "part": "第一部分：超级核心母词族",
    "group": "【5. em / empt 拿/买/获得】",
    "analysis_type": "构词",
    "analysis": "源自 amend（修改改正） -> 修补，修缮缝补（和好）。"
  },
  {
    "word": "murmur",
    "phonetic": "/ˈmɜːmə(r)/",
    "pos": "v./n.",
    "meaning": "小声低语，私下嘟囔抱怨；发出轻柔潺潺声沙沙作响；心脏杂音",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "拟声叠音轻柔词 -> 小声低语，私下嘟囔抱怨。"
  },
  {
    "word": "mutter",
    "phonetic": "/ˈmʌtə(r)/",
    "pos": "v./n.",
    "meaning": "喃喃自语，自言自语低声抱怨；从牙缝中挤出含糊不清的咕哝声；低声咕哝抱怨之辞",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "本义指“拟声动词” -> 喃喃自语，自言自语低声抱怨。"
  },
  {
    "word": "narrow",
    "phonetic": "/ˈnærəʊ/",
    "pos": "adj./v.",
    "meaning": "狭窄的，窄小的逼仄的；缩小，使变窄；仔细严格审视",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "核心意象为“受到两侧绝壁” -> 狭窄的，窄小的逼仄的。"
  },
  {
    "word": "neat",
    "phonetic": "/niːt/",
    "pos": "adj.",
    "meaning": "整洁干净的， 井井有条的",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "源自拉丁词根 nitidus（经过细细擦洗） -> 整洁干净的，井井有条的。"
  },
  {
    "word": "nod",
    "phonetic": "/nɒk/",
    "pos": "v./n.",
    "meaning": "点头；打瞌睡犯困，头不由自主向下猛垂；点头赞同许可",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "源自中古高地德语 notten（头部由于颈椎） -> 点头。"
  },
  {
    "word": "notch",
    "phonetic": "/nɒtʃ/",
    "pos": "n./vt.",
    "meaning": "刻痕，V形凹口；档次等级，阶段；刻凹痕于",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "本义 oche（用锋利小刀在） -> 刻痕，V形凹口。"
  },
  {
    "word": "nowhere",
    "phonetic": "/ˈnəʊweə(r)/",
    "pos": "adv./pron.",
    "meaning": "无处，哪里都不；不知名偏僻荒凉毫无名气的地方；毫无进展原地踏步",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "no（毫无） + where（地点场所） -> 无处，哪里都不。"
  },
  {
    "word": "outdoor",
    "phonetic": "/ˈaʊtdɔː(r)/",
    "pos": "adj.",
    "meaning": "户外的， 室外的， 露天的",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "out（在外部） + door（大门） -> 户外的，室外的。"
  },
  {
    "word": "outward",
    "phonetic": "/ˈaʊtwəd/",
    "pos": "adj./adv.",
    "meaning": "向外的，朝外的；表面的，外表的；向外地，朝向外部地",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "out（向外） + -ward（朝向…方向后） -> 向外的，朝外的。"
  },
  {
    "word": "overhead",
    "phonetic": "/ˈəʊvəhed/",
    "pos": "n./adj.",
    "meaning": "经常性开支 adj. 头顶上的",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "over（在头顶上方） + head（头部） -> 经常性开支，adj.。"
  },
  {
    "word": "pant",
    "phonetic": "/pænt/",
    "pos": "vi./n.",
    "meaning": "气喘吁吁，大口喘气倒气；热切渴望渴求；粗重的气喘喘息声",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "拟声急促呼吸动词（本义） -> 气喘吁吁，大口喘气倒气。"
  },
  {
    "word": "patch",
    "phonetic": "/pætʃ/",
    "pos": "n./vt.",
    "meaning": "补丁， 小块补片（菜地）； 暂时拼凑勉强修复",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "本义指“一块形状小巧” -> 补丁，小块补片（菜地）。"
  },
  {
    "word": "pattern",
    "phonetic": "/ˈpætn/",
    "pos": "n./vt.",
    "meaning": "模式，规律机制规律特征；图案，花纹纹理；样板典范，供人效仿的标准原型",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "源自 patron（保护人） -> 模式，规律机制规律特征。"
  },
  {
    "word": "pile",
    "phonetic": "/paɪl/",
    "pos": "n./v.",
    "meaning": "堆，一堆叠放物；大量的，大堆巨额；桩，打入地底承重的桩基桩柱",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "词根 pila（古代筑城用于） -> 堆，一堆叠放物。"
  },
  {
    "word": "pitch",
    "phonetic": "/pɪtʃ/",
    "pos": "n./v.",
    "meaning": "n. 球场； 沥青； 音调 vt. 投掷",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "本义指“固定钉住” -> 将木桩插入球场划界或投球 -> 球场。"
  },
  {
    "word": "pluck",
    "phonetic": "/plʌk/",
    "pos": "v./n.",
    "meaning": "拔，拔除拔下；弹拨琴弦；鼓起，振作",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "核心意象为“用手指大拇指” -> 拔，拔除拔下。"
  },
  {
    "word": "plunge",
    "phonetic": "/plʌndʒ/",
    "pos": "v./n.",
    "meaning": "骤降，暴跌；猛扎纵身跳入；使陷入困境深渊",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "源自晚期词根 plumbicare（在铅垂线重力） -> 骤降，暴跌。"
  },
  {
    "word": "pound",
    "phonetic": "/paʊnd/",
    "pos": "n./v.",
    "meaning": "n. 磅； 英镑 vt./vi. 连续猛击",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "词根 pondus（重物） -> 既指法定衡量重物单位 -> 磅。"
  },
  {
    "word": "pull",
    "phonetic": "/pʊl/",
    "pos": "v./n.",
    "meaning": "vt.n. 拉， 拖， 拔； 吸引",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "本义指“采摘拔取” -> 抓住目标施加向己方张力 -> vt.n.，拉。"
  },
  {
    "word": "pure",
    "phonetic": "/pjʊə(r)/",
    "pos": "adj.",
    "meaning": "纯净的， 毫无杂质污染的（与应用相对）",
    "part": "第二部分：高频专业词根族",
    "group": "【61. purg 净化/清除】",
    "analysis_type": "构词",
    "analysis": "源自拉丁词根 purus（经过山泉洗涤） -> 纯净的，毫无杂质污染的（与应用相对）。"
  },
  {
    "word": "push",
    "phonetic": "/pʊʃ/",
    "pos": "v./n.",
    "meaning": "vt.n. 推， 推动； 催促",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "词根 pulsare（推挤跳动） -> 向目标物体施加向前推力 -> vt.n.，推。"
  },
  {
    "word": "quick",
    "phonetic": "/kwɪk/",
    "pos": "adj./adv.",
    "meaning": "迅速敏捷飞快的； 机智机灵悟性极高的（刺到痛处骨髓）",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "同源（拥有鲜活心跳） -> 迅速敏捷飞快的。"
  },
  {
    "word": "radius",
    "phonetic": "/ˈreɪdiəs/",
    "pos": "n.",
    "meaning": "半径； 辐射半径范围； 桡骨",
    "part": "第二部分：高频专业词根族",
    "group": "【62. rad 光线/射线/辐射】",
    "analysis_type": "构词",
    "analysis": "源自拉丁词根 radius（车轮木轮由正） -> 半径。"
  },
  {
    "word": "rapid",
    "phonetic": "/ˈræpɪd/",
    "pos": "adj./n.",
    "meaning": "迅速飞快的，高速超高速的；急促短促的；急流，险滩湍流",
    "part": "第一部分：超级核心母词族",
    "group": "【1. cap / capt / cept / ceiv / cip 抓/拿/容纳/理解】",
    "analysis_type": "构词",
    "analysis": "源自拉丁词根 rapere（抢夺抓走） -> 迅速飞快的，高速超高速的。"
  },
  {
    "word": "roast",
    "phonetic": "/rəʊst/",
    "pos": "v./adj./n.",
    "meaning": "烤，烘烤；烤熟的，烘烤过的；一大块慢火烤肉大餐",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "本义指“把整只肥嫩全” -> 烤，烘烤。"
  },
  {
    "word": "roll",
    "phonetic": "/rəʊl/",
    "pos": "v./n.",
    "meaning": "vi./vt. 翻滚， 滚动 n. 卷； 名单",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "词根 rotula（小轮子） -> 如滚轮般沿表面旋转前进 -> / 翻滚， 滚动  卷。"
  },
  {
    "word": "roam",
    "phonetic": "/rəʊm/",
    "pos": "v./n.",
    "meaning": "漫步， 漫游， 闲逛四处闲逛（跨国漫游服务）； 漫游悠闲漫步",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "本义指“古代中世纪虔” -> 漫步，漫游。"
  },
  {
    "word": "round",
    "phonetic": "/raʊnd/",
    "pos": "adj./prep./adv./n./v.",
    "meaning": "adj. 圆的 n. 回合； 巡视",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "词根 rotundus（车轮状的） -> 环形轮转循环 -> 圆的。"
  },
  {
    "word": "row",
    "phonetic": "/rəʊ/ (划船/排), /raʊ/ (争吵)",
    "pos": "n./v.",
    "meaning": "排， 行， 一行； 大声喧闹争吵",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "双源同形异音异义词 -> 排，行。"
  },
  {
    "word": "rub",
    "phonetic": "/rʌb/",
    "pos": "v./n.",
    "meaning": "摩擦，揉搓；涂抹擦上；摩擦动作",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "源自原始ōną（两手掌心或粗） -> 摩擦，揉搓。"
  },
  {
    "word": "rugged",
    "phonetic": "/ˈrʌɡɪd/",
    "pos": "adj.",
    "meaning": "崎岖险峻岩石嶙峋的； （容貌性格）坚毅刚强粗犷硬朗的",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "源自古诺斯语 rōggva（表面高低不平） -> 崎岖险峻岩石嶙峋的。"
  },
  {
    "word": "rush",
    "phonetic": "/rʌʃ/",
    "pos": "v./n.",
    "meaning": "冲，奔；急促匆忙草率，催促进度；突发的涌现激增狂潮",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "本义指“在生死追捕中” -> 冲，奔。"
  },
  {
    "word": "rust",
    "phonetic": "/rʌst/",
    "pos": "n./v.",
    "meaning": "铁锈，金属红褐色氧化锈蚀层；生锈，发生电化学氧化腐蚀；荒废退化变生疏迟钝",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "同源（由于潮湿空气） -> 铁锈，金属红褐色氧化锈蚀层。"
  },
  {
    "word": "scan",
    "phonetic": "/skæn/",
    "pos": "v./n.",
    "meaning": "细细审视，扫视审读；快速翻阅浏览；扫描检查测绘扫描",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "源自拉丁词根 scandere（用脚打着节拍） -> 细细审视，扫视审读。"
  },
  {
    "word": "scour",
    "phonetic": "/ˈskaʊə(r)/",
    "pos": "v.",
    "meaning": "彻底搜寻，四处掘地三尺严密搜查；用力用力刷洗，擦亮洗刷除垢；冲蚀冲刷刷深",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "源自晚期词根 excurare（为了消除隐患） -> 彻底搜寻，四处掘地三尺严密搜查。"
  },
  {
    "word": "scrub",
    "phonetic": "/skrʌb/",
    "pos": "v./n.",
    "meaning": "vt.n. 用力擦洗； 取消",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "本义指“用粗刷刮拭” -> 持刷用力摩擦去除污垢 -> vt.n.，用力擦洗。"
  },
  {
    "word": "seize",
    "phonetic": "/siːz/",
    "pos": "vt.",
    "meaning": "抓住，一把捉住；卡死抱死彻底卡住失灵；侵袭击中，深深攫住身心",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "本义指“中世纪封建领” -> 抓住，一把捉住。"
  },
  {
    "word": "sever",
    "phonetic": "/ˈsevə(r)/",
    "pos": "v.",
    "meaning": "切断， 割断， 斩断使完全分离； 使分离割裂开来",
    "part": "第二部分：高频专业词根族",
    "group": "【64. sect / sec 切割/分开】",
    "analysis_type": "构词",
    "analysis": "源自拉丁词根 separare（彻底分开隔离） -> 切断，割断。"
  },
  {
    "word": "shake",
    "phonetic": "/ʃeɪk/",
    "pos": "v./n.",
    "meaning": "摇动，摇晃抖动；颤抖发抖战栗；抖落摆脱",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "快速左右来回晃动 -> 摇动，摇晃抖动。"
  },
  {
    "word": "shatter",
    "phonetic": "/ˈʃætə(r)/",
    "pos": "v.",
    "meaning": "粉碎，使彻底碎成千万块齑粉碎片；极度震惊，使心碎精神崩溃；粉碎瓦解",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "与 scatter（四散抛洒）拟声强化交织 -> 粉碎，使彻底碎成千万块齑粉碎片。"
  },
  {
    "word": "shine",
    "phonetic": "/ʃaɪn/",
    "pos": "v./n.",
    "meaning": "闪耀，照耀发光；擦亮，使锃亮抛光；出类拔萃，在特定领域卓越卓越脱颖而出",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "散发耀眼夺目的光芒 -> 闪耀，照耀发光。"
  },
  {
    "word": "shove",
    "phonetic": "/ʃʌv/",
    "pos": "v./n.",
    "meaning": "猛推，用力粗鲁推挤推开；胡乱塞入，胡乱推入乱堆；猛推一下",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "源自原始ūbaną（调动双臂粗暴） -> 猛推，用力粗鲁推挤推开。"
  },
  {
    "word": "shred",
    "phonetic": "/ʃred/",
    "pos": "n./v.",
    "meaning": "碎片，细长纸条丝条；撕碎，切碎切成丝条；用碎纸机粉碎机彻底销毁保密文件",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "本义ēad（从一整块完整） -> 碎片，细长纸条丝条。"
  },
  {
    "word": "shrug",
    "phonetic": "/ʃrʌɡ/",
    "pos": "v./n.",
    "meaning": "耸肩；不屑一顾，一笑了之对…毫不在意；耸肩动作",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "本义指“耸动” -> 双肩上耸表示不知情 -> 耸肩。"
  },
  {
    "word": "shut",
    "phonetic": "/ʃʌt/",
    "pos": "v./adj.",
    "meaning": "关闭，合上关紧；关门歇业，停工停运关张；闭嘴不语",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "本义指“将粗重金属门” -> 关闭，合上关紧。"
  },
  {
    "word": "sideways",
    "phonetic": "/ˈsaɪdweɪz/",
    "pos": "adv./adj.",
    "meaning": "向侧面地，朝旁边横着地；横向地，侧身侧移地；侧向的，横向移动的",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "side（侧面） + -ways（副词方向状态） -> 向侧面地，朝旁边横着地。"
  },
  {
    "word": "sigh",
    "phonetic": "/saɪ/",
    "pos": "vi./n.",
    "meaning": "叹气，叹息；发出如叹息般沙沙轻鸣低回声响；长长的一声叹气叹息声",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "拟声深长深情出气词 -> 叹气，叹息。"
  },
  {
    "word": "silent",
    "phonetic": "/ˈsaɪlənt/",
    "pos": "adj.",
    "meaning": "寂静无声万籁俱寂的（隐形杀手高血压）",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "源自拉丁词根 silere（完全彻底停止） -> 寂静无声万籁俱寂的（隐形杀手高血压）。"
  },
  {
    "word": "simmer",
    "phonetic": "/ˈsɪmə(r)/",
    "pos": "v./n.",
    "meaning": "文火慢炖，微沸煨煮；暗暗酝酿暗流涌动，即将火山爆发；文火微沸状态",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "本义指“拟声动词” -> 文火慢炖，微沸煨煮。"
  },
  {
    "word": "skate",
    "phonetic": "/skeɪt/",
    "pos": "n./v.",
    "meaning": "溜冰鞋，滑冰鞋；溜冰轮滑；滑冰，溜冰",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "本义指“踩着高跷或绑” -> 溜冰鞋，滑冰鞋。"
  },
  {
    "word": "ski",
    "phonetic": "/skiː/",
    "pos": "n./vi.",
    "meaning": "滑雪板；滑雪板雪具用具；滑雪，从事滑雪体育运动",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "源自古诺斯语 skīð（原指劈开的光） -> 滑雪板。"
  },
  {
    "word": "skip",
    "phonetic": "/skɪp/",
    "pos": "v./n.",
    "meaning": "蹦蹦跳跳，轻快小跳地迈步向前；跳过，略过不读；无故旷课逃班旷工",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "本义指“双脚受欢欣愉” -> 蹦蹦跳跳，轻快小跳地迈步向前。"
  },
  {
    "word": "slide",
    "phonetic": "/slaɪd/",
    "pos": "v./n.",
    "meaning": "vi./vt. 滑动； 悄悄溜走 n. 滑道",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "本义指“平滑移动” -> 在光滑表面无阻碍滑移 -> / 滑动。"
  },
  {
    "word": "slim",
    "phonetic": "/slɪm/",
    "pos": "adj./v.",
    "meaning": "苗条修长纤细优美的极其微弱渺茫少之又少的；精简机构，缩减人员开支削减；使变苗条变精简",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "源自中古荷兰语 slim（原本倾斜歪斜） -> 苗条修长纤细优美的极其微弱渺茫少之又少的。"
  },
  {
    "word": "slip",
    "phonetic": "/slɪp/",
    "pos": "v./n.",
    "meaning": "vi. 滑倒； 溜走 n. 纸条； 滑倒",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "本义指“滑动” -> 足底或物体失控轻滑滑动 -> 滑倒。"
  },
  {
    "word": "slow",
    "phonetic": "/sləʊ/",
    "pos": "adj./adv./v.",
    "meaning": "缓慢的，慢速迟缓的；放慢，使减速减缓",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "核心意象为“行动拖沓毫无” -> 缓慢的，慢速迟缓的。"
  },
  {
    "word": "sluggish",
    "phonetic": "/ˈslʌɡɪdʃ/",
    "pos": "adj.",
    "meaning": "行动迟缓笨拙的，没精打采无精打采的；疲软低迷萧条停滞不前的流动缓慢淤滞的",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "slug（鼻涕虫） + -ish（具有…典型特） -> 行动迟缓笨拙的，没精打采无精打采的。"
  },
  {
    "word": "smooth",
    "phonetic": "/smuːð/",
    "pos": "adj./vt.",
    "meaning": "adj. 光滑的； 平稳的 vt. 使光滑",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "本义指“平整” -> 表面毫无毛刺凹凸阻隔 -> 光滑的。"
  },
  {
    "word": "snap",
    "phonetic": "/snæp/",
    "pos": "v./n./adj.",
    "meaning": "vt./vi. 啪地折断； 咔嚓拍下",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "源自拟声词 snap -> / 啪地折断。"
  },
  {
    "word": "snatch",
    "phonetic": "/snætʃ/",
    "pos": "v./n.",
    "meaning": "vt. 夺得， 夺走； 抓紧时间",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "本义指“迅速咬住” -> 突然伸手强行抓取 -> 夺得。"
  },
  {
    "word": "sniff",
    "phonetic": "/snɪf/",
    "pos": "v./n.",
    "meaning": "深吸气闻，抽动鼻子嗅；嗅出，察觉到；用鼻子吸气闻的声音",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "拟声短促吸气词 -> 深吸气闻，抽动鼻子嗅。"
  },
  {
    "word": "snore",
    "phonetic": "/snɔː(r)/",
    "pos": "vi./n.",
    "meaning": "打鼾， 打呼噜； 鼾声， 呼噜声； 沉睡入梦",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "拟声深长震动词（与 snor） -> 打鼾，打呼噜。"
  },
  {
    "word": "sob",
    "phonetic": "/sɒb/",
    "pos": "vi./n.",
    "meaning": "抽泣， 啜泣， 抽噎着痛哭失声",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "拟声断续抽泣词（本义） -> 抽泣，啜泣。"
  },
  {
    "word": "soft",
    "phonetic": "/sɒft/",
    "pos": "adj.",
    "meaning": "柔软的，软绵绵触感细腻的；心慈手软的，懦弱温和的；软弱无力的",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "同源（平滑紧密贴合） -> 柔软的，软绵绵触感细腻的。"
  },
  {
    "word": "solid",
    "phonetic": "/ˈsɒlɪd/",
    "pos": "adj./n.",
    "meaning": "adj. 坚固的； 实心的 n. 固体",
    "part": "第一部分：超级核心母词族",
    "group": "【2. sta / sist / st 站立/建立/停留】",
    "analysis_type": "构词",
    "analysis": "词根 solidus（坚实的） -> 内部致密毫无中空缝隙 -> 坚固的。"
  },
  {
    "word": "somehow",
    "phonetic": "/ˈsʌmhaʊ/",
    "pos": "adv.",
    "meaning": "以某种未知或尚未明确说明的方式，设法不知怎么地；莫名其妙地，不知为什么",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "some（某种尚未完全） + how（方式手段方法） -> 以某种未知或尚未明确说明的方式，设法不知怎么地。"
  },
  {
    "word": "somewhat",
    "phonetic": "/ˈsʌmwɒt/",
    "pos": "adv.",
    "meaning": "稍微， 有点儿， 在一定程度上， 略微有些",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "some（一部分微量） + what（什么东西） -> 稍微，有点儿。"
  },
  {
    "word": "somewhere",
    "phonetic": "/ˈsʌmweə(r)/",
    "pos": "adv./pron.",
    "meaning": "在某处，去某个地方；大约，大约在…左右；某个未知但确凿存在的地点场所",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "some（某个尚未精确） + where（地点场所） -> 在某处，去某个地方。"
  },
  {
    "word": "sound",
    "phonetic": "/saʊnd/",
    "pos": "n./v./adj./adv.",
    "meaning": "adj. 合理可靠的，明智的；健全的，完好无损的 n. 声音",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "本义为身体无疾无损 -> 结构扎实运转健康可靠 -> 健全的，完好的。"
  },
  {
    "word": "sour",
    "phonetic": "/ˈsaʊə(r)/",
    "pos": "adj./v.",
    "meaning": "酸的，酸味的恶化变质；使变酸变质；使人际关系恶化变糟",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "同源（有机物在乳酸） -> 酸的，酸味的恶化变质。"
  },
  {
    "word": "space",
    "phonetic": "/speɪs/",
    "pos": "n./v.",
    "meaning": "空间，三维物理空间空地；空位，空隙空白处；隔开，使相互留出间隔",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "源自拉丁词根 spatium（从起点向远方） -> 空间，三维物理空间空地。"
  },
  {
    "word": "span",
    "phonetic": "/spæn/",
    "pos": "n./vt.",
    "meaning": "跨度，跨距；跨度，持续时间跨度长度；跨及，跨越",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "本义指“大拇指顶端与” -> 跨度，跨距。"
  },
  {
    "word": "spare",
    "phonetic": "/speə(r)/",
    "pos": "adj./vt./n.",
    "meaning": "adj. 备用的； 空闲的 vt. 抽出",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "本义ær（节约节俭） -> 节省留存以备后用的物品 -> 备用的。"
  },
  {
    "word": "sphere",
    "phonetic": "/sfɪə(r)/",
    "pos": "n.",
    "meaning": "球体，球状三维几何体；领域范围，大界天地；天体天球",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "源自希腊语 sphaira（古希腊天文学） -> 球体，球状三维几何体。"
  },
  {
    "word": "spill",
    "phonetic": "/spɪl/",
    "pos": "v./n.",
    "meaning": "vt./vi. 溢出， 溅出 n. 溢出物",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "本义指“破坏” -> 液体不受控越出边缘洒漏 -> / 溢出， 溅出  溢出物。"
  },
  {
    "word": "spin",
    "phonetic": "/spɪn/",
    "pos": "v./n.",
    "meaning": "vt./vi. 旋转； 纺纱 n. 旋转",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "本义指“抽丝旋转” -> 手指快速绕轴捻纺或自转 -> / 旋转。"
  },
  {
    "word": "spit",
    "phonetic": "/spɪt/",
    "pos": "v./n.",
    "meaning": "vi./vt. 吐痰， 吐出 n. 唾液",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "拟声词 -> / 吐痰， 吐出  唾液。"
  },
  {
    "word": "sprint",
    "phonetic": "/sprɪnt/",
    "pos": "vi./n.",
    "meaning": "全速短跑冲刺，拼尽全力猛冲狂奔；最后全力突击冲刺；百米短跑冲刺赛跑项目",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "源自古诺斯语 spretta（如同一张拉满） -> 全速短跑冲刺，拼尽全力猛冲狂奔。"
  },
  {
    "word": "stack",
    "phonetic": "/stæk/",
    "pos": "n./vt.",
    "meaning": "n. 堆， 垛 vt. 堆积， 堆叠",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "源自古诺斯语 stakkr（草垛） -> 堆。"
  },
  {
    "word": "step",
    "phonetic": "/step/",
    "pos": "n./vi.",
    "meaning": "n. 脚步； 台阶； 步骤 vi. 迈步",
    "part": "第一部分：超级核心母词族",
    "group": "【2. sta / sist / st 站立/建立/停留】",
    "analysis_type": "构词",
    "analysis": "本义æpe（迈步） -> 抬足向前跨越的动作与距离 -> 脚步。"
  },
  {
    "word": "sterile",
    "phonetic": "/ˈsteraɪl/",
    "pos": "adj.",
    "meaning": "无菌的，经高温高压绝对消毒灭菌的；不育的不孕的不长果实的；毫无成果收获的，枯燥乏味无创造力的",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "源自希腊语 steira（不能受孕繁衍） -> 无菌的，经高温高压绝对消毒灭菌的。"
  },
  {
    "word": "straight",
    "phonetic": "/streɪt/",
    "pos": "adj./adv.",
    "meaning": "笔直的，平直不弯曲的；正直坦诚刚正不阿的；连续不间断的一连",
    "part": "第二部分：高频专业词根族",
    "group": "【65. strict / strain / string 拉紧/紧缚】",
    "analysis_type": "构词",
    "analysis": "词根 stretch（拉伸） -> 之古老过去分词形态 -> 笔直的，平直不弯曲的。"
  },
  {
    "word": "stray",
    "phonetic": "/streɪ/",
    "pos": "vi./adj./n.",
    "meaning": "走失，迷路走散；偏离正道，离题偏离主线；流浪的，走失无家可归的",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "本义指“原本在围栏内” -> 走失，迷路走散。"
  },
  {
    "word": "stride",
    "phonetic": "/straɪd/",
    "pos": "n./vi.",
    "meaning": "大步，迈大步大跨步行进；长足飞跃大进步，重大突破性进展；跨过迈过",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "同源（双腿跨度开合） -> 大步，迈大步大跨步行进。"
  },
  {
    "word": "strike",
    "phonetic": "/straɪk/",
    "pos": "v./n.",
    "meaning": "突然想到，给…深刻印象；打击，撞击；罢工",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "本义为挥击敲打 -> 灵感或危机猛烈撞击心头脑海 -> 突然想到，给…深刻印象。"
  },
  {
    "word": "stroke",
    "phonetic": "/strəʊk/",
    "pos": "n./vt.",
    "meaning": "n. 中风； 一击； 笔画 vt. 抚摸",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "源自 strike（击打） -> 中风。"
  },
  {
    "word": "stumble",
    "phonetic": "/ˈstʌmbl/",
    "pos": "vi./n.",
    "meaning": "绊倒，失足绊跌踉跄摔倒；磕磕绊绊，结结巴巴说话口吃犯错；偶然发现，无意中撞见碰见",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "源自古诺斯语 stumra（在黑暗坎坷石） -> 绊倒，失足绊跌踉跄摔倒。"
  },
  {
    "word": "suck",
    "phonetic": "/sʌk/",
    "pos": "v./n.",
    "meaning": "吸，吸吮吮吸；将…卷入吞噬；吸尽抽干榨取",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "同源（通过口腔肌肉） -> 吸，吸吮吮吸。"
  },
  {
    "word": "sweep",
    "phonetic": "/swiːp/",
    "pos": "v./n.",
    "meaning": "vt./vi. 扫， 打扫； 席卷 n. 清扫",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "核心意象为“拂拭摇动” -> 用扫帚快速划过地面 -> / 扫， 打扫。"
  },
  {
    "word": "tear",
    "phonetic": "/teə(r)/ (撕裂), /tɪə(r)/ (眼泪)",
    "pos": "v./n.",
    "meaning": "撕开，扯破；破洞裂口撕裂伤",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "双源同形异音异义词 -> 撕开，扯破。"
  },
  {
    "word": "thaw",
    "phonetic": "/θɔː/",
    "pos": "v./n.",
    "meaning": "解冻，融化；融雪天气解冻期",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然生态、地理环境与动植物】",
    "analysis_type": "构词",
    "analysis": "同源（吸吮温热春光） -> 解冻，融化。"
  },
  {
    "word": "thereafter",
    "phonetic": "/ˌðeərˈɑːftə(r)/",
    "pos": "adv.",
    "meaning": "此后， 自那以后， 其后",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "there（那个时间节点） + after（在…之后） -> 此后，自那以后。"
  },
  {
    "word": "therefore",
    "phonetic": "/ˈðeəfɔː(r)/",
    "pos": "adv.",
    "meaning": "因此， 所以， 借此",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "there（针对那个无可） + for（出于…目的归） -> 因此，所以。"
  },
  {
    "word": "thick",
    "phonetic": "/θɪk/",
    "pos": "adj./adv.",
    "meaning": "厚的，粗厚厚实的；浓稠粘稠的；密密麻麻充斥着",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "同源（紧密致密压实） -> 厚的，粗厚厚实的。"
  },
  {
    "word": "thin",
    "phonetic": "/θɪn/",
    "pos": "adj./v.",
    "meaning": "adj. 薄的； 稀薄的； 瘦弱的",
    "part": "第一部分：超级核心母词族",
    "group": "【20. ten / tain / tin 握/持/容纳】",
    "analysis_type": "构词",
    "analysis": "源自词根意为“伸展” -> 拉长延展至厚度极微的状态 -> 薄的。"
  },
  {
    "word": "throw",
    "phonetic": "/θrəʊ/",
    "pos": "vt./n.",
    "meaning": "投掷，抛；使陷入，使骤然陷入特定混乱状态；举办举行",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "本义āwan（身体腰腹与手） -> 投掷，抛。"
  },
  {
    "word": "tighten",
    "phonetic": "/ˈtaɪtn/",
    "pos": "v.",
    "meaning": "使变紧，系紧；变紧绷紧",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "tight（牢固紧密的） + -en（使动词后缀：） -> 使变紧，系紧。"
  },
  {
    "word": "tiptoe",
    "phonetic": "/ˈtɪptəʊ/",
    "pos": "vi./n./adv.",
    "meaning": "踮着脚尖走，蹑手蹑脚悄悄走；小心翼翼回避敏感话题，如履薄冰迂回行事；脚尖，脚趾尖",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "tip（尖端微小末端） + toe（脚趾） -> 踮着脚尖走，蹑手蹑脚悄悄走。"
  },
  {
    "word": "tiny",
    "phonetic": "/ˈtaɪni/",
    "pos": "adj.",
    "meaning": "极微小的， 微细的， 微小的； 微薄微末的； 矮小可爱的",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "本义指“极其细小微小” -> 极微小的，微细的。"
  },
  {
    "word": "toss",
    "phonetic": "/tɒs/",
    "pos": "v./n.",
    "meaning": "抛，扔；辗转反侧，在床上翻来覆去难以入眠；剧烈颠簸摇晃抛掷",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "拟声与轻快抛掷词（本义） -> 抛，扔。"
  },
  {
    "word": "tough",
    "phonetic": "/tʌf/",
    "pos": "adj.",
    "meaning": "adj. 艰难的； 坚韧的； 严厉的",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "本义指“有粘性” -> 质地致密不易受损 -> 艰难的。"
  },
  {
    "word": "tread",
    "phonetic": "/tred/",
    "pos": "v./n.",
    "meaning": "踩，踏；如履薄冰行事极其审慎；踩踏踩出一条路",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "源自原始ą（用脚掌以坚实） -> 踩，踏。"
  },
  {
    "word": "trip",
    "phonetic": "/trɪp/",
    "pos": "n./vi.",
    "meaning": "旅行， 出行 vi. 绊倒",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "本义指“步履轻捷欢快” -> 旅行，出行。"
  },
  {
    "word": "tug",
    "phonetic": "/tʌɡ/",
    "pos": "v./n.",
    "meaning": "vt.n. 用力拉， 猛拽； 拖船",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "核心意象为“拉拽 -> 与 tow 同源” -> vt.n.，用力拉。"
  },
  {
    "word": "twist",
    "phonetic": "/twɪst/",
    "pos": "v./n.",
    "meaning": "搓， 捻； 拧； 扭转 n. 转折",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "核心意象为“缠绕结合” -> 搓，捻。"
  },
  {
    "word": "underneath",
    "phonetic": "/ˌʌndəˈniːθ/",
    "pos": "prep./adv./n.",
    "meaning": "在…的正下方，在…底部底下；在…的掩盖遮蔽假象之下；底部，下底面结构",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "under（在…下方） + neath（地底低处） -> 在…的正下方，在…底部底下。"
  },
  {
    "word": "unlock",
    "phonetic": "/ˌʌnˈlɒk/",
    "pos": "vt.",
    "meaning": "vt. 开锁； 揭开， 释放（潜力）",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "un-（解开） + lock（锁闭） -> 转动钥匙解除锁闭状态 -> 开锁。"
  },
  {
    "word": "untie",
    "phonetic": "/ʌnˈtaɪ/",
    "pos": "vt.",
    "meaning": "解开，解散松开；解脱，彻底解除…的束缚枷锁使重获自由；使自由行动",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "un-（反向逆向拆解） + tie（系紧打结捆绑） -> 解开，解散松开。"
  },
  {
    "word": "unwind",
    "phonetic": "/ˌʌnˈwaɪnd/",
    "pos": "v.",
    "meaning": "vi. 放松； 解开 vt. 展开",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "un-（解开） + wind（缠绕） -> 解开缠绕紧绷的线团或神经 -> 放松。"
  },
  {
    "word": "upward",
    "phonetic": "/ˈʌpwəd/",
    "pos": "adj./adv.",
    "meaning": "向上的， 朝上的； 向上地， 朝向高处高空地（仰望星空）",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "up（向上） + -ward（朝向…特定空） -> 向上的，朝上的。"
  },
  {
    "word": "upwards",
    "phonetic": "/ˈʌpwədz/",
    "pos": "adv.",
    "meaning": "向上地，朝向上方往高处地；以上，超过；从…向上发展延伸",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "upward（朝上） + -s（副词所有格强） -> 向上地，朝向上方往高处地。"
  },
  {
    "word": "void",
    "phonetic": "/vɔɪd/",
    "pos": "adj./n./vt.",
    "meaning": "adj. 无效的； 空的 n. 空虚感",
    "part": "第二部分：高频专业词根族",
    "group": "【68. vac / van 空】",
    "analysis_type": "构词",
    "analysis": "词根 vocuus（空的） -> 内部空无一物缺乏法律效力 -> 无效的。"
  },
  {
    "word": "volume",
    "phonetic": "/ˈvɒljuːm/",
    "pos": "n.",
    "meaning": "体积，容积容量；音量，声响响度；总量，总规模",
    "part": "第一部分：超级核心母词族",
    "group": "【18. volv / volut 滚/转】",
    "analysis_type": "构词",
    "analysis": "源自拉丁词根 volvere / volumen（古代文士在古） -> 体积，容积容量。"
  },
  {
    "word": "warm",
    "phonetic": "/wɔːm/",
    "pos": "adj./v.",
    "meaning": "温暖暖和舒适的；富有同理心温情脉脉善良的；使变暖和，加温加热",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "同源（介于冰冷与滚） -> 温暖暖和舒适的。"
  },
  {
    "word": "weak",
    "phonetic": "/wiːk/",
    "pos": "adj.",
    "meaning": "adj. 虚弱的， 无力的； 薄弱的",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "源自古诺斯语 veikr（弯曲软弱） -> 受力易弯折不易支撑 -> 虚弱的。"
  },
  {
    "word": "weight",
    "phonetic": "/weɪt/",
    "pos": "n./vt.",
    "meaning": "n. 重量； 重担， 重压 vt. 加重",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "源自 wegan（称重/运载） + -t（名词后缀） -> 物体受引力产生的沉重分量 -> 重量。"
  },
  {
    "word": "wet",
    "phonetic": "/wet/",
    "pos": "adj./vt./n.",
    "meaning": "湿的，潮湿浸透的多雨潮湿的；使潮湿弄湿，用水浸湿；雨水，阴雨潮湿天气",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "同源（水分子充分渗） -> 湿的，潮湿浸透的多雨潮湿的。"
  },
  {
    "word": "wide",
    "phonetic": "/waɪd/",
    "pos": "adj./adv.",
    "meaning": "宽的， 宽阔开阔的； 偏离靶心大大地， 完全偏离正道",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "源自原始īdaz（两岸距离极为） -> 宽的，宽阔开阔的。"
  },
  {
    "word": "widespread",
    "phonetic": "/ˈwaɪdspred/",
    "pos": "adj.",
    "meaning": "广泛分布的， 遍布大江南北大范围普遍存在的",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "wide（宽阔广袤大范） + spread（扩散） -> 广泛分布的，遍布大江南北大范围普遍存在的。"
  },
  {
    "word": "wilderness",
    "phonetic": "/ˈwɪldənəs/",
    "pos": "n.",
    "meaning": "荒野，荒原；荒芜混乱之境；政治流亡在野在野期，被边缘化落魄冷板凳时期",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然生态、地理环境与动植物】",
    "analysis_type": "构词",
    "analysis": "wild（狂野未驯服的） + deer（野兽） + -ness（名词后缀） -> 荒野，荒原。"
  },
  {
    "word": "wink",
    "phonetic": "/wɪŋk/",
    "pos": "v./n.",
    "meaning": "vi.n. 眨眼， 使眼色",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "核心意象为“摇摆摆动” -> 眼皮快速开合动作以示暗号 -> vi.n.，眨眼。"
  },
  {
    "word": "wipe",
    "phonetic": "/waɪp/",
    "pos": "v./n.",
    "meaning": "擦，揩；湿纸巾，一次性消毒湿巾；擦拭动作抹洗",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "源自原始īpaną（手持吸水纯棉） -> 擦，揩。"
  },
  {
    "word": "wring",
    "phonetic": "/rɪŋ/",
    "pos": "vt./n.",
    "meaning": "vt. 拧干， 绞干； 扭绞",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "本义指“旋转扭曲” -> 用力双手向相反方向拧挤 -> 拧干。"
  },
  {
    "word": "yawn",
    "phonetic": "/jɔːn/",
    "pos": "vi./n.",
    "meaning": "打哈欠，张大嘴巴打呵欠；张开巨大深邃骇人的裂口大嘴；哈欠，打哈欠的动作",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "同源（由于大脑供氧） -> 打哈欠，张大嘴巴打呵欠。"
  },
  {
    "word": "yell",
    "phonetic": "/jel/",
    "pos": "v./n.",
    "meaning": "大叫，大声叫喊吼叫；加油呐喊喝彩助威；高声呼喊叫喊声，尖叫声",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "源自原始ą（调动胸腔全部） -> 大叫，大声叫喊吼叫。"
  },
  {
    "word": "absurd",
    "phonetic": "/əbˈsɜːd/",
    "pos": "adj.",
    "meaning": "荒谬绝伦毫无逻辑道理的；荒诞不经怪诞滑稽可笑的；荒诞派文学艺术",
    "part": "第二部分：高频专业词根族",
    "group": "【67. surd 聋/不合理】",
    "analysis_type": "构词",
    "analysis": "ab-（离开） + surd-（聋聩听不见） -> 荒谬绝伦毫无逻辑道理的。"
  },
  {
    "word": "abuse",
    "phonetic": "/əˈbjuːs/",
    "pos": "vt./n.",
    "meaning": "滥用； 虐待； 辱骂",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "ab-（偏离） + use（使用） -> 滥用。"
  },
  {
    "word": "accelerate",
    "phonetic": "/əkˈseləreɪt/",
    "pos": "vt./vi.",
    "meaning": "加速， 促进； 增加",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "ac-（ad- 朝向） + celer-（迅速敏捷） + -ate（动词后缀） -> 加速，促进。"
  },
  {
    "word": "accuse",
    "phonetic": "/əˈkjuːz/",
    "pos": "vt.",
    "meaning": "指控，控告；当堂指责谴责，公开谴责把…归咎于；将被告推上被告席审判",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "ac-（朝向） + cuse（起诉原因） -> 指控，控告。"
  },
  {
    "word": "accustomed",
    "phonetic": "/əˈkʌstəmd/",
    "pos": "adj.",
    "meaning": "习惯于…的，适应了特定生活方式的；惯常的一贯的，习以为常典型的",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "ac-（去） + custom（风俗习惯） + -ed（形容词后缀） -> 习惯于…的，适应了特定生活方式的。"
  },
  {
    "word": "acknowledge",
    "phonetic": "/əkˈnɒlɪdʒ/",
    "pos": "vt.",
    "meaning": "承认， 认可； 答谢",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "ac-（ad- 朝向） + knowledge（知识） -> 写信向对方告知已收到邮件 -> 承认，认可。"
  },
  {
    "word": "acquire",
    "phonetic": "/əˈkwaɪə(r)/",
    "pos": "vt.",
    "meaning": "获得， 取得； 学到（技能）",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "ac-（ad- 朝向） + quire（寻求） -> 获得，取得。"
  },
  {
    "word": "action",
    "phonetic": "/ˈækʃn/",
    "pos": "n.",
    "meaning": "行动，具体大动作行为举措；起诉，民事法律诉讼起诉；军事实战战斗交火",
    "part": "第一部分：超级核心母词族",
    "group": "【16. ag / act 做/驱使】",
    "analysis_type": "构词",
    "analysis": "act-（行动） + -ion（名词后缀） -> 行动，具体大动作行为举措。"
  },
  {
    "word": "active",
    "phonetic": "/ˈæktɪv/",
    "pos": "adj.",
    "meaning": "活跃的， 敏捷的； 积极的",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "act（行动） + -ive（具…特性的） -> 活跃的，敏捷的。"
  },
  {
    "word": "activity",
    "phonetic": "/ækˈtɪvəti/",
    "pos": "n.",
    "meaning": "活动； 活跃， 活力",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "active（活跃的） + -ity（名词后缀） -> 活动。"
  },
  {
    "word": "adapt",
    "phonetic": "/əˈdæpt/",
    "pos": "vt./vi.",
    "meaning": "适应； 改编（剧本/著作）",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "ad-（朝向） + apt（适合） -> 适应。"
  },
  {
    "word": "adjust",
    "phonetic": "/əˈdʒʌst/",
    "pos": "vt./vi.",
    "meaning": "调整， 调节； 校正； 适应",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "ad-（朝向） + just（正当） -> 调整，调节。"
  },
  {
    "word": "adopt",
    "phonetic": "/əˈdɒpt/",
    "pos": "vt.",
    "meaning": "收养； 采纳， 采用",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "ad-（朝向） + opt（挑选抉择） -> 收养。"
  },
  {
    "word": "adult",
    "phonetic": "/ˈædʌlt/ (英), /əˈdʌlt/ (美)",
    "pos": "n./adj.",
    "meaning": "成年人，成人在法律上具有完全民事行为能力者；完全发育成熟的成熟个体；成年的，成人的",
    "part": "第二部分：高频专业词根族",
    "group": "【58. ol / al 生长】",
    "analysis_type": "构词",
    "analysis": "ad-（朝向） + ult（生长） -> 成年人，成人在法律上具有完全民事行为能力者。"
  },
  {
    "word": "advance",
    "phonetic": "/ədˈvɑːns/",
    "pos": "v./n.",
    "meaning": "推进， 促进； 前进",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "ad-（朝向） + vance（在前） -> 科技重大突破飞跃 -> 推进，促进。"
  },
  {
    "word": "advantage",
    "phonetic": "/ədˈvɑːntɪdʒ/",
    "pos": "n.",
    "meaning": "优点， 优势； 利益",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "ad- + vance（向前领先一步） + -age（名词后缀） -> 优点，优势。"
  },
  {
    "word": "adventure",
    "phonetic": "/ədˈventʃə(r)/",
    "pos": "n./v.",
    "meaning": "冒险，惊险刺激的未知探索旅程；奇遇，传奇探险历险经历；大胆冒险探索，甘冒奇险去投机尝试",
    "part": "第一部分：超级核心母词族",
    "group": "【9. ven / vent 来】",
    "analysis_type": "构词",
    "analysis": "ad-（去） + vent-（到来） + -ure（名词后缀） -> 冒险，惊险刺激的未知探索旅程。"
  },
  {
    "word": "advice",
    "phonetic": "/ədˈvaɪs/",
    "pos": "n.",
    "meaning": "忠告， 建议， 劝告（不可数名词金融）",
    "part": "第二部分：高频专业词根族",
    "group": "【70. vid / vis / view 看】",
    "analysis_type": "构词",
    "analysis": "ad-（去） + vice（看） -> 忠告，建议。"
  },
  {
    "word": "advise",
    "phonetic": "/ədˈvaɪz/",
    "pos": "v.",
    "meaning": "劝告，提出严肃建议；提供专业咨询指导；正式通知，告知报备",
    "part": "第二部分：高频专业词根族",
    "group": "【70. vid / vis / view 看】",
    "analysis_type": "构词",
    "analysis": "ad-（去） + vise（看） -> 劝告，提出严肃建议。"
  },
  {
    "word": "afford",
    "phonetic": "/əˈfɔːd/",
    "pos": "vt.",
    "meaning": "买得起， 担负得起； 提供",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "本义指“向前推进” -> 买得起，担负得起。"
  },
  {
    "word": "afraid",
    "phonetic": "/əˈfreɪd/",
    "pos": "adj.",
    "meaning": "害怕的， 恐惧畏惧的； 恐怕， 抱歉遗憾地感到",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "本义指“因突发暴力骚” -> 害怕的，恐惧畏惧的。"
  },
  {
    "word": "agree",
    "phonetic": "/əˈɡriː/",
    "pos": "v.",
    "meaning": "同意， 赞同； 商定",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "a-（ad- 朝向） + gree（喜悦） -> 同意，赞同。"
  },
  {
    "word": "agreement",
    "phonetic": "/əˈɡriːmənt/",
    "pos": "n.",
    "meaning": "协定， 协议； 一致",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "agree（达成一致） + -ment（名词后缀） -> 协定，协议。"
  },
  {
    "word": "alive",
    "phonetic": "/əˈlaɪv/",
    "pos": "adj.",
    "meaning": "活着的， 在世的， 健在生存着的",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然生态、地理环境与动植物】",
    "analysis_type": "构词",
    "analysis": "a-（处于特定生命） + live（活着） -> 活着的，在世的。"
  },
  {
    "word": "allow",
    "phonetic": "/əˈlaʊ/",
    "pos": "vt.",
    "meaning": "允许，准许；预留，留出；定期给予发放",
    "part": "第一部分：超级核心母词族",
    "group": "【19. leg / lig / lect 采集/阅读/选择】",
    "analysis_type": "构词",
    "analysis": "本义指“将原本归属于” -> 允许，准许。"
  },
  {
    "word": "alone",
    "phonetic": "/əˈləʊn/",
    "pos": "adj./adv.",
    "meaning": "单独的一人的，孤身一人的；独自一人地，单凭自身力量地",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "all（完全） + one（单一） -> 单独的一人的，孤身一人的。"
  },
  {
    "word": "along",
    "phonetic": "/əˈlɒŋ/",
    "pos": "prep./adv.",
    "meaning": "沿着，顺着；向前，往前行进推进；一起，一道共同",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "a-（处于…状态） + long（长条长距离） -> 沿着，顺着。"
  },
  {
    "word": "alongside",
    "phonetic": "/əˈlɒŋˌsaɪd/",
    "pos": "prep./adv.",
    "meaning": "在…旁边，沿着…的侧面紧靠着；与…并排并肩，与…齐头并进紧密协同合作；在船侧，靠在码头泊位旁",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "along（顺着） + side（侧翼侧面） -> 在…旁边，沿着…的侧面紧靠着。"
  },
  {
    "word": "ambassador",
    "phonetic": "/æmˈbæsədə(r)/",
    "pos": "n.",
    "meaning": "特命全权大使，驻外最高外交代表；友好使者，文化或环保公益形象大使",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "源自晚期词根 ambactiarus（领受最高主权） -> 特命全权大使，驻外最高外交代表。"
  },
  {
    "word": "ambiguous",
    "phonetic": "/æmˈbɪɡjuəs/",
    "pos": "adj.",
    "meaning": "模棱两可的， 含糊不清的； 可作多种解释不明确的",
    "part": "第一部分：超级核心母词族",
    "group": "【16. ag / act 做/驱使】",
    "analysis_type": "构词",
    "analysis": "ambi-（双向） + ig-（驱赶） -> 模棱两可的，含糊不清的。"
  },
  {
    "word": "amend",
    "phonetic": "/əˈmend/",
    "pos": "vt.",
    "meaning": "修改， 修订（合同/法律）",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "a-（ex- 脱离） + mend（瑕疵缺陷） -> 修改，修订（合同。"
  },
  {
    "word": "among",
    "phonetic": "/əˈmʌŋ/",
    "pos": "prep.",
    "meaning": "在…之中，在…中间；在…群体之中，属于…之列",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "a-（处于…状态） + mong（人群） -> 在…之中，在…中间。"
  },
  {
    "word": "amount",
    "phonetic": "/əˈmaʊnt/",
    "pos": "n./vi.",
    "meaning": "数量， 总额 vi. 等同于",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "a-（朝向） + mount（山峰） -> 数量，总额。"
  },
  {
    "word": "amplify",
    "phonetic": "/ˈæmplɪfaɪ/",
    "pos": "vt.",
    "meaning": "放大， 增强（声音电信号分歧）",
    "part": "第一部分：超级核心母词族",
    "group": "【4. ple / pli / plic 折叠/倍/重】",
    "analysis_type": "构词",
    "analysis": "ampl-（宽广宏大充沛） + -i- + -fy（使动后缀：使） -> 放大，增强（声音电信号分歧）。"
  },
  {
    "word": "analogy",
    "phonetic": "/əˈnælədʒi/",
    "pos": "n.",
    "meaning": "类比， 比拟， 类推； 相似， 相似之处（依此类推）",
    "part": "第二部分：高频专业词根族",
    "group": "【53. log / logu 言语/理性/学科】",
    "analysis_type": "构词",
    "analysis": "ana-（依照） + log-（理性） + -y（名词后缀） -> 类比，比拟。"
  },
  {
    "word": "analyze",
    "phonetic": "/ˈænəlaɪz/",
    "pos": "vt.",
    "meaning": "分析， 分解， 解析",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "ana-（向上） + lyze（松绑） -> 分析，分解。"
  },
  {
    "word": "ancestor",
    "phonetic": "/ˈænsestə(r)/",
    "pos": "n.",
    "meaning": "祖先，祖宗先人；原型先祖",
    "part": "第一部分：超级核心母词族",
    "group": "【6. ced / ceed / cess 走/退让】",
    "analysis_type": "构词",
    "analysis": "an-（在…之前） + cest- /等 -> 祖先，祖宗先人。"
  },
  {
    "word": "anchor",
    "phonetic": "/ˈæŋkə(r)/",
    "pos": "n./v.",
    "meaning": "铁锚，船锚；精神支柱，顶梁柱定海神针；新闻节目金牌主播主持",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "源自希腊语 agkyra（带锋利倒钩的） -> 铁锚，船锚。"
  },
  {
    "word": "ancient",
    "phonetic": "/ˈeɪnʃənt/",
    "pos": "adj./n.",
    "meaning": "古代的，古老的；年高德劭极古老的；古代人，古希腊罗马古代哲人先贤",
    "part": "第一部分：超级核心母词族",
    "group": "【6. ced / ceed / cess 走/退让】",
    "analysis_type": "构词",
    "analysis": "本义指“源自通俗拉丁” -> 古代的，古老的。"
  },
  {
    "word": "announce",
    "phonetic": "/əˈnaʊns/",
    "pos": "vt.",
    "meaning": "宣布， 通告； 声称",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "an-（ad- 朝向） + nounce（报告） -> 宣布，通告。"
  },
  {
    "word": "annual",
    "phonetic": "/ˈænjuəl/",
    "pos": "adj./n.",
    "meaning": "每年的，年度的一年一次的；一年生植物；年刊年鉴",
    "part": "第二部分：高频专业词根族",
    "group": "【41. ann / enn 年】",
    "analysis_type": "构词",
    "analysis": "ann-（年） + -ual（形容词后缀） -> 每年的，年度的一年一次的。"
  },
  {
    "word": "anonymous",
    "phonetic": "/əˈnɒnɪməs/",
    "pos": "adj.",
    "meaning": "匿名的，不知姓名不公开身份的；毫无个性毫无特色的平淡平庸的",
    "part": "第一部分：超级核心母词族",
    "group": "【33. nom / nym / nem 命名/法则/抓取】",
    "analysis_type": "构词",
    "analysis": "an-（无） + onym-（名字） + -ous（形容词后缀） -> 匿名的，不知姓名不公开身份的。"
  },
  {
    "word": "answer",
    "phonetic": "/ˈɑːnsə(r)/",
    "pos": "n./v.",
    "meaning": "回答，答复；解法，重大难题的终极答案钥匙；作出回应反击",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "本义指“面对法庭指控” -> 回答，答复。"
  },
  {
    "word": "appetite",
    "phonetic": "/ˈæpɪtaɪt/",
    "pos": "n.",
    "meaning": "食欲， 胃口； 欲望",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、医疗生理与情绪心理】",
    "analysis_type": "构词",
    "analysis": "ap-（ad- 朝向） + pet-（追寻） + -ite，引申指食欲 -> 食欲，胃口。"
  },
  {
    "word": "applaud",
    "phonetic": "/əˈplɔːd/",
    "pos": "v.",
    "meaning": "鼓掌喝彩， 拍手致敬； 高度赞赏， 赞同赞许； 赞扬称道",
    "part": "第二部分：高频专业词根族",
    "group": "【54. lud / lus 嬉戏/扮演/欺骗】",
    "analysis_type": "构词",
    "analysis": "ap-（去） + plaud（击掌拍手） -> 鼓掌喝彩，拍手致敬。"
  },
  {
    "word": "applause",
    "phonetic": "/əˈplɔːz/",
    "pos": "n.",
    "meaning": "掌声， 热烈的喝彩， 热烈鼓掌赞许声（雷鸣般的掌声）",
    "part": "第二部分：高频专业词根族",
    "group": "【54. lud / lus 嬉戏/扮演/欺骗】",
    "analysis_type": "构词",
    "analysis": "ap- / ad- + plaus-（击掌拍手） + -e（名词后缀） -> 掌声，热烈的喝彩。"
  },
  {
    "word": "apple",
    "phonetic": "/ˈæpl/",
    "pos": "n.",
    "meaning": "苹果； 苹果树",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "同源（e）l-（苹果） -> 日常最常见的温带浆果 -> 苹果。"
  },
  {
    "word": "appliance",
    "phonetic": "/əˈplaɪəns/",
    "pos": "n.",
    "meaning": "电器，家用器具设备；特种医用，工程矫形器具装备器械",
    "part": "第一部分：超级核心母词族",
    "group": "【4. ple / pli / plic 折叠/倍/重】",
    "analysis_type": "构词",
    "analysis": "apply（应用） + -ance（实体名词后缀） -> （尤其指家用）电器 -> 电器，家用器具设备。"
  },
  {
    "word": "applicable",
    "phonetic": "/əˈplɪkəbl/ (英), /ˈæplɪkəbl/ (美)",
    "pos": "adj.",
    "meaning": "适用的，可应用的；生效适用的，具有法定约束管辖力的",
    "part": "第一部分：超级核心母词族",
    "group": "【4. ple / pli / plic 折叠/倍/重】",
    "analysis_type": "构词",
    "analysis": "apply（应用） + -ic- + -able（能够…的形容） -> 适用的，可应用的。"
  },
  {
    "word": "applicant",
    "phonetic": "/ˈæplɪkənt/",
    "pos": "n.",
    "meaning": "申请人， 竞聘候选人； 报考考生",
    "part": "第一部分：超级核心母词族",
    "group": "【4. ple / pli / plic 折叠/倍/重】",
    "analysis_type": "构词",
    "analysis": "apply（申请） + -ic- + -ant（人） -> 申请人，竞聘候选人。"
  },
  {
    "word": "application",
    "phonetic": "/ˌæplɪˈkeɪʃn/",
    "pos": "n.",
    "meaning": "n. 申请； 应用， 实施； 应用程序",
    "part": "第一部分：超级核心母词族",
    "group": "【4. ple / pli / plic 折叠/倍/重】",
    "analysis_type": "构词",
    "analysis": "ap-（向） + plic-（贴附） + -ation，贴近实际操作 -> 申请。"
  },
  {
    "word": "apply",
    "phonetic": "/əˈplaɪ/",
    "pos": "v.",
    "meaning": "申请；应用，适用；涂抹",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "ap-（朝向） + ply-（折叠/贴合） -> 将方案紧密贴合到实际中 -> 申请。"
  },
  {
    "word": "appoint",
    "phonetic": "/əˈpɔɪnt/",
    "pos": "vt.",
    "meaning": "任命， 委派； 约定",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "ap-（ad- 朝向） + point（点） -> 任命，委派。"
  },
  {
    "word": "appointment",
    "phonetic": "/əˈpɔɪntmənt/",
    "pos": "n.",
    "meaning": "预约，约会；任命，委派委任；任命的职务职位",
    "part": "第二部分：高频专业词根族",
    "group": "【60. part / port 分配/部分】",
    "analysis_type": "构词",
    "analysis": "ap-（去） + point（点） + -ment（名词后缀） -> 预约，约会。"
  },
  {
    "word": "appreciation",
    "phonetic": "/əˌpriːʃiˈeɪʃn/",
    "pos": "n.",
    "meaning": "n. 欣赏； 感激； 升值",
    "part": "第二部分：高频专业词根族",
    "group": "【60. part / port 分配/部分】",
    "analysis_type": "构词",
    "analysis": "ap-（向） + preci-（价值） + -ation，肯定其价值 -> 欣赏。"
  },
  {
    "word": "approach",
    "phonetic": "/əˈprəʊtʃ/",
    "pos": "vt./vi./n.",
    "meaning": "方法，途径；探讨，处理；接近，走近",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "ap-（朝向） + proach（接近） -> 逐步走近问题并寻找途径 -> 方法，途径。"
  },
  {
    "word": "appropriate",
    "phonetic": "/əˈprəʊpriət/ (adj.), /əˈprəʊprieɪt/ (v.)",
    "pos": "adj./vt.",
    "meaning": "恰当的， 合适的适宜得体的； 擅自据为己有盗用",
    "part": "第一部分：超级核心母词族",
    "group": "【13. priv / propr 个人/私有】",
    "analysis_type": "构词",
    "analysis": "ap-（使…成为） + propri-（自家的专属财） -> 恰当的，合适的适宜得体的。"
  },
  {
    "word": "approval",
    "phonetic": "/əˈpruːvl/",
    "pos": "n.",
    "meaning": "批准， 核准， 官方正式行政审批认可",
    "part": "第二部分：高频专业词根族",
    "group": "【61. purg 净化/清除】",
    "analysis_type": "构词",
    "analysis": "approve（证明属实满意） + -al（抽象名词后缀） -> 批准，核准。"
  },
  {
    "word": "approve",
    "phonetic": "/əˈpruːv/",
    "pos": "v.",
    "meaning": "赞同； 批准， 通过",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "ap-（ad- 朝向） + prove（证明是好） -> 赞同。"
  },
  {
    "word": "approximate",
    "phonetic": "/əˈprɒksɪmət/ (adj.), /əˈprɒksɪmeɪt/ (v.)",
    "pos": "adj./v.",
    "meaning": "近似的， 大约大概的； 粗略估计测算估算",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "ap-（朝向） + proxim-（最靠近的邻居/极等 -> 近似的，大约大概的。"
  },
  {
    "word": "arbitrary",
    "phonetic": "/ˈɑːbɪtrəri/",
    "pos": "adj.",
    "meaning": "专断的， 任意的",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "arbitr-（仲裁人） + -ary（形容词后缀） -> 专断的，任意的。"
  },
  {
    "word": "architect",
    "phonetic": "/ˈɑːkɪtekt/",
    "pos": "n./vt.",
    "meaning": "建筑师，总体建筑设计师；总设计师，总擘画者总策划师；精巧擘画，总体构思设计打造",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "archi-（最高首长） + tect-（工匠） -> 建筑师，总体建筑设计师。"
  },
  {
    "word": "architecture",
    "phonetic": "/ˈɑːkɪtektʃə(r)/",
    "pos": "n.",
    "meaning": "建筑学，建筑艺术；深层宏观构架格局",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "archi-（最高领衔） + tect-（工匠） -> 建筑学，建筑艺术。"
  },
  {
    "word": "argue",
    "phonetic": "/ˈɑːɡjuː/",
    "pos": "v.",
    "meaning": "争论， 争辩； 主张",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "词根 arg-（明亮清楚） -> 争论，争辩。"
  },
  {
    "word": "argument",
    "phonetic": "/ˈɑːɡjumənt/",
    "pos": "n.",
    "meaning": "争论， 辩论； 论据",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "argue（辩论） + -ment（名词后缀） -> 争论，辩论。"
  },
  {
    "word": "arm",
    "phonetic": "/ɑːm/",
    "pos": "n./v.",
    "meaning": "手臂，胳膊；长袖，扶手臂弯；武器，军械兵器",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "同源（将两截骨骼在） -> 手臂，胳膊。"
  },
  {
    "word": "armor",
    "phonetic": "/ˈɑːmə(r)/",
    "pos": "n./vt.",
    "meaning": "盔甲，铁甲；装甲部队",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "arm-（武器装备） + -or（实体名词后缀） -> 盔甲，铁甲。"
  },
  {
    "word": "army",
    "phonetic": "/ˈɑːmi/",
    "pos": "n.",
    "meaning": "陆军， 野战正规军地面部队",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会公共、日常居住与文化生活】",
    "analysis_type": "构词",
    "analysis": "本义指“全体拿起武器” -> 陆军，野战正规军地面部队。"
  },
  {
    "word": "arrange",
    "phonetic": "/əˈreɪndʒ/",
    "pos": "v.",
    "meaning": "安排， 筹备； 整理",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "ar-（ad- 朝向） + range（排列成行成列） -> 安排，筹备。"
  },
  {
    "word": "arrangement",
    "phonetic": "/əˈreɪndʒmənt/",
    "pos": "n.",
    "meaning": "安排， 筹备； 整理",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "arrange（安排整理） + -ment（名词后缀） -> 安排，筹备。"
  },
  {
    "word": "arrest",
    "phonetic": "/əˈrest/",
    "pos": "vt./n.",
    "meaning": "逮捕， 拘留； 阻止",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "ar-（ad- 朝向） + rest（停下） -> 逮捕，拘留。"
  },
  {
    "word": "arrival",
    "phonetic": "/əˈraɪvl/",
    "pos": "n.",
    "meaning": "到达， 来到； 到达者",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "arrive（到达） + -al（名词后缀） -> 到达，来到。"
  },
  {
    "word": "arrive",
    "phonetic": "/əˈraɪv/",
    "pos": "vi.",
    "meaning": "到达， 来到； 达成",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "ar-（ad- 朝向） + rive（河岸） -> 到达，来到。"
  },
  {
    "word": "arrow",
    "phonetic": "/ˈærəʊ/",
    "pos": "n.",
    "meaning": "箭，箭矢；箭头，指示箭头标志；像箭一般飞速直奔目标飞驰飞射",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "同源（由柔韧弓弦张） -> 箭，箭矢。"
  },
  {
    "word": "article",
    "phonetic": "/ˈɑːtɪkl/",
    "pos": "n.",
    "meaning": "文章， 论文； 条款； 物品",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "articulus（小关节） + -le，引申指文章 -> 文章，论文。"
  },
  {
    "word": "artist",
    "phonetic": "/ˈɑːtɪst/",
    "pos": "n.",
    "meaning": "艺术家，美术大师画家；演艺艺术家，舞台表演大师；具有巧夺天工高超造诣的各界巨匠大师",
    "part": "第一部分：超级核心母词族",
    "group": "【2. sta / sist / st 站立/建立/停留】",
    "analysis_type": "构词",
    "analysis": "art（艺术） + -ist（从事特定职业） -> 将某一门寻常的雕刻、厨艺 -> 艺术家，美术大师画家。"
  },
  {
    "word": "artistic",
    "phonetic": "/ɑːˈtɪstɪk/",
    "pos": "adj.",
    "meaning": "艺术的，美术艺术创作的；富有艺术才华与高雅审美情趣品味的；精美绝伦具有极高艺术观赏价值的",
    "part": "第一部分：超级核心母词族",
    "group": "【2. sta / sist / st 站立/建立/停留】",
    "analysis_type": "构词",
    "analysis": "artist（艺术家） + -ic（形容词后缀） -> 艺术的，美术艺术创作的。"
  },
  {
    "word": "ash",
    "phonetic": "/æʃ/",
    "pos": "n.",
    "meaning": "灰烬，烟灰；焦黑灰烬废墟残骸；逝者骨灰",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然生态、地理环境与动植物】",
    "analysis_type": "构词",
    "analysis": "同源（在烈火熊熊燃） -> 灰烬，烟灰。"
  },
  {
    "word": "assault",
    "phonetic": "/əˈsɔːlt/",
    "pos": "n./vt.",
    "meaning": "n./vt. 攻击， 突击； 殴打",
    "part": "第二部分：高频专业词根族",
    "group": "【63. sal / salt / sul 跃/跳】",
    "analysis_type": "构词",
    "analysis": "as-（向） + sault-（跳跃） -> 飞身扑向对手 -> / 攻击， 突击。"
  },
  {
    "word": "assemble",
    "phonetic": "/əˈsembl/",
    "pos": "vt./vi.",
    "meaning": "集合， 召集； 组装， 装配",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "as-（ad- 朝向） + sembl-（相同） -> 集合，召集。"
  },
  {
    "word": "assembly",
    "phonetic": "/əˈsembli/",
    "pos": "n.",
    "meaning": "n. 集会， 聚会； 装配， 组装",
    "part": "第二部分：高频专业词根族",
    "group": "【64. sim / simul / sembl 相同/相似/装作】",
    "analysis_type": "构词",
    "analysis": "as-（向） + sembl-（聚集） + -y，汇成整体 -> 集会。"
  },
  {
    "word": "assert",
    "phonetic": "/əˈsɜːt/",
    "pos": "vt.",
    "meaning": "断言， 宣称； 坚持主权",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "as-（ad- 去） + sert（连接） -> 断言，宣称。"
  },
  {
    "word": "temperature",
    "phonetic": "/ˈtemprətʃə(r)/",
    "pos": "n.",
    "meaning": "温度， 体温； 气温",
    "part": "第二部分：高频专业词根族",
    "group": "【41. temp / tempor 时间/时代/适度】",
    "analysis_type": "构词",
    "analysis": "temper-（调和温度） + -ature（名词后缀） -> 温度，体温。"
  },
  {
    "word": "temperate",
    "phonetic": "/ˈtempərət/",
    "pos": "adj.",
    "meaning": "温和的， 适度的； 温带的",
    "part": "第二部分：高频专业词根族",
    "group": "【41. temp / tempor 时间/时代/适度】",
    "analysis_type": "构词",
    "analysis": "temper-（调和） + -ate（形容词后缀） -> 温和的，适度的。"
  },
  {
    "word": "temperament",
    "phonetic": "/ˈtemprəmənt/",
    "pos": "n.",
    "meaning": "气质， 性情， 性格",
    "part": "第二部分：高频专业词根族",
    "group": "【41. temp / tempor 时间/时代/适度】",
    "analysis_type": "构词",
    "analysis": "temper-（调和体液） + -a- + -ment（名词后缀） -> 气质，性情。"
  },
  {
    "word": "distributor",
    "phonetic": "/dɪˈstrɪbjətə(r)/",
    "pos": "n.",
    "meaning": "分销商， 分配者； 分电器",
    "part": "第二部分：高频专业词根族",
    "group": "【42. tribut 给予/交纳/分发】",
    "analysis_type": "构词",
    "analysis": "distribute（分派） + -or（人） -> 分销商，分配者。"
  },
  {
    "word": "ingredient",
    "phonetic": "/ɪnˈɡriːdiənt/",
    "pos": "n.",
    "meaning": "成分， 原料； 要素",
    "part": "第二部分：高频专业词根族",
    "group": "【44. grad / gress 走/步伐/阶段】",
    "analysis_type": "构词",
    "analysis": "in-（进入） + gred-（迈步） + -i- + -ent（名词后缀） -> 成分，原料。"
  },
  {
    "word": "degrade",
    "phonetic": "/dɪˈɡreɪd/",
    "pos": "vt./vi.",
    "meaning": "降解； 降低…身份； 使退化",
    "part": "第二部分：高频专业词根族",
    "group": "【44. grad / gress 走/步伐/阶段】",
    "analysis_type": "构词",
    "analysis": "de-（向下） + grade（等级） -> 降解。"
  },
  {
    "word": "aggression",
    "phonetic": "/əˈɡreʃn/",
    "pos": "n.",
    "meaning": "侵略， 侵犯； 好斗情绪",
    "part": "第二部分：高频专业词根族",
    "group": "【44. grad / gress 走/步伐/阶段】",
    "analysis_type": "构词",
    "analysis": "ag-（ad- 朝向） + gress-（迈步） + -ion（名词后缀） -> 侵略，侵犯。"
  },
  {
    "word": "regression",
    "phonetic": "/rɪˈɡreʃn/",
    "pos": "n.",
    "meaning": "倒退， 退化； 回归",
    "part": "第二部分：高频专业词根族",
    "group": "【44. grad / gress 走/步伐/阶段】",
    "analysis_type": "构词",
    "analysis": "re-（向后） + gress-（迈步） + -ion（名词后缀） -> 倒退，退化。"
  },
  {
    "word": "available",
    "phonetic": "/əˈveɪləbl/",
    "pos": "adj.",
    "meaning": "可获得的， 可利用的； 有空的",
    "part": "第二部分：高频专业词根族",
    "group": "【45. val / vail 强壮/力量/价值】",
    "analysis_type": "构词",
    "analysis": "a-（ad- 朝向） + vail-（力量） + -able（能…的） -> 可获得的，可利用的。"
  },
  {
    "word": "invaluable",
    "phonetic": "/ɪnˈvæljuəbl/",
    "pos": "adj.",
    "meaning": "极宝贵的， 无法估价的",
    "part": "第二部分：高频专业词根族",
    "group": "【45. val / vail 强壮/力量/价值】",
    "analysis_type": "构词",
    "analysis": "in-（无法…的） + valuable（能够估价的） -> 极宝贵的，无法估价的。"
  },
  {
    "word": "avail",
    "phonetic": "/əˈveɪl/",
    "pos": "vt./vi./n.",
    "meaning": "有益于， 利用 n. 效用",
    "part": "第二部分：高频专业词根族",
    "group": "【45. val / vail 强壮/力量/价值】",
    "analysis_type": "构词",
    "analysis": "a-（ad- 朝向） + vail（力量） -> 有益于，利用。"
  },
  {
    "word": "invalid",
    "phonetic": "/ɪnˈvælɪd/",
    "pos": "adj./n.",
    "meaning": "无效的； 作废的 n. 病弱者",
    "part": "第二部分：高频专业词根族",
    "group": "【45. val / vail 强壮/力量/价值】",
    "analysis_type": "构词",
    "analysis": "in-（无） + valid（有法律效力的） -> 无效的。"
  },
  {
    "word": "alternate",
    "phonetic": "/ˈɔːltəneɪt/",
    "pos": "vi./vt./adj.",
    "meaning": "交替， 轮流 adj. 间隔的",
    "part": "第二部分：高频专业词根族",
    "group": "【46. alter / ali 其他/变更】",
    "analysis_type": "构词",
    "analysis": "alter-（另一个） + -ate，引申指交替 -> 交替，轮流。"
  },
  {
    "word": "alteration",
    "phonetic": "/ˌɔːltəˈreɪʃn/",
    "pos": "n.",
    "meaning": "改变， 变更， 修改",
    "part": "第二部分：高频专业词根族",
    "group": "【46. alter / ali 其他/变更】",
    "analysis_type": "构词",
    "analysis": "alter-（改变） + -ation（名词后缀） -> 改变，变更。"
  },
  {
    "word": "audible",
    "phonetic": "/ˈɔːdəbl/",
    "pos": "adj.",
    "meaning": "听得见的， 清晰可闻的",
    "part": "第二部分：高频专业词根族",
    "group": "【48. audi / audit 听/声音】",
    "analysis_type": "构词",
    "analysis": "aud-（听） + -ible（能…的） -> 听得见的，清晰可闻的。"
  },
  {
    "word": "audition",
    "phonetic": "/ɔːˈdɪʃn/",
    "pos": "n./vi.",
    "meaning": "试演， 试镜， 试唱",
    "part": "第二部分：高频专业词根族",
    "group": "【48. audi / audit 听/声音】",
    "analysis_type": "构词",
    "analysis": "aud-（听） + -ition（名词） -> 试演，试镜。"
  },
  {
    "word": "discern",
    "phonetic": "/dɪˈsɜːn/",
    "pos": "vt.",
    "meaning": "看出， 辨明， 察觉出",
    "part": "第二部分：高频专业词根族",
    "group": "【51. cert / cern 确信/弄清/分辨】",
    "analysis_type": "构词",
    "analysis": "dis-（分开） + cern（筛查） -> 看出，辨明。"
  },
  {
    "word": "certainty",
    "phonetic": "/ˈsɜːtnti/",
    "pos": "n.",
    "meaning": "必然的事， 确信",
    "part": "第二部分：高频专业词根族",
    "group": "【51. cert / cern 确信/弄清/分辨】",
    "analysis_type": "构词",
    "analysis": "certain（确信的） + -ty（名词后缀） -> 必然的事，确信。"
  },
  {
    "word": "uncertainty",
    "phonetic": "/ʌnˈsɜːtnti/",
    "pos": "n.",
    "meaning": "不确定性， 变数",
    "part": "第二部分：高频专业词根族",
    "group": "【51. cert / cern 确信/弄清/分辨】",
    "analysis_type": "构词",
    "analysis": "un-（不） + certainty（确定性） -> 不确定性，变数。"
  },
  {
    "word": "cordial",
    "phonetic": "/ˈkɔːdiəl/",
    "pos": "adj.",
    "meaning": "热情友好的， 热诚的",
    "part": "第二部分：高频专业词根族",
    "group": "【52. cord / card 心/核心】",
    "analysis_type": "构词",
    "analysis": "cord-（心脏） + -ial（形容词） -> 热情友好的，热诚的。"
  },
  {
    "word": "discord",
    "phonetic": "/ˈdɪskɔːd/",
    "pos": "n.",
    "meaning": "不和， 纷争； 不谐和音",
    "part": "第二部分：高频专业词根族",
    "group": "【52. cord / card 心/核心】",
    "analysis_type": "构词",
    "analysis": "dis-（分离） + cord（心） -> 不和，纷争。"
  },
  {
    "word": "cultivation",
    "phonetic": "/ˌkʌltɪˈveɪʃn/",
    "pos": "n.",
    "meaning": "耕作， 栽培； 修养",
    "part": "第二部分：高频专业词根族",
    "group": "【53. cult 耕作/培养/崇拜】",
    "analysis_type": "构词",
    "analysis": "cultiv-（耕作） + -ation（名词后缀） -> 耕作，栽培。"
  },
  {
    "word": "multicultural",
    "phonetic": "/ˌmʌltiˈkʌltʃərəl/",
    "pos": "adj.",
    "meaning": "多元文化的",
    "part": "第二部分：高频专业词根族",
    "group": "【53. cult 耕作/培养/崇拜】",
    "analysis_type": "构词",
    "analysis": "multi-（多种） + cultural（文化的） -> 多元文化的。"
  },
  {
    "word": "doctrine",
    "phonetic": "/ˈdɒktrɪn/",
    "pos": "n.",
    "meaning": "教义， 主义； 学说",
    "part": "第二部分：高频专业词根族",
    "group": "【55. doc / doct 教导/文件/凭证】",
    "analysis_type": "构词",
    "analysis": "doc-（教导） + -trine（名词后缀） -> 教义，主义。"
  },
  {
    "word": "donor",
    "phonetic": "/ˈdəʊnə(r)/",
    "pos": "n.",
    "meaning": "捐赠者， 捐助人； 供血者",
    "part": "第二部分：高频专业词根族",
    "group": "【56. don / dot / dow 赠送/给予】",
    "analysis_type": "构词",
    "analysis": "don-（给予） + -or（人） -> 捐赠者，捐助人。"
  },
  {
    "word": "endow",
    "phonetic": "/ɪnˈdaʊ/",
    "pos": "vt.",
    "meaning": "资助， 赋予； 给予",
    "part": "第二部分：高频专业词根族",
    "group": "【56. don / dot / dow 赠送/给予】",
    "analysis_type": "构词",
    "analysis": "en-（置于内） + dow（给予） -> 资助，赋予。"
  },
  {
    "word": "endurance",
    "phonetic": "/ɪnˈdjʊərəns/",
    "pos": "n.",
    "meaning": "耐久力， 忍耐力",
    "part": "第二部分：高频专业词根族",
    "group": "【57. dur 持久/坚硬/耐受】",
    "analysis_type": "构词",
    "analysis": "endure（忍耐） + -ance（名词后缀） -> 耐久力，忍耐力。"
  },
  {
    "word": "inadequate",
    "phonetic": "/ɪnˈædɪkwət/",
    "pos": "adj.",
    "meaning": "不充分的， 不够的； 不胜任的",
    "part": "第二部分：高频专业词根族",
    "group": "【58. equ / equi 平等/相同/公允】",
    "analysis_type": "构词",
    "analysis": "in-（不） + adequate（足够的） -> 不充分的，不够的。"
  },
  {
    "word": "equity",
    "phonetic": "/ˈekwəti/",
    "pos": "n.",
    "meaning": "公平， 公正； 资产净值， 股本",
    "part": "第二部分：高频专业词根族",
    "group": "【58. equ / equi 平等/相同/公允】",
    "analysis_type": "构词",
    "analysis": "equ-（平等的） + -ity（名词后缀） -> 公平，公正。"
  },
  {
    "word": "equator",
    "phonetic": "/ɪˈkweɪtə(r)/",
    "pos": "n.",
    "meaning": "赤道",
    "part": "第二部分：高频专业词根族",
    "group": "【58. equ / equi 平等/相同/公允】",
    "analysis_type": "构词",
    "analysis": "equat-（使平分相等） + -or（事物） -> 赤道。"
  },
  {
    "word": "defendant",
    "phonetic": "/dɪˈfendənt/",
    "pos": "n.",
    "meaning": "被告人",
    "part": "第二部分：高频专业词根族",
    "group": "【59. fend / fens 防卫/击退】",
    "analysis_type": "构词",
    "analysis": "defend（辩护） + -ant（人） -> 被告人。"
  },
  {
    "word": "confidential",
    "phonetic": "/ˌkɒnfɪˈdenʃl/",
    "pos": "adj.",
    "meaning": "秘密的， 机密的",
    "part": "第二部分：高频专业词根族",
    "group": "【60. fide / feder 信任/信仰/联盟】",
    "analysis_type": "构词",
    "analysis": "con-（共同） + fid-（信任） + -ent + -ial（形容词后缀） -> 秘密的，机密的。"
  },
  {
    "word": "fidelity",
    "phonetic": "/fɪˈdeləti/",
    "pos": "n.",
    "meaning": "忠诚， 忠实； 保真度",
    "part": "第二部分：高频专业词根族",
    "group": "【60. fide / feder 信任/信仰/联盟】",
    "analysis_type": "构词",
    "analysis": "fid-（誓约） + -elity（名词后缀） -> 忠诚，忠实。"
  },
  {
    "word": "diffuse",
    "phonetic": "/dɪˈfjuːz/",
    "pos": "vt./vi./adj.",
    "meaning": "扩散， 传播 adj. 冗长的",
    "part": "第二部分：高频专业词根族",
    "group": "【62. fuse / fund 浇灌/倾倒/熔化】",
    "analysis_type": "构词",
    "analysis": "dis-（向四方分开） + fus-（流淌倾倒） -> 扩散，传播。"
  },
  {
    "word": "infuse",
    "phonetic": "/ɪnˈfjuːz/",
    "pos": "vt.",
    "meaning": "注入， 灌输； 泡茶",
    "part": "第二部分：高频专业词根族",
    "group": "【62. fuse / fund 浇灌/倾倒/熔化】",
    "analysis_type": "构词",
    "analysis": "in-（向内） + fus-（倾倒） -> 注入，灌输。"
  },
  {
    "word": "inhibit",
    "phonetic": "/ɪnˈhɪbɪt/",
    "pos": "vt.",
    "meaning": "抑制， 约束； 阻碍",
    "part": "第二部分：高频专业词根族",
    "group": "【64. habit / hibit 居住/持有/拥有】",
    "analysis_type": "构词",
    "analysis": "in-（在内） + hibit（持住） -> 抑制，约束。"
  },
  {
    "word": "prejudice",
    "phonetic": "/ˈpredʒədɪs/",
    "pos": "n./vt.",
    "meaning": "偏见， 成见 vt. 使怀偏见",
    "part": "第二部分：高频专业词根族",
    "group": "【65. jur / jud / just 法律/审判/正义】",
    "analysis_type": "构词",
    "analysis": "pre-（预先） + judice（审判） -> 偏见，成见。"
  },
  {
    "word": "injustice",
    "phonetic": "/ɪnˈdʒʌstɪs/",
    "pos": "n.",
    "meaning": "不公， 非正义； 冤屈",
    "part": "第二部分：高频专业词根族",
    "group": "【65. jur / jud / just 法律/审判/正义】",
    "analysis_type": "构词",
    "analysis": "in-（不） + justice（公正） -> 不公，非正义。"
  },
  {
    "word": "eligible",
    "phonetic": "/ˈelɪdʒəbl/",
    "pos": "adj.",
    "meaning": "有资格的， 合格的",
    "part": "第二部分：高频专业词根族",
    "group": "【67. leg / lect / lig 收集/挑选/阅读/法律】",
    "analysis_type": "构词",
    "analysis": "e-（出） + lig-（挑选） + -ible（能…的） -> 有资格的，合格的。"
  },
  {
    "word": "diligence",
    "phonetic": "/ˈdɪlɪdʒəns/",
    "pos": "n.",
    "meaning": "勤奋， 勤勉",
    "part": "第二部分：高频专业词根族",
    "group": "【67. leg / lect / lig 收集/挑选/阅读/法律】",
    "analysis_type": "构词",
    "analysis": "di-（分开） + lig-（挑选） + -ence，引申指勤奋 -> 勤奋，勤勉。"
  },
  {
    "word": "legacy",
    "phonetic": "/ˈleɡəsi/",
    "pos": "n.",
    "meaning": "遗产， 遗留物",
    "part": "第二部分：高频专业词根族",
    "group": "【67. leg / lect / lig 收集/挑选/阅读/法律】",
    "analysis_type": "构词",
    "analysis": "词根 leg-（委派） -> 遗产，遗留物。"
  },
  {
    "word": "elevation",
    "phonetic": "/ˌelɪˈveɪʃn/",
    "pos": "n.",
    "meaning": "拔高， 提升； 海拔",
    "part": "第二部分：高频专业词根族",
    "group": "【68. lev 轻/举起/升高】",
    "analysis_type": "构词",
    "analysis": "elevate（抬升举起） + -ion（名词后缀） -> 拔高，提升。"
  },
  {
    "word": "lever",
    "phonetic": "/ˈliːvə(r)/",
    "pos": "n./vt.",
    "meaning": "杠杆， 操纵杆 vt. 撬动",
    "part": "第二部分：高频专业词根族",
    "group": "【68. lev 轻/举起/升高】",
    "analysis_type": "构词",
    "analysis": "本义指“撬起工具” -> 杠杆，操纵杆。"
  },
  {
    "word": "magnify",
    "phonetic": "/ˈmæɡnɪfaɪ/",
    "pos": "vt.",
    "meaning": "放大； 夸大",
    "part": "第二部分：高频专业词根族",
    "group": "【71. magn / maj / max 巨大/伟大/最高】",
    "analysis_type": "构词",
    "analysis": "magn-（宏大） + -ify（使动后缀） -> 放大。"
  },
  {
    "word": "magnitude",
    "phonetic": "/ˈmæɡnɪtjuːd/",
    "pos": "n.",
    "meaning": "巨大， 广大； 震级； 重要性",
    "part": "第二部分：高频专业词根族",
    "group": "【71. magn / maj / max 巨大/伟大/最高】",
    "analysis_type": "构词",
    "analysis": "magn-（宏大） + -itude（名词后缀） -> 巨大，广大。"
  },
  {
    "word": "mandatory",
    "phonetic": "/ˈmændətəri/",
    "pos": "adj.",
    "meaning": "强制的， 法定的， 必修的",
    "part": "第二部分：高频专业词根族",
    "group": "【72. mand / mend 命令/委托/托付】",
    "analysis_type": "构词",
    "analysis": "mand-（命令） + -atory（形容词后缀） -> 强制的，法定的。"
  },
  {
    "word": "diminish",
    "phonetic": "/dɪˈmɪnɪʃ/",
    "pos": "vt./vi.",
    "meaning": "减少， 减小， 削弱",
    "part": "第二部分：高频专业词根族",
    "group": "【76. min / mini 微小/变小】",
    "analysis_type": "构词",
    "analysis": "di-（向下） + min-（变小） + -ish（动词后缀） -> 减少，减小。"
  },
  {
    "word": "miniature",
    "phonetic": "/ˈmɪnətʃə(r)/",
    "pos": "adj./n.",
    "meaning": "微型的， 微小的 n. 缩影",
    "part": "第二部分：高频专业词根族",
    "group": "【76. min / mini 微小/变小】",
    "analysis_type": "构词",
    "analysis": "源自意大利语 miniatura（用红铅粉画笔） -> 微型的，微小的。"
  },
  {
    "word": "notify",
    "phonetic": "/ˈnəʊtɪfaɪ/",
    "pos": "vt.",
    "meaning": "通知， 告知， 报告",
    "part": "第二部分：高频专业词根族",
    "group": "【79. not 知道/注意/标明】",
    "analysis_type": "构词",
    "analysis": "not-（获悉知晓） + -ify（使动后缀） -> 通知，告知。"
  },
  {
    "word": "notification",
    "phonetic": "/ˌnəʊtɪfɪˈkeɪʃn/",
    "pos": "n.",
    "meaning": "通知， 通告",
    "part": "第二部分：高频专业词根族",
    "group": "【79. not 知道/注意/标明】",
    "analysis_type": "构词",
    "analysis": "notify（通知） + -ation（名词后缀） -> 通知，通告。"
  },
  {
    "word": "notorious",
    "phonetic": "/nəʊˈtɔːriəs/",
    "pos": "adj.",
    "meaning": "臭名昭著的， 声名狼藉的",
    "part": "第二部分：高频专业词根族",
    "group": "【79. not 知道/注意/标明】",
    "analysis_type": "构词",
    "analysis": "not-（为人所知晓的） + -orious（形容词后缀） -> 臭名昭著的，声名狼藉的。"
  },
  {
    "word": "tribute",
    "phonetic": "/ˈtrɪbjuːt/",
    "pos": "n.",
    "meaning": "致敬， 颂词； 贡品",
    "part": "第二部分：高频专业词根族",
    "group": "【42. tribut 给予/交纳/分发】",
    "analysis_type": "构词",
    "analysis": "词根 tribut-（给予） -> 致敬，颂词。"
  },
  {
    "word": "procure",
    "phonetic": "/prəˈkjʊə(r)/",
    "pos": "vt.",
    "meaning": "获得， 取得； 采购",
    "part": "第二部分：高频专业词根族",
    "group": "【43. cur / cura 照料/关心/医治】",
    "analysis_type": "构词",
    "analysis": "pro-（向前） + cure（关心） -> 获得，取得。"
  },
  {
    "word": "prevalence",
    "phonetic": "/ˈprevələns/",
    "pos": "n.",
    "meaning": "流行， 普遍存在",
    "part": "第二部分：高频专业词根族",
    "group": "【45. val / vail 强壮/力量/价值】",
    "analysis_type": "构词",
    "analysis": "pre-（在前） + val-（强壮） + -ence，引申指流行 -> 流行，普遍存在。"
  },
  {
    "word": "alienation",
    "phonetic": "/ˌeɪliəˈneɪʃn/",
    "pos": "n.",
    "meaning": "疏远， 隔阂",
    "part": "第二部分：高频专业词根族",
    "group": "【46. alter / ali 其他/变更】",
    "analysis_type": "构词",
    "analysis": "alienate（疏远） + -ion（名词后缀） -> 疏远，隔阂。"
  },
  {
    "word": "animated",
    "phonetic": "/ˈænɪmeɪtɪd/",
    "pos": "adj.",
    "meaning": "充满活力的， 生动的",
    "part": "第二部分：高频专业词根族",
    "group": "【47. anim 生命/心智/气息】",
    "analysis_type": "构词",
    "analysis": "anim-（生命） + -ated（形容词后缀） -> 充满活力的，生动的。"
  },
  {
    "word": "auditory",
    "phonetic": "/ˈɔːdətri/",
    "pos": "adj.",
    "meaning": "听觉的， 听觉器官的",
    "part": "第二部分：高频专业词根族",
    "group": "【48. audi / audit 听/声音】",
    "analysis_type": "构词",
    "analysis": "audit-（听） + -ory（形容词） -> 听觉的，听觉器官的。"
  },
  {
    "word": "battered",
    "phonetic": "/ˈbætəd/",
    "pos": "adj.",
    "meaning": "破旧的； 饱受打击的",
    "part": "第二部分：高频专业词根族",
    "group": "【49. bell / bat 战斗/敲打】",
    "analysis_type": "构词",
    "analysis": "batter（连续猛击） + -ed（形容词后缀） -> 破旧的。"
  },
  {
    "word": "discernible",
    "phonetic": "/dɪˈsɜːnəbl/",
    "pos": "adj.",
    "meaning": "可辨别的， 看得清的",
    "part": "第二部分：高频专业词根族",
    "group": "【51. cert / cern 确信/弄清/分辨】",
    "analysis_type": "构词",
    "analysis": "discern（辨别） + -ible（可…的） -> 可辨别的，看得清的。"
  },
  {
    "word": "cordially",
    "phonetic": "/ˈkɔːdiəli/",
    "pos": "adv.",
    "meaning": "诚挚地， 热情地",
    "part": "第二部分：高频专业词根族",
    "group": "【52. cord / card 心/核心】",
    "analysis_type": "构词",
    "analysis": "cordial（衷心热诚的） + -ly（副词后缀） -> 诚挚地，热情地。"
  },
  {
    "word": "damaging",
    "phonetic": "/ˈdæmɪdʒɪŋ/",
    "pos": "adj.",
    "meaning": "有破坏性的， 有害的",
    "part": "第二部分：高频专业词根族",
    "group": "【54. damn / demn 损失/谴责/惩戒】",
    "analysis_type": "构词",
    "analysis": "damage（损害） + -ing（形容词后缀） -> 有破坏性的，有害的。"
  },
  {
    "word": "documentation",
    "phonetic": "/ˌdɒkjumenˈteɪʃn/",
    "pos": "n.",
    "meaning": "证明文件， 文献记录",
    "part": "第二部分：高频专业词根族",
    "group": "【55. doc / doct 教导/文件/凭证】",
    "analysis_type": "构词",
    "analysis": "document（文件） + -ation（名词后缀） -> 证明文件，文献记录。"
  },
  {
    "word": "endowment",
    "phonetic": "/ɪnˈdaʊmənt/",
    "pos": "n.",
    "meaning": "捐赠基金； 天赋才能",
    "part": "第二部分：高频专业词根族",
    "group": "【56. don / dot / dow 赠送/给予】",
    "analysis_type": "构词",
    "analysis": "endow（捐赠财产基金） + -ment（名词后缀） -> 捐赠基金。"
  },
  {
    "word": "anecdote",
    "phonetic": "/ˈænɪkdəʊt/",
    "pos": "n.",
    "meaning": "奇闻轶事， 短小趣闻",
    "part": "第二部分：高频专业词根族",
    "group": "【56. don / dot / dow 赠送/给予】",
    "analysis_type": "构词",
    "analysis": "源自希腊语 anekdota（未曾公开发表） -> 奇闻轶事，短小趣闻。"
  },
  {
    "word": "durability",
    "phonetic": "/ˌdjʊərəˈbɪləti/",
    "pos": "n.",
    "meaning": "耐久性， 坚固度",
    "part": "第二部分：高频专业词根族",
    "group": "【57. dur 持久/坚硬/耐受】",
    "analysis_type": "构词",
    "analysis": "durable（耐用的） + -ility（名词后缀） -> 耐久性，坚固度。"
  },
  {
    "word": "offender",
    "phonetic": "/əˈfendə(r)/",
    "pos": "n.",
    "meaning": "罪犯， 违规者",
    "part": "第二部分：高频专业词根族",
    "group": "【59. fend / fens 防卫/击退】",
    "analysis_type": "构词",
    "analysis": "offend（冒犯） + -er（人） -> 罪犯，违规者。"
  },
  {
    "word": "inoffensive",
    "phonetic": "/ˌɪnəˈfensɪv/",
    "pos": "adj.",
    "meaning": "无害的， 不伤人的",
    "part": "第二部分：高频专业词根族",
    "group": "【59. fend / fens 防卫/击退】",
    "analysis_type": "构词",
    "analysis": "in-（无） + offensive（冒犯攻击的） -> 无害的，不伤人的。"
  },
  {
    "word": "confide",
    "phonetic": "/kənˈfaɪd/",
    "pos": "vt./vi.",
    "meaning": "吐露隐私； 信任（in）",
    "part": "第二部分：高频专业词根族",
    "group": "【60. fide / feder 信任/信仰/联盟】",
    "analysis_type": "构词",
    "analysis": "con-（完全） + fide（信任） -> 吐露隐私。"
  },
  {
    "word": "gravitational",
    "phonetic": "/ˌɡrævɪˈteɪʃənl/",
    "pos": "adj.",
    "meaning": "重力的， 万有引力的",
    "part": "第二部分：高频专业词根族",
    "group": "【63. grav / griev 沉重/庄重/痛苦】",
    "analysis_type": "构词",
    "analysis": "gravitation（重力） + -al（形容词后缀） -> 重力的，万有引力的。"
  },
  {
    "word": "inhibition",
    "phonetic": "/ˌɪnhɪˈbɪʃn/",
    "pos": "n.",
    "meaning": "压抑， 抑制； 顾虑",
    "part": "第二部分：高频专业词根族",
    "group": "【64. habit / hibit 居住/持有/拥有】",
    "analysis_type": "构词",
    "analysis": "inhibit（抑制） + -ion（名词后缀） -> 压抑，抑制。"
  },
  {
    "word": "prejudiced",
    "phonetic": "/ˈpredʒədɪst/",
    "pos": "adj.",
    "meaning": "有偏见的， 有成见的",
    "part": "第二部分：高频专业词根族",
    "group": "【65. jur / jud / just 法律/审判/正义】",
    "analysis_type": "构词",
    "analysis": "prejudice（偏见） + -ed（形容词后缀） -> 有偏见的，有成见的。"
  },
  {
    "word": "collaboration",
    "phonetic": "/kəˌlæbəˈreɪʃn/",
    "pos": "n.",
    "meaning": "合作， 协作",
    "part": "第二部分：高频专业词根族",
    "group": "【66. labor 劳动/劳作/艰辛】",
    "analysis_type": "构词",
    "analysis": "col-（com- 共） + labor-（劳作） + -ation（名词后缀） -> 合作，协作。"
  },
  {
    "word": "elective",
    "phonetic": "/ɪˈlektɪv/",
    "pos": "adj./n.",
    "meaning": "选修的； 选出的 n. 选修课",
    "part": "第二部分：高频专业词根族",
    "group": "【67. leg / lect / lig 收集/挑选/阅读/法律】",
    "analysis_type": "构词",
    "analysis": "elect（挑选） + -ive（形容词） -> 选修的。"
  },
  {
    "word": "dislocate",
    "phonetic": "/ˈdɪsləkeɪt/",
    "pos": "vt.",
    "meaning": "使关节脱臼； 打乱",
    "part": "第二部分：高频专业词根族",
    "group": "【70. loc 地点/放置/位置】",
    "analysis_type": "构词",
    "analysis": "dis-（脱离） + loc-（位置） + -ate（动词后缀） -> 使关节脱臼。"
  },
  {
    "word": "allocation",
    "phonetic": "/ˌæləˈkeɪʃn/",
    "pos": "n.",
    "meaning": "拨款， 配给； 配额",
    "part": "第二部分：高频专业词根族",
    "group": "【70. loc 地点/放置/位置】",
    "analysis_type": "构词",
    "analysis": "allocate（拨配分派） + -ation（名词后缀） -> 拨款，配给。"
  },
  {
    "word": "mandate",
    "phonetic": "/ˈmændeɪt/",
    "pos": "n./vt.",
    "meaning": "授权， 委托； 强制执行",
    "part": "第二部分：高频专业词根族",
    "group": "【72. mand / mend 命令/委托/托付】",
    "analysis_type": "构词",
    "analysis": "mand-（手） + -ate，引申指授权 -> 授权，委托。"
  },
  {
    "word": "mediator",
    "phonetic": "/ˈmiːdieɪtə(r)/",
    "pos": "n.",
    "meaning": "调解人， 调停者",
    "part": "第二部分：高频专业词根族",
    "group": "【73. med / medi 中间/居中】",
    "analysis_type": "构词",
    "analysis": "medi-（中间居中） + -ator（人员） -> 调解人，调停者。"
  },
  {
    "word": "commemorate",
    "phonetic": "/kəˈmeməreɪt/",
    "pos": "vt.",
    "meaning": "纪念， 庆祝（先烈）",
    "part": "第二部分：高频专业词根族",
    "group": "【74. memor / member 记忆/纪念】",
    "analysis_type": "构词",
    "analysis": "com-（共同） + memor-（记忆） + -ate（动词后缀） -> 纪念，庆祝（先烈）。"
  },
  {
    "word": "memorable",
    "phonetic": "/ˈmemərəbl/",
    "pos": "adj.",
    "meaning": "难忘的， 值得纪念的",
    "part": "第二部分：高频专业词根族",
    "group": "【74. memor / member 记忆/纪念】",
    "analysis_type": "构词",
    "analysis": "memor-（记忆） + -able（值得…的） -> 难忘的，值得纪念的。"
  },
  {
    "word": "migrant",
    "phonetic": "/ˈmaɪɡrənt/",
    "pos": "n./adj.",
    "meaning": "候鸟； 流动务工者",
    "part": "第二部分：高频专业词根族",
    "group": "【75. migr 迁移/移居】",
    "analysis_type": "构词",
    "analysis": "migr-（迁移） + -ant（人） -> 候鸟。"
  },
  {
    "word": "minimal",
    "phonetic": "/ˈmɪnɪml/",
    "pos": "adj.",
    "meaning": "极小的， 极少的， 最低的",
    "part": "第二部分：高频专业词根族",
    "group": "【76. min / mini 微小/变小】",
    "analysis_type": "构词",
    "analysis": "minim-（极小） + -al（形容词后缀） -> 极小的，极少的。"
  },
  {
    "word": "noteworthy",
    "phonetic": "/ˈnəʊtwɜːði/",
    "pos": "adj.",
    "meaning": "显著的， 值得注意的",
    "part": "第二部分：高频专业词根族",
    "group": "【79. not 知道/注意/标明】",
    "analysis_type": "构词",
    "analysis": "note（注意） + worthy（值得…的） -> 显著的，值得注意的。"
  },
  {
    "word": "innovator",
    "phonetic": "/ˈɪnəveɪtə(r)/",
    "pos": "n.",
    "meaning": "改革者， 创新先驱",
    "part": "第二部分：高频专业词根族",
    "group": "【80. nov / neo 新/新颖】",
    "analysis_type": "构词",
    "analysis": "in-（进入） + nov-（新奇） + -ator（人） -> 改革者，创新先驱。"
  },
  {
    "word": "inhabited",
    "phonetic": "/ɪnˈhæbɪtɪd/",
    "pos": "adj.",
    "meaning": "有人居住的",
    "part": "第二部分：高频专业词根族",
    "group": "【64. habit / hibit 居住/持有/拥有】",
    "analysis_type": "构词",
    "analysis": "inhabit（居住其间） + -ed（形容词后缀） -> 有人居住的。"
  },
  {
    "word": "captivate",
    "phonetic": "/ˈkæptɪveɪt/",
    "pos": "vt.",
    "meaning": "迷住， 吸引",
    "part": "第二部分：高频专业词根族",
    "group": "【41. 核心词根 1：cap / capt / cept / cip（抓/拿/取）】",
    "analysis_type": "构词",
    "analysis": "capt-（抓住） + -iv- + -ate（使动后缀） -> 迷住，吸引。"
  },
  {
    "word": "incorporate",
    "phonetic": "/ɪnˈkɔːpəreɪt/",
    "pos": "vt.",
    "meaning": "包含， 吸收； 组成法人",
    "part": "第二部分：高频专业词根族",
    "group": "【46. 核心词根 6：corp / corpor（身体/实体）】",
    "analysis_type": "构词",
    "analysis": "in-（置于内） + corpor-（身体） + -ate，引申指包含 -> 包含，吸收。"
  },
  {
    "word": "concurrent",
    "phonetic": "/kənˈkʌrənt/",
    "pos": "adj.",
    "meaning": "同时发生的； 并存的",
    "part": "第二部分：高频专业词根族",
    "group": "【48. 核心词根 8：cur / curs / cour（跑/发生/流动）】",
    "analysis_type": "构词",
    "analysis": "con-（共同） + curr-（奔跑） + -ent，引申指同时发生的 -> 同时发生的。"
  },
  {
    "word": "contradictory",
    "phonetic": "/ˌkɒntrəˈdɪktəri/",
    "pos": "adj.",
    "meaning": "矛盾的， 对立的",
    "part": "第二部分：高频专业词根族",
    "group": "【49. 核心词根 9：dic / dict（说/指示）】",
    "analysis_type": "构词",
    "analysis": "contra-（相反） + dict-（宣说） + -ory，引申指矛盾的 -> 矛盾的，对立的。"
  },
  {
    "word": "deduce",
    "phonetic": "/dɪˈdjuːs/",
    "pos": "vt.",
    "meaning": "推论， 推断， 演绎",
    "part": "第二部分：高频专业词根族",
    "group": "【50. 核心词根 10：duc / duct（引导/带领）】",
    "analysis_type": "构词",
    "analysis": "de-（向下） + duce（引导） -> 推论，推断。"
  },
  {
    "word": "antibody",
    "phonetic": "/ˈæntibɒdi/",
    "pos": "n.",
    "meaning": "抗体",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【81. 前缀群：否定与相反】",
    "analysis_type": "构词",
    "analysis": "anti-（对抗） + body（抗体蛋白实体） -> 抗体。"
  },
  {
    "word": "antibiotic",
    "phonetic": "/ˌæntibaɪˈɒtɪk/",
    "pos": "n./adj.",
    "meaning": "抗生素， 抗菌素",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【81. 前缀群：否定与相反】",
    "analysis_type": "构词",
    "analysis": "anti-（抵抗） + bio-（生命） + -ic（药剂） -> 抗生素，抗菌素。"
  },
  {
    "word": "incompatible",
    "phonetic": "/ˌɪnkəmˈpætəbl/",
    "pos": "adj.",
    "meaning": "不相容的， 不能并存的",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【81. 前缀群：否定与相反】",
    "analysis_type": "构词",
    "analysis": "in-（不） + compatible（能和谐共处的） -> 不相容的，不能并存的。"
  },
  {
    "word": "inevitable",
    "phonetic": "/ɪnˈevɪtəbl/",
    "pos": "adj.",
    "meaning": "不可避免的， 必然的",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【81. 前缀群：否定与相反】",
    "analysis_type": "构词",
    "analysis": "in-（不可） + evitare（避开） + -able，引申指不可避免的 -> 不可避免的，必然的。"
  },
  {
    "word": "illiterate",
    "phonetic": "/ɪˈlɪtərət/",
    "pos": "adj./n.",
    "meaning": "文盲的； 文盲",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【81. 前缀群：否定与相反】",
    "analysis_type": "构词",
    "analysis": "il-（in- 无） + literate（识字的） -> 文盲的。"
  },
  {
    "word": "impartial",
    "phonetic": "/ɪmˈpɑːʃl/",
    "pos": "adj.",
    "meaning": "公正的， 不偏不倚的",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【81. 前缀群：否定与相反】",
    "analysis_type": "构词",
    "analysis": "im-（in- 不） + partial（偏袒一方的） -> 公正的，不偏不倚的。"
  },
  {
    "word": "misleading",
    "phonetic": "/ˌmɪsˈliːdɪŋ/",
    "pos": "adj.",
    "meaning": "误导性的， 引人入胜歧途的",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【81. 前缀群：否定与相反】",
    "analysis_type": "构词",
    "analysis": "mis-（错误） + lead（引导） + -ing（形容词后缀） -> 误导性的，引人入胜歧途的。"
  },
  {
    "word": "misinterpret",
    "phonetic": "/ˌmɪsɪnˈtɜːprɪt/",
    "pos": "vt.",
    "meaning": "误解， 曲解",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【81. 前缀群：否定与相反】",
    "analysis_type": "构词",
    "analysis": "mis-（错误） + interpret（解释） -> 误解，曲解。"
  },
  {
    "word": "subordinate",
    "phonetic": "/səˈbɔːdɪnət/",
    "pos": "adj./n.",
    "meaning": "次要的； 下级的 n. 下属",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【82. 前缀群：空间方位与位移】",
    "analysis_type": "构词",
    "analysis": "sub-（在下方） + ordin-（顺序） + -ate，引申指次要的 -> 次要的。"
  },
  {
    "word": "subsidy",
    "phonetic": "/ˈsʌbsədi/",
    "pos": "n.",
    "meaning": "补贴， 津贴",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【82. 前缀群：空间方位与位移】",
    "analysis_type": "构词",
    "analysis": "sub-（从下方） + sid-（坐下） + -y，引申指补贴 -> 补贴，津贴。"
  },
  {
    "word": "subsidize",
    "phonetic": "/ˈsʌbsɪdaɪz/",
    "pos": "vt.",
    "meaning": "资助， 给…发放补贴",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【82. 前缀群：空间方位与位移】",
    "analysis_type": "构词",
    "analysis": "subsidy（财政补贴） + -ize（动词后缀） -> 资助，给…发放补贴。"
  },
  {
    "word": "transition",
    "phonetic": "/trænˈzɪʃn/",
    "pos": "n.",
    "meaning": "过渡， 转变， 转换",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【82. 前缀群：空间方位与位移】",
    "analysis_type": "构词",
    "analysis": "trans-（跨越） + it-（走） + -ion（名词后缀） -> 过渡，转变。"
  },
  {
    "word": "transmission",
    "phonetic": "/trænzˈmɪʃn/",
    "pos": "n.",
    "meaning": "播送， 传播； 变速装置",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【82. 前缀群：空间方位与位移】",
    "analysis_type": "构词",
    "analysis": "trans-（跨越） + miss-（发送） + -ion，引申指播送 -> 播送，传播。"
  },
  {
    "word": "interdependent",
    "phonetic": "/ˌɪntədɪˈpendənt/",
    "pos": "adj.",
    "meaning": "相互依赖的， 互助的",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【82. 前缀群：空间方位与位移】",
    "analysis_type": "构词",
    "analysis": "inter-（相互之间） + dependent（依赖的） -> 相互依赖的，互助的。"
  },
  {
    "word": "intercultural",
    "phonetic": "/ˌɪntəˈkʌltʃərəl/",
    "pos": "adj.",
    "meaning": "跨文化的， 文化间的",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【82. 前缀群：空间方位与位移】",
    "analysis_type": "构词",
    "analysis": "inter-（跨越） + cultural（文化的） -> 跨文化的，文化间的。"
  },
  {
    "word": "underestimate",
    "phonetic": "/ˌʌndərˈestɪmeɪt/",
    "pos": "vt.",
    "meaning": "低估， 看轻",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【82. 前缀群：空间方位与位移】",
    "analysis_type": "构词",
    "analysis": "under-（在…之下） + estimate（估算） -> 低估，看轻。"
  },
  {
    "word": "overwhelming",
    "phonetic": "/ˌəʊvəˈwelmɪŋ/",
    "pos": "adj.",
    "meaning": "压倒性的， 势不可挡的",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【82. 前缀群：空间方位与位移】",
    "analysis_type": "构词",
    "analysis": "over-（在上） + whelm（水浪倾覆淹没） + -ing，引申指压倒性的 -> 压倒性的，势不可挡的。"
  },
  {
    "word": "superficial",
    "phonetic": "/ˌsuːpəˈfɪʃl/",
    "pos": "adj.",
    "meaning": "肤浅的， 表面的",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【82. 前缀群：空间方位与位移】",
    "analysis_type": "构词",
    "analysis": "super-（在上） + fici-（表面） + -al，引申指肤浅的 -> 肤浅的，表面的。"
  },
  {
    "word": "surplus",
    "phonetic": "/ˈsɜːpləs/",
    "pos": "n./adj.",
    "meaning": "过剩， 盈余 adj. 多余的",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【82. 前缀群：空间方位与位移】",
    "analysis_type": "构词",
    "analysis": "sur-（超出） + plus（多余） -> 过剩，盈余。"
  },
  {
    "word": "automatic",
    "phonetic": "/ˌɔːtəˈmætɪk/",
    "pos": "adj.",
    "meaning": "自动的， 自发的",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【82. 前缀群：空间方位与位移】",
    "analysis_type": "构词",
    "analysis": "auto-（自己） + mat-（思维行动） + -ic，引申指自动的 -> 自动的，自发的。"
  },
  {
    "word": "autonomy",
    "phonetic": "/ɔːˈtɒnəmi/",
    "pos": "n.",
    "meaning": "自治， 自治权； 自主性",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【82. 前缀群：空间方位与位移】",
    "analysis_type": "构词",
    "analysis": "auto-（自己） + nom-（法则） + -y，引申指自治 -> 自治，自治权。"
  },
  {
    "word": "unprecedented",
    "phonetic": "/ʌnˈpresɪdentɪd/",
    "pos": "adj.",
    "meaning": "史无前例的， 空前的",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【81. 前缀群：否定与相反】",
    "analysis_type": "构词",
    "analysis": "un-（无） + precedent（先例前例） + -ed，引申指史无前例的 -> 史无前例的，空前的。"
  },
  {
    "word": "invariable",
    "phonetic": "/ɪnˈveəriəbl/",
    "pos": "adj.",
    "meaning": "不变的， 恒定的， 始终如一的",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【81. 前缀群：否定与相反】",
    "analysis_type": "构词",
    "analysis": "in-（不） + variable（易变的） -> 不变的，恒定的。"
  },
  {
    "word": "irrational",
    "phonetic": "/ɪˈræʃənl/",
    "pos": "adj.",
    "meaning": "不合理的， 荒谬的； 无理性的",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【81. 前缀群：否定与相反】",
    "analysis_type": "构词",
    "analysis": "ir-（非） + rational（理性的） -> 不合理的，荒谬的。"
  },
  {
    "word": "immortal",
    "phonetic": "/ɪˈmɔːtl/",
    "pos": "adj./n.",
    "meaning": "不朽的， 永生的 n. 不朽的人物",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【81. 前缀群：否定与相反】",
    "analysis_type": "构词",
    "analysis": "im-（不） + mortal（终有一死的凡） -> 不朽的，永生的。"
  },
  {
    "word": "immune",
    "phonetic": "/ɪˈmjuːn/",
    "pos": "adj.",
    "meaning": "有免疫力的； 不受影响的， 免除的（to）",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【81. 前缀群：否定与相反】",
    "analysis_type": "构词",
    "analysis": "im-（免除） + mun-（公共劳役税负） -> 有免疫力的。"
  },
  {
    "word": "irreplaceable",
    "phonetic": "/ˌɪrɪˈpleɪsəbl/",
    "pos": "adj.",
    "meaning": "不可替代的， 无可比拟的",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【81. 前缀群：否定与相反】",
    "analysis_type": "构词",
    "analysis": "ir-（不能） + replace（替代） + -able，引申指不可替代的 -> 不可替代的，无可比拟的。"
  },
  {
    "word": "irreversible",
    "phonetic": "/ˌɪrɪˈvɜːsəbl/",
    "pos": "adj.",
    "meaning": "不可逆转的， 不可挽回的",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【81. 前缀群：否定与相反】",
    "analysis_type": "构词",
    "analysis": "ir-（无法） + reverse（掉头反转） + -ible，引申指不可逆转的 -> 不可逆转的，不可挽回的。"
  },
  {
    "word": "inaccessible",
    "phonetic": "/ˌɪnækˈsesəbl/",
    "pos": "adj.",
    "meaning": "难以到达的， 不可接近的； 难懂的",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【81. 前缀群：否定与相反】",
    "analysis_type": "构词",
    "analysis": "in-（无法） + access（进入通行） + -ible，引申指难以到达的 -> 难以到达的，不可接近的。"
  },
  {
    "word": "disillusion",
    "phonetic": "/ˌdɪsɪˈluːʒn/",
    "pos": "vt./n.",
    "meaning": "使醒悟， 使幻灭 n. 幻灭， 觉醒",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【81. 前缀群：否定与相反】",
    "analysis_type": "构词",
    "analysis": "dis-（打破剥离） + illusion（美丽错觉幻想） -> 使醒悟，使幻灭。"
  },
  {
    "word": "illogical",
    "phonetic": "/ɪˈlɒdʒɪkl/",
    "pos": "adj.",
    "meaning": "不合逻辑的， 不通情理的",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【81. 前缀群：否定与相反】",
    "analysis_type": "构词",
    "analysis": "il-（无） + logical（符合逻辑的） -> 不合逻辑的，不通情理的。"
  },
  {
    "word": "intercept",
    "phonetic": "/ˌɪntəˈsept/",
    "pos": "vt./n.",
    "meaning": "中途拦截， 截获 n. 截击",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【82. 前缀群：空间方位与位移】",
    "analysis_type": "构词",
    "analysis": "inter-（在两者中间） + cept（抓取捕获） -> 中途拦截，截获。"
  },
  {
    "word": "subconscious",
    "phonetic": "/ˌsʌbˈkɒnʃəs/",
    "pos": "adj./n.",
    "meaning": "下意识的， 潜意识的 n. 潜意识",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【82. 前缀群：空间方位与位移】",
    "analysis_type": "构词",
    "analysis": "sub-（在底下） + conscious（有明确意识的） -> 下意识的，潜意识的。"
  },
  {
    "word": "extravagant",
    "phonetic": "/ɪkˈstrævəɡənt/",
    "pos": "adj.",
    "meaning": "奢侈的， 铺张浪费的； 过分的",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【82. 前缀群：空间方位与位移】",
    "analysis_type": "构词",
    "analysis": "extra-（超越规矩边界） + vag-（游荡漫步） + -ant，引申指奢侈的 -> 奢侈的，铺张浪费的。"
  },
  {
    "word": "substandard",
    "phonetic": "/ˌsʌbˈstændəd/",
    "pos": "adj.",
    "meaning": "不合格的， 低于标准的， 劣质的",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【82. 前缀群：空间方位与位移】",
    "analysis_type": "构词",
    "analysis": "sub-（在下方） + standard（及格合格标准） -> 不合格的，低于标准的。"
  },
  {
    "word": "outperform",
    "phonetic": "/ˌaʊtpəˈfɔːm/",
    "pos": "vt.",
    "meaning": "胜过， 做得比…好， 表现优于",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【82. 前缀群：空间方位与位移】",
    "analysis_type": "构词",
    "analysis": "out-（超越胜出） + perform（表现做工） -> 胜过，做得比…好。"
  },
  {
    "word": "intercity",
    "phonetic": "/ˌɪntəˈsɪti/",
    "pos": "adj.",
    "meaning": "城市间的， 城际的（交通客运）",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【82. 前缀群：空间方位与位移】",
    "analysis_type": "构词",
    "analysis": "inter-（在两者之间穿） + city（都市） -> 城市间的，城际的（交通客运）。"
  },
  {
    "word": "precedent",
    "phonetic": "/ˈpresɪdənt/",
    "pos": "n./adj.",
    "meaning": "先例， 前例； 判例 adj. 在前的",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【83. 前缀群：时间与递进】",
    "analysis_type": "构词",
    "analysis": "pre-（提前走在前面） + ced-（走过） + -ent，引申指先例 -> 先例，前例。"
  },
  {
    "word": "prolong",
    "phonetic": "/prəˈlɒŋ/",
    "pos": "vt.",
    "meaning": "延长， 拉长， 拖延（时间/寿命）",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【83. 前缀群：时间与递进】",
    "analysis_type": "构词",
    "analysis": "pro-（向前） + long（修长长久） -> 延长，拉长。"
  },
  {
    "word": "prerequisite",
    "phonetic": "/ˌpriːˈrekwəzɪt/",
    "pos": "n./adj.",
    "meaning": "先决条件， 前提 adj. 必备的",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【83. 前缀群：时间与递进】",
    "analysis_type": "构词",
    "analysis": "pre-（提前） + requisite（必需品） -> 先决条件，前提。"
  },
  {
    "word": "prophet",
    "phonetic": "/ˈprɒfɪt/",
    "pos": "n.",
    "meaning": "先知， 预言家； 倡导者",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【83. 前缀群：时间与递进】",
    "analysis_type": "构词",
    "analysis": "pro-（提前当众） + phet（开口讲出） -> 先知，预言家。"
  },
  {
    "word": "predecessor",
    "phonetic": "/ˈpriːdəsesə(r)/",
    "pos": "n.",
    "meaning": "前任， 前辈； （机器等）前身",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【83. 前缀群：时间与递进】",
    "analysis_type": "构词",
    "analysis": "pre-（在前面先行） + de- + cess（退位离开） + -or，引申指前任 -> 前任，前辈。"
  },
  {
    "word": "proactive",
    "phonetic": "/ˌprəʊˈæktɪv/",
    "pos": "adj.",
    "meaning": "积极主动的， 先发制人的",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【83. 前缀群：时间与递进】",
    "analysis_type": "构词",
    "analysis": "pro-（走在前头） + active（行动活跃） -> 积极主动的，先发制人的。"
  },
  {
    "word": "affordable",
    "phonetic": "/əˈfɔːdəbl/",
    "pos": "adj.",
    "meaning": "负担得起的， 价格适中的",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "afford（买得起） + -able（能…的） -> 负担得起的，价格适中的。"
  },
  {
    "word": "agency",
    "phonetic": "/ˈeɪdʒənsi/",
    "pos": "n.",
    "meaning": "代理处， 中介； 机构",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "ag-（做） + -ency（机构） -> 代理处，中介。"
  },
  {
    "word": "auction",
    "phonetic": "/ˈɔːkʃn/",
    "pos": "n./vt.",
    "meaning": "拍卖， 竞卖",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "auct-（增加） + -ion（名词后缀） -> 拍卖，竞卖。"
  },
  {
    "word": "banker",
    "phonetic": "/ˈbæŋkə(r)/",
    "pos": "n.",
    "meaning": "银行家， 银行高级职员",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "bank（银行） + -er（人） -> 银行家，银行高级职员。"
  },
  {
    "word": "bid",
    "phonetic": "/bɪd/",
    "pos": "n./v.",
    "meaning": "出价， 投标； 努力",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "源自词根核心本义 -> 出价，投标。"
  },
  {
    "word": "billion",
    "phonetic": "/ˈbɪljən/",
    "pos": "num./n.",
    "meaning": "十亿",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "bi-（二） + million（百万） -> 十亿。"
  },
  {
    "word": "borrow",
    "phonetic": "/ˈbɒrəʊ/",
    "pos": "vt./vi.",
    "meaning": "借， 借入",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "源自词根核心本义 -> 借，借入。"
  },
  {
    "word": "buyer",
    "phonetic": "/ˈbaɪə(r)/",
    "pos": "n.",
    "meaning": "买方， 采购员",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "buy（买） + -er（人） -> 买方，采购员。"
  },
  {
    "word": "clerk",
    "phonetic": "/klɑːk/",
    "pos": "n.",
    "meaning": "店员， 办事员， 书记员",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "词根 clericus（神职人员） -> 店员，办事员。"
  },
  {
    "word": "coin",
    "phonetic": "/kɔɪn/",
    "pos": "n./vt.",
    "meaning": "硬币 vt. 创造（新词）",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "词根 -> 硬币，vt.。"
  },
  {
    "word": "cost",
    "phonetic": "/kɒst/",
    "pos": "n./vt.",
    "meaning": "成本， 价钱 vt. 花费",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "源自拉丁动词 constare（共同立足） -> 成本，价钱。"
  },
  {
    "word": "credit",
    "phonetic": "/ˈkredɪt/",
    "pos": "n./vt.",
    "meaning": "信用，信贷；学分；赞扬，功劳；信任",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "cred-（相信） + -it -> 值得信赖的凭据或成绩 -> 信用，信贷。"
  },
  {
    "word": "customs",
    "phonetic": "/ˈkʌstəmz/",
    "pos": "n.",
    "meaning": "海关； 关税",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "源自 custom（日常进出港口） -> 海关。"
  },
  {
    "word": "dealer",
    "phonetic": "/ˈdiːlə(r)/",
    "pos": "n.",
    "meaning": "商人， 经销商",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "deal（交易） + -er（人） -> 商人，经销商。"
  },
  {
    "word": "discount",
    "phonetic": "/ˈdɪskaʊnt/",
    "pos": "n./vt.",
    "meaning": "折扣 vt. 打折； 忽视",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "dis-（去除） + count（计算总数） -> 折扣，vt.。"
  },
  {
    "word": "dollar",
    "phonetic": "/ˈdɒlə(r)/",
    "pos": "n.",
    "meaning": "美元； 元",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "源自德语 Thaler / Joachimsthaler（波希米亚约阿等 -> 美元。"
  },
  {
    "word": "duty",
    "phonetic": "/ˈdjuːti/",
    "pos": "n.",
    "meaning": "职责； 关税， 进口税",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "due（应付的） + -ty（名词后缀） -> 职责。"
  },
  {
    "word": "earnings",
    "phonetic": "/ˈɜːnɪŋz/",
    "pos": "n.",
    "meaning": "利润， 收益； 所得工资",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "earn（挣得） + -ing + -s（复数名词） -> 利润，收益。"
  },
  {
    "word": "employ",
    "phonetic": "/ɪmˈplɔɪ/",
    "pos": "vt.",
    "meaning": "雇用； 使用， 利用",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "em-（in- 进入） + ploy（折叠） -> 雇用。"
  },
  {
    "word": "employee",
    "phonetic": "/ɪmˈplɔɪiː/",
    "pos": "n.",
    "meaning": "受雇者， 雇员， 员工",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "employ（雇用） + -ee（受动者） -> 受雇者，雇员。"
  },
  {
    "word": "employer",
    "phonetic": "/ɪmˈplɔɪə(r)/",
    "pos": "n.",
    "meaning": "雇主， 用人单位",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "employ（雇用） + -er（主动者） -> 雇主，用人单位。"
  },
  {
    "word": "expense",
    "phonetic": "/ɪkˈspens/",
    "pos": "n.",
    "meaning": "开支， 花费， 代价",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "ex-（向外） + pens-（称量支付银钱） + -e，引申指开支 -> 开支，花费。"
  },
  {
    "word": "fund",
    "phonetic": "/fʌnd/",
    "pos": "n./vt.",
    "meaning": "基金， 专款 vt. 资助",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "词根 fundus（底部） -> 基金，专款。"
  },
  {
    "word": "inflation",
    "phonetic": "/ɪnˈfleɪʃn/",
    "pos": "n.",
    "meaning": "通货膨胀， 物价上涨",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "in-（向内） + flat-（吹气） + -ion（名词后缀） -> 通货膨胀，物价上涨。"
  },
  {
    "word": "interest",
    "phonetic": "/ˈɪntrəst/",
    "pos": "n./vt.",
    "meaning": "n. 利息，利率；利益，权益，股权；兴趣 vt. 引起…的兴趣",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "inter-（在两者之间） + est（存在） -> 彼此切身利益息息相关之事 -> 兴趣，爱好。"
  },
  {
    "word": "investor",
    "phonetic": "/ɪnˈvestə(r)/",
    "pos": "n.",
    "meaning": "投资者， 出资人",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "invest（投资） + -or（人） -> 投资者，出资人。"
  },
  {
    "word": "invoice",
    "phonetic": "/ˈɪnvɔɪs/",
    "pos": "n./vt.",
    "meaning": "发票， 货单 vt. 开票",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "本义指“寄送出的物品” -> 发票，货单。"
  },
  {
    "word": "lease",
    "phonetic": "/liːs/",
    "pos": "n./vt.",
    "meaning": "租约 vt. 出租， 租得",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "本义指“放手” -> 租约，vt.。"
  },
  {
    "word": "lend",
    "phonetic": "/lend/",
    "pos": "vt.",
    "meaning": "借出， 把…借给",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "源自词根核心本义 -> 借出，把…借给。"
  },
  {
    "word": "liability",
    "phonetic": "/ˌlaɪəˈbɪləti/",
    "pos": "n.",
    "meaning": "负债； 责任， 义务",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "liable（有责任的） + -ity（名词后缀） -> 负债。"
  },
  {
    "word": "loss",
    "phonetic": "/lɒs/",
    "pos": "n.",
    "meaning": "亏损； 丧失， 损失",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "本义指“消散” -> 亏损。"
  },
  {
    "word": "management",
    "phonetic": "/ˈmænɪdʒmənt/",
    "pos": "n.",
    "meaning": "管理， 经营； 管理部门",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "manage（掌控） + -ment（名词后缀） -> 管理，经营。"
  },
  {
    "word": "manager",
    "phonetic": "/ˈmænɪdʒə(r)/",
    "pos": "n.",
    "meaning": "经理， 管理人",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "manage（管理） + -er（人） -> 经理，管理人。"
  },
  {
    "word": "market",
    "phonetic": "/ˈmɑːkɪt/",
    "pos": "n./vt.",
    "meaning": "市场； 行情 vt. 推销",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "词根 mercatus（贸易集市） -> 市场。"
  },
  {
    "word": "millionaire",
    "phonetic": "/ˌmɪljəˈneə(r)/",
    "pos": "n.",
    "meaning": "百万富翁， 大富豪",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "million（百万） + -aire（人） -> 百万富翁，大富豪。"
  },
  {
    "word": "monetary",
    "phonetic": "/ˈmʌnɪtri/",
    "pos": "adj.",
    "meaning": "货币的， 金融的",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "词根 moneta（造币厂/钱币） + -ary（形容词后缀） -> 货币的，金融的。"
  },
  {
    "word": "monopoly",
    "phonetic": "/məˈnɒpəli/",
    "pos": "n.",
    "meaning": "垄断， 独占",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "mono-（单一） + poly（买卖） -> 垄断，独占。"
  },
  {
    "word": "package",
    "phonetic": "/ˈpækɪdʒ/",
    "pos": "n./vt.",
    "meaning": "包裹； 一揽子方案 vt. 包装",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "pack（包裹） + -age（名词） -> 包裹。"
  },
  {
    "word": "payment",
    "phonetic": "/ˈpeɪmənt/",
    "pos": "n.",
    "meaning": "支付， 付款； 款项",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "pay（支付） + -ment（名词后缀） -> 支付，付款。"
  },
  {
    "word": "penny",
    "phonetic": "/ˈpeni/",
    "pos": "n.",
    "meaning": "便士； 微小的钱",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "源自词根核心本义 -> 便士。"
  },
  {
    "word": "policy",
    "phonetic": "/ˈpɒləsi/",
    "pos": "n.",
    "meaning": "政策， 方针； 保险单",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "源自希腊语 politeia（城邦宪政） -> 政策，方针。"
  },
  {
    "word": "poverty",
    "phonetic": "/ˈpɒvəti/",
    "pos": "n.",
    "meaning": "贫困， 贫穷； 缺乏",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "pover-（贫穷匮乏） + -ty（名词后缀） -> 贫困，贫穷。"
  },
  {
    "word": "price",
    "phonetic": "/praɪs/",
    "pos": "n./vt.",
    "meaning": "价格， 代价 vt. 定价",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "本义指“价值” -> 价格，代价。"
  },
  {
    "word": "profit",
    "phonetic": "/ˈprɒfɪt/",
    "pos": "n./v.",
    "meaning": "利润， 收益 v. 获利",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "pro-（向前） + fit（做成产出） -> 利润，收益。"
  },
  {
    "word": "profitable",
    "phonetic": "/ˈprɒfɪtəbl/",
    "pos": "adj.",
    "meaning": "有利润的， 有利可图的",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "profit（利润） + -able（能…的） -> 有利润的，有利可图的。"
  },
  {
    "word": "rate",
    "phonetic": "/reɪt/",
    "pos": "n./vt.",
    "meaning": "比率，率；速度；价格，费率；评估，评价",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "rat-（估算/计算） -> 经过精确核算得出的指标水平 -> 比率，率。"
  },
  {
    "word": "recession",
    "phonetic": "/rɪˈseʃn/",
    "pos": "n.",
    "meaning": "经济衰退， 不景气",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "re-（向后） + cess-（迈步走） + -ion，引申指经济衰退 -> 经济衰退，不景气。"
  },
  {
    "word": "refund",
    "phonetic": "/ˈriːfʌnd/",
    "pos": "n./vt.",
    "meaning": "退款 vt. 退还",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "re-（回） + fund（资金） -> 退款，vt.。"
  },
  {
    "word": "sale",
    "phonetic": "/seɪl/",
    "pos": "n.",
    "meaning": "销售， 卖； 削价出售",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "源自词根核心本义 -> 销售，卖。"
  },
  {
    "word": "saving",
    "phonetic": "/ˈseɪvɪŋ/",
    "pos": "n.",
    "meaning": "储蓄， 存款； 节省",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "save（节省） + -ing + -s，引申指储蓄 -> 储蓄，存款。"
  },
  {
    "word": "share",
    "phonetic": "/ʃeə(r)/",
    "pos": "n./v.",
    "meaning": "分享，分担；份额；股份，股票",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "与 shear（剪切）同源 -> 剪切划分出来的归属份额 -> 分享，分担。"
  },
  {
    "word": "tariff",
    "phonetic": "/ˈtærɪf/",
    "pos": "n.",
    "meaning": "关税； 价目表",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "源自阿拉伯语 ta'rif（通告） -> 关税。"
  },
  {
    "word": "tax",
    "phonetic": "/tæks/",
    "pos": "n./vt.",
    "meaning": "税款， 税 vt. 征税",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "本义指“估税” -> 税款，税。"
  },
  {
    "word": "advertisement",
    "phonetic": "/ədˈvɜːtɪsmənt/",
    "pos": "n.",
    "meaning": "广告， 启事",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "advertise（做宣传做广告） + -ment（名词后缀） -> 广告，启事。"
  },
  {
    "word": "benchmark",
    "phonetic": "/ˈbentʃmɑːk/",
    "pos": "n./vt.",
    "meaning": "基准， 衡量标准 vt. 参照",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "bench（工匠长凳） + mark（刻度标记） -> 基准，衡量标准。"
  },
  {
    "word": "beneficiary",
    "phonetic": "/ˌbenɪˈfɪʃəri/",
    "pos": "n.",
    "meaning": "受益人， 受惠者",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "bene-（善） + fic-（做） + -i- + -ary（人） -> 受益人，受惠者。"
  },
  {
    "word": "calculate",
    "phonetic": "/ˈkælkjuleɪt/",
    "pos": "vt./vi.",
    "meaning": "计算， 核算； 推测",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "calculus（小卵石） + -ate（动词后缀） -> 计算，核算。"
  },
  {
    "word": "banknote",
    "phonetic": "/ˈbæŋknəʊt/",
    "pos": "n.",
    "meaning": "钞票， 纸币",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "bank（银行） + note（字条） -> 钞票，纸币。"
  },
  {
    "word": "brokerage",
    "phonetic": "/ˈbrəʊkərɪdʒ/",
    "pos": "n.",
    "meaning": "经纪业务； 佣金， 回扣",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "broker（经纪人） + -age（佣金费用） -> 经纪业务。"
  },
  {
    "word": "capitalism",
    "phonetic": "/ˈkæpɪtəlɪzəm/",
    "pos": "n.",
    "meaning": "资本主义",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "capital（资本） + -ism（主义） -> 资本主义。"
  },
  {
    "word": "compensation",
    "phonetic": "/ˌkɒmpenˈseɪʃn/",
    "pos": "n.",
    "meaning": "补偿； 报酬， 薪酬",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "compensate（补偿） + -ion（名词后缀） -> 补偿。"
  },
  {
    "word": "concession",
    "phonetic": "/kənˈseʃn/",
    "pos": "n.",
    "meaning": "让步； 特许权",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "con-（共同） + cess-（退让） + -ion，引申指让步 -> 让步。"
  },
  {
    "word": "consumerism",
    "phonetic": "/kənˈsjuːmərɪzəm/",
    "pos": "n.",
    "meaning": "消费主义； 消费者权益保护",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "consumer（消费者） + -ism（主义） -> 消费主义。"
  },
  {
    "word": "convertible",
    "phonetic": "/kənˈvɜːtəbl/",
    "pos": "adj./n.",
    "meaning": "可转换的 n. 敞篷车",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "convert（转变） + -ible（可…的） -> 可转换的，n.。"
  },
  {
    "word": "custodian",
    "phonetic": "/kʌˈstəʊdiən/",
    "pos": "n.",
    "meaning": "保管人， 托管机构",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "custod-（守护者） + -ian（专业人员） -> 保管人，托管机构。"
  },
  {
    "word": "depreciation",
    "phonetic": "/dɪˌpriːʃiˈeɪʃn/",
    "pos": "n.",
    "meaning": "折旧； 贬值",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "de-（向下） + preci-（价格） + -ation（名词后缀） -> 折旧。"
  },
  {
    "word": "diversification",
    "phonetic": "/daɪˌvɜːsɪfɪˈkeɪʃn/",
    "pos": "n.",
    "meaning": "多样化， 多元化经营",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "diverse（多元化多样的） + -i- + fic-（做） + -ation，引申指多样化 -> 多样化，多元化经营。"
  },
  {
    "word": "dividend",
    "phonetic": "/ˈdɪvɪdend/",
    "pos": "n.",
    "meaning": "红利， 股息； 回报",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "divid-（分开） + -end（应分得之物） -> 红利，股息。"
  },
  {
    "word": "downsize",
    "phonetic": "/ˈdaʊnsaɪz/",
    "pos": "v.",
    "meaning": "缩小规模； 裁员",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "down（向下缩小） + size（规模规制） -> 缩小规模。"
  },
  {
    "word": "downturn",
    "phonetic": "/ˈdaʊntɜːn/",
    "pos": "n.",
    "meaning": "衰退， 低迷， 下降趋势",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "down（向下） + turn（转弯转折） -> 衰退，低迷。"
  },
  {
    "word": "endorsement",
    "phonetic": "/ɪnˈdɔːsmənt/",
    "pos": "n.",
    "meaning": "背书； 赞同， 支持",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "en-（置于上） + dorse（背部） + -ment，引申为体育巨星代言产品公开支持背 -> 背书。"
  },
  {
    "word": "entitlement",
    "phonetic": "/ɪnˈtaɪtlmənt/",
    "pos": "n.",
    "meaning": "应得权益， 权利； 津贴",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "en-（赋予） + title（头衔） + -ment，引申指应得权益 -> 应得权益，权利。"
  },
  {
    "word": "equities",
    "phonetic": "/ˈekwətiz/",
    "pos": "n.",
    "meaning": "股票， 股本（复数）",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "词根 equity（股本权益） -> 的复数形态 -> 股票，股本（复数）。"
  },
  {
    "word": "exemption",
    "phonetic": "/ɪɡˈzempʃn/",
    "pos": "n.",
    "meaning": "免除， 豁免； 免税额",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "ex-（出） + empt-（购买） + -ion，引申指免除 -> 免除，豁免。"
  },
  {
    "word": "analysis",
    "phonetic": "/əˈnæləsɪs/",
    "pos": "n.",
    "meaning": "分析， 解析； 分解",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "ana-（向上） + lysis（分解） -> 分析，解析。"
  },
  {
    "word": "apparatus",
    "phonetic": "/ˌæpəˈreɪtəs/",
    "pos": "n.",
    "meaning": "仪器， 器械； 机构",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "ap-（ad- 朝向） + parat-（准备） + -us，引申指仪器 -> 仪器，器械。"
  },
  {
    "word": "category",
    "phonetic": "/ˈkætəɡəri/",
    "pos": "n.",
    "meaning": "类别， 范畴， 门类",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "cata-（向下） + agor-（集会宣告） + -y，引申指类别 -> 类别，范畴。"
  },
  {
    "word": "classroom",
    "phonetic": "/ˈklɑːsruːm/",
    "pos": "n.",
    "meaning": "教室， 课堂",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "class（班级） + room（房间） -> 教室，课堂。"
  },
  {
    "word": "college",
    "phonetic": "/ˈkɒlɪdʒ/",
    "pos": "n.",
    "meaning": "学院； 大学",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "col-（com- 共） + leg-（委派） -> 学院。"
  },
  {
    "word": "conference",
    "phonetic": "/ˈkɒnfərəns/",
    "pos": "n.",
    "meaning": "国际会议； 研讨会",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "con-（共同） + fer-（带来） + -ence，引申指国际会议 -> 国际会议。"
  },
  {
    "word": "database",
    "phonetic": "/ˈdeɪtəbeɪs/",
    "pos": "n.",
    "meaning": "数据库",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "data（数据资料） + base（基础基地） -> 数据库。"
  },
  {
    "word": "dormitory",
    "phonetic": "/ˈdɔːmətri/",
    "pos": "n.",
    "meaning": "学生宿舍",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "dorm-（睡觉） + -itory（场所后缀） -> 学生宿舍。"
  },
  {
    "word": "edition",
    "phonetic": "/ɪˈdɪʃn/",
    "pos": "n.",
    "meaning": "版次， 版本",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "e-（出） + dit-（交付） + -ion，引申指版次 -> 版次，版本。"
  },
  {
    "word": "educate",
    "phonetic": "/ˈedʒukeɪt/",
    "pos": "vt.",
    "meaning": "教育， 培养， 训练",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "e-（出） + duc-（引导） + -ate，引申指教育 -> 教育，培养。"
  },
  {
    "word": "education",
    "phonetic": "/ˌedʒuˈkeɪʃn/",
    "pos": "n.",
    "meaning": "教育， 培养",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "educate（引导启发） + -ion（名词后缀） -> 教育，培养。"
  },
  {
    "word": "educational",
    "phonetic": "/ˌedʒuˈkeɪʃənl/",
    "pos": "adj.",
    "meaning": "教育的； 有教育意义的",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "education（教育） + -al（形容词后缀） -> 教育的。"
  },
  {
    "word": "educator",
    "phonetic": "/ˈedʒukeɪtə(r)/",
    "pos": "n.",
    "meaning": "教育家， 教育工作者",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "educate（教育） + -or（人） -> 教育家，教育工作者。"
  },
  {
    "word": "elementary",
    "phonetic": "/ˌelɪˈmentri/",
    "pos": "adj.",
    "meaning": "初等的， 基础的； 小学的",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "element（元素） + -ary（形容词后缀） -> 初等的，基础的。"
  },
  {
    "word": "empirical",
    "phonetic": "/ɪmˈpɪrɪkl/",
    "pos": "adj.",
    "meaning": "实证的， 凭经验的",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "en-（在内） + peir-（尝试） + -ical，引申指实证的 -> 实证的，凭经验的。"
  },
  {
    "word": "evaluation",
    "phonetic": "/ɪˌvæljuˈeɪʃn/",
    "pos": "n.",
    "meaning": "评估， 评价",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "e-（出） + val-（价值） + -uation，引申指评估 -> 评估，评价。"
  },
  {
    "word": "exam",
    "phonetic": "/ɪɡˈzæm/",
    "pos": "n.",
    "meaning": "考试， 测验",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "由 examination（审查）截头简缩而来 -> 课堂上检验学子对等 -> 考试，测验。"
  },
  {
    "word": "examine",
    "phonetic": "/ɪɡˈzæmɪn/",
    "pos": "vt.",
    "meaning": "检查； 考试， 测验",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "源自拉丁动词 examinare（用天平指针称） -> 检查。"
  },
  {
    "word": "experiment",
    "phonetic": "/ɪkˈsperɪmənt/",
    "pos": "n./vi.",
    "meaning": "实验， 试验 vi. 做实验",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "ex-（出） + peri-（尝试） + -ment，引申指实验 -> 实验，试验。"
  },
  {
    "word": "experimental",
    "phonetic": "/ɪkˌsperɪˈmentl/",
    "pos": "adj.",
    "meaning": "实验性的， 试验的",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "experiment（实验） + -al（形容词后缀） -> 实验性的，试验的。"
  },
  {
    "word": "guidance",
    "phonetic": "/ˈɡaɪdns/",
    "pos": "n.",
    "meaning": "指导， 引导； 领导",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "guide（领路人） + -ance（名词后缀） -> 指导，引导。"
  },
  {
    "word": "humanities",
    "phonetic": "/hjuːˈmænətiz/",
    "pos": "n.",
    "meaning": "人文学科",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "human-（人类） + -ity + -ies（复数） -> 人文学科。"
  },
  {
    "word": "hypothesis",
    "phonetic": "/haɪˈpɒθəsɪs/",
    "pos": "n.",
    "meaning": "假说， 假设； 前提",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "hypo-（在下方） + thesis（立论） -> 假说，假设。"
  },
  {
    "word": "lecturer",
    "phonetic": "/ˈlektʃərə(r)/",
    "pos": "n.",
    "meaning": "讲师， 大学教师",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "lecture（讲课） + -er（人） -> 讲师，大学教师。"
  },
  {
    "word": "lesson",
    "phonetic": "/ˈlesn/",
    "pos": "n.",
    "meaning": "课程； 教训",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "本义çon（朗读） -> 课程。"
  },
  {
    "word": "library",
    "phonetic": "/ˈlaɪbrəri/",
    "pos": "n.",
    "meaning": "图书馆， 藏书室",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "libr-（书籍） + -ary（场所后缀） -> 图书馆，藏书室。"
  },
  {
    "word": "literary",
    "phonetic": "/ˈlɪtrəri/",
    "pos": "adj.",
    "meaning": "文学的， 文学上的",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "liter-（文字） + -ary（形容词后缀） -> 文学的，文学上的。"
  },
  {
    "word": "method",
    "phonetic": "/ˈmeθəd/",
    "pos": "n.",
    "meaning": "方法， 办法",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "meta-（沿着） + hodos（道路） -> 方法，办法。"
  },
  {
    "word": "methodology",
    "phonetic": "/ˌmeθəˈdɒlədʒi/",
    "pos": "n.",
    "meaning": "方法论， 系统方法",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "method（方法） + -o- + -logy（学科） -> 方法论，系统方法。"
  },
  {
    "word": "paradigm",
    "phonetic": "/ˈpærədaɪm/",
    "pos": "n.",
    "meaning": "范式， 典范； 理论体系",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "para-（在旁） + deigma（展示范例） -> 范式，典范。"
  },
  {
    "word": "philosophy",
    "phonetic": "/fəˈlɒsəfi/",
    "pos": "n.",
    "meaning": "哲学； 人生哲学， 哲理",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "philo-（热爱） + sophy（智慧） -> 哲学。"
  },
  {
    "word": "presentation",
    "phonetic": "/ˌpreznˈteɪʃn/",
    "pos": "n.",
    "meaning": "展示， 陈述； 演讲； 赠送",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "present（呈现在人前） + -ation（名词后缀） -> 展示，陈述。"
  },
  {
    "word": "professor",
    "phonetic": "/prəˈfesə(r)/",
    "pos": "n.",
    "meaning": "教授",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "pro-（在公众面前） + fess-（坦承宣誓宣讲） + -or（人） -> 教授。"
  },
  {
    "word": "pupil",
    "phonetic": "/ˈpjuːpl/",
    "pos": "n.",
    "meaning": "小学生， 学生； 瞳孔",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "词根 pupilla（小女孩） -> 小学生，学生。"
  },
  {
    "word": "quiz",
    "phonetic": "/kwɪz/",
    "pos": "n./vt.",
    "meaning": "小测验， 知识竞赛 vt. 盘问",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "源自十八世纪都柏林剧院俚语（传说剧场经理） -> 小测验，知识竞赛。"
  },
  {
    "word": "student",
    "phonetic": "/ˈstjuːdnt/",
    "pos": "n.",
    "meaning": "学生",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "stud-（热切专注） + -ent（人） -> 学生，学者。"
  },
  {
    "word": "study",
    "phonetic": "/ˈstʌdi/",
    "pos": "n./v.",
    "meaning": "学习； 研究； 书房 v. 学习",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "源自拉丁动词 studere（热切追求） -> 学习。"
  },
  {
    "word": "syllabus",
    "phonetic": "/ˈsɪləbəs/",
    "pos": "n.",
    "meaning": "教学大纲， 课程大纲",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "源自希腊语 -> 教学大纲，课程大纲。"
  },
  {
    "word": "symposium",
    "phonetic": "/sɪmˈpəʊziəm/",
    "pos": "n.",
    "meaning": "专题研讨会， 座谈会",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "syn-（共同） + pos-（饮酒） + -ium（场所） -> 专题研讨会，座谈会。"
  },
  {
    "word": "teach",
    "phonetic": "/tiːtʃ/",
    "pos": "v.",
    "meaning": "教， 讲授； 教导",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "源自词根核心本义 -> 教，讲授。"
  },
  {
    "word": "teacher",
    "phonetic": "/ˈtiːtʃə(r)/",
    "pos": "n.",
    "meaning": "教师， 老师",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "teach（指引） + -er（人） -> 教师，老师。"
  },
  {
    "word": "teaching",
    "phonetic": "/ˈtiːtʃɪŋ/",
    "pos": "n.",
    "meaning": "教学； 教义， 教导",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "teach（教导） + -ing（名词） -> 教学。"
  },
  {
    "word": "theory",
    "phonetic": "/ˈθɪəri/",
    "pos": "n.",
    "meaning": "理论， 学说； 原理",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "the-（看） + -ory，引申指理论 -> 理论，学说。"
  },
  {
    "word": "thesis",
    "phonetic": "/ˈθiːsɪs/",
    "pos": "n.",
    "meaning": "学位论文； 论点， 论题",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "源自希腊语 thesis（摆放） -> 学位论文。"
  },
  {
    "word": "tutor",
    "phonetic": "/ˈtjuːtə(r)/",
    "pos": "n./vt.",
    "meaning": "导师， 家庭教师 vt. 辅导",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "tut-（看护） + -or（人） -> 导师，家庭教师。"
  },
  {
    "word": "university",
    "phonetic": "/ˌjuːnɪˈvɜːsəti/",
    "pos": "n.",
    "meaning": "大学， 综合性大学",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "uni-（合一） + vers-（旋转） + -ity，引申指大学 -> 大学，综合性大学。"
  },
  {
    "word": "catalog",
    "phonetic": "/ˈkætəlɒɡ/",
    "pos": "n./vt.",
    "meaning": "目录， 全目 vt. 编目",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "cata-（彻底） + log-（挑选） -> 目录，全目。"
  },
  {
    "word": "clarify",
    "phonetic": "/ˈklærəfaɪ/",
    "pos": "vt.",
    "meaning": "澄清， 阐明； 使明晰",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "clar-（清晰） + -ify（使动后缀） -> 澄清，阐明。"
  },
  {
    "word": "compile",
    "phonetic": "/kəmˈpaɪl/",
    "pos": "vt.",
    "meaning": "汇编， 编纂； 编译（程序）",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "com-（共同） + pile（搜集堆叠） -> 汇编，编纂。"
  },
  {
    "word": "criteria",
    "phonetic": "/kraɪˈtɪəriə/",
    "pos": "n.",
    "meaning": "（评判的）标准， 准则（复数）",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "源自希腊语 kriterion（衡量标准）之复数形式（单数为 cr） -> （评判的）标准，准则（复数）。"
  },
  {
    "word": "criterion",
    "phonetic": "/kraɪˈtɪəriən/",
    "pos": "n.",
    "meaning": "标准， 准则（单数）",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "crit-（判断） + -erion（工具标准） -> 标准，准则（单数）。"
  },
  {
    "word": "fellowship",
    "phonetic": "/ˈfeləʊʃɪp/",
    "pos": "n.",
    "meaning": "研究生奖学金； 学会会员资格",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "fellow（伙伴） + -ship，引申指研究生奖学金 -> 研究生奖学金。"
  },
  {
    "word": "vocational",
    "phonetic": "/vəʊˈkeɪʃənl/",
    "pos": "adj.",
    "meaning": "职业的， 业务技能的",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "vocation（天职） + -al（形容词后缀） -> 职业的，业务技能的。"
  },
  {
    "word": "transcript",
    "phonetic": "/ˈtrænskrɪpt/",
    "pos": "n.",
    "meaning": "成绩单； 文字记录稿",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "trans-（跨越） + script（书写文字） -> 成绩单。"
  },
  {
    "word": "accessible",
    "phonetic": "/əkˈsesəbl/",
    "pos": "adj.",
    "meaning": "易接近的， 可使用的",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "ac-（ad- 朝向） + cess-（走入迈步） + -ible（能…的） -> 易接近的，可使用的。"
  },
  {
    "word": "adaptation",
    "phonetic": "/ˌædæpˈteɪʃn/",
    "pos": "n.",
    "meaning": "适应； 改编本",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "adapt（适应） + -ation（名词后缀） -> 适应。"
  },
  {
    "word": "administrator",
    "phonetic": "/ədˈmɪnɪstreɪtə(r)/",
    "pos": "n.",
    "meaning": "管理者， 行政官员",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "administer（管理） + -ator（人员） -> 管理者，行政官员。"
  },
  {
    "word": "ambiguity",
    "phonetic": "/ˌæmbɪˈɡjuːəti/",
    "pos": "n.",
    "meaning": "模棱两可， 含糊",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "ambi-（四周） + ig-（驱动） + -uity，引申指模棱两可 -> 模棱两可，含糊。"
  },
  {
    "word": "articulation",
    "phonetic": "/ɑːˌtɪkjuˈleɪʃn/",
    "pos": "n.",
    "meaning": "清晰表达； 发音",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "articulate（清晰发音） + -ion（名词后缀） -> 清晰表达。"
  },
  {
    "word": "assertion",
    "phonetic": "/əˈsɜːʃn/",
    "pos": "n.",
    "meaning": "断言， 主张",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "assert（坚决主张） + -ion（名词后缀） -> 断言，主张。"
  },
  {
    "word": "bibliography",
    "phonetic": "/ˌbɪbliˈɒɡrəfi/",
    "pos": "n.",
    "meaning": "文献目录， 参考书目",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "biblio-（书籍） + graphy（编写） -> 文献目录，参考书目。"
  },
  {
    "word": "breakthrough",
    "phonetic": "/ˈbreɪkθruː/",
    "pos": "n.",
    "meaning": "重大突破",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "break（打破） + through（穿过） -> 重大突破。"
  },
  {
    "word": "categorize",
    "phonetic": "/ˈkætəɡəraɪz/",
    "pos": "vt.",
    "meaning": "分类， 归类",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "category（类别） + -ize（使动后缀） -> 分类，归类。"
  },
  {
    "word": "certification",
    "phonetic": "/ˌsɜːtɪfɪˈkeɪʃn/",
    "pos": "n.",
    "meaning": "证明， 鉴定； 资格证书",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "certify（证明确信） + -ication（名词后缀） -> 证明，鉴定。"
  },
  {
    "word": "citation",
    "phonetic": "/saɪˈteɪʃn/",
    "pos": "n.",
    "meaning": "引用， 引文； 传票",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "cite（引用） + -ation（名词后缀） -> 引用，引文。"
  },
  {
    "word": "clarification",
    "phonetic": "/ˌklærəfɪˈkeɪʃn/",
    "pos": "n.",
    "meaning": "澄清， 阐明",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "clarify（澄清） + -ication（名词后缀） -> 澄清，阐明。"
  },
  {
    "word": "coherence",
    "phonetic": "/kəʊˈhɪərəns/",
    "pos": "n.",
    "meaning": "连贯性， 条理性",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "co-（共同） + her-（黏附） + -ence，引申指连贯性 -> 连贯性，条理性。"
  },
  {
    "word": "compilation",
    "phonetic": "/ˌkɒmpɪˈleɪʃn/",
    "pos": "n.",
    "meaning": "汇编， 编纂",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "compile（汇编） + -ation（名词后缀） -> 汇编，编纂。"
  },
  {
    "word": "complexity",
    "phonetic": "/kəmˈpleksəti/",
    "pos": "n.",
    "meaning": "复杂性， 错综复杂",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "complex（错综复杂的） + -ity（名词后缀） -> 复杂性，错综复杂。"
  },
  {
    "word": "computation",
    "phonetic": "/ˌkɒmpjuˈteɪʃn/",
    "pos": "n.",
    "meaning": "计算， 估算",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "compute（计算） + -ation（名词后缀） -> 计算，估算。"
  },
  {
    "word": "qualitative",
    "phonetic": "/ˈkwɒlɪtətɪv/",
    "pos": "adj.",
    "meaning": "定性的， 性质上的， 质的",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "quality（品质） + -ative（形容词后缀） -> 定性的，性质上的。"
  },
  {
    "word": "quantitative",
    "phonetic": "/ˈkwɒntɪtətɪv/",
    "pos": "adj.",
    "meaning": "定量的， 数量上的， 数量的",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "quantity（数量） + -ative（形容词后缀） -> 定量的，数量上的。"
  },
  {
    "word": "questionnaire",
    "phonetic": "/ˌkwestʃəˈneə(r)/",
    "pos": "n.",
    "meaning": "调查问卷， 调查表",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "question（提问） + -naire（集合文书） -> 调查问卷，调查表。"
  },
  {
    "word": "agricultural",
    "phonetic": "/ˌæɡrɪˈkʌltʃərəl/",
    "pos": "adj.",
    "meaning": "农业的， 农艺的",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然地理、动植物与环境保护】",
    "analysis_type": "构词",
    "analysis": "agriculture（农业） + -al（形容词后缀） -> 农业的，农艺的。"
  },
  {
    "word": "atmospheric",
    "phonetic": "/ˌætməsˈferɪk/",
    "pos": "adj.",
    "meaning": "大气的； 大气层的； 有氛围的",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然地理、动植物与环境保护】",
    "analysis_type": "构词",
    "analysis": "atmosphere（大气层） + -ic（形容词后缀） -> 大气的。"
  },
  {
    "word": "avalanche",
    "phonetic": "/ˈævəlɑːnʃ/",
    "pos": "n./v.",
    "meaning": "雪崩； 大量涌来 v. 雪崩",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然地理、动植物与环境保护】",
    "analysis_type": "构词",
    "analysis": "源自阿尔卑斯山法罗曼语 avalantse（向下崩落） -> 雪崩。"
  },
  {
    "word": "biodiversity",
    "phonetic": "/ˌbaɪəʊdaɪˈvɜːsəti/",
    "pos": "n.",
    "meaning": "生物多样性",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然地理、动植物与环境保护】",
    "analysis_type": "构词",
    "analysis": "bio-（生物） + diversity（多样性） -> 生物多样性。"
  },
  {
    "word": "biologist",
    "phonetic": "/baɪˈɒlədʒɪst/",
    "pos": "n.",
    "meaning": "生物学家",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然地理、动植物与环境保护】",
    "analysis_type": "构词",
    "analysis": "biology（生物学） + -ist（学者） -> 生物学家。"
  },
  {
    "word": "blizzard",
    "phonetic": "/ˈblɪzəd/",
    "pos": "n.",
    "meaning": "暴风雪， 大风雪",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然地理、动植物与环境保护】",
    "analysis_type": "构词",
    "analysis": "源自美式英语拟声/口语（原指猛击） -> 暴风雪，大风雪。"
  },
  {
    "word": "botanical",
    "phonetic": "/bəˈtænɪkl/",
    "pos": "adj.",
    "meaning": "植物学的； 植物的",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然地理、动植物与环境保护】",
    "analysis_type": "构词",
    "analysis": "botany（植物学） + -ical（形容词后缀） -> 植物学的。"
  },
  {
    "word": "botany",
    "phonetic": "/ˈbɒtəni/",
    "pos": "n.",
    "meaning": "植物学",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然地理、动植物与环境保护】",
    "analysis_type": "构词",
    "analysis": "源自希腊语 botane（牧草） -> 植物学。"
  },
  {
    "word": "canyon",
    "phonetic": "/ˈkænjən/",
    "pos": "n.",
    "meaning": "峡谷",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然地理、动植物与环境保护】",
    "analysis_type": "构词",
    "analysis": "源自西班牙语 cañón（管子） -> 峡谷。"
  },
  {
    "word": "carbon",
    "phonetic": "/ˈkɑːbən/",
    "pos": "n.",
    "meaning": "碳； 碳排放",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然地理、动植物与环境保护】",
    "analysis_type": "构词",
    "analysis": "词根 carbo（木炭） -> 碳。"
  },
  {
    "word": "climatic",
    "phonetic": "/klaɪˈmætɪk/",
    "pos": "adj.",
    "meaning": "气候的； 气候上的",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然地理、动植物与环境保护】",
    "analysis_type": "构词",
    "analysis": "climate（气候） + -ic（形容词后缀） -> 气候的。"
  },
  {
    "word": "cloud",
    "phonetic": "/klaʊd/",
    "pos": "n./v.",
    "meaning": "云， 云彩； 使阴暗",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然地理、动植物与环境保护】",
    "analysis_type": "构词",
    "analysis": "源自词根核心本义 -> 云，云彩。"
  },
  {
    "word": "cloudy",
    "phonetic": "/ˈklaʊdi/",
    "pos": "adj.",
    "meaning": "多云的， 阴天的； 混浊的",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然地理、动植物与环境保护】",
    "analysis_type": "构词",
    "analysis": "cloud（云彩） + -y（形容词后缀） -> 多云的，阴天的。"
  },
  {
    "word": "coastal",
    "phonetic": "/ˈkəʊstl/",
    "pos": "adj.",
    "meaning": "沿海的， 海岸的",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然地理、动植物与环境保护】",
    "analysis_type": "构词",
    "analysis": "coast（海岸线） + -al（形容词后缀） -> 沿海的，海岸的。"
  },
  {
    "word": "conservation",
    "phonetic": "/ˌkɒnsəˈveɪʃn/",
    "pos": "n.",
    "meaning": "保存， 保护； 守恒",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然地理、动植物与环境保护】",
    "analysis_type": "构词",
    "analysis": "conserve（保存） + -ation（名词后缀） -> 保存，保护。"
  },
  {
    "word": "continent",
    "phonetic": "/ˈkɒntɪnənt/",
    "pos": "n.",
    "meaning": "大陆， 洲； 大洋洲",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然地理、动植物与环境保护】",
    "analysis_type": "构词",
    "analysis": "con-（共同） + tin-（握住） -> 大陆，洲。"
  },
  {
    "word": "crop",
    "phonetic": "/krɒp/",
    "pos": "n./vt.",
    "meaning": "农作物， 庄稼； 收成 vt. 收割",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然地理、动植物与环境保护】",
    "analysis_type": "构词",
    "analysis": "源自词根核心本义 -> 农作物，庄稼。"
  },
  {
    "word": "cyclone",
    "phonetic": "/ˈsaɪkləʊn/",
    "pos": "n.",
    "meaning": "气旋； 热带风暴， 龙卷风",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然地理、动植物与环境保护】",
    "analysis_type": "构词",
    "analysis": "源自希腊语 kyklon（盘旋卷动者） -> 气旋。"
  },
  {
    "word": "delta",
    "phonetic": "/ˈdeltə/",
    "pos": "n.",
    "meaning": "（河流）三角洲； 希腊字母第四个",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然地理、动植物与环境保护】",
    "analysis_type": "构词",
    "analysis": "源自希腊字母大写第四个字母 Delta（Δ） -> （河流）三角洲。"
  },
  {
    "word": "desert",
    "phonetic": "/ˈdezət/",
    "pos": "n./vt.",
    "meaning": "vt. 抛弃，遗弃；离弃，开小差 n. 沙漠，荒原 adj. 荒无人烟的",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然地理、动植物与环境保护】",
    "analysis_type": "构词",
    "analysis": "源自晚期词根 desertum（被遗弃废弃的） -> 沙漠，vt.。"
  },
  {
    "word": "drainage",
    "phonetic": "/ˈdreɪnɪdʒ/",
    "pos": "n.",
    "meaning": "排水， 排污系统； 下水道",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然地理、动植物与环境保护】",
    "analysis_type": "构词",
    "analysis": "drain（排泄液体） + -age（名词后缀） -> 排水，排污系统。"
  },
  {
    "word": "drought",
    "phonetic": "/draʊt/",
    "pos": "n.",
    "meaning": "干旱， 旱灾； 干涸",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然地理、动植物与环境保护】",
    "analysis_type": "构词",
    "analysis": "本义指“干燥干瘪” -> 干旱，旱灾。"
  },
  {
    "word": "ecology",
    "phonetic": "/iˈkɒlədʒi/",
    "pos": "n.",
    "meaning": "生态学； 生态， 生态系统",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然地理、动植物与环境保护】",
    "analysis_type": "构词",
    "analysis": "eco-（家园） + -logy（学科） -> 生态学。"
  },
  {
    "word": "erosion",
    "phonetic": "/ɪˈrəʊʒn/",
    "pos": "n.",
    "meaning": "侵蚀， 腐蚀； 削弱",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然地理、动植物与环境保护】",
    "analysis_type": "构词",
    "analysis": "e-（出） + ros-（啃咬侵蚀） + -ion，引申指侵蚀 -> 侵蚀，腐蚀。"
  },
  {
    "word": "eruption",
    "phonetic": "/ɪˈrʌpʃn/",
    "pos": "n.",
    "meaning": "（火山）喷发； 爆发",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然地理、动植物与环境保护】",
    "analysis_type": "构词",
    "analysis": "e-（向外） + rupt-（破裂迸发） + -ion，引申指（火山） -> （火山）喷发。"
  },
  {
    "word": "famine",
    "phonetic": "/ˈfæmɪn/",
    "pos": "n.",
    "meaning": "饥荒， 饥饿",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然地理、动植物与环境保护】",
    "analysis_type": "构词",
    "analysis": "fam-（饥饿饥馑） + -ine（名词后缀） -> 饥荒，饥饿。"
  },
  {
    "word": "forest",
    "phonetic": "/ˈfɒrɪst/",
    "pos": "n./vt.",
    "meaning": "森林， 林区 vt. 植树于",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然地理、动植物与环境保护】",
    "analysis_type": "构词",
    "analysis": "源自晚期拉丁语 forestis silva（王室设立在城） -> 森林，林区。"
  },
  {
    "word": "forestry",
    "phonetic": "/ˈfɒrɪstri/",
    "pos": "n.",
    "meaning": "林业， 林学",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然地理、动植物与环境保护】",
    "analysis_type": "构词",
    "analysis": "forest（森林） + -ry（行业） -> 林业，林学。"
  },
  {
    "word": "fossil",
    "phonetic": "/ˈfɒsl/",
    "pos": "n./adj.",
    "meaning": "化石； 化石燃料 adj. 化石的",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然地理、动植物与环境保护】",
    "analysis_type": "构词",
    "analysis": "源自拉丁动词 fodere 之过去分词 fossus（从泥土中挖掘出的等 -> 化石。"
  },
  {
    "word": "galaxy",
    "phonetic": "/ˈɡæləksi/",
    "pos": "n.",
    "meaning": "银河系， 星系； 群英",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然地理、动植物与环境保护】",
    "analysis_type": "构词",
    "analysis": "源自希腊语 galaxias（牛奶般的银白） -> 银河系，星系。"
  },
  {
    "word": "geography",
    "phonetic": "/dʒiˈɒɡrəfi/",
    "pos": "n.",
    "meaning": "地理学； 地形， 地貌",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然地理、动植物与环境保护】",
    "analysis_type": "构词",
    "analysis": "geo-（大地） + graphy（描绘记录） -> 地理学。"
  },
  {
    "word": "geology",
    "phonetic": "/dʒiˈɒlədʒi/",
    "pos": "n.",
    "meaning": "地质学； 地质情况",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然地理、动植物与环境保护】",
    "analysis_type": "构词",
    "analysis": "geo-（大地） + -logy（学科） -> 地质学。"
  },
  {
    "word": "glacier",
    "phonetic": "/ˈɡlæsiə(r)/",
    "pos": "n.",
    "meaning": "冰川， 冰河",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然地理、动植物与环境保护】",
    "analysis_type": "构词",
    "analysis": "glac-（冰块） + -ier（场所名词后缀） -> 冰川，冰河。"
  },
  {
    "word": "graze",
    "phonetic": "/ɡreɪz/",
    "pos": "v.",
    "meaning": "放牧， 吃草； 擦伤",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然地理、动植物与环境保护】",
    "analysis_type": "构词",
    "analysis": "源自词根核心本义 -> 放牧，吃草。"
  },
  {
    "word": "harvest",
    "phonetic": "/ˈhɑːvɪst/",
    "pos": "n./vt.",
    "meaning": "收获， 收成 vt. 收割",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然地理、动植物与环境保护】",
    "analysis_type": "构词",
    "analysis": "源自词根核心本义 -> 收获，收成。"
  },
  {
    "word": "haze",
    "phonetic": "/heɪz/",
    "pos": "n.",
    "meaning": "薄雾； 阴霾， 霾",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然地理、动植物与环境保护】",
    "analysis_type": "构词",
    "analysis": "源自未知海洋水手用语（可能与 ha） -> 薄雾。"
  },
  {
    "word": "humidity",
    "phonetic": "/hjuːˈmɪdəti/",
    "pos": "n.",
    "meaning": "湿度， 潮湿",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然地理、动植物与环境保护】",
    "analysis_type": "构词",
    "analysis": "humid（潮湿闷热的） + -ity（名词后缀） -> 湿度，潮湿。"
  },
  {
    "word": "hurricane",
    "phonetic": "/ˈhʌrɪkən/",
    "pos": "n.",
    "meaning": "飓风， 暴风雨",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然地理、动植物与环境保护】",
    "analysis_type": "构词",
    "analysis": "源自加勒比泰诺印第安语 juracán（加勒比海凶残） -> 飓风，暴风雨。"
  },
  {
    "word": "iceberg",
    "phonetic": "/ˈaɪsbɜːɡ/",
    "pos": "n.",
    "meaning": "冰山",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然地理、动植物与环境保护】",
    "analysis_type": "构词",
    "analysis": "ice（冰块） + berg（山脉） -> 冰山。"
  },
  {
    "word": "irrigate",
    "phonetic": "/ˈɪrɪɡeɪt/",
    "pos": "vt.",
    "meaning": "灌溉， 引水灌溉",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然地理、动植物与环境保护】",
    "analysis_type": "构词",
    "analysis": "in-（向内） + rig-（湿润灌溉） + -ate，引申指灌溉 -> 灌溉，引水灌溉。"
  },
  {
    "word": "irrigation",
    "phonetic": "/ˌɪrɪˈɡeɪʃn/",
    "pos": "n.",
    "meaning": "灌溉",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然地理、动植物与环境保护】",
    "analysis_type": "构词",
    "analysis": "irrigate（灌溉） + -ion（名词后缀） -> 灌溉。"
  },
  {
    "word": "lunar",
    "phonetic": "/ˈluːnə(r)/",
    "pos": "adj.",
    "meaning": "月亮的， 月球的",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然地理、动植物与环境保护】",
    "analysis_type": "构词",
    "analysis": "lun-（月亮） + -ar（形容词后缀） -> 月亮的，月球的。"
  },
  {
    "word": "meteorology",
    "phonetic": "/ˌmiːtiəˈrɒlədʒi/",
    "pos": "n.",
    "meaning": "气象学； 气象状态",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然地理、动植物与环境保护】",
    "analysis_type": "构词",
    "analysis": "meteor-（高悬于高空之） + -o- + -logy（学科） -> 气象学。"
  },
  {
    "word": "mineral",
    "phonetic": "/ˈmɪnərəl/",
    "pos": "n./adj.",
    "meaning": "矿物， 矿石 adj. 矿物的",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然地理、动植物与环境保护】",
    "analysis_type": "构词",
    "analysis": "miner-（开采矿藏） + -al（名词） -> 矿物，矿石。"
  },
  {
    "word": "moisture",
    "phonetic": "/ˈmɔɪstʃə(r)/",
    "pos": "n.",
    "meaning": "水分， 湿度， 潮气",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然地理、动植物与环境保护】",
    "analysis_type": "构词",
    "analysis": "moist（潮湿润泽的） + -ure（名词后缀） -> 水分，湿度。"
  },
  {
    "word": "mountainous",
    "phonetic": "/ˈmaʊntənəs/",
    "pos": "adj.",
    "meaning": "多山的， 山区的； 巨大的",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然地理、动植物与环境保护】",
    "analysis_type": "构词",
    "analysis": "mountain（崇山峻岭） + -ous（多…的） -> 多山的，山区的。"
  },
  {
    "word": "natural",
    "phonetic": "/ˈnætʃrəl/",
    "pos": "adj.",
    "meaning": "自然的， 天然的； 正常的",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然地理、动植物与环境保护】",
    "analysis_type": "构词",
    "analysis": "nature（大自然） + -al（形容词后缀） -> 自然的，天然的。"
  },
  {
    "word": "nature",
    "phonetic": "/ˈneɪtʃə(r)/",
    "pos": "n.",
    "meaning": "n. 本质，天性，根本特征；大自然，自然界",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然地理、动植物与环境保护】",
    "analysis_type": "构词",
    "analysis": "nat-（出生天生） + -ure -> 与生俱来的内在本质特质 -> 本质，本性。"
  },
  {
    "word": "ocean",
    "phonetic": "/ˈəʊʃn/",
    "pos": "n.",
    "meaning": "海洋， 大海； 洋",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然地理、动植物与环境保护】",
    "analysis_type": "构词",
    "analysis": "源自希腊神话环绕世界大陆奔流不息的泰坦大洋神俄刻阿诺斯（Okeanos等 -> 海洋，大海。"
  },
  {
    "word": "oceanic",
    "phonetic": "/ˌəʊʃiˈænɪk/",
    "pos": "adj.",
    "meaning": "海洋的， 大洋的",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然地理、动植物与环境保护】",
    "analysis_type": "构词",
    "analysis": "ocean（大洋） + -ic（形容词后缀） -> 海洋的，大洋的。"
  },
  {
    "word": "ozone",
    "phonetic": "/ˈəʊzəʊn/",
    "pos": "n.",
    "meaning": "臭氧",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然地理、动植物与环境保护】",
    "analysis_type": "构词",
    "analysis": "源自希腊语 ozein（散发刺鼻气味） -> 臭氧。"
  },
  {
    "word": "pasture",
    "phonetic": "/ˈpɑːstʃə(r)/",
    "pos": "n./v.",
    "meaning": "牧场， 草地 v. 放牧",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然地理、动植物与环境保护】",
    "analysis_type": "构词",
    "analysis": "past-（喂养） + -ure（场所后缀） -> 牧场，草地。"
  },
  {
    "word": "planet",
    "phonetic": "/ˈplænɪt/",
    "pos": "n.",
    "meaning": "行星",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然地理、动植物与环境保护】",
    "analysis_type": "构词",
    "analysis": "源自希腊语 planetes（流浪漫游者） -> 行星。"
  },
  {
    "word": "planetary",
    "phonetic": "/ˈplænətri/",
    "pos": "adj.",
    "meaning": "行星的； 全球的",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然地理、动植物与环境保护】",
    "analysis_type": "构词",
    "analysis": "planet（行星） + -ary（形容词后缀） -> 行星的。"
  },
  {
    "word": "pollutant",
    "phonetic": "/pəˈluːtənt/",
    "pos": "n.",
    "meaning": "污染物， 污染物质",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然地理、动植物与环境保护】",
    "analysis_type": "构词",
    "analysis": "pollute（污染环境） + -ant（物质） -> 污染物，污染物质。"
  },
  {
    "word": "predator",
    "phonetic": "/ˈpredətə(r)/",
    "pos": "n.",
    "meaning": "捕食性动物； 掠夺者",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然地理、动植物与环境保护】",
    "analysis_type": "构词",
    "analysis": "pred-（掠夺物） + -ator（人员） -> 捕食性动物。"
  },
  {
    "word": "recycle",
    "phonetic": "/ˌriːˈsaɪkl/",
    "pos": "vt./n.",
    "meaning": "回收利用， 再循环",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然地理、动植物与环境保护】",
    "analysis_type": "构词",
    "analysis": "re-（再次） + cycle（环行循环） -> 回收利用，再循环。"
  },
  {
    "word": "recycling",
    "phonetic": "/ˌriːˈsaɪklɪŋ/",
    "pos": "n.",
    "meaning": "回收利用",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然地理、动植物与环境保护】",
    "analysis_type": "构词",
    "analysis": "recycle（循环回收） + -ing（名词后缀） -> 回收利用。"
  },
  {
    "word": "reef",
    "phonetic": "/riːf/",
    "pos": "n.",
    "meaning": "暗礁， 礁石； 沙洲",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然地理、动植物与环境保护】",
    "analysis_type": "构词",
    "analysis": "源自古诺尔斯语 rif（海底隆起的横） -> 暗礁，礁石。"
  },
  {
    "word": "renewable",
    "phonetic": "/rɪˈnjuːəbl/",
    "pos": "adj.",
    "meaning": "可再生的， 可持续的",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然地理、动植物与环境保护】",
    "analysis_type": "构词",
    "analysis": "re-（再次） + new（更新焕新） + -able（能…的） -> 可再生的，可持续的。"
  },
  {
    "word": "storm",
    "phonetic": "/stɔːm/",
    "pos": "n./v.",
    "meaning": "暴风雨； 风暴 v. 猛攻",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然地理、动植物与环境保护】",
    "analysis_type": "构词",
    "analysis": "源自词根核心本义 -> 暴风雨。"
  },
  {
    "word": "sustainable",
    "phonetic": "/səˈsteɪnəbl/",
    "pos": "adj.",
    "meaning": "可持续的， 可维持的",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然地理、动植物与环境保护】",
    "analysis_type": "构词",
    "analysis": "sustain（支撑维系） + -able（能…的） -> 可持续的，可维持的。"
  },
  {
    "word": "sustainability",
    "phonetic": "/səˌsteɪnəˈbɪləti/",
    "pos": "n.",
    "meaning": "可持续性， 持久性",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然地理、动植物与环境保护】",
    "analysis_type": "构词",
    "analysis": "sustainable（可持续的） + -ity（名词后缀） -> 可持续性，持久性。"
  },
  {
    "word": "timber",
    "phonetic": "/ˈtɪmbə(r)/",
    "pos": "n.",
    "meaning": "木材， 木料； 树林",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然地理、动植物与环境保护】",
    "analysis_type": "构词",
    "analysis": "源自词根核心本义 -> 木材，木料。"
  },
  {
    "word": "typhoon",
    "phonetic": "/taɪˈfuːn/",
    "pos": "n.",
    "meaning": "台风",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然地理、动植物与环境保护】",
    "analysis_type": "构词",
    "analysis": "源自粤语拼音“大风” tai-fung -> 台风。"
  },
  {
    "word": "valley",
    "phonetic": "/ˈvæli/",
    "pos": "n.",
    "meaning": "山谷， 溪谷； 流域",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然地理、动植物与环境保护】",
    "analysis_type": "构词",
    "analysis": "本义指“山谷低地” -> 山谷，溪谷。"
  },
  {
    "word": "vegetation",
    "phonetic": "/ˌvedʒəˈteɪʃn/",
    "pos": "n.",
    "meaning": "植被， 植物， 草木",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然地理、动植物与环境保护】",
    "analysis_type": "构词",
    "analysis": "veget-（生长活跃有生） + -ation（集合名词） -> 植被，植物。"
  },
  {
    "word": "wetland",
    "phonetic": "/ˈwetlænd/",
    "pos": "n.",
    "meaning": "湿地， 沼泽地",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然地理、动植物与环境保护】",
    "analysis_type": "构词",
    "analysis": "wet（湿润沼泽） + land（土地） -> 湿地，沼泽地。"
  },
  {
    "word": "wildlife",
    "phonetic": "/ˈwaɪldlaɪf/",
    "pos": "n.",
    "meaning": "野生动植物， 野生生物",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然地理、动植物与环境保护】",
    "analysis_type": "构词",
    "analysis": "wild（荒野原生态的） + life（生命生灵） -> 野生动植物，野生生物。"
  },
  {
    "word": "accident",
    "phonetic": "/ˈæksɪdənt/",
    "pos": "n.",
    "meaning": "交通事故； 意外遭遇",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "ac-（ad- 朝向） + cid-（掉落） + -ent，引申指交通事故 -> 交通事故。"
  },
  {
    "word": "bicycle",
    "phonetic": "/ˈbaɪsɪkl/",
    "pos": "n./vi.",
    "meaning": "自行车 vi. 骑车",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "bi-（两个） + cycle（车轮） -> 自行车，vi.。"
  },
  {
    "word": "bridge",
    "phonetic": "/brɪdʒ/",
    "pos": "n./vt.",
    "meaning": "桥梁； 纽带 vt. 架桥",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "源自词根核心本义 -> 桥梁。"
  },
  {
    "word": "building",
    "phonetic": "/ˈbɪldɪŋ/",
    "pos": "n.",
    "meaning": "建筑物， 房屋； 建筑",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "build（打地基砌砖建） + -ing（名词后缀） -> 建筑物，房屋。"
  },
  {
    "word": "bus",
    "phonetic": "/bʌs/",
    "pos": "n.",
    "meaning": "公共汽车， 大巴",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "由 omnibus（公共马车）截尾简缩而来 -> 穿行在城市等 -> 公共汽车，大巴。"
  },
  {
    "word": "cab",
    "phonetic": "/kæb/",
    "pos": "n.",
    "meaning": "出租车， 计程车； 驾驶室",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "由 cabriolet（两轮轻便弹簧）截头简缩而来 -> 车顶亮等 -> 出租车，计程车。"
  },
  {
    "word": "car",
    "phonetic": "/kɑː(r)/",
    "pos": "n.",
    "meaning": "汽车， 小轿车； 车厢",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "源自高卢凯尔特语 karros（两轮战车） -> 汽车，小轿车。"
  },
  {
    "word": "city",
    "phonetic": "/ˈsɪti/",
    "pos": "n.",
    "meaning": "城市， 都市， 市",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "词根 civitas（公民共同体城） -> 城市，都市。"
  },
  {
    "word": "civic",
    "phonetic": "/ˈsɪvɪk/",
    "pos": "adj.",
    "meaning": "市民的， 城市的； 公民的",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "civ-（公民） + -ic（形容词后缀） -> 市民的，城市的。"
  },
  {
    "word": "commute",
    "phonetic": "/kəˈmjuːt/",
    "pos": "vi./n.",
    "meaning": "乘车往返上下班 n. 通勤",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "com-（共同） + mute（变更） -> 乘车往返上下班，n.。"
  },
  {
    "word": "corridor",
    "phonetic": "/ˈkɒrɪdɔː(r)/",
    "pos": "n.",
    "meaning": "走廊， 通道； 交通走廊",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "源自意大利语 corridore（奔跑穿行之处） -> 走廊，通道。"
  },
  {
    "word": "courier",
    "phonetic": "/ˈkʊriə(r)/",
    "pos": "n.",
    "meaning": "快递员， 信使",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "cour-（奔跑） + -ier（人员） -> 快递员，信使。"
  },
  {
    "word": "crossroad",
    "phonetic": "/ˈkrɒsrəʊd/",
    "pos": "n.",
    "meaning": "十字路口； 重要转折点",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "cross（交叉） + road（道路） -> 十字路口。"
  },
  {
    "word": "delay",
    "phonetic": "/dɪˈleɪ/",
    "pos": "vt./n.",
    "meaning": "延误， 推迟 n. 耽搁",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "de-（向下） + lay（放置放缓） -> 延误，推迟。"
  },
  {
    "word": "delivery",
    "phonetic": "/dɪˈlɪvəri/",
    "pos": "n.",
    "meaning": "递送， 交付； 分娩",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "deliver（交付） + -y（名词后缀） -> 递送，交付。"
  },
  {
    "word": "departure",
    "phonetic": "/dɪˈpɑːtʃə(r)/",
    "pos": "n.",
    "meaning": "出发， 离开； 偏离",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "depart（启程离开） + -ure（名词后缀） -> 出发，离开。"
  },
  {
    "word": "depot",
    "phonetic": "/ˈdepəʊ/",
    "pos": "n.",
    "meaning": "车库， 机车段； 仓库",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "源自法语 dépôt（存物库房） -> 车库，机车段。"
  },
  {
    "word": "ferry",
    "phonetic": "/ˈferi/",
    "pos": "n./v.",
    "meaning": "渡船， 轮渡 v. 摆渡",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "本义指“摆渡” -> 渡船，轮渡。"
  },
  {
    "word": "freight",
    "phonetic": "/freɪt/",
    "pos": "n./vt.",
    "meaning": "货物； 货运 vt. 运送",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "源自中古荷兰语 vrecht（运货） -> 货物。"
  },
  {
    "word": "harbor",
    "phonetic": "/ˈhɑːbə(r)/",
    "pos": "n./vt.",
    "meaning": "vt. 心怀，抱有（恶念/疑虑）；窝藏，庇护 n. 海港，港口",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "源自词根核心本义 -> 海港，港口。"
  },
  {
    "word": "intersection",
    "phonetic": "/ˈɪntəsekʃn/",
    "pos": "n.",
    "meaning": "交叉路口， 十字路口",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "inter-（相互之间） + sect-（切割） + -ion，引申指交叉路口 -> 交叉路口，十字路口。"
  },
  {
    "word": "junction",
    "phonetic": "/ˈdʒʌŋkʃn/",
    "pos": "n.",
    "meaning": "连接点， 枢纽； 铁路交叉点",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "junct-（连接） + -ion（名词后缀） -> 连接点，枢纽。"
  },
  {
    "word": "lane",
    "phonetic": "/leɪn/",
    "pos": "n.",
    "meaning": "车道， 行车道； 小巷",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "源自词根核心本义 -> 车道，行车道。"
  },
  {
    "word": "locomotive",
    "phonetic": "/ˌləʊkəˈməʊtɪv/",
    "pos": "n./adj.",
    "meaning": "机车， 火车头 adj. 运动的",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "loco-（地点） + motive（驱动移动） -> 机车，火车头。"
  },
  {
    "word": "luggage",
    "phonetic": "/ˈlʌɡɪdʒ/",
    "pos": "n.",
    "meaning": "行李（总称）",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "lug（用力拖拽拉拽） + -age（集合名词） -> 行李（总称）。"
  },
  {
    "word": "metro",
    "phonetic": "/ˈmetrəʊ/",
    "pos": "n.",
    "meaning": "地铁， 城市地下铁道",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "由 metropolitan railway（大都市地下铁）截头等 -> 地铁，城市地下铁道。"
  },
  {
    "word": "metropolis",
    "phonetic": "/məˈtrɒpəlɪs/",
    "pos": "n.",
    "meaning": "大都市， 大都会； 首府",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "metro-（母亲） + polis（城邦） -> 大都市，大都会。"
  },
  {
    "word": "pedestrian",
    "phonetic": "/pəˈdestriən/",
    "pos": "n./adj.",
    "meaning": "行人， 步行者 adj. 徒步的",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "ped-（双脚） + -estr- + -ian（人） -> 行人，步行者。"
  },
  {
    "word": "railway",
    "phonetic": "/ˈreɪlweɪ/",
    "pos": "n.",
    "meaning": "铁路， 铁道",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "rail（铁轨） + way（道路） -> 铁路，铁道。"
  },
  {
    "word": "station",
    "phonetic": "/ˈsteɪʃn/",
    "pos": "n./vt.",
    "meaning": "车站； 所； 驻地 vt. 安置",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "stat-（站立） + -ion（场所后缀） -> 车站。"
  },
  {
    "word": "street",
    "phonetic": "/striːt/",
    "pos": "n.",
    "meaning": "街道， 街道两旁建筑物",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "词根via strata （铺石路的街） -> 街道，街道两旁建筑物。"
  },
  {
    "word": "ticket",
    "phonetic": "/ˈtɪkɪt/",
    "pos": "n./vt.",
    "meaning": "票， 车票； 罚单 vt. 售票",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "本义指“贴在墙壁门板” -> 票，车票。"
  },
  {
    "word": "train",
    "phonetic": "/treɪn/",
    "pos": "n./v.",
    "meaning": "火车， 列车 v. 训练， 培养",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "本义指“被拖在后方长” -> 火车，列车。"
  },
  {
    "word": "travel",
    "phonetic": "/ˈtrævl/",
    "pos": "v./n.",
    "meaning": "旅行， 行进 n. 旅行",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "本义指“辛劳苦役” -> 旅行，行进。"
  },
  {
    "word": "traveler",
    "phonetic": "/ˈtrævələ(r)/",
    "pos": "n.",
    "meaning": "旅行者， 旅客",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "travel（旅行） + -er（人） -> 旅行者，旅客。"
  },
  {
    "word": "truck",
    "phonetic": "/trʌk/",
    "pos": "n./vt.",
    "meaning": "卡车， 货车 vt. 用卡车运",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "词根 -> 卡车，货车。"
  },
  {
    "word": "congestion",
    "phonetic": "/kənˈdʒestʃən/",
    "pos": "n.",
    "meaning": "拥堵， 拥挤； 充血",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "con-（共同） + gest-（堆积） + -ion，引申指拥堵 -> 拥堵，拥挤。"
  },
  {
    "word": "sanitation",
    "phonetic": "/ˌsænɪˈteɪʃn/",
    "pos": "n.",
    "meaning": "环境卫生， 公共卫生设施",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "sanit-（健康） + -ation（名词后缀） -> 环境卫生，公共卫生设施。"
  },
  {
    "word": "commuter",
    "phonetic": "/kəˈmjuːtə(r)/",
    "pos": "n.",
    "meaning": "通勤者， 经常往返者",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "commute（通勤上下班） + -er（人） -> 通勤者，经常往返者。"
  },
  {
    "word": "surveillance",
    "phonetic": "/sɜːˈveɪləns/",
    "pos": "n.",
    "meaning": "监视， 监控",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "sur-（在上方） + veill-（警觉守夜注视） + -ance，引申指监视 -> 监视，监控。"
  },
  {
    "word": "urbanization",
    "phonetic": "/ˌɜːbənaɪˈzeɪʃn/",
    "pos": "n.",
    "meaning": "城市化",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "urban-（城市的） + -ization（过程后缀） -> 城市化。"
  },
  {
    "word": "aid",
    "phonetic": "/eɪd/",
    "pos": "n./vt.",
    "meaning": "援助， 救助； 助手",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "本义指“帮助” -> 援助，救助。"
  },
  {
    "word": "assistance",
    "phonetic": "/əˈsɪstəns/",
    "pos": "n.",
    "meaning": "帮助， 援助， 协助",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "as-（ad- 朝向） + sist-（站立） + -ance（名词后缀） -> 帮助，援助。"
  },
  {
    "word": "attack",
    "phonetic": "/əˈtæk/",
    "pos": "v./n.",
    "meaning": "攻击， 进攻； 侵袭",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "at-（ad- 朝向） + tach（桩子） -> 攻击，进攻。"
  },
  {
    "word": "authority",
    "phonetic": "/ɔːˈθɒrəti/",
    "pos": "n.",
    "meaning": "权力， 权威； 官方当局",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "author-（创作者） + -ity（名词后缀） -> 权力，权威。"
  },
  {
    "word": "avoid",
    "phonetic": "/əˈvɔɪd/",
    "pos": "vt.",
    "meaning": "避免， 避开； 回避",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "a-（ex- 出） + void（空虚） -> 避免，避开。"
  },
  {
    "word": "awareness",
    "phonetic": "/əˈweənəs/",
    "pos": "n.",
    "meaning": "意识， 认知",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "aware（意识到的） + -ness（名词后缀） -> 意识，认知。"
  },
  {
    "word": "alcohol",
    "phonetic": "/ˈælkəhɒl/",
    "pos": "n.",
    "meaning": "酒精， 乙醇； 酒",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、医疗生理与情绪心理】",
    "analysis_type": "构词",
    "analysis": "源自阿拉伯语 al-kuhl（极细微的锑粉） -> 酒精，乙醇。"
  },
  {
    "word": "allergic",
    "phonetic": "/əˈlɜːdʒɪk/",
    "pos": "adj.",
    "meaning": "过敏的； 反感的",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、医疗生理与情绪心理】",
    "analysis_type": "构词",
    "analysis": "allergy（过敏症） + -ic（形容词后缀） -> 过敏的。"
  },
  {
    "word": "allergy",
    "phonetic": "/ˈælədʒi/",
    "pos": "n.",
    "meaning": "过敏反应； 过敏症",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、医疗生理与情绪心理】",
    "analysis_type": "构词",
    "analysis": "all-（相异） + erg-（反应） + -y，引申指过敏反应 -> 过敏反应。"
  },
  {
    "word": "blood",
    "phonetic": "/blʌd/",
    "pos": "n.",
    "meaning": "血液； 血统",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、医疗生理与情绪心理】",
    "analysis_type": "构词",
    "analysis": "源自词根核心本义 -> 血液。"
  },
  {
    "word": "breathe",
    "phonetic": "/briːð/",
    "pos": "v.",
    "meaning": "呼吸， 吸入",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、医疗生理与情绪心理】",
    "analysis_type": "构词",
    "analysis": "breath（呼吸） + -e（动词化） -> 呼吸，吸入。"
  },
  {
    "word": "cancer",
    "phonetic": "/ˈkænsə(r)/",
    "pos": "n.",
    "meaning": "癌症， 恶性肿瘤",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、医疗生理与情绪心理】",
    "analysis_type": "构词",
    "analysis": "词根（螃蟹） -> 癌症，恶性肿瘤。"
  },
  {
    "word": "capsule",
    "phonetic": "/ˈkæpsjuːl/",
    "pos": "n.",
    "meaning": "胶囊； 太空舱",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、医疗生理与情绪心理】",
    "analysis_type": "构词",
    "analysis": "caps-（盒子） + -ule（指小后缀） -> 胶囊。"
  },
  {
    "word": "chronic",
    "phonetic": "/ˈkrɒnɪk/",
    "pos": "adj.",
    "meaning": "慢性的； 长期的",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、医疗生理与情绪心理】",
    "analysis_type": "构词",
    "analysis": "chron-（时间） + -ic（形容词后缀） -> 慢性的。"
  },
  {
    "word": "clinical",
    "phonetic": "/ˈklɪnɪkl/",
    "pos": "adj.",
    "meaning": "临床的； 冷静客观的",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、医疗生理与情绪心理】",
    "analysis_type": "构词",
    "analysis": "clinic（诊所） + -al（形容词后缀） -> 临床的。"
  },
  {
    "word": "diagnose",
    "phonetic": "/ˈdaɪəɡnəʊz/",
    "pos": "vt.",
    "meaning": "诊断（疾病）， 判断",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、医疗生理与情绪心理】",
    "analysis_type": "构词",
    "analysis": "dia-（穿透） + gnose（知晓） -> 诊断（疾病） -> 诊断（疾病），判断。"
  },
  {
    "word": "diagnosis",
    "phonetic": "/ˌdaɪəɡˈnəʊsɪs/",
    "pos": "n.",
    "meaning": "诊断， 诊断结论",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、医疗生理与情绪心理】",
    "analysis_type": "构词",
    "analysis": "dia-（穿透剖析） + gnos-（知道） + -is（名词后缀） -> 诊断，诊断结论。"
  },
  {
    "word": "diet",
    "phonetic": "/ˈdaɪət/",
    "pos": "n./vi.",
    "meaning": "n. 国会，立法议会；日常饮食，特种食谱 vi. 节食",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、医疗生理与情绪心理】",
    "analysis_type": "构词",
    "analysis": "词根 diaita（生活方式） -> 调节日常餐饮搭配 -> 日常饮食。"
  },
  {
    "word": "disorder",
    "phonetic": "/dɪsˈɔːdə(r)/",
    "pos": "n./vt.",
    "meaning": "混乱； 失调， 疾病 vt. 扰乱",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、医疗生理与情绪心理】",
    "analysis_type": "构词",
    "analysis": "dis-（破坏） + order（秩序） -> 混乱。"
  },
  {
    "word": "epidemic",
    "phonetic": "/ˌepɪˈdemɪk/",
    "pos": "n./adj.",
    "meaning": "流行病； 盛行 adj. 流行性的",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、医疗生理与情绪心理】",
    "analysis_type": "构词",
    "analysis": "epi-（在…之上） + dem-（民众） + -ic，引申指流行病 -> 流行病。"
  },
  {
    "word": "fracture",
    "phonetic": "/ˈfræktʃə(r)/",
    "pos": "n./v.",
    "meaning": "骨折； 破裂 v. 骨折",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、医疗生理与情绪心理】",
    "analysis_type": "构词",
    "analysis": "fract-（打碎） + -ure（名词） -> 骨折。"
  },
  {
    "word": "health",
    "phonetic": "/helθ/",
    "pos": "n.",
    "meaning": "健康， 身体状况； 兴旺",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、医疗生理与情绪心理】",
    "analysis_type": "构词",
    "analysis": "heal（愈合） + -th（名词后缀） -> 健康，身体状况。"
  },
  {
    "word": "hospital",
    "phonetic": "/ˈhɒspɪtl/",
    "pos": "n.",
    "meaning": "医院",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、医疗生理与情绪心理】",
    "analysis_type": "构词",
    "analysis": "源自中世纪词根 hospitale（收容所） -> 医院。"
  },
  {
    "word": "immunity",
    "phonetic": "/ɪˈmjuːnəti/",
    "pos": "n.",
    "meaning": "免疫力， 免疫性； 豁免权",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、医疗生理与情绪心理】",
    "analysis_type": "构词",
    "analysis": "im-（免除） + mun-（公共劳役） + -ity，原指古罗马公民享有免服兵役赋税特权，引申指免疫力 -> 免疫力，免疫性。"
  },
  {
    "word": "medication",
    "phonetic": "/ˌmedɪˈkeɪʃn/",
    "pos": "n.",
    "meaning": "药物， 药剂； 药物治疗",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、医疗生理与情绪心理】",
    "analysis_type": "构词",
    "analysis": "med-（医治） + -ic- + -ation（名词后缀） -> 药物，药剂。"
  },
  {
    "word": "medicine",
    "phonetic": "/ˈmedsn/",
    "pos": "n.",
    "meaning": "医学， 医术； 内服药",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、医疗生理与情绪心理】",
    "analysis_type": "构词",
    "analysis": "med-（医治） + -icine（学术） -> 医学，医术。"
  },
  {
    "word": "nerves",
    "phonetic": "/nɜːvz/",
    "pos": "n.",
    "meaning": "神经； 神经过敏， 紧张情绪",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、医疗生理与情绪心理】",
    "analysis_type": "构词",
    "analysis": "词根 nerve（神经） -> 之复数形式 -> 神经。"
  },
  {
    "word": "nurse",
    "phonetic": "/nɜːs/",
    "pos": "n./v.",
    "meaning": "护士 v. 护理， 照料； 喂奶",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、医疗生理与情绪心理】",
    "analysis_type": "构词",
    "analysis": "本义指“哺乳奶妈” -> 护士，v.。"
  },
  {
    "word": "pain",
    "phonetic": "/peɪn/",
    "pos": "n./vt.",
    "meaning": "疼痛； 痛苦 vt. 使痛苦",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、医疗生理与情绪心理】",
    "analysis_type": "构词",
    "analysis": "本义指“折磨” -> 疼痛。"
  },
  {
    "word": "patient",
    "phonetic": "/ˈpeɪʃnt/",
    "pos": "n./adj.",
    "meaning": "病人 adj. 有耐心的， 能忍耐的",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、医疗生理与情绪心理】",
    "analysis_type": "构词",
    "analysis": "pati-（承受） + -ent（人） -> 病人，adj.。"
  },
  {
    "word": "pharmacy",
    "phonetic": "/ˈfɑːməsi/",
    "pos": "n.",
    "meaning": "药房， 药店； 药剂学",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、医疗生理与情绪心理】",
    "analysis_type": "构词",
    "analysis": "pharm-（药物） + -acy（场所） -> 药房，药店。"
  },
  {
    "word": "remedy",
    "phonetic": "/ˈremədi/",
    "pos": "n./vt.",
    "meaning": "疗法； 补救办法 vt. 纠正",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、医疗生理与情绪心理】",
    "analysis_type": "构词",
    "analysis": "re-（再次） + med-（医治） + -y，引申指疗法 -> 疗法。"
  },
  {
    "word": "surgical",
    "phonetic": "/ˈsɜːdʒɪkl/",
    "pos": "adj.",
    "meaning": "外科的， 外科手术的",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、医疗生理与情绪心理】",
    "analysis_type": "构词",
    "analysis": "surgery（外科手艺） + -ical（形容词后缀） -> 外科的，外科手术的。"
  },
  {
    "word": "symptom",
    "phonetic": "/ˈsɪmptəm/",
    "pos": "n.",
    "meaning": "症状； 征兆， 表象",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、医疗生理与情绪心理】",
    "analysis_type": "构词",
    "analysis": "syn-（共同） + ptom-（掉落） -> 症状。"
  },
  {
    "word": "therapy",
    "phonetic": "/ˈθerəpi/",
    "pos": "n.",
    "meaning": "疗法， 治疗； 理疗",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、医疗生理与情绪心理】",
    "analysis_type": "构词",
    "analysis": "词根 therap（照料） -> 系统的专业医疗调理手段 -> 疗法，治疗。"
  },
  {
    "word": "therapist",
    "phonetic": "/ˈθerəpɪst/",
    "pos": "n.",
    "meaning": "治疗师， 心理咨询师",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、医疗生理与情绪心理】",
    "analysis_type": "构词",
    "analysis": "therapy（治疗） + -ist（专业人员） -> 治疗师，心理咨询师。"
  },
  {
    "word": "toxic",
    "phonetic": "/ˈtɒksɪk/",
    "pos": "adj.",
    "meaning": "有毒的， 中毒的； 有害的",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、医疗生理与情绪心理】",
    "analysis_type": "构词",
    "analysis": "tox-（弓箭涂抹之毒） + -ic（形容词后缀） -> 有毒的，中毒的。"
  },
  {
    "word": "trauma",
    "phonetic": "/ˈtrɔːmə/",
    "pos": "n.",
    "meaning": "创伤，外伤；心理创伤",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、医疗生理与情绪心理】",
    "analysis_type": "构词",
    "analysis": "源自希腊语 （伤口） -> 创伤；外伤；心理创伤。"
  },
  {
    "word": "vaccine",
    "phonetic": "/ˈvæksiːn/",
    "pos": "n.",
    "meaning": "疫苗，菌苗",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、医疗生理与情绪心理】",
    "analysis_type": "构词",
    "analysis": "源自拉丁语 vacca（母牛），注入体内诱导产生长效抗体保护屏障的生物制剂 -> 疫苗；菌苗。"
  },
  {
    "word": "virus",
    "phonetic": "/ˈvaɪrəs/",
    "pos": "n.",
    "meaning": "病毒；毒素；电脑病毒",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、医疗生理与情绪心理】",
    "analysis_type": "构词",
    "analysis": "源自拉丁语 virus（粘稠毒液/毒汁），原义见词源，引申指病毒 -> 病毒；（计算机）病毒；病毒性疾病。"
  },
  {
    "word": "collide",
    "phonetic": "/kəˈlaɪd/",
    "pos": "vi.",
    "meaning": "碰撞，互撞；冲突（with）",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "col-（= com- 共同） + lide / laedere（碰撞/打伤），引申指碰撞 -> 碰撞；相撞（with）；冲突。"
  },
  {
    "word": "deform",
    "phonetic": "/dɪˈfɔːm/",
    "pos": "vt./vi.",
    "meaning": "使变形，畸变",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "de-（向下/偏离/破坏） + form（形状形态），引申指使变形 -> 使变形；使扭曲畸变；使变丑陋。"
  },
  {
    "word": "descend",
    "phonetic": "/dɪˈsend/",
    "pos": "vi./vt.",
    "meaning": "下来，下降；下斜",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "de-（向下） + scend（攀登/迈步），引申指下来 -> 下降；走下；降临。"
  },
  {
    "word": "detach",
    "phonetic": "/dɪˈtætʃ/",
    "pos": "vt./vi.",
    "meaning": "拆卸，分离；分派",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "de-（脱离/解开） + tach（图钉/系紧），引申指拆卸 -> 拆卸；使分开；解开。"
  },
  {
    "word": "eject",
    "phonetic": "/ɪˈdʒekt/",
    "pos": "vt./vi.",
    "meaning": "喷出，弹出；驱逐",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "e-（向外） + ject（投掷/抛出），引申指喷出 -> 喷出；喷射；弹射。"
  },
  {
    "word": "flatten",
    "phonetic": "/ˈflætn/",
    "pos": "v.",
    "meaning": "使平坦，变平；击倒",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "flat（扁平平坦的） + -en（使动后缀），引申指使平坦 -> 使变平；夷平；把…压扁。"
  },
  {
    "word": "friction",
    "phonetic": "/ˈfrɪkʃn/",
    "pos": "n.",
    "meaning": "摩擦，摩擦力；冲突，摩擦",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "frict-（摩擦/揉搓） + -ion（名词后缀），引申指摩擦 -> 摩擦；摩擦力；冲突。"
  },
  {
    "word": "impact",
    "phonetic": "/ˈɪmpækt/",
    "pos": "n./v.",
    "meaning": "冲击，碰撞；重大影响 v. 冲击",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "im-（进入） + pact-（固定紧密相击），引申指冲击 -> 巨大冲击；撞击；重大影响。"
  },
  {
    "word": "motion",
    "phonetic": "/ˈməʊʃn/",
    "pos": "n./v.",
    "meaning": "运动，移动；提议 v. 打手势",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "mot-（移动/运动） + -ion（名词后缀），引申指运动 -> 运动；动；运转。"
  },
  {
    "word": "paralyze",
    "phonetic": "/ˈpærəlaɪz/",
    "pos": "vt.",
    "meaning": "使瘫痪，使麻痹；使丧失作用",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "para-（在旁/不正常） + lyze / lysis（松开解体），引申指使瘫痪 -> 使瘫痪；使麻痹；使丧失作用。"
  },
  {
    "word": "revolve",
    "phonetic": "/rɪˈvɒlv/",
    "pos": "v.",
    "meaning": "旋转；围绕；反复思考",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "re-（再次/循环） + volv-（旋转/滚动） + -e，引申指旋转 -> 旋转；绕转；循环运转。"
  },
  {
    "word": "strain",
    "phonetic": "/streɪn/",
    "pos": "v./n.",
    "meaning": "拉伤；拉紧；拉力 n. 劳损",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "源自古法语 estreindre（紧紧勒住/勒紧拉紧），原义见词源，引申指拉伤 -> 极度紧张；重压；过度劳累。"
  },
  {
    "word": "extinction",
    "phonetic": "/ɪkˈstɪŋkʃn/",
    "pos": "n.",
    "meaning": "熄灭；灭绝，消亡",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然地理、动植物与环境保护】",
    "analysis_type": "构词",
    "analysis": "extinct（灭绝的） + -ion（名词后缀），引申指熄灭 -> 灭绝；绝种；熄灭。"
  },
  {
    "word": "fertilizer",
    "phonetic": "/ˈfɜːtəlaɪzə(r)/",
    "pos": "n.",
    "meaning": "肥料，化肥",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然地理、动植物与环境保护】",
    "analysis_type": "构词",
    "analysis": "fertilize（使土壤肥沃） + -er（物质），引申指肥料 -> 肥料；化学肥料；农用化肥。"
  },
  {
    "word": "incentive",
    "phonetic": "/ɪnˈsentɪv/",
    "pos": "n./adj.",
    "meaning": "激励，鼓励 n. 激励的",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "in-（进入） + cant- / cent-（歌唱发声） + -ive，引申指激励 -> 激励；刺激；动力。"
  },
  {
    "word": "inventory",
    "phonetic": "/ˈɪnvəntri/",
    "pos": "n./vt.",
    "meaning": "存货，库存清单 vt. 盘点",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "in-（在内） + vent-（来/找到） + -ory，引申指存货 -> 详细存货清单；库存商品；库存量。"
  },
  {
    "word": "overdraft",
    "phonetic": "/ˈəʊvədrɑːft/",
    "pos": "n.",
    "meaning": "透支；透支额度",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "over-（超出） + draft（提取开出支票），引申指透支 -> 透支；透支额度；透支行为。"
  },
  {
    "word": "portfolio",
    "phonetic": "/pɔːtˈfəʊliəʊ/",
    "pos": "n.",
    "meaning": "投资组合；公文包；作品集",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "port-（携带/搬运） + folium（纸张/叶子），引申指投资组合 -> 投资组合（股票/证券）；（艺术家/建筑师的）作品夹；代表作选辑。"
  },
  {
    "word": "premium",
    "phonetic": "/ˈpriːmiəm/",
    "pos": "n./adj.",
    "meaning": "保险费；加价 adj. 优质的",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "pre-（在前） + em-（拿取/购买），原指在诸多选择中抢先挑选最优质部位付，引申指保险费 -> 保险费；额外费用；溢价。"
  },
  {
    "word": "retailer",
    "phonetic": "/ˈriːteɪlə(r)/",
    "pos": "n.",
    "meaning": "零售商，零售店",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "retail（零售） + -er（人/机构），引申指零售商 -> 零售商；零售店；零售经营者。"
  },
  {
    "word": "shareholder",
    "phonetic": "/ˈʃeəhəʊldə(r)/",
    "pos": "n.",
    "meaning": "股东",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "share（股票份额） + holder（持有者），引申指股东 -> 股东；股票持有者。"
  },
  {
    "word": "subsidiary",
    "phonetic": "/səbˈsɪdiəri/",
    "pos": "n./adj.",
    "meaning": "子公司，分支机构 adj. 附带的",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "sub-（在下方/辅助支撑） + -iary（形容词/名词后缀），引申指子公司 -> 子公司；附属机构；辅助的。"
  },
  {
    "word": "achieve",
    "phonetic": "/əˈtʃiːv/",
    "pos": "vt.",
    "meaning": "完成，实现，达到",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "a-（= ad- 朝向） + chief / chef（首领/顶峰），引申指完成 -> 完成；实现（抱负）；达到。"
  },
  {
    "word": "achievement",
    "phonetic": "/əˈtʃiːvmənt/",
    "pos": "n.",
    "meaning": "成就，成绩；达到",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "achieve（实现） + -ment（名词后缀），引申指成就 -> 成就；成绩；实现。"
  },
  {
    "word": "aim",
    "phonetic": "/eɪm/",
    "pos": "n./v.",
    "meaning": "目标，目的 v. 旨在",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "源自古法语 aesmer（估量/瞄准），原义见词源，引申指目标 -> 目标；目的；瞄准。"
  },
  {
    "word": "anger",
    "phonetic": "/ˈæŋɡə(r)/",
    "pos": "n./vt.",
    "meaning": "愤怒，气愤 vt. 激怒",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、医疗生理与情绪心理】",
    "analysis_type": "构词",
    "analysis": "源自古诺尔斯语 angr（痛苦/悲伤），原义见词源，引申指愤怒 -> 怒火；狂怒；气愤。"
  },
  {
    "word": "assume",
    "phonetic": "/əˈsjuːm/",
    "pos": "vt.",
    "meaning": "假定，假设；承担",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "as-（= ad- 朝向） + sume（拿取/抓起），引申指假定 -> 假定；假设；承担。"
  },
  {
    "word": "assure",
    "phonetic": "/əˈʃʊə(r)/",
    "pos": "vt.",
    "meaning": "向…保证；使确信",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "as-（= ad- 使） + sure（安全/笃定确信），引申指向…保证 -> 向…保证；使确信；确保。"
  },
  {
    "word": "astonish",
    "phonetic": "/əˈstɒnɪʃ/",
    "pos": "vt.",
    "meaning": "使十分惊讶，使大吃一惊",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "as-（彻底） + ton-（雷霆震响），如晴天霹雳自天而降将人震得目瞪口呆当场石化 -> 使十分惊讶；使大吃一惊；使惊愕。"
  },
  {
    "word": "attitude",
    "phonetic": "/ˈætɪtjuːd/",
    "pos": "n.",
    "meaning": "态度，看法；姿势",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、医疗生理与情绪心理】",
    "analysis_type": "构词",
    "analysis": "源自晚期拉丁语 aptitudo（适宜之姿势），原义见词源，引申指态度 -> 态度；看法；姿态。"
  },
  {
    "word": "award",
    "phonetic": "/əˈwɔːd/",
    "pos": "vt./n.",
    "meaning": "授予，给予 n. 奖，奖品",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "a-（= ex- 向外） + ward / guard（注视观察/守护），引申指授予 -> 奖；奖品；奖项。"
  },
  {
    "word": "aware",
    "phonetic": "/əˈweə(r)/",
    "pos": "adj.",
    "meaning": "意识到的，知晓的",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、医疗生理与情绪心理】",
    "analysis_type": "构词",
    "analysis": "a-（处于） + ware（留心/防备），引申指意识到的 -> 意识到的；知道的；觉察到的。"
  },
  {
    "word": "basic",
    "phonetic": "/ˈbeɪsɪk/",
    "pos": "adj.",
    "meaning": "基本的，基础的",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "base（底座/根基） + -ic（形容词后缀），引申指基本的 -> 基础的；基本的；根本的。"
  },
  {
    "word": "basis",
    "phonetic": "/ˈbeɪsɪs/",
    "pos": "n.",
    "meaning": "基础，根据，准则",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "源自希腊语 basis（底座/迈步基石），原义见词源，引申指基础 -> 基础；根据；原则。"
  },
  {
    "word": "bear",
    "phonetic": "/beə(r)/",
    "pos": "vt./n.",
    "meaning": "忍受；承担；生育 n. 熊",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、医疗生理与情绪心理】",
    "analysis_type": "构词",
    "analysis": "源自古英语 beran -> 忍受；承担；生育 n. 熊。"
  },
  {
    "word": "behave",
    "phonetic": "/bɪˈheɪv/",
    "pos": "vi./vt.",
    "meaning": "表现，表现得体；运转",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "be-（加强语气） + have（持有/掌控自己的举止动作），引申指表现 -> 表现；行为举止；举止端正。"
  },
  {
    "word": "behavior",
    "phonetic": "/bɪˈheɪvjə(r)/",
    "pos": "n.",
    "meaning": "行为，举止；运转情况",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "behave（表现举止） + -i- + -or（名词后缀），引申指行为 -> 行为；举止；表现。"
  },
  {
    "word": "belief",
    "phonetic": "/bɪˈliːf/",
    "pos": "n.",
    "meaning": "信念，信仰；坚信",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、医疗生理与情绪心理】",
    "analysis_type": "构词",
    "analysis": "be-（在内） + lief（珍爱/忠诚），引申指信念 -> 信仰；信念；相信。"
  },
  {
    "word": "believe",
    "phonetic": "/bɪˈliːv/",
    "pos": "v.",
    "meaning": "相信，信任；认为",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、医疗生理与情绪心理】",
    "analysis_type": "构词",
    "analysis": "be-（使） + lieve（珍惜爱重/信以为真），引申指相信 -> 相信；信任；认为。"
  },
  {
    "word": "belong",
    "phonetic": "/bɪˈlɒŋ/",
    "pos": "vi.",
    "meaning": "属于；适宜（to）",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "be-（彻底） + long（属于/适宜），引申指属于 -> 属于；归…所有（to）；是…的成员。"
  },
  {
    "word": "blame",
    "phonetic": "/bleɪm/",
    "pos": "vt./n.",
    "meaning": "责备，归咎于 n. 责任",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "源自古法语 blasmer（渎神/责骂），原义见词源，引申指责备 -> 责怪；指责；归咎于。"
  },
  {
    "word": "brave",
    "phonetic": "/breɪv/",
    "pos": "adj./vt.",
    "meaning": "勇敢的 vt. 勇敢面对",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、医疗生理与情绪心理】",
    "analysis_type": "构词",
    "analysis": "源自意大利语 bravo（勇猛强横/桀骜不驯），原义见词源，引申指勇敢的 vt. 勇敢面对 -> 勇敢的；无畏的；英勇的人。"
  },
  {
    "word": "cancel",
    "phonetic": "/ˈkænsl/",
    "pos": "vt.",
    "meaning": "取消，撤销；废除",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "源自拉丁动词 cancellare（在手稿文字上划斜十字格子注销），原义见词源，引申指取消 -> 取消；撤销；废除。"
  },
  {
    "word": "careful",
    "phonetic": "/ˈkeəfl/",
    "pos": "adj.",
    "meaning": "小心的，细致的，周密的",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "care（关心/担忧留心） + -ful（充满的），引申指小心的 -> 仔细的；小心的；认真的。"
  },
  {
    "word": "cause",
    "phonetic": "/kɔːz/",
    "pos": "n./vt.",
    "meaning": "原因；事业 vt. 导致",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "源自拉丁语 causa（原因/诉讼案件/缘由），原义见词源，引申指原因 -> 原因；起因；事业。"
  },
  {
    "word": "center",
    "phonetic": "/ˈsentə(r)/",
    "pos": "n./v.",
    "meaning": "中心，中枢 v. 集中",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "源自希腊语 kentron（圆规固定扎入纸面），原义见词源，引申指中心 -> 中心；中央；核心。"
  },
  {
    "word": "central",
    "phonetic": "/ˈsentrəl/",
    "pos": "adj.",
    "meaning": "中央的，核心的；中枢的",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "center（中心） + -al（形容词后缀），引申指中央的 -> 中心的；中央的；主要的。"
  },
  {
    "word": "chance",
    "phonetic": "/tʃɑːns/",
    "pos": "n./v.",
    "meaning": "机会，机遇；偶然",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "源自晚期拉丁语 cadentia（掷骰子掉落下来的点数），原义见词源，引申指机会 -> 机会；良机；可能性。"
  },
  {
    "word": "change",
    "phonetic": "/tʃeɪndʒ/",
    "pos": "v./n.",
    "meaning": "改变，变更；零钱",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "源自晚期拉丁语 cambiare（以物易物互相交换），原义见词源，引申指改变 -> 改变；变化；更改。"
  },
  {
    "word": "check",
    "phonetic": "/tʃek/",
    "pos": "v./n.",
    "meaning": "检查，核对；支票",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "源自古法语 eschec（国际象棋将死！），在清单账本上仔细逐项核对查验排除差错 -> 检查；核对；抑制。"
  },
  {
    "word": "choose",
    "phonetic": "/tʃuːz/",
    "pos": "vt./vi.",
    "meaning": "选择，挑选；情愿",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "源自原始日耳曼语 *keusanan（用眼睛与心智认真品鉴挑选），指在多种可能中选定其一 -> vt./vi. 选择，挑选；情愿。"
  },
  {
    "word": "clear",
    "phonetic": "/klɪə(r)/",
    "pos": "adj./v.",
    "meaning": "清楚的；晴朗的 v. 清除",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "源自拉丁形容词 clarus（清澈透亮的/声名），原义见词源，引申指清楚的 -> 清晰的；明白的；清澈的。"
  },
  {
    "word": "comfort",
    "phonetic": "/ˈkʌmfət/",
    "pos": "n./vt.",
    "meaning": "安慰，慰藉 vt. 安慰",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、医疗生理与情绪心理】",
    "analysis_type": "构词",
    "analysis": "com-（彻底/加强语气） + fort（强壮/有力量），引申指安慰 -> 安慰；慰藉；舒服。"
  },
  {
    "word": "compare",
    "phonetic": "/kəmˈpeə(r)/",
    "pos": "vt./vi.",
    "meaning": "比较，对照；比作",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "com-（共同） + pare（成对/对等），引申指比较 -> 比较；对照；比作。"
  },
  {
    "word": "condition",
    "phonetic": "/kənˈdɪʃn/",
    "pos": "n./vt.",
    "meaning": "状况，状态；条件 vt. 调节",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、医疗生理与情绪心理】",
    "analysis_type": "构词",
    "analysis": "con-（共同） + dict-（宣说） + -ion，引申指状况 -> 状况；状态；条件。"
  },
  {
    "word": "confirm",
    "phonetic": "/kənˈfɜːm/",
    "pos": "vt.",
    "meaning": "证实，肯定；批准",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "con-（彻底） + firm（稳固坚决），引申指证实 -> 证实；证明；进一步确认。"
  },
  {
    "word": "consider",
    "phonetic": "/kənˈsɪdə(r)/",
    "pos": "v.",
    "meaning": "考虑，细想；认为",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "con-（共同/彻底） + sider（星辰），引申指反复权衡深思熟虑 -> 考虑；细想；认为。"
  },
  {
    "word": "contain",
    "phonetic": "/kənˈteɪn/",
    "pos": "vt.",
    "meaning": "包含，容纳；抑制",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "con-（共同） + tain（握住/包容），引申指包含 -> 包含；容纳；抑制。"
  },
  {
    "word": "continue",
    "phonetic": "/kənˈtɪnjuː/",
    "pos": "v.",
    "meaning": "继续，连续；延伸",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "con-（共同） + tin-（握住/连贯） + -ue，引申指继续 -> 继续；持续；延伸。"
  },
  {
    "word": "control",
    "phonetic": "/kənˈtrəʊl/",
    "pos": "vt./n.",
    "meaning": "控制，掌管；抑制",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "源自中世纪拉丁语 contrarotulus（对照轮流滚动的副账卷轴） -> 控制；支配；掌控。"
  },
  {
    "word": "correct",
    "phonetic": "/kəˈrekt/",
    "pos": "adj./vt.",
    "meaning": "正确的 vt. 改正，纠正",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "cor-（= com- 彻底） + rect（笔直直挺/端正），引申指正确的 vt. 改正 -> 正确的；对的；恰当得体的。"
  },
  {
    "word": "cover",
    "phonetic": "/ˈkʌvə(r)/",
    "pos": "vt./n.",
    "meaning": "覆盖；掩盖；涉及 n. 盖子",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "源自古法语 covrir（覆盖遮盖），原义见词源，引申指覆盖 -> 覆盖；遮盖；涵盖。"
  },
  {
    "word": "create",
    "phonetic": "/kriˈeɪt/",
    "pos": "vt.",
    "meaning": "创造，创作；引起",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "creat-（孕育生长/创制），艺术家或科学家从无到有凭借无羁想象力构等 -> 创造；创作；引起。"
  },
  {
    "word": "crisis",
    "phonetic": "/ˈkraɪsɪs/",
    "pos": "n.",
    "meaning": "危机，紧要关头",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "源自希腊语 krisis（分水岭/生死决断时刻），原义见词源，引申指危机 -> 危机；危急关头；紧要关头。"
  },
  {
    "word": "crowd",
    "phonetic": "/kraʊd/",
    "pos": "n./v.",
    "meaning": "人群，群众 v. 聚集",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "源自古英语 -> 人群；群众 v. 聚集。"
  },
  {
    "word": "danger",
    "phonetic": "/ˈdeɪndʒə(r)/",
    "pos": "n.",
    "meaning": "危险，危险物；威胁",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "源自古法语 dangier（领主的生杀予夺绝对支配权），原义见词源，引申指危险 -> 危险；风险；威胁。"
  },
  {
    "word": "date",
    "phonetic": "/deɪt/",
    "pos": "n./v.",
    "meaning": "日期；约会 v. 注明日明",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "源自拉丁语 datum（给出之日期时刻） -> 日期；日子；年代。"
  },
  {
    "word": "deal",
    "phonetic": "/diːl/",
    "pos": "v./n.",
    "meaning": "处理；买卖 n. 协议；交易",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "源自古英语 -> 处理；买卖 n. 协议；交易。"
  },
  {
    "word": "decrease",
    "phonetic": "/dɪˈkriːs/",
    "pos": "v./n.",
    "meaning": "减少，降低 n. 减退",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "de-（向下/减少） + crease（生长增加），引申指减少 -> 减少；减小；降低。"
  },
  {
    "word": "design",
    "phonetic": "/dɪˈzaɪn/",
    "pos": "vt./n.",
    "meaning": "设计，构想 n. 图样",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "de-（向外/彻底） + sign（画标记/绘制记号），引申指设计 -> 设计；构思；图案。"
  },
  {
    "word": "destroy",
    "phonetic": "/dɪˈstrɔɪ/",
    "pos": "vt.",
    "meaning": "破坏，摧毁；消灭",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "de-（向下/彻底破坏） + stroy / struct（建造/构筑），引申指破坏 -> 破坏；毁灭；摧毁。"
  },
  {
    "word": "detail",
    "phonetic": "/ˈdiːteɪl/",
    "pos": "n./vt.",
    "meaning": "细节，详情 vt. 详述",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "de-（彻底） + tail（剪切/切碎），引申指方案中一丝不苟的细枝末节 -> 细节；琐事；详情。"
  },
  {
    "word": "develop",
    "phonetic": "/dɪˈveləp/",
    "pos": "v.",
    "meaning": "发展；研制；显影",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "de-（解开/解封） + velop（包裹/卷绕），原指将包裹在厚厚襁褓中的事物一层层剥，引申指科技研发或疾病恶化 -> 发展；壮大；开发。"
  },
  {
    "word": "development",
    "phonetic": "/dɪˈveləpmənt/",
    "pos": "n.",
    "meaning": "发展，开发；研制",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "develop（发展开发） + -ment（名词后缀），引申指发展 -> 发展；成长；开发。"
  },
  {
    "word": "difficult",
    "phonetic": "/ˈdɪfɪkəlt/",
    "pos": "adj.",
    "meaning": "困难的，艰难的；难对付的",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "dif-（不/非） + fic / fac（做） + -ult（形容词后缀），原义“不易做成的”，引申为任务繁重棘手 -> 困难的；艰难的；难对付的。"
  },
  {
    "word": "difficulty",
    "phonetic": "/ˈdɪfɪkəlti/",
    "pos": "n.",
    "meaning": "困难，难事；困境",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "difficult（困难的） + -y（名词后缀），引申指困难 -> 困难；困境；艰难险阻。"
  },
  {
    "word": "direct",
    "phonetic": "/dəˈrekt/",
    "pos": "adj./vt.",
    "meaning": "直接的 vt. 指导；指挥",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "di-（彻底） + rect（笔直直挺），引申指当面直截了当发号施令指挥排 -> 直接的；径直的；率直坦率的。"
  },
  {
    "word": "direction",
    "phonetic": "/dəˈrekʃn/",
    "pos": "n.",
    "meaning": "方向，方位；指导",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "direct（指引方向） + -ion（名词后缀），引申指方向 -> 方向；方位；指导。"
  },
  {
    "word": "director",
    "phonetic": "/dəˈrektə(r)/",
    "pos": "n.",
    "meaning": "主管，局长，主任；导演",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "direct（指导指挥） + -or（人），引申指主管 -> 导演；主管；主任。"
  },
  {
    "word": "discover",
    "phonetic": "/dɪˈskʌvə(r)/",
    "pos": "vt.",
    "meaning": "发现，发觉；露出",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "dis-（解开/移开） + cover（覆盖遮盖物），引申指发现 -> 发现；发觉；首度察觉到。"
  },
  {
    "word": "discovery",
    "phonetic": "/dɪˈskʌvəri/",
    "pos": "n.",
    "meaning": "发现，发觉；被发现的事物",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "discover（发现） + -y（名词后缀），引申指发现 -> 发现；被发现的事物；重大新发现。"
  },
  {
    "word": "discuss",
    "phonetic": "/dɪˈskʌs/",
    "pos": "vt.",
    "meaning": "讨论，商讨；详述",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "dis-（向四方分开） + cuss-（击打/震荡摇晃），引申指讨论 -> 讨论；商讨；谈论。"
  },
  {
    "word": "discussion",
    "phonetic": "/dɪˈskʌʃn/",
    "pos": "n.",
    "meaning": "讨论，谈论；论述",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "discuss（讨论探讨） + -ion（名词后缀），引申指讨论 -> 讨论；商讨；谈论。"
  },
  {
    "word": "distance",
    "phonetic": "/ˈdɪstəns/",
    "pos": "n./vt.",
    "meaning": "距离，间距；远方 vt. 疏远",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "dis-（分离/相距） + st-（站立） + -ance（名词后缀），引申指距离 -> 距离；间距；远方。"
  },
  {
    "word": "double",
    "phonetic": "/ˈdʌbl/",
    "pos": "adj./v./n.",
    "meaning": "两倍的 v. 翻倍",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "源自拉丁语 duplus -> 两倍的 v. 翻倍。"
  },
  {
    "word": "doubt",
    "phonetic": "/daʊt/",
    "pos": "n./v.",
    "meaning": "怀疑，疑虑 v. 怀疑",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "源自拉丁动词 dubitare（内心在两者之间摇摆不定），原义见词源，引申指怀疑 -> 怀疑；疑惑；不确信。"
  },
  {
    "word": "draw",
    "phonetic": "/drɔː/",
    "pos": "v./n.",
    "meaning": "画；拉，吸引；得出 n. 平局",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "源自古英语 dragan -> 画；拉；吸引。"
  },
  {
    "word": "dream",
    "phonetic": "/driːm/",
    "pos": "n./v.",
    "meaning": "梦；梦想 v. 做梦；向往",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、医疗生理与情绪心理】",
    "analysis_type": "构词",
    "analysis": "源自古英语 -> 梦；梦想 v. 做梦；向往。"
  },
  {
    "word": "drive",
    "phonetic": "/draɪv/",
    "pos": "v./n.",
    "meaning": "驾驶，驱使；推进 n. 驱力",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "源自古英语 -> 驾驶；驱使；推进 n. 驱力。"
  },
  {
    "word": "drop",
    "phonetic": "/drɒp/",
    "pos": "v./n.",
    "meaning": "落下，下降 n. 滴；微量",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "源自古英语 -> 落下；下降 n. 滴；微量。"
  },
  {
    "word": "during",
    "phonetic": "/ˈdjʊərɪŋ/",
    "pos": "prep.",
    "meaning": "在…期间，在…过程中",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "源自拉丁动词 durare（持久/持续存在），原义见词源，引申指在…期间 -> 在…期间；在…过程中。"
  },
  {
    "word": "earth",
    "phonetic": "/ɜːθ/",
    "pos": "n.",
    "meaning": "地球；陆地；泥土，土壤",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然地理、动植物与环境保护】",
    "analysis_type": "构词",
    "analysis": "源自古英语 eorthe -> 地球；陆地；泥土。"
  },
  {
    "word": "east",
    "phonetic": "/iːst/",
    "pos": "n./adj./adv.",
    "meaning": "东方，东部 adj. 东方的",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然地理、动植物与环境保护】",
    "analysis_type": "构词",
    "analysis": "源自古英语 -> 东方；东部 adj. 东方的。"
  },
  {
    "word": "easy",
    "phonetic": "/ˈiːzi/",
    "pos": "adj.",
    "meaning": "容易的，简单的；舒适的",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "源自古法语 aisié（处于闲适状态），毫无阻碍磕绊信手拈来即可轻松办妥办成的 -> 容易的；轻易的；从容舒适的。"
  },
  {
    "word": "effort",
    "phonetic": "/ˈefət/",
    "pos": "n.",
    "meaning": "努力，尝试；成就",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "ef-（= ex- 向外） + fort（力量/强壮），引申指努力 -> 努力；艰难的尝试；努力的成果。"
  },
  {
    "word": "electric",
    "phonetic": "/ɪˈlektrɪk/",
    "pos": "adj.",
    "meaning": "电的，电动的；令人激动的",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "electr-（琥珀） + -ic（形容词后缀），引申指电的 -> 电的；用电操作的；充满强电流的。"
  },
  {
    "word": "electrical",
    "phonetic": "/ɪˈlektrɪkl/",
    "pos": "adj.",
    "meaning": "电气的，电学上的",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "electric（电的） + -al（形容词后缀），引申指电气的 -> 电气的；电学的；与电有关的（如 electr）。"
  },
  {
    "word": "electronic",
    "phonetic": "/ɪˌlekˈtrɒnɪk/",
    "pos": "adj.",
    "meaning": "电子的，电子学的",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "electron（电子） + -ic（形容词后缀），引申指电子的 -> 电子的；电子学的；电子器件制造的。"
  },
  {
    "word": "electronics",
    "phonetic": "/ɪˌlekˈtrɒnɪks/",
    "pos": "n.",
    "meaning": "电子学；电子工业，电子设备",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "electronic（电子的） + -s（学科技术总称），引申指电子学 -> 电子学；微电子技术；电子工业。"
  },
  {
    "word": "element",
    "phonetic": "/ˈelɪmənt/",
    "pos": "n.",
    "meaning": "要素，元素；成分",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "源自拉丁语 elementum -> 要素；元素；成分。"
  },
  {
    "word": "eliminate",
    "phonetic": "/ɪˈlɪmɪneɪt/",
    "pos": "vt.",
    "meaning": "消除，排除；淘汰",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "e-（出/逐出） + limin-（门槛） + -ate，引申指消除 -> 消除；排除；淘汰。"
  },
  {
    "word": "elimination",
    "phonetic": "/ɪˌlɪmɪˈneɪʃn/",
    "pos": "n.",
    "meaning": "消除，根除；淘汰",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "eliminate（消除淘汰） + -ion（名词后缀），引申指消除 -> 消除；根除；淘汰赛。"
  },
  {
    "word": "emerge",
    "phonetic": "/ɪˈmɜːdʒ/",
    "pos": "vi.",
    "meaning": "浮现，出现；暴露",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "e-（向外/浮出） + merge（浸没于水中），引申指潜藏的事实真相逐渐大白于天 -> 浮现；显露；冒出。"
  },
  {
    "word": "emergence",
    "phonetic": "/ɪˈmɜːdʒəns/",
    "pos": "n.",
    "meaning": "出现，浮现；显现",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "emerge（浮现） + -ence（名词后缀），引申指出现 -> 出现；浮现；破土崛起。"
  },
  {
    "word": "emphasis",
    "phonetic": "/ˈemfəsɪs/",
    "pos": "n.",
    "meaning": "强调，重点；着重",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "em-（= en- 在内） + phas-（显现/发光展现） + -is，引申指强调 -> 强调；重点；着重。"
  },
  {
    "word": "enable",
    "phonetic": "/ɪˈneɪbl/",
    "pos": "vt.",
    "meaning": "使能够，使成为可能",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "en-（使动/赋予能力） + able（有能力的），引申指使能够 -> 使能够；使可能；赋予…能力权利。"
  },
  {
    "word": "encounter",
    "phonetic": "/ɪnˈkaʊntə(r)/",
    "pos": "vt./n.",
    "meaning": "遭遇，邂逅 n. 偶然相遇",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "en-（进入） + counter（相对/对抗），引申指遭遇 -> 偶遇；邂逅；遭遇（危险/困难）。"
  },
  {
    "word": "encouragement",
    "phonetic": "/ɪnˈkʌrɪdʒmənt/",
    "pos": "n.",
    "meaning": "鼓励，激励，促进",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "encourage（鼓励） + -ment（名词后缀），引申指鼓励 -> 鼓励；激励；促进因素。"
  },
  {
    "word": "endanger",
    "phonetic": "/ɪnˈdeɪndʒə(r)/",
    "pos": "vt.",
    "meaning": "危及，危害；使遭危险",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然地理、动植物与环境保护】",
    "analysis_type": "构词",
    "analysis": "en-（置于内） + danger（危险境地），引申指危及 -> 使处于危险境地；危及；危害（如 endang）。"
  },
  {
    "word": "energy",
    "phonetic": "/ˈenədʒi/",
    "pos": "n.",
    "meaning": "能源；能量，精力",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然地理、动植物与环境保护】",
    "analysis_type": "构词",
    "analysis": "en-（在内） + erg-（工作/劳作） + -y，引申指能源 -> 能量；能源；精力。"
  },
  {
    "word": "energetic",
    "phonetic": "/ˌenəˈdʒetɪk/",
    "pos": "adj.",
    "meaning": "精力充沛的，充满活力的",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、医疗生理与情绪心理】",
    "analysis_type": "构词",
    "analysis": "energy（能量/精力） + -etic（形容词后缀），引申指精力充沛的 -> 精力充沛的；充满活力的；积极雷厉风行的。"
  },
  {
    "word": "enforcement",
    "phonetic": "/ɪnˈfɔːsmənt/",
    "pos": "n.",
    "meaning": "执行，实施，强制",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "enforce（强制执行） + -ment（名词后缀），引申指执行 -> 强制执行；强行推行；实施。"
  },
  {
    "word": "engage",
    "phonetic": "/ɪnˈɡeɪdʒ/",
    "pos": "v.",
    "meaning": "从事，参与（in）；订婚",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "en-（置于内/以此抵押） + gage（誓约抵押物），引申指从事 -> 吸引；引起（注意）；从事。"
  },
  {
    "word": "engagement",
    "phonetic": "/ɪnˈɡeɪdʒmənt/",
    "pos": "n.",
    "meaning": "订婚；约定；参与",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "engage（订婚/投身） + -ment（名词后缀），引申指订婚 -> 订婚；婚约；约会。"
  },
  {
    "word": "engine",
    "phonetic": "/ˈendʒɪn/",
    "pos": "n.",
    "meaning": "发动机，引擎；机车",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "源自拉丁语 ingenium（天生聪明才智/巧妙发明），原义见词源，引申指发动机 -> 发动机；引擎；火车头机车。"
  },
  {
    "word": "engineer",
    "phonetic": "/ˌendʒɪˈnɪə(r)/",
    "pos": "n./vt.",
    "meaning": "工程师 vt. 精心策划",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "engine（精密动力引擎） + -eer（专业人员），引申指工程师 vt. 精心策划 -> 工程师；技师；工兵。"
  },
  {
    "word": "engineering",
    "phonetic": "/ˌendʒɪˈnɪərɪŋ/",
    "pos": "n.",
    "meaning": "工程，工程学",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "engineer（工程师业务） + -ing（学科名词后缀），引申指工程 -> 工程；工程学；工程设计与制造技术。"
  },
  {
    "word": "enhance",
    "phonetic": "/ɪnˈhɑːns/",
    "pos": "vt.",
    "meaning": "提高，增加，增强",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "en-（使动） + hance / haut（高傲/增高），引申指提高 -> 提高；增加；增强（品质/价值/吸引力）。"
  },
  {
    "word": "enhancement",
    "phonetic": "/ɪnˈhɑːnsmənt/",
    "pos": "n.",
    "meaning": "增加，增强；提高",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "enhance（增强提升） + -ment（名词后缀），引申指增加 -> 提高；增强；改善。"
  },
  {
    "word": "enjoy",
    "phonetic": "/ɪnˈdʒɔɪ/",
    "pos": "vt.",
    "meaning": "享受，喜爱；享有",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、医疗生理与情绪心理】",
    "analysis_type": "构词",
    "analysis": "en-（使置身于） + joy（欢欣喜悦），引申指享受 -> 享受；喜爱；欣赏。"
  },
  {
    "word": "enjoyable",
    "phonetic": "/ɪnˈdʒɔɪəbl/",
    "pos": "adj.",
    "meaning": "令人愉快的，有趣的",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、医疗生理与情绪心理】",
    "analysis_type": "构词",
    "analysis": "enjoy（喜爱享受） + -able（能…的），让身心无比放松愉悦、回味无穷沉浸其中的 -> 令人愉快的；使人快乐的；有乐趣的。"
  },
  {
    "word": "ensure",
    "phonetic": "/ɪnˈʃʊə(r)/",
    "pos": "vt.",
    "meaning": "确保，保证，担保",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "en-（使成为） + sure（安全确信的），反复上锁检查电路万无一失确保意外绝对不会发生 -> 确保；保证；担保。"
  },
  {
    "word": "enter",
    "phonetic": "/ˈentə(r)/",
    "pos": "v.",
    "meaning": "进入；参加；输入",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "源自拉丁语 intra -> 进入；参加；输入。"
  },
  {
    "word": "entertainment",
    "phonetic": "/ˌentəˈteɪnmənt/",
    "pos": "n.",
    "meaning": "娱乐，消遣；招待",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "entertain（招待逗乐） + -ment（名词后缀），引申指娱乐 -> 娱乐；文娱节目；表演会。"
  },
  {
    "word": "enthusiasm",
    "phonetic": "/ɪnˈθjuːziæzəm/",
    "pos": "n.",
    "meaning": "热情，热忱；狂热",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、医疗生理与情绪心理】",
    "analysis_type": "构词",
    "analysis": "en-（进入） + the-（神明） + -us- + -iasm（名词后缀），引申指热情 -> 热情；热忱；极大狂热。"
  },
  {
    "word": "entitle",
    "phonetic": "/ɪnˈtaɪtl/",
    "pos": "vt.",
    "meaning": "给…权利；给…题名",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "en-（赋予） + title（头衔/法律权利资格），引申指给…权利 -> 给予…权利；赋予…资格（be entit）；给…题名命名。"
  },
  {
    "word": "entity",
    "phonetic": "/ˈentəti/",
    "pos": "n.",
    "meaning": "实体，独立存在物",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "ent-（存在） + -ity（名词后缀），引申指实体 -> 实体；独立存在物；独立机构法人实体。"
  },
  {
    "word": "entrance",
    "phonetic": "/ˈentrəns/",
    "pos": "n.",
    "meaning": "入口，大门；进入",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "enter（进入） + -ance（场所名词后缀），引申指入口 -> 入口；大门；进入。"
  },
  {
    "word": "entry",
    "phonetic": "/ˈentri/",
    "pos": "n.",
    "meaning": "进入；入口；登记条目",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "enter（进入） + -y（名词后缀），引申指进入 -> 进入；入场；入口。"
  },
  {
    "word": "envelope",
    "phonetic": "/ˈenvələʊp/",
    "pos": "n.",
    "meaning": "信封；封套，外壳",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "en-（置于内） + velope（包裹/卷绕），引申指信封 -> 信封；封套；封皮。"
  },
  {
    "word": "episode",
    "phonetic": "/ˈepɪsəʊd/",
    "pos": "n.",
    "meaning": "剧集，一集；插曲，片段",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "epi-（在…旁/额外） + eisodos（进入通道），引申指电视剧集或人生小插曲 -> （电视剧的）一集；插曲；片段。"
  },
  {
    "word": "equip",
    "phonetic": "/ɪˈkwɪp/",
    "pos": "vt.",
    "meaning": "装备，配备；使具备",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "源自古诺尔斯语 skipa（装备船只/整军备战），原义见词源，引申指装备 -> 装备；配备；使具备（能力/素质）。"
  },
  {
    "word": "equipment",
    "phonetic": "/ɪˈkwɪpmənt/",
    "pos": "n.",
    "meaning": "设备，器材，装备",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "equip（装备配备） + -ment（名词后缀），引申指设备 -> 设备；装备；器材。"
  },
  {
    "word": "era",
    "phonetic": "/ˈɪərə/",
    "pos": "n.",
    "meaning": "时代，纪元，历史时期",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "源自晚期拉丁语 aera（计算年份的数字铜），原义见词源，引申指时代 -> 时代；纪元；历史时期。"
  },
  {
    "word": "erase",
    "phonetic": "/ɪˈreɪz/",
    "pos": "vt.",
    "meaning": "擦掉，抹去；消除",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "e-（向外/去除） + rase（刮擦/削去），引申指抹去痛苦记忆 -> 擦掉；抹去；消除（记忆/痕迹）。"
  },
  {
    "word": "erect",
    "phonetic": "/ɪˈrekt/",
    "pos": "vt./adj.",
    "meaning": "树立，建立；直立的",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "e-（向上/出） + rect（笔直直立），引申指拔地而起建造大厦 -> 垂直的；竖立的；挺直的。"
  },
  {
    "word": "aggregate",
    "phonetic": "/ˈæɡrɪɡət/",
    "pos": "n./adj.",
    "meaning": "总计；聚集的",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "ag-（= ad- 朝向） + greg-（羊群/聚集） + -ate，引申指总计 -> 总计；合计；聚集。"
  },
  {
    "word": "bailout",
    "phonetic": "/ˈbeɪlaʊt/",
    "pos": "n.",
    "meaning": "紧急财政援助，救助",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "bail（舀水救船脱险/保释） + out（向外脱困），引申指紧急财政援助 -> （尤指财政上的）紧急救助；援助款；紧急救援。"
  },
  {
    "word": "cashier",
    "phonetic": "/kæˈʃɪə(r)/",
    "pos": "n.",
    "meaning": "出纳员，收银员",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "cash（现款金库） + -ier（人），引申指出纳员 -> 出纳员；收银员；开除。"
  },
  {
    "word": "consign",
    "phonetic": "/kənˈsaɪn/",
    "pos": "vt.",
    "meaning": "托运，寄售",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "con-（共同） + sign（签字盖印/委托），引申指托运 -> 托运；寄售；交付。"
  },
  {
    "word": "condensation",
    "phonetic": "/ˌkɒndenˈseɪʃn/",
    "pos": "n.",
    "meaning": "冷凝，凝结；水珠",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然地理、动植物与环境保护】",
    "analysis_type": "构词",
    "analysis": "con-（共同） + dens-（致密/浓缩） + -ation，引申指冷凝 -> 凝结；冷凝；凝结物。"
  },
  {
    "word": "degradation",
    "phonetic": "/ˌdeɡrəˈdeɪʃn/",
    "pos": "n.",
    "meaning": "退化，恶化；降解",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然地理、动植物与环境保护】",
    "analysis_type": "构词",
    "analysis": "de-（向下） + grad-（台阶/级别） + -ation，引申指退化 -> 降解；退化；退化变质。"
  },
  {
    "word": "ecological",
    "phonetic": "/ˌiːkəˈlɒdʒɪkl/",
    "pos": "adj.",
    "meaning": "生态的，生态学的",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然地理、动植物与环境保护】",
    "analysis_type": "构词",
    "analysis": "ecology（生态学） + -ical（形容词后缀），引申指生态的 -> 生态的；生态学的；环保的。"
  },
  {
    "word": "endangered",
    "phonetic": "/ɪnˈdeɪndʒəd/",
    "pos": "adj.",
    "meaning": "濒危的，濒临灭绝的",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然地理、动植物与环境保护】",
    "analysis_type": "构词",
    "analysis": "en-（置于） + danger（危险之中） + -ed（形容词后缀），引申指濒危的 -> 濒危的；面临灭绝危险的（如 endang）。"
  },
  {
    "word": "evaporation",
    "phonetic": "/ɪˌvæpəˈreɪʃn/",
    "pos": "n.",
    "meaning": "蒸发，挥发",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然地理、动植物与环境保护】",
    "analysis_type": "构词",
    "analysis": "e-（出/向外） + vapor-（水蒸气） + -ation（名词后缀），引申指蒸发 -> 蒸发；挥发；消失。"
  },
  {
    "word": "greenhouse",
    "phonetic": "/ˈɡriːnhaʊs/",
    "pos": "n.",
    "meaning": "温室，暖房",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然地理、动植物与环境保护】",
    "analysis_type": "构词",
    "analysis": "green（绿色植物） + house（温室暖房），引申指温室 -> 温室；花房；暖房。"
  },
  {
    "word": "collateral",
    "phonetic": "/kəˈlætərəl/",
    "pos": "n.",
    "meaning": "抵押品，担保物",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "col-（= com- 共同） + later-（侧面/身侧） + -al，引申指抵押品 -> 抵押品；担保物；附带的。"
  },
  {
    "word": "installment",
    "phonetic": "/ɪnˈstɔːlmənt/",
    "pos": "n.",
    "meaning": "分期付款；一期",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "in-（置于内） + stall-（位置/固定义务） + -ment，引申指分期付款 -> 分期付款；（分期付款的）一期付款；（连载小说的）一节。"
  },
  {
    "word": "fiscal",
    "phonetic": "/ˈfɪskl/",
    "pos": "adj.",
    "meaning": "财政的，国库的",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "源自拉丁语 fiscus（装国库公款钱币的），原义见词源，引申指财政的 -> 财政的；国库的；会计的。"
  },
  {
    "word": "creditor",
    "phonetic": "/ˈkredɪtə(r)/",
    "pos": "n.",
    "meaning": "债权人，债主",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "credit-（借贷信任/授信） + -or（人），引申指债权人 -> 债权人；债主；贷方。"
  },
  {
    "word": "debtor",
    "phonetic": "/ˈdetə(r)/",
    "pos": "n.",
    "meaning": "债务人，借方",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "debt（欠款/债务） + -or（人），引申指债务人 -> 债务人；借方；欠债者。"
  },
  {
    "word": "catastrophe",
    "phonetic": "/kəˈtæstrəfi/",
    "pos": "n.",
    "meaning": "灾难，浩劫",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然地理、动植物与环境保护】",
    "analysis_type": "构词",
    "analysis": "cata-（彻底向下/翻转覆灭） + strophe（转动/回旋），引申指灾难 -> 大灾难；浩劫；惨败。"
  },
  {
    "word": "abandon",
    "phonetic": "/əˈbændən/",
    "pos": "vt.",
    "meaning": "放弃，遗弃；离弃",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "a-（处于） + bandon（宣告法外放逐/弃之不顾），引申指彻底放逐放弃或放浪形骸 -> 放弃；抛弃；遗弃。"
  },
  {
    "word": "coherent",
    "phonetic": "/kəʊˈhɪərənt/",
    "pos": "adj.",
    "meaning": "连贯的，条理清晰的",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "co-（共同） + her-（黏附/粘连紧密） + -ent，引申指连贯的 -> 连贯的；条理分明的；一致的。"
  },
  {
    "word": "comprehensive",
    "phonetic": "/ˌkɒmprɪˈhensɪv/",
    "pos": "adj.",
    "meaning": "全面的，综合的",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "com-（共同/完全） + prehens-（抓住包揽） + -ive，引申指全面的 -> 全面的；综合的；包罗万象的。"
  },
  {
    "word": "contrast",
    "phonetic": "/ˈkɒntrɑːst/",
    "pos": "n./vt./vi.",
    "meaning": "对比，对照 vt./vi. /kənˈtrɑːst/",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "contra-（相对/相反） + st-（站立），引申指对比 -> 对比；对照；悬殊差距。"
  },
  {
    "word": "convince",
    "phonetic": "/kənˈvɪns/",
    "pos": "vt.",
    "meaning": "说服，使确信",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "con-（彻底） + vince（征服/制服），引申指说服 -> 使确信；使信服；说服（某人做某事）。"
  },
  {
    "word": "crucial",
    "phonetic": "/ˈkruːʃl/",
    "pos": "adj.",
    "meaning": "至关重要的，关键的",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "cruc-（十字路口生死关头） + -ial（形容词后缀），引申指至关重要的 -> 至关重要的；决定性的；关键性的。"
  },
  {
    "word": "decline",
    "phonetic": "/dɪˈklaɪn/",
    "pos": "vi./vt./n.",
    "meaning": "下降；衰落；婉拒",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "de-（向下/偏离） + clin-（倾斜/屈服），引申指帝国盛极而衰或礼貌客气婉拒 -> 下降；衰退；衰落。"
  },
  {
    "word": "demonstrate",
    "phonetic": "/ˈdemənstreɪt/",
    "pos": "vt.",
    "meaning": "证明，证实；演示",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "de-（彻底） + monstr-（展示/昭示） + -ate，引申指证明 -> 证明；证实；演示。"
  },
  {
    "word": "deteriorate",
    "phonetic": "/dɪˈtɪəriəreɪt/",
    "pos": "vi./vt.",
    "meaning": "恶化，变坏",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "deterior-（更恶化较差） + -ate（动词后缀），引申指恶化 -> 恶化；变坏；退化。"
  },
  {
    "word": "distinguish",
    "phonetic": "/dɪˈstɪŋɡwɪʃ/",
    "pos": "vt./vi.",
    "meaning": "辨别，区分；使显著",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "dis-（分开） + stingu-（戳刺/戳记号） + -ish，引申指辨别 -> 区分；辨别；甄别。"
  },
  {
    "word": "exceed",
    "phonetic": "/ɪkˈsiːd/",
    "pos": "vt.",
    "meaning": "超过，超越；胜过",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "ex-（向外/超出） + ceed（迈步前行），引申指超过 -> 超过；超出；超越（限制/规定）。"
  },
  {
    "word": "explicit",
    "phonetic": "/ɪkˈsplɪsɪt/",
    "pos": "adj.",
    "meaning": "清楚明确的，坦率的",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "ex-（向外） + plic-（折叠/卷起） + -it，引申指清楚明确的 -> 清楚明白的；直截了当的；不含糊的。"
  },
  {
    "word": "exploit",
    "phonetic": "/ɪkˈsplɔɪt/",
    "pos": "vt./n.",
    "meaning": "开发，利用；剥削",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "源自古法语 esploit（向外展开施展），原义见词源，引申指开发 -> 开发；开采；利用。"
  },
  {
    "word": "facilitate",
    "phonetic": "/fəˈsɪlɪteɪt/",
    "pos": "vt.",
    "meaning": "促进，使便利",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "facil-（容易的/灵便的） + -itate（使动后缀），引申指促进 -> 促进；推动；使容易。"
  },
  {
    "word": "foster",
    "phonetic": "/ˈfɒstə(r)/",
    "pos": "vt.",
    "meaning": "培养，促进；抚养",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "源自古英语 fostrian（用食物喂养哺乳培育），原义见词源，引申指培养 -> 培养；促进；助长。"
  },
  {
    "word": "frustrate",
    "phonetic": "/frʌˈstreɪt/",
    "pos": "vt.",
    "meaning": "使沮丧，挫败",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "frustr-（落空/徒劳无功） + -ate（动词后缀），引申指使沮丧 -> 使沮丧；使灰心；阻挠。"
  },
  {
    "word": "illustrate",
    "phonetic": "/ˈɪləstreɪt/",
    "pos": "vt.",
    "meaning": "（用图等）说明，阐明",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "il-（在内/朝向） + lustr-（光亮照耀） + -ate，引申指（用图等）说明 -> （用图表/例子等）说明；阐述；为…作插图。"
  },
  {
    "word": "imply",
    "phonetic": "/ɪmˈplaɪ/",
    "pos": "vt.",
    "meaning": "暗示，含有…的意思",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "im-（进入） + ply（折叠），引申指暗示 -> 暗示；意指；含有…的意思。"
  },
  {
    "word": "insight",
    "phonetic": "/ˈɪnsaɪt/",
    "pos": "n.",
    "meaning": "洞察力，深刻见解",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "in-（深入内心内部） + sight（视线/眼界），引申指洞察力 -> 洞察力；深刻见解；顿悟。"
  },
  {
    "word": "isolate",
    "phonetic": "/ˈaɪsəleɪt/",
    "pos": "vt.",
    "meaning": "使隔离，使孤立",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "源自意大利语 isolato（如同置身孤岛），原义见词源，引申指使隔离 -> 使隔离；孤立；使脱离。"
  },
  {
    "word": "motivate",
    "phonetic": "/ˈməʊtɪveɪt/",
    "pos": "vt.",
    "meaning": "激励，激发；促动",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "motive（动机） + -ate（使动后缀），引申指激励 -> 激励；激发；驱使。"
  },
  {
    "word": "objective",
    "phonetic": "/əbˈdʒektɪv/",
    "pos": "n./adj.",
    "meaning": "目标，目的 adj. 客观的",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "ob-（朝向/对着） + ject-（投掷） + -ive（形容词/名词后缀），引申指目标 -> 客观的；实事求是的；目标。"
  },
  {
    "word": "profound",
    "phonetic": "/prəˈfaʊnd/",
    "pos": "adj.",
    "meaning": "深奥的；深远的，深沉的",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "pro-（向前） + fundus（深渊/底部），引申指深奥的 -> 深邃的；深奥的；渊博的。"
  },
  {
    "word": "proportion",
    "phonetic": "/prəˈpɔːʃn/",
    "pos": "n.",
    "meaning": "比例，比率；部分",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "pro-（依照） + portio（份额/部分），引申指比例 -> 比例；比率；部分。"
  },
  {
    "word": "rational",
    "phonetic": "/ˈræʃnəl/",
    "pos": "adj.",
    "meaning": "理性的，理智的；合理的",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "rat-（计算/权衡） + -ion + -al，引申指理性的 -> 理性的；理智的；合理的。"
  },
  {
    "word": "reluctant",
    "phonetic": "/rɪˈlʌktənt/",
    "pos": "adj.",
    "meaning": "不情愿的，勉强的",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "re-（反向/抗拒） + luct-（角力搏斗） + -ant，引申指不情愿的 -> 不情愿的；勉强的；抗拒的。"
  },
  {
    "word": "trigger",
    "phonetic": "/ˈtrɪɡə(r)/",
    "pos": "vt./n.",
    "meaning": "触发，引发 n. 扳机；诱因",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "源自中古荷兰语 trecker（拉动牵引拉发栓），原义见词源，引申指触发 -> （枪的）扳机；起因；诱因。"
  },
  {
    "word": "vulnerable",
    "phonetic": "/ˈvʌlnərəbl/",
    "pos": "adj.",
    "meaning": "脆弱的，易受伤害的（to）",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "vulner-（创伤/伤口） + -able（易…的），引申指脆弱的 -> 易受攻击的；脆弱的；易受伤害的（to）。"
  },
  {
    "word": "accountability",
    "phonetic": "/əˌkaʊntəˈbɪləti/",
    "pos": "n.",
    "meaning": "问责性，负有责任",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "accountable（应负责任的） + -ility（名词后缀），引申指问责性 -> 有责任；问责制；可追责性。"
  },
  {
    "word": "acquisition",
    "phonetic": "/ˌækwɪˈzɪʃn/",
    "pos": "n.",
    "meaning": "收购；获得物",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "ac-（= ad- 朝向） + quisit-（寻求获取） + -ion，引申指收购 -> 获得；习得；收购。"
  },
  {
    "word": "anticipation",
    "phonetic": "/ænˌtɪsɪˈpeɪʃn/",
    "pos": "n.",
    "meaning": "预料，期盼",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "anticipate（预先把握） + -ation（名词后缀），引申指预料 -> 预料；预期；期望。"
  },
  {
    "word": "appraisal",
    "phonetic": "/əˈpreɪzl/",
    "pos": "n.",
    "meaning": "评估，鉴定",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "appraise（评估定价） + -al（名词后缀），引申指评估 -> 评估；评价；估价。"
  },
  {
    "word": "automation",
    "phonetic": "/ˌɔːtəˈmeɪʃn/",
    "pos": "n.",
    "meaning": "自动化",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "auto-（自动） + mat-（思维运作） + -ation（名词后缀），引申指自动化 -> 自动化；自动化操作；自动控制系统。"
  },
  {
    "word": "availability",
    "phonetic": "/əˌveɪləˈbɪləti/",
    "pos": "n.",
    "meaning": "可利用性，可获得性",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "available（可获得的/有空的） + -ility（名词后缀），引申指可利用性 -> 可用性；可获得性；有效性。"
  },
  {
    "word": "bureaucracy",
    "phonetic": "/bjʊəˈrɒkrəsi/",
    "pos": "n.",
    "meaning": "官僚体制，繁文缛节",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "bureau（办公桌/带有抽屉） + -cracy（统治/权力体系），引申指官僚体制 -> 官僚主义；官僚机构；官僚体制。"
  },
  {
    "word": "calculated",
    "phonetic": "/ˈkælkjuleɪtɪd/",
    "pos": "adj.",
    "meaning": "蓄意的；精打细算的",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "calculate（精密计算） + -ed（形容词后缀），引申指蓄意的 -> 预先计划好的；蓄意的；有计划的。"
  },
  {
    "word": "commercialization",
    "phonetic": "/kəˌmɜːʃəlaɪˈzeɪʃn/",
    "pos": "n.",
    "meaning": "商业化",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "commercial（商业的） + -ize + -ation（过程），引申指商业化 -> 商业化；商品化；市场化推广过程。"
  },
  {
    "word": "compliance",
    "phonetic": "/kəmˈplaɪəns/",
    "pos": "n.",
    "meaning": "顺从，合规",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "comply（顺从遵照执行） + -ance（名词后缀），引申指顺从 -> 顺从；服从；（对法规/标准的）合规。"
  },
  {
    "word": "consumption",
    "phonetic": "/kənˈsʌmpʃn/",
    "pos": "n.",
    "meaning": "消费；消耗",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "con-（彻底） + sumpt-（拿取耗尽） + -ion，引申指消费 -> 消耗；消费量；消费。"
  },
  {
    "word": "convene",
    "phonetic": "/kənˈviːn/",
    "pos": "vi./vt.",
    "meaning": "召集，开会；集合",
    "part": "第一部分：超级核心母词族",
    "group": "【14. ven / vent 来/到达/发生】",
    "analysis_type": "构词",
    "analysis": "con-（共同） + vene（走来/到达），引申指召集 -> 召集；开会；集合。"
  },
  {
    "word": "intervention",
    "phonetic": "/ˌɪntəˈvenʃn/",
    "pos": "n.",
    "meaning": "干预，介入",
    "part": "第一部分：超级核心母词族",
    "group": "【14. ven / vent 来/到达/发生】",
    "analysis_type": "构词",
    "analysis": "inter-（在两者之间） + vent-（来/走入） + -ion，引申指干预 -> 干预；介入；调停。"
  },
  {
    "word": "venue",
    "phonetic": "/ˈvenjuː/",
    "pos": "n.",
    "meaning": "举办场地，会场",
    "part": "第一部分：超级核心母词族",
    "group": "【14. ven / vent 来/到达/发生】",
    "analysis_type": "构词",
    "analysis": "源自古法语 venue（到来/到达之场所），原义见词源，引申指举办场地 -> 举行地点；举办场所（比赛/会议/音乐会等）；（犯罪或诉讼发生的）审判地。"
  },
  {
    "word": "diversify",
    "phonetic": "/daɪˈvɜːsɪfaɪ/",
    "pos": "vt./vi.",
    "meaning": "使多样化；多元化经营",
    "part": "第一部分：超级核心母词族",
    "group": "【15. vert / vers 转/转向/反转】",
    "analysis_type": "构词",
    "analysis": "diverse（多样的） + -ify（使动后缀），引申指使多样化 -> 使多样化；使多元化；（投资中）分散投资。"
  },
  {
    "word": "controversy",
    "phonetic": "/ˈkɒntrəvɜːsi/",
    "pos": "n.",
    "meaning": "公开辩论，争论，争议",
    "part": "第一部分：超级核心母词族",
    "group": "【15. vert / vers 转/转向/反转】",
    "analysis_type": "构词",
    "analysis": "contra-（反对/逆着） + vers-（转动面对） + -y，引申指公开辩论 -> 争论；争议；辩论。"
  },
  {
    "word": "controversial",
    "phonetic": "/ˌkɒntrəˈvɜːʃl/",
    "pos": "adj.",
    "meaning": "引起争论的，有争议的",
    "part": "第一部分：超级核心母词族",
    "group": "【15. vert / vers 转/转向/反转】",
    "analysis_type": "构词",
    "analysis": "controversy（争议辩论） + -ial（形容词后缀），引申指引起争论的 -> 引起争论的；有争议的；有分歧的。"
  },
  {
    "word": "reconstruct",
    "phonetic": "/ˌriːkənˈstrʌkt/",
    "pos": "vt.",
    "meaning": "重建，改建；重现",
    "part": "第一部分：超级核心母词族",
    "group": "【16. stru / struct 建造/构筑/堆叠】",
    "analysis_type": "构词",
    "analysis": "re-（重新） + construct（建造/搭建），引申指重建 -> 重建；再建；重塑。"
  },
  {
    "word": "instrument",
    "phonetic": "/ˈɪnstrəmənt/",
    "pos": "n.",
    "meaning": "仪器，器械；乐器",
    "part": "第一部分：超级核心母词族",
    "group": "【16. stru / struct 建造/构筑/堆叠】",
    "analysis_type": "构词",
    "analysis": "in-（在内） + stru-（构筑/建造） + -ment（工具手段），引申指仪器 -> 仪器；器械；乐器。"
  },
  {
    "word": "accountable",
    "phonetic": "/əˈkaʊntəbl/",
    "pos": "adj.",
    "meaning": "有责任的，应做解释的",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "account（交代账目） + -able（能…的），引申指有责任的 -> 负有责任的；应作解释的；（对…）负责任的（to sb fo）。"
  },
  {
    "word": "affluence",
    "phonetic": "/ˈæfluəns/",
    "pos": "n.",
    "meaning": "富裕，富足",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "af-（= ad- 朝向） + flu-（流动/流淌） + -ence，引申指富裕 -> 富裕；富足；繁荣。"
  },
  {
    "word": "broker",
    "phonetic": "/ˈbrəʊkə(r)/",
    "pos": "n.",
    "meaning": "经纪人，中间人",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "源自盎格鲁-诺曼法语 brocour（启封酒桶零售小贩），原义见词源，引申指经纪人 -> 经纪人；中间人；掮客。"
  },
  {
    "word": "competitor",
    "phonetic": "/kəmˈpetɪtə(r)/",
    "pos": "n.",
    "meaning": "竞争者，对手",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "com-（共同） + petit-（追逐/角逐） + -or（人），引申指竞争者 -> 竞争者；竞争对手；参赛者。"
  },
  {
    "word": "corporate",
    "phonetic": "/ˈkɔːpərət/",
    "pos": "adj.",
    "meaning": "公司的，企业的；法人的",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "corpor-（身体/实体法人） + -ate（形容词后缀），引申指公司的 -> 公司的；企业的；法人的。"
  },
  {
    "word": "corporation",
    "phonetic": "/ˌkɔːpəˈreɪʃn/",
    "pos": "n.",
    "meaning": "大公司，法人企业",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "corporate（公司法人的） + -ion（名词后缀），引申指大公司 -> 大公司；大型企业集团；法人。"
  },
  {
    "word": "default",
    "phonetic": "/dɪˈfɔːlt/",
    "pos": "vi./n.",
    "meaning": "违约，不履行义务；默认",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "de-（完全） + faillir / fail（失败/未能履职），引申指违约 -> 违约；不履行义务（尤指债务违约）；弃权。"
  },
  {
    "word": "deflation",
    "phonetic": "/ˌdiːˈfleɪʃn/",
    "pos": "n.",
    "meaning": "通货紧缩",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "de-（向下/排出） + flat-（吹气膨胀） + -ion，引申指通货紧缩 -> 通货紧缩；通缩；泄气。"
  },
  {
    "word": "depreciate",
    "phonetic": "/dɪˈpriːʃieɪt/",
    "pos": "vt./vi.",
    "meaning": "贬值，折旧；轻视",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "de-（向下） + preci-（价格/价值） + -ate（动词后缀），引申指贬值 -> （资产等）贬值；跌价；折旧。"
  },
  {
    "word": "derivative",
    "phonetic": "/dɪˈrɪvətɪv/",
    "pos": "adj./n.",
    "meaning": "派生的 n. 金融衍生品",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "de-（从…而来） + riv-（溪流/河流） + -ative，引申指派生的 n. 金融衍生品 -> 衍生工具；金融衍生产品；派生词。"
  },
  {
    "word": "endorse",
    "phonetic": "/ɪnˈdɔːs/",
    "pos": "vt.",
    "meaning": "赞同，支持；在支票背面背书",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "en-（置于上） + dorse（脊背/背面），引申为知名领袖或社会权威出面公开 -> （在支票背面）背书；签字；赞同。"
  },
  {
    "word": "entrepreneur",
    "phonetic": "/ˌɒntrəprəˈnɜː(r)/",
    "pos": "n.",
    "meaning": "创业家，企业家",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "entre-（在…之间） + preneur（承担者/抓取拿取者），引申指创业家 -> 创业者；企业家；开创者。"
  },
  {
    "word": "analytical",
    "phonetic": "/ˌænəˈlɪtɪkl/",
    "pos": "adj.",
    "meaning": "分析的，解析的",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "analyze（分析） + -ical（形容词后缀），引申指分析的 -> 分析的；解析的；善于分析的。"
  },
  {
    "word": "appendix",
    "phonetic": "/əˈpendɪks/",
    "pos": "n.",
    "meaning": "附录；阑尾",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "ap-（= ad- 朝向） + pend-（悬挂/吊起） + -ix，引申指附录 -> 附录；补充材料；（人体解剖中的）阑尾。"
  },
  {
    "word": "assimilate",
    "phonetic": "/əˈsɪməleɪt/",
    "pos": "vt./vi.",
    "meaning": "吸收，同化；消化",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "as-（= ad- 使变得） + simil-（相似/相同） + -ate，引申指吸收 -> 吸收；消化（知识/营养）；使同化。"
  },
  {
    "word": "attainment",
    "phonetic": "/əˈteɪnmənt/",
    "pos": "n.",
    "meaning": "成就，造诣；达到",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "attain（达到/获取） + -ment（名词后缀），引申指成就 -> 达到；获得；造诣。"
  },
  {
    "word": "classmate",
    "phonetic": "/ˈklɑːsmeɪt/",
    "pos": "n.",
    "meaning": "同班同学",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "class（班级/教室） + mate（伙伴/同伴），引申指同班同学 -> 同班同学。"
  },
  {
    "word": "cognition",
    "phonetic": "/kɒɡˈnɪʃn/",
    "pos": "n.",
    "meaning": "认识，认知；感知",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "co-（共同） + gnit- / gno-（知晓/认知） + -ion，引申指认识 -> 认知；认知能力；知觉。"
  },
  {
    "word": "commence",
    "phonetic": "/kəˈmens/",
    "pos": "vt./vi.",
    "meaning": "开始，着手",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "com-（完全） + initiare（开启），引申指开始 -> 开始；着手；着手进行（commence）。"
  },
  {
    "word": "competence",
    "phonetic": "/ˈkɒmpɪtəns/",
    "pos": "n.",
    "meaning": "能力，胜任；管辖权",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "compete（胜任/竞争） + -ence（名词后缀），引申指能力 -> 能力；胜任力；管辖权。"
  },
  {
    "word": "comprehension",
    "phonetic": "/ˌkɒmprɪˈhenʃn/",
    "pos": "n.",
    "meaning": "理解，理解力",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "comprehend（充分理解） + -ion（名词后缀），引申指理解 -> 理解；理解力；（语言教学中的）阅读理解练习。"
  },
  {
    "word": "demonstration",
    "phonetic": "/ˌdemənˈstreɪʃn/",
    "pos": "n.",
    "meaning": "示范，演示；证实",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "demonstrate（演示展示） + -ion（名词后缀），引申指示范 -> 示范；演示；证实。"
  },
  {
    "word": "department",
    "phonetic": "/dɪˈpɑːtmənt/",
    "pos": "n.",
    "meaning": "系，学部；（政府/机构）部门，局，司",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "de-（分开） + part（部分） + -ment（名词后缀），引申指系 -> 部门；大学系科。"
  },
  {
    "word": "enrollment",
    "phonetic": "/ɪnˈrəʊlmənt/",
    "pos": "n.",
    "meaning": "入学人数；注册，入会",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "enroll（注册学籍入册） + -ment（名词后缀），引申指入学人数 -> 入学；注册；招收。"
  },
  {
    "word": "contamination",
    "phonetic": "/kənˌtæmɪˈneɪʃn/",
    "pos": "n.",
    "meaning": "污染，玷污；污染物",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然地理、动植物与环境保护】",
    "analysis_type": "构词",
    "analysis": "con-（共同） + tam- / tag-（触碰/沾染） + -ination，引申指污染 -> 污染；弄脏；污染物。"
  },
  {
    "word": "evolution",
    "phonetic": "/ˌiːvəˈluːʃn/",
    "pos": "n.",
    "meaning": "进化，演变；渐进发展",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然地理、动植物与环境保护】",
    "analysis_type": "构词",
    "analysis": "e-（向外/展开） + volu（卷/转） + -tion（名词后缀），原义“向外展开卷轴”，引申为逐步展开、演化 -> 演变；演化；进化。"
  },
  {
    "word": "hazardous",
    "phonetic": "/ˈhæzədəs/",
    "pos": "adj.",
    "meaning": "危险的，有毒害的",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然地理、动植物与环境保护】",
    "analysis_type": "构词",
    "analysis": "hazard（骰子游戏/危险运气） + -ous（充满的），引申指危险的 -> 危险的；冒险的；有害的（如 hazard）。"
  },
  {
    "word": "purify",
    "phonetic": "/ˈpjʊərɪfaɪ/",
    "pos": "vt.",
    "meaning": "净化，使纯净；提纯",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然地理、动植物与环境保护】",
    "analysis_type": "构词",
    "analysis": "pur-（纯净/无杂质） + -ify（使动后缀），引申指净化 -> 使纯净；净化；提纯。"
  },
  {
    "word": "sanctuary",
    "phonetic": "/ˈsæŋktʃuəri/",
    "pos": "n.",
    "meaning": "鸟兽保护区；避难所",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然地理、动植物与环境保护】",
    "analysis_type": "构词",
    "analysis": "sanct-（神圣） + -uary（场所后缀），引申指鸟兽保护区 -> 避难所；庇护所；（鸟兽）禁猎区。"
  },
  {
    "word": "scarcity",
    "phonetic": "/ˈskeəsəti/",
    "pos": "n.",
    "meaning": "缺乏，不足，紧缺",
    "part": "第四部分：核心分类专题群",
    "group": "【87. 场景专题 3：自然地理、动植物与环境保护】",
    "analysis_type": "构词",
    "analysis": "scarce（稀缺匮乏的） + -ity（名词后缀），引申指缺乏 -> 缺乏；不足；罕见。"
  },
  {
    "word": "accelerator",
    "phonetic": "/əkˈseləreɪtə(r)/",
    "pos": "n.",
    "meaning": "油门，加速器；促进剂",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "accelerate（加速加快） + -or（机器部件），引申指油门 -> （机动车的）油门；加速踏板；（物理学）粒子加速器。"
  },
  {
    "word": "accommodate",
    "phonetic": "/əˈkɒmədeɪt/",
    "pos": "vt.",
    "meaning": "容纳；为…提供住宿；迎合",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "ac-（= ad- 朝向） + commod-（便利合宜） + -ate，引申指容纳 -> 容纳；向…提供住处；迎合。"
  },
  {
    "word": "accommodation",
    "phonetic": "/əˌkɒməˈdeɪʃn/",
    "pos": "n.",
    "meaning": "住宿，膳宿；调节",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "accommodate（提供住宿） + -ion（名词后缀），引申指住宿 -> 住宿；住处；膳宿。"
  },
  {
    "word": "administration",
    "phonetic": "/ədˌmɪnɪˈstreɪʃn/",
    "pos": "n.",
    "meaning": "行政部门；管理，行政",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "administer（管理统领） + -ation（名词后缀），引申指行政部门 -> 行政管理；行政体制；政府。"
  },
  {
    "word": "boarding",
    "phonetic": "/ˈbɔːdɪŋ/",
    "pos": "n.",
    "meaning": "登船，登机",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "board（登船/提供伙食木板） + -ing（名词后缀），引申指登船 -> 登机；登船；寄宿（boarding）。"
  },
  {
    "word": "citizenship",
    "phonetic": "/ˈsɪtɪzənʃɪp/",
    "pos": "n.",
    "meaning": "公民身份；公民权利与义务",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "citizen（公民） + -ship（身份资格），引申指公民身份 -> 公民身份；国籍；公民资格。"
  },
  {
    "word": "civilian",
    "phonetic": "/səˈvɪliən/",
    "pos": "n./adj.",
    "meaning": "平民，百姓 adj. 平民的",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "civil（平民的/民事的） + -ian（人），引申指平民 -> 平民；老百姓；平民的。"
  },
  {
    "word": "councillor",
    "phonetic": "/ˈkaʊnsələ(r)/",
    "pos": "n.",
    "meaning": "地方议会议员",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "council（议会/委员会） + -or（人员），引申指地方议会议员 -> 市议员；政务委员；地方议会成员（美式亦拼作 co）。"
  },
  {
    "word": "demographic",
    "phonetic": "/ˌdeməˈɡræfɪk/",
    "pos": "adj./n.",
    "meaning": "人口统计的 n. 特定人群",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "demo-（人口/民众） + graph-（统计描摹） + -ic（形容词后缀），引申指人口统计的 n. 特定人群 -> 人口统计学的；人口学的；特定人口群体的（如 target）。"
  },
  {
    "word": "addiction",
    "phonetic": "/əˈdɪkʃn/",
    "pos": "n.",
    "meaning": "沉溺，上瘾；嗜好",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、医疗生理与情绪心理】",
    "analysis_type": "构词",
    "analysis": "ad-（朝向/交付） + dict-（判决言说），引申指沉溺 -> 瘾；成瘾；沉溺。"
  },
  {
    "word": "cognitive",
    "phonetic": "/ˈkɒɡnətɪv/",
    "pos": "adj.",
    "meaning": "认知的，感知的",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、医疗生理与情绪心理】",
    "analysis_type": "构词",
    "analysis": "cognit-（认知知晓） + -ive（形容词后缀），引申指认知的 -> 认知的；知觉的；认识过程的（cognitiv）。"
  },
  {
    "word": "vitality",
    "phonetic": "/vaɪˈtæləti/",
    "pos": "n.",
    "meaning": "活力，生机；持久生命力",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、医疗生理与情绪心理】",
    "analysis_type": "构词",
    "analysis": "vit-（生命） + -ality（名词后缀），引申指活力 -> 生机；活力；生命力。"
  },
  {
    "word": "attain",
    "phonetic": "/əˈteɪn/",
    "pos": "vt.",
    "meaning": "达到，获得；完成",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "at-（= ad- 朝向） + tain / tangere（触碰接触），引申指经过十年寒窗苦读如愿摘得博 -> 达到；获得；实现（目标）。"
  },
  {
    "word": "caption",
    "phonetic": "/ˈkæpʃn/",
    "pos": "n./vt.",
    "meaning": "标题，说明文字 vt. 加标题",
    "part": "第一部分：超级核心母词族",
    "group": "【1. cap / capt / cept / ceiv / cip 抓/拿/容纳/理解】",
    "analysis_type": "构词",
    "analysis": "capt-（拿取/抓取） + -ion（名词后缀），原指法庭传票当场逮捕令，引申指标题 -> （图片/漫画的）说明文字；标题；（电影的）字幕。"
  },
  {
    "word": "factual",
    "phonetic": "/ˈfæktʃuəl/",
    "pos": "adj.",
    "meaning": "事实的，真实的",
    "part": "第一部分：超级核心母词族",
    "group": "【2. fac / fact / fect / fic / ficient 做/制作/产生】",
    "analysis_type": "构词",
    "analysis": "fact（事实） + -ual（形容词后缀），引申指事实的 -> 事实的；基于事实的；真实的。"
  },
  {
    "word": "constituent",
    "phonetic": "/kənˈstɪtʃuənt/",
    "pos": "n./adj.",
    "meaning": "要素，成分 adj. 组成的",
    "part": "第一部分：超级核心母词族",
    "group": "【3. sta / stat / stit / sist 站立/确立/安置/固定】",
    "analysis_type": "构词",
    "analysis": "con-（共同） + stitu-（站立确立） + -ent（人/物），引申指要素 -> 选民；选区选民；成分。"
  },
  {
    "word": "discourse",
    "phonetic": "/ˈdɪskɔːs/",
    "pos": "n.",
    "meaning": "论述，话语；演讲",
    "part": "第一部分：超级核心母词族",
    "group": "【12. curr / curs / cours 跑/流动/进程】",
    "analysis_type": "构词",
    "analysis": "dis-（向各方/深入） + course（奔跑流淌），引申指论述 -> （学术严肃的）演说；演讲；论述。"
  },
  {
    "word": "arbitration",
    "phonetic": "/ˌɑːbɪˈtreɪʃn/",
    "pos": "n.",
    "meaning": "仲裁，公断",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "arbitr-（仲裁裁决） + -ation（名词后缀），引申指仲裁 -> 仲裁；公断；仲裁裁决程序。"
  },
  {
    "word": "bilateral",
    "phonetic": "/ˌbaɪˈlætərəl/",
    "pos": "adj.",
    "meaning": "双边的，双方的",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "bi-（两个） + later-（侧面/边） + -al，引申指双边的 -> 双边的；双方参与的；（生物学）两侧对称的。"
  },
  {
    "word": "boycott",
    "phonetic": "/ˈbɔɪkɒt/",
    "pos": "vt./n.",
    "meaning": "联合抵制，拒绝购买",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "源自十九世纪爱尔兰严苛无情土地经纪人博伊考特上尉（Charles ），原义见词源，引申指联合抵制 -> 抵制；拒绝购买；拒绝参与。"
  },
  {
    "word": "clearing",
    "phonetic": "/ˈklɪərɪŋ/",
    "pos": "n.",
    "meaning": "（银行）票据交换，结算",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "clear（结清清爽） + -ing，引申指（银行）票据交换 -> （森林中的）空地；林中空地；（银行的）清算。"
  },
  {
    "word": "contingency",
    "phonetic": "/kənˈtɪndʒənsi/",
    "pos": "n.",
    "meaning": "意外事故；应急储备",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "con-（共同） + ting- / tangere（接触碰到机缘） + -ency，引申指意外事故 -> 突发事件；不测风云；意外事故。"
  },
  {
    "word": "cumulative",
    "phonetic": "/ˈkjuːmjələtɪv/",
    "pos": "adj.",
    "meaning": "累积的，渐增的",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "cumul-（堆叠） + -ative（形容词后缀），引申指累积的 -> 累积的；渐增的；累积而成的。"
  },
  {
    "word": "devaluation",
    "phonetic": "/ˌdiːˌvæljuˈeɪʃn/",
    "pos": "n.",
    "meaning": "（货币）贬值",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "de-（向下降低） + value（价值） + -ation，引申指（货币）贬值 -> （货币的）法定贬值；贬值；贬低。"
  },
  {
    "word": "dumping",
    "phonetic": "/ˈdʌmpɪŋ/",
    "pos": "n.",
    "meaning": "倾销",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "dump（倾倒垃圾/抛卸） + -ing（名词后缀），引申指倾销 -> （商贸反垄断中的）倾销；低价抛售倾销；倾倒废弃物。"
  },
  {
    "word": "globalization",
    "phonetic": "/ˌɡləʊbəlaɪˈzeɪʃn/",
    "pos": "n.",
    "meaning": "全球化",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "global（全球的） + -ization（过程后缀），引申指全球化 -> 全球化；经济全球一体化进程。"
  },
  {
    "word": "hedge",
    "phonetic": "/hedʒ/",
    "pos": "n./vt.",
    "meaning": "对冲；套期保值",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "原指农田四周种植的茂密灌木树篱（用于圈护财产抵御风险），金融领域借指为防范资产价格剧烈波动而构建的风险防线 -> n. 树篱；套期保值，对冲手段；v. 防范风险，对冲。"
  },
  {
    "word": "holding",
    "phonetic": "/ˈhəʊldɪŋ/",
    "pos": "n.",
    "meaning": "控股公司；股份，财产",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "hold（握住/持有） + -ing + -s，引申指控股公司 -> 控股公司（常用 holdi）；持有资产；股票储备（常用复数 hol）。"
  },
  {
    "word": "leverage",
    "phonetic": "/ˈliːvərɪdʒ/",
    "pos": "n./vt.",
    "meaning": "杠杆比率；利用",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "lever（杠杆） + -age（名词/动词后缀），引申指杠杆比率 -> 杠杆作用；杠杆力；撬动借贷资金。"
  },
  {
    "word": "compression",
    "phonetic": "/kəmˈpreʃn/",
    "pos": "n.",
    "meaning": "压缩，压紧；浓缩",
    "part": "第一部分：超级核心母词族",
    "group": "【30. 母词族：press / pre- / prim-（压/先/第一）】",
    "analysis_type": "构词",
    "analysis": "com-（共同） + press-（挤压） + -ion，引申指压缩 -> 压缩；压紧；浓缩。"
  },
  {
    "word": "adversary",
    "phonetic": "/ˈædvəsəri/",
    "pos": "n.",
    "meaning": "对手，敌手",
    "part": "第一部分：超级核心母词族",
    "group": "【35. 母词族：vert / vers-（转/翻转）】",
    "analysis_type": "构词",
    "analysis": "ad-（朝向/对抗） + vers-（转动对着） + -ary（人），引申指对手 -> 敌手；对手；对抗者。"
  },
  {
    "word": "deception",
    "phonetic": "/dɪˈsepʃn/",
    "pos": "n.",
    "meaning": "欺骗，骗局；诡计",
    "part": "第一部分：超级核心母词族",
    "group": "【01. cap / capt / cept / ceiv / cip 抓/拿/容纳/理解】",
    "analysis_type": "构词",
    "analysis": "de-（向下/变坏） + cept（抓/拿取） + -ion（名词后缀），原指暗中做手脚把人拿捏住，引申指欺骗 -> 欺骗；骗局。"
  },
  {
    "word": "merger",
    "phonetic": "/ˈmɜːdʒə/",
    "pos": "n.",
    "meaning": "（企业）合并，兼并",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "merge（浸没/融合） + -er（名词后缀），引申指（企业）合并 -> 兼并；合并。"
  },
  {
    "word": "liquidity",
    "phonetic": "/lɪˈkwɪdəti/",
    "pos": "n.",
    "meaning": "流动性，变现能力；流动资金",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "liquid（液体的/流动的） + -ity（名词后缀），引申指流动性 -> 流动性；变现性。"
  },
  {
    "word": "unacceptable",
    "phonetic": "/ˌʌnəkˈseptəbl/",
    "pos": "adj.",
    "meaning": "无法接受的，绝对不能容忍的，突破底线不可容许的（unacceptable behavior / risk / conditions / loss）；令人完全无法接受的严峻后果",
    "part": "第一部分：超级核心母词族",
    "group": "【1. cap / capt / cept / ceiv / cip 抓/拿/容纳/理解】",
    "analysis_type": "构词",
    "analysis": "un-（否定前缀：绝对不/非） + acceptable（可接受的） -> 某项行径、安全隐患或者单边霸凌条款在性质上彻底公然践踏了国家宪法公民基本人权、国际法主权平等原则或者安全生产生命底线红线；在任何有起码良知与法治原则的人心天理面前属于自始至终绝对百分之百留不出哪怕半毫米容忍妥协空间的不可接受极端恶劣状态。"
  },
  {
    "word": "participation",
    "phonetic": "/pɑːˌtɪsɪˈpeɪʃn/",
    "pos": "n.",
    "meaning": "参与，参加，全过程积极深度参与（active citizen participation 公民广泛民主参与 / worker participation in management 工人参与企业民主管理）；分享，分担分担责任贡献",
    "part": "第一部分：超级核心母词族",
    "group": "【1. cap / capt / cept / ceiv / cip 抓/拿/容纳/理解】",
    "analysis_type": "构词",
    "analysis": "part-（部分/一份） + -i- + cip- / cap-（抓取等 -> 在一个宏大的集体事业、历史洪流或者民主法治决策共同体大沙盘中；每一个人都自觉主动伸出双手紧紧握住属于自己的一份沉甸甸神圣责任与主人翁权利、深度融入并贡献自己的心智汗水力量。"
  },
  {
    "word": "constitutional",
    "phonetic": "/ˌkɒnstɪˈtjuːʃənl/",
    "pos": "adj./n.",
    "meaning": "宪法的，宪政宪制合宪合法的（constitutional law 宪法 / constitutional rights 宪法赋予的基本权利 / constitutional amendment 宪法修正案）；（人体/生理）体质上的，本性固有的（a constitutional weakness 体质虚弱）；（为了强身健体而进行的）例行散步，保健性散步（take a morning constitutional 晨间散步健步走）",
    "part": "第一部分：超级核心母词族",
    "group": "【2. sta / sist / st 站立/建立/停留】",
    "analysis_type": "构词",
    "analysis": "constitution（国家根本大法宪法） + -al（形容词后缀），原义见词根，引申指宪法的 -> 国家的合宪法定的宪法层面的；人体生理体质本性上的；为健康强身而进行的例行日常散步（n.）。"
  },
  {
    "word": "institutional",
    "phonetic": "/ˌɪnstɪˈtjuːʃənl/",
    "pos": "adj.",
    "meaning": "制度的，体制上的，机制顶层设计维度的（institutional reform 制度性体制机制深化改革 / institutional barriers 体制性障碍藩篱）；机构的，具有法人机构专业投资者地位的（institutional investors 机构投资者）；（养老院/公立机构等）收容机构设施的；习以为常刻板惯性的（institutional bias 制度性系统性偏见）",
    "part": "第一部分：超级核心母词族",
    "group": "【2. sta / sist / st 站立/建立/停留】",
    "analysis_type": "构词",
    "analysis": "institution（制度/设立确立的社会公器） + -al（形容词后缀），原义见词根，引申指制度的 -> 国家深水区制度层面的体制上的；专业法人机构投资者的；福利收容机构设施的。"
  },
  {
    "word": "unstable",
    "phonetic": "/ʌnˈsteɪbl/",
    "pos": "adj.",
    "meaning": "不稳定的，动荡摇摆的，不牢固易倾覆垮塌的（an unstable structure / government）；（化学物质/同位素）易分解易变不稳定的（an unstable isotope 放射性不稳定同位素）；（情绪/精神）极其不稳定喜怒无常的（emotionally unstable）",
    "part": "第一部分：超级核心母词族",
    "group": "【2. sta / sist / st 站立/建立/停留】",
    "analysis_type": "构词",
    "analysis": "un-（否定前缀：不/非） + stable（稳定的） -> 重心高高悬空、地基松软摇晃、微风一吹便在重力失衡下拉扯倾斜随时可能轰然倒地砸个粉碎的危险摇晃物理状态；在核物理与化学前沿中指原子核内部质子中子比例严重失衡、强相互作用力无法克服库仑斥力而在数微秒内必须发生放射性裂变衰变并释放高能辐射粒子的易变不稳定物理化学物象（unstable）。"
  },
  {
    "word": "statistical",
    "phonetic": "/stəˈtɪstɪkl/",
    "pos": "adj.",
    "meaning": "统计的，统计学的大数据的，基于实证数理统计推断概率分析的（statistical analysis / significance 统计学显著性检验；statistical probability 统计概率）；统计数据维度的",
    "part": "第一部分：超级核心母词族",
    "group": "【2. sta / sist / st 站立/建立/停留】",
    "analysis_type": "构词",
    "analysis": "statistic（统计数字/国家管理数据） + -al（形容词后缀） -> 现代科学实证主义最高判官标准：完全摒弃基于极少数个案幸存者偏差所产生的盲人摸象主观臆断；在数理统计学大数定律与中心极限定理支撑下；调动大样本量双盲随机对照队列数据、通过严格回归分析、假设检验计算出p值（p-value）以量化评估某一科学结论是否在数学真理尺度上真正确凿具备不可被随机巧合所解释的统计学显著性权威属性。"
  },
  {
    "word": "unsteady",
    "phonetic": "/ʌnˈstedi/",
    "pos": "adj.",
    "meaning": "不稳定的，摇摇晃晃晃动不稳的，站立不稳步履踉跄的（unsteady on one's feet 走起路来脚步虚浮踉跄；unsteady hands 颤抖发抖不稳的双手）；断断续续忽明忽暗时强时弱的（unsteady breathing 呼吸微弱紊乱断续；unsteady flame 摇曳微弱不定的烛火）",
    "part": "第一部分：超级核心母词族",
    "group": "【2. sta / sist / st 站立/建立/停留】",
    "analysis_type": "构词",
    "analysis": "un-（否定前缀：不/非） + steady（坚固稳健平稳的） -> 双腿膝盖在重病大手术全麻初醒、严重高山缺氧或者极度饥寒交迫之下由于下肢肌肉肌张力严重不足导致身体重心左右剧烈晃动摇摆、每迈出一步都东倒西歪险象环生随时可能栽倒在地的极度虚弱失衡步态状态；引申指狂风中随时可能被一口气吹灭的摇曳不定的微弱烛火微光；或在极端焦虑重压下食指不由自主产生细微震颤发抖使得高倍瞄准镜十字线上下晃动无法锁死靶心的神经肌肉失控状态。"
  },
  {
    "word": "substitution",
    "phonetic": "/ˌsʌbstɪˈtjuːʃn/",
    "pos": "n.",
    "meaning": "替代，替换，代用（import substitution 发展经济学进口替代战略；the substitution of clean energy for fossil fuels 绿色能源对化石燃料的彻底替代）；经济学替代效应（the substitution effect）；体育比赛中的中途换人替补操作",
    "part": "第一部分：超级核心母词族",
    "group": "【2. sta / sist / st 站立/建立/停留】",
    "analysis_type": "构词",
    "analysis": "sub-（在…位置下方/取而代之） + stitut-（建立站立） +等 -> 当原本站在某一主力位置上的构件、球员、或者某一严重依赖外部进口的高风险供应链卡脖子核心关键原材料因断供、伤病或成本过高而被迫退场时；从后方迅速派遣并推上一个性能完全对等甚至更加过硬安全可靠的国产化全自主研发新力量挺身而出稳稳立在原位接替发挥相同甚至更优越主导功能的闭环大动作替换替代机制。"
  },
  {
    "word": "submission",
    "phonetic": "/səbˈmɪʃn/",
    "pos": "n.",
    "meaning": "提交，呈递，正式报送审查的文件论文（paper submission deadline 截稿日期；submission of tender bids 投标书递交）；顺从屈服，臣服投降服从（force the enemy into submission 迫使敌人彻底屈服投降）；法庭辩护意见",
    "part": "第一部分：超级核心母词族",
    "group": "【8. mit / mis 送/放/派】",
    "analysis_type": "构词",
    "analysis": "sub-（在…下方） + miss- / mit-（送出/放下） + -ion（名词后缀），原义见词根，引申指提交 -> 正式向官方呈递提交报送文件论文；政治军事上的屈膝屈服顺从投降；辩护大律师当庭向合议庭法官呈递的正式书面代理辩护意见。"
  },
  {
    "word": "disposable",
    "phonetic": "/dɪˈspəʊzəbl/",
    "pos": "adj./n.",
    "meaning": "一次性的，用后即扔丢弃的（disposable medical gloves/masks / disposable chopsticks）；可自由支配的，扣除税费后完全任由个人随心所欲支配花销的（disposable income 个人可支配收入）；一次性用品耗材（常用复数 disposables）",
    "part": "第一部分：超级核心母词族",
    "group": "【5. pon / pos / pound 放置】",
    "analysis_type": "构词",
    "analysis": "dis-（分散/向外） + pos-（放置处理） + -able（能够…的形容词后缀），原义见词根，引申指一次性的 -> 一次性用后即弃的（disposab）；金融经济学扣除税费后可自由支配的（disposab）；一次性医疗卫生日用品耗材（n.）。"
  },
  {
    "word": "opposition",
    "phonetic": "/ˌɒpəˈzɪʃn/",
    "pos": "n.",
    "meaning": "反对，抗议，强烈反对抵制立场（strong popular opposition to the proposal 广大群众的强烈反对意见）；反对党，在野党反对派（the parliamentary opposition / the leader of the opposition 反对党领袖）；对立对抗，面对面对立位置状态；（天文学行星运行）冲，冲日现象（planetary opposition）",
    "part": "第一部分：超级核心母词族",
    "group": "【5. pon / pos / pound 放置】",
    "analysis_type": "构词",
    "analysis": "op- / ob-（在…正对面面对面逆向而立） + posit-（放置站稳） + -ion（名词后缀），原义见词根，引申指反对 -> 强烈的社会反对与抵制抗议；议会合宪在野反对党派大集团；两相面对面对立状态。"
  },
  {
    "word": "disposition",
    "phonetic": "/ˌdɪspəˈzɪʃn/",
    "pos": "n.",
    "meaning": "性情，秉性脾气，天生个性倾向（a calm/cheerful disposition 沉着/开朗的性格）；（军事战略/兵力兵器）战役部署，战略兵力配置布局（strategic troop disposition 战略兵力展开部署）；处置，支配，合法处分处决财产（the testamentary disposition of assets 遗嘱处分财产）；倾向意向，倾向性意愿（a disposition to argue 爱争辩的倾向）",
    "part": "第一部分：超级核心母词族",
    "group": "【5. pon / pos / pound 放置】",
    "analysis_type": "构词",
    "analysis": "dis-（分散/向各方） + posit-（放置/安排布署） + -ion（名词后缀），原义见词根，引申指性情 -> 先天脾气秉性性情；军事战略部队战役展开部署；民事实体法律财产的合法处分处置权。"
  },
  {
    "word": "retrace",
    "phonetic": "/rɪˈtreɪs/",
    "pos": "vt.",
    "meaning": "沿原路折返，顺着原先足迹脚印原路返回折回（retrace one's steps through the forest 顺原路折返）；追溯回溯，深层复盘梳理探索历史起源发展全脉络轨迹（retrace the origins of modern civilization 回溯现代文明起源；retrace the evolutionary pathway 追溯生物进化演变脉络）；描摹临摹",
    "part": "第一部分：超级核心母词族",
    "group": "【7. tra / tract 拉/引/抽】",
    "analysis_type": "构词",
    "analysis": "re-（再次/反向向后） + trace（足迹/拉出的痕迹线索） -> 1. 物理动作：在风雪交加深山迷路大绝境关口、神智清醒的猎人低头死死盯住自己雪地上刚刚踩出的深深脚印一个脚印挨着一个脚印小心翼翼反向倒退原路平稳退回安全宿营地的自救大动作（retrace ）；2. 思想学术大境界：历史学家与古地质演化学家手持放大镜在卷帙浩瀚的传世典籍、考古地层探方与地壳古岩心标本中抽丝剥茧；跨越数百万年漫漫沧桑岁月之河。"
  },
  {
    "word": "intensity",
    "phonetic": "/ɪnˈtensəti/",
    "pos": "n.",
    "meaning": "强度，烈度（light/seismic/radiation intensity 光照/地震烈度/辐射剂量强度；energy intensity 能源利用强度）；（工作/训练/情感的）极其紧张激烈，高度白热化激烈度（the emotional/competitive intensity of the Olympic finals 奥运决战的白热化激烈程度）；剧烈强烈度",
    "part": "第一部分：超级核心母词族",
    "group": "【7. tra / tract 拉/引/抽】",
    "analysis_type": "构词",
    "analysis": "in-（向内/在内部） + tens-（拉紧绷紧） + -ity（物理状态名词后缀） -> 1. 物理科学最底层标量与矢量大概念：单位面积、单位时间或单位物理体积内所聚集穿透释放的物理能量、声光电磁辐射通量密度或者地壳破裂释放震波烈度大小的精确数学定量测量标尺（seismic ）；2. 竞技体育或前沿科技大攻关决战时刻：运动员在决胜最后三秒咬紧牙关全身每一束骨骼肌纤维与交感神经被极限拉扯绷紧到即将断裂的极限高压爆发对抗竞技强度；或学者面对世界难题通宵达旦脑力激荡高度白热化的心智投入状态。"
  },
  {
    "word": "intentional",
    "phonetic": "/ɪnˈtenʃənl/",
    "pos": "adj.",
    "meaning": "故意的，蓄意的，有意识有意图存心蓄谋的（intentional homicide 刑法故意杀人罪；intentional patent infringement 商业恶意蓄意侵权；intentional ambiguity 故意故意含糊其辞）；深思熟虑绝非偶然的",
    "part": "第一部分：超级核心母词族",
    "group": "【7. tra / tract 拉/引/抽】",
    "analysis_type": "构词",
    "analysis": "intent-（意图/心智之箭射向特定靶标） + -ion + -al（形容词后缀） -> 彻底区别于过失疏忽（negligent）或意外偶发（accidental）；行为人在事前大脑前额叶心智沙盘深处对自身行为的性质、危害后果及其演进逻辑有着完全清晰、清醒的认知判断与严密预谋策划；在理智支配下主动、自觉按下执行键以追求该特定损害结果发生的具有极高主观恶性的大脑主观故意蓄意心理与法律状态。"
  },
  {
    "word": "speculation",
    "phonetic": "/ˌspekjuˈleɪʃn/",
    "pos": "n.",
    "meaning": "投机，商业投机，金融短期高风险炒作（financial/currency/property speculation 金融/外汇/房地产投机炒作）；推测，猜想，缺乏确凿证据的主观理论猜测推断（pure speculation / widespread speculation 坊间充斥着各种揣测猜测）",
    "part": "第一部分：超级核心母词族",
    "group": "【10. spec / spect / spic 看】",
    "analysis_type": "构词",
    "analysis": "specul-（望远镜眺望/在瞭望塔上侦察观望） + -ation（名词后缀），原义见词根，引申指投机 -> 金融与房地产短期逐利投机炒作；缺乏确凿事实依据的主观推测猜测揣测；形而上学深邃纯思辨构想。"
  },
  {
    "word": "speculative",
    "phonetic": "/ˈspekjələtɪv/",
    "pos": "adj.",
    "meaning": "投机性的，充满高风险投机炒作的（speculative bubble 投机性金融泡沫；speculative capital 跨国短期热钱投机资本）；推测的基于假设性假说的，思辨推理性未获实证检验的（a speculative hypothesis 尚待检验的推测性假说；speculative philosophy 思辨哲学）",
    "part": "第一部分：超级核心母词族",
    "group": "【10. spec / spect / spic 看】",
    "analysis_type": "构词",
    "analysis": "speculat-（眺望观望） + -ive（形容词后缀），原义见词根，引申指投机性的 -> 金融高风险投机炒作的；学术理论推测性前瞻思辨的（与实证 empi）。"
  },
  {
    "word": "individuality",
    "phonetic": "/ˌɪndɪˌvɪdʒuˈæləti/",
    "pos": "n.",
    "meaning": "个性，个人独特性，不可替代的个人独特品格神韵，独立人格与个体鲜明特征（express one's individuality 充分彰显并释放个人鲜明个性；preserve cultural individuality 保留独特文化个性）；个体性不可分割性",
    "part": "第二部分：高频专业词根族",
    "group": "【46. div / vid 分开】",
    "analysis_type": "构词",
    "analysis": "individual（个人/不可分割的个体） + -ity（名词后缀） -> 彻底区别于千人一面抹杀个性的标准化工业克隆流水线产物；一个大写的人在思想灵魂、艺术审美与创新灵感深处所固有绽放散发出的那种天下无双、独一无二、带有强烈自我主体性意识与生命张力神采的不可复制的卓越个性品格境界。"
  },
  {
    "word": "dictation",
    "phonetic": "/dɪkˈteɪʃn/",
    "pos": "n.",
    "meaning": "口述记录，听写，由一人发音朗读由另一人记录或输入的听写练习（take dictation from one's supervisor 记录领导口述指令；vocabulary dictation test 单词听写测验）；（强权势力的）发号施令，强行命令霸道强加干预（resist foreign dictation 坚决坚决抵御境外外部霸权势力的强行发号施令与强权政治霸凌）；霸道主宰命令",
    "part": "第一部分：超级核心母词族",
    "group": "【11. dic / dict 说/宣称】",
    "analysis_type": "构词",
    "analysis": "dictat-（大声宣读发布法令/口述指令） + -ion（名词后缀），原义见词根，引申指口述记录 -> 口述记录与外语课堂听写练习；强权势力的傲慢发号施令霸道强加指令；独裁专断意志。"
  },
  {
    "word": "indicative",
    "phonetic": "/ɪnˈdɪkətɪv/",
    "pos": "adj./n.",
    "meaning": "表明的，指示性的，足以显示预示说明某种深层发展大趋势的（be indicative of future trends 足以说明预示未来大趋势；indicative prices 市场指导参考价格）；（语法学动词语气）陈述语气的，客观事实陈述的（the indicative mood 陈述语气，与 subjunctive 虚拟语气 相对）；陈述语气动词形态（n.）",
    "part": "第一部分：超级核心母词族",
    "group": "【11. dic / dict 说/宣称】",
    "analysis_type": "构词",
    "analysis": "in-（朝向/指明） + dicat-（指明宣告宣称） + -ive（形容词后缀），原义见词根，引申指表明的 -> 足以指示预示表明说明深层大趋势特征的；商业市场指导性参考的；理论语法学客观陈述语气的（adj.）。"
  },
  {
    "word": "predictable",
    "phonetic": "/prɪˈdɪktəbl/",
    "pos": "adj.",
    "meaning": "可预测的，按常理合情合理可预见的可预期的（a predictable result/outcome 符合常理预料之中的必然结果；in a predictable manner 按照可预见的方式稳健推进）；（由于缺乏创意新意而）老套毫无惊喜意料之中的（a predictable Hollywood plot 毫无新意老套烂俗的好莱坞电影剧情）；循规蹈矩可预测的",
    "part": "第一部分：超级核心母词族",
    "group": "【11. dic / dict 说/宣称】",
    "analysis_type": "构词",
    "analysis": "pre-（在…之前提前） + dict-（说话宣布） + -able（能够…的形容词后缀） -> 1. 经典自然物理定律与工业质量控制至高追求：一个系统其输出结果完全严格服从严密因果逻辑与数学物理定律支配、在输入特定自变量参数后没有任何不可控的随机突发跳变、完全能够在事前在计算机仿真模型沙盘上提前百分之百推导预见并精准掌控的极其可靠稳定的可预见可预期属性（highly p）；2. 文艺批判贬义色彩考点：某些商业快餐流水线剧本创作毫无起码文学艺术灵魂与人性深度挖掘、观众刚看到开场五分钟便能闭着眼睛把结尾剧情大团圆结局猜得八九不离十的极其老套烂俗毫无悬念意料之中的平庸属性。"
  },
  {
    "word": "intercourse",
    "phonetic": "/ˈɪntəkɔːs/",
    "pos": "n.",
    "meaning": "交往，交际往来，正式跨国跨区域学术商业文化思想深度友好大往来（commercial/cultural/intellectual intercourse 各国间经贸/文化/思想密切交流交际往来）；（生理学与法医学专有术语）性交，交媾（sexual intercourse）",
    "part": "第一部分：超级核心母词族",
    "group": "【17. cur / curs / cour / cours 跑/流动】",
    "analysis_type": "构词",
    "analysis": "inter-（在…之间相互） + course（奔跑流淌） -> 1. 国际政治学与人类文明史殿堂级恢弘大叙事词汇：两个拥有不同宗教信仰、不同肤色与制度传统的大洲主权国家民族；在彻底摒弃刀枪兵戎相见、跨越大洋大漠天堑障碍；派遣庞大商船队、文化学者与艺术大师使节团在彼此大都会与集市之间频繁穿梭往来、将丝绸、瓷器、造纸术与现代科学思想深度交织碰撞互通有无的波澜壮阔人类文明交流互鉴交往大往来（free fri）。"
  },
  {
    "word": "attribution",
    "phonetic": "/ˌætrɪˈbjuːʃn/",
    "pos": "n.",
    "meaning": "归因，归咎；归属，归属权",
    "part": "第一部分：超级核心母词族",
    "group": "【38. trib 给与/交付/分派】",
    "analysis_type": "构词",
    "analysis": "ad-（朝向） + tribut-（给予） + -ion（名词后缀），引申指归因 -> 归因；归结；作品署名归属。"
  },
  {
    "word": "insecure",
    "phonetic": "/ˌɪnsɪˈkjʊə/",
    "pos": "adj.",
    "meaning": "缺乏安全感的；不牢固的，危险的",
    "part": "第一部分：超级核心母词族",
    "group": "【40. cur / cure 关心/照料/注意】",
    "analysis_type": "构词",
    "analysis": "in-（不/非） + secure（安全的），处于充满担忧风险或物理结构晃动摇摇欲坠的状态 -> 缺乏安全感的；危险不固的。"
  },
  {
    "word": "debatable",
    "phonetic": "/dɪˈbeɪtəbl/",
    "pos": "adj.",
    "meaning": "有争议的，未定论的；成问题的",
    "part": "第一部分：超级核心母词族",
    "group": "【49. bell / bat 战斗/敲打】",
    "analysis_type": "构词",
    "analysis": "de-（彻底） + bat（击打） + -able（能够…的） -> 观点存在分歧、尚有充足辩驳探讨空间的。"
  },
  {
    "word": "unequal",
    "phonetic": "/ʌnˈiːkwəl/",
    "pos": "adj.",
    "meaning": "不平等的，不相等的；不胜任的，力不从心的",
    "part": "第一部分：超级核心母词族",
    "group": "【58. equ / equi 平等/相同/公允】",
    "analysis_type": "构词",
    "analysis": "un-（不/非） + equal（相等的） -> 权利、数量、机会存在显著倾斜偏私；引申指个人能力弱于所肩负的重任（unequal ）。"
  },
  {
    "word": "collaborative",
    "phonetic": "/kəˈlæbərətɪv/",
    "pos": "adj.",
    "meaning": "合作的，协作的，共同完成的",
    "part": "第一部分：超级核心母词族",
    "group": "【66. labor 劳动/劳作/艰辛】",
    "analysis_type": "构词",
    "analysis": "col-（共同/一起） + labor（劳动/工作） + -ative（形容词后缀） -> 跨学科、跨部门成员共同投入智力与体力紧密协同完成的。"
  },
  {
    "word": "collective",
    "phonetic": "/kəˈlektɪv/",
    "pos": "adj./n.",
    "meaning": "集体的，共同的；集体，联合体",
    "part": "第一部分：超级核心母词族",
    "group": "【67. leg / lect / lig 收集/挑选/阅读/法律】",
    "analysis_type": "构词",
    "analysis": "col-（共同） + lect（收集/挑选） + -ive（形容词/名词后缀） -> 将社会中分散的各个成员挑选汇聚为一个坚强的整体。"
  },
  {
    "word": "selective",
    "phonetic": "/sɪˈlektɪv/",
    "pos": "adj.",
    "meaning": "有选择性的；挑剔的，严格筛选的",
    "part": "第一部分：超级核心母词族",
    "group": "【67. leg / lect / lig 收集/挑选/阅读/法律】",
    "analysis_type": "构词",
    "analysis": "select（挑选） + -ive（具…倾向的） -> 不盲目全盘接纳；而是经过细致严苛的标准进行鉴别过滤取舍。"
  },
  {
    "word": "liberation",
    "phonetic": "/ˌlɪbəˈreɪʃn/",
    "pos": "n.",
    "meaning": "解放，释放；摆脱束缚，平权运动",
    "part": "第一部分：超级核心母词族",
    "group": "【69. liber 自由/释放/称量】",
    "analysis_type": "构词",
    "analysis": "liber-（自由） + -ate（动词后缀） + -ion（名词后缀） -> 从暴政枷锁、殖民压迫或落后陈腐思想禁锢中彻底挣脱重获人身自主。"
  },
  {
    "word": "immigration",
    "phonetic": "/ˌɪmɪˈɡreɪʃn/",
    "pos": "n.",
    "meaning": "移民入境，移居国内；移民局，入境检查",
    "part": "第一部分：超级核心母词族",
    "group": "【74. migr 迁移/流动】",
    "analysis_type": "构词",
    "analysis": "im-（进入/向内） + migr-（迁移） + -ation（名词后缀），引申指移民入境 -> 移民入境；入境审查。"
  },
  {
    "word": "normality",
    "phonetic": "/nɔːˈmæləti/",
    "pos": "n.",
    "meaning": "常态，正常状态；规范性",
    "part": "第一部分：超级核心母词族",
    "group": "【76. norm 规范/标准】",
    "analysis_type": "构词",
    "analysis": "norm-（标准/准则） + -ality（名词后缀），引申指常态 -> 常态；正常。"
  },
  {
    "word": "antiquity",
    "phonetic": "/ænˈtɪkwəti/",
    "pos": "n.",
    "meaning": "古老，古代；古物，古迹",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【前缀专题：anti- / ante- 在前/古老】",
    "analysis_type": "构词",
    "analysis": "antiq-（古老的） + -uity（名词后缀），引申指古老 -> 古代；古老；古玩。"
  },
  {
    "word": "circulation",
    "phonetic": "/ˌsɜːkjəˈleɪʃn/",
    "pos": "n.",
    "meaning": "血液循环；流通，传播；发行量",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【前缀专题：circu- / circum- 环绕/周围】",
    "analysis_type": "构词",
    "analysis": "circul-（圆圈/环行） + -ation（名词后缀），引申指血液循环 -> 循环；流通；报刊发行量。"
  },
  {
    "word": "foreseeable",
    "phonetic": "/fɔːˈsiːəbl/",
    "pos": "adj.",
    "meaning": "可预见的，能预料到的",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【前缀专题：fore- 在前/预先】",
    "analysis_type": "构词",
    "analysis": "fore-（预先/在前） + see（看见） + -able（能…的），引申指可预见的 -> 可预见的（如 in the）。"
  },
  {
    "word": "government",
    "phonetic": "/ˈɡʌvənmənt/",
    "pos": "n.",
    "meaning": "政府，内阁；统治，政体；治理",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：社会治理与制度管理】",
    "analysis_type": "构词",
    "analysis": "govern（治理/掌舵） + -ment（名词后缀），引申指政府 -> 政府；政权体系。"
  },
  {
    "word": "inferiority",
    "phonetic": "/ɪnˌfɪəriˈɒrəti/",
    "pos": "n.",
    "meaning": "自卑，劣势；次等，下等地位",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【前缀专题：in- / infra- 向下/在下】",
    "analysis_type": "构词",
    "analysis": "inferior（次等的/较低的） + -ity（名词后缀），引申指自卑 -> 自卑感；下等。"
  },
  {
    "word": "interactive",
    "phonetic": "/ˌɪntərˈæktɪv/",
    "pos": "adj.",
    "meaning": "互动的，交互式的；相互作用的",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【前缀专题：inter- 相互/在…之间】",
    "analysis_type": "构词",
    "analysis": "inter-（相互之间） + act（行动/作为） + -ive（形容词后缀），引申指互动的 -> 交互式的；互动的。"
  },
  {
    "word": "interpretation",
    "phonetic": "/ɪnˌtɜːprɪˈteɪʃn/",
    "pos": "n.",
    "meaning": "解释，说明；演绎，艺术诠释；口译",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术与思维逻辑】",
    "analysis_type": "构词",
    "analysis": "interpret（解释/诠释） + -ation（名词后缀），引申指解释 -> 解释；诠释；口译。"
  },
  {
    "word": "translation",
    "phonetic": "/trænzˈleɪʃn/",
    "pos": "n.",
    "meaning": "翻译，译文；转化，转变",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【前缀专题：trans- 穿过/跨越】",
    "analysis_type": "构词",
    "analysis": "trans-（跨越） + lat-（运送/携带） + -ion（名词后缀），引申指翻译 -> 翻译；转化。"
  },
  {
    "word": "communication",
    "phonetic": "/kəˌmjuːnɪˈkeɪʃn/",
    "pos": "n.",
    "meaning": "沟通，交流；通信，信息传递；交通联系",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "com-（共同） + mun-（服务/公共义务） + -ication（名词后缀），引申指沟通 -> 沟通交流；通信系统。"
  },
  {
    "word": "communicative",
    "phonetic": "/kəˈmjuːnɪkətɪv/",
    "pos": "adj.",
    "meaning": "善于交际的，健谈的；交际的，传达信息的",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "communicate（交流） + -ive（具…特性的），引申指善于交际的 -> 善于交际的；交际性的。"
  },
  {
    "word": "connective",
    "phonetic": "/kəˈnektɪv/",
    "pos": "adj./n.",
    "meaning": "连接的；结缔的（生物学）；连接词",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "connect（连接） + -ive（形容词/名词后缀），引申指连接的 -> 连接的；结缔的。"
  },
  {
    "word": "cooperative",
    "phonetic": "/kəʊˈɒpərətɪv/",
    "pos": "adj./n.",
    "meaning": "合作的，协作的；合作社，协作组织",
    "part": "第一部分：超级核心母词族",
    "group": "【04. oper 工作/操作】",
    "analysis_type": "构词",
    "analysis": "co-（共同） + oper-（工作） + -ative（形容词/名词后缀），引申指合作的 -> 合作的；合作社。"
  },
  {
    "word": "coordination",
    "phonetic": "/kəʊˌɔːdɪˈneɪʃn/",
    "pos": "n.",
    "meaning": "协调，统筹配合；（动作）协调性",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "co-（共同） + ordin-（顺序/秩序） + -ation（名词后缀），引申指协调 -> 协调配合；协调动作。"
  },
  {
    "word": "appreciative",
    "phonetic": "/əˈpriːʃətɪv/",
    "pos": "adj.",
    "meaning": "感激的；欣赏的，赞赏的，有赏识力的",
    "part": "第一部分：超级核心母词族",
    "group": "【45. val / vail / forc / fort 强壮/力量/价值】",
    "analysis_type": "构词",
    "analysis": "ad-（去/朝向） + preci-（价格/价值） + -ative（形容词后缀），引申指感激的 -> 感激的；赏识的。"
  },
  {
    "word": "recharge",
    "phonetic": "/ˌriːˈtʃɑːdʒ/",
    "pos": "vt./vi.",
    "meaning": "再充电；休整，恢复体力；再次控告",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "re-（再次） + charge（装载/电荷/冲锋），引申指再充电 -> 再充电；恢复体力。"
  },
  {
    "word": "classical",
    "phonetic": "/ˈklæsɪkl/",
    "pos": "adj.",
    "meaning": "古典的，传统的，经典的；经典的（物理学）",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "class-（等级/最高阶层） + -ic + -al（形容词后缀），引申指古典的 -> 古典的；传统的。"
  },
  {
    "word": "consultation",
    "phonetic": "/ˌkɒnslˈteɪʃn/",
    "pos": "n.",
    "meaning": "咨询，商讨；（医生）诊察，会诊",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "con-（共同） + sult-（坐/商议） + -ation（名词后缀），引申指咨询 -> 咨询；会诊。"
  },
  {
    "word": "consumable",
    "phonetic": "/kənˈsjuːməbl/",
    "pos": "adj./n.",
    "meaning": "可消费的，易损耗的；消耗品，耗材",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "consume（消耗/吞噬） + -able（能…的），引申指可消费的 -> 易耗的；消耗品。"
  },
  {
    "word": "countable",
    "phonetic": "/ˈkaʊntəbl/",
    "pos": "adj.",
    "meaning": "可数的，可计算的",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "count（计数/清点） + -able（能…的），引申指可数的 -> 可数的。"
  },
  {
    "word": "recount",
    "phonetic": "/rɪˈkaʊnt/",
    "pos": "vt./n.",
    "meaning": "详细叙述，描述；重新清点（选票）",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "re-（再次） + count（计算/述说），引申指详细叙述 -> 叙述；重验选票。"
  },
  {
    "word": "estimation",
    "phonetic": "/ˌestɪˈmeɪʃn/",
    "pos": "n.",
    "meaning": "估计，预算；评价，看法，判断",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "estim-（衡量/评估） + -ation（名词后缀），引申指估计 -> 估计；评价。"
  },
  {
    "word": "fashionable",
    "phonetic": "/ˈfæʃnəbl/",
    "pos": "adj.",
    "meaning": "时髦的，流行的；豪华高级的",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "fashion（时尚/风尚） + -able（符合…的），引申指时髦的 -> 时髦的；流行的。"
  },
  {
    "word": "investigation",
    "phonetic": "/ɪnˌvestɪˈɡeɪʃn/",
    "pos": "n.",
    "meaning": "调查，审查，调研，深入排查",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "in-（深入） + vestig-（脚印/踪迹） + -ation（名词后缀），引申为执法或科研中的严密取证调研 -> 调查；审查。"
  },
  {
    "word": "marginal",
    "phonetic": "/ˈmɑːdʒɪnl/",
    "pos": "adj.",
    "meaning": "微小的，边缘的；边际的（经济学）",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "margin（边缘/页边空白） + -al（形容词后缀），引申指微小的 -> 边缘的；边际的。"
  },
  {
    "word": "negotiation",
    "phonetic": "/nɪˌɡəʊʃiˈeɪʃn/",
    "pos": "n.",
    "meaning": "谈判，协商，磋商",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "neg-（不/非） + otium（闲暇），原指忙于公务商业事务，引申为利益双方为达成互惠协议进行 -> 商务谈判；磋商。"
  },
  {
    "word": "nutritional",
    "phonetic": "/njuˈtrɪʃənl/",
    "pos": "adj.",
    "meaning": "营养的，滋养的，食物营养价值的",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "nutrition（营养） + -al（形容词后缀），引申指营养的 -> 营养的；食物成分的。"
  },
  {
    "word": "occupational",
    "phonetic": "/ˌɒkjuˈpeɪʃənl/",
    "pos": "adj.",
    "meaning": "职业的，工作引起的，由行业导致的",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "occupation（职业/占有） + -al（形容词后缀），引申指职业的 -> 职业的。"
  },
  {
    "word": "perplexity",
    "phonetic": "/pəˈpleksəti/",
    "pos": "n.",
    "meaning": "困惑，迷茫，不知所措；复杂难懂的事物",
    "part": "第一部分：超级核心母词族",
    "group": "【24. ple / pli / plic 编织/重叠/折叠】",
    "analysis_type": "构词",
    "analysis": "per-（彻底） + plex-（编织交缠） + -ity（名词后缀），引申指困惑 -> 困惑迷茫；疑难复杂。"
  },
  {
    "word": "assertive",
    "phonetic": "/əˈsɜːtɪv/",
    "pos": "adj.",
    "meaning": "坚定自信的，果断的，坚决主张的",
    "part": "第一部分：超级核心母词族",
    "group": "【82. ser / sert 连接/结合/编织】",
    "analysis_type": "构词",
    "analysis": "ad-（去/朝向） + sert-（连接/系住），引申指坚定自信的 -> 果断坚决的；充满自信的。"
  },
  {
    "word": "inconvenience",
    "phonetic": "/ˌɪnkənˈviːniəns/",
    "pos": "n./vt.",
    "meaning": "不便，麻烦；打扰，给…造成不便",
    "part": "第一部分：超级核心母词族",
    "group": "【14. ven / vent 来/到达/发生】",
    "analysis_type": "构词",
    "analysis": "in-（不/非） + convenience（便利），打破了顺畅的生活动线带来的障碍干扰 -> 不便；带来麻烦。"
  },
  {
    "word": "preventive",
    "phonetic": "/prɪˈventɪv/",
    "pos": "adj./n.",
    "meaning": "预防性的，防患于未然的；预防措施",
    "part": "第一部分：超级核心母词族",
    "group": "【14. ven / vent 来/到达/发生】",
    "analysis_type": "构词",
    "analysis": "prevent（预防） + -ive（形容词/名词后缀），引申指预防性的 -> 预防性的；防护手段。"
  },
  {
    "word": "reconstruction",
    "phonetic": "/ˌriːkənˈstrʌkʃn/",
    "pos": "n.",
    "meaning": "重建，再建；复原，改造；重建时期",
    "part": "第一部分：超级核心母词族",
    "group": "【16. stru / struct 建造/构筑/堆叠】",
    "analysis_type": "构词",
    "analysis": "re-（再次） + construct（建造） + -ion（名词后缀），引申指重建 -> 重建；复原。"
  },
  {
    "word": "instructive",
    "phonetic": "/ɪnˈstrʌktɪv/",
    "pos": "adj.",
    "meaning": "有教育意义的，有启发性的，增长见识的",
    "part": "第一部分：超级核心母词族",
    "group": "【16. stru / struct 建造/构筑/堆叠】",
    "analysis_type": "构词",
    "analysis": "instruct（教导） + -ive（形容词后缀） -> 启迪心智大有裨益的。"
  },
  {
    "word": "instructional",
    "phonetic": "/ɪnˈstrʌkʃənl/",
    "pos": "adj.",
    "meaning": "教学的，指导性的，教育的",
    "part": "第一部分：超级核心母词族",
    "group": "【16. stru / struct 建造/构筑/堆叠】",
    "analysis_type": "构词",
    "analysis": "instruction（教学/指令） + -al（形容词后缀），引申指教学的 -> 教学的。"
  },
  {
    "word": "instrumental",
    "phonetic": "/ˌɪnstrəˈmentl/",
    "pos": "adj.",
    "meaning": "起关键作用的，作为工具手段的；器乐的",
    "part": "第一部分：超级核心母词族",
    "group": "【16. stru / struct 建造/构筑/堆叠】",
    "analysis_type": "构词",
    "analysis": "instrument（工具/乐器） + -al（形容词后缀），引申指起关键作用的 -> 起重要作用的；器乐的。"
  },
  {
    "word": "incidental",
    "phonetic": "/ˌɪnsɪˈdentl/",
    "pos": "adj./n.",
    "meaning": "附带的，次要的；偶然的；附带杂费",
    "part": "第一部分：超级核心母词族",
    "group": "【18. cis / cide 切/杀/决断】",
    "analysis_type": "构词",
    "analysis": "in-（在…上） + cid-（落下） + -ent + -al（形容词/名词后缀），引申指附带的 -> 附带的；杂项开支。"
  },
  {
    "word": "incomplete",
    "phonetic": "/ˌɪnkəmˈpliːt/",
    "pos": "adj.",
    "meaning": "不完整的，未完成的，残缺的",
    "part": "第一部分：超级核心母词族",
    "group": "【19. ple / plen / plet 满/填满】",
    "analysis_type": "构词",
    "analysis": "in-（不/非） + complete（完整的），缺少关键拼图或未达最终交付标准的 -> 不完整的；未结项的。"
  },
  {
    "word": "depletion",
    "phonetic": "/dɪˈpliːʃn/",
    "pos": "n.",
    "meaning": "耗尽，枯竭，大幅减少",
    "part": "第一部分：超级核心母词族",
    "group": "【19. ple / plen / plet 满/填满】",
    "analysis_type": "构词",
    "analysis": "de-（去除/剥离） + plet-（填满） + -ion（名词后缀），引申指耗尽 -> 枯竭；资源耗尽。"
  },
  {
    "word": "fulfillment",
    "phonetic": "/fʊlˈfɪlmənt/",
    "pos": "n.",
    "meaning": "履行，实现；满足感，成就感",
    "part": "第一部分：超级核心母词族",
    "group": "【19. ple / plen / plet 满/填满】",
    "analysis_type": "构词",
    "analysis": "fulfill（填满/实现） + -ment（名词后缀），引申指履行 -> 履行；成就感。"
  },
  {
    "word": "possessive",
    "phonetic": "/pəˈzesɪv/",
    "pos": "adj./n.",
    "meaning": "占有欲强的；所有格的；所有格",
    "part": "第一部分：超级核心母词族",
    "group": "【35. sid / sed / sess 坐/停留/沉淀】",
    "analysis_type": "构词",
    "analysis": "possess（拥有/占有） + -ive（形容词后缀），引申指占有欲强的 -> 占有欲强的；所有格的。"
  },
  {
    "word": "impulsive",
    "phonetic": "/ɪmˈpʌlsɪv/",
    "pos": "adj.",
    "meaning": "冲动的，鲁莽的，凭一时冲动的",
    "part": "第一部分：超级核心母词族",
    "group": "【20. pel / puls 推动/驱逐/驱动】",
    "analysis_type": "构词",
    "analysis": "im-（内部向外） + puls-（推动/冲击） + -ive（形容词后缀），引申指冲动的 -> 冲动的；轻率的。"
  },
  {
    "word": "aspiration",
    "phonetic": "/ˌæspəˈreɪʃn/",
    "pos": "n.",
    "meaning": "志向，抱负，渴望；（语音）送气",
    "part": "第一部分：超级核心母词族",
    "group": "【27. voc / vok 声音/呼唤】",
    "analysis_type": "构词",
    "analysis": "ad-（朝向） + spir-（呼吸/气息） + -ation（名词后缀），引申指志向 -> 志向；抱负。"
  },
  {
    "word": "indifference",
    "phonetic": "/ɪnˈdɪfrəns/",
    "pos": "n.",
    "meaning": "漠不关心，冷淡；不在乎，中立",
    "part": "第一部分：超级核心母词族",
    "group": "【23. fer / phor 运载/带来/承受】",
    "analysis_type": "构词",
    "analysis": "in-（不/无） + difference（区别/差异），引申指漠不关心 -> 漠然冷淡；不在乎。"
  },
  {
    "word": "fertility",
    "phonetic": "/fəˈtɪləti/",
    "pos": "n.",
    "meaning": "肥沃，丰产；生育能力，繁殖力",
    "part": "第一部分：超级核心母词族",
    "group": "【23. fer / phor 运载/带来/承受】",
    "analysis_type": "构词",
    "analysis": "fertile（肥沃的） + -ity（名词后缀） -> 土壤富含养分能茁壮孕育庄稼、或机体具备繁育后代的能力。"
  },
  {
    "word": "observable",
    "phonetic": "/əbˈzɜːvəbl/",
    "pos": "adj.",
    "meaning": "看得见的，显著的；可观察到的",
    "part": "第一部分：超级核心母词族",
    "group": "【30. serv / servat 保留/守护/服务】",
    "analysis_type": "构词",
    "analysis": "observe（观察/注意） + -able（能…的），引申指看得见的 -> 可察觉的；显著的。"
  },
  {
    "word": "preservation",
    "phonetic": "/ˌprezəˈveɪʃn/",
    "pos": "n.",
    "meaning": "保护，保存；维持，防腐",
    "part": "第一部分：超级核心母词族",
    "group": "【30. serv / servat 保留/守护/服务】",
    "analysis_type": "构词",
    "analysis": "pre-（预先） + serv-（守护/留存） + -ation（名词后缀），引申指保护 -> 保护；保存。"
  },
  {
    "word": "conformity",
    "phonetic": "/kənˈfɔːməti/",
    "pos": "n.",
    "meaning": "一致，符合；顺从，遵守，从众心理",
    "part": "第一部分：超级核心母词族",
    "group": "【25. form 形状/形式/塑造】",
    "analysis_type": "构词",
    "analysis": "conform（顺从） + -ity（名词后缀），引申指一致 -> 从众；遵从规范。"
  },
  {
    "word": "informal",
    "phonetic": "/ɪnˈfɔːml/",
    "pos": "adj.",
    "meaning": "非正式的，通俗的，随意的",
    "part": "第一部分：超级核心母词族",
    "group": "【25. form 形状/形式/塑造】",
    "analysis_type": "构词",
    "analysis": "in-（不/非） + formal（正规的），引申指非正式的 -> 非正式的；随意轻松的。"
  },
  {
    "word": "information",
    "phonetic": "/ˌɪnfəˈmeɪʃn/",
    "pos": "n.",
    "meaning": "信息，情报，资料；通知",
    "part": "第一部分：超级核心母词族",
    "group": "【25. form 形状/形式/塑造】",
    "analysis_type": "构词",
    "analysis": "in-（进入内心） + form（塑造形式） + -ation（名词后缀），原指将知识构想注入听众头脑中塑型，引申为消除不确定性的数据流 -> 信息；情报。"
  },
  {
    "word": "formulation",
    "phonetic": "/ˌfɔːmjuˈleɪʃn/",
    "pos": "n.",
    "meaning": "构想，规划；明确表述；配方，制剂",
    "part": "第一部分：超级核心母词族",
    "group": "【25. form 形状/形式/塑造】",
    "analysis_type": "构词",
    "analysis": "formula（公式/小形式） + -ation（名词后缀），引申指构想 -> 规划制定；配方制剂。"
  },
  {
    "word": "confinement",
    "phonetic": "/kənˈfaɪnmənt/",
    "pos": "n.",
    "meaning": "监禁，禁闭；限制；（妇人）分娩期",
    "part": "第一部分：超级核心母词族",
    "group": "【26. fin / termin 界限/限制/终点/精细】",
    "analysis_type": "构词",
    "analysis": "confine（限制/关闭） + -ment（名词后缀），引申指监禁 -> 禁闭；分娩坐月子。"
  },
  {
    "word": "definitive",
    "phonetic": "/dɪˈfɪnətɪv/",
    "pos": "adj.",
    "meaning": "决定性的，最终的；最权威确凿的",
    "part": "第一部分：超级核心母词族",
    "group": "【26. fin / termin 界限/限制/终点/精细】",
    "analysis_type": "构词",
    "analysis": "define（界定） + -itive（形容词后缀），引申指决定性的 -> 最终决定的；权威的。"
  },
  {
    "word": "refinement",
    "phonetic": "/rɪˈfaɪnmənt/",
    "pos": "n.",
    "meaning": "提炼，精炼；文雅，彬彬有礼；精细化改进",
    "part": "第一部分：超级核心母词族",
    "group": "【26. fin / termin 界限/限制/终点/精细】",
    "analysis_type": "构词",
    "analysis": "re-（再次） + fine（纯净/极致） + -ment（名词后缀），引申指提炼 -> 精炼；文雅高贵；细化改进。"
  },
  {
    "word": "sensation",
    "phonetic": "/senˈseɪʃn/",
    "pos": "n.",
    "meaning": "感觉，知觉；轰动，引起轰动的人或事件",
    "part": "第一部分：超级核心母词族",
    "group": "【28. sens / sent 感觉/感受/意识】",
    "analysis_type": "构词",
    "analysis": "sens-（感觉/知觉） + -ation（名词后缀），引申为举国舆论为之震动沸腾的大热 -> 感觉；轰动全城的事物。"
  },
  {
    "word": "sensitivity",
    "phonetic": "/ˌsensəˈtɪvəti/",
    "pos": "n.",
    "meaning": "敏感性，灵敏度；善解人意；过敏",
    "part": "第一部分：超级核心母词族",
    "group": "【28. sens / sent 感觉/感受/意识】",
    "analysis_type": "构词",
    "analysis": "sensitive（敏感的） + -ity（名词后缀），引申指敏感性 -> 灵敏度；敏感度。"
  },
  {
    "word": "sentimental",
    "phonetic": "/ˌsentɪˈmentl/",
    "pos": "adj.",
    "meaning": "多愁善感的，感伤的；感情用事的",
    "part": "第一部分：超级核心母词族",
    "group": "【28. sens / sent 感觉/感受/意识】",
    "analysis_type": "构词",
    "analysis": "sentiment（情感/情绪） + -al（形容词后缀），引申指多愁善感的 -> 伤感的；多愁善感的。"
  },
  {
    "word": "declaration",
    "phonetic": "/ˌdekləˈreɪʃn/",
    "pos": "n.",
    "meaning": "宣言，宣告，正式声明；海关申报单",
    "part": "第一部分：超级核心母词族",
    "group": "【50. cand / cens 白/发光/燃烧】",
    "analysis_type": "构词",
    "analysis": "de-（彻底） + clar-（清楚/明亮） + -ation（名词后缀），引申指宣言 -> 宣言；申报。"
  },
  {
    "word": "resignation",
    "phonetic": "/ˌrezɪɡˈneɪʃn/",
    "pos": "n.",
    "meaning": "辞职，辞呈；顺从，无可奈何的听天由命",
    "part": "第一部分：超级核心母词族",
    "group": "【31. sign 标记/签名/记号】",
    "analysis_type": "构词",
    "analysis": "re-（向后/放弃） + sign（签字盖印放弃契约权力） + -ation（名词后缀），引申指辞职 -> 辞职；听天由命。"
  },
  {
    "word": "report",
    "phonetic": "/rɪˈpɔːt/",
    "pos": "v.",
    "meaning": "重新港口",
    "part": "第一部分：超级核心母词族",
    "group": "【36. port 搬运/携带/港口】",
    "analysis_type": "构词",
    "analysis": "re-（回/向后/再次/重复） + port（港口搬运），引申指重新港口 -> 重新港口。"
  },
  {
    "word": "supportive",
    "phonetic": "/səˈpɔːtɪv/",
    "pos": "adj.",
    "meaning": "支持的，鼓励的，提供宝贵帮助的",
    "part": "第一部分：超级核心母词族",
    "group": "【23. fer / phor 运载/带来/承受】",
    "analysis_type": "构词",
    "analysis": "support（支持） + -ive（形容词后缀），引申指支持的 -> 给予支持的；关怀鼓励的。"
  },
  {
    "word": "reflective",
    "phonetic": "/rɪˈflektɪv/",
    "pos": "adj.",
    "meaning": "反射的，反光的；沉思的，深思熟虑的",
    "part": "第一部分：超级核心母词族",
    "group": "【41. flect / flex 弯曲/折射】",
    "analysis_type": "构词",
    "analysis": "reflect（反射/深思） + -ive（形容词后缀），引申指反射的 -> 反射的；深思熟虑的。"
  },
  {
    "word": "transitional",
    "phonetic": "/trænˈzɪʃənl/",
    "pos": "adj.",
    "meaning": "过渡的，转变期的，过渡时期的",
    "part": "第三部分：核心高频构词前缀族",
    "group": "【前缀专题：trans- 穿过/跨越】",
    "analysis_type": "构词",
    "analysis": "transition（过渡） + -al（形容词后缀），引申指过渡的 -> 过渡性质的。"
  },
  {
    "word": "reliability",
    "phonetic": "/rɪˌlaɪəˈbɪləti/",
    "pos": "n.",
    "meaning": "可靠性，可信度；耐久性，稳健性",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "rely（信赖依靠） + -ability（名词后缀） -> 飞机发动机或航天服务器常年高负荷运转依然不崩溃的过硬质量。"
  },
  {
    "word": "experimentation",
    "phonetic": "/ɪkˌsperɪmenˈteɪʃn/",
    "pos": "n.",
    "meaning": "实验，尝试；科学试验过程",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "experiment（实验） + -ation（名词后缀），引申指实验 -> 科学实验；尝试。"
  },
  {
    "word": "incoherent",
    "phonetic": "/ˌɪnkəʊˈhɪərənt/",
    "pos": "adj.",
    "meaning": "语无伦次的，条理不清的；不相干的，松散分立的",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "in-（不/非） + co-（共同） + her-（黏附/粘连），引申指语无伦次的 -> 语无伦次的；毫无条理的。"
  },
  {
    "word": "frustration",
    "phonetic": "/frʌˈstreɪʃn/",
    "pos": "n.",
    "meaning": "挫折，受挫；沮丧，灰心失落",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "frustrate（使受挫） + -ation（名词后缀），引申指挫折 -> 挫折；灰心沮丧。"
  },
  {
    "word": "illustration",
    "phonetic": "/ˌɪləˈstreɪʃn/",
    "pos": "n.",
    "meaning": "插图，图解；例证，阐明，说明",
    "part": "第一部分：超级核心母词族",
    "group": "【50. cand / cens 白/发光/燃烧】",
    "analysis_type": "构词",
    "analysis": "il-（在内/照向） + lustr-（光亮照耀） + -ation（名词后缀），引申指插图 -> 插图图解；生动例证。"
  },
  {
    "word": "isolation",
    "phonetic": "/ˌaɪsəˈleɪʃn/",
    "pos": "n.",
    "meaning": "隔离，孤立；绝缘；孤独",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "isolate（使孤立） + -ation（名词后缀），物理隔绝或心理上的离群索居 -> 隔离；孤立状态。"
  },
  {
    "word": "motivation",
    "phonetic": "/ˌməʊtɪˈveɪʃn/",
    "pos": "n.",
    "meaning": "动机，动力；诱因，积极性",
    "part": "第一部分：超级核心母词族",
    "group": "【12. mot / mob / mov 动/移动】",
    "analysis_type": "构词",
    "analysis": "motive（动机） + -ation（名词后缀），引申指动机 -> 动机；内驱力。"
  },
  {
    "word": "objectivity",
    "phonetic": "/ˌɒbdʒekˈtɪvəti/",
    "pos": "n.",
    "meaning": "客观性，客观公正；实事求是",
    "part": "第一部分：超级核心母词族",
    "group": "【07. ject / jac 投/掷/扔】",
    "analysis_type": "构词",
    "analysis": "objective（客观的） + -ity（名词后缀） -> 不以人的主观意志为转移的纯粹实在属性。"
  },
  {
    "word": "proportional",
    "phonetic": "/prəˈpɔːʃənl/",
    "pos": "adj.",
    "meaning": "按比例的，成比例的；相称的",
    "part": "第一部分：超级核心母词族",
    "group": "【38. trib 给与/交付/分派】",
    "analysis_type": "构词",
    "analysis": "proportion（比例） + -al（形容词后缀），引申指按比例的 -> 成比例的；相称的。"
  },
  {
    "word": "acceleration",
    "phonetic": "/əkˌseləˈreɪʃn/",
    "pos": "n.",
    "meaning": "加速，加快；（物理学）加速度",
    "part": "第四部分：核心分类专题群",
    "group": "【90. 场景专题 6：动作触碰、物理力量与核心特质】",
    "analysis_type": "构词",
    "analysis": "ad-（去/朝向） + celer-（迅速敏捷） + -ation（名词后缀），引申指加速 -> 加速；加速度。"
  },
  {
    "word": "accumulation",
    "phonetic": "/əˌkjuːmjəˈleɪʃn/",
    "pos": "n.",
    "meaning": "积累，积聚；堆积物，资本积累",
    "part": "第一部分：超级核心母词族",
    "group": "【38. trib 给与/交付/分派】",
    "analysis_type": "构词",
    "analysis": "ad-（朝向） + cumul-（堆叠） + -ation（名词后缀），引申指积累 -> 积累；聚集。"
  },
  {
    "word": "amendment",
    "phonetic": "/əˈmendmənt/",
    "pos": "n.",
    "meaning": "修正案，修改；宪法修正条款",
    "part": "第一部分：超级核心母词族",
    "group": "【18. cis / cide 切/杀/决断】",
    "analysis_type": "构词",
    "analysis": "a-（出/离开） + mend-（瑕疵缺陷） + -ment（名词后缀），引申指修正案 -> 修正案；修订。"
  },
  {
    "word": "assimilation",
    "phonetic": "/əˌsɪməˈleɪʃn/",
    "pos": "n.",
    "meaning": "同化，同化作用；吸收，消化理解",
    "part": "第一部分：超级核心母词族",
    "group": "【33. sent / ess / pres 存在/本质】",
    "analysis_type": "构词",
    "analysis": "ad-（去/变得） + simil-（相似/相同） + -ation（名词后缀），引申指同化 -> 同化；吸收消化。"
  },
  {
    "word": "recognition",
    "phonetic": "/ˌrekəɡˈnɪʃn/",
    "pos": "n.",
    "meaning": "认出，识别；认可，表彰；正式承认",
    "part": "第一部分：超级核心母词族",
    "group": "【11. gno / gni 知道/识别】",
    "analysis_type": "构词",
    "analysis": "re-（再次） + cognit-（知晓） + -ion（名词后缀），引申指认出 -> 认出；公认表彰；承认。"
  },
  {
    "word": "commencement",
    "phonetic": "/kəˈmensmənt/",
    "pos": "n.",
    "meaning": "开始，开端；（大学）毕业典礼",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "com-（加强） + initiare（开启） + -ment（名词后缀），引申指开始 -> 开始；毕业典礼。"
  },
  {
    "word": "departmental",
    "phonetic": "/ˌdiːpɑːtˈmentl/",
    "pos": "adj.",
    "meaning": "部门的，系别的，分部的",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "department（部门/系科） + -al（形容词后缀），引申指部门的 -> 部门的；系科的。"
  },
  {
    "word": "accidental",
    "phonetic": "/ˌæksɪˈdentl/",
    "pos": "adj.",
    "meaning": "意外的，偶然的，非故意造成的",
    "part": "第一部分：超级核心母词族",
    "group": "【18. cis / cide 切/杀/决断】",
    "analysis_type": "构词",
    "analysis": "ad-（去/朝向） + cid-（掉落/发生） + -ent + -al（形容词后缀），引申指意外的 -> 偶然的；突发的。"
  },
  {
    "word": "adjustable",
    "phonetic": "/əˈdʒʌstəbl/",
    "pos": "adj.",
    "meaning": "可调节的，可调式的，灵活可变的",
    "part": "第一部分：超级核心母词族",
    "group": "【67. leg / lect / lig 收集/挑选/阅读/法律】",
    "analysis_type": "构词",
    "analysis": "adjust（调整） + -able（能…的），座椅靠背或镜头焦距可以自由拉伸调校角度的 -> 可调节的。"
  },
  {
    "word": "adjustment",
    "phonetic": "/əˈdʒʌstmənt/",
    "pos": "n.",
    "meaning": "调整，调节；心理适应；校准",
    "part": "第一部分：超级核心母词族",
    "group": "【67. leg / lect / lig 收集/挑选/阅读/法律】",
    "analysis_type": "构词",
    "analysis": "adjust（调整） + -ment（名词后缀），引申指调整 -> 调整校正；心理适应。"
  },
  {
    "word": "approachable",
    "phonetic": "/əˈprəʊtʃəbl/",
    "pos": "adj.",
    "meaning": "和蔼可亲的，平易近人的；可接近的",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "approach（走近/接近） + -able（能…的），引申指和蔼可亲的 -> 平易近人的；可接近的。"
  },
  {
    "word": "intuition",
    "phonetic": "/ˌɪntjuˈɪʃn/",
    "pos": "n.",
    "meaning": "直觉，直觉感知；直觉判断力",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "in-（在内） + tuit-（注视/守护） + -ion（名词后缀），引申指直觉 -> 直觉；灵感。"
  },
  {
    "word": "sublease",
    "phonetic": "/ˈsʌbliːs/",
    "pos": "vt./n.",
    "meaning": "转租，分租；转租合同契约",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "sub-（次级） + lease（租赁），引申指转租 -> 转租；分租。"
  },
  {
    "word": "influx",
    "phonetic": "/ˈɪnflʌks/",
    "pos": "n.",
    "meaning": "涌入，流入；（人口/资金）大批汇聚",
    "part": "第一部分：超级核心母词族",
    "group": "【23. fer / phor 运载/带来/承受】",
    "analysis_type": "构词",
    "analysis": "in-（向内） + flux（流动），引申为外资或外国游客如潮水般大举 -> 涌入；汇集大潮。"
  },
  {
    "word": "categorization",
    "phonetic": "/ˌkætəɡəraɪˈzeɪʃn/",
    "pos": "n.",
    "meaning": "分类，归类，类别划分",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "category（范畴/门类） + -ization（过程），引申指分类 -> 分类归纳；范畴化。"
  },
  {
    "word": "craft",
    "phonetic": "/kræft/",
    "pos": "n.",
    "meaning": "船,飞行器",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "源自古典词素生动意象（词根原始意象），合起来即生动勾勒出其在语境中的特征 -> 船；飞行器。"
  },
  {
    "word": "data",
    "phonetic": "/'dertǝ/",
    "pos": "n.",
    "meaning": "数据,资料",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "源自古典词素生动意象（词根原始意象），合起来即生动勾勒出其在语境中的特征 -> 数据；资料。"
  },
  {
    "word": "exploration",
    "phonetic": "/eksplə'reıf(ə)n/",
    "pos": "n.",
    "meaning": "研究;勘探",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "源自古典词素生动意象（词根原始意象），合起来即生动勾勒出其在语境中的特征 -> 研究；勘探。"
  },
  {
    "word": "garbage",
    "phonetic": "/ga:rbid3/",
    "pos": "n.",
    "meaning": "垃圾",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "源自古典词素生动意象（词根原始意象），合起来即生动勾勒出其在语境中的特征 -> 垃圾。"
  },
  {
    "word": "heat",
    "phonetic": "/hi:t/",
    "pos": "n.",
    "meaning": "热能, 热量 v. 加热",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "源自古典词素生动意象（词根原始意象），合起来即生动勾勒出其在语境中的特征 -> 热能；热量 v. 加热。"
  },
  {
    "word": "installation",
    "phonetic": "/ınstə'leif(ə)n/",
    "pos": "n.",
    "meaning": "安装;装置",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "源自古典词素生动意象（词根原始意象），合起来即生动勾勒出其在语境中的特征 -> 安装；装置。"
  },
  {
    "word": "install",
    "phonetic": "/in'sto:1/",
    "pos": "v.",
    "meaning": "安装",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "源自古典词素生动意象（词根原始意象），合起来即生动勾勒出其在语境中的特征 -> 安装。"
  },
  {
    "word": "panel",
    "phonetic": "/'pæn( )l/",
    "pos": "n.",
    "meaning": "专家咨询组;控制板",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "源自古典词素生动意象（词根原始意象），合起来即生动勾勒出其在语境中的特征 -> 专家咨询组；控制板。"
  },
  {
    "word": "roof",
    "phonetic": "/ru:f/",
    "pos": "n.",
    "meaning": "屋顶 v. 遮蔽",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "源自古典词素生动意象（词根原始意象），合起来即生动勾勒出其在语境中的特征 -> 屋顶 v. 遮蔽。"
  },
  {
    "word": "ray",
    "phonetic": "/rei/",
    "pos": "n.",
    "meaning": "光线",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "源自古典词素生动意象（词根原始意象），合起来即生动勾勒出其在语境中的特征 -> 光线。"
  },
  {
    "word": "spacecraft",
    "phonetic": "/sperskræft/",
    "pos": "n.",
    "meaning": "宇宙飞船,航天器",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "源自古典词素生动意象（词根原始意象），合起来即生动勾勒出其在语境中的特征 -> 宇宙飞船；航天器。"
  },
  {
    "word": "tank",
    "phonetic": "/tærŋk/",
    "pos": "n.",
    "meaning": "箱",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "源自古典词素生动意象（词根原始意象），合起来即生动勾勒出其在语境中的特征 -> 箱。"
  },
  {
    "word": "acre",
    "phonetic": "/eıkər/",
    "pos": "n.",
    "meaning": "英亩",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "源自古典词素生动意象（词根原始意象），合起来即生动勾勒出其在语境中的特征 -> 英亩。"
  },
  {
    "word": "coast",
    "phonetic": "/koust/",
    "pos": "n.",
    "meaning": "海岸",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "源自古典词素生动意象（词根原始意象），合起来即生动勾勒出其在语境中的特征 -> 海岸。"
  },
  {
    "word": "escape",
    "phonetic": "/'skeip/",
    "pos": "n.",
    "meaning": "逃跑 v. 逃跑",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "源自古典词素生动意象（词根原始意象），合起来即生动勾勒出其在语境中的特征 -> 逃跑 v. 逃跑。"
  },
  {
    "word": "hunt",
    "phonetic": "/hant/",
    "pos": "n.",
    "meaning": "打猎;追踪v. 打猎;追踪",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "源自古典词素生动意象（词根原始意象），合起来即生动勾勒出其在语境中的特征 -> 打猎；追踪v. 打猎；追踪。"
  },
  {
    "word": "island",
    "phonetic": "/'aılənd/",
    "pos": "n.",
    "meaning": "岛",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "源自古典词素生动意象（词根原始意象），合起来即生动勾勒出其在语境中的特征 -> 岛。"
  },
  {
    "word": "invasive",
    "phonetic": "/ın veısıv/",
    "pos": "adj.",
    "meaning": "侵入的,扩散性的",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "源自古典词素生动意象（词根原始意象），合起来即生动勾勒出其在语境中的特征 -> 侵入的；扩散性的。"
  },
  {
    "word": "rainfall",
    "phonetic": "/reinfo:1/",
    "pos": "n.",
    "meaning": "降雨;降雨量",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "源自古典词素生动意象（词根原始意象），合起来即生动勾勒出其在语境中的特征 -> 降雨；降雨量。"
  },
  {
    "word": "mainland",
    "phonetic": "/meinlənd/",
    "pos": "n.",
    "meaning": "大陆",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "源自古典词素生动意象（词根原始意象），合起来即生动勾勒出其在语境中的特征 -> 大陆。"
  },
  {
    "word": "mammal",
    "phonetic": "/mæm(ə)l/",
    "pos": "n.",
    "meaning": "哺乳动物",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "源自古典词素生动意象（词根原始意象），合起来即生动勾勒出其在语境中的特征 -> 哺乳动物。"
  },
  {
    "word": "mediterranean",
    "phonetic": "/meditə reiniǝn/",
    "pos": "n.",
    "meaning": "地中海 adj. 地中海的",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "源自古典词素生动意象（词根原始意象），合起来即生动勾勒出其在语境中的特征 -> 地中海 adj. 地中海的。"
  },
  {
    "word": "whale",
    "phonetic": "/weil/",
    "pos": "n.",
    "meaning": "鲸",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "源自古典词素生动意象（词根原始意象），合起来即生动勾勒出其在语境中的特征 -> 鲸。"
  },
  {
    "word": "firefighter",
    "phonetic": "/farǝrfaitər/",
    "pos": "n.",
    "meaning": "消防队员",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "源自古典词素生动意象（词根原始意象），合起来即生动勾勒出其在语境中的特征 -> 消防队员。"
  },
  {
    "word": "mall",
    "phonetic": "/mo:l/",
    "pos": "n.",
    "meaning": "购物中心",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "源自古典词素生动意象（词根原始意象），合起来即生动勾勒出其在语境中的特征 -> 购物中心。"
  },
  {
    "word": "minister",
    "phonetic": "/mınıstər/",
    "pos": "n.",
    "meaning": "部长,大臣",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "源自古典词素生动意象（词根原始意象），合起来即生动勾勒出其在语境中的特征 -> 部长；大臣。"
  },
  {
    "word": "malfunction",
    "phonetic": "/mæl foŋkf( )n/",
    "pos": "n.",
    "meaning": "故障,失灵v. 出故障,失灵",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "源自古典词素生动意象（词根原始意象），合起来即生动勾勒出其在语境中的特征 -> 故障；失灵v. 出故障；失灵。"
  },
  {
    "word": "sticky",
    "phonetic": "/'stıki/",
    "pos": "adj.",
    "meaning": "黏的",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "源自古典词素生动意象（词根原始意象），合起来即生动勾勒出其在语境中的特征 -> 黏的。"
  },
  {
    "word": "scene",
    "phonetic": "/si:n/",
    "pos": "n.",
    "meaning": "现场;事件",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "源自古典词素生动意象（词根原始意象），合起来即生动勾勒出其在语境中的特征 -> 现场；事件。"
  },
  {
    "word": "ability",
    "phonetic": "/ə'bıləti/",
    "pos": "n.",
    "meaning": "能力",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "源自古典词素生动意象（词根原始意象），合起来即生动勾勒出其在语境中的特征 -> 能力。"
  },
  {
    "word": "attorney",
    "phonetic": "/ə't3:rni/",
    "pos": "n.",
    "meaning": "律师,检察官",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "源自古典词素生动意象（词根原始意象），合起来即生动勾勒出其在语境中的特征 -> 律师；检察官。"
  },
  {
    "word": "client",
    "phonetic": "/'klaıənt/",
    "pos": "n.",
    "meaning": "客户",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "源自古典词素生动意象（词根原始意象），合起来即生动勾勒出其在语境中的特征 -> 客户。"
  },
  {
    "word": "consultant",
    "phonetic": "/kən səltənt/",
    "pos": "n.",
    "meaning": "顾问",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "源自古典词素生动意象（词根原始意象），合起来即生动勾勒出其在语境中的特征 -> 顾问。"
  },
  {
    "word": "feasibility",
    "phonetic": "/fi:zə bıləti/",
    "pos": "n.",
    "meaning": "可行性",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "源自古典词素生动意象（词根原始意象），合起来即生动勾勒出其在语境中的特征 -> 可行性。"
  },
  {
    "word": "interpreter",
    "phonetic": "/in't3:rprətər/",
    "pos": "n.",
    "meaning": "口译员,译者",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "源自古典词素生动意象（词根原始意象），合起来即生动勾勒出其在语境中的特征 -> 口译员；译者。"
  },
  {
    "word": "laptop",
    "phonetic": "/'læpta:p/",
    "pos": "n.",
    "meaning": "笔记本电脑",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "源自古典词素生动意象（词根原始意象），合起来即生动勾勒出其在语境中的特征 -> 笔记本电脑。"
  },
  {
    "word": "loyalty",
    "phonetic": "/'lərəlti/",
    "pos": "n.",
    "meaning": "忠诚",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "源自古典词素生动意象（词根原始意象），合起来即生动勾勒出其在语境中的特征 -> 忠诚。"
  },
  {
    "word": "search",
    "phonetic": "/s3:rtf/",
    "pos": "n.",
    "meaning": "搜查 v. 搜查",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "源自古典词素生动意象（词根原始意象），合起来即生动勾勒出其在语境中的特征 -> 搜查 v. 搜查。"
  },
  {
    "word": "stockbroker",
    "phonetic": "/'sta:kbrookər/",
    "pos": "n.",
    "meaning": "股票经纪人",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "stock（股票） + broker（经纪人），引申指股票经纪人 -> 股票经纪人。"
  },
  {
    "word": "testimony",
    "phonetic": "/testimooni/",
    "pos": "n.",
    "meaning": "证言,口供",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "源自古典词素生动意象（词根原始意象），合起来即生动勾勒出其在语境中的特征 -> 证言；口供。"
  },
  {
    "word": "bonus",
    "phonetic": "/bounǝs/",
    "pos": "n.",
    "meaning": "奖金",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "源自古典词素生动意象（词根原始意象），合起来即生动勾勒出其在语境中的特征 -> 奖金。"
  },
  {
    "word": "calorie",
    "phonetic": "/'kæləri/",
    "pos": "n.",
    "meaning": "卡路里",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "源自古典词素生动意象（词根原始意象），合起来即生动勾勒出其在语境中的特征 -> 卡路里。"
  },
  {
    "word": "campaigner",
    "phonetic": "/kæm peinər/",
    "pos": "n.",
    "meaning": "竞选者,活动家",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "源自古典词素生动意象（词根原始意象），合起来即生动勾勒出其在语境中的特征 -> 竞选者；活动家。"
  },
  {
    "word": "cell",
    "phonetic": "/sel/",
    "pos": "n.",
    "meaning": "细胞",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "源自古典词素生动意象（词根原始意象），合起来即生动勾勒出其在语境中的特征 -> 细胞。"
  },
  {
    "word": "defence",
    "phonetic": "/di'fens/",
    "pos": "n.",
    "meaning": "保卫,防御",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "源自古典词素生动意象（词根原始意象），合起来即生动勾勒出其在语境中的特征 -> 保卫；防御。"
  },
  {
    "word": "decade",
    "phonetic": "/'dekeid/",
    "pos": "n.",
    "meaning": "十年",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "源自古典词素生动意象（词根原始意象），合起来即生动勾勒出其在语境中的特征 -> 十年。"
  },
  {
    "word": "envy",
    "phonetic": "/'envi/",
    "pos": "n.",
    "meaning": "羡慕;嫉妒v. 羡慕;嫉妒",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "源自古典词素生动意象（词根原始意象），合起来即生动勾勒出其在语境中的特征 -> 羡慕；嫉妒v. 羡慕；嫉妒。"
  },
  {
    "word": "guard",
    "phonetic": "/go:rd/",
    "pos": "n.",
    "meaning": "警卫v. 保护,守卫",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "源自古典词素生动意象（词根原始意象），合起来即生动勾勒出其在语境中的特征 -> 警卫v. 保护；守卫。"
  },
  {
    "word": "halt",
    "phonetic": "/ho:lt/",
    "pos": "n.",
    "meaning": "停止v. 停止",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "源自古典词素生动意象（词根原始意象），合起来即生动勾勒出其在语境中的特征 -> 停止v. 停止。"
  },
  {
    "word": "giant",
    "phonetic": "/dzaıənt/",
    "pos": "n.",
    "meaning": "巨人:伟人 adj. 巨大的",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "源自古典词素生动意象（词根原始意象），合起来即生动勾勒出其在语境中的特征 -> 巨人:伟人 adj. 巨大的。"
  },
  {
    "word": "pearl",
    "phonetic": "/p3:rl/",
    "pos": "n.",
    "meaning": "珍珠",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "源自古典词素生动意象（词根原始意象），合起来即生动勾勒出其在语境中的特征 -> 珍珠。"
  },
  {
    "word": "personality",
    "phonetic": "/p3:rsə'næləti/",
    "pos": "n.",
    "meaning": "性格,个性",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "源自古典词素生动意象（词根原始意象），合起来即生动勾勒出其在语境中的特征 -> 性格；个性。"
  },
  {
    "word": "protein",
    "phonetic": "/prooti:n/",
    "pos": "n.",
    "meaning": "蛋白质",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "源自古典词素生动意象（词根原始意象），合起来即生动勾勒出其在语境中的特征 -> 蛋白质。"
  },
  {
    "word": "struggle",
    "phonetic": "/'strag(ә)1/",
    "pos": "n.",
    "meaning": "挣扎v. 挣扎;努力",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "源自古典词素生动意象（词根原始意象），合起来即生动勾勒出其在语境中的特征 -> 挣扎v. 挣扎；努力。"
  },
  {
    "word": "sort",
    "phonetic": "/so:rt/",
    "pos": "n.",
    "meaning": "种类 v. 整理,分类",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "源自古典词素生动意象（词根原始意象），合起来即生动勾勒出其在语境中的特征 -> 种类 v. 整理；分类。"
  },
  {
    "word": "vary",
    "phonetic": "/'veri/",
    "pos": "v.",
    "meaning": "变化,差异",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "源自古典词素生动意象（词根原始意象），合起来即生动勾勒出其在语境中的特征 -> 变化；差异。"
  },
  {
    "word": "due",
    "phonetic": "/du:/",
    "pos": "adj.",
    "meaning": "到期的",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "源自古典词素生动意象（词根原始意象），合起来即生动勾勒出其在语境中的特征 -> 到期的。"
  },
  {
    "word": "layoff",
    "phonetic": "/'leı, :f/",
    "pos": "n.",
    "meaning": "裁员,解雇",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "源自古典词素生动意象（词根原始意象），合起来即生动勾勒出其在语境中的特征 -> 裁员；解雇。"
  },
  {
    "word": "cyber",
    "phonetic": "/'saıbər/",
    "pos": "adj.",
    "meaning": "网络的",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "源自古典词素生动意象（词根原始意象），合起来即生动勾勒出其在语境中的特征 -> 网络的。"
  },
  {
    "word": "contaminated",
    "phonetic": "/kən'tæmınertıd/",
    "pos": "adj.",
    "meaning": "被感染的",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "源自古典词素生动意象（词根原始意象），合起来即生动勾勒出其在语境中的特征 -> 被感染的。"
  },
  {
    "word": "digital",
    "phonetic": "/dıdzıt(ə)l/",
    "pos": "adj.",
    "meaning": "数字的",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "源自古典词素生动意象（词根原始意象），合起来即生动勾勒出其在语境中的特征 -> 数字的。"
  },
  {
    "word": "immunization",
    "phonetic": "/ımjunǝ'zeıfn/",
    "pos": "n.",
    "meaning": "免疫",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "源自古典词素生动意象（词根原始意象），合起来即生动勾勒出其在语境中的特征 -> 免疫。"
  },
  {
    "word": "mortality",
    "phonetic": "/mə:r'tæləti/",
    "pos": "n.",
    "meaning": "死亡,死亡率",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "源自古典词素生动意象（词根原始意象），合起来即生动勾勒出其在语境中的特征 -> 死亡；死亡率。"
  },
  {
    "word": "ward",
    "phonetic": "/wɔ:rd/",
    "pos": "n.",
    "meaning": "病房",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "源自古典词素生动意象（词根原始意象），合起来即生动勾勒出其在语境中的特征 -> 病房。"
  },
  {
    "word": "overspeed",
    "phonetic": "/ouvǝr spi:d/",
    "pos": "n.",
    "meaning": "超速v. 超速",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "源自古典词素生动意象（词根原始意象），合起来即生动勾勒出其在语境中的特征 -> 超速v. 超速。"
  },
  {
    "word": "tent",
    "phonetic": "/tent/",
    "pos": "n.",
    "meaning": "帐篷",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "源自古典词素生动意象（词根原始意象），合起来即生动勾勒出其在语境中的特征 -> 帐篷。"
  },
  {
    "word": "underground",
    "phonetic": "/Andər graond/",
    "pos": "n.",
    "meaning": "地铁",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "源自古典词素生动意象（词根原始意象），合起来即生动勾勒出其在语境中的特征 -> 地铁。"
  },
  {
    "word": "federation",
    "phonetic": "/ˌfedəˈreɪʃn/",
    "pos": "n.",
    "meaning": "联邦，同盟，联合会",
    "part": "第二部分：高频专业词根族",
    "group": "【60. fide / feder / cred 信任/信仰/信念/联盟】",
    "analysis_type": "构词",
    "analysis": "feder-（联盟） + -ation（名词后缀），合起来即多个联邦成员结成的政权联盟 -> 联邦；联合会。"
  },
  {
    "word": "comfortable",
    "phonetic": "/ˈkʌmftəbl/",
    "pos": "adj.",
    "meaning": "舒适的，安逸的；宽裕的",
    "part": "第二部分：高频专业词根族",
    "group": "【45. val / vail / forc / fort 强壮/力量/价值】",
    "analysis_type": "构词",
    "analysis": "comfort（安慰/舒适） + -able（易…的），合起来即令人身心放松舒适惬意的 -> 舒适的。"
  },
  {
    "word": "force",
    "phonetic": "/fɔːs/",
    "pos": "n./vt.",
    "meaning": "n. 力量，武力；军队 vt. 强迫，迫使",
    "part": "第二部分：高频专业词根族",
    "group": "【45. val / vail / forc / fort 强壮/力量/价值】",
    "analysis_type": "构词",
    "analysis": "forc-（强大力量），合起来即施加外力逼迫就范 -> 力量；武力；强迫。"
  },
  {
    "word": "fortune",
    "phonetic": "/ˈfɔːtʃuːn/",
    "pos": "n.",
    "meaning": "命运；运气；财富，财产",
    "part": "第四部分：核心分类专题群",
    "group": "【85. 场景专题 1：商业贸易、经济与金融生活】",
    "analysis_type": "构词",
    "analysis": "fortun-（受命运之神眷顾），合起来即命中注定降临的财富与运气 -> 命运；运气；财富。"
  },
  {
    "word": "fortunate",
    "phonetic": "/ˈfɔːtʃənət/",
    "pos": "adj.",
    "meaning": "幸运的，侥幸的",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "fortune（好运） + -ate（形容词后缀），合起来即被天赐好运笼罩的 -> 幸运的。"
  },
  {
    "word": "photograph",
    "phonetic": "/ˈfəʊtəɡrɑːf/",
    "pos": "n./vt.",
    "meaning": "n. 照片 vt. 给…拍照",
    "part": "第一部分：超级核心母词族",
    "group": "【27. scrib / script / graph / gram 写/画/记录】",
    "analysis_type": "构词",
    "analysis": "photo-（光） + graph（绘制/记录），合起来即用光学感光记录下来的画面 -> 照片。"
  },
  {
    "word": "paragraph",
    "phonetic": "/ˈpærəɡrɑːf/",
    "pos": "n.",
    "meaning": "段落，节；短讯",
    "part": "第一部分：超级核心母词族",
    "group": "【32. scrib / script 写/记录/文字】",
    "analysis_type": "构词",
    "analysis": "para-（在旁） + graph（写/画），引申为篇章中的自然段 -> 段落；节。"
  },
  {
    "word": "biography",
    "phonetic": "/baɪˈɒɡrəfi/",
    "pos": "n.",
    "meaning": "传记，传记文学",
    "part": "第一部分：超级核心母词族",
    "group": "【27. scrib / script / graph / gram 写/画/记录】",
    "analysis_type": "构词",
    "analysis": "bio-（生命/生平） + graph（写） + -y，合起来即记录某人生平一生传奇的文书 -> 传记。"
  },
  {
    "word": "diagram",
    "phonetic": "/ˈdaɪəɡræm/",
    "pos": "n.",
    "meaning": "图解，图表，示意图",
    "part": "第一部分：超级核心母词族",
    "group": "【27. scrib / script / graph / gram 写/画/记录】",
    "analysis_type": "构词",
    "analysis": "dia-（穿过/通过） + gram（画线图画），合起来即穿透直观展现结构的图表 -> 图解；图表。"
  },
  {
    "word": "grammar",
    "phonetic": "/ˈɡræmə/",
    "pos": "n.",
    "meaning": "语法，文法；语法书，基本原理",
    "part": "第一部分：超级核心母词族",
    "group": "【32. scrib / script 写/记录/文字】",
    "analysis_type": "构词",
    "analysis": "gramm-（字母/书写文字） + -ar（名词后缀），引申指语法 -> 语法；文法书。"
  },
  {
    "word": "program",
    "phonetic": "/ˈprəʊɡræm/",
    "pos": "n./vt.",
    "meaning": "n. 节目；程序；规划 vt. 编写程序",
    "part": "第一部分：超级核心母词族",
    "group": "【27. scrib / script / graph / gram 写/画/记录】",
    "analysis_type": "构词",
    "analysis": "pro-（提前） + gram（写出），合起来即预先公布写好的议程步骤 -> 程序；规划；节目。"
  },
  {
    "word": "judicial",
    "phonetic": "/dʒuˈdɪʃl/",
    "pos": "adj.",
    "meaning": "司法的，审判的，法官的",
    "part": "第二部分：高频专业词根族",
    "group": "【65. jur / jud / just 法律/审判/正义】",
    "analysis_type": "构词",
    "analysis": "judic-（裁判） + -ial（形容词后缀），合起来即行使国家法定审判权力的 -> 司法的；审判的。"
  },
  {
    "word": "illegal",
    "phonetic": "/ɪˈliːɡl/",
    "pos": "adj.",
    "meaning": "不合法的，非法的",
    "part": "第二部分：高频专业词根族",
    "group": "【67. leg / lect / lig 收集/挑选/阅读/法律】",
    "analysis_type": "构词",
    "analysis": "il- / in-（不/非） + legal（合法的），合起来即跨过法律红线违法的 -> 非法的；不合法的。"
  },
  {
    "word": "fraction",
    "phonetic": "/ˈfrækʃn/",
    "pos": "n.",
    "meaning": "小部分，微量；分数，小数",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "fract-（破碎/折断） + -ion（名词后缀），引申指小部分 -> 分数；极小一部分。"
  },
  {
    "word": "fragment",
    "phonetic": "/ˈfræɡmənt/",
    "pos": "n./v.",
    "meaning": "碎片，残片；片段 v. 使成碎片，分裂",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "frag-（破损/打碎） + -ment（名词后缀），引申指碎片 -> 碎片；残片。"
  },
  {
    "word": "framework",
    "phonetic": "/ˈfreɪmwɜːk/",
    "pos": "n.",
    "meaning": "框架，结构；体系，体制，参照构架",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "frame（边框/骨架） + work（工事/作品），引申指框架 -> 框架；理论体系。"
  },
  {
    "word": "frontier",
    "phonetic": "/ˈfrʌntɪə/",
    "pos": "n.",
    "meaning": "国界，边疆；尖端前沿，未知领域",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "front（前线/正前方） + -ier（场所名词后缀），引申指国界 -> 边境；科学前沿。"
  },
  {
    "word": "function",
    "phonetic": "/ˈfʌŋkʃn/",
    "pos": "n./vi.",
    "meaning": "功能，作用；职务；函数 vi. 运转，发挥作用",
    "part": "第四部分：核心分类专题群",
    "group": "【86. 场景专题 2：教育学术、校园与科技探索】",
    "analysis_type": "构词",
    "analysis": "funct-（履行/执行） + -ion（名词后缀），引申指功能 -> 功能；函数；运转。"
  },
  {
    "word": "furious",
    "phonetic": "/ˈfjʊəriəs/",
    "pos": "adj.",
    "meaning": "狂怒的，暴怒的；狂暴的，猛烈的",
    "part": "第四部分：核心分类专题群",
    "group": "【89. 场景专题 5：身心健康、心理认知与情感意志】",
    "analysis_type": "构词",
    "analysis": "fury（狂怒） + -ous（充满…的），引申指狂怒的 -> 狂怒的；狂暴的。"
  },
  {
    "word": "garment",
    "phonetic": "/ˈɡɑːmənt/",
    "pos": "n.",
    "meaning": "衣服，服装；外衣",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "garn-（装饰/配齐） + -ment（名词后缀），人类遮体御寒穿戴整齐的衣物装束 -> 衣服；服装。"
  },
  {
    "word": "gasoline",
    "phonetic": "/ˈɡæsəliːn/",
    "pos": "n.",
    "meaning": "汽油",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "gas（气体/轻质挥发物） + -ol（油/液体） + -ine（化学物后缀），引申指汽油 -> 汽油。"
  },
  {
    "word": "glorious",
    "phonetic": "/ˈɡlɔːriəs/",
    "pos": "adj.",
    "meaning": "辉煌的，光荣的，壮丽的；极好的",
    "part": "第四部分：核心分类专题群",
    "group": "【88. 场景专题 4：社会生活、城市建设与交通文明】",
    "analysis_type": "构词",
    "analysis": "glory（光荣/荣耀） + -ous（充满…的），引申指辉煌的 -> 光荣辉煌的；壮丽的。"
  }
];

(typeof window !== "undefined" ? window : global).CET4_FULL_VOCAB = (typeof window !== "undefined" ? window : global).WORDS_DATA;

// =========================================================================
// 2. 动态投影生成 VOCABULARY_PACKS (纯正 3137 高频考纲词库 - 对齐标准版)
// =========================================================================
(function() {
  const g = typeof window !== "undefined" ? window : global;
  const all = g.WORDS_DATA || [];
  const filterByPart = (kw) => all.filter(w => w.part && w.part.includes(kw));
  const filterByGroup = (kw) => all.filter(w => w.group && w.group.includes(kw));

  g.VOCABULARY_PACKS = {
    all_2257: {
      id: "all_2257",
      category: "全书总库",
      title: "【全书总库】CET-4 核心全阶词典",
      description: "以四级核心高频词库为绝对底座，彻底剔除超纲生僻词，熟词生义优先呈现，100% 自动对齐原五盒复习进度。",
      words: all
    },
    all_2800: {
      id: "all_2800",
      category: "全书总库",
      title: "【全书总库】CET-4 核心高频全阶词典 (全量 " + all.length + " 词)",
      description: "纯正四级核心高频词库，彻底剔除后缀派生冗余与超纲生僻词，常考生义置顶，含四大板块、90 大分类群组。",
      words: all
    },
    unit1_super_roots: {
      id: "unit1_super_roots",
      category: "分册/单元",
      title: "【第一部分】Top 40 超级核心母词族 (" + filterByPart("第一部分").length + " 词)",
      description: "覆盖考频最高、衍生力最强的 40 大超级核心母词族（如 cap/capt, fac/fact, sta/sist, mit/miss 等）。",
      words: filterByPart("第一部分")
    },
    unit2_major_roots: {
      id: "unit2_major_roots",
      category: "分册/单元",
      title: "【第二部分】40 重点专业词根族 (" + filterByPart("第二部分").length + " 词)",
      description: "覆盖学术阅读、社科人文高频出现的 40 大专业核心词根族（如 temp, trib, cur, grad, val 等）。",
      words: filterByPart("第二部分")
    },
    unit3_prefixes: {
      id: "unit3_prefixes",
      category: "分册/单元",
      title: "【第三部分】核心前缀与派生族 (" + filterByPart("第三部分").length + " 词)",
      description: "系统梳理否定前缀、方位前缀、程度前缀及同源派生核心群。",
      words: filterByPart("第三部分")
    },
    unit4_thematic_all: {
      id: "unit4_thematic_all",
      category: "专题全集",
      title: "【第四部分】场景专题全集 (" + filterByPart("第四部分").length + " 词)",
      description: "汇集商贸金融、校园学术、自然生态、社会生活、医疗情绪、动作物理六大分类专题。",
      words: filterByPart("第四部分")
    },
    unit4_theme1_biz: {
      id: "unit4_theme1_biz",
      category: "场景专题",
      title: "【专题 1】商贸经济与金融职场 (" + filterByGroup("场景专题 1").length + " 词)",
      description: "商务贸易、金融财会、企业管理、经济指标高频词。",
      words: filterByGroup("场景专题 1")
    },
    unit4_theme2_edu: {
      id: "unit4_theme2_edu",
      category: "场景专题",
      title: "【专题 2】校园教育与人文学术 (" + filterByGroup("场景专题 2").length + " 词)",
      description: "大学生活、学术科研、学科理论、思维认知高频词。",
      words: filterByGroup("场景专题 2")
    },
    unit4_theme3_nature: {
      id: "unit4_theme3_nature",
      category: "场景专题",
      title: "【专题 3】自然地理与生态环境 (" + filterByGroup("场景专题 3").length + " 词)",
      description: "天文地理、生态气候、动植物、环境保护高频词。",
      words: filterByGroup("场景专题 3")
    },
    unit4_theme4_society: {
      id: "unit4_theme4_society",
      category: "场景专题",
      title: "【专题 4】社会生活与公共设施 (" + filterByGroup("场景专题 4").length + " 词)",
      description: "城市交通、公共管理、日常生活、社会关系高频词。",
      words: filterByGroup("场景专题 4")
    },
    unit4_theme5_health: {
      id: "unit4_theme5_health",
      category: "场景专题",
      title: "【专题 5】身心健康与医疗情绪 (" + filterByGroup("场景专题 5").length + " 词)",
      description: "人体器官、医疗疾病、情绪感知、心理状态高频词。",
      words: filterByGroup("场景专题 5")
    },
    unit4_theme6_action: {
      id: "unit4_theme6_action",
      category: "场景专题",
      title: "【专题 6】动作触碰与物理特质 (" + filterByGroup("场景专题 6").length + " 词)",
      description: "动作交互、物理力量、形状特质、空间方位高频词。",
      words: filterByGroup("场景专题 6")
    }
  };
})();
