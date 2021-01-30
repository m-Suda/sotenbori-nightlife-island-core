export type CastRankNames = 'Platinum' | 'Gold' | 'Silver' | 'Bronze';
export type CastRankItem = {
    name: CastRankNames;
    cost: number;
};
export const CAST_RANK: {
    PLATINUM: CastRankItem;
    GOLD: CastRankItem;
    SILVER: CastRankItem;
    BRONZE: CastRankItem;
} = {
    PLATINUM: {
        name: 'Platinum',
        cost: 400000,
    },
    GOLD: {
        name: 'Gold',
        cost: 200000,
    },
    SILVER: {
        name: 'Silver',
        cost: 80000,
    },
    BRONZE: {
        name: 'Bronze',
        cost: 50000,
    },
};

export const CAST_RANK_NAME: { [key in CastRankNames]: string } = {
    Platinum: 'プラチナ',
    Gold: 'ゴールド',
    Silver: 'シルバー',
    Bronze: 'ブロンズ',
};
