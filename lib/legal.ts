/** Legal documents for the iOS apps. Kept in English only: the English text is
 *  the authoritative version, and the App Store listings link to these URLs. */
export type LegalSection = {
  heading: string;
  body?: string[];
  bullets?: string[];
  outro?: string[];
};

export type LegalDoc = {
  intro?: string[];
  sections: LegalSection[];
  contactName: string;
  contactEmail: string;
};

export type AppLegal = {
  effectiveDate: string;
  privacy: LegalDoc;
  terms: LegalDoc;
};

export const legal: Record<string, AppLegal> = {
  "fabricator-pro": {
    effectiveDate: "April 22, 2026",
    privacy: {
      contactName: "Pantazi Eduard Marius Robert",
      contactEmail: "eduard.pantazi@gmail.com",
      sections: [
        {
          heading: "Overview",
          body: [
            'FabricatorPro ("the App") is developed by Pantazi Eduard Marius Robert. We are committed to protecting your privacy. This policy explains what data we collect, how we use it, and your rights.',
          ],
        },
        {
          heading: "Data We Collect",
          body: [
            "**We do not collect personal data.** The App operates entirely on your device. Specifically:",
          ],
          bullets: [
            "**Calculations & Saved History** — stored locally on your device using SwiftData. Never transmitted to any server.",
            "**Preferences & Settings** — stored locally on your device using UserDefaults.",
            "**Favourites** — stored locally on your device.",
            "**No Account Required** — the App does not require registration, login, or any personal information.",
          ],
        },
        {
          heading: "Subscriptions & Purchases",
          body: [
            "Subscriptions and in-app purchases are processed entirely by Apple through the App Store. We do not have access to your payment information, credit card details, or Apple ID.",
            "Purchase and subscription status is verified on-device through StoreKit. No data is sent to any external server.",
          ],
        },
        {
          heading: "Third-Party Services",
          body: ["The App uses only:"],
          bullets: [
            "**Apple App Store / StoreKit** — for processing in-app purchases. Apple's privacy policy applies to these transactions.",
          ],
          outro: [
            "The App contains no ads, no analytics, no tracking, and no third-party SDKs.",
          ],
        },
        {
          heading: "Data Sharing",
          body: [
            "We do not sell, trade, or share your data with third parties. When you export a PDF or DXF file, it is generated locally on your device and shared only through the iOS share sheet at your discretion.",
          ],
        },
        {
          heading: "Data Storage & Security",
          body: [
            "All app data is stored locally on your device and protected by iOS built-in security features including device encryption. We do not operate any servers that store your data.",
            "If you delete the App, all locally stored data (saved calculations, preferences, favourites) will be permanently removed.",
          ],
        },
        {
          heading: "Children's Privacy",
          body: [
            "The App does not knowingly collect any data from children. Since we do not collect personal data from any user, no special provisions for children are necessary.",
          ],
        },
        {
          heading: "Changes to This Policy",
          body: [
            'We may update this Privacy Policy from time to time. Changes will be reflected in the "Last updated" date above. Continued use of the App after changes constitutes acceptance of the updated policy.',
          ],
        },
      ],
    },
    terms: {
      contactName: "Pantazi Eduard Marius Robert",
      contactEmail: "eduard.pantazi@gmail.com",
      sections: [
        {
          heading: "Acceptance of Terms",
          body: [
            'By downloading, installing, or using FabricatorPro ("the App"), you agree to be bound by these Terms of Use. If you do not agree, do not use the App.',
          ],
        },
        {
          heading: "Description of Service",
          body: [
            "FabricatorPro is a professional fabrication calculator app that provides mathematical calculations, templates, and reference data for metalworking, woodworking, and general fabrication tasks. The App is provided as a tool to assist professionals and hobbyists.",
          ],
        },
        {
          heading: "Disclaimer of Accuracy",
          body: [
            "**Important:** While we strive for accuracy in all calculations, the App is provided as a reference tool only. You are responsible for verifying all calculations before use in any project.",
          ],
          bullets: [
            'All calculations, templates, and reference data are provided "as is" without warranty of any kind.',
            "The App should not be the sole basis for safety-critical decisions.",
            "Always verify measurements, angles, and cut dimensions before cutting or fabricating.",
            "The developer assumes no liability for errors, material waste, injury, or damage resulting from use of the App's calculations.",
          ],
        },
        {
          heading: "Subscriptions & Purchases",
          body: ["The App offers optional in-app purchases to unlock Pro features:"],
          bullets: [
            "**Monthly Subscription** — auto-renewing monthly subscription.",
            "**Lifetime Purchase** — one-time purchase for permanent access.",
            "Payment is charged to your Apple ID account at confirmation of purchase.",
            "Subscriptions automatically renew unless cancelled at least 24 hours before the end of the current period.",
            "You can manage and cancel subscriptions in your Apple ID Account Settings.",
            "Refund requests must be directed to Apple through the App Store.",
          ],
        },
        {
          heading: "Intellectual Property",
          body: [
            "The App, including its design, code, graphics, and content, is the intellectual property of Pantazi Eduard Marius Robert. You may not copy, modify, distribute, or reverse-engineer any part of the App.",
          ],
        },
        {
          heading: "Acceptable Use",
          body: ["You agree not to:"],
          bullets: [
            "Use the App for any unlawful purpose.",
            "Attempt to reverse-engineer, decompile, or disassemble the App.",
            "Redistribute, sublicense, or resell the App or its content.",
            "Remove or alter any proprietary notices or labels on the App.",
          ],
        },
        {
          heading: "Limitation of Liability",
          body: ["To the maximum extent permitted by applicable law:"],
          bullets: [
            'The App is provided "as is" and "as available" without warranties of any kind, whether express or implied.',
            "Pantazi Eduard Marius Robert shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the App.",
            "Our total liability shall not exceed the amount you paid for the App in the 12 months preceding the claim.",
          ],
        },
        {
          heading: "Export & Generated Files",
          body: [
            "PDF templates, DXF files, and other exports generated by the App are for your personal or professional use. You retain ownership of any files you generate. However, the App's formatting, branding, and layout design remain our intellectual property.",
          ],
        },
        {
          heading: "Termination",
          body: [
            "We reserve the right to terminate or suspend access to the App at any time, without notice, for conduct that we believe violates these Terms or is harmful to other users or the App.",
          ],
        },
        {
          heading: "Changes to Terms",
          body: [
            'We may update these Terms of Use from time to time. Changes will be reflected in the "Last updated" date above. Continued use of the App after changes constitutes acceptance of the updated terms.',
          ],
        },
        {
          heading: "Governing Law",
          body: [
            "These Terms shall be governed by and construed in accordance with the laws of Romania, without regard to conflict of law provisions.",
          ],
        },
      ],
    },
  },
  remoto: {
    effectiveDate: "July 18, 2026",
    privacy: {
      contactName: "Pantazi Eduard Marius Robert",
      contactEmail: "eduard.pantazi@gmail.com",
      intro: [
        'Remoto ("we", "us", the "App") is a local-only remote control for Android TV and Google TV devices. This is the shortest privacy policy you will read this year, because we do not collect, transmit, or store any personal data on any server we control.',
        "We do not have servers.",
      ],
      sections: [
        {
          heading: "What we collect",
          body: [
            "**Nothing.**",
            "The App does not collect, transmit, or share any personally identifiable information, usage analytics, crash reports (beyond Apple's built-in opt-in system-level crash reporting, which is anonymized and sent to Apple, not to us), advertising identifiers, location data, contacts, photos, microphone data, or any other information about you or your device.",
            "The App does not contain any third-party analytics SDK, advertising SDK, crash reporting SDK, or tracking library.",
            'Our App Store Privacy Nutrition Label lists "Data Not Collected". This policy is the underlying commitment.',
          ],
        },
        {
          heading: "What is stored on your device",
          body: [
            "The App stores the following data locally on your iPhone only, never leaving the device except as noted:",
          ],
          bullets: [
            "**A self-signed client certificate** — generated on first launch and stored in the iOS Keychain. Used to authenticate your iPhone to your TV over mutual TLS. It is never uploaded anywhere.",
            "**A list of paired TVs** — for each TV, its name (as advertised over Bonjour), its local IP address, and a fingerprint of its TLS certificate. Stored in Application Support / UserDefaults.",
            "**Your in-app preferences** — haptics, sound, keep-screen-awake, language override, and favourite apps. Stored in UserDefaults.",
            "**Your In-App Purchase entitlement** — whether you have purchased Remoto Pro. Queried directly from Apple's StoreKit; we do not receive it.",
          ],
          outro: [
            "If you use iCloud Backup, this data may be backed up to your iCloud account per your iOS backup settings. Apple, not us, handles the encryption and storage of that backup.",
          ],
        },
        {
          heading: "How the remote-control feature works",
          body: [
            "When you send a button press, keyboard input, or app-launch command from the App:",
          ],
          bullets: [
            "The command is sent directly from your iPhone to your TV over your local Wi-Fi network.",
            "The connection uses TLS 1.2+ with mutual authentication — your iPhone's client certificate and your TV's server certificate.",
            "The command never leaves your local network. It does not pass through any server operated by us or by any third party.",
          ],
          outro: [
            "Discovery of TVs uses Bonjour / mDNS, a local-network protocol built into iOS. This is why the App requests the Local Network permission — to see TVs advertising the _androidtvremote2._tcp service on your Wi-Fi.",
          ],
        },
        {
          heading: "Permissions the App requests",
          body: [
            "**Local Network access** — required to discover TVs on your Wi-Fi. If denied, the App cannot function.",
            "No other permissions are requested. The App does not use the microphone, camera, contacts, calendars, photos, motion sensors, HealthKit, Bluetooth, or location services.",
          ],
        },
        {
          heading: "In-App Purchases",
          body: [
            "The App offers a one-time non-consumable In-App Purchase for Remoto Pro, processed by Apple. From Apple we receive only the fact that a purchase was made under a given Apple ID (for aggregated revenue reporting) and no personally identifiable information about you. We do not maintain a user database.",
          ],
        },
        {
          heading: "Widgets & App Intents",
          body: [
            "If you use the App's Home Screen or Lock Screen widgets, or invoke its App Intents from Siri or Shortcuts:",
          ],
          bullets: [
            "Widget refreshes read the locally-stored paired-device list from a shared App Group container on your device.",
            "Sending a remote command from a widget uses the same local Wi-Fi TLS connection as the main App. No network traffic leaves your device to us.",
          ],
        },
        {
          heading: "Children",
          body: [
            "The App is safe for use by children in the sense that it collects no data and shows no ads. It is not, however, directed at children under 13, and we do not knowingly collect information from anyone.",
          ],
        },
        {
          heading: "Third parties",
          body: [
            "The App does not integrate any third-party service that would receive your data. Specifically:",
          ],
          bullets: [
            "No advertising networks.",
            "No analytics providers (no Firebase, Mixpanel, Amplitude, Google Analytics, or Meta SDK).",
            "No crash reporting beyond Apple's system-level opt-in.",
          ],
          outro: [
            "Package dependencies (SwiftProtobuf, swift-crypto, swift-certificates, swift-asn1) are open-source Swift libraries compiled into the App binary. They have no network access of their own and do not phone home.",
          ],
        },
        {
          heading: "Changes to this policy",
          body: [
            'If we ever change what data the App collects (we do not plan to), we will post an updated version of this policy with a new "Last updated" date, surface an in-app notice before the change takes effect, and never retroactively apply new data collection to actions you have already taken.',
          ],
        },
        {
          heading: "Your rights",
          body: [
            "Because we do not collect or store any personal data on our side, there is no data for us to give you, correct, or delete. All App data lives on your iPhone under your control. To fully erase it, uninstall the App; to delete iCloud-backed copies, remove the App's backup slot in Settings ▸ Apple ID ▸ iCloud ▸ Manage Storage.",
            "Under GDPR (EU/EEA), CCPA (California), UK GDPR, and similar regimes, the App does not qualify as a data controller with respect to your personal information, because none is collected.",
          ],
        },
      ],
    },
    terms: {
      contactName: "Pantazi Eduard Marius Robert",
      contactEmail: "eduard.pantazi@gmail.com",
      sections: [
        {
          heading: "Agreement",
          body: [
            'By downloading, installing, or using Remoto (the "App"), you agree to these Terms of Use. If you do not agree, do not use the App. The App is published by Pantazi Eduard Marius Robert ("we", "us", "our").',
            "These Terms apply in addition to Apple's standard [End User License Agreement (EULA)](https://www.apple.com/legal/internet-services/itunes/dev/stdeula/), which governs your download of the App from the App Store.",
          ],
        },
        {
          heading: "What the App does",
          body: [
            "Remoto is a software remote control that runs on your iPhone and communicates directly over your local Wi-Fi network with third-party TV devices that implement the Android TV Remote v2 protocol (including devices sold under the Xiaomi Mi Box, Google Chromecast with Google TV, Nvidia Shield, TCL, Hisense, Philips, and Sony brands).",
            "The App is a client-only tool. It does not modify, jailbreak, root, or otherwise alter your TV. It sends standard commands that your TV is designed to accept.",
          ],
        },
        {
          heading: "Not affiliated",
          body: [
            'Remoto is **not affiliated with, endorsed by, sponsored by, or approved by** Google LLC, Xiaomi Corporation, Nvidia Corporation, TCL Corporation, Hisense Group, Koninklijke Philips N.V., Sony Group Corporation, or any manufacturer of a compatible device. "Android TV" and "Google TV" are trademarks of Google LLC. Other trademarks are the property of their respective owners. Their use is for compatibility identification only, in a manner permitted by nominative fair use.',
          ],
        },
        {
          heading: "License",
          body: [
            "Subject to your compliance with these Terms, we grant you a limited, personal, non-transferable, non-exclusive, revocable license to install and use the App on Apple-branded devices you own or control, for your personal, non-commercial use.",
            "You **may not**:",
          ],
          bullets: [
            "Reverse engineer, decompile, disassemble, or attempt to derive source code from the App, except to the limited extent that applicable law expressly permits it despite this restriction.",
            "Copy, modify, translate, or create derivative works of the App.",
            "Sell, rent, lease, sublicense, distribute, or transfer the App or your license to it.",
            "Remove or alter any copyright, trademark, or other proprietary notices.",
            "Use the App to build a competing product.",
            "Use the App in a way that violates applicable law or the rights of any third party.",
          ],
        },
        {
          heading: "In-App Purchases",
          body: [
            'The App offers a one-time non-consumable In-App Purchase, "Remoto Pro" ("Pro Unlock"), which unlocks additional features described in the App and on this site.',
          ],
          bullets: [
            "**All purchases are handled by Apple** under the standard EULA and the Apple Media Services Terms. We do not collect payment information.",
            '**Restoration** — because the Pro Unlock is non-consumable, you can restore it for free on any device signed into the same Apple ID, using "Restore Purchases" in Settings.',
            "**Refunds** are issued at Apple's discretion, not ours. To request one, use Apple's [Report a Problem](https://reportaproblem.apple.com) page. Where non-waivable statutory rights apply, you retain those rights against the seller of record (Apple).",
            "**Price changes** — pricing may change over time. Any change applies only to new purchases; existing Pro owners keep their unlock for the lifetime of the App.",
            "**No subscriptions** — the Pro Unlock is a one-time purchase, not a recurring subscription. No amount is charged on a recurring basis.",
          ],
        },
        {
          heading: "Ownership",
          body: [
            "The App, including its code, design, name, logo, and all associated intellectual property, is and remains the property of Pantazi Eduard Marius Robert. These Terms do not transfer any ownership to you.",
            "The App incorporates open-source components, each governed by its own license. Notices are included in the App and available on request.",
          ],
        },
        {
          heading: "Local network & compatibility",
          body: [
            "The App requires an iPhone running iOS 16.0 or later, a Wi-Fi network that both your iPhone and your TV are connected to, and a TV device that advertises the _androidtvremote2._tcp mDNS service and accepts pairing.",
            "We do not guarantee that the App will work with every device that meets the above criteria. Manufacturer-specific firmware, network configurations (isolated guest Wi-Fi, Access Point Isolation, strict firewalls, VPN split-tunneling), or regional variants may prevent discovery or pairing. **Please test the free tier before purchasing Pro.**",
          ],
        },
        {
          heading: "Local Network permission",
          body: [
            "The App requires iOS Local Network permission to discover TVs. If you deny this permission, the App will not function. You can change it at any time in Settings ▸ Privacy & Security ▸ Local Network.",
          ],
        },
        {
          heading: "Disclaimer of warranties",
          body: [
            '**The App is provided "AS IS" and "AS AVAILABLE", without warranty of any kind**, express or implied, including but not limited to the implied warranties of merchantability, fitness for a particular purpose, non-infringement, or uninterrupted availability. We do not warrant that:',
          ],
          bullets: [
            "The App will meet your requirements.",
            "The App will operate error-free, uninterrupted, or free from security vulnerabilities.",
            "Defects will be corrected.",
          ],
          outro: [
            "Some jurisdictions do not allow the exclusion of certain warranties, in which case the above exclusions apply only to the extent permitted by law.",
          ],
        },
        {
          heading: "Limitation of liability",
          body: [
            "To the maximum extent permitted by applicable law, in no event shall Pantazi Eduard Marius Robert, its owners, employees, or contractors be liable for any indirect, incidental, special, consequential, exemplary, or punitive damages, or for any loss of profits, revenue, data, goodwill, or business opportunity, arising out of or in connection with your use of, or inability to use, the App — even if we have been advised of the possibility of such damages.",
            "Our total aggregate liability for any claim arising out of or relating to the App shall not exceed the amount you paid us for the App in the twelve (12) months preceding the event giving rise to the claim, or **five (5) US dollars**, whichever is greater.",
            "Nothing in these Terms excludes or limits liability for (a) death or personal injury caused by our negligence; (b) fraud or fraudulent misrepresentation; or (c) any other liability that cannot be excluded or limited under applicable law.",
          ],
        },
        {
          heading: "Indemnification",
          body: [
            "You agree to indemnify and hold harmless Pantazi Eduard Marius Robert from and against any claims, damages, liabilities, costs, and expenses (including reasonable legal fees) arising from your misuse of the App, your violation of these Terms, or your violation of any law or third-party right.",
          ],
        },
        {
          heading: "Termination",
          body: [
            "These Terms remain in effect until terminated. Your license to use the App terminates automatically if you breach any of these Terms. Upon termination, you must uninstall the App. The License restrictions, Ownership, Disclaimer, Limitation of liability, Indemnification, Governing law, and Miscellaneous sections survive termination.",
            "We may discontinue the App or any of its features at any time. If the App is permanently discontinued and you have an active Pro Unlock, contact us to discuss reasonable options.",
          ],
        },
        {
          heading: "Governing law & disputes",
          body: [
            "These Terms are governed by the laws of Romania, without regard to its conflict-of-laws rules. Subject to any non-waivable statutory consumer rights available to you in your country of residence, the courts of Bucharest, Romania shall have exclusive jurisdiction over any dispute arising out of or relating to these Terms or the App.",
            "If you are a consumer resident in the European Union, you retain the right to bring proceedings in the courts of your country of residence and to rely on mandatory consumer-protection provisions of your local law.",
          ],
        },
        {
          heading: "Apple-specific terms",
          body: ["You acknowledge that:"],
          bullets: [
            "These Terms are between you and Pantazi Eduard Marius Robert only, not with Apple.",
            "**We, not Apple, are solely responsible** for the App and its content.",
            "Apple has no obligation to provide maintenance or support for the App.",
            "In the event of any failure of the App to conform to any applicable warranty, you may notify Apple, and Apple will refund the purchase price of the App (if any) to you. To the maximum extent permitted by applicable law, Apple has no other warranty obligation with respect to the App.",
            "We, not Apple, are responsible for addressing any claims relating to the App, including product-liability claims and claims that the App fails to conform to legal or regulatory requirements.",
            "We, not Apple, are responsible for the investigation, defense, settlement, and discharge of any third-party intellectual-property infringement claim relating to the App.",
            "Apple and its subsidiaries are third-party beneficiaries of these Terms and may enforce them against you.",
          ],
        },
        {
          heading: "Miscellaneous",
          body: [
            "**Entire agreement** — these Terms, together with our Privacy Policy and Apple's standard EULA, constitute the entire agreement between you and us regarding the App.",
          ],
          bullets: [
            "**Severability** — if any provision is held unenforceable, the remaining provisions remain in full force.",
            "**No waiver** — our failure to enforce any provision is not a waiver of that provision.",
            "**Assignment** — you may not assign these Terms. We may assign them in connection with a merger, acquisition, or sale of assets.",
            "**Changes** — we may update these Terms from time to time. Material changes will be communicated in-app or via the App Store update notes.",
          ],
        },
      ],
    },
  },
};
