export const ZOHO = {
  actionUrl: "https://crm.zoho.in/crm/WebToLeadForm",

  hidden: {
    xnQsjsdp: "5836e35ee7cd4963204d4e9e55be16965d35096ad343069b554d78363d97e01d",
    xmIwtLD: "f217f0d32b233ac35a0e45108d2839466adf2bb6f8abcf21f4964b47042fe6be8f51accf28120fba95b7096319e249de",
    actionType: "TGVhZHM=", // base64 for "Leads"
  },

  fields: {
    name: "Last Name", // Zoho requires Last Name; we label it "Full Name" on the page
    phone: "Phone", // matches name="Phone" in Zoho's snippet
    email: "Email",
    bhk: "", // custom field name (e.g. LEADCF1). Leave "" to hide the dropdown.
  },

  leadSourceField: "Lead Source",
  leadSourceValue: "Website",

  utmFields: {
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
    utm_term: "",
    utm_content: "",
    gclid: "",
  },

  descriptionField: "",

  // Where to send people after a successful submit (also useful for ad conversion tracking).
  returnURL: "https://webforms-testing.netlify.app/thank-you.html",
};

// Options for the BHK dropdown (used only if fields.bhk is set)
export const BHK_OPTIONS = ["2 BHK", "3 BHK", "4 BHK", "Villa / Plot"];

// Page content
export const SITE = {
  brand: "Dream Homes",
  headline: "Build Your Home",
  tagline: "Thoughtfully designed residences in prime locations. Share your details and our team will get in touch with pricing and site visit options.",
  points: ["RERA-registered projects", "Flexible payment plans", "Free site visit & pickup"],
  heroImage:
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80",
};