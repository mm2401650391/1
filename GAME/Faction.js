// 第1页 - 星图导航（10个派系大入口）
var PLANETS = [
    { id: 'grineer', name: 'Grineer', icon: '🌍', image: 'GAME/Faction/Grineer.jpg', level: '1-35', minLevel: 1, maxLevel: 35, faction: 'grineer', factionName: 'Grineer帝国', dropMult: 1.0, desc: '起源系统的摇篮，Grineer帝国的核心领地', color: '#4a8c4a' },
    { id: 'corpus', name: 'Corpus', icon: '🌟', image: 'GAME/Faction/Corpus.jpg', level: '3-40', minLevel: 3, maxLevel: 40, faction: 'corpus', factionName: 'Corpus商会', dropMult: 1.1, desc: '被Corpus商会控制的工业星球群', color: '#c8a84b' },
    { id: 'infested', name: 'Infested', icon: '☿️', image: 'GAME/Faction/Infested.jpg', level: '5-35', minLevel: 5, maxLevel: 35, faction: 'infested', factionName: 'Infested瘟疫', dropMult: 1.2, desc: '被Infested瘟疫吞噬的死亡星球', color: '#4eff4e' },
    { id: 'orokin', name: 'Orokin', icon: '🔴', image: 'GAME/Faction/Orokin.jpg', level: '8-40', minLevel: 8, maxLevel: 40, faction: 'orokin', factionName: 'Orokin遗迹', dropMult: 1.3, desc: '古老Orokin文明的神秘遗迹', color: '#cc4444' },
    { id: 'sentient', name: 'Sentient', icon: '🌑', image: 'GAME/Faction/Sentient.jpg', level: '10-40', minLevel: 10, maxLevel: 40, faction: 'sentient', factionName: 'Sentient军团', dropMult: 1.4, desc: 'Sentient异构体的虚空领域', color: '#ff66ff' },
    { id: 'unum', name: '合一众', icon: '⚙️', image: 'GAME/Faction/合一众.jpg', level: '12-40', minLevel: 12, maxLevel: 40, faction: 'unum', factionName: '合一众', dropMult: 1.5, desc: 'Narmer合一众的精神控制区', color: '#aaaaaa' },
    { id: 'whisper', name: '低语者', icon: '🪐', image: 'GAME/Faction/低语者.jpg', level: '15-40', minLevel: 15, maxLevel: 40, faction: 'whisper', factionName: '墙中低语', dropMult: 1.6, desc: '墙中低语的诡异虚空领域', color: '#d4a574' },
    { id: 'snake', name: '炽蛇军', icon: '🪐', image: 'GAME/Faction/炽蛇军.jpg', level: '18-40', minLevel: 18, maxLevel: 40, faction: 'snake', factionName: '炽蛇军', dropMult: 1.7, desc: '炽蛇军的灼热军事据点', color: '#c8b896' },
    { id: 'tech', name: '科腐者', icon: '💠', image: 'GAME/Faction/科腐者.jpg', level: '20-40', minLevel: 20, maxLevel: 40, faction: 'tech', factionName: '科腐者', dropMult: 1.8, desc: '科腐者的禁忌实验基地', color: '#4ecdc4' },
    { id: 'free', name: '自由派', icon: '🔷', image: 'GAME/Faction/自由派.jpg', level: '25-40', minLevel: 25, maxLevel: 40, faction: 'free', factionName: '自由派', dropMult: 1.9, desc: '自由派的独立星际领地', color: '#4488ff' }
];

// 第2页 - 各派系下属的星球（独立配置）
var PLANETS_GRINEER = [
    { id: 'earth', name: '寰宇-Grineer', icon: '🌍', image: 'GAME/Faction/earth.jpg', level: '1-5', minLevel: 1, maxLevel: 5, faction: 'grineer', factionName: 'Grineer', dropMult: 1.0, desc: '起源系统的摇篮', color: '#4a8c4a' },
    { id: 'sedna', name: '夜灵平原', icon: '🔴', image: 'GAME/Faction/sedna.jpg', level: '15-25', minLevel: 15, maxLevel: 25, faction: 'grineer', factionName: 'Grineer', dropMult: 1.5, desc: 'Grineer女皇的领地', color: '#cc4444' },
    { id: 'kuva', name: '星域凶顽', icon: '💀', image: 'GAME/Faction/kuva.jpg', level: '25-35', minLevel: 25, maxLevel: 35, faction: 'grineer', factionName: 'Grineer', dropMult: 2.0, desc: '赤毒Grineer的核心要塞', color: '#8b0000' }
];

var PLANETS_CORPUS = [
    { id: 'venus', name: '金星', icon: '🌟', image: 'GAME/Faction/venus.jpg', level: '3-8', minLevel: 3, maxLevel: 8, faction: 'corpus', factionName: 'Corpus', dropMult: 1.1, desc: 'Corpus工业星球', color: '#c8a84b' },
    { id: 'neptune', name: '海王星', icon: '🔷', image: 'GAME/Faction/neptune.jpg', level: '25-35', minLevel: 25, maxLevel: 35, faction: 'corpus', factionName: 'Corpus', dropMult: 1.9, desc: 'Corpus高级研究所', color: '#4488ff' },
    { id: 'pluto', name: '冥王星', icon: '⚫', image: 'GAME/Faction/pluto.jpg', level: '30-40', minLevel: 30, maxLevel: 40, faction: 'corpus', factionName: 'Corpus', dropMult: 2.2, desc: 'Corpus外域前哨', color: '#666666' }
];

var PLANETS_INFESTED = [
    { id: 'eris', name: '阋神星', icon: '☿️', image: 'GAME/Faction/eris.jpg', level: '20-30', minLevel: 20, maxLevel: 30, faction: 'infested', factionName: 'Infested', dropMult: 1.8, desc: 'Infested瘟疫核心', color: '#4eff4e' },
    { id: 'deimos', name: '火卫二', icon: '🌑', image: 'GAME/Faction/deimos.jpg', level: '15-25', minLevel: 15, maxLevel: 25, faction: 'infested', factionName: 'Infested', dropMult: 1.6, desc: 'Infested巢穴', color: '#2a5a2a' }
];

var PLANETS_SENTIENT = [
    { id: 'lua', name: '月球', icon: '🌑', image: 'GAME/Faction/lua.jpg', level: '20-30', minLevel: 20, maxLevel: 30, faction: 'sentient', factionName: 'Sentient', dropMult: 2.0, desc: 'Orokin之月，Sentient战场', color: '#888888' },
    { id: 'veil', name: '虚空Veil', icon: '💠', image: 'GAME/Faction/veil.jpg', level: '30-40', minLevel: 30, maxLevel: 40, faction: 'sentient', factionName: 'Sentient', dropMult: 2.5, desc: 'Sentient虚空领域', color: '#ff66ff' }
];

var PLANETS_OROKIN = [
    { id: 'void', name: '虚空', icon: '🔴', image: 'GAME/Faction/void.jpg', level: '10-20', minLevel: 10, maxLevel: 20, faction: 'orokin', factionName: 'Orokin', dropMult: 1.5, desc: 'Orokin虚空遗迹', color: '#cc4444' },
    { id: 'derelict', name: '废弃船', icon: '⚓', image: 'GAME/Faction/derelict.jpg', level: '20-35', minLevel: 20, maxLevel: 35, faction: 'orokin', factionName: 'Orokin', dropMult: 2.0, desc: 'Orokin废弃飞船', color: '#8b4513' }
];

var PLANETS_WHISPER = [
    { id: 'duviri', name: '双衍王境', icon: '🪐', image: 'GAME/Faction/duviri.jpg', level: '15-25', minLevel: 15, maxLevel: 25, faction: 'whisper', factionName: '低语者', dropMult: 1.8, desc: '墙中低语的虚空王境', color: '#d4a574' },
    { id: 'albrecht', name: '阿尔布雷希特', icon: '🔮', image: 'GAME/Faction/albrecht.jpg', level: '25-40', minLevel: 25, maxLevel: 40, faction: 'whisper', factionName: '低语者', dropMult: 2.2, desc: '阿尔布雷希特的实验室', color: '#8b7355' }
];

// 第3页 - 各派系下属星球的区域配置
var PLANET_ZONES_GRINEER = {
    earth: [
        { id: 'e_zone1', name: '☿️游掠凶形☿️', icon: '☿️', image: 'GAME/Faction/Infested.jpg', level: 5, minLevel: 5, maxLevel: 10, faction: 'grineer', factionName: 'Grineer', dropMult: 1.2, desc: 'Grineer巡逻区域', color: '#4a8c4a' },
        { id: 'e_zone2', name: '☿交锋异士☿', icon: '☿️', image: 'GAME/Faction/Infested.jpg', level: 8, minLevel: 8, maxLevel: 12, faction: 'grineer', factionName: 'Grineer', dropMult: 1.3, desc: 'Grineer精英交战区', color: '#4a8c4a' },
		{ id: 'e_zone3', name: '☿暴戾战将☿', icon: '☿️', image: 'GAME/Faction/Infested.jpg', level: 8, minLevel: 8, maxLevel: 12, faction: 'grineer', factionName: 'Grineer', dropMult: 1.3, desc: 'Grineer精英交战区', color: '#4a8c4a' },
		{ id: 'e_zone4', name: '☿畸变造物☿', icon: '☿️', image: 'GAME/Faction/Infested.jpg', level: 8, minLevel: 8, maxLevel: 12, faction: 'grineer', factionName: 'Grineer', dropMult: 1.3, desc: 'Grineer精英交战区', color: '#4a8c4a' },
		{ id: 'e_zone5', name: '☿长空掠影☿', icon: '☿️', image: 'GAME/Faction/Infested.jpg', level: 8, minLevel: 8, maxLevel: 12, faction: 'grineer', factionName: 'Grineer', dropMult: 1.3, desc: 'Grineer精英交战区', color: '#4a8c4a' },
		{ id: 'e_zone6', name: '☿澜下械躯☿', icon: '☿️', image: 'GAME/Faction/Infested.jpg', level: 8, minLevel: 8, maxLevel: 12, faction: 'grineer', factionName: 'Grineer', dropMult: 1.3, desc: 'Grineer精英交战区', color: '#4a8c4a' },
		{ id: 'e_zone7', name: '☿工坊役众☿', icon: '☿️', image: 'GAME/Faction/Infested.jpg', level: 8, minLevel: 8, maxLevel: 12, faction: 'grineer', factionName: 'Grineer', dropMult: 1.3, desc: 'Grineer精英交战区', color: '#4a8c4a' },
		{ id: 'e_zone8', name: '☿统御凶僚☿', icon: '☿️', image: 'GAME/Faction/Infested.jpg', level: 8, minLevel: 8, maxLevel: 12, faction: 'grineer', factionName: 'Grineer', dropMult: 1.3, desc: 'Grineer精英交战区', color: '#4a8c4a' }
    ],
    sedna: [
        { id: 's_zone1', name: '女皇禁地', icon: '👑', image: 'GAME/Faction/sedna.jpg', level: 18, minLevel: 18, maxLevel: 25, faction: 'grineer', factionName: 'Grineer', dropMult: 1.8, desc: 'Grineer女皇的私人领地', color: '#cc4444' }
    ],
    kuva: [
        { id: 'k_zone1', name: '赤毒熔炉', icon: '🔥', image: 'GAME/Faction/kuva.jpg', level: 28, minLevel: 28, maxLevel: 35, faction: 'grineer', factionName: 'Grineer', dropMult: 2.5, desc: '赤毒提炼核心区域', color: '#8b0000' }
    ]
};

var PLANET_ZONES_CORPUS = {
    venus: [
        { id: 'v_zone1', name: '集气城市', icon: '🏭', image: 'GAME/Faction/venus.jpg', level: 5, minLevel: 5, maxLevel: 8, faction: 'corpus', factionName: 'Corpus', dropMult: 1.2, desc: 'Corpus气体采集站', color: '#c8a84b' }
    ],
    neptune: [
        { id: 'n_zone1', name: '研究核心', icon: '🔬', image: 'GAME/Faction/neptune.jpg', level: 28, minLevel: 28, maxLevel: 35, faction: 'corpus', factionName: 'Corpus', dropMult: 2.0, desc: 'Corpus最高机密研究所', color: '#4488ff' }
    ]
};

var PLANET_ZONES_INFESTED = {
    eris: [
        { id: 'er_zone1', name: '瘟疫核心', icon: '☣️', image: 'GAME/Faction/eris.jpg', level: 22, minLevel: 22, maxLevel: 30, faction: 'infested', factionName: 'Infested', dropMult: 2.0, desc: 'Infested瘟疫源头', color: '#4eff4e' }
    ],
    deimos: [
        { id: 'd_zone1', name: '感染深渊', icon: '🕳️', image: 'GAME/Faction/deimos.jpg', level: 18, minLevel: 18, maxLevel: 25, faction: 'infested', factionName: 'Infested', dropMult: 1.8, desc: 'Infested巢穴深处', color: '#2a5a2a' }
    ]
};

var PLANET_ZONES_SENTIENT = {
    lua: [
        { id: 'l_zone1', name: '月球表面', icon: '🌑', image: 'GAME/Faction/lua.jpg', level: 22, minLevel: 22, maxLevel: 30, faction: 'sentient', factionName: 'Sentient', dropMult: 2.2, desc: 'Sentient月球战场', color: '#888888' }
    ],
    veil: [
        { id: 've_zone1', name: '虚空裂隙', icon: '💫', image: 'GAME/Faction/veil.jpg', level: 32, minLevel: 32, maxLevel: 40, faction: 'sentient', factionName: 'Sentient', dropMult: 3.0, desc: 'Sentient虚空核心', color: '#ff66ff' }
    ]
};

var PLANET_ZONES_OROKIN = {
    void: [
        { id: 'vo_zone1', name: '虚空塔', icon: '🏛️', image: 'GAME/Faction/void.jpg', level: 12, minLevel: 12, maxLevel: 20, faction: 'orokin', factionName: 'Orokin', dropMult: 1.8, desc: 'Orokin虚空防御塔', color: '#cc4444' }
    ],
    derelict: [
        { id: 'de_zone1', name: '废弃核心', icon: '⚙️', image: 'GAME/Faction/derelict.jpg', level: 25, minLevel: 25, maxLevel: 35, faction: 'orokin', factionName: 'Orokin', dropMult: 2.5, desc: 'Orokin废弃飞船核心', color: '#8b4513' }
    ]
};

var PLANET_ZONES_WHISPER = {
    duviri: [
        { id: 'du_zone1', name: '王境入口', icon: '🚪', image: 'GAME/Faction/duviri.jpg', level: 18, minLevel: 18, maxLevel: 25, faction: 'whisper', factionName: '低语者', dropMult: 2.0, desc: '双衍王境入口区域', color: '#d4a574' }
    ],
    albrecht: [
        { id: 'al_zone1', name: '实验室深处', icon: '🧪', image: 'GAME/Faction/albrecht.jpg', level: 28, minLevel: 28, maxLevel: 40, faction: 'whisper', factionName: '低语者', dropMult: 2.5, desc: '阿尔布雷希特的秘密实验室', color: '#8b7355' }
    ]
};

// 派系配置映射
var FACTION_CONFIG = {
    grineer: { page2: 'page-faction-grineer', page3: 'page-zone-grineer', planets: 'PLANETS_GRINEER', zones: 'PLANET_ZONES_GRINEER', color: '#4a8c4a' },
    corpus: { page2: 'page-faction-corpus', page3: 'page-zone-corpus', planets: 'PLANETS_CORPUS', zones: 'PLANET_ZONES_CORPUS', color: '#c8a84b' },
    infested: { page2: 'page-faction-infested', page3: 'page-zone-infested', planets: 'PLANETS_INFESTED', zones: 'PLANET_ZONES_INFESTED', color: '#4eff4e' },
    sentient: { page2: 'page-faction-sentient', page3: 'page-zone-sentient', planets: 'PLANETS_SENTIENT', zones: 'PLANET_ZONES_SENTIENT', color: '#ff66ff' },
    orokin: { page2: 'page-faction-orokin', page3: 'page-zone-orokin', planets: 'PLANETS_OROKIN', zones: 'PLANET_ZONES_OROKIN', color: '#cc4444' },
    whisper: { page2: 'page-faction-whisper', page3: 'page-zone-whisper', planets: 'PLANETS_WHISPER', zones: 'PLANET_ZONES_WHISPER', color: '#d4a574' }
};

let currentFaction = null;
let selectedFactionPlanet = null;
let selectedFactionZone = null;