(function() {

    /**
     * @function buildBindId
     * @param {Object} context
     * @description Create unique bind ID based on the campaign and experience IDs.
     */
    function buildBindId(context) {
        return `${context.campaign}:${context.experience}`;
    }

    function apply(context, template) {
        const contentZoneSelector = SalesforceInteractions.mcis.getContentZoneSelector(context.contentZone);

        /**
         * The pageElementLoaded method waits for the content zone to load into the DOM
         * before rendering the template. The observer element that monitors for the content
         * zone element to get inserted into its DOM node is set to "body" by default.
         * For performance optimization, this default can be overridden by adding
         * a second selector argument, which will be used as the observer element instead.
         *
         * Visit the Template Display Utilities documentation to learn more:
         * https://developer.evergage.com/campaign-development/web-templates/web-display-utilities
         */
        return SalesforceInteractions.DisplayUtils
            .bind(buildBindId(context))
            .pageElementLoaded(contentZoneSelector)
            .then((element) => {
                SalesforceInteractions.cashDom('.wrapper.wrapper-foreground').attr('data-mobile','https://conferenceonarchitecture.com/wp-content/uploads/2022/11/A23_exhibitor-hero-mobile_900x800.jpg');
                SalesforceInteractions.cashDom('.wrapper.wrapper-foreground').attr('data-bg','https://conferenceonarchitecture.com/wp-content/uploads/2022/11/A23_exhibitor-hero-mobile_900x800.jpg');
                SalesforceInteractions.cashDom('.wrapper.wrapper-foreground').attr('data-foreground','https://conferenceonarchitecture.com/wp-content/uploads/2022/11/A23_exhibitor-home-hero_1600x800_v03.jpg');
                SalesforceInteractions.cashDom('.wrapper.wrapper-foreground').attr('style','background-image:url(https://conferenceonarchitecture.com/wp-content/uploads/2022/11/A23_exhibitor-home-hero_1600x800_v03.jpg);background-color:#000000');
            });
    }

    function reset(context, template) {
        SalesforceInteractions.DisplayUtils.unbind(buildBindId(context));
        SalesforceInteractions.cashDom(`[data-evg-campaign-id="${context.campaign}"][data-evg-experience-id="${context.experience}"]`)
            .remove();
    }

    function control(context) {
        const contentZoneSelector = SalesforceInteractions.mcis.getContentZoneSelector(context.contentZone);
        return SalesforceInteractions.DisplayUtils
            .bind(buildBindId(context))
            .pageElementLoaded(contentZoneSelector)
            .then((element) => {
                SalesforceInteractions.cashDom(element).attr({
                    "data-evg-campaign-id": context.campaign,
                    "data-evg-experience-id": context.experience,
                    "data-evg-user-group": context.userGroup
                });
            });
    }

    registerTemplate({
        apply: apply,
        reset: reset,
        control: control
    });

})();
