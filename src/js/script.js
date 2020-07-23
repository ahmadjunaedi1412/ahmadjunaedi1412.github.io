new fullpage('#fullpage', {
    autoScrolling: true,
    navigation: true,
    onLeave: async (origin, destination, direction) => {
        const section = destination.item;
        const title = section.querySelector('h1');
        const tl = new TimelineMax({
            delay: 0.5
        });

        if (destination.index !== 0) {
            tl.fromTo(title, 0.5, {
                y: "50",
                opacity: 0
            }, {
                y: 0,
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