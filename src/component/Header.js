import React from "react";
import {
    NovuProvider,
    PopoverNotificationCenter,
    NotificationBell,
} from "@novu/notification-center";
import "./header.css";
import Novulogo from "../assets/Novulogo.png"

function Header() {
    return (
        <>
            <nav className="nav">
                <div className="logo-container">
                    <img src={Novulogo} alt="Logo" />
                </div>
                <div className="bell">
                    <div>
                        <NovuProvider
                            subscriberId={process.env.REACT_APP_SUB_ID}
                            applicationIdentifier={process.env.REACT_APP_APP_ID}
                        >
                            <PopoverNotificationCenter>
                                {({ unseenCount }) => (
                                    <NotificationBell unseenCount={unseenCount} />
                                )}
                            </PopoverNotificationCenter>
                        </NovuProvider>
                        <h5>{process.env.REACT_APP_SUB_ID}</h5>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;
