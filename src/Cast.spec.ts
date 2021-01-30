import { Cast } from './Cast';
import { Preference } from './Preference';
import { Behavior } from './Behavior';
import { CAST_RANK } from './CastRank';

const defaultName = 'test';
const defaultHPForTest = 100;
const defaultPreference: Preference = {
    Sexy: 1,
    Beauty: 1,
    Cute: 1,
    Funny: 1,
};
const defaultBehavior: Behavior = {
    Talk: 1,
    Party: 1,
    Love: 1,
    Skill: 1,
};

describe('Cast Class Test', () => {
    let cast: Cast;

    beforeEach(() => {
        cast = new Cast(
            defaultName,
            CAST_RANK.PLATINUM,
            defaultHPForTest,
            defaultPreference,
            defaultBehavior
        );
    });

    describe('reserve()', () => {
        test('HPを減らす', () => {
            const decreasePoint = 50;
            cast.serve(decreasePoint);
            expect(cast.hp).toBe(defaultHPForTest - decreasePoint);
        });
        test('HPを0より下回る値で減らしたときに0になる', () => {
            const decreasePoint = 110;
            cast.serve(decreasePoint);
            expect(cast.hp).toBe(0);
        });
    });
    describe('recovery()', () => {
        test('HPを回復する', () => {
            const recoveryPoint = 100;
            cast.recovery(recoveryPoint);
            expect(cast.hp).toBe(defaultHPForTest + recoveryPoint);
        });
    });
});
