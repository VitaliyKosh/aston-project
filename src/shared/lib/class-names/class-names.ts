import type { ClassNames, ConditionalClassNames } from './types';

export const classNames = (
    classes: ClassNames | string | undefined,
    conditionalClasses?: ConditionalClassNames | undefined
): string => {
    return [
        ...(typeof classes === 'string' ? [classes] : classes?.filter(c => c !== undefined) as string[]),
        ...(conditionalClasses
            ? Object.entries(conditionalClasses)
                .filter(([_, flag]) => Boolean(flag))
                .map(([className]) => className)
            : [])
    ].join(' ');
};
