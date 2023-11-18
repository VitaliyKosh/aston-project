declare module React {}

declare module '*.svg' {
    const SVG: React.SVGFactory;
    export default SVG;
}
