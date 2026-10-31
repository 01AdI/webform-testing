export const ZOHO = {
  actionUrl: "https://crm.zoho.in/crm/WebToLeadForm",

  hidden: {
    xnQsjsdp:
      "c3b2535bbd2e492fe116ef9df33f307f54c749e24d8c05d7e923838d06c4ffef",
    xmIwtLD:
      "12a7afc0c10b0eda93c9c22b2aee68599ba6c5cc996462da602718b091af64ff4caa1ef89b32be3c183c4f2d89ac8c1f",
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

  // Extra hidden Zoho fields sent with every lead: { "zoho field name": "fixed value" }.
  // LEADCF3 is the "Sub Source" picklist; the value must match a Zoho option exactly.
  extraHidden: {
    LEADCF3: "Dream Homes Landing Page",
  },

  analytics: {
    scriptId: "wf_anal",
    scriptUrl:
      "https://crm.zohopublic.in/crm/WebFormAnalyticsServeServlet?rid=038aca32cb18fccdb7a6da135046fb7e7320f8014d9ae170952cdee7e2606eab32a78f424ad162d6f898f0f094fc3878gid3d3ca7b326726f41cb290f0f6a3ba921b386fd999c018077e0d0a7e7cc0e5954gid5c146213cd2b133057152cd1413596599b642b07ee845f4a266ea3e5aa183129gid43550c244928919385fc7a58458148e377418807dcfb7d26aa9e6ae5886f058a&tw=682ac242b74d75ff8a04c724e7e0cbc25da4e901b117f444a9e946d54c3df000&version=v2",
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
