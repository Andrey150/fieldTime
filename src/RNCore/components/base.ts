import React from "react";

export interface IBaseComponent {
    class?: string
    visible?: boolean
    onLayout?: () => void
    webStyle?: React.CSSProperties
}

