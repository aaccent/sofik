const autoScales = require('./postcss/auto-scales.cjs')

module.exports = {
    plugins: [
        autoScales({
            dodgeSelectors: [
                { type: 'startsWith', value: '.swiper' },
                {
                    type: 'startsWith',
                    value: '.carousel',
                },
                { type: 'includes', value: 'fancybox' },
                { type: 'includes', value: 'aos' },
            ],
            limitMediaWidth: false,
            initWidth: [
                // prettier-ignore
                { width: 1920 },
                { width: 375, mediaQuery: 'only screen and (max-width: 600px)' },
                { width: 1000, mediaQuery: 'only screen and (max-width: 1000px)' },
            ],
        }),
    ],
}
