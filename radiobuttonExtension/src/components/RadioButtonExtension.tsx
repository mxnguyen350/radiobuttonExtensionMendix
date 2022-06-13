import { ReactElement, CSSProperties, createElement } from "react";
import classNames from "classnames";

export interface RadioButtonExtensionProps {
    radioButtonName: string;
    className?: string;
    style?: CSSProperties;
}

export function ExtendRadioButtons(props: RadioButtonExtensionProps): ReactElement {
    // Goal of the widget: Use mendix naming conventions to isolate DOM elements,
    // and then inject html to create captions on radio buttons
    
    // Use given name to generate the expected name for the top level of a radio button (class="mx-name-whatevertheradiobuttonwidgetnameis")
    // Use class names to find the input and label of the enum option we want
    // <input> will have the tag value="EnumValue"
    // The <label>Whatever text you want in the radio button</label>

    // Layout of a radio button widget
    // <div class="mx-name-radiobutton1">
    //     <div class="mx-radiogroup" value="EnumValue">
    //         <div class="radio">
    //             <input type="radio" value="enumValue"></input> ***This is the actual button***
    //             <label for="158.Remembrance.Landing.radioButtons1_hki_9_2">The text of the normal dropdown</label>

    return <div></div>
}
