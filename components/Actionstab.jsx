import React from "react";
import Icon from '@mui/material/Icon';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';


export default function ActionsTab() {

    return (

        <React.Fragment>
            <div className="quick-actions-bar">
                <div className="action-tab">
                    <div className="tab">
                        <Icon>radar</Icon>
                        <h4>Manage my booking <ChevronRightOutlinedIcon /></h4>
                    </div>
                    <div className="tab">
                        <Icon><Inventory2OutlinedIcon /></Icon>
                        <h4>Retrieve my invoice <ChevronRightOutlinedIcon /></h4>
                    </div>
                    <div className="tab">
                        <Icon><InfoOutlinedIcon /></Icon>
                        <h4>Find an answer <ChevronRightOutlinedIcon /></h4>
                    </div>
                    
                </div>
            </div>
        </React.Fragment>
    )
}