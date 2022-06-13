/**
 * This file was generated from RadiobuttonExtension.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { CSSProperties } from "react";
import { ActionValue, EditableValue } from "mendix";
import { Big } from "big.js";

export type BootstrapStyleEnum = "default" | "primary" | "success" | "info" | "inverse" | "warning" | "danger";

export type RadiobuttonextensionTypeEnum = "badge" | "label";

export interface Button {
    enum: {value: string, key:string};
    subtextString: string;
}

export interface ButtonsList extends Array<Button>{}

export interface RadioButtonExtensionProps {
    radioButtonName: string;
    buttonsList: ButtonsList;
    style?: CSSProperties;
}

export interface RadiobuttonExtensionContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    valueAttribute?: EditableValue<string | Big>;
    radiobuttonextensionValue: string;
    bootstrapStyle: BootstrapStyleEnum;
    radiobuttonextensionType: RadiobuttonextensionTypeEnum;
    radioButtonName: string;
    buttonsList: ButtonsList;
}

export interface RadiobuttonExtensionPreviewProps {
    className: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    valueAttribute: string;
    radiobuttonextensionValue: string;
    bootstrapStyle: BootstrapStyleEnum;
    radiobuttonextensionType: RadiobuttonextensionTypeEnum;
    onClickAction: {} | null;
}
