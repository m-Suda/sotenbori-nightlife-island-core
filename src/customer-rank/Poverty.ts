import { AbstractCustomerRank } from './AbstractCustomerRank';
import { MOOD, Mood } from '../Mood';
import { CustomerRankNames } from './CustomerRankConstants';

export class Poverty extends AbstractCustomerRank {
    private _bestBoundary = 7;
    private _goodMoodBoundary = 4;

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

        return MOOD.NORMALLY;
    }
}
