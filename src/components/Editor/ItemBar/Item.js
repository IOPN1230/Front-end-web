import { Popover } from '@material-ui/core';
import React, { useState, useEffect } from 'react'
import { useCookies } from 'react-cookie';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    popover: {
        pointerEvents: 'none',
    },
    paper: {
        padding: theme.spacing(),
    },
}));

function Item({ item }) {
    const [cookies, setCookie] = useCookies();
    const [active, setActive] = useState()
    const [anchorEl, setAnchorEl] = React.useState(null);
    const classes = useStyles();

    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };
    const open = Boolean(anchorEl);

    const selectObject = () => {
        setCookie('selectedObject', item)
        setActive('true')
    }


    return (
        <div className="Item">
            <img src={item.image} alt={item.name} onClick={() => selectObject()}
                className={cookies.selectedObject.name === item.name ? 'active' : null}
                onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose} />
            <Popover
                id="mouse-over-popover"
                className={classes.popover}
                classes={{
                    paper: classes.paper,
                }}
                open={open}
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                onClose={handlePopoverClose}
                disableRestoreFocus
            >
                <Typography>
                        Nazwa: {item.name} <br/>
                        Cena: {item.price} <br/>
                        Promieniowanie cieplne: {item.emission} <br/>
                        Strata cieplna: {item.heatDecline} <br/>
                        Współczynnik przewodnictwa ciepła: {item.heatConducton} <br/>
                </Typography>
            </Popover>

        </div>
    )
}

export default Item
