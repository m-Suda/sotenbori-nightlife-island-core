import { AbstractCustomerRank } from './AbstractCustomerRank';
import { Mood } from '../Mood';
export declare class Poverty extends AbstractCustomerRank {
    private _goodMoodBoundary;
    private _normallyBoundary;
    constructor();
    /**
     * 客との相性を判定し、機嫌を取得する
     * @param comprehensiveEvaluation
     */
    getCompatibilityFrom(comprehensiveEvaluation: number): Mood;
}
