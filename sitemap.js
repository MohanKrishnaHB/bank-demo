SalesforceInteractions.init({
    cookieDomain: "mohankrishnahb.github.io"
}).then(() => {
    const sitemapConfig = {
        global: {
            listeners: [
                SalesforceInteractions.listener("click", "#footer-email-submit", () => {
                    const email = SalesforceInteractions.cashDom("#footer-email-input").val().trim();
                    if (email) {
                        SalesforceInteractions.sendEvent({ interaction: { name: "Email Sign Up - Footer" }, user: { identities: { emailAddress: email } } });
                    }
                })
            ]
        },
        pageTypes: [
            {
                name: "home_page",
                isMatch: () => (/bank-demo\/index.html$/.test(window.location.href) || /bank-demo\/$/.test(window.location.href)),
                contentZones: [
                    { name: "home_page_banner", selector: ".container .banner-container" },
                    { name: "home_popup" }
                ],
                interaction: {
                    name: "Homepage"
                }
            },
            {
                name: "vehicle_loan_page",
                isMatch: () => (/bank-demo\/loan\/vehicle-loan.html$/.test(window.location.href)),
                contentZones: [
                    { name: "loan_page_banner", selector: ".container .banner-container" }
                ],
                interaction: {
                    name: "VehicleLoanPage"
                }
            }
        ]
    }
    SalesforceInteractions.initSitemap(sitemapConfig);
});