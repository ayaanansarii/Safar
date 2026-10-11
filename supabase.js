/**
 * SAFAR TOURS & TRAVELS — SUPABASE CLIENT & BACKEND INTEGRATION
 * Project ID: vnulxpvkuiqildklkjbl (Region: ap-south-1)
 */

const SUPABASE_CONFIG = {
  url: "https://vnulxpvkuiqildklkjbl.supabase.co",
  anonKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZudWx4cHZrdWlxaWxka2xramJsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTE3MjU5MjIsImV4cCI6MjEwNzMwMTkyMn0.C3faMqmCnDSND58Z42Dx7LCTiXkXa6SbsHpcl3FQ8jQ"
};

/**
 * Universal helper to execute Supabase REST API requests
 */
async function supabaseRest(endpoint, data, method = "POST") {
  const url = `${SUPABASE_CONFIG.url}/rest/v1/${endpoint}`;
  const response = await fetch(url, {
    method: method,
    headers: {
      "apikey": SUPABASE_CONFIG.anonKey,
      "Authorization": `Bearer ${SUPABASE_CONFIG.anonKey}`,
      "Content-Type": "application/json",
      "Prefer": "return=representation"
    },
    body: JSON.stringify(data)
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error(`[Supabase Error] ${endpoint}:`, errorText);
    throw new Error(`Supabase request failed: ${response.status} ${response.statusText}`);
  }

  try {
    return await response.json();
  } catch (e) {
    return { success: true };
  }
}

/**
 * Save tour booking inquiry into Supabase
 */
async function saveTourInquiry(inquiryData) {
  try {
    const payload = {
      booking_reference: inquiryData.bookingReference,
      tour_id: inquiryData.tourId,
      tour_name: inquiryData.tourName,
      departure_city: inquiryData.departureCity,
      departure_date: inquiryData.departureDate,
      adults_count: parseInt(inquiryData.adultsCount, 10) || 2,
      children_count: parseInt(inquiryData.childrenCount, 10) || 0,
      meal_preference: inquiryData.mealPreference || "veg",
      flight_option: inquiryData.flightOption || "included",
      estimated_total: parseFloat(inquiryData.estimatedTotal) || 0,
      currency: inquiryData.currency || "INR",
      lead_name: inquiryData.leadName,
      lead_phone: inquiryData.leadPhone,
      lead_email: inquiryData.leadEmail,
      status: "new"
    };

    console.log("[Supabase] Saving inquiry payload:", payload);
    const result = await supabaseRest("tour_inquiries", payload);
    console.log("[Supabase] Successfully saved inquiry:", result);
    return { success: true, data: result };
  } catch (err) {
    console.error("[Supabase] Failed to save tour inquiry:", err);
    return { success: false, error: err.message };
  }
}

/**
 * Save newsletter subscriber into Supabase
 */
async function saveNewsletterSubscriber(email) {
  try {
    const payload = { email: email.trim().toLowerCase() };
    const result = await supabaseRest("newsletter_subscribers", payload);
    return { success: true, data: result };
  } catch (err) {
    // If unique constraint error (already subscribed)
    if (err.message && err.message.includes("409")) {
      return { success: true, alreadySubscribed: true };
    }
    console.error("[Supabase] Failed to save newsletter subscription:", err);
    return { success: false, error: err.message };
  }
}

/**
 * Save general contact inquiry into Supabase
 */
async function saveContactInquiry(contactData) {
  try {
    const payload = {
      name: contactData.name,
      phone: contactData.phone || null,
      email: contactData.email || null,
      message: contactData.message || null,
      source: contactData.source || "website"
    };
    const result = await supabaseRest("contact_inquiries", payload);
    return { success: true, data: result };
  } catch (err) {
    console.error("[Supabase] Failed to save contact inquiry:", err);
    return { success: false, error: err.message };
  }
}

// Attach to window object for access across application scripts
window.SafarDB = {
  saveTourInquiry,
  saveNewsletterSubscriber,
  saveContactInquiry,
  config: SUPABASE_CONFIG
};
