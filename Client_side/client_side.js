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
        SalesforceInteractions.cashDom('.wrapper.wrapper-foreground').attr('data-mobile','https://conferenceonarchitecture.com/wp-content/uploads/2022/11/A23_exhibitor-hero-mobile_900x800.jpg');
        SalesforceInteractions.cashDom('.wrapper.wrapper-foreground').attr('data-bg','https://conferenceonarchitecture.com/wp-content/uploads/2022/11/A23_exhibitor-hero-mobile_900x800.jpg');
        SalesforceInteractions.cashDom('.wrapper.wrapper-foreground').attr('data-foreground','https://conferenceonarchitecture.com/wp-content/uploads/2022/11/A23_exhibitor-home-hero_1600x800_v03.jpg');
        SalesforceInteractions.cashDom('.wrapper.wrapper-foreground').attr('style','background-image:url(https://conferenceonarchitecture.com/wp-content/uploads/2022/11/A23_exhibitor-home-hero_1600x800_v03.jpg);background-color:#000000');
    }

    function reset(context, template) {
    }

    registerTemplate({
        apply: apply,
        reset: reset
    });

})();