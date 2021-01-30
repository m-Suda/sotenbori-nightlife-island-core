type MoodKeys =
    | 'Fever'
    | 'Best'
    | 'GoodMood'
    | 'Normally'
    | 'BadMood'
    | 'Anger';
export type Mood = {
    name: MoodKeys;
    paymentCycleMs: number;
    coefficient: number;
};

export const MOOD: {
    FEVER: Mood;
    BEST: Mood;
    GOOD_MOOD: Mood;
    NORMALLY: Mood;
    BAD_MOOD: Mood;
    ANGER: Mood;
} = {
    FEVER: {
        name: 'Fever',
        paymentCycleMs: 1000,
        coefficient: 50,
    },
    BEST: {
        name: 'Best',
        paymentCycleMs: 2000,
        coefficient: 50,
    },
    GOOD_MOOD: {
        name: 'GoodMood',
        paymentCycleMs: 4000,
        coefficient: 50,
    },
    NORMALLY: {
        name: 'Normally',
        paymentCycleMs: 6000,
        coefficient: 50,
    },
    BAD_MOOD: {
        name: 'BadMood',
        paymentCycleMs: 10000,
        coefficient: 50,
    },
    ANGER: {
        name: 'Anger',
        paymentCycleMs: 15000,
        coefficient: 50,
    },
};
export const MOOD_NAME: { [key in MoodKeys]: string } = {
    Fever: 'フィーバー',
    Best: '最高',
    GoodMood: '上機嫌',
    Normally: '普通',
    BadMood: '不機嫌',
    Anger: '怒り',
};
