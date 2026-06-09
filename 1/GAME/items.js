// ═══════════════════════════════════════════════════════════════
//  物品与商城数据配置 (items.js)
// ═══════════════════════════════════════════════════════════════

// ─── 铸造厂物品 ───
const FOUNDRY_ITEMS = [{
        id: 'f1',
        name: 'Excalibur 头部神经光元',
        icon: '🥷',
        cost: {
            materials: {
                '合金板': 5,
                '聚合物束': 3
            },
            time: 3
        },
        reward: {
            xp: 500
        }
    },
    {
        id: 'f2',
        name: 'Skana 剑刃',
        icon: '⚔️',
        cost: {
            materials: {
                '合金板': 3,
                '回收金属': 2
            },
            time: 3
        },
        reward: {
            xp: 200
        }
    },
    {
        id: 'f3',
        name: 'Lato 枪管',
        icon: '🔫',
        cost: {
            materials: {
                '电路板': 3,
                '控制模块': 1
            },
            time: 3
        },
        reward: {
            xp: 150
        }
    },
    {
        id: 'f4',
        name: 'Orokin 催化剂',
        icon: '🔮',
        cost: {
            materials: {
                'Orokin电池': 2,
                '虚空精华': 1
            },
            time: 3
        },
        reward: {
            xp: 1000
        }
    },
    {
        id: 'f5',
        name: 'Forma 蓝图',
        icon: '🔷',
        cost: {
            materials: {
                '神经元': 3,
                'Forma蓝图': 1
            },
            time: 3
        },
        reward: {
            xp: 2000
        }
    }
];

// ─── 商城物品 ───
const SHOP_ITEMS = [{
        id: 's1',
        name: '网站月卡会员',
        desc: '30天网站高级会员权益',
        icon: '💳',
        price: 500,
        featured: true
    },
    {
        id: 's_stamina',
        name: '能量饮料',
        desc: '恢复20点体力',
        icon: '🥤',
        price: 50,
        featured: false,
        type: 'stamina',
        value: 20
    },
    {
        id: 's6',
        name: '定制称号',
        desc: '专属个性化用户称号',
        icon: '👑',
        price: 800,
        featured: false
    }
];

// ─── 材料图标映射 ───
function getMaterialIcon(name) {
    const icons = {
        '合金板': '🔩',
        '聚合物束': '🧬',
        'Orokin电池': '🔋',
        '电路板': '💠',
        '控制模块': '⚙️',
        '回收金属': '♻️',
        '氩结晶': '💎',
        '神经元': '🧠',
        '虚空光体': '✨',
        '虚空遗物': '📜',
        '虚空精华': '💠',
        'Forma蓝图': '🔷',
        'Orokin催化剂': '🔮',
        '传说核心': '⭐'
    };
    return icons[name] || '📦';
}