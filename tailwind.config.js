module.exports = {
	content: [ './src/**/*.{html,js}' ],
	theme: {
		extend: {
			colors: {
				bleu: {
					'50': '#EDF0F7',
					'100': '#DBE2F0',
					'200': '#BBC7E2',
					'300': '#97AAD3',
					'400': '#7790C5',
					'500': '#5473B6',
					'600': '#405B96',
					'700': '#2F436F',
					'800': '#202E4B',
					'900': '#0F1624'
				},
				jaune: {
					'50': '#FCF7EE',
					'100': '#F9EEDC',
					'200': '#F2DCB5',
					'300': '#ECCB92',
					'400': '#E6BB6F',
					'500': '#E0AA4A',
					'600': '#CD8E23',
					'700': '#986A1A',
					'800': '#644611',
					'900': '#342409'
				},
				gris: '#eff0f0'
			}
		},
		fontFamily: {
			sans: [ 'Rubik' ],
			bowlby: [ 'Bowlby One SC' ]
		}
	},
	plugins: []
};
