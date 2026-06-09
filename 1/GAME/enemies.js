// ═══════════════════════════════════════════════════════════════
//  游戏数据配置 (enemies.js)
// ═══════════════════════════════════════════════════════════════

// ─── 敌人数据 ───
const ENEMIES = {
    grineer_lancer: {
        id: 'grineer_lancer',
        name: 'Grineer枪兵',
        faction: 'grineer',
        icon: '🔴',
        image: 'GAME/enemies/G/Lancer.jpg',
        hp: 100,
        damage: { min: 5, max: 15 },
        desc: 'Grineer基础步兵，装备粗糙但火力凶猛'
    },
    grineer_heavy: {
        id: 'grineer_heavy',
        name: 'Grineer重甲兵',
        faction: 'grineer',
        icon: '🟤',
        hp: 150,
        damage: { min: 8, max: 20 },
        desc: '身披重甲的Grineer精英，防御力极高'
    },
    corpus_crewman: {
        id: 'corpus_crewman',
        name: 'Corpus船员',
        faction: 'corpus',
        icon: '🔵',
        hp: 80,
        damage: { min: 4, max: 12 },
        desc: 'Corpus商会的普通船员，操作无人机作战'
    },
    infested_runner: {
        id: 'infested_runner',
        name: 'Infested奔行者',
        faction: 'infested',
        icon: '🟢',
        hp: 80,
        damage: { min: 6, max: 14 },
        desc: '被Technocyte病毒感染的生物，速度极快'
    },
    infested_ancient: {
        id: 'infested_ancient',
        name: 'Infested古尸',
        faction: 'infested',
        icon: '🟢',
        hp: 180,
        damage: { min: 10, max: 25 },
        desc: '古老的Infested生物，拥有再生能力'
    },
    sentient_fragment: {
        id: 'sentient_fragment',
        name: 'Sentient碎片',
        faction: 'sentient',
        icon: '🟣',
        hp: 200,
        damage: { min: 12, max: 30 },
        desc: 'Sentient机械生命体的碎片，能自适应攻击'
    },
    sentient_leader: {
        id: 'sentient_leader',
        name: 'Sentient统领',
        faction: 'sentient',
        icon: '👁️',
        hp: 500,
        damage: { min: 20, max: 50 },
        desc: 'Sentient军团的最高指挥官，拥有多阶段形态',
        phases: 2
    }
};

// ─── 派系映射 ───
const FACTION_ICONS = {
    grineer: '🔴',
    corpus: '🔵',
    infested: '🟢',
    sentient: '🟣'
};

const FACTION_COLORS = {
    grineer: 'var(--grineer-red)',
    corpus: 'var(--corpus-blue)',
    infested: 'var(--infested-green)',
    sentient: 'var(--sentient-purple)'
};

// ─── 星球与任务数据 ───
const PLANETS = [{
        id: 'p1',
        name: '水星',
        icon: '☿️',
        desc: '最靠近太阳的岩石行星，Grineer在此建立了早期前哨站',
               missions: [{
                   id: 'm1',
                   name: 'Pantheon',
                   missionType: 'exterminate',
                   type: 'daily',
                   desc: '歼灭：消灭所有Grineer巡逻部队',
                   enemyId: 'grineer_lancer',
                   count: 10,
                   minCount: 10,
                   maxCount: 30,
                   rewards: {
                       credits: 400,
                       endo: 40,
                       points: 8
                   },
                   drops: [{
                           name: '合金板',
                           icon: '🔩',
                           chance: 0.7
                       },
                       {
                           name: '聚合物束',
                           icon: '🧬',
                           chance: 0.4
                       },
                       {
                           name: '能量饮料',
                           icon: '🥤',
                           chance: 0.3,
                           type: 'stamina',
                           value: 20
                       }
                   ]
               },
            {
                id: 'm2',
                name: 'Caloris',
                missionType: 'rescue',
                type: 'daily',
                desc: '救援：突破防线 → 破解牢房密码 → 护送撤离',
                enemyId: 'grineer_lancer',
                count: 6,
                rewards: {
                    credits: 500,
                    endo: 50,
                    points: 10
                },
                drops: [{
                        name: '合金板',
                        icon: '🔩',
                        chance: 1
                    },
                    {
                        name: '电路板',
                        icon: '💠',
                        chance: 1
                    },
                    {
                        name: '控制模块',
                        icon: '⚙️',
                        chance: 1
                    }
                ]
            },
            {
                id: 'm3',
                name: 'Lares',
                missionType: 'defense',
                type: 'daily',
                desc: '防御：保护 cryopod 装置抵御5波敌人进攻',
                enemyId: 'grineer_lancer',
                count: 5,
                defenseWaves: 5,
                deviceHp: 100,
                rewards: {
                    credits: 600,
                    endo: 60,
                    points: 12
                },
                drops: [{
                        name: '合金板',
                        icon: '🔩',
                        chance: 0.6
                    },
                    {
                        name: '回收金属',
                        icon: '♻️',
                        chance: 0.3
                    },
                    {
                        name: 'Orokin电池',
                        icon: '🔋',
                        chance: 0.1
                    }
                ]
            },
            {
                id: 'm4',
                name: 'Apollodorus',
                missionType: 'survival',
                type: 'daily',
                desc: '生存：在生命维持系统耗尽前存活并杀敌',
                enemyId: 'grineer_lancer',
                count: 10,
                survivalTime: 60,
                rewards: {
                    credits: 700,
                    endo: 70,
                    points: 14
                },
                drops: [{
                        name: '合金板',
                        icon: '🔩',
                        chance: 0.5
                    },
                    {
                        name: '聚合物束',
                        icon: '🧬',
                        chance: 0.3
                    },
                    {
                        name: '氩结晶',
                        icon: '💎',
                        chance: 0.2
                    }
                ]
            },
            {
                id: 'm5',
                name: 'Odin',
                missionType: 'interception',
                type: 'daily',
                desc: '拦截：占领并守住5个通讯塔至时间结束',
                enemyId: 'grineer_lancer',
                count: 5,
                captureTime: 30,
                rewards: {
                    credits: 650,
                    endo: 65,
                    points: 13
                },
                drops: [{
                        name: '电路板',
                        icon: '💠',
                        chance: 0.5
                    },
                    {
                        name: '控制模块',
                        icon: '⚙️',
                        chance: 0.3
                    },
                    {
                        name: '能量饮料',
                        icon: '🥤',
                        chance: 0.2,
                        type: 'stamina',
                        value: 20
                    }
                ]
            },
            {
                id: 'm6',
                name: 'Suisei',
                missionType: 'spy',
                type: 'daily',
                desc: '间谍：在时限内破解3个数据保险柜',
                enemyId: 'grineer_lancer',
                count: 3,
                hackTime: 45,
                rewards: {
                    credits: 550,
                    endo: 55,
                    points: 11
                },
                drops: [{
                        name: '电路板',
                        icon: '💠',
                        chance: 0.6
                    },
                    {
                        name: '控制模块',
                        icon: '⚙️',
                        chance: 0.3
                    },
                    {
                        name: '虚空遗物',
                        icon: '📜',
                        chance: 0.1
                    }
                ]
            },
            {
                id: 'm7',
                name: 'Boethius',
                missionType: 'mobile_defense',
                type: 'daily',
                desc: '移动防御：保护3个数据终端至上传完成',
                enemyId: 'grineer_lancer',
                count: 3,
                uploadTime: 40,
                rewards: {
                    credits: 600,
                    endo: 60,
                    points: 12
                },
                drops: [{
                        name: '合金板',
                        icon: '🔩',
                        chance: 0.5
                    },
                    {
                        name: '电路板',
                        icon: '💠',
                        chance: 0.3
                    },
                    {
                        name: '控制模块',
                        icon: '⚙️',
                        chance: 0.2
                    }
                ]
            },
            {
                id: 'm8',
                name: 'Tolstoj',
                missionType: 'assassination',
                type: 'weekly',
                desc: '刺杀：消灭Grineer指挥官Vor上尉',
                enemyId: 'grineer_heavy',
                count: 1,
                rewards: {
                    credits: 1500,
                    endo: 150,
                    points: 30
                },
                drops: [{
                        name: '合金板',
                        icon: '🔩',
                        chance: 0.5
                    },
                    {
                        name: 'Orokin电池',
                        icon: '🔋',
                        chance: 0.3
                    },
                    {
                        name: '传说核心',
                        icon: '⭐',
                        chance: 0.2
                    }
                ]
            },
            {
                id: 'm9',
                name: 'Terminus',
                missionType: 'sabotage',
                type: 'daily',
                desc: '破坏：潜入并摧毁Grineer采矿装置',
                enemyId: 'grineer_lancer',
                count: 4,
                rewards: {
                    credits: 500,
                    endo: 50,
                    points: 10
                },
                drops: [{
                        name: '合金板',
                        icon: '🔩',
                        chance: 0.6
                    },
                    {
                        name: '回收金属',
                        icon: '♻️',
                        chance: 0.3
                    },
                    {
                        name: '氩结晶',
                        icon: '💎',
                        chance: 0.2
                    }
                ]
            }
        ]
    },
    {
        id: 'p2',
        name: '金星',
        icon: '💎',
        desc: 'Corpus控制的冰封矿场，表面覆盖着厚厚的二氧化碳云层',
        missions: [{
            id: 'm2',
            name: '平原采矿',
            type: 'daily',
            desc: '收集稀有矿石样本，击退Corpus守卫',
            enemyId: 'corpus_crewman',
            count: 5,
            rewards: {
                credits: 800,
                endo: 80,
                points: 15
            },
            drops: [{
                    name: '合金板',
                    icon: '🔩',
                    chance: 0.4
                },
                {
                    name: '电路板',
                    icon: '💠',
                    chance: 0.4
                },
                {
                    name: '控制模块',
                    icon: '⚙️',
                    chance: 0.2
                }
            ]
        }]
    },
    {
        id: 'p3',
        name: '地球',
        icon: '🌍',
        desc: 'Grineer占领的原始森林，Tenno的诞生之地',
        missions: [{
                id: 'm3',
                name: '森林突袭',
                type: 'daily',
                desc: '击败Grineer巡逻队',
                enemyId: 'grineer_lancer',
                count: 5,
                rewards: {
                    credits: 500,
                    endo: 50,
                    points: 10
                },
                drops: [{
                        name: '合金板',
                        icon: '🔩',
                        chance: 0.6
                    },
                    {
                        name: '聚合物束',
                        icon: '🧬',
                        chance: 0.3
                    },
                    {
                        name: 'Orokin电池',
                        icon: '🔋',
                        chance: 0.1
                    },
                    {
                        name: '能量饮料',
                        icon: '🥤',
                        chance: 0.25,
                        type: 'stamina',
                        value: 20
                    }
                ]
            },
            {
                id: 'm4',
                name: '夜灵平原',
                type: 'daily',
                desc: '夜间狩猎Infested生物',
                enemyId: 'infested_runner',
                count: 6,
                rewards: {
                    credits: 600,
                    endo: 60,
                    points: 12
                },
                drops: [{
                        name: '合金板',
                        icon: '🔩',
                        chance: 0.5
                    },
                    {
                        name: '神经节点',
                        icon: '🧠',
                        chance: 0.3
                    },
                    {
                        name: '氩结晶',
                        icon: '💎',
                        chance: 0.2
                    }
                ]
            }
        ]
    },
    {
        id: 'p4',
        name: '月球',
        icon: '🌙',
        desc: 'Orokin的秘密实验室所在地，隐藏着Tenno的起源之谜',
        missions: [{
            id: 'm5',
            name: 'Orokin试炼',
            type: 'weekly',
            desc: '探索月球废墟，面对Sentient守卫',
            enemyId: 'sentient_fragment',
            count: 4,
            rewards: {
                credits: 4000,
                endo: 400,
                points: 80
            },
            drops: [{
                    name: '虚空光体',
                    icon: '✨',
                    chance: 0.5
                },
                {
                    name: '神经元',
                    icon: '🧠',
                    chance: 0.3
                },
                {
                    name: 'Orokin电池',
                    icon: '🔋',
                    chance: 0.2
                }
            ]
        }]
    },
    {
        id: 'p5',
        name: '火星',
        icon: '🔥',
        desc: 'Grineer沙漠前哨站，红色沙尘暴肆虐的荒凉世界',
        missions: [{
            id: 'm6',
            name: '沙漠风暴',
            type: 'daily',
            desc: '摧毁Grineer补给线',
            enemyId: 'grineer_heavy',
            count: 4,
            rewards: {
                credits: 1000,
                endo: 100,
                points: 20
            },
            drops: [{
                    name: '合金板',
                    icon: '🔩',
                    chance: 0.5
                },
                {
                    name: '回收金属',
                    icon: '♻️',
                    chance: 0.3
                },
                {
                    name: '氩结晶',
                    icon: '💎',
                    chance: 0.2
                }
            ]
        }]
    },
    {
        id: 'p6',
        name: '火卫一',
        icon: '🌑',
        desc: '火星的不规则卫星，Grineer在此建立了密集的防御网络',
        missions: [{
            id: 'm7',
            name: '卫星清剿',
            type: 'daily',
            desc: '突破Grineer卫星防御系统',
            enemyId: 'grineer_lancer',
            count: 6,
            rewards: {
                credits: 700,
                endo: 70,
                points: 14
            },
            drops: [{
                    name: '合金板',
                    icon: '🔩',
                    chance: 0.6
                },
                {
                    name: '聚合物束',
                    icon: '🧬',
                    chance: 0.3
                },
                {
                    name: '回收金属',
                    icon: '♻️',
                    chance: 0.3
                }
            ]
        }]
    },
    {
        id: 'p7',
        name: '火卫二',
        icon: '🦴',
        desc: '被Infested完全吞噬的卫星，Orokin遗迹的恐怖坟场',
        missions: [{
            id: 'm8',
            name: '遗迹净化',
            type: 'daily',
            desc: '清除Infested古尸，回收Orokin技术',
            enemyId: 'infested_ancient',
            count: 5,
            rewards: {
                credits: 1200,
                endo: 120,
                points: 25
            },
            drops: [{
                    name: '神经元',
                    icon: '🧠',
                    chance: 0.4
                },
                {
                    name: 'Orokin电池',
                    icon: '🔋',
                    chance: 0.3
                },
                {
                    name: '氩结晶',
                    icon: '💎',
                    chance: 0.3
                }
            ]
        }]
    },
    {
        id: 'p8',
        name: '谷神星',
        icon: '🌾',
        desc: '小行星带最大的天体，Grineer造船厂林立',
        missions: [{
            id: 'm9',
            name: '造船厂破坏',
            type: 'daily',
            desc: '潜入Grineer造船厂，破坏在建战舰',
            enemyId: 'grineer_heavy',
            count: 5,
            rewards: {
                credits: 1500,
                endo: 150,
                points: 30
            },
            drops: [{
                    name: '合金板',
                    icon: '🔩',
                    chance: 0.5
                },
                {
                    name: '回收金属',
                    icon: '♻️',
                    chance: 0.4
                },
                {
                    name: '控制模块',
                    icon: '⚙️',
                    chance: 0.2
                }
            ]
        }]
    },
    {
        id: 'p9',
        name: '木星',
        icon: '🪐',
        desc: 'Corpus气体城市漂浮在巨大的风暴之上',
        missions: [{
            id: 'm10',
            name: '气体城市突袭',
            type: 'daily',
            desc: '渗透Corpus气体城市，夺取研究数据',
            enemyId: 'corpus_crewman',
            count: 6,
            rewards: {
                credits: 1800,
                endo: 180,
                points: 35
            },
            drops: [{
                    name: '电路板',
                    icon: '💠',
                    chance: 0.5
                },
                {
                    name: '控制模块',
                    icon: '⚙️',
                    chance: 0.3
                },
                {
                    name: '氩结晶',
                    icon: '💎',
                    chance: 0.2
                }
            ]
        }]
    },
    {
        id: 'p10',
        name: '欧罗巴',
        icon: '❄️',
        desc: '冰封的Corpus研究基地，隐藏着冰原下的秘密',
        missions: [{
            id: 'm11',
            name: '冰原探险',
            type: 'daily',
            desc: '探索欧罗巴冰原，对抗Corpus精锐部队',
            enemyId: 'corpus_crewman',
            count: 5,
            rewards: {
                credits: 1600,
                endo: 160,
                points: 32
            },
            drops: [{
                    name: '电路板',
                    icon: '💠',
                    chance: 0.4
                },
                {
                    name: '控制模块',
                    icon: '⚙️',
                    chance: 0.3
                },
                {
                    name: '氩结晶',
                    icon: '💎',
                    chance: 0.3
                }
            ]
        }]
    },
    {
        id: 'p11',
        name: '土星',
        icon: '🪐',
        desc: 'Grineer小行星带要塞，巨型战舰的停泊港',
        missions: [{
            id: 'm12',
            name: '小行星带海战',
            type: 'weekly',
            desc: '在土星环带中摧毁Grineer舰队',
            enemyId: 'grineer_heavy',
            count: 6,
            rewards: {
                credits: 2500,
                endo: 250,
                points: 50
            },
            drops: [{
                    name: '合金板',
                    icon: '🔩',
                    chance: 0.5
                },
                {
                    name: '回收金属',
                    icon: '♻️',
                    chance: 0.4
                },
                {
                    name: 'Orokin电池',
                    icon: '🔋',
                    chance: 0.2
                }
            ]
        }]
    },
    {
        id: 'p12',
        name: '天王星',
        icon: '🔷',
        desc: '深海实验室隐藏在冰巨星的大气层下',
        missions: [{
            id: 'm13',
            name: '深海突袭',
            type: 'weekly',
            desc: '潜入天王星深海实验室，对抗Grineer重装部队',
            enemyId: 'grineer_heavy',
            count: 5,
            rewards: {
                credits: 2200,
                endo: 220,
                points: 45
            },
            drops: [{
                    name: '合金板',
                    icon: '🔩',
                    chance: 0.4
                },
                {
                    name: '聚合物束',
                    icon: '🧬',
                    chance: 0.3
                },
                {
                    name: '氩结晶',
                    icon: '💎',
                    chance: 0.3
                }
            ]
        }]
    },
    {
        id: 'p13',
        name: '海王星',
        icon: '🔵',
        desc: 'Corpus最高机密的科研中心，防御森严',
        missions: [{
            id: 'm14',
            name: '科研中心渗透',
            type: 'weekly',
            desc: '渗透Corpus最高机密设施，夺取尖端科技',
            enemyId: 'corpus_crewman',
            count: 6,
            rewards: {
                credits: 2800,
                endo: 280,
                points: 55
            },
            drops: [{
                    name: '电路板',
                    icon: '💠',
                    chance: 0.5
                },
                {
                    name: '控制模块',
                    icon: '⚙️',
                    chance: 0.3
                },
                {
                    name: '虚空精华',
                    icon: '💠',
                    chance: 0.2
                }
            ]
        }]
    },
    {
        id: 'p14',
        name: '冥王星',
        icon: '⚫',
        desc: '太阳系边缘的冰冷世界，Corpus最后的堡垒',
        missions: [{
            id: 'm15',
            name: '边缘要塞攻略',
            type: 'weekly',
            desc: '攻陷Corpus在太阳系边缘的最后据点',
            enemyId: 'corpus_crewman',
            count: 7,
            rewards: {
                credits: 3500,
                endo: 350,
                points: 70
            },
            drops: [{
                    name: '电路板',
                    icon: '💠',
                    chance: 0.4
                },
                {
                    name: '控制模块',
                    icon: '⚙️',
                    chance: 0.3
                },
                {
                    name: '虚空遗物',
                    icon: '📜',
                    chance: 0.3
                }
            ]
        }]
    },
    {
        id: 'p15',
        name: '赛德娜',
        icon: '🔴',
        desc: '遥远的矮行星，Grineer女王的领地',
        missions: [{
            id: 'm16',
            name: '女王宫殿突袭',
            type: 'weekly',
            desc: '深入Grineer女王宫殿，执行斩首行动',
            enemyId: 'grineer_heavy',
            count: 6,
            rewards: {
                credits: 4000,
                endo: 400,
                points: 80
            },
            drops: [{
                    name: '合金板',
                    icon: '🔩',
                    chance: 0.4
                },
                {
                    name: '回收金属',
                    icon: '♻️',
                    chance: 0.3
                },
                {
                    name: 'Orokin催化剂',
                    icon: '🔮',
                    chance: 0.3
                }
            ]
        }]
    },
    {
        id: 'p16',
        name: '赤毒要塞',
        icon: '☠️',
        desc: 'Grineer双子女王的移动要塞，生产赤毒的恐怖工厂',
        missions: [{
            id: 'm17',
            name: '赤毒提取',
            type: 'special',
            desc: '潜入赤毒要塞，阻止赤毒生产并摧毁核心',
            enemyId: 'grineer_heavy',
            count: 8,
            rewards: {
                credits: 6000,
                endo: 600,
                points: 120
            },
            drops: [{
                    name: '合金板',
                    icon: '🔩',
                    chance: 0.3
                },
                {
                    name: 'Orokin催化剂',
                    icon: '🔮',
                    chance: 0.4
                },
                {
                    name: '传说核心',
                    icon: '⭐',
                    chance: 0.3
                }
            ]
        }]
    },
    {
        id: 'p17',
        name: '阋神星',
        icon: '🦠',
        desc: 'Infested的巢穴核心，被病毒完全吞噬的恐怖世界',
        missions: [{
            id: 'm18',
            name: '巢穴核心净化',
            type: 'special',
            desc: '深入Infested巢穴核心，消灭源头',
            enemyId: 'infested_ancient',
            count: 7,
            rewards: {
                credits: 5500,
                endo: 550,
                points: 110
            },
            drops: [{
                    name: '神经元',
                    icon: '🧠',
                    chance: 0.4
                },
                {
                    name: 'Orokin电池',
                    icon: '🔋',
                    chance: 0.3
                },
                {
                    name: '传说核心',
                    icon: '⭐',
                    chance: 0.3
                }
            ]
        }]
    },
    {
        id: 'p18',
        name: '虚空',
        icon: '🌀',
        desc: '不稳定的虚空能量区域，Orokin文明的遗迹',
        missions: [{
            id: 'm19',
            name: '虚空裂缝',
            type: 'weekly',
            desc: '关闭不稳定的虚空裂隙，阻止虚空侵蚀',
            enemyId: 'sentient_fragment',
            count: 5,
            rewards: {
                credits: 5000,
                endo: 500,
                points: 100
            },
            drops: [{
                    name: '虚空光体',
                    icon: '✨',
                    chance: 0.5
                },
                {
                    name: '虚空遗物',
                    icon: '📜',
                    chance: 0.3
                },
                {
                    name: '虚空精华',
                    icon: '💠',
                    chance: 0.2
                }
            ]
        }]
    },
    {
        id: 'p19',
        name: '扎里曼号',
        icon: '🚀',
        desc: '失踪的Orokin殖民舰，在虚空中漂流了数个世纪',
        missions: [{
            id: 'm20',
            name: '殖民舰探索',
            type: 'special',
            desc: '探索扎里曼号的残骸，揭开失踪的真相',
            enemyId: 'sentient_leader',
            count: 1,
            rewards: {
                credits: 10000,
                endo: 1000,
                points: 200
            },
            drops: [{
                    name: '虚空精华',
                    icon: '💠',
                    chance: 0.5
                },
                {
                    name: 'Orokin催化剂',
                    icon: '🔮',
                    chance: 0.3
                },
                {
                    name: '传说核心',
                    icon: '⭐',
                    chance: 0.2
                }
            ]
        }]
    }
];


// ─── 辅助函数 ───
function getEnemyData(enemyId) {
    return ENEMIES[enemyId] || ENEMIES.grineer_lancer;
}

function getFactionColor(faction) {
    return FACTION_COLORS[faction] || '#fff';
}