# Security Policy

## Supported Versions

We actively maintain security updates for the following versions:

| Version | Status            |
|--------|-------------------|
| 1.x.x  | 🟢 Active Support  |
| 0.x.x  | 🟡 Security Fixes Only |
| < 0.x  | 🔴 Not Supported   |

If you are using an unsupported version, we strongly recommend upgrading to the latest release.

---

## Reporting a Vulnerability

If you discover a security vulnerability, **please do not open a public issue**.

Instead, report it privately so we can address it responsibly:

**Email:** `security@mybrandname.com` *(replace with your preferred email if needed)*

When reporting, please include:

- A clear and concise description of the vulnerability.
- Steps to reproduce the issue.
- Any relevant logs, screenshots, or proof-of-concept code.
- The impact or potential risk of the vulnerability.

We will acknowledge your report within **48 hours** and provide updates as we work on a fix.

---

## Security Best Practices for Contributors

To help keep the project secure while contributing:

- Never commit `.env` files or private API keys.
- Avoid logging sensitive user data (passwords, tokens, payment info).
- Validate and sanitize all user input before processing.
- Use HTTPS for all network requests in production.
- Follow principle of least privilege when configuring Supabase & API keys.

---

## Responsible Disclosure

We deeply appreciate researchers and contributors who help strengthen platform security.

Please do:

✔ Report vulnerabilities privately  
✔ Allow maintainers time to fix the problem  
✔ Avoid deliberately exploiting the vulnerability  

Please do not:

✘ Publicly disclose the vulnerability before a fix is released  
✘ Use the vulnerability to access private user data  
✘ Perform stress tests, DDoS attempts, or destructive attacks  

---

## Thank You 💙

Your efforts help keep **MyBrandName** safe, reliable, and trusted by our users.

We appreciate your commitment to security.
