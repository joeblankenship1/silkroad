(function() {
    // start reveal slideshow
    Reveal.initialize({
        controls: true,
        progress: true,
        history: true,
        center: true,

        transition: 'convex', // none/fade/slide/convex/concave/zoom

        // Parallax background image
	    parallaxBackgroundImage: 'img/silkroad.png',

	    // Parallax background size
	    parallaxBackgroundSize: '2100px 1080px',

        dependencies: [
            { src: 'plugin/notes/notes.js', async: true }
        ]

    });
})();
