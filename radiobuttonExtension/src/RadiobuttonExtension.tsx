import { ReactElement, createElement, useCallback } from "react";

import { RadiobuttonExtensionContainerProps } from "../typings/RadiobuttonExtensionProps";
import { BadgeSample } from "./components/RadioButtonExtension";
import "./ui/RadiobuttonExtension.css";

export function RadiobuttonExtension(props: RadiobuttonExtensionContainerProps): ReactElement {
    const {
        radiobuttonextensionType,
        radiobuttonextensionValue,
        valueAttribute,
        onClickAction,
        style,
        bootstrapStyle
    } = props;
    const onClickHandler = useCallback(() => {
        if (onClickAction && onClickAction.canExecute) {
            onClickAction.execute();
        }
    }, [onClickAction]);

    return (
        <BadgeSample
            type={radiobuttonextensionType}
            bootstrapStyle={bootstrapStyle}
            className={props.class}
            clickable={!!onClickAction}
            defaultValue={radiobuttonextensionValue ? radiobuttonextensionValue : ""}
            onClickAction={onClickHandler}
            style={style}
            value={valueAttribute ? valueAttribute.displayValue : ""}
        />
    );
}
