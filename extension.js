module.exports = {
    name: 'EventViewer',
    publisher: 'Sample',
    cards: [{
        type: 'EventViewerCard',
        source: './src/cards/EventViewerCard',
        title: 'EventViewer Card',
        displayCardType: 'EventViewer Card',
        description: 'This is an introductory card to the Ellucian Experience SDK',
        configuration: {
            client: [
                {
                    key: 'event-image-url',
                    label: 'event image url',
                    type: 'url',
                    required: true
                },
                {
                    key: 'event-url',
                    label: 'event url',
                    type: 'url',
                    required: true
                },
                {
                    key: 'event-description',
                    label: 'event description',
                    type: 'text',
                    required: true
                },
                {
                    key: 'footer',
                    label: 'footer`',
                    type: 'text',
                    required: true
                },
            ]
        },
        pageRoute: {
            route: '/',
            excludeClickSelectors: ['a']
        }
    }],
    page: {
        source: './src/page/router.jsx'
    }
};