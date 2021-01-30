import { Mood } from './Mood';
import { Course } from './Course';
import { PreferenceNames } from './Preference';
import { BehaviorNames } from './Behavior';
import { Cast } from './Cast';
import { AbstractCustomerRank } from './customer-rank/AbstractCustomerRank';

export class Customer {
    /**
     * 支払い金額
     * @private {number}
     */
    private _paymentAmount = 0;

    constructor(
        private _rank: AbstractCustomerRank,
        private _preference: PreferenceNames,
        private _purpose: BehaviorNames,
        private _course: Course,
        private _mood: Mood | null = null
    ) {}

    /**
     * 支払い金額を取得する
     */
    public get paymentAmount(): number {
        return this._paymentAmount;
    }

    /**
     * 金額を支払う
     */
    public pay(): void {
        this._paymentAmount += this._rank.paymentAmount;
    }

    /**
     * キャストとの相性を取得する
     * @param cast
     */
    public getCompatibilityWith(cast: Cast): Mood {
        const { _preference: preference, _purpose: purpose } = this;
        const comprehensiveEvaluation =
            cast.preference[preference] + cast.behavior[purpose];

        return this._rank.getCompatibilityWith(comprehensiveEvaluation);
    }

    /**
     * 機嫌を変更する
     * @param m
     */
    public set changeMood(m: Mood) {
        this._mood = m;
    }
}
