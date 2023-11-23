export const getSagestDescription = (
    query: string,
    origin: string | undefined,
    extension: number,
    delimiter: string = '|'
): string | undefined => {
    if (!origin) {
        return undefined;
    }

    const lowerOrigin = origin.toLocaleLowerCase();
    const lowerQuery = query.toLocaleLowerCase();

    let stopSearch = false;
    let endIndex = 0;
    const sagestDescriptions = [];

    while (!stopSearch) {
        const startIndex = lowerOrigin.indexOf(lowerQuery, endIndex);

        if (startIndex === -1) {
            stopSearch = true;
            continue;
        }

        endIndex = startIndex + query.length;

        const substringStart = startIndex - extension || 0;
        const substringEnd = endIndex + extension < origin.length ? endIndex + extension : origin.length - 1;

        sagestDescriptions.push(
            origin.substring(substringStart, startIndex) +
            delimiter +
            origin.substring(startIndex, endIndex) +
            delimiter +
            origin.substring(endIndex, substringEnd)
        );
    }

    return sagestDescriptions.length ? `...${sagestDescriptions.join(' ... ')}...` : '';
};