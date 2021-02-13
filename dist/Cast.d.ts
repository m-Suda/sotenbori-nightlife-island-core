import { CastRankItem } from './CastRank';
import { Preference } from './Preference';
import { Behavior } from './Behavior';
export declare class Cast {
    name: string;
    rank: CastRankItem;
    hp: number;
    preference: Preference;
    behavior: Behavior;
    constructor(name: string, rank: CastRankItem, hp: number, preference: Preference, behavior: Behavior);
    /**
     * 客に対応する
     * @param decreasePoint
     */
    serve(decreasePoint: number): void;
    /**
     * 体力を回復する
     * @param recoveryPoint
     */
    recovery(recoveryPoint: number): void;
}
