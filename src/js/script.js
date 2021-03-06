new fullpage('#fullpage', {
    autoScrolling: true,
    navigation: false,
    scrollHorizontally: false,
    anchors: ['slide0'],
    resetSliders: true,
    responsiveSlides: true,
    controlArrows: false,
    onLeave: async (origin, destination, direction) => {
        const section = destination.item;
        const title = section.querySelector('h1');
        const desc = document.querySelectorAll('p');
        const image = document.querySelectorAll('img');
        const tl = new TimelineMax({
            delay: 0.5
        });

        if (destination.index !== 0) {
            tl.fromTo(image, 0.5, {
                x: "-50",
                opacity: 0
            }, {
                x: 0,
                opacity: 1
            });
            tl.fromTo(title, 0.5, {
                y: "50",
                opacity: 0
            }, {
                y: 0,
                opacity: 1
            });
            tl.fromTo(desc, 0.5, {
                x: "-50",
                opacity: 0
            }, {
                x: 0,
                opacity: 1
            });
        }

        if (destination.index === 0) {
            const comp = document.querySelector('.comp');
            const title = section.querySelector('h1');
            const desc = document.querySelector('p');
            const button = document.querySelector('button');
            tl.fromTo(title, 0.5, {
                x: "-50",
                opacity: 0
            }, {
                x: 0,
                opacity: 1
            });
            tl.fromTo(desc, 0.5, {
                x: "-50",
                opacity: 0
            }, {
                x: 0,
                opacity: 1
            });
            tl.fromTo(button, 0.5, {
                y: "50",
                opacity: 0
            }, {
                y: 0,
                opacity: 1
            });
            tl.fromTo(comp, 0.7, {
                x: '100%'
            }, {
                x: '5%'
            });
        }
    }
});