import { withStyles } from '@ellucian/react-design-system/core/styles';
import { spacing40 } from '@ellucian/react-design-system/core/styles/tokens';
import { Typography, Button, Footer } from '@ellucian/react-design-system/core';
import PropTypes from 'prop-types';
import React from 'react';

const styles = () => ({
    card: {
        marginTop: 0,
        marginRight: spacing40,
        marginBottom: 0,
        marginLeft: spacing40
    }
});

const EventViewerCard = (props) => {
    const { classes, cardInfo = {} } = props;

    const imageUrl = cardInfo.configuration['event-image-url'] || '';
    const eventUrl = cardInfo.configuration['event-url'] || '';
    const description = cardInfo.configuration['event-description'] || '';
    const footer = cardInfo.configuration['footer'] || '';

    return (
        <div className={classes.card}>

            {imageUrl ? (
                <div>
                    <img
                        src={imageUrl}
                        alt="Event"
                        style={{ maxWidth: '100%' }}
                    />
                </div>
            ) : null}

            <Typography variant="h4">
                {description}
            </Typography>
            <Button
                color="primary"
                size="default"
                variant="contained"
                href={eventUrl}
                target="_blank"
            >
                View Event
            </Button>
            <Footer footerText={footer} />
        </div>
    );
};

EventViewerCard.propTypes = {
    classes: PropTypes.object.isRequired,
    cardInfo: PropTypes.object.isRequired
};

export default withStyles(styles)(EventViewerCard);