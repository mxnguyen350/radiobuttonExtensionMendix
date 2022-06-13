import { ReactElement, createElement } from "react";

import { parseInlineStyle } from "@mendix/pluggable-widgets-tools";

import { BadgeSample, BadgeSampleProps } from "./components/RadioButtonExtension";
import { RadiobuttonExtensionPreviewProps } from "../typings/RadiobuttonExtensionProps";

function parentInline(node?: HTMLElement | null): void {
    // Temporary fix, the web modeler add a containing div, to render inline we need to change it.
    if (node && node.parentElement && node.parentElement.parentElement) {
        node.parentElement.parentElement.style.display = "inline-block";
    }
}

function transformProps(props: RadiobuttonExtensionPreviewProps): BadgeSampleProps {
    return {
        type: props.radiobuttonextensionType,
        bootstrapStyle: props.bootstrapStyle,
        className: props.className,
        clickable: false,
        style: parseInlineStyle(props.style),
        defaultValue: props.radiobuttonextensionValue ? props.radiobuttonextensionValue : "",
        value: props.valueAttribute
    };
}

export function preview(props: RadiobuttonExtensionPreviewProps): ReactElement {
    return (
        <div ref={parentInline}>
            <BadgeSample {...transformProps(props)}></BadgeSample>
        </div>
    );
}

export function getPreviewCss(): string {
    return require("./ui/RadiobuttonExtension.css");
}
