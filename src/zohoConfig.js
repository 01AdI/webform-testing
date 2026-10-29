export const ZOHO = {
  actionUrl: "https://crm.zoho.in/crm/WebToLeadForm",

  hidden: {
    xnQsjsdp: "b31e75cb48b79ff102e3b8d674aec4c6ea4d9f19ebdf7c1fab3df88cc1618ae7",
    xmIwtLD: "2d3a8266d5e309e200ca87eb6b857cd9c88feea780424950d8890986e38ec313d6ac07ad07ed7e7df7ea30113b4f8a2e",
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