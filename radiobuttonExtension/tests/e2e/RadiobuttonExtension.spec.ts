import homepage from "./pages/home.page";

const badgeValue = "Badge";

describe("RadiobuttonExtension", () => {
    it("should render a badge with a caption", () => {
        homepage.open();

        /**
         * Create your tests here. Example:
         * homepage.badge().waitForVisible();
         *
         * const widgetValue = homepage.badge().getText();
         * expect(widgetValue).toContain(badgeValue);
         */
    });
});
