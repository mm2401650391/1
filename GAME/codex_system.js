// ═══════════════════════════════════════════════════════════════
//  三级图鉴系统 - 卡片掉落与收集
// ═══════════════════════════════════════════════════════════════

// 图鉴层级结构：大条目(派系) -> 中条目(星球) -> 小条目(卡组) -> 卡片
var CODEX_STRUCTURE = {
    grineer: {
        name: 'Grineer',
        icon: '🔴',
        color: '#ff4444',
        image: 'GAME/Faction/Grineer.jpg',
        blocks: {
            huanyu: {
                name: '🌟寰宇🌟',
                icon: '🌟',
                image: 'GAME/Faction/Grineer.jpg',
                desc: 'Grineer帝国的核心领地',
                decks: {
                    'e_zone1': { name: '☿️游掠凶形☿️', icon: '☿️', desc: '基础步兵与游掠单位' },
                    'e_zone2': { name: '☿交锋异士☿', icon: '☿', desc: '精英战斗单位' },
                    'e_zone3': { name: '☿暴戾战将☿', icon: '☿', desc: '重型突击单位' },
                    'e_zone4': { name: '☿畸变造物☿', icon: '☿', desc: '实验性生物武器' },
                    'e_zone5': { name: '☿长空掠影☿', icon: '☿', desc: '空中作战单位' },
                    'e_zone6': { name: '☿澜下械躯☿', icon: '☿', desc: '水下机械单位' },
                    'e_zone7': { name: '☿工坊役众☿', icon: '☿', desc: '工程与维护单位' },
                    'e_zone8': { name: '☿统御凶僚☿', icon: '☿', desc: '指挥与统治阶层' }
                }
            }
        }
    },
    corpus: { name: 'Corpus', icon: '🔵', color: '#4488ff', image: 'GAME/Faction/Corpus.jpg', blocks: {} },
    infested: { name: 'Infested', icon: '🟢', color: '#4eff4e', image: 'GAME/Faction/Infested.jpg', blocks: {} },
    sentient: { name: 'Sentient', icon: '🟣', color: '#ff66ff', image: 'GAME/Faction/Sentient.jpg', blocks: {} },
    orokin: { name: 'Orokin', icon: '👑', color: '#ffd700', image: 'GAME/Faction/Orokin.jpg', blocks: {} }
};

// 卡片数据 - 按小条目(deck)分组
var DECK_CARDS = {
    'e_zone1': [
        { id: 'c_ylxx_01', name: '屠夫', image: 'GAME/enemies/Grineer/P1/1Butcher.jpg', rarity: 1, desc: '基础屠夫的训练记录', faction: 'grineer' },
        { id: 'c_ylxx_02', name: '沙漠屠夫', image: 'GAME/enemies/Grineer/P1/1Butcher1-1.jpg', rarity: 2, desc: '沙漠地带屠夫的护甲碎片', faction: 'grineer' },
        { id: 'c_ylxx_03', name: '游掠者印记', image: 'GAME/enemies/Grineer/P1/1Butcher.jpg', rarity: 3, desc: '游掠凶形单位的身份标识', faction: 'grineer' },
        { id: 'c_ylxx_04', name: '凶形核心', image: 'GAME/enemies/Grineer/P1/1Butcher1-1.jpg', rarity: 4, desc: '游掠凶形单位的核心能量源', faction: 'grineer' }
    ],
    'e_zone2': [
        { id: 'c_jfys_01', name: '异士交锋记录', image: 'GAME/enemies/Grineer/P1/1Butcher.jpg', rarity: 1, desc: '精英战斗单位的交锋数据', faction: 'grineer' },
        { id: 'c_jfys_02', name: '异士改装件', image: 'GAME/enemies/Grineer/P1/1Butcher1-1.jpg', rarity: 2, desc: '精英单位的装备改装零件', faction: 'grineer' }
    ],
    'e_zone3': [
        { id: 'c_blzj_01', name: '战将徽章', image: 'GAME/enemies/Grineer/P1/1Butcher.jpg', rarity: 2, desc: '暴戾战将的荣誉徽章', faction: 'grineer' },
        { id: 'c_blzj_02', name: '重型装甲板', image: 'GAME/enemies/Grineer/P1/1Butcher1-1.jpg', rarity: 3, desc: '战将重型装甲的残片', faction: 'grineer' }
    ],
    'e_zone4': [
        { id: 'c_jbzw_01', name: '畸变细胞', image: 'GAME/enemies/Grineer/P1/1Butcher.jpg', rarity: 2, desc: '生物实验的畸变细胞样本', faction: 'grineer' },
        { id: 'c_jbzw_02', name: '造物蓝图', image: 'GAME/enemies/Grineer/P1/1Butcher1-1.jpg', rarity: 3, desc: '畸变造物的实验设计图', faction: 'grineer' }
    ],
    'e_zone5': [
        { id: 'c_ckly_01', name: '掠影翼片', image: 'GAME/enemies/Grineer/P1/1Butcher.jpg', rarity: 2, desc: '空中单位的翼型残片', faction: 'grineer' },
        { id: 'c_ckly_02', name: '长空之眼', image: 'GAME/enemies/Grineer/P1/1Butcher1-1.jpg', rarity: 3, desc: '侦察单位的传感核心', faction: 'grineer' }
    ],
    'e_zone6': [
        { id: 'c_lxjq_01', name: '水下密封件', image: 'GAME/enemies/Grineer/P1/1Butcher.jpg', rarity: 2, desc: '水下机械单位的密封组件', faction: 'grineer' },
        { id: 'c_lxjq_02', name: '澜下核心', image: 'GAME/enemies/Grineer/P1/1Butcher1-1.jpg', rarity: 3, desc: '水下机械的动力核心', faction: 'grineer' }
    ],
    'e_zone7': [
        { id: 'c_gfyz_01', name: '工坊工具', image: 'GAME/enemies/Grineer/P1/1Butcher.jpg', rarity: 1, desc: 'Grineer工坊的标准工具', faction: 'grineer' },
        { id: 'c_gfyz_02', name: '役众铭牌', image: 'GAME/enemies/Grineer/P1/1Butcher1-1.jpg', rarity: 2, desc: '工坊役众的身份铭牌', faction: 'grineer' }
    ],
    'e_zone8': [
        { id: 'c_tyxl_01', name: '统御权杖', image: 'GAME/enemies/Grineer/P1/1Butcher.jpg', rarity: 3, desc: '统治阶层的权杖碎片', faction: 'grineer' },
        { id: 'c_tyxl_02', name: '凶僚密令', image: 'GAME/enemies/Grineer/P1/1Butcher1-1.jpg', rarity: 4, desc: 'Grineer高层的机密指令', faction: 'grineer' }
    ]
};

var CARD_RARITY = {
    1: { name: '普通', color: '#888', stars: '★☆☆☆☆', glow: 'none' },
    2: { name: '稀有', color: '#4488ff', stars: '★★☆☆☆', glow: '0 0 10px rgba(68,136,255,0.3)' },
    3: { name: '史诗', color: '#aa44ff', stars: '★★★☆☆', glow: '0 0 15px rgba(170,68,255,0.4)' },
    4: { name: '传说', color: '#ffaa00', stars: '★★★★☆', glow: '0 0 20px rgba(255,170,0,0.5)' }
};

var RARITY_NAMES = { 1: 'common', 2: 'rare', 3: 'epic', 4: 'legendary' };




// 根据卡片ID查找完整卡片数据
// ═══════════════════════════════════════════════════════════════
//  敌人专属卡片精确掉落（codexId → 卡片id 一对一）
// ═══════════════════════════════════════════════════════════════

// 根据敌人的 codexId 查找对应卡片数据
function findCardById(cardId) {
    if (!cardId) return null;
    for (var deckId in DECK_CARDS) {
        var deck = DECK_CARDS[deckId];
        for (var i = 0; i < deck.length; i++) {
            if (deck[i].id === cardId) {
                return deck[i];
            }
        }
    }
    return null;
}

// 敌人掉落：codexId 精确对应卡片id，30%掉率
function dropCardFromEnemy(enemy) {
    if (!enemy || !enemy.codexId) return null;
    if (Math.random() >= 0.30) return null;  // 30% 掉率
    
    var card = findCardById(enemy.codexId);
    return card;  // 找到就返回，找不到返回null
}

// 从敌人 codexId 尝试掉落卡片（每张卡片独立判定）
// codexId 直接对应卡片ID
function tryDropCardFromEnemy(codexId) {
    if (!codexId) return null;
    
    // codexId 就是卡片ID，直接查找
    var card = findCardById(codexId);
    if (!card) return null;
    
    // 30% 掉率判定
    if (Math.random() < 0.30) {
        return card;
    }
    return null;
}


// 根据卡片ID查找完整卡片数据
function findCardById(cardId) {
    for (var deckId in DECK_CARDS) {
        var deck = DECK_CARDS[deckId];
        for (var i = 0; i < deck.length; i++) {
            if (deck[i].id === cardId) {
                return deck[i];
            }
        }
    }
    return null;
}



// 保留兼容：从指定卡组中尝试掉落（用于其他非敌人掉落场景）
function tryDropCardFromDeck(deckId) {
    if (Math.random() >= 0.20) return null;  // 20% 基础掉率
    
    var cards = DECK_CARDS[deckId];
    if (!cards || cards.length === 0) return null;
    
    // 按稀有度加权随机（稀有度越高概率越低）
    var weights = [];
    for (var i = 0; i < cards.length; i++) {
        weights.push(5 - (cards[i].rarity || 1));  // 1→4, 2→3, 3→2, 4→1
    }
    
    var totalWeight = 0;
    for (var i = 0; i < weights.length; i++) totalWeight += weights[i];
    
    var roll = Math.random() * totalWeight;
    var cumulative = 0;
    for (var i = 0; i < cards.length; i++) {
        cumulative += weights[i];
        if (roll < cumulative) {
            return cards[i];
        }
    }
    return cards[cards.length - 1];
}

// 玩家卡片库存 - 延迟初始化，等 currentUser 可用
var playerCards = {};
var codexViewState = { level: 'factions', faction: null, block: null, deck: null };

// ═══════════════════════════════════════════════════════════════
//  卡片库存管理（安全版本，不依赖 currentUser 立即存在）
// ═══════════════════════════════════════════════════════════════

function getCardsStorageKey() {
    // 安全获取用户ID，如果 currentUser 不存在则返回 null
    if (typeof currentUser !== 'undefined' && currentUser && currentUser.id) {
        return 'cards_' + currentUser.id;
    }
    return null;
}

function initPlayerCards() {
    // 优先使用全局已加载的数据
    if (window.playerCards && Object.keys(window.playerCards).length > 0) {
        playerCards = window.playerCards;
        return;
    }
    const key = getCardsStorageKey();
    if (!key) {
        playerCards = {};
        window.playerCards = playerCards;  // 同步到全局
        return;
    }
    try {
        const saved = localStorage.getItem(key);
        if (saved) {
            playerCards = JSON.parse(saved);
        } else {
            playerCards = {};
        }
    } catch (e) {
        playerCards = {};
    }
    window.playerCards = playerCards;  // 同步到全局
}


function savePlayerCards() {
    const key = getCardsStorageKey();
    if (!key) return;
    try {
        localStorage.setItem(key, JSON.stringify(playerCards));
    } catch (e) {
        console.error('保存卡片失败:', e);
    }
}

function addPlayerCard(cardData) {
    if (!playerCards[cardData.id]) {
        playerCards[cardData.id] = {
            count: 0,
            firstGetTime: new Date().toISOString(),
            data: cardData
        };
    }
    playerCards[cardData.id].count++;
    savePlayerCards();
    return playerCards[cardData.id].count;
}

function hasPlayerCard(cardId) {
    var cards = window.playerCards || playerCards || {};  // 优先读全局
    return !!cards[cardId];
}

function getPlayerCardCount(cardId) {
    var cards = window.playerCards || playerCards || {};  // 优先读全局
    return cards[cardId] ? cards[cardId].count : 0;
}

// ═══════════════════════════════════════════════════════════════
//  卡片掉落逻辑
// ═══════════════════════════════════════════════════════════════
// 从敌人专属卡片池中掉落（敌人→专属卡片）
// 敌人掉落：codexId 通过映射表找到卡片id，30%掉率
function dropCardFromEnemy(enemy) {
    if (!enemy || !enemy.codexId) return null;
    if (Math.random() >= 0.30) return null;  // 30% 掉率
    
    // codexId → cardId → 卡片数据
    var cardId = CODEXID_TO_CARDID[enemy.codexId];
    if (!cardId) return null;
    
    var card = findCardById(cardId);
    return card;  // 找到返回卡片，找不到返回null
}




function dropCardFromBattle(zoneId) {
    // 优先使用传入的参数，兼容全局 selectedZone
    var deckId = zoneId || (typeof selectedZone !== 'undefined' && selectedZone ? selectedZone.id : null);
    if (!deckId) return null;
    return tryDropCardFromDeck(deckId);
}

// ═══════════════════════════════════════════════════════════════
//  进度计算
// ═══════════════════════════════════════════════════════════════

function calculateFactionProgress(factionKey) {
    var faction = CODEX_STRUCTURE[factionKey];
    var total = 0, collected = 0;
    for (var blockKey in faction.blocks) {
        var block = faction.blocks[blockKey];
        for (var deckId in block.decks) {
            var cards = DECK_CARDS[deckId] || [];
            total += cards.length;
            for (var i = 0; i < cards.length; i++) {
                if (hasPlayerCard(cards[i].id)) collected++;
            }
        }
    }
    return { total: total, collected: collected };
}

function calculateBlockProgress(factionKey, blockKey) {
    var block = CODEX_STRUCTURE[factionKey] && CODEX_STRUCTURE[factionKey].blocks ? CODEX_STRUCTURE[factionKey].blocks[blockKey] : null;
    var total = 0, collected = 0;
    if (!block) return { total: 0, collected: 0 };
    for (var deckId in block.decks) {
        var cards = DECK_CARDS[deckId] || [];
        total += cards.length;
        for (var i = 0; i < cards.length; i++) {
            if (hasPlayerCard(cards[i].id)) collected++;
        }
    }
    return { total: total, collected: collected };
}

function calculateDeckProgress(deckId) {
    var cards = DECK_CARDS[deckId] || [];
    var collected = 0;
    for (var i = 0; i < cards.length; i++) {
        if (hasPlayerCard(cards[i].id)) collected++;
    }
    return { total: cards.length, collected: collected };
}

function calculateTotalProgress() {
    var total = 0, collected = 0;
    for (var deckId in DECK_CARDS) {
        var deck = DECK_CARDS[deckId];
        total += deck.length;
        for (var i = 0; i < deck.length; i++) {
            if (hasPlayerCard(deck[i].id)) collected++;
        }
    }
    return { total: total, collected: collected };
}

// ═══════════════════════════════════════════════════════════════
//  面包屑导航
// ═══════════════════════════════════════════════════════════════

function updateCodexBreadcrumb() {
    var container = document.getElementById('codexBreadcrumb');
    if (!container) return;
    var level = codexViewState.level;
    var faction = codexViewState.faction;
    var block = codexViewState.block;
    var deck = codexViewState.deck;

    var html = '<span style="color: var(--orokin-cyan); cursor: pointer;" onclick="renderCodexFactions()" onmouseover="this.style.color=\'var(--tenno-gold)\'" onmouseout="this.style.color=\'var(--orokin-cyan)\'">📖 图鉴总览</span>';

    if (level === 'factions') { container.innerHTML = html; return; }

    var fData = CODEX_STRUCTURE[faction];
    html += ' <span style="color: #555;">/</span> <span style="cursor: pointer; color: ' + fData.color + ';" onclick="enterCodexFaction(\'' + faction + '\')" onmouseover="this.style.color=\'var(--tenno-gold)\'" onmouseout="this.style.color=\'' + fData.color + '\'">' + fData.icon + ' ' + fData.name + '</span>';

    if (level === 'blocks') { container.innerHTML = html; return; }

    var bData = fData.blocks[block];
    html += ' <span style="color: #555;">/</span> <span style="cursor: pointer; color: var(--tenno-gold);" onclick="enterCodexBlock(\'' + faction + '\', \'' + block + '\')" onmouseover="this.style.color=\'#fff\'" onmouseout="this.style.color=\'var(--tenno-gold)\'">' + bData.icon + ' ' + bData.name + '</span>';

    if (level === 'decks') { container.innerHTML = html; return; }

    var dData = bData.decks[deck];
    html += ' <span style="color: #555;">/</span> <span style="color: #fff;">' + dData.icon + ' ' + dData.name + '</span>';
    container.innerHTML = html;
}

// ═══════════════════════════════════════════════════════════════
//  渲染函数
// ═══════════════════════════════════════════════════════════════

function renderCodexFactions() {
    var grid = document.getElementById('codexGrid');
    if (!grid) return;
    codexViewState = { level: 'factions', faction: null, block: null, deck: null };
    updateCodexBreadcrumb();
    var html = '';
    for (var key in CODEX_STRUCTURE) {
        var faction = CODEX_STRUCTURE[key];
        var stats = calculateFactionProgress(key);
        var percent = stats.total > 0 ? Math.floor((stats.collected / stats.total) * 100) : 0;
        html += '<div onclick="enterCodexFaction(\'' + key + '\')" style="background: linear-gradient(180deg, rgba(18,18,26,0.95) 0%, rgba(10,10,15,0.95) 100%); border: 2px solid ' + faction.color + '40; border-radius: 16px; overflow: hidden; cursor: pointer; transition: all 0.3s; position: relative; aspect-ratio: 16/10;" onmouseover="this.style.borderColor=\'' + faction.color + '\'; this.style.transform=\'translateY(-5px)\'; this.style.boxShadow=\'0 10px 30px ' + faction.color + '30\';" onmouseout="this.style.borderColor=\'' + faction.color + '40\'; this.style.transform=\'none\'; this.style.boxShadow=\'none\';"><div style="position: absolute; inset: 0; z-index: 1;">' + (faction.image ? '<img src="' + faction.image + '" style="width: 100%; height: 100%; object-fit: cover; filter: brightness(0.4) saturate(0.8);" onerror="this.style.display=\'none\'">' : '') + '</div><div style="position: absolute; inset: 0; background: linear-gradient(180deg, transparent 30%, rgba(0,0,0,0.9) 100%); z-index: 2;"></div><div style="position: absolute; inset: 0; z-index: 3; padding: 20px; display: flex; flex-direction: column; justify-content: flex-end;"><div style="display: flex; align-items: center; gap: 12px; margin-bottom: 8px;"><span style="font-size: 2.5rem;">' + faction.icon + '</span><span style="font-family: Orbitron; font-size: 1.4rem; color: #fff; text-shadow: 0 0 10px ' + faction.color + '80;">' + faction.name + '</span></div><div style="display: flex; align-items: center; gap: 10px;"><div style="flex: 1; height: 6px; background: #222; border-radius: 3px; overflow: hidden;"><div style="width: ' + percent + '%; height: 100%; background: ' + faction.color + '; border-radius: 3px; transition: width 0.5s;"></div></div><span style="font-family: Orbitron; font-size: 0.85rem; color: ' + faction.color + '; min-width: 45px; text-align: right;">' + percent + '%</span></div><div style="color: #888; font-size: 0.75rem; margin-top: 6px;">' + stats.collected + ' / ' + stats.total + ' 卡片</div></div></div>';
    }
    grid.innerHTML = html || '<div style="grid-column: 1 / -1; text-align: center; color: #666; padding: 60px;">暂无派系数据</div>';
}

function renderCodexBlocks(factionKey) {
    var grid = document.getElementById('codexGrid');
    var faction = CODEX_STRUCTURE[factionKey];
    if (!grid || !faction) return;
    codexViewState = { level: 'blocks', faction: factionKey, block: null, deck: null };
    updateCodexBreadcrumb();
    var html = '';
    for (var key in faction.blocks) {
        var block = faction.blocks[key];
        var stats = calculateBlockProgress(factionKey, key);
        var percent = stats.total > 0 ? Math.floor((stats.collected / stats.total) * 100) : 0;
        html += '<div onclick="enterCodexBlock(\'' + factionKey + '\', \'' + key + '\')" style="background: linear-gradient(180deg, rgba(18,18,26,0.95) 0%, rgba(10,10,15,0.95) 100%); border: 2px solid ' + faction.color + '30; border-radius: 16px; overflow: hidden; cursor: pointer; transition: all 0.3s; position: relative; aspect-ratio: 16/9;" onmouseover="this.style.borderColor=\'' + faction.color + '80\'; this.style.transform=\'translateY(-5px)\';" onmouseout="this.style.borderColor=\'' + faction.color + '30\'; this.style.transform=\'none\';"><div style="position: absolute; inset: 0; z-index: 1;">' + (block.image ? '<img src="' + block.image + '" style="width: 100%; height: 100%; object-fit: cover; filter: brightness(0.35);" onerror="this.style.display=\'none\'">' : '') + '</div><div style="position: absolute; inset: 0; background: linear-gradient(180deg, transparent 20%, rgba(0,0,0,0.85) 100%); z-index: 2;"></div><div style="position: absolute; inset: 0; z-index: 3; padding: 20px; display: flex; flex-direction: column; justify-content: flex-end;"><div style="font-size: 2rem; margin-bottom: 6px;">' + block.icon + '</div><div style="font-family: Orbitron; font-size: 1.2rem; color: var(--tenno-gold); margin-bottom: 4px;">' + block.name + '</div><div style="color: #888; font-size: 0.8rem; margin-bottom: 10px;">' + block.desc + '</div><div style="display: flex; align-items: center; gap: 8px;"><div style="flex: 1; height: 5px; background: #222; border-radius: 3px; overflow: hidden;"><div style="width: ' + percent + '%; height: 100%; background: ' + faction.color + '; border-radius: 3px;"></div></div><span style="font-family: Orbitron; font-size: 0.75rem; color: ' + faction.color + ';">' + percent + '%</span></div><div style="color: #666; font-size: 0.7rem; margin-top: 5px;">' + stats.collected + ' / ' + stats.total + ' 卡片 · ' + Object.keys(block.decks || {}).length + ' 个卡组</div></div></div>';
    }
    grid.innerHTML = html || '<div style="grid-column: 1 / -1; text-align: center; color: #666; padding: 60px;">该派系暂无区域数据</div>';
}

function renderCodexDecks(factionKey, blockKey) {
    var grid = document.getElementById('codexGrid');
    var faction = CODEX_STRUCTURE[factionKey];
    var block = faction && faction.blocks ? faction.blocks[blockKey] : null;
    if (!grid || !block) return;
    codexViewState = { level: 'decks', faction: factionKey, block: blockKey, deck: null };
    updateCodexBreadcrumb();
    var html = '';
    for (var deckId in block.decks) {
        var deck = block.decks[deckId];
        var stats = calculateDeckProgress(deckId);
        var percent = stats.total > 0 ? Math.floor((stats.collected / stats.total) * 100) : 0;
        html += '<div onclick="enterCodexDeck(\'' + factionKey + '\', \'' + blockKey + '\', \'' + deckId + '\')" style="background: var(--panel-bg); border: 2px solid ' + faction.color + '25; border-radius: 14px; padding: 25px; cursor: pointer; transition: all 0.3s; text-align: center;" onmouseover="this.style.borderColor=\'' + faction.color + '80\'; this.style.transform=\'translateY(-5px)\'; this.style.boxShadow=\'0 10px 30px ' + faction.color + '15\';" onmouseout="this.style.borderColor=\'' + faction.color + '25\'; this.style.transform=\'none\'; this.style.boxShadow=\'none\';"><div style="font-size: 3rem; margin-bottom: 12px;">' + deck.icon + '</div><div style="font-family: Orbitron; font-size: 1.1rem; color: #fff; margin-bottom: 6px;">' + deck.name + '</div><div style="color: #888; font-size: 0.8rem; margin-bottom: 15px;">' + deck.desc + '</div><div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;"><div style="flex: 1; height: 6px; background: #222; border-radius: 3px; overflow: hidden;"><div style="width: ' + percent + '%; height: 100%; background: linear-gradient(90deg, ' + faction.color + '80, ' + faction.color + '); border-radius: 3px;"></div></div><span style="font-family: Orbitron; font-size: 0.8rem; color: ' + faction.color + '; min-width: 40px;">' + percent + '%</span></div><div style="color: #666; font-size: 0.75rem;">' + stats.collected + ' / ' + stats.total + ' 卡片已收集</div></div>';
    }
    grid.innerHTML = html || '<div style="grid-column: 1 / -1; text-align: center; color: #666; padding: 60px;">该区域暂无卡组数据</div>';
}

function renderCodexCards(factionKey, blockKey, deckId) {
    var grid = document.getElementById('codexGrid');
    var cards = DECK_CARDS[deckId];
    if (!grid || !cards) return;
    
    // 关键修复：每次渲染前重新加载玩家卡片数据，确保同步
    initPlayerCards();
    
    codexViewState = { level: 'cards', faction: factionKey, block: blockKey, deck: deckId };
    updateCodexBreadcrumb();
    
    var html = '';
    for (var i = 0; i < cards.length; i++) {
        var card = cards[i];
        // 关键修复：实时检查，使用最新的 playerCards
        var hasCard = hasPlayerCard(card.id);
        var count = getPlayerCardCount(card.id);
        var rarity = CARD_RARITY[card.rarity] || CARD_RARITY[1];
        
        if (!hasCard) {
            // 未解锁 - 显示锁定状态
            html += '<div style="background: linear-gradient(180deg, #1a1a2e 0%, #0a0a1a 100%); border-radius: 12px; border: 2px solid #333; overflow: hidden; position: relative; transition: all 0.3s;"><div style="height: 200px; background: #0a0a0f; display: flex; align-items: center; justify-content: center; filter: grayscale(1) brightness(0.2);"><div style="text-align: center;"><div style="font-size: 3rem; opacity: 0.7; filter: drop-shadow(0 0 15px rgba(255,255,255,0.2));">🔒</div><div style="font-family: Orbitron; font-size: 0.8rem; color: #666; letter-spacing: 3px; text-transform: uppercase; margin-top: 10px;">未解锁</div></div></div><div style="padding: 14px;"><div style="color: #444; text-align: center; font-family: Orbitron;">???</div><div style="display: flex; justify-content: center; margin-top: 8px;"><span style="color: ' + rarity.color + ';">' + rarity.stars + '</span></div></div></div>';
        } else {
            // 已解锁 - 显示完整卡片，并添加点击事件
            html += '<div onclick="showCardDetailModal(\'' + card.id + '\', \'' + deckId + '\')" style="background: linear-gradient(180deg, #1a1a2e 0%, #0a0a1a 100%); border-radius: 12px; border: 2px solid ' + rarity.color + '40; overflow: hidden; position: relative; cursor: pointer; transition: all 0.3s;" onmouseover="this.style.borderColor=\'' + rarity.color + '\'; this.style.transform=\'translateY(-8px)\'; this.style.boxShadow=\'0 20px 40px rgba(0,0,0,0.5), ' + rarity.glow + '\';" onmouseout="this.style.borderColor=\'' + rarity.color + '40\'; this.style.transform=\'none\'; this.style.boxShadow=\'none\';"><div style="position: absolute; top: 0; left: 0; right: 0; padding: 10px 14px; display: flex; justify-content: space-between; align-items: center; z-index: 10; background: linear-gradient(180deg, rgba(0,0,0,0.85) 0%, transparent 100%); pointer-events: none;"><span style="color: var(--tenno-gold); font-size: 0.85rem; text-shadow: 0 0 5px rgba(200,168,75,0.5); letter-spacing: 2px;">' + rarity.stars + '</span>' + (count > 1 ? '<span style="color: var(--tenno-gold); font-family: Orbitron; font-size: 0.8rem;">x' + count + '</span>' : '') + '</div><div style="height: 200px; overflow: hidden; background: #0a0a0f;"><img src="' + card.image + '" style="width: 100%; height: 100%; object-fit: cover; object-position: top center; transition: transform 0.4s;" onerror="this.style.display=\'none\'; this.parentElement.innerHTML=\'<div style=width:100%;height:100%;display:flex;align-items:center;justify-content:center;color:' + rarity.color + ';font-size:3rem;>🎴</div>\'"></div><div style="padding: 14px;"><div style="font-family: Orbitron; font-size: 0.95rem; color: #fff; margin-bottom: 6px; text-align: center; text-shadow: 0 0 10px rgba(0,0,0,0.8);">' + card.name + '</div><div style="display: flex; justify-content: center; gap: 12px; font-size: 0.75rem; color: #888; margin-bottom: 12px;"><span style="color: ' + rarity.color + ';">' + rarity.name + '</span></div><div style="color: #888; font-size: 0.8rem; line-height: 1.4; text-align: center; margin-bottom: 10px;">' + card.desc + '</div><div style="display: flex; align-items: center; gap: 10px;"><div style="flex: 1; height: 6px; background: #222; border-radius: 3px; overflow: hidden;"><div style="height: 100%; background: ' + rarity.color + '; border-radius: 3px; transition: width 0.5s; width: ' + Math.min(100, (count / 5) * 100) + '%;"></div></div><span style="font-size: 0.75rem; color: var(--tenno-gold); font-family: Orbitron; min-width: 40px; text-align: right;">' + count + '/5</span></div></div></div>';
        }
    }
    grid.innerHTML = html || '<div style="grid-column: 1 / -1; text-align: center; color: #666; padding: 60px;">该卡组暂无卡片数据</div>';
}

function enterCodexFaction(factionKey) { renderCodexBlocks(factionKey); }
function enterCodexBlock(factionKey, blockKey) { renderCodexDecks(factionKey, blockKey); }
function enterCodexDeck(factionKey, blockKey, deckId) { renderCodexCards(factionKey, blockKey, deckId); }

function switchCodexTab(tab) { renderCodexFactions(); }

function updateCodexOverview() {
    var stats = calculateTotalProgress();
    var percent = stats.total > 0 ? Math.floor((stats.collected / stats.total) * 100) : 0;
    var cEl = document.getElementById('codexCardCount');
    var tEl = document.getElementById('codexTotalCards');
    var pEl = document.getElementById('codexPercent');
    if (cEl) cEl.textContent = stats.collected;
    if (tEl) tEl.textContent = stats.total;
    if (pEl) pEl.textContent = percent + '%';
}

// 卡片获得弹窗
function showCardAcquireModal(cardData, sourceName) {
    var rarity = CARD_RARITY[cardData.rarity] || CARD_RARITY[1];
    var isNew = getPlayerCardCount(cardData.id) === 1;
    var overlay = document.createElement('div');
    overlay.id = 'cardAcquireOverlay';
    overlay.style.cssText = 'position: fixed; inset: 0; background: rgba(0,0,0,0.92); z-index: 3000; display: flex; align-items: center; justify-content: center; animation: fadeIn 0.3s ease;';
    
    // 使用 DOM 构建，避免 innerHTML 的 onclick 作用域问题
    var content = document.createElement('div');
    content.style.cssText = 'background: linear-gradient(180deg, #1a1a2e 0%, #0a0a1a 100%); border: 2px solid ' + rarity.color + '; border-radius: 20px; width: 380px; text-align: center; position: relative; overflow: hidden; box-shadow: 0 0 50px ' + rarity.color + '40, 0 20px 60px rgba(0,0,0,0.6); animation: cardPopIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);';
    
    // 顶部装饰条
    var topBar = document.createElement('div');
    topBar.style.cssText = 'height: 4px; background: linear-gradient(90deg, transparent, ' + rarity.color + ', transparent);';
    content.appendChild(topBar);
    
    // 标题
    var titleDiv = document.createElement('div');
    titleDiv.style.cssText = 'padding: 25px 0 15px;';
    titleDiv.innerHTML = '<div style="font-family: Orbitron; font-size: 0.9rem; color: ' + rarity.color + '; letter-spacing: 4px; text-transform: uppercase;">' + (isNew ? '✨ 新卡片获得' : '🎴 卡片重复') + '</div>';
    content.appendChild(titleDiv);
    
    // 图片容器
    var imgContainer = document.createElement('div');
    imgContainer.style.cssText = 'width: 220px; height: 220px; margin: 0 auto; border-radius: 16px; overflow: hidden; border: 3px solid ' + rarity.color + '; background: #0a0a0f; position: relative;';
    imgContainer.innerHTML = '<img src="' + cardData.image + '" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.style.display=\'none\'; this.parentElement.innerHTML=\'<div style=width:100%;height:100%;display:flex;align-items:center;justify-content:center;color:' + rarity.color + ';font-size:4rem;>🎴</div>\'"><div style="position: absolute; top: 8px; right: 8px; background: rgba(0,0,0,0.7); padding: 4px 10px; border-radius: 12px; font-family: Orbitron; font-size: 0.75rem; color: ' + rarity.color + ';">' + rarity.stars + '</div>';
    content.appendChild(imgContainer);
    
    // 信息区域
    var infoDiv = document.createElement('div');
    infoDiv.style.cssText = 'padding: 20px 30px 25px;';
    infoDiv.innerHTML = '<div style="font-family: Orbitron; font-size: 1.4rem; color: #fff; margin-bottom: 6px; text-shadow: 0 0 15px ' + rarity.color + '40;">' + cardData.name + '</div><div style="color: ' + rarity.color + '; font-size: 0.85rem; margin-bottom: 12px; font-family: Orbitron;">' + rarity.name + '</div><div style="color: #888; font-size: 0.85rem; line-height: 1.5; margin-bottom: 15px;">' + cardData.desc + '</div><div style="color: #666; font-size: 0.75rem; margin-bottom: 20px;">来源: ' + sourceName + '</div>';
    content.appendChild(infoDiv);
    
    // 确认按钮 - 关键修复：使用 addEventListener，不依赖全局 onclick
    var btn = document.createElement('button');
    btn.textContent = '确认';
    btn.style.cssText = 'width: calc(100% - 60px); margin: 0 30px 25px; padding: 14px; background: linear-gradient(135deg, ' + rarity.color + '30, ' + rarity.color + '10); border: 1px solid ' + rarity.color + '; border-radius: 10px; color: #fff; font-family: Orbitron; font-size: 0.95rem; cursor: pointer; transition: all 0.3s;';
    btn.onmouseover = function() { this.style.background = 'linear-gradient(135deg, ' + rarity.color + '50, ' + rarity.color + '30)'; this.style.transform = 'scale(1.02)'; };
    btn.onmouseout = function() { this.style.background = 'linear-gradient(135deg, ' + rarity.color + '30, ' + rarity.color + '10)'; this.style.transform = 'none'; };
    
    // 关键：直接绑定关闭逻辑，不依赖全局函数
    btn.addEventListener('click', function() {
        var el = document.getElementById('cardAcquireOverlay');
        if (el) { 
            el.style.animation = 'fadeOut 0.3s ease forwards'; 
            setTimeout(function() { el.remove(); }, 300); 
        }
    });
    
    content.appendChild(btn);
    overlay.appendChild(content);
    document.body.appendChild(overlay);
}



// 查看已收集卡片的详情弹窗
function showCardDetailModal(cardId, deckId) {
    var card = null;
    // 从 DECK_CARDS 中找到卡片
    for (var dId in DECK_CARDS) {
        var deck = DECK_CARDS[dId];
        for (var i = 0; i < deck.length; i++) {
            if (deck[i].id === cardId) {
                card = deck[i];
                break;
            }
        }
        if (card) break;
    }
    
    if (!card) return;
    
    // 重新加载确保数据最新
    initPlayerCards();
    
    var count = getPlayerCardCount(cardId);
    var rarity = CARD_RARITY[card.rarity] || CARD_RARITY[1];
    var isNew = count === 1; // 只有1张时显示"新获得"样式
    
    var overlay = document.createElement('div');
    overlay.id = 'cardDetailOverlay';
    overlay.style.cssText = 'position: fixed; inset: 0; background: rgba(0,0,0,0.92); z-index: 3000; display: flex; align-items: center; justify-content: center; animation: fadeIn 0.3s ease;';
    
    overlay.innerHTML = '<div style="background: linear-gradient(180deg, #1a1a2e 0%, #0a0a1a 100%); border: 2px solid ' + rarity.color + '; border-radius: 20px; width: 420px; text-align: center; position: relative; overflow: hidden; box-shadow: 0 0 50px ' + rarity.color + '40, 0 20px 60px rgba(0,0,0,0.6); animation: cardPopIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);"><div style="height: 4px; background: linear-gradient(90deg, transparent, ' + rarity.color + ', transparent);"></div><div style="padding: 25px 0 15px;"><div style="font-family: Orbitron; font-size: 0.9rem; color: ' + rarity.color + '; letter-spacing: 4px; text-transform: uppercase;">📖 卡片详情</div></div><div style="width: 260px; height: 260px; margin: 0 auto; border-radius: 16px; overflow: hidden; border: 3px solid ' + rarity.color + '; background: #0a0a0f; position: relative;"><img src="' + card.image + '" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.style.display=\'none\'; this.parentElement.innerHTML=\'<div style=width:100%;height:100%;display:flex;align-items:center;justify-content:center;color:' + rarity.color + ';font-size:4rem;>🎴</div>\'"><div style="position: absolute; top: 8px; right: 8px; background: rgba(0,0,0,0.7); padding: 4px 10px; border-radius: 12px; font-family: Orbitron; font-size: 0.75rem; color: ' + rarity.color + ';">' + rarity.stars + '</div></div><div style="padding: 20px 30px 25px;"><div style="font-family: Orbitron; font-size: 1.4rem; color: #fff; margin-bottom: 6px; text-shadow: 0 0 15px ' + rarity.color + '40;">' + card.name + '</div><div style="color: ' + rarity.color + '; font-size: 0.85rem; margin-bottom: 12px; font-family: Orbitron;">' + rarity.name + '</div><div style="color: #888; font-size: 0.85rem; line-height: 1.5; margin-bottom: 15px;">' + card.desc + '</div><div style="display: flex; align-items: center; gap: 10px; margin-bottom: 15px; padding: 0 20px;"><div style="flex: 1; height: 8px; background: #222; border-radius: 4px; overflow: hidden;"><div style="height: 100%; background: linear-gradient(90deg, ' + rarity.color + '80, ' + rarity.color + '); border-radius: 4px; width: ' + Math.min(100, (count / 5) * 100) + '%;"></div></div><span style="font-size: 0.85rem; color: var(--tenno-gold); font-family: Orbitron; min-width: 50px;">' + count + '/5</span></div><div style="color: #666; font-size: 0.75rem; margin-bottom: 20px;">已收集 ' + count + ' 张 · 首次获得: ' + (window.playerCards && window.playerCards[cardId] ? new Date(window.playerCards[cardId].firstGetTime).toLocaleDateString() : '未知') + '</div><button onclick="closeCardDetailModal()" style="width: 100%; padding: 14px; background: linear-gradient(135deg, ' + rarity.color + '30, ' + rarity.color + '10); border: 1px solid ' + rarity.color + '; border-radius: 10px; color: #fff; font-family: Orbitron; font-size: 0.95rem; cursor: pointer; transition: all 0.3s;" onmouseover="this.style.background=\'linear-gradient(135deg, ' + rarity.color + '50, ' + rarity.color + '30)\'; this.style.transform=\'scale(1.02)\';" onmouseout="this.style.background=\'linear-gradient(135deg, ' + rarity.color + '30, ' + rarity.color + '10)\'; this.style.transform=\'none\';">关闭</button></div></div>';
    
    document.body.appendChild(overlay);
}

function closeCardDetailModal() {
    var el = document.getElementById('cardDetailOverlay');
    if (el) { 
        el.style.animation = 'fadeOut 0.3s ease forwards'; 
        setTimeout(function() { el.remove(); }, 300); 
    }
}



// ═══════════════════════════════════════════════════════════════
//  暴露全局函数（最终修复版）
// ═══════════════════════════════════════════════════════════════

// 先定义/覆盖 closeCardAcquireModal，确保它在 IIFE 内部和 window 上都存在
function closeCardAcquireModal() {
    var el = document.getElementById('cardAcquireOverlay');
    if (el) { 
        el.style.animation = 'fadeOut 0.3s ease forwards'; 
        setTimeout(function() { el.remove(); }, 300); 
    }
}

// 显式挂到 window 上
window.closeCardAcquireModal = closeCardAcquireModal;

// 其他函数暴露
window.showCardAcquireModal = showCardAcquireModal;
window.closeCardDetailModal = closeCardDetailModal;
window.showCardDetailModal = showCardDetailModal;

// 卡片库存
window.initPlayerCards = initPlayerCards;
window.addPlayerCard = addPlayerCard;
window.hasPlayerCard = hasPlayerCard;
window.getPlayerCardCount = getPlayerCardCount;
window.dropCardFromBattle = dropCardFromBattle;
window.tryDropCardFromDeck = tryDropCardFromDeck;
window.tryDropCardFromEnemy = tryDropCardFromEnemy;
// 图鉴渲染
window.renderCodexFactions = renderCodexFactions;
window.renderCodexBlocks = renderCodexBlocks;
window.renderCodexDecks = renderCodexDecks;
window.renderCodexCards = renderCodexCards;
window.enterCodexFaction = enterCodexFaction;
window.enterCodexBlock = enterCodexBlock;
window.enterCodexDeck = enterCodexDeck;
window.switchCodexTab = switchCodexTab;
window.updateCodexOverview = updateCodexOverview;


// 进度计算
window.calculateTotalProgress = calculateTotalProgress;
window.calculateFactionProgress = calculateFactionProgress;
window.calculateBlockProgress = calculateBlockProgress;
window.calculateDeckProgress = calculateDeckProgress;
