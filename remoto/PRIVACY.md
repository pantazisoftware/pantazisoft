# Privacy Policy — Remoto

> **Placeholders to replace before publishing:**
> `{{PUBLISHER_LEGAL_NAME}}` · `{{PUBLISHER_ADDRESS}}` · `{{SUPPORT_EMAIL}}` · `{{EFFECTIVE_DATE}}` · `{{APP_NAME}}` (currently *Remoto*)

**Effective date:** {{EFFECTIVE_DATE}}
**Last updated:** {{EFFECTIVE_DATE}}

---

## Overview

{{APP_NAME}} ("we", "us", the "App") is a local-only remote control for Android TV and Google TV devices. This is the shortest privacy policy you will read this year, because we do not collect, transmit, or store any personal data on any server we control.

We do not have servers.

---

## 1. What we collect

**Nothing.**

The App does not collect, transmit, or share any personally identifiable information, usage analytics, crash reports (beyond Apple's built-in opt-in system-level crash reporting, which is anonymized and sent to Apple, not to us), advertising identifiers, location data, contacts, photos, microphone data, or any other information about you or your device.

The App does not contain any third-party analytics SDK, advertising SDK, crash reporting SDK, or tracking library.

Our App Store Privacy Nutrition Label lists "Data Not Collected". This policy is the underlying commitment.

---

## 2. What is stored on your device

The App stores the following data **locally on your iPhone only**, never leaving the device except as noted:

- **A self-signed client certificate.** Generated on first launch and stored in the iOS Keychain. Used to authenticate your iPhone to your TV over mutual TLS. This certificate is never uploaded anywhere.
- **A list of paired TVs.** For each TV: its name (as advertised by the TV itself over Bonjour), its local IP address, and a fingerprint of its TLS certificate. Stored in Application Support / UserDefaults.
- **Your in-app preferences.** Haptic feedback on/off, sound on/off, keep-screen-awake on/off, preferred language override, favorite apps. Stored in UserDefaults.
- **Your In-App Purchase entitlement.** Whether you have purchased "Remoto Pro". This is queried directly from Apple's StoreKit — we do not receive it.

If you use iCloud Backup, this data may be backed up to your iCloud account per your iOS backup settings. Apple, not us, handles the encryption and storage of that backup.

---

## 3. How the remote-control feature works

When you send a button press, keyboard input, or app-launch command from the App:

- The command is sent **directly** from your iPhone to your TV over your local Wi-Fi network.
- The connection uses TLS 1.2+ with mutual authentication (your iPhone's client certificate and your TV's server certificate).
- The command never leaves your local network. It does not pass through any server operated by us or by any third party.

Discovery of TVs uses **Bonjour / mDNS**, a local-network protocol built into iOS. This is why the App requires the "Local Network" permission — to see TVs advertising the `_androidtvremote2._tcp` service on your Wi-Fi.

---

## 4. Permissions the App requests

- **Local Network access** (`NSLocalNetworkUsageDescription`). Required to discover TVs on your Wi-Fi. If denied, the App cannot function.

No other permissions are requested. The App does not use the microphone, camera, contacts, calendars, photos, motion sensors, HealthKit, Bluetooth, or location services.

---

## 5. In-App Purchases

The App offers a one-time non-consumable In-App Purchase for "Remoto Pro". This purchase is processed by Apple. We receive from Apple:

- The fact that a purchase was made under a given Apple ID (for revenue reporting only, aggregated by Apple in App Store Connect).
- No personally identifiable information about you.

We do not maintain a user database.

---

## 6. Widgets & App Intents

If you use the App's Home Screen or Lock Screen widgets, or invoke its App Intents from Siri or Shortcuts:

- Widget refreshes read the locally-stored paired-device list from a shared App Group container on your device.
- Sending a remote command from a widget uses the same local Wi-Fi TLS connection as the main App. No network traffic leaves your device to us.

---

## 7. Children

The App is safe for use by children in the sense that it collects no data and shows no ads. It is not, however, directed at children under 13, and we do not knowingly collect information from anyone.

---

## 8. Third parties

The App does not integrate any third-party service that would receive your data. Specifically:

- **No advertising networks.**
- **No analytics providers** (no Firebase, no Mixpanel, no Amplitude, no Google Analytics, no Meta SDK).
- **No crash reporting** beyond Apple's system-level opt-in.

Package dependencies used in the App (SwiftProtobuf, swift-crypto, swift-certificates, swift-asn1) are open-source Swift libraries compiled into the App binary. They do not have network access of their own and do not phone home.

---

## 9. Changes to this policy

If we ever change what data the App collects (we don't plan to, but if a future feature requires it), we will:

1. Post an updated version of this policy with a new "Last updated" date.
2. Surface an in-app notice before the change takes effect.
3. Never retroactively apply new data collection to actions you have already taken.

---

## 10. Your rights

Because we do not collect or store any personal data on our side, there is no data for us to give you, correct, or delete. All App data lives on your iPhone under your control. To fully erase it: uninstall the App. To delete iCloud-backed copies: remove the App's backup slot from Settings ▸ Apple ID ▸ iCloud ▸ Manage Storage.

Under GDPR (EU/EEA), CCPA (California), UK GDPR, and similar regimes, the App does not qualify as a data controller with respect to your personal information because none is collected.

---

## 11. Contact

Questions about this policy? Email **{{SUPPORT_EMAIL}}**.

Publisher: {{PUBLISHER_LEGAL_NAME}}
Address: {{PUBLISHER_ADDRESS}}
