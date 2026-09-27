export const listArray = [
	{
		p1: "An internal style sheet may be used if one single HTML page has a unique style.",
		p2: `The internal style is defined inside the <style>	element, inside the head section.`,
		code: `
<head>
<style>
body {	
	background-color: linen;
}

h1 {
    color: maroon;
    margin-left: 40px;
}
</style>
</head>`,
	},
	{
		p1: "With an external style sheet, you can change the look of an entire website by changing just one file!",
		p2: `Each HTML page must include a reference to the external style sheet file inside the <link> element, inside the head section.`,
		code: `
<head>
<link rel="stylesheet" href="mystyle.css">
</head>
<body>

<h1>This is a heading</h1>
<p>This is a paragraph.</p>

</body>`,
	},
	{
		p1: "In React, CSS Modules are CSS files where class names are scoped locally by default.",
		p2: `The CSS file have to have the module.css extension and can be used by importing it into your React file(s).`,
		code: `
        import styles from './Button.module.css';
        
        function App() {
            return (
                <div>
                    <button className={styles.mybutton}>
                        My Button
                    </button>
            </div>
            );
        }`,
	},
	{
		p1: "A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.",
	},
	{
		p1: "Accessible React components for building high-quality web apps and	design systems",
		p2: "MUI offers a comprehensive suite of free UI tools to help you ship new		features faster. Start with Material UI, our fully-loaded component	library, or bring your own design system to our production-ready components.",
	},
];
