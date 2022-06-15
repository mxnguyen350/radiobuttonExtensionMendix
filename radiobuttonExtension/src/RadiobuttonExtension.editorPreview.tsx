import { ReactElement, createElement } from "react";

import { parseInlineStyle } from "@mendix/pluggable-widgets-tools";

import { ExtendRadioButtons, RadiobuttonExtensionProps } from "./components/RadioButtonExtension";
import { RadiobuttonExtensionPreviewProps } from "../typings/RadiobuttonExtensionProps";

function parentInline(node?: HTMLElement | null): void {
    // Temporary fix, the web modeler add a containing div, to render inline we need to change it.
    if (node && node.parentElement && node.parentElement.parentElement) {
        node.parentElement.parentElement.style.display = "inline-block";
    }
}

function transformProps(props: RadiobuttonExtensionPreviewProps): RadiobuttonExtensionProps {
    return {
        className: props.className,
        readOnly: props.readOnly,
        style: parseInlineStyle(props.style),
        radioButtonName: props.radioButtonName,
        buttonsList: props.buttonsList
        // type: props.radiobuttonextensionType,
        // bootstrapStyle: props.bootstrapStyle,
        // className: props.className,
        // clickable: false,
        // style: parseInlineStyle(props.style),
        // defaultValue: props.radiobuttonextensionValue ? props.radiobuttonextensionValue : "",
        // value: props.valueAttribute
    };
}

export function preview(props: RadiobuttonExtensionPreviewProps): ReactElement {
    return (
        <div ref={parentInline}>
            <ExtendRadioButtons {...transformProps(props)}></ExtendRadioButtons>
        </div>
    );
}

export function getPreviewCss(): string {
    return require("./ui/RadiobuttonExtension.css");
}
