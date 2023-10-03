# nextra-logo

Render variations of your logos in dark and light mode for the [Nextra](https://nextra.site/) framework.

## Usage

I'm not sure if this package works in conventional React applications, as it was built with the Nextra framework in focus, alone. Since the component uses some properties of [`matchMedia()`](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia) Web API extended from the `next-themes` package by default.

But, please feel free to use it and give your [feedback](https://github.com/kaf-lamed-beyt/nextra-logo/issues). I'd be so delighted to learn about what needs to be improved as the package grows

Install the package from the [NPM](https://www.npmjs.com/package/nextra-logo) registry.

```bash
yarn add nextra-logo@latest
```

Proceed to import the package in your doc site's config file

```jsx
// theme.config.tsx
import { DocsThemeConfig, useConfig } from "nextra-theme-docs";
import { Logo } from "nextra-logo";

const config: DocsThemeConfig = {
  project: {
    link: "link-to-your-project.com",
  },
  docsRepositoryBase: "link-to-your-repo.com",
  logo: <Logo />,
};

export default config;
```

The component receives these three props: `light`, `dark` that accept the patsh to where your logos are kept, and the `size` that determines how big you want your logo to be.

Ideally, you would place your images in the `public/` folder when you're using Next.js, and since Nextra is mostly Next.js, I'd recommend you place your images that folder.

Then you can go ahead to use the component like so: 🔽

```tsx
const config: DocsThemeConfig = {
  logo: (
    <Logo dark="/logo/dark-logo.png" light="/logo/light-logo.png" size="40" />
  ),
};
```

## Optional props

Say you have a logo that does not show your brand name, with `nextra-logo`, you can provide a value to the `logoText` prop and customize it however you wish with the `textSize` and `textWeight` props, for the size and weight of your brand text, respectively.

```tsx
import { Logo } from "nextra-logo";

<Logo
  logoText="name"
  dark="/logo/gs-dark.svg"
  light="/logo/gs-light.svg"
  size="50"
  textWeight="700"
  textSize="20"
/>;
```

The snippet above assumes that you've placed your logos in a sub-directory &mdash; `logo` &mdash; in the public folder.

You can learn more about Nextra, [here](https://nextra.site/docs/docs-theme/start)

## Contributing

Checkout the [contributing guide](CONTRIBUTING.md)
