# Remoto — The ad-free remote for Android TV

> **Placeholders to replace before publishing:**
> `{{APP_STORE_URL}}` · `{{SUPPORT_EMAIL}}` · `{{APP_NAME}}` (currently *Remoto*)

---

## Hero

**Headline:** Your TV remote, without the ads.

**Sub-headline:** A fast, native iPhone remote for Android TV, Google TV, Mi Box, Chromecast, and Nvidia Shield. No sign-in. No tracking. Never an ad.

**Primary CTA:** [Download on the App Store]({{APP_STORE_URL}})

**Secondary CTA:** See what's inside ↓

---

## Why Remoto

Every other TV-remote app on the App Store is drowning in banners, interstitials, and "watch a video to unlock" prompts. Yours shouldn't be.

Remoto is a clean, native iOS remote that pairs with your Android TV / Google TV device in under 30 seconds and stays out of your way. It replaces the plastic remote you lost between the couch cushions — nothing more.

---

## Features

### Free, forever

- **Instant discovery.** Finds every Android TV / Google TV device on your Wi-Fi automatically.
- **Full remote control.** D-pad, OK, Back, Home, Menu, Assistant.
- **Volume + power.** Real hardware buttons, mirrored in the app.
- **Media transport.** Play, pause, rewind, fast-forward.
- **Channel navigation.** Up, down, and Guide for live TV.
- **Haptic feedback.** Every press feels like a real button.
- **Localized.** English, Deutsch, Español, Italiano, Română, Русский, 简体中文, 日本語 — pick a language override in Settings.
- **One paired device.**

### Remoto Pro — one-time unlock

- **Touchpad mode.** Swipe to navigate. Perfect for smart TVs with cursor-driven UI.
- **iOS keyboard.** Type on your TV without hunting for letters on the D-pad.
- **Apps grid + favourites.** Launch YouTube, Netflix, Prime Video, Disney+, Spotify, Twitch, and more with one tap. Pin your favourites right above the D-pad.
- **Unlimited paired devices.** Living room, bedroom, kitchen, office. Switch between them from the top of the remote.
- **Home Screen & Lock Screen widgets.** Fire play/pause, volume, and channel from a locked phone.
- **Hey Siri support.** Say "make the TV louder", "mute the TV", "confirm on the TV" (great for skipping ads). A one-time 30-second setup lets you drop the app name from phrases.
- **Multi-TV smart targeting.** Pick a **Target TV** in Settings — Siri and widgets both send commands to the TV you're actually watching.
- **Priority support.**

**Pricing:** €5.99, one time. No subscription. No auto-renewal. You buy it once, you own it.

---

## Supported devices

Remoto works with any device that runs the Android TV Remote v2 protocol, including:

- Xiaomi Mi Box S / Mi TV Stick / Mi TV
- Google Chromecast with Google TV
- Nvidia Shield TV / Shield TV Pro
- TCL, Hisense, Philips, and Sony smart TVs running Android TV / Google TV
- Generic certified Android TV boxes (H96 with Google Play, X96 with Google Play, etc.)

Requires: iPhone on iOS 16 or later, same Wi-Fi as your TV.

---

## Privacy, without asterisks

- **No analytics SDKs.** We don't collect telemetry, screen views, or session data.
- **No account.** No email, no password, no cloud sync.
- **No tracking.** Nothing leaves your phone except the encrypted remote commands sent directly to your TV.
- **App Store Privacy Nutrition Label:** "Data Not Collected".

Read the full [Privacy Policy](./PRIVACY.md).

---

## How it works

1. **Open the app.** Remoto scans your Wi-Fi for compatible TVs using Apple's Bonjour service discovery — no permissions beyond Local Network access.
2. **Pair.** Your TV shows a 6-digit code. Type it once. Remoto generates a private client certificate on your iPhone (stored in the Keychain) and pairs over mutual TLS.
3. **Control.** Every button press flows over an encrypted TLS channel directly from your iPhone to your TV. Nothing routes through our servers, because we don't have any.

---

## Voice control (Pro)

Turn on the TV, drop the phone, keep talking:

- *"Hey Siri, make the TV louder."*
- *"Hey Siri, mute the TV."*
- *"Hey Siri, pause the TV."*
- *"Hey Siri, confirm on the TV."* — skip pre-roll ads without leaving the couch.

Because Apple requires the app name in default Siri phrases, Remoto ships a **Set up Siri** tutorial in Settings that walks you through recording your own phrases in the Shortcuts app — 30 seconds, done forever, syncs via iCloud to every Apple device you own.

**Multiple TVs?** Pick a Target TV in Settings ▸ Voice control. Siri and every widget button honour that choice. Change it whenever you switch rooms.

---

## FAQ

**Does it work with Apple TV?**
No. Apple TV uses a different (proprietary) protocol. This app is for Android TV / Google TV / Mi Box only.

**Does it work with Samsung / LG / Roku / Fire TV?**
No. Those manufacturers use different protocols. We considered supporting them but chose to ship one thing that works perfectly rather than four that work sort of.

**Do I need to be on the same Wi-Fi as my TV?**
Yes. Remoto talks to your TV directly on the local network. No cellular / no VPN.

**Does it work over the internet / away from home?**
No. Local-only, by design. Your TV isn't reachable from the internet, and we're not going to build a relay server that routes your commands through the cloud.

**Do I need a Google or Xiaomi account?**
No. We don't touch any manufacturer accounts. Discovery and pairing are handled entirely by the Android TV Remote protocol built into your device.

**Will Pro become a subscription later?**
No plans to. If we ever add ongoing services that cost us money to run, they'd be a separate optional add-on — the current Pro unlock stays a lifetime purchase for anyone who bought it.

**What happens if I lose my iPhone?**
Restore from an iCloud backup and open the app — your Pro unlock restores from the App Store, and re-pairing your TV takes about 20 seconds.

**Do you support Apple Watch?**
Coming in a future update. Home Screen & Lock Screen widgets and Hey Siri support already ship.

**Which TV does Siri talk to when I have several paired?**
Whichever one you set as **Target TV** in Settings ▸ Voice control. Widgets follow the same setting, so a play/pause tap on the Lock Screen always hits the TV you're actually watching. When you have one TV, this is invisible; when you have several, it's one tap to switch.

**Why do I have to say "with Remoto" for Siri?**
Because iOS requires app-name disambiguation for default phrases — otherwise Siri would grab common phrases like "volume down" for its own system controls. We built a **Set up Siri** tutorial that helps you record personal phrases (e.g. "make the TV louder") that skip the app-name requirement.

---

## What people should say (testimonial slots)

> "Finally, a TV remote app that doesn't try to sell me a car insurance quote every time I open it." — **placeholder**

> "Bought it in five seconds. Best €6 I've spent on the App Store." — **placeholder**

> "Setup was faster than pairing a Bluetooth speaker." — **placeholder**

---

## Footer

- [Privacy Policy](./PRIVACY.md)
- [Terms of Use](./TERMS.md)
- [Support]({{SUPPORT_EMAIL}})
- Made with love in Romania.

© {{YEAR}} {{APP_NAME}}. Android TV and Google TV are trademarks of Google LLC. This app is not affiliated with, endorsed by, or sponsored by Google, Xiaomi, Nvidia, TCL, Hisense, Philips, or Sony.
