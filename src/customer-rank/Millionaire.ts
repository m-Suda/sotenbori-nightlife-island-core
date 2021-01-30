import { AbstractCustomerRank } from './AbstractCustomerRank';
import { MOOD, Mood } from '../Mood';
import { CustomerRankNames } from './CustomerRankConstants';

export class Millionaire extends AbstractCustomerRank {
    private _bestBoundary = 15;
    private _goodMoodBoundary = 13;
    private _normallyBoundary = 10;
    private _badMoodBoundary = 6;

    constructor(rankName: CustomerRankNames, paymentAmount: number) {
        super(rankName, paymentAmount);
    }

    /**
     * 客との相性を判定し、機嫌を取得する
     * @param comprehensiveEvaluation
     */
    public getCompatibilityWith(comprehensiveEvaluation: number): Mood {
        if (this._bestBoundary < comprehensiveEvaluation) {
            return MOOD.BEST;
        }

        if (
            this._goodMoodBoundary < comprehensiveEvaluation &&
            comprehensiveEvaluation <= this._bestBoundary
        ) {
            return MOOD.GOOD_MOOD;
        }

        if (
            this._normallyBoundary < comprehensiveEvaluation &&
            comprehensiveEvaluation <= this._goodMoodBoundary
        ) {
            return MOOD.NORMALLY;
        }

        if (
            this._badMoodBoundary < comprehensiveEvaluation &&
            comprehensiveEvaluation <= this._normallyBoundary
        ) {
            return MOOD.BAD_MOOD;
        }

        return MOOD.BAD_MOOD;
    }
}
