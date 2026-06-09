// warframes.js - 战甲数据与技能系统配置文件

// ========== 战甲数据 ==========
const WARFRAMES = {
    excalibur: {
        name: 'Excalibur',
        icon: '🥷',
        image: 'GAME/Wf/Excalibur.jpg',
        desc: '剑术大师，平衡型战甲',
        stats: { shield: 150, health: 100, energy: 100, armor: 225, speed: 1.0 },
        skills: [
            {
                id: 1,
                name: '突斩',
                icon: '⚔️',
                cost: 25,
                cooldown: 2,
                damage: 80,
                effect: '冲刺斩击，造成出血',
                bleed: true,
                bleedDuration: 3,
                bleedDamage: 15,
                unlockLevel: 1
            },
            {
                id: 2,
                name: '广域致盲',
                icon: '✨',
                cost: 30,
                cooldown: 4,
                damage: 0,
                effect: '释放闪光，致盲附近所有敌人',
                blind: true,
                blindDuration: 2,
                aoe: true,
                unlockLevel: 3
            },
            {
                id: 3,
                name: '广域标枪',
                icon: '🔱',
                cost: 35,
                cooldown: 4,
                damage: 120,
                effect: '发射标枪刺穿敌人，造成出血',
                bleed: true,
                bleedDuration: 4,
                bleedDamage: 20,
                aoe: true,
                unlockLevel: 6
            },
            {
                id: 4,
                name: '显赫刀剑',
                icon: '⚡',
                cost: 50,
                cooldown: 6,
                damage: 200,
                effect: '召唤光剑，大幅提升伤害',
                buff: true,
                buffDuration: 5,
                damageMultiplier: 3,
                unlockLevel: 10
            }
        ]
    },
    volt: {
        name: 'Volt',
        icon: '⚡',
        image: 'GAME/Wf/Volt.jpg',
        desc: '电能掌控者，速度型战甲',
        stats: { shield: 100, health: 80, energy: 150, armor: 150, speed: 1.5 },
        skills: [
            {
                id: 1,
                name: '电击',
                icon: '⚡',
                cost: 25,
                cooldown: 2,
                damage: 60,
                effect: '释放电击，麻痹敌人',
                stun: true,
                stunDuration: 1,
                unlockLevel: 1
            },
            {
                id: 2,
                name: '加速',
                icon: '💨',
                cost: 30,
                cooldown: 5,
                damage: 0,
                effect: '提升移动和攻击速度',
                buff: true,
                buffDuration: 4,
                speedMultiplier: 2,
                unlockLevel: 3
            },
            {
                id: 3,
                name: '雷暴',
                icon: '⛈️',
                cost: 40,
                cooldown: 5,
                damage: 150,
                effect: '召唤雷暴攻击所有敌人',
                aoe: true,
                unlockLevel: 6
            },
            {
                id: 4,
                name: '电能释放',
                icon: '💥',
                cost: 50,
                cooldown: 6,
                damage: 250,
                effect: '释放全部电能，毁灭性打击',
                aoe: true,
                stun: true,
                stunDuration: 2,
                unlockLevel: 10
            }
        ]
    },
    mag: {
        name: 'Mag',
        icon: '🧲',
        image: 'GAME/Wf/Mag.jpg',
        desc: '磁力操控者，控场型战甲',
        stats: { shield: 120, health: 90, energy: 130, armor: 180, speed: 1.2 },
        skills: [
            {
                id: 1,
                name: '吸引',
                icon: '🧲',
                cost: 25,
                cooldown: 3,
                damage: 40,
                effect: '将敌人拉向中心',
                pull: true,
                unlockLevel: 1
            },
            {
                id: 2,
                name: '磁力护盾',
                icon: '🛡️',
                cost: 30,
                cooldown: 5,
                damage: 0,
                effect: '创造磁力护盾抵挡伤害',
                shield: true,
                shieldAmount: 100,
                unlockLevel: 3
            },
            {
                id: 3,
                name: '极化',
                icon: '💫',
                cost: 35,
                cooldown: 4,
                damage: 100,
                effect: '剥离敌人护甲和护盾',
                armorStrip: true,
                stripPercent: 0.5,
                unlockLevel: 6
            },
            {
                id: 4,
                name: '粉碎',
                icon: '💥',
                cost: 50,
                cooldown: 6,
                damage: 300,
                effect: '粉碎所有敌人',
                aoe: true,
                armorStrip: true,
                stripPercent: 1.0,
                unlockLevel: 10
            }
        ]
    },
    rhino: {
        name: 'Rhino',
        icon: '🦏',
        image: 'GAME/Wf/Rhino.jpg',
        desc: '重甲战士，坦克型战甲',
        stats: { shield: 250, health: 150, energy: 80, armor: 350, speed: 0.8 },
        skills: [
            {
                id: 1,
                name: '犀牛冲锋',
                icon: '🦏',
                cost: 25,
                cooldown: 3,
                damage: 100,
                effect: '冲锋撞击敌人',
                knockdown: true,
                unlockLevel: 1
            },
            {
                id: 2,
                name: '钢化皮肤',
                icon: '🛡️',
                cost: 30,
                cooldown: 5,
                damage: 0,
                effect: '获得无敌护盾',
                invulnerable: true,
                duration: 3,
                unlockLevel: 3
            },
            {
                id: 3,
                name: '战吼',
                icon: '📢',
                cost: 35,
                cooldown: 5,
                damage: 0,
                effect: '提升伤害和护甲',
                buff: true,
                buffDuration: 4,
                damageMultiplier: 2,
                armorBonus: 100,
                unlockLevel: 6
            },
            {
                id: 4,
                name: '犀牛践踏',
                icon: '👣',
                cost: 50,
                cooldown: 6,
                damage: 250,
                effect: '猛击地面，范围击飞',
                aoe: true,
                knockdown: true,
                unlockLevel: 10
            }
        ]
    }
};

// ========== 升级配置 ==========
const WARFRAME_LEVEL_GROWTH = {
    shieldPerLevel: 10,
    healthPerLevel: 8,
    energyPerLevel: 5,
    armorPerLevel: 5,
    maxLevel: 30
};

const STARTER_WARFRAMES = ['excalibur', 'volt', 'rhino'];

// ========== 技能执行函数 ==========
// 这些函数需要 currentBattle, gameData 等全局变量

function executeSkill(skillId, currentBattle, gameData, log, enemyEl, tenno) {
    const currentWf = WARFRAMES[gameData.warframe_type] || WARFRAMES.excalibur;
    const skill = currentWf.skills[skillId - 1];
    if (!skill) return;
    
    switch(skillId) {
        case 1: return executeSlash(skill, currentBattle, gameData, log, enemyEl, tenno);
        case 2: return executeBlind(skill, currentBattle, gameData, log, enemyEl, tenno);
        case 3: return executeJavelin(skill, currentBattle, gameData, log, enemyEl, tenno);
        case 4: return executeExaltedBlade(skill, currentBattle, gameData, log, enemyEl, tenno);
    }
}

function executeSlash(skill, currentBattle, gameData, log, enemyEl, tenno) {
    const currentEnemy = currentBattle.enemies[currentBattle.wave - 1];
    if (!currentEnemy) return false;
    
    const wfData = getCurrentWarframeData(gameData);
    const dmg = skill.damage + wfData.level * 8;
    
    currentEnemy.hp = Math.max(0, currentEnemy.hp - dmg);
    
    //currentBattle.enemyDebuffs.push({
    //    type: 'bleed',
    //    duration: skill.bleedDuration,
    //    damage: skill.bleedDamage,
    //    target: currentBattle.wave - 1
    //});
    
    if (typeof showDamage === 'function') showDamage(dmg, 'enemy');
    enemyEl.classList.add('hit');
    setTimeout(() => enemyEl.classList.remove('hit'), 300);
    
    log.innerHTML += '<div style="color: var(--grineer-red);">⚔️ 突斩！造成 ' + dmg + ' 伤害，敌人出血！</div>';
    log.scrollTop = log.scrollHeight;
    
    return checkEnemyDeath(currentEnemy, currentBattle, log, enemyEl);
}

function executeBlind(skill, currentBattle, gameData, log, enemyEl, tenno) {
    const startIdx = currentBattle.wave - 1;
    const endIdx = Math.min(startIdx + 3, currentBattle.enemies.length);
    
    let blindCount = 0;
    for (let i = startIdx; i < endIdx; i++) {
        if (currentBattle.enemies[i] && currentBattle.enemies[i].hp > 0) {
            currentBattle.enemyDebuffs.push({
                type: 'blind',
                duration: skill.blindDuration,
                target: i
            });
            blindCount++;
        }
    }
    
    log.innerHTML += '<div style="color: var(--tenno-gold);">✨ 广域致盲！' + blindCount + ' 个敌人陷入黑暗！</div>';
    log.scrollTop = log.scrollHeight;
    
    // 检查当前敌人是否已死亡（可能被之前的出血 debuff 杀死）
    const currentEnemy = currentBattle.enemies[currentBattle.wave - 1];
    if (currentEnemy && currentEnemy.hp <= 0) {
        return checkEnemyDeath(currentEnemy, currentBattle, log, enemyEl);
    }
    
    return false; // 敌人没死，进入敌人攻击回合
}

function executeJavelin(skill, currentBattle, gameData, log, enemyEl, tenno) {
    const startIdx = currentBattle.wave - 1;
    const endIdx = Math.min(startIdx + 2, currentBattle.enemies.length);
    
    let totalDamage = 0;
    for (let i = startIdx; i < endIdx; i++) {
        const enemy = currentBattle.enemies[i];
        if (enemy && enemy.hp > 0) {
            const wfData = getCurrentWarframeData(gameData);
            const dmg = skill.damage + wfData.level * 12;
            enemy.hp = Math.max(0, enemy.hp - dmg);
            totalDamage += dmg;
            
            currentBattle.enemyDebuffs.push({
                type: 'bleed',
                duration: skill.bleedDuration,
                damage: skill.bleedDamage,
                target: i
            });
        }
    }
    
    if (typeof showDamage === 'function') showDamage(totalDamage, 'enemy');
    enemyEl.classList.add('hit');
    setTimeout(() => enemyEl.classList.remove('hit'), 300);
    
    log.innerHTML += '<div style="color: var(--grineer-red);">🔱 广域标枪！刺穿 ' + (endIdx - startIdx) + ' 个敌人，造成 ' + totalDamage + ' 伤害！</div>';
    log.scrollTop = log.scrollHeight;
    
    const currentEnemy = currentBattle.enemies[currentBattle.wave - 1];
    return checkEnemyDeath(currentEnemy, currentBattle, log, enemyEl);
}

function executeExaltedBlade(skill, currentBattle, gameData, log, enemyEl, tenno) {
    currentBattle.activeBuffs.push({
        type: 'exalted',
        duration: skill.buffDuration,
        multiplier: skill.damageMultiplier
    });
    
    const currentEnemy = currentBattle.enemies[currentBattle.wave - 1];
    if (currentEnemy) {
        const wfData = getCurrentWarframeData(gameData);
        const dmg = skill.damage + wfData.level * 15;
        currentEnemy.hp = Math.max(0, currentEnemy.hp - dmg);
        
        if (typeof showDamage === 'function') showDamage(dmg, 'enemy');
        enemyEl.classList.add('hit');
        setTimeout(() => enemyEl.classList.remove('hit'), 300);
        
        log.innerHTML += '<div style="color: var(--tenno-gold); font-weight: 700;">⚡ 显赫刀剑召唤！光剑降临！</div>';
        log.innerHTML += '<div style="color: var(--orokin-cyan);">✨ 接下来 ' + skill.buffDuration + ' 回合，伤害 x' + skill.damageMultiplier + '！</div>';
        log.innerHTML += '<div style="color: var(--grineer-red);">⚔️ 首击造成 ' + dmg + ' 伤害！</div>';
        log.scrollTop = log.scrollHeight;
        
        return checkEnemyDeath(currentEnemy, currentBattle, log, enemyEl);
    }
    return false;
}



// ========== 辅助函数 ==========
function getCurrentWarframeData(gameData) {
    if (!gameData) return { level: 1, xp: 0, max_xp: 5000 };
    
    const type = gameData.warframe_type || 'excalibur';
    
    if (!gameData.warframe_levels) {
        gameData.warframe_levels = {
            excalibur: { level: gameData.warframe_level || 1, xp: gameData.warframe_xp || 0, max_xp: gameData.warframe_max_xp || 5000 },
            volt: { level: 1, xp: 0, max_xp: 5000 },
            mag: { level: 1, xp: 0, max_xp: 5000 },
            rhino: { level: 1, xp: 0, max_xp: 5000 }
        };
    }
    
    if (!gameData.warframe_levels[type]) {
        gameData.warframe_levels[type] = { level: 1, xp: 0, max_xp: 5000 };
    }
    
    return gameData.warframe_levels[type];
}

function recalculateStats(gameData) {
    if (!gameData) return;
    
    const wf = WARFRAMES[gameData.warframe_type] || WARFRAMES.excalibur;
    const wfData = getCurrentWarframeData(gameData);
    const level = wfData.level;
    
    const growth = WARFRAME_LEVEL_GROWTH;
    const levelBonus = level - 1;
    
    gameData.stat_shield = wf.stats.shield + levelBonus * growth.shieldPerLevel;
    gameData.stat_health = wf.stats.health + levelBonus * growth.healthPerLevel;
    gameData.stat_energy = wf.stats.energy + levelBonus * growth.energyPerLevel;
    gameData.stat_armor = wf.stats.armor + levelBonus * growth.armorPerLevel;
    gameData.stat_speed = wf.stats.speed;
    
    syncWarframeDataToCurrent(gameData);
}

function syncWarframeDataToCurrent(gameData) {
    const wfData = getCurrentWarframeData(gameData);
    if (wfData) {
        gameData.warframe_level = wfData.level;
        gameData.warframe_xp = wfData.xp;
        gameData.warframe_max_xp = wfData.max_xp;
    }
}

function addXP(amount, gameData, updateUI, saveGameData) {
    if (!gameData) return;
    
    const wfData = getCurrentWarframeData(gameData);
    wfData.xp += amount;

    let leveledUp = false;
    while (wfData.xp >= wfData.max_xp && wfData.level < WARFRAME_LEVEL_GROWTH.maxLevel) {
        wfData.xp -= wfData.max_xp;
        wfData.level++;
        wfData.max_xp = Math.floor(wfData.max_xp * 1.2);
        leveledUp = true;

        if (typeof showToast === 'function') {
            showToast(WARFRAMES[gameData.warframe_type]?.name + ' 升级！达到等级 ' + wfData.level, 'success');
        }
    }

    syncWarframeDataToCurrent(gameData);
    recalculateStats(gameData);
    if (typeof updateUI === 'function') updateUI();
}

// ========== 导出 ==========
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        WARFRAMES,
        WARFRAME_LEVEL_GROWTH,
        STARTER_WARFRAMES,
        getCurrentWarframeData,
        recalculateStats,
        syncWarframeDataToCurrent,
        addXP,
        executeSkill,
        executeSlash,
        executeBlind,
        executeJavelin,
        executeExaltedBlade,
        checkEnemyDeath
    };
}

// warframes.js - 修复 checkEnemyDeath 未定义的报错
// =================================================================
// 注意：如果该函数已存在，请不要重复添加，否则可能导致逻辑冲突
function checkEnemyDeath(enemy, currentBattle, log, enemyEl) {
    // 如果敌人血量小于等于0
    if (enemy.hp <= 0) {
        // 移除敌人的死状态类（如果存在）
        enemyEl.classList.remove('dead');
        // 添加死亡动画
        enemyEl.classList.add('dead');
        
        // 滚动日志
        log.scrollTop = log.scrollHeight;
        
        // 返回 true 表示敌人已死亡，通知上层逻辑处理下一波
        return true;
    }
    return false;
}