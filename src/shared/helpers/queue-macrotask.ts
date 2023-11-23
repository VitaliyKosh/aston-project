export const queueMacrotask = (callback: () => void): void => {
    setTimeout(() => {
        callback();
    });
};
