import { ReactElement, createElement } from "react";

import { RadiobuttonExtensionContainerProps } from "../typings/RadiobuttonExtensionProps";
import { ExtendRadioButtons } from "./components/RadioButtonExtension";
import "./ui/RadiobuttonExtension.css";

export function RadiobuttonExtension(props: RadiobuttonExtensionContainerProps): ReactElement {
    const {
        radioButtonName,
        buttonsList,
        style
    } = props;

    return (
        <ExtendRadioButtons
            className={""}
            readOnly={false}
            radioButtonName={radioButtonName}
            buttonsList={buttonsList}
            style={style}
        />
    );
}
