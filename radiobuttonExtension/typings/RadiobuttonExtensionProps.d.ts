/**
 * This file was generated from RadiobuttonExtension.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { CSSProperties } from "react";

export interface ButtonsListType {
    enumName: string;
    enumCaption: string;
    subtextString: string;
}

export interface ButtonsListPreviewType {
    enumName: string;
    enumCaption: string;
    subtextString: string;
}

export interface RadiobuttonExtensionContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    radioButtonName: string;
    buttonsList: ButtonsListType[];
}

export interface RadiobuttonExtensionPreviewProps {
    className: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    radioButtonName: string;
    buttonsList: ButtonsListPreviewType[];
}
