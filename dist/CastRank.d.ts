export declare type CastRankNames = 'Platinum' | 'Gold' | 'Silver' | 'Bronze';
export declare type CastRankItem = {
    name: CastRankNames;
    cost: number;
};
export declare const CAST_RANK: {
    PLATINUM: CastRankItem;
    GOLD: CastRankItem;
    SILVER: CastRankItem;
    BRONZE: CastRankItem;
};
export declare const CAST_RANK_NAME: {
    [key in CastRankNames]: string;
};
