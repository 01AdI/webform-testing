
export const ZOHO = {
  actionUrl: "https://crm.zoho.in/crm/WebToLeadForm",

  hidden: {
    xnQsjsdp:
      "b31e75cb48b79ff102e3b8d674aec4c6ea4d9f19ebdf7c1fab3df88cc1618ae7",
    xmIwtLD:
      "2d3a8266d5e309e200ca87eb6b857cd9c88feea780424950d8890986e38ec313d6ac07ad07ed7e7df7ea30113b4f8a2e",
    actionType: "TGVhZHM=",
  },

  fields: {
    name: "Last Name",
    phone: "Phone",
    email: "Email",
    bhk: "", // Set the Zoho custom field API name to enable the dropdown
  },

  leadSourceField: "Lead Source",
  leadSourceValue: "Website",

  analytics: {
    scriptId: "wf_anal",
    scriptUrl:
      "https://crm.zohopublic.in/crm/WebFormAnalyticsServeServlet?rid=60734bba891d159ff316328c30ed88c7fd9d147be1c878c1fadce7382394430d6330b64f80a08f57282f957425cdc7fcgid26ab63a7bc999b2cfab168edd94b1e6a82c82f8fc06ea889b1172452c19544a7gid90d8b1f118e4641f31551853c1c98c3e722587d27a70253b41ab8ff1dc11ea70gidd22a252d12b94b54fc2892c79742b76a7f3d754fdb50d51b216fbded81113fdf64&tw=2c904c937eff7384cfd93315fb4c5211e15d167160470ce45953f5ffe1681f75&version=v2",
    formId: "1445244000000633002",
    firstPartyTracking: true,
  },

  // Redirect after successful submission
  returnURL: "https://webforms-testing.netlify.app/thank-you.html",
};

// Options for the BHK dropdown
export const BHK_OPTIONS = [
  "2 BHK",
  "3 BHK",
  "4 BHK",
  "Villa / Plot",
];

// Page content
export const SITE = {
  brand: "Dream Homes",
  headline: "Build Your Home",
  tagline:
    "Thoughtfully designed residences in prime locations. Share your details and our team will get in touch with pricing and site visit options.",
  points: [
    "RERA-registered projects",
    "Flexible payment plans",
    "Free site visit & pickup",
  ],
  heroImage:
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80",
};
