const sizes = {
	xs: '576px',
    sm: '768px',
    md: '1024px',
    lg: '1280px',
    xl: '1281px',
};

const devices = {
    xs: `(max-width: ${sizes.xs})`,
    sm: `(max-width: ${sizes.sm})`,
    md: `(max-width: ${sizes.md})`,
    lg: `(max-width: ${sizes.lg})`,
    xl: `(min-width: ${sizes.xl})`
};

const keyframes = {
	resizeIn: `@keyframes resizeIn {
        from {
            font-size: 0;
        }
        to {
            font-size: 26px;
        }
    }`
};

const animations = {
	resizeIn: `
        animation: font-size 1s;
        ${keyframes.resizeIn}
    `
};

const theme = {
    sizes,
    devices,
	animations,
	fonts: {
        montserrat: 'Montserrat',
        montserratMedium: 'MontserratMedium',
        montserratBold: 'MontserratBold'
	},
	colors: {
        lightBlue: '#6666ff',
        blue: '#000080',
        darkBlue: '#000080',
        white: 'white',
        gray: '#f4f4f4'
	}
};

export default theme;