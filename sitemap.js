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
        pageTypeDefault: {
            name: "default",
            interaction: {
                name: "Default Page"
            }
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
                isMatch: () => (/bank-demo\/loan\//.test(window.location.href) || /bank-demo\/banking\//.test(window.location.href) || /bank-demo\/credit-cards\//.test(window.location.href)),
                interaction: {
                    name: "View Product",
                    catalogObject: {
                        type: "Product",
                        id: () => SalesforceInteractions.mcis.getLastPathComponentWithoutExtension(window.location.href),
                        attributes: {
                            sku: { id: SalesforceInteractions.mcis.getLastPathComponentWithoutExtension(window.location.href) },
                            name: SalesforceInteractions.resolvers.fromSelector("h2"),
                            description: SalesforceInteractions.resolvers.fromSelector("h2"),
                            url: SalesforceInteractions.resolvers.fromHref(),
                            price: 1,
                            inventoryCount: 1,
                            imageUrl: SalesforceInteractions.resolvers.fromSelectorAttribute("img.d-block", "src", (url) => {return url.replace("..", "https://mohankrishnahb.github.io/bank-demo")})
                        },
                        relatedCatalogObjects: {
                            Category: window.location.pathname.replace("/bank-demo/", "").replace("/", "|").replace(".html", "")
                        }
                    }
                },
                contentZones: [
                    { name: "related_products_container", selector: "#related-products-container" }
                ]
            },
            {
                name: "blog",
                isMatch: () => new Promise((resolve, reject) => {
                    return SalesforceInteractions.DisplayUtils.pageElementLoaded("html", "html").then(() => {
                        resolve((/bank-demo\/calculator\//.test(window.location.href)));
                    });
                }),
                // isMatch: () => (/bank-demo\/loan\//.test(window.location.href) || /bank-demo\/banking\//.test(window.location.href) || /bank-demo\/credit-cards\//.test(window.location.href)),
                interaction: {
                    name: "view blog"
                }
            }
        ]
    }
    SalesforceInteractions.initSitemap(sitemapConfig);
});