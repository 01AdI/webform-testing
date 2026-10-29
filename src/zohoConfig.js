export const ZOHO = {
  actionUrl: "https://crm.zoho.in/crm/WebToLeadForm",

  hidden: {
    xnQsjsdp: "0fcfd28e0605414312296099cc10eeac193edf9f9ba121c13094aad99407750d",
    xmIwtLD: "e2fe3a3eaf5b3053bade4c3b0a5d0849c1bd33d4166ec11a0678653afd6842a2ce1aced57415151b73d4a2940de1aca9",
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
  returnURL: "https://webform-testing.vercel.app/thank-you.html",
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
