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
                name: "product_detail",
                isMatch: () => {
                    return (
                        (/bank-demo\/loan\//.test(window.location.href)) || 
                        (/bank-demo\/banking\//.test(window.location.href)) || 
                        (/bank-demo\/credit-cards\//.test(window.location.href))
                    )
                },
                contentZones: [
                    { name: "related_products_container", selector: "#related-products-container" }
                ],
                interaction: {
                    name: SalesforceInteractions.CatalogObjectInteractionName.ViewCatalogObject,
                    catalogObject: {
                        type: "Product",
                        id: () => {
                            return SalesforceInteractions.mcis.getLastPathComponentWithoutExtension(window.location.href);
                        },
                        attributes: {
                            name: SalesforceInteractions.resolvers.fromSelector("h2"),
                            description: SalesforceInteractions.resolvers.fromSelector("h2"),
                            url: SalesforceInteractions.resolvers.fromHref(),
                            price: 1,
                            inventoryCount: 1,
                            imageUrl: SalesforceInteractions.resolvers.fromSelectorAttribute("img.d-block", "src", (url) => {return url.replace("..", "https://mohankrishnahb.github.io/bank-demo")}),

                        },
                        relatedCatalogObjects: {
                            Category: window.location.pathname.replace("/bank-demo/", "").replace("/", "|").replace(".html", "")
                        }
                    }
                }
            }
        ]
    }
    SalesforceInteractions.initSitemap(sitemapConfig);
});