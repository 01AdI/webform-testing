export const ZOHO = {
  actionUrl: "https://crm.zoho.in/crm/WebToLeadForm",

  hidden: {
    xnQsjsdp: "ed068f213597ed0bf402bff7dd41bc9e422d456b53346066f652285ae19cd91e",
    xmIwtLD: "4c17b0b261a9075180867f19ec02a309ff148c09554208918d42834be806e427475601bedea5a0099a786e93b3e6e814",
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
  returnURL: "https://webform-testing-pi.vercel.app/thank-you.html",
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