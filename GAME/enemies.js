// ═══════════════════════════════════════════════════════════════
//  游戏数据配置 (enemies.js)
// ═══════════════════════════════════════════════════════════════

// ─── 敌人数据 ───
var ENEMIES = [
	//寰宇-Grineer
	//《游掠凶形》
    { id: 'e0001', name: '屠夫', icon: '🔴', image: 'GAME/enemies/Grineer/P1/1Butcher.jpg', hp: 100, minHp: 100, maxHp: 100, damage: 100, minDamage: 100, maxDamage: 100, dropRate: 0.35, level: 1, faction: 'grineer', speed: 12,codexId: 'c_ylxx_01'},
    { id: 'e0002', name: '沙漠屠夫', icon: '👹',image: 'GAME/enemies/Grineer/P1/1Butcher1-1.jpg', hp: 50, minHp: 70, maxHp: 90, damage: 12, minDamage: 8, maxDamage: 16, dropRate: 0.45, level: 3, faction: 'grineer', speed: 8,codexId: 'c_ylxx_02'}

	
	//《交锋异士》
//	{ id: 'e0030', name: '', icon: '🤖',image: 'GAME/enemies/Grineer/P1/1Butcher1-3.jpg', hp: 70, minHp: 60, maxHp: 80, damage: 14, minDamage: 10, maxDamage: 18, dropRate: 0.50, level: 4, faction: 'corpus', speed: 14 },
//	{ id: 'e0031', name: '', icon: '🦠',image: 'GAME/enemies/Grineer/P1/1Butcher1-4.jpg', hp: 40, minHp: 30, maxHp: 50, damage: 7, minDamage: 4, maxDamage: 10, dropRate: 0.30, level: 1, faction: 'infested', speed: 18 },
//	{ id: 'e0032', name: '', icon: '👾',image: 'GAME/enemies/Grineer/P1/1Butcher1-5.jpg', hp: 100, minHp: 85, maxHp: 115, damage: 15, minDamage: 11, maxDamage: 20, dropRate: 0.55, level: 5, faction: 'infested', speed: 6 },
//	{ id: 'e0033', name: '', icon: '👁️',image: 'GAME/enemies/Grineer/P1/1Butcher1-6.jpg', hp: 120, minHp: 100, maxHp: 140, damage: 18, minDamage: 14, maxDamage: 24, dropRate: 0.60, level: 7, faction: 'sentient', speed: 11 },
//	{ id: 'e0034', name: '', icon: '⚔️',image: 'GAME/enemies/Grineer/P1/1Butcher1-7.jpg', hp: 150, minHp: 130, maxHp: 170, damage: 22, minDamage: 18, maxDamage: 28, dropRate: 0.65, level: 10, faction: 'sentient', speed: 9 }
];	

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



// ─── 辅助函数 ───
function getEnemyData(enemyId) {
    return ENEMIES[enemyId] || ENEMIES.grineer_lancer;
}

function getFactionColor(faction) {
    return FACTION_COLORS[faction] || '#fff';
}