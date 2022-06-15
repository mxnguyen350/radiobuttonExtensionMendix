import { ReactElement, createElement } from "react";
import { CSSProperties } from "react";
import { ButtonsListPreviewType } from "typings/RadiobuttonExtensionProps";
import { ButtonsListType } from "typings/RadiobuttonExtensionProps";

export interface RadiobuttonExtensionProps {
    className: string;
    style?: CSSProperties;
    readOnly: boolean;
    radioButtonName: string;
    buttonsList: ButtonsListPreviewType[];
}

export function ExtendRadioButtons(props: RadiobuttonExtensionProps): ReactElement {
    let x:ButtonsListType
    let style: string

    // allows flexibility of styles between default and user specified
    // in future update to allow for styles to overlap
    if (props.style != null) {
        style = 'style=' + '"' + props.style + '"'
    } else {
        style = 'class="subtext"'
    }

    // Iterate through all of the radio button options we want to edit
    for (let i=0; i < props.buttonsList.length; i++) {
        x=props.buttonsList[i]
        // Creating an html string to create innerhtml for our new element
        let newHtml = '<label ' + style + '>' + x.subtextString + '</label>'
    
    
        // Create a new label, add the desired subtext to it
        let subText = document.createElement("label")
        subText.id = 'radioButtonCustomSubtext'
        subText.innerHTML = newHtml

        // Using xpath to find the label element that we want to place under by its text, there is no class or id to find the label by so it has to be done this way.
        let xpath = '//a[text()="' + x.enumCaption + '"]'
        let matchingElement = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
        
        // Append our new Element under the option.
        matchingElement?.appendChild(subText)
    }

    /* Needed  Features:
    1. Support multiple subtexts in one widget (make a property that allows for multiple to be specified)    
    */
    
    /* Use given name to generate the expected name for the top level of a radio button (class="mx-name-whatevertheradiobuttonwidgetnameis")
    Use class names to find the input and label of the enum option we want
    <input> will have the tag value="EnumValue"
    The <label>Whatever text you want in the radio button</label>

    Layout of a radio button widget
    <div class="mx-name-radiobutton1">
        <div class="mx-radiogroup" value="EnumValue">
            <div class="radio">
                <input type="radio" value="enumValue"></input> ***This is the actual button***
                <label for="158.Remembrance.Landing.radioButtons1_hki_9_2">
                The text of the normal dropdown
                </label> */

    // We return an empty div because we need to return something
    return <div></div>
}
