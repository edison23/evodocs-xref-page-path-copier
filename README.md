# Evolveum Docs xref Page Path Copier

This is a very simple Firefox extension you can use to copy an Evolveum Docs URL when creating a link using `xref`.

The extension 

- copies the URL of the current page without the base domain,
- ensures the  copied path starts with `/` (is absolute),
- removes the URL segment with midPoint version (e.g., `support-4.9` or `master`), and
- retains all other segments in the URL (such as a fragment identifier, `#some-heading`).

For example, when you visit these URLs:

- `http://localhost:4000/midpoint/methodology/first-steps/connect/#reconcile-your-ldap-accounts`
- `https://docs.evolveum.com/midpoint/reference/support-4.9/correlation/correlation-cases/`

and use the extension on them, you'll have these paths in your clipboard:

- `/midpoint/methodology/first-steps/connect/#reconcile-your-ldap-accounts`
- `/midpoint/reference/correlation/correlation-cases/`

## Install the Extension

1. Download the [extension XPI file](./evodocs-xref-page-path-copier_26c3c576a5ab4c008ade-1.0.xpi).
1. Firefox may prompt you to install the extension right away without giving you the option to actually save it to your disk. In such a case, you can skip the next two steps and just grant the permission.
1. Go to Firefox Add-ons Manager (`Ctrl+Shift+A`).
1. Click the cogwheel button at the top-right and select Install Add-on From File.
1. Select the downloaded XPI file and confirm granting the URL access permission.

## Keyboard binding

The extension automatically binds `Ctrl+Shift+U` to copy the path of the current tab. You can freely rebind this as you wish:
go to the Add-ons Manager, click the cogwheel button in the top-right, and select Manage Extension Shortcuts.

