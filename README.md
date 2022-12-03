## Bug report

### Verify canary release

- [X] I verified that the issue exists in the latest Next.js canary release

### Provide environment information

    Operating System:
      Platform: win32
      Arch: x64
      Version: Windows 10 Pro
    Binaries:
      Node: 16.17.1
      npm: N/A
      Yarn: N/A
      pnpm: N/A
    Relevant packages:
      next: 13.0.7-canary.0
      eslint-config-next: 13.0.7-canary.0
      react: 18.2.0
      react-dom: 18.2.0

### Which area(s) of Next.js are affected? (leave empty if unsure)

App directory (appDir: true), Routing (next/router, next/navigation, next/link)

### Link to reproduction - Issues with a link to complete (but minimal) reproduction code will be addressed faster

https://github.com/schimi-dev/router-refresh-bug-report

### To Reproduce

1. Do a hard reload in the browser on http://localhost:3000 (Homepage).
2. Navigate via Next Link or `router.push` (one of the red controls) to the details page. 
3. Change the name and submit the form.

A successful form submit sets a success state via `useState` hook, that leads to a box underneath the form becoming green instead of grey. After `router.refresh` completes, that state is lost and the box becomes grey again. In subsequent form submits this does no longer occurr and the box remains green.

If the details page was entered either via a hard reload in the browser, or via `router.push` and `router.refresh` wrapped in `startTransition`, this problem does not occur. This can be tested with the green control on http://localhost:3000.

The problem can be reproduced in development when started via `next dev` and in production when the built app is started via `next start`.

### Describe the Bug

When calling `router.refresh` on a page that was visited via soft navigation (Next.js Link or `router.push`), the state that was set on that page is lost after `router.refresh` is completed. 

### Expected Behavior

No state should be lost after calling `router.refresh` regardless of how the page calling `router.refresh` was visited. In the example provided the box should remain green after `router.refresh` completes.

### Which browser are you using? (if relevant)

Chrome 108.0.5359.71

### How are you deploying your application? (if relevant)

Reproducible with `next dev` and `next start`