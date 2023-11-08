import type { ClassNames, ConditionalClassNames } from './types';

export const classNames = (
    classes: ClassNames | string,
    conditionalClasses?: ConditionalClassNames
): string => {
    return [
        (typeof classes === 'string') ? [classes] : classes,
        ...Object.entries(conditionalClasses)
            .filter(([_, flag]) => Boolean(flag))
            .map(([className]) => className)
    ].join(' ');
};
